use std::error::Error;
use std::fs;
use std::path::Path;

use futures_util::try_stream::TryStreamExt;
use hyper::{
    service::{make_service_fn, service_fn},
    Body, Client, Response, Server,
};
use hyperlocal::{UnixConnector, UnixServerExt, Uri};

#[tokio::test]
async fn test_server_client() -> Result<(), Box<dyn Error + Send + Sync>> {
    let path = Path::new("/tmp/hyperlocal.sock");

    if path.exists() {
        fs::remove_file(path)?;
    }

    let make_service = make_service_fn(|_| {
        async {
            Ok::<_, hyper::Error>(service_fn(|_req| {
                async { Ok::<_, hyper::Error>(Response::new(Body::from("It works!"))) }
            }))
        }
    });

    let (tx, rx) = tokio::sync::oneshot::channel::<()>();

    let server = Server::bind_unix("/tmp/hyperlocal.sock")?
        .serve(make_service)
        .with_graceful_shutdown(async { rx.await.unwrap() });

    let client = Client::builder().build::<_, Body>(UnixConnector::default());

    let url = Uri::new(path, "/").into();
    let request = client.get(url);

    tokio::spawn(async { server.await.unwrap() });

    let response = request.await?;
    let bytes = response.into_body().try_concat().await?.to_vec();
    let string = String::from_utf8(bytes)?;

    tx.send(()).unwrap();

    assert_eq!(string, "It works!");

    Ok(())
}

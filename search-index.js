var N=null,E="",T="t",U="u",searchIndex={};
var R=["hyperlocal","server","result","handle","local_addr","socketaddr","hyperlocal::client","try_from","borrow","type_id","borrow_mut","try_into","hyperlocal::server","typeid","into_future","to_owned","clone_into","hyperhttp","ConnectFuture","UnixConnector","Incoming","Connecting"];

searchIndex[R[0]]={"doc":"hyperlocal provides hyper client and server bindings for…","i":[[3,"Uri",R[0],"A type which implements `Into` for hyper's `hyper::Uri`…",N,N],[0,"client",E,"Hyper client bindings for unix domain sockets",N,N],[3,R[19],R[6],"A type which implements hyper's client connector interface…",N,N],[4,R[18],E,E,N,N],[13,"Start",E,E,0,N],[13,"Connect",E,E,0,N],[11,"new",E,E,1,[[],["self"]]],[0,R[1],R[0],"Hyper server bindings for unix domain sockets",N,N],[3,"Server",R[12],"An instance of a unix domain socket server created through…",N,N],[3,"Serve",E,"A stream mapping incoming connections to new services.",N,N],[3,R[21],E,"A future building a new `Service` to a `Connection`.",N,N],[3,"Http",E,"A lower-level method of creating a unix domain socket…",N,N],[3,R[20],E,"A stream of unix domain socket connections.",N,N],[11,"bind",E,"Binds a new server instance to a unix domain socket path.",2,[[["p"],["s"]],[R[2],[R[1]]]]],[11,R[4],E,"Return the local address of the underlying socket that…",2,[[["self"]],[R[5]]]],[11,"run",E,"Start a new tokio runtime, and drive this server on it.",2,[[["self"]],[R[2]]]],[11,"new",E,"Creates a new instance of the HTTP protocol, ready to…",3,[[],["self"]]],[11,"from_hyper",E,"Creates a new instance of the HTTP protocol using the…",3,[[[R[17]]],["self"]]],[11,"serve_path",E,"Bind the provided `path` with the default `Handle` and…",3,[[["self"],["p"],["s"]],[R[2],["serve"]]]],[11,"serve_path_handle",E,"Bind the provided `path` with the `Handle` and return…",3,[[["self"],["p"],[R[3]],["s"]],[R[2],["serve"]]]],[11,"serve_incoming",E,"Bind the provided stream of incoming `UnixStream` objects…",3,[[["self"],["incoming"],["s"]],["serve"]]],[11,"new",E,"Bind a listener to the provided `path` with the provided…",4,[[["p"],["option",[R[3]]]],[R[2]]]],[11,"from_std",E,"Wrap the provided already-bound listener in a `tokio_uds`…",4,[[["stdunixlistener"],[R[3]]],[R[2]]]],[11,R[4],E,"Get the local address bound to this listener.",4,[[["self"]],[R[5]]]],[11,"new",R[0],"Productes a new `Uri` from path to domain socket and…",5,[[["p"],["str"]],["self"]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[7],E,E,5,[[[U]],[R[2]]]],[11,R[8],E,E,5,[[["self"]],[T]]],[11,R[9],E,E,5,[[["self"]],[R[13]]]],[11,R[10],E,E,5,[[["self"]],[T]]],[11,R[11],E,E,5,[[["self"]],[R[2]]]],[11,"from",R[6],E,1,[[[T]],[T]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,R[15],E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,N],[11,R[7],E,E,1,[[[U]],[R[2]]]],[11,R[8],E,E,1,[[["self"]],[T]]],[11,R[9],E,E,1,[[["self"]],[R[13]]]],[11,R[10],E,E,1,[[["self"]],[T]]],[11,R[11],E,E,1,[[["self"]],[R[2]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,R[7],E,E,0,[[[U]],[R[2]]]],[11,R[8],E,E,0,[[["self"]],[T]]],[11,R[9],E,E,0,[[["self"]],[R[13]]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[["self"]],[R[2]]]],[11,R[14],E,E,0,[[["self"]],["f"]]],[11,"from",R[12],E,2,[[[T]],[T]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,R[7],E,E,2,[[[U]],[R[2]]]],[11,R[8],E,E,2,[[["self"]],[T]]],[11,R[9],E,E,2,[[["self"]],[R[13]]]],[11,R[10],E,E,2,[[["self"]],[T]]],[11,R[11],E,E,2,[[["self"]],[R[2]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[["self"]],[U]]],[11,R[7],E,E,6,[[[U]],[R[2]]]],[11,R[8],E,E,6,[[["self"]],[T]]],[11,R[9],E,E,6,[[["self"]],[R[13]]]],[11,R[10],E,E,6,[[["self"]],[T]]],[11,R[11],E,E,6,[[["self"]],[R[2]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[["self"]],[U]]],[11,R[7],E,E,7,[[[U]],[R[2]]]],[11,R[8],E,E,7,[[["self"]],[T]]],[11,R[9],E,E,7,[[["self"]],[R[13]]]],[11,R[10],E,E,7,[[["self"]],[T]]],[11,R[11],E,E,7,[[["self"]],[R[2]]]],[11,R[14],E,E,7,[[["self"]],["f"]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,R[15],E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,N],[11,R[7],E,E,3,[[[U]],[R[2]]]],[11,R[8],E,E,3,[[["self"]],[T]]],[11,R[9],E,E,3,[[["self"]],[R[13]]]],[11,R[10],E,E,3,[[["self"]],[T]]],[11,R[11],E,E,3,[[["self"]],[R[2]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[7],E,E,4,[[[U]],[R[2]]]],[11,R[8],E,E,4,[[["self"]],[T]]],[11,R[9],E,E,4,[[["self"]],[R[13]]]],[11,R[10],E,E,4,[[["self"]],[T]]],[11,R[11],E,E,4,[[["self"]],[R[2]]]],[11,"clone",R[6],E,1,[[["self"]],["unixconnector"]]],[11,"clone",R[12],E,3,[[["self"]],["http"]]],[11,"from",E,E,3,[[[R[17]]],["self"]]],[11,"into",R[0],E,5,[[["self"]],["hyperuri"]]],[11,"fmt",E,E,5,[[["self"],["formatter"]],[R[2]]]],[11,"poll",R[6],E,0,[[["self"]],["poll"]]],[11,"poll",R[12],E,7,[[["self"]],["poll"]]],[11,"poll",E,E,6,[[["self"]],["poll",["option"]]]],[11,"poll",E,E,4,[[["self"]],["poll",["option"]]]],[11,"connect",R[6],E,1,N]],"p":[[4,R[18]],[3,R[19]],[3,"Server"],[3,"Http"],[3,R[20]],[3,"Uri"],[3,"Serve"],[3,R[21]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
goog.provide('shadow.xhr');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62484 = arguments.length;
var i__4737__auto___62485 = (0);
while(true){
if((i__4737__auto___62485 < len__4736__auto___62484)){
args__4742__auto__.push((arguments[i__4737__auto___62485]));

var G__62487 = (i__4737__auto___62485 + (1));
i__4737__auto___62485 = G__62487;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
}));

(shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq62270){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62270));
}));

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = ({});
var seq__62285_62500 = cljs.core.seq(options);
var chunk__62286_62501 = null;
var count__62287_62502 = (0);
var i__62288_62503 = (0);
while(true){
if((i__62288_62503 < count__62287_62502)){
var vec__62299_62504 = chunk__62286_62501.cljs$core$IIndexed$_nth$arity$2(null,i__62288_62503);
var k_62505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62299_62504,(0),null);
var v_62506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62299_62504,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_62505)] = cljs.core.clj__GT_js(v_62506));


var G__62508 = seq__62285_62500;
var G__62509 = chunk__62286_62501;
var G__62510 = count__62287_62502;
var G__62511 = (i__62288_62503 + (1));
seq__62285_62500 = G__62508;
chunk__62286_62501 = G__62509;
count__62287_62502 = G__62510;
i__62288_62503 = G__62511;
continue;
} else {
var temp__5735__auto___62513 = cljs.core.seq(seq__62285_62500);
if(temp__5735__auto___62513){
var seq__62285_62514__$1 = temp__5735__auto___62513;
if(cljs.core.chunked_seq_QMARK_(seq__62285_62514__$1)){
var c__4556__auto___62515 = cljs.core.chunk_first(seq__62285_62514__$1);
var G__62516 = cljs.core.chunk_rest(seq__62285_62514__$1);
var G__62517 = c__4556__auto___62515;
var G__62518 = cljs.core.count(c__4556__auto___62515);
var G__62519 = (0);
seq__62285_62500 = G__62516;
chunk__62286_62501 = G__62517;
count__62287_62502 = G__62518;
i__62288_62503 = G__62519;
continue;
} else {
var vec__62308_62520 = cljs.core.first(seq__62285_62514__$1);
var k_62521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62308_62520,(0),null);
var v_62522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62308_62520,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_62521)] = cljs.core.clj__GT_js(v_62522));


var G__62525 = cljs.core.next(seq__62285_62514__$1);
var G__62526 = null;
var G__62527 = (0);
var G__62528 = (0);
seq__62285_62500 = G__62525;
chunk__62286_62501 = G__62526;
count__62287_62502 = G__62527;
i__62288_62503 = G__62528;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__62314 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__62314) : transform_fn.call(null,G__62314));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
return goog.uri.utils.appendParamsFromMap(url,cljs.core.clj__GT_js(params));
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__62324 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62324,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62324,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if((!((events == null)))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__62364 = arguments.length;
switch (G__62364) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__62393){
var map__62394 = p__62393;
var map__62394__$1 = (((((!((map__62394 == null))))?(((((map__62394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62394):map__62394);
var options = map__62394__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__62404 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62404,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62404,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_(((body_QMARK_)?upload:false))){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return (function (e){
callback(e);

return cljs.core.async.close_BANG_(result_chan);
});
})());

var error_handler_62556 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_62556);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
var G__62419 = req.responseText;
var G__62420 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__62419,G__62420) : transform.call(null,G__62419,G__62420));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(shadow.xhr.request_error_QMARK_(status)){
return error_handler_62556(e);
} else {
callback(e);

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

(req.responseType = "text");

(req.withCredentials = (!(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false)));

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
}));

(shadow.xhr.chan.cljs$lang$maxFixedArity = 4);

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__62425 = arguments.length;
switch (G__62425) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method)))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null)))));
var vec__62428 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62428,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62428,(1),null);
var req = goog.labs.net.xhr.send(cljs.core.name(method),(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method))?data:false))?shadow.xhr.make_url(url,data):url),((body_QMARK_)?body:null),shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options)));
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
}));

(shadow.xhr.request.cljs$lang$maxFixedArity = 4);

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62571 = arguments.length;
var i__4737__auto___62572 = (0);
while(true){
if((i__4737__auto___62572 < len__4736__auto___62571)){
args__4742__auto__.push((arguments[i__4737__auto___62572]));

var G__62574 = (i__4737__auto___62572 + (1));
i__4737__auto___62572 = G__62574;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__62439_62575 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__62441_62576 = null;
var count__62442_62577 = (0);
var i__62443_62578 = (0);
while(true){
if((i__62443_62578 < count__62442_62577)){
var vec__62462_62579 = chunk__62441_62576.cljs$core$IIndexed$_nth$arity$2(null,i__62443_62578);
var ev_id_62580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62462_62579,(0),null);
var ev_handler_62581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62462_62579,(1),null);
var target_62582 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_62580))?(xhr["upload"]):xhr);
target_62582.addEventListener(cljs.core.name(ev_id_62580),ev_handler_62581);


var G__62583 = seq__62439_62575;
var G__62584 = chunk__62441_62576;
var G__62585 = count__62442_62577;
var G__62586 = (i__62443_62578 + (1));
seq__62439_62575 = G__62583;
chunk__62441_62576 = G__62584;
count__62442_62577 = G__62585;
i__62443_62578 = G__62586;
continue;
} else {
var temp__5735__auto___62587 = cljs.core.seq(seq__62439_62575);
if(temp__5735__auto___62587){
var seq__62439_62588__$1 = temp__5735__auto___62587;
if(cljs.core.chunked_seq_QMARK_(seq__62439_62588__$1)){
var c__4556__auto___62589 = cljs.core.chunk_first(seq__62439_62588__$1);
var G__62590 = cljs.core.chunk_rest(seq__62439_62588__$1);
var G__62591 = c__4556__auto___62589;
var G__62592 = cljs.core.count(c__4556__auto___62589);
var G__62593 = (0);
seq__62439_62575 = G__62590;
chunk__62441_62576 = G__62591;
count__62442_62577 = G__62592;
i__62443_62578 = G__62593;
continue;
} else {
var vec__62473_62594 = cljs.core.first(seq__62439_62588__$1);
var ev_id_62595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62473_62594,(0),null);
var ev_handler_62596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62473_62594,(1),null);
var target_62597 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_62595))?(xhr["upload"]):xhr);
target_62597.addEventListener(cljs.core.name(ev_id_62595),ev_handler_62596);


var G__62598 = cljs.core.next(seq__62439_62588__$1);
var G__62599 = null;
var G__62600 = (0);
var G__62601 = (0);
seq__62439_62575 = G__62598;
chunk__62441_62576 = G__62599;
count__62442_62577 = G__62600;
i__62443_62578 = G__62601;
continue;
}
} else {
}
}
break;
}

var G__62476 = xhr;
G__62476.open("PUT",url);

G__62476.send(file);

return G__62476;
}));

(shadow.xhr.upload.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.xhr.upload.cljs$lang$applyTo = (function (seq62434){
var G__62435 = cljs.core.first(seq62434);
var seq62434__$1 = cljs.core.next(seq62434);
var G__62436 = cljs.core.first(seq62434__$1);
var seq62434__$2 = cljs.core.next(seq62434__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62435,G__62436,seq62434__$2);
}));


//# sourceMappingURL=shadow.xhr.js.map

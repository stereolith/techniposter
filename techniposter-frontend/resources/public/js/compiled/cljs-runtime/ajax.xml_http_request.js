goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__41919 = e.target.readyState;
var fexpr__41918 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__41918.cljs$core$IFn$_invoke$arity$1 ? fexpr__41918.cljs$core$IFn$_invoke$arity$1(G__41919) : fexpr__41918.call(null,G__41919));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__41931,handler){
var map__41934 = p__41931;
var map__41934__$1 = (((((!((map__41934 == null))))?(((((map__41934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41934):map__41934);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41934__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41934__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41934__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41934__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41934__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41934__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41934__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__41926_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__41926_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___41961 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___41961)){
var response_type_41962 = temp__5735__auto___41961;
(this$__$1.responseType = cljs.core.name(response_type_41962));
} else {
}

var seq__41939_41963 = cljs.core.seq(headers);
var chunk__41940_41964 = null;
var count__41941_41965 = (0);
var i__41942_41966 = (0);
while(true){
if((i__41942_41966 < count__41941_41965)){
var vec__41949_41969 = chunk__41940_41964.cljs$core$IIndexed$_nth$arity$2(null,i__41942_41966);
var k_41970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41949_41969,(0),null);
var v_41971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41949_41969,(1),null);
this$__$1.setRequestHeader(k_41970,v_41971);


var G__41973 = seq__41939_41963;
var G__41974 = chunk__41940_41964;
var G__41975 = count__41941_41965;
var G__41976 = (i__41942_41966 + (1));
seq__41939_41963 = G__41973;
chunk__41940_41964 = G__41974;
count__41941_41965 = G__41975;
i__41942_41966 = G__41976;
continue;
} else {
var temp__5735__auto___41977 = cljs.core.seq(seq__41939_41963);
if(temp__5735__auto___41977){
var seq__41939_41978__$1 = temp__5735__auto___41977;
if(cljs.core.chunked_seq_QMARK_(seq__41939_41978__$1)){
var c__4556__auto___41979 = cljs.core.chunk_first(seq__41939_41978__$1);
var G__41980 = cljs.core.chunk_rest(seq__41939_41978__$1);
var G__41981 = c__4556__auto___41979;
var G__41982 = cljs.core.count(c__4556__auto___41979);
var G__41983 = (0);
seq__41939_41963 = G__41980;
chunk__41940_41964 = G__41981;
count__41941_41965 = G__41982;
i__41942_41966 = G__41983;
continue;
} else {
var vec__41952_41984 = cljs.core.first(seq__41939_41978__$1);
var k_41985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952_41984,(0),null);
var v_41986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952_41984,(1),null);
this$__$1.setRequestHeader(k_41985,v_41986);


var G__41987 = cljs.core.next(seq__41939_41978__$1);
var G__41988 = null;
var G__41989 = (0);
var G__41990 = (0);
seq__41939_41963 = G__41987;
chunk__41940_41964 = G__41988;
count__41941_41965 = G__41989;
i__41942_41966 = G__41990;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map

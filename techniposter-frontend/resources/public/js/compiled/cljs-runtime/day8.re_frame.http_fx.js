goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__42144){
var vec__42146 = p__42144;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42146,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42146,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__42154){
var map__42155 = p__42154;
var map__42155__$1 = (((((!((map__42155 == null))))?(((((map__42155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42155):map__42155);
var request = map__42155__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42155__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42155__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__42150_SHARP_){
var G__42159 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__42150_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42159) : re_frame.core.dispatch.call(null,G__42159));
}),(function (p1__42151_SHARP_){
var G__42161 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__42151_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42161) : re_frame.core.dispatch.call(null,G__42161));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__42163 = cljs.core.seq(seq_request_maps);
var chunk__42164 = null;
var count__42165 = (0);
var i__42166 = (0);
while(true){
if((i__42166 < count__42165)){
var request__$1 = chunk__42164.cljs$core$IIndexed$_nth$arity$2(null,i__42166);
var G__42171_42185 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__42171_42185) : ajax.core.ajax_request.call(null,G__42171_42185));


var G__42186 = seq__42163;
var G__42187 = chunk__42164;
var G__42188 = count__42165;
var G__42189 = (i__42166 + (1));
seq__42163 = G__42186;
chunk__42164 = G__42187;
count__42165 = G__42188;
i__42166 = G__42189;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42163);
if(temp__5735__auto__){
var seq__42163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42163__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42163__$1);
var G__42193 = cljs.core.chunk_rest(seq__42163__$1);
var G__42194 = c__4556__auto__;
var G__42195 = cljs.core.count(c__4556__auto__);
var G__42196 = (0);
seq__42163 = G__42193;
chunk__42164 = G__42194;
count__42165 = G__42195;
i__42166 = G__42196;
continue;
} else {
var request__$1 = cljs.core.first(seq__42163__$1);
var G__42175_42197 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__42175_42197) : ajax.core.ajax_request.call(null,G__42175_42197));


var G__42198 = cljs.core.next(seq__42163__$1);
var G__42199 = null;
var G__42200 = (0);
var G__42201 = (0);
seq__42163 = G__42198;
chunk__42164 = G__42199;
count__42165 = G__42200;
i__42166 = G__42201;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect));

//# sourceMappingURL=day8.re_frame.http_fx.js.map

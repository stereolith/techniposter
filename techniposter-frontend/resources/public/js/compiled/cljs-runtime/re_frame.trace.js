goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__64320){
var map__64321 = p__64320;
var map__64321__$1 = (((((!((map__64321 == null))))?(((((map__64321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64321):map__64321);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__64323_64351 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__64324_64352 = null;
var count__64325_64353 = (0);
var i__64326_64354 = (0);
while(true){
if((i__64326_64354 < count__64325_64353)){
var vec__64337_64355 = chunk__64324_64352.cljs$core$IIndexed$_nth$arity$2(null,i__64326_64354);
var k_64356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64337_64355,(0),null);
var cb_64357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64337_64355,(1),null);
try{var G__64341_64361 = cljs.core.deref(re_frame.trace.traces);
(cb_64357.cljs$core$IFn$_invoke$arity$1 ? cb_64357.cljs$core$IFn$_invoke$arity$1(G__64341_64361) : cb_64357.call(null,G__64341_64361));
}catch (e64340){var e_64362 = e64340;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64356,"while storing",cljs.core.deref(re_frame.trace.traces),e_64362], 0));
}

var G__64363 = seq__64323_64351;
var G__64364 = chunk__64324_64352;
var G__64365 = count__64325_64353;
var G__64366 = (i__64326_64354 + (1));
seq__64323_64351 = G__64363;
chunk__64324_64352 = G__64364;
count__64325_64353 = G__64365;
i__64326_64354 = G__64366;
continue;
} else {
var temp__5735__auto___64367 = cljs.core.seq(seq__64323_64351);
if(temp__5735__auto___64367){
var seq__64323_64368__$1 = temp__5735__auto___64367;
if(cljs.core.chunked_seq_QMARK_(seq__64323_64368__$1)){
var c__4556__auto___64369 = cljs.core.chunk_first(seq__64323_64368__$1);
var G__64370 = cljs.core.chunk_rest(seq__64323_64368__$1);
var G__64371 = c__4556__auto___64369;
var G__64372 = cljs.core.count(c__4556__auto___64369);
var G__64373 = (0);
seq__64323_64351 = G__64370;
chunk__64324_64352 = G__64371;
count__64325_64353 = G__64372;
i__64326_64354 = G__64373;
continue;
} else {
var vec__64342_64374 = cljs.core.first(seq__64323_64368__$1);
var k_64375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64342_64374,(0),null);
var cb_64376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64342_64374,(1),null);
try{var G__64346_64377 = cljs.core.deref(re_frame.trace.traces);
(cb_64376.cljs$core$IFn$_invoke$arity$1 ? cb_64376.cljs$core$IFn$_invoke$arity$1(G__64346_64377) : cb_64376.call(null,G__64346_64377));
}catch (e64345){var e_64378 = e64345;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64375,"while storing",cljs.core.deref(re_frame.trace.traces),e_64378], 0));
}

var G__64379 = cljs.core.next(seq__64323_64368__$1);
var G__64380 = null;
var G__64381 = (0);
var G__64382 = (0);
seq__64323_64351 = G__64379;
chunk__64324_64352 = G__64380;
count__64325_64353 = G__64381;
i__64326_64354 = G__64382;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

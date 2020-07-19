goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__64613 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__64614 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__64614);

try{try{var seq__64616 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__64617 = null;
var count__64618 = (0);
var i__64619 = (0);
while(true){
if((i__64619 < count__64618)){
var vec__64628 = chunk__64617.cljs$core$IIndexed$_nth$arity$2(null,i__64619);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64628,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64628,(1),null);
var temp__5733__auto___64693 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64693)){
var effect_fn_64694 = temp__5733__auto___64693;
(effect_fn_64694.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64694.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64694.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64695 = seq__64616;
var G__64696 = chunk__64617;
var G__64697 = count__64618;
var G__64698 = (i__64619 + (1));
seq__64616 = G__64695;
chunk__64617 = G__64696;
count__64618 = G__64697;
i__64619 = G__64698;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64616);
if(temp__5735__auto__){
var seq__64616__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64616__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64616__$1);
var G__64699 = cljs.core.chunk_rest(seq__64616__$1);
var G__64700 = c__4556__auto__;
var G__64701 = cljs.core.count(c__4556__auto__);
var G__64702 = (0);
seq__64616 = G__64699;
chunk__64617 = G__64700;
count__64618 = G__64701;
i__64619 = G__64702;
continue;
} else {
var vec__64632 = cljs.core.first(seq__64616__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64632,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64632,(1),null);
var temp__5733__auto___64705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64705)){
var effect_fn_64706 = temp__5733__auto___64705;
(effect_fn_64706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64707 = cljs.core.next(seq__64616__$1);
var G__64708 = null;
var G__64709 = (0);
var G__64710 = (0);
seq__64616 = G__64707;
chunk__64617 = G__64708;
count__64618 = G__64709;
i__64619 = G__64710;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__64300__auto___64711 = re_frame.interop.now();
var duration__64301__auto___64712 = (end__64300__auto___64711 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__64301__auto___64712,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__64300__auto___64711);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__64613);
}} else {
var seq__64636 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__64637 = null;
var count__64638 = (0);
var i__64639 = (0);
while(true){
if((i__64639 < count__64638)){
var vec__64648 = chunk__64637.cljs$core$IIndexed$_nth$arity$2(null,i__64639);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64648,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64648,(1),null);
var temp__5733__auto___64714 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64714)){
var effect_fn_64716 = temp__5733__auto___64714;
(effect_fn_64716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64716.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64717 = seq__64636;
var G__64718 = chunk__64637;
var G__64719 = count__64638;
var G__64720 = (i__64639 + (1));
seq__64636 = G__64717;
chunk__64637 = G__64718;
count__64638 = G__64719;
i__64639 = G__64720;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64636);
if(temp__5735__auto__){
var seq__64636__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64636__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64636__$1);
var G__64721 = cljs.core.chunk_rest(seq__64636__$1);
var G__64722 = c__4556__auto__;
var G__64723 = cljs.core.count(c__4556__auto__);
var G__64724 = (0);
seq__64636 = G__64721;
chunk__64637 = G__64722;
count__64638 = G__64723;
i__64639 = G__64724;
continue;
} else {
var vec__64653 = cljs.core.first(seq__64636__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64653,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64653,(1),null);
var temp__5733__auto___64725 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___64725)){
var effect_fn_64726 = temp__5733__auto___64725;
(effect_fn_64726.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64726.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64726.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__64727 = cljs.core.next(seq__64636__$1);
var G__64728 = null;
var G__64729 = (0);
var G__64730 = (0);
seq__64636 = G__64727;
chunk__64637 = G__64728;
count__64638 = G__64729;
i__64639 = G__64730;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__64656 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64657 = null;
var count__64658 = (0);
var i__64659 = (0);
while(true){
if((i__64659 < count__64658)){
var map__64665 = chunk__64657.cljs$core$IIndexed$_nth$arity$2(null,i__64659);
var map__64665__$1 = (((((!((map__64665 == null))))?(((((map__64665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64665):map__64665);
var effect = map__64665__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64665__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64665__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__64656,chunk__64657,count__64658,i__64659,map__64665,map__64665__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__64656,chunk__64657,count__64658,i__64659,map__64665,map__64665__$1,effect,ms,dispatch))
,ms);
}


var G__64733 = seq__64656;
var G__64734 = chunk__64657;
var G__64735 = count__64658;
var G__64736 = (i__64659 + (1));
seq__64656 = G__64733;
chunk__64657 = G__64734;
count__64658 = G__64735;
i__64659 = G__64736;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64656);
if(temp__5735__auto__){
var seq__64656__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64656__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64656__$1);
var G__64737 = cljs.core.chunk_rest(seq__64656__$1);
var G__64738 = c__4556__auto__;
var G__64739 = cljs.core.count(c__4556__auto__);
var G__64740 = (0);
seq__64656 = G__64737;
chunk__64657 = G__64738;
count__64658 = G__64739;
i__64659 = G__64740;
continue;
} else {
var map__64667 = cljs.core.first(seq__64656__$1);
var map__64667__$1 = (((((!((map__64667 == null))))?(((((map__64667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64667):map__64667);
var effect = map__64667__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64667__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__64656,chunk__64657,count__64658,i__64659,map__64667,map__64667__$1,effect,ms,dispatch,seq__64656__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__64656,chunk__64657,count__64658,i__64659,map__64667,map__64667__$1,effect,ms,dispatch,seq__64656__$1,temp__5735__auto__))
,ms);
}


var G__64741 = cljs.core.next(seq__64656__$1);
var G__64742 = null;
var G__64743 = (0);
var G__64744 = (0);
seq__64656 = G__64741;
chunk__64657 = G__64742;
count__64658 = G__64743;
i__64659 = G__64744;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__64672 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64673 = null;
var count__64674 = (0);
var i__64675 = (0);
while(true){
if((i__64675 < count__64674)){
var event = chunk__64673.cljs$core$IIndexed$_nth$arity$2(null,i__64675);
re_frame.router.dispatch(event);


var G__64749 = seq__64672;
var G__64750 = chunk__64673;
var G__64751 = count__64674;
var G__64752 = (i__64675 + (1));
seq__64672 = G__64749;
chunk__64673 = G__64750;
count__64674 = G__64751;
i__64675 = G__64752;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64672);
if(temp__5735__auto__){
var seq__64672__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64672__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64672__$1);
var G__64753 = cljs.core.chunk_rest(seq__64672__$1);
var G__64754 = c__4556__auto__;
var G__64755 = cljs.core.count(c__4556__auto__);
var G__64756 = (0);
seq__64672 = G__64753;
chunk__64673 = G__64754;
count__64674 = G__64755;
i__64675 = G__64756;
continue;
} else {
var event = cljs.core.first(seq__64672__$1);
re_frame.router.dispatch(event);


var G__64757 = cljs.core.next(seq__64672__$1);
var G__64758 = null;
var G__64759 = (0);
var G__64760 = (0);
seq__64672 = G__64757;
chunk__64673 = G__64758;
count__64674 = G__64759;
i__64675 = G__64760;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__64676 = cljs.core.seq(value);
var chunk__64677 = null;
var count__64678 = (0);
var i__64679 = (0);
while(true){
if((i__64679 < count__64678)){
var event = chunk__64677.cljs$core$IIndexed$_nth$arity$2(null,i__64679);
clear_event(event);


var G__64761 = seq__64676;
var G__64762 = chunk__64677;
var G__64763 = count__64678;
var G__64764 = (i__64679 + (1));
seq__64676 = G__64761;
chunk__64677 = G__64762;
count__64678 = G__64763;
i__64679 = G__64764;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64676);
if(temp__5735__auto__){
var seq__64676__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64676__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64676__$1);
var G__64765 = cljs.core.chunk_rest(seq__64676__$1);
var G__64766 = c__4556__auto__;
var G__64767 = cljs.core.count(c__4556__auto__);
var G__64768 = (0);
seq__64676 = G__64765;
chunk__64677 = G__64766;
count__64678 = G__64767;
i__64679 = G__64768;
continue;
} else {
var event = cljs.core.first(seq__64676__$1);
clear_event(event);


var G__64769 = cljs.core.next(seq__64676__$1);
var G__64770 = null;
var G__64771 = (0);
var G__64772 = (0);
seq__64676 = G__64769;
chunk__64677 = G__64770;
count__64678 = G__64771;
i__64679 = G__64772;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61461,p__61462){
var map__61463 = p__61461;
var map__61463__$1 = (((((!((map__61463 == null))))?(((((map__61463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61463):map__61463);
var svc = map__61463__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61463__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61463__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61463__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61464 = p__61462;
var map__61464__$1 = (((((!((map__61464 == null))))?(((((map__61464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61464):map__61464);
var msg = map__61464__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61464__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61464__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61464__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61464__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61472,p__61473){
var map__61474 = p__61472;
var map__61474__$1 = (((((!((map__61474 == null))))?(((((map__61474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61474):map__61474);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61474__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61475 = p__61473;
var map__61475__$1 = (((((!((map__61475 == null))))?(((((map__61475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61475):map__61475);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61475__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61495,p__61496){
var map__61497 = p__61495;
var map__61497__$1 = (((((!((map__61497 == null))))?(((((map__61497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61497):map__61497);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61498 = p__61496;
var map__61498__$1 = (((((!((map__61498 == null))))?(((((map__61498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61498):map__61498);
var msg = map__61498__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61498__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61511,tid){
var map__61513 = p__61511;
var map__61513__$1 = (((((!((map__61513 == null))))?(((((map__61513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61513):map__61513);
var svc = map__61513__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61513__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61535 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61536 = null;
var count__61537 = (0);
var i__61538 = (0);
while(true){
if((i__61538 < count__61537)){
var vec__61560 = chunk__61536.cljs$core$IIndexed$_nth$arity$2(null,i__61538);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61560,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61560,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61608 = seq__61535;
var G__61609 = chunk__61536;
var G__61610 = count__61537;
var G__61611 = (i__61538 + (1));
seq__61535 = G__61608;
chunk__61536 = G__61609;
count__61537 = G__61610;
i__61538 = G__61611;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61535);
if(temp__5735__auto__){
var seq__61535__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61535__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61535__$1);
var G__61618 = cljs.core.chunk_rest(seq__61535__$1);
var G__61619 = c__4556__auto__;
var G__61620 = cljs.core.count(c__4556__auto__);
var G__61621 = (0);
seq__61535 = G__61618;
chunk__61536 = G__61619;
count__61537 = G__61620;
i__61538 = G__61621;
continue;
} else {
var vec__61565 = cljs.core.first(seq__61535__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61565,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61565,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61638 = cljs.core.next(seq__61535__$1);
var G__61639 = null;
var G__61640 = (0);
var G__61641 = (0);
seq__61535 = G__61638;
chunk__61536 = G__61639;
count__61537 = G__61640;
i__61538 = G__61641;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61524_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61524_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61525_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61525_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61526_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61526_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61527_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61527_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61572){
var map__61573 = p__61572;
var map__61573__$1 = (((((!((map__61573 == null))))?(((((map__61573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61573):map__61573);
var svc = map__61573__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61573__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

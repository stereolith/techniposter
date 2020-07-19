goog.provide('shadow.remote.runtime.eval_support');
shadow.remote.runtime.eval_support.obj_support_inst = null;
shadow.remote.runtime.eval_support.get_ref = (function shadow$remote$runtime$eval_support$get_ref(oid){
if(cljs.core.truth_(shadow.remote.runtime.eval_support.obj_support_inst)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("obj-support not bound, can only call this from eval",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}

return shadow.remote.runtime.obj_support.get_ref(shadow.remote.runtime.eval_support.obj_support_inst,oid);
});
shadow.remote.runtime.eval_support.cljs_eval = (function shadow$remote$runtime$eval_support$cljs_eval(p__61824,p__61825){
var map__61827 = p__61824;
var map__61827__$1 = (((((!((map__61827 == null))))?(((((map__61827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61827):map__61827);
var svc = map__61827__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__61828 = p__61825;
var map__61828__$1 = (((((!((map__61828 == null))))?(((((map__61828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61828):map__61828);
var msg = map__61828__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61828__$1,new cljs.core.Keyword(null,"input","input",556931961));
(shadow.remote.runtime.eval_support.obj_support_inst = obj_support);

return shadow.remote.runtime.api.cljs_eval(runtime,input,(function (p__61832){
var map__61833 = p__61832;
var map__61833__$1 = (((((!((map__61833 == null))))?(((((map__61833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61833):map__61833);
var info = map__61833__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61833__$1,new cljs.core.Keyword(null,"result","result",1415092211));
(shadow.remote.runtime.eval_support.obj_support_inst = null);

var G__61838 = result;
var G__61838__$1 = (((G__61838 instanceof cljs.core.Keyword))?G__61838.fqn:null);
switch (G__61838__$1) {
case "compile-error":
var map__61840 = info;
var map__61840__$1 = (((((!((map__61840 == null))))?(((((map__61840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61840):map__61840);
var ex_client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61840__$1,new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984));
var ex_oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61840__$1,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61840__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-compile-error","eval-compile-error",-1765075397),new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984),ex_client_id,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid,new cljs.core.Keyword(null,"report","report",1394055010),report], null));

break;
case "runtime-error":
var map__61843 = info;
var map__61843__$1 = (((((!((map__61843 == null))))?(((((map__61843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61843):map__61843);
var ex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61843__$1,new cljs.core.Keyword(null,"ex","ex",-1413771341));
var ex_oid = shadow.remote.runtime.obj_support.register(obj_support,ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),input], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-runtime-error","eval-runtime-error",275935402),new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid], null));

break;
case "warnings":
var map__61849 = info;
var map__61849__$1 = (((((!((map__61849 == null))))?(((((map__61849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61849):map__61849);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61849__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-compile-warnings","eval-compile-warnings",1994859386),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));

break;
case "ok":
var map__61853 = info;
var map__61853__$1 = (((((!((map__61853 == null))))?(((((map__61853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61853):map__61853);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61853__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61853__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var time_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61853__$1,new cljs.core.Keyword(null,"time-start","time-start",-590811745));
var time_finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61853__$1,new cljs.core.Keyword(null,"time-finish","time-finish",-1456032653));
var val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(results)))?cljs.core.first(results):results);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),input], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid,new cljs.core.Keyword(null,"eval-ms","eval-ms",788821074),(time_finish - time_start),new cljs.core.Keyword(null,"eval-ns","eval-ns",-915623795),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));

break;
default:
return console.error("Unhandled cljs-eval result",info);

}
}));
});
shadow.remote.runtime.eval_support.js_eval = (function shadow$remote$runtime$eval_support$js_eval(p__61860,p__61861){
var map__61862 = p__61860;
var map__61862__$1 = (((((!((map__61862 == null))))?(((((map__61862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61862):map__61862);
var svc = map__61862__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61862__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61862__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var map__61863 = p__61861;
var map__61863__$1 = (((((!((map__61863 == null))))?(((((map__61863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61863):map__61863);
var msg = map__61863__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"code","code",1586293142));
try{var res = shadow.remote.runtime.api.js_eval(runtime,code);
var ref_oid = shadow.remote.runtime.obj_support.register(obj_support,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-code","js-code",1816578331),code], null));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-result-ref","eval-result-ref",263827420),new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),ref_oid], null));
}catch (e61866){var e = e61866;
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"eval-error","eval-error",466139568),new cljs.core.Keyword(null,"e","e",1381269198),e.message], null));
}});
shadow.remote.runtime.eval_support.start = (function shadow$remote$runtime$eval_support$start(runtime,obj_support){
var svc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support], null);
shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-eval","js-eval",-137738892),(function (p1__61868_SHARP_){
return shadow.remote.runtime.eval_support.js_eval(svc,p1__61868_SHARP_);
}),new cljs.core.Keyword(null,"cljs-eval","cljs-eval",1860675817),(function (p1__61869_SHARP_){
return shadow.remote.runtime.eval_support.cljs_eval(svc,p1__61869_SHARP_);
})], null)], null));

return svc;
});
shadow.remote.runtime.eval_support.stop = (function shadow$remote$runtime$eval_support$stop(p__61877){
var map__61878 = p__61877;
var map__61878__$1 = (((((!((map__61878 == null))))?(((((map__61878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61878):map__61878);
var svc = map__61878__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61878__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.eval-support","ext","shadow.remote.runtime.eval-support/ext",1781604625));
});

//# sourceMappingURL=shadow.remote.runtime.eval_support.js.map

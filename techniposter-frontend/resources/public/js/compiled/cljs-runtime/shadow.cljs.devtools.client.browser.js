goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63384 = arguments.length;
var i__4737__auto___63385 = (0);
while(true){
if((i__4737__auto___63385 < len__4736__auto___63384)){
args__4742__auto__.push((arguments[i__4737__auto___63385]));

var G__63386 = (i__4737__auto___63385 + (1));
i__4737__auto___63385 = G__63386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63164){
var G__63165 = cljs.core.first(seq63164);
var seq63164__$1 = cljs.core.next(seq63164);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63165,seq63164__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63180 = cljs.core.seq(sources);
var chunk__63181 = null;
var count__63182 = (0);
var i__63183 = (0);
while(true){
if((i__63183 < count__63182)){
var map__63200 = chunk__63181.cljs$core$IIndexed$_nth$arity$2(null,i__63183);
var map__63200__$1 = (((((!((map__63200 == null))))?(((((map__63200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63200):map__63200);
var src = map__63200__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63200__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63200__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63200__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63200__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e63202){var e_63387 = e63202;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63387);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63387.message)].join('')));
}

var G__63388 = seq__63180;
var G__63389 = chunk__63181;
var G__63390 = count__63182;
var G__63391 = (i__63183 + (1));
seq__63180 = G__63388;
chunk__63181 = G__63389;
count__63182 = G__63390;
i__63183 = G__63391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63180);
if(temp__5735__auto__){
var seq__63180__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63180__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63180__$1);
var G__63392 = cljs.core.chunk_rest(seq__63180__$1);
var G__63393 = c__4556__auto__;
var G__63394 = cljs.core.count(c__4556__auto__);
var G__63395 = (0);
seq__63180 = G__63392;
chunk__63181 = G__63393;
count__63182 = G__63394;
i__63183 = G__63395;
continue;
} else {
var map__63203 = cljs.core.first(seq__63180__$1);
var map__63203__$1 = (((((!((map__63203 == null))))?(((((map__63203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63203):map__63203);
var src = map__63203__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63203__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63203__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63203__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63203__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e63205){var e_63399 = e63205;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63399);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63399.message)].join('')));
}

var G__63402 = cljs.core.next(seq__63180__$1);
var G__63403 = null;
var G__63404 = (0);
var G__63405 = (0);
seq__63180 = G__63402;
chunk__63181 = G__63403;
count__63182 = G__63404;
i__63183 = G__63405;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63206 = cljs.core.seq(js_requires);
var chunk__63207 = null;
var count__63208 = (0);
var i__63209 = (0);
while(true){
if((i__63209 < count__63208)){
var js_ns = chunk__63207.cljs$core$IIndexed$_nth$arity$2(null,i__63209);
var require_str_63406 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63406);


var G__63407 = seq__63206;
var G__63408 = chunk__63207;
var G__63409 = count__63208;
var G__63410 = (i__63209 + (1));
seq__63206 = G__63407;
chunk__63207 = G__63408;
count__63208 = G__63409;
i__63209 = G__63410;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63206);
if(temp__5735__auto__){
var seq__63206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63206__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63206__$1);
var G__63411 = cljs.core.chunk_rest(seq__63206__$1);
var G__63412 = c__4556__auto__;
var G__63413 = cljs.core.count(c__4556__auto__);
var G__63414 = (0);
seq__63206 = G__63411;
chunk__63207 = G__63412;
count__63208 = G__63413;
i__63209 = G__63414;
continue;
} else {
var js_ns = cljs.core.first(seq__63206__$1);
var require_str_63415 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63415);


var G__63416 = cljs.core.next(seq__63206__$1);
var G__63417 = null;
var G__63418 = (0);
var G__63419 = (0);
seq__63206 = G__63416;
chunk__63207 = G__63417;
count__63208 = G__63418;
i__63209 = G__63419;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63221){
var map__63222 = p__63221;
var map__63222__$1 = (((((!((map__63222 == null))))?(((((map__63222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63222):map__63222);
var msg = map__63222__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63222__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63222__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63224(s__63225){
return (new cljs.core.LazySeq(null,(function (){
var s__63225__$1 = s__63225;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63225__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__63231 = cljs.core.first(xs__6292__auto__);
var map__63231__$1 = (((((!((map__63231 == null))))?(((((map__63231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63231):map__63231);
var src = map__63231__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63231__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63231__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__63225__$1,map__63231,map__63231__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63222,map__63222__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63224_$_iter__63226(s__63227){
return (new cljs.core.LazySeq(null,((function (s__63225__$1,map__63231,map__63231__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63222,map__63222__$1,msg,info,reload_info){
return (function (){
var s__63227__$1 = s__63227;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63227__$1);
if(temp__5735__auto____$1){
var s__63227__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63227__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63227__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63229 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63228 = (0);
while(true){
if((i__63228 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__63228);
cljs.core.chunk_append(b__63229,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63422 = (i__63228 + (1));
i__63228 = G__63422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63229),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63224_$_iter__63226(cljs.core.chunk_rest(s__63227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63229),null);
}
} else {
var warning = cljs.core.first(s__63227__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63224_$_iter__63226(cljs.core.rest(s__63227__$2)));
}
} else {
return null;
}
break;
}
});})(s__63225__$1,map__63231,map__63231__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63222,map__63222__$1,msg,info,reload_info))
,null,null));
});})(s__63225__$1,map__63231,map__63231__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63222,map__63222__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63224(cljs.core.rest(s__63225__$1)));
} else {
var G__63423 = cljs.core.rest(s__63225__$1);
s__63225__$1 = G__63423;
continue;
}
} else {
var G__63424 = cljs.core.rest(s__63225__$1);
s__63225__$1 = G__63424;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__63237_63425 = cljs.core.seq(warnings);
var chunk__63238_63426 = null;
var count__63239_63427 = (0);
var i__63240_63428 = (0);
while(true){
if((i__63240_63428 < count__63239_63427)){
var map__63245_63429 = chunk__63238_63426.cljs$core$IIndexed$_nth$arity$2(null,i__63240_63428);
var map__63245_63430__$1 = (((((!((map__63245_63429 == null))))?(((((map__63245_63429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63245_63429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63245_63429):map__63245_63429);
var w_63431 = map__63245_63430__$1;
var msg_63432__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245_63430__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245_63430__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245_63430__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63245_63430__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63435)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63433),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63434),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63432__$1)].join(''));


var G__63436 = seq__63237_63425;
var G__63437 = chunk__63238_63426;
var G__63438 = count__63239_63427;
var G__63439 = (i__63240_63428 + (1));
seq__63237_63425 = G__63436;
chunk__63238_63426 = G__63437;
count__63239_63427 = G__63438;
i__63240_63428 = G__63439;
continue;
} else {
var temp__5735__auto___63440 = cljs.core.seq(seq__63237_63425);
if(temp__5735__auto___63440){
var seq__63237_63441__$1 = temp__5735__auto___63440;
if(cljs.core.chunked_seq_QMARK_(seq__63237_63441__$1)){
var c__4556__auto___63442 = cljs.core.chunk_first(seq__63237_63441__$1);
var G__63443 = cljs.core.chunk_rest(seq__63237_63441__$1);
var G__63444 = c__4556__auto___63442;
var G__63445 = cljs.core.count(c__4556__auto___63442);
var G__63446 = (0);
seq__63237_63425 = G__63443;
chunk__63238_63426 = G__63444;
count__63239_63427 = G__63445;
i__63240_63428 = G__63446;
continue;
} else {
var map__63247_63447 = cljs.core.first(seq__63237_63441__$1);
var map__63247_63448__$1 = (((((!((map__63247_63447 == null))))?(((((map__63247_63447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63247_63447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63247_63447):map__63247_63447);
var w_63449 = map__63247_63448__$1;
var msg_63450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63247_63448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63247_63448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63247_63448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63247_63448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63450__$1)].join(''));


var G__63454 = cljs.core.next(seq__63237_63441__$1);
var G__63455 = null;
var G__63456 = (0);
var G__63457 = (0);
seq__63237_63425 = G__63454;
chunk__63238_63426 = G__63455;
count__63239_63427 = G__63456;
i__63240_63428 = G__63457;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63217_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63217_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63256){
var map__63257 = p__63256;
var map__63257__$1 = (((((!((map__63257 == null))))?(((((map__63257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63257):map__63257);
var msg = map__63257__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63257__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__63259 = cljs.core.seq(updates);
var chunk__63261 = null;
var count__63262 = (0);
var i__63263 = (0);
while(true){
if((i__63263 < count__63262)){
var path = chunk__63261.cljs$core$IIndexed$_nth$arity$2(null,i__63263);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63301_63458 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63305_63459 = null;
var count__63306_63460 = (0);
var i__63307_63461 = (0);
while(true){
if((i__63307_63461 < count__63306_63460)){
var node_63462 = chunk__63305_63459.cljs$core$IIndexed$_nth$arity$2(null,i__63307_63461);
var path_match_63463 = shadow.cljs.devtools.client.browser.match_paths(node_63462.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63463)){
var new_link_63464 = (function (){var G__63313 = node_63462.cloneNode(true);
G__63313.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63463),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63313;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63463], 0));

goog.dom.insertSiblingAfter(new_link_63464,node_63462);

goog.dom.removeNode(node_63462);


var G__63465 = seq__63301_63458;
var G__63466 = chunk__63305_63459;
var G__63467 = count__63306_63460;
var G__63468 = (i__63307_63461 + (1));
seq__63301_63458 = G__63465;
chunk__63305_63459 = G__63466;
count__63306_63460 = G__63467;
i__63307_63461 = G__63468;
continue;
} else {
var G__63469 = seq__63301_63458;
var G__63470 = chunk__63305_63459;
var G__63471 = count__63306_63460;
var G__63472 = (i__63307_63461 + (1));
seq__63301_63458 = G__63469;
chunk__63305_63459 = G__63470;
count__63306_63460 = G__63471;
i__63307_63461 = G__63472;
continue;
}
} else {
var temp__5735__auto___63473 = cljs.core.seq(seq__63301_63458);
if(temp__5735__auto___63473){
var seq__63301_63474__$1 = temp__5735__auto___63473;
if(cljs.core.chunked_seq_QMARK_(seq__63301_63474__$1)){
var c__4556__auto___63475 = cljs.core.chunk_first(seq__63301_63474__$1);
var G__63476 = cljs.core.chunk_rest(seq__63301_63474__$1);
var G__63477 = c__4556__auto___63475;
var G__63478 = cljs.core.count(c__4556__auto___63475);
var G__63479 = (0);
seq__63301_63458 = G__63476;
chunk__63305_63459 = G__63477;
count__63306_63460 = G__63478;
i__63307_63461 = G__63479;
continue;
} else {
var node_63480 = cljs.core.first(seq__63301_63474__$1);
var path_match_63481 = shadow.cljs.devtools.client.browser.match_paths(node_63480.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63481)){
var new_link_63482 = (function (){var G__63314 = node_63480.cloneNode(true);
G__63314.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63481),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63314;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63481], 0));

goog.dom.insertSiblingAfter(new_link_63482,node_63480);

goog.dom.removeNode(node_63480);


var G__63484 = cljs.core.next(seq__63301_63474__$1);
var G__63485 = null;
var G__63486 = (0);
var G__63487 = (0);
seq__63301_63458 = G__63484;
chunk__63305_63459 = G__63485;
count__63306_63460 = G__63486;
i__63307_63461 = G__63487;
continue;
} else {
var G__63488 = cljs.core.next(seq__63301_63474__$1);
var G__63489 = null;
var G__63490 = (0);
var G__63491 = (0);
seq__63301_63458 = G__63488;
chunk__63305_63459 = G__63489;
count__63306_63460 = G__63490;
i__63307_63461 = G__63491;
continue;
}
}
} else {
}
}
break;
}


var G__63492 = seq__63259;
var G__63493 = chunk__63261;
var G__63494 = count__63262;
var G__63495 = (i__63263 + (1));
seq__63259 = G__63492;
chunk__63261 = G__63493;
count__63262 = G__63494;
i__63263 = G__63495;
continue;
} else {
var G__63496 = seq__63259;
var G__63497 = chunk__63261;
var G__63498 = count__63262;
var G__63499 = (i__63263 + (1));
seq__63259 = G__63496;
chunk__63261 = G__63497;
count__63262 = G__63498;
i__63263 = G__63499;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63259);
if(temp__5735__auto__){
var seq__63259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63259__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63259__$1);
var G__63500 = cljs.core.chunk_rest(seq__63259__$1);
var G__63501 = c__4556__auto__;
var G__63502 = cljs.core.count(c__4556__auto__);
var G__63503 = (0);
seq__63259 = G__63500;
chunk__63261 = G__63501;
count__63262 = G__63502;
i__63263 = G__63503;
continue;
} else {
var path = cljs.core.first(seq__63259__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63315_63504 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63318_63505 = null;
var count__63319_63506 = (0);
var i__63320_63507 = (0);
while(true){
if((i__63320_63507 < count__63319_63506)){
var node_63508 = chunk__63318_63505.cljs$core$IIndexed$_nth$arity$2(null,i__63320_63507);
var path_match_63509 = shadow.cljs.devtools.client.browser.match_paths(node_63508.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63509)){
var new_link_63510 = (function (){var G__63325 = node_63508.cloneNode(true);
G__63325.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63509),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63325;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63509], 0));

goog.dom.insertSiblingAfter(new_link_63510,node_63508);

goog.dom.removeNode(node_63508);


var G__63511 = seq__63315_63504;
var G__63512 = chunk__63318_63505;
var G__63513 = count__63319_63506;
var G__63514 = (i__63320_63507 + (1));
seq__63315_63504 = G__63511;
chunk__63318_63505 = G__63512;
count__63319_63506 = G__63513;
i__63320_63507 = G__63514;
continue;
} else {
var G__63515 = seq__63315_63504;
var G__63516 = chunk__63318_63505;
var G__63517 = count__63319_63506;
var G__63518 = (i__63320_63507 + (1));
seq__63315_63504 = G__63515;
chunk__63318_63505 = G__63516;
count__63319_63506 = G__63517;
i__63320_63507 = G__63518;
continue;
}
} else {
var temp__5735__auto___63519__$1 = cljs.core.seq(seq__63315_63504);
if(temp__5735__auto___63519__$1){
var seq__63315_63520__$1 = temp__5735__auto___63519__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63315_63520__$1)){
var c__4556__auto___63521 = cljs.core.chunk_first(seq__63315_63520__$1);
var G__63522 = cljs.core.chunk_rest(seq__63315_63520__$1);
var G__63523 = c__4556__auto___63521;
var G__63524 = cljs.core.count(c__4556__auto___63521);
var G__63525 = (0);
seq__63315_63504 = G__63522;
chunk__63318_63505 = G__63523;
count__63319_63506 = G__63524;
i__63320_63507 = G__63525;
continue;
} else {
var node_63528 = cljs.core.first(seq__63315_63520__$1);
var path_match_63529 = shadow.cljs.devtools.client.browser.match_paths(node_63528.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63529)){
var new_link_63530 = (function (){var G__63326 = node_63528.cloneNode(true);
G__63326.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63529),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63326;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63529], 0));

goog.dom.insertSiblingAfter(new_link_63530,node_63528);

goog.dom.removeNode(node_63528);


var G__63532 = cljs.core.next(seq__63315_63520__$1);
var G__63533 = null;
var G__63534 = (0);
var G__63535 = (0);
seq__63315_63504 = G__63532;
chunk__63318_63505 = G__63533;
count__63319_63506 = G__63534;
i__63320_63507 = G__63535;
continue;
} else {
var G__63536 = cljs.core.next(seq__63315_63520__$1);
var G__63537 = null;
var G__63538 = (0);
var G__63539 = (0);
seq__63315_63504 = G__63536;
chunk__63318_63505 = G__63537;
count__63319_63506 = G__63538;
i__63320_63507 = G__63539;
continue;
}
}
} else {
}
}
break;
}


var G__63540 = cljs.core.next(seq__63259__$1);
var G__63541 = null;
var G__63542 = (0);
var G__63543 = (0);
seq__63259 = G__63540;
chunk__63261 = G__63541;
count__63262 = G__63542;
i__63263 = G__63543;
continue;
} else {
var G__63544 = cljs.core.next(seq__63259__$1);
var G__63545 = null;
var G__63546 = (0);
var G__63547 = (0);
seq__63259 = G__63544;
chunk__63261 = G__63545;
count__63262 = G__63546;
i__63263 = G__63547;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__63327){
var map__63328 = p__63327;
var map__63328__$1 = (((((!((map__63328 == null))))?(((((map__63328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63328):map__63328);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63328__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__63340){
var map__63341 = p__63340;
var map__63341__$1 = (((((!((map__63341 == null))))?(((((map__63341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63341):map__63341);
var _ = map__63341__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63341__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__63343,done,error){
var map__63344 = p__63343;
var map__63344__$1 = (((((!((map__63344 == null))))?(((((map__63344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63344):map__63344);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63344__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__63346,done,error){
var map__63348 = p__63346;
var map__63348__$1 = (((((!((map__63348 == null))))?(((((map__63348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63348):map__63348);
var msg = map__63348__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63348__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63350){
var map__63351 = p__63350;
var map__63351__$1 = (((((!((map__63351 == null))))?(((((map__63351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63351):map__63351);
var src = map__63351__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63351__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__63356 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__63356) : done.call(null,G__63356));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__63357){
var map__63358 = p__63357;
var map__63358__$1 = (((((!((map__63358 == null))))?(((((map__63358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63358):map__63358);
var msg__$1 = map__63358__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63358__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e63360){var ex = e63360;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__63361){
var map__63362 = p__63361;
var map__63362__$1 = (((((!((map__63362 == null))))?(((((map__63362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63362):map__63362);
var env = map__63362__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63362__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__63368){
var map__63369 = p__63368;
var map__63369__$1 = (((((!((map__63369 == null))))?(((((map__63369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63369):map__63369);
var msg = map__63369__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63369__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__63372){
var map__63373 = p__63372;
var map__63373__$1 = (((((!((map__63373 == null))))?(((((map__63373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63373):map__63373);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63373__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63373__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__63378){
var map__63379 = p__63378;
var map__63379__$1 = (((((!((map__63379 == null))))?(((((map__63379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63379):map__63379);
var svc = map__63379__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63379__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

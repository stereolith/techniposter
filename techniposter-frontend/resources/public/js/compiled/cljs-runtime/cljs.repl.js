goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67310){
var map__67311 = p__67310;
var map__67311__$1 = (((((!((map__67311 == null))))?(((((map__67311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67311):map__67311);
var m = map__67311__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67311__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67315_67523 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67316_67524 = null;
var count__67317_67525 = (0);
var i__67318_67526 = (0);
while(true){
if((i__67318_67526 < count__67317_67525)){
var f_67527 = chunk__67316_67524.cljs$core$IIndexed$_nth$arity$2(null,i__67318_67526);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67527], 0));


var G__67528 = seq__67315_67523;
var G__67529 = chunk__67316_67524;
var G__67530 = count__67317_67525;
var G__67531 = (i__67318_67526 + (1));
seq__67315_67523 = G__67528;
chunk__67316_67524 = G__67529;
count__67317_67525 = G__67530;
i__67318_67526 = G__67531;
continue;
} else {
var temp__5735__auto___67532 = cljs.core.seq(seq__67315_67523);
if(temp__5735__auto___67532){
var seq__67315_67533__$1 = temp__5735__auto___67532;
if(cljs.core.chunked_seq_QMARK_(seq__67315_67533__$1)){
var c__4556__auto___67534 = cljs.core.chunk_first(seq__67315_67533__$1);
var G__67535 = cljs.core.chunk_rest(seq__67315_67533__$1);
var G__67536 = c__4556__auto___67534;
var G__67537 = cljs.core.count(c__4556__auto___67534);
var G__67538 = (0);
seq__67315_67523 = G__67535;
chunk__67316_67524 = G__67536;
count__67317_67525 = G__67537;
i__67318_67526 = G__67538;
continue;
} else {
var f_67539 = cljs.core.first(seq__67315_67533__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67539], 0));


var G__67540 = cljs.core.next(seq__67315_67533__$1);
var G__67541 = null;
var G__67542 = (0);
var G__67543 = (0);
seq__67315_67523 = G__67540;
chunk__67316_67524 = G__67541;
count__67317_67525 = G__67542;
i__67318_67526 = G__67543;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67544 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_67544], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_67544)))?cljs.core.second(arglists_67544):arglists_67544)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67322_67546 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67323_67547 = null;
var count__67324_67548 = (0);
var i__67325_67549 = (0);
while(true){
if((i__67325_67549 < count__67324_67548)){
var vec__67338_67550 = chunk__67323_67547.cljs$core$IIndexed$_nth$arity$2(null,i__67325_67549);
var name_67551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67338_67550,(0),null);
var map__67341_67552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67338_67550,(1),null);
var map__67341_67553__$1 = (((((!((map__67341_67552 == null))))?(((((map__67341_67552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67341_67552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67341_67552):map__67341_67552);
var doc_67554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67341_67553__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67341_67553__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67551], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67555], 0));

if(cljs.core.truth_(doc_67554)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67554], 0));
} else {
}


var G__67557 = seq__67322_67546;
var G__67558 = chunk__67323_67547;
var G__67559 = count__67324_67548;
var G__67560 = (i__67325_67549 + (1));
seq__67322_67546 = G__67557;
chunk__67323_67547 = G__67558;
count__67324_67548 = G__67559;
i__67325_67549 = G__67560;
continue;
} else {
var temp__5735__auto___67561 = cljs.core.seq(seq__67322_67546);
if(temp__5735__auto___67561){
var seq__67322_67562__$1 = temp__5735__auto___67561;
if(cljs.core.chunked_seq_QMARK_(seq__67322_67562__$1)){
var c__4556__auto___67563 = cljs.core.chunk_first(seq__67322_67562__$1);
var G__67564 = cljs.core.chunk_rest(seq__67322_67562__$1);
var G__67565 = c__4556__auto___67563;
var G__67566 = cljs.core.count(c__4556__auto___67563);
var G__67567 = (0);
seq__67322_67546 = G__67564;
chunk__67323_67547 = G__67565;
count__67324_67548 = G__67566;
i__67325_67549 = G__67567;
continue;
} else {
var vec__67343_67569 = cljs.core.first(seq__67322_67562__$1);
var name_67570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67343_67569,(0),null);
var map__67346_67571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67343_67569,(1),null);
var map__67346_67572__$1 = (((((!((map__67346_67571 == null))))?(((((map__67346_67571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67346_67571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67346_67571):map__67346_67571);
var doc_67573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67346_67572__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67346_67572__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67570], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67574], 0));

if(cljs.core.truth_(doc_67573)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67573], 0));
} else {
}


var G__67575 = cljs.core.next(seq__67322_67562__$1);
var G__67576 = null;
var G__67577 = (0);
var G__67578 = (0);
seq__67322_67546 = G__67575;
chunk__67323_67547 = G__67576;
count__67324_67548 = G__67577;
i__67325_67549 = G__67578;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__67348 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__67349 = null;
var count__67350 = (0);
var i__67351 = (0);
while(true){
if((i__67351 < count__67350)){
var role = chunk__67349.cljs$core$IIndexed$_nth$arity$2(null,i__67351);
var temp__5735__auto___67579__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___67579__$1)){
var spec_67580 = temp__5735__auto___67579__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67580)], 0));
} else {
}


var G__67581 = seq__67348;
var G__67582 = chunk__67349;
var G__67583 = count__67350;
var G__67584 = (i__67351 + (1));
seq__67348 = G__67581;
chunk__67349 = G__67582;
count__67350 = G__67583;
i__67351 = G__67584;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__67348);
if(temp__5735__auto____$1){
var seq__67348__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__67348__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67348__$1);
var G__67586 = cljs.core.chunk_rest(seq__67348__$1);
var G__67587 = c__4556__auto__;
var G__67588 = cljs.core.count(c__4556__auto__);
var G__67589 = (0);
seq__67348 = G__67586;
chunk__67349 = G__67587;
count__67350 = G__67588;
i__67351 = G__67589;
continue;
} else {
var role = cljs.core.first(seq__67348__$1);
var temp__5735__auto___67590__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___67590__$2)){
var spec_67591 = temp__5735__auto___67590__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67591)], 0));
} else {
}


var G__67592 = cljs.core.next(seq__67348__$1);
var G__67593 = null;
var G__67594 = (0);
var G__67595 = (0);
seq__67348 = G__67592;
chunk__67349 = G__67593;
count__67350 = G__67594;
i__67351 = G__67595;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__67596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__67597 = cljs.core.ex_cause(t);
via = G__67596;
t = G__67597;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__67359 = datafied_throwable;
var map__67359__$1 = (((((!((map__67359 == null))))?(((((map__67359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67359):map__67359);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67359__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67359__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67359__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__67360 = cljs.core.last(via);
var map__67360__$1 = (((((!((map__67360 == null))))?(((((map__67360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67360):map__67360);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67360__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67360__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67360__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__67361 = data;
var map__67361__$1 = (((((!((map__67361 == null))))?(((((map__67361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67361):map__67361);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67361__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67361__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67361__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__67362 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__67362__$1 = (((((!((map__67362 == null))))?(((((map__67362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67362):map__67362);
var top_data = map__67362__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67362__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__67367 = phase;
var G__67367__$1 = (((G__67367 instanceof cljs.core.Keyword))?G__67367.fqn:null);
switch (G__67367__$1) {
case "read-source":
var map__67372 = data;
var map__67372__$1 = (((((!((map__67372 == null))))?(((((map__67372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67372):map__67372);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67372__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67372__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__67387 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__67387__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67387,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67387);
var G__67387__$2 = (cljs.core.truth_((function (){var fexpr__67388 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67388.cljs$core$IFn$_invoke$arity$1 ? fexpr__67388.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67388.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67387__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67387__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67387__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67387__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__67389 = top_data;
var G__67389__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67389,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67389);
var G__67389__$2 = (cljs.core.truth_((function (){var fexpr__67390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67390.cljs$core$IFn$_invoke$arity$1 ? fexpr__67390.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67390.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67389__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67389__$1);
var G__67389__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67389__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67389__$2);
var G__67389__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67389__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67389__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67389__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67389__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__67391 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67391,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67391,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67391,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67391,(3),null);
var G__67398 = top_data;
var G__67398__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67398,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__67398);
var G__67398__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__67398__$1);
var G__67398__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67398__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__67398__$2);
var G__67398__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67398__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67398__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67398__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67398__$4;
}

break;
case "execution":
var vec__67402 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67358_SHARP_){
var or__4126__auto__ = (p1__67358_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__67413 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67413.cljs$core$IFn$_invoke$arity$1 ? fexpr__67413.cljs$core$IFn$_invoke$arity$1(p1__67358_SHARP_) : fexpr__67413.call(null,p1__67358_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__67421 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__67421__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67421,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__67421);
var G__67421__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67421__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67421__$1);
var G__67421__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67421__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__67421__$2);
var G__67421__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67421__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__67421__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67421__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67421__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67367__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__67448){
var map__67449 = p__67448;
var map__67449__$1 = (((((!((map__67449 == null))))?(((((map__67449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67449):map__67449);
var triage_data = map__67449__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67449__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__67462 = phase;
var G__67462__$1 = (((G__67462 instanceof cljs.core.Keyword))?G__67462.fqn:null);
switch (G__67462__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__67465 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__67466 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67467 = loc;
var G__67468 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67477_67608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67478_67609 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67479_67610 = true;
var _STAR_print_fn_STAR__temp_val__67480_67611 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67479_67610);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67480_67611);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67446_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67446_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67478_67609);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67477_67608);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67465,G__67466,G__67467,G__67468) : format.call(null,G__67465,G__67466,G__67467,G__67468));

break;
case "macroexpansion":
var G__67489 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__67490 = cause_type;
var G__67491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67492 = loc;
var G__67493 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67489,G__67490,G__67491,G__67492,G__67493) : format.call(null,G__67489,G__67490,G__67491,G__67492,G__67493));

break;
case "compile-syntax-check":
var G__67494 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__67495 = cause_type;
var G__67496 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67497 = loc;
var G__67498 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67494,G__67495,G__67496,G__67497,G__67498) : format.call(null,G__67494,G__67495,G__67496,G__67497,G__67498));

break;
case "compilation":
var G__67499 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__67500 = cause_type;
var G__67501 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67502 = loc;
var G__67503 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67499,G__67500,G__67501,G__67502,G__67503) : format.call(null,G__67499,G__67500,G__67501,G__67502,G__67503));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__67504 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__67506 = symbol;
var G__67508 = loc;
var G__67509 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67512_67613 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67513_67614 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67514_67615 = true;
var _STAR_print_fn_STAR__temp_val__67515_67616 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67514_67615);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67515_67616);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67447_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67447_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67513_67614);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67512_67613);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67504,G__67506,G__67508,G__67509) : format.call(null,G__67504,G__67506,G__67508,G__67509));
} else {
var G__67516 = "Execution error%s at %s(%s).\n%s\n";
var G__67517 = cause_type;
var G__67518 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67519 = loc;
var G__67520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67516,G__67517,G__67518,G__67519,G__67520) : format.call(null,G__67516,G__67517,G__67518,G__67519,G__67520));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67462__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

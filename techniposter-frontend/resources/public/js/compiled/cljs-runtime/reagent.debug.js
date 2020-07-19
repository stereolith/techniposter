goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__62973__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62974__i = 0, G__62974__a = new Array(arguments.length -  0);
while (G__62974__i < G__62974__a.length) {G__62974__a[G__62974__i] = arguments[G__62974__i + 0]; ++G__62974__i;}
  args = new cljs.core.IndexedSeq(G__62974__a,0,null);
} 
return G__62973__delegate.call(this,args);};
G__62973.cljs$lang$maxFixedArity = 0;
G__62973.cljs$lang$applyTo = (function (arglist__62975){
var args = cljs.core.seq(arglist__62975);
return G__62973__delegate(args);
});
G__62973.cljs$core$IFn$_invoke$arity$variadic = G__62973__delegate;
return G__62973;
})()
);

(o.error = (function() { 
var G__62976__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62979__i = 0, G__62979__a = new Array(arguments.length -  0);
while (G__62979__i < G__62979__a.length) {G__62979__a[G__62979__i] = arguments[G__62979__i + 0]; ++G__62979__i;}
  args = new cljs.core.IndexedSeq(G__62979__a,0,null);
} 
return G__62976__delegate.call(this,args);};
G__62976.cljs$lang$maxFixedArity = 0;
G__62976.cljs$lang$applyTo = (function (arglist__62981){
var args = cljs.core.seq(arglist__62981);
return G__62976__delegate(args);
});
G__62976.cljs$core$IFn$_invoke$arity$variadic = G__62976__delegate;
return G__62976;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

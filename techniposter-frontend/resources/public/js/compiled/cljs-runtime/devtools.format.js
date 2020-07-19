goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_53634 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._header[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._header["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_53634(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_53638 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._has_body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._has_body["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_53638(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_53649 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._body["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_53649(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o53495 = temp__5733__auto__;
var temp__5733__auto____$1 = (o53495["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o53496 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o53496["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o53497 = temp__5733__auto____$2;
return (o53497["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o53500 = temp__5733__auto__;
var temp__5733__auto____$1 = (o53500["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o53501 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o53501["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o53502 = temp__5733__auto____$2;
return (o53502["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o53511 = temp__5733__auto__;
var temp__5733__auto____$1 = (o53511["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o53512 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o53512["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o53513 = temp__5733__auto____$2;
return (o53513["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o53526 = temp__5733__auto__;
var temp__5733__auto____$1 = (o53526["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o53527 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o53527["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o53528 = temp__5733__auto____$2;
return (o53528["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o53533 = temp__5733__auto__;
var temp__5733__auto____$1 = (o53533["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o53534 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o53534["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o53535 = temp__5733__auto____$2;
return (o53535["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o53537 = temp__5733__auto__;
var temp__5733__auto____$1 = (o53537["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o53538 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o53538["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o53539 = temp__5733__auto____$2;
return (o53539["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o53543 = temp__5733__auto__;
var temp__5733__auto____$1 = (o53543["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o53544 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o53544["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o53545 = temp__5733__auto____$2;
return (o53545["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53686 = arguments.length;
var i__4737__auto___53687 = (0);
while(true){
if((i__4737__auto___53687 < len__4736__auto___53686)){
args__4742__auto__.push((arguments[i__4737__auto___53687]));

var G__53688 = (i__4737__auto___53687 + (1));
i__4737__auto___53687 = G__53688;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq53551){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53551));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53692 = arguments.length;
var i__4737__auto___53693 = (0);
while(true){
if((i__4737__auto___53693 < len__4736__auto___53692)){
args__4742__auto__.push((arguments[i__4737__auto___53693]));

var G__53694 = (i__4737__auto___53693 + (1));
i__4737__auto___53693 = G__53694;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq53553){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53553));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53695 = arguments.length;
var i__4737__auto___53696 = (0);
while(true){
if((i__4737__auto___53696 < len__4736__auto___53695)){
args__4742__auto__.push((arguments[i__4737__auto___53696]));

var G__53697 = (i__4737__auto___53696 + (1));
i__4737__auto___53696 = G__53697;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq53559){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53559));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53700 = arguments.length;
var i__4737__auto___53701 = (0);
while(true){
if((i__4737__auto___53701 < len__4736__auto___53700)){
args__4742__auto__.push((arguments[i__4737__auto___53701]));

var G__53702 = (i__4737__auto___53701 + (1));
i__4737__auto___53701 = G__53702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq53563){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53563));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53703 = arguments.length;
var i__4737__auto___53705 = (0);
while(true){
if((i__4737__auto___53705 < len__4736__auto___53703)){
args__4742__auto__.push((arguments[i__4737__auto___53705]));

var G__53706 = (i__4737__auto___53705 + (1));
i__4737__auto___53705 = G__53706;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq53568){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53568));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53707 = arguments.length;
var i__4737__auto___53708 = (0);
while(true){
if((i__4737__auto___53708 < len__4736__auto___53707)){
args__4742__auto__.push((arguments[i__4737__auto___53708]));

var G__53709 = (i__4737__auto___53708 + (1));
i__4737__auto___53708 = G__53709;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq53572){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53572));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53712 = arguments.length;
var i__4737__auto___53713 = (0);
while(true){
if((i__4737__auto___53713 < len__4736__auto___53712)){
args__4742__auto__.push((arguments[i__4737__auto___53713]));

var G__53714 = (i__4737__auto___53713 + (1));
i__4737__auto___53713 = G__53714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq53573){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53573));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53716 = arguments.length;
var i__4737__auto___53717 = (0);
while(true){
if((i__4737__auto___53717 < len__4736__auto___53716)){
args__4742__auto__.push((arguments[i__4737__auto___53717]));

var G__53721 = (i__4737__auto___53717 + (1));
i__4737__auto___53717 = G__53721;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__53587){
var vec__53588 = p__53587;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53588,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__53576_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__53576_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq53579){
var G__53580 = cljs.core.first(seq53579);
var seq53579__$1 = cljs.core.next(seq53579);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53580,seq53579__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__53593 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__53594 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__53595 = (function (){var G__53596 = new cljs.core.Keyword(null,"li","li",723558921);
var G__53597 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__53598 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__53596,G__53597,G__53598) : devtools.format.make_template_fn.call(null,G__53596,G__53597,G__53598));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__53593,G__53594,G__53595) : devtools.format.make_template_fn.call(null,G__53593,G__53594,G__53595));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53723 = arguments.length;
var i__4737__auto___53724 = (0);
while(true){
if((i__4737__auto___53724 < len__4736__auto___53723)){
args__4742__auto__.push((arguments[i__4737__auto___53724]));

var G__53725 = (i__4737__auto___53724 + (1));
i__4737__auto___53724 = G__53725;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq53603){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53603));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53728 = arguments.length;
var i__4737__auto___53729 = (0);
while(true){
if((i__4737__auto___53729 < len__4736__auto___53728)){
args__4742__auto__.push((arguments[i__4737__auto___53729]));

var G__53731 = (i__4737__auto___53729 + (1));
i__4737__auto___53729 = G__53731;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq53615){
var G__53616 = cljs.core.first(seq53615);
var seq53615__$1 = cljs.core.next(seq53615);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53616,seq53615__$1);
}));


//# sourceMappingURL=devtools.format.js.map

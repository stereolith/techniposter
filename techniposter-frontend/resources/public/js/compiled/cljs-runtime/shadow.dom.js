goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61442 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_61442(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61444 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_61444(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60748 = coll;
var G__60749 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60748,G__60749) : shadow.dom.lazy_native_coll_seq.call(null,G__60748,G__60749));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__60754 = arguments.length;
switch (G__60754) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__60759 = arguments.length;
switch (G__60759) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__60762 = arguments.length;
switch (G__60762) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__60770 = arguments.length;
switch (G__60770) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__60782 = arguments.length;
switch (G__60782) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__60796 = arguments.length;
switch (G__60796) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e60800){if((e60800 instanceof Object)){
var e = e60800;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60800;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__60808 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60809 = null;
var count__60810 = (0);
var i__60811 = (0);
while(true){
if((i__60811 < count__60810)){
var el = chunk__60809.cljs$core$IIndexed$_nth$arity$2(null,i__60811);
var handler_61479__$1 = ((function (seq__60808,chunk__60809,count__60810,i__60811,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60808,chunk__60809,count__60810,i__60811,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61479__$1);


var G__61481 = seq__60808;
var G__61482 = chunk__60809;
var G__61483 = count__60810;
var G__61484 = (i__60811 + (1));
seq__60808 = G__61481;
chunk__60809 = G__61482;
count__60810 = G__61483;
i__60811 = G__61484;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60808);
if(temp__5735__auto__){
var seq__60808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60808__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60808__$1);
var G__61486 = cljs.core.chunk_rest(seq__60808__$1);
var G__61487 = c__4556__auto__;
var G__61488 = cljs.core.count(c__4556__auto__);
var G__61489 = (0);
seq__60808 = G__61486;
chunk__60809 = G__61487;
count__60810 = G__61488;
i__60811 = G__61489;
continue;
} else {
var el = cljs.core.first(seq__60808__$1);
var handler_61490__$1 = ((function (seq__60808,chunk__60809,count__60810,i__60811,el,seq__60808__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60808,chunk__60809,count__60810,i__60811,el,seq__60808__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61490__$1);


var G__61491 = cljs.core.next(seq__60808__$1);
var G__61492 = null;
var G__61493 = (0);
var G__61494 = (0);
seq__60808 = G__61491;
chunk__60809 = G__61492;
count__60810 = G__61493;
i__60811 = G__61494;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__60826 = arguments.length;
switch (G__60826) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__60833 = cljs.core.seq(events);
var chunk__60834 = null;
var count__60835 = (0);
var i__60836 = (0);
while(true){
if((i__60836 < count__60835)){
var vec__60851 = chunk__60834.cljs$core$IIndexed$_nth$arity$2(null,i__60836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60851,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61507 = seq__60833;
var G__61508 = chunk__60834;
var G__61509 = count__60835;
var G__61510 = (i__60836 + (1));
seq__60833 = G__61507;
chunk__60834 = G__61508;
count__60835 = G__61509;
i__60836 = G__61510;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60833);
if(temp__5735__auto__){
var seq__60833__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60833__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60833__$1);
var G__61515 = cljs.core.chunk_rest(seq__60833__$1);
var G__61516 = c__4556__auto__;
var G__61517 = cljs.core.count(c__4556__auto__);
var G__61518 = (0);
seq__60833 = G__61515;
chunk__60834 = G__61516;
count__60835 = G__61517;
i__60836 = G__61518;
continue;
} else {
var vec__60856 = cljs.core.first(seq__60833__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60856,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61520 = cljs.core.next(seq__60833__$1);
var G__61521 = null;
var G__61522 = (0);
var G__61523 = (0);
seq__60833 = G__61520;
chunk__60834 = G__61521;
count__60835 = G__61522;
i__60836 = G__61523;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__60864 = cljs.core.seq(styles);
var chunk__60865 = null;
var count__60866 = (0);
var i__60867 = (0);
while(true){
if((i__60867 < count__60866)){
var vec__60880 = chunk__60865.cljs$core$IIndexed$_nth$arity$2(null,i__60867);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61530 = seq__60864;
var G__61531 = chunk__60865;
var G__61532 = count__60866;
var G__61533 = (i__60867 + (1));
seq__60864 = G__61530;
chunk__60865 = G__61531;
count__60866 = G__61532;
i__60867 = G__61533;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60864);
if(temp__5735__auto__){
var seq__60864__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60864__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60864__$1);
var G__61539 = cljs.core.chunk_rest(seq__60864__$1);
var G__61540 = c__4556__auto__;
var G__61541 = cljs.core.count(c__4556__auto__);
var G__61542 = (0);
seq__60864 = G__61539;
chunk__60865 = G__61540;
count__60866 = G__61541;
i__60867 = G__61542;
continue;
} else {
var vec__60887 = cljs.core.first(seq__60864__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60887,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61547 = cljs.core.next(seq__60864__$1);
var G__61548 = null;
var G__61549 = (0);
var G__61550 = (0);
seq__60864 = G__61547;
chunk__60865 = G__61548;
count__60866 = G__61549;
i__60867 = G__61550;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__60894_61551 = key;
var G__60894_61552__$1 = (((G__60894_61551 instanceof cljs.core.Keyword))?G__60894_61551.fqn:null);
switch (G__60894_61552__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_61568 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_61568,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_61568,"aria-");
}
})())){
el.setAttribute(ks_61568,value);
} else {
(el[ks_61568] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__60930){
var map__60931 = p__60930;
var map__60931__$1 = (((((!((map__60931 == null))))?(((((map__60931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60931):map__60931);
var props = map__60931__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60931__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__60938 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60938,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__60941 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__60941,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__60941;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__60946 = arguments.length;
switch (G__60946) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__60956){
var vec__60959 = p__60956;
var seq__60960 = cljs.core.seq(vec__60959);
var first__60961 = cljs.core.first(seq__60960);
var seq__60960__$1 = cljs.core.next(seq__60960);
var nn = first__60961;
var first__60961__$1 = cljs.core.first(seq__60960__$1);
var seq__60960__$2 = cljs.core.next(seq__60960__$1);
var np = first__60961__$1;
var nc = seq__60960__$2;
var node = vec__60959;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60962 = nn;
var G__60963 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60962,G__60963) : create_fn.call(null,G__60962,G__60963));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60964 = nn;
var G__60965 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60964,G__60965) : create_fn.call(null,G__60964,G__60965));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60967 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60967,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60967,(1),null);
var seq__60971_61601 = cljs.core.seq(node_children);
var chunk__60972_61602 = null;
var count__60973_61603 = (0);
var i__60974_61604 = (0);
while(true){
if((i__60974_61604 < count__60973_61603)){
var child_struct_61606 = chunk__60972_61602.cljs$core$IIndexed$_nth$arity$2(null,i__60974_61604);
var children_61607 = shadow.dom.dom_node(child_struct_61606);
if(cljs.core.seq_QMARK_(children_61607)){
var seq__61018_61612 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61607));
var chunk__61020_61613 = null;
var count__61021_61614 = (0);
var i__61022_61615 = (0);
while(true){
if((i__61022_61615 < count__61021_61614)){
var child_61617 = chunk__61020_61613.cljs$core$IIndexed$_nth$arity$2(null,i__61022_61615);
if(cljs.core.truth_(child_61617)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61617);


var G__61622 = seq__61018_61612;
var G__61623 = chunk__61020_61613;
var G__61624 = count__61021_61614;
var G__61625 = (i__61022_61615 + (1));
seq__61018_61612 = G__61622;
chunk__61020_61613 = G__61623;
count__61021_61614 = G__61624;
i__61022_61615 = G__61625;
continue;
} else {
var G__61627 = seq__61018_61612;
var G__61628 = chunk__61020_61613;
var G__61629 = count__61021_61614;
var G__61630 = (i__61022_61615 + (1));
seq__61018_61612 = G__61627;
chunk__61020_61613 = G__61628;
count__61021_61614 = G__61629;
i__61022_61615 = G__61630;
continue;
}
} else {
var temp__5735__auto___61631 = cljs.core.seq(seq__61018_61612);
if(temp__5735__auto___61631){
var seq__61018_61632__$1 = temp__5735__auto___61631;
if(cljs.core.chunked_seq_QMARK_(seq__61018_61632__$1)){
var c__4556__auto___61633 = cljs.core.chunk_first(seq__61018_61632__$1);
var G__61634 = cljs.core.chunk_rest(seq__61018_61632__$1);
var G__61635 = c__4556__auto___61633;
var G__61636 = cljs.core.count(c__4556__auto___61633);
var G__61637 = (0);
seq__61018_61612 = G__61634;
chunk__61020_61613 = G__61635;
count__61021_61614 = G__61636;
i__61022_61615 = G__61637;
continue;
} else {
var child_61643 = cljs.core.first(seq__61018_61632__$1);
if(cljs.core.truth_(child_61643)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61643);


var G__61644 = cljs.core.next(seq__61018_61632__$1);
var G__61645 = null;
var G__61646 = (0);
var G__61647 = (0);
seq__61018_61612 = G__61644;
chunk__61020_61613 = G__61645;
count__61021_61614 = G__61646;
i__61022_61615 = G__61647;
continue;
} else {
var G__61648 = cljs.core.next(seq__61018_61632__$1);
var G__61649 = null;
var G__61650 = (0);
var G__61651 = (0);
seq__61018_61612 = G__61648;
chunk__61020_61613 = G__61649;
count__61021_61614 = G__61650;
i__61022_61615 = G__61651;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61607);
}


var G__61652 = seq__60971_61601;
var G__61653 = chunk__60972_61602;
var G__61654 = count__60973_61603;
var G__61655 = (i__60974_61604 + (1));
seq__60971_61601 = G__61652;
chunk__60972_61602 = G__61653;
count__60973_61603 = G__61654;
i__60974_61604 = G__61655;
continue;
} else {
var temp__5735__auto___61656 = cljs.core.seq(seq__60971_61601);
if(temp__5735__auto___61656){
var seq__60971_61657__$1 = temp__5735__auto___61656;
if(cljs.core.chunked_seq_QMARK_(seq__60971_61657__$1)){
var c__4556__auto___61658 = cljs.core.chunk_first(seq__60971_61657__$1);
var G__61659 = cljs.core.chunk_rest(seq__60971_61657__$1);
var G__61660 = c__4556__auto___61658;
var G__61661 = cljs.core.count(c__4556__auto___61658);
var G__61662 = (0);
seq__60971_61601 = G__61659;
chunk__60972_61602 = G__61660;
count__60973_61603 = G__61661;
i__60974_61604 = G__61662;
continue;
} else {
var child_struct_61663 = cljs.core.first(seq__60971_61657__$1);
var children_61664 = shadow.dom.dom_node(child_struct_61663);
if(cljs.core.seq_QMARK_(children_61664)){
var seq__61033_61665 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61664));
var chunk__61035_61666 = null;
var count__61036_61667 = (0);
var i__61037_61668 = (0);
while(true){
if((i__61037_61668 < count__61036_61667)){
var child_61669 = chunk__61035_61666.cljs$core$IIndexed$_nth$arity$2(null,i__61037_61668);
if(cljs.core.truth_(child_61669)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61669);


var G__61671 = seq__61033_61665;
var G__61672 = chunk__61035_61666;
var G__61673 = count__61036_61667;
var G__61674 = (i__61037_61668 + (1));
seq__61033_61665 = G__61671;
chunk__61035_61666 = G__61672;
count__61036_61667 = G__61673;
i__61037_61668 = G__61674;
continue;
} else {
var G__61676 = seq__61033_61665;
var G__61677 = chunk__61035_61666;
var G__61678 = count__61036_61667;
var G__61679 = (i__61037_61668 + (1));
seq__61033_61665 = G__61676;
chunk__61035_61666 = G__61677;
count__61036_61667 = G__61678;
i__61037_61668 = G__61679;
continue;
}
} else {
var temp__5735__auto___61683__$1 = cljs.core.seq(seq__61033_61665);
if(temp__5735__auto___61683__$1){
var seq__61033_61684__$1 = temp__5735__auto___61683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61033_61684__$1)){
var c__4556__auto___61685 = cljs.core.chunk_first(seq__61033_61684__$1);
var G__61686 = cljs.core.chunk_rest(seq__61033_61684__$1);
var G__61687 = c__4556__auto___61685;
var G__61688 = cljs.core.count(c__4556__auto___61685);
var G__61689 = (0);
seq__61033_61665 = G__61686;
chunk__61035_61666 = G__61687;
count__61036_61667 = G__61688;
i__61037_61668 = G__61689;
continue;
} else {
var child_61691 = cljs.core.first(seq__61033_61684__$1);
if(cljs.core.truth_(child_61691)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61691);


var G__61692 = cljs.core.next(seq__61033_61684__$1);
var G__61693 = null;
var G__61694 = (0);
var G__61695 = (0);
seq__61033_61665 = G__61692;
chunk__61035_61666 = G__61693;
count__61036_61667 = G__61694;
i__61037_61668 = G__61695;
continue;
} else {
var G__61696 = cljs.core.next(seq__61033_61684__$1);
var G__61697 = null;
var G__61698 = (0);
var G__61699 = (0);
seq__61033_61665 = G__61696;
chunk__61035_61666 = G__61697;
count__61036_61667 = G__61698;
i__61037_61668 = G__61699;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61664);
}


var G__61700 = cljs.core.next(seq__60971_61657__$1);
var G__61701 = null;
var G__61702 = (0);
var G__61703 = (0);
seq__60971_61601 = G__61700;
chunk__60972_61602 = G__61701;
count__60973_61603 = G__61702;
i__60974_61604 = G__61703;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61063 = cljs.core.seq(node);
var chunk__61064 = null;
var count__61065 = (0);
var i__61066 = (0);
while(true){
if((i__61066 < count__61065)){
var n = chunk__61064.cljs$core$IIndexed$_nth$arity$2(null,i__61066);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61708 = seq__61063;
var G__61709 = chunk__61064;
var G__61710 = count__61065;
var G__61711 = (i__61066 + (1));
seq__61063 = G__61708;
chunk__61064 = G__61709;
count__61065 = G__61710;
i__61066 = G__61711;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61063);
if(temp__5735__auto__){
var seq__61063__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61063__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61063__$1);
var G__61712 = cljs.core.chunk_rest(seq__61063__$1);
var G__61713 = c__4556__auto__;
var G__61714 = cljs.core.count(c__4556__auto__);
var G__61715 = (0);
seq__61063 = G__61712;
chunk__61064 = G__61713;
count__61065 = G__61714;
i__61066 = G__61715;
continue;
} else {
var n = cljs.core.first(seq__61063__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61716 = cljs.core.next(seq__61063__$1);
var G__61717 = null;
var G__61718 = (0);
var G__61719 = (0);
seq__61063 = G__61716;
chunk__61064 = G__61717;
count__61065 = G__61718;
i__61066 = G__61719;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61087 = arguments.length;
switch (G__61087) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61095 = arguments.length;
switch (G__61095) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61113 = arguments.length;
switch (G__61113) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61730 = arguments.length;
var i__4737__auto___61731 = (0);
while(true){
if((i__4737__auto___61731 < len__4736__auto___61730)){
args__4742__auto__.push((arguments[i__4737__auto___61731]));

var G__61732 = (i__4737__auto___61731 + (1));
i__4737__auto___61731 = G__61732;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61130_61733 = cljs.core.seq(nodes);
var chunk__61131_61734 = null;
var count__61132_61735 = (0);
var i__61133_61736 = (0);
while(true){
if((i__61133_61736 < count__61132_61735)){
var node_61737 = chunk__61131_61734.cljs$core$IIndexed$_nth$arity$2(null,i__61133_61736);
fragment.appendChild(shadow.dom._to_dom(node_61737));


var G__61738 = seq__61130_61733;
var G__61739 = chunk__61131_61734;
var G__61740 = count__61132_61735;
var G__61741 = (i__61133_61736 + (1));
seq__61130_61733 = G__61738;
chunk__61131_61734 = G__61739;
count__61132_61735 = G__61740;
i__61133_61736 = G__61741;
continue;
} else {
var temp__5735__auto___61745 = cljs.core.seq(seq__61130_61733);
if(temp__5735__auto___61745){
var seq__61130_61746__$1 = temp__5735__auto___61745;
if(cljs.core.chunked_seq_QMARK_(seq__61130_61746__$1)){
var c__4556__auto___61747 = cljs.core.chunk_first(seq__61130_61746__$1);
var G__61748 = cljs.core.chunk_rest(seq__61130_61746__$1);
var G__61749 = c__4556__auto___61747;
var G__61750 = cljs.core.count(c__4556__auto___61747);
var G__61751 = (0);
seq__61130_61733 = G__61748;
chunk__61131_61734 = G__61749;
count__61132_61735 = G__61750;
i__61133_61736 = G__61751;
continue;
} else {
var node_61752 = cljs.core.first(seq__61130_61746__$1);
fragment.appendChild(shadow.dom._to_dom(node_61752));


var G__61753 = cljs.core.next(seq__61130_61746__$1);
var G__61754 = null;
var G__61755 = (0);
var G__61756 = (0);
seq__61130_61733 = G__61753;
chunk__61131_61734 = G__61754;
count__61132_61735 = G__61755;
i__61133_61736 = G__61756;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61126){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61126));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61147_61757 = cljs.core.seq(scripts);
var chunk__61148_61758 = null;
var count__61149_61759 = (0);
var i__61150_61760 = (0);
while(true){
if((i__61150_61760 < count__61149_61759)){
var vec__61161_61761 = chunk__61148_61758.cljs$core$IIndexed$_nth$arity$2(null,i__61150_61760);
var script_tag_61762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61161_61761,(0),null);
var script_body_61763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61161_61761,(1),null);
eval(script_body_61763);


var G__61764 = seq__61147_61757;
var G__61765 = chunk__61148_61758;
var G__61766 = count__61149_61759;
var G__61767 = (i__61150_61760 + (1));
seq__61147_61757 = G__61764;
chunk__61148_61758 = G__61765;
count__61149_61759 = G__61766;
i__61150_61760 = G__61767;
continue;
} else {
var temp__5735__auto___61768 = cljs.core.seq(seq__61147_61757);
if(temp__5735__auto___61768){
var seq__61147_61770__$1 = temp__5735__auto___61768;
if(cljs.core.chunked_seq_QMARK_(seq__61147_61770__$1)){
var c__4556__auto___61771 = cljs.core.chunk_first(seq__61147_61770__$1);
var G__61775 = cljs.core.chunk_rest(seq__61147_61770__$1);
var G__61776 = c__4556__auto___61771;
var G__61777 = cljs.core.count(c__4556__auto___61771);
var G__61778 = (0);
seq__61147_61757 = G__61775;
chunk__61148_61758 = G__61776;
count__61149_61759 = G__61777;
i__61150_61760 = G__61778;
continue;
} else {
var vec__61168_61779 = cljs.core.first(seq__61147_61770__$1);
var script_tag_61780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61168_61779,(0),null);
var script_body_61781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61168_61779,(1),null);
eval(script_body_61781);


var G__61782 = cljs.core.next(seq__61147_61770__$1);
var G__61783 = null;
var G__61784 = (0);
var G__61785 = (0);
seq__61147_61757 = G__61782;
chunk__61148_61758 = G__61783;
count__61149_61759 = G__61784;
i__61150_61760 = G__61785;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61174){
var vec__61176 = p__61174;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61176,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61176,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61184 = arguments.length;
switch (G__61184) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__61195 = cljs.core.seq(style_keys);
var chunk__61196 = null;
var count__61197 = (0);
var i__61198 = (0);
while(true){
if((i__61198 < count__61197)){
var it = chunk__61196.cljs$core$IIndexed$_nth$arity$2(null,i__61198);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61794 = seq__61195;
var G__61795 = chunk__61196;
var G__61796 = count__61197;
var G__61797 = (i__61198 + (1));
seq__61195 = G__61794;
chunk__61196 = G__61795;
count__61197 = G__61796;
i__61198 = G__61797;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61195);
if(temp__5735__auto__){
var seq__61195__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61195__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61195__$1);
var G__61799 = cljs.core.chunk_rest(seq__61195__$1);
var G__61800 = c__4556__auto__;
var G__61801 = cljs.core.count(c__4556__auto__);
var G__61802 = (0);
seq__61195 = G__61799;
chunk__61196 = G__61800;
count__61197 = G__61801;
i__61198 = G__61802;
continue;
} else {
var it = cljs.core.first(seq__61195__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61803 = cljs.core.next(seq__61195__$1);
var G__61804 = null;
var G__61806 = (0);
var G__61807 = (0);
seq__61195 = G__61803;
chunk__61196 = G__61804;
count__61197 = G__61806;
i__61198 = G__61807;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61206,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61214 = k61206;
var G__61214__$1 = (((G__61214 instanceof cljs.core.Keyword))?G__61214.fqn:null);
switch (G__61214__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61206,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61215){
var vec__61217 = p__61215;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61217,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61217,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61205){
var self__ = this;
var G__61205__$1 = this;
return (new cljs.core.RecordIter((0),G__61205__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61207,other61208){
var self__ = this;
var this61207__$1 = this;
return (((!((other61208 == null)))) && ((this61207__$1.constructor === other61208.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61207__$1.x,other61208.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61207__$1.y,other61208.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61207__$1.__extmap,other61208.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61205){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61235 = cljs.core.keyword_identical_QMARK_;
var expr__61236 = k__4388__auto__;
if(cljs.core.truth_((pred__61235.cljs$core$IFn$_invoke$arity$2 ? pred__61235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61236) : pred__61235.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61236)))){
return (new shadow.dom.Coordinate(G__61205,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61235.cljs$core$IFn$_invoke$arity$2 ? pred__61235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61236) : pred__61235.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61236)))){
return (new shadow.dom.Coordinate(self__.x,G__61205,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61205),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61205){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61205,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61210){
var extmap__4419__auto__ = (function (){var G__61245 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61210,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61210)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61245);
} else {
return G__61245;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61210),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61210),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61250,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61256 = k61250;
var G__61256__$1 = (((G__61256 instanceof cljs.core.Keyword))?G__61256.fqn:null);
switch (G__61256__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61250,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61257){
var vec__61259 = p__61257;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61249){
var self__ = this;
var G__61249__$1 = this;
return (new cljs.core.RecordIter((0),G__61249__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61251,other61252){
var self__ = this;
var this61251__$1 = this;
return (((!((other61252 == null)))) && ((this61251__$1.constructor === other61252.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61251__$1.w,other61252.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61251__$1.h,other61252.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61251__$1.__extmap,other61252.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61249){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61271 = cljs.core.keyword_identical_QMARK_;
var expr__61272 = k__4388__auto__;
if(cljs.core.truth_((pred__61271.cljs$core$IFn$_invoke$arity$2 ? pred__61271.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61272) : pred__61271.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61272)))){
return (new shadow.dom.Size(G__61249,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61271.cljs$core$IFn$_invoke$arity$2 ? pred__61271.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61272) : pred__61271.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61272)))){
return (new shadow.dom.Size(self__.w,G__61249,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61249),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61249){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61249,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61253){
var extmap__4419__auto__ = (function (){var G__61274 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61253,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61253)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61274);
} else {
return G__61274;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61253),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61253),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__61896 = (i + (1));
var G__61897 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__61896;
ret = G__61897;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61291){
var vec__61292 = p__61291;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61292,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61298 = arguments.length;
switch (G__61298) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__61908 = ps;
var G__61909 = (i + (1));
el__$1 = G__61908;
i = G__61909;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__61322 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61322,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61322,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61322,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61327_61919 = cljs.core.seq(props);
var chunk__61328_61920 = null;
var count__61329_61921 = (0);
var i__61330_61922 = (0);
while(true){
if((i__61330_61922 < count__61329_61921)){
var vec__61344_61925 = chunk__61328_61920.cljs$core$IIndexed$_nth$arity$2(null,i__61330_61922);
var k_61926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61344_61925,(0),null);
var v_61927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61344_61925,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_61926);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61926),v_61927);


var G__61930 = seq__61327_61919;
var G__61931 = chunk__61328_61920;
var G__61932 = count__61329_61921;
var G__61933 = (i__61330_61922 + (1));
seq__61327_61919 = G__61930;
chunk__61328_61920 = G__61931;
count__61329_61921 = G__61932;
i__61330_61922 = G__61933;
continue;
} else {
var temp__5735__auto___61934 = cljs.core.seq(seq__61327_61919);
if(temp__5735__auto___61934){
var seq__61327_61935__$1 = temp__5735__auto___61934;
if(cljs.core.chunked_seq_QMARK_(seq__61327_61935__$1)){
var c__4556__auto___61936 = cljs.core.chunk_first(seq__61327_61935__$1);
var G__61937 = cljs.core.chunk_rest(seq__61327_61935__$1);
var G__61938 = c__4556__auto___61936;
var G__61939 = cljs.core.count(c__4556__auto___61936);
var G__61940 = (0);
seq__61327_61919 = G__61937;
chunk__61328_61920 = G__61938;
count__61329_61921 = G__61939;
i__61330_61922 = G__61940;
continue;
} else {
var vec__61351_61942 = cljs.core.first(seq__61327_61935__$1);
var k_61943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61351_61942,(0),null);
var v_61944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61351_61942,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_61943);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61943),v_61944);


var G__61945 = cljs.core.next(seq__61327_61935__$1);
var G__61946 = null;
var G__61947 = (0);
var G__61948 = (0);
seq__61327_61919 = G__61945;
chunk__61328_61920 = G__61946;
count__61329_61921 = G__61947;
i__61330_61922 = G__61948;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__61356 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61356,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61356,(1),null);
var seq__61360_61957 = cljs.core.seq(node_children);
var chunk__61362_61958 = null;
var count__61363_61959 = (0);
var i__61364_61960 = (0);
while(true){
if((i__61364_61960 < count__61363_61959)){
var child_struct_61961 = chunk__61362_61958.cljs$core$IIndexed$_nth$arity$2(null,i__61364_61960);
if((!((child_struct_61961 == null)))){
if(typeof child_struct_61961 === 'string'){
var text_61963 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61963),child_struct_61961].join(''));
} else {
var children_61964 = shadow.dom.svg_node(child_struct_61961);
if(cljs.core.seq_QMARK_(children_61964)){
var seq__61382_61965 = cljs.core.seq(children_61964);
var chunk__61384_61966 = null;
var count__61385_61967 = (0);
var i__61386_61968 = (0);
while(true){
if((i__61386_61968 < count__61385_61967)){
var child_61969 = chunk__61384_61966.cljs$core$IIndexed$_nth$arity$2(null,i__61386_61968);
if(cljs.core.truth_(child_61969)){
node.appendChild(child_61969);


var G__61970 = seq__61382_61965;
var G__61971 = chunk__61384_61966;
var G__61972 = count__61385_61967;
var G__61973 = (i__61386_61968 + (1));
seq__61382_61965 = G__61970;
chunk__61384_61966 = G__61971;
count__61385_61967 = G__61972;
i__61386_61968 = G__61973;
continue;
} else {
var G__61975 = seq__61382_61965;
var G__61976 = chunk__61384_61966;
var G__61977 = count__61385_61967;
var G__61978 = (i__61386_61968 + (1));
seq__61382_61965 = G__61975;
chunk__61384_61966 = G__61976;
count__61385_61967 = G__61977;
i__61386_61968 = G__61978;
continue;
}
} else {
var temp__5735__auto___61980 = cljs.core.seq(seq__61382_61965);
if(temp__5735__auto___61980){
var seq__61382_61981__$1 = temp__5735__auto___61980;
if(cljs.core.chunked_seq_QMARK_(seq__61382_61981__$1)){
var c__4556__auto___61983 = cljs.core.chunk_first(seq__61382_61981__$1);
var G__61984 = cljs.core.chunk_rest(seq__61382_61981__$1);
var G__61985 = c__4556__auto___61983;
var G__61986 = cljs.core.count(c__4556__auto___61983);
var G__61987 = (0);
seq__61382_61965 = G__61984;
chunk__61384_61966 = G__61985;
count__61385_61967 = G__61986;
i__61386_61968 = G__61987;
continue;
} else {
var child_61988 = cljs.core.first(seq__61382_61981__$1);
if(cljs.core.truth_(child_61988)){
node.appendChild(child_61988);


var G__61989 = cljs.core.next(seq__61382_61981__$1);
var G__61990 = null;
var G__61991 = (0);
var G__61992 = (0);
seq__61382_61965 = G__61989;
chunk__61384_61966 = G__61990;
count__61385_61967 = G__61991;
i__61386_61968 = G__61992;
continue;
} else {
var G__61994 = cljs.core.next(seq__61382_61981__$1);
var G__61995 = null;
var G__61996 = (0);
var G__61997 = (0);
seq__61382_61965 = G__61994;
chunk__61384_61966 = G__61995;
count__61385_61967 = G__61996;
i__61386_61968 = G__61997;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61964);
}
}


var G__61998 = seq__61360_61957;
var G__61999 = chunk__61362_61958;
var G__62000 = count__61363_61959;
var G__62001 = (i__61364_61960 + (1));
seq__61360_61957 = G__61998;
chunk__61362_61958 = G__61999;
count__61363_61959 = G__62000;
i__61364_61960 = G__62001;
continue;
} else {
var G__62002 = seq__61360_61957;
var G__62003 = chunk__61362_61958;
var G__62004 = count__61363_61959;
var G__62005 = (i__61364_61960 + (1));
seq__61360_61957 = G__62002;
chunk__61362_61958 = G__62003;
count__61363_61959 = G__62004;
i__61364_61960 = G__62005;
continue;
}
} else {
var temp__5735__auto___62006 = cljs.core.seq(seq__61360_61957);
if(temp__5735__auto___62006){
var seq__61360_62007__$1 = temp__5735__auto___62006;
if(cljs.core.chunked_seq_QMARK_(seq__61360_62007__$1)){
var c__4556__auto___62009 = cljs.core.chunk_first(seq__61360_62007__$1);
var G__62010 = cljs.core.chunk_rest(seq__61360_62007__$1);
var G__62011 = c__4556__auto___62009;
var G__62012 = cljs.core.count(c__4556__auto___62009);
var G__62013 = (0);
seq__61360_61957 = G__62010;
chunk__61362_61958 = G__62011;
count__61363_61959 = G__62012;
i__61364_61960 = G__62013;
continue;
} else {
var child_struct_62014 = cljs.core.first(seq__61360_62007__$1);
if((!((child_struct_62014 == null)))){
if(typeof child_struct_62014 === 'string'){
var text_62016 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62016),child_struct_62014].join(''));
} else {
var children_62017 = shadow.dom.svg_node(child_struct_62014);
if(cljs.core.seq_QMARK_(children_62017)){
var seq__61390_62018 = cljs.core.seq(children_62017);
var chunk__61392_62019 = null;
var count__61393_62020 = (0);
var i__61394_62021 = (0);
while(true){
if((i__61394_62021 < count__61393_62020)){
var child_62023 = chunk__61392_62019.cljs$core$IIndexed$_nth$arity$2(null,i__61394_62021);
if(cljs.core.truth_(child_62023)){
node.appendChild(child_62023);


var G__62024 = seq__61390_62018;
var G__62025 = chunk__61392_62019;
var G__62026 = count__61393_62020;
var G__62027 = (i__61394_62021 + (1));
seq__61390_62018 = G__62024;
chunk__61392_62019 = G__62025;
count__61393_62020 = G__62026;
i__61394_62021 = G__62027;
continue;
} else {
var G__62029 = seq__61390_62018;
var G__62030 = chunk__61392_62019;
var G__62031 = count__61393_62020;
var G__62032 = (i__61394_62021 + (1));
seq__61390_62018 = G__62029;
chunk__61392_62019 = G__62030;
count__61393_62020 = G__62031;
i__61394_62021 = G__62032;
continue;
}
} else {
var temp__5735__auto___62037__$1 = cljs.core.seq(seq__61390_62018);
if(temp__5735__auto___62037__$1){
var seq__61390_62039__$1 = temp__5735__auto___62037__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61390_62039__$1)){
var c__4556__auto___62041 = cljs.core.chunk_first(seq__61390_62039__$1);
var G__62042 = cljs.core.chunk_rest(seq__61390_62039__$1);
var G__62043 = c__4556__auto___62041;
var G__62044 = cljs.core.count(c__4556__auto___62041);
var G__62045 = (0);
seq__61390_62018 = G__62042;
chunk__61392_62019 = G__62043;
count__61393_62020 = G__62044;
i__61394_62021 = G__62045;
continue;
} else {
var child_62047 = cljs.core.first(seq__61390_62039__$1);
if(cljs.core.truth_(child_62047)){
node.appendChild(child_62047);


var G__62049 = cljs.core.next(seq__61390_62039__$1);
var G__62050 = null;
var G__62051 = (0);
var G__62052 = (0);
seq__61390_62018 = G__62049;
chunk__61392_62019 = G__62050;
count__61393_62020 = G__62051;
i__61394_62021 = G__62052;
continue;
} else {
var G__62053 = cljs.core.next(seq__61390_62039__$1);
var G__62054 = null;
var G__62055 = (0);
var G__62056 = (0);
seq__61390_62018 = G__62053;
chunk__61392_62019 = G__62054;
count__61393_62020 = G__62055;
i__61394_62021 = G__62056;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62017);
}
}


var G__62057 = cljs.core.next(seq__61360_62007__$1);
var G__62058 = null;
var G__62059 = (0);
var G__62060 = (0);
seq__61360_61957 = G__62057;
chunk__61362_61958 = G__62058;
count__61363_61959 = G__62059;
i__61364_61960 = G__62060;
continue;
} else {
var G__62061 = cljs.core.next(seq__61360_62007__$1);
var G__62062 = null;
var G__62063 = (0);
var G__62064 = (0);
seq__61360_61957 = G__62061;
chunk__61362_61958 = G__62062;
count__61363_61959 = G__62063;
i__61364_61960 = G__62064;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62067 = arguments.length;
var i__4737__auto___62068 = (0);
while(true){
if((i__4737__auto___62068 < len__4736__auto___62067)){
args__4742__auto__.push((arguments[i__4737__auto___62068]));

var G__62069 = (i__4737__auto___62068 + (1));
i__4737__auto___62068 = G__62069;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61407){
var G__61408 = cljs.core.first(seq61407);
var seq61407__$1 = cljs.core.next(seq61407);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61408,seq61407__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__61414 = arguments.length;
switch (G__61414) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__58605__auto___62077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_61424){
var state_val_61425 = (state_61424[(1)]);
if((state_val_61425 === (1))){
var state_61424__$1 = state_61424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61424__$1,(2),once_or_cleanup);
} else {
if((state_val_61425 === (2))){
var inst_61421 = (state_61424[(2)]);
var inst_61422 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61424__$1 = (function (){var statearr_61428 = state_61424;
(statearr_61428[(7)] = inst_61421);

return statearr_61428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61424__$1,inst_61422);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__58471__auto__ = null;
var shadow$dom$state_machine__58471__auto____0 = (function (){
var statearr_61429 = [null,null,null,null,null,null,null,null];
(statearr_61429[(0)] = shadow$dom$state_machine__58471__auto__);

(statearr_61429[(1)] = (1));

return statearr_61429;
});
var shadow$dom$state_machine__58471__auto____1 = (function (state_61424){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_61424);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e61431){var ex__58474__auto__ = e61431;
var statearr_61432_62081 = state_61424;
(statearr_61432_62081[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_61424[(4)]))){
var statearr_61433_62083 = state_61424;
(statearr_61433_62083[(1)] = cljs.core.first((state_61424[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62084 = state_61424;
state_61424 = G__62084;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
shadow$dom$state_machine__58471__auto__ = function(state_61424){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__58471__auto____0.call(this);
case 1:
return shadow$dom$state_machine__58471__auto____1.call(this,state_61424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__58471__auto____0;
shadow$dom$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__58471__auto____1;
return shadow$dom$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_61434 = f__58606__auto__();
(statearr_61434[(6)] = c__58605__auto___62077);

return statearr_61434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

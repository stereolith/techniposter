goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__58712 = arguments.length;
switch (G__58712) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58714 = (function (f,blockable,meta58715){
this.f = f;
this.blockable = blockable;
this.meta58715 = meta58715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58716,meta58715__$1){
var self__ = this;
var _58716__$1 = this;
return (new cljs.core.async.t_cljs$core$async58714(self__.f,self__.blockable,meta58715__$1));
}));

(cljs.core.async.t_cljs$core$async58714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58716){
var self__ = this;
var _58716__$1 = this;
return self__.meta58715;
}));

(cljs.core.async.t_cljs$core$async58714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58715","meta58715",-1043397354,null)], null);
}));

(cljs.core.async.t_cljs$core$async58714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58714");

(cljs.core.async.t_cljs$core$async58714.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58714.
 */
cljs.core.async.__GT_t_cljs$core$async58714 = (function cljs$core$async$__GT_t_cljs$core$async58714(f__$1,blockable__$1,meta58715){
return (new cljs.core.async.t_cljs$core$async58714(f__$1,blockable__$1,meta58715));
});

}

return (new cljs.core.async.t_cljs$core$async58714(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__58754 = arguments.length;
switch (G__58754) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__58769 = arguments.length;
switch (G__58769) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__58782 = arguments.length;
switch (G__58782) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_60743 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60743) : fn1.call(null,val_60743));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60743) : fn1.call(null,val_60743));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__58797 = arguments.length;
switch (G__58797) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___60745 = n;
var x_60746 = (0);
while(true){
if((x_60746 < n__4613__auto___60745)){
(a[x_60746] = x_60746);

var G__60747 = (x_60746 + (1));
x_60746 = G__60747;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58827 = (function (flag,meta58828){
this.flag = flag;
this.meta58828 = meta58828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58829,meta58828__$1){
var self__ = this;
var _58829__$1 = this;
return (new cljs.core.async.t_cljs$core$async58827(self__.flag,meta58828__$1));
}));

(cljs.core.async.t_cljs$core$async58827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58829){
var self__ = this;
var _58829__$1 = this;
return self__.meta58828;
}));

(cljs.core.async.t_cljs$core$async58827.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58827.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58828","meta58828",41666588,null)], null);
}));

(cljs.core.async.t_cljs$core$async58827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58827");

(cljs.core.async.t_cljs$core$async58827.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58827.
 */
cljs.core.async.__GT_t_cljs$core$async58827 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58827(flag__$1,meta58828){
return (new cljs.core.async.t_cljs$core$async58827(flag__$1,meta58828));
});

}

return (new cljs.core.async.t_cljs$core$async58827(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58839 = (function (flag,cb,meta58840){
this.flag = flag;
this.cb = cb;
this.meta58840 = meta58840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58841,meta58840__$1){
var self__ = this;
var _58841__$1 = this;
return (new cljs.core.async.t_cljs$core$async58839(self__.flag,self__.cb,meta58840__$1));
}));

(cljs.core.async.t_cljs$core$async58839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58841){
var self__ = this;
var _58841__$1 = this;
return self__.meta58840;
}));

(cljs.core.async.t_cljs$core$async58839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58840","meta58840",1966628375,null)], null);
}));

(cljs.core.async.t_cljs$core$async58839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58839");

(cljs.core.async.t_cljs$core$async58839.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58839.
 */
cljs.core.async.__GT_t_cljs$core$async58839 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58839(flag__$1,cb__$1,meta58840){
return (new cljs.core.async.t_cljs$core$async58839(flag__$1,cb__$1,meta58840));
});

}

return (new cljs.core.async.t_cljs$core$async58839(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58857_SHARP_){
var G__58867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58857_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58867) : fret.call(null,G__58867));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58858_SHARP_){
var G__58868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58858_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58868) : fret.call(null,G__58868));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__60752 = (i + (1));
i = G__60752;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60755 = arguments.length;
var i__4737__auto___60756 = (0);
while(true){
if((i__4737__auto___60756 < len__4736__auto___60755)){
args__4742__auto__.push((arguments[i__4737__auto___60756]));

var G__60757 = (i__4737__auto___60756 + (1));
i__4737__auto___60756 = G__60757;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58888){
var map__58889 = p__58888;
var map__58889__$1 = (((((!((map__58889 == null))))?(((((map__58889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58889):map__58889);
var opts = map__58889__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58878){
var G__58879 = cljs.core.first(seq58878);
var seq58878__$1 = cljs.core.next(seq58878);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58879,seq58878__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__58919 = arguments.length;
switch (G__58919) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__58605__auto___60763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_58972){
var state_val_58974 = (state_58972[(1)]);
if((state_val_58974 === (7))){
var inst_58967 = (state_58972[(2)]);
var state_58972__$1 = state_58972;
var statearr_58977_60764 = state_58972__$1;
(statearr_58977_60764[(2)] = inst_58967);

(statearr_58977_60764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (1))){
var state_58972__$1 = state_58972;
var statearr_58979_60765 = state_58972__$1;
(statearr_58979_60765[(2)] = null);

(statearr_58979_60765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (4))){
var inst_58941 = (state_58972[(7)]);
var inst_58941__$1 = (state_58972[(2)]);
var inst_58946 = (inst_58941__$1 == null);
var state_58972__$1 = (function (){var statearr_58980 = state_58972;
(statearr_58980[(7)] = inst_58941__$1);

return statearr_58980;
})();
if(cljs.core.truth_(inst_58946)){
var statearr_58981_60766 = state_58972__$1;
(statearr_58981_60766[(1)] = (5));

} else {
var statearr_58982_60767 = state_58972__$1;
(statearr_58982_60767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (13))){
var state_58972__$1 = state_58972;
var statearr_58983_60769 = state_58972__$1;
(statearr_58983_60769[(2)] = null);

(statearr_58983_60769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (6))){
var inst_58941 = (state_58972[(7)]);
var state_58972__$1 = state_58972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58972__$1,(11),to,inst_58941);
} else {
if((state_val_58974 === (3))){
var inst_58969 = (state_58972[(2)]);
var state_58972__$1 = state_58972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58972__$1,inst_58969);
} else {
if((state_val_58974 === (12))){
var state_58972__$1 = state_58972;
var statearr_58986_60771 = state_58972__$1;
(statearr_58986_60771[(2)] = null);

(statearr_58986_60771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (2))){
var state_58972__$1 = state_58972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58972__$1,(4),from);
} else {
if((state_val_58974 === (11))){
var inst_58960 = (state_58972[(2)]);
var state_58972__$1 = state_58972;
if(cljs.core.truth_(inst_58960)){
var statearr_58987_60772 = state_58972__$1;
(statearr_58987_60772[(1)] = (12));

} else {
var statearr_58988_60773 = state_58972__$1;
(statearr_58988_60773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (9))){
var state_58972__$1 = state_58972;
var statearr_58989_60774 = state_58972__$1;
(statearr_58989_60774[(2)] = null);

(statearr_58989_60774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (5))){
var state_58972__$1 = state_58972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58990_60775 = state_58972__$1;
(statearr_58990_60775[(1)] = (8));

} else {
var statearr_58991_60776 = state_58972__$1;
(statearr_58991_60776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (14))){
var inst_58965 = (state_58972[(2)]);
var state_58972__$1 = state_58972;
var statearr_58992_60783 = state_58972__$1;
(statearr_58992_60783[(2)] = inst_58965);

(statearr_58992_60783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (10))){
var inst_58953 = (state_58972[(2)]);
var state_58972__$1 = state_58972;
var statearr_58993_60785 = state_58972__$1;
(statearr_58993_60785[(2)] = inst_58953);

(statearr_58993_60785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58974 === (8))){
var inst_58949 = cljs.core.async.close_BANG_(to);
var state_58972__$1 = state_58972;
var statearr_58994_60786 = state_58972__$1;
(statearr_58994_60786[(2)] = inst_58949);

(statearr_58994_60786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_58995 = [null,null,null,null,null,null,null,null];
(statearr_58995[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_58995[(1)] = (1));

return statearr_58995;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_58972){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_58972);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e58996){var ex__58474__auto__ = e58996;
var statearr_58997_60788 = state_58972;
(statearr_58997_60788[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_58972[(4)]))){
var statearr_58998_60789 = state_58972;
(statearr_58998_60789[(1)] = cljs.core.first((state_58972[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60790 = state_58972;
state_58972 = G__60790;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_58972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_58972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_58999 = f__58606__auto__();
(statearr_58999[(6)] = c__58605__auto___60763);

return statearr_58999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__59000){
var vec__59001 = p__59000;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(1),null);
var job = vec__59001;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__58605__auto___60797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59008){
var state_val_59009 = (state_59008[(1)]);
if((state_val_59009 === (1))){
var state_59008__$1 = state_59008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59008__$1,(2),res,v);
} else {
if((state_val_59009 === (2))){
var inst_59005 = (state_59008[(2)]);
var inst_59006 = cljs.core.async.close_BANG_(res);
var state_59008__$1 = (function (){var statearr_59019 = state_59008;
(statearr_59019[(7)] = inst_59005);

return statearr_59019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59008__$1,inst_59006);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0 = (function (){
var statearr_59027 = [null,null,null,null,null,null,null,null];
(statearr_59027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__);

(statearr_59027[(1)] = (1));

return statearr_59027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1 = (function (state_59008){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59008);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59033){var ex__58474__auto__ = e59033;
var statearr_59034_60798 = state_59008;
(statearr_59034_60798[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59008[(4)]))){
var statearr_59039_60799 = state_59008;
(statearr_59039_60799[(1)] = cljs.core.first((state_59008[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60801 = state_59008;
state_59008 = G__60801;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = function(state_59008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1.call(this,state_59008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59043 = f__58606__auto__();
(statearr_59043[(6)] = c__58605__auto___60797);

return statearr_59043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__59049){
var vec__59051 = p__59049;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59051,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59051,(1),null);
var job = vec__59051;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___60802 = n;
var __60803 = (0);
while(true){
if((__60803 < n__4613__auto___60802)){
var G__59062_60804 = type;
var G__59062_60805__$1 = (((G__59062_60804 instanceof cljs.core.Keyword))?G__59062_60804.fqn:null);
switch (G__59062_60805__$1) {
case "compute":
var c__58605__auto___60807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60803,c__58605__auto___60807,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async){
return (function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = ((function (__60803,c__58605__auto___60807,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async){
return (function (state_59079){
var state_val_59080 = (state_59079[(1)]);
if((state_val_59080 === (1))){
var state_59079__$1 = state_59079;
var statearr_59081_60815 = state_59079__$1;
(statearr_59081_60815[(2)] = null);

(statearr_59081_60815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (2))){
var state_59079__$1 = state_59079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59079__$1,(4),jobs);
} else {
if((state_val_59080 === (3))){
var inst_59077 = (state_59079[(2)]);
var state_59079__$1 = state_59079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59079__$1,inst_59077);
} else {
if((state_val_59080 === (4))){
var inst_59069 = (state_59079[(2)]);
var inst_59070 = process(inst_59069);
var state_59079__$1 = state_59079;
if(cljs.core.truth_(inst_59070)){
var statearr_59083_60816 = state_59079__$1;
(statearr_59083_60816[(1)] = (5));

} else {
var statearr_59084_60817 = state_59079__$1;
(statearr_59084_60817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (5))){
var state_59079__$1 = state_59079;
var statearr_59085_60818 = state_59079__$1;
(statearr_59085_60818[(2)] = null);

(statearr_59085_60818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (6))){
var state_59079__$1 = state_59079;
var statearr_59086_60819 = state_59079__$1;
(statearr_59086_60819[(2)] = null);

(statearr_59086_60819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (7))){
var inst_59075 = (state_59079[(2)]);
var state_59079__$1 = state_59079;
var statearr_59087_60820 = state_59079__$1;
(statearr_59087_60820[(2)] = inst_59075);

(statearr_59087_60820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__60803,c__58605__auto___60807,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async))
;
return ((function (__60803,switch__58470__auto__,c__58605__auto___60807,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0 = (function (){
var statearr_59088 = [null,null,null,null,null,null,null];
(statearr_59088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__);

(statearr_59088[(1)] = (1));

return statearr_59088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1 = (function (state_59079){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59079);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59089){var ex__58474__auto__ = e59089;
var statearr_59090_60822 = state_59079;
(statearr_59090_60822[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59079[(4)]))){
var statearr_59091_60823 = state_59079;
(statearr_59091_60823[(1)] = cljs.core.first((state_59079[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60825 = state_59079;
state_59079 = G__60825;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = function(state_59079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1.call(this,state_59079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__;
})()
;})(__60803,switch__58470__auto__,c__58605__auto___60807,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async))
})();
var state__58607__auto__ = (function (){var statearr_59092 = f__58606__auto__();
(statearr_59092[(6)] = c__58605__auto___60807);

return statearr_59092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
});})(__60803,c__58605__auto___60807,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async))
);


break;
case "async":
var c__58605__auto___60827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60803,c__58605__auto___60827,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async){
return (function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = ((function (__60803,c__58605__auto___60827,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async){
return (function (state_59105){
var state_val_59106 = (state_59105[(1)]);
if((state_val_59106 === (1))){
var state_59105__$1 = state_59105;
var statearr_59108_60828 = state_59105__$1;
(statearr_59108_60828[(2)] = null);

(statearr_59108_60828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59106 === (2))){
var state_59105__$1 = state_59105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59105__$1,(4),jobs);
} else {
if((state_val_59106 === (3))){
var inst_59103 = (state_59105[(2)]);
var state_59105__$1 = state_59105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59105__$1,inst_59103);
} else {
if((state_val_59106 === (4))){
var inst_59095 = (state_59105[(2)]);
var inst_59096 = async(inst_59095);
var state_59105__$1 = state_59105;
if(cljs.core.truth_(inst_59096)){
var statearr_59109_60829 = state_59105__$1;
(statearr_59109_60829[(1)] = (5));

} else {
var statearr_59110_60830 = state_59105__$1;
(statearr_59110_60830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59106 === (5))){
var state_59105__$1 = state_59105;
var statearr_59111_60831 = state_59105__$1;
(statearr_59111_60831[(2)] = null);

(statearr_59111_60831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59106 === (6))){
var state_59105__$1 = state_59105;
var statearr_59112_60832 = state_59105__$1;
(statearr_59112_60832[(2)] = null);

(statearr_59112_60832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59106 === (7))){
var inst_59101 = (state_59105[(2)]);
var state_59105__$1 = state_59105;
var statearr_59113_60837 = state_59105__$1;
(statearr_59113_60837[(2)] = inst_59101);

(statearr_59113_60837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__60803,c__58605__auto___60827,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async))
;
return ((function (__60803,switch__58470__auto__,c__58605__auto___60827,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0 = (function (){
var statearr_59114 = [null,null,null,null,null,null,null];
(statearr_59114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__);

(statearr_59114[(1)] = (1));

return statearr_59114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1 = (function (state_59105){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59105);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59115){var ex__58474__auto__ = e59115;
var statearr_59116_60845 = state_59105;
(statearr_59116_60845[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59105[(4)]))){
var statearr_59117_60848 = state_59105;
(statearr_59117_60848[(1)] = cljs.core.first((state_59105[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60850 = state_59105;
state_59105 = G__60850;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = function(state_59105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1.call(this,state_59105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__;
})()
;})(__60803,switch__58470__auto__,c__58605__auto___60827,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async))
})();
var state__58607__auto__ = (function (){var statearr_59118 = f__58606__auto__();
(statearr_59118[(6)] = c__58605__auto___60827);

return statearr_59118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
});})(__60803,c__58605__auto___60827,G__59062_60804,G__59062_60805__$1,n__4613__auto___60802,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59062_60805__$1)].join('')));

}

var G__60854 = (__60803 + (1));
__60803 = G__60854;
continue;
} else {
}
break;
}

var c__58605__auto___60855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59140){
var state_val_59141 = (state_59140[(1)]);
if((state_val_59141 === (7))){
var inst_59136 = (state_59140[(2)]);
var state_59140__$1 = state_59140;
var statearr_59142_60862 = state_59140__$1;
(statearr_59142_60862[(2)] = inst_59136);

(statearr_59142_60862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59141 === (1))){
var state_59140__$1 = state_59140;
var statearr_59143_60863 = state_59140__$1;
(statearr_59143_60863[(2)] = null);

(statearr_59143_60863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59141 === (4))){
var inst_59121 = (state_59140[(7)]);
var inst_59121__$1 = (state_59140[(2)]);
var inst_59122 = (inst_59121__$1 == null);
var state_59140__$1 = (function (){var statearr_59144 = state_59140;
(statearr_59144[(7)] = inst_59121__$1);

return statearr_59144;
})();
if(cljs.core.truth_(inst_59122)){
var statearr_59145_60868 = state_59140__$1;
(statearr_59145_60868[(1)] = (5));

} else {
var statearr_59146_60872 = state_59140__$1;
(statearr_59146_60872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59141 === (6))){
var inst_59126 = (state_59140[(8)]);
var inst_59121 = (state_59140[(7)]);
var inst_59126__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_59127 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59128 = [inst_59121,inst_59126__$1];
var inst_59129 = (new cljs.core.PersistentVector(null,2,(5),inst_59127,inst_59128,null));
var state_59140__$1 = (function (){var statearr_59147 = state_59140;
(statearr_59147[(8)] = inst_59126__$1);

return statearr_59147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59140__$1,(8),jobs,inst_59129);
} else {
if((state_val_59141 === (3))){
var inst_59138 = (state_59140[(2)]);
var state_59140__$1 = state_59140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59140__$1,inst_59138);
} else {
if((state_val_59141 === (2))){
var state_59140__$1 = state_59140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59140__$1,(4),from);
} else {
if((state_val_59141 === (9))){
var inst_59133 = (state_59140[(2)]);
var state_59140__$1 = (function (){var statearr_59148 = state_59140;
(statearr_59148[(9)] = inst_59133);

return statearr_59148;
})();
var statearr_59149_60879 = state_59140__$1;
(statearr_59149_60879[(2)] = null);

(statearr_59149_60879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59141 === (5))){
var inst_59124 = cljs.core.async.close_BANG_(jobs);
var state_59140__$1 = state_59140;
var statearr_59150_60886 = state_59140__$1;
(statearr_59150_60886[(2)] = inst_59124);

(statearr_59150_60886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59141 === (8))){
var inst_59126 = (state_59140[(8)]);
var inst_59131 = (state_59140[(2)]);
var state_59140__$1 = (function (){var statearr_59151 = state_59140;
(statearr_59151[(10)] = inst_59131);

return statearr_59151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59140__$1,(9),results,inst_59126);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0 = (function (){
var statearr_59152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__);

(statearr_59152[(1)] = (1));

return statearr_59152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1 = (function (state_59140){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59140);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59153){var ex__58474__auto__ = e59153;
var statearr_59154_60890 = state_59140;
(statearr_59154_60890[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59140[(4)]))){
var statearr_59155_60891 = state_59140;
(statearr_59155_60891[(1)] = cljs.core.first((state_59140[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60893 = state_59140;
state_59140 = G__60893;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = function(state_59140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1.call(this,state_59140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59156 = f__58606__auto__();
(statearr_59156[(6)] = c__58605__auto___60855);

return statearr_59156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


var c__58605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59194){
var state_val_59195 = (state_59194[(1)]);
if((state_val_59195 === (7))){
var inst_59190 = (state_59194[(2)]);
var state_59194__$1 = state_59194;
var statearr_59196_60895 = state_59194__$1;
(statearr_59196_60895[(2)] = inst_59190);

(statearr_59196_60895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (20))){
var state_59194__$1 = state_59194;
var statearr_59197_60896 = state_59194__$1;
(statearr_59197_60896[(2)] = null);

(statearr_59197_60896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (1))){
var state_59194__$1 = state_59194;
var statearr_59198_60900 = state_59194__$1;
(statearr_59198_60900[(2)] = null);

(statearr_59198_60900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (4))){
var inst_59159 = (state_59194[(7)]);
var inst_59159__$1 = (state_59194[(2)]);
var inst_59160 = (inst_59159__$1 == null);
var state_59194__$1 = (function (){var statearr_59199 = state_59194;
(statearr_59199[(7)] = inst_59159__$1);

return statearr_59199;
})();
if(cljs.core.truth_(inst_59160)){
var statearr_59200_60901 = state_59194__$1;
(statearr_59200_60901[(1)] = (5));

} else {
var statearr_59201_60903 = state_59194__$1;
(statearr_59201_60903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (15))){
var inst_59172 = (state_59194[(8)]);
var state_59194__$1 = state_59194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59194__$1,(18),to,inst_59172);
} else {
if((state_val_59195 === (21))){
var inst_59185 = (state_59194[(2)]);
var state_59194__$1 = state_59194;
var statearr_59202_60906 = state_59194__$1;
(statearr_59202_60906[(2)] = inst_59185);

(statearr_59202_60906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (13))){
var inst_59187 = (state_59194[(2)]);
var state_59194__$1 = (function (){var statearr_59203 = state_59194;
(statearr_59203[(9)] = inst_59187);

return statearr_59203;
})();
var statearr_59204_60907 = state_59194__$1;
(statearr_59204_60907[(2)] = null);

(statearr_59204_60907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (6))){
var inst_59159 = (state_59194[(7)]);
var state_59194__$1 = state_59194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59194__$1,(11),inst_59159);
} else {
if((state_val_59195 === (17))){
var inst_59180 = (state_59194[(2)]);
var state_59194__$1 = state_59194;
if(cljs.core.truth_(inst_59180)){
var statearr_59205_60911 = state_59194__$1;
(statearr_59205_60911[(1)] = (19));

} else {
var statearr_59206_60912 = state_59194__$1;
(statearr_59206_60912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (3))){
var inst_59192 = (state_59194[(2)]);
var state_59194__$1 = state_59194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59194__$1,inst_59192);
} else {
if((state_val_59195 === (12))){
var inst_59169 = (state_59194[(10)]);
var state_59194__$1 = state_59194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59194__$1,(14),inst_59169);
} else {
if((state_val_59195 === (2))){
var state_59194__$1 = state_59194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59194__$1,(4),results);
} else {
if((state_val_59195 === (19))){
var state_59194__$1 = state_59194;
var statearr_59207_60913 = state_59194__$1;
(statearr_59207_60913[(2)] = null);

(statearr_59207_60913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (11))){
var inst_59169 = (state_59194[(2)]);
var state_59194__$1 = (function (){var statearr_59208 = state_59194;
(statearr_59208[(10)] = inst_59169);

return statearr_59208;
})();
var statearr_59209_60916 = state_59194__$1;
(statearr_59209_60916[(2)] = null);

(statearr_59209_60916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (9))){
var state_59194__$1 = state_59194;
var statearr_59210_60917 = state_59194__$1;
(statearr_59210_60917[(2)] = null);

(statearr_59210_60917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (5))){
var state_59194__$1 = state_59194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59211_60918 = state_59194__$1;
(statearr_59211_60918[(1)] = (8));

} else {
var statearr_59212_60920 = state_59194__$1;
(statearr_59212_60920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (14))){
var inst_59172 = (state_59194[(8)]);
var inst_59172__$1 = (state_59194[(2)]);
var inst_59173 = (inst_59172__$1 == null);
var inst_59174 = cljs.core.not(inst_59173);
var state_59194__$1 = (function (){var statearr_59213 = state_59194;
(statearr_59213[(8)] = inst_59172__$1);

return statearr_59213;
})();
if(inst_59174){
var statearr_59214_60923 = state_59194__$1;
(statearr_59214_60923[(1)] = (15));

} else {
var statearr_59215_60924 = state_59194__$1;
(statearr_59215_60924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (16))){
var state_59194__$1 = state_59194;
var statearr_59216_60928 = state_59194__$1;
(statearr_59216_60928[(2)] = false);

(statearr_59216_60928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (10))){
var inst_59166 = (state_59194[(2)]);
var state_59194__$1 = state_59194;
var statearr_59217_60929 = state_59194__$1;
(statearr_59217_60929[(2)] = inst_59166);

(statearr_59217_60929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (18))){
var inst_59177 = (state_59194[(2)]);
var state_59194__$1 = state_59194;
var statearr_59218_60933 = state_59194__$1;
(statearr_59218_60933[(2)] = inst_59177);

(statearr_59218_60933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59195 === (8))){
var inst_59163 = cljs.core.async.close_BANG_(to);
var state_59194__$1 = state_59194;
var statearr_59219_60937 = state_59194__$1;
(statearr_59219_60937[(2)] = inst_59163);

(statearr_59219_60937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0 = (function (){
var statearr_59220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__);

(statearr_59220[(1)] = (1));

return statearr_59220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1 = (function (state_59194){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59194);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59221){var ex__58474__auto__ = e59221;
var statearr_59222_60942 = state_59194;
(statearr_59222_60942[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59194[(4)]))){
var statearr_59223_60943 = state_59194;
(statearr_59223_60943[(1)] = cljs.core.first((state_59194[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60945 = state_59194;
state_59194 = G__60945;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__ = function(state_59194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1.call(this,state_59194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58471__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59224 = f__58606__auto__();
(statearr_59224[(6)] = c__58605__auto__);

return statearr_59224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));

return c__58605__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__59226 = arguments.length;
switch (G__59226) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__59228 = arguments.length;
switch (G__59228) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__59230 = arguments.length;
switch (G__59230) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__58605__auto___60970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59260){
var state_val_59261 = (state_59260[(1)]);
if((state_val_59261 === (7))){
var inst_59256 = (state_59260[(2)]);
var state_59260__$1 = state_59260;
var statearr_59262_60976 = state_59260__$1;
(statearr_59262_60976[(2)] = inst_59256);

(statearr_59262_60976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (1))){
var state_59260__$1 = state_59260;
var statearr_59263_60985 = state_59260__$1;
(statearr_59263_60985[(2)] = null);

(statearr_59263_60985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (4))){
var inst_59237 = (state_59260[(7)]);
var inst_59237__$1 = (state_59260[(2)]);
var inst_59238 = (inst_59237__$1 == null);
var state_59260__$1 = (function (){var statearr_59264 = state_59260;
(statearr_59264[(7)] = inst_59237__$1);

return statearr_59264;
})();
if(cljs.core.truth_(inst_59238)){
var statearr_59265_60986 = state_59260__$1;
(statearr_59265_60986[(1)] = (5));

} else {
var statearr_59266_60987 = state_59260__$1;
(statearr_59266_60987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (13))){
var state_59260__$1 = state_59260;
var statearr_59267_60991 = state_59260__$1;
(statearr_59267_60991[(2)] = null);

(statearr_59267_60991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (6))){
var inst_59237 = (state_59260[(7)]);
var inst_59243 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59237) : p.call(null,inst_59237));
var state_59260__$1 = state_59260;
if(cljs.core.truth_(inst_59243)){
var statearr_59268_60992 = state_59260__$1;
(statearr_59268_60992[(1)] = (9));

} else {
var statearr_59269_60993 = state_59260__$1;
(statearr_59269_60993[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (3))){
var inst_59258 = (state_59260[(2)]);
var state_59260__$1 = state_59260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59260__$1,inst_59258);
} else {
if((state_val_59261 === (12))){
var state_59260__$1 = state_59260;
var statearr_59270_60997 = state_59260__$1;
(statearr_59270_60997[(2)] = null);

(statearr_59270_60997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (2))){
var state_59260__$1 = state_59260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59260__$1,(4),ch);
} else {
if((state_val_59261 === (11))){
var inst_59237 = (state_59260[(7)]);
var inst_59247 = (state_59260[(2)]);
var state_59260__$1 = state_59260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59260__$1,(8),inst_59247,inst_59237);
} else {
if((state_val_59261 === (9))){
var state_59260__$1 = state_59260;
var statearr_59271_61002 = state_59260__$1;
(statearr_59271_61002[(2)] = tc);

(statearr_59271_61002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (5))){
var inst_59240 = cljs.core.async.close_BANG_(tc);
var inst_59241 = cljs.core.async.close_BANG_(fc);
var state_59260__$1 = (function (){var statearr_59272 = state_59260;
(statearr_59272[(8)] = inst_59240);

return statearr_59272;
})();
var statearr_59273_61010 = state_59260__$1;
(statearr_59273_61010[(2)] = inst_59241);

(statearr_59273_61010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (14))){
var inst_59254 = (state_59260[(2)]);
var state_59260__$1 = state_59260;
var statearr_59274_61011 = state_59260__$1;
(statearr_59274_61011[(2)] = inst_59254);

(statearr_59274_61011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (10))){
var state_59260__$1 = state_59260;
var statearr_59275_61012 = state_59260__$1;
(statearr_59275_61012[(2)] = fc);

(statearr_59275_61012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59261 === (8))){
var inst_59249 = (state_59260[(2)]);
var state_59260__$1 = state_59260;
if(cljs.core.truth_(inst_59249)){
var statearr_59276_61013 = state_59260__$1;
(statearr_59276_61013[(1)] = (12));

} else {
var statearr_59277_61014 = state_59260__$1;
(statearr_59277_61014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_59278 = [null,null,null,null,null,null,null,null,null];
(statearr_59278[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_59278[(1)] = (1));

return statearr_59278;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_59260){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59260);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59279){var ex__58474__auto__ = e59279;
var statearr_59280_61015 = state_59260;
(statearr_59280_61015[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59260[(4)]))){
var statearr_59281_61016 = state_59260;
(statearr_59281_61016[(1)] = cljs.core.first((state_59260[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61017 = state_59260;
state_59260 = G__61017;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_59260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_59260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59284 = f__58606__auto__();
(statearr_59284[(6)] = c__58605__auto___60970);

return statearr_59284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__58605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59306){
var state_val_59307 = (state_59306[(1)]);
if((state_val_59307 === (7))){
var inst_59302 = (state_59306[(2)]);
var state_59306__$1 = state_59306;
var statearr_59308_61025 = state_59306__$1;
(statearr_59308_61025[(2)] = inst_59302);

(statearr_59308_61025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (1))){
var inst_59285 = init;
var inst_59286 = inst_59285;
var state_59306__$1 = (function (){var statearr_59309 = state_59306;
(statearr_59309[(7)] = inst_59286);

return statearr_59309;
})();
var statearr_59310_61028 = state_59306__$1;
(statearr_59310_61028[(2)] = null);

(statearr_59310_61028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (4))){
var inst_59289 = (state_59306[(8)]);
var inst_59289__$1 = (state_59306[(2)]);
var inst_59290 = (inst_59289__$1 == null);
var state_59306__$1 = (function (){var statearr_59311 = state_59306;
(statearr_59311[(8)] = inst_59289__$1);

return statearr_59311;
})();
if(cljs.core.truth_(inst_59290)){
var statearr_59312_61029 = state_59306__$1;
(statearr_59312_61029[(1)] = (5));

} else {
var statearr_59313_61030 = state_59306__$1;
(statearr_59313_61030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (6))){
var inst_59293 = (state_59306[(9)]);
var inst_59286 = (state_59306[(7)]);
var inst_59289 = (state_59306[(8)]);
var inst_59293__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59286,inst_59289) : f.call(null,inst_59286,inst_59289));
var inst_59294 = cljs.core.reduced_QMARK_(inst_59293__$1);
var state_59306__$1 = (function (){var statearr_59314 = state_59306;
(statearr_59314[(9)] = inst_59293__$1);

return statearr_59314;
})();
if(inst_59294){
var statearr_59315_61031 = state_59306__$1;
(statearr_59315_61031[(1)] = (8));

} else {
var statearr_59316_61032 = state_59306__$1;
(statearr_59316_61032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (3))){
var inst_59304 = (state_59306[(2)]);
var state_59306__$1 = state_59306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59306__$1,inst_59304);
} else {
if((state_val_59307 === (2))){
var state_59306__$1 = state_59306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59306__$1,(4),ch);
} else {
if((state_val_59307 === (9))){
var inst_59293 = (state_59306[(9)]);
var inst_59286 = inst_59293;
var state_59306__$1 = (function (){var statearr_59317 = state_59306;
(statearr_59317[(7)] = inst_59286);

return statearr_59317;
})();
var statearr_59318_61039 = state_59306__$1;
(statearr_59318_61039[(2)] = null);

(statearr_59318_61039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (5))){
var inst_59286 = (state_59306[(7)]);
var state_59306__$1 = state_59306;
var statearr_59319_61040 = state_59306__$1;
(statearr_59319_61040[(2)] = inst_59286);

(statearr_59319_61040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (10))){
var inst_59300 = (state_59306[(2)]);
var state_59306__$1 = state_59306;
var statearr_59320_61041 = state_59306__$1;
(statearr_59320_61041[(2)] = inst_59300);

(statearr_59320_61041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (8))){
var inst_59293 = (state_59306[(9)]);
var inst_59296 = cljs.core.deref(inst_59293);
var state_59306__$1 = state_59306;
var statearr_59321_61042 = state_59306__$1;
(statearr_59321_61042[(2)] = inst_59296);

(statearr_59321_61042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__58471__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58471__auto____0 = (function (){
var statearr_59322 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59322[(0)] = cljs$core$async$reduce_$_state_machine__58471__auto__);

(statearr_59322[(1)] = (1));

return statearr_59322;
});
var cljs$core$async$reduce_$_state_machine__58471__auto____1 = (function (state_59306){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59306);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59323){var ex__58474__auto__ = e59323;
var statearr_59324_61043 = state_59306;
(statearr_59324_61043[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59306[(4)]))){
var statearr_59325_61044 = state_59306;
(statearr_59325_61044[(1)] = cljs.core.first((state_59306[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61045 = state_59306;
state_59306 = G__61045;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58471__auto__ = function(state_59306){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58471__auto____1.call(this,state_59306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58471__auto____0;
cljs$core$async$reduce_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58471__auto____1;
return cljs$core$async$reduce_$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59326 = f__58606__auto__();
(statearr_59326[(6)] = c__58605__auto__);

return statearr_59326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));

return c__58605__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__58605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59336){
var state_val_59337 = (state_59336[(1)]);
if((state_val_59337 === (1))){
var inst_59331 = cljs.core.async.reduce(f__$1,init,ch);
var state_59336__$1 = state_59336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59336__$1,(2),inst_59331);
} else {
if((state_val_59337 === (2))){
var inst_59333 = (state_59336[(2)]);
var inst_59334 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59333) : f__$1.call(null,inst_59333));
var state_59336__$1 = state_59336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59336__$1,inst_59334);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__58471__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58471__auto____0 = (function (){
var statearr_59338 = [null,null,null,null,null,null,null];
(statearr_59338[(0)] = cljs$core$async$transduce_$_state_machine__58471__auto__);

(statearr_59338[(1)] = (1));

return statearr_59338;
});
var cljs$core$async$transduce_$_state_machine__58471__auto____1 = (function (state_59336){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59336);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59339){var ex__58474__auto__ = e59339;
var statearr_59340_61053 = state_59336;
(statearr_59340_61053[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59336[(4)]))){
var statearr_59341_61054 = state_59336;
(statearr_59341_61054[(1)] = cljs.core.first((state_59336[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61055 = state_59336;
state_59336 = G__61055;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58471__auto__ = function(state_59336){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58471__auto____1.call(this,state_59336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58471__auto____0;
cljs$core$async$transduce_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58471__auto____1;
return cljs$core$async$transduce_$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59342 = f__58606__auto__();
(statearr_59342[(6)] = c__58605__auto__);

return statearr_59342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));

return c__58605__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__59344 = arguments.length;
switch (G__59344) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__58605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59369){
var state_val_59370 = (state_59369[(1)]);
if((state_val_59370 === (7))){
var inst_59351 = (state_59369[(2)]);
var state_59369__$1 = state_59369;
var statearr_59375_61060 = state_59369__$1;
(statearr_59375_61060[(2)] = inst_59351);

(statearr_59375_61060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (1))){
var inst_59345 = cljs.core.seq(coll);
var inst_59346 = inst_59345;
var state_59369__$1 = (function (){var statearr_59376 = state_59369;
(statearr_59376[(7)] = inst_59346);

return statearr_59376;
})();
var statearr_59377_61061 = state_59369__$1;
(statearr_59377_61061[(2)] = null);

(statearr_59377_61061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (4))){
var inst_59346 = (state_59369[(7)]);
var inst_59349 = cljs.core.first(inst_59346);
var state_59369__$1 = state_59369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59369__$1,(7),ch,inst_59349);
} else {
if((state_val_59370 === (13))){
var inst_59363 = (state_59369[(2)]);
var state_59369__$1 = state_59369;
var statearr_59378_61070 = state_59369__$1;
(statearr_59378_61070[(2)] = inst_59363);

(statearr_59378_61070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (6))){
var inst_59354 = (state_59369[(2)]);
var state_59369__$1 = state_59369;
if(cljs.core.truth_(inst_59354)){
var statearr_59379_61071 = state_59369__$1;
(statearr_59379_61071[(1)] = (8));

} else {
var statearr_59380_61072 = state_59369__$1;
(statearr_59380_61072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (3))){
var inst_59367 = (state_59369[(2)]);
var state_59369__$1 = state_59369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59369__$1,inst_59367);
} else {
if((state_val_59370 === (12))){
var state_59369__$1 = state_59369;
var statearr_59381_61074 = state_59369__$1;
(statearr_59381_61074[(2)] = null);

(statearr_59381_61074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (2))){
var inst_59346 = (state_59369[(7)]);
var state_59369__$1 = state_59369;
if(cljs.core.truth_(inst_59346)){
var statearr_59382_61076 = state_59369__$1;
(statearr_59382_61076[(1)] = (4));

} else {
var statearr_59383_61078 = state_59369__$1;
(statearr_59383_61078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (11))){
var inst_59360 = cljs.core.async.close_BANG_(ch);
var state_59369__$1 = state_59369;
var statearr_59384_61081 = state_59369__$1;
(statearr_59384_61081[(2)] = inst_59360);

(statearr_59384_61081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (9))){
var state_59369__$1 = state_59369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59385_61082 = state_59369__$1;
(statearr_59385_61082[(1)] = (11));

} else {
var statearr_59386_61083 = state_59369__$1;
(statearr_59386_61083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (5))){
var inst_59346 = (state_59369[(7)]);
var state_59369__$1 = state_59369;
var statearr_59391_61084 = state_59369__$1;
(statearr_59391_61084[(2)] = inst_59346);

(statearr_59391_61084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (10))){
var inst_59365 = (state_59369[(2)]);
var state_59369__$1 = state_59369;
var statearr_59392_61086 = state_59369__$1;
(statearr_59392_61086[(2)] = inst_59365);

(statearr_59392_61086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59370 === (8))){
var inst_59346 = (state_59369[(7)]);
var inst_59356 = cljs.core.next(inst_59346);
var inst_59346__$1 = inst_59356;
var state_59369__$1 = (function (){var statearr_59393 = state_59369;
(statearr_59393[(7)] = inst_59346__$1);

return statearr_59393;
})();
var statearr_59394_61091 = state_59369__$1;
(statearr_59394_61091[(2)] = null);

(statearr_59394_61091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_59395 = [null,null,null,null,null,null,null,null];
(statearr_59395[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_59395[(1)] = (1));

return statearr_59395;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_59369){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59369);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59396){var ex__58474__auto__ = e59396;
var statearr_59397_61092 = state_59369;
(statearr_59397_61092[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59369[(4)]))){
var statearr_59398_61094 = state_59369;
(statearr_59398_61094[(1)] = cljs.core.first((state_59369[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61098 = state_59369;
state_59369 = G__61098;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_59369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_59369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59399 = f__58606__auto__();
(statearr_59399[(6)] = c__58605__auto__);

return statearr_59399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));

return c__58605__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__59401 = arguments.length;
switch (G__59401) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_61104 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_61104(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_61111 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_61111(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_61114 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_61114(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_61119 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_61119(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59413 = (function (ch,cs,meta59414){
this.ch = ch;
this.cs = cs;
this.meta59414 = meta59414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59415,meta59414__$1){
var self__ = this;
var _59415__$1 = this;
return (new cljs.core.async.t_cljs$core$async59413(self__.ch,self__.cs,meta59414__$1));
}));

(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59415){
var self__ = this;
var _59415__$1 = this;
return self__.meta59414;
}));

(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59413.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59414","meta59414",357542751,null)], null);
}));

(cljs.core.async.t_cljs$core$async59413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59413");

(cljs.core.async.t_cljs$core$async59413.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59413.
 */
cljs.core.async.__GT_t_cljs$core$async59413 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59413(ch__$1,cs__$1,meta59414){
return (new cljs.core.async.t_cljs$core$async59413(ch__$1,cs__$1,meta59414));
});

}

return (new cljs.core.async.t_cljs$core$async59413(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__58605__auto___61134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59562){
var state_val_59563 = (state_59562[(1)]);
if((state_val_59563 === (7))){
var inst_59558 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59564_61138 = state_59562__$1;
(statearr_59564_61138[(2)] = inst_59558);

(statearr_59564_61138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (20))){
var inst_59460 = (state_59562[(7)]);
var inst_59475 = cljs.core.first(inst_59460);
var inst_59476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59475,(0),null);
var inst_59477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59475,(1),null);
var state_59562__$1 = (function (){var statearr_59565 = state_59562;
(statearr_59565[(8)] = inst_59476);

return statearr_59565;
})();
if(cljs.core.truth_(inst_59477)){
var statearr_59566_61140 = state_59562__$1;
(statearr_59566_61140[(1)] = (22));

} else {
var statearr_59567_61141 = state_59562__$1;
(statearr_59567_61141[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (27))){
var inst_59505 = (state_59562[(9)]);
var inst_59507 = (state_59562[(10)]);
var inst_59428 = (state_59562[(11)]);
var inst_59512 = (state_59562[(12)]);
var inst_59512__$1 = cljs.core._nth(inst_59505,inst_59507);
var inst_59513 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59512__$1,inst_59428,done);
var state_59562__$1 = (function (){var statearr_59568 = state_59562;
(statearr_59568[(12)] = inst_59512__$1);

return statearr_59568;
})();
if(cljs.core.truth_(inst_59513)){
var statearr_59569_61143 = state_59562__$1;
(statearr_59569_61143[(1)] = (30));

} else {
var statearr_59570_61146 = state_59562__$1;
(statearr_59570_61146[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (1))){
var state_59562__$1 = state_59562;
var statearr_59571_61151 = state_59562__$1;
(statearr_59571_61151[(2)] = null);

(statearr_59571_61151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (24))){
var inst_59460 = (state_59562[(7)]);
var inst_59482 = (state_59562[(2)]);
var inst_59483 = cljs.core.next(inst_59460);
var inst_59438 = inst_59483;
var inst_59439 = null;
var inst_59440 = (0);
var inst_59441 = (0);
var state_59562__$1 = (function (){var statearr_59572 = state_59562;
(statearr_59572[(13)] = inst_59438);

(statearr_59572[(14)] = inst_59441);

(statearr_59572[(15)] = inst_59482);

(statearr_59572[(16)] = inst_59440);

(statearr_59572[(17)] = inst_59439);

return statearr_59572;
})();
var statearr_59573_61155 = state_59562__$1;
(statearr_59573_61155[(2)] = null);

(statearr_59573_61155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (39))){
var state_59562__$1 = state_59562;
var statearr_59577_61159 = state_59562__$1;
(statearr_59577_61159[(2)] = null);

(statearr_59577_61159[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (4))){
var inst_59428 = (state_59562[(11)]);
var inst_59428__$1 = (state_59562[(2)]);
var inst_59429 = (inst_59428__$1 == null);
var state_59562__$1 = (function (){var statearr_59578 = state_59562;
(statearr_59578[(11)] = inst_59428__$1);

return statearr_59578;
})();
if(cljs.core.truth_(inst_59429)){
var statearr_59579_61166 = state_59562__$1;
(statearr_59579_61166[(1)] = (5));

} else {
var statearr_59580_61167 = state_59562__$1;
(statearr_59580_61167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (15))){
var inst_59438 = (state_59562[(13)]);
var inst_59441 = (state_59562[(14)]);
var inst_59440 = (state_59562[(16)]);
var inst_59439 = (state_59562[(17)]);
var inst_59456 = (state_59562[(2)]);
var inst_59457 = (inst_59441 + (1));
var tmp59574 = inst_59438;
var tmp59575 = inst_59440;
var tmp59576 = inst_59439;
var inst_59438__$1 = tmp59574;
var inst_59439__$1 = tmp59576;
var inst_59440__$1 = tmp59575;
var inst_59441__$1 = inst_59457;
var state_59562__$1 = (function (){var statearr_59581 = state_59562;
(statearr_59581[(18)] = inst_59456);

(statearr_59581[(13)] = inst_59438__$1);

(statearr_59581[(14)] = inst_59441__$1);

(statearr_59581[(16)] = inst_59440__$1);

(statearr_59581[(17)] = inst_59439__$1);

return statearr_59581;
})();
var statearr_59582_61175 = state_59562__$1;
(statearr_59582_61175[(2)] = null);

(statearr_59582_61175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (21))){
var inst_59486 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59586_61179 = state_59562__$1;
(statearr_59586_61179[(2)] = inst_59486);

(statearr_59586_61179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (31))){
var inst_59512 = (state_59562[(12)]);
var inst_59516 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59512);
var state_59562__$1 = state_59562;
var statearr_59587_61180 = state_59562__$1;
(statearr_59587_61180[(2)] = inst_59516);

(statearr_59587_61180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (32))){
var inst_59505 = (state_59562[(9)]);
var inst_59507 = (state_59562[(10)]);
var inst_59506 = (state_59562[(19)]);
var inst_59504 = (state_59562[(20)]);
var inst_59518 = (state_59562[(2)]);
var inst_59519 = (inst_59507 + (1));
var tmp59583 = inst_59505;
var tmp59584 = inst_59506;
var tmp59585 = inst_59504;
var inst_59504__$1 = tmp59585;
var inst_59505__$1 = tmp59583;
var inst_59506__$1 = tmp59584;
var inst_59507__$1 = inst_59519;
var state_59562__$1 = (function (){var statearr_59588 = state_59562;
(statearr_59588[(9)] = inst_59505__$1);

(statearr_59588[(21)] = inst_59518);

(statearr_59588[(10)] = inst_59507__$1);

(statearr_59588[(19)] = inst_59506__$1);

(statearr_59588[(20)] = inst_59504__$1);

return statearr_59588;
})();
var statearr_59589_61181 = state_59562__$1;
(statearr_59589_61181[(2)] = null);

(statearr_59589_61181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (40))){
var inst_59531 = (state_59562[(22)]);
var inst_59535 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59531);
var state_59562__$1 = state_59562;
var statearr_59590_61182 = state_59562__$1;
(statearr_59590_61182[(2)] = inst_59535);

(statearr_59590_61182[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (33))){
var inst_59522 = (state_59562[(23)]);
var inst_59524 = cljs.core.chunked_seq_QMARK_(inst_59522);
var state_59562__$1 = state_59562;
if(inst_59524){
var statearr_59591_61185 = state_59562__$1;
(statearr_59591_61185[(1)] = (36));

} else {
var statearr_59592_61186 = state_59562__$1;
(statearr_59592_61186[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (13))){
var inst_59450 = (state_59562[(24)]);
var inst_59453 = cljs.core.async.close_BANG_(inst_59450);
var state_59562__$1 = state_59562;
var statearr_59594_61188 = state_59562__$1;
(statearr_59594_61188[(2)] = inst_59453);

(statearr_59594_61188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (22))){
var inst_59476 = (state_59562[(8)]);
var inst_59479 = cljs.core.async.close_BANG_(inst_59476);
var state_59562__$1 = state_59562;
var statearr_59595_61189 = state_59562__$1;
(statearr_59595_61189[(2)] = inst_59479);

(statearr_59595_61189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (36))){
var inst_59522 = (state_59562[(23)]);
var inst_59526 = cljs.core.chunk_first(inst_59522);
var inst_59527 = cljs.core.chunk_rest(inst_59522);
var inst_59528 = cljs.core.count(inst_59526);
var inst_59504 = inst_59527;
var inst_59505 = inst_59526;
var inst_59506 = inst_59528;
var inst_59507 = (0);
var state_59562__$1 = (function (){var statearr_59596 = state_59562;
(statearr_59596[(9)] = inst_59505);

(statearr_59596[(10)] = inst_59507);

(statearr_59596[(19)] = inst_59506);

(statearr_59596[(20)] = inst_59504);

return statearr_59596;
})();
var statearr_59597_61190 = state_59562__$1;
(statearr_59597_61190[(2)] = null);

(statearr_59597_61190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (41))){
var inst_59522 = (state_59562[(23)]);
var inst_59537 = (state_59562[(2)]);
var inst_59538 = cljs.core.next(inst_59522);
var inst_59504 = inst_59538;
var inst_59505 = null;
var inst_59506 = (0);
var inst_59507 = (0);
var state_59562__$1 = (function (){var statearr_59598 = state_59562;
(statearr_59598[(9)] = inst_59505);

(statearr_59598[(25)] = inst_59537);

(statearr_59598[(10)] = inst_59507);

(statearr_59598[(19)] = inst_59506);

(statearr_59598[(20)] = inst_59504);

return statearr_59598;
})();
var statearr_59599_61191 = state_59562__$1;
(statearr_59599_61191[(2)] = null);

(statearr_59599_61191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (43))){
var state_59562__$1 = state_59562;
var statearr_59600_61192 = state_59562__$1;
(statearr_59600_61192[(2)] = null);

(statearr_59600_61192[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (29))){
var inst_59546 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59601_61193 = state_59562__$1;
(statearr_59601_61193[(2)] = inst_59546);

(statearr_59601_61193[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (44))){
var inst_59555 = (state_59562[(2)]);
var state_59562__$1 = (function (){var statearr_59602 = state_59562;
(statearr_59602[(26)] = inst_59555);

return statearr_59602;
})();
var statearr_59603_61194 = state_59562__$1;
(statearr_59603_61194[(2)] = null);

(statearr_59603_61194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (6))){
var inst_59496 = (state_59562[(27)]);
var inst_59495 = cljs.core.deref(cs);
var inst_59496__$1 = cljs.core.keys(inst_59495);
var inst_59497 = cljs.core.count(inst_59496__$1);
var inst_59498 = cljs.core.reset_BANG_(dctr,inst_59497);
var inst_59503 = cljs.core.seq(inst_59496__$1);
var inst_59504 = inst_59503;
var inst_59505 = null;
var inst_59506 = (0);
var inst_59507 = (0);
var state_59562__$1 = (function (){var statearr_59604 = state_59562;
(statearr_59604[(9)] = inst_59505);

(statearr_59604[(27)] = inst_59496__$1);

(statearr_59604[(28)] = inst_59498);

(statearr_59604[(10)] = inst_59507);

(statearr_59604[(19)] = inst_59506);

(statearr_59604[(20)] = inst_59504);

return statearr_59604;
})();
var statearr_59605_61199 = state_59562__$1;
(statearr_59605_61199[(2)] = null);

(statearr_59605_61199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (28))){
var inst_59522 = (state_59562[(23)]);
var inst_59504 = (state_59562[(20)]);
var inst_59522__$1 = cljs.core.seq(inst_59504);
var state_59562__$1 = (function (){var statearr_59606 = state_59562;
(statearr_59606[(23)] = inst_59522__$1);

return statearr_59606;
})();
if(inst_59522__$1){
var statearr_59607_61200 = state_59562__$1;
(statearr_59607_61200[(1)] = (33));

} else {
var statearr_59608_61201 = state_59562__$1;
(statearr_59608_61201[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (25))){
var inst_59507 = (state_59562[(10)]);
var inst_59506 = (state_59562[(19)]);
var inst_59509 = (inst_59507 < inst_59506);
var inst_59510 = inst_59509;
var state_59562__$1 = state_59562;
if(cljs.core.truth_(inst_59510)){
var statearr_59613_61202 = state_59562__$1;
(statearr_59613_61202[(1)] = (27));

} else {
var statearr_59616_61203 = state_59562__$1;
(statearr_59616_61203[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (34))){
var state_59562__$1 = state_59562;
var statearr_59621_61204 = state_59562__$1;
(statearr_59621_61204[(2)] = null);

(statearr_59621_61204[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (17))){
var state_59562__$1 = state_59562;
var statearr_59629_61209 = state_59562__$1;
(statearr_59629_61209[(2)] = null);

(statearr_59629_61209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (3))){
var inst_59560 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59562__$1,inst_59560);
} else {
if((state_val_59563 === (12))){
var inst_59491 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59636_61211 = state_59562__$1;
(statearr_59636_61211[(2)] = inst_59491);

(statearr_59636_61211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (2))){
var state_59562__$1 = state_59562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59562__$1,(4),ch);
} else {
if((state_val_59563 === (23))){
var state_59562__$1 = state_59562;
var statearr_59637_61212 = state_59562__$1;
(statearr_59637_61212[(2)] = null);

(statearr_59637_61212[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (35))){
var inst_59544 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59638_61213 = state_59562__$1;
(statearr_59638_61213[(2)] = inst_59544);

(statearr_59638_61213[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (19))){
var inst_59460 = (state_59562[(7)]);
var inst_59464 = cljs.core.chunk_first(inst_59460);
var inst_59465 = cljs.core.chunk_rest(inst_59460);
var inst_59466 = cljs.core.count(inst_59464);
var inst_59438 = inst_59465;
var inst_59439 = inst_59464;
var inst_59440 = inst_59466;
var inst_59441 = (0);
var state_59562__$1 = (function (){var statearr_59639 = state_59562;
(statearr_59639[(13)] = inst_59438);

(statearr_59639[(14)] = inst_59441);

(statearr_59639[(16)] = inst_59440);

(statearr_59639[(17)] = inst_59439);

return statearr_59639;
})();
var statearr_59640_61216 = state_59562__$1;
(statearr_59640_61216[(2)] = null);

(statearr_59640_61216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (11))){
var inst_59460 = (state_59562[(7)]);
var inst_59438 = (state_59562[(13)]);
var inst_59460__$1 = cljs.core.seq(inst_59438);
var state_59562__$1 = (function (){var statearr_59641 = state_59562;
(statearr_59641[(7)] = inst_59460__$1);

return statearr_59641;
})();
if(inst_59460__$1){
var statearr_59642_61220 = state_59562__$1;
(statearr_59642_61220[(1)] = (16));

} else {
var statearr_59643_61221 = state_59562__$1;
(statearr_59643_61221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (9))){
var inst_59493 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59645_61222 = state_59562__$1;
(statearr_59645_61222[(2)] = inst_59493);

(statearr_59645_61222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (5))){
var inst_59436 = cljs.core.deref(cs);
var inst_59437 = cljs.core.seq(inst_59436);
var inst_59438 = inst_59437;
var inst_59439 = null;
var inst_59440 = (0);
var inst_59441 = (0);
var state_59562__$1 = (function (){var statearr_59646 = state_59562;
(statearr_59646[(13)] = inst_59438);

(statearr_59646[(14)] = inst_59441);

(statearr_59646[(16)] = inst_59440);

(statearr_59646[(17)] = inst_59439);

return statearr_59646;
})();
var statearr_59647_61223 = state_59562__$1;
(statearr_59647_61223[(2)] = null);

(statearr_59647_61223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (14))){
var state_59562__$1 = state_59562;
var statearr_59648_61224 = state_59562__$1;
(statearr_59648_61224[(2)] = null);

(statearr_59648_61224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (45))){
var inst_59552 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59651_61225 = state_59562__$1;
(statearr_59651_61225[(2)] = inst_59552);

(statearr_59651_61225[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (26))){
var inst_59496 = (state_59562[(27)]);
var inst_59548 = (state_59562[(2)]);
var inst_59549 = cljs.core.seq(inst_59496);
var state_59562__$1 = (function (){var statearr_59652 = state_59562;
(statearr_59652[(29)] = inst_59548);

return statearr_59652;
})();
if(inst_59549){
var statearr_59653_61226 = state_59562__$1;
(statearr_59653_61226[(1)] = (42));

} else {
var statearr_59654_61227 = state_59562__$1;
(statearr_59654_61227[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (16))){
var inst_59460 = (state_59562[(7)]);
var inst_59462 = cljs.core.chunked_seq_QMARK_(inst_59460);
var state_59562__$1 = state_59562;
if(inst_59462){
var statearr_59655_61228 = state_59562__$1;
(statearr_59655_61228[(1)] = (19));

} else {
var statearr_59656_61229 = state_59562__$1;
(statearr_59656_61229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (38))){
var inst_59541 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59657_61230 = state_59562__$1;
(statearr_59657_61230[(2)] = inst_59541);

(statearr_59657_61230[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (30))){
var state_59562__$1 = state_59562;
var statearr_59658_61231 = state_59562__$1;
(statearr_59658_61231[(2)] = null);

(statearr_59658_61231[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (10))){
var inst_59441 = (state_59562[(14)]);
var inst_59439 = (state_59562[(17)]);
var inst_59449 = cljs.core._nth(inst_59439,inst_59441);
var inst_59450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59449,(0),null);
var inst_59451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59449,(1),null);
var state_59562__$1 = (function (){var statearr_59659 = state_59562;
(statearr_59659[(24)] = inst_59450);

return statearr_59659;
})();
if(cljs.core.truth_(inst_59451)){
var statearr_59660_61232 = state_59562__$1;
(statearr_59660_61232[(1)] = (13));

} else {
var statearr_59661_61233 = state_59562__$1;
(statearr_59661_61233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (18))){
var inst_59489 = (state_59562[(2)]);
var state_59562__$1 = state_59562;
var statearr_59662_61234 = state_59562__$1;
(statearr_59662_61234[(2)] = inst_59489);

(statearr_59662_61234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (42))){
var state_59562__$1 = state_59562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59562__$1,(45),dchan);
} else {
if((state_val_59563 === (37))){
var inst_59522 = (state_59562[(23)]);
var inst_59428 = (state_59562[(11)]);
var inst_59531 = (state_59562[(22)]);
var inst_59531__$1 = cljs.core.first(inst_59522);
var inst_59532 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59531__$1,inst_59428,done);
var state_59562__$1 = (function (){var statearr_59672 = state_59562;
(statearr_59672[(22)] = inst_59531__$1);

return statearr_59672;
})();
if(cljs.core.truth_(inst_59532)){
var statearr_59673_61238 = state_59562__$1;
(statearr_59673_61238[(1)] = (39));

} else {
var statearr_59676_61239 = state_59562__$1;
(statearr_59676_61239[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59563 === (8))){
var inst_59441 = (state_59562[(14)]);
var inst_59440 = (state_59562[(16)]);
var inst_59443 = (inst_59441 < inst_59440);
var inst_59444 = inst_59443;
var state_59562__$1 = state_59562;
if(cljs.core.truth_(inst_59444)){
var statearr_59683_61240 = state_59562__$1;
(statearr_59683_61240[(1)] = (10));

} else {
var statearr_59688_61241 = state_59562__$1;
(statearr_59688_61241[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__58471__auto__ = null;
var cljs$core$async$mult_$_state_machine__58471__auto____0 = (function (){
var statearr_59689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59689[(0)] = cljs$core$async$mult_$_state_machine__58471__auto__);

(statearr_59689[(1)] = (1));

return statearr_59689;
});
var cljs$core$async$mult_$_state_machine__58471__auto____1 = (function (state_59562){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59562);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59690){var ex__58474__auto__ = e59690;
var statearr_59691_61242 = state_59562;
(statearr_59691_61242[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59562[(4)]))){
var statearr_59692_61243 = state_59562;
(statearr_59692_61243[(1)] = cljs.core.first((state_59562[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61244 = state_59562;
state_59562 = G__61244;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58471__auto__ = function(state_59562){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58471__auto____1.call(this,state_59562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58471__auto____0;
cljs$core$async$mult_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58471__auto____1;
return cljs$core$async$mult_$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59693 = f__58606__auto__();
(statearr_59693[(6)] = c__58605__auto___61134);

return statearr_59693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__59707 = arguments.length;
switch (G__59707) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_61247 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_61247(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_61248 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_61248(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_61254 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_61254(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_61255 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_61255(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_61258 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_61258(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61262 = arguments.length;
var i__4737__auto___61263 = (0);
while(true){
if((i__4737__auto___61263 < len__4736__auto___61262)){
args__4742__auto__.push((arguments[i__4737__auto___61263]));

var G__61264 = (i__4737__auto___61263 + (1));
i__4737__auto___61263 = G__61264;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59755){
var map__59756 = p__59755;
var map__59756__$1 = (((((!((map__59756 == null))))?(((((map__59756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59756):map__59756);
var opts = map__59756__$1;
var statearr_59758_61265 = state;
(statearr_59758_61265[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_59760_61266 = state;
(statearr_59760_61266[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_59761_61267 = state;
(statearr_59761_61267[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59739){
var G__59744 = cljs.core.first(seq59739);
var seq59739__$1 = cljs.core.next(seq59739);
var G__59745 = cljs.core.first(seq59739__$1);
var seq59739__$2 = cljs.core.next(seq59739__$1);
var G__59746 = cljs.core.first(seq59739__$2);
var seq59739__$3 = cljs.core.next(seq59739__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59744,G__59745,G__59746,seq59739__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59762 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59763){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59763 = meta59763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59764,meta59763__$1){
var self__ = this;
var _59764__$1 = this;
return (new cljs.core.async.t_cljs$core$async59762(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59763__$1));
}));

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59764){
var self__ = this;
var _59764__$1 = this;
return self__.meta59763;
}));

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59762.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59763","meta59763",961955757,null)], null);
}));

(cljs.core.async.t_cljs$core$async59762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59762");

(cljs.core.async.t_cljs$core$async59762.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59762.
 */
cljs.core.async.__GT_t_cljs$core$async59762 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59762(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59763){
return (new cljs.core.async.t_cljs$core$async59762(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59763));
});

}

return (new cljs.core.async.t_cljs$core$async59762(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58605__auto___61275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_59866){
var state_val_59867 = (state_59866[(1)]);
if((state_val_59867 === (7))){
var inst_59781 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
var statearr_59868_61276 = state_59866__$1;
(statearr_59868_61276[(2)] = inst_59781);

(statearr_59868_61276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (20))){
var inst_59793 = (state_59866[(7)]);
var state_59866__$1 = state_59866;
var statearr_59869_61277 = state_59866__$1;
(statearr_59869_61277[(2)] = inst_59793);

(statearr_59869_61277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (27))){
var state_59866__$1 = state_59866;
var statearr_59870_61278 = state_59866__$1;
(statearr_59870_61278[(2)] = null);

(statearr_59870_61278[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (1))){
var inst_59768 = (state_59866[(8)]);
var inst_59768__$1 = calc_state();
var inst_59770 = (inst_59768__$1 == null);
var inst_59771 = cljs.core.not(inst_59770);
var state_59866__$1 = (function (){var statearr_59871 = state_59866;
(statearr_59871[(8)] = inst_59768__$1);

return statearr_59871;
})();
if(inst_59771){
var statearr_59872_61279 = state_59866__$1;
(statearr_59872_61279[(1)] = (2));

} else {
var statearr_59873_61280 = state_59866__$1;
(statearr_59873_61280[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (24))){
var inst_59817 = (state_59866[(9)]);
var inst_59840 = (state_59866[(10)]);
var inst_59826 = (state_59866[(11)]);
var inst_59840__$1 = (inst_59817.cljs$core$IFn$_invoke$arity$1 ? inst_59817.cljs$core$IFn$_invoke$arity$1(inst_59826) : inst_59817.call(null,inst_59826));
var state_59866__$1 = (function (){var statearr_59874 = state_59866;
(statearr_59874[(10)] = inst_59840__$1);

return statearr_59874;
})();
if(cljs.core.truth_(inst_59840__$1)){
var statearr_59875_61281 = state_59866__$1;
(statearr_59875_61281[(1)] = (29));

} else {
var statearr_59876_61282 = state_59866__$1;
(statearr_59876_61282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (4))){
var inst_59784 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
if(cljs.core.truth_(inst_59784)){
var statearr_59877_61283 = state_59866__$1;
(statearr_59877_61283[(1)] = (8));

} else {
var statearr_59878_61284 = state_59866__$1;
(statearr_59878_61284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (15))){
var inst_59811 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
if(cljs.core.truth_(inst_59811)){
var statearr_59879_61289 = state_59866__$1;
(statearr_59879_61289[(1)] = (19));

} else {
var statearr_59880_61290 = state_59866__$1;
(statearr_59880_61290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (21))){
var inst_59816 = (state_59866[(12)]);
var inst_59816__$1 = (state_59866[(2)]);
var inst_59817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59816__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59816__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59816__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59866__$1 = (function (){var statearr_59881 = state_59866;
(statearr_59881[(9)] = inst_59817);

(statearr_59881[(13)] = inst_59818);

(statearr_59881[(12)] = inst_59816__$1);

return statearr_59881;
})();
return cljs.core.async.ioc_alts_BANG_(state_59866__$1,(22),inst_59819);
} else {
if((state_val_59867 === (31))){
var inst_59848 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
if(cljs.core.truth_(inst_59848)){
var statearr_59882_61295 = state_59866__$1;
(statearr_59882_61295[(1)] = (32));

} else {
var statearr_59883_61296 = state_59866__$1;
(statearr_59883_61296[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (32))){
var inst_59825 = (state_59866[(14)]);
var state_59866__$1 = state_59866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59866__$1,(35),out,inst_59825);
} else {
if((state_val_59867 === (33))){
var inst_59816 = (state_59866[(12)]);
var inst_59793 = inst_59816;
var state_59866__$1 = (function (){var statearr_59884 = state_59866;
(statearr_59884[(7)] = inst_59793);

return statearr_59884;
})();
var statearr_59885_61299 = state_59866__$1;
(statearr_59885_61299[(2)] = null);

(statearr_59885_61299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (13))){
var inst_59793 = (state_59866[(7)]);
var inst_59800 = inst_59793.cljs$lang$protocol_mask$partition0$;
var inst_59801 = (inst_59800 & (64));
var inst_59802 = inst_59793.cljs$core$ISeq$;
var inst_59803 = (cljs.core.PROTOCOL_SENTINEL === inst_59802);
var inst_59804 = ((inst_59801) || (inst_59803));
var state_59866__$1 = state_59866;
if(cljs.core.truth_(inst_59804)){
var statearr_59886_61300 = state_59866__$1;
(statearr_59886_61300[(1)] = (16));

} else {
var statearr_59887_61301 = state_59866__$1;
(statearr_59887_61301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (22))){
var inst_59825 = (state_59866[(14)]);
var inst_59826 = (state_59866[(11)]);
var inst_59824 = (state_59866[(2)]);
var inst_59825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59824,(0),null);
var inst_59826__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59824,(1),null);
var inst_59827 = (inst_59825__$1 == null);
var inst_59828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59826__$1,change);
var inst_59829 = ((inst_59827) || (inst_59828));
var state_59866__$1 = (function (){var statearr_59888 = state_59866;
(statearr_59888[(14)] = inst_59825__$1);

(statearr_59888[(11)] = inst_59826__$1);

return statearr_59888;
})();
if(cljs.core.truth_(inst_59829)){
var statearr_59889_61302 = state_59866__$1;
(statearr_59889_61302[(1)] = (23));

} else {
var statearr_59890_61303 = state_59866__$1;
(statearr_59890_61303[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (36))){
var inst_59816 = (state_59866[(12)]);
var inst_59793 = inst_59816;
var state_59866__$1 = (function (){var statearr_59891 = state_59866;
(statearr_59891[(7)] = inst_59793);

return statearr_59891;
})();
var statearr_59892_61304 = state_59866__$1;
(statearr_59892_61304[(2)] = null);

(statearr_59892_61304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (29))){
var inst_59840 = (state_59866[(10)]);
var state_59866__$1 = state_59866;
var statearr_59893_61305 = state_59866__$1;
(statearr_59893_61305[(2)] = inst_59840);

(statearr_59893_61305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (6))){
var state_59866__$1 = state_59866;
var statearr_59894_61306 = state_59866__$1;
(statearr_59894_61306[(2)] = false);

(statearr_59894_61306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (28))){
var inst_59836 = (state_59866[(2)]);
var inst_59837 = calc_state();
var inst_59793 = inst_59837;
var state_59866__$1 = (function (){var statearr_59895 = state_59866;
(statearr_59895[(15)] = inst_59836);

(statearr_59895[(7)] = inst_59793);

return statearr_59895;
})();
var statearr_59896_61307 = state_59866__$1;
(statearr_59896_61307[(2)] = null);

(statearr_59896_61307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (25))){
var inst_59862 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
var statearr_59897_61308 = state_59866__$1;
(statearr_59897_61308[(2)] = inst_59862);

(statearr_59897_61308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (34))){
var inst_59860 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
var statearr_59898_61309 = state_59866__$1;
(statearr_59898_61309[(2)] = inst_59860);

(statearr_59898_61309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (17))){
var state_59866__$1 = state_59866;
var statearr_59899_61310 = state_59866__$1;
(statearr_59899_61310[(2)] = false);

(statearr_59899_61310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (3))){
var state_59866__$1 = state_59866;
var statearr_59900_61311 = state_59866__$1;
(statearr_59900_61311[(2)] = false);

(statearr_59900_61311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (12))){
var inst_59864 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59866__$1,inst_59864);
} else {
if((state_val_59867 === (2))){
var inst_59768 = (state_59866[(8)]);
var inst_59773 = inst_59768.cljs$lang$protocol_mask$partition0$;
var inst_59774 = (inst_59773 & (64));
var inst_59775 = inst_59768.cljs$core$ISeq$;
var inst_59776 = (cljs.core.PROTOCOL_SENTINEL === inst_59775);
var inst_59777 = ((inst_59774) || (inst_59776));
var state_59866__$1 = state_59866;
if(cljs.core.truth_(inst_59777)){
var statearr_59901_61312 = state_59866__$1;
(statearr_59901_61312[(1)] = (5));

} else {
var statearr_59902_61313 = state_59866__$1;
(statearr_59902_61313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (23))){
var inst_59825 = (state_59866[(14)]);
var inst_59831 = (inst_59825 == null);
var state_59866__$1 = state_59866;
if(cljs.core.truth_(inst_59831)){
var statearr_59903_61314 = state_59866__$1;
(statearr_59903_61314[(1)] = (26));

} else {
var statearr_59904_61315 = state_59866__$1;
(statearr_59904_61315[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (35))){
var inst_59851 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
if(cljs.core.truth_(inst_59851)){
var statearr_59905_61316 = state_59866__$1;
(statearr_59905_61316[(1)] = (36));

} else {
var statearr_59906_61317 = state_59866__$1;
(statearr_59906_61317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (19))){
var inst_59793 = (state_59866[(7)]);
var inst_59813 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59793);
var state_59866__$1 = state_59866;
var statearr_59907_61318 = state_59866__$1;
(statearr_59907_61318[(2)] = inst_59813);

(statearr_59907_61318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (11))){
var inst_59793 = (state_59866[(7)]);
var inst_59797 = (inst_59793 == null);
var inst_59798 = cljs.core.not(inst_59797);
var state_59866__$1 = state_59866;
if(inst_59798){
var statearr_59908_61319 = state_59866__$1;
(statearr_59908_61319[(1)] = (13));

} else {
var statearr_59909_61320 = state_59866__$1;
(statearr_59909_61320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (9))){
var inst_59768 = (state_59866[(8)]);
var state_59866__$1 = state_59866;
var statearr_59910_61321 = state_59866__$1;
(statearr_59910_61321[(2)] = inst_59768);

(statearr_59910_61321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (5))){
var state_59866__$1 = state_59866;
var statearr_59911_61325 = state_59866__$1;
(statearr_59911_61325[(2)] = true);

(statearr_59911_61325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (14))){
var state_59866__$1 = state_59866;
var statearr_59912_61326 = state_59866__$1;
(statearr_59912_61326[(2)] = false);

(statearr_59912_61326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (26))){
var inst_59826 = (state_59866[(11)]);
var inst_59833 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59826);
var state_59866__$1 = state_59866;
var statearr_59913_61334 = state_59866__$1;
(statearr_59913_61334[(2)] = inst_59833);

(statearr_59913_61334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (16))){
var state_59866__$1 = state_59866;
var statearr_59914_61335 = state_59866__$1;
(statearr_59914_61335[(2)] = true);

(statearr_59914_61335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (38))){
var inst_59856 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
var statearr_59915_61336 = state_59866__$1;
(statearr_59915_61336[(2)] = inst_59856);

(statearr_59915_61336[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (30))){
var inst_59817 = (state_59866[(9)]);
var inst_59818 = (state_59866[(13)]);
var inst_59826 = (state_59866[(11)]);
var inst_59843 = cljs.core.empty_QMARK_(inst_59817);
var inst_59844 = (inst_59818.cljs$core$IFn$_invoke$arity$1 ? inst_59818.cljs$core$IFn$_invoke$arity$1(inst_59826) : inst_59818.call(null,inst_59826));
var inst_59845 = cljs.core.not(inst_59844);
var inst_59846 = ((inst_59843) && (inst_59845));
var state_59866__$1 = state_59866;
var statearr_59916_61337 = state_59866__$1;
(statearr_59916_61337[(2)] = inst_59846);

(statearr_59916_61337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (10))){
var inst_59768 = (state_59866[(8)]);
var inst_59789 = (state_59866[(2)]);
var inst_59790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59789,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59789,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59789,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59793 = inst_59768;
var state_59866__$1 = (function (){var statearr_59917 = state_59866;
(statearr_59917[(16)] = inst_59790);

(statearr_59917[(7)] = inst_59793);

(statearr_59917[(17)] = inst_59791);

(statearr_59917[(18)] = inst_59792);

return statearr_59917;
})();
var statearr_59918_61341 = state_59866__$1;
(statearr_59918_61341[(2)] = null);

(statearr_59918_61341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (18))){
var inst_59808 = (state_59866[(2)]);
var state_59866__$1 = state_59866;
var statearr_59919_61342 = state_59866__$1;
(statearr_59919_61342[(2)] = inst_59808);

(statearr_59919_61342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (37))){
var state_59866__$1 = state_59866;
var statearr_59920_61343 = state_59866__$1;
(statearr_59920_61343[(2)] = null);

(statearr_59920_61343[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59867 === (8))){
var inst_59768 = (state_59866[(8)]);
var inst_59786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59768);
var state_59866__$1 = state_59866;
var statearr_59921_61347 = state_59866__$1;
(statearr_59921_61347[(2)] = inst_59786);

(statearr_59921_61347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__58471__auto__ = null;
var cljs$core$async$mix_$_state_machine__58471__auto____0 = (function (){
var statearr_59922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59922[(0)] = cljs$core$async$mix_$_state_machine__58471__auto__);

(statearr_59922[(1)] = (1));

return statearr_59922;
});
var cljs$core$async$mix_$_state_machine__58471__auto____1 = (function (state_59866){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_59866);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e59923){var ex__58474__auto__ = e59923;
var statearr_59924_61348 = state_59866;
(statearr_59924_61348[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_59866[(4)]))){
var statearr_59925_61349 = state_59866;
(statearr_59925_61349[(1)] = cljs.core.first((state_59866[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61350 = state_59866;
state_59866 = G__61350;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58471__auto__ = function(state_59866){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58471__auto____1.call(this,state_59866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58471__auto____0;
cljs$core$async$mix_$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58471__auto____1;
return cljs$core$async$mix_$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_59926 = f__58606__auto__();
(statearr_59926[(6)] = c__58605__auto___61275);

return statearr_59926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_61354 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_61354(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_61359 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_61359(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_61372 = (function() {
var G__61373 = null;
var G__61373__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__61373__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__61373 = function(p,v){
switch(arguments.length){
case 1:
return G__61373__1.call(this,p);
case 2:
return G__61373__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61373.cljs$core$IFn$_invoke$arity$1 = G__61373__1;
G__61373.cljs$core$IFn$_invoke$arity$2 = G__61373__2;
return G__61373;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59928 = arguments.length;
switch (G__59928) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61372(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61372(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__59931 = arguments.length;
switch (G__59931) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__59929_SHARP_){
if(cljs.core.truth_((p1__59929_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59929_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__59929_SHARP_.call(null,topic)))){
return p1__59929_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59929_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59932 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59933){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59933 = meta59933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59934,meta59933__$1){
var self__ = this;
var _59934__$1 = this;
return (new cljs.core.async.t_cljs$core$async59932(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59933__$1));
}));

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59934){
var self__ = this;
var _59934__$1 = this;
return self__.meta59933;
}));

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async59932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async59932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59933","meta59933",-236906216,null)], null);
}));

(cljs.core.async.t_cljs$core$async59932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59932");

(cljs.core.async.t_cljs$core$async59932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59932.
 */
cljs.core.async.__GT_t_cljs$core$async59932 = (function cljs$core$async$__GT_t_cljs$core$async59932(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59933){
return (new cljs.core.async.t_cljs$core$async59932(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59933));
});

}

return (new cljs.core.async.t_cljs$core$async59932(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58605__auto___61388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60013){
var state_val_60014 = (state_60013[(1)]);
if((state_val_60014 === (7))){
var inst_60009 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
var statearr_60016_61389 = state_60013__$1;
(statearr_60016_61389[(2)] = inst_60009);

(statearr_60016_61389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (20))){
var state_60013__$1 = state_60013;
var statearr_60017_61396 = state_60013__$1;
(statearr_60017_61396[(2)] = null);

(statearr_60017_61396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (1))){
var state_60013__$1 = state_60013;
var statearr_60018_61397 = state_60013__$1;
(statearr_60018_61397[(2)] = null);

(statearr_60018_61397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (24))){
var inst_59992 = (state_60013[(7)]);
var inst_60001 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_59992);
var state_60013__$1 = state_60013;
var statearr_60020_61398 = state_60013__$1;
(statearr_60020_61398[(2)] = inst_60001);

(statearr_60020_61398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (4))){
var inst_59942 = (state_60013[(8)]);
var inst_59942__$1 = (state_60013[(2)]);
var inst_59943 = (inst_59942__$1 == null);
var state_60013__$1 = (function (){var statearr_60021 = state_60013;
(statearr_60021[(8)] = inst_59942__$1);

return statearr_60021;
})();
if(cljs.core.truth_(inst_59943)){
var statearr_60022_61399 = state_60013__$1;
(statearr_60022_61399[(1)] = (5));

} else {
var statearr_60023_61400 = state_60013__$1;
(statearr_60023_61400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (15))){
var inst_59986 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
var statearr_60024_61401 = state_60013__$1;
(statearr_60024_61401[(2)] = inst_59986);

(statearr_60024_61401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (21))){
var inst_60006 = (state_60013[(2)]);
var state_60013__$1 = (function (){var statearr_60025 = state_60013;
(statearr_60025[(9)] = inst_60006);

return statearr_60025;
})();
var statearr_60026_61402 = state_60013__$1;
(statearr_60026_61402[(2)] = null);

(statearr_60026_61402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (13))){
var inst_59967 = (state_60013[(10)]);
var inst_59969 = cljs.core.chunked_seq_QMARK_(inst_59967);
var state_60013__$1 = state_60013;
if(inst_59969){
var statearr_60027_61403 = state_60013__$1;
(statearr_60027_61403[(1)] = (16));

} else {
var statearr_60028_61404 = state_60013__$1;
(statearr_60028_61404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (22))){
var inst_59998 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
if(cljs.core.truth_(inst_59998)){
var statearr_60029_61405 = state_60013__$1;
(statearr_60029_61405[(1)] = (23));

} else {
var statearr_60030_61406 = state_60013__$1;
(statearr_60030_61406[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (6))){
var inst_59942 = (state_60013[(8)]);
var inst_59994 = (state_60013[(11)]);
var inst_59992 = (state_60013[(7)]);
var inst_59992__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_59942) : topic_fn.call(null,inst_59942));
var inst_59993 = cljs.core.deref(mults);
var inst_59994__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59993,inst_59992__$1);
var state_60013__$1 = (function (){var statearr_60031 = state_60013;
(statearr_60031[(11)] = inst_59994__$1);

(statearr_60031[(7)] = inst_59992__$1);

return statearr_60031;
})();
if(cljs.core.truth_(inst_59994__$1)){
var statearr_60032_61409 = state_60013__$1;
(statearr_60032_61409[(1)] = (19));

} else {
var statearr_60033_61410 = state_60013__$1;
(statearr_60033_61410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (25))){
var inst_60003 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
var statearr_60034_61411 = state_60013__$1;
(statearr_60034_61411[(2)] = inst_60003);

(statearr_60034_61411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (17))){
var inst_59967 = (state_60013[(10)]);
var inst_59977 = cljs.core.first(inst_59967);
var inst_59978 = cljs.core.async.muxch_STAR_(inst_59977);
var inst_59979 = cljs.core.async.close_BANG_(inst_59978);
var inst_59980 = cljs.core.next(inst_59967);
var inst_59953 = inst_59980;
var inst_59954 = null;
var inst_59955 = (0);
var inst_59956 = (0);
var state_60013__$1 = (function (){var statearr_60035 = state_60013;
(statearr_60035[(12)] = inst_59955);

(statearr_60035[(13)] = inst_59956);

(statearr_60035[(14)] = inst_59954);

(statearr_60035[(15)] = inst_59953);

(statearr_60035[(16)] = inst_59979);

return statearr_60035;
})();
var statearr_60036_61412 = state_60013__$1;
(statearr_60036_61412[(2)] = null);

(statearr_60036_61412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (3))){
var inst_60011 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60013__$1,inst_60011);
} else {
if((state_val_60014 === (12))){
var inst_59988 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
var statearr_60037_61415 = state_60013__$1;
(statearr_60037_61415[(2)] = inst_59988);

(statearr_60037_61415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (2))){
var state_60013__$1 = state_60013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60013__$1,(4),ch);
} else {
if((state_val_60014 === (23))){
var state_60013__$1 = state_60013;
var statearr_60038_61416 = state_60013__$1;
(statearr_60038_61416[(2)] = null);

(statearr_60038_61416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (19))){
var inst_59942 = (state_60013[(8)]);
var inst_59994 = (state_60013[(11)]);
var inst_59996 = cljs.core.async.muxch_STAR_(inst_59994);
var state_60013__$1 = state_60013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60013__$1,(22),inst_59996,inst_59942);
} else {
if((state_val_60014 === (11))){
var inst_59967 = (state_60013[(10)]);
var inst_59953 = (state_60013[(15)]);
var inst_59967__$1 = cljs.core.seq(inst_59953);
var state_60013__$1 = (function (){var statearr_60039 = state_60013;
(statearr_60039[(10)] = inst_59967__$1);

return statearr_60039;
})();
if(inst_59967__$1){
var statearr_60040_61417 = state_60013__$1;
(statearr_60040_61417[(1)] = (13));

} else {
var statearr_60041_61418 = state_60013__$1;
(statearr_60041_61418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (9))){
var inst_59990 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
var statearr_60042_61419 = state_60013__$1;
(statearr_60042_61419[(2)] = inst_59990);

(statearr_60042_61419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (5))){
var inst_59949 = cljs.core.deref(mults);
var inst_59950 = cljs.core.vals(inst_59949);
var inst_59951 = cljs.core.seq(inst_59950);
var inst_59953 = inst_59951;
var inst_59954 = null;
var inst_59955 = (0);
var inst_59956 = (0);
var state_60013__$1 = (function (){var statearr_60043 = state_60013;
(statearr_60043[(12)] = inst_59955);

(statearr_60043[(13)] = inst_59956);

(statearr_60043[(14)] = inst_59954);

(statearr_60043[(15)] = inst_59953);

return statearr_60043;
})();
var statearr_60044_61426 = state_60013__$1;
(statearr_60044_61426[(2)] = null);

(statearr_60044_61426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (14))){
var state_60013__$1 = state_60013;
var statearr_60048_61427 = state_60013__$1;
(statearr_60048_61427[(2)] = null);

(statearr_60048_61427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (16))){
var inst_59967 = (state_60013[(10)]);
var inst_59971 = cljs.core.chunk_first(inst_59967);
var inst_59972 = cljs.core.chunk_rest(inst_59967);
var inst_59973 = cljs.core.count(inst_59971);
var inst_59953 = inst_59972;
var inst_59954 = inst_59971;
var inst_59955 = inst_59973;
var inst_59956 = (0);
var state_60013__$1 = (function (){var statearr_60049 = state_60013;
(statearr_60049[(12)] = inst_59955);

(statearr_60049[(13)] = inst_59956);

(statearr_60049[(14)] = inst_59954);

(statearr_60049[(15)] = inst_59953);

return statearr_60049;
})();
var statearr_60050_61430 = state_60013__$1;
(statearr_60050_61430[(2)] = null);

(statearr_60050_61430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (10))){
var inst_59955 = (state_60013[(12)]);
var inst_59956 = (state_60013[(13)]);
var inst_59954 = (state_60013[(14)]);
var inst_59953 = (state_60013[(15)]);
var inst_59961 = cljs.core._nth(inst_59954,inst_59956);
var inst_59962 = cljs.core.async.muxch_STAR_(inst_59961);
var inst_59963 = cljs.core.async.close_BANG_(inst_59962);
var inst_59964 = (inst_59956 + (1));
var tmp60045 = inst_59955;
var tmp60046 = inst_59954;
var tmp60047 = inst_59953;
var inst_59953__$1 = tmp60047;
var inst_59954__$1 = tmp60046;
var inst_59955__$1 = tmp60045;
var inst_59956__$1 = inst_59964;
var state_60013__$1 = (function (){var statearr_60051 = state_60013;
(statearr_60051[(17)] = inst_59963);

(statearr_60051[(12)] = inst_59955__$1);

(statearr_60051[(13)] = inst_59956__$1);

(statearr_60051[(14)] = inst_59954__$1);

(statearr_60051[(15)] = inst_59953__$1);

return statearr_60051;
})();
var statearr_60052_61435 = state_60013__$1;
(statearr_60052_61435[(2)] = null);

(statearr_60052_61435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (18))){
var inst_59983 = (state_60013[(2)]);
var state_60013__$1 = state_60013;
var statearr_60053_61436 = state_60013__$1;
(statearr_60053_61436[(2)] = inst_59983);

(statearr_60053_61436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60014 === (8))){
var inst_59955 = (state_60013[(12)]);
var inst_59956 = (state_60013[(13)]);
var inst_59958 = (inst_59956 < inst_59955);
var inst_59959 = inst_59958;
var state_60013__$1 = state_60013;
if(cljs.core.truth_(inst_59959)){
var statearr_60054_61437 = state_60013__$1;
(statearr_60054_61437[(1)] = (10));

} else {
var statearr_60055_61438 = state_60013__$1;
(statearr_60055_61438[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60056[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60056[(1)] = (1));

return statearr_60056;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60013){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60013);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60057){var ex__58474__auto__ = e60057;
var statearr_60058_61439 = state_60013;
(statearr_60058_61439[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60013[(4)]))){
var statearr_60059_61440 = state_60013;
(statearr_60059_61440[(1)] = cljs.core.first((state_60013[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61441 = state_60013;
state_60013 = G__61441;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60060 = f__58606__auto__();
(statearr_60060[(6)] = c__58605__auto___61388);

return statearr_60060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__60062 = arguments.length;
switch (G__60062) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__60064 = arguments.length;
switch (G__60064) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__60066 = arguments.length;
switch (G__60066) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__58605__auto___61447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60111){
var state_val_60112 = (state_60111[(1)]);
if((state_val_60112 === (7))){
var state_60111__$1 = state_60111;
var statearr_60113_61449 = state_60111__$1;
(statearr_60113_61449[(2)] = null);

(statearr_60113_61449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (1))){
var state_60111__$1 = state_60111;
var statearr_60114_61450 = state_60111__$1;
(statearr_60114_61450[(2)] = null);

(statearr_60114_61450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (4))){
var inst_60071 = (state_60111[(7)]);
var inst_60070 = (state_60111[(8)]);
var inst_60073 = (inst_60071 < inst_60070);
var state_60111__$1 = state_60111;
if(cljs.core.truth_(inst_60073)){
var statearr_60115_61452 = state_60111__$1;
(statearr_60115_61452[(1)] = (6));

} else {
var statearr_60116_61453 = state_60111__$1;
(statearr_60116_61453[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (15))){
var inst_60097 = (state_60111[(9)]);
var inst_60102 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_60097);
var state_60111__$1 = state_60111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60111__$1,(17),out,inst_60102);
} else {
if((state_val_60112 === (13))){
var inst_60097 = (state_60111[(9)]);
var inst_60097__$1 = (state_60111[(2)]);
var inst_60098 = cljs.core.some(cljs.core.nil_QMARK_,inst_60097__$1);
var state_60111__$1 = (function (){var statearr_60117 = state_60111;
(statearr_60117[(9)] = inst_60097__$1);

return statearr_60117;
})();
if(cljs.core.truth_(inst_60098)){
var statearr_60118_61456 = state_60111__$1;
(statearr_60118_61456[(1)] = (14));

} else {
var statearr_60119_61457 = state_60111__$1;
(statearr_60119_61457[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (6))){
var state_60111__$1 = state_60111;
var statearr_60120_61458 = state_60111__$1;
(statearr_60120_61458[(2)] = null);

(statearr_60120_61458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (17))){
var inst_60104 = (state_60111[(2)]);
var state_60111__$1 = (function (){var statearr_60122 = state_60111;
(statearr_60122[(10)] = inst_60104);

return statearr_60122;
})();
var statearr_60123_61459 = state_60111__$1;
(statearr_60123_61459[(2)] = null);

(statearr_60123_61459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (3))){
var inst_60109 = (state_60111[(2)]);
var state_60111__$1 = state_60111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60111__$1,inst_60109);
} else {
if((state_val_60112 === (12))){
var _ = (function (){var statearr_60124 = state_60111;
(statearr_60124[(4)] = cljs.core.rest((state_60111[(4)])));

return statearr_60124;
})();
var state_60111__$1 = state_60111;
var ex60121 = (state_60111__$1[(2)]);
var statearr_60125_61465 = state_60111__$1;
(statearr_60125_61465[(5)] = ex60121);


if((ex60121 instanceof Object)){
var statearr_60126_61467 = state_60111__$1;
(statearr_60126_61467[(1)] = (11));

(statearr_60126_61467[(5)] = null);

} else {
throw ex60121;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (2))){
var inst_60069 = cljs.core.reset_BANG_(dctr,cnt);
var inst_60070 = cnt;
var inst_60071 = (0);
var state_60111__$1 = (function (){var statearr_60127 = state_60111;
(statearr_60127[(11)] = inst_60069);

(statearr_60127[(7)] = inst_60071);

(statearr_60127[(8)] = inst_60070);

return statearr_60127;
})();
var statearr_60128_61470 = state_60111__$1;
(statearr_60128_61470[(2)] = null);

(statearr_60128_61470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (11))){
var inst_60075 = (state_60111[(2)]);
var inst_60077 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_60111__$1 = (function (){var statearr_60129 = state_60111;
(statearr_60129[(12)] = inst_60075);

return statearr_60129;
})();
var statearr_60130_61471 = state_60111__$1;
(statearr_60130_61471[(2)] = inst_60077);

(statearr_60130_61471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (9))){
var inst_60071 = (state_60111[(7)]);
var _ = (function (){var statearr_60131 = state_60111;
(statearr_60131[(4)] = cljs.core.cons((12),(state_60111[(4)])));

return statearr_60131;
})();
var inst_60083 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_60071) : chs__$1.call(null,inst_60071));
var inst_60084 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_60071) : done.call(null,inst_60071));
var inst_60085 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_60083,inst_60084);
var ___$1 = (function (){var statearr_60132 = state_60111;
(statearr_60132[(4)] = cljs.core.rest((state_60111[(4)])));

return statearr_60132;
})();
var state_60111__$1 = state_60111;
var statearr_60133_61476 = state_60111__$1;
(statearr_60133_61476[(2)] = inst_60085);

(statearr_60133_61476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (5))){
var inst_60095 = (state_60111[(2)]);
var state_60111__$1 = (function (){var statearr_60134 = state_60111;
(statearr_60134[(13)] = inst_60095);

return statearr_60134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60111__$1,(13),dchan);
} else {
if((state_val_60112 === (14))){
var inst_60100 = cljs.core.async.close_BANG_(out);
var state_60111__$1 = state_60111;
var statearr_60135_61480 = state_60111__$1;
(statearr_60135_61480[(2)] = inst_60100);

(statearr_60135_61480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (16))){
var inst_60107 = (state_60111[(2)]);
var state_60111__$1 = state_60111;
var statearr_60136_61485 = state_60111__$1;
(statearr_60136_61485[(2)] = inst_60107);

(statearr_60136_61485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (10))){
var inst_60071 = (state_60111[(7)]);
var inst_60088 = (state_60111[(2)]);
var inst_60089 = (inst_60071 + (1));
var inst_60071__$1 = inst_60089;
var state_60111__$1 = (function (){var statearr_60137 = state_60111;
(statearr_60137[(14)] = inst_60088);

(statearr_60137[(7)] = inst_60071__$1);

return statearr_60137;
})();
var statearr_60138_61500 = state_60111__$1;
(statearr_60138_61500[(2)] = null);

(statearr_60138_61500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60112 === (8))){
var inst_60093 = (state_60111[(2)]);
var state_60111__$1 = state_60111;
var statearr_60139_61503 = state_60111__$1;
(statearr_60139_61503[(2)] = inst_60093);

(statearr_60139_61503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60141[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60141[(1)] = (1));

return statearr_60141;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60111){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60111);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60142){var ex__58474__auto__ = e60142;
var statearr_60143_61506 = state_60111;
(statearr_60143_61506[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60111[(4)]))){
var statearr_60144_61512 = state_60111;
(statearr_60144_61512[(1)] = cljs.core.first((state_60111[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61519 = state_60111;
state_60111 = G__61519;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60145 = f__58606__auto__();
(statearr_60145[(6)] = c__58605__auto___61447);

return statearr_60145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__60148 = arguments.length;
switch (G__60148) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58605__auto___61546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60180){
var state_val_60181 = (state_60180[(1)]);
if((state_val_60181 === (7))){
var inst_60159 = (state_60180[(7)]);
var inst_60160 = (state_60180[(8)]);
var inst_60159__$1 = (state_60180[(2)]);
var inst_60160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60159__$1,(0),null);
var inst_60161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60159__$1,(1),null);
var inst_60162 = (inst_60160__$1 == null);
var state_60180__$1 = (function (){var statearr_60182 = state_60180;
(statearr_60182[(7)] = inst_60159__$1);

(statearr_60182[(8)] = inst_60160__$1);

(statearr_60182[(9)] = inst_60161);

return statearr_60182;
})();
if(cljs.core.truth_(inst_60162)){
var statearr_60183_61559 = state_60180__$1;
(statearr_60183_61559[(1)] = (8));

} else {
var statearr_60184_61563 = state_60180__$1;
(statearr_60184_61563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60181 === (1))){
var inst_60149 = cljs.core.vec(chs);
var inst_60150 = inst_60149;
var state_60180__$1 = (function (){var statearr_60185 = state_60180;
(statearr_60185[(10)] = inst_60150);

return statearr_60185;
})();
var statearr_60186_61564 = state_60180__$1;
(statearr_60186_61564[(2)] = null);

(statearr_60186_61564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60181 === (4))){
var inst_60150 = (state_60180[(10)]);
var state_60180__$1 = state_60180;
return cljs.core.async.ioc_alts_BANG_(state_60180__$1,(7),inst_60150);
} else {
if((state_val_60181 === (6))){
var inst_60176 = (state_60180[(2)]);
var state_60180__$1 = state_60180;
var statearr_60187_61569 = state_60180__$1;
(statearr_60187_61569[(2)] = inst_60176);

(statearr_60187_61569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60181 === (3))){
var inst_60178 = (state_60180[(2)]);
var state_60180__$1 = state_60180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60180__$1,inst_60178);
} else {
if((state_val_60181 === (2))){
var inst_60150 = (state_60180[(10)]);
var inst_60152 = cljs.core.count(inst_60150);
var inst_60153 = (inst_60152 > (0));
var state_60180__$1 = state_60180;
if(cljs.core.truth_(inst_60153)){
var statearr_60189_61570 = state_60180__$1;
(statearr_60189_61570[(1)] = (4));

} else {
var statearr_60190_61571 = state_60180__$1;
(statearr_60190_61571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60181 === (11))){
var inst_60150 = (state_60180[(10)]);
var inst_60169 = (state_60180[(2)]);
var tmp60188 = inst_60150;
var inst_60150__$1 = tmp60188;
var state_60180__$1 = (function (){var statearr_60191 = state_60180;
(statearr_60191[(11)] = inst_60169);

(statearr_60191[(10)] = inst_60150__$1);

return statearr_60191;
})();
var statearr_60192_61575 = state_60180__$1;
(statearr_60192_61575[(2)] = null);

(statearr_60192_61575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60181 === (9))){
var inst_60160 = (state_60180[(8)]);
var state_60180__$1 = state_60180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60180__$1,(11),out,inst_60160);
} else {
if((state_val_60181 === (5))){
var inst_60174 = cljs.core.async.close_BANG_(out);
var state_60180__$1 = state_60180;
var statearr_60193_61576 = state_60180__$1;
(statearr_60193_61576[(2)] = inst_60174);

(statearr_60193_61576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60181 === (10))){
var inst_60172 = (state_60180[(2)]);
var state_60180__$1 = state_60180;
var statearr_60194_61577 = state_60180__$1;
(statearr_60194_61577[(2)] = inst_60172);

(statearr_60194_61577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60181 === (8))){
var inst_60159 = (state_60180[(7)]);
var inst_60160 = (state_60180[(8)]);
var inst_60150 = (state_60180[(10)]);
var inst_60161 = (state_60180[(9)]);
var inst_60164 = (function (){var cs = inst_60150;
var vec__60155 = inst_60159;
var v = inst_60160;
var c = inst_60161;
return (function (p1__60146_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__60146_SHARP_);
});
})();
var inst_60165 = cljs.core.filterv(inst_60164,inst_60150);
var inst_60150__$1 = inst_60165;
var state_60180__$1 = (function (){var statearr_60195 = state_60180;
(statearr_60195[(10)] = inst_60150__$1);

return statearr_60195;
})();
var statearr_60196_61579 = state_60180__$1;
(statearr_60196_61579[(2)] = null);

(statearr_60196_61579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60197[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60197[(1)] = (1));

return statearr_60197;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60180){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60180);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60198){var ex__58474__auto__ = e60198;
var statearr_60199_61580 = state_60180;
(statearr_60199_61580[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60180[(4)]))){
var statearr_60200_61581 = state_60180;
(statearr_60200_61581[(1)] = cljs.core.first((state_60180[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61583 = state_60180;
state_60180 = G__61583;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60201 = f__58606__auto__();
(statearr_60201[(6)] = c__58605__auto___61546);

return statearr_60201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__60203 = arguments.length;
switch (G__60203) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58605__auto___61588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60227){
var state_val_60228 = (state_60227[(1)]);
if((state_val_60228 === (7))){
var inst_60209 = (state_60227[(7)]);
var inst_60209__$1 = (state_60227[(2)]);
var inst_60210 = (inst_60209__$1 == null);
var inst_60211 = cljs.core.not(inst_60210);
var state_60227__$1 = (function (){var statearr_60229 = state_60227;
(statearr_60229[(7)] = inst_60209__$1);

return statearr_60229;
})();
if(inst_60211){
var statearr_60230_61589 = state_60227__$1;
(statearr_60230_61589[(1)] = (8));

} else {
var statearr_60231_61590 = state_60227__$1;
(statearr_60231_61590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (1))){
var inst_60204 = (0);
var state_60227__$1 = (function (){var statearr_60232 = state_60227;
(statearr_60232[(8)] = inst_60204);

return statearr_60232;
})();
var statearr_60233_61594 = state_60227__$1;
(statearr_60233_61594[(2)] = null);

(statearr_60233_61594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (4))){
var state_60227__$1 = state_60227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60227__$1,(7),ch);
} else {
if((state_val_60228 === (6))){
var inst_60222 = (state_60227[(2)]);
var state_60227__$1 = state_60227;
var statearr_60234_61595 = state_60227__$1;
(statearr_60234_61595[(2)] = inst_60222);

(statearr_60234_61595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (3))){
var inst_60224 = (state_60227[(2)]);
var inst_60225 = cljs.core.async.close_BANG_(out);
var state_60227__$1 = (function (){var statearr_60235 = state_60227;
(statearr_60235[(9)] = inst_60224);

return statearr_60235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60227__$1,inst_60225);
} else {
if((state_val_60228 === (2))){
var inst_60204 = (state_60227[(8)]);
var inst_60206 = (inst_60204 < n);
var state_60227__$1 = state_60227;
if(cljs.core.truth_(inst_60206)){
var statearr_60236_61599 = state_60227__$1;
(statearr_60236_61599[(1)] = (4));

} else {
var statearr_60237_61600 = state_60227__$1;
(statearr_60237_61600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (11))){
var inst_60204 = (state_60227[(8)]);
var inst_60214 = (state_60227[(2)]);
var inst_60215 = (inst_60204 + (1));
var inst_60204__$1 = inst_60215;
var state_60227__$1 = (function (){var statearr_60238 = state_60227;
(statearr_60238[(8)] = inst_60204__$1);

(statearr_60238[(10)] = inst_60214);

return statearr_60238;
})();
var statearr_60239_61605 = state_60227__$1;
(statearr_60239_61605[(2)] = null);

(statearr_60239_61605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (9))){
var state_60227__$1 = state_60227;
var statearr_60240_61616 = state_60227__$1;
(statearr_60240_61616[(2)] = null);

(statearr_60240_61616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (5))){
var state_60227__$1 = state_60227;
var statearr_60242_61626 = state_60227__$1;
(statearr_60242_61626[(2)] = null);

(statearr_60242_61626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (10))){
var inst_60219 = (state_60227[(2)]);
var state_60227__$1 = state_60227;
var statearr_60243_61642 = state_60227__$1;
(statearr_60243_61642[(2)] = inst_60219);

(statearr_60243_61642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60228 === (8))){
var inst_60209 = (state_60227[(7)]);
var state_60227__$1 = state_60227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60227__$1,(11),out,inst_60209);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60244[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60244[(1)] = (1));

return statearr_60244;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60227){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60227);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60245){var ex__58474__auto__ = e60245;
var statearr_60246_61670 = state_60227;
(statearr_60246_61670[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60227[(4)]))){
var statearr_60247_61675 = state_60227;
(statearr_60247_61675[(1)] = cljs.core.first((state_60227[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61690 = state_60227;
state_60227 = G__61690;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60248 = f__58606__auto__();
(statearr_60248[(6)] = c__58605__auto___61588);

return statearr_60248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60250 = (function (f,ch,meta60251){
this.f = f;
this.ch = ch;
this.meta60251 = meta60251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60252,meta60251__$1){
var self__ = this;
var _60252__$1 = this;
return (new cljs.core.async.t_cljs$core$async60250(self__.f,self__.ch,meta60251__$1));
}));

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60252){
var self__ = this;
var _60252__$1 = this;
return self__.meta60251;
}));

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60253 = (function (f,ch,meta60251,_,fn1,meta60254){
this.f = f;
this.ch = ch;
this.meta60251 = meta60251;
this._ = _;
this.fn1 = fn1;
this.meta60254 = meta60254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60255,meta60254__$1){
var self__ = this;
var _60255__$1 = this;
return (new cljs.core.async.t_cljs$core$async60253(self__.f,self__.ch,self__.meta60251,self__._,self__.fn1,meta60254__$1));
}));

(cljs.core.async.t_cljs$core$async60253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60255){
var self__ = this;
var _60255__$1 = this;
return self__.meta60254;
}));

(cljs.core.async.t_cljs$core$async60253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async60253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__60249_SHARP_){
var G__60256 = (((p1__60249_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__60249_SHARP_) : self__.f.call(null,p1__60249_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__60256) : f1.call(null,G__60256));
});
}));

(cljs.core.async.t_cljs$core$async60253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60251","meta60251",669060183,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60250","cljs.core.async/t_cljs$core$async60250",-1824267531,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60254","meta60254",-627837997,null)], null);
}));

(cljs.core.async.t_cljs$core$async60253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60253");

(cljs.core.async.t_cljs$core$async60253.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60253.
 */
cljs.core.async.__GT_t_cljs$core$async60253 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60253(f__$1,ch__$1,meta60251__$1,___$2,fn1__$1,meta60254){
return (new cljs.core.async.t_cljs$core$async60253(f__$1,ch__$1,meta60251__$1,___$2,fn1__$1,meta60254));
});

}

return (new cljs.core.async.t_cljs$core$async60253(self__.f,self__.ch,self__.meta60251,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__60257 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__60257) : self__.f.call(null,G__60257));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async60250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60251","meta60251",669060183,null)], null);
}));

(cljs.core.async.t_cljs$core$async60250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60250");

(cljs.core.async.t_cljs$core$async60250.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60250.
 */
cljs.core.async.__GT_t_cljs$core$async60250 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60250(f__$1,ch__$1,meta60251){
return (new cljs.core.async.t_cljs$core$async60250(f__$1,ch__$1,meta60251));
});

}

return (new cljs.core.async.t_cljs$core$async60250(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60258 = (function (f,ch,meta60259){
this.f = f;
this.ch = ch;
this.meta60259 = meta60259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60260,meta60259__$1){
var self__ = this;
var _60260__$1 = this;
return (new cljs.core.async.t_cljs$core$async60258(self__.f,self__.ch,meta60259__$1));
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60260){
var self__ = this;
var _60260__$1 = this;
return self__.meta60259;
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async60258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60259","meta60259",172734999,null)], null);
}));

(cljs.core.async.t_cljs$core$async60258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60258");

(cljs.core.async.t_cljs$core$async60258.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60258.
 */
cljs.core.async.__GT_t_cljs$core$async60258 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60258(f__$1,ch__$1,meta60259){
return (new cljs.core.async.t_cljs$core$async60258(f__$1,ch__$1,meta60259));
});

}

return (new cljs.core.async.t_cljs$core$async60258(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60261 = (function (p,ch,meta60262){
this.p = p;
this.ch = ch;
this.meta60262 = meta60262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60263,meta60262__$1){
var self__ = this;
var _60263__$1 = this;
return (new cljs.core.async.t_cljs$core$async60261(self__.p,self__.ch,meta60262__$1));
}));

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60263){
var self__ = this;
var _60263__$1 = this;
return self__.meta60262;
}));

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async60261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60262","meta60262",1399447273,null)], null);
}));

(cljs.core.async.t_cljs$core$async60261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60261");

(cljs.core.async.t_cljs$core$async60261.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60261.
 */
cljs.core.async.__GT_t_cljs$core$async60261 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60261(p__$1,ch__$1,meta60262){
return (new cljs.core.async.t_cljs$core$async60261(p__$1,ch__$1,meta60262));
});

}

return (new cljs.core.async.t_cljs$core$async60261(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__60274 = arguments.length;
switch (G__60274) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58605__auto___61786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60298){
var state_val_60299 = (state_60298[(1)]);
if((state_val_60299 === (7))){
var inst_60294 = (state_60298[(2)]);
var state_60298__$1 = state_60298;
var statearr_60311_61787 = state_60298__$1;
(statearr_60311_61787[(2)] = inst_60294);

(statearr_60311_61787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (1))){
var state_60298__$1 = state_60298;
var statearr_60312_61788 = state_60298__$1;
(statearr_60312_61788[(2)] = null);

(statearr_60312_61788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (4))){
var inst_60280 = (state_60298[(7)]);
var inst_60280__$1 = (state_60298[(2)]);
var inst_60281 = (inst_60280__$1 == null);
var state_60298__$1 = (function (){var statearr_60313 = state_60298;
(statearr_60313[(7)] = inst_60280__$1);

return statearr_60313;
})();
if(cljs.core.truth_(inst_60281)){
var statearr_60314_61790 = state_60298__$1;
(statearr_60314_61790[(1)] = (5));

} else {
var statearr_60315_61791 = state_60298__$1;
(statearr_60315_61791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (6))){
var inst_60280 = (state_60298[(7)]);
var inst_60285 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_60280) : p.call(null,inst_60280));
var state_60298__$1 = state_60298;
if(cljs.core.truth_(inst_60285)){
var statearr_60316_61792 = state_60298__$1;
(statearr_60316_61792[(1)] = (8));

} else {
var statearr_60317_61793 = state_60298__$1;
(statearr_60317_61793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (3))){
var inst_60296 = (state_60298[(2)]);
var state_60298__$1 = state_60298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60298__$1,inst_60296);
} else {
if((state_val_60299 === (2))){
var state_60298__$1 = state_60298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60298__$1,(4),ch);
} else {
if((state_val_60299 === (11))){
var inst_60288 = (state_60298[(2)]);
var state_60298__$1 = state_60298;
var statearr_60318_61798 = state_60298__$1;
(statearr_60318_61798[(2)] = inst_60288);

(statearr_60318_61798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (9))){
var state_60298__$1 = state_60298;
var statearr_60319_61805 = state_60298__$1;
(statearr_60319_61805[(2)] = null);

(statearr_60319_61805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (5))){
var inst_60283 = cljs.core.async.close_BANG_(out);
var state_60298__$1 = state_60298;
var statearr_60320_61810 = state_60298__$1;
(statearr_60320_61810[(2)] = inst_60283);

(statearr_60320_61810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (10))){
var inst_60291 = (state_60298[(2)]);
var state_60298__$1 = (function (){var statearr_60321 = state_60298;
(statearr_60321[(8)] = inst_60291);

return statearr_60321;
})();
var statearr_60322_61814 = state_60298__$1;
(statearr_60322_61814[(2)] = null);

(statearr_60322_61814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60299 === (8))){
var inst_60280 = (state_60298[(7)]);
var state_60298__$1 = state_60298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60298__$1,(11),out,inst_60280);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60323 = [null,null,null,null,null,null,null,null,null];
(statearr_60323[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60323[(1)] = (1));

return statearr_60323;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60298){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60298);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60328){var ex__58474__auto__ = e60328;
var statearr_60330_61815 = state_60298;
(statearr_60330_61815[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60298[(4)]))){
var statearr_60331_61820 = state_60298;
(statearr_60331_61820[(1)] = cljs.core.first((state_60298[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61826 = state_60298;
state_60298 = G__61826;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60333 = f__58606__auto__();
(statearr_60333[(6)] = c__58605__auto___61786);

return statearr_60333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60337 = arguments.length;
switch (G__60337) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__58605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60405){
var state_val_60406 = (state_60405[(1)]);
if((state_val_60406 === (7))){
var inst_60401 = (state_60405[(2)]);
var state_60405__$1 = state_60405;
var statearr_60412_61839 = state_60405__$1;
(statearr_60412_61839[(2)] = inst_60401);

(statearr_60412_61839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (20))){
var inst_60371 = (state_60405[(7)]);
var inst_60382 = (state_60405[(2)]);
var inst_60383 = cljs.core.next(inst_60371);
var inst_60357 = inst_60383;
var inst_60358 = null;
var inst_60359 = (0);
var inst_60360 = (0);
var state_60405__$1 = (function (){var statearr_60414 = state_60405;
(statearr_60414[(8)] = inst_60359);

(statearr_60414[(9)] = inst_60358);

(statearr_60414[(10)] = inst_60382);

(statearr_60414[(11)] = inst_60360);

(statearr_60414[(12)] = inst_60357);

return statearr_60414;
})();
var statearr_60415_61842 = state_60405__$1;
(statearr_60415_61842[(2)] = null);

(statearr_60415_61842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (1))){
var state_60405__$1 = state_60405;
var statearr_60416_61848 = state_60405__$1;
(statearr_60416_61848[(2)] = null);

(statearr_60416_61848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (4))){
var inst_60343 = (state_60405[(13)]);
var inst_60343__$1 = (state_60405[(2)]);
var inst_60345 = (inst_60343__$1 == null);
var state_60405__$1 = (function (){var statearr_60417 = state_60405;
(statearr_60417[(13)] = inst_60343__$1);

return statearr_60417;
})();
if(cljs.core.truth_(inst_60345)){
var statearr_60418_61851 = state_60405__$1;
(statearr_60418_61851[(1)] = (5));

} else {
var statearr_60419_61852 = state_60405__$1;
(statearr_60419_61852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (15))){
var state_60405__$1 = state_60405;
var statearr_60426_61855 = state_60405__$1;
(statearr_60426_61855[(2)] = null);

(statearr_60426_61855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (21))){
var state_60405__$1 = state_60405;
var statearr_60427_61856 = state_60405__$1;
(statearr_60427_61856[(2)] = null);

(statearr_60427_61856[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (13))){
var inst_60359 = (state_60405[(8)]);
var inst_60358 = (state_60405[(9)]);
var inst_60360 = (state_60405[(11)]);
var inst_60357 = (state_60405[(12)]);
var inst_60367 = (state_60405[(2)]);
var inst_60368 = (inst_60360 + (1));
var tmp60420 = inst_60359;
var tmp60421 = inst_60358;
var tmp60422 = inst_60357;
var inst_60357__$1 = tmp60422;
var inst_60358__$1 = tmp60421;
var inst_60359__$1 = tmp60420;
var inst_60360__$1 = inst_60368;
var state_60405__$1 = (function (){var statearr_60433 = state_60405;
(statearr_60433[(14)] = inst_60367);

(statearr_60433[(8)] = inst_60359__$1);

(statearr_60433[(9)] = inst_60358__$1);

(statearr_60433[(11)] = inst_60360__$1);

(statearr_60433[(12)] = inst_60357__$1);

return statearr_60433;
})();
var statearr_60434_61867 = state_60405__$1;
(statearr_60434_61867[(2)] = null);

(statearr_60434_61867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (22))){
var state_60405__$1 = state_60405;
var statearr_60435_61870 = state_60405__$1;
(statearr_60435_61870[(2)] = null);

(statearr_60435_61870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (6))){
var inst_60343 = (state_60405[(13)]);
var inst_60354 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60343) : f.call(null,inst_60343));
var inst_60355 = cljs.core.seq(inst_60354);
var inst_60357 = inst_60355;
var inst_60358 = null;
var inst_60359 = (0);
var inst_60360 = (0);
var state_60405__$1 = (function (){var statearr_60436 = state_60405;
(statearr_60436[(8)] = inst_60359);

(statearr_60436[(9)] = inst_60358);

(statearr_60436[(11)] = inst_60360);

(statearr_60436[(12)] = inst_60357);

return statearr_60436;
})();
var statearr_60437_61876 = state_60405__$1;
(statearr_60437_61876[(2)] = null);

(statearr_60437_61876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (17))){
var inst_60371 = (state_60405[(7)]);
var inst_60375 = cljs.core.chunk_first(inst_60371);
var inst_60376 = cljs.core.chunk_rest(inst_60371);
var inst_60377 = cljs.core.count(inst_60375);
var inst_60357 = inst_60376;
var inst_60358 = inst_60375;
var inst_60359 = inst_60377;
var inst_60360 = (0);
var state_60405__$1 = (function (){var statearr_60438 = state_60405;
(statearr_60438[(8)] = inst_60359);

(statearr_60438[(9)] = inst_60358);

(statearr_60438[(11)] = inst_60360);

(statearr_60438[(12)] = inst_60357);

return statearr_60438;
})();
var statearr_60439_61880 = state_60405__$1;
(statearr_60439_61880[(2)] = null);

(statearr_60439_61880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (3))){
var inst_60403 = (state_60405[(2)]);
var state_60405__$1 = state_60405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60405__$1,inst_60403);
} else {
if((state_val_60406 === (12))){
var inst_60391 = (state_60405[(2)]);
var state_60405__$1 = state_60405;
var statearr_60443_61881 = state_60405__$1;
(statearr_60443_61881[(2)] = inst_60391);

(statearr_60443_61881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (2))){
var state_60405__$1 = state_60405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60405__$1,(4),in$);
} else {
if((state_val_60406 === (23))){
var inst_60399 = (state_60405[(2)]);
var state_60405__$1 = state_60405;
var statearr_60444_61882 = state_60405__$1;
(statearr_60444_61882[(2)] = inst_60399);

(statearr_60444_61882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (19))){
var inst_60386 = (state_60405[(2)]);
var state_60405__$1 = state_60405;
var statearr_60445_61883 = state_60405__$1;
(statearr_60445_61883[(2)] = inst_60386);

(statearr_60445_61883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (11))){
var inst_60371 = (state_60405[(7)]);
var inst_60357 = (state_60405[(12)]);
var inst_60371__$1 = cljs.core.seq(inst_60357);
var state_60405__$1 = (function (){var statearr_60447 = state_60405;
(statearr_60447[(7)] = inst_60371__$1);

return statearr_60447;
})();
if(inst_60371__$1){
var statearr_60450_61884 = state_60405__$1;
(statearr_60450_61884[(1)] = (14));

} else {
var statearr_60451_61885 = state_60405__$1;
(statearr_60451_61885[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (9))){
var inst_60393 = (state_60405[(2)]);
var inst_60394 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_60405__$1 = (function (){var statearr_60452 = state_60405;
(statearr_60452[(15)] = inst_60393);

return statearr_60452;
})();
if(cljs.core.truth_(inst_60394)){
var statearr_60453_61886 = state_60405__$1;
(statearr_60453_61886[(1)] = (21));

} else {
var statearr_60454_61887 = state_60405__$1;
(statearr_60454_61887[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (5))){
var inst_60347 = cljs.core.async.close_BANG_(out);
var state_60405__$1 = state_60405;
var statearr_60455_61891 = state_60405__$1;
(statearr_60455_61891[(2)] = inst_60347);

(statearr_60455_61891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (14))){
var inst_60371 = (state_60405[(7)]);
var inst_60373 = cljs.core.chunked_seq_QMARK_(inst_60371);
var state_60405__$1 = state_60405;
if(inst_60373){
var statearr_60456_61892 = state_60405__$1;
(statearr_60456_61892[(1)] = (17));

} else {
var statearr_60457_61893 = state_60405__$1;
(statearr_60457_61893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (16))){
var inst_60389 = (state_60405[(2)]);
var state_60405__$1 = state_60405;
var statearr_60463_61894 = state_60405__$1;
(statearr_60463_61894[(2)] = inst_60389);

(statearr_60463_61894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60406 === (10))){
var inst_60358 = (state_60405[(9)]);
var inst_60360 = (state_60405[(11)]);
var inst_60365 = cljs.core._nth(inst_60358,inst_60360);
var state_60405__$1 = state_60405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60405__$1,(13),out,inst_60365);
} else {
if((state_val_60406 === (18))){
var inst_60371 = (state_60405[(7)]);
var inst_60380 = cljs.core.first(inst_60371);
var state_60405__$1 = state_60405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60405__$1,(20),out,inst_60380);
} else {
if((state_val_60406 === (8))){
var inst_60359 = (state_60405[(8)]);
var inst_60360 = (state_60405[(11)]);
var inst_60362 = (inst_60360 < inst_60359);
var inst_60363 = inst_60362;
var state_60405__$1 = state_60405;
if(cljs.core.truth_(inst_60363)){
var statearr_60465_61898 = state_60405__$1;
(statearr_60465_61898[(1)] = (10));

} else {
var statearr_60466_61899 = state_60405__$1;
(statearr_60466_61899[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58471__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58471__auto____0 = (function (){
var statearr_60467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60467[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58471__auto__);

(statearr_60467[(1)] = (1));

return statearr_60467;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58471__auto____1 = (function (state_60405){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60405);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60468){var ex__58474__auto__ = e60468;
var statearr_60469_61901 = state_60405;
(statearr_60469_61901[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60405[(4)]))){
var statearr_60470_61902 = state_60405;
(statearr_60470_61902[(1)] = cljs.core.first((state_60405[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61903 = state_60405;
state_60405 = G__61903;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58471__auto__ = function(state_60405){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58471__auto____1.call(this,state_60405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58471__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58471__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60479 = f__58606__auto__();
(statearr_60479[(6)] = c__58605__auto__);

return statearr_60479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));

return c__58605__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60481 = arguments.length;
switch (G__60481) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__60487 = arguments.length;
switch (G__60487) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__60491 = arguments.length;
switch (G__60491) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58605__auto___61912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60515){
var state_val_60516 = (state_60515[(1)]);
if((state_val_60516 === (7))){
var inst_60510 = (state_60515[(2)]);
var state_60515__$1 = state_60515;
var statearr_60518_61913 = state_60515__$1;
(statearr_60518_61913[(2)] = inst_60510);

(statearr_60518_61913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60516 === (1))){
var inst_60492 = null;
var state_60515__$1 = (function (){var statearr_60519 = state_60515;
(statearr_60519[(7)] = inst_60492);

return statearr_60519;
})();
var statearr_60520_61914 = state_60515__$1;
(statearr_60520_61914[(2)] = null);

(statearr_60520_61914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60516 === (4))){
var inst_60495 = (state_60515[(8)]);
var inst_60495__$1 = (state_60515[(2)]);
var inst_60496 = (inst_60495__$1 == null);
var inst_60497 = cljs.core.not(inst_60496);
var state_60515__$1 = (function (){var statearr_60521 = state_60515;
(statearr_60521[(8)] = inst_60495__$1);

return statearr_60521;
})();
if(inst_60497){
var statearr_60522_61924 = state_60515__$1;
(statearr_60522_61924[(1)] = (5));

} else {
var statearr_60523_61928 = state_60515__$1;
(statearr_60523_61928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60516 === (6))){
var state_60515__$1 = state_60515;
var statearr_60524_61929 = state_60515__$1;
(statearr_60524_61929[(2)] = null);

(statearr_60524_61929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60516 === (3))){
var inst_60512 = (state_60515[(2)]);
var inst_60513 = cljs.core.async.close_BANG_(out);
var state_60515__$1 = (function (){var statearr_60528 = state_60515;
(statearr_60528[(9)] = inst_60512);

return statearr_60528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60515__$1,inst_60513);
} else {
if((state_val_60516 === (2))){
var state_60515__$1 = state_60515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60515__$1,(4),ch);
} else {
if((state_val_60516 === (11))){
var inst_60495 = (state_60515[(8)]);
var inst_60504 = (state_60515[(2)]);
var inst_60492 = inst_60495;
var state_60515__$1 = (function (){var statearr_60529 = state_60515;
(statearr_60529[(10)] = inst_60504);

(statearr_60529[(7)] = inst_60492);

return statearr_60529;
})();
var statearr_60530_61950 = state_60515__$1;
(statearr_60530_61950[(2)] = null);

(statearr_60530_61950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60516 === (9))){
var inst_60495 = (state_60515[(8)]);
var state_60515__$1 = state_60515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60515__$1,(11),out,inst_60495);
} else {
if((state_val_60516 === (5))){
var inst_60492 = (state_60515[(7)]);
var inst_60495 = (state_60515[(8)]);
var inst_60499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60495,inst_60492);
var state_60515__$1 = state_60515;
if(inst_60499){
var statearr_60536_61954 = state_60515__$1;
(statearr_60536_61954[(1)] = (8));

} else {
var statearr_60541_61955 = state_60515__$1;
(statearr_60541_61955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60516 === (10))){
var inst_60507 = (state_60515[(2)]);
var state_60515__$1 = state_60515;
var statearr_60542_61956 = state_60515__$1;
(statearr_60542_61956[(2)] = inst_60507);

(statearr_60542_61956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60516 === (8))){
var inst_60492 = (state_60515[(7)]);
var tmp60531 = inst_60492;
var inst_60492__$1 = tmp60531;
var state_60515__$1 = (function (){var statearr_60547 = state_60515;
(statearr_60547[(7)] = inst_60492__$1);

return statearr_60547;
})();
var statearr_60548_61962 = state_60515__$1;
(statearr_60548_61962[(2)] = null);

(statearr_60548_61962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60557[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60557[(1)] = (1));

return statearr_60557;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60515){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60515);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60558){var ex__58474__auto__ = e60558;
var statearr_60559_61974 = state_60515;
(statearr_60559_61974[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60515[(4)]))){
var statearr_60560_61979 = state_60515;
(statearr_60560_61979[(1)] = cljs.core.first((state_60515[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61982 = state_60515;
state_60515 = G__61982;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60561 = f__58606__auto__();
(statearr_60561[(6)] = c__58605__auto___61912);

return statearr_60561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60563 = arguments.length;
switch (G__60563) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58605__auto___62008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60601){
var state_val_60602 = (state_60601[(1)]);
if((state_val_60602 === (7))){
var inst_60597 = (state_60601[(2)]);
var state_60601__$1 = state_60601;
var statearr_60603_62015 = state_60601__$1;
(statearr_60603_62015[(2)] = inst_60597);

(statearr_60603_62015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (1))){
var inst_60564 = (new Array(n));
var inst_60565 = inst_60564;
var inst_60566 = (0);
var state_60601__$1 = (function (){var statearr_60604 = state_60601;
(statearr_60604[(7)] = inst_60566);

(statearr_60604[(8)] = inst_60565);

return statearr_60604;
})();
var statearr_60605_62022 = state_60601__$1;
(statearr_60605_62022[(2)] = null);

(statearr_60605_62022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (4))){
var inst_60569 = (state_60601[(9)]);
var inst_60569__$1 = (state_60601[(2)]);
var inst_60570 = (inst_60569__$1 == null);
var inst_60571 = cljs.core.not(inst_60570);
var state_60601__$1 = (function (){var statearr_60606 = state_60601;
(statearr_60606[(9)] = inst_60569__$1);

return statearr_60606;
})();
if(inst_60571){
var statearr_60607_62028 = state_60601__$1;
(statearr_60607_62028[(1)] = (5));

} else {
var statearr_60608_62033 = state_60601__$1;
(statearr_60608_62033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (15))){
var inst_60591 = (state_60601[(2)]);
var state_60601__$1 = state_60601;
var statearr_60609_62038 = state_60601__$1;
(statearr_60609_62038[(2)] = inst_60591);

(statearr_60609_62038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (13))){
var state_60601__$1 = state_60601;
var statearr_60610_62040 = state_60601__$1;
(statearr_60610_62040[(2)] = null);

(statearr_60610_62040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (6))){
var inst_60566 = (state_60601[(7)]);
var inst_60587 = (inst_60566 > (0));
var state_60601__$1 = state_60601;
if(cljs.core.truth_(inst_60587)){
var statearr_60611_62046 = state_60601__$1;
(statearr_60611_62046[(1)] = (12));

} else {
var statearr_60612_62048 = state_60601__$1;
(statearr_60612_62048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (3))){
var inst_60599 = (state_60601[(2)]);
var state_60601__$1 = state_60601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60601__$1,inst_60599);
} else {
if((state_val_60602 === (12))){
var inst_60565 = (state_60601[(8)]);
var inst_60589 = cljs.core.vec(inst_60565);
var state_60601__$1 = state_60601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60601__$1,(15),out,inst_60589);
} else {
if((state_val_60602 === (2))){
var state_60601__$1 = state_60601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60601__$1,(4),ch);
} else {
if((state_val_60602 === (11))){
var inst_60581 = (state_60601[(2)]);
var inst_60582 = (new Array(n));
var inst_60565 = inst_60582;
var inst_60566 = (0);
var state_60601__$1 = (function (){var statearr_60613 = state_60601;
(statearr_60613[(7)] = inst_60566);

(statearr_60613[(8)] = inst_60565);

(statearr_60613[(10)] = inst_60581);

return statearr_60613;
})();
var statearr_60614_62065 = state_60601__$1;
(statearr_60614_62065[(2)] = null);

(statearr_60614_62065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (9))){
var inst_60565 = (state_60601[(8)]);
var inst_60579 = cljs.core.vec(inst_60565);
var state_60601__$1 = state_60601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60601__$1,(11),out,inst_60579);
} else {
if((state_val_60602 === (5))){
var inst_60566 = (state_60601[(7)]);
var inst_60574 = (state_60601[(11)]);
var inst_60565 = (state_60601[(8)]);
var inst_60569 = (state_60601[(9)]);
var inst_60573 = (inst_60565[inst_60566] = inst_60569);
var inst_60574__$1 = (inst_60566 + (1));
var inst_60575 = (inst_60574__$1 < n);
var state_60601__$1 = (function (){var statearr_60615 = state_60601;
(statearr_60615[(11)] = inst_60574__$1);

(statearr_60615[(12)] = inst_60573);

return statearr_60615;
})();
if(cljs.core.truth_(inst_60575)){
var statearr_60616_62071 = state_60601__$1;
(statearr_60616_62071[(1)] = (8));

} else {
var statearr_60617_62072 = state_60601__$1;
(statearr_60617_62072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (14))){
var inst_60594 = (state_60601[(2)]);
var inst_60595 = cljs.core.async.close_BANG_(out);
var state_60601__$1 = (function (){var statearr_60619 = state_60601;
(statearr_60619[(13)] = inst_60594);

return statearr_60619;
})();
var statearr_60620_62074 = state_60601__$1;
(statearr_60620_62074[(2)] = inst_60595);

(statearr_60620_62074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (10))){
var inst_60585 = (state_60601[(2)]);
var state_60601__$1 = state_60601;
var statearr_60621_62075 = state_60601__$1;
(statearr_60621_62075[(2)] = inst_60585);

(statearr_60621_62075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60602 === (8))){
var inst_60574 = (state_60601[(11)]);
var inst_60565 = (state_60601[(8)]);
var tmp60618 = inst_60565;
var inst_60565__$1 = tmp60618;
var inst_60566 = inst_60574;
var state_60601__$1 = (function (){var statearr_60622 = state_60601;
(statearr_60622[(7)] = inst_60566);

(statearr_60622[(8)] = inst_60565__$1);

return statearr_60622;
})();
var statearr_60623_62076 = state_60601__$1;
(statearr_60623_62076[(2)] = null);

(statearr_60623_62076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60624[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60624[(1)] = (1));

return statearr_60624;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60601){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60601);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60625){var ex__58474__auto__ = e60625;
var statearr_60626_62078 = state_60601;
(statearr_60626_62078[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60601[(4)]))){
var statearr_60627_62079 = state_60601;
(statearr_60627_62079[(1)] = cljs.core.first((state_60601[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62080 = state_60601;
state_60601 = G__62080;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60628 = f__58606__auto__();
(statearr_60628[(6)] = c__58605__auto___62008);

return statearr_60628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60638 = arguments.length;
switch (G__60638) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58605__auto___62085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58606__auto__ = (function (){var switch__58470__auto__ = (function (state_60692){
var state_val_60693 = (state_60692[(1)]);
if((state_val_60693 === (7))){
var inst_60688 = (state_60692[(2)]);
var state_60692__$1 = state_60692;
var statearr_60694_62086 = state_60692__$1;
(statearr_60694_62086[(2)] = inst_60688);

(statearr_60694_62086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (1))){
var inst_60651 = [];
var inst_60652 = inst_60651;
var inst_60653 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60692__$1 = (function (){var statearr_60695 = state_60692;
(statearr_60695[(7)] = inst_60652);

(statearr_60695[(8)] = inst_60653);

return statearr_60695;
})();
var statearr_60696_62087 = state_60692__$1;
(statearr_60696_62087[(2)] = null);

(statearr_60696_62087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (4))){
var inst_60656 = (state_60692[(9)]);
var inst_60656__$1 = (state_60692[(2)]);
var inst_60657 = (inst_60656__$1 == null);
var inst_60658 = cljs.core.not(inst_60657);
var state_60692__$1 = (function (){var statearr_60697 = state_60692;
(statearr_60697[(9)] = inst_60656__$1);

return statearr_60697;
})();
if(inst_60658){
var statearr_60698_62088 = state_60692__$1;
(statearr_60698_62088[(1)] = (5));

} else {
var statearr_60699_62089 = state_60692__$1;
(statearr_60699_62089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (15))){
var inst_60682 = (state_60692[(2)]);
var state_60692__$1 = state_60692;
var statearr_60700_62090 = state_60692__$1;
(statearr_60700_62090[(2)] = inst_60682);

(statearr_60700_62090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (13))){
var state_60692__$1 = state_60692;
var statearr_60701_62097 = state_60692__$1;
(statearr_60701_62097[(2)] = null);

(statearr_60701_62097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (6))){
var inst_60652 = (state_60692[(7)]);
var inst_60677 = inst_60652.length;
var inst_60678 = (inst_60677 > (0));
var state_60692__$1 = state_60692;
if(cljs.core.truth_(inst_60678)){
var statearr_60702_62098 = state_60692__$1;
(statearr_60702_62098[(1)] = (12));

} else {
var statearr_60703_62099 = state_60692__$1;
(statearr_60703_62099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (3))){
var inst_60690 = (state_60692[(2)]);
var state_60692__$1 = state_60692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60692__$1,inst_60690);
} else {
if((state_val_60693 === (12))){
var inst_60652 = (state_60692[(7)]);
var inst_60680 = cljs.core.vec(inst_60652);
var state_60692__$1 = state_60692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60692__$1,(15),out,inst_60680);
} else {
if((state_val_60693 === (2))){
var state_60692__$1 = state_60692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60692__$1,(4),ch);
} else {
if((state_val_60693 === (11))){
var inst_60660 = (state_60692[(10)]);
var inst_60656 = (state_60692[(9)]);
var inst_60670 = (state_60692[(2)]);
var inst_60671 = [];
var inst_60672 = inst_60671.push(inst_60656);
var inst_60652 = inst_60671;
var inst_60653 = inst_60660;
var state_60692__$1 = (function (){var statearr_60704 = state_60692;
(statearr_60704[(11)] = inst_60672);

(statearr_60704[(7)] = inst_60652);

(statearr_60704[(8)] = inst_60653);

(statearr_60704[(12)] = inst_60670);

return statearr_60704;
})();
var statearr_60705_62104 = state_60692__$1;
(statearr_60705_62104[(2)] = null);

(statearr_60705_62104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (9))){
var inst_60652 = (state_60692[(7)]);
var inst_60668 = cljs.core.vec(inst_60652);
var state_60692__$1 = state_60692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60692__$1,(11),out,inst_60668);
} else {
if((state_val_60693 === (5))){
var inst_60660 = (state_60692[(10)]);
var inst_60653 = (state_60692[(8)]);
var inst_60656 = (state_60692[(9)]);
var inst_60660__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60656) : f.call(null,inst_60656));
var inst_60661 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60660__$1,inst_60653);
var inst_60662 = cljs.core.keyword_identical_QMARK_(inst_60653,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60663 = ((inst_60661) || (inst_60662));
var state_60692__$1 = (function (){var statearr_60706 = state_60692;
(statearr_60706[(10)] = inst_60660__$1);

return statearr_60706;
})();
if(cljs.core.truth_(inst_60663)){
var statearr_60707_62107 = state_60692__$1;
(statearr_60707_62107[(1)] = (8));

} else {
var statearr_60708_62108 = state_60692__$1;
(statearr_60708_62108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (14))){
var inst_60685 = (state_60692[(2)]);
var inst_60686 = cljs.core.async.close_BANG_(out);
var state_60692__$1 = (function (){var statearr_60710 = state_60692;
(statearr_60710[(13)] = inst_60685);

return statearr_60710;
})();
var statearr_60711_62109 = state_60692__$1;
(statearr_60711_62109[(2)] = inst_60686);

(statearr_60711_62109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (10))){
var inst_60675 = (state_60692[(2)]);
var state_60692__$1 = state_60692;
var statearr_60712_62110 = state_60692__$1;
(statearr_60712_62110[(2)] = inst_60675);

(statearr_60712_62110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60693 === (8))){
var inst_60660 = (state_60692[(10)]);
var inst_60652 = (state_60692[(7)]);
var inst_60656 = (state_60692[(9)]);
var inst_60665 = inst_60652.push(inst_60656);
var tmp60709 = inst_60652;
var inst_60652__$1 = tmp60709;
var inst_60653 = inst_60660;
var state_60692__$1 = (function (){var statearr_60713 = state_60692;
(statearr_60713[(14)] = inst_60665);

(statearr_60713[(7)] = inst_60652__$1);

(statearr_60713[(8)] = inst_60653);

return statearr_60713;
})();
var statearr_60714_62115 = state_60692__$1;
(statearr_60714_62115[(2)] = null);

(statearr_60714_62115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58471__auto__ = null;
var cljs$core$async$state_machine__58471__auto____0 = (function (){
var statearr_60715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60715[(0)] = cljs$core$async$state_machine__58471__auto__);

(statearr_60715[(1)] = (1));

return statearr_60715;
});
var cljs$core$async$state_machine__58471__auto____1 = (function (state_60692){
while(true){
var ret_value__58472__auto__ = (function (){try{while(true){
var result__58473__auto__ = switch__58470__auto__(state_60692);
if(cljs.core.keyword_identical_QMARK_(result__58473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58473__auto__;
}
break;
}
}catch (e60716){var ex__58474__auto__ = e60716;
var statearr_60717_62116 = state_60692;
(statearr_60717_62116[(2)] = ex__58474__auto__);


if(cljs.core.seq((state_60692[(4)]))){
var statearr_60718_62117 = state_60692;
(statearr_60718_62117[(1)] = cljs.core.first((state_60692[(4)])));

} else {
throw ex__58474__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62118 = state_60692;
state_60692 = G__62118;
continue;
} else {
return ret_value__58472__auto__;
}
break;
}
});
cljs$core$async$state_machine__58471__auto__ = function(state_60692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58471__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58471__auto____1.call(this,state_60692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58471__auto____0;
cljs$core$async$state_machine__58471__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58471__auto____1;
return cljs$core$async$state_machine__58471__auto__;
})()
})();
var state__58607__auto__ = (function (){var statearr_60719 = f__58606__auto__();
(statearr_60719[(6)] = c__58605__auto___62085);

return statearr_60719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58607__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

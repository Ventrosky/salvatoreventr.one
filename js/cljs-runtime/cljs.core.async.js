goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33413 = arguments.length;
switch (G__33413) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33414 = (function (f,blockable,meta33415){
this.f = f;
this.blockable = blockable;
this.meta33415 = meta33415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33416,meta33415__$1){
var self__ = this;
var _33416__$1 = this;
return (new cljs.core.async.t_cljs$core$async33414(self__.f,self__.blockable,meta33415__$1));
});

cljs.core.async.t_cljs$core$async33414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33416){
var self__ = this;
var _33416__$1 = this;
return self__.meta33415;
});

cljs.core.async.t_cljs$core$async33414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33415","meta33415",1630301136,null)], null);
});

cljs.core.async.t_cljs$core$async33414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33414";

cljs.core.async.t_cljs$core$async33414.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33414");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33414.
 */
cljs.core.async.__GT_t_cljs$core$async33414 = (function cljs$core$async$__GT_t_cljs$core$async33414(f__$1,blockable__$1,meta33415){
return (new cljs.core.async.t_cljs$core$async33414(f__$1,blockable__$1,meta33415));
});

}

return (new cljs.core.async.t_cljs$core$async33414(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__33419 = arguments.length;
switch (G__33419) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33421 = arguments.length;
switch (G__33421) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__33423 = arguments.length;
switch (G__33423) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34863 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34863) : fn1.call(null,val_34863));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34863,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34863) : fn1.call(null,val_34863));
});})(val_34863,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__33425 = arguments.length;
switch (G__33425) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34874 = n;
var x_34875 = (0);
while(true){
if((x_34875 < n__4607__auto___34874)){
(a[x_34875] = (0));

var G__34876 = (x_34875 + (1));
x_34875 = G__34876;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34881 = (i + (1));
i = G__34881;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33426 = (function (flag,meta33427){
this.flag = flag;
this.meta33427 = meta33427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33428,meta33427__$1){
var self__ = this;
var _33428__$1 = this;
return (new cljs.core.async.t_cljs$core$async33426(self__.flag,meta33427__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33428){
var self__ = this;
var _33428__$1 = this;
return self__.meta33427;
});})(flag))
;

cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33426.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33427","meta33427",1606476895,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33426";

cljs.core.async.t_cljs$core$async33426.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33426");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33426.
 */
cljs.core.async.__GT_t_cljs$core$async33426 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33426(flag__$1,meta33427){
return (new cljs.core.async.t_cljs$core$async33426(flag__$1,meta33427));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33426(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33429 = (function (flag,cb,meta33430){
this.flag = flag;
this.cb = cb;
this.meta33430 = meta33430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33431,meta33430__$1){
var self__ = this;
var _33431__$1 = this;
return (new cljs.core.async.t_cljs$core$async33429(self__.flag,self__.cb,meta33430__$1));
});

cljs.core.async.t_cljs$core$async33429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33431){
var self__ = this;
var _33431__$1 = this;
return self__.meta33430;
});

cljs.core.async.t_cljs$core$async33429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33430","meta33430",-1285431061,null)], null);
});

cljs.core.async.t_cljs$core$async33429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33429";

cljs.core.async.t_cljs$core$async33429.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33429");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33429.
 */
cljs.core.async.__GT_t_cljs$core$async33429 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33429(flag__$1,cb__$1,meta33430){
return (new cljs.core.async.t_cljs$core$async33429(flag__$1,cb__$1,meta33430));
});

}

return (new cljs.core.async.t_cljs$core$async33429(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__33432_SHARP_){
var G__33434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33432_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33434) : fret.call(null,G__33434));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33433_SHARP_){
var G__33435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33433_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33435) : fret.call(null,G__33435));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34901 = (i + (1));
i = G__34901;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___34903 = arguments.length;
var i__4731__auto___34904 = (0);
while(true){
if((i__4731__auto___34904 < len__4730__auto___34903)){
args__4736__auto__.push((arguments[i__4731__auto___34904]));

var G__34905 = (i__4731__auto___34904 + (1));
i__4731__auto___34904 = G__34905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33438){
var map__33439 = p__33438;
var map__33439__$1 = (((((!((map__33439 == null))))?(((((map__33439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33439):map__33439);
var opts = map__33439__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33436){
var G__33437 = cljs.core.first(seq33436);
var seq33436__$1 = cljs.core.next(seq33436);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33437,seq33436__$1);
});

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
var G__33442 = arguments.length;
switch (G__33442) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33353__auto___34915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___34915){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___34915){
return (function (state_33466){
var state_val_33467 = (state_33466[(1)]);
if((state_val_33467 === (7))){
var inst_33462 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33468_34918 = state_33466__$1;
(statearr_33468_34918[(2)] = inst_33462);

(statearr_33468_34918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (1))){
var state_33466__$1 = state_33466;
var statearr_33469_34919 = state_33466__$1;
(statearr_33469_34919[(2)] = null);

(statearr_33469_34919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (4))){
var inst_33445 = (state_33466[(7)]);
var inst_33445__$1 = (state_33466[(2)]);
var inst_33446 = (inst_33445__$1 == null);
var state_33466__$1 = (function (){var statearr_33470 = state_33466;
(statearr_33470[(7)] = inst_33445__$1);

return statearr_33470;
})();
if(cljs.core.truth_(inst_33446)){
var statearr_33471_34922 = state_33466__$1;
(statearr_33471_34922[(1)] = (5));

} else {
var statearr_33472_34923 = state_33466__$1;
(statearr_33472_34923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (13))){
var state_33466__$1 = state_33466;
var statearr_33473_34924 = state_33466__$1;
(statearr_33473_34924[(2)] = null);

(statearr_33473_34924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (6))){
var inst_33445 = (state_33466[(7)]);
var state_33466__$1 = state_33466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33466__$1,(11),to,inst_33445);
} else {
if((state_val_33467 === (3))){
var inst_33464 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33466__$1,inst_33464);
} else {
if((state_val_33467 === (12))){
var state_33466__$1 = state_33466;
var statearr_33474_34927 = state_33466__$1;
(statearr_33474_34927[(2)] = null);

(statearr_33474_34927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (2))){
var state_33466__$1 = state_33466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33466__$1,(4),from);
} else {
if((state_val_33467 === (11))){
var inst_33455 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
if(cljs.core.truth_(inst_33455)){
var statearr_33475_34932 = state_33466__$1;
(statearr_33475_34932[(1)] = (12));

} else {
var statearr_33476_34933 = state_33466__$1;
(statearr_33476_34933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (9))){
var state_33466__$1 = state_33466;
var statearr_33477_34935 = state_33466__$1;
(statearr_33477_34935[(2)] = null);

(statearr_33477_34935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (5))){
var state_33466__$1 = state_33466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33478_34937 = state_33466__$1;
(statearr_33478_34937[(1)] = (8));

} else {
var statearr_33479_34938 = state_33466__$1;
(statearr_33479_34938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (14))){
var inst_33460 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33480_34939 = state_33466__$1;
(statearr_33480_34939[(2)] = inst_33460);

(statearr_33480_34939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (10))){
var inst_33452 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33481_34940 = state_33466__$1;
(statearr_33481_34940[(2)] = inst_33452);

(statearr_33481_34940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (8))){
var inst_33449 = cljs.core.async.close_BANG_(to);
var state_33466__$1 = state_33466;
var statearr_33482_34941 = state_33466__$1;
(statearr_33482_34941[(2)] = inst_33449);

(statearr_33482_34941[(1)] = (10));


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
});})(c__33353__auto___34915))
;
return ((function (switch__33252__auto__,c__33353__auto___34915){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_33483 = [null,null,null,null,null,null,null,null];
(statearr_33483[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_33483[(1)] = (1));

return statearr_33483;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_33466){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33466);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33484){if((e33484 instanceof Object)){
var ex__33256__auto__ = e33484;
var statearr_33485_34946 = state_33466;
(statearr_33485_34946[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34947 = state_33466;
state_33466 = G__34947;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_33466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_33466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___34915))
})();
var state__33355__auto__ = (function (){var statearr_33486 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33486[(6)] = c__33353__auto___34915);

return statearr_33486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___34915))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33487){
var vec__33488 = p__33487;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33488,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33488,(1),null);
var job = vec__33488;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33353__auto___34961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___34961,res,vec__33488,v,p,job,jobs,results){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___34961,res,vec__33488,v,p,job,jobs,results){
return (function (state_33495){
var state_val_33496 = (state_33495[(1)]);
if((state_val_33496 === (1))){
var state_33495__$1 = state_33495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33495__$1,(2),res,v);
} else {
if((state_val_33496 === (2))){
var inst_33492 = (state_33495[(2)]);
var inst_33493 = cljs.core.async.close_BANG_(res);
var state_33495__$1 = (function (){var statearr_33497 = state_33495;
(statearr_33497[(7)] = inst_33492);

return statearr_33497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33495__$1,inst_33493);
} else {
return null;
}
}
});})(c__33353__auto___34961,res,vec__33488,v,p,job,jobs,results))
;
return ((function (switch__33252__auto__,c__33353__auto___34961,res,vec__33488,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0 = (function (){
var statearr_33498 = [null,null,null,null,null,null,null,null];
(statearr_33498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__);

(statearr_33498[(1)] = (1));

return statearr_33498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1 = (function (state_33495){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33495);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33499){if((e33499 instanceof Object)){
var ex__33256__auto__ = e33499;
var statearr_33500_34967 = state_33495;
(statearr_33500_34967[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34968 = state_33495;
state_33495 = G__34968;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = function(state_33495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1.call(this,state_33495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___34961,res,vec__33488,v,p,job,jobs,results))
})();
var state__33355__auto__ = (function (){var statearr_33501 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33501[(6)] = c__33353__auto___34961);

return statearr_33501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___34961,res,vec__33488,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33502){
var vec__33503 = p__33502;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(1),null);
var job = vec__33503;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___34969 = n;
var __34970 = (0);
while(true){
if((__34970 < n__4607__auto___34969)){
var G__33506_34971 = type;
var G__33506_34972__$1 = (((G__33506_34971 instanceof cljs.core.Keyword))?G__33506_34971.fqn:null);
switch (G__33506_34972__$1) {
case "compute":
var c__33353__auto___34974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34970,c__33353__auto___34974,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (__34970,c__33353__auto___34974,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async){
return (function (state_33519){
var state_val_33520 = (state_33519[(1)]);
if((state_val_33520 === (1))){
var state_33519__$1 = state_33519;
var statearr_33521_34975 = state_33519__$1;
(statearr_33521_34975[(2)] = null);

(statearr_33521_34975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (2))){
var state_33519__$1 = state_33519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33519__$1,(4),jobs);
} else {
if((state_val_33520 === (3))){
var inst_33517 = (state_33519[(2)]);
var state_33519__$1 = state_33519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33519__$1,inst_33517);
} else {
if((state_val_33520 === (4))){
var inst_33509 = (state_33519[(2)]);
var inst_33510 = process(inst_33509);
var state_33519__$1 = state_33519;
if(cljs.core.truth_(inst_33510)){
var statearr_33522_34976 = state_33519__$1;
(statearr_33522_34976[(1)] = (5));

} else {
var statearr_33523_34977 = state_33519__$1;
(statearr_33523_34977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (5))){
var state_33519__$1 = state_33519;
var statearr_33524_34978 = state_33519__$1;
(statearr_33524_34978[(2)] = null);

(statearr_33524_34978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (6))){
var state_33519__$1 = state_33519;
var statearr_33525_34979 = state_33519__$1;
(statearr_33525_34979[(2)] = null);

(statearr_33525_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33520 === (7))){
var inst_33515 = (state_33519[(2)]);
var state_33519__$1 = state_33519;
var statearr_33526_34980 = state_33519__$1;
(statearr_33526_34980[(2)] = inst_33515);

(statearr_33526_34980[(1)] = (3));


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
});})(__34970,c__33353__auto___34974,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async))
;
return ((function (__34970,switch__33252__auto__,c__33353__auto___34974,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0 = (function (){
var statearr_33527 = [null,null,null,null,null,null,null];
(statearr_33527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__);

(statearr_33527[(1)] = (1));

return statearr_33527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1 = (function (state_33519){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33519);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33528){if((e33528 instanceof Object)){
var ex__33256__auto__ = e33528;
var statearr_33529_34981 = state_33519;
(statearr_33529_34981[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34982 = state_33519;
state_33519 = G__34982;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = function(state_33519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1.call(this,state_33519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__;
})()
;})(__34970,switch__33252__auto__,c__33353__auto___34974,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async))
})();
var state__33355__auto__ = (function (){var statearr_33530 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33530[(6)] = c__33353__auto___34974);

return statearr_33530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(__34970,c__33353__auto___34974,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async))
);


break;
case "async":
var c__33353__auto___34983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34970,c__33353__auto___34983,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (__34970,c__33353__auto___34983,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async){
return (function (state_33543){
var state_val_33544 = (state_33543[(1)]);
if((state_val_33544 === (1))){
var state_33543__$1 = state_33543;
var statearr_33545_34984 = state_33543__$1;
(statearr_33545_34984[(2)] = null);

(statearr_33545_34984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (2))){
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33543__$1,(4),jobs);
} else {
if((state_val_33544 === (3))){
var inst_33541 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33543__$1,inst_33541);
} else {
if((state_val_33544 === (4))){
var inst_33533 = (state_33543[(2)]);
var inst_33534 = async(inst_33533);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33534)){
var statearr_33546_34985 = state_33543__$1;
(statearr_33546_34985[(1)] = (5));

} else {
var statearr_33547_34986 = state_33543__$1;
(statearr_33547_34986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (5))){
var state_33543__$1 = state_33543;
var statearr_33548_34987 = state_33543__$1;
(statearr_33548_34987[(2)] = null);

(statearr_33548_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (6))){
var state_33543__$1 = state_33543;
var statearr_33549_34989 = state_33543__$1;
(statearr_33549_34989[(2)] = null);

(statearr_33549_34989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (7))){
var inst_33539 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33550_34993 = state_33543__$1;
(statearr_33550_34993[(2)] = inst_33539);

(statearr_33550_34993[(1)] = (3));


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
});})(__34970,c__33353__auto___34983,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async))
;
return ((function (__34970,switch__33252__auto__,c__33353__auto___34983,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0 = (function (){
var statearr_33551 = [null,null,null,null,null,null,null];
(statearr_33551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__);

(statearr_33551[(1)] = (1));

return statearr_33551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1 = (function (state_33543){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33543);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33552){if((e33552 instanceof Object)){
var ex__33256__auto__ = e33552;
var statearr_33553_34994 = state_33543;
(statearr_33553_34994[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_33543;
state_33543 = G__34996;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = function(state_33543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1.call(this,state_33543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__;
})()
;})(__34970,switch__33252__auto__,c__33353__auto___34983,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async))
})();
var state__33355__auto__ = (function (){var statearr_33554 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33554[(6)] = c__33353__auto___34983);

return statearr_33554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(__34970,c__33353__auto___34983,G__33506_34971,G__33506_34972__$1,n__4607__auto___34969,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33506_34972__$1)].join('')));

}

var G__35000 = (__34970 + (1));
__34970 = G__35000;
continue;
} else {
}
break;
}

var c__33353__auto___35001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35001,jobs,results,process,async){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35001,jobs,results,process,async){
return (function (state_33576){
var state_val_33577 = (state_33576[(1)]);
if((state_val_33577 === (7))){
var inst_33572 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33578_35002 = state_33576__$1;
(statearr_33578_35002[(2)] = inst_33572);

(statearr_33578_35002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (1))){
var state_33576__$1 = state_33576;
var statearr_33579_35004 = state_33576__$1;
(statearr_33579_35004[(2)] = null);

(statearr_33579_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (4))){
var inst_33557 = (state_33576[(7)]);
var inst_33557__$1 = (state_33576[(2)]);
var inst_33558 = (inst_33557__$1 == null);
var state_33576__$1 = (function (){var statearr_33580 = state_33576;
(statearr_33580[(7)] = inst_33557__$1);

return statearr_33580;
})();
if(cljs.core.truth_(inst_33558)){
var statearr_33581_35005 = state_33576__$1;
(statearr_33581_35005[(1)] = (5));

} else {
var statearr_33582_35006 = state_33576__$1;
(statearr_33582_35006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (6))){
var inst_33557 = (state_33576[(7)]);
var inst_33562 = (state_33576[(8)]);
var inst_33562__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33563 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33564 = [inst_33557,inst_33562__$1];
var inst_33565 = (new cljs.core.PersistentVector(null,2,(5),inst_33563,inst_33564,null));
var state_33576__$1 = (function (){var statearr_33583 = state_33576;
(statearr_33583[(8)] = inst_33562__$1);

return statearr_33583;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33576__$1,(8),jobs,inst_33565);
} else {
if((state_val_33577 === (3))){
var inst_33574 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33576__$1,inst_33574);
} else {
if((state_val_33577 === (2))){
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33576__$1,(4),from);
} else {
if((state_val_33577 === (9))){
var inst_33569 = (state_33576[(2)]);
var state_33576__$1 = (function (){var statearr_33584 = state_33576;
(statearr_33584[(9)] = inst_33569);

return statearr_33584;
})();
var statearr_33585_35007 = state_33576__$1;
(statearr_33585_35007[(2)] = null);

(statearr_33585_35007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (5))){
var inst_33560 = cljs.core.async.close_BANG_(jobs);
var state_33576__$1 = state_33576;
var statearr_33586_35010 = state_33576__$1;
(statearr_33586_35010[(2)] = inst_33560);

(statearr_33586_35010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (8))){
var inst_33562 = (state_33576[(8)]);
var inst_33567 = (state_33576[(2)]);
var state_33576__$1 = (function (){var statearr_33587 = state_33576;
(statearr_33587[(10)] = inst_33567);

return statearr_33587;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33576__$1,(9),results,inst_33562);
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
});})(c__33353__auto___35001,jobs,results,process,async))
;
return ((function (switch__33252__auto__,c__33353__auto___35001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0 = (function (){
var statearr_33588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__);

(statearr_33588[(1)] = (1));

return statearr_33588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1 = (function (state_33576){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33576);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33589){if((e33589 instanceof Object)){
var ex__33256__auto__ = e33589;
var statearr_33590_35013 = state_33576;
(statearr_33590_35013[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35014 = state_33576;
state_33576 = G__35014;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = function(state_33576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1.call(this,state_33576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35001,jobs,results,process,async))
})();
var state__33355__auto__ = (function (){var statearr_33591 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33591[(6)] = c__33353__auto___35001);

return statearr_33591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35001,jobs,results,process,async))
);


var c__33353__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto__,jobs,results,process,async){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto__,jobs,results,process,async){
return (function (state_33629){
var state_val_33630 = (state_33629[(1)]);
if((state_val_33630 === (7))){
var inst_33625 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
var statearr_33631_35018 = state_33629__$1;
(statearr_33631_35018[(2)] = inst_33625);

(statearr_33631_35018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (20))){
var state_33629__$1 = state_33629;
var statearr_33632_35019 = state_33629__$1;
(statearr_33632_35019[(2)] = null);

(statearr_33632_35019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (1))){
var state_33629__$1 = state_33629;
var statearr_33633_35020 = state_33629__$1;
(statearr_33633_35020[(2)] = null);

(statearr_33633_35020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (4))){
var inst_33594 = (state_33629[(7)]);
var inst_33594__$1 = (state_33629[(2)]);
var inst_33595 = (inst_33594__$1 == null);
var state_33629__$1 = (function (){var statearr_33634 = state_33629;
(statearr_33634[(7)] = inst_33594__$1);

return statearr_33634;
})();
if(cljs.core.truth_(inst_33595)){
var statearr_33635_35021 = state_33629__$1;
(statearr_33635_35021[(1)] = (5));

} else {
var statearr_33636_35022 = state_33629__$1;
(statearr_33636_35022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (15))){
var inst_33607 = (state_33629[(8)]);
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33629__$1,(18),to,inst_33607);
} else {
if((state_val_33630 === (21))){
var inst_33620 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
var statearr_33637_35024 = state_33629__$1;
(statearr_33637_35024[(2)] = inst_33620);

(statearr_33637_35024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (13))){
var inst_33622 = (state_33629[(2)]);
var state_33629__$1 = (function (){var statearr_33638 = state_33629;
(statearr_33638[(9)] = inst_33622);

return statearr_33638;
})();
var statearr_33639_35025 = state_33629__$1;
(statearr_33639_35025[(2)] = null);

(statearr_33639_35025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (6))){
var inst_33594 = (state_33629[(7)]);
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33629__$1,(11),inst_33594);
} else {
if((state_val_33630 === (17))){
var inst_33615 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
if(cljs.core.truth_(inst_33615)){
var statearr_33640_35027 = state_33629__$1;
(statearr_33640_35027[(1)] = (19));

} else {
var statearr_33641_35028 = state_33629__$1;
(statearr_33641_35028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (3))){
var inst_33627 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33629__$1,inst_33627);
} else {
if((state_val_33630 === (12))){
var inst_33604 = (state_33629[(10)]);
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33629__$1,(14),inst_33604);
} else {
if((state_val_33630 === (2))){
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33629__$1,(4),results);
} else {
if((state_val_33630 === (19))){
var state_33629__$1 = state_33629;
var statearr_33642_35030 = state_33629__$1;
(statearr_33642_35030[(2)] = null);

(statearr_33642_35030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (11))){
var inst_33604 = (state_33629[(2)]);
var state_33629__$1 = (function (){var statearr_33643 = state_33629;
(statearr_33643[(10)] = inst_33604);

return statearr_33643;
})();
var statearr_33644_35031 = state_33629__$1;
(statearr_33644_35031[(2)] = null);

(statearr_33644_35031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (9))){
var state_33629__$1 = state_33629;
var statearr_33645_35032 = state_33629__$1;
(statearr_33645_35032[(2)] = null);

(statearr_33645_35032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (5))){
var state_33629__$1 = state_33629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33646_35033 = state_33629__$1;
(statearr_33646_35033[(1)] = (8));

} else {
var statearr_33647_35034 = state_33629__$1;
(statearr_33647_35034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (14))){
var inst_33609 = (state_33629[(11)]);
var inst_33607 = (state_33629[(8)]);
var inst_33607__$1 = (state_33629[(2)]);
var inst_33608 = (inst_33607__$1 == null);
var inst_33609__$1 = cljs.core.not(inst_33608);
var state_33629__$1 = (function (){var statearr_33648 = state_33629;
(statearr_33648[(11)] = inst_33609__$1);

(statearr_33648[(8)] = inst_33607__$1);

return statearr_33648;
})();
if(inst_33609__$1){
var statearr_33649_35037 = state_33629__$1;
(statearr_33649_35037[(1)] = (15));

} else {
var statearr_33650_35038 = state_33629__$1;
(statearr_33650_35038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (16))){
var inst_33609 = (state_33629[(11)]);
var state_33629__$1 = state_33629;
var statearr_33651_35039 = state_33629__$1;
(statearr_33651_35039[(2)] = inst_33609);

(statearr_33651_35039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (10))){
var inst_33601 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
var statearr_33652_35040 = state_33629__$1;
(statearr_33652_35040[(2)] = inst_33601);

(statearr_33652_35040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (18))){
var inst_33612 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
var statearr_33653_35041 = state_33629__$1;
(statearr_33653_35041[(2)] = inst_33612);

(statearr_33653_35041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (8))){
var inst_33598 = cljs.core.async.close_BANG_(to);
var state_33629__$1 = state_33629;
var statearr_33654_35042 = state_33629__$1;
(statearr_33654_35042[(2)] = inst_33598);

(statearr_33654_35042[(1)] = (10));


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
});})(c__33353__auto__,jobs,results,process,async))
;
return ((function (switch__33252__auto__,c__33353__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0 = (function (){
var statearr_33655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__);

(statearr_33655[(1)] = (1));

return statearr_33655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1 = (function (state_33629){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33629);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33656){if((e33656 instanceof Object)){
var ex__33256__auto__ = e33656;
var statearr_33657_35044 = state_33629;
(statearr_33657_35044[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35046 = state_33629;
state_33629 = G__35046;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__ = function(state_33629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1.call(this,state_33629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto__,jobs,results,process,async))
})();
var state__33355__auto__ = (function (){var statearr_33658 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33658[(6)] = c__33353__auto__);

return statearr_33658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto__,jobs,results,process,async))
);

return c__33353__auto__;
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
var G__33660 = arguments.length;
switch (G__33660) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__33662 = arguments.length;
switch (G__33662) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__33664 = arguments.length;
switch (G__33664) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33353__auto___35052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35052,tc,fc){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35052,tc,fc){
return (function (state_33690){
var state_val_33691 = (state_33690[(1)]);
if((state_val_33691 === (7))){
var inst_33686 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33692_35053 = state_33690__$1;
(statearr_33692_35053[(2)] = inst_33686);

(statearr_33692_35053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (1))){
var state_33690__$1 = state_33690;
var statearr_33693_35054 = state_33690__$1;
(statearr_33693_35054[(2)] = null);

(statearr_33693_35054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (4))){
var inst_33667 = (state_33690[(7)]);
var inst_33667__$1 = (state_33690[(2)]);
var inst_33668 = (inst_33667__$1 == null);
var state_33690__$1 = (function (){var statearr_33694 = state_33690;
(statearr_33694[(7)] = inst_33667__$1);

return statearr_33694;
})();
if(cljs.core.truth_(inst_33668)){
var statearr_33695_35055 = state_33690__$1;
(statearr_33695_35055[(1)] = (5));

} else {
var statearr_33696_35056 = state_33690__$1;
(statearr_33696_35056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (13))){
var state_33690__$1 = state_33690;
var statearr_33697_35057 = state_33690__$1;
(statearr_33697_35057[(2)] = null);

(statearr_33697_35057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (6))){
var inst_33667 = (state_33690[(7)]);
var inst_33673 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33667) : p.call(null,inst_33667));
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33673)){
var statearr_33698_35060 = state_33690__$1;
(statearr_33698_35060[(1)] = (9));

} else {
var statearr_33699_35061 = state_33690__$1;
(statearr_33699_35061[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (3))){
var inst_33688 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33690__$1,inst_33688);
} else {
if((state_val_33691 === (12))){
var state_33690__$1 = state_33690;
var statearr_33700_35062 = state_33690__$1;
(statearr_33700_35062[(2)] = null);

(statearr_33700_35062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (2))){
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33690__$1,(4),ch);
} else {
if((state_val_33691 === (11))){
var inst_33667 = (state_33690[(7)]);
var inst_33677 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33690__$1,(8),inst_33677,inst_33667);
} else {
if((state_val_33691 === (9))){
var state_33690__$1 = state_33690;
var statearr_33701_35065 = state_33690__$1;
(statearr_33701_35065[(2)] = tc);

(statearr_33701_35065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (5))){
var inst_33670 = cljs.core.async.close_BANG_(tc);
var inst_33671 = cljs.core.async.close_BANG_(fc);
var state_33690__$1 = (function (){var statearr_33702 = state_33690;
(statearr_33702[(8)] = inst_33670);

return statearr_33702;
})();
var statearr_33703_35068 = state_33690__$1;
(statearr_33703_35068[(2)] = inst_33671);

(statearr_33703_35068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (14))){
var inst_33684 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33704_35069 = state_33690__$1;
(statearr_33704_35069[(2)] = inst_33684);

(statearr_33704_35069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (10))){
var state_33690__$1 = state_33690;
var statearr_33705_35070 = state_33690__$1;
(statearr_33705_35070[(2)] = fc);

(statearr_33705_35070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (8))){
var inst_33679 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33679)){
var statearr_33706_35073 = state_33690__$1;
(statearr_33706_35073[(1)] = (12));

} else {
var statearr_33707_35074 = state_33690__$1;
(statearr_33707_35074[(1)] = (13));

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
});})(c__33353__auto___35052,tc,fc))
;
return ((function (switch__33252__auto__,c__33353__auto___35052,tc,fc){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_33708 = [null,null,null,null,null,null,null,null,null];
(statearr_33708[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_33708[(1)] = (1));

return statearr_33708;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_33690){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33690);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33709){if((e33709 instanceof Object)){
var ex__33256__auto__ = e33709;
var statearr_33710_35078 = state_33690;
(statearr_33710_35078[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35080 = state_33690;
state_33690 = G__35080;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_33690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_33690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35052,tc,fc))
})();
var state__33355__auto__ = (function (){var statearr_33711 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33711[(6)] = c__33353__auto___35052);

return statearr_33711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35052,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33353__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto__){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto__){
return (function (state_33732){
var state_val_33733 = (state_33732[(1)]);
if((state_val_33733 === (7))){
var inst_33728 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33734_35083 = state_33732__$1;
(statearr_33734_35083[(2)] = inst_33728);

(statearr_33734_35083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (1))){
var inst_33712 = init;
var state_33732__$1 = (function (){var statearr_33735 = state_33732;
(statearr_33735[(7)] = inst_33712);

return statearr_33735;
})();
var statearr_33736_35084 = state_33732__$1;
(statearr_33736_35084[(2)] = null);

(statearr_33736_35084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (4))){
var inst_33715 = (state_33732[(8)]);
var inst_33715__$1 = (state_33732[(2)]);
var inst_33716 = (inst_33715__$1 == null);
var state_33732__$1 = (function (){var statearr_33737 = state_33732;
(statearr_33737[(8)] = inst_33715__$1);

return statearr_33737;
})();
if(cljs.core.truth_(inst_33716)){
var statearr_33738_35085 = state_33732__$1;
(statearr_33738_35085[(1)] = (5));

} else {
var statearr_33739_35086 = state_33732__$1;
(statearr_33739_35086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (6))){
var inst_33715 = (state_33732[(8)]);
var inst_33719 = (state_33732[(9)]);
var inst_33712 = (state_33732[(7)]);
var inst_33719__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33712,inst_33715) : f.call(null,inst_33712,inst_33715));
var inst_33720 = cljs.core.reduced_QMARK_(inst_33719__$1);
var state_33732__$1 = (function (){var statearr_33740 = state_33732;
(statearr_33740[(9)] = inst_33719__$1);

return statearr_33740;
})();
if(inst_33720){
var statearr_33741_35088 = state_33732__$1;
(statearr_33741_35088[(1)] = (8));

} else {
var statearr_33742_35089 = state_33732__$1;
(statearr_33742_35089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (3))){
var inst_33730 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33732__$1,inst_33730);
} else {
if((state_val_33733 === (2))){
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33732__$1,(4),ch);
} else {
if((state_val_33733 === (9))){
var inst_33719 = (state_33732[(9)]);
var inst_33712 = inst_33719;
var state_33732__$1 = (function (){var statearr_33743 = state_33732;
(statearr_33743[(7)] = inst_33712);

return statearr_33743;
})();
var statearr_33744_35090 = state_33732__$1;
(statearr_33744_35090[(2)] = null);

(statearr_33744_35090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (5))){
var inst_33712 = (state_33732[(7)]);
var state_33732__$1 = state_33732;
var statearr_33745_35091 = state_33732__$1;
(statearr_33745_35091[(2)] = inst_33712);

(statearr_33745_35091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (10))){
var inst_33726 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33746_35096 = state_33732__$1;
(statearr_33746_35096[(2)] = inst_33726);

(statearr_33746_35096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (8))){
var inst_33719 = (state_33732[(9)]);
var inst_33722 = cljs.core.deref(inst_33719);
var state_33732__$1 = state_33732;
var statearr_33747_35097 = state_33732__$1;
(statearr_33747_35097[(2)] = inst_33722);

(statearr_33747_35097[(1)] = (10));


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
});})(c__33353__auto__))
;
return ((function (switch__33252__auto__,c__33353__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33253__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33253__auto____0 = (function (){
var statearr_33748 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33748[(0)] = cljs$core$async$reduce_$_state_machine__33253__auto__);

(statearr_33748[(1)] = (1));

return statearr_33748;
});
var cljs$core$async$reduce_$_state_machine__33253__auto____1 = (function (state_33732){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33732);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33749){if((e33749 instanceof Object)){
var ex__33256__auto__ = e33749;
var statearr_33750_35103 = state_33732;
(statearr_33750_35103[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_33732;
state_33732 = G__35106;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33253__auto__ = function(state_33732){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33253__auto____1.call(this,state_33732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33253__auto____0;
cljs$core$async$reduce_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33253__auto____1;
return cljs$core$async$reduce_$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto__))
})();
var state__33355__auto__ = (function (){var statearr_33751 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33751[(6)] = c__33353__auto__);

return statearr_33751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto__))
);

return c__33353__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33353__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto__,f__$1){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto__,f__$1){
return (function (state_33757){
var state_val_33758 = (state_33757[(1)]);
if((state_val_33758 === (1))){
var inst_33752 = cljs.core.async.reduce(f__$1,init,ch);
var state_33757__$1 = state_33757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33757__$1,(2),inst_33752);
} else {
if((state_val_33758 === (2))){
var inst_33754 = (state_33757[(2)]);
var inst_33755 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33754) : f__$1.call(null,inst_33754));
var state_33757__$1 = state_33757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33757__$1,inst_33755);
} else {
return null;
}
}
});})(c__33353__auto__,f__$1))
;
return ((function (switch__33252__auto__,c__33353__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33253__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33253__auto____0 = (function (){
var statearr_33759 = [null,null,null,null,null,null,null];
(statearr_33759[(0)] = cljs$core$async$transduce_$_state_machine__33253__auto__);

(statearr_33759[(1)] = (1));

return statearr_33759;
});
var cljs$core$async$transduce_$_state_machine__33253__auto____1 = (function (state_33757){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33757);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33760){if((e33760 instanceof Object)){
var ex__33256__auto__ = e33760;
var statearr_33761_35115 = state_33757;
(statearr_33761_35115[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35119 = state_33757;
state_33757 = G__35119;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33253__auto__ = function(state_33757){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33253__auto____1.call(this,state_33757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33253__auto____0;
cljs$core$async$transduce_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33253__auto____1;
return cljs$core$async$transduce_$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto__,f__$1))
})();
var state__33355__auto__ = (function (){var statearr_33762 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33762[(6)] = c__33353__auto__);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto__,f__$1))
);

return c__33353__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33764 = arguments.length;
switch (G__33764) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33353__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto__){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto__){
return (function (state_33789){
var state_val_33790 = (state_33789[(1)]);
if((state_val_33790 === (7))){
var inst_33771 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33791_35128 = state_33789__$1;
(statearr_33791_35128[(2)] = inst_33771);

(statearr_33791_35128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (1))){
var inst_33765 = cljs.core.seq(coll);
var inst_33766 = inst_33765;
var state_33789__$1 = (function (){var statearr_33792 = state_33789;
(statearr_33792[(7)] = inst_33766);

return statearr_33792;
})();
var statearr_33793_35133 = state_33789__$1;
(statearr_33793_35133[(2)] = null);

(statearr_33793_35133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (4))){
var inst_33766 = (state_33789[(7)]);
var inst_33769 = cljs.core.first(inst_33766);
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33789__$1,(7),ch,inst_33769);
} else {
if((state_val_33790 === (13))){
var inst_33783 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33794_35135 = state_33789__$1;
(statearr_33794_35135[(2)] = inst_33783);

(statearr_33794_35135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (6))){
var inst_33774 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
if(cljs.core.truth_(inst_33774)){
var statearr_33795_35138 = state_33789__$1;
(statearr_33795_35138[(1)] = (8));

} else {
var statearr_33796_35139 = state_33789__$1;
(statearr_33796_35139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (3))){
var inst_33787 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33789__$1,inst_33787);
} else {
if((state_val_33790 === (12))){
var state_33789__$1 = state_33789;
var statearr_33797_35145 = state_33789__$1;
(statearr_33797_35145[(2)] = null);

(statearr_33797_35145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (2))){
var inst_33766 = (state_33789[(7)]);
var state_33789__$1 = state_33789;
if(cljs.core.truth_(inst_33766)){
var statearr_33798_35146 = state_33789__$1;
(statearr_33798_35146[(1)] = (4));

} else {
var statearr_33799_35147 = state_33789__$1;
(statearr_33799_35147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (11))){
var inst_33780 = cljs.core.async.close_BANG_(ch);
var state_33789__$1 = state_33789;
var statearr_33800_35152 = state_33789__$1;
(statearr_33800_35152[(2)] = inst_33780);

(statearr_33800_35152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (9))){
var state_33789__$1 = state_33789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33801_35153 = state_33789__$1;
(statearr_33801_35153[(1)] = (11));

} else {
var statearr_33802_35154 = state_33789__$1;
(statearr_33802_35154[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (5))){
var inst_33766 = (state_33789[(7)]);
var state_33789__$1 = state_33789;
var statearr_33803_35157 = state_33789__$1;
(statearr_33803_35157[(2)] = inst_33766);

(statearr_33803_35157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (10))){
var inst_33785 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33804_35160 = state_33789__$1;
(statearr_33804_35160[(2)] = inst_33785);

(statearr_33804_35160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (8))){
var inst_33766 = (state_33789[(7)]);
var inst_33776 = cljs.core.next(inst_33766);
var inst_33766__$1 = inst_33776;
var state_33789__$1 = (function (){var statearr_33805 = state_33789;
(statearr_33805[(7)] = inst_33766__$1);

return statearr_33805;
})();
var statearr_33806_35165 = state_33789__$1;
(statearr_33806_35165[(2)] = null);

(statearr_33806_35165[(1)] = (2));


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
});})(c__33353__auto__))
;
return ((function (switch__33252__auto__,c__33353__auto__){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_33807 = [null,null,null,null,null,null,null,null];
(statearr_33807[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_33807[(1)] = (1));

return statearr_33807;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_33789){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33789);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e33808){if((e33808 instanceof Object)){
var ex__33256__auto__ = e33808;
var statearr_33809_35172 = state_33789;
(statearr_33809_35172[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35178 = state_33789;
state_33789 = G__35178;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_33789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_33789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto__))
})();
var state__33355__auto__ = (function (){var statearr_33810 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_33810[(6)] = c__33353__auto__);

return statearr_33810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto__))
);

return c__33353__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33811 = (function (ch,cs,meta33812){
this.ch = ch;
this.cs = cs;
this.meta33812 = meta33812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33813,meta33812__$1){
var self__ = this;
var _33813__$1 = this;
return (new cljs.core.async.t_cljs$core$async33811(self__.ch,self__.cs,meta33812__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33813){
var self__ = this;
var _33813__$1 = this;
return self__.meta33812;
});})(cs))
;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33811.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33812","meta33812",-445225579,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33811";

cljs.core.async.t_cljs$core$async33811.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33811");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33811.
 */
cljs.core.async.__GT_t_cljs$core$async33811 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33811(ch__$1,cs__$1,meta33812){
return (new cljs.core.async.t_cljs$core$async33811(ch__$1,cs__$1,meta33812));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33811(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33353__auto___35236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35236,cs,m,dchan,dctr,done){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35236,cs,m,dchan,dctr,done){
return (function (state_33948){
var state_val_33949 = (state_33948[(1)]);
if((state_val_33949 === (7))){
var inst_33944 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33950_35238 = state_33948__$1;
(statearr_33950_35238[(2)] = inst_33944);

(statearr_33950_35238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (20))){
var inst_33847 = (state_33948[(7)]);
var inst_33859 = cljs.core.first(inst_33847);
var inst_33860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33859,(0),null);
var inst_33861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33859,(1),null);
var state_33948__$1 = (function (){var statearr_33951 = state_33948;
(statearr_33951[(8)] = inst_33860);

return statearr_33951;
})();
if(cljs.core.truth_(inst_33861)){
var statearr_33952_35240 = state_33948__$1;
(statearr_33952_35240[(1)] = (22));

} else {
var statearr_33953_35243 = state_33948__$1;
(statearr_33953_35243[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (27))){
var inst_33816 = (state_33948[(9)]);
var inst_33889 = (state_33948[(10)]);
var inst_33891 = (state_33948[(11)]);
var inst_33896 = (state_33948[(12)]);
var inst_33896__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33889,inst_33891);
var inst_33897 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33896__$1,inst_33816,done);
var state_33948__$1 = (function (){var statearr_33954 = state_33948;
(statearr_33954[(12)] = inst_33896__$1);

return statearr_33954;
})();
if(cljs.core.truth_(inst_33897)){
var statearr_33955_35246 = state_33948__$1;
(statearr_33955_35246[(1)] = (30));

} else {
var statearr_33956_35247 = state_33948__$1;
(statearr_33956_35247[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (1))){
var state_33948__$1 = state_33948;
var statearr_33957_35248 = state_33948__$1;
(statearr_33957_35248[(2)] = null);

(statearr_33957_35248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (24))){
var inst_33847 = (state_33948[(7)]);
var inst_33866 = (state_33948[(2)]);
var inst_33867 = cljs.core.next(inst_33847);
var inst_33825 = inst_33867;
var inst_33826 = null;
var inst_33827 = (0);
var inst_33828 = (0);
var state_33948__$1 = (function (){var statearr_33958 = state_33948;
(statearr_33958[(13)] = inst_33826);

(statearr_33958[(14)] = inst_33827);

(statearr_33958[(15)] = inst_33866);

(statearr_33958[(16)] = inst_33828);

(statearr_33958[(17)] = inst_33825);

return statearr_33958;
})();
var statearr_33959_35252 = state_33948__$1;
(statearr_33959_35252[(2)] = null);

(statearr_33959_35252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (39))){
var state_33948__$1 = state_33948;
var statearr_33963_35255 = state_33948__$1;
(statearr_33963_35255[(2)] = null);

(statearr_33963_35255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (4))){
var inst_33816 = (state_33948[(9)]);
var inst_33816__$1 = (state_33948[(2)]);
var inst_33817 = (inst_33816__$1 == null);
var state_33948__$1 = (function (){var statearr_33964 = state_33948;
(statearr_33964[(9)] = inst_33816__$1);

return statearr_33964;
})();
if(cljs.core.truth_(inst_33817)){
var statearr_33965_35256 = state_33948__$1;
(statearr_33965_35256[(1)] = (5));

} else {
var statearr_33966_35257 = state_33948__$1;
(statearr_33966_35257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (15))){
var inst_33826 = (state_33948[(13)]);
var inst_33827 = (state_33948[(14)]);
var inst_33828 = (state_33948[(16)]);
var inst_33825 = (state_33948[(17)]);
var inst_33843 = (state_33948[(2)]);
var inst_33844 = (inst_33828 + (1));
var tmp33960 = inst_33826;
var tmp33961 = inst_33827;
var tmp33962 = inst_33825;
var inst_33825__$1 = tmp33962;
var inst_33826__$1 = tmp33960;
var inst_33827__$1 = tmp33961;
var inst_33828__$1 = inst_33844;
var state_33948__$1 = (function (){var statearr_33967 = state_33948;
(statearr_33967[(13)] = inst_33826__$1);

(statearr_33967[(14)] = inst_33827__$1);

(statearr_33967[(18)] = inst_33843);

(statearr_33967[(16)] = inst_33828__$1);

(statearr_33967[(17)] = inst_33825__$1);

return statearr_33967;
})();
var statearr_33968_35261 = state_33948__$1;
(statearr_33968_35261[(2)] = null);

(statearr_33968_35261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (21))){
var inst_33870 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33972_35264 = state_33948__$1;
(statearr_33972_35264[(2)] = inst_33870);

(statearr_33972_35264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (31))){
var inst_33896 = (state_33948[(12)]);
var inst_33900 = done(null);
var inst_33901 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33896);
var state_33948__$1 = (function (){var statearr_33973 = state_33948;
(statearr_33973[(19)] = inst_33900);

return statearr_33973;
})();
var statearr_33974_35267 = state_33948__$1;
(statearr_33974_35267[(2)] = inst_33901);

(statearr_33974_35267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (32))){
var inst_33890 = (state_33948[(20)]);
var inst_33888 = (state_33948[(21)]);
var inst_33889 = (state_33948[(10)]);
var inst_33891 = (state_33948[(11)]);
var inst_33903 = (state_33948[(2)]);
var inst_33904 = (inst_33891 + (1));
var tmp33969 = inst_33890;
var tmp33970 = inst_33888;
var tmp33971 = inst_33889;
var inst_33888__$1 = tmp33970;
var inst_33889__$1 = tmp33971;
var inst_33890__$1 = tmp33969;
var inst_33891__$1 = inst_33904;
var state_33948__$1 = (function (){var statearr_33975 = state_33948;
(statearr_33975[(20)] = inst_33890__$1);

(statearr_33975[(21)] = inst_33888__$1);

(statearr_33975[(10)] = inst_33889__$1);

(statearr_33975[(11)] = inst_33891__$1);

(statearr_33975[(22)] = inst_33903);

return statearr_33975;
})();
var statearr_33976_35273 = state_33948__$1;
(statearr_33976_35273[(2)] = null);

(statearr_33976_35273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (40))){
var inst_33916 = (state_33948[(23)]);
var inst_33920 = done(null);
var inst_33921 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33916);
var state_33948__$1 = (function (){var statearr_33977 = state_33948;
(statearr_33977[(24)] = inst_33920);

return statearr_33977;
})();
var statearr_33978_35274 = state_33948__$1;
(statearr_33978_35274[(2)] = inst_33921);

(statearr_33978_35274[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (33))){
var inst_33907 = (state_33948[(25)]);
var inst_33909 = cljs.core.chunked_seq_QMARK_(inst_33907);
var state_33948__$1 = state_33948;
if(inst_33909){
var statearr_33979_35276 = state_33948__$1;
(statearr_33979_35276[(1)] = (36));

} else {
var statearr_33980_35278 = state_33948__$1;
(statearr_33980_35278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (13))){
var inst_33837 = (state_33948[(26)]);
var inst_33840 = cljs.core.async.close_BANG_(inst_33837);
var state_33948__$1 = state_33948;
var statearr_33981_35282 = state_33948__$1;
(statearr_33981_35282[(2)] = inst_33840);

(statearr_33981_35282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (22))){
var inst_33860 = (state_33948[(8)]);
var inst_33863 = cljs.core.async.close_BANG_(inst_33860);
var state_33948__$1 = state_33948;
var statearr_33982_35283 = state_33948__$1;
(statearr_33982_35283[(2)] = inst_33863);

(statearr_33982_35283[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (36))){
var inst_33907 = (state_33948[(25)]);
var inst_33911 = cljs.core.chunk_first(inst_33907);
var inst_33912 = cljs.core.chunk_rest(inst_33907);
var inst_33913 = cljs.core.count(inst_33911);
var inst_33888 = inst_33912;
var inst_33889 = inst_33911;
var inst_33890 = inst_33913;
var inst_33891 = (0);
var state_33948__$1 = (function (){var statearr_33983 = state_33948;
(statearr_33983[(20)] = inst_33890);

(statearr_33983[(21)] = inst_33888);

(statearr_33983[(10)] = inst_33889);

(statearr_33983[(11)] = inst_33891);

return statearr_33983;
})();
var statearr_33984_35285 = state_33948__$1;
(statearr_33984_35285[(2)] = null);

(statearr_33984_35285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (41))){
var inst_33907 = (state_33948[(25)]);
var inst_33923 = (state_33948[(2)]);
var inst_33924 = cljs.core.next(inst_33907);
var inst_33888 = inst_33924;
var inst_33889 = null;
var inst_33890 = (0);
var inst_33891 = (0);
var state_33948__$1 = (function (){var statearr_33985 = state_33948;
(statearr_33985[(20)] = inst_33890);

(statearr_33985[(21)] = inst_33888);

(statearr_33985[(10)] = inst_33889);

(statearr_33985[(27)] = inst_33923);

(statearr_33985[(11)] = inst_33891);

return statearr_33985;
})();
var statearr_33986_35292 = state_33948__$1;
(statearr_33986_35292[(2)] = null);

(statearr_33986_35292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (43))){
var state_33948__$1 = state_33948;
var statearr_33987_35294 = state_33948__$1;
(statearr_33987_35294[(2)] = null);

(statearr_33987_35294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (29))){
var inst_33932 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33988_35295 = state_33948__$1;
(statearr_33988_35295[(2)] = inst_33932);

(statearr_33988_35295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (44))){
var inst_33941 = (state_33948[(2)]);
var state_33948__$1 = (function (){var statearr_33989 = state_33948;
(statearr_33989[(28)] = inst_33941);

return statearr_33989;
})();
var statearr_33990_35299 = state_33948__$1;
(statearr_33990_35299[(2)] = null);

(statearr_33990_35299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (6))){
var inst_33880 = (state_33948[(29)]);
var inst_33879 = cljs.core.deref(cs);
var inst_33880__$1 = cljs.core.keys(inst_33879);
var inst_33881 = cljs.core.count(inst_33880__$1);
var inst_33882 = cljs.core.reset_BANG_(dctr,inst_33881);
var inst_33887 = cljs.core.seq(inst_33880__$1);
var inst_33888 = inst_33887;
var inst_33889 = null;
var inst_33890 = (0);
var inst_33891 = (0);
var state_33948__$1 = (function (){var statearr_33991 = state_33948;
(statearr_33991[(20)] = inst_33890);

(statearr_33991[(30)] = inst_33882);

(statearr_33991[(21)] = inst_33888);

(statearr_33991[(29)] = inst_33880__$1);

(statearr_33991[(10)] = inst_33889);

(statearr_33991[(11)] = inst_33891);

return statearr_33991;
})();
var statearr_33992_35303 = state_33948__$1;
(statearr_33992_35303[(2)] = null);

(statearr_33992_35303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (28))){
var inst_33888 = (state_33948[(21)]);
var inst_33907 = (state_33948[(25)]);
var inst_33907__$1 = cljs.core.seq(inst_33888);
var state_33948__$1 = (function (){var statearr_33993 = state_33948;
(statearr_33993[(25)] = inst_33907__$1);

return statearr_33993;
})();
if(inst_33907__$1){
var statearr_33994_35304 = state_33948__$1;
(statearr_33994_35304[(1)] = (33));

} else {
var statearr_33995_35305 = state_33948__$1;
(statearr_33995_35305[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (25))){
var inst_33890 = (state_33948[(20)]);
var inst_33891 = (state_33948[(11)]);
var inst_33893 = (inst_33891 < inst_33890);
var inst_33894 = inst_33893;
var state_33948__$1 = state_33948;
if(cljs.core.truth_(inst_33894)){
var statearr_33996_35306 = state_33948__$1;
(statearr_33996_35306[(1)] = (27));

} else {
var statearr_33997_35307 = state_33948__$1;
(statearr_33997_35307[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (34))){
var state_33948__$1 = state_33948;
var statearr_33998_35309 = state_33948__$1;
(statearr_33998_35309[(2)] = null);

(statearr_33998_35309[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (17))){
var state_33948__$1 = state_33948;
var statearr_33999_35310 = state_33948__$1;
(statearr_33999_35310[(2)] = null);

(statearr_33999_35310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (3))){
var inst_33946 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33948__$1,inst_33946);
} else {
if((state_val_33949 === (12))){
var inst_33875 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_34000_35314 = state_33948__$1;
(statearr_34000_35314[(2)] = inst_33875);

(statearr_34000_35314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (2))){
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33948__$1,(4),ch);
} else {
if((state_val_33949 === (23))){
var state_33948__$1 = state_33948;
var statearr_34001_35321 = state_33948__$1;
(statearr_34001_35321[(2)] = null);

(statearr_34001_35321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (35))){
var inst_33930 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_34002_35322 = state_33948__$1;
(statearr_34002_35322[(2)] = inst_33930);

(statearr_34002_35322[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (19))){
var inst_33847 = (state_33948[(7)]);
var inst_33851 = cljs.core.chunk_first(inst_33847);
var inst_33852 = cljs.core.chunk_rest(inst_33847);
var inst_33853 = cljs.core.count(inst_33851);
var inst_33825 = inst_33852;
var inst_33826 = inst_33851;
var inst_33827 = inst_33853;
var inst_33828 = (0);
var state_33948__$1 = (function (){var statearr_34003 = state_33948;
(statearr_34003[(13)] = inst_33826);

(statearr_34003[(14)] = inst_33827);

(statearr_34003[(16)] = inst_33828);

(statearr_34003[(17)] = inst_33825);

return statearr_34003;
})();
var statearr_34004_35327 = state_33948__$1;
(statearr_34004_35327[(2)] = null);

(statearr_34004_35327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (11))){
var inst_33847 = (state_33948[(7)]);
var inst_33825 = (state_33948[(17)]);
var inst_33847__$1 = cljs.core.seq(inst_33825);
var state_33948__$1 = (function (){var statearr_34005 = state_33948;
(statearr_34005[(7)] = inst_33847__$1);

return statearr_34005;
})();
if(inst_33847__$1){
var statearr_34006_35331 = state_33948__$1;
(statearr_34006_35331[(1)] = (16));

} else {
var statearr_34007_35336 = state_33948__$1;
(statearr_34007_35336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (9))){
var inst_33877 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_34008_35337 = state_33948__$1;
(statearr_34008_35337[(2)] = inst_33877);

(statearr_34008_35337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (5))){
var inst_33823 = cljs.core.deref(cs);
var inst_33824 = cljs.core.seq(inst_33823);
var inst_33825 = inst_33824;
var inst_33826 = null;
var inst_33827 = (0);
var inst_33828 = (0);
var state_33948__$1 = (function (){var statearr_34009 = state_33948;
(statearr_34009[(13)] = inst_33826);

(statearr_34009[(14)] = inst_33827);

(statearr_34009[(16)] = inst_33828);

(statearr_34009[(17)] = inst_33825);

return statearr_34009;
})();
var statearr_34010_35344 = state_33948__$1;
(statearr_34010_35344[(2)] = null);

(statearr_34010_35344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (14))){
var state_33948__$1 = state_33948;
var statearr_34011_35345 = state_33948__$1;
(statearr_34011_35345[(2)] = null);

(statearr_34011_35345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (45))){
var inst_33938 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_34012_35346 = state_33948__$1;
(statearr_34012_35346[(2)] = inst_33938);

(statearr_34012_35346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (26))){
var inst_33880 = (state_33948[(29)]);
var inst_33934 = (state_33948[(2)]);
var inst_33935 = cljs.core.seq(inst_33880);
var state_33948__$1 = (function (){var statearr_34013 = state_33948;
(statearr_34013[(31)] = inst_33934);

return statearr_34013;
})();
if(inst_33935){
var statearr_34014_35347 = state_33948__$1;
(statearr_34014_35347[(1)] = (42));

} else {
var statearr_34015_35348 = state_33948__$1;
(statearr_34015_35348[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (16))){
var inst_33847 = (state_33948[(7)]);
var inst_33849 = cljs.core.chunked_seq_QMARK_(inst_33847);
var state_33948__$1 = state_33948;
if(inst_33849){
var statearr_34016_35349 = state_33948__$1;
(statearr_34016_35349[(1)] = (19));

} else {
var statearr_34017_35350 = state_33948__$1;
(statearr_34017_35350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (38))){
var inst_33927 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_34018_35351 = state_33948__$1;
(statearr_34018_35351[(2)] = inst_33927);

(statearr_34018_35351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (30))){
var state_33948__$1 = state_33948;
var statearr_34019_35352 = state_33948__$1;
(statearr_34019_35352[(2)] = null);

(statearr_34019_35352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (10))){
var inst_33826 = (state_33948[(13)]);
var inst_33828 = (state_33948[(16)]);
var inst_33836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33826,inst_33828);
var inst_33837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33836,(0),null);
var inst_33838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33836,(1),null);
var state_33948__$1 = (function (){var statearr_34020 = state_33948;
(statearr_34020[(26)] = inst_33837);

return statearr_34020;
})();
if(cljs.core.truth_(inst_33838)){
var statearr_34021_35359 = state_33948__$1;
(statearr_34021_35359[(1)] = (13));

} else {
var statearr_34022_35360 = state_33948__$1;
(statearr_34022_35360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (18))){
var inst_33873 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_34023_35361 = state_33948__$1;
(statearr_34023_35361[(2)] = inst_33873);

(statearr_34023_35361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (42))){
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33948__$1,(45),dchan);
} else {
if((state_val_33949 === (37))){
var inst_33816 = (state_33948[(9)]);
var inst_33907 = (state_33948[(25)]);
var inst_33916 = (state_33948[(23)]);
var inst_33916__$1 = cljs.core.first(inst_33907);
var inst_33917 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33916__$1,inst_33816,done);
var state_33948__$1 = (function (){var statearr_34024 = state_33948;
(statearr_34024[(23)] = inst_33916__$1);

return statearr_34024;
})();
if(cljs.core.truth_(inst_33917)){
var statearr_34025_35366 = state_33948__$1;
(statearr_34025_35366[(1)] = (39));

} else {
var statearr_34026_35368 = state_33948__$1;
(statearr_34026_35368[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (8))){
var inst_33827 = (state_33948[(14)]);
var inst_33828 = (state_33948[(16)]);
var inst_33830 = (inst_33828 < inst_33827);
var inst_33831 = inst_33830;
var state_33948__$1 = state_33948;
if(cljs.core.truth_(inst_33831)){
var statearr_34027_35370 = state_33948__$1;
(statearr_34027_35370[(1)] = (10));

} else {
var statearr_34028_35371 = state_33948__$1;
(statearr_34028_35371[(1)] = (11));

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
});})(c__33353__auto___35236,cs,m,dchan,dctr,done))
;
return ((function (switch__33252__auto__,c__33353__auto___35236,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33253__auto__ = null;
var cljs$core$async$mult_$_state_machine__33253__auto____0 = (function (){
var statearr_34029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34029[(0)] = cljs$core$async$mult_$_state_machine__33253__auto__);

(statearr_34029[(1)] = (1));

return statearr_34029;
});
var cljs$core$async$mult_$_state_machine__33253__auto____1 = (function (state_33948){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_33948);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34030){if((e34030 instanceof Object)){
var ex__33256__auto__ = e34030;
var statearr_34031_35381 = state_33948;
(statearr_34031_35381[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35383 = state_33948;
state_33948 = G__35383;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33253__auto__ = function(state_33948){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33253__auto____1.call(this,state_33948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33253__auto____0;
cljs$core$async$mult_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33253__auto____1;
return cljs$core$async$mult_$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35236,cs,m,dchan,dctr,done))
})();
var state__33355__auto__ = (function (){var statearr_34032 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34032[(6)] = c__33353__auto___35236);

return statearr_34032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35236,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34034 = arguments.length;
switch (G__34034) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35404 = arguments.length;
var i__4731__auto___35405 = (0);
while(true){
if((i__4731__auto___35405 < len__4730__auto___35404)){
args__4736__auto__.push((arguments[i__4731__auto___35405]));

var G__35406 = (i__4731__auto___35405 + (1));
i__4731__auto___35405 = G__35406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34039){
var map__34040 = p__34039;
var map__34040__$1 = (((((!((map__34040 == null))))?(((((map__34040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34040):map__34040);
var opts = map__34040__$1;
var statearr_34042_35410 = state;
(statearr_34042_35410[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__34040,map__34040__$1,opts){
return (function (val){
var statearr_34043_35412 = state;
(statearr_34043_35412[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34040,map__34040__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34044_35414 = state;
(statearr_34044_35414[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34035){
var G__34036 = cljs.core.first(seq34035);
var seq34035__$1 = cljs.core.next(seq34035);
var G__34037 = cljs.core.first(seq34035__$1);
var seq34035__$2 = cljs.core.next(seq34035__$1);
var G__34038 = cljs.core.first(seq34035__$2);
var seq34035__$3 = cljs.core.next(seq34035__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34036,G__34037,G__34038,seq34035__$3);
});

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34045 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34046){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34046 = meta34046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34047,meta34046__$1){
var self__ = this;
var _34047__$1 = this;
return (new cljs.core.async.t_cljs$core$async34045(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34046__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34047){
var self__ = this;
var _34047__$1 = this;
return self__.meta34046;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34046","meta34046",1152176476,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34045";

cljs.core.async.t_cljs$core$async34045.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34045");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34045.
 */
cljs.core.async.__GT_t_cljs$core$async34045 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34045(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34046){
return (new cljs.core.async.t_cljs$core$async34045(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34046));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34045(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33353__auto___35435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35435,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35435,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34149){
var state_val_34150 = (state_34149[(1)]);
if((state_val_34150 === (7))){
var inst_34064 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34151_35436 = state_34149__$1;
(statearr_34151_35436[(2)] = inst_34064);

(statearr_34151_35436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (20))){
var inst_34076 = (state_34149[(7)]);
var state_34149__$1 = state_34149;
var statearr_34152_35437 = state_34149__$1;
(statearr_34152_35437[(2)] = inst_34076);

(statearr_34152_35437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (27))){
var state_34149__$1 = state_34149;
var statearr_34153_35438 = state_34149__$1;
(statearr_34153_35438[(2)] = null);

(statearr_34153_35438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (1))){
var inst_34051 = (state_34149[(8)]);
var inst_34051__$1 = calc_state();
var inst_34053 = (inst_34051__$1 == null);
var inst_34054 = cljs.core.not(inst_34053);
var state_34149__$1 = (function (){var statearr_34154 = state_34149;
(statearr_34154[(8)] = inst_34051__$1);

return statearr_34154;
})();
if(inst_34054){
var statearr_34155_35441 = state_34149__$1;
(statearr_34155_35441[(1)] = (2));

} else {
var statearr_34156_35442 = state_34149__$1;
(statearr_34156_35442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (24))){
var inst_34109 = (state_34149[(9)]);
var inst_34123 = (state_34149[(10)]);
var inst_34100 = (state_34149[(11)]);
var inst_34123__$1 = (inst_34100.cljs$core$IFn$_invoke$arity$1 ? inst_34100.cljs$core$IFn$_invoke$arity$1(inst_34109) : inst_34100.call(null,inst_34109));
var state_34149__$1 = (function (){var statearr_34157 = state_34149;
(statearr_34157[(10)] = inst_34123__$1);

return statearr_34157;
})();
if(cljs.core.truth_(inst_34123__$1)){
var statearr_34158_35444 = state_34149__$1;
(statearr_34158_35444[(1)] = (29));

} else {
var statearr_34159_35445 = state_34149__$1;
(statearr_34159_35445[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (4))){
var inst_34067 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34067)){
var statearr_34160_35447 = state_34149__$1;
(statearr_34160_35447[(1)] = (8));

} else {
var statearr_34161_35448 = state_34149__$1;
(statearr_34161_35448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (15))){
var inst_34094 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34094)){
var statearr_34162_35449 = state_34149__$1;
(statearr_34162_35449[(1)] = (19));

} else {
var statearr_34163_35450 = state_34149__$1;
(statearr_34163_35450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (21))){
var inst_34099 = (state_34149[(12)]);
var inst_34099__$1 = (state_34149[(2)]);
var inst_34100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34099__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34099__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34099__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34149__$1 = (function (){var statearr_34164 = state_34149;
(statearr_34164[(13)] = inst_34101);

(statearr_34164[(11)] = inst_34100);

(statearr_34164[(12)] = inst_34099__$1);

return statearr_34164;
})();
return cljs.core.async.ioc_alts_BANG_(state_34149__$1,(22),inst_34102);
} else {
if((state_val_34150 === (31))){
var inst_34131 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34131)){
var statearr_34165_35451 = state_34149__$1;
(statearr_34165_35451[(1)] = (32));

} else {
var statearr_34166_35452 = state_34149__$1;
(statearr_34166_35452[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (32))){
var inst_34108 = (state_34149[(14)]);
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34149__$1,(35),out,inst_34108);
} else {
if((state_val_34150 === (33))){
var inst_34099 = (state_34149[(12)]);
var inst_34076 = inst_34099;
var state_34149__$1 = (function (){var statearr_34167 = state_34149;
(statearr_34167[(7)] = inst_34076);

return statearr_34167;
})();
var statearr_34168_35455 = state_34149__$1;
(statearr_34168_35455[(2)] = null);

(statearr_34168_35455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (13))){
var inst_34076 = (state_34149[(7)]);
var inst_34083 = inst_34076.cljs$lang$protocol_mask$partition0$;
var inst_34084 = (inst_34083 & (64));
var inst_34085 = inst_34076.cljs$core$ISeq$;
var inst_34086 = (cljs.core.PROTOCOL_SENTINEL === inst_34085);
var inst_34087 = ((inst_34084) || (inst_34086));
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34087)){
var statearr_34169_35460 = state_34149__$1;
(statearr_34169_35460[(1)] = (16));

} else {
var statearr_34170_35461 = state_34149__$1;
(statearr_34170_35461[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (22))){
var inst_34109 = (state_34149[(9)]);
var inst_34108 = (state_34149[(14)]);
var inst_34107 = (state_34149[(2)]);
var inst_34108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34107,(0),null);
var inst_34109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34107,(1),null);
var inst_34110 = (inst_34108__$1 == null);
var inst_34111 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34109__$1,change);
var inst_34112 = ((inst_34110) || (inst_34111));
var state_34149__$1 = (function (){var statearr_34171 = state_34149;
(statearr_34171[(9)] = inst_34109__$1);

(statearr_34171[(14)] = inst_34108__$1);

return statearr_34171;
})();
if(cljs.core.truth_(inst_34112)){
var statearr_34172_35462 = state_34149__$1;
(statearr_34172_35462[(1)] = (23));

} else {
var statearr_34173_35463 = state_34149__$1;
(statearr_34173_35463[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (36))){
var inst_34099 = (state_34149[(12)]);
var inst_34076 = inst_34099;
var state_34149__$1 = (function (){var statearr_34174 = state_34149;
(statearr_34174[(7)] = inst_34076);

return statearr_34174;
})();
var statearr_34175_35464 = state_34149__$1;
(statearr_34175_35464[(2)] = null);

(statearr_34175_35464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (29))){
var inst_34123 = (state_34149[(10)]);
var state_34149__$1 = state_34149;
var statearr_34176_35465 = state_34149__$1;
(statearr_34176_35465[(2)] = inst_34123);

(statearr_34176_35465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (6))){
var state_34149__$1 = state_34149;
var statearr_34177_35466 = state_34149__$1;
(statearr_34177_35466[(2)] = false);

(statearr_34177_35466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (28))){
var inst_34119 = (state_34149[(2)]);
var inst_34120 = calc_state();
var inst_34076 = inst_34120;
var state_34149__$1 = (function (){var statearr_34178 = state_34149;
(statearr_34178[(7)] = inst_34076);

(statearr_34178[(15)] = inst_34119);

return statearr_34178;
})();
var statearr_34179_35474 = state_34149__$1;
(statearr_34179_35474[(2)] = null);

(statearr_34179_35474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (25))){
var inst_34145 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34180_35475 = state_34149__$1;
(statearr_34180_35475[(2)] = inst_34145);

(statearr_34180_35475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (34))){
var inst_34143 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34181_35479 = state_34149__$1;
(statearr_34181_35479[(2)] = inst_34143);

(statearr_34181_35479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (17))){
var state_34149__$1 = state_34149;
var statearr_34182_35480 = state_34149__$1;
(statearr_34182_35480[(2)] = false);

(statearr_34182_35480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (3))){
var state_34149__$1 = state_34149;
var statearr_34183_35484 = state_34149__$1;
(statearr_34183_35484[(2)] = false);

(statearr_34183_35484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (12))){
var inst_34147 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34149__$1,inst_34147);
} else {
if((state_val_34150 === (2))){
var inst_34051 = (state_34149[(8)]);
var inst_34056 = inst_34051.cljs$lang$protocol_mask$partition0$;
var inst_34057 = (inst_34056 & (64));
var inst_34058 = inst_34051.cljs$core$ISeq$;
var inst_34059 = (cljs.core.PROTOCOL_SENTINEL === inst_34058);
var inst_34060 = ((inst_34057) || (inst_34059));
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34060)){
var statearr_34184_35485 = state_34149__$1;
(statearr_34184_35485[(1)] = (5));

} else {
var statearr_34185_35489 = state_34149__$1;
(statearr_34185_35489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (23))){
var inst_34108 = (state_34149[(14)]);
var inst_34114 = (inst_34108 == null);
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34114)){
var statearr_34186_35490 = state_34149__$1;
(statearr_34186_35490[(1)] = (26));

} else {
var statearr_34187_35491 = state_34149__$1;
(statearr_34187_35491[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (35))){
var inst_34134 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34134)){
var statearr_34188_35493 = state_34149__$1;
(statearr_34188_35493[(1)] = (36));

} else {
var statearr_34189_35497 = state_34149__$1;
(statearr_34189_35497[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (19))){
var inst_34076 = (state_34149[(7)]);
var inst_34096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34076);
var state_34149__$1 = state_34149;
var statearr_34190_35498 = state_34149__$1;
(statearr_34190_35498[(2)] = inst_34096);

(statearr_34190_35498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (11))){
var inst_34076 = (state_34149[(7)]);
var inst_34080 = (inst_34076 == null);
var inst_34081 = cljs.core.not(inst_34080);
var state_34149__$1 = state_34149;
if(inst_34081){
var statearr_34191_35499 = state_34149__$1;
(statearr_34191_35499[(1)] = (13));

} else {
var statearr_34192_35500 = state_34149__$1;
(statearr_34192_35500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (9))){
var inst_34051 = (state_34149[(8)]);
var state_34149__$1 = state_34149;
var statearr_34193_35501 = state_34149__$1;
(statearr_34193_35501[(2)] = inst_34051);

(statearr_34193_35501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (5))){
var state_34149__$1 = state_34149;
var statearr_34194_35502 = state_34149__$1;
(statearr_34194_35502[(2)] = true);

(statearr_34194_35502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (14))){
var state_34149__$1 = state_34149;
var statearr_34195_35503 = state_34149__$1;
(statearr_34195_35503[(2)] = false);

(statearr_34195_35503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (26))){
var inst_34109 = (state_34149[(9)]);
var inst_34116 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34109);
var state_34149__$1 = state_34149;
var statearr_34196_35504 = state_34149__$1;
(statearr_34196_35504[(2)] = inst_34116);

(statearr_34196_35504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (16))){
var state_34149__$1 = state_34149;
var statearr_34197_35507 = state_34149__$1;
(statearr_34197_35507[(2)] = true);

(statearr_34197_35507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (38))){
var inst_34139 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34198_35508 = state_34149__$1;
(statearr_34198_35508[(2)] = inst_34139);

(statearr_34198_35508[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (30))){
var inst_34101 = (state_34149[(13)]);
var inst_34109 = (state_34149[(9)]);
var inst_34100 = (state_34149[(11)]);
var inst_34126 = cljs.core.empty_QMARK_(inst_34100);
var inst_34127 = (inst_34101.cljs$core$IFn$_invoke$arity$1 ? inst_34101.cljs$core$IFn$_invoke$arity$1(inst_34109) : inst_34101.call(null,inst_34109));
var inst_34128 = cljs.core.not(inst_34127);
var inst_34129 = ((inst_34126) && (inst_34128));
var state_34149__$1 = state_34149;
var statearr_34199_35511 = state_34149__$1;
(statearr_34199_35511[(2)] = inst_34129);

(statearr_34199_35511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (10))){
var inst_34051 = (state_34149[(8)]);
var inst_34072 = (state_34149[(2)]);
var inst_34073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34072,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34072,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34072,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34076 = inst_34051;
var state_34149__$1 = (function (){var statearr_34200 = state_34149;
(statearr_34200[(7)] = inst_34076);

(statearr_34200[(16)] = inst_34075);

(statearr_34200[(17)] = inst_34074);

(statearr_34200[(18)] = inst_34073);

return statearr_34200;
})();
var statearr_34201_35514 = state_34149__$1;
(statearr_34201_35514[(2)] = null);

(statearr_34201_35514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (18))){
var inst_34091 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34202_35515 = state_34149__$1;
(statearr_34202_35515[(2)] = inst_34091);

(statearr_34202_35515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (37))){
var state_34149__$1 = state_34149;
var statearr_34203_35519 = state_34149__$1;
(statearr_34203_35519[(2)] = null);

(statearr_34203_35519[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (8))){
var inst_34051 = (state_34149[(8)]);
var inst_34069 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34051);
var state_34149__$1 = state_34149;
var statearr_34204_35520 = state_34149__$1;
(statearr_34204_35520[(2)] = inst_34069);

(statearr_34204_35520[(1)] = (10));


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
});})(c__33353__auto___35435,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33252__auto__,c__33353__auto___35435,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33253__auto__ = null;
var cljs$core$async$mix_$_state_machine__33253__auto____0 = (function (){
var statearr_34205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34205[(0)] = cljs$core$async$mix_$_state_machine__33253__auto__);

(statearr_34205[(1)] = (1));

return statearr_34205;
});
var cljs$core$async$mix_$_state_machine__33253__auto____1 = (function (state_34149){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34149);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34206){if((e34206 instanceof Object)){
var ex__33256__auto__ = e34206;
var statearr_34207_35524 = state_34149;
(statearr_34207_35524[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35525 = state_34149;
state_34149 = G__35525;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33253__auto__ = function(state_34149){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33253__auto____1.call(this,state_34149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33253__auto____0;
cljs$core$async$mix_$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33253__auto____1;
return cljs$core$async$mix_$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35435,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33355__auto__ = (function (){var statearr_34208 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34208[(6)] = c__33353__auto___35435);

return statearr_34208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35435,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34210 = arguments.length;
switch (G__34210) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__34213 = arguments.length;
switch (G__34213) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34211_SHARP_){
if(cljs.core.truth_((p1__34211_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34211_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34211_SHARP_.call(null,topic)))){
return p1__34211_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34211_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34214 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34215){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34215 = meta34215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34216,meta34215__$1){
var self__ = this;
var _34216__$1 = this;
return (new cljs.core.async.t_cljs$core$async34214(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34215__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34216){
var self__ = this;
var _34216__$1 = this;
return self__.meta34215;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34215","meta34215",434328583,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34214";

cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34214");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34214.
 */
cljs.core.async.__GT_t_cljs$core$async34214 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34215){
return (new cljs.core.async.t_cljs$core$async34214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34215));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34214(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33353__auto___35542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35542,mults,ensure_mult,p){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35542,mults,ensure_mult,p){
return (function (state_34288){
var state_val_34289 = (state_34288[(1)]);
if((state_val_34289 === (7))){
var inst_34284 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34290_35543 = state_34288__$1;
(statearr_34290_35543[(2)] = inst_34284);

(statearr_34290_35543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (20))){
var state_34288__$1 = state_34288;
var statearr_34291_35544 = state_34288__$1;
(statearr_34291_35544[(2)] = null);

(statearr_34291_35544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (1))){
var state_34288__$1 = state_34288;
var statearr_34292_35546 = state_34288__$1;
(statearr_34292_35546[(2)] = null);

(statearr_34292_35546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (24))){
var inst_34267 = (state_34288[(7)]);
var inst_34276 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34267);
var state_34288__$1 = state_34288;
var statearr_34293_35547 = state_34288__$1;
(statearr_34293_35547[(2)] = inst_34276);

(statearr_34293_35547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (4))){
var inst_34219 = (state_34288[(8)]);
var inst_34219__$1 = (state_34288[(2)]);
var inst_34220 = (inst_34219__$1 == null);
var state_34288__$1 = (function (){var statearr_34294 = state_34288;
(statearr_34294[(8)] = inst_34219__$1);

return statearr_34294;
})();
if(cljs.core.truth_(inst_34220)){
var statearr_34295_35548 = state_34288__$1;
(statearr_34295_35548[(1)] = (5));

} else {
var statearr_34296_35549 = state_34288__$1;
(statearr_34296_35549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (15))){
var inst_34261 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34297_35550 = state_34288__$1;
(statearr_34297_35550[(2)] = inst_34261);

(statearr_34297_35550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (21))){
var inst_34281 = (state_34288[(2)]);
var state_34288__$1 = (function (){var statearr_34298 = state_34288;
(statearr_34298[(9)] = inst_34281);

return statearr_34298;
})();
var statearr_34299_35551 = state_34288__$1;
(statearr_34299_35551[(2)] = null);

(statearr_34299_35551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (13))){
var inst_34243 = (state_34288[(10)]);
var inst_34245 = cljs.core.chunked_seq_QMARK_(inst_34243);
var state_34288__$1 = state_34288;
if(inst_34245){
var statearr_34300_35552 = state_34288__$1;
(statearr_34300_35552[(1)] = (16));

} else {
var statearr_34301_35553 = state_34288__$1;
(statearr_34301_35553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (22))){
var inst_34273 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
if(cljs.core.truth_(inst_34273)){
var statearr_34302_35557 = state_34288__$1;
(statearr_34302_35557[(1)] = (23));

} else {
var statearr_34303_35560 = state_34288__$1;
(statearr_34303_35560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (6))){
var inst_34269 = (state_34288[(11)]);
var inst_34267 = (state_34288[(7)]);
var inst_34219 = (state_34288[(8)]);
var inst_34267__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34219) : topic_fn.call(null,inst_34219));
var inst_34268 = cljs.core.deref(mults);
var inst_34269__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34268,inst_34267__$1);
var state_34288__$1 = (function (){var statearr_34304 = state_34288;
(statearr_34304[(11)] = inst_34269__$1);

(statearr_34304[(7)] = inst_34267__$1);

return statearr_34304;
})();
if(cljs.core.truth_(inst_34269__$1)){
var statearr_34305_35563 = state_34288__$1;
(statearr_34305_35563[(1)] = (19));

} else {
var statearr_34306_35564 = state_34288__$1;
(statearr_34306_35564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (25))){
var inst_34278 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34307_35565 = state_34288__$1;
(statearr_34307_35565[(2)] = inst_34278);

(statearr_34307_35565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (17))){
var inst_34243 = (state_34288[(10)]);
var inst_34252 = cljs.core.first(inst_34243);
var inst_34253 = cljs.core.async.muxch_STAR_(inst_34252);
var inst_34254 = cljs.core.async.close_BANG_(inst_34253);
var inst_34255 = cljs.core.next(inst_34243);
var inst_34229 = inst_34255;
var inst_34230 = null;
var inst_34231 = (0);
var inst_34232 = (0);
var state_34288__$1 = (function (){var statearr_34308 = state_34288;
(statearr_34308[(12)] = inst_34254);

(statearr_34308[(13)] = inst_34229);

(statearr_34308[(14)] = inst_34232);

(statearr_34308[(15)] = inst_34230);

(statearr_34308[(16)] = inst_34231);

return statearr_34308;
})();
var statearr_34309_35566 = state_34288__$1;
(statearr_34309_35566[(2)] = null);

(statearr_34309_35566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (3))){
var inst_34286 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34288__$1,inst_34286);
} else {
if((state_val_34289 === (12))){
var inst_34263 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34310_35567 = state_34288__$1;
(statearr_34310_35567[(2)] = inst_34263);

(statearr_34310_35567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (2))){
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34288__$1,(4),ch);
} else {
if((state_val_34289 === (23))){
var state_34288__$1 = state_34288;
var statearr_34311_35568 = state_34288__$1;
(statearr_34311_35568[(2)] = null);

(statearr_34311_35568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (19))){
var inst_34269 = (state_34288[(11)]);
var inst_34219 = (state_34288[(8)]);
var inst_34271 = cljs.core.async.muxch_STAR_(inst_34269);
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34288__$1,(22),inst_34271,inst_34219);
} else {
if((state_val_34289 === (11))){
var inst_34229 = (state_34288[(13)]);
var inst_34243 = (state_34288[(10)]);
var inst_34243__$1 = cljs.core.seq(inst_34229);
var state_34288__$1 = (function (){var statearr_34312 = state_34288;
(statearr_34312[(10)] = inst_34243__$1);

return statearr_34312;
})();
if(inst_34243__$1){
var statearr_34313_35572 = state_34288__$1;
(statearr_34313_35572[(1)] = (13));

} else {
var statearr_34314_35573 = state_34288__$1;
(statearr_34314_35573[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (9))){
var inst_34265 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34315_35574 = state_34288__$1;
(statearr_34315_35574[(2)] = inst_34265);

(statearr_34315_35574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (5))){
var inst_34226 = cljs.core.deref(mults);
var inst_34227 = cljs.core.vals(inst_34226);
var inst_34228 = cljs.core.seq(inst_34227);
var inst_34229 = inst_34228;
var inst_34230 = null;
var inst_34231 = (0);
var inst_34232 = (0);
var state_34288__$1 = (function (){var statearr_34316 = state_34288;
(statearr_34316[(13)] = inst_34229);

(statearr_34316[(14)] = inst_34232);

(statearr_34316[(15)] = inst_34230);

(statearr_34316[(16)] = inst_34231);

return statearr_34316;
})();
var statearr_34317_35576 = state_34288__$1;
(statearr_34317_35576[(2)] = null);

(statearr_34317_35576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (14))){
var state_34288__$1 = state_34288;
var statearr_34321_35578 = state_34288__$1;
(statearr_34321_35578[(2)] = null);

(statearr_34321_35578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (16))){
var inst_34243 = (state_34288[(10)]);
var inst_34247 = cljs.core.chunk_first(inst_34243);
var inst_34248 = cljs.core.chunk_rest(inst_34243);
var inst_34249 = cljs.core.count(inst_34247);
var inst_34229 = inst_34248;
var inst_34230 = inst_34247;
var inst_34231 = inst_34249;
var inst_34232 = (0);
var state_34288__$1 = (function (){var statearr_34322 = state_34288;
(statearr_34322[(13)] = inst_34229);

(statearr_34322[(14)] = inst_34232);

(statearr_34322[(15)] = inst_34230);

(statearr_34322[(16)] = inst_34231);

return statearr_34322;
})();
var statearr_34323_35580 = state_34288__$1;
(statearr_34323_35580[(2)] = null);

(statearr_34323_35580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (10))){
var inst_34229 = (state_34288[(13)]);
var inst_34232 = (state_34288[(14)]);
var inst_34230 = (state_34288[(15)]);
var inst_34231 = (state_34288[(16)]);
var inst_34237 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34230,inst_34232);
var inst_34238 = cljs.core.async.muxch_STAR_(inst_34237);
var inst_34239 = cljs.core.async.close_BANG_(inst_34238);
var inst_34240 = (inst_34232 + (1));
var tmp34318 = inst_34229;
var tmp34319 = inst_34230;
var tmp34320 = inst_34231;
var inst_34229__$1 = tmp34318;
var inst_34230__$1 = tmp34319;
var inst_34231__$1 = tmp34320;
var inst_34232__$1 = inst_34240;
var state_34288__$1 = (function (){var statearr_34324 = state_34288;
(statearr_34324[(13)] = inst_34229__$1);

(statearr_34324[(14)] = inst_34232__$1);

(statearr_34324[(15)] = inst_34230__$1);

(statearr_34324[(17)] = inst_34239);

(statearr_34324[(16)] = inst_34231__$1);

return statearr_34324;
})();
var statearr_34325_35587 = state_34288__$1;
(statearr_34325_35587[(2)] = null);

(statearr_34325_35587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (18))){
var inst_34258 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34326_35588 = state_34288__$1;
(statearr_34326_35588[(2)] = inst_34258);

(statearr_34326_35588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (8))){
var inst_34232 = (state_34288[(14)]);
var inst_34231 = (state_34288[(16)]);
var inst_34234 = (inst_34232 < inst_34231);
var inst_34235 = inst_34234;
var state_34288__$1 = state_34288;
if(cljs.core.truth_(inst_34235)){
var statearr_34327_35589 = state_34288__$1;
(statearr_34327_35589[(1)] = (10));

} else {
var statearr_34328_35590 = state_34288__$1;
(statearr_34328_35590[(1)] = (11));

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
});})(c__33353__auto___35542,mults,ensure_mult,p))
;
return ((function (switch__33252__auto__,c__33353__auto___35542,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34329[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34329[(1)] = (1));

return statearr_34329;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34288){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34288);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34330){if((e34330 instanceof Object)){
var ex__33256__auto__ = e34330;
var statearr_34331_35592 = state_34288;
(statearr_34331_35592[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35593 = state_34288;
state_34288 = G__35593;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35542,mults,ensure_mult,p))
})();
var state__33355__auto__ = (function (){var statearr_34332 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34332[(6)] = c__33353__auto___35542);

return statearr_34332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35542,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34334 = arguments.length;
switch (G__34334) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__34336 = arguments.length;
switch (G__34336) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__34338 = arguments.length;
switch (G__34338) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33353__auto___35602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34377){
var state_val_34378 = (state_34377[(1)]);
if((state_val_34378 === (7))){
var state_34377__$1 = state_34377;
var statearr_34379_35603 = state_34377__$1;
(statearr_34379_35603[(2)] = null);

(statearr_34379_35603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (1))){
var state_34377__$1 = state_34377;
var statearr_34380_35604 = state_34377__$1;
(statearr_34380_35604[(2)] = null);

(statearr_34380_35604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (4))){
var inst_34341 = (state_34377[(7)]);
var inst_34343 = (inst_34341 < cnt);
var state_34377__$1 = state_34377;
if(cljs.core.truth_(inst_34343)){
var statearr_34381_35605 = state_34377__$1;
(statearr_34381_35605[(1)] = (6));

} else {
var statearr_34382_35606 = state_34377__$1;
(statearr_34382_35606[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (15))){
var inst_34373 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34383_35607 = state_34377__$1;
(statearr_34383_35607[(2)] = inst_34373);

(statearr_34383_35607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (13))){
var inst_34366 = cljs.core.async.close_BANG_(out);
var state_34377__$1 = state_34377;
var statearr_34384_35611 = state_34377__$1;
(statearr_34384_35611[(2)] = inst_34366);

(statearr_34384_35611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (6))){
var state_34377__$1 = state_34377;
var statearr_34385_35614 = state_34377__$1;
(statearr_34385_35614[(2)] = null);

(statearr_34385_35614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (3))){
var inst_34375 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34377__$1,inst_34375);
} else {
if((state_val_34378 === (12))){
var inst_34363 = (state_34377[(8)]);
var inst_34363__$1 = (state_34377[(2)]);
var inst_34364 = cljs.core.some(cljs.core.nil_QMARK_,inst_34363__$1);
var state_34377__$1 = (function (){var statearr_34386 = state_34377;
(statearr_34386[(8)] = inst_34363__$1);

return statearr_34386;
})();
if(cljs.core.truth_(inst_34364)){
var statearr_34387_35617 = state_34377__$1;
(statearr_34387_35617[(1)] = (13));

} else {
var statearr_34388_35618 = state_34377__$1;
(statearr_34388_35618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (2))){
var inst_34340 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34341 = (0);
var state_34377__$1 = (function (){var statearr_34389 = state_34377;
(statearr_34389[(7)] = inst_34341);

(statearr_34389[(9)] = inst_34340);

return statearr_34389;
})();
var statearr_34390_35619 = state_34377__$1;
(statearr_34390_35619[(2)] = null);

(statearr_34390_35619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (11))){
var inst_34341 = (state_34377[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34377,(10),Object,null,(9));
var inst_34350 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34341) : chs__$1.call(null,inst_34341));
var inst_34351 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34341) : done.call(null,inst_34341));
var inst_34352 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34350,inst_34351);
var state_34377__$1 = state_34377;
var statearr_34391_35620 = state_34377__$1;
(statearr_34391_35620[(2)] = inst_34352);


cljs.core.async.impl.ioc_helpers.process_exception(state_34377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (9))){
var inst_34341 = (state_34377[(7)]);
var inst_34354 = (state_34377[(2)]);
var inst_34355 = (inst_34341 + (1));
var inst_34341__$1 = inst_34355;
var state_34377__$1 = (function (){var statearr_34392 = state_34377;
(statearr_34392[(7)] = inst_34341__$1);

(statearr_34392[(10)] = inst_34354);

return statearr_34392;
})();
var statearr_34393_35621 = state_34377__$1;
(statearr_34393_35621[(2)] = null);

(statearr_34393_35621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (5))){
var inst_34361 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34394 = state_34377;
(statearr_34394[(11)] = inst_34361);

return statearr_34394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34377__$1,(12),dchan);
} else {
if((state_val_34378 === (14))){
var inst_34363 = (state_34377[(8)]);
var inst_34368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34363);
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34377__$1,(16),out,inst_34368);
} else {
if((state_val_34378 === (16))){
var inst_34370 = (state_34377[(2)]);
var state_34377__$1 = (function (){var statearr_34395 = state_34377;
(statearr_34395[(12)] = inst_34370);

return statearr_34395;
})();
var statearr_34396_35622 = state_34377__$1;
(statearr_34396_35622[(2)] = null);

(statearr_34396_35622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (10))){
var inst_34345 = (state_34377[(2)]);
var inst_34346 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34377__$1 = (function (){var statearr_34397 = state_34377;
(statearr_34397[(13)] = inst_34345);

return statearr_34397;
})();
var statearr_34398_35624 = state_34377__$1;
(statearr_34398_35624[(2)] = inst_34346);


cljs.core.async.impl.ioc_helpers.process_exception(state_34377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34378 === (8))){
var inst_34359 = (state_34377[(2)]);
var state_34377__$1 = state_34377;
var statearr_34399_35625 = state_34377__$1;
(statearr_34399_35625[(2)] = inst_34359);

(statearr_34399_35625[(1)] = (5));


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
});})(c__33353__auto___35602,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33252__auto__,c__33353__auto___35602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34400[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34400[(1)] = (1));

return statearr_34400;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34377){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34377);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34401){if((e34401 instanceof Object)){
var ex__33256__auto__ = e34401;
var statearr_34402_35626 = state_34377;
(statearr_34402_35626[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35628 = state_34377;
state_34377 = G__35628;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35602,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33355__auto__ = (function (){var statearr_34403 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34403[(6)] = c__33353__auto___35602);

return statearr_34403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35602,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34406 = arguments.length;
switch (G__34406) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33353__auto___35630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35630,out){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35630,out){
return (function (state_34438){
var state_val_34439 = (state_34438[(1)]);
if((state_val_34439 === (7))){
var inst_34417 = (state_34438[(7)]);
var inst_34418 = (state_34438[(8)]);
var inst_34417__$1 = (state_34438[(2)]);
var inst_34418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34417__$1,(0),null);
var inst_34419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34417__$1,(1),null);
var inst_34420 = (inst_34418__$1 == null);
var state_34438__$1 = (function (){var statearr_34440 = state_34438;
(statearr_34440[(7)] = inst_34417__$1);

(statearr_34440[(8)] = inst_34418__$1);

(statearr_34440[(9)] = inst_34419);

return statearr_34440;
})();
if(cljs.core.truth_(inst_34420)){
var statearr_34441_35631 = state_34438__$1;
(statearr_34441_35631[(1)] = (8));

} else {
var statearr_34442_35632 = state_34438__$1;
(statearr_34442_35632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34439 === (1))){
var inst_34407 = cljs.core.vec(chs);
var inst_34408 = inst_34407;
var state_34438__$1 = (function (){var statearr_34443 = state_34438;
(statearr_34443[(10)] = inst_34408);

return statearr_34443;
})();
var statearr_34444_35633 = state_34438__$1;
(statearr_34444_35633[(2)] = null);

(statearr_34444_35633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34439 === (4))){
var inst_34408 = (state_34438[(10)]);
var state_34438__$1 = state_34438;
return cljs.core.async.ioc_alts_BANG_(state_34438__$1,(7),inst_34408);
} else {
if((state_val_34439 === (6))){
var inst_34434 = (state_34438[(2)]);
var state_34438__$1 = state_34438;
var statearr_34445_35634 = state_34438__$1;
(statearr_34445_35634[(2)] = inst_34434);

(statearr_34445_35634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34439 === (3))){
var inst_34436 = (state_34438[(2)]);
var state_34438__$1 = state_34438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34438__$1,inst_34436);
} else {
if((state_val_34439 === (2))){
var inst_34408 = (state_34438[(10)]);
var inst_34410 = cljs.core.count(inst_34408);
var inst_34411 = (inst_34410 > (0));
var state_34438__$1 = state_34438;
if(cljs.core.truth_(inst_34411)){
var statearr_34447_35635 = state_34438__$1;
(statearr_34447_35635[(1)] = (4));

} else {
var statearr_34448_35636 = state_34438__$1;
(statearr_34448_35636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34439 === (11))){
var inst_34408 = (state_34438[(10)]);
var inst_34427 = (state_34438[(2)]);
var tmp34446 = inst_34408;
var inst_34408__$1 = tmp34446;
var state_34438__$1 = (function (){var statearr_34449 = state_34438;
(statearr_34449[(10)] = inst_34408__$1);

(statearr_34449[(11)] = inst_34427);

return statearr_34449;
})();
var statearr_34450_35637 = state_34438__$1;
(statearr_34450_35637[(2)] = null);

(statearr_34450_35637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34439 === (9))){
var inst_34418 = (state_34438[(8)]);
var state_34438__$1 = state_34438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34438__$1,(11),out,inst_34418);
} else {
if((state_val_34439 === (5))){
var inst_34432 = cljs.core.async.close_BANG_(out);
var state_34438__$1 = state_34438;
var statearr_34451_35638 = state_34438__$1;
(statearr_34451_35638[(2)] = inst_34432);

(statearr_34451_35638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34439 === (10))){
var inst_34430 = (state_34438[(2)]);
var state_34438__$1 = state_34438;
var statearr_34452_35639 = state_34438__$1;
(statearr_34452_35639[(2)] = inst_34430);

(statearr_34452_35639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34439 === (8))){
var inst_34408 = (state_34438[(10)]);
var inst_34417 = (state_34438[(7)]);
var inst_34418 = (state_34438[(8)]);
var inst_34419 = (state_34438[(9)]);
var inst_34422 = (function (){var cs = inst_34408;
var vec__34413 = inst_34417;
var v = inst_34418;
var c = inst_34419;
return ((function (cs,vec__34413,v,c,inst_34408,inst_34417,inst_34418,inst_34419,state_val_34439,c__33353__auto___35630,out){
return (function (p1__34404_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34404_SHARP_);
});
;})(cs,vec__34413,v,c,inst_34408,inst_34417,inst_34418,inst_34419,state_val_34439,c__33353__auto___35630,out))
})();
var inst_34423 = cljs.core.filterv(inst_34422,inst_34408);
var inst_34408__$1 = inst_34423;
var state_34438__$1 = (function (){var statearr_34453 = state_34438;
(statearr_34453[(10)] = inst_34408__$1);

return statearr_34453;
})();
var statearr_34454_35640 = state_34438__$1;
(statearr_34454_35640[(2)] = null);

(statearr_34454_35640[(1)] = (2));


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
});})(c__33353__auto___35630,out))
;
return ((function (switch__33252__auto__,c__33353__auto___35630,out){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34455 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34438){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34438);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__33256__auto__ = e34456;
var statearr_34457_35641 = state_34438;
(statearr_34457_35641[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35642 = state_34438;
state_34438 = G__35642;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35630,out))
})();
var state__33355__auto__ = (function (){var statearr_34458 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34458[(6)] = c__33353__auto___35630);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35630,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__34460 = arguments.length;
switch (G__34460) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33353__auto___35644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35644,out){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35644,out){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (7))){
var inst_34466 = (state_34484[(7)]);
var inst_34466__$1 = (state_34484[(2)]);
var inst_34467 = (inst_34466__$1 == null);
var inst_34468 = cljs.core.not(inst_34467);
var state_34484__$1 = (function (){var statearr_34486 = state_34484;
(statearr_34486[(7)] = inst_34466__$1);

return statearr_34486;
})();
if(inst_34468){
var statearr_34487_35645 = state_34484__$1;
(statearr_34487_35645[(1)] = (8));

} else {
var statearr_34488_35646 = state_34484__$1;
(statearr_34488_35646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (1))){
var inst_34461 = (0);
var state_34484__$1 = (function (){var statearr_34489 = state_34484;
(statearr_34489[(8)] = inst_34461);

return statearr_34489;
})();
var statearr_34490_35647 = state_34484__$1;
(statearr_34490_35647[(2)] = null);

(statearr_34490_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (4))){
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34484__$1,(7),ch);
} else {
if((state_val_34485 === (6))){
var inst_34479 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34491_35648 = state_34484__$1;
(statearr_34491_35648[(2)] = inst_34479);

(statearr_34491_35648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (3))){
var inst_34481 = (state_34484[(2)]);
var inst_34482 = cljs.core.async.close_BANG_(out);
var state_34484__$1 = (function (){var statearr_34492 = state_34484;
(statearr_34492[(9)] = inst_34481);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34484__$1,inst_34482);
} else {
if((state_val_34485 === (2))){
var inst_34461 = (state_34484[(8)]);
var inst_34463 = (inst_34461 < n);
var state_34484__$1 = state_34484;
if(cljs.core.truth_(inst_34463)){
var statearr_34493_35649 = state_34484__$1;
(statearr_34493_35649[(1)] = (4));

} else {
var statearr_34494_35650 = state_34484__$1;
(statearr_34494_35650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (11))){
var inst_34461 = (state_34484[(8)]);
var inst_34471 = (state_34484[(2)]);
var inst_34472 = (inst_34461 + (1));
var inst_34461__$1 = inst_34472;
var state_34484__$1 = (function (){var statearr_34495 = state_34484;
(statearr_34495[(8)] = inst_34461__$1);

(statearr_34495[(10)] = inst_34471);

return statearr_34495;
})();
var statearr_34496_35651 = state_34484__$1;
(statearr_34496_35651[(2)] = null);

(statearr_34496_35651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (9))){
var state_34484__$1 = state_34484;
var statearr_34497_35653 = state_34484__$1;
(statearr_34497_35653[(2)] = null);

(statearr_34497_35653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var state_34484__$1 = state_34484;
var statearr_34498_35657 = state_34484__$1;
(statearr_34498_35657[(2)] = null);

(statearr_34498_35657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (10))){
var inst_34476 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34499_35658 = state_34484__$1;
(statearr_34499_35658[(2)] = inst_34476);

(statearr_34499_35658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (8))){
var inst_34466 = (state_34484[(7)]);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34484__$1,(11),out,inst_34466);
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
});})(c__33353__auto___35644,out))
;
return ((function (switch__33252__auto__,c__33353__auto___35644,out){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34484){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34484);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__33256__auto__ = e34501;
var statearr_34502_35664 = state_34484;
(statearr_34502_35664[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35666 = state_34484;
state_34484 = G__35666;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35644,out))
})();
var state__33355__auto__ = (function (){var statearr_34503 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34503[(6)] = c__33353__auto___35644);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35644,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34505 = (function (f,ch,meta34506){
this.f = f;
this.ch = ch;
this.meta34506 = meta34506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34507,meta34506__$1){
var self__ = this;
var _34507__$1 = this;
return (new cljs.core.async.t_cljs$core$async34505(self__.f,self__.ch,meta34506__$1));
});

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34507){
var self__ = this;
var _34507__$1 = this;
return self__.meta34506;
});

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34508 = (function (f,ch,meta34506,_,fn1,meta34509){
this.f = f;
this.ch = ch;
this.meta34506 = meta34506;
this._ = _;
this.fn1 = fn1;
this.meta34509 = meta34509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34510,meta34509__$1){
var self__ = this;
var _34510__$1 = this;
return (new cljs.core.async.t_cljs$core$async34508(self__.f,self__.ch,self__.meta34506,self__._,self__.fn1,meta34509__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34510){
var self__ = this;
var _34510__$1 = this;
return self__.meta34509;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34504_SHARP_){
var G__34511 = (((p1__34504_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34504_SHARP_) : self__.f.call(null,p1__34504_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34511) : f1.call(null,G__34511));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34508.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34506","meta34506",169847325,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34505","cljs.core.async/t_cljs$core$async34505",-1417791696,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34509","meta34509",-65411086,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34508";

cljs.core.async.t_cljs$core$async34508.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34508");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34508.
 */
cljs.core.async.__GT_t_cljs$core$async34508 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34508(f__$1,ch__$1,meta34506__$1,___$2,fn1__$1,meta34509){
return (new cljs.core.async.t_cljs$core$async34508(f__$1,ch__$1,meta34506__$1,___$2,fn1__$1,meta34509));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34508(self__.f,self__.ch,self__.meta34506,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34512 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34512) : self__.f.call(null,G__34512));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34505.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34506","meta34506",169847325,null)], null);
});

cljs.core.async.t_cljs$core$async34505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34505";

cljs.core.async.t_cljs$core$async34505.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34505");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34505.
 */
cljs.core.async.__GT_t_cljs$core$async34505 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34505(f__$1,ch__$1,meta34506){
return (new cljs.core.async.t_cljs$core$async34505(f__$1,ch__$1,meta34506));
});

}

return (new cljs.core.async.t_cljs$core$async34505(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34513 = (function (f,ch,meta34514){
this.f = f;
this.ch = ch;
this.meta34514 = meta34514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34515,meta34514__$1){
var self__ = this;
var _34515__$1 = this;
return (new cljs.core.async.t_cljs$core$async34513(self__.f,self__.ch,meta34514__$1));
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34515){
var self__ = this;
var _34515__$1 = this;
return self__.meta34514;
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34514","meta34514",1870491545,null)], null);
});

cljs.core.async.t_cljs$core$async34513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34513";

cljs.core.async.t_cljs$core$async34513.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34513");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34513.
 */
cljs.core.async.__GT_t_cljs$core$async34513 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34513(f__$1,ch__$1,meta34514){
return (new cljs.core.async.t_cljs$core$async34513(f__$1,ch__$1,meta34514));
});

}

return (new cljs.core.async.t_cljs$core$async34513(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34516 = (function (p,ch,meta34517){
this.p = p;
this.ch = ch;
this.meta34517 = meta34517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34518,meta34517__$1){
var self__ = this;
var _34518__$1 = this;
return (new cljs.core.async.t_cljs$core$async34516(self__.p,self__.ch,meta34517__$1));
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34518){
var self__ = this;
var _34518__$1 = this;
return self__.meta34517;
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34517","meta34517",-1525761406,null)], null);
});

cljs.core.async.t_cljs$core$async34516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34516";

cljs.core.async.t_cljs$core$async34516.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34516");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34516.
 */
cljs.core.async.__GT_t_cljs$core$async34516 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34516(p__$1,ch__$1,meta34517){
return (new cljs.core.async.t_cljs$core$async34516(p__$1,ch__$1,meta34517));
});

}

return (new cljs.core.async.t_cljs$core$async34516(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34520 = arguments.length;
switch (G__34520) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33353__auto___35688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35688,out){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35688,out){
return (function (state_34541){
var state_val_34542 = (state_34541[(1)]);
if((state_val_34542 === (7))){
var inst_34537 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
var statearr_34543_35689 = state_34541__$1;
(statearr_34543_35689[(2)] = inst_34537);

(statearr_34543_35689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (1))){
var state_34541__$1 = state_34541;
var statearr_34544_35693 = state_34541__$1;
(statearr_34544_35693[(2)] = null);

(statearr_34544_35693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (4))){
var inst_34523 = (state_34541[(7)]);
var inst_34523__$1 = (state_34541[(2)]);
var inst_34524 = (inst_34523__$1 == null);
var state_34541__$1 = (function (){var statearr_34545 = state_34541;
(statearr_34545[(7)] = inst_34523__$1);

return statearr_34545;
})();
if(cljs.core.truth_(inst_34524)){
var statearr_34546_35694 = state_34541__$1;
(statearr_34546_35694[(1)] = (5));

} else {
var statearr_34547_35695 = state_34541__$1;
(statearr_34547_35695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (6))){
var inst_34523 = (state_34541[(7)]);
var inst_34528 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34523) : p.call(null,inst_34523));
var state_34541__$1 = state_34541;
if(cljs.core.truth_(inst_34528)){
var statearr_34548_35699 = state_34541__$1;
(statearr_34548_35699[(1)] = (8));

} else {
var statearr_34549_35700 = state_34541__$1;
(statearr_34549_35700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (3))){
var inst_34539 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34541__$1,inst_34539);
} else {
if((state_val_34542 === (2))){
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34541__$1,(4),ch);
} else {
if((state_val_34542 === (11))){
var inst_34531 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
var statearr_34550_35701 = state_34541__$1;
(statearr_34550_35701[(2)] = inst_34531);

(statearr_34550_35701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (9))){
var state_34541__$1 = state_34541;
var statearr_34551_35702 = state_34541__$1;
(statearr_34551_35702[(2)] = null);

(statearr_34551_35702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (5))){
var inst_34526 = cljs.core.async.close_BANG_(out);
var state_34541__$1 = state_34541;
var statearr_34552_35704 = state_34541__$1;
(statearr_34552_35704[(2)] = inst_34526);

(statearr_34552_35704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (10))){
var inst_34534 = (state_34541[(2)]);
var state_34541__$1 = (function (){var statearr_34553 = state_34541;
(statearr_34553[(8)] = inst_34534);

return statearr_34553;
})();
var statearr_34554_35705 = state_34541__$1;
(statearr_34554_35705[(2)] = null);

(statearr_34554_35705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (8))){
var inst_34523 = (state_34541[(7)]);
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34541__$1,(11),out,inst_34523);
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
});})(c__33353__auto___35688,out))
;
return ((function (switch__33252__auto__,c__33353__auto___35688,out){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34555 = [null,null,null,null,null,null,null,null,null];
(statearr_34555[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34555[(1)] = (1));

return statearr_34555;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34541){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34541);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34556){if((e34556 instanceof Object)){
var ex__33256__auto__ = e34556;
var statearr_34557_35715 = state_34541;
(statearr_34557_35715[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35722 = state_34541;
state_34541 = G__35722;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35688,out))
})();
var state__33355__auto__ = (function (){var statearr_34558 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34558[(6)] = c__33353__auto___35688);

return statearr_34558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35688,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34560 = arguments.length;
switch (G__34560) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33353__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto__){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto__){
return (function (state_34622){
var state_val_34623 = (state_34622[(1)]);
if((state_val_34623 === (7))){
var inst_34618 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34624_35724 = state_34622__$1;
(statearr_34624_35724[(2)] = inst_34618);

(statearr_34624_35724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (20))){
var inst_34588 = (state_34622[(7)]);
var inst_34599 = (state_34622[(2)]);
var inst_34600 = cljs.core.next(inst_34588);
var inst_34574 = inst_34600;
var inst_34575 = null;
var inst_34576 = (0);
var inst_34577 = (0);
var state_34622__$1 = (function (){var statearr_34625 = state_34622;
(statearr_34625[(8)] = inst_34599);

(statearr_34625[(9)] = inst_34574);

(statearr_34625[(10)] = inst_34576);

(statearr_34625[(11)] = inst_34577);

(statearr_34625[(12)] = inst_34575);

return statearr_34625;
})();
var statearr_34626_35725 = state_34622__$1;
(statearr_34626_35725[(2)] = null);

(statearr_34626_35725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (1))){
var state_34622__$1 = state_34622;
var statearr_34627_35726 = state_34622__$1;
(statearr_34627_35726[(2)] = null);

(statearr_34627_35726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (4))){
var inst_34563 = (state_34622[(13)]);
var inst_34563__$1 = (state_34622[(2)]);
var inst_34564 = (inst_34563__$1 == null);
var state_34622__$1 = (function (){var statearr_34628 = state_34622;
(statearr_34628[(13)] = inst_34563__$1);

return statearr_34628;
})();
if(cljs.core.truth_(inst_34564)){
var statearr_34629_35733 = state_34622__$1;
(statearr_34629_35733[(1)] = (5));

} else {
var statearr_34630_35734 = state_34622__$1;
(statearr_34630_35734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (15))){
var state_34622__$1 = state_34622;
var statearr_34634_35735 = state_34622__$1;
(statearr_34634_35735[(2)] = null);

(statearr_34634_35735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (21))){
var state_34622__$1 = state_34622;
var statearr_34635_35736 = state_34622__$1;
(statearr_34635_35736[(2)] = null);

(statearr_34635_35736[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (13))){
var inst_34574 = (state_34622[(9)]);
var inst_34576 = (state_34622[(10)]);
var inst_34577 = (state_34622[(11)]);
var inst_34575 = (state_34622[(12)]);
var inst_34584 = (state_34622[(2)]);
var inst_34585 = (inst_34577 + (1));
var tmp34631 = inst_34574;
var tmp34632 = inst_34576;
var tmp34633 = inst_34575;
var inst_34574__$1 = tmp34631;
var inst_34575__$1 = tmp34633;
var inst_34576__$1 = tmp34632;
var inst_34577__$1 = inst_34585;
var state_34622__$1 = (function (){var statearr_34636 = state_34622;
(statearr_34636[(14)] = inst_34584);

(statearr_34636[(9)] = inst_34574__$1);

(statearr_34636[(10)] = inst_34576__$1);

(statearr_34636[(11)] = inst_34577__$1);

(statearr_34636[(12)] = inst_34575__$1);

return statearr_34636;
})();
var statearr_34637_35737 = state_34622__$1;
(statearr_34637_35737[(2)] = null);

(statearr_34637_35737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (22))){
var state_34622__$1 = state_34622;
var statearr_34638_35738 = state_34622__$1;
(statearr_34638_35738[(2)] = null);

(statearr_34638_35738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (6))){
var inst_34563 = (state_34622[(13)]);
var inst_34572 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34563) : f.call(null,inst_34563));
var inst_34573 = cljs.core.seq(inst_34572);
var inst_34574 = inst_34573;
var inst_34575 = null;
var inst_34576 = (0);
var inst_34577 = (0);
var state_34622__$1 = (function (){var statearr_34639 = state_34622;
(statearr_34639[(9)] = inst_34574);

(statearr_34639[(10)] = inst_34576);

(statearr_34639[(11)] = inst_34577);

(statearr_34639[(12)] = inst_34575);

return statearr_34639;
})();
var statearr_34640_35739 = state_34622__$1;
(statearr_34640_35739[(2)] = null);

(statearr_34640_35739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (17))){
var inst_34588 = (state_34622[(7)]);
var inst_34592 = cljs.core.chunk_first(inst_34588);
var inst_34593 = cljs.core.chunk_rest(inst_34588);
var inst_34594 = cljs.core.count(inst_34592);
var inst_34574 = inst_34593;
var inst_34575 = inst_34592;
var inst_34576 = inst_34594;
var inst_34577 = (0);
var state_34622__$1 = (function (){var statearr_34641 = state_34622;
(statearr_34641[(9)] = inst_34574);

(statearr_34641[(10)] = inst_34576);

(statearr_34641[(11)] = inst_34577);

(statearr_34641[(12)] = inst_34575);

return statearr_34641;
})();
var statearr_34642_35746 = state_34622__$1;
(statearr_34642_35746[(2)] = null);

(statearr_34642_35746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (3))){
var inst_34620 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34622__$1,inst_34620);
} else {
if((state_val_34623 === (12))){
var inst_34608 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34643_35748 = state_34622__$1;
(statearr_34643_35748[(2)] = inst_34608);

(statearr_34643_35748[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (2))){
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34622__$1,(4),in$);
} else {
if((state_val_34623 === (23))){
var inst_34616 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34644_35749 = state_34622__$1;
(statearr_34644_35749[(2)] = inst_34616);

(statearr_34644_35749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (19))){
var inst_34603 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34645_35750 = state_34622__$1;
(statearr_34645_35750[(2)] = inst_34603);

(statearr_34645_35750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (11))){
var inst_34588 = (state_34622[(7)]);
var inst_34574 = (state_34622[(9)]);
var inst_34588__$1 = cljs.core.seq(inst_34574);
var state_34622__$1 = (function (){var statearr_34646 = state_34622;
(statearr_34646[(7)] = inst_34588__$1);

return statearr_34646;
})();
if(inst_34588__$1){
var statearr_34647_35752 = state_34622__$1;
(statearr_34647_35752[(1)] = (14));

} else {
var statearr_34648_35753 = state_34622__$1;
(statearr_34648_35753[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (9))){
var inst_34610 = (state_34622[(2)]);
var inst_34611 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34622__$1 = (function (){var statearr_34649 = state_34622;
(statearr_34649[(15)] = inst_34610);

return statearr_34649;
})();
if(cljs.core.truth_(inst_34611)){
var statearr_34650_35754 = state_34622__$1;
(statearr_34650_35754[(1)] = (21));

} else {
var statearr_34651_35755 = state_34622__$1;
(statearr_34651_35755[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (5))){
var inst_34566 = cljs.core.async.close_BANG_(out);
var state_34622__$1 = state_34622;
var statearr_34652_35756 = state_34622__$1;
(statearr_34652_35756[(2)] = inst_34566);

(statearr_34652_35756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (14))){
var inst_34588 = (state_34622[(7)]);
var inst_34590 = cljs.core.chunked_seq_QMARK_(inst_34588);
var state_34622__$1 = state_34622;
if(inst_34590){
var statearr_34653_35763 = state_34622__$1;
(statearr_34653_35763[(1)] = (17));

} else {
var statearr_34654_35764 = state_34622__$1;
(statearr_34654_35764[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (16))){
var inst_34606 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34655_35765 = state_34622__$1;
(statearr_34655_35765[(2)] = inst_34606);

(statearr_34655_35765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (10))){
var inst_34577 = (state_34622[(11)]);
var inst_34575 = (state_34622[(12)]);
var inst_34582 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34575,inst_34577);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34622__$1,(13),out,inst_34582);
} else {
if((state_val_34623 === (18))){
var inst_34588 = (state_34622[(7)]);
var inst_34597 = cljs.core.first(inst_34588);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34622__$1,(20),out,inst_34597);
} else {
if((state_val_34623 === (8))){
var inst_34576 = (state_34622[(10)]);
var inst_34577 = (state_34622[(11)]);
var inst_34579 = (inst_34577 < inst_34576);
var inst_34580 = inst_34579;
var state_34622__$1 = state_34622;
if(cljs.core.truth_(inst_34580)){
var statearr_34656_35766 = state_34622__$1;
(statearr_34656_35766[(1)] = (10));

} else {
var statearr_34657_35767 = state_34622__$1;
(statearr_34657_35767[(1)] = (11));

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
});})(c__33353__auto__))
;
return ((function (switch__33252__auto__,c__33353__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33253__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33253__auto____0 = (function (){
var statearr_34658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34658[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33253__auto__);

(statearr_34658[(1)] = (1));

return statearr_34658;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33253__auto____1 = (function (state_34622){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34622);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34659){if((e34659 instanceof Object)){
var ex__33256__auto__ = e34659;
var statearr_34660_35768 = state_34622;
(statearr_34660_35768[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35772 = state_34622;
state_34622 = G__35772;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33253__auto__ = function(state_34622){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33253__auto____1.call(this,state_34622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33253__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33253__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto__))
})();
var state__33355__auto__ = (function (){var statearr_34661 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34661[(6)] = c__33353__auto__);

return statearr_34661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto__))
);

return c__33353__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34663 = arguments.length;
switch (G__34663) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34665 = arguments.length;
switch (G__34665) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34667 = arguments.length;
switch (G__34667) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33353__auto___35781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35781,out){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35781,out){
return (function (state_34691){
var state_val_34692 = (state_34691[(1)]);
if((state_val_34692 === (7))){
var inst_34686 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34693_35782 = state_34691__$1;
(statearr_34693_35782[(2)] = inst_34686);

(statearr_34693_35782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (1))){
var inst_34668 = null;
var state_34691__$1 = (function (){var statearr_34694 = state_34691;
(statearr_34694[(7)] = inst_34668);

return statearr_34694;
})();
var statearr_34695_35783 = state_34691__$1;
(statearr_34695_35783[(2)] = null);

(statearr_34695_35783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (4))){
var inst_34671 = (state_34691[(8)]);
var inst_34671__$1 = (state_34691[(2)]);
var inst_34672 = (inst_34671__$1 == null);
var inst_34673 = cljs.core.not(inst_34672);
var state_34691__$1 = (function (){var statearr_34696 = state_34691;
(statearr_34696[(8)] = inst_34671__$1);

return statearr_34696;
})();
if(inst_34673){
var statearr_34697_35786 = state_34691__$1;
(statearr_34697_35786[(1)] = (5));

} else {
var statearr_34698_35787 = state_34691__$1;
(statearr_34698_35787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (6))){
var state_34691__$1 = state_34691;
var statearr_34699_35790 = state_34691__$1;
(statearr_34699_35790[(2)] = null);

(statearr_34699_35790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (3))){
var inst_34688 = (state_34691[(2)]);
var inst_34689 = cljs.core.async.close_BANG_(out);
var state_34691__$1 = (function (){var statearr_34700 = state_34691;
(statearr_34700[(9)] = inst_34688);

return statearr_34700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34691__$1,inst_34689);
} else {
if((state_val_34692 === (2))){
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34691__$1,(4),ch);
} else {
if((state_val_34692 === (11))){
var inst_34671 = (state_34691[(8)]);
var inst_34680 = (state_34691[(2)]);
var inst_34668 = inst_34671;
var state_34691__$1 = (function (){var statearr_34701 = state_34691;
(statearr_34701[(7)] = inst_34668);

(statearr_34701[(10)] = inst_34680);

return statearr_34701;
})();
var statearr_34702_35793 = state_34691__$1;
(statearr_34702_35793[(2)] = null);

(statearr_34702_35793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (9))){
var inst_34671 = (state_34691[(8)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34691__$1,(11),out,inst_34671);
} else {
if((state_val_34692 === (5))){
var inst_34671 = (state_34691[(8)]);
var inst_34668 = (state_34691[(7)]);
var inst_34675 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34671,inst_34668);
var state_34691__$1 = state_34691;
if(inst_34675){
var statearr_34704_35794 = state_34691__$1;
(statearr_34704_35794[(1)] = (8));

} else {
var statearr_34705_35796 = state_34691__$1;
(statearr_34705_35796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (10))){
var inst_34683 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34706_35801 = state_34691__$1;
(statearr_34706_35801[(2)] = inst_34683);

(statearr_34706_35801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (8))){
var inst_34668 = (state_34691[(7)]);
var tmp34703 = inst_34668;
var inst_34668__$1 = tmp34703;
var state_34691__$1 = (function (){var statearr_34707 = state_34691;
(statearr_34707[(7)] = inst_34668__$1);

return statearr_34707;
})();
var statearr_34708_35808 = state_34691__$1;
(statearr_34708_35808[(2)] = null);

(statearr_34708_35808[(1)] = (2));


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
});})(c__33353__auto___35781,out))
;
return ((function (switch__33252__auto__,c__33353__auto___35781,out){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34709[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34709[(1)] = (1));

return statearr_34709;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34691){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34691);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34710){if((e34710 instanceof Object)){
var ex__33256__auto__ = e34710;
var statearr_34711_35809 = state_34691;
(statearr_34711_35809[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35811 = state_34691;
state_34691 = G__35811;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35781,out))
})();
var state__33355__auto__ = (function (){var statearr_34712 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34712[(6)] = c__33353__auto___35781);

return statearr_34712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35781,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34714 = arguments.length;
switch (G__34714) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33353__auto___35817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35817,out){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35817,out){
return (function (state_34752){
var state_val_34753 = (state_34752[(1)]);
if((state_val_34753 === (7))){
var inst_34748 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34754_35818 = state_34752__$1;
(statearr_34754_35818[(2)] = inst_34748);

(statearr_34754_35818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (1))){
var inst_34715 = (new Array(n));
var inst_34716 = inst_34715;
var inst_34717 = (0);
var state_34752__$1 = (function (){var statearr_34755 = state_34752;
(statearr_34755[(7)] = inst_34716);

(statearr_34755[(8)] = inst_34717);

return statearr_34755;
})();
var statearr_34756_35819 = state_34752__$1;
(statearr_34756_35819[(2)] = null);

(statearr_34756_35819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (4))){
var inst_34720 = (state_34752[(9)]);
var inst_34720__$1 = (state_34752[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var inst_34722 = cljs.core.not(inst_34721);
var state_34752__$1 = (function (){var statearr_34757 = state_34752;
(statearr_34757[(9)] = inst_34720__$1);

return statearr_34757;
})();
if(inst_34722){
var statearr_34758_35820 = state_34752__$1;
(statearr_34758_35820[(1)] = (5));

} else {
var statearr_34759_35821 = state_34752__$1;
(statearr_34759_35821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (15))){
var inst_34742 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34760_35822 = state_34752__$1;
(statearr_34760_35822[(2)] = inst_34742);

(statearr_34760_35822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (13))){
var state_34752__$1 = state_34752;
var statearr_34761_35823 = state_34752__$1;
(statearr_34761_35823[(2)] = null);

(statearr_34761_35823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (6))){
var inst_34717 = (state_34752[(8)]);
var inst_34738 = (inst_34717 > (0));
var state_34752__$1 = state_34752;
if(cljs.core.truth_(inst_34738)){
var statearr_34762_35824 = state_34752__$1;
(statearr_34762_35824[(1)] = (12));

} else {
var statearr_34763_35825 = state_34752__$1;
(statearr_34763_35825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (3))){
var inst_34750 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34752__$1,inst_34750);
} else {
if((state_val_34753 === (12))){
var inst_34716 = (state_34752[(7)]);
var inst_34740 = cljs.core.vec(inst_34716);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34752__$1,(15),out,inst_34740);
} else {
if((state_val_34753 === (2))){
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34752__$1,(4),ch);
} else {
if((state_val_34753 === (11))){
var inst_34732 = (state_34752[(2)]);
var inst_34733 = (new Array(n));
var inst_34716 = inst_34733;
var inst_34717 = (0);
var state_34752__$1 = (function (){var statearr_34764 = state_34752;
(statearr_34764[(7)] = inst_34716);

(statearr_34764[(8)] = inst_34717);

(statearr_34764[(10)] = inst_34732);

return statearr_34764;
})();
var statearr_34765_35826 = state_34752__$1;
(statearr_34765_35826[(2)] = null);

(statearr_34765_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (9))){
var inst_34716 = (state_34752[(7)]);
var inst_34730 = cljs.core.vec(inst_34716);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34752__$1,(11),out,inst_34730);
} else {
if((state_val_34753 === (5))){
var inst_34725 = (state_34752[(11)]);
var inst_34716 = (state_34752[(7)]);
var inst_34717 = (state_34752[(8)]);
var inst_34720 = (state_34752[(9)]);
var inst_34724 = (inst_34716[inst_34717] = inst_34720);
var inst_34725__$1 = (inst_34717 + (1));
var inst_34726 = (inst_34725__$1 < n);
var state_34752__$1 = (function (){var statearr_34766 = state_34752;
(statearr_34766[(11)] = inst_34725__$1);

(statearr_34766[(12)] = inst_34724);

return statearr_34766;
})();
if(cljs.core.truth_(inst_34726)){
var statearr_34767_35827 = state_34752__$1;
(statearr_34767_35827[(1)] = (8));

} else {
var statearr_34768_35828 = state_34752__$1;
(statearr_34768_35828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (14))){
var inst_34745 = (state_34752[(2)]);
var inst_34746 = cljs.core.async.close_BANG_(out);
var state_34752__$1 = (function (){var statearr_34770 = state_34752;
(statearr_34770[(13)] = inst_34745);

return statearr_34770;
})();
var statearr_34771_35829 = state_34752__$1;
(statearr_34771_35829[(2)] = inst_34746);

(statearr_34771_35829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (10))){
var inst_34736 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34772_35831 = state_34752__$1;
(statearr_34772_35831[(2)] = inst_34736);

(statearr_34772_35831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (8))){
var inst_34725 = (state_34752[(11)]);
var inst_34716 = (state_34752[(7)]);
var tmp34769 = inst_34716;
var inst_34716__$1 = tmp34769;
var inst_34717 = inst_34725;
var state_34752__$1 = (function (){var statearr_34773 = state_34752;
(statearr_34773[(7)] = inst_34716__$1);

(statearr_34773[(8)] = inst_34717);

return statearr_34773;
})();
var statearr_34774_35832 = state_34752__$1;
(statearr_34774_35832[(2)] = null);

(statearr_34774_35832[(1)] = (2));


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
});})(c__33353__auto___35817,out))
;
return ((function (switch__33252__auto__,c__33353__auto___35817,out){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34775[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34775[(1)] = (1));

return statearr_34775;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34752){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34752);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34776){if((e34776 instanceof Object)){
var ex__33256__auto__ = e34776;
var statearr_34777_35835 = state_34752;
(statearr_34777_35835[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35836 = state_34752;
state_34752 = G__35836;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35817,out))
})();
var state__33355__auto__ = (function (){var statearr_34778 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34778[(6)] = c__33353__auto___35817);

return statearr_34778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35817,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34780 = arguments.length;
switch (G__34780) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33353__auto___35839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___35839,out){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___35839,out){
return (function (state_34822){
var state_val_34823 = (state_34822[(1)]);
if((state_val_34823 === (7))){
var inst_34818 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34824_35840 = state_34822__$1;
(statearr_34824_35840[(2)] = inst_34818);

(statearr_34824_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (1))){
var inst_34781 = [];
var inst_34782 = inst_34781;
var inst_34783 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34822__$1 = (function (){var statearr_34825 = state_34822;
(statearr_34825[(7)] = inst_34782);

(statearr_34825[(8)] = inst_34783);

return statearr_34825;
})();
var statearr_34826_35842 = state_34822__$1;
(statearr_34826_35842[(2)] = null);

(statearr_34826_35842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (4))){
var inst_34786 = (state_34822[(9)]);
var inst_34786__$1 = (state_34822[(2)]);
var inst_34787 = (inst_34786__$1 == null);
var inst_34788 = cljs.core.not(inst_34787);
var state_34822__$1 = (function (){var statearr_34827 = state_34822;
(statearr_34827[(9)] = inst_34786__$1);

return statearr_34827;
})();
if(inst_34788){
var statearr_34828_35843 = state_34822__$1;
(statearr_34828_35843[(1)] = (5));

} else {
var statearr_34829_35844 = state_34822__$1;
(statearr_34829_35844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (15))){
var inst_34812 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34830_35845 = state_34822__$1;
(statearr_34830_35845[(2)] = inst_34812);

(statearr_34830_35845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (13))){
var state_34822__$1 = state_34822;
var statearr_34831_35846 = state_34822__$1;
(statearr_34831_35846[(2)] = null);

(statearr_34831_35846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (6))){
var inst_34782 = (state_34822[(7)]);
var inst_34807 = inst_34782.length;
var inst_34808 = (inst_34807 > (0));
var state_34822__$1 = state_34822;
if(cljs.core.truth_(inst_34808)){
var statearr_34832_35847 = state_34822__$1;
(statearr_34832_35847[(1)] = (12));

} else {
var statearr_34833_35849 = state_34822__$1;
(statearr_34833_35849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (3))){
var inst_34820 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34822__$1,inst_34820);
} else {
if((state_val_34823 === (12))){
var inst_34782 = (state_34822[(7)]);
var inst_34810 = cljs.core.vec(inst_34782);
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34822__$1,(15),out,inst_34810);
} else {
if((state_val_34823 === (2))){
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34822__$1,(4),ch);
} else {
if((state_val_34823 === (11))){
var inst_34790 = (state_34822[(10)]);
var inst_34786 = (state_34822[(9)]);
var inst_34800 = (state_34822[(2)]);
var inst_34801 = [];
var inst_34802 = inst_34801.push(inst_34786);
var inst_34782 = inst_34801;
var inst_34783 = inst_34790;
var state_34822__$1 = (function (){var statearr_34834 = state_34822;
(statearr_34834[(7)] = inst_34782);

(statearr_34834[(11)] = inst_34800);

(statearr_34834[(12)] = inst_34802);

(statearr_34834[(8)] = inst_34783);

return statearr_34834;
})();
var statearr_34835_35891 = state_34822__$1;
(statearr_34835_35891[(2)] = null);

(statearr_34835_35891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (9))){
var inst_34782 = (state_34822[(7)]);
var inst_34798 = cljs.core.vec(inst_34782);
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34822__$1,(11),out,inst_34798);
} else {
if((state_val_34823 === (5))){
var inst_34790 = (state_34822[(10)]);
var inst_34786 = (state_34822[(9)]);
var inst_34783 = (state_34822[(8)]);
var inst_34790__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34786) : f.call(null,inst_34786));
var inst_34791 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34790__$1,inst_34783);
var inst_34792 = cljs.core.keyword_identical_QMARK_(inst_34783,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34793 = ((inst_34791) || (inst_34792));
var state_34822__$1 = (function (){var statearr_34836 = state_34822;
(statearr_34836[(10)] = inst_34790__$1);

return statearr_34836;
})();
if(cljs.core.truth_(inst_34793)){
var statearr_34837_35901 = state_34822__$1;
(statearr_34837_35901[(1)] = (8));

} else {
var statearr_34838_35902 = state_34822__$1;
(statearr_34838_35902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (14))){
var inst_34815 = (state_34822[(2)]);
var inst_34816 = cljs.core.async.close_BANG_(out);
var state_34822__$1 = (function (){var statearr_34840 = state_34822;
(statearr_34840[(13)] = inst_34815);

return statearr_34840;
})();
var statearr_34841_35904 = state_34822__$1;
(statearr_34841_35904[(2)] = inst_34816);

(statearr_34841_35904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (10))){
var inst_34805 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34842_35913 = state_34822__$1;
(statearr_34842_35913[(2)] = inst_34805);

(statearr_34842_35913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (8))){
var inst_34782 = (state_34822[(7)]);
var inst_34790 = (state_34822[(10)]);
var inst_34786 = (state_34822[(9)]);
var inst_34795 = inst_34782.push(inst_34786);
var tmp34839 = inst_34782;
var inst_34782__$1 = tmp34839;
var inst_34783 = inst_34790;
var state_34822__$1 = (function (){var statearr_34843 = state_34822;
(statearr_34843[(7)] = inst_34782__$1);

(statearr_34843[(14)] = inst_34795);

(statearr_34843[(8)] = inst_34783);

return statearr_34843;
})();
var statearr_34844_35918 = state_34822__$1;
(statearr_34844_35918[(2)] = null);

(statearr_34844_35918[(1)] = (2));


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
});})(c__33353__auto___35839,out))
;
return ((function (switch__33252__auto__,c__33353__auto___35839,out){
return (function() {
var cljs$core$async$state_machine__33253__auto__ = null;
var cljs$core$async$state_machine__33253__auto____0 = (function (){
var statearr_34845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34845[(0)] = cljs$core$async$state_machine__33253__auto__);

(statearr_34845[(1)] = (1));

return statearr_34845;
});
var cljs$core$async$state_machine__33253__auto____1 = (function (state_34822){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_34822);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e34846){if((e34846 instanceof Object)){
var ex__33256__auto__ = e34846;
var statearr_34847_35932 = state_34822;
(statearr_34847_35932[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35934 = state_34822;
state_34822 = G__35934;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
cljs$core$async$state_machine__33253__auto__ = function(state_34822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33253__auto____1.call(this,state_34822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33253__auto____0;
cljs$core$async$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33253__auto____1;
return cljs$core$async$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___35839,out))
})();
var state__33355__auto__ = (function (){var statearr_34848 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_34848[(6)] = c__33353__auto___35839);

return statearr_34848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___35839,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map

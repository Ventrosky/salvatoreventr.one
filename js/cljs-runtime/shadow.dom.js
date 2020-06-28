goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34997 = coll;
var G__34998 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34997,G__34998) : shadow.dom.lazy_native_coll_seq.call(null,G__34997,G__34998));
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
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

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
var G__35029 = arguments.length;
switch (G__35029) {
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

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35036 = arguments.length;
switch (G__35036) {
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

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35045 = arguments.length;
switch (G__35045) {
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

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35050 = arguments.length;
switch (G__35050) {
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

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35059 = arguments.length;
switch (G__35059) {
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

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35063 = document;
var G__35064 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35063,G__35064);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35066 = shadow.dom.dom_node(parent);
var G__35067 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35066,G__35067);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35071 = shadow.dom.dom_node(el);
var G__35072 = cls;
return goog.dom.classlist.add(G__35071,G__35072);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35075 = shadow.dom.dom_node(el);
var G__35076 = cls;
return goog.dom.classlist.remove(G__35075,G__35076);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35079 = arguments.length;
switch (G__35079) {
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

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35081 = shadow.dom.dom_node(el);
var G__35082 = cls;
return goog.dom.classlist.toggle(G__35081,G__35082);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35087){if((e35087 instanceof Object)){
var e = e35087;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35087;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35092 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35093 = null;
var count__35094 = (0);
var i__35095 = (0);
while(true){
if((i__35095 < count__35094)){
var el = chunk__35093.cljs$core$IIndexed$_nth$arity$2(null,i__35095);
var handler_35856__$1 = ((function (seq__35092,chunk__35093,count__35094,i__35095,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35092,chunk__35093,count__35094,i__35095,el))
;
var G__35112_35857 = el;
var G__35113_35858 = cljs.core.name(ev);
var G__35114_35859 = handler_35856__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35112_35857,G__35113_35858,G__35114_35859) : shadow.dom.dom_listen.call(null,G__35112_35857,G__35113_35858,G__35114_35859));


var G__35860 = seq__35092;
var G__35861 = chunk__35093;
var G__35862 = count__35094;
var G__35863 = (i__35095 + (1));
seq__35092 = G__35860;
chunk__35093 = G__35861;
count__35094 = G__35862;
i__35095 = G__35863;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35092);
if(temp__5720__auto__){
var seq__35092__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35092__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35092__$1);
var G__35864 = cljs.core.chunk_rest(seq__35092__$1);
var G__35865 = c__4550__auto__;
var G__35866 = cljs.core.count(c__4550__auto__);
var G__35867 = (0);
seq__35092 = G__35864;
chunk__35093 = G__35865;
count__35094 = G__35866;
i__35095 = G__35867;
continue;
} else {
var el = cljs.core.first(seq__35092__$1);
var handler_35869__$1 = ((function (seq__35092,chunk__35093,count__35094,i__35095,el,seq__35092__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35092,chunk__35093,count__35094,i__35095,el,seq__35092__$1,temp__5720__auto__))
;
var G__35121_35871 = el;
var G__35122_35872 = cljs.core.name(ev);
var G__35123_35873 = handler_35869__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35121_35871,G__35122_35872,G__35123_35873) : shadow.dom.dom_listen.call(null,G__35121_35871,G__35122_35872,G__35123_35873));


var G__35877 = cljs.core.next(seq__35092__$1);
var G__35878 = null;
var G__35879 = (0);
var G__35880 = (0);
seq__35092 = G__35877;
chunk__35093 = G__35878;
count__35094 = G__35879;
i__35095 = G__35880;
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
var G__35127 = arguments.length;
switch (G__35127) {
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

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35140 = shadow.dom.dom_node(el);
var G__35141 = cljs.core.name(ev);
var G__35142 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35140,G__35141,G__35142) : shadow.dom.dom_listen.call(null,G__35140,G__35141,G__35142));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35148 = shadow.dom.dom_node(el);
var G__35149 = cljs.core.name(ev);
var G__35150 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35148,G__35149,G__35150) : shadow.dom.dom_listen_remove.call(null,G__35148,G__35149,G__35150));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35161 = cljs.core.seq(events);
var chunk__35162 = null;
var count__35163 = (0);
var i__35164 = (0);
while(true){
if((i__35164 < count__35163)){
var vec__35179 = chunk__35162.cljs$core$IIndexed$_nth$arity$2(null,i__35164);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35179,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35887 = seq__35161;
var G__35888 = chunk__35162;
var G__35889 = count__35163;
var G__35890 = (i__35164 + (1));
seq__35161 = G__35887;
chunk__35162 = G__35888;
count__35163 = G__35889;
i__35164 = G__35890;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35161);
if(temp__5720__auto__){
var seq__35161__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35161__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35161__$1);
var G__35893 = cljs.core.chunk_rest(seq__35161__$1);
var G__35894 = c__4550__auto__;
var G__35895 = cljs.core.count(c__4550__auto__);
var G__35896 = (0);
seq__35161 = G__35893;
chunk__35162 = G__35894;
count__35163 = G__35895;
i__35164 = G__35896;
continue;
} else {
var vec__35186 = cljs.core.first(seq__35161__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35897 = cljs.core.next(seq__35161__$1);
var G__35898 = null;
var G__35899 = (0);
var G__35900 = (0);
seq__35161 = G__35897;
chunk__35162 = G__35898;
count__35163 = G__35899;
i__35164 = G__35900;
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
var seq__35191 = cljs.core.seq(styles);
var chunk__35192 = null;
var count__35193 = (0);
var i__35194 = (0);
while(true){
if((i__35194 < count__35193)){
var vec__35217 = chunk__35192.cljs$core$IIndexed$_nth$arity$2(null,i__35194);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(1),null);
var G__35220_35905 = dom;
var G__35221_35906 = cljs.core.name(k);
var G__35222_35907 = (((v == null))?"":v);
goog.style.setStyle(G__35220_35905,G__35221_35906,G__35222_35907);


var G__35909 = seq__35191;
var G__35910 = chunk__35192;
var G__35911 = count__35193;
var G__35912 = (i__35194 + (1));
seq__35191 = G__35909;
chunk__35192 = G__35910;
count__35193 = G__35911;
i__35194 = G__35912;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35191);
if(temp__5720__auto__){
var seq__35191__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35191__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35191__$1);
var G__35914 = cljs.core.chunk_rest(seq__35191__$1);
var G__35915 = c__4550__auto__;
var G__35916 = cljs.core.count(c__4550__auto__);
var G__35917 = (0);
seq__35191 = G__35914;
chunk__35192 = G__35915;
count__35193 = G__35916;
i__35194 = G__35917;
continue;
} else {
var vec__35228 = cljs.core.first(seq__35191__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(1),null);
var G__35231_35921 = dom;
var G__35232_35922 = cljs.core.name(k);
var G__35233_35923 = (((v == null))?"":v);
goog.style.setStyle(G__35231_35921,G__35232_35922,G__35233_35923);


var G__35925 = cljs.core.next(seq__35191__$1);
var G__35926 = null;
var G__35927 = (0);
var G__35928 = (0);
seq__35191 = G__35925;
chunk__35192 = G__35926;
count__35193 = G__35927;
i__35194 = G__35928;
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
var G__35239_35929 = key;
var G__35239_35930__$1 = (((G__35239_35929 instanceof cljs.core.Keyword))?G__35239_35929.fqn:null);
switch (G__35239_35930__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

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
var ks_35936 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35936,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35936,"aria-");
}
})())){
el.setAttribute(ks_35936,value);
} else {
(el[ks_35936] = value);
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
var G__35265 = shadow.dom.dom_node(el);
var G__35266 = cls;
return goog.dom.classlist.contains(G__35265,G__35266);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35290){
var map__35291 = p__35290;
var map__35291__$1 = (((((!((map__35291 == null))))?(((((map__35291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35291):map__35291);
var props = map__35291__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35291__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35296 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35300 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35300,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35300;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35302 = arguments.length;
switch (G__35302) {
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

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35316){
var vec__35318 = p__35316;
var seq__35319 = cljs.core.seq(vec__35318);
var first__35320 = cljs.core.first(seq__35319);
var seq__35319__$1 = cljs.core.next(seq__35319);
var nn = first__35320;
var first__35320__$1 = cljs.core.first(seq__35319__$1);
var seq__35319__$2 = cljs.core.next(seq__35319__$1);
var np = first__35320__$1;
var nc = seq__35319__$2;
var node = vec__35318;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35323 = nn;
var G__35324 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35323,G__35324) : create_fn.call(null,G__35323,G__35324));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35325 = nn;
var G__35326 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35325,G__35326) : create_fn.call(null,G__35325,G__35326));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35328 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328,(1),null);
var seq__35332_35960 = cljs.core.seq(node_children);
var chunk__35333_35961 = null;
var count__35334_35962 = (0);
var i__35335_35963 = (0);
while(true){
if((i__35335_35963 < count__35334_35962)){
var child_struct_35966 = chunk__35333_35961.cljs$core$IIndexed$_nth$arity$2(null,i__35335_35963);
var children_35967 = shadow.dom.dom_node(child_struct_35966);
if(cljs.core.seq_QMARK_(children_35967)){
var seq__35372_35968 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35967));
var chunk__35374_35969 = null;
var count__35375_35970 = (0);
var i__35376_35971 = (0);
while(true){
if((i__35376_35971 < count__35375_35970)){
var child_35972 = chunk__35374_35969.cljs$core$IIndexed$_nth$arity$2(null,i__35376_35971);
if(cljs.core.truth_(child_35972)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35972);


var G__35973 = seq__35372_35968;
var G__35974 = chunk__35374_35969;
var G__35975 = count__35375_35970;
var G__35976 = (i__35376_35971 + (1));
seq__35372_35968 = G__35973;
chunk__35374_35969 = G__35974;
count__35375_35970 = G__35975;
i__35376_35971 = G__35976;
continue;
} else {
var G__35977 = seq__35372_35968;
var G__35978 = chunk__35374_35969;
var G__35979 = count__35375_35970;
var G__35980 = (i__35376_35971 + (1));
seq__35372_35968 = G__35977;
chunk__35374_35969 = G__35978;
count__35375_35970 = G__35979;
i__35376_35971 = G__35980;
continue;
}
} else {
var temp__5720__auto___35981 = cljs.core.seq(seq__35372_35968);
if(temp__5720__auto___35981){
var seq__35372_35982__$1 = temp__5720__auto___35981;
if(cljs.core.chunked_seq_QMARK_(seq__35372_35982__$1)){
var c__4550__auto___35983 = cljs.core.chunk_first(seq__35372_35982__$1);
var G__35984 = cljs.core.chunk_rest(seq__35372_35982__$1);
var G__35985 = c__4550__auto___35983;
var G__35986 = cljs.core.count(c__4550__auto___35983);
var G__35987 = (0);
seq__35372_35968 = G__35984;
chunk__35374_35969 = G__35985;
count__35375_35970 = G__35986;
i__35376_35971 = G__35987;
continue;
} else {
var child_35988 = cljs.core.first(seq__35372_35982__$1);
if(cljs.core.truth_(child_35988)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35988);


var G__35990 = cljs.core.next(seq__35372_35982__$1);
var G__35991 = null;
var G__35992 = (0);
var G__35993 = (0);
seq__35372_35968 = G__35990;
chunk__35374_35969 = G__35991;
count__35375_35970 = G__35992;
i__35376_35971 = G__35993;
continue;
} else {
var G__35995 = cljs.core.next(seq__35372_35982__$1);
var G__35996 = null;
var G__35997 = (0);
var G__35998 = (0);
seq__35372_35968 = G__35995;
chunk__35374_35969 = G__35996;
count__35375_35970 = G__35997;
i__35376_35971 = G__35998;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35967);
}


var G__36000 = seq__35332_35960;
var G__36001 = chunk__35333_35961;
var G__36002 = count__35334_35962;
var G__36003 = (i__35335_35963 + (1));
seq__35332_35960 = G__36000;
chunk__35333_35961 = G__36001;
count__35334_35962 = G__36002;
i__35335_35963 = G__36003;
continue;
} else {
var temp__5720__auto___36004 = cljs.core.seq(seq__35332_35960);
if(temp__5720__auto___36004){
var seq__35332_36005__$1 = temp__5720__auto___36004;
if(cljs.core.chunked_seq_QMARK_(seq__35332_36005__$1)){
var c__4550__auto___36006 = cljs.core.chunk_first(seq__35332_36005__$1);
var G__36007 = cljs.core.chunk_rest(seq__35332_36005__$1);
var G__36008 = c__4550__auto___36006;
var G__36009 = cljs.core.count(c__4550__auto___36006);
var G__36010 = (0);
seq__35332_35960 = G__36007;
chunk__35333_35961 = G__36008;
count__35334_35962 = G__36009;
i__35335_35963 = G__36010;
continue;
} else {
var child_struct_36011 = cljs.core.first(seq__35332_36005__$1);
var children_36012 = shadow.dom.dom_node(child_struct_36011);
if(cljs.core.seq_QMARK_(children_36012)){
var seq__35386_36013 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36012));
var chunk__35388_36014 = null;
var count__35389_36015 = (0);
var i__35390_36016 = (0);
while(true){
if((i__35390_36016 < count__35389_36015)){
var child_36017 = chunk__35388_36014.cljs$core$IIndexed$_nth$arity$2(null,i__35390_36016);
if(cljs.core.truth_(child_36017)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36017);


var G__36018 = seq__35386_36013;
var G__36019 = chunk__35388_36014;
var G__36020 = count__35389_36015;
var G__36021 = (i__35390_36016 + (1));
seq__35386_36013 = G__36018;
chunk__35388_36014 = G__36019;
count__35389_36015 = G__36020;
i__35390_36016 = G__36021;
continue;
} else {
var G__36022 = seq__35386_36013;
var G__36023 = chunk__35388_36014;
var G__36024 = count__35389_36015;
var G__36025 = (i__35390_36016 + (1));
seq__35386_36013 = G__36022;
chunk__35388_36014 = G__36023;
count__35389_36015 = G__36024;
i__35390_36016 = G__36025;
continue;
}
} else {
var temp__5720__auto___36026__$1 = cljs.core.seq(seq__35386_36013);
if(temp__5720__auto___36026__$1){
var seq__35386_36027__$1 = temp__5720__auto___36026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35386_36027__$1)){
var c__4550__auto___36028 = cljs.core.chunk_first(seq__35386_36027__$1);
var G__36029 = cljs.core.chunk_rest(seq__35386_36027__$1);
var G__36030 = c__4550__auto___36028;
var G__36031 = cljs.core.count(c__4550__auto___36028);
var G__36032 = (0);
seq__35386_36013 = G__36029;
chunk__35388_36014 = G__36030;
count__35389_36015 = G__36031;
i__35390_36016 = G__36032;
continue;
} else {
var child_36033 = cljs.core.first(seq__35386_36027__$1);
if(cljs.core.truth_(child_36033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36033);


var G__36034 = cljs.core.next(seq__35386_36027__$1);
var G__36035 = null;
var G__36036 = (0);
var G__36037 = (0);
seq__35386_36013 = G__36034;
chunk__35388_36014 = G__36035;
count__35389_36015 = G__36036;
i__35390_36016 = G__36037;
continue;
} else {
var G__36041 = cljs.core.next(seq__35386_36027__$1);
var G__36042 = null;
var G__36043 = (0);
var G__36044 = (0);
seq__35386_36013 = G__36041;
chunk__35388_36014 = G__36042;
count__35389_36015 = G__36043;
i__35390_36016 = G__36044;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36012);
}


var G__36045 = cljs.core.next(seq__35332_36005__$1);
var G__36046 = null;
var G__36047 = (0);
var G__36048 = (0);
seq__35332_35960 = G__36045;
chunk__35333_35961 = G__36046;
count__35334_35962 = G__36047;
i__35335_35963 = G__36048;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35411 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35411);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35420 = cljs.core.seq(node);
var chunk__35421 = null;
var count__35422 = (0);
var i__35423 = (0);
while(true){
if((i__35423 < count__35422)){
var n = chunk__35421.cljs$core$IIndexed$_nth$arity$2(null,i__35423);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36055 = seq__35420;
var G__36056 = chunk__35421;
var G__36057 = count__35422;
var G__36058 = (i__35423 + (1));
seq__35420 = G__36055;
chunk__35421 = G__36056;
count__35422 = G__36057;
i__35423 = G__36058;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35420);
if(temp__5720__auto__){
var seq__35420__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35420__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35420__$1);
var G__36059 = cljs.core.chunk_rest(seq__35420__$1);
var G__36060 = c__4550__auto__;
var G__36061 = cljs.core.count(c__4550__auto__);
var G__36062 = (0);
seq__35420 = G__36059;
chunk__35421 = G__36060;
count__35422 = G__36061;
i__35423 = G__36062;
continue;
} else {
var n = cljs.core.first(seq__35420__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36063 = cljs.core.next(seq__35420__$1);
var G__36064 = null;
var G__36065 = (0);
var G__36066 = (0);
seq__35420 = G__36063;
chunk__35421 = G__36064;
count__35422 = G__36065;
i__35423 = G__36066;
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
var G__35424 = shadow.dom.dom_node(new$);
var G__35425 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35424,G__35425);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35427 = arguments.length;
switch (G__35427) {
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

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35429 = arguments.length;
switch (G__35429) {
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

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

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
var G__35434 = arguments.length;
switch (G__35434) {
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

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

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
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36086 = arguments.length;
var i__4731__auto___36087 = (0);
while(true){
if((i__4731__auto___36087 < len__4730__auto___36086)){
args__4736__auto__.push((arguments[i__4731__auto___36087]));

var G__36088 = (i__4731__auto___36087 + (1));
i__4731__auto___36087 = G__36088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35456_36089 = cljs.core.seq(nodes);
var chunk__35457_36090 = null;
var count__35458_36091 = (0);
var i__35459_36092 = (0);
while(true){
if((i__35459_36092 < count__35458_36091)){
var node_36093 = chunk__35457_36090.cljs$core$IIndexed$_nth$arity$2(null,i__35459_36092);
fragment.appendChild(shadow.dom._to_dom(node_36093));


var G__36094 = seq__35456_36089;
var G__36095 = chunk__35457_36090;
var G__36096 = count__35458_36091;
var G__36097 = (i__35459_36092 + (1));
seq__35456_36089 = G__36094;
chunk__35457_36090 = G__36095;
count__35458_36091 = G__36096;
i__35459_36092 = G__36097;
continue;
} else {
var temp__5720__auto___36098 = cljs.core.seq(seq__35456_36089);
if(temp__5720__auto___36098){
var seq__35456_36099__$1 = temp__5720__auto___36098;
if(cljs.core.chunked_seq_QMARK_(seq__35456_36099__$1)){
var c__4550__auto___36100 = cljs.core.chunk_first(seq__35456_36099__$1);
var G__36101 = cljs.core.chunk_rest(seq__35456_36099__$1);
var G__36102 = c__4550__auto___36100;
var G__36103 = cljs.core.count(c__4550__auto___36100);
var G__36104 = (0);
seq__35456_36089 = G__36101;
chunk__35457_36090 = G__36102;
count__35458_36091 = G__36103;
i__35459_36092 = G__36104;
continue;
} else {
var node_36105 = cljs.core.first(seq__35456_36099__$1);
fragment.appendChild(shadow.dom._to_dom(node_36105));


var G__36109 = cljs.core.next(seq__35456_36099__$1);
var G__36110 = null;
var G__36111 = (0);
var G__36112 = (0);
seq__35456_36089 = G__36109;
chunk__35457_36090 = G__36110;
count__35458_36091 = G__36111;
i__35459_36092 = G__36112;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35453));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35467_36113 = cljs.core.seq(scripts);
var chunk__35468_36114 = null;
var count__35469_36115 = (0);
var i__35470_36116 = (0);
while(true){
if((i__35470_36116 < count__35469_36115)){
var vec__35481_36117 = chunk__35468_36114.cljs$core$IIndexed$_nth$arity$2(null,i__35470_36116);
var script_tag_36118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35481_36117,(0),null);
var script_body_36119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35481_36117,(1),null);
eval(script_body_36119);


var G__36120 = seq__35467_36113;
var G__36121 = chunk__35468_36114;
var G__36122 = count__35469_36115;
var G__36123 = (i__35470_36116 + (1));
seq__35467_36113 = G__36120;
chunk__35468_36114 = G__36121;
count__35469_36115 = G__36122;
i__35470_36116 = G__36123;
continue;
} else {
var temp__5720__auto___36124 = cljs.core.seq(seq__35467_36113);
if(temp__5720__auto___36124){
var seq__35467_36125__$1 = temp__5720__auto___36124;
if(cljs.core.chunked_seq_QMARK_(seq__35467_36125__$1)){
var c__4550__auto___36126 = cljs.core.chunk_first(seq__35467_36125__$1);
var G__36127 = cljs.core.chunk_rest(seq__35467_36125__$1);
var G__36128 = c__4550__auto___36126;
var G__36129 = cljs.core.count(c__4550__auto___36126);
var G__36130 = (0);
seq__35467_36113 = G__36127;
chunk__35468_36114 = G__36128;
count__35469_36115 = G__36129;
i__35470_36116 = G__36130;
continue;
} else {
var vec__35486_36131 = cljs.core.first(seq__35467_36125__$1);
var script_tag_36132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486_36131,(0),null);
var script_body_36133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486_36131,(1),null);
eval(script_body_36133);


var G__36134 = cljs.core.next(seq__35467_36125__$1);
var G__36135 = null;
var G__36136 = (0);
var G__36137 = (0);
seq__35467_36113 = G__36134;
chunk__35468_36114 = G__36135;
count__35469_36115 = G__36136;
i__35470_36116 = G__36137;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35492){
var vec__35494 = p__35492;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35505 = shadow.dom.dom_node(el);
var G__35506 = cls;
return goog.dom.getAncestorByClass(G__35505,G__35506);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35510 = arguments.length;
switch (G__35510) {
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

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35512 = shadow.dom.dom_node(el);
var G__35513 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35512,G__35513);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35516 = shadow.dom.dom_node(el);
var G__35517 = cljs.core.name(tag);
var G__35518 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35516,G__35517,G__35518);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35521 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35521);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35522 = shadow.dom.dom_node(dom);
var G__35523 = value;
return goog.dom.forms.setValue(G__35522,G__35523);
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
var seq__35526 = cljs.core.seq(style_keys);
var chunk__35527 = null;
var count__35528 = (0);
var i__35529 = (0);
while(true){
if((i__35529 < count__35528)){
var it = chunk__35527.cljs$core$IIndexed$_nth$arity$2(null,i__35529);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36147 = seq__35526;
var G__36148 = chunk__35527;
var G__36149 = count__35528;
var G__36150 = (i__35529 + (1));
seq__35526 = G__36147;
chunk__35527 = G__36148;
count__35528 = G__36149;
i__35529 = G__36150;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35526);
if(temp__5720__auto__){
var seq__35526__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35526__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35526__$1);
var G__36151 = cljs.core.chunk_rest(seq__35526__$1);
var G__36152 = c__4550__auto__;
var G__36153 = cljs.core.count(c__4550__auto__);
var G__36154 = (0);
seq__35526 = G__36151;
chunk__35527 = G__36152;
count__35528 = G__36153;
i__35529 = G__36154;
continue;
} else {
var it = cljs.core.first(seq__35526__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36159 = cljs.core.next(seq__35526__$1);
var G__36160 = null;
var G__36161 = (0);
var G__36162 = (0);
seq__35526 = G__36159;
chunk__35527 = G__36160;
count__35528 = G__36161;
i__35529 = G__36162;
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
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35532,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35537 = k35532;
var G__35537__$1 = (((G__35537 instanceof cljs.core.Keyword))?G__35537.fqn:null);
switch (G__35537__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35532,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35538){
var vec__35539 = p__35538;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35539,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35539,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35531){
var self__ = this;
var G__35531__$1 = this;
return (new cljs.core.RecordIter((0),G__35531__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35545 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35545(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35533,other35534){
var self__ = this;
var this35533__$1 = this;
return (((!((other35534 == null)))) && ((this35533__$1.constructor === other35534.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35533__$1.x,other35534.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35533__$1.y,other35534.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35533__$1.__extmap,other35534.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35531){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35554 = cljs.core.keyword_identical_QMARK_;
var expr__35555 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35558 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35559 = expr__35555;
return (pred__35554.cljs$core$IFn$_invoke$arity$2 ? pred__35554.cljs$core$IFn$_invoke$arity$2(G__35558,G__35559) : pred__35554.call(null,G__35558,G__35559));
})())){
return (new shadow.dom.Coordinate(G__35531,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35561 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35562 = expr__35555;
return (pred__35554.cljs$core$IFn$_invoke$arity$2 ? pred__35554.cljs$core$IFn$_invoke$arity$2(G__35561,G__35562) : pred__35554.call(null,G__35561,G__35562));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35531,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35531),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35531){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35531,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35535){
var extmap__4424__auto__ = (function (){var G__35569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35535,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35535)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35569);
} else {
return G__35569;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35535),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35535),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35575 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35575);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35577 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35577);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35579 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35579);
})();
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
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35582,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35591 = k35582;
var G__35591__$1 = (((G__35591 instanceof cljs.core.Keyword))?G__35591.fqn:null);
switch (G__35591__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35582,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35594){
var vec__35595 = p__35594;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35581){
var self__ = this;
var G__35581__$1 = this;
return (new cljs.core.RecordIter((0),G__35581__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35601 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35601(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35583,other35584){
var self__ = this;
var this35583__$1 = this;
return (((!((other35584 == null)))) && ((this35583__$1.constructor === other35584.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35583__$1.w,other35584.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35583__$1.h,other35584.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35583__$1.__extmap,other35584.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35581){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35608 = cljs.core.keyword_identical_QMARK_;
var expr__35609 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35612 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35613 = expr__35609;
return (pred__35608.cljs$core$IFn$_invoke$arity$2 ? pred__35608.cljs$core$IFn$_invoke$arity$2(G__35612,G__35613) : pred__35608.call(null,G__35612,G__35613));
})())){
return (new shadow.dom.Size(G__35581,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35615 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35616 = expr__35609;
return (pred__35608.cljs$core$IFn$_invoke$arity$2 ? pred__35608.cljs$core$IFn$_invoke$arity$2(G__35615,G__35616) : pred__35608.call(null,G__35615,G__35616));
})())){
return (new shadow.dom.Size(self__.w,G__35581,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35581),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35581){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35581,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35585){
var extmap__4424__auto__ = (function (){var G__35623 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35585,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35585)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35623);
} else {
return G__35623;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35585),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35585),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35627 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35627);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
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
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36205 = (i + (1));
var G__36206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36205;
ret = G__36206;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35659){
var vec__35660 = p__35659;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35665 = arguments.length;
switch (G__35665) {
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

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35667_36215 = new_node;
var G__35668_36216 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35667_36215,G__35668_36216);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35669_36217 = new_node;
var G__35670_36218 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35669_36217,G__35670_36218);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
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
var G__36219 = ps;
var G__36220 = (i + (1));
el__$1 = G__36219;
i = G__36220;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35671 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35671);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35672 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35672);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35673 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35673);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35674 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35674,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35674,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35674,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35677_36229 = cljs.core.seq(props);
var chunk__35678_36230 = null;
var count__35679_36231 = (0);
var i__35680_36232 = (0);
while(true){
if((i__35680_36232 < count__35679_36231)){
var vec__35690_36235 = chunk__35678_36230.cljs$core$IIndexed$_nth$arity$2(null,i__35680_36232);
var k_36236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35690_36235,(0),null);
var v_36237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35690_36235,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_36236);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36236),v_36237);


var G__36240 = seq__35677_36229;
var G__36241 = chunk__35678_36230;
var G__36242 = count__35679_36231;
var G__36243 = (i__35680_36232 + (1));
seq__35677_36229 = G__36240;
chunk__35678_36230 = G__36241;
count__35679_36231 = G__36242;
i__35680_36232 = G__36243;
continue;
} else {
var temp__5720__auto___36247 = cljs.core.seq(seq__35677_36229);
if(temp__5720__auto___36247){
var seq__35677_36248__$1 = temp__5720__auto___36247;
if(cljs.core.chunked_seq_QMARK_(seq__35677_36248__$1)){
var c__4550__auto___36249 = cljs.core.chunk_first(seq__35677_36248__$1);
var G__36250 = cljs.core.chunk_rest(seq__35677_36248__$1);
var G__36251 = c__4550__auto___36249;
var G__36252 = cljs.core.count(c__4550__auto___36249);
var G__36253 = (0);
seq__35677_36229 = G__36250;
chunk__35678_36230 = G__36251;
count__35679_36231 = G__36252;
i__35680_36232 = G__36253;
continue;
} else {
var vec__35696_36254 = cljs.core.first(seq__35677_36248__$1);
var k_36255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35696_36254,(0),null);
var v_36256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35696_36254,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_36255);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36255),v_36256);


var G__36257 = cljs.core.next(seq__35677_36248__$1);
var G__36258 = null;
var G__36259 = (0);
var G__36260 = (0);
seq__35677_36229 = G__36257;
chunk__35678_36230 = G__36258;
count__35679_36231 = G__36259;
i__35680_36232 = G__36260;
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
var vec__35706 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35706,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35706,(1),null);
var seq__35709_36262 = cljs.core.seq(node_children);
var chunk__35711_36263 = null;
var count__35712_36264 = (0);
var i__35713_36265 = (0);
while(true){
if((i__35713_36265 < count__35712_36264)){
var child_struct_36266 = chunk__35711_36263.cljs$core$IIndexed$_nth$arity$2(null,i__35713_36265);
if((!((child_struct_36266 == null)))){
if(typeof child_struct_36266 === 'string'){
var text_36267 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36267),child_struct_36266].join(''));
} else {
var children_36269 = shadow.dom.svg_node(child_struct_36266);
if(cljs.core.seq_QMARK_(children_36269)){
var seq__35740_36270 = cljs.core.seq(children_36269);
var chunk__35742_36271 = null;
var count__35743_36272 = (0);
var i__35744_36273 = (0);
while(true){
if((i__35744_36273 < count__35743_36272)){
var child_36274 = chunk__35742_36271.cljs$core$IIndexed$_nth$arity$2(null,i__35744_36273);
if(cljs.core.truth_(child_36274)){
node.appendChild(child_36274);


var G__36275 = seq__35740_36270;
var G__36276 = chunk__35742_36271;
var G__36277 = count__35743_36272;
var G__36278 = (i__35744_36273 + (1));
seq__35740_36270 = G__36275;
chunk__35742_36271 = G__36276;
count__35743_36272 = G__36277;
i__35744_36273 = G__36278;
continue;
} else {
var G__36279 = seq__35740_36270;
var G__36280 = chunk__35742_36271;
var G__36281 = count__35743_36272;
var G__36282 = (i__35744_36273 + (1));
seq__35740_36270 = G__36279;
chunk__35742_36271 = G__36280;
count__35743_36272 = G__36281;
i__35744_36273 = G__36282;
continue;
}
} else {
var temp__5720__auto___36283 = cljs.core.seq(seq__35740_36270);
if(temp__5720__auto___36283){
var seq__35740_36284__$1 = temp__5720__auto___36283;
if(cljs.core.chunked_seq_QMARK_(seq__35740_36284__$1)){
var c__4550__auto___36285 = cljs.core.chunk_first(seq__35740_36284__$1);
var G__36287 = cljs.core.chunk_rest(seq__35740_36284__$1);
var G__36288 = c__4550__auto___36285;
var G__36289 = cljs.core.count(c__4550__auto___36285);
var G__36290 = (0);
seq__35740_36270 = G__36287;
chunk__35742_36271 = G__36288;
count__35743_36272 = G__36289;
i__35744_36273 = G__36290;
continue;
} else {
var child_36291 = cljs.core.first(seq__35740_36284__$1);
if(cljs.core.truth_(child_36291)){
node.appendChild(child_36291);


var G__36292 = cljs.core.next(seq__35740_36284__$1);
var G__36293 = null;
var G__36294 = (0);
var G__36295 = (0);
seq__35740_36270 = G__36292;
chunk__35742_36271 = G__36293;
count__35743_36272 = G__36294;
i__35744_36273 = G__36295;
continue;
} else {
var G__36296 = cljs.core.next(seq__35740_36284__$1);
var G__36297 = null;
var G__36298 = (0);
var G__36299 = (0);
seq__35740_36270 = G__36296;
chunk__35742_36271 = G__36297;
count__35743_36272 = G__36298;
i__35744_36273 = G__36299;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36269);
}
}


var G__36300 = seq__35709_36262;
var G__36301 = chunk__35711_36263;
var G__36302 = count__35712_36264;
var G__36303 = (i__35713_36265 + (1));
seq__35709_36262 = G__36300;
chunk__35711_36263 = G__36301;
count__35712_36264 = G__36302;
i__35713_36265 = G__36303;
continue;
} else {
var G__36304 = seq__35709_36262;
var G__36305 = chunk__35711_36263;
var G__36306 = count__35712_36264;
var G__36307 = (i__35713_36265 + (1));
seq__35709_36262 = G__36304;
chunk__35711_36263 = G__36305;
count__35712_36264 = G__36306;
i__35713_36265 = G__36307;
continue;
}
} else {
var temp__5720__auto___36308 = cljs.core.seq(seq__35709_36262);
if(temp__5720__auto___36308){
var seq__35709_36309__$1 = temp__5720__auto___36308;
if(cljs.core.chunked_seq_QMARK_(seq__35709_36309__$1)){
var c__4550__auto___36310 = cljs.core.chunk_first(seq__35709_36309__$1);
var G__36311 = cljs.core.chunk_rest(seq__35709_36309__$1);
var G__36312 = c__4550__auto___36310;
var G__36313 = cljs.core.count(c__4550__auto___36310);
var G__36314 = (0);
seq__35709_36262 = G__36311;
chunk__35711_36263 = G__36312;
count__35712_36264 = G__36313;
i__35713_36265 = G__36314;
continue;
} else {
var child_struct_36315 = cljs.core.first(seq__35709_36309__$1);
if((!((child_struct_36315 == null)))){
if(typeof child_struct_36315 === 'string'){
var text_36316 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36316),child_struct_36315].join(''));
} else {
var children_36317 = shadow.dom.svg_node(child_struct_36315);
if(cljs.core.seq_QMARK_(children_36317)){
var seq__35757_36318 = cljs.core.seq(children_36317);
var chunk__35759_36319 = null;
var count__35760_36320 = (0);
var i__35761_36321 = (0);
while(true){
if((i__35761_36321 < count__35760_36320)){
var child_36322 = chunk__35759_36319.cljs$core$IIndexed$_nth$arity$2(null,i__35761_36321);
if(cljs.core.truth_(child_36322)){
node.appendChild(child_36322);


var G__36323 = seq__35757_36318;
var G__36324 = chunk__35759_36319;
var G__36325 = count__35760_36320;
var G__36326 = (i__35761_36321 + (1));
seq__35757_36318 = G__36323;
chunk__35759_36319 = G__36324;
count__35760_36320 = G__36325;
i__35761_36321 = G__36326;
continue;
} else {
var G__36327 = seq__35757_36318;
var G__36328 = chunk__35759_36319;
var G__36329 = count__35760_36320;
var G__36330 = (i__35761_36321 + (1));
seq__35757_36318 = G__36327;
chunk__35759_36319 = G__36328;
count__35760_36320 = G__36329;
i__35761_36321 = G__36330;
continue;
}
} else {
var temp__5720__auto___36331__$1 = cljs.core.seq(seq__35757_36318);
if(temp__5720__auto___36331__$1){
var seq__35757_36333__$1 = temp__5720__auto___36331__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35757_36333__$1)){
var c__4550__auto___36334 = cljs.core.chunk_first(seq__35757_36333__$1);
var G__36335 = cljs.core.chunk_rest(seq__35757_36333__$1);
var G__36336 = c__4550__auto___36334;
var G__36337 = cljs.core.count(c__4550__auto___36334);
var G__36338 = (0);
seq__35757_36318 = G__36335;
chunk__35759_36319 = G__36336;
count__35760_36320 = G__36337;
i__35761_36321 = G__36338;
continue;
} else {
var child_36339 = cljs.core.first(seq__35757_36333__$1);
if(cljs.core.truth_(child_36339)){
node.appendChild(child_36339);


var G__36341 = cljs.core.next(seq__35757_36333__$1);
var G__36342 = null;
var G__36343 = (0);
var G__36344 = (0);
seq__35757_36318 = G__36341;
chunk__35759_36319 = G__36342;
count__35760_36320 = G__36343;
i__35761_36321 = G__36344;
continue;
} else {
var G__36345 = cljs.core.next(seq__35757_36333__$1);
var G__36346 = null;
var G__36347 = (0);
var G__36348 = (0);
seq__35757_36318 = G__36345;
chunk__35759_36319 = G__36346;
count__35760_36320 = G__36347;
i__35761_36321 = G__36348;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36317);
}
}


var G__36349 = cljs.core.next(seq__35709_36309__$1);
var G__36350 = null;
var G__36351 = (0);
var G__36352 = (0);
seq__35709_36262 = G__36349;
chunk__35711_36263 = G__36350;
count__35712_36264 = G__36351;
i__35713_36265 = G__36352;
continue;
} else {
var G__36353 = cljs.core.next(seq__35709_36309__$1);
var G__36354 = null;
var G__36355 = (0);
var G__36356 = (0);
seq__35709_36262 = G__36353;
chunk__35711_36263 = G__36354;
count__35712_36264 = G__36355;
i__35713_36265 = G__36356;
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

var G__35769_36361 = shadow.dom._to_svg;
var G__35770_36362 = "string";
var G__35771_36363 = ((function (G__35769_36361,G__35770_36362){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35769_36361,G__35770_36362))
;
goog.object.set(G__35769_36361,G__35770_36362,G__35771_36363);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35774_36367 = shadow.dom._to_svg;
var G__35775_36368 = "null";
var G__35776_36369 = ((function (G__35774_36367,G__35775_36368){
return (function (_){
return null;
});})(G__35774_36367,G__35775_36368))
;
goog.object.set(G__35774_36367,G__35775_36368,G__35776_36369);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36371 = arguments.length;
var i__4731__auto___36372 = (0);
while(true){
if((i__4731__auto___36372 < len__4730__auto___36371)){
args__4736__auto__.push((arguments[i__4731__auto___36372]));

var G__36373 = (i__4731__auto___36372 + (1));
i__4731__auto___36372 = G__36373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35778){
var G__35779 = cljs.core.first(seq35778);
var seq35778__$1 = cljs.core.next(seq35778);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35779,seq35778__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35789 = arguments.length;
switch (G__35789) {
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

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35798_36383 = shadow.dom.dom_node(el);
var G__35799_36384 = cljs.core.name(event);
var G__35800_36385 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35798_36383,G__35799_36384,G__35800_36385) : shadow.dom.dom_listen.call(null,G__35798_36383,G__35799_36384,G__35800_36385));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33353__auto___36386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33353__auto___36386,buf,chan,event_fn){
return (function (){
var f__33354__auto__ = (function (){var switch__33252__auto__ = ((function (c__33353__auto___36386,buf,chan,event_fn){
return (function (state_35806){
var state_val_35807 = (state_35806[(1)]);
if((state_val_35807 === (1))){
var state_35806__$1 = state_35806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35806__$1,(2),once_or_cleanup);
} else {
if((state_val_35807 === (2))){
var inst_35803 = (state_35806[(2)]);
var inst_35804 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35806__$1 = (function (){var statearr_35810 = state_35806;
(statearr_35810[(7)] = inst_35803);

return statearr_35810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35806__$1,inst_35804);
} else {
return null;
}
}
});})(c__33353__auto___36386,buf,chan,event_fn))
;
return ((function (switch__33252__auto__,c__33353__auto___36386,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33253__auto__ = null;
var shadow$dom$state_machine__33253__auto____0 = (function (){
var statearr_35812 = [null,null,null,null,null,null,null,null];
(statearr_35812[(0)] = shadow$dom$state_machine__33253__auto__);

(statearr_35812[(1)] = (1));

return statearr_35812;
});
var shadow$dom$state_machine__33253__auto____1 = (function (state_35806){
while(true){
var ret_value__33254__auto__ = (function (){try{while(true){
var result__33255__auto__ = switch__33252__auto__(state_35806);
if(cljs.core.keyword_identical_QMARK_(result__33255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33255__auto__;
}
break;
}
}catch (e35813){if((e35813 instanceof Object)){
var ex__33256__auto__ = e35813;
var statearr_35814_36387 = state_35806;
(statearr_35814_36387[(5)] = ex__33256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36388 = state_35806;
state_35806 = G__36388;
continue;
} else {
return ret_value__33254__auto__;
}
break;
}
});
shadow$dom$state_machine__33253__auto__ = function(state_35806){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33253__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33253__auto____1.call(this,state_35806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33253__auto____0;
shadow$dom$state_machine__33253__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33253__auto____1;
return shadow$dom$state_machine__33253__auto__;
})()
;})(switch__33252__auto__,c__33353__auto___36386,buf,chan,event_fn))
})();
var state__33355__auto__ = (function (){var statearr_35816 = (f__33354__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33354__auto__.cljs$core$IFn$_invoke$arity$0() : f__33354__auto__.call(null));
(statearr_35816[(6)] = c__33353__auto___36386);

return statearr_35816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33355__auto__);
});})(c__33353__auto___36386,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map

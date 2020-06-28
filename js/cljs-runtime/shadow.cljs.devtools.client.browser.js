goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37790 = arguments.length;
var i__4731__auto___37792 = (0);
while(true){
if((i__4731__auto___37792 < len__4730__auto___37790)){
args__4736__auto__.push((arguments[i__4731__auto___37792]));

var G__37793 = (i__4731__auto___37792 + (1));
i__4731__auto___37792 = G__37793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37439){
var G__37440 = cljs.core.first(seq37439);
var seq37439__$1 = cljs.core.next(seq37439);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37440,seq37439__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37487){
var map__37488 = p__37487;
var map__37488__$1 = (((((!((map__37488 == null))))?(((((map__37488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37488):map__37488);
var src = map__37488__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37507 = cljs.core.seq(sources);
var chunk__37508 = null;
var count__37509 = (0);
var i__37510 = (0);
while(true){
if((i__37510 < count__37509)){
var map__37528 = chunk__37508.cljs$core$IIndexed$_nth$arity$2(null,i__37510);
var map__37528__$1 = (((((!((map__37528 == null))))?(((((map__37528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37528):map__37528);
var src = map__37528__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37528__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37528__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37528__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37528__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37812 = seq__37507;
var G__37813 = chunk__37508;
var G__37814 = count__37509;
var G__37815 = (i__37510 + (1));
seq__37507 = G__37812;
chunk__37508 = G__37813;
count__37509 = G__37814;
i__37510 = G__37815;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37507);
if(temp__5720__auto__){
var seq__37507__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37507__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37507__$1);
var G__37816 = cljs.core.chunk_rest(seq__37507__$1);
var G__37817 = c__4550__auto__;
var G__37818 = cljs.core.count(c__4550__auto__);
var G__37819 = (0);
seq__37507 = G__37816;
chunk__37508 = G__37817;
count__37509 = G__37818;
i__37510 = G__37819;
continue;
} else {
var map__37543 = cljs.core.first(seq__37507__$1);
var map__37543__$1 = (((((!((map__37543 == null))))?(((((map__37543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37543):map__37543);
var src = map__37543__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37543__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37543__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37543__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37543__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37823 = cljs.core.next(seq__37507__$1);
var G__37824 = null;
var G__37825 = (0);
var G__37826 = (0);
seq__37507 = G__37823;
chunk__37508 = G__37824;
count__37509 = G__37825;
i__37510 = G__37826;
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
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
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
var seq__37551 = cljs.core.seq(js_requires);
var chunk__37552 = null;
var count__37553 = (0);
var i__37554 = (0);
while(true){
if((i__37554 < count__37553)){
var js_ns = chunk__37552.cljs$core$IIndexed$_nth$arity$2(null,i__37554);
var require_str_37831 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37831);


var G__37832 = seq__37551;
var G__37833 = chunk__37552;
var G__37834 = count__37553;
var G__37835 = (i__37554 + (1));
seq__37551 = G__37832;
chunk__37552 = G__37833;
count__37553 = G__37834;
i__37554 = G__37835;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37551);
if(temp__5720__auto__){
var seq__37551__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37551__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37551__$1);
var G__37836 = cljs.core.chunk_rest(seq__37551__$1);
var G__37837 = c__4550__auto__;
var G__37838 = cljs.core.count(c__4550__auto__);
var G__37839 = (0);
seq__37551 = G__37836;
chunk__37552 = G__37837;
count__37553 = G__37838;
i__37554 = G__37839;
continue;
} else {
var js_ns = cljs.core.first(seq__37551__$1);
var require_str_37840 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37840);


var G__37841 = cljs.core.next(seq__37551__$1);
var G__37842 = null;
var G__37843 = (0);
var G__37844 = (0);
seq__37551 = G__37841;
chunk__37552 = G__37842;
count__37553 = G__37843;
i__37554 = G__37844;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37557 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37557) : callback.call(null,G__37557));
} else {
var G__37558 = shadow.cljs.devtools.client.env.files_url();
var G__37559 = ((function (G__37558){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37558))
;
var G__37560 = "POST";
var G__37561 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37562 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37558,G__37559,G__37560,G__37561,G__37562);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37564){
var map__37565 = p__37564;
var map__37565__$1 = (((((!((map__37565 == null))))?(((((map__37565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37565):map__37565);
var msg = map__37565__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37567 = info;
var map__37567__$1 = (((((!((map__37567 == null))))?(((((map__37567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37567):map__37567);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37569(s__37570){
return (new cljs.core.LazySeq(null,((function (map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info){
return (function (){
var s__37570__$1 = s__37570;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37570__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37576 = cljs.core.first(xs__6277__auto__);
var map__37576__$1 = (((((!((map__37576 == null))))?(((((map__37576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37576):map__37576);
var src = map__37576__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37570__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37569_$_iter__37571(s__37572){
return (new cljs.core.LazySeq(null,((function (s__37570__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info){
return (function (){
var s__37572__$1 = s__37572;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37572__$1);
if(temp__5720__auto____$1){
var s__37572__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37572__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37572__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37574 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37573 = (0);
while(true){
if((i__37573 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37573);
cljs.core.chunk_append(b__37574,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37855 = (i__37573 + (1));
i__37573 = G__37855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37574),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37569_$_iter__37571(cljs.core.chunk_rest(s__37572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37574),null);
}
} else {
var warning = cljs.core.first(s__37572__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37569_$_iter__37571(cljs.core.rest(s__37572__$2)));
}
} else {
return null;
}
break;
}
});})(s__37570__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info))
,null,null));
});})(s__37570__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37569(cljs.core.rest(s__37570__$1)));
} else {
var G__37861 = cljs.core.rest(s__37570__$1);
s__37570__$1 = G__37861;
continue;
}
} else {
var G__37862 = cljs.core.rest(s__37570__$1);
s__37570__$1 = G__37862;
continue;
}
} else {
return null;
}
break;
}
});})(map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info))
,null,null));
});})(map__37567,map__37567__$1,sources,compiled,map__37565,map__37565__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37579_37863 = cljs.core.seq(warnings);
var chunk__37580_37864 = null;
var count__37581_37865 = (0);
var i__37582_37866 = (0);
while(true){
if((i__37582_37866 < count__37581_37865)){
var map__37587_37867 = chunk__37580_37864.cljs$core$IIndexed$_nth$arity$2(null,i__37582_37866);
var map__37587_37868__$1 = (((((!((map__37587_37867 == null))))?(((((map__37587_37867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37587_37867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37587_37867):map__37587_37867);
var w_37869 = map__37587_37868__$1;
var msg_37870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587_37868__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587_37868__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587_37868__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587_37868__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37873)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37871),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37872),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37870__$1)].join(''));


var G__37875 = seq__37579_37863;
var G__37876 = chunk__37580_37864;
var G__37877 = count__37581_37865;
var G__37878 = (i__37582_37866 + (1));
seq__37579_37863 = G__37875;
chunk__37580_37864 = G__37876;
count__37581_37865 = G__37877;
i__37582_37866 = G__37878;
continue;
} else {
var temp__5720__auto___37879 = cljs.core.seq(seq__37579_37863);
if(temp__5720__auto___37879){
var seq__37579_37880__$1 = temp__5720__auto___37879;
if(cljs.core.chunked_seq_QMARK_(seq__37579_37880__$1)){
var c__4550__auto___37881 = cljs.core.chunk_first(seq__37579_37880__$1);
var G__37882 = cljs.core.chunk_rest(seq__37579_37880__$1);
var G__37883 = c__4550__auto___37881;
var G__37884 = cljs.core.count(c__4550__auto___37881);
var G__37885 = (0);
seq__37579_37863 = G__37882;
chunk__37580_37864 = G__37883;
count__37581_37865 = G__37884;
i__37582_37866 = G__37885;
continue;
} else {
var map__37589_37887 = cljs.core.first(seq__37579_37880__$1);
var map__37589_37888__$1 = (((((!((map__37589_37887 == null))))?(((((map__37589_37887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37589_37887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37589_37887):map__37589_37887);
var w_37889 = map__37589_37888__$1;
var msg_37890__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37589_37888__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37589_37888__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37589_37888__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37589_37888__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37893)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37891),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37892),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37890__$1)].join(''));


var G__37894 = cljs.core.next(seq__37579_37880__$1);
var G__37895 = null;
var G__37896 = (0);
var G__37897 = (0);
seq__37579_37863 = G__37894;
chunk__37580_37864 = G__37895;
count__37581_37865 = G__37896;
i__37582_37866 = G__37897;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info){
return (function (p__37591){
var map__37592 = p__37591;
var map__37592__$1 = (((((!((map__37592 == null))))?(((((map__37592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37592):map__37592);
var src = map__37592__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37592__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37592__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info){
return (function (p__37594){
var map__37595 = p__37594;
var map__37595__$1 = (((((!((map__37595 == null))))?(((((map__37595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37595):map__37595);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37595__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info){
return (function (p__37597){
var map__37598 = p__37597;
var map__37598__$1 = (((((!((map__37598 == null))))?(((((map__37598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37598):map__37598);
var rc = map__37598__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info){
return (function (p1__37563_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37563_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37567,map__37567__$1,sources,compiled,warnings,map__37565,map__37565__$1,msg,info,reload_info))
);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37604){
var map__37605 = p__37604;
var map__37605__$1 = (((((!((map__37605 == null))))?(((((map__37605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37605):map__37605);
var msg = map__37605__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37605__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37607 = cljs.core.seq(updates);
var chunk__37609 = null;
var count__37610 = (0);
var i__37611 = (0);
while(true){
if((i__37611 < count__37610)){
var path = chunk__37609.cljs$core$IIndexed$_nth$arity$2(null,i__37611);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37652_37939 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37655_37940 = null;
var count__37656_37941 = (0);
var i__37657_37942 = (0);
while(true){
if((i__37657_37942 < count__37656_37941)){
var node_37943 = chunk__37655_37940.cljs$core$IIndexed$_nth$arity$2(null,i__37657_37942);
var path_match_37944 = shadow.cljs.devtools.client.browser.match_paths(node_37943.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37944)){
var new_link_37945 = (function (){var G__37662 = node_37943.cloneNode(true);
G__37662.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37944),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37662;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37944], 0));

goog.dom.insertSiblingAfter(new_link_37945,node_37943);

goog.dom.removeNode(node_37943);


var G__37948 = seq__37652_37939;
var G__37949 = chunk__37655_37940;
var G__37950 = count__37656_37941;
var G__37951 = (i__37657_37942 + (1));
seq__37652_37939 = G__37948;
chunk__37655_37940 = G__37949;
count__37656_37941 = G__37950;
i__37657_37942 = G__37951;
continue;
} else {
var G__37952 = seq__37652_37939;
var G__37953 = chunk__37655_37940;
var G__37954 = count__37656_37941;
var G__37955 = (i__37657_37942 + (1));
seq__37652_37939 = G__37952;
chunk__37655_37940 = G__37953;
count__37656_37941 = G__37954;
i__37657_37942 = G__37955;
continue;
}
} else {
var temp__5720__auto___37956 = cljs.core.seq(seq__37652_37939);
if(temp__5720__auto___37956){
var seq__37652_37957__$1 = temp__5720__auto___37956;
if(cljs.core.chunked_seq_QMARK_(seq__37652_37957__$1)){
var c__4550__auto___37958 = cljs.core.chunk_first(seq__37652_37957__$1);
var G__37960 = cljs.core.chunk_rest(seq__37652_37957__$1);
var G__37961 = c__4550__auto___37958;
var G__37962 = cljs.core.count(c__4550__auto___37958);
var G__37963 = (0);
seq__37652_37939 = G__37960;
chunk__37655_37940 = G__37961;
count__37656_37941 = G__37962;
i__37657_37942 = G__37963;
continue;
} else {
var node_37968 = cljs.core.first(seq__37652_37957__$1);
var path_match_37970 = shadow.cljs.devtools.client.browser.match_paths(node_37968.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37970)){
var new_link_37972 = (function (){var G__37676 = node_37968.cloneNode(true);
G__37676.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37970),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37676;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37970], 0));

goog.dom.insertSiblingAfter(new_link_37972,node_37968);

goog.dom.removeNode(node_37968);


var G__37974 = cljs.core.next(seq__37652_37957__$1);
var G__37975 = null;
var G__37976 = (0);
var G__37977 = (0);
seq__37652_37939 = G__37974;
chunk__37655_37940 = G__37975;
count__37656_37941 = G__37976;
i__37657_37942 = G__37977;
continue;
} else {
var G__37978 = cljs.core.next(seq__37652_37957__$1);
var G__37979 = null;
var G__37980 = (0);
var G__37981 = (0);
seq__37652_37939 = G__37978;
chunk__37655_37940 = G__37979;
count__37656_37941 = G__37980;
i__37657_37942 = G__37981;
continue;
}
}
} else {
}
}
break;
}


var G__37982 = seq__37607;
var G__37983 = chunk__37609;
var G__37984 = count__37610;
var G__37985 = (i__37611 + (1));
seq__37607 = G__37982;
chunk__37609 = G__37983;
count__37610 = G__37984;
i__37611 = G__37985;
continue;
} else {
var G__37987 = seq__37607;
var G__37988 = chunk__37609;
var G__37989 = count__37610;
var G__37990 = (i__37611 + (1));
seq__37607 = G__37987;
chunk__37609 = G__37988;
count__37610 = G__37989;
i__37611 = G__37990;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37607);
if(temp__5720__auto__){
var seq__37607__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37607__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37607__$1);
var G__37991 = cljs.core.chunk_rest(seq__37607__$1);
var G__37992 = c__4550__auto__;
var G__37993 = cljs.core.count(c__4550__auto__);
var G__37994 = (0);
seq__37607 = G__37991;
chunk__37609 = G__37992;
count__37610 = G__37993;
i__37611 = G__37994;
continue;
} else {
var path = cljs.core.first(seq__37607__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37681_37997 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37684_37998 = null;
var count__37685_37999 = (0);
var i__37686_38000 = (0);
while(true){
if((i__37686_38000 < count__37685_37999)){
var node_38002 = chunk__37684_37998.cljs$core$IIndexed$_nth$arity$2(null,i__37686_38000);
var path_match_38003 = shadow.cljs.devtools.client.browser.match_paths(node_38002.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38003)){
var new_link_38005 = (function (){var G__37692 = node_38002.cloneNode(true);
G__37692.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38003),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37692;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38003], 0));

goog.dom.insertSiblingAfter(new_link_38005,node_38002);

goog.dom.removeNode(node_38002);


var G__38007 = seq__37681_37997;
var G__38008 = chunk__37684_37998;
var G__38009 = count__37685_37999;
var G__38010 = (i__37686_38000 + (1));
seq__37681_37997 = G__38007;
chunk__37684_37998 = G__38008;
count__37685_37999 = G__38009;
i__37686_38000 = G__38010;
continue;
} else {
var G__38012 = seq__37681_37997;
var G__38013 = chunk__37684_37998;
var G__38014 = count__37685_37999;
var G__38015 = (i__37686_38000 + (1));
seq__37681_37997 = G__38012;
chunk__37684_37998 = G__38013;
count__37685_37999 = G__38014;
i__37686_38000 = G__38015;
continue;
}
} else {
var temp__5720__auto___38016__$1 = cljs.core.seq(seq__37681_37997);
if(temp__5720__auto___38016__$1){
var seq__37681_38017__$1 = temp__5720__auto___38016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37681_38017__$1)){
var c__4550__auto___38018 = cljs.core.chunk_first(seq__37681_38017__$1);
var G__38019 = cljs.core.chunk_rest(seq__37681_38017__$1);
var G__38020 = c__4550__auto___38018;
var G__38021 = cljs.core.count(c__4550__auto___38018);
var G__38022 = (0);
seq__37681_37997 = G__38019;
chunk__37684_37998 = G__38020;
count__37685_37999 = G__38021;
i__37686_38000 = G__38022;
continue;
} else {
var node_38023 = cljs.core.first(seq__37681_38017__$1);
var path_match_38028 = shadow.cljs.devtools.client.browser.match_paths(node_38023.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38028)){
var new_link_38031 = (function (){var G__37693 = node_38023.cloneNode(true);
G__37693.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38028),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37693;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38028], 0));

goog.dom.insertSiblingAfter(new_link_38031,node_38023);

goog.dom.removeNode(node_38023);


var G__38040 = cljs.core.next(seq__37681_38017__$1);
var G__38041 = null;
var G__38042 = (0);
var G__38043 = (0);
seq__37681_37997 = G__38040;
chunk__37684_37998 = G__38041;
count__37685_37999 = G__38042;
i__37686_38000 = G__38043;
continue;
} else {
var G__38048 = cljs.core.next(seq__37681_38017__$1);
var G__38049 = null;
var G__38050 = (0);
var G__38051 = (0);
seq__37681_37997 = G__38048;
chunk__37684_37998 = G__38049;
count__37685_37999 = G__38050;
i__37686_38000 = G__38051;
continue;
}
}
} else {
}
}
break;
}


var G__38053 = cljs.core.next(seq__37607__$1);
var G__38054 = null;
var G__38055 = (0);
var G__38056 = (0);
seq__37607 = G__38053;
chunk__37609 = G__38054;
count__37610 = G__38055;
i__37611 = G__38056;
continue;
} else {
var G__38061 = cljs.core.next(seq__37607__$1);
var G__38062 = null;
var G__38063 = (0);
var G__38064 = (0);
seq__37607 = G__38061;
chunk__37609 = G__38062;
count__37610 = G__38063;
i__37611 = G__38064;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37698){
var map__37699 = p__37698;
var map__37699__$1 = (((((!((map__37699 == null))))?(((((map__37699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37699):map__37699);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37699__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37699,map__37699__$1,id,js){
return (function (){
return eval(js);
});})(map__37699,map__37699__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37705){
var map__37706 = p__37705;
var map__37706__$1 = (((((!((map__37706 == null))))?(((((map__37706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37706):map__37706);
var msg = map__37706__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37706,map__37706__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37711){
var map__37712 = p__37711;
var map__37712__$1 = (((((!((map__37712 == null))))?(((((map__37712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37712):map__37712);
var src = map__37712__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37706,map__37706__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37706,map__37706__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37706,map__37706__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37720){
var map__37722 = p__37720;
var map__37722__$1 = (((((!((map__37722 == null))))?(((((map__37722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37722):map__37722);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37722__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37722__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37722,map__37722__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37722,map__37722__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37725){
var map__37727 = p__37725;
var map__37727__$1 = (((((!((map__37727 == null))))?(((((map__37727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37727):map__37727);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37727__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37734){
var map__37735 = p__37734;
var map__37735__$1 = (((((!((map__37735 == null))))?(((((map__37735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37735):map__37735);
var msg = map__37735__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37750 = type;
var G__37750__$1 = (((G__37750 instanceof cljs.core.Keyword))?G__37750.fqn:null);
switch (G__37750__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37756 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37757 = ((function (G__37756){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37756))
;
var G__37758 = "POST";
var G__37759 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37760 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37756,G__37757,G__37758,G__37759,G__37760);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37763){var e = e37763;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___38141 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___38141)){
var s_38142 = temp__5720__auto___38141;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_38142.onclose = ((function (s_38142,temp__5720__auto___38141){
return (function (e){
return null;
});})(s_38142,temp__5720__auto___38141))
;

s_38142.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

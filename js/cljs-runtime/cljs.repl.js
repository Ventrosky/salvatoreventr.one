goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31729){
var map__31730 = p__31729;
var map__31730__$1 = (((((!((map__31730 == null))))?(((((map__31730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31730):map__31730);
var m = map__31730__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31730__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31730__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
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
var seq__31732_31841 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31733_31842 = null;
var count__31734_31843 = (0);
var i__31735_31844 = (0);
while(true){
if((i__31735_31844 < count__31734_31843)){
var f_31848 = chunk__31733_31842.cljs$core$IIndexed$_nth$arity$2(null,i__31735_31844);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31848], 0));


var G__31849 = seq__31732_31841;
var G__31850 = chunk__31733_31842;
var G__31851 = count__31734_31843;
var G__31852 = (i__31735_31844 + (1));
seq__31732_31841 = G__31849;
chunk__31733_31842 = G__31850;
count__31734_31843 = G__31851;
i__31735_31844 = G__31852;
continue;
} else {
var temp__5720__auto___31853 = cljs.core.seq(seq__31732_31841);
if(temp__5720__auto___31853){
var seq__31732_31854__$1 = temp__5720__auto___31853;
if(cljs.core.chunked_seq_QMARK_(seq__31732_31854__$1)){
var c__4550__auto___31855 = cljs.core.chunk_first(seq__31732_31854__$1);
var G__31856 = cljs.core.chunk_rest(seq__31732_31854__$1);
var G__31857 = c__4550__auto___31855;
var G__31858 = cljs.core.count(c__4550__auto___31855);
var G__31859 = (0);
seq__31732_31841 = G__31856;
chunk__31733_31842 = G__31857;
count__31734_31843 = G__31858;
i__31735_31844 = G__31859;
continue;
} else {
var f_31860 = cljs.core.first(seq__31732_31854__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31860], 0));


var G__31861 = cljs.core.next(seq__31732_31854__$1);
var G__31862 = null;
var G__31863 = (0);
var G__31864 = (0);
seq__31732_31841 = G__31861;
chunk__31733_31842 = G__31862;
count__31734_31843 = G__31863;
i__31735_31844 = G__31864;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31865 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31865], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31865)))?cljs.core.second(arglists_31865):arglists_31865)], 0));
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
var seq__31736_31866 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31737_31867 = null;
var count__31738_31868 = (0);
var i__31739_31869 = (0);
while(true){
if((i__31739_31869 < count__31738_31868)){
var vec__31750_31872 = chunk__31737_31867.cljs$core$IIndexed$_nth$arity$2(null,i__31739_31869);
var name_31873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31750_31872,(0),null);
var map__31753_31874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31750_31872,(1),null);
var map__31753_31875__$1 = (((((!((map__31753_31874 == null))))?(((((map__31753_31874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31753_31874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31753_31874):map__31753_31874);
var doc_31876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31753_31875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31753_31875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31873], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31877], 0));

if(cljs.core.truth_(doc_31876)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31876], 0));
} else {
}


var G__31881 = seq__31736_31866;
var G__31882 = chunk__31737_31867;
var G__31883 = count__31738_31868;
var G__31884 = (i__31739_31869 + (1));
seq__31736_31866 = G__31881;
chunk__31737_31867 = G__31882;
count__31738_31868 = G__31883;
i__31739_31869 = G__31884;
continue;
} else {
var temp__5720__auto___31885 = cljs.core.seq(seq__31736_31866);
if(temp__5720__auto___31885){
var seq__31736_31887__$1 = temp__5720__auto___31885;
if(cljs.core.chunked_seq_QMARK_(seq__31736_31887__$1)){
var c__4550__auto___31888 = cljs.core.chunk_first(seq__31736_31887__$1);
var G__31889 = cljs.core.chunk_rest(seq__31736_31887__$1);
var G__31890 = c__4550__auto___31888;
var G__31891 = cljs.core.count(c__4550__auto___31888);
var G__31892 = (0);
seq__31736_31866 = G__31889;
chunk__31737_31867 = G__31890;
count__31738_31868 = G__31891;
i__31739_31869 = G__31892;
continue;
} else {
var vec__31755_31893 = cljs.core.first(seq__31736_31887__$1);
var name_31894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31755_31893,(0),null);
var map__31758_31895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31755_31893,(1),null);
var map__31758_31896__$1 = (((((!((map__31758_31895 == null))))?(((((map__31758_31895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31758_31895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31758_31895):map__31758_31895);
var doc_31897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31758_31896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31758_31896__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31894], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31898], 0));

if(cljs.core.truth_(doc_31897)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31897], 0));
} else {
}


var G__31899 = cljs.core.next(seq__31736_31887__$1);
var G__31900 = null;
var G__31901 = (0);
var G__31902 = (0);
seq__31736_31866 = G__31899;
chunk__31737_31867 = G__31900;
count__31738_31868 = G__31901;
i__31739_31869 = G__31902;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31760 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31761 = null;
var count__31762 = (0);
var i__31763 = (0);
while(true){
if((i__31763 < count__31762)){
var role = chunk__31761.cljs$core$IIndexed$_nth$arity$2(null,i__31763);
var temp__5720__auto___31906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31906__$1)){
var spec_31907 = temp__5720__auto___31906__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31907)], 0));
} else {
}


var G__31908 = seq__31760;
var G__31909 = chunk__31761;
var G__31910 = count__31762;
var G__31911 = (i__31763 + (1));
seq__31760 = G__31908;
chunk__31761 = G__31909;
count__31762 = G__31910;
i__31763 = G__31911;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31760);
if(temp__5720__auto____$1){
var seq__31760__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31760__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31760__$1);
var G__31912 = cljs.core.chunk_rest(seq__31760__$1);
var G__31913 = c__4550__auto__;
var G__31914 = cljs.core.count(c__4550__auto__);
var G__31915 = (0);
seq__31760 = G__31912;
chunk__31761 = G__31913;
count__31762 = G__31914;
i__31763 = G__31915;
continue;
} else {
var role = cljs.core.first(seq__31760__$1);
var temp__5720__auto___31916__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31916__$2)){
var spec_31917 = temp__5720__auto___31916__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31917)], 0));
} else {
}


var G__31918 = cljs.core.next(seq__31760__$1);
var G__31919 = null;
var G__31920 = (0);
var G__31921 = (0);
seq__31760 = G__31918;
chunk__31761 = G__31919;
count__31762 = G__31920;
i__31763 = G__31921;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
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
var G__31922 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31923 = cljs.core.ex_cause(t);
via = G__31922;
t = G__31923;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
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
var map__31766 = datafied_throwable;
var map__31766__$1 = (((((!((map__31766 == null))))?(((((map__31766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31766):map__31766);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31766__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31766__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31766__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31767 = cljs.core.last(via);
var map__31767__$1 = (((((!((map__31767 == null))))?(((((map__31767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31767):map__31767);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31768 = data;
var map__31768__$1 = (((((!((map__31768 == null))))?(((((map__31768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31768):map__31768);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31768__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31768__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31768__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31769 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31769__$1 = (((((!((map__31769 == null))))?(((((map__31769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31769):map__31769);
var top_data = map__31769__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31769__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31774 = phase;
var G__31774__$1 = (((G__31774 instanceof cljs.core.Keyword))?G__31774.fqn:null);
switch (G__31774__$1) {
case "read-source":
var map__31775 = data;
var map__31775__$1 = (((((!((map__31775 == null))))?(((((map__31775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31775):map__31775);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31777 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31777__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31777,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31777);
var G__31777__$2 = (cljs.core.truth_((function (){var fexpr__31778 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31778.cljs$core$IFn$_invoke$arity$1 ? fexpr__31778.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31778.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31777__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31777__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31777__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31777__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31779 = top_data;
var G__31779__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31779,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31779);
var G__31779__$2 = (cljs.core.truth_((function (){var fexpr__31780 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31780.cljs$core$IFn$_invoke$arity$1 ? fexpr__31780.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31780.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31779__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31779__$1);
var G__31779__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31779__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31779__$2);
var G__31779__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31779__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31779__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31779__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31779__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31781 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31781,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31781,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31781,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31781,(3),null);
var G__31784 = top_data;
var G__31784__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31784,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31784);
var G__31784__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31784__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31784__$1);
var G__31784__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31784__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31784__$2);
var G__31784__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31784__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31784__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31784__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31784__$4;
}

break;
case "execution":
var vec__31785 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31785,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31785,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31785,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31785,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31785,source__$1,method,file,line,G__31774,G__31774__$1,map__31766,map__31766__$1,via,trace,phase,map__31767,map__31767__$1,type,message,data,map__31768,map__31768__$1,problems,fn,caller,map__31769,map__31769__$1,top_data,source){
return (function (p1__31765_SHARP_){
var or__4131__auto__ = (p1__31765_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31789 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31789.cljs$core$IFn$_invoke$arity$1 ? fexpr__31789.cljs$core$IFn$_invoke$arity$1(p1__31765_SHARP_) : fexpr__31789.call(null,p1__31765_SHARP_));
}
});})(vec__31785,source__$1,method,file,line,G__31774,G__31774__$1,map__31766,map__31766__$1,via,trace,phase,map__31767,map__31767__$1,type,message,data,map__31768,map__31768__$1,problems,fn,caller,map__31769,map__31769__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31790 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31790__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31790,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31790);
var G__31790__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31790__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31790__$1);
var G__31790__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31790__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31790__$2);
var G__31790__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31790__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31790__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31790__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31790__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31774__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31794){
var map__31795 = p__31794;
var map__31795__$1 = (((((!((map__31795 == null))))?(((((map__31795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31795):map__31795);
var triage_data = map__31795__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31795__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31799 = phase;
var G__31799__$1 = (((G__31799 instanceof cljs.core.Keyword))?G__31799.fqn:null);
switch (G__31799__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31800 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31801 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31802 = loc;
var G__31803 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31804_31973 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31805_31974 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31806_31975 = true;
var _STAR_print_fn_STAR__temp_val__31807_31976 = ((function (_STAR_print_newline_STAR__orig_val__31804_31973,_STAR_print_fn_STAR__orig_val__31805_31974,_STAR_print_newline_STAR__temp_val__31806_31975,sb__4661__auto__,G__31800,G__31801,G__31802,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31804_31973,_STAR_print_fn_STAR__orig_val__31805_31974,_STAR_print_newline_STAR__temp_val__31806_31975,sb__4661__auto__,G__31800,G__31801,G__31802,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31806_31975;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31807_31976;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31804_31973,_STAR_print_fn_STAR__orig_val__31805_31974,_STAR_print_newline_STAR__temp_val__31806_31975,_STAR_print_fn_STAR__temp_val__31807_31976,sb__4661__auto__,G__31800,G__31801,G__31802,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31804_31973,_STAR_print_fn_STAR__orig_val__31805_31974,_STAR_print_newline_STAR__temp_val__31806_31975,_STAR_print_fn_STAR__temp_val__31807_31976,sb__4661__auto__,G__31800,G__31801,G__31802,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31792_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31792_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31804_31973,_STAR_print_fn_STAR__orig_val__31805_31974,_STAR_print_newline_STAR__temp_val__31806_31975,_STAR_print_fn_STAR__temp_val__31807_31976,sb__4661__auto__,G__31800,G__31801,G__31802,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31804_31973,_STAR_print_fn_STAR__orig_val__31805_31974,_STAR_print_newline_STAR__temp_val__31806_31975,_STAR_print_fn_STAR__temp_val__31807_31976,sb__4661__auto__,G__31800,G__31801,G__31802,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31805_31974;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31804_31973;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31800,G__31801,G__31802,G__31803) : format.call(null,G__31800,G__31801,G__31802,G__31803));

break;
case "macroexpansion":
var G__31808 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31809 = cause_type;
var G__31810 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31811 = loc;
var G__31812 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31808,G__31809,G__31810,G__31811,G__31812) : format.call(null,G__31808,G__31809,G__31810,G__31811,G__31812));

break;
case "compile-syntax-check":
var G__31813 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31814 = cause_type;
var G__31815 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31816 = loc;
var G__31817 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31813,G__31814,G__31815,G__31816,G__31817) : format.call(null,G__31813,G__31814,G__31815,G__31816,G__31817));

break;
case "compilation":
var G__31821 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31822 = cause_type;
var G__31823 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31824 = loc;
var G__31825 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31821,G__31822,G__31823,G__31824,G__31825) : format.call(null,G__31821,G__31822,G__31823,G__31824,G__31825));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31826 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31827 = symbol;
var G__31828 = loc;
var G__31829 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31830_31981 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31831_31982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31832_31983 = true;
var _STAR_print_fn_STAR__temp_val__31833_31984 = ((function (_STAR_print_newline_STAR__orig_val__31830_31981,_STAR_print_fn_STAR__orig_val__31831_31982,_STAR_print_newline_STAR__temp_val__31832_31983,sb__4661__auto__,G__31826,G__31827,G__31828,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31830_31981,_STAR_print_fn_STAR__orig_val__31831_31982,_STAR_print_newline_STAR__temp_val__31832_31983,sb__4661__auto__,G__31826,G__31827,G__31828,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31832_31983;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31833_31984;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31830_31981,_STAR_print_fn_STAR__orig_val__31831_31982,_STAR_print_newline_STAR__temp_val__31832_31983,_STAR_print_fn_STAR__temp_val__31833_31984,sb__4661__auto__,G__31826,G__31827,G__31828,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31830_31981,_STAR_print_fn_STAR__orig_val__31831_31982,_STAR_print_newline_STAR__temp_val__31832_31983,_STAR_print_fn_STAR__temp_val__31833_31984,sb__4661__auto__,G__31826,G__31827,G__31828,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31793_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31793_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31830_31981,_STAR_print_fn_STAR__orig_val__31831_31982,_STAR_print_newline_STAR__temp_val__31832_31983,_STAR_print_fn_STAR__temp_val__31833_31984,sb__4661__auto__,G__31826,G__31827,G__31828,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31830_31981,_STAR_print_fn_STAR__orig_val__31831_31982,_STAR_print_newline_STAR__temp_val__31832_31983,_STAR_print_fn_STAR__temp_val__31833_31984,sb__4661__auto__,G__31826,G__31827,G__31828,G__31799,G__31799__$1,loc,class_name,simple_class,cause_type,format,map__31795,map__31795__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31831_31982;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31830_31981;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31826,G__31827,G__31828,G__31829) : format.call(null,G__31826,G__31827,G__31828,G__31829));
} else {
var G__31834 = "Execution error%s at %s(%s).\n%s\n";
var G__31835 = cause_type;
var G__31836 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31837 = loc;
var G__31838 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31834,G__31835,G__31836,G__31837,G__31838) : format.call(null,G__31834,G__31835,G__31836,G__31837,G__31838));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31799__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

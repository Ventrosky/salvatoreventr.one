goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25569){
var vec__25570 = p__25569;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25570,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25574 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25574,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25574,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25574,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25582 = arguments.length;
switch (G__25582) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25622_25734 = clojure.data.equality_partition;
var G__25623_25735 = "null";
var G__25624_25736 = ((function (G__25622_25734,G__25623_25735){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25622_25734,G__25623_25735))
;
goog.object.set(G__25622_25734,G__25623_25735,G__25624_25736);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25625_25739 = clojure.data.equality_partition;
var G__25626_25740 = "string";
var G__25627_25741 = ((function (G__25625_25739,G__25626_25740){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25625_25739,G__25626_25740))
;
goog.object.set(G__25625_25739,G__25626_25740,G__25627_25741);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25628_25742 = clojure.data.equality_partition;
var G__25629_25743 = "number";
var G__25630_25744 = ((function (G__25628_25742,G__25629_25743){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25628_25742,G__25629_25743))
;
goog.object.set(G__25628_25742,G__25629_25743,G__25630_25744);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25634_25753 = clojure.data.equality_partition;
var G__25635_25754 = "array";
var G__25636_25755 = ((function (G__25634_25753,G__25635_25754){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__25634_25753,G__25635_25754))
;
goog.object.set(G__25634_25753,G__25635_25754,G__25636_25755);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25638_25756 = clojure.data.equality_partition;
var G__25639_25757 = "function";
var G__25640_25758 = ((function (G__25638_25756,G__25639_25757){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25638_25756,G__25639_25757))
;
goog.object.set(G__25638_25756,G__25639_25757,G__25640_25758);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25641_25760 = clojure.data.equality_partition;
var G__25642_25761 = "boolean";
var G__25643_25762 = ((function (G__25641_25760,G__25642_25761){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25641_25760,G__25642_25761))
;
goog.object.set(G__25641_25760,G__25642_25761,G__25643_25762);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25644_25763 = clojure.data.equality_partition;
var G__25645_25764 = "_";
var G__25646_25765 = ((function (G__25644_25763,G__25645_25764){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__25644_25763,G__25645_25764))
;
goog.object.set(G__25644_25763,G__25645_25764,G__25646_25765);
goog.object.set(clojure.data.Diff,"null",true);

var G__25652_25779 = clojure.data.diff_similar;
var G__25653_25780 = "null";
var G__25654_25781 = ((function (G__25652_25779,G__25653_25780){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25652_25779,G__25653_25780))
;
goog.object.set(G__25652_25779,G__25653_25780,G__25654_25781);

goog.object.set(clojure.data.Diff,"string",true);

var G__25659_25790 = clojure.data.diff_similar;
var G__25660_25791 = "string";
var G__25661_25792 = ((function (G__25659_25790,G__25660_25791){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25659_25790,G__25660_25791))
;
goog.object.set(G__25659_25790,G__25660_25791,G__25661_25792);

goog.object.set(clojure.data.Diff,"number",true);

var G__25668_25794 = clojure.data.diff_similar;
var G__25669_25795 = "number";
var G__25670_25796 = ((function (G__25668_25794,G__25669_25795){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25668_25794,G__25669_25795))
;
goog.object.set(G__25668_25794,G__25669_25795,G__25670_25796);

goog.object.set(clojure.data.Diff,"array",true);

var G__25671_25801 = clojure.data.diff_similar;
var G__25672_25802 = "array";
var G__25673_25803 = ((function (G__25671_25801,G__25672_25802){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25671_25801,G__25672_25802))
;
goog.object.set(G__25671_25801,G__25672_25802,G__25673_25803);

goog.object.set(clojure.data.Diff,"function",true);

var G__25674_25804 = clojure.data.diff_similar;
var G__25675_25805 = "function";
var G__25676_25806 = ((function (G__25674_25804,G__25675_25805){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25674_25804,G__25675_25805))
;
goog.object.set(G__25674_25804,G__25675_25805,G__25676_25806);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25677_25810 = clojure.data.diff_similar;
var G__25678_25811 = "boolean";
var G__25679_25812 = ((function (G__25677_25810,G__25678_25811){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25677_25810,G__25678_25811))
;
goog.object.set(G__25677_25810,G__25678_25811,G__25679_25812);

goog.object.set(clojure.data.Diff,"_",true);

var G__25680_25815 = clojure.data.diff_similar;
var G__25681_25816 = "_";
var G__25682_25817 = ((function (G__25680_25815,G__25681_25816){
return (function (a,b){
var fexpr__25684 = (function (){var G__25685 = clojure.data.equality_partition(a);
var G__25685__$1 = (((G__25685 instanceof cljs.core.Keyword))?G__25685.fqn:null);
switch (G__25685__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25685__$1)].join('')));

}
})();
return (fexpr__25684.cljs$core$IFn$_invoke$arity$2 ? fexpr__25684.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25684.call(null,a,b));
});})(G__25680_25815,G__25681_25816))
;
goog.object.set(G__25680_25815,G__25681_25816,G__25682_25817);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map

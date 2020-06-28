goog.provide('main.components.header');
goog.require('cljs.core');
goog.require('main.state');
goog.require('main.helpers');
main.components.header.personal_detail = (function main$components$header$personal_detail(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27690 = arguments.length;
var i__4731__auto___27691 = (0);
while(true){
if((i__4731__auto___27691 < len__4730__auto___27690)){
args__4736__auto__.push((arguments[i__4731__auto___27691]));

var G__27692 = (i__4731__auto___27691 + (1));
i__4731__auto___27691 = G__27692;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return main.components.header.personal_detail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

main.components.header.personal_detail.cljs$core$IFn$_invoke$arity$variadic = (function (small,size,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["col-md-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.personal-details","div.personal-details",1219193210),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),main.helpers.add_keys(children)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),small], null)], null)], null);
});

main.components.header.personal_detail.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
main.components.header.personal_detail.cljs$lang$applyTo = (function (seq27631){
var G__27632 = cljs.core.first(seq27631);
var seq27631__$1 = cljs.core.next(seq27631);
var G__27633 = cljs.core.first(seq27631__$1);
var seq27631__$2 = cljs.core.next(seq27631__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27632,G__27633,seq27631__$2);
});

main.components.header.header = (function main$components$header$header(){
var bday = "APRIL, 1990";
var nation = "ITALY";
var nationality = "ITALIAN ";
var scn_language = ", ENGLISH ";
var bio = "My name is Salvatore Ventrone, I am a Software Developer and Tutor. Currently enrolled in the BSc Digital Humanities program of the University of Pisa. I love teaching programming subjects and inspire young people learning to code. My interests are FLOSS, programming languages, technology and privacy. Besides programming, I'm a videogames and boardgames enthusiast.";
return ((function (bday,nation,nationality,scn_language,bio){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-img","div.profile-img",891507637),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-responsive","img.img-responsive",1870698920),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/img-profile.jpg",new cljs.core.Keyword(null,"alt","alt",-3214426),"profile img"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name-wrapper","div.name-wrapper",-318554633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.name","h1.name",1551166597),"Salvatore Ventrone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Software Developer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),bio], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),main.components.header.personal_detail.cljs$core$IFn$_invoke$arity$variadic("BIRTH",(3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),bday], null)], 0)),main.components.header.personal_detail.cljs$core$IFn$_invoke$arity$variadic("NATIONALITY",(3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),nation], null)], 0)),main.components.header.personal_detail.cljs$core$IFn$_invoke$arity$variadic("LANGUAGE",(6),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),nationality], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.grey","span.grey",472530116),"(NATIVE)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),scn_language], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.grey","span.grey",472530116),"(FLUENT)"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.social-icon","ul.social-icon",692823524),(function (){var iter__4523__auto__ = ((function (bday,nation,nationality,scn_language,bio){
return (function main$components$header$header_$_iter__27668(s__27669){
return (new cljs.core.LazySeq(null,((function (bday,nation,nationality,scn_language,bio){
return (function (){
var s__27669__$1 = s__27669;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__27669__$1);
if(temp__5720__auto__){
var s__27669__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27669__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__27669__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__27671 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__27670 = (0);
while(true){
if((i__27670 < size__4522__auto__)){
var map__27676 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__27670);
var map__27676__$1 = (((((!((map__27676 == null))))?(((((map__27676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27676):map__27676);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27676__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27676__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27676__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append(b__27671,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),icon], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["fa fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),text], null)], null));

var G__27705 = (i__27670 + (1));
i__27670 = G__27705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27671),main$components$header$header_$_iter__27668(cljs.core.chunk_rest(s__27669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27671),null);
}
} else {
var map__27683 = cljs.core.first(s__27669__$2);
var map__27683__$1 = (((((!((map__27683 == null))))?(((((map__27683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27683):map__27683);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27683__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27683__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27683__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),icon], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["fa fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),text], null)], null),main$components$header$header_$_iter__27668(cljs.core.rest(s__27669__$2)));
}
} else {
return null;
}
break;
}
});})(bday,nation,nationality,scn_language,bio))
,null,null));
});})(bday,nation,nationality,scn_language,bio))
;
return iter__4523__auto__(cljs.core.vals(cljs.core.deref(main.state.socials)));
})()], null)], null)], null)], null)], null);
});
;})(bday,nation,nationality,scn_language,bio))
});

//# sourceMappingURL=main.components.header.js.map

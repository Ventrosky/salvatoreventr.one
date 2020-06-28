goog.provide('main.components.treemap');
goog.require('cljs.core');
goog.require('main.state');
goog.require('cljsjs.d3');
goog.require('main.components.section');
goog.require('ajax.core');
goog.require('clojure.string');
main.components.treemap.margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"right","right",-452581833),(10),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(10),new cljs.core.Keyword(null,"left","left",-399115937),(10)], null);
main.components.treemap.width = (((450) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(main.components.treemap.margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(main.components.treemap.margin));
main.components.treemap.height = (((450) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(main.components.treemap.margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(main.components.treemap.margin));
main.components.treemap.loading = (function main$components$treemap$loading(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"gitload",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not(cljs.core.deref(main.state.load)))?"invisibile":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center.loadtxt","p.text-center.loadtxt",166851071),"Loading..."], null)], null);
});
main.components.treemap.content = (function main$components$treemap$content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),main.components.treemap.loading(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"treemap"], null)], null)], null);
});
main.components.treemap.treemap = (function main$components$treemap$treemap(){
return main.components.section.section("treemap-section","Recent Activities",main.components.treemap.content());
});
main.components.treemap.fetch_link_BANG_ = (function main$components$treemap$fetch_link_BANG_(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://sleepy-chamber-33613.herokuapp.com/streemap?name=Ventrosky",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (data){
var svg = d3.select("#treemap").append("svg").attr("class","center-block").attr("viewBox",cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),main.components.treemap.width,main.components.treemap.height], null))).attr("id","svg-treemap").append("g").attr("transform","translate(0,0)");
var root = d3.hierarchy(JSON.parse(data)).sum(((function (svg){
return (function (p1__27642_SHARP_){
return p1__27642_SHARP_.value;
});})(svg))
);
var tooltip = d3.select("#treemap").append("div").style("opacity",(0)).attr("class","tooltip");
var mouseover = ((function (svg,root,tooltip){
return (function (){
return tooltip.style("opacity",(1));
});})(svg,root,tooltip))
;
var mousemove = ((function (svg,root,tooltip,mouseover){
return (function (e){
var this$ = this;
var evts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$,svg,root,tooltip,mouseover){
return (function (p1__27644_SHARP_,p2__27645_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27644_SHARP_),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.first(p2__27645_SHARP_),/Event$/,"")),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p2__27645_SHARP_))].join('');
});})(this$,svg,root,tooltip,mouseover))
,"",(function (){var fexpr__27678 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(e.data);
return (fexpr__27678.cljs$core$IFn$_invoke$arity$1 ? fexpr__27678.cljs$core$IFn$_invoke$arity$1("evts") : fexpr__27678.call(null,"evts"));
})());
var x1 = cljs.core.first(d3.mouse(this$));
var y1 = cljs.core.second(d3.mouse(this$));
var bounds = document.getElementById("treemap").getBoundingClientRect();
var x2 = (function (){var fexpr__27682 = ((function (evts,x1,y1,bounds,this$,svg,root,tooltip,mouseover){
return (function (p1__27653_SHARP_){
return ((p1__27653_SHARP_ / main.components.treemap.width) * bounds.width);
});})(evts,x1,y1,bounds,this$,svg,root,tooltip,mouseover))
;
return fexpr__27682(x1);
})();
var y2 = (function (){var fexpr__27685 = ((function (evts,x1,y1,bounds,x2,this$,svg,root,tooltip,mouseover){
return (function (p1__27654_SHARP_){
return ((p1__27654_SHARP_ / main.components.treemap.height) * bounds.height);
});})(evts,x1,y1,bounds,x2,this$,svg,root,tooltip,mouseover))
;
return fexpr__27685(y1);
})();
d3.select(this$).style("stroke","#006800");

return tooltip.html(["<span id=","repo",">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.data.name),"</span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(evts)].join('')).style("left",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x1 > (main.components.treemap.width / (2))))?(x2 - (190)):(x2 + (60)))),"px"].join('')).style("top",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((y2 - (80))),"px"].join(''));
});})(svg,root,tooltip,mouseover))
;
var mouseleave = ((function (svg,root,tooltip,mouseover,mousemove){
return (function (){
var this$ = this;
tooltip.style("opacity",(0));

return d3.select(this$).style("stroke","#989898");
});})(svg,root,tooltip,mouseover,mousemove))
;
var grepo = svg.selectAll("g").data(root.leaves()).enter().append("g");
var fader = ((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo){
return (function (p1__27655_SHARP_){
var fexpr__27693 = d3.interpolateRgb(p1__27655_SHARP_,"#fff");
return (fexpr__27693.cljs$core$IFn$_invoke$arity$1 ? fexpr__27693.cljs$core$IFn$_invoke$arity$1(0.2) : fexpr__27693.call(null,0.2));
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo))
;
var color = d3.scaleSequential().domain(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader){
return (function (p1__27656_SHARP_){
return p1__27656_SHARP_.value;
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader))
,root.leaves()))], null))).interpolator(d3.interpolateRgb(d3.rgb("#8DB255"),d3.rgb("#006442")));
cljs.core.reset_BANG_(main.state.data,data);

cljs.core.reset_BANG_(main.state.load,false);

var fexpr__27696_27707 = d3.treemap().size(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.treemap.width,main.components.treemap.height], null))).padding((2));
(fexpr__27696_27707.cljs$core$IFn$_invoke$arity$1 ? fexpr__27696_27707.cljs$core$IFn$_invoke$arity$1(root) : fexpr__27696_27707.call(null,root));

grepo.append("rect").attr("x",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27657_SHARP_){
return p1__27657_SHARP_.x0;
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).attr("y",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27658_SHARP_){
return p1__27658_SHARP_.y0;
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).attr("width",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27659_SHARP_){
return (p1__27659_SHARP_.x1 - p1__27659_SHARP_.x0);
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).attr("height",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27660_SHARP_){
return (p1__27660_SHARP_.y1 - p1__27660_SHARP_.y0);
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).attr("stroke","#989898").attr("cursor","pointer").on("click",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (e){
return window.open(e.data.url,"_blank");
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).on("mouseover",mouseover).on("mousemove",mousemove).on("mouseleave",mouseleave).attr("fill",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27661_SHARP_){
var G__27698 = p1__27661_SHARP_.value;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__27698) : color.call(null,G__27698));
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
);

grepo.append("text").attr("x",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27662_SHARP_){
return (p1__27662_SHARP_.x0 + (2));
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).attr("y",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27663_SHARP_){
return (p1__27663_SHARP_.y0 + (12));
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).text(((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27664_SHARP_){
return clojure.string.replace(p1__27664_SHARP_.data.name,/^[^\/]+\//,"");
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).attr("font-size","0.48em").attr("width",((function (svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color){
return (function (p1__27665_SHARP_){
return (p1__27665_SHARP_.x1 - p1__27665_SHARP_.x0);
});})(svg,root,tooltip,mouseover,mousemove,mouseleave,grepo,fader,color))
).attr("fill","white").attr("class","truncate");

return true;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__27699){
var map__27700 = p__27699;
var map__27700__$1 = (((((!((map__27700 == null))))?(((((map__27700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27700):map__27700);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27700__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27700__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
setTimeout(((function (map__27700,map__27700__$1,status,status_text){
return (function (){
return (main.components.treemap.fetch_link_BANG_.cljs$core$IFn$_invoke$arity$0 ? main.components.treemap.fetch_link_BANG_.cljs$core$IFn$_invoke$arity$0() : main.components.treemap.fetch_link_BANG_.call(null));
});})(map__27700,map__27700__$1,status,status_text))
,(5000));

return console.log("Error while fetching GitHub Activity! Retrying in 5 seconds...");
})], null)], 0));
});
main.components.treemap.append_svg = (function main$components$treemap$append_svg(){
try{return main.components.treemap.fetch_link_BANG_();
}catch (e27704){var e = e27704;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return false;
}});

//# sourceMappingURL=main.components.treemap.js.map

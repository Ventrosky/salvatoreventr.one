goog.provide('main.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('main.components.header');
goog.require('main.components.expertise');
goog.require('main.components.skills');
goog.require('main.components.experience');
goog.require('main.components.certificates');
goog.require('main.components.portfolio');
goog.require('main.components.contacts');
goog.require('main.components.footer');
goog.require('main.components.treemap');
goog.require('main.state');
main.core.not_mobile = (function main$core$not_mobile(){
return (cljs.core.re_find(/(iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec)/i,clojure.string.lower_case(navigator.userAgent)) == null);
});
main.core.app = (function main$core$app(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.expertise.expertise], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.skills.skills,"Working knowledge",cljs.core.vals(cljs.core.deref(main.state.working))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.skills.skills,"Basic knowledge",cljs.core.vals(cljs.core.deref(main.state.base))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.experience.experience,"Work Experience",(6),cljs.core.vals(cljs.core.deref(main.state.experience))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.experience.experience,"Education",(12),cljs.core.vals(cljs.core.deref(main.state.education))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.certificates.certificates], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.experience.experience,"Community Service",(4),cljs.core.vals(cljs.core.deref(main.state.extra))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.portfolio.portfolio], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.treemap.treemap], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.contacts.contacts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.components.footer.footer], null)], null);
});
main.core.start = (function main$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app], null),document.getElementById("app"));
});
main.core.main = (function main$core$main(){
main.core.start();

return main.components.treemap.append_svg();
});
goog.exportSymbol('main.core.main', main.core.main);

//# sourceMappingURL=main.core.js.map

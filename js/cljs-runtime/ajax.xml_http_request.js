goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__38282 = e.target.readyState;
var fexpr__38281 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__38281.cljs$core$IFn$_invoke$arity$1 ? fexpr__38281.cljs$core$IFn$_invoke$arity$1(G__38282) : fexpr__38281.call(null,G__38282));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__38303,handler){
var map__38304 = p__38303;
var map__38304__$1 = (((((!((map__38304 == null))))?(((((map__38304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38304):map__38304);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38304__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38304__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__38304,map__38304__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__38298_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__38298_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__38304,map__38304__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___38339 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___38339)){
var response_type_38340 = temp__5720__auto___38339;
this$__$1.responseType = cljs.core.name(response_type_38340);
} else {
}

var seq__38306_38342 = cljs.core.seq(headers);
var chunk__38307_38343 = null;
var count__38308_38344 = (0);
var i__38309_38345 = (0);
while(true){
if((i__38309_38345 < count__38308_38344)){
var vec__38317_38349 = chunk__38307_38343.cljs$core$IIndexed$_nth$arity$2(null,i__38309_38345);
var k_38350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317_38349,(0),null);
var v_38351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317_38349,(1),null);
this$__$1.setRequestHeader(k_38350,v_38351);


var G__38352 = seq__38306_38342;
var G__38353 = chunk__38307_38343;
var G__38354 = count__38308_38344;
var G__38355 = (i__38309_38345 + (1));
seq__38306_38342 = G__38352;
chunk__38307_38343 = G__38353;
count__38308_38344 = G__38354;
i__38309_38345 = G__38355;
continue;
} else {
var temp__5720__auto___38358 = cljs.core.seq(seq__38306_38342);
if(temp__5720__auto___38358){
var seq__38306_38359__$1 = temp__5720__auto___38358;
if(cljs.core.chunked_seq_QMARK_(seq__38306_38359__$1)){
var c__4550__auto___38361 = cljs.core.chunk_first(seq__38306_38359__$1);
var G__38362 = cljs.core.chunk_rest(seq__38306_38359__$1);
var G__38363 = c__4550__auto___38361;
var G__38364 = cljs.core.count(c__4550__auto___38361);
var G__38365 = (0);
seq__38306_38342 = G__38362;
chunk__38307_38343 = G__38363;
count__38308_38344 = G__38364;
i__38309_38345 = G__38365;
continue;
} else {
var vec__38327_38366 = cljs.core.first(seq__38306_38359__$1);
var k_38367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38327_38366,(0),null);
var v_38368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38327_38366,(1),null);
this$__$1.setRequestHeader(k_38367,v_38368);


var G__38369 = cljs.core.next(seq__38306_38359__$1);
var G__38370 = null;
var G__38371 = (0);
var G__38372 = (0);
seq__38306_38342 = G__38369;
chunk__38307_38343 = G__38370;
count__38308_38344 = G__38371;
i__38309_38345 = G__38372;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map

goog.provide('techniposter_frontend.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return techniposter_frontend.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request-movies","request-movies",1757713798),(function (p__41788,p__41789){
var map__41790 = p__41788;
var map__41790__$1 = (((((!((map__41790 == null))))?(((((map__41790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41790):map__41790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41790__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41791 = p__41789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41791,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/movie/all",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paginateCount","paginateCount",-1803662564),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"paginatePage","paginatePage",1808600771),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-movies-success","request-movies-success",90428078)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request-movies-success","request-movies-success",90428078),(function (db,p__41795){
var vec__41796 = p__41795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41796,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41796,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"moviesPagianted","moviesPagianted",-540733686),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request-movie","request-movie",619354009),(function (p__41799,p__41800){
var map__41801 = p__41799;
var map__41801__$1 = (((((!((map__41801 == null))))?(((((map__41801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41801):map__41801);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41801__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41802 = p__41800;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41802,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41802,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/movie/get",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-movie-success","request-movie-success",516373992)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request-movie-success","request-movie-success",516373992),(function (db,p__41806){
var vec__41807 = p__41806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41807,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41807,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"movie-detail","movie-detail",1028100329),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response));
}));
techniposter_frontend.events.reload_response = (function (){var G__41810 = new cljs.core.Keyword(null,"id","id",-1388402092);
var G__41811 = new cljs.core.Keyword(null,"reload-response","reload-response",530918174);
var G__41812 = new cljs.core.Keyword(null,"after","after",594996914);
var G__41813 = (function (context){
var G__41814_41835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-movies","request-movies",1757713798)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41814_41835) : re_frame.core.dispatch.call(null,G__41814_41835));

return context;
});
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__41810,G__41811,G__41812,G__41813) : re_frame.core.__GT_interceptor.call(null,G__41810,G__41811,G__41812,G__41813));
})();
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"next-page","next-page",-1024409719),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [techniposter_frontend.events.reload_response], null),(function (db,p__41815){
var vec__41816 = p__41815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41816,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"prev-page","prev-page",795786842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [techniposter_frontend.events.reload_response], null),(function (db,p__41819){
var vec__41820 = p__41819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41820,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-size","set-size",-1037159587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [techniposter_frontend.events.reload_response], null),(function (db,p__41823){
var vec__41824 = p__41823;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41824,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41824,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"size","size",1098693007),size);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-detail","close-detail",740053808),(function (db,p__41827){
var vec__41828 = p__41827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41828,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41828,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"movie-detail","movie-detail",1028100329),null);
}));

//# sourceMappingURL=techniposter_frontend.events.js.map

goog.provide('techniposter_frontend.views');
techniposter_frontend.views.poster_list_item = (function techniposter_frontend$views$poster_list_item(title,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poster-list-item","div.poster-list-item",-1431312053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__44246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-movie","request-movie",619354009),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44246) : re_frame.core.dispatch.call(null,G__44246));
})], null),(function (){var poster_path = (function (){var G__44247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","get-poster","techniposter-frontend.subs/get-poster",-1622773729),id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44247) : re_frame.core.subscribe.call(null,G__44247));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.poster","img.poster",-1456738606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref(poster_path)], null)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),title], null)], null);
});
techniposter_frontend.views.poster_list = (function techniposter_frontend$views$poster_list(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poster-list","div.poster-list",-1871248704),(function (){var iter__4529__auto__ = (function techniposter_frontend$views$poster_list_$_iter__44248(s__44249){
return (new cljs.core.LazySeq(null,(function (){
var s__44249__$1 = s__44249;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44249__$1);
if(temp__5735__auto__){
var s__44249__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44249__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44249__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44251 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44250 = (0);
while(true){
if((i__44250 < size__4528__auto__)){
var movie = cljs.core._nth(c__4527__auto__,i__44250);
cljs.core.chunk_append(b__44251,(function (){var map__44252 = movie;
var map__44252__$1 = (((((!((map__44252 == null))))?(((((map__44252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44252):map__44252);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44252__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44252__$1,new cljs.core.Keyword(null,"title","title",636505583));
return techniposter_frontend.views.poster_list_item(title,id);
})());

var G__44268 = (i__44250 + (1));
i__44250 = G__44268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44251),techniposter_frontend$views$poster_list_$_iter__44248(cljs.core.chunk_rest(s__44249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44251),null);
}
} else {
var movie = cljs.core.first(s__44249__$2);
return cljs.core.cons((function (){var map__44254 = movie;
var map__44254__$1 = (((((!((map__44254 == null))))?(((((map__44254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44254):map__44254);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44254__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44254__$1,new cljs.core.Keyword(null,"title","title",636505583));
return techniposter_frontend.views.poster_list_item(title,id);
})(),techniposter_frontend$views$poster_list_$_iter__44248(cljs.core.rest(s__44249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items);
})()], null);
});
techniposter_frontend.views.page_size_select = (function techniposter_frontend$views$page_size_select(sizes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.size-select","div.size-select",948096800),"items per page: ",(function (){var page_size = (function (){var G__44256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","page-size","techniposter-frontend.subs/page-size",-1223149047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44256) : re_frame.core.subscribe.call(null,G__44256));
})();
console.log(cljs.core.deref(page_size));

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.size-select-item","span.size-select-item",152417844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__44257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-size","set-size",-1037159587),size], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44257) : re_frame.core.dispatch.call(null,G__44257));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size,cljs.core.deref(page_size)))?"active":"")], null),size], null);
}),sizes);
})()], null);
});
techniposter_frontend.views.page_widget = (function techniposter_frontend$views$page_widget(){
var page = (function (){var G__44258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","page","techniposter-frontend.subs/page",75531437)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44258) : re_frame.core.subscribe.call(null,G__44258));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-widget","div.page-widget",-517319841),(((cljs.core.deref(page) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"prev",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__44259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-page","prev-page",795786842)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44259) : re_frame.core.dispatch.call(null,G__44259));
})], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Page ",cljs.core.deref(page)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__44260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-page","next-page",-1024409719)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44260) : re_frame.core.dispatch.call(null,G__44260));
})], null)], null),techniposter_frontend.views.page_size_select(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(12),(20),(40)], null))], null);
});
techniposter_frontend.views.detail_list_item = (function techniposter_frontend$views$detail_list_item(label,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.label","td.label",1697835274),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.value","td.value",-141360330),value], null)], null);
});
techniposter_frontend.views.detail_modal = (function techniposter_frontend$views$detail_modal(movie_details){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-wrapper","div.modal-wrapper",-721152186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var fexpr__44262 = (function (){var G__44263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-detail","close-detail",740053808)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44263) : re_frame.core.dispatch.call(null,G__44263));
})();
return (fexpr__44262.cljs$core$IFn$_invoke$arity$0 ? fexpr__44262.cljs$core$IFn$_invoke$arity$0() : fexpr__44262.call(null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-image","div.modal-image",1325109367),(function (){var poster_detail_url = (function (){var G__44264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","get-poster-detail","techniposter-frontend.subs/get-poster-detail",-1183127258)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44264) : re_frame.core.subscribe.call(null,G__44264));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.poster","img.poster",-1456738606),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref(poster_detail_url)], null)], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-details","div.modal-details",-892706375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(movie_details)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),techniposter_frontend.views.detail_list_item("Release Date",new cljs.core.Keyword(null,"release_date","release_date",-1770099066).cljs$core$IFn$_invoke$arity$1(movie_details)),techniposter_frontend.views.detail_list_item("Rating",new cljs.core.Keyword(null,"vote_average","vote_average",-1925125338).cljs$core$IFn$_invoke$arity$1(movie_details)),techniposter_frontend.views.detail_list_item("Description",new cljs.core.Keyword(null,"overview","overview",-435037267).cljs$core$IFn$_invoke$arity$1(movie_details))], null)], null)], null)], null);
});
techniposter_frontend.views.main_panel = (function techniposter_frontend$views$main_panel(){
var loading_QMARK_ = (function (){var G__44265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","loading?","techniposter-frontend.subs/loading?",530383945)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44265) : re_frame.core.subscribe.call(null,G__44265));
})();
var movies = (function (){var G__44266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","movies","techniposter-frontend.subs/movies",-1428156002)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44266) : re_frame.core.subscribe.call(null,G__44266));
})();
var movie_details = (function (){var G__44267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","movie-detail","techniposter-frontend.subs/movie-detail",188929289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44267) : re_frame.core.subscribe.call(null,G__44267));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Movie Posters"], null),techniposter_frontend.views.page_widget(),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528),"loading"], null):null),((cljs.core.not(cljs.core.deref(loading_QMARK_)))?techniposter_frontend.views.poster_list(cljs.core.deref(movies)):null),(cljs.core.truth_(cljs.core.deref(movie_details))?techniposter_frontend.views.detail_modal(cljs.core.deref(movie_details)):null)], null);
});

//# sourceMappingURL=techniposter_frontend.views.js.map

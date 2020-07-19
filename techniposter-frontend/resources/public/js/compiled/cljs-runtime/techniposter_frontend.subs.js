goog.provide('techniposter_frontend.subs');
var G__43846_43870 = new cljs.core.Keyword("techniposter-frontend.subs","name","techniposter-frontend.subs/name",-1139895159);
var G__43847_43871 = (function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43846_43870,G__43847_43871) : re_frame.core.reg_sub.call(null,G__43846_43870,G__43847_43871));
var G__43848_43872 = new cljs.core.Keyword("techniposter-frontend.subs","loading?","techniposter-frontend.subs/loading?",530383945);
var G__43849_43873 = (function (db){
return new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43848_43872,G__43849_43873) : re_frame.core.reg_sub.call(null,G__43848_43872,G__43849_43873));
var G__43850_43874 = new cljs.core.Keyword("techniposter-frontend.subs","page","techniposter-frontend.subs/page",75531437);
var G__43851_43875 = (function (db){
return (new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43850_43874,G__43851_43875) : re_frame.core.reg_sub.call(null,G__43850_43874,G__43851_43875));
var G__43852_43876 = new cljs.core.Keyword("techniposter-frontend.subs","page-size","techniposter-frontend.subs/page-size",-1223149047);
var G__43853_43877 = (function (db){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43852_43876,G__43853_43877) : re_frame.core.reg_sub.call(null,G__43852_43876,G__43853_43877));
var G__43854_43878 = new cljs.core.Keyword("techniposter-frontend.subs","movies","techniposter-frontend.subs/movies",-1428156002);
var G__43855_43879 = (function (db){
return new cljs.core.Keyword(null,"moviesPagianted","moviesPagianted",-540733686).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43854_43878,G__43855_43879) : re_frame.core.reg_sub.call(null,G__43854_43878,G__43855_43879));
var G__43856_43880 = new cljs.core.Keyword("techniposter-frontend.subs","movie-detail","techniposter-frontend.subs/movie-detail",188929289);
var G__43857_43881 = (function (db){
return new cljs.core.Keyword(null,"movie-detail","movie-detail",1028100329).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43856_43880,G__43857_43881) : re_frame.core.reg_sub.call(null,G__43856_43880,G__43857_43881));
techniposter_frontend.subs.get_movie_by_id = (function techniposter_frontend$subs$get_movie_by_id(id,movies){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43858_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43858_SHARP_),id);
}),movies));
});
techniposter_frontend.subs.tmdb_image_url = (function techniposter_frontend$subs$tmdb_image_url(path,width){
return ["https://image.tmdb.org/t/p/w",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
});
var G__43859_43882 = new cljs.core.Keyword("techniposter-frontend.subs","get-poster","techniposter-frontend.subs/get-poster",-1622773729);
var G__43860_43883 = (function (_){
var G__43862 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","movies","techniposter-frontend.subs/movies",-1428156002)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43862) : re_frame.core.subscribe.call(null,G__43862));
});
var G__43861_43884 = (function (movies,args){
var vec__43863 = args;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43863,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43863,(1),null);
var movie = techniposter_frontend.subs.get_movie_by_id(id,movies);
return techniposter_frontend.subs.tmdb_image_url(new cljs.core.Keyword(null,"poster_path","poster_path",-1568703583).cljs$core$IFn$_invoke$arity$1(movie),(500));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__43859_43882,G__43860_43883,G__43861_43884) : re_frame.core.reg_sub.call(null,G__43859_43882,G__43860_43883,G__43861_43884));
var G__43866_43887 = new cljs.core.Keyword("techniposter-frontend.subs","get-poster-detail","techniposter-frontend.subs/get-poster-detail",-1183127258);
var G__43867_43888 = (function (_){
var G__43869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("techniposter-frontend.subs","movie-detail","techniposter-frontend.subs/movie-detail",188929289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43869) : re_frame.core.subscribe.call(null,G__43869));
});
var G__43868_43889 = (function (movie,_){
return techniposter_frontend.subs.tmdb_image_url(new cljs.core.Keyword(null,"poster_path","poster_path",-1568703583).cljs$core$IFn$_invoke$arity$1(movie),(500));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__43866_43887,G__43867_43888,G__43868_43889) : re_frame.core.reg_sub.call(null,G__43866_43887,G__43867_43888,G__43868_43889));

//# sourceMappingURL=techniposter_frontend.subs.js.map

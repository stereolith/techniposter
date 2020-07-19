goog.provide('techniposter_frontend.core');
techniposter_frontend.core.dev_setup = (function techniposter_frontend$core$dev_setup(){
if(techniposter_frontend.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
techniposter_frontend.core.mount_root = (function techniposter_frontend$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [techniposter_frontend.views.main_panel], null),root_el);
});
techniposter_frontend.core.init = (function techniposter_frontend$core$init(){
var G__41831_41833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__41831_41833) : re_frame.core.dispatch_sync.call(null,G__41831_41833));

var G__41832_41834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-movies","request-movies",1757713798),(1)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41832_41834) : re_frame.core.dispatch.call(null,G__41832_41834));

techniposter_frontend.core.dev_setup();

return techniposter_frontend.core.mount_root();
});

//# sourceMappingURL=techniposter_frontend.core.js.map

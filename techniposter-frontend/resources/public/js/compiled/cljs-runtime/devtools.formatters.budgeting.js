goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__53361__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__53361__auto__["add"]).call(o__53361__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__53361__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__53361__auto__["delete"]).call(o__53361__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__53361__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__53361__auto__["has"]).call(o__53361__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__55810 = data;
var target__53376__auto__ = G__55810;
if(cljs.core.truth_(target__53376__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55810)].join(''),"\n","target__53376__auto__"].join('')));
}

(target__53376__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__55810;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_55834 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_55834);
} else {
var seq__55814_55835 = cljs.core.seq(json_ml);
var chunk__55815_55836 = null;
var count__55816_55837 = (0);
var i__55817_55838 = (0);
while(true){
if((i__55817_55838 < count__55816_55837)){
var item_55839 = chunk__55815_55836.cljs$core$IIndexed$_nth$arity$2(null,i__55817_55838);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_55839,new_depth_budget_55834) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_55839,new_depth_budget_55834));


var G__55840 = seq__55814_55835;
var G__55841 = chunk__55815_55836;
var G__55842 = count__55816_55837;
var G__55843 = (i__55817_55838 + (1));
seq__55814_55835 = G__55840;
chunk__55815_55836 = G__55841;
count__55816_55837 = G__55842;
i__55817_55838 = G__55843;
continue;
} else {
var temp__5735__auto___55845 = cljs.core.seq(seq__55814_55835);
if(temp__5735__auto___55845){
var seq__55814_55849__$1 = temp__5735__auto___55845;
if(cljs.core.chunked_seq_QMARK_(seq__55814_55849__$1)){
var c__4556__auto___55850 = cljs.core.chunk_first(seq__55814_55849__$1);
var G__55851 = cljs.core.chunk_rest(seq__55814_55849__$1);
var G__55852 = c__4556__auto___55850;
var G__55853 = cljs.core.count(c__4556__auto___55850);
var G__55854 = (0);
seq__55814_55835 = G__55851;
chunk__55815_55836 = G__55852;
count__55816_55837 = G__55853;
i__55817_55838 = G__55854;
continue;
} else {
var item_55855 = cljs.core.first(seq__55814_55849__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_55855,new_depth_budget_55834) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_55855,new_depth_budget_55834));


var G__55856 = cljs.core.next(seq__55814_55849__$1);
var G__55857 = null;
var G__55858 = (0);
var G__55859 = (0);
seq__55814_55835 = G__55856;
chunk__55815_55836 = G__55857;
count__55816_55837 = G__55858;
i__55817_55838 = G__55859;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5733__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5733__auto__)){
var initial_hierarchy_depth_budget = temp__5733__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map

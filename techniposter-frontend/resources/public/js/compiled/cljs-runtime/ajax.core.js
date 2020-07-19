goog.provide('ajax.core');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42142 = arguments.length;
var i__4737__auto___42143 = (0);
while(true){
if((i__4737__auto___42143 < len__4736__auto___42142)){
args__4742__auto__.push((arguments[i__4737__auto___42143]));

var G__42145 = (i__4737__auto___42143 + (1));
i__4737__auto___42143 = G__42145;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.GET.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.GET.cljs$lang$applyTo = (function (seq42123){
var G__42124 = cljs.core.first(seq42123);
var seq42123__$1 = cljs.core.next(seq42123);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42124,seq42123__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42149 = arguments.length;
var i__4737__auto___42152 = (0);
while(true){
if((i__4737__auto___42152 < len__4736__auto___42149)){
args__4742__auto__.push((arguments[i__4737__auto___42152]));

var G__42153 = (i__4737__auto___42152 + (1));
i__4737__auto___42152 = G__42153;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.HEAD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.HEAD.cljs$lang$applyTo = (function (seq42126){
var G__42127 = cljs.core.first(seq42126);
var seq42126__$1 = cljs.core.next(seq42126);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42127,seq42126__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42157 = arguments.length;
var i__4737__auto___42158 = (0);
while(true){
if((i__4737__auto___42158 < len__4736__auto___42157)){
args__4742__auto__.push((arguments[i__4737__auto___42158]));

var G__42160 = (i__4737__auto___42158 + (1));
i__4737__auto___42158 = G__42160;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.POST.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.POST.cljs$lang$applyTo = (function (seq42128){
var G__42129 = cljs.core.first(seq42128);
var seq42128__$1 = cljs.core.next(seq42128);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42129,seq42128__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42162 = arguments.length;
var i__4737__auto___42167 = (0);
while(true){
if((i__4737__auto___42167 < len__4736__auto___42162)){
args__4742__auto__.push((arguments[i__4737__auto___42167]));

var G__42168 = (i__4737__auto___42167 + (1));
i__4737__auto___42167 = G__42168;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.PUT.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PUT.cljs$lang$applyTo = (function (seq42130){
var G__42131 = cljs.core.first(seq42130);
var seq42130__$1 = cljs.core.next(seq42130);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42131,seq42130__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42172 = arguments.length;
var i__4737__auto___42173 = (0);
while(true){
if((i__4737__auto___42173 < len__4736__auto___42172)){
args__4742__auto__.push((arguments[i__4737__auto___42173]));

var G__42174 = (i__4737__auto___42173 + (1));
i__4737__auto___42173 = G__42174;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.DELETE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.DELETE.cljs$lang$applyTo = (function (seq42132){
var G__42133 = cljs.core.first(seq42132);
var seq42132__$1 = cljs.core.next(seq42132);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42133,seq42132__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42176 = arguments.length;
var i__4737__auto___42177 = (0);
while(true){
if((i__4737__auto___42177 < len__4736__auto___42176)){
args__4742__auto__.push((arguments[i__4737__auto___42177]));

var G__42178 = (i__4737__auto___42177 + (1));
i__4737__auto___42177 = G__42178;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq42134){
var G__42135 = cljs.core.first(seq42134);
var seq42134__$1 = cljs.core.next(seq42134);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42135,seq42134__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42179 = arguments.length;
var i__4737__auto___42180 = (0);
while(true){
if((i__4737__auto___42180 < len__4736__auto___42179)){
args__4742__auto__.push((arguments[i__4737__auto___42180]));

var G__42181 = (i__4737__auto___42180 + (1));
i__4737__auto___42180 = G__42181;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.TRACE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.TRACE.cljs$lang$applyTo = (function (seq42136){
var G__42137 = cljs.core.first(seq42136);
var seq42136__$1 = cljs.core.next(seq42136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42137,seq42136__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42182 = arguments.length;
var i__4737__auto___42183 = (0);
while(true){
if((i__4737__auto___42183 < len__4736__auto___42182)){
args__4742__auto__.push((arguments[i__4737__auto___42183]));

var G__42184 = (i__4737__auto___42183 + (1));
i__4737__auto___42183 = G__42184;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.PATCH.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PATCH.cljs$lang$applyTo = (function (seq42138){
var G__42139 = cljs.core.first(seq42138);
var seq42138__$1 = cljs.core.next(seq42138);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42139,seq42138__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42190 = arguments.length;
var i__4737__auto___42191 = (0);
while(true){
if((i__4737__auto___42191 < len__4736__auto___42190)){
args__4742__auto__.push((arguments[i__4737__auto___42191]));

var G__42192 = (i__4737__auto___42191 + (1));
i__4737__auto___42191 = G__42192;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__41762__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__41762__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__41762__auto__));
}));

(ajax.core.PURGE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PURGE.cljs$lang$applyTo = (function (seq42140){
var G__42141 = cljs.core.first(seq42140);
var seq42140__$1 = cljs.core.next(seq42140);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42141,seq42140__$1);
}));


//# sourceMappingURL=ajax.core.js.map

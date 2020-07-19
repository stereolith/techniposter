(ns techniposter-backend.middleware.pagination)

(defn needs-pagination? [request]
  (let [{params :params} request]
    (and (contains? params :paginateCount) (contains? params :paginatePage))))

(defn paginate [coll n i]
  (take n (drop (* n i) coll)))

(defn parseInt [s]
  (Integer/parseInt s))

(defn intparse-pagination-params [request]
  (reduce #(update-in % [:params %2] parseInt) request [:paginateCount :paginatePage]))

(defn paginate-handler [handler]
  (fn [request]
    (if (needs-pagination? request)
      (let [{{:keys [paginateCount paginatePage]} :params} (intparse-pagination-params request)]
        (update (handler request) :body paginate paginateCount paginatePage))
      (handler request))))

(def pagination-middleware
  {:name ::wrap3
   :description "Pagination middleware"
   :wrap paginate-handler})

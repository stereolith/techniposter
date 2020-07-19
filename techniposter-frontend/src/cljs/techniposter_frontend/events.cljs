(ns techniposter-frontend.events
  (:require
   [ajax.core :as ajax]
   [day8.re-frame.http-fx]
   [re-frame.core :refer [reg-event-fx reg-event-db ->interceptor dispatch]]
   [techniposter-frontend.db :as db]))

(reg-event-db
 :initialize
 (fn [_ _]
   db/default-db))

(reg-event-fx        ;; <-- note the `-fx` extension
 :request-movies        ;; <-- the event id
 (fn                ;; <-- the handler function
   [{db :db} [_]]     ;; <-- 1st argument is coeffect, from which we extract db 

    ;; we return a map of (side) effects
   {:http-xhrio {:method          :get
                 :uri             "http://localhost:3000/api/movie/all"
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :params          {:paginateCount (:size db) :paginatePage (:page db)}
                 :on-success      [:request-movies-success]
                 :on-failure      [:bad-response]}
    :db  (assoc db :loading? true)}))

(reg-event-db                   
  :request-movies-success             
  (fn
    [db [_ response]]           ;; destructure the response from the event vector
    (-> db
        (assoc :loading? false)
        (assoc :moviesPagianted (js->clj response)))))

(reg-event-fx        ;; <-- note the `-fx` extension
 :request-movie        ;; <-- the event id
 (fn                ;; <-- the handler function
   [{db :db} [_ id]]     ;; <-- 1st argument is coeffect, from which we extract db 

    ;; we return a map of (side) effects
   {:http-xhrio {:method          :get
                 :uri             "http://localhost:3000/api/movie/get"
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :params          {:id id}
                 :on-success      [:request-movie-success]
                 :on-failure      [:bad-response]}
    :db  (assoc db :loading? true)}))

(reg-event-db
 :request-movie-success
 (fn
   [db [_ response]]           ;; destructure the response from the event vector
   (-> db
       (assoc :loading? false)
       (assoc :movie-detail (js->clj response)))))

(def reload-response
  (->interceptor
   :id :reload-response
   :after (fn [context]
            (dispatch [:request-movies])
            context)))

(reg-event-db
 :next-page
 [reload-response]
 (fn
   [db [_]]
   (update db :page inc)))

(reg-event-db
 :prev-page
 [reload-response]
 (fn
   [db [_]]
   (update db :page dec)))

(reg-event-db
 :set-size
 [reload-response]
 (fn [db [_ size]]
   (assoc db :size size)))

(reg-event-db
 :close-detail
 (fn [db [_ _]]
   (assoc db :movie-detail nil)))

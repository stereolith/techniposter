(ns techniposter-backend.routes.home
  (:require
   [techniposter-backend.layout :as layout]
   [techniposter-backend.db.core :as db]
   [clojure.java.io :as io]
   [techniposter-backend.middleware :as middleware]
   [ring.util.response]
   [ring.util.http-response :as response]))

(defn home-page [request]
  (layout/render request "home.html"))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]])


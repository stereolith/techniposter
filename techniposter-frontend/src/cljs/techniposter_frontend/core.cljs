(ns techniposter-frontend.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [techniposter-frontend.events :as events]
   [techniposter-frontend.views :as views]
   [techniposter-frontend.config :as config]
   ))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (re-frame/dispatch-sync [:initialize])
  (re-frame/dispatch [:request-movies 1])
  (dev-setup)
  (mount-root))

(ns techniposter-backend.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[techniposter-backend started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[techniposter-backend has shut down successfully]=-"))
   :middleware identity})

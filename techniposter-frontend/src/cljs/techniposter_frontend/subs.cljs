(ns techniposter-frontend.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::loading?
 (fn [db]
   (:loading? db)))

(re-frame/reg-sub
 ::page
 (fn [db]
   (inc (:page db))))

(re-frame/reg-sub
 ::page-size
 (fn [db]
   (:size db)))

(re-frame/reg-sub
 ::movies
 (fn [db]
   (:moviesPagianted db)))

(re-frame/reg-sub
 ::movie-detail
 (fn [db]
   (:movie-detail db)))

(defn get-movie-by-id
  [id movies]
  (first (filter #(= (:id %) id) movies)))

(defn tmdb-image-url
  [path width]
  (str "https://image.tmdb.org/t/p/w" width path))

(re-frame/reg-sub
 ::get-poster
 (fn [_]
   (re-frame/subscribe [::movies]))
 
 (fn [movies args]
   (let [[_ id] args
         movie (get-movie-by-id id movies)]
        (tmdb-image-url (:poster_path movie) 500))))

(re-frame/reg-sub
 ::get-poster-detail
 (fn [_]
   (re-frame/subscribe [::movie-detail]))

 (fn [movie _]
     (tmdb-image-url (:poster_path movie) 500)))
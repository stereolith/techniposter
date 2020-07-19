(ns techniposter-frontend.views
  (:require
   [re-frame.core :as re-frame]
   [techniposter-frontend.subs :as subs]
   ))

;; poster list
(defn poster-list-item
  [title id]
  [:div.poster-list-item {:id id :on-click #(re-frame/dispatch [:request-movie id])}
   (let [poster_path (re-frame/subscribe [::subs/get-poster id])]
     [:img.poster {:src @poster_path}])
   [:div.title title]])

(defn poster-list
  [items]
  [:div.poster-list
   (for [movie items]
     (let [{:keys [id title]} movie]
       (poster-list-item title id)))])


;; pagination widget
(defn page-size-select
  [sizes]
  [:div.size-select "items per page: "
   (let [page-size (re-frame/subscribe [::subs/page-size])]
     (js/console.log @page-size)
     (map (fn [size]
            [:span.size-select-item {:on-click #(re-frame/dispatch [:set-size size])
                                     :class (if (= size @page-size) "active" "")} size])
          sizes))])

(defn page-widget
  []
  (let [page (re-frame/subscribe [::subs/page])]
    [:div.page-widget
     (when (> @page 1)
       [:input {:type "button" :value "prev"
                :on-click #(re-frame/dispatch [:prev-page])}])
     [:span "Page " @page]
     [:input {:type "button" :value "next"
              :on-click #(re-frame/dispatch [:next-page])}]
     (page-size-select [8 12 20 40])]))


;; detail modal
(defn detail-list-item
  [label value]
  [:tr
   [:td.label (str label ":")]
   [:td.value value]])

(defn detail-modal
  [movie-details]
  [:div.modal-wrapper {:on-click #((re-frame/dispatch [:close-detail]))}
   [:div.modal
    [:div.modal-image
     (let [poster-detail-url (re-frame/subscribe [::subs/get-poster-detail])]
       [:img.poster {:src @poster-detail-url}])]
    [:div.modal-details
     [:h3 (:title movie-details)]
     [:table
      (detail-list-item "Release Date" (:release_date movie-details))
      (detail-list-item "Rating" (:vote_average movie-details))
      (detail-list-item "Description" (:overview movie-details))]]]])

;; main view
(defn main-panel []
  (let [loading? (re-frame/subscribe [::subs/loading?])
        movies (re-frame/subscribe [::subs/movies])
        movie-details (re-frame/subscribe [::subs/movie-detail])]
    [:div
     [:h1 "Movie Posters"]
     (page-widget)
     (when @loading? [:div.loader "loading"])
     (when (not @loading?) (poster-list @movies))
     (when @movie-details (detail-modal @movie-details))]))



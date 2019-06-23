(ns main.components.expertise
   (:require [main.state :as state]
             [main.components.section :refer [section]]))

(defn content
  []
  [:div.row
   (for [{:keys [title desc]}  (vals @state/expertise)]
     [:div.col-md-6 {:key title}
      [:div.expertise-item
       [:h3 title]
       [:p desc]]])]) 

(defn expertise
  []
  (section
   "expertise-wrapper"
   "My Specialities"
   (content)))

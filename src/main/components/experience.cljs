(ns main.components.experience
  (:require [main.state :as state]
            [main.components.section :refer [section]]))

(defn content
  [items size]
  [:div.row
   (for [{:keys [date position company city]} items]
     [:div {:key position :class (str "col-md-" size)}
      [:div.content-item
       [:small date]
       [:h3 position]
       [:h4 company]
       [:p city]]])])

(defn experience
  [title size items]
  (section 
   "section-experience" 
   title
   (content items size)))
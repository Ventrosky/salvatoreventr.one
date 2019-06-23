(ns main.components.portfolio
  (:require [main.state :as state]
            [main.components.section :refer [section]]))

(defn content
  []
  [:div.row
   (for [{:keys [link img alt title desc]}  (vals @state/portfolio)]
     [:div.col-md-4.col-sm-6 {:key title}
      [:a.portfolio-item {:href link :target "_blank"}
       [:div.portfolio-thumb
        [:img {:src img :alt alt}]]
       [:div.portfolio-info
        [:h3 title]
        [:small desc]]]])])

(defn portfolio
  []
  (section
   "portfolio-section"
   "Portfolio"
   (content)))
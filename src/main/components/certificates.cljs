(ns main.components.certificates
  (:require [main.state :as state]
            [main.components.section :refer [section]]))

(defn content
  []
  [:div.row
   (for [{:keys [date title link source]}  (vals @state/certificate)]
     [:div.col-md-4 {:key title}
      [:div.content-item
       [:small date]
       [:h3 title]
       [:h4
        [:a.blackcert 
         {:href link :target "_blank"}
         source]]]])])

(defn certificates
  []
  (section
   "section-certifications"
   "Certifications"
   (content)))
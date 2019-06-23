(ns main.components.section)

(defn section
  [cname title elem]
  [:section {:class (str "section-wrapper" cname)}
   [:div.container
    [:div.row
     [:div.col-md-3
      [:div.section-title
       [:h2 title]]]
     [:div.col-md-9
      elem]]]])
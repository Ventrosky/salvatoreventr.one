(ns main.components.contacts
  (:require [main.components.section :refer [section]]))

(defn content 
  []
  [:div.row
   [:div.col-md-4
    [:address
     [:strong "Address"]
     [:br]
     "::/128, Italy"]]
   [:div.col-md-4
    [:address
     [:strong "Email"]
     [:br]
     [:a {:href "mailto:buc.dev@gmail.com"} "buc.dev@gmail.com"]]]])

(defn contacts 
  []
  (section
   "section-contact"
   "Contact"
   (content)))
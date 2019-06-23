(ns main.components.footer)

(defn footer
  []
  [:footer.footer 
   [:div.copyright-section
    [:div.container
     [:div.row
      [:div.col-md-12
       [:div.copytext
        [:em "Passion is the wind, knowledge the sail, skills the vessel. "]
        (str "\u00a9" "2019 Salvatore Ventrone")]]]]]])
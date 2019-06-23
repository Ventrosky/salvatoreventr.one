(ns main.components.header
  (:require [main.state :as state]
            [main.helpers :refer [add-keys]]))

(defn personal-detail
  [small size & children]
  [:div {:class (str "col-md-" size)}
   [:div.personal-details
    [:strong (add-keys children)]
    [:small small]]])

(defn header
  []
  (let [bday "APRIL, 1990"
        nation "ITALY"
        nationality "ITALIAN "
        scn-language ", ENGLISH "
        bio "My name is Salvatore Ventrone, I am a Software Developer and Tutor. Currently enrolled in the BSc Digital Humanities program of the University of Pisa. I love teaching programming subjects and inspire young people learning to code. My interests are FLOSS, programming languages, technology and privacy. Besides programming, I'm a videogames and boardgames enthusiast."]
   (fn []
     [:header.header
      [:div.container
       [:div.row
        [:div.col-md-3
         [:div.profile-img
          [:img.img-responsive {:src "img/img-profile.jpg" :alt "profile img"}]]]
        [:div.col-md-9
         [:div.name-wrapper
          [:h1.name "Salvatore Ventrone"]
          [:span "Software Developer"]]
         [:p bio]
         [:div.row
          (personal-detail "BIRTH" 3 [:span bday] )
          (personal-detail "NATIONALITY" 3 [:span nation] )
          (personal-detail "LANGUAGE" 6 [:span nationality] [:span.grey "(NATIVE)"] [:span scn-language] [:span.grey "(FLUENT)"])
          ]
         [:ul.social-icon
          (for [{:keys [link icon text]}  (vals @state/socials)]
            [:li {:key icon}
             [:a {:href link :target "_blank"}
              [:i {:class (str "fa fa-" icon) :aria-hidden "true"}]
              text]])]]]]])))
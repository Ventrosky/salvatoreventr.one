(ns main.components.skills
  (:require [main.state :as state]
            [main.components.section :refer [section]]))

(defn content 
  [skillset]
  [:div.skills-row
   (for [{:keys [title skill]}  skillset]
     [:div.item {:key title}
      [:div.expertise-item
       [:h3 title]
       (map (fn [name]
              [:div.progress-item {:key name}
               [:span.progress-title name]]) skill)]])])

(defn skills
  [level skillset]
  (section 
   "expertise-wrapper"
   level
   (content skillset)))
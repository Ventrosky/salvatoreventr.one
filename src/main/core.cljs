(ns main.core
  (:require [reagent.core :as r]
            [main.components.header :refer [header]]
            [main.components.expertise :refer [expertise]]
            [main.components.skills :refer [skills]]
            [main.components.experience :refer [experience]]
            [main.components.certificates :refer [certificates]]
            [main.components.portfolio :refer [portfolio]]
            [main.components.contacts :refer [contacts]]
            [main.components.footer :refer [footer]]
            [main.state :as state]
            [ajax.core :refer [GET]]))

(defn fetch-link! [data]
  (GET "http://localhost:8055/events?name=Ventrosky"
    {:handler #(do
                 (js/console.log %)
                 (reset! data %))
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

(defn app
  []
  [:div
   [header]
   [expertise]
   [skills "Working knowledge" (vals @state/working)]
   [skills "Basic knowledge" (vals @state/base)]
   [experience "Work Experience" 6 (vals @state/experience)] 
   [experience "Education" 12 (vals @state/education)]
   [certificates]
   [experience "Community Service" 4 (vals @state/extra)]
   [portfolio]
   [contacts]
   [footer]])

(defn ^:dev/after-load start
  []
  (r/render
   [app]
   (.getElementById js/document "app")))

(defn ^:export main
  []
  ;(fetch-link! state/data)
  (start))
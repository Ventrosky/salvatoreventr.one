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
            [main.components.treemap :refer [treemap append-svg]]
            [main.state :as state]))

(defn not-mobile
  []
  (nil? (re-find #"(?i)(iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec)" (clojure.string/lower-case (.-userAgent js/navigator)))))

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
   [treemap];(when (not-mobile) [treemap])
   [contacts]
   [footer]])

(defn ^:dev/after-load start
  []
  (r/render
   [app]
   (.getElementById js/document "app")))

(defn ^:export main
  []
  (start)
  (append-svg));(when (not-mobile) (append-svg))
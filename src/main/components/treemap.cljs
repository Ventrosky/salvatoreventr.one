(ns main.components.treemap
  (:require [main.state :as state]
            [cljsjs.d3]
            [main.components.section :refer [section]]
            [ajax.core :refer [GET]]
            [clojure.string :as str]))

(def margin {:top 10 :right 10 :bottom 10 :left 10})
(def width (- 450 (:left margin) (:right margin)))
(def height (- 450 (:top margin) (:bottom margin)))

(defn content
  []
  [:div {:id "treemap"}])

(defn treemap
  []
  (section
   "treemap-section"
   "Recent Activities"
   (content)))

(defn fetch-link! [svg]
  (GET "http://localhost:8055/streemap?name=Ventrosky"
    {:handler (fn [data]
                (let [root (-> js/d3
                               (.hierarchy (.parse js/JSON data))
                               (.sum #(.-value %)))
                      tooltip (-> js/d3
                                  (.select "#treemap")
                                  (.append "div")
                                  (.attr "opacity" 0)
                                  (.attr "class" "tooltip"))
                      mouseover #(-> tooltip
                                     (.style "opacity" 1))
                      mousemove (fn [e] 
                                  (this-as this
                                           (let [evts (reduce
                                                       #(str %1 "<br>" (str/replace (first %2) #"Event$" "") ": " (second %2))
                                                       ""
                                                       (js->clj (.-evts (.-data e))))]
                                             (-> tooltip
                                                 (.html (str (.-name (.-data e)) evts))
                                                 (.style "left"  (str (+ (first (js/d3.mouse this)) 70) "px"))
                                                 (.style "top" (str (second (js/d3.mouse this)) "px"))))))
                      mouseleave #(-> tooltip
                                      (.style "opacity" 0))
                      grepo (-> svg
                                (.selectAll "g")
                                (.data (.leaves root))
                                (.enter)
                                (.append "g"))
                      fader #((-> js/d3
                                  (.interpolateRgb % "#fff"))
                              0.2)
                      color (-> js/d3
                                (.scaleSequential)
                                (.domain (clj->js [1 (reduce max
                                                             (map #(.-value %)
                                                                  (.leaves root)))]))
                                (.interpolator (js/d3.interpolateRgb
                                                (js/d3.rgb "#8DB255")
                                                (js/d3.rgb "#006442"))))]
                  (do
                    (reset! state/data data)
                    ((-> js/d3
                         (.treemap)
                         (.size (clj->js [width height]))
                         (.padding 2)) root)
                    (-> grepo
                        (.append "rect")
                        (.attr "x" #(.-x0 %))
                        (.attr "y" #(.-y0 %))
                        (.attr "width" #(- (.-x1 %) (.-x0 %)))
                        (.attr "height" #(- (.-y1 %) (.-y0 %)))
                        (.attr "stroke" "#989898")
                        (.attr "cursor" "pointer")
                        (.on "click" (fn [e]
                                       (js/window.open
                                        (.-url (.-data e))
                                        "_blank")))
                        (.on "mouseover" mouseover)
                        (.on "mousemove" mousemove)
                        (.on "mouseleave" mouseleave)
                        (.attr "fill" #(color (.-value %))))
                    (-> grepo
                        (.append "text")
                        (.attr "x" #(+ (.-x0 %) 2))
                        (.attr "y" #(+ (.-y0 %) 12))
                        (.text #(str/replace (.-name (.-data %)) #"^[^/]+/" ""))
                        (.attr "font-size" "0.48em")
                        (.attr "width" #(- (.-x1 %) (.-x0 %)))
                        (.attr "fill" "white")
                        (.attr "class" "truncate")))))
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

(defn append-svg []
  (let [svg (-> js/d3
                (.select "#treemap")
                (.append "svg")
                (.attr "class" "center-block")
                (.attr "viewBox" (clj->js [0 0 width height]))
                (.attr "id" "svg-treemap")
                (.append "g")
                (.attr "transform" (str "translate(0,0)")))]
    (fetch-link! svg)))

(def options {:title {:subtext "Project activity"
                      :x "center"}
              :tooltip {:formatter "{b0}: {c0}"}
              :series [{:name "ALL"
                        :right "20%"
                        :type "treemap"
                        :data @state/data
                        :levels [{:itemStyle {:normal {:borderColor "#555"
                                                       :borderWidth 4
                                                       :gapWidth 4}}}
                                 {:colorSaturation [0.3 0.6]
                                  :itemStyle {:normal {:borderColorSaturation 0.7
                                                       :gapWidth 2
                                                       :borderWidth 2}}}
                                 {:colorSaturation [0.3 0.5]
                                  :itemStyle {:normal {:borderColorSaturation 0.6
                                                       :gapWidth 1}}}
                                 {:colorSaturation [0.3 0.5]}]}]})

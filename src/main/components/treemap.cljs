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
   "Projects Activity"
   (content)))

(defn dot-text
  [texts]
  (map (fn [text]
         (let [words (str/split text #"/\s+/")]
           (js/console.log text)))
       texts))

(defn fetch-link! [svg]
  (GET "http://localhost:8055/streemap?name=Ventrosky"
    {:handler (fn [data]
                (let [root (-> js/d3
                               (.hierarchy (.parse js/JSON data))
                               (.sum #(.-value %)))]
                  (do
                    (reset! state/data data)
                    ((-> js/d3
                         (.treemap)
                         (.size (clj->js [width height]))
                         (.padding 2)) root)
                    (-> svg
                        (.selectAll "rect")
                        (.data (.leaves root))
                        (.enter)
                        (.append "rect")
                        (.attr "x" #(.-x0 %))
                        (.attr "y" #(.-y0 %))
                        (.attr "width" #(- (.-x1 %) (.-x0 %)))
                        (.attr "height" #(- (.-y1 %) (.-y0 %)))
                        (.attr "stroke" "#989898")
                        (.attr "fill" "#BD5532"))
                    (-> svg
                        (.selectAll "text")
                        (.data (.leaves root))
                        (.enter)
                        (.append "text")
                        (.attr "x" #(+ (.-x0 %) 5))
                        (.attr "y" #(+ (.-y0 %) 20))
                        (.text #(.-name (.-data %)));repo
                        (.attr "font-size" "15px")
                        (.attr "fill" "white")
                        (.call dot-text)))))
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))


(defn append-svg []
  (let [svg (-> js/d3
                (.select "#treemap")
                (.append "svg")
                (.attr "class" "center-block")
                (.attr "viewBox" (clj->js [0 0 width height]));(.attr "height" height);(.attr "width" width)
                (.attr "id" "svg-treemap")
                (.append "g")
                (.attr "transform" (str "translate(0,0)")))] ;" (:left margin) "," (:top margin) "
    (fetch-link! svg)))

;;// read json data
;;d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_dendrogram_full.json", function(data) {
;;
;;  // Give the data to this cluster layout:
;;  var root = d3.hierarchy(data).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data
;;
;;  // Then d3.treemap computes the position of each element of the hierarchy
;;  d3.treemap()
;;    .size([width, height])
;;    .padding(2)
;;    (root)
;;
;;  // use this information to add rectangles:
;;  svg
;;    .selectAll("rect")
;;    .data(root.leaves())
;;    .enter()
;;    .append("rect")
;;      .attr('x', function (d) { return d.x0; })
;;      .attr('y', function (d) { return d.y0; })
;;      .attr('width', function (d) { return d.x1 - d.x0; })
;;      .attr('height', function (d) { return d.y1 - d.y0; })
;;      .style("stroke", "black")
;;      .style("fill", "slateblue")
;;
;;  // and to add the text labels
;;  svg
;;    .selectAll("text")
;;    .data(root.leaves())
;;    .enter()
;;    .append("text")
;;      .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
;;      .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
;;      .text(function(d){ return d.data.name })
;;      .attr("font-size", "15px")
;;      .attr("fill", "white")
;;})

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

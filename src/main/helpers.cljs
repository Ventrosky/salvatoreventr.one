(ns main.helpers)

(defn format-price
  [cents]
  (str " €" (/ cents 100)))

(defn add-keys
  [children]
  (map-indexed #(with-meta %2  {:key %1}) children))
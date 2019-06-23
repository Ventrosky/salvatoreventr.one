(ns main.helpers)

(defn add-keys
  [children]
  (map-indexed #(with-meta %2  {:key %1}) children))
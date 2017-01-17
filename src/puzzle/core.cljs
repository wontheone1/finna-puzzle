(ns puzzle.core
  (:require [phzr.core :as p :refer [pset!]]
            [phzr.game :as pg]
            [phzr.game-object-factory :as pgof]
            [phzr.loader :as pl]
            [phzr.signal :as psg]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defonce game-state (atom {:text         "Hello world!"
                           :world-width  800
                           :world-height 600
                           :game-div-id  "puzzle-game"
                           :piece-width  200
                           :piece-height 200}))

(println (:text @game-state))

(defn ^:private preload
  [game]
  (let [loader (:load game)]
    (doto loader
      (pl/spritesheet "logo" "images/spritesheet.jpg" (:piece-width @game-state) (:piece-height @game-state)))))

(defn- sprite-on-click
  [sprite]
  (println (:name sprite)))

(defn ^:private init-board!
  "Create randomized puzzle board with one black piece"
  [game]
  (let [game-object-factory (:add game)
        board-rows          (/ (:world-width @game-state) (:piece-width @game-state))
        board-cols          (/ (:world-height @game-state) (:piece-height @game-state))
        shuffled-frame-nums (shuffle (range (* board-rows board-cols)))]
    (doseq [col (range board-cols)
            row (range board-rows)]
      (let [frame-number (shuffled-frame-nums (+ (* col board-rows) row))
            piece        (if (= 1 frame-number)
                           (pgof/sprite game-object-factory
                                        (* row (:piece-width @game-state))
                                        (* col (:piece-height @game-state)))
                           (pgof/sprite game-object-factory
                                        (* row (:piece-width @game-state))
                                        (* col (:piece-height @game-state))
                                        "logo"
                                        frame-number))]
        (pset! piece :name (str "piece" frame-number))
        (pset! piece :input-enabled true)
        (psg/add (get-in piece [:events :on-input-down]) sprite-on-click piece)))))

(defn ^:private create [game]
  (init-board! game))

(def build-states
  {:preload preload
   :create  create})

(pg/->Game (:world-width @game-state)
           (:world-height @game-state)
           (p/phaser-constants :auto)
           (:game-div-id @game-state)
           build-states)

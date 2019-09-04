(ns main.state
  (:require [reagent.core :as r]))

(def socials (r/atom {:github {:link "https://github.com/Ventrosky"
                               :icon "github"
                               :text " GitHub "}
                      :twitter {:link "https://twitter.com/buccaneerdev"
                                :icon "twitter"
                                :text " Twitter "}
                      :fcc {:link "https://www.freecodecamp.org/ventrosky"
                            :icon "fire"
                            :text " FCC "}
                      :linkedin {:link "https://www.linkedin.com/in/salvatore-ventrone/"
                                 :icon "linkedin"
                                 :text " LinkedIn "}}))
(def expertise (r/atom {:frontend {:title "Front-End Development"
                                   :desc "Creating the visual elements of a software, application or website, directly viewable and accessible by the end user or client."}
                        :backend {:title "Back-End Development"
                                  :desc "Develop, maintain and testing of the core functional logic and operations of a software application or information system."}
                        :dataviz {:title "Data Visualization"
                                  :desc "Deliver visual reporting to users of data/information as graphical charts for an application or virtually any IT asset."}
                        :nlp {:title "Natural Language Processing"
                              :desc "Designing and developing NLP applications. Using effective text representation techniques, training and evaluating models."}
                        :support {:title "IT Support"
                                  :desc "Installing and configuring computer hardware, OS and applications, providing support, including procedural documentation."}
                        :tutor {:title "Private Tutoring"
                                :desc "Work with students of various ages and different learning levels, explaining complex informatics concepts in simple terms."}}))

(def working (r/atom {:language {:title "Programming Language"
                                 :skill ["Python" "JavaScript" "Bash" "VB.NET" "Clojure"]}
                      :database {:title "Database"
                                 :skill ["Oracle" "MySQL"]}
                      :markup {:title "Markup Language"
                               :skill ["HTML5/CSS" "XML/XSL"]}
                      :framework {:title "Framework"
                                  :skill ["NodeJS" "ReactJS" "Socket.io" "Rasa Stack" "NLTK" "Flask" "Reagent"]}
                      
                      :OS {:title "OS"
                           :skill ["GNU/Linux" "Windows"]}}))

(def base (r/atom {:language {:title "Programming Language"
                              :skill ["Java" "C" "C#"]}
                   :database {:title "Database"
                              :skill ["PostgreSQL" "MongoDB" "Neo4J"]}
                   :framework {:title "Framework"
                               :skill ["D3JS" "AndroidSDK"]}
                   :markup {:title "Markup Language"
                            :skill ["Latex" "Markdown"]}
                   :design {:title "Design Tools"
                            :skill ["Gimp/Photoshop" "Inkscape/Illustrator"]}}))

(def experience (r/atom {:insurance {:date "2018 - Present"
                                     :position "Software Engineer"
                                     :company "Insurance Online S.p.A."
                                     :city "Montacchiello (PI), Italy"}
                         :tutor {:date "2015 - 2018"
                                 :position "Private Tutor"
                                 :company "Self-Employed"
                                 :city "Pisa (PI), Italy"}
                         :designer {:date "2014 - 2015"
                                    :position "Graphic Designer"
                                    :company "Piemme Pharmatech Italia S.r.l."
                                    :city "Civita Castellana (VT), Italy"}
                         :support {:date "2010 - 2012"
                                   :position "IT Support"
                                   :company "A&G Distribuzione"
                                   :city "Viterbo (VT), Italy"}
                         :busboy {:date "2009 - 2010"
                                  :position "Bus Boy"
                                  :company "Benihana Chelsea restaurant"
                                  :city "London, United Kingdom"}}))

(def education (r/atom {:infouma {:date "2015 - Present"
                                  :position "BSc Digital Humanities"
                                  :company "University of Pisa"
                                  :city "Pisa (PI), Italy"}
                        :informatica {:date "2007 - 2010"
                                      :position "BTEC National Diploma"
                                      :company "I.T.S.I.G. Leonardo Da Vinci"
                                      :city "Viterbo (VT), Italy"}
                        :diploma {:date "2010 - 2014"
                                  :position [:em "Completed 96 CFU towards a Bachelor’s Degree in Computer Science"]
                                  :company "University La Sapienza"
                                  :city "Roma (RM), Italy"}}))

(def extra (r/atom {:mentor {:date "2018 - Present"
                             :position "Mentor"
                             :company "CoderDojo Pisa"
                             :city "Pisa (PI), Italy"}
                    :chingu {:date "2018 - 3 months"
                             :position "Team Leader / Developer"
                             :company "Chingu Voyage 7"
                             :city "Remote"}
                    :music {:date "2002 - 2009"
                            :position "Saxophonist"
                            :company "Town’s musical band"
                            :city "Bomarzo (VT), Italy"}
                    :volunteer {:date "2004 - 2007"
                                :position "Volunteer"
                                :company "Kids summer camp"
                                :city "Bomarzo (VT), Italy"}}))

(def portfolio (r/atom {:python {:link "https://github.com/Ventrosky/python-scripts"
                                 :img "img/portfolio-1.jpg"
                                 :alt "python-scripts"
                                 :title "python-scripts"
                                 :desc "Python scripts and exercises."}
                        :fcc {:link "https://github.com/Ventrosky/free-code-camp"
                              :img "img/portfolio-8.jpg"
                              :alt "freecodecamp"
                              :title "freeCodeCamp"
                              :desc "Projects for the fCC certifications."}
                        :web {:link "https://github.com/Ventrosky/web-projects"
                              :img "img/portfolio-2.jpg"
                              :alt "web-projects"
                              :title "web-projects"
                              :desc "University and web projects."}
                        :game {:link "https://github.com/Ventrosky/game-projects"
                               :img "img/portfolio-3.jpg"
                               :alt "game-projects"
                               :title "game-projects"
                               :desc "Collection of game projects."}
                        :chingu {:link "https://github.com/chingu-voyage7/Bears-Team-21"
                                 :img "img/portfolio-7.jpg"
                                 :alt "ChinguVoyage"
                                 :title "Chingu Voyage 7"
                                 :desc "Multiplayer Board Game - Saboteur"}
                        :oop {:link "https://github.com/Ventrosky/oop-projects"
                              :img "img/portfolio-4.jpg"
                              :alt "java-projects"
                              :title "oop-projects"
                              :desc "Java and Visual Basic projects."}}))

(def certificate (r/atom {:apis {:date "2019 August"
                                 :title "APIs and Microservices"
                                 :link "https://www.freecodecamp.org/certification/ventrosky/apis-and-microservices"
                                 :source "FreeCodeCamp"}
						  :libs {:date "2019 March"
                                 :title "Front End Libraries"
                                 :link "https://www.freecodecamp.org/certification/ventrosky/front-end-libraries"
                                 :source "FreeCodeCamp"}
                          :algo {:date "2019 February"
                                 :title "JS Algo and Data Structures"
                                 :link "https://www.freecodecamp.org/certification/ventrosky/javascript-algorithms-and-data-structures"
                                 :source "FreeCodeCamp"} 
                          :resp {:date "2019 February"
                                 :title "Responsive Web Design"
                                 :link "https://www.freecodecamp.org/certification/ventrosky/responsive-web-design"
                                 :source "FreeCodeCamp"} 
                          :data {:date "2018 July"
                                 :title "Data Visualization"
                                 :link "https://www.freecodecamp.org/certification/ventrosky/data-visualization"
                                 :source "FreeCodeCamp"} 
                          :fron {:date "2018 April"
                                 :title "Front End Development"
                                 :link "https://www.freecodecamp.org/ventrosky/front-end-certification"
                                 :source "FreeCodeCamp"}}))

(def data (r/atom {}))
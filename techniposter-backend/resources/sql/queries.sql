-- :name get-movies :? :*
-- :doc retrieve records for all movies
SELECT * FROM movies

-- :name get-movie :? :1
-- :doc retrieves a movie record given the tmdb id
SELECT * FROM movies
WHERE id = :id

-- :name get-test  :? :*
-- :doc for test: get movie "Inception"
SELECT * FROM movies
WHERE id = 27205

-- ALTER TABLE movies_actors
-- DROP CONSTRAINT movies_actors_actor_id_fkey;
ALTER TABLE movies_actors
ADD CONSTRAINT movies_actors_actor_id_fkey FOREIGN KEY (actor_id) REFERENCES actors ON DELETE CASCADE ON UPDATE CASCADE;
select "genres"."name" as "Genre", count(*) as "Lisa Monroe Appearance"
  from "films"
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
    where "actors"."firstName"='Lisa' and "actors"."lastName"='Monroe'
    group by "genres"."name";

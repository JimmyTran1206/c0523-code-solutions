select "firstName", "lastName"
  from "actors"
  join "castMembers" using ("actorId")
    join "flims" using ("filmId")
  where "title"='Jersey Sassy';

select "countries"."name" as "country", count(*) as "cities"
  from "cities"
    join "countries" using ("countryId")
  group by "countries"."name"
  order by "countries"."name";

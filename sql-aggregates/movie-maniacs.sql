select "firstName", "lastName", sum ("amount") as "Rental paid"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "Rental paid" desc;

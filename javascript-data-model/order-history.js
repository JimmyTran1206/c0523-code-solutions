const orderHistory = [];

function ItemOrder(
  orderNumber,
  orderDate,
  priceTotal,
  deliveredDate,
  shippingDestination,
  title,
  author,
  priceNet,
  returnWindow
) {
  this.orderNumber = orderNumber;
  this.orderDate = orderDate;
  this.priceTotal = priceTotal;
  this.deliveredDate = deliveredDate;
  this.shippingDestination = shippingDestination;
  this.title = title;
  this.author = author;
  this.priceNet = priceNet;
  this.returnWindow = returnWindow;
}

const order1 = new ItemOrder(
  '114-3941689-8772232', // orderNumber
  'August 4, 2020', // orderDate
  34.0, // priceTotal
  'Aug 8,2020', // deliveredDate
  'JS MAsher', // shipping destination
  'Javascript for impatient programmers', // title
  'Rauschmayer, Dr. Axel', // author
  31.55, // priceNet
  'Sep 7, 2020' // returnedWindow
);
orderHistory.push(order1);

const order2 = new ItemOrder(
  '113-9984268-1280257', // orderNumber
  'July 19, 2020', // orderDate
  44.53, // priceTotal
  'Jul 20,2020', // deliveredDate
  'JS MAsher', // shipping destination
  'The Timeless Way of Building', // title
  'Alexander, Christopher', // author
  41.33, // priceNet
  'Aug 19, 2020' // returnedWindow
);
orderHistory.push(order2);

const order3 = new ItemOrder(
  '114-287557-9059409', // orderNumber
  'July 4, 2020', // orderDate
  17.22, // priceTotal
  'Jul 7,2020', // deliveredDate
  'JS MAsher', // shipping destination
  'Gamecube Controller Adapter. Super Smas Bros Switch...', // title
  '', // author
  15.98, // priceNet
  'Aug 5, 2020' // returnedWindow
);
orderHistory.push(order3);

const bulkOrder1 = {};
bulkOrder1.item1 = new ItemOrder(
  '113-2883177-2648248', // orderNumber
  'July 3, 2020', // orderDate
  '', // priceTotal
  'Jul 5,2020', // deliveredDate
  'JS MAsher', // shipping destination
  'Gamecube Controller - Super Smas Bros Switch...', // title
  '', // author
  94.95, // priceNet
  'Aug 4, 2020' // returnedWindow
);

bulkOrder1.item2 = new ItemOrder(
  '113-2883177-2648248', // orderNumber
  'July 3, 2020', // orderDate
  '', // priceTotal
  'Jul 5,2020', // deliveredDate
  'JS MAsher', // shipping destination
  'The Art of Sql', // title
  'Faroult, Stephane', // author
  33.99, // priceNet
  'Aug 4, 2020' // returnedWindow
);
orderHistory.push(bulkOrder1);

console.log('order history: ', orderHistory);

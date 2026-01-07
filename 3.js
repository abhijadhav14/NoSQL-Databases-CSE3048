
db.products.insertMany([
  {product_id: "P101", name: 'Samsung S24 phone', brand: 'Samsung', category: 'Electronics', price: 76000 },
  {product_id: "P102", name: 'iPhone 14 Pro', brand: 'Apple', category: 'Electronics', price: 120000 },
  {product_id: "P103", name: 'Boat Headphone', brand: 'Boat', category: 'Electronics', price: 2000 },
  {product_id: "P104", name: 'Dell Alienware', brand: 'Dell', category: 'Computer', price: 200000 },
  {product_id: "P105", name: 'Sony Camera Alpha', brand: 'Sony', category: 'Photography', price: 45000 },

]);

db.products.find({name:{$regex: "Phone", $options: "i"}})

db.products.find({name:{$regex: "^Sam"}})

db.products.find({brand:{$regex: "ll$"}})

db.products.find({brand:{$regex: "....$"}})

db.products.find({name:{$regex: "Pro", $options: "i"}})

db.products.find({category:{$regex: "^E"}})

db.products.find({category:{$regex: "s$"}})

db.products.find({brand:{$regex: "Apple|Samsung"}})

db.products.find({name:{$regex: "[0-9]"}})

db.products.find({name:{$regex: "^[A-Za-z]+[A-Za-z]+"}})

db.products.find({brand:{$regex: "^[^S]"}})

db.products.find({product_id:{$regex: "^P10"}})

db.products.find({name:{$regex: "a$"}})

db.products.find({name:{$regex: "camera", $options:"i"}})




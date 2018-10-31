const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./items.db',(err) => {
  if(err)
    console.error(err.message);
  console.log('Database connection established')
});

function createProductsTable() {
  let products = [
    { id: '1', name: 'Dove soap', img: 'data:image/jpeg;base64,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', price: '39.99', quantity: '0' },
    { id: '2', name: 'Axe Deo', img: 'data:image/jpeg;base64,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', price: '99.99', quantity: '0' }
  ];

  let products_data = products.map((product) => `(${product.id},'${product.name}','${product.img}',${product.price},${product.quantity})`).join(',');
  let sql = 'INSERT INTO PRODUCT_TABLE(id,name,image,unit_price,quantity) VALUES '+ products_data;

  db.run('CREATE TABLE PRODUCT_TABLE(id number,name text, image text, unit_price number, quantity number)')
    .run(sql, products, function(err) {
        if(err)
            console.log(err.message);
        console.log(`Rows inserted ${this.changes}`)
    })
}

db.serialize(() => {
  createProductsTable();
  // db.run('DROP TABLE PRODUCT_TABLE')
});

let query = 'SELECT id,name,image,unit_price,quantity FROM PRODUCT_TABLE';
exports.getProducts = function() {
  return new Promise((resolve, reject) => {
    db.all(query, [], function(err, rows) {
        if(err) reject(err.message)
        else {
            resolve(rows)
        }
    })
  })
}

exports.increaseQuantity = function(id) {
  let query_to_add_items = `UPDATE PRODUCT_TABLE SET quantity=quantity+1 WHERE id=${id}`;
  return new Promise((resolve, reject) => {
    db.run(query_to_add_items, function(err) {
      if(err) reject(err.message)
      else {
        resolve(true)
      }
    })
  })
}

// db.close((err) => {
//   if(err)
//       console.error(err.message);
//   console.log('Database closed successfully')
// });

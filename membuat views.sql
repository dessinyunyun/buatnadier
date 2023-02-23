 select customer.id,
 		customer.firstname,
		customer.lastname,
		"user".username,
		"user".password,
		customer.createdat
	from customer
	join "user" on customer.user_id = "user".id
	
 
 
 SELECT orders.id,
    customer.firstname,
    customer.lastname,
    "user".username,
    product_category.name AS kategori,
    product.name AS product_name,
    orders.totalproduct,
    orders.totalprice,
    product.price,
    order_detail.quantity,
	orders.createdat
   FROM customer
     JOIN "user" ON customer.user_id = "user".id
     JOIN orders ON "user".id = orders.user_id
     JOIN order_detail ON orders.id = order_detail.order_id
     JOIN product ON order_detail.product_id = product.id
     JOIN product_category ON product.category_id = product_category.id;
	 
	 
SELECT product.id,
	product.name,
	product.description,
	product.price,
	product_category.name as category_produk,
	product.createdat
 FROM product
 	JOIN product_category on product.category_id = product_category.id
	
	
	
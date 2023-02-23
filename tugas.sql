SELECT p.name, p.description, p.price, pc.name as category_name
FROM product p
INNER JOIN product_category pc ON p.category_id = pc.id
where pc.name = 'Pakaian'


CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  password TEXT,
  createdat TIMESTAMP DEFAULT NOW(),
  updatedat TIMESTAMP DEFAULT NOW()
);

CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  user_id INT NOT NULL UNIQUE,
  createdat TIMESTAMP DEFAULT NOW(),
  updatedat TIMESTAMP DEFAULT NOW(),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE ON UPDATE CASCADE
);

 
 
 
 create table product_category(
 	 id serial primary key,
	 name varchar(100),
	 description varchar(200),
	 createdAt TIMESTAMP DEFAULT NOW(),
     updatedAt TIMESTAMP DEFAULT NOW()
 )
 
 
 
 
  create table product(
 	 id serial primary key,
	 name varchar(100),
	 description varchar(200),
	 price numeric,
	 image varchar(200),
	  
	 category_id int not null,
	 
	 constraint fk_category_id foreign key (category_id) references product_category (id) ON DELETE CASCADE ON UPDATE CASCADE,
	  
	 createdAt TIMESTAMP DEFAULT NOW(),
     updatedAt TIMESTAMP DEFAULT NOW()
 )
 
 
 
 
 create table orders(
 	id serial primary key,
	totalproduct int,
	totalprice numeric,
	 
	user_id int not null,
	 
	constraint fk_user_id foreign key (user_id) references "user" (id) ON DELETE CASCADE ON UPDATE CASCADE,
	 
 	createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()	 
 )
 
 
 
 
 create table order_detail(
 	id serial primary key,
	quantity int,
	
	order_id int not null,
	product_id int not null,
	 
	constraint fk_order_id foreign key (order_id) references orders (id) ON DELETE CASCADE ON UPDATE CASCADE,
	constraint fk_product_id foreign key (product_id) references product (id) ON DELETE CASCADE ON UPDATE CASCADE,
	 
	createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
	 
 )
 
 
 
 
--  -------------------------- insert data ---------------------------- *
INSERT INTO "user" (username, password) VALUES
  ('john.doe', 'password123'),
  ('jane.doe', 'abcde12345'),
  ('bob.smith', 'password987'),
  ('alice.johnson', 'xyz321'),
  ('charlie.brown', 'qwertypass'),
  ('sarah.lee', 'ilovecoding'),
  ('david.kim', 'mysecretpassword'),
  ('emily.jones', 'letmein123'),
  ('michael.davis', 'p@ssw0rd!'),
  ('olivia.wilson', 'password456');


INSERT INTO customer (firstname, lastname, user_id) VALUES
  ('John', 'Doe', 1),
  ('Jane', 'Doe', 2),
  ('Bob', 'Smith', 3),
  ('Alice', 'Johnson', 4),
  ('Charlie', 'Brown', 5),
  ('Sarah', 'Lee', 6),
  ('David', 'Kim', 7),
  ('Emily', 'Jones', 8),
  ('Michael', 'Davis', 9),
  ('Olivia', 'Wilson', 10);


SELECT customer.id, customer.firstname, customer.lastname,"user".username, "user".password
FROM customer
INNER JOIN "user" ON customer.user_id = "user".id;
 
 
INSERT INTO product_category (name, description) VALUES
  ('Pakaian', 'Kategori produk pakaian'),
  ('Sepatu', 'Kategori produk sepatu'),
  ('Tas', 'Kategori produk tas'),
  ('Elektronik', 'Kategori produk elektronik'),
  ('Kecantikan', 'Kategori produk kecantikan'),
  ('Makanan', 'Kategori produk makanan'),
  ('Minuman', 'Kategori produk minuman'),
  ('Perlengkapan Rumah', 'Kategori produk perlengkapan rumah'),
  ('Kesehatan', 'Kategori produk kesehatan'),
  ('Olahraga', 'Kategori produk olahraga');


 
 
 INSERT INTO product (name, description, price, image, category_id)
VALUES
  ('T-Shirt Cotton', 'Baju dengan bahan katun', 100000, 'tshirt.jpg', 1),
  ('Celana Jeans', 'Celana dengan bahan jeans', 250000, 'jeans.jpg', 1),
  ('Sneakers', 'Sepatu sneakers', 500000, 'sneakers.jpg', 2),
  ('Backpack', 'Tas ransel', 150000, 'backpack.jpg', 3),
  ('Smart TV', 'Televisi pintar dengan fitur canggih', 6000000, 'smart-tv.jpg', 4),
  ('Laptop Gaming', 'Laptop khusus untuk gaming', 15000000, 'laptop-gaming.jpg', 4),
  ('Lipstick', 'Lipstik matte dengan berbagai pilihan warna', 100000, 'lipstick.jpg', 5),
  ('Mineral Water', 'Air mineral dalam kemasan', 5000, 'mineral-water.jpg', 7),
  ('Vitamin C', 'Suplemen vitamin C', 50000, 'vitamin-c.jpg', 9),
  ('Yoga Mat', 'Alas untuk yoga', 300000, 'yoga-mat.jpg', 10);

--  TAMBAH DATA PRODUCT



INSERT INTO orders (totalproduct, totalprice, user_id) VALUES (2, 200000, 5);

INSERT INTO order_detail (quantity, order_id, product_id) VALUES (2, 1, 1);

 select * from order_detail
  select * from product
   select * from orders
    select * from customer

SELECT u.username, c.firstname, c.lastname, o.totalproduct, o.totalprice, p.name, od.quantity
FROM "user" u
INNER JOIN customer c ON u.id = c.user_id
INNER JOIN orders o ON c.id = o.user_id
INNER JOIN order_detail od ON o.id = od.order_id
INNER JOIN product p ON od.product_id = p.id


SELECT p.name, p.description, p.price, pc.name as category_name
FROM product p
INNER JOIN product_category pc ON p.category_id = pc.id
WHERE pc.name = 'Sepatu';



select * from product_category 
 
 
 
 
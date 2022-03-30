DROP DATABASE ecommerce_v2;

CREATE DATABASE ecommerce_v2;

USE ecommerce_v2;

CREATE table products(
id INT AUTO_INCREMENT,
image VARCHAR(800),
title VARCHAR(225),
item_description VARCHAR(500),
price VARCHAR(100),
PRIMARY KEY(id)
);

INSERT INTO products (image, title, item_description, price) 
VALUES
("https://cdn.builder.io/api/v1/image/assets%2Faa96744e7fe74e2a90d22918299c1f1d%2F6f16545e800d40afb117519f802d19a4?format=webp&width=16003.jpg","THE ESSENTIAL SET","Set includes 1 “magic” Warrior Mat, 2 Uplifting Blocks, 1 Grounded No-Slip Towel & 1 Yoga Strap for restorative stretching & easy mat-carrying","$49.99"),
("https://cdn.builder.io/api/v1/image/assets%2Faa96744e7fe74e2a90d22918299c1f1d%2Ff4a2303b3ef94039ab1988943fec296a?format=webp&width=1600","THE ULTIMATE HOME STUDIO SET","Set includes 1 luxe Alo Moves Annual Subscription Gift Box, 1 Warrior Mat, 1 Grounded No-Slip Mat Towel, 2 Uplifting Blocks, 1 Yoga Strap & our limited-edition, iconic Alo Shopper Tote","$129.99"),
("https://cdn.shopify.com/s/files/1/2185/2813/products/M1133R_04064_b1_s3_a1_1_m75_640x.jpg?v=1647399648","THE TRIUMPH CREW NECK TEE & CHILL SHORT","The Triumph Crew Neck Tee is a slim, relaxed fit and classic crew neck make it the most versatile piece in your closet. The Chill Short is made with French terry and has a drawstring, side-zip pockets and single pocket at back.","$49.99"),
("https://cdn.shopify.com/s/files/1/2185/2813/products/U3013R_04174_b1_s3_a1_1_m75_750x.jpg?v=1642795749","RENOWN HOODIE & SWEATPANT","Made from thick, heavyweight French terry, this oversized hoodie features a structured hood & kangaroo pocket for on-the-go convenience and cuffs at the sleeves and waistband. The oversized sweatpant features an interior drawstring waistband, a clean, straight-leg fit, and two zippered pockets & an open back pocket for on-the-go convenience","$89.99"),
("https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_04064_b2_s1_a1_m44_750x.jpg?v=1645642756","AIRLIFT INTRIGUE BRA & HIGH-WAIST AIRLIFT LEGGING","Made with a second-skin fit & feel, Airlift fabric sculpts and lifts like no other. You'll love them and live in them. Plus, a higher waistband is shaping and pairs well with the Intrigue Bra.","$64.99"),
("https://cdn.shopify.com/s/files/1/2185/2813/products/W3621R_03299_b1_s1_a2_2_m90_750x.jpg?v=1645749300","CROPPED TAILORED CREW NECK & HIGH-WAIST TAILORED SWEATPANT","The Cropped Tailored Crew Neck Pullover features shaping darts at the sides, dropped shoulders and cuffed, dolman sleeves. The High-Waist Tailored Sweatpant in our elevated crinkle knit jersey combines the comfort of your fave sweats with the luxe fit you expect from your best pants.","$89.99"),
("https://m.media-amazon.com/images/I/91EYketrKnL._AC_SX679_.jpg","GAIAM YOGA MAT EXTRA THICK NON SLIP","These durable, yet lightweight exercise yoga mats are extra thick for the additional cushioning your joints need during any yoga or fitness routine.","$16.99"),
("https://m.media-amazon.com/images/I/81xya4ZCiGL._AC_SX679_.jpg","LARGE CORK YOGA MAT NATURAL RUBBER","A real must-have for all types of yoga, but especially perfect for Hot Yoga classes. The anti-skid natural rubber backing keeps it in place while you exercise. As temperature rise the top side cork's grip and traction increases, providing you a superior grip.","$24.99"),
("https://m.media-amazon.com/images/I/91n6OuhVhXL._AC_SX679_.jpg","GAIAM FOLDING YOGA MAT","This 2mm thick non toxic PVC yoga mat easily folds into a 10 inches x 12 inches square making it the ideal travel yoga mat.","$9.99"),
("https://m.media-amazon.com/images/I/81AbWcSjh+L._AC_SX679_.jpg","KINESIS YOGA KNEE PAD CUSHION","We heard you loud and clear! Our knee pads are now Velcro-free and instead, comes with a nice breathable mesh bag so you can simply roll your knee pad and place it in the bag for easy carrying and storage!","$8.99"),
("https://m.media-amazon.com/images/I/71t8-v0CW0L._AC_SX679_.jpg","UHAWI YOGA MAT TOTE FOR WOMEN AND MEN","The yoga mat bags has one spacious main pocket and seven separate pockets. The yoga mat carrying bag can fit two Standard yoga mats or any combination of blocks, straps, clothes, water bottle, towel, wallet, phones or other gym equipment. Our yoga bags and carriers fits all your sports stuff.","$16.99"),
("https://m.media-amazon.com/images/I/818-JQRf+EL._AC_SY879_.jpg","ASUTRA ORGANIC YOGA MAT CLEANER","Asutra's 100% natural and organic Yoga Mat Cleaner. It is water-based with essential oil infusions. Simply spray and wipe clean with the included microfiber towel.","$4.99");


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

SELECT * FROM products


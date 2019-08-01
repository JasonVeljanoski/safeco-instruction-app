# SQLite Table Construction

```sqlite
 /* create a groups table */
 CREATE TABLE groups (group_name VARCHAR(50) PRIMARY KEY);
 
 /* insert into the table */
 INSERT INTO groups VALUES ('group1');
 INSERT INTO groups VALUES ('group2');
```

```sqlite
 /* create a categories table */
 CREATE TABLE categories (
    category_name VARCHAR(50) PRIMARY KEY,
    group_name VARCHAR(50),
    FOREIGN KEY(group_name) REFERENCES groups(group_name)
);
 
 /* insert into the table */
 INSERT INTO categories VALUES ('first category', 'group1');
 INSERT INTO categories VALUES ('second category', 'group1');
 
 INSERT INTO categories VALUES ('first category(2)', 'group2');
 INSERT INTO categories VALUES ('second category(2)', 'group2');
```

```sqlite
/* create a products table */
 CREATE TABLE products (
    product_name VARCHAR(50) PRIMARY KEY,
    category_name VARCHAR(50),
    FOREIGN KEY(category_name) REFERENCES categories(category_name)
);

/* insert into the table */
 INSERT INTO products VALUES ('product1', 'first category');
 INSERT INTO products VALUES ('product2', 'first category');
 
 INSERT INTO products VALUES ('product3', 'second category');
 INSERT INTO products VALUES ('product4', 'second category');
  
 INSERT INTO products VALUES ('product5', 'first category(2)');
 INSERT INTO products VALUES ('product6', 'first category(2)');
 
 INSERT INTO products VALUES ('product7', 'second category(2)');
 INSERT INTO products VALUES ('product8', 'second category(2)');
```

```sqlite
/* create a variation table */
 CREATE TABLE variations (
    variation_name VARCHAR(50) PRIMARY KEY,
    product_name VARCHAR(50),
    variation_documentation VARCHAR(50),
    FOREIGN KEY(product_name) REFERENCES products(product_name)
);

/* insert into the table */
 INSERT INTO variations VALUES ('variation1', 'product1', "sample.pdf");
 INSERT INTO variations VALUES ('variation2', 'product1', "sample.pdf");
 
 INSERT INTO variations VALUES ('variation3', 'product2', "sample.pdf");
 INSERT INTO variations VALUES ('variation4', 'product2', "sample.pdf");
 
 INSERT INTO variations VALUES ('variation5', 'product3', "sample.pdf");
 INSERT INTO variations VALUES ('variation6', 'product3', "sample.pdf");
 
 INSERT INTO variations VALUES ('variation7', 'product4', "sample.pdf");
 INSERT INTO variations VALUES ('variation8', 'product4', "sample.pdf");
 
 INSERT INTO variations VALUES ('variation9', 'product5', "sample.pdf");
 INSERT INTO variations VALUES ('variation10', 'product5', "sample.pdf");
 
 INSERT INTO variations VALUES ('variation11', 'product6', "sample.pdf");
 INSERT INTO variations VALUES ('variation12', 'product6', "sample.pdf");
 
 INSERT INTO variations VALUES ('variation13', 'product7', "sample.pdf");
 INSERT INTO variations VALUES ('variation14', 'product7', "sample.pdf");
 
 INSERT INTO variations VALUES ('variation15', 'product8', "sample.pdf");
 INSERT INTO variations VALUES ('variation16', 'product8', "sample.pdf");
 
 /* error testing */
 INSERT INTO variations VALUES ('variation17', 'product8', "");
```

```sqlite
/* create a steps table */
 CREATE TABLE steps (
    step VARCHAR(50),
    description VARCHAR(50),
    video VARCHAR(50),
    variation_name VARCHAR(50),
    FOREIGN KEY(variation_name) REFERENCES variations(variation_name)
);

/* insert into the table */
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation1');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation1');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation1');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation2');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation2');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation3');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation3');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation3');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation4');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation4');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation5');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation5');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation5');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation6');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation6');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation6');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation7');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation7');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation7');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation8');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation8');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation9');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation9');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation9');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation10');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation11');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation11');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation11');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation12');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation12');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation13');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation13');
 INSERT INTO steps VALUES ('step 3', 'description text here', 'sample.mp4', 'variation13');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation14');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation14');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation15');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation15');
 
 INSERT INTO steps VALUES ('step 1', 'description text here', 'sample.mp4', 'variation16');
 INSERT INTO steps VALUES ('step 2', 'description text here', 'sample.mp4', 'variation16');
 
 /* error testing */
 INSERT INTO steps VALUES ('step 1', '', 'sample.mp4', 'variation17');
 INSERT INTO steps VALUES ('', 'description text here', 'sample.mp4', 'variation17');
```



CREATE SCHEMA IF NOT EXISTS `mycars`;
USE `mycars` ;

CREATE TABLE IF NOT EXISTS `cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carName` VARCHAR(50) NOT NULL, 
  `carColor` VARCHAR(50) NOT NULL,
  `carBrand` VARCHAR(50) NOT NULL,
  `carPower` VARCHAR(50) NOT NULL,
  `carType`  VARCHAR(50) NOT NULL,
  `carPrice` VARCHAR(50) NOT NULL,
  `carImage` VARCHAR(999) NOT NULL,
  PRIMARY KEY (`id`)
  );

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL, 
  `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
  );
 

INSERT INTO `cars` (carName, carColor, carBrand, carPower, carType, carPrice, carImage)
VALUES 

    ('M3', 'red', 'BMW', '444', 'muscle car', '75000', 'https://www.bmw-tunisia.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg'),
    ('M2', 'blue', 'BMW', '410', 'normal', '65000', 'https://example.com/m2_blue.jpg'),
    ('M4', 'black', 'BMW', '425', 'normal', '85000', 'https://example.com/m4_black.jpg'),


    ('Challenger', 'red', 'Dodge', '375', 'muscle car', '60000', 'https://example.com/challenger_red.jpg'),
    ('Charger', 'blue', 'Dodge', '292', 'muscle car', '50000', 'https://example.com/charger_blue.jpg'),
    ('Viper', 'black', 'Dodge', '645', 'normal', '150000', 'https://example.com/viper_black.jpg'),

    ('AMG GT', 'red', 'Mercedes', '469', 'familly', '130000', 'https://example.com/amg_gt_red.jpg'),
    ('C63', 'blue', 'Mercedes', '469', 'muscle car', '80000', 'https://example.com/c63_blue.jpg'),
    ('SLS', 'black', 'Mercedes', '622', 'fammily', '250000', 'https://example.com/sls_black.jpg'),

    ('911', 'red', 'Porsche', '379', 'muscle car', '100000', 'https://example.com/911_red.jpg'),
    ('Panamera', 'blue', 'Porsche', '330', 'normal', '90000', 'https://example.com/panamera_blue.jpg'),
    ('Cayman', 'black', 'Porsche', '300', 'muscle car', '70000', 'https://example.com/cayman_black.jpg');

 
 


-- run the following command to create the database:
-- mysql -u <username> -p <schema.sql




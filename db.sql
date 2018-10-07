DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  username VARCHAR,
  password VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

INSERT INTO users ( first_name, last_name, email, username, password )
VALUES ('Kill', 'Bill', 'user@example.com', 'username', '$2a$10$oTHc103GQnIu.jvMN2XKA.o1oqv3SMK1pgm7Fl9aN96QUSVdkEe8a');

CREATE TABLE accounts (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  account VARCHAR,
  value MONEY
);

INSERT INTO accounts ( name, account, value )
VALUES ('Tressie Metz', '41643993', '84.98');
INSERT INTO accounts ( name, account, value )
VALUES ('Arturo Lindgren', '54419673', '214.66');
INSERT INTO accounts ( name, account, value )
VALUES ('Naomie Bauch', '70805583', '565.38');
INSERT INTO accounts ( name, account, value )
VALUES ('Serenity Haag V', '65093098', '597.54');
INSERT INTO accounts ( name, account, value )
VALUES ('Mr. Abelardo Kihn', '56517070', '989.92');
INSERT INTO accounts ( name, account, value )
VALUES ('Laurie Ullrich', '34252183', '332.92');
INSERT INTO accounts ( name, account, value )
VALUES ('Etha Hermann', '46080887', '910.56');
INSERT INTO accounts ( name, account, value )
VALUES ('Dr. Gerald Grant', '25792568', '16.21');
INSERT INTO accounts ( name, account, value )
VALUES ('Malinda Fadel', '21529317', '945.29');
INSERT INTO accounts ( name, account, value )
VALUES ('Gust Spinka DVM', '72644279', '832.16');
INSERT INTO accounts ( name, account, value )
VALUES ('Walker Ullrich', '92387303', '374.27');
INSERT INTO accounts ( name, account, value )
VALUES ('Marianne Russel', '98051455', '30.39');
INSERT INTO accounts ( name, account, value )
VALUES ('Gillian Botsford', '07620410', '336.25');
INSERT INTO accounts ( name, account, value )
VALUES ('Mariano Emard III', '56653186', '35.58');
INSERT INTO accounts ( name, account, value )
VALUES ('Lon Volkman', '67960955', '121.13');
INSERT INTO accounts ( name, account, value )
VALUES ('Marquise Flatley', '50627987', '932.15');
INSERT INTO accounts ( name, account, value )
VALUES ('Ardella Sipes', '11272103', '483.90');
INSERT INTO accounts ( name, account, value )
VALUES ('Morgan Herzog', '85102574', '827.44');
INSERT INTO accounts ( name, account, value )
VALUES ('Keshawn Hartmann', '88202177', '989.37');
INSERT INTO accounts ( name, account, value )
VALUES ('Vladimir Gerlach', '63420385', '656.13');
INSERT INTO accounts ( name, account, value )
VALUES ('Nicolas McGlynn', '14363639', '498.78');
INSERT INTO accounts ( name, account, value )
VALUES ('Destin Hermiston', '35286835', '178.69');
INSERT INTO accounts ( name, account, value )
VALUES ('Kailee Douglas', '80669849', '890.62');
INSERT INTO accounts ( name, account, value )
VALUES ('Josie Flatley', '48425039', '152.87');
INSERT INTO accounts ( name, account, value )
VALUES ('Aniyah Abshire IV', '85871454', '708.81');
INSERT INTO accounts ( name, account, value )
VALUES ('Dr. Kailey Grant', '15587615', '509.02');
INSERT INTO accounts ( name, account, value )
VALUES ('Eleonore Harris', '92714996', '329.59');
INSERT INTO accounts ( name, account, value )
VALUES ('Loyal Cremin', '11734181', '561.85');
INSERT INTO accounts ( name, account, value )
VALUES ('Garnet Wisoky', '26262371', '435.30');
INSERT INTO accounts ( name, account, value )
VALUES ('Ahmad Walsh', '44402258', '942.94');
INSERT INTO accounts ( name, account, value )
VALUES ('Wyman Schaefer IV', '02394064', '318.31');
INSERT INTO accounts ( name, account, value )
VALUES ('Mohamed Hane', '48204858', '337.85');
INSERT INTO accounts ( name, account, value )
VALUES ('Leone Lesch', '80563294', '224.60');
INSERT INTO accounts ( name, account, value )
VALUES ('Rossie Luettgen', '61955862', '931.24');
INSERT INTO accounts ( name, account, value )
VALUES ('Felipa Schinner', '27056264', '703.91');
INSERT INTO accounts ( name, account, value )
VALUES ('Miss Wilfred Schinner', '57942485', '875.68');
INSERT INTO accounts ( name, account, value )
VALUES ('Kristy Thiel', '97755984', '306.20');
INSERT INTO accounts ( name, account, value )
VALUES ('Ephraim Price', '22641183', '186.13');
INSERT INTO accounts ( name, account, value )
VALUES ('Raquel Altenwerth', '12973670', '46.97');
INSERT INTO accounts ( name, account, value )
VALUES ('Lesley Hirthe', '49031370', '103.49');
INSERT INTO accounts ( name, account, value )
VALUES ('Devonte Hoppe MD', '21634757', '679.21');
INSERT INTO accounts ( name, account, value )
VALUES ('Leilani Hackett V', '74919503', '915.11');
INSERT INTO accounts ( name, account, value )
VALUES ('Mafalda Kuvalis', '78662821', '712.45');
INSERT INTO accounts ( name, account, value )
VALUES ('Cory White', '73911785', '271.12');
INSERT INTO accounts ( name, account, value )
VALUES ('Everardo Rohan III', '42565934', '949.93');
INSERT INTO accounts ( name, account, value )
VALUES ('Aiden Block I', '46613985', '686.22');
INSERT INTO accounts ( name, account, value )
VALUES ('Pinkie Bauch', '17632986', '699.14');
INSERT INTO accounts ( name, account, value )
VALUES ('Tianna Kuvalis', '05670252', '603.81');
INSERT INTO accounts ( name, account, value )
VALUES ('Margot Cronin', '93297648', '146.74');
INSERT INTO accounts ( name, account, value )
VALUES ('Emerald Morar DVM', '98980306', '722.35');
INSERT INTO accounts ( name, account, value )
VALUES ('Jose Tremblay', '84260850', '56.28');
INSERT INTO accounts ( name, account, value )
VALUES ('Shea Jakubowski', '19737208', '267.42');
INSERT INTO accounts ( name, account, value )
VALUES ('Gilberto Beier', '64723079', '192.82');
INSERT INTO accounts ( name, account, value )
VALUES ('Trudie Jacobson', '98247653', '422.52');
INSERT INTO accounts ( name, account, value )
VALUES ('Murray MacGyver', '75997165', '785.18');
INSERT INTO accounts ( name, account, value )
VALUES ('Vince Anderson', '26823322', '140.10');
INSERT INTO accounts ( name, account, value )
VALUES ('Christiana Abernathy', '32512267', '767.47');
INSERT INTO accounts ( name, account, value )
VALUES ('Jerrod Marvin', '36156738', '389.92');
INSERT INTO accounts ( name, account, value )
VALUES ('Ines Lang', '35100146', '56.97');
INSERT INTO accounts ( name, account, value )
VALUES ('Monserrat Senger', '36342417', '812.99');
INSERT INTO accounts ( name, account, value )
VALUES ('Ms. Tyler Anderson', '79469354', '54.80');
INSERT INTO accounts ( name, account, value )
VALUES ('Arnulfo Haag', '11436900', '967.36');
INSERT INTO accounts ( name, account, value )
VALUES ('Nico Ullrich', '97764635', '641.56');
INSERT INTO accounts ( name, account, value )
VALUES ('Mr. Ottilie Reynolds', '10770229', '221.24');
INSERT INTO accounts ( name, account, value )
VALUES ('Kaylah Hagenes', '35515494', '749.63');
INSERT INTO accounts ( name, account, value )
VALUES ('Ciara Weimann', '96643219', '809.48');
INSERT INTO accounts ( name, account, value )
VALUES ('Kobe Von', '38330746', '321.31');
INSERT INTO accounts ( name, account, value )
VALUES ('Sincere Schinner', '36526554', '23.36');
INSERT INTO accounts ( name, account, value )
VALUES ('Constantin Schmidt', '29560866', '234.95');
INSERT INTO accounts ( name, account, value )
VALUES ('Walter Hermann DVM', '42720894', '106.65');
INSERT INTO accounts ( name, account, value )
VALUES ('Moises Gorczany', '50976055', '841.18');
INSERT INTO accounts ( name, account, value )
VALUES ('Earnest Champlin', '76630838', '625.42');
INSERT INTO accounts ( name, account, value )
VALUES ('Betty Auer', '54539757', '233.58');
INSERT INTO accounts ( name, account, value )
VALUES ('Wilfredo Gorczany', '46314124', '273.85');
INSERT INTO accounts ( name, account, value )
VALUES ('Krystina Beer', '82515521', '198.28');
INSERT INTO accounts ( name, account, value )
VALUES ('Lottie Quitzon', '19953003', '597.52');
INSERT INTO accounts ( name, account, value )
VALUES ('Dejah Orn', '97296157', '761.54');
INSERT INTO accounts ( name, account, value )
VALUES ('Serena Berge', '97647683', '935.55');
INSERT INTO accounts ( name, account, value )
VALUES ('Lelia Murazik', '76081559', '732.80');
INSERT INTO accounts ( name, account, value )
VALUES ('Mrs. Kane Labadie', '70722390', '808.80');
INSERT INTO accounts ( name, account, value )
VALUES ('Blaze Greenfelder', '44637759', '67.10');
INSERT INTO accounts ( name, account, value )
VALUES ('Jermaine Hansen', '47421097', '654.36');
INSERT INTO accounts ( name, account, value )
VALUES ('Marjorie Wintheiser', '48739738', '937.70');
INSERT INTO accounts ( name, account, value )
VALUES ('Taurean Ziemann Sr.', '62273603', '266.58');
INSERT INTO accounts ( name, account, value )
VALUES ('Emerald Stamm', '69673837', '304.65');
INSERT INTO accounts ( name, account, value )
VALUES ('Cary Larkin', '86340925', '74.40');
INSERT INTO accounts ( name, account, value )
VALUES ('Vilma Beer', '56363471', '422.87');
INSERT INTO accounts ( name, account, value )
VALUES ('Marion Gutmann', '63077386', '17.78');
INSERT INTO accounts ( name, account, value )
VALUES ('Deanna Homenick', '54329860', '875.23');
INSERT INTO accounts ( name, account, value )
VALUES ('Kayley Conroy PhD', '62817952', '684.06');
INSERT INTO accounts ( name, account, value )
VALUES ('Alessandra Lind', '63693595', '944.52');
INSERT INTO accounts ( name, account, value )
VALUES ('Madeline Klocko', '86097439', '972.87');
INSERT INTO accounts ( name, account, value )
VALUES ('Eladio Pfannerstill', '86953352', '289.17');
INSERT INTO accounts ( name, account, value )
VALUES ('Serenity Strosin', '90314292', '107.05');
INSERT INTO accounts ( name, account, value )
VALUES ('Ms. Simone Heidenreich', '19204561', '597.97');
INSERT INTO accounts ( name, account, value )
VALUES ('Marlon Wehner', '31570515', '821.28');
INSERT INTO accounts ( name, account, value )
VALUES ('Norris Klein III', '69576808', '522.60');
INSERT INTO accounts ( name, account, value )
VALUES ('Filiberto Crona', '31960061', '751.42');
INSERT INTO accounts ( name, account, value )
VALUES ('Ms. Brian Jacobs', '91713175', '757.91');
INSERT INTO accounts ( name, account, value )
VALUES ('Blanche Altenwerth', '51670736', '301.62');

---------------------------------------------------------------------------

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  username VARCHAR,
  password VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

CREATE TABLE accounts (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  account VARCHAR,
  value MONEY
);

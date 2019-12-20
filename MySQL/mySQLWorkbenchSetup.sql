SELECT * FROM clients;

INSERT INTO clients (first_name, last_name, email, joined_datetime)
VALUES('Dan', 'Y', 'dan_y@email.com', NOW());

UPDATE clients SET first_name = 'Fred', last_name = 'Krueger' 
WHERE id = 11;

DELETE FROM clients WHERE last_name = 'Krueger';
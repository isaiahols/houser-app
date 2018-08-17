DROP TABLE IF EXISTS Houses;

CREATE TABLE Houses
(
    id serial PRIMARY KEY,
    Title TEXT,
    Address TEXT,
    City TEXT,
    St TEXT,
    Zip INTEGER
);

INSERT INTO Houses
    (Title, Address, City, St, Zip)
VALUES
    ('Town Home', '458 South Leatherwood Dr.', 'Blacksburg', 'VA', 24060),
    ('Duplex', '8940 Saxton Ave.', 'Oceanside', 'NY', 11572 ),
    ('3br, 2ba', '21 North Oxford Lane ', 'Fulerton', 'CA', 92831),
    ('Country Home', '7886 Bald Hill St.', 'Geneva', 'IL', 60134),
    ('Penthouse', '55 Young Street', 'Rome', 'NY', 13440);

SELECT *
FROM Houses;

ALTER TABLE Houses
ADD COLUMN img TEXT,
ADD COLUMN mortgage FLOAT(15),
ADD COLUMN rent FLOAT(15);

UPDATE Houses
SET img = 'https://via.placeholder.com/200x300',
    mortgage = 300000,
    rent = 1000;

SELECT *
FROM Houses;
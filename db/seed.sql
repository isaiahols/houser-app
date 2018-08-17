DROP TABLE IF EXISTS Houses;

CREATE TABLE Houses
(
    id serial PRIMARY KEY,
    Title TEXT,
    Address TEXT,
    City TEXT,
    State TEXT,
    Zip INTEGER
);

INSERT INTO Houses
    (Title, Address, City, State, Zip)
VALUES
    ('Town Home', '458 South Leatherwood Dr.', 'Blacksburg', 'VA', 24060),
    ('Duplex', '8940 Saxton Ave.', 'Oceanside', 'NY', 11572 ),
    ('3br, 2ba', '21 North Oxford Lane ', 'Fulerton', 'CA', 92831),
    ('Country Home', '7886 Bald Hill St.', 'Geneva', 'IL', 60134),
    ('Penthouse', '55 Young Street', 'Rome', 'NY', 13440);

SELECT *
FROM Houses;
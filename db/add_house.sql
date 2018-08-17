INSERT INTO Houses
    (Title, Address, City, State, Zip)
VALUES
    ($1, $2, $3, $4, $5);

SELECT *
FROM Houses;
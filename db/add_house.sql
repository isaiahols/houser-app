INSERT INTO Houses
    (Title, Address, City, St, Zip, img, mortgage, rent)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8);

SELECT *
FROM Houses;
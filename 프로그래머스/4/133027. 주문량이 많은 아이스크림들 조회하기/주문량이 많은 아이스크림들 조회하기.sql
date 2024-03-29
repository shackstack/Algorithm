SELECT FLAVOR
FROM 
    (SELECT FH.FLAVOR, J.TOTAL_ORDER AS JULY_TOTAL_ORDER, FH.TOTAL_ORDER AS FIRST_HALF_TOTAL_ORDER
    FROM FIRST_HALF AS FH RIGHT JOIN JULY AS J
    ON FH.FLAVOR = J.FLAVOR

    UNION

    SELECT FH.FLAVOR, J.TOTAL_ORDER AS JULY_TOTAL_ORDER, FH.TOTAL_ORDER AS FIRST_HALF_TOTAL_ORDER
    FROM FIRST_HALF AS FH LEFT JOIN JULY AS J
    ON FH.FLAVOR = J.FLAVOR) AS OUTERJOIN
GROUP BY FLAVOR
ORDER BY SUM(JULY_TOTAL_ORDER + FIRST_HALF_TOTAL_ORDER) DESC
LIMIT 3
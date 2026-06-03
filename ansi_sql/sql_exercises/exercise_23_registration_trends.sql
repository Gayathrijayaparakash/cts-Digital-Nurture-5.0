-- Exercise 23: Registration Trends
SELECT EXTRACT(YEAR FROM r.registration_date) AS year,
       EXTRACT(MONTH FROM r.registration_date) AS month,
       COUNT(*) AS registration_count
FROM Registrations r
WHERE r.registration_date >= DATEADD(MONTH, -12, CURRENT_DATE)
GROUP BY year, month
ORDER BY year, month;

-- Exercise 5: Most Active Cities
SELECT u.city,
       COUNT(DISTINCT r.user_id) AS distinct_user_registrations
FROM Registrations r
JOIN Users u ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY distinct_user_registrations DESC
FETCH FIRST 5 ROWS ONLY;

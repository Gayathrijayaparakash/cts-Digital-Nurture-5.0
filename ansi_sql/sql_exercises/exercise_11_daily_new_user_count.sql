-- Exercise 11: Daily New User Count
SELECT u.registration_date,
       COUNT(*) AS new_user_count
FROM Users u
WHERE u.registration_date >= DATEADD(DAY, -7, CURRENT_DATE)
GROUP BY u.registration_date
ORDER BY u.registration_date;

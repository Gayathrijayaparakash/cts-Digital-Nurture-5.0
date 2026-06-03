-- Exercise 16: Unregistered Active Users
SELECT u.user_id,
       u.full_name,
       u.email,
       u.registration_date
FROM Users u
LEFT JOIN Registrations r ON r.user_id = u.user_id
WHERE u.registration_date >= DATEADD(DAY, -30, CURRENT_DATE)
  AND r.registration_id IS NULL;

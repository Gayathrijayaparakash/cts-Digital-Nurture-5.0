-- Exercise 3: Inactive Users
SELECT u.user_id,
       u.full_name,
       u.email,
       u.city,
       u.registration_date
FROM Users u
LEFT JOIN Registrations r ON r.user_id = u.user_id
  AND r.registration_date >= DATEADD(DAY, -90, CURRENT_DATE)
WHERE r.registration_id IS NULL;

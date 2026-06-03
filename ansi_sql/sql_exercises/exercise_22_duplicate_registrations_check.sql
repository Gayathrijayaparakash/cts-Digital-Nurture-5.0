-- Exercise 22: Duplicate Registrations Check
SELECT r.user_id,
       u.full_name,
       r.event_id,
       e.title,
       COUNT(*) AS duplicate_count
FROM Registrations r
JOIN Users u ON u.user_id = r.user_id
JOIN Events e ON e.event_id = r.event_id
GROUP BY r.user_id, u.full_name, r.event_id, e.title
HAVING COUNT(*) > 1;

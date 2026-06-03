-- Exercise 1: User Upcoming Events
-- Replace :user_id with the target user's ID.
SELECT e.event_id,
       e.title,
       e.description,
       e.city,
       e.start_date,
       e.end_date,
       e.status
FROM Events e
JOIN Registrations r ON r.event_id = e.event_id
JOIN Users u ON u.user_id = r.user_id
WHERE r.user_id = :user_id
  AND e.status = 'upcoming'
  AND e.city = u.city
ORDER BY e.start_date;

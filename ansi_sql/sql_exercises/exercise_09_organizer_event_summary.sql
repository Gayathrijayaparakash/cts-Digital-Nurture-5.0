-- Exercise 9: Organizer Event Summary
SELECT u.user_id AS organizer_id,
       u.full_name AS organizer_name,
       COUNT(e.event_id) AS event_count,
       SUM(e.status = 'upcoming') AS upcoming_events,
       SUM(e.status = 'completed') AS completed_events,
       SUM(e.status = 'cancelled') AS cancelled_events
FROM Users u
LEFT JOIN Events e ON e.organizer_id = u.user_id
GROUP BY u.user_id, u.full_name
ORDER BY event_count DESC;

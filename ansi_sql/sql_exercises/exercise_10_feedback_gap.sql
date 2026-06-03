-- Exercise 10: Feedback Gap
SELECT e.event_id,
       e.title,
       COUNT(DISTINCT r.registration_id) AS registration_count
FROM Events e
JOIN Registrations r ON r.event_id = e.event_id
LEFT JOIN Feedback f ON f.event_id = e.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(f.feedback_id) = 0;

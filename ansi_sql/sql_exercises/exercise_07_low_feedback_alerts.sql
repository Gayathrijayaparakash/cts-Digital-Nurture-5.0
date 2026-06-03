-- Exercise 7: Low Feedback Alerts
SELECT u.user_id,
       u.full_name,
       e.event_id,
       e.title AS event_title,
       f.rating,
       f.comments,
       f.feedback_date
FROM Feedback f
JOIN Users u ON u.user_id = f.user_id
JOIN Events e ON e.event_id = f.event_id
WHERE f.rating < 3
ORDER BY f.feedback_date DESC;

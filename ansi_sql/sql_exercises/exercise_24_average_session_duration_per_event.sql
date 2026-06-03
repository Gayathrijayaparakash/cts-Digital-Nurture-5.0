-- Exercise 24: Average Session Duration per Event
SELECT e.event_id,
       e.title,
       AVG(TIMESTAMPDIFF(MINUTE, s.start_time, s.end_time)) AS avg_duration_minutes
FROM Events e
JOIN Sessions s ON s.event_id = e.event_id
GROUP BY e.event_id, e.title
ORDER BY avg_duration_minutes DESC;

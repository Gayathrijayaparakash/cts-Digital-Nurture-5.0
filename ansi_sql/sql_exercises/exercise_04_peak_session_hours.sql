-- Exercise 4: Peak Session Hours
SELECT s.event_id,
       e.title,
       COUNT(*) AS session_count
FROM Sessions s
JOIN Events e ON e.event_id = s.event_id
WHERE TIME(s.start_time) >= '10:00:00'
  AND TIME(s.start_time) < '12:00:00'
GROUP BY s.event_id, e.title
ORDER BY s.event_id;

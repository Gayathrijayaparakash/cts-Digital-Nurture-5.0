-- Exercise 12: Event with Maximum Sessions
SELECT e.event_id,
       e.title,
       COUNT(s.session_id) AS session_count
FROM Events e
LEFT JOIN Sessions s ON s.event_id = e.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(s.session_id) >= ALL (
    SELECT COUNT(*)
    FROM Sessions
    GROUP BY event_id
)
ORDER BY e.title;

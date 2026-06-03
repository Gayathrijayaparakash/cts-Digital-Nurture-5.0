-- Exercise 6: Event Resource Summary
SELECT e.event_id,
       e.title,
       SUM(r.resource_type = 'pdf') AS pdf_count,
       SUM(r.resource_type = 'image') AS image_count,
       SUM(r.resource_type = 'link') AS link_count,
       COUNT(r.resource_id) AS total_resources
FROM Events e
LEFT JOIN Resources r ON r.event_id = e.event_id
GROUP BY e.event_id, e.title
ORDER BY e.event_id;

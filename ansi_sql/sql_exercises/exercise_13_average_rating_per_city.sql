-- Exercise 13: Average Rating per City
SELECT e.city,
       AVG(f.rating) AS average_rating
FROM Events e
JOIN Feedback f ON f.event_id = e.event_id
GROUP BY e.city
ORDER BY average_rating DESC;

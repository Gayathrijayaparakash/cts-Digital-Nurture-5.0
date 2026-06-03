-- Exercise 21: Top Feedback Providers
SELECT u.user_id,
       u.full_name,
       COUNT(f.feedback_id) AS feedback_count
FROM Users u
JOIN Feedback f ON f.user_id = u.user_id
GROUP BY u.user_id, u.full_name
ORDER BY feedback_count DESC
FETCH FIRST 5 ROWS ONLY;

-- Exercise 17: Multi-Session Speakers
SELECT s.speaker_name,
       COUNT(*) AS session_count
FROM Sessions s
GROUP BY s.speaker_name
HAVING COUNT(*) > 1
ORDER BY session_count DESC, s.speaker_name;

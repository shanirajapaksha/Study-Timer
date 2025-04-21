# 📈 Monitoring & Observability – StudyTime App

## ✅ Health Check
- `/health` route/component returns simple message if app is live.

## 🧪 Console Logs
- Timer start logs: `console.log("Timer started", timestamp)`

## 📊 Simulated Metrics
| Metric                  | Value    |
|-------------------------|----------|
| Daily active users      | ~12      |
| Average session time    | 45 mins  |
| Weekly study sessions   | ~80      |

## 🔔 Alerting Rules (Simulated)
- If daily sessions < 3 → alert to developer
- If health endpoint returns error → app down alert

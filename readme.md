# Habit Tracker

เป็นโปรเจคที่ใช้สำหรับจัดการกิจกรรมประจำวัน สำหรับทดสอบการทำ ci/cd

## Stack

- Node.js
- Express.js
- SQLite
- GitHub Actions

## Structure

```
├── config/
│   └── db.js
├── controllers/
│   ├── habitsController.js
│   └── usersController.js
├── migrations/
│   └── init.sql
├── models/
│   ├── habitsModel.js
│   └── usersModel.js
├── routes/
│   ├── habitsRoute.js
│   └── usersRoute.js
├── seeds/
│   ├── habitsSeed.js
│   └── usersSeed.js
├── server.js
└── .gitignore
```

## API

    1. User Management
    - POST /api/register → สมัครสมาชิก
    - POST /api/login → เข้าสู่ระบบ
    - GET /api/profile → ดึงข้อมูลผู้ใช้
    2. Habit Management
    - POST /api/habits → สร้าง habit ใหม่
    - GET /api/habits → ดึง habit ทั้งหมดของผู้ใช้
    - PUT /api/habits/:id → แก้ไข habit
    - DELETE /api/habits/:id → ลบ habit
    3. Tracking
    - POST /api/habits/:id/track → บันทึกว่า “ทำแล้ว”
    - GET /api/habits/:id/history → ดูประวัติการทำ habit
    4. Statistics / Dashboard
    - GET /api/stats → สรุปสถิติ เช่น streak, % สำเร็จ
    - GET /api/stats/weekly → รายงานรายสัปดาห์
    5. Notification (ถ้าเพิ่มฟีเจอร์แจ้งเตือน)
    - POST /api/notifications → ตั้งค่าแจ้งเตือน
    - GET /api/notifications → ดูรายการแจ้งเตือน

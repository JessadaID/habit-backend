micro-habit-tracker/
├── .github/
│ └── workflows/
│ └── ci-cd.yml # ไฟล์ CI/CD Pipeline (GitHub Actions)
├── node_modules/ # Dependencies (ไม่ต้อง push เข้า GitHub)
├── package.json # รายการ dependencies และ script
├── package-lock.json
├── habit.db # SQLite database (เก็บข้อมูล habit/logs)
├── server.js # Entry point ของ Express.js
├── config/
│ └── db.js # การเชื่อมต่อ SQLite
├── routes/
│ └── habits.js # Route สำหรับ habit API
│ └── users.js # Route สำหรับ user API (ถ้ามีระบบ login)
├── controllers/
│ └── habitsController.js # Logic ของ habit
│ └── usersController.js # Logic ของ user
├── models/
│ └── habitsModel.js # Query SQLite สำหรับ habit
│ └── usersModel.js # Query SQLite สำหรับ user
├── migrations/
│ └── init.sql # Script สร้างตาราง habits, habit_logs
├── tests/
│ └── habits.test.js # Unit test สำหรับ habit API
│ └── users.test.js # Unit test สำหรับ user API
└── README.md # คู่มือการใช้งานโปรเจกต์

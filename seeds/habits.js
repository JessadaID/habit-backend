const db = require("../config/db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS habits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      frequency TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS habit_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      habit_id INTEGER,
      date DATE,
      status TEXT,
      FOREIGN KEY (habit_id) REFERENCES habits(id)
    )
  `);

  db.run(`DELETE FROM habits`);
  db.run(`DELETE FROM habit_logs`);

  const stmt = db.prepare(`INSERT INTO habits (name, frequency) VALUES (?, ?)`);
  stmt.run("ดื่มน้ำ 1 แก้วหลังตื่นนอน", "daily");
  stmt.run("ยืดเส้น 5 นาที", "daily");
  stmt.run("อ่านหนังสือ 10 หน้า", "daily");
  stmt.finalize();

  console.log("Seed data inserted successfully!");
});

db.close();

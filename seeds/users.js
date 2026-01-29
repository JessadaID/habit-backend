const db = require("../config/db");

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

    db.run(`DELETE FROM users`);

    const stmt = db.prepare(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`);
    stmt.run("John Doe", "[EMAIL_ADDRESS]", "password");
    stmt.run("Jane Doe", "[EMAIL_ADDRESS]", "password");
    stmt.finalize();

    console.log("Seed data inserted successfully!");
});

db.close();
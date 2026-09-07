CREATE TABLE IF NOT EXISTS briefs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  budget TEXT DEFAULT '',
  deadline TEXT DEFAULT '',
  message TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

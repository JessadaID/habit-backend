const db = require('../config/db')

const getHabits = (req, res) => {
    const sql = `SELECT * FROM habits`
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message)
            return res.status(500).json({ error: err.message })
        }
        res.json({ habits: rows })
    })
}

const createHabit = (req, res) => {
    const { name, frequency } = req.body
    const sql = `INSERT INTO habits (name, frequency) VALUES (?, ?)`
    db.run(sql, [name, frequency], function (err) {
        if (err) {
            console.error(err.message)
            return res.status(500).json({ error: err.message })
        }
        res.json({ message: 'Habit created successfully', id: this.lastID })
    })
}

const updateHabit = (req, res) => {
    const { name, frequency } = req.body
    const id = req.params.id
    const sql = `UPDATE habits SET name = ?, frequency = ? WHERE id = ?`
    db.run(sql, [name, frequency, id], function (err) {
        if (err) {
            console.error(err.message)
            return res.status(500).json({ error: err.message })
        }
        res.json({ message: 'Habit updated successfully', id: id })
    })
}

const deleteHabit = (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM habits WHERE id = ?`
    db.run(sql, [id], function (err) {
        if (err) {
            console.error(err.message)
            return res.status(500).json({ error: err.message })
        }
        res.json({ message: 'Habit deleted successfully', id: id })
    })
}

module.exports = { getHabits, createHabit, updateHabit, deleteHabit }
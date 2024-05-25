
const db = require('../db');

exports.getAll = async function (req, res) {
    try {
        let result = await db.query(`SELECT * from categories`)
        let data = result.rows;
        res.json({
            data
        })
    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.getSingle = async function (req, res) {
    try {
        let id = req.params.id;
        let result = await db.query(`SELECT * FROM categories WHERE id = $1`, [id])
        let data = result.rows;
        if (data.length > 0) {
            res.json(data[0])
        } else {
            res.status(404).json({
                message: 'Record not found'
            });
        }

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.create = async function (req, res) {
    try {
        let { title, description } = req.body;
        let result = await db.query(`INSERT INTO categories (title,description) VALUES ($1,$2)`, [title, description])
        res.status(201).json({
            message: 'Record Inserted'
        })

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.updateSingle = async function (req, res) {
    try {
        let id = req.params.id;
        let { title, description } = req.body;
        let result = await db.query(`UPDATE categories SET title = $1, description = $2 WHERE id = $3`, [title, description, id])
        res.json({
            message: 'Record Updated'
        })

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.deleteSingle = async function (req, res) {
    try {
        let id = req.params.id;
        let result = await db.query(`DELETE FROM categories WHERE id = $1`, [id])
        res.json({
            message: 'Record Deleted'
        })

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}
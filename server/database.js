import pkg from 'pg';

import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;
const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
});

export async function getNotes() {
    try {
        const { rows } = await pool.query("SELECT * FROM records");
        return rows;
    } catch (error) {
        console.error("Error occurred while executing the query:", error);
        throw error;
    }
}


export async function getNote(id) {
    try {
        const result = await pool.query("SELECT * FROM records WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error occurred while executing the query:", error);
        throw error;
    }
}

export async function createNote(title, contents) {
    try {
        const result = await pool.query("INSERT INTO records (title, contents) VALUES ($1, $2) RETURNING id", [title, contents]);
        const id = result.rows[0].id;
        return getNote(id);
    } catch (error) {
        console.error("Error occurred while executing the query:", error);
        throw error;
    }
}

export async function deleteNote(id) {
    try {
        const result = await pool.query("DELETE FROM records WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error occurred while executing the query:", error);
        throw error;
    }
}
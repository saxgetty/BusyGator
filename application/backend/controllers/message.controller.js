/*
 * FILE: message.controller.js
 * 
 * AUTHOR(S): Aaron Carlson
 *
 * PURPOSE: This file contains the controller of the messages.
 */

const { connection } = require('../databaseConnect');

const getAllMessages = async (req, res) => {
    try {
        connection.query('SELECT * from message', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {
        res.status(500).json(error)
    }
};


const getMessagesById = async (req, res) => {
    try {
        let userId = req.query[0];
        connection.query(`SELECT * from message message.creator_id=${userId} or message.receiver=${userId}`, (err, results) => {
            res.send(results[0]);
            if (err) throw err
        });
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    getAllMessages,
    getMessagesById
};
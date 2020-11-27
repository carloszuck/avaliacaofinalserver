const User = require('../models/User');

class UserController {
    async create(req, res) {
        const { firstname, lastname, age, email, address } = req.body;

        try {
            const createdUser = await User.create({ firstname, lastname, age, email, address });

            return res.status(200).json(createdUser);
        } catch(error) {
            return res.status(400).json(err);
        }
        
    }

    async delete(req, res) {
        const { _id } = req.params;

        try {
            const deleted = await User.deleteOne({ _id });

            return res.status(200).json(deleted);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async index(req, res) {
        try {
            const users = await User.find();

            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json(err);
        }
        
    }

    async show(req, res) {
        const { _id } = req.params;

        try {
            const user = await User.findOne({ _id });

            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
        
    }

    async update(req, res) {
        const { _id } = req.params;

        try {
            const updated = await User.update({ _id }, req.body).exec();

            return res.status(200).json(updated);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}

module.exports = new UserController();
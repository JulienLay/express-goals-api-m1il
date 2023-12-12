const asyncHandler = require('express-async-handler')

const UserModel = require('../models/userModel')

const getUsers = asyncHandler(async (req, res) => {
    const users = await UserModel.find()
    res.status(200).json(users)
})

const getUser = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.params.id)

    if (!user) {
        res.status(404);
        throw new Error('User not found')
    }

    res.status(200).json(user)
})

const addUser = asyncHandler(async (req, res) => {
    if (!req.body.username) {
        res.status(400)
        throw new Error('Please write a username')
    }
    if (!req.body.avatar) {
        res.status(400)
        throw new Error('Please write an avatar')
    }
    if (!req.body.email) {
        res.status(400)
        throw new Error('Please write an email')
    }
    if (!req.body.password) {
        res.status(400)
        throw new Error('Please write a password')
    }
    if (!req.body.remember_token) {
        res.status(400)
        throw new Error('Please write a remember_token')
    }
    if (!req.body.articles_id) {
        res.status(400)
        throw new Error('Please add an articles_id')
    }
    const user = await UserModel.create({
        username: req.body.username,
        avatar: req.body.avatar,
        email: req.body.email,
        password: req.body.password,
        remember_token: req.body.remember_token,
        articles_id: req.body.articles_id
    })
    res.json({
        message: `User ${req.body.username} added`
    })
})

const updateUser = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const updatedUser = await UserModel.findByIdAndUpdate(user, req.body)
    res.json({
        user: `${req.body.username} updated`
    })
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteUser)
})

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}
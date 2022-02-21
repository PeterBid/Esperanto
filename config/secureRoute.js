import User from '../models/usermodel.js'
import jwt from 'jsonwebtoken'


export const secureRoute = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('missing header')
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, process.env.secret)
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('User does not exist')
    req.currentUser = userToVerify
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorised' })
  }
}
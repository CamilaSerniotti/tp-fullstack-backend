// utils/generateToken.js
import jwt from 'jsonwebtoken';

export function generateToken(payload) {
    const secret = process.env.JWT_SECRET || 'secret'; // fallback por si falta el .env

    return jwt.sign(payload, secret, {
        expiresIn: '1d'
    });
}

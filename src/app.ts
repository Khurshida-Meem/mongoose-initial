import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import { Schema } from 'mongoose';

const app: Application = express()
// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // creating interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactInfo: string;
    }

    // res.send('Hello World!');
    // next();

    // create schema using interface

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        role: { type: String, required: true },
        password: {
            type: String,
            required: true,
        },
        name: {
            firstName: {
                type: String,
                required: true,
            }
        },
        email: { type: String, required: true },
    });
});



export default app;
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import { Schema, model } from 'mongoose';

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
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contact?: string;
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
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true,
            },
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        email: { type: String },
        contact: { type: String }
    });

    const User = model<IUser>("User", userSchema);

    const createUserToDB = async () => {
        const user = new User({
            id: "2",
            role: "student",
            password: "meem",
            name: {
                firstName: "Sazzadul",
                middleName: "Alam",
                lastName: "Rumi",
            },
            dateOfBirth: "16",
            gender: "female",
            email: "meemrumi59@gmail.com",
            contact: "019999999",
        });
        await user.save();

        console.log(user);
    }
    createUserToDB();

});



export default app;
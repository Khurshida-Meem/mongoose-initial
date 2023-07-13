import mongoose from 'mongoose';
import app from './app';
const port = 5000;

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('Database connected')

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

bootstrap();





// to run npm run dev




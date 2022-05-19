import {connect} from 'mongoose';

const connectDB = async () => {
    try {
        await connect('mongodb+srv://juandadgj:JdGj1100080400@master.eyk4j.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
          });
          console.log('DB Connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;

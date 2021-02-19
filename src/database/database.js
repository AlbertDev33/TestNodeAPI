import mongoose from 'mongoose';

const mongodbUrl = 'mongodb://localhost:27017/testNodeAPI';

const connect = () =>
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const close = () => mongoose.connection.close();

export default { connect, close };

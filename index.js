import ServerExpress from 'server/express';
import App from 'src/app';

ServerExpress.use(App);
// Application port,
// use `PORT`, or `3000` by default
const PORT = process.env.PORT || 3000;
ServerExpress.listen(PORT, () => console.log(`Server start ${PORT}`));
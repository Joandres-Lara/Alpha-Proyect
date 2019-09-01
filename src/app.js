import express from 'express';
import html from './html';
import api from './api';

const app = express();

app.use(html);
app.use(api);

export default app;
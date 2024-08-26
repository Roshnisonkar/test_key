import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();

import studentrouter from './routes/student.routes.js'
 import adminrouter from './routes/admin.routes.js'
 import categoryrouter from './routes/category.routes.js'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use(fileUpload());

app.use("/student",studentrouter);
app.use("/admin",adminrouter);
app.use("/category",categoryrouter);

app.listen(3001);
console.log("Server invoked at lined at http://localhost:3001");


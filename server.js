const express = require('express')
  const app = express()
  const port = process.env.PORT || 3001;
  import mongoose from 'mongoose';
  import Task from './api/models/todoListModel';
  import bodyParser from 'body-parser';

  //mongoose
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Tododb');

  app.unsubscribe(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  var routes = require('./api/routes/todoListRoutes');
  routes(app);
app.listen(port);

console.log('TodoList RESTful API server started on: ' + port);

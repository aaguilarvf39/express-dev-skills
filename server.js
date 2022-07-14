var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
// Middleware that processes data payloads (in the body) from forms
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(function(req, res, next) {
  console.log('Hello SEI!');
  // Add a time property to the res.locals object
  // The time property will then be accessible when rendering a view
  res.locals.time = new Date().toLocaleTimeString();
  next();
});

app.use('/', indexRouter);
// /todos is the "starts with" path
// All routes' path defined in skillsRouter will be appended (added to)
// the starts with path to form the "actual" path that would be in the 
// address bar, or href of a <a> tag, etc.
app.use('/skills', todosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

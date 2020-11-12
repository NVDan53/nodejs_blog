const newsRouter = require('./news');
const siteRouter = require('./site');
const viduRouter = require('./vidu');
function route(app) {
    // nếu mà không match với thằng bên trên thì sẽ match với thằng bên dưới
    app.use('/vidu', viduRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;

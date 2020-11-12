class NewsController {
    // method
    // GET, /news
    index(req, res) {
        res.render('news');
    }

    // GET, /:slug (động)
    show(req, res) {
        res.send('Đây là Slug');
    }
}

module.exports = new NewsController();

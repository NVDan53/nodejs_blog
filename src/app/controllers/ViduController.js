// create a class
class ViduController {
    vidu(req, res) {
        res.render('vidu');
    }
    hehe(req, res) {
        res.send('Just for fun');
    }
}

module.exports = new ViduController();

function index (req, res) {
    res.render('index', {
        title: 'Skills'
    })
}

module.exports = {
    index
}
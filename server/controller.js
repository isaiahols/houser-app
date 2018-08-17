module.exports = {
    getAll: (req, res) => {
        req.app.get('db').get_all()
            .then(response => {
                res.status(200).send(response);
            })
    },
    addHouse: (req, res) => {
        const { title, address, city, state, zip } = req.body;

        req.app.get('db').add_house([title, address, city, state, zip])
            .then(response => {
                res.status(200).send(response);
            })
    },
    removeHouse: (req, res) => {
        const { id } = req.params;

        req.app.get('db').remove_house(id)
            .then(response => {
                res.status(200).send(response);
            })
    }
}
this.$ = new Object();

const express = require('express');
const router = this.$.router = express.Router();
const path = this.$.path = ['/episodes'][0];

router.get('/:episode', async (req, res) => {
    res.render(`libraries/episodes`, {
        layout: '2',
        _url: `/episodes`,
        episode: req.params.episode,
        location: req.session.location || false,
        users: res.locals.session.users || false
    });
});

module.exports = this;
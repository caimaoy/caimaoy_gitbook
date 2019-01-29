var footer = require('./book/bsz');

module.exports = {
  book: {
    assets: './book',
    css: ['style/plugin.css'],
    // css: ['website.css'],
    js: ['plugin.js'], // 'bsz.js'],
  },
  hooks: {
    'page:before': function(page) {
      return footer(this, page);
    },
  },
};

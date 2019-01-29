module.exports = function(book, page) {
  /**
   * 在package.json中配置的默认值，这里可以直接使用
   * [config: config option]
   * @type {Object}
   */
  var config = book.config.get('pluginsConfig')['page-footer-ex'];

  var wrapIfMarkdown = function(input) {
    return input;
    if (!config.markdown) {
      return input;
    } else {
      return book.renderInline('markdown', input);
    }
  };
  // Gitbook Markdown rendering is asynchronous.
  return Promise.all([wrapIfMarkdown(config.copyright)]).then(function(labels) {
    var copyright = labels[0];
    page.content +=
      '\n\n' +
      [
        '<footer class="page-footer-ex">',
        '<span class="page-footer-ex-copyright">',
        copyright,
        '</span>',
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        '<span class="page-footer-ex-footer-update">',
        '<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>',
        '</span>',
        '</footer>',
      ].join(' ');
    return page;
  });
};

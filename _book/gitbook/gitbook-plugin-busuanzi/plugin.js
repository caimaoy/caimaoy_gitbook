require(['gitbook'], function(gitbook) {
  gitbook.events.bind('start', function(e, cnf) {
    var busuanziScript = document.createElement('script');
    busuanziScript.src =
      '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    busuanziScript.setAttribute('async', true);
    document.body.appendChild(busuanziScript);

    // window.onload = function() {};
  });
});

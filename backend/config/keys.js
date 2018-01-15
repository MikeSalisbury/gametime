// dev.js don't commit this!!

if (process.env.NODE_ENV === 'production') {
  // in production
  module.exports = require('.prod');
} else {
  // in dev
  module.exports = require('./dev');
}


//for FB oauth - insert into HTML
// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '{facebookAppId}',
//       cookie     : true,
//       xfbml      : true,
//       version    : '{2.11}'
//     });
//
//     FB.AppEvents.logPageView();
//
//   };
//
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>

//to check FB login

// FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });

// <fb:login-button
//   scope="public_profile,email"
//   onlogin="checkLoginState();">
// </fb:login-button>


// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }

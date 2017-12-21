Vue.filter('upperCase', function(value) {
	return value.toUpperCase();
});

var transporter = {
	client: function(){
  	new Vue({
      el: '#app',
      data: {
        message: 'Hello World!'
      },
      filters: {
        lowercase: function(value) {
          return value.toLowerCase();
        }
      }
    });
  }
}
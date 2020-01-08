$(function(){

	var $special = $('.special');

  function randomShuffle(){
    var random = $($special[Math.floor(Math.random()*$special.length)]);
    random.shuffleLetters();
    console.log('randomly adnimated element', random);
  }

  window.setInterval(function(){
    randomShuffle();
  }, 5000);

});

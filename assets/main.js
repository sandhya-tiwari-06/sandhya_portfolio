(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('nav ul');
  if(b&&m){b.addEventListener('click',function(){m.classList.toggle('open')})}
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
  document.querySelectorAll('.avatar img').forEach(function(img){
    img.addEventListener('error',function(){
      var s=document.createElement('span');s.className='ini';s.textContent='ST';
      img.replaceWith(s);
    });
  });
  document.querySelectorAll('[data-n]').forEach(function(el){
    var n=+el.dataset.n,i=0;
    var t=setInterval(function(){i++;el.textContent=i;if(i>=n)clearInterval(t)},350);
  });
})();
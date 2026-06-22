(function(){var dl=document.getElementById('dlSummary');if(dl){dl.addEventListener('click',function(){window.print();});}})();
(function(){
  var figs=[].slice.call(document.querySelectorAll('.dock .fig'));
  if(!figs.length)return;
  function eq(){
    figs.forEach(function(f){f.style.minHeight='';});
    if(window.innerWidth<=1040)return;
    var max=0;
    figs.forEach(function(f){if(f.offsetHeight>max)max=f.offsetHeight;});
    figs.forEach(function(f){f.style.minHeight=max+'px';});
  }
  eq();
  window.addEventListener('resize',eq);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(eq);
})();

(function(){var dl=document.getElementById('dlSummary');if(dl){dl.addEventListener('click',function(){window.print();});}})();

// rotating globe above the live data: light the consortium's countries
(function(){
  var svg=document.getElementById('storyGlobe');
  if(svg&&window.AIRGlobe){
    window.AIRGlobe(svg,{spin:true,speed:0.07,lng:-12,lat:34,radius:78,cx:100,cy:100,lit:['840','250','276','380','724','528','826','578','752','56']});
  }
})();

// Dock cards stack as you scroll: each sticks just below the previous so its title
// stays visible, and earlier cards collapse to a title strip once covered. The dock is
// also height-matched to the story column so there is no empty gap before the summary.
(function(){
  var dock=document.querySelector('.dock'), story=document.querySelector('.story');
  if(!dock||!story)return;
  var globeEl=dock.querySelector('.story-globe');
  var figs=[].slice.call(dock.querySelectorAll('.fig'));
  if(!figs.length)return;
  // the globe is the first item in the stack (--s:0); data cards stack over it
  var items=globeEl ? [globeEl].concat(figs) : figs;
  var NAV=82, OFF=48;
  function desktop(){return window.innerWidth>900;}

  // space the items so the dock column ends roughly where the story column does
  function layout(){
    items.forEach(function(f){f.style.marginBottom='';});
    if(!desktop())return;
    var sum=0;
    items.forEach(function(f){sum+=f.offsetHeight;});
    var min=Math.round(window.innerHeight*0.05);
    var gap=Math.round((story.offsetHeight-sum)/items.length);
    if(gap<min)gap=min;
    items.forEach(function(f){f.style.marginBottom=gap+'px';});
  }

  // collapse any item that a later item has already stacked on top of
  function stack(){
    if(!desktop()){items.forEach(function(f){f.classList.remove('behind');});return;}
    var active=-1;
    for(var i=0;i<items.length;i++){
      if(items[i].getBoundingClientRect().top <= NAV + i*OFF + 1) active=i;
    }
    items.forEach(function(f,i){f.classList.toggle('behind', i<active);});
  }

  var ticking=false;
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(function(){stack();ticking=false;});}}
  function refresh(){layout();stack();}
  refresh();
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', refresh);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(refresh);
})();

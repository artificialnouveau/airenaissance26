(function(){
  var P=[
    {id:'huang',name:'Jensen Huang',short:'Huang',tag:'NVIDIA',cat:'company',color:'#76b900',base:0.6,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jen-Hsun_Huang_2025.jpg/330px-Jen-Hsun_Huang_2025.jpg'},
    {id:'fursten',name:'Jeannette zu Furstenberg',short:'Furstenberg',tag:'General Catalyst',cat:'vc',color:'#d98a00',base:0.5,photo:null},
    {id:'vdl',name:'Ursula von der Leyen',short:'vd Leyen',tag:'EU',cat:'gov',color:'#0057FF',base:0.58,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Prime_Minister_of_Bharat%2C_Shri_Narendra_Damodardas_Modi_greets_the_President_of_the_European_Council%2C_Mr._Ant%C3%B3nio_Costa_and_the_President_of_the_European_Commission%2C_Ms._Ursula_von_der_Leyen_%283x4_cropped%29.jpg/330px-thumbnail.jpg'},
    {id:'macron',name:'Emmanuel Macron',short:'Macron',tag:'France',cat:'gov',color:'#1a4fb0',base:0.62,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg'},
    {id:'merz',name:'Friedrich Merz',short:'Merz',tag:'Germany',cat:'gov',color:'#555',base:0.5,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg/330px-2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg'},
    {id:'meloni',name:'Giorgia Meloni',short:'Meloni',tag:'Italy',cat:'gov',color:'#2e8b57',base:0.4,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Giorgia_Meloni_Official_2024_%28cropped%29.jpg/330px-Giorgia_Meloni_Official_2024_%28cropped%29.jpg'},
    {id:'sanchez',name:'Pedro Sanchez',short:'Sanchez',tag:'Spain',cat:'gov',color:'#c0392b',base:0.55,photo:'https://commons.wikimedia.org/wiki/Special:FilePath/Pedro%20S%C3%A1nchez%202023%20%28cropped%29.jpg?width=400'},
    {id:'schoof',name:'Dick Schoof',short:'Schoof',tag:'Netherlands',cat:'gov',color:'#e67e22',base:0.5,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dick_Schoof_in_2025.jpg/330px-Dick_Schoof_in_2025.jpg'},
    {id:'starmer',name:'Keir Starmer',short:'Starmer',tag:'UK',cat:'gov',color:'#34495e',base:0.45,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg/330px-Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg'},
    {id:'modi',name:'Narendra Modi',short:'Modi',tag:'India',cat:'gov',color:'#e6873a',base:0.4,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg/330px-The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg'},
    {id:'ek',name:'Daniel Ek',short:'Ek',tag:'EU angels',cat:'vc',color:'#1db954',base:0.48,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Daniel_Ek_EC_2025_%28cropped%29.jpg/330px-Daniel_Ek_EC_2025_%28cropped%29.jpg'},
    {id:'mensch',name:'Arthur Mensch',short:'Mensch',tag:'Mistral',cat:'company',color:'#ff6f3c',base:0.8,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Arthur_Mensch.png/330px-Arthur_Mensch.png'},
    {id:'andrulis',name:'Jonas Andrulis',short:'Andrulis',tag:'Aleph Alpha',cat:'company',color:'#7a3fb0',base:0.55,photo:'https://commons.wikimedia.org/wiki/Special:FilePath/Andrulis%20DLD.jpg?width=400'},
    {id:'asml',name:'Christophe Fouquet',short:'ASML',tag:'ASML',cat:'company',color:'#005b96',base:0.55,photo:null},
    {id:'tangen',name:'Nicolai Tangen',short:'Tangen',tag:'Norway fund',cat:'vc',color:'#0a7d8c',base:0.4,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/NicolaiTangen.jpg/330px-NicolaiTangen.jpg'},
    {id:'lagarde',name:'Christine Lagarde',short:'Lagarde',tag:'ECB',cat:'gov',color:'#b0306f',base:0.45,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lagarde_ECB_Portrait_2019.jpg/330px-Lagarde_ECB_Portrait_2019.jpg'},
    {id:'calvino',name:'Nadia Calvino',short:'Calvino',tag:'EIB',cat:'gov',color:'#8e44ad',base:0.5,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nadia_Calvi%C3%B1o_2023_%28cropped%29.jpg/330px-Nadia_Calvi%C3%B1o_2023_%28cropped%29.jpg'},
    {id:'son',name:'Masayoshi Son',short:'Son',tag:'SoftBank',cat:'vc',color:'#cf5b43',base:0.35,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg/330px-Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg'},
    {id:'alolama',name:'Omar Al Olama',short:'Gulf fund',tag:'UAE',cat:'vc',color:'#16a085',base:0.4,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Omar_Sultan_Al_Olama_at_the_2023_World_Economic_Forum_%28cropped%29.jpg/330px-Omar_Sultan_Al_Olama_at_the_2023_World_Economic_Forum_%28cropped%29.jpg'},
    {id:'vance',name:'JD Vance',short:'Vance',tag:'US VP',cat:'gov',color:'#9a3b3b',base:0.12,photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance_%28head-and-shoulders_cropped%29.jpg/330px-March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance_%28head-and-shoulders_cropped%29.jpg'}
  ];
  var A=[
    {id:'wafer',label:'Guarantee a 20% European wafer allocation',sub:'Chip sovereignty written into the treaty',cancels:'nvterms',d:{vdl:0.22,macron:0.22,merz:0.2,meloni:0.16,sanchez:0.18,schoof:0.2,starmer:0.1,modi:0.14,andrulis:0.16,mensch:0.1,asml:0.25,fursten:0.14,calvino:0.12,ek:0.08,huang:-0.15}},
    {id:'nvterms',label:"Keep the stack on NVIDIA's terms",sub:'Fast access, no European chip guarantee',cancels:'wafer',d:{vdl:-0.2,macron:-0.2,merz:-0.16,meloni:-0.16,sanchez:-0.16,schoof:-0.18,modi:-0.12,andrulis:-0.16,mensch:-0.1,asml:-0.2,fursten:-0.08,huang:0.22,vance:0.15}},
    {id:'weighted',label:'Weighted voting with precommitted capital',sub:'Locks members in; blocks bilateral buyouts',cancels:'consensus',d:{fursten:0.2,vdl:0.15,macron:0.1,merz:0.15,sanchez:0.1,schoof:0.1,tangen:0.16,ek:0.12,lagarde:0.12,calvino:0.12,son:0.1,alolama:0.08,meloni:0.08}},
    {id:'consensus',label:'Consensus, any member can veto',sub:'Maximum legitimacy, risk of gridlock',cancels:'weighted',d:{fursten:-0.16,vdl:-0.1,macron:-0.1,merz:-0.1,sanchez:-0.08,schoof:-0.08,tangen:-0.16,ek:-0.1,lagarde:-0.08,starmer:-0.06,meloni:0.06,modi:0.06}},
    {id:'anchor',label:'Anchor the fund with the ECB and sovereign funds',sub:'Patient, public-backed capital',cancels:'publiconly',d:{fursten:0.2,ek:0.2,tangen:0.24,lagarde:0.2,calvino:0.2,son:0.12,alolama:0.15,sanchez:0.1,andrulis:0.1,mensch:0.08}},
    {id:'publiconly',label:'Public money only, free at the point of use',sub:'No commercial returns',cancels:'anchor',d:{fursten:-0.22,ek:-0.2,tangen:-0.2,son:-0.18,alolama:-0.15,lagarde:-0.05,calvino:0.1,huang:-0.1,vdl:0.1,sanchez:0.08,meloni:0.08}},
    {id:'opensource',label:'Open-source the foundation model',sub:'Ecosystem over control',cancels:null,d:{mensch:0.2,andrulis:0.18,vdl:0.1,macron:0.08,sanchez:0.1,modi:0.15,ek:0.1,starmer:0.05,huang:0.05}},
    {id:'usbloc',label:'Align with the US technology bloc',sub:'Security and chips through Washington',cancels:'nonaligned',d:{vance:0.32,huang:0.15,starmer:0.08,meloni:0.05,vdl:-0.12,macron:-0.15,sanchez:-0.1,modi:-0.12}},
    {id:'nonaligned',label:'Stay nonaligned, trade with all sides',sub:'Maximum autonomy, harder chip access',cancels:'usbloc',d:{modi:0.22,alolama:0.12,macron:0.1,sanchez:0.08,fursten:0.05,huang:-0.1,vance:-0.22,starmer:-0.06}}
  ];
  var G=[
    {cat:'Chips and supply',ids:['wafer','nvterms']},
    {cat:'Governance',ids:['weighted','consensus']},
    {cat:'Capital structure',ids:['anchor','publiconly']},
    {cat:'Geopolitical alignment',ids:['usbloc','nonaligned']},
    {cat:'Openness',ids:['opensource']}
  ];
  var CATS=[{id:'all',label:'All'},{id:'company',label:'Companies'},{id:'gov',label:'Government Officials'},{id:'vc',label:'Venture Capitalists'}];
  var active={}, cat='all', C=240, OUT=210, INNER=30, CORE=125;
  var arena=document.getElementById('simArena'), readout=document.getElementById('simReadout'), argbox=document.getElementById('simArgs'), filterbox=document.getElementById('simFilter');
  if(!arena) return;
  function ini(n){var w=n.split(' ');return (w[0].charAt(0)+w[w.length-1].charAt(0)).toUpperCase();}
  function find(id){for(var i=0;i<A.length;i++){if(A[i].id===id)return A[i];}return null;}
  function visible(){return P.filter(function(p){return cat==='all'||p.cat===cat;});}
  P.forEach(function(p){
    var el=document.createElement('div'); el.className='sim-avatar'; el.id='sav-'+p.id; el.title=p.name+' - '+p.tag;
    var iniDiv='<div class="sim-ava-ini" style="background:'+p.color+'">'+ini(p.name)+'</div>';
    var img=p.photo?'<img class="sim-ava-img" src="'+p.photo+'" alt="'+p.name+'" loading="lazy" onerror="this.remove()">':'';
    el.innerHTML='<div class="sim-ava-wrap">'+iniDiv+img+'</div><div class="sim-ava-name">'+p.short+'</div>';
    arena.appendChild(el);
  });
  function score(p){var s=p.base;for(var k in active){if(!active[k])continue;var a=find(k);if(a&&typeof a.d[p.id]==='number')s+=a.d[p.id];}return Math.max(0.05,Math.min(1,s));}
  // a plain-language reason for where each player sits: starting lean plus the active arguments moving it
  function describe(p){
    var lines=[p.name+' — '+p.tag];
    lines.push(p.base>=0.55?'Starts leaning toward joining.':(p.base<=0.4?'Starts skeptical.':'Starts on the fence.'));
    var pulls=[], pushes=[];
    for(var k in active){if(!active[k])continue;var a=find(k);if(a&&typeof a.d[p.id]==='number'){if(a.d[p.id]>0)pulls.push(a.label);else if(a.d[p.id]<0)pushes.push(a.label);}}
    if(pulls.length)lines.push('Pulled toward the core by: '+pulls.join('; '));
    if(pushes.length)lines.push('Pushed out by: '+pushes.join('; '));
    if(!pulls.length&&!pushes.length)lines.push('No active argument moves this player.');
    return lines.join('\n');
  }
  function place(){
    var vis=visible(), core=0;
    vis.forEach(function(p,i){p.angle=(-90+i*360/vis.length)*Math.PI/180;});
    P.forEach(function(p){
      var el=document.getElementById('sav-'+p.id);
      if(cat!=='all'&&p.cat!==cat){el.style.display='none';return;}
      el.style.display='';
      var s=score(p),d=OUT-s*(OUT-INNER);
      el.style.left=(C+d*Math.cos(p.angle))+'px';
      el.style.top=(C+d*Math.sin(p.angle))+'px';
      el.title=describe(p);
      el.classList.toggle('committed', d<=CORE);
      if(d<=CORE)core++;
    });
    readout.innerHTML='<b>'+core+'</b> of '+vis.length+' in the consortium core';
  }
  function refreshArgs(){
    var btns=argbox.querySelectorAll('.sim-arg');
    for(var i=0;i<btns.length;i++){
      var id=btns[i].getAttribute('data-id'), a=find(id);
      btns[i].classList.toggle('on',!!active[id]);
      btns[i].classList.toggle('cancelled',!!(a&&a.cancels&&active[a.cancels]));
    }
  }
  function toggle(id){var a=find(id);if(active[id]){active[id]=false;}else{active[id]=true;if(a.cancels&&active[a.cancels])active[a.cancels]=false;}refreshArgs();place();}
  // hover an argument to preview who it would pull in (green) or push out (red)
  function preview(a){for(var id in a.d){var el=document.getElementById('sav-'+id);if(el)el.classList.add(a.d[id]>0?'pull':'push');}}
  function clearPreview(){var els=arena.querySelectorAll('.sim-avatar');for(var i=0;i<els.length;i++)els[i].classList.remove('pull','push');}
  // controls: clear-all button and an explainer
  var controls=document.createElement('div'); controls.className='sim-controls';
  var clearBtn=document.createElement('button'); clearBtn.type='button'; clearBtn.className='sim-clear'; clearBtn.textContent='Clear all';
  clearBtn.addEventListener('click',function(){active={};clearPreview();refreshArgs();place();});
  controls.appendChild(clearBtn);
  var hint=document.createElement('p'); hint.className='sim-hint';
  hint.innerHTML='Hover an argument to preview who it pulls toward the core (<b class="pullc">green</b>) or pushes out (<b class="pushc">red</b>). Hover a player to see why it moves.';
  controls.appendChild(hint);
  argbox.appendChild(controls);
  G.forEach(function(g){
    var wrap=document.createElement('div'); wrap.className='sim-group';
    wrap.innerHTML='<div class="sim-group-head">'+g.cat+(g.ids.length>1?' <span class="gh-pick">pick one</span>':'')+'</div>';
    var body=document.createElement('div'); if(g.ids.length>1)body.className='sim-pair';
    g.ids.forEach(function(id,idx){
      var a=find(id);
      var b=document.createElement('button');b.type='button';b.className='sim-arg';b.setAttribute('data-id',a.id);
      b.innerHTML='<div class="sim-arg-label">'+a.label+'</div><div class="sim-arg-sub">'+a.sub+'</div>';
      b.addEventListener('click',function(){toggle(a.id);});
      b.addEventListener('mouseenter',function(){preview(a);});
      b.addEventListener('mouseleave',clearPreview);
      b.addEventListener('focus',function(){preview(a);});
      b.addEventListener('blur',clearPreview);
      body.appendChild(b);
      if(g.ids.length>1&&idx===0){var vs=document.createElement('span');vs.className='sim-vs';vs.textContent='vs';body.appendChild(vs);}
    });
    wrap.appendChild(body); argbox.appendChild(wrap);
  });
  CATS.forEach(function(c){var b=document.createElement('button');b.type='button';b.textContent=c.label;if(c.id==='all')b.className='on';b.addEventListener('click',function(){cat=c.id;var fb=filterbox.querySelectorAll('button');for(var i=0;i<fb.length;i++)fb[i].classList.remove('on');b.classList.add('on');place();});filterbox.appendChild(b);});
  place();
})();

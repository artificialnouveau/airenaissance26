(function(){
  var P=[
    {id:'huang',name:'Jensen Huang',short:'Huang',tag:'NVIDIA',cat:'company',color:'#76b900',base:0.6,stance:'Wants every nation buying NVIDIA chips. Backs the deal when it drives GPU demand, and resists anything that signs away chip leverage or returns.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jen-Hsun_Huang_2025.jpg/330px-Jen-Hsun_Huang_2025.jpg'},
    {id:'fursten',name:'Jeannette zu Furstenberg',short:'Furstenberg',tag:'General Catalyst',cat:'vc',color:'#d98a00',base:0.5,stance:'Believes European sovereignty means funding homegrown champions with patient private capital, not just regulating them. Wants lock-in and real returns.',photo:null},
    {id:'vdl',name:'Ursula von der Leyen',short:'vd Leyen',tag:'EU',cat:'gov',color:'#0057FF',base:0.58,stance:'Wants a credible European stack and rules that actually hold, without rupturing the transatlantic relationship.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Prime_Minister_of_Bharat%2C_Shri_Narendra_Damodardas_Modi_greets_the_President_of_the_European_Council%2C_Mr._Ant%C3%B3nio_Costa_and_the_President_of_the_European_Commission%2C_Ms._Ursula_von_der_Leyen_%283x4_cropped%29.jpg/330px-thumbnail.jpg'},
    {id:'macron',name:'Emmanuel Macron',short:'Macron',tag:'France',cat:'gov',color:'#1a4fb0',base:0.62,stance:'Pushes hardest for European strategic autonomy and homegrown champions. Wary of US lock-in, keen to keep options open.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg'},
    {id:'merz',name:'Friedrich Merz',short:'Merz',tag:'Germany',cat:'gov',color:'#555',base:0.5,stance:'Pragmatic and industry-minded. Wants competitiveness and a stable, rules-based structure before committing capital.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg/330px-2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg'},
    {id:'meloni',name:'Giorgia Meloni',short:'Meloni',tag:'Italy',cat:'gov',color:'#2e8b57',base:0.4,stance:'Sovereignty-minded but cost-cautious. Wants a seat at the table without overextending, and is comfortable closer to Washington.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Giorgia_Meloni_Official_2024_%28cropped%29.jpg/330px-Giorgia_Meloni_Official_2024_%28cropped%29.jpg'},
    {id:'sanchez',name:'Pedro Sanchez',short:'Sanchez',tag:'Spain',cat:'gov',color:'#c0392b',base:0.55,stance:'Backs a public-spirited European effort and southern-Europe hosting. Favours openness and inclusion over pure commercial terms.',photo:'https://commons.wikimedia.org/wiki/Special:FilePath/Pedro%20S%C3%A1nchez%202023%20%28cropped%29.jpg?width=400'},
    {id:'starmer',name:'Keir Starmer',short:'Starmer',tag:'UK',cat:'gov',color:'#34495e',base:0.45,stance:'Hedges between Washington and Brussels. Pragmatic about access and security, reluctant to fully bind to either bloc.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg/330px-Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg'},
    {id:'modi',name:'Narendra Modi',short:'Modi',tag:'India',cat:'gov',color:'#e6873a',base:0.4,stance:'Wants autonomy and open models, and trade with all sides. Resists being pulled into a single power’s bloc.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg/330px-The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg'},
    {id:'ek',name:'Daniel Ek',short:'Ek',tag:'EU angels',cat:'vc',color:'#1db954',base:0.48,stance:'Capital-markets liberaliser. Backs scale and private returns; sceptical of public-money-only models that crowd out venture.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Daniel_Ek_EC_2025_%28cropped%29.jpg/330px-Daniel_Ek_EC_2025_%28cropped%29.jpg'},
    {id:'mensch',name:'Arthur Mensch',short:'Mensch',tag:'Mistral',cat:'company',color:'#ff6f3c',base:0.8,stance:'Already committed to open European frontier models. Wants the ecosystem and chip supply to grow around them.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Arthur_Mensch.png/330px-Arthur_Mensch.png'},
    {id:'andrulis',name:'Jonas Andrulis',short:'Andrulis',tag:'Aleph Alpha',cat:'company',color:'#7a3fb0',base:0.55,stance:'European champion betting on sovereign, open models for regulated and domain use. Wants European chip and capital backing.',photo:'https://commons.wikimedia.org/wiki/Special:FilePath/Andrulis%20DLD.jpg?width=400'},
    {id:'asml',name:'Christophe Fouquet',short:'ASML',tag:'ASML',cat:'company',color:'#005b96',base:0.55,stance:'Holds Europe’s one true chokepoint, EUV lithography. Wants chip sovereignty written into the treaty above all else.',photo:null},
    {id:'tangen',name:'Nicolai Tangen',short:'Tangen',tag:'Norway fund',cat:'vc',color:'#0a7d8c',base:0.4,stance:'Long-horizon sovereign investor. Wants disciplined returns and a credible, lock-in structure before deploying capital.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/NicolaiTangen.jpg/330px-NicolaiTangen.jpg'},
    {id:'lagarde',name:'Christine Lagarde',short:'Lagarde',tag:'ECB',cat:'gov',color:'#b0306f',base:0.45,stance:'Cautious potential public anchor. Open to patient, public-backed capital, but guards against open-ended fiscal risk.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lagarde_ECB_Portrait_2019.jpg/330px-Lagarde_ECB_Portrait_2019.jpg'},
    {id:'calvino',name:'Nadia Calvino',short:'Calvino',tag:'EIB',cat:'gov',color:'#8e44ad',base:0.5,stance:'Channels public investment into European infrastructure. Favours structure, inclusion, and a public stake in the upside.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nadia_Calvi%C3%B1o_2023_%28cropped%29.jpg/330px-Nadia_Calvi%C3%B1o_2023_%28cropped%29.jpg'},
    {id:'son',name:'Masayoshi Son',short:'Son',tag:'SoftBank',cat:'vc',color:'#cf5b43',base:0.35,stance:'Chases the biggest scale bet going. In for hyperscale, lock-in upside; out the moment terms turn public-only.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg/330px-Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg'},
    {id:'alolama',name:'Omar Al Olama',short:'Gulf fund',tag:'UAE',cat:'vc',color:'#16a085',base:0.4,stance:'Sovereign-fund capital seeking access and optionality. Nonaligned by preference, happy to fund all sides.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Omar_Sultan_Al_Olama_at_the_2023_World_Economic_Forum_%28cropped%29.jpg/330px-Omar_Sultan_Al_Olama_at_the_2023_World_Economic_Forum_%28cropped%29.jpg'},
    {id:'vance',name:'JD Vance',short:'Vance',tag:'US VP',cat:'gov',color:'#9a3b3b',base:0.12,stance:'Wants Europe inside the US technology bloc, on American terms. Opposes a sovereign stack that loosens that grip.',photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance_%28head-and-shoulders_cropped%29.jpg/330px-March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance_%28head-and-shoulders_cropped%29.jpg'},
    {id:'altman',name:'Sam Altman',short:'Altman',tag:'OpenAI',cat:'company',color:'#10a37f',base:0.2,stance:'Wants the world, Europe included, building on US frontier models; backs light-touch rules and US leadership.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.altman:null)},
    {id:'amodei',name:'Dario Amodei',short:'Amodei',tag:'Anthropic',cat:'company',color:'#cc785c',base:0.22,stance:'Safety-first US lab; sees frontier AI as powerful and risky, and keeps its models closed.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.amodei:null)},
    {id:'suleyman',name:'Mustafa Suleyman',short:'Suleyman',tag:'Microsoft AI',cat:'company',color:'#0a7be0',base:0.18,stance:'Runs Microsoft AI; treats Europe as a market for US-built copilots, not a rival frontier.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.suleyman:null)},
    {id:'nadella',name:'Satya Nadella',short:'Nadella',tag:'Microsoft',cat:'company',color:'#0067b8',base:0.2,stance:'Microsoft sells the cloud and models Europe rents; happy to host sovereignty, not to cede the stack.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.nadella:null)},
    {id:'pichai',name:'Sundar Pichai',short:'Pichai',tag:'Google',cat:'company',color:'#4285f4',base:0.18,stance:'Google offers its own models and cloud; a European consortium competes with its platform.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.pichai:null)},
    {id:'garman',name:'Matt Garman',short:'Garman',tag:'AWS',cat:'company',color:'#ff9900',base:0.18,stance:'AWS is the cloud much of Europe runs on; prefers Europe buying capacity over building its own.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.garman:null)},
    {id:'cook',name:'Tim Cook',short:'Cook',tag:'Apple',cat:'company',color:'#888888',base:0.2,stance:'Apple keeps AI on-device and partners selectively; a US-anchored, low-friction order suits it.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.cook:null)},
    {id:'musk',name:'Elon Musk',short:'Musk',tag:'xAI',cat:'company',color:'#111111',base:0.15,stance:'Runs xAI and open-ish Grok; US-aligned and idiosyncratic, not a European-consortium joiner.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.musk:null)},
    {id:'thiel',name:'Peter Thiel',short:'Thiel',tag:'Founders Fund',cat:'vc',color:'#1a1a2e',base:0.15,stance:'US-bloc investor hostile to public money and European regulation; backs American technological primacy.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.thiel:null)},
    {id:'gomez',name:'Aidan Gomez',short:'Gomez',tag:'Cohere',cat:'company',color:'#39594d',base:0.4,stance:'Cohere builds enterprise and sovereign-data models; Western but not a US giant, open to sovereignty work.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.gomez:null)},
    {id:'liang',name:'Liang Wenfeng',short:'Liang',tag:'DeepSeek',cat:'company',color:'#4d6bfe',base:0.3,stance:'DeepSeek ships strong open-weight models from China; champions open source and a nonaligned order.',photo:null},
    {id:'pengxiao',name:'Peng Xiao',short:'Peng Xiao',tag:'G42',cat:'company',color:'#b8860b',base:0.4,stance:'Builds the Gulf sovereign AI stack; hedges between the US and China and follows the capital.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.pengxiao:null)},
    {id:'lula',name:'Lula da Silva',short:'Lula',tag:'Brazil',cat:'gov',color:'#009c3b',base:0.5,stance:'Global South leader; wants nonaligned, open AI and a clean-energy data-centre role for Brazil.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.lula:null)},
    {id:'jetten',name:'Rob Jetten',short:'Jetten',tag:'Netherlands',cat:'gov',color:'#e67e22',base:0.55,stance:'Pro-European and pro-ASML; wants Europe to turn its chip leverage into a real sovereign stack.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.jetten:null)},
    {id:'lee',name:'Lee Jae-myung',short:'Lee',tag:'South Korea',cat:'gov',color:'#c0392b',base:0.4,stance:'Korea has chips and hedges toward the US; interested in autonomy but tied to American compute.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.lee:null)},
    {id:'takaichi',name:'Sanae Takaichi',short:'Takaichi',tag:'Japan',cat:'gov',color:'#bc002d',base:0.3,stance:'Japan leans all-in with the US (Stargate, Genesis); a European bloc is not its first call.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.takaichi:null)},
    {id:'sanders',name:'Bernie Sanders',short:'Sanders',tag:'US Senator',cat:'gov',color:'#2a6f97',base:0.5,stance:'Wants public, open AI built for people rather than corporate concentration; sceptical of the big US labs.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.sanders:null)},
    {id:'rutte',name:'Mark Rutte',short:'Rutte',tag:'NATO',cat:'gov',color:'#234e70',base:0.4,stance:'NATO chief; sees compute as security and leans on the US alliance, wary of decoupling.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.rutte:null)},
    {id:'mattarella',name:'Sergio Mattarella',short:'Mattarella',tag:'Italy',cat:'gov',color:'#3f7d5a',base:0.5,stance:'Italy head of state; puts the person at the centre and wants rules and public purpose around AI.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.mattarella:null)},
    {id:'burnham',name:'Andy Burnham',short:'Burnham',tag:'UK',cat:'gov',color:'#6a1b9a',base:0.5,stance:'UK public-sector voice; favours public investment and open tools over dependence on US platforms.',photo:(typeof PHOTOS!=='undefined'?PHOTOS.burnham:null)}
  ];
  var A=[
    {id:'wafer',label:'Guarantee a 20% European wafer allocation',sub:'Chip sovereignty written into the treaty',tip:'A treaty clause reserving a fifth of leading-edge chip fabrication for Europe, so the consortium controls supply at the transistor, not just rents it.',cancels:'nvterms',d:{vdl:0.22,macron:0.22,merz:0.2,meloni:0.16,sanchez:0.18,starmer:0.1,modi:0.14,andrulis:0.16,mensch:0.1,asml:0.25,fursten:0.14,calvino:0.12,ek:0.08,huang:-0.15,thiel:-0.1,altman:-0.08,nadella:-0.06,garman:-0.06,jetten:0.18,mattarella:0.12,gomez:0.05,lula:0.05,burnham:0.06,pengxiao:0.05,lee:0.05}},
    {id:'nvterms',label:"Keep the stack on NVIDIA's terms",sub:'Fast access, no European chip guarantee',tip:"Take NVIDIA's fast chip access and capital without any European fabrication guarantee: speed and scale now, dependence later.",cancels:'wafer',d:{vdl:-0.2,macron:-0.2,merz:-0.16,meloni:-0.16,sanchez:-0.16,modi:-0.12,andrulis:-0.16,mensch:-0.1,asml:-0.2,fursten:-0.08,huang:0.22,vance:0.15,altman:0.12,amodei:0.08,suleyman:0.12,nadella:0.14,pichai:0.12,garman:0.14,cook:0.08,musk:0.08,thiel:0.1,takaichi:0.1,lee:0.06,rutte:0.08,liang:-0.1,sanders:-0.15}},
    {id:'weighted',label:'Weighted voting with precommitted capital',sub:'Locks members in; blocks bilateral buyouts',tip:'Members vote in proportion to capital they lock in up front, which stops any one country from being quietly bought out of the consortium.',cancels:'consensus',d:{fursten:0.2,vdl:0.15,macron:0.1,merz:0.15,sanchez:0.1,tangen:0.16,ek:0.12,lagarde:0.12,calvino:0.12,son:0.1,alolama:0.08,meloni:0.08,jetten:0.1,mattarella:0.08}},
    {id:'consensus',label:'Consensus, any member can veto',sub:'Maximum legitimacy, risk of gridlock',tip:'Every member must agree. Maximum legitimacy and trust, but a single holdout can stall the whole consortium.',cancels:'weighted',d:{fursten:-0.16,vdl:-0.1,macron:-0.1,merz:-0.1,sanchez:-0.08,tangen:-0.16,ek:-0.1,lagarde:-0.08,starmer:-0.06,meloni:0.06,modi:0.06,lula:0.06,mattarella:0.08,burnham:0.05}},
    {id:'anchor',label:'Anchor the fund with the ECB and sovereign funds',sub:'Patient, public-backed capital',tip:'Back the fund with patient public capital (the ECB and national wealth funds) so it can take long-horizon bets commercial investors would avoid.',cancels:'publiconly',d:{fursten:0.2,ek:0.2,tangen:0.24,lagarde:0.2,calvino:0.2,son:0.12,alolama:0.15,sanchez:0.1,andrulis:0.1,mensch:0.08,pengxiao:0.15,mattarella:0.1,burnham:0.08,lula:0.08,sanders:0.1}},
    {id:'publiconly',label:'Public money only, free at the point of use',sub:'No commercial returns',tip:'Fund it entirely with public money and give the models away free, with no commercial returns. Maximizes access, but repels private investors.',cancels:'anchor',d:{fursten:-0.22,ek:-0.2,tangen:-0.2,son:-0.18,alolama:-0.15,lagarde:-0.05,calvino:0.1,huang:-0.1,vdl:0.1,sanchez:0.08,meloni:0.08,sanders:0.25,burnham:0.12,mattarella:0.08,lula:0.1,thiel:-0.2,altman:-0.2,nadella:-0.15,suleyman:-0.15,pichai:-0.12,garman:-0.12,amodei:-0.1,cook:-0.08}},
    {id:'opensource',label:'Open-source the foundation model',sub:'Ecosystem over control',tip:'Release the model weights openly so anyone can build on them, favouring ecosystem growth over proprietary control.',cancels:null,d:{mensch:0.2,andrulis:0.18,vdl:0.1,macron:0.08,sanchez:0.1,modi:0.15,ek:0.1,starmer:0.05,huang:0.05,liang:0.25,gomez:0.15,musk:0.12,sanders:0.15,lula:0.15,mattarella:0.06,burnham:0.08,jetten:0.05,altman:-0.1,amodei:-0.12,suleyman:-0.05}},
    {id:'usbloc',label:'Align with the US technology bloc',sub:'Security and chips through Washington',tip:'Tie the consortium to the United States for security guarantees and reliable chip access, at the cost of strategic autonomy.',cancels:'nonaligned',d:{vance:0.32,huang:0.15,starmer:0.08,meloni:0.05,vdl:-0.12,macron:-0.15,sanchez:-0.1,modi:-0.12,altman:0.25,amodei:0.2,suleyman:0.22,nadella:0.22,pichai:0.2,garman:0.2,cook:0.18,musk:0.15,thiel:0.3,rutte:0.22,takaichi:0.2,lee:0.12,sanders:-0.1,lula:-0.15,liang:-0.2,mattarella:-0.05}},
    {id:'nonaligned',label:'Stay nonaligned, trade with all sides',sub:'Maximum autonomy, harder chip access',tip:'Keep independence by dealing with all powers and committing to none. Maximum autonomy, but chip access gets harder.',cancels:'usbloc',d:{modi:0.22,alolama:0.12,macron:0.1,sanchez:0.08,fursten:0.05,huang:-0.1,vance:-0.22,starmer:-0.06,lula:0.2,liang:0.2,pengxiao:0.15,gomez:0.08,lee:0.05,takaichi:-0.1,rutte:-0.15,thiel:-0.15,nadella:-0.12,altman:-0.12,suleyman:-0.12,pichai:-0.1,garman:-0.1,cook:-0.1}}
  ];
  var G=[
    {cat:'Chips and supply',ids:['wafer','nvterms']},
    {cat:'Governance',ids:['weighted','consensus']},
    {cat:'Capital structure',ids:['anchor','publiconly']},
    {cat:'Geopolitical alignment',ids:['usbloc','nonaligned']},
    {cat:'Openness',ids:['opensource']}
  ];
  var CATS=[{id:'all',label:'All'},{id:'company',label:'Companies'},{id:'gov',label:'Government Officials'},{id:'vc',label:'Venture Capitalists'}];
  var active={}, committed={}, cat='all', C=280, OUT=240, INNER=34, CORE=150;
  // map simulation ids to player-card ids where they differ, so clicking opens the card
  var CARDID={vdl:'vonderleyen',fursten:'furstenberg'};
  var arena=document.getElementById('simArena'), readout=document.getElementById('simReadout'), argbox=document.getElementById('simArgs'), filterbox=document.getElementById('simFilter'), inspect=document.getElementById('simInspect');
  if(!arena) return;
  function ini(n){var w=n.split(' ');return (w[0].charAt(0)+w[w.length-1].charAt(0)).toUpperCase();}
  function find(id){for(var i=0;i<A.length;i++){if(A[i].id===id)return A[i];}return null;}
  function visible(){return P.filter(function(p){return cat==='all'||p.cat===cat;});}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  P.forEach(function(p){
    var el=document.createElement('div'); el.className='sim-avatar'; el.id='sav-'+p.id; el.title=p.name+' - '+p.tag; el.setAttribute('tabindex','0');
    var iniDiv='<div class="sim-ava-ini" style="background:'+p.color+'">'+ini(p.name)+'</div>';
    var img=p.photo?'<img class="sim-ava-img" src="'+p.photo+'" alt="'+p.name+'" loading="lazy" onerror="this.remove()">':'';
    el.innerHTML='<div class="sim-ava-wrap">'+iniDiv+img+'</div><div class="sim-ava-name">'+p.short+'</div>';
    el.addEventListener('mouseenter',function(){renderInspect(p);});
    el.addEventListener('focus',function(){renderInspect(p);});
    el.addEventListener('click',function(){var cid=CARDID[p.id]||p.id;if(typeof openModal==='function')openModal(cid);});
    el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();var cid=CARDID[p.id]||p.id;if(typeof openModal==='function')openModal(cid);}});
    arena.appendChild(el);
  });
  // explain, per category, what each choice does to this player and why we would move them
  function effGroups(p){
    var out=[];
    G.forEach(function(g){
      var items=[];
      g.ids.forEach(function(id){var a=find(id);if(a&&typeof a.d[p.id]==='number')items.push({label:a.label,d:a.d[p.id],active:!!active[id]});});
      if(items.length)out.push({cat:g.cat,items:items});
    });
    return out;
  }
  function renderInspect(p){
    if(!inspect)return;
    var lean=p.base>=0.55?'Starts leaning toward joining':(p.base<=0.4?'Starts skeptical':'Starts on the fence');
    var h='<div class="si-head"><span class="si-name">'+esc(p.name)+'</span><span class="si-tag" style="color:'+p.color+'">'+esc(p.tag)+'</span></div>';
    h+='<p class="si-lean">'+lean+'.</p>';
    if(p.stance)h+='<p class="si-stance">'+esc(p.stance)+'</p>';
    var groups=effGroups(p);
    if(groups.length){
      h+='<div class="si-cats">';
      groups.forEach(function(g){
        h+='<div class="si-cat"><div class="si-catname">'+esc(g.cat)+'</div>';
        g.items.forEach(function(it){
          var cls=it.d>0?'pull':'push', arrow=it.d>0?'▲':'▼', verb=it.d>0?'pulls in':'pushes out';
          h+='<div class="si-eff '+cls+(it.active?' on':'')+'"><span class="si-arrow">'+arrow+'</span> '+esc(it.label)+' <span class="si-verb">'+verb+(it.active?', active now':'')+'</span></div>';
        });
        h+='</div>';
      });
      h+='</div>';
    }
    inspect.innerHTML=h;
  }
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
    committed={};
    vis.forEach(function(p,i){p.angle=(-90+i*360/vis.length)*Math.PI/180;});
    P.forEach(function(p){
      var el=document.getElementById('sav-'+p.id);
      if(cat!=='all'&&p.cat!==cat){el.style.display='none';return;}
      el.style.display='';
      var s=score(p),d=OUT-s*(OUT-INNER);
      el.style.left=(C+d*Math.cos(p.angle))+'px';
      el.style.top=(C+d*Math.sin(p.angle))+'px';
      el.title=describe(p);
      var inCore=d<=CORE; el.classList.toggle('committed', inCore);
      committed[p.id]=inCore;
      if(inCore)core++;
    });
    readout.innerHTML='<b>'+core+'</b> of '+vis.length+' in the consortium core';
    updateGlobe();
  }
  // globe: each player maps to a country (ISO numeric id); a country lights up
  // when one of its players reaches the core
  var ISO={huang:'840',vance:'840',fursten:'276',vdl:'56',lagarde:'276',calvino:'442',macron:'250',mensch:'250',merz:'276',andrulis:'276',meloni:'380',sanchez:'724',asml:'528',starmer:'826',modi:'356',ek:'752',tangen:'578',son:'392',alolama:'784',altman:'840',amodei:'840',suleyman:'840',nadella:'840',pichai:'840',garman:'840',cook:'840',musk:'840',thiel:'840',sanders:'840',gomez:'124',liang:'156',pengxiao:'784',lula:'76',jetten:'528',lee:'410',takaichi:'392',rutte:'528',mattarella:'380',burnham:'826'};
  var globeCount=document.getElementById('simGlobeCount'), simGlobeObj=null;
  function buildGlobe(){
    var svg=document.getElementById('simGlobe');
    if(svg&&window.AIRGlobe)simGlobeObj=window.AIRGlobe(svg,{spin:true,speed:0.08,lng:-12,lat:32,radius:78,cx:100,cy:100});
  }
  function updateGlobe(){
    var set={},n=0;
    for(var id in committed){if(committed[id]&&ISO[id]&&!set[ISO[id]]){set[ISO[id]]=true;n++;}}
    if(simGlobeObj)simGlobeObj.highlight(Object.keys(set));
    if(globeCount)globeCount.textContent=n;
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
      if(a.tip)b.title=a.tip;
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
  if(inspect)inspect.innerHTML='<p class="si-empty">Hover or tap a player to see their stance and, for each category, which choice pulls them toward the core or pushes them out.</p>';
  buildGlobe();
  place();
})();

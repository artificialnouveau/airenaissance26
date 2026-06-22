// Spectrum order: left (build fast / frontier opportunity) to right (AI as state power).
// Sam Altman and Jensen Huang are adjacent (closest); Vladimir Putin is at the far end.
const PEOPLE = [
  { id:'altman', name:'Sam Altman', short:'Sam Altman', role:'CEO, OpenAI', cluster:'opportunity',
    stance:'Frames AI as a transformative opportunity that still needs guardrails, and has asked governments directly to regulate frontier models. Closest on this axis to Jensen Huang: both speak to heads of state about building the technology fast.',
    quote:'"Regulatory intervention by governments will be critical to mitigate the risks of increasingly powerful models."', verbatim:true,
    reading:{label:'Written testimony, U.S. Senate Judiciary', url:'https://www.judiciary.senate.gov/imo/media/doc/2023-05-16%20-%20Bio%20&%20Testimony%20-%20Altman.pdf'},
    videos:[
      {id:'fP5YdyjTfG0', title:'Senate testimony on AI oversight', desc:'Altman tells the Senate Judiciary subcommittee that regulation will be critical to manage increasingly powerful models. May 16, 2023.', ts:'Approx.', channel:'CNBC Television'},
      {id:'15UZCAr3shU', title:'World Government Summit, Dubai', desc:'Altman speaks with the UAE AI minister on AI’s trajectory and what governments should do. February 2024.', ts:'Approx.', channel:'Reuters'}
    ]},
  { id:'musk', name:'Elon Musk', short:'Elon Musk', role:'CEO, xAI; CEO, Tesla', cluster:'race',
    stance:'Warned for a decade that AI is an existential risk needing oversight, then built it himself: he co-founded OpenAI, broke with it and sued it, and now runs xAI and its Grok models on one of the world’s largest single training clusters.',
    quote:'"With artificial intelligence, we are summoning the demon."', verbatim:true,
    reading:{label:'Washington Post, Musk on "summoning the demon"', url:'https://www.washingtonpost.com/news/innovations/wp/2014/10/24/elon-musk-with-artificial-intelligence-we-are-summoning-the-demon/'},
    videos:[
      {id:'R2meHtrO1n8', title:'In conversation with Rishi Sunak', desc:'Musk and the UK PM discuss AI’s promise and existential risk at the close of the Bletchley Park AI Safety Summit. November 2023.', ts:'Approx.', channel:'AI Safety Summit fireside'},
      {id:'cL-TdxFsqaw', title:'A future where "no job is needed"', desc:'In the same Bletchley conversation, Musk predicts AI will eventually be able to do every job. November 2023.', ts:'Approx.', channel:'Summit interview clip'}
    ]},
  { id:'huang', name:'Jensen Huang', short:'Jensen Huang', role:'CEO, NVIDIA', cluster:'sovereignty',
    stance:'The most-quoted voice on sovereign AI: every nation should own the production of its own intelligence, its data, and its culture. Sits closest to Altman, one step toward the state side because his pitch is aimed squarely at governments.',
    quote:'"Every country needs to own the production of their own intelligence."', verbatim:true,
    reading:{label:'NVIDIA, Every Country Needs Sovereign AI', url:'https://blogs.nvidia.com/blog/world-governments-summit/'},
    videos:[
      {id:'o6CUzsxH-2I', title:'How NVIDIA’s CEO envisions AI transforming governments', desc:'At the World Governments Summit in Dubai, Huang argues every country needs sovereign AI to codify its own culture and history.', ts:'Approx.', channel:'ExpovistaTV'},
      {id:'I-nYjAfemY0', title:'Full remarks at Davos', desc:'Huang makes the case at the World Economic Forum that data is a national resource and AI infrastructure is the new industrial base.', ts:'Approx.', channel:'Forbes'}
    ]},
  { id:'amodei', name:'Dario Amodei', short:'Dario Amodei', role:'CEO, Anthropic', cluster:'power',
    stance:'A frontier-lab founder who ties AI leadership to the future of democracy, export controls, and competition with China.',
    quote:'AI leadership will decide whether democracies or autocracies set the terms of the technology.', verbatim:false,
    videos:[
      {id:'3gu6a1WiGNI', title:'AI competition, export controls, and democracy', desc:'Amodei argues that who leads in AI shapes whether democracies or autocracies write the rules.', ts:'Approx.', channel:'Interview clip'},
      {id:'x2VHFgyawPE', title:'Inside the mind of Dario Amodei', desc:'An extended interview on Anthropic, the race with rivals, and the stakes of frontier AI.', ts:'Approx.', channel:'Bloomberg Originals'}
    ]},
  { id:'suleyman', name:'Mustafa Suleyman', short:'M. Suleyman', role:'CEO, Microsoft AI', cluster:'guard',
    stance:'Argues in The Coming Wave that AI and synthetic biology will test the power of the nation-state itself, and that containment, not just opportunity, is the central problem.',
    quote:'The coming wave will test the power of the nation-state itself; containment is the central problem.', verbatim:false,
    videos:[
      {id:'eJf6QPN9yic', title:'The AI pioneer on The Coming Wave', desc:'A wide-ranging talk on how AI reshapes power between citizens, companies, and states.', ts:'Approx.', channel:'Intelligence Squared'},
      {id:'Zc4csOv7QtM', title:'Technology, power, and the future of AI', desc:'Suleyman on why governments need new tools to keep pace with the coming wave.', ts:'Approx.', channel:'Metis Strategy'},
      {id:'JmrA_BZ7XMA', title:'"There is no off switch"', desc:'On the speed of AI development and why containment is harder than it sounds.', ts:'Approx.', channel:'Dr. Mayim Bialik'}
    ]},
  { id:'nadella', name:'Satya Nadella', short:'Satya Nadella', role:'CEO, Microsoft', cluster:'beyond',
    stance:'Frames AI as a general-purpose platform shift Microsoft delivers at global scale through Azure, Copilot, and the OpenAI partnership, with sovereign-cloud options for governments.',
    quote:'AI should empower every person and organization on the planet.', verbatim:false,
    videos:[
      {id:'w87UvmMcmW4', title:'On the future of AI', desc:'Nadella on where AI is heading and how Microsoft is rebuilding its products around it.', ts:'Approx.', channel:'Matthew Berman'},
      {id:'8-boBsWcr5A', title:'How Microsoft thinks about AGI', desc:'A long-form interview on AGI, compute, and Microsoft’s AI strategy.', ts:'Approx.', channel:'Dwarkesh Patel'}
    ]},
  { id:'pichai', name:'Sundar Pichai', short:'Sundar Pichai', role:'CEO, Google and Alphabet', cluster:'opportunity',
    stance:'Frames AI as a platform shift on the scale of fire or electricity, delivered through global cloud infrastructure.',
    quote:'AI is more profound than fire or electricity for what humanity is working on.', verbatim:false,
    videos:[
      {id:'BYx63PKKPvg', title:'Full interview: the AI boom and the future of AI', desc:'Pichai on opportunity, risk, and Google’s role in deploying AI at global scale.', ts:'Approx.', channel:'BBC'},
      {id:'RgV57kDzcng', title:'On AI backlash, the future of work, and Google’s next era', desc:'Pichai on the pushback against AI, the impact on jobs, and where Google goes next.', ts:'Approx.', channel:'Hard Fork'}
    ]},
  { id:'garman', name:'Matt Garman', short:'Matt Garman', role:'CEO, Amazon Web Services', cluster:'beyond',
    stance:'Pitches AWS as the neutral infrastructure layer of AI: its own Trainium chips, the widest model choice through Bedrock, a deep Anthropic partnership, and sovereign-cloud regions.',
    quote:'The cloud with the best, broadest AI infrastructure will power the AI era.', verbatim:false,
    videos:[
      {id:'q3Sb9PemsSo', title:'re:Invent 2025 keynote', desc:'Garman unveils AWS AI infrastructure, chips, and services at the cloud’s flagship event.', ts:'Approx.', channel:'AWS Events'},
      {id:'PPVkOq-vKrw', title:'On the AI race', desc:'Garman on AWS’s AI strategy, Anthropic, and competition with Microsoft and Google.', ts:'Approx.', channel:'Bloomberg Podcasts'}
    ]},
  { id:'mensch', name:'Arthur Mensch', short:'Arthur Mensch', role:'CEO, Mistral AI', cluster:'stack',
    stance:'Europe’s leading frontier-model founder, arguing the continent can and must build its own competitive, open-weight AI rather than depend on US labs.',
    quote:'Europe has about two years to build sovereign AI, or become dependent.', verbatim:false,
    videos:[
      {id:'325gGv0eWV8', title:'Europe’s $14 billion AI challenger', desc:'Mensch on Mistral’s bid to prove Europe can build frontier AI of its own.', ts:'Approx.', channel:'CNBC International'},
      {id:'J-DDSskLgOM', title:'"Europe can build successful AI tech"', desc:'Mensch makes the case that European sovereign AI is viable, not just aspirational.', ts:'Approx.', channel:'CNBC International Live'}
    ]},
  { id:'liang', name:'Liang Wenfeng', short:'Liang Wenfeng', role:'Founder and CEO, DeepSeek', cluster:'stack',
    stance:'The face of China’s open-source AI: DeepSeek’s freely released R1 matched top US labs at a fraction of the cost, a moment widely called AI’s "Sputnik." Argues China should lead rather than follow, and that open weights build a shared ecosystem.',
    quote:'China’s AI must lead, not follow forever, and open source is how you build a shared ecosystem.', verbatim:false,
    reading:{label:'MIT Technology Review on DeepSeek', url:'https://www.technologyreview.com/2025/01/24/1110526/china-deepseek-top-ai-despite-sanctions/'},
    videos:[
      {id:'4WECPzmgfzA', title:'"China’s AI must lead, not follow forever"', desc:'A translated interview with the reclusive DeepSeek founder on open source, cost, and why China should set the pace rather than copy US labs. January 2025.', ts:'Approx.', channel:'Interview (translated)'},
      {id:'LomadNRFWpE', title:'Received by China’s Premier Li Qiang', desc:'Footage of Liang welcomed by Premier Li Qiang, a sign of how central DeepSeek’s open-source breakthrough became to the Chinese state. January 2025.', ts:'Approx.', channel:'News footage'}
    ]},
  { id:'gomez', name:'Aidan Gomez', short:'Aidan Gomez', role:'CEO, Cohere', cluster:'stack',
    stance:'Builds enterprise-and-government AI that runs inside the customer’s own environment, positioning Cohere as the private, sovereign alternative to consumer AI giants.',
    quote:'AI should make people more effective, deployed privately inside the enterprise.', verbatim:false,
    videos:[
      {id:'jW6wAz2nYls', title:'On the next wave of generative AI', desc:'Gomez on enterprise adoption and where generative AI is heading.', ts:'Approx.', channel:'Bloomberg Live'},
      {id:'2XRpTZpHjfc', title:'No Priors: foundation models and Cohere', desc:'A long-form conversation on enterprise AI, agents, and Cohere’s strategy.', ts:'Approx.', channel:'No Priors'}
    ]},
  { id:'andrulis', name:'Jonas Andrulis', short:'Jonas Andrulis', role:'CEO, Aleph Alpha', cluster:'stack',
    stance:'Germany’s sovereign-AI founder, building transparent, auditable models and infrastructure for European governments and industry rather than chasing consumer scale.',
    quote:'Europe needs its own trustworthy, transparent AI and the tech sovereignty to run it.', verbatim:false,
    videos:[
      {id:'KGxEdotG0-4', title:'Why does Europe need more tech sovereignty?', desc:'Andrulis on Europe’s case for sovereign, transparent AI. Innovate Europe podcast.', ts:'Approx.', channel:'Innovate Europe Foundation'},
      {id:'AZEQ7et_Lrk', title:'On AI regulation, competition, and investment', desc:'Andrulis on Europe’s AI position, regulation, and Aleph Alpha’s role.', ts:'Approx.', channel:'CNBC Television'}
    ]},
  { id:'vance', name:'JD Vance', short:'JD Vance', role:'Vice President of the United States', cluster:'opportunity',
    stance:'Rejected European-style precaution at the Paris summit in favour of an opportunity-first, deregulatory, American-dominance framing of AI.',
    quote:'"I’m not here to talk about AI safety ... I’m here to talk about AI opportunity."', verbatim:true,
    reading:{label:'American Presidency Project, full remarks', url:'https://www.presidency.ucsb.edu/documents/remarks-the-vice-president-the-artificial-intelligence-action-summit-paris-france'},
    videos:[
      {id:'CC2GOUXSO7o', title:'Address at the AI Action Summit, Paris', desc:'Vance lays out a deregulatory, opportunity-first vision and says the US intends to keep its AI lead. February 11, 2025.', ts:'Approx.', channel:'Roll Call Factbase Videos'},
      {id:'FnA34z4aSXU', title:'"Always center American workers in our AI policy"', desc:'At the American Dynamism Summit in Washington, Vance pledges to keep US workers at the center of AI policy. March 2025.', ts:'Approx.', channel:'Forbes Breaking News'}
    ]},
  { id:'son', name:'Masayoshi Son', short:'Masayoshi Son', role:'CEO, SoftBank Group', cluster:'opportunity',
    stance:'The most bullish investor voice: AI as a wave far larger than the internet, worth staking the firm on.',
    quote:'The AI wave is roughly fifty times bigger than the dotcom boom.', verbatim:false,
    videos:[
      {id:'jLSLZ6zYq2Y', title:'AI is "50x bigger" than the dotcom boom', desc:'Son on why he sees the AI wave dwarfing the internet era, and his investment thesis.', ts:'Approx.', channel:'CNBC International Live'},
      {id:'aEF3OrhIJ7M', title:'On AGI timelines and exponential AI', desc:'Son predicts artificial superintelligence and exponential capability gains.', ts:'Approx.', channel:'Xiao Yang'}
    ]},
  { id:'thiel', name:'Peter Thiel', short:'Peter Thiel', role:'Investor, Founders Fund', cluster:'opportunity',
    stance:'A contrarian who questions both the techno-stagnation story and the wildest AI hype, and whose firms sit close to defence and the state.',
    quote:'Are we dreaming big enough about AI, or has innovation stalled?', verbatim:false,
    videos:[
      {id:'vV7YgnPUxcU', title:'AI, Mars, and immortality', desc:'A long-form interview on AI, the pace of innovation, and the future of technology.', ts:'Approx.', channel:'Interesting Times with Ross Douthat'},
      {id:'GHfVMOAERzU', title:'Intelligent, conscious, or merely evil?', desc:'COSM 2022 talk on whether AI is genuinely intelligent and what its risks are.', ts:'Approx.', channel:'Center for Natural and Artificial Intelligence'}
    ]},
  { id:'ek', name:'Daniel Ek', short:'Daniel Ek', role:'Executive Chairman, Spotify; chairman, Helsing', cluster:'sovereignty',
    stance:'Increasingly vocal that Europe must build its own defining technology and defence companies rather than depend on others.',
    quote:'Europe has to build its own defining technology companies, not just consume them.', verbatim:false,
    videos:[
      {id:'AoYAEOr2R_s', title:'In Good Company interview', desc:'A long sit-down with Norway’s sovereign wealth fund on AI and building European tech.', ts:'Approx.', channel:'Norges Bank Investment Management'},
      {id:'rtTKF29zCxY', title:'On AI, free speech, and the future of music', desc:'Ek on AI’s impact and Spotify’s direction.', ts:'Approx.', channel:'NYNext by New York Post'}
    ]},
  { id:'tangen', name:'Nicolai Tangen', short:'Nicolai Tangen', role:'CEO, Norges Bank Investment Management', cluster:'sovereignty',
    stance:'Runs the world’s largest sovereign wealth fund and treats AI as both a portfolio-defining force and a possible bubble.',
    quote:'AI is reshaping markets, and the fund has to take a view on it; watch for bubbles.', verbatim:false,
    videos:[
      {id:'iBh2u1iFk2o', title:'On markets, real estate, AI, and China', desc:'The head of the roughly two-trillion-dollar fund on AI’s market impact.', ts:'Approx.', channel:'Bloomberg Television'},
      {id:'zyvuM3J9QqQ', title:'Managing $2 trillion: AI bubbles and contrarian investing', desc:'Long-form interview on running the fund through the AI cycle.', ts:'Approx.', channel:'The Knowledge Project Podcast'}
    ]},
  { id:'furstenberg', name:'Jeannette zu Fürstenberg', short:'J. zu Fürstenberg', role:'President and Managing Director, General Catalyst', cluster:'sovereignty',
    stance:'A leading European venture voice arguing the continent must not merely keep pace on AI but win.',
    quote:'Europe should not just make progress on AI; it has to win.', verbatim:false,
    videos:[
      {id:'Lts8estlPho', title:'Innovate or die: Europe’s and the US’ future', desc:'A Davos panel on European tech and AI competitiveness against the US.', ts:'Approx.', channel:'Victor Pinchuk Foundation'},
      {id:'aRkGp4sRQaw', title:'Europe must win the AI race (in German)', desc:'FAZ interview where she argues Europe has to win, not just keep up. German-language.', ts:'Approx.', channel:'FAZ'}
    ]},
  { id:'asml', name:'Christophe Fouquet', short:'C. Fouquet', role:'CEO, ASML', cluster:'sovereignty',
    stance:'Runs the company whose lithography machines every advanced chip depends on, a hinge between industry and statecraft. Warns Europe has become a consumer rather than a builder of AI.',
    quote:'Europe has become a consumer of AI rather than a builder of it.', verbatim:false,
    videos:[
      {id:'UvnhLZi-f_A', title:'On AI, China, chips, and US restrictions', desc:'Fouquet on export controls and how chip-equipment supply shapes who can build sovereign AI.', ts:'Approx.', channel:'Bloomberg Television'},
      {id:'2VAHVIrFSqU', title:'CNBC full interview', desc:'A wide-ranging interview on AI demand, chips, energy, and Europe’s place in the AI build-out.', ts:'Approx.', channel:'CNBC International Live'}
    ]},
  { id:'cook', name:'Tim Cook', short:'Tim Cook', role:'CEO, Apple', cluster:'guard',
    stance:'Comes at AI from privacy and on-device processing, the close cousin of the sovereignty case: keep the data on the user’s own hardware.',
    quote:'Keep the intelligence private and on the user’s own device.', verbatim:false,
    videos:[
      {id:'rx6O-3XUTQU', title:'On Apple Intelligence and AI', desc:'Cook on Apple’s privacy-first, on-device approach to AI and what sets it apart.', ts:'Approx.', channel:'SuperSaf'},
      {id:'PfVfS8wphW8', title:'"AI is ours to grab"', desc:'Cook rallies Apple staff around AI, calling it a major opportunity Apple intends to seize.', ts:'Approx.', channel:'Bloomberg Podcasts'}
    ]},
  { id:'alolama', name:'Omar Sultan Al Olama', short:'O. Al Olama', role:'UAE Minister of State for AI', cluster:'sovereignty',
    stance:'The canonical Gulf government voice on sovereign AI, positioning the UAE as a neutral global hub.',
    quote:'The UAE wants to be a neutral hub, a Switzerland for AI.', verbatim:false,
    videos:[
      {id:'KrUk2fM5eVo', title:'UAE trying to be the Switzerland of the Middle East', desc:'The UAE’s AI minister on strategy, regulation, and positioning the country as a neutral AI hub.', ts:'Approx.', channel:'Quest Means Business'},
      {id:'3KdHhEJsBY4', title:'Interview on the UAE’s AI ambitions', desc:'The minister on the Gulf’s sovereign-AI push.', ts:'Approx.', channel:'ADIPEC Official'}
    ]},
  { id:'pengxiao', name:'Peng Xiao', short:'Peng Xiao', role:'Group CEO, G42', cluster:'sovereignty',
    stance:'Leads the Gulf’s flagship sovereign-AI infrastructure company, building national compute capacity.',
    quote:'"We’re on the right path to building the intelligence grid, alongside the electricity grid."', verbatim:true,
    videos:[
      {id:'Q0uFk3tMPEM', title:'Building an intelligence grid', desc:'G42’s CEO on building national, sovereign AI infrastructure in the Gulf.', ts:'Approx.', channel:'GZERO Media'},
      {id:'wcz7luRGzXs', title:'On UAE chip imports and AI', desc:'A Davos interview on chip access and the UAE’s AI buildout.', ts:'Approx.', channel:'Bloomberg Television'}
    ]},
  { id:'calvino', name:'Nadia Calviño', short:'Nadia Calviño', role:'President, European Investment Bank', cluster:'sovereignty',
    stance:'Directs Europe’s public bank toward financing strategic priorities, including digital and tech sovereignty.',
    quote:'Financing Europe’s strategic priorities, including tech and digital sovereignty.', verbatim:false,
    videos:[
      {id:'GEOgQJ5bq1I', title:'EIB Group Forum keynote', desc:'The EIB President on the bank’s financing priorities, including digital and tech investment in Europe.', ts:'Approx.', channel:'European Investment Bank'},
      {id:'zq-3ADq_Tgc', title:'Financing Europe’s priorities', desc:'A conversation on financing security, competitiveness, and tech sovereignty.', ts:'Approx.', channel:'Atlantic Council'}
    ]},
  { id:'lagarde', name:'Christine Lagarde', short:'C. Lagarde', role:'President, European Central Bank', cluster:'guard',
    stance:'Brings the macro-and-regulation lens: AI’s effect on the economy and the case for governing it.',
    quote:'On stabilising the economy and regulating AI for the global economy.', verbatim:false,
    videos:[
      {id:'iSRgnpulpLo', title:'On rates, geopolitics, and AI', desc:'Lagarde addresses AI’s economic implications alongside monetary policy.', ts:'Approx.', channel:'Bloomberg Television'},
      {id:'bmA4z24I7Xc', title:'Inflation and regulating AI', desc:'Lagarde with Jon Stewart on inflation and regulating AI for the global economy.', ts:'Approx.', channel:'The Daily Show'}
    ]},
  { id:'vonderleyen', name:'Ursula von der Leyen', short:'Ursula von der Leyen', role:'President, European Commission', cluster:'sovereignty',
    stance:'Pitches a distinctly European route to AI sovereignty: large public investment, shared infrastructure, and rules, so the bloc is a builder and not just a market.',
    quote:'Europe will be a builder of AI, not just a market for it.', verbatim:false,
    videos:[
      {id:'5nby8hra8Js', title:'Address at the AI Action Summit, Paris', desc:'Von der Leyen sets out Europe’s AI investment push and the case for a European model. February 2025.', ts:'Approx.', channel:'The New Citizen'},
      {id:'_pDYT-cu0SA', title:'"We will spare no effort to make Europe an AI continent"', desc:'Von der Leyen on Europe’s ambition to build, not just buy, its AI capacity.', ts:'Approx.', channel:'European Commission'}
    ]},
  { id:'eupublic', name:'European Public', short:'European Public', role:'EU citizens and public opinion', cluster:'shared',
    stance:'Polls steadily back public, well-regulated AI: large majorities want public authorities to shape AI around rights and prefer firm regulation to an unchecked race, and many trust the EU more than their own governments or Big Tech to govern it.',
    quote:'Most Europeans want AI built in the public interest and firmly regulated, not left to a few companies.', verbatim:false,
    reading:{label:'Eurobarometer, AI and the future of work', url:'https://europa.eu/eurobarometer/surveys/detail/3222'},
    videos:[] },
  { id:'pope', name:'Pope Leo XIV', short:'Pope Leo XIV', role:'Head of the Catholic Church', cluster:'beyond',
    stance:'Made AI a defining theme of his papacy, even citing it in his choice of name: his encyclical Magnifica Humanitas warns that AI threatens human dignity, justice, and labour, and that control of it must not stay "in the hands of a few."',
    quote:'AI must serve humanity, not concentrate power; technical power does not by itself confer the right to rule.', verbatim:false,
    reading:{label:'Vatican, encyclical Magnifica Humanitas', url:'https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html'},
    videos:[
      {id:'yC9JTc4mVBM', title:'What Pope Leo said about AI', desc:'A news report on the Pope’s warnings about artificial intelligence and its impact on human dignity and work. 2026.', ts:'Approx.', channel:'News report'},
      {id:'RqXXs-ZIDNo', title:'A manifesto warning about AI', desc:'Coverage of Magnifica Humanitas, Leo XIV’s encyclical calling for AI to serve humanity rather than concentrate power. May 2026.', ts:'Approx.', channel:'News report'}
    ]},
  { id:'macron', name:'Emmanuel Macron', short:'Emmanuel Macron', role:'President of France', cluster:'sovereignty',
    stance:'Pairs a 109-billion-euro investment pledge with a vision of European, nuclear-powered, rights-respecting AI.',
    quote:'France and Europe are back in the AI race.', verbatim:false,
    reading:{label:'Élysée, statement on AI', url:'https://www.elysee.fr/en/emmanuel-macron/2025/02/11/statement-on-inclusive-and-sustainable-artificial-intelligence-for-people-and-the-planet'},
    videos:[
      {id:'XN0UchHnWPI', title:'AI Action Summit, Paris (leaders livestream)', desc:'The official summit stream co-chaired by Macron, where he frames France and Europe’s return to the AI race. February 2025.', ts:'Approx.', channel:'Associated Press'},
      {id:'r7omaj8BDh8', title:'AI is an opportunity for Europe and India to seize', desc:'An exclusive interview where Macron frames AI as an opportunity and presses the case for European tech sovereignty.', ts:'Approx.', channel:'Firstpost'}
    ]},
  { id:'meloni', name:'Giorgia Meloni', short:'Giorgia Meloni', role:'Prime Minister of Italy', cluster:'shared',
    stance:'Made AI a centrepiece of Italy’s 2024 G7 presidency, pushing international guardrails focused on risks, the labour market, and keeping AI human-centred.',
    quote:'AI must stay human-centred, with guardrails for workers and against its dangers.', verbatim:false,
    videos:[
      {id:'RC1OTuJR2bk', title:'AI as a key G7 issue for Italy', desc:'Meloni makes AI a priority of Italy’s G7 presidency, focused on its risks and the labour market.', ts:'Approx.', channel:'WION'},
      {id:'ozjjMwuQSgw', title:'"Verify and think": on AI deepfakes', desc:'Meloni warns about AI-generated deepfakes after fake images of her spread online.', ts:'Approx.', channel:'Firstpost'}
    ]},
  { id:'mattarella', name:'Sergio Mattarella', short:'Sergio Mattarella', role:'President of Italy', cluster:'beyond',
    stance:'A values-first head of state: AI is an unstoppable revolution that must stay human-centred, with its effects on work carefully weighed.',
    quote:'Unstoppable progress, but it must remain human.', verbatim:false,
    videos:[
      {id:'ogThxiqVpKk', title:'Keep the person at the centre', desc:'Mattarella on how social media and AI change everything, and on putting the person back at the centre. (Italian.)', ts:'Approx.', channel:'Il Sole 24 ORE'},
      {id:'xkyGsWUfdHk', title:'"Progress that must remain human"', desc:'Mattarella calls AI unstoppable progress that must stay human-centred. (Italian.)', ts:'Approx.', channel:'Vista Agenzia Televisiva Nazionale'}
    ]},
  { id:'merz', name:'Friedrich Merz', short:'Friedrich Merz', role:'Chancellor of Germany', cluster:'sovereignty',
    stance:'Frames Europe’s digital and tech sovereignty, including AI and quantum, as a strategic necessity for the continent.',
    quote:'Europe must secure its digital and technological sovereignty.', verbatim:false,
    videos:[
      {id:'j1O-5V3Y2wY', title:'Unveiling Europe’s digital future', desc:'A keynote on Europe’s push for digital and tech sovereignty, AI adoption, and reducing dependence.', ts:'Approx.', channel:'DWS News'},
      {id:'k2MvgOgO3Ls', title:'Macron and Merz on EU digital sovereignty', desc:'Joint announcement on digital sovereignty, AI adoption, and quantum chips.', ts:'Approx.', channel:'DRM News'}
    ]},
  { id:'sanchez', name:'Pedro Sánchez', short:'Pedro Sánchez', role:'Prime Minister of Spain', cluster:'shared',
    stance:'Pushes a "humanist," heavily regulated model of AI: a publicly funded Spanish-language model (ALIA), Europe’s first AI supervisory agency, and a loud call for common global rules so the technology strengthens democracy rather than a few platforms.',
    quote:'AI should expand human freedom, democracy, and rights, not undermine them, governed by common rules for all.', verbatim:false,
    reading:{label:'La Moncloa, Sánchez at the AI Impact Summit', url:'https://www.lamoncloa.gob.es/lang/en/presidente/intervenciones/Paginas/2026/20260219-global-ai-impact-summit-speech.aspx'},
    videos:[
      {id:'9ikUQaQ1mzM', title:'Special address at Davos 2025', desc:'Sánchez tells the World Economic Forum that a few platforms and their algorithms threaten democracy, and proposes EU rules to rein them in. January 2025.', ts:'Approx.', channel:'Davos 2025 livestream'},
      {id:'t3Vj1z90MkA', title:'"AI is the central theme at Davos"', desc:'A short clip of Sánchez framing artificial intelligence as the defining issue for world leaders at Davos. (Spanish.)', ts:'Approx.', channel:'News short'}
    ]},
  { id:'modi', name:'Narendra Modi', short:'Narendra Modi', role:'Prime Minister of India', cluster:'sovereignty',
    stance:'Co-chaired the Paris summit and frames India’s sovereignty across the full AI stack: applications, models, compute, talent, and energy, with open-source and the Global South in mind.',
    quote:'India’s AI ambition spans the full stack and the Global South.', verbatim:false,
    reading:{label:'PM India, AI superpower vision', url:'https://www.pmindia.gov.in/en/news_updates/india-should-be-among-the-top-three-ai-superpowers-globally-pm-modi-sets-2047-vision/'},
    videos:[
      {id:'2x2ZnoJ77kY', title:'Full speech at the Paris AI Summit', desc:'Modi on the dawn of the AI age, guarding against bias, and India’s role co-chairing the summit. February 2025.', ts:'Approx.', channel:'Mint'},
      {id:'YD4iC02EZeA', title:'Speech at the India AI Impact Summit', desc:'Hosting the summit in New Delhi, Modi argues India is not catching up on AI but leaping ahead. February 2026.', ts:'Approx.', channel:'Narendra Modi'}
    ]},
  { id:'lula', name:'Luiz Inácio Lula da Silva', short:'Lula da Silva', role:'President of Brazil', cluster:'stack',
    stance:'Frames AI as a question of sovereignty and development for Brazil and the Global South, pairing a national AI plan with a push for multilateral cooperation so poorer nations are not locked out or left dependent on a few US and Chinese firms.',
    quote:'AI must not be a privilege of a few countries, nor a tool of manipulation in the hands of billionaires.', verbatim:false,
    reading:{label:'G20 Brasil, Brazil’s $4bn national AI plan', url:'https://www.gov.br/g20/en/news/brasil-launches-a-usd-4-billion-plan-for-ai-and-prepares-global-action'},
    videos:[
      {id:'6BmooMHoJ2Q', title:'Full speech at the BRICS Summit 2025', desc:'Lula’s full address at the BRICS summit, where he pushed for a shared declaration on AI governance and warned that compute and capital sit with a few countries and firms. Rio de Janeiro, July 2025.', ts:'Approx.', channel:'Full-speech upload'},
      {id:'sWjNvwXrxHs', title:'Defending multilateral AI governance at BRICS', desc:'Lula argues AI must not be a privilege of a few countries or a tool of manipulation in the hands of the rich, and calls for shared governance. (Portuguese.)', ts:'Approx.', channel:'Brazilian media (Portuguese)'}
    ]},
  { id:'starmer', name:'Keir Starmer', short:'Keir Starmer', role:'Prime Minister of the United Kingdom', cluster:'sovereignty',
    stance:'Ties AI opportunity to building sovereign UK compute and an activist industrial approach.',
    quote:'Seize the AI opportunity and build the UK’s own sovereign compute.', verbatim:false,
    videos:[
      {id:'fmNtI25byj8', title:'Speech on AI', desc:'Starmer sets out the UK’s AI strategy and opportunity agenda.', ts:'Approx.', channel:'10 Downing Street'},
      {id:'wYVGdew4FHA', title:'In full: the AI Action Plan speech', desc:'The full speech launching the Government’s AI Action Plan, including sovereign compute.', ts:'Approx.', channel:'The Mirror'}
    ]},
  { id:'burnham', name:'Andy Burnham', short:'Andy Burnham', role:'MP for Makerfield; former Mayor of Greater Manchester', cluster:'guard',
    stance:'A regional voice on digital inclusion: making sure the technology shift does not leave people behind.',
    quote:'Make the digital future work for everyone, not just the few.', verbatim:false,
    videos:[
      {id:'nfzXDRO7XC8', title:'Digital futures for good', desc:'Burnham on digital inclusion and the tech future of Greater Manchester. (Digital policy; AI-adjacent.)', ts:'Approx.', channel:'Good Things Foundation'},
      {id:'fX8sf5Xah_I', title:'Leading the digital and social revolution', desc:'Burnham’s vision for Manchester as a leader in the digital revolution. (Digital and tech-focused; AI-adjacent.)', ts:'Approx.', channel:'Manchester Blockchain Alliance'}
    ]},
  { id:'jetten', name:'Rob Jetten', short:'Rob Jetten', role:'Prime Minister of the Netherlands', cluster:'stack',
    stance:'A centrist, tech-forward Dutch PM who frames innovation and investment, including in AI and semiconductors, as central to the Netherlands’ future and its partnerships.',
    quote:'Innovation and investment, including in AI and chips, are central to the Netherlands’ future.', verbatim:false,
    videos:[
      {id:'NJpmMP5fZP0', title:'On India-Netherlands tech ties', desc:'As PM, Jetten discusses Netherlands-India relations, including cooperation on technology, AI, and semiconductors.', ts:'Approx.', channel:'DD News'},
      {id:'0jv9AEu4rV0', title:'On Dutch-India economic and chip ties', desc:'Jetten on Netherlands-India economic cooperation, including the semiconductors central to the AI supply chain.', ts:'Approx.', channel:'Republic World'}
    ]},
  { id:'schoof', name:'Dick Schoof', short:'Dick Schoof', role:'Former Prime Minister of the Netherlands', cluster:'shared',
    stance:'As Dutch PM, tied AI to security and to the chip supply chain, pressing for global rules while deepening AI and semiconductor ties abroad.',
    quote:'We must be ready for AI warfare, and AI’s risks demand global rules.', verbatim:false,
    videos:[
      {id:'uxYAo7pAvUo', title:'Address at the India AI Impact Summit', desc:'Schoof on deepening Dutch-India cooperation across AI and semiconductors. New Delhi, 2026.', ts:'Approx.', channel:'The Hindu'},
      {id:'9scd8kJWtys', title:'"We must be ready for AI warfare"', desc:'Speaking alongside Zelenskyy, Schoof warns of AI-driven and drone warfare.', ts:'Approx.', channel:'DRM News'},
      {id:'vcArCe0Mr_A', title:'Warning to the UN on AI, peace, and security', desc:'Schoof argues AI risks to global security call for shared rules, not complacency.', ts:'Approx.', channel:'DRM News'}
    ]},
  { id:'lee', name:'Lee Jae-myung', short:'Lee Jae-myung', role:'President of South Korea', cluster:'sovereignty',
    stance:'Declares AI the answer to Korea’s transformation and a national strategic priority.',
    quote:'AI is the answer to Korea’s transformation and the centre of its economic vision.', verbatim:false,
    videos:[
      {id:'GSRrSMHRjOs', title:'"The answer is AI"', desc:'Lee makes AI the centrepiece of Korea’s national transformation agenda.', ts:'Approx.', channel:'SBS D Forum'},
      {id:'GHcBSwe-s2M', title:'Statesmen’s Forum address (English)', desc:'A CSIS forum touching on Korea’s technology and AI ambitions.', ts:'Approx.', channel:'Center for Strategic & International Studies'}
    ]},
  { id:'takaichi', name:'Sanae Takaichi', short:'Sanae Takaichi', role:'Prime Minister of Japan', cluster:'sovereignty',
    stance:'Names AI and advanced technology among strategic growth-investment priorities for Japan.',
    quote:'AI and advanced tech are strategic growth-investment priorities for Japan.', verbatim:false,
    videos:[
      {id:'4ToyAAwtYkY', title:'Press conference as Prime Minister', desc:'Her agenda sets AI and advanced technology as strategic priorities. October 2025.', ts:'Approx.', channel:'Prime Minister’s Office of Japan'},
      {id:'yIU8AYJeJzg', title:'Policies to make Japan "strong and rich"', desc:'A news package on her program emphasising AI and semiconductors.', ts:'Approx.', channel:'Nippon Television News Japan'}
    ]},
  { id:'rutte', name:'Mark Rutte', short:'Mark Rutte', role:'Secretary General, NATO', cluster:'power',
    stance:'Speaks to AI through collective defence and industrial capacity, where sovereignty over technology becomes a security question.',
    quote:'Technology and industrial capacity are now security questions for the alliance.', verbatim:false,
    videos:[
      {id:'zEza6fjUBFI', title:'Speech at the NATO-Industry Forum', desc:'Rutte on defence, technology, and industrial capacity. November 6, 2025. (Defence-focused; tech sovereignty features.)', ts:'Approx.', channel:'NATO News'},
      {id:'lYiE82ufdHM', title:'"Building a better NATO" (Chatham House)', desc:'Rutte on defence, innovation, and the technology edge the alliance needs. June 2025.', ts:'Approx.', channel:'NATO News'},
      {id:'uqouPARJbew', title:'Address at the NATO Cloud Conference', desc:'At the third NATO Cloud Conference in Brussels, Rutte says "there simply is no strong defence without a strong and also an innovative industry," tying cloud and edge computing to alliance security. November 24, 2025.', ts:'Approx.', channel:'NATO News'}
    ]},
  { id:'sanders', name:'Bernie Sanders', short:'Bernie Sanders', role:'U.S. Senator, Vermont', cluster:'guard',
    stance:'The sharpest labour-and-democracy warning: AI built by billionaires could hollow out the working class.',
    quote:'AI built by billionaires could wipe out the working class.', verbatim:false,
    videos:[
      {id:'dthbi4lzO58', title:'"AI could wipe out the working class"', desc:'Sanders warns AI and robotics could eliminate tens of millions of decent-paying jobs.', ts:'Approx.', channel:'Senator Bernie Sanders'},
      {id:'M__l4j6LtBQ', title:'On AI billionaires and democracy', desc:'A Senate-floor speech on concentrated AI power and the threat to democracy.', ts:'Approx.', channel:'PoliticsJOE'}
    ]},
  { id:'xi', name:'Xi Jinping', short:'Xi Jinping', role:'President of China', cluster:'power',
    stance:'Frames AI as a strategic industry to be developed in an orderly way and under national control, tied to tech self-reliance.',
    quote:'Promote the healthy, orderly development of AI, with self-reliance.', verbatim:false,
    videos:[
      {id:'R3GVkcMGwys', title:'On healthy, orderly AI development', desc:'Xi calls for governing AI’s development at a CPC study session. April 2025.', ts:'Approx.', channel:'CGTN'},
      {id:'MubtvEkGog8', title:'AI is a young industry, one for the young', desc:'Xi frames AI as an emerging strategic industry on a Shanghai inspection.', ts:'Approx.', channel:'CGTN'}
    ]},
  { id:'putin', name:'Vladimir Putin', short:'Vladimir Putin', role:'President of Russia', cluster:'power',
    stance:'The far end of the axis. AI as raw geopolitical power, full stop.',
    quote:'"Whoever becomes the leader in this sphere will become the ruler of the world."', verbatim:true,
    reading:{label:'CNBC, Putin on AI and world power', url:'https://www.cnbc.com/2017/09/04/putin-leader-in-artificial-intelligence-will-rule-world.html'},
    videos:[
      {id:'dcfs-r5Uk4I', title:'"AI will decide who rules tomorrow"', desc:'A news package on Putin’s framing of AI as the decisive lever of national power.', ts:'Full clip', channel:'Times Now World'},
      {id:'uR2C-pi_Mkk', title:'"Whoever controls AI will rule the world"', desc:'The original 2017 remark to Russian students on Knowledge Day.', ts:'Full clip', channel:'Archive upload'}
    ]}
];

// Clusters by where each speaker locates AI sovereignty.
const CLUSTERS = [
  { id:'stack', title:'Own the national stack', desc:'Sovereignty as a country building its own models, compute, data, and chips.' },
  { id:'race', title:'Win the great-power race', desc:'Sovereignty as national or bloc dominance; whoever leads sets the terms.' },
  { id:'shared', title:'Pool it under shared rules', desc:'Sovereignty best protected through multilateral governance and containment.' },
  { id:'beyond', title:'Locate it beyond the state', desc:'Sovereignty placed with individuals, democracy, or global platforms instead of the nation-state.' }
];

// Which sovereignty cluster each person falls into.
const SOVCLUSTER = {
  huang:'stack', vonderleyen:'stack', macron:'stack', merz:'stack', modi:'stack', lula:'stack', starmer:'stack',
  lee:'stack', takaichi:'stack', alolama:'stack', pengxiao:'stack', calvino:'stack', ek:'stack',
  furstenberg:'stack', asml:'stack', tangen:'stack', jetten:'stack', mensch:'stack', liang:'stack', gomez:'stack', andrulis:'stack',
  vance:'race', altman:'race', musk:'race', amodei:'race', son:'race', thiel:'race', xi:'race', putin:'race', rutte:'race',
  suleyman:'shared', schoof:'shared', meloni:'shared', lagarde:'shared', sanchez:'shared', eupublic:'shared',
  cook:'beyond', sanders:'beyond', burnham:'beyond', pichai:'beyond', nadella:'beyond', garman:'beyond', mattarella:'beyond', pope:'beyond'
};

function lerpColor(t){
  // accent blue #0057FF to red #9a3b3b
  const a=[0x00,0x57,0xff], b=[0x9a,0x3b,0x3b];
  const c=a.map((v,i)=>Math.round(v+(b[i]-v)*t));
  return 'rgb('+c[0]+','+c[1]+','+c[2]+')';
}
function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function fmtTime(s){ const m=Math.floor(s/60), sec=s%60; return m+':'+String(sec).padStart(2,'0'); }
// Three categories, each ranked on its own scale (blue left to red right).
const CATS = [
  { id:'corp', title:'Companies', left:'Pools into a shared effort', right:'Builds alone / own platform' },
  { id:'pol',  title:'Governments & officials', left:'Backs a middle-power consortium', right:'Superpower pole / goes alone' },
  { id:'fin',  title:'Money: funds, banks & VCs', left:'Funds a shared consortium', right:'Backs a single superpower' }
];
const ORDER_BY_CAT = {
  corp: ['mensch','liang','andrulis','gomez','ek','asml','huang','pengxiao','nadella','garman','pichai','suleyman','cook','amodei','altman','musk'],
  pol:  ['eupublic','vonderleyen','macron','modi','lula','merz','sanchez','jetten','meloni','starmer','lee','schoof','takaichi','alolama','sanders','rutte','pope','mattarella','burnham','vance','xi','putin'],
  fin:  ['calvino','furstenberg','tangen','lagarde','son','thiel']
};
const CAT = {};
for (const c in ORDER_BY_CAT) ORDER_BY_CAT[c].forEach(id => CAT[id] = c);

const ORDER = [...ORDER_BY_CAT.corp, ...ORDER_BY_CAT.pol, ...ORDER_BY_CAT.fin];
PEOPLE.sort((a,b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

// Colour each person by position within their own category (blue to red).
const colorFor = {};
for (const c in ORDER_BY_CAT) {
  const arr = ORDER_BY_CAT[c];
  arr.forEach((id,i) => { colorFor[id] = lerpColor(arr.length>1 ? i/(arr.length-1) : 0); });
}

// Short affiliation tags for the spectrum rail (company or country, not job title).
const TAGS = {
  altman:'OpenAI', musk:'xAI', huang:'NVIDIA', amodei:'Anthropic', suleyman:'Microsoft AI', nadella:'Microsoft', pichai:'Google', garman:'AWS', mensch:'Mistral AI', gomez:'Cohere', andrulis:'Aleph Alpha',
  vance:'US Vice President', son:'SoftBank', thiel:'Founders Fund', ek:'Spotify', tangen:'Norway fund', liang:'DeepSeek',
  furstenberg:'General Catalyst', asml:'ASML', cook:'Apple', alolama:'UAE AI Minister', pengxiao:'G42',
  calvino:'EIB President', lagarde:'ECB President', vonderleyen:'EU Commission Pres.', macron:'France President', merz:'Germany Chancellor',
  modi:'India PM', lula:'Brazil President', sanchez:'Spain PM', starmer:'UK PM', burnham:'Makerfield MP', jetten:'Netherlands PM', schoof:'Netherlands ex-PM', meloni:'Italy PM', mattarella:'Italy President', lee:'Korea President',
  takaichi:'Japan PM', rutte:'NATO Sec-Gen', sanders:'US Senator', xi:'China President', putin:'Russia President', pope:'Vatican', eupublic:'EU citizens'
};

// Category (corp / pol / fin) is derived into CAT above.

// One line on each person's specific stance toward AI sovereignty.
const SOV = {
  altman:'Less a sovereignty hawk than a builder: frames the priority as US and allied leadership on frontier models, with compute and energy as the real strategic bottleneck.',
  musk:'Treats AI as an existential and great-power race: warns of catastrophe yet argues the safest path is to build the most capable, "truth-seeking" AI himself rather than let rivals lead.',
  huang:'The defining sovereign-AI evangelist. Every nation should build its own models on its own data and compute, so its culture and intelligence are not outsourced.',
  amodei:'Casts AI leadership as a democratic-sovereignty contest, backing export controls to keep frontier capability with the US and its allies rather than authoritarian states.',
  suleyman:'Argues sovereignty itself is at stake: nation-states must build the capacity to contain AI, or cede power to whoever controls the technology.',
  nadella:'Offers sovereignty as a service: in-country sovereign cloud and data residency on Azure, while the underlying models and global scale stay Microsoft and partner.',
  garman:'Sells sovereignty as infrastructure: the AWS European Sovereign Cloud and in-region data control on top of a globally standardised platform.',
  mensch:'The sharpest European-sovereignty case from a builder: open-weight models, European compute, and data control so the continent owns its AI rather than renting it.',
  liang:'A paradox of sovereignty: builds China’s own frontier models under US chip sanctions, yet open-sources the weights so anyone, including middle powers, can run them, loosening the US labs’ grip even as it serves Chinese self-reliance.',
  gomez:'Sells sovereignty to enterprises and governments: deploy models privately, on your own cloud or on-prem, so sensitive data never leaves your control.',
  andrulis:'Pitches sovereignty as trust and control: on-prem, transparent models for European states and firms that cannot hand data to US or Chinese clouds.',
  pichai:'A platform view more than a sovereignty one. Offers sovereign-cloud and in-country options, but sees AI delivered globally through Google’s infrastructure.',
  vance:'Equates sovereignty with American dominance of the full AI stack, and warns allies against regulation that would surrender that lead.',
  son:'Treats AI leadership as capital and infrastructure: whoever funds the largest compute build-out, his central bet, sets the terms.',
  thiel:'Skeptical of centralized control. Frames the real contest as US versus China and worries about AI as a tool of state surveillance and concentration.',
  ek:'A European-sovereignty voice from industry: the continent must own its defence and AI champions rather than depend on US or Chinese platforms.',
  tangen:'Speaks as an asset owner rather than an advocate, but flags national concentration and bubble risk in who ends up owning the AI build-out.',
  furstenberg:'Argues European sovereignty means winning, not just regulating: backing homegrown AI champions with real capital and ambition.',
  asml:'The hardware chokepoint of sovereignty. Without advanced lithography no country can build frontier AI, and he warns Europe is consuming it rather than building it.',
  cook:'Reframes sovereignty as individual data sovereignty: keep AI on the user’s own device, so neither a company nor a state holds the data.',
  alolama:'Pursues sovereignty by neutrality: position the UAE as an independent global AI hub with its own compute, talent, and governance.',
  pengxiao:'Builds the physical layer of sovereignty: national compute and an "intelligence grid" so the Gulf owns its AI infrastructure.',
  calvino:'Channels EU public finance toward strategic autonomy, funding the chips, compute, and AI capacity Europe needs to not depend on others.',
  lagarde:'Comes at it through stability and regulation, but stresses Europe should not be a passive taker of AI built elsewhere.',
  vonderleyen:'The standard-bearer for European AI sovereignty: mobilize public investment and shared infrastructure so the bloc builds AI, not just buys it.',
  eupublic:'Wants AI kept in trustworthy, public hands: strong majorities back EU-level rules and digital sovereignty, trusting the EU over national governments or Big Tech to decide how AI is used.',
  macron:'Champions European sovereign AI: domestic, nuclear-powered compute, homegrown labs, and rules, so France and Europe do not depend on the US or China.',
  sanchez:'Frames sovereignty as public and multilateral: a publicly funded Spanish-language model and EU rules at home, paired with a push for common global governance so no handful of firms or states controls AI.',
  merz:'Frames digital and technological sovereignty as a strategic necessity for Germany and Europe, spanning AI, chips, and quantum.',
  modi:'Defines sovereignty across the full stack, from applications to compute to energy, with open models and the Global South so AI is not a monopoly of a few nations.',
  lula:'Casts sovereignty as Global-South autonomy: Brazil and other developing nations should build their own AI and pool efforts, rather than depend on a handful of US or Chinese firms.',
  starmer:'Ties opportunity to sovereign capability: build the UK’s own compute and AI infrastructure rather than rely entirely on US clouds.',
  burnham:'Comes at it from inclusion rather than statecraft: make sure the AI transition does not leave regions and workers behind.',
  jetten:'Approaches sovereignty as innovation capacity and partnership: invest in knowledge, AI, and chips, and deepen ties such as with India rather than go it alone.',
  schoof:'Links Dutch sovereignty to chips and AI: deepens semiconductor and AI ties abroad while pressing for global rules and readiness for AI-enabled warfare.',
  meloni:'Frames AI sovereignty through G7-level governance and a human-centred, labour-aware lens, wary of Big Tech power and deepfakes.',
  mattarella:'Casts it less as state power than human dignity: AI is unstoppable but must remain human-centred, with care for its effects on work.',
  pope:'Locates the question beyond states and markets, in human dignity: AI must not be concentrated "in the hands of a few," and technical power does not by itself confer the right to rule.',
  lee:'Makes sovereign AI a national mission for Korea: domestic models and compute as the answer to the country’s transformation.',
  takaichi:'Treats AI and semiconductors as strategic assets for Japan, to be built at home as part of an economic-security agenda.',
  rutte:'Views it through collective defence: technological sovereignty and industrial capacity are now alliance security questions.',
  sanders:'Concerned less with national sovereignty than democratic sovereignty: AI owned by a handful of billionaires threatens workers and self-government.',
  xi:'Pursues sovereignty as self-reliance: indigenous AI and chips under national control, insulated from US restrictions.',
  putin:'The purest power framing: AI leadership equals national supremacy, and whoever leads will rule.'
};

// Per-photo crop override and logo flag.
const POS = { asml:'right top' };
const LOGO = { pengxiao:true, eupublic:true };

// One line on what each person's company, country, or institution is doing in AI.
const ORG = {
  altman:'OpenAI built ChatGPT and the GPT models and is one of the handful of labs defining the frontier.',
  musk:'xAI builds the Grok models on the Colossus supercomputer in Memphis; Musk also drives AI at Tesla (self-driving, Optimus) and owns X, where Grok is deployed.',
  huang:'NVIDIA designs the GPUs that train and run nearly all frontier AI, the pick-and-shovel giant of the boom.',
  amodei:'Anthropic builds the Claude models and champions safety-focused frontier AI as a leading US lab.',
  suleyman:'Microsoft AI runs Copilot and consumer AI on a deep OpenAI partnership and vast Azure compute.',
  nadella:'Microsoft runs Copilot across its products, hosts much of OpenAI on Azure, and is among the biggest builders of AI data-centre capacity.',
  garman:'AWS builds custom AI chips (Trainium), hosts Anthropic’s Claude, and runs a large share of the world’s cloud and AI compute.',
  mensch:'Mistral builds open-weight European models (Le Chat, Mistral Large) and is France’s flagship sovereign-AI champion.',
  liang:'DeepSeek released the open-weight V3 and R1 models that rivalled top US systems at far lower cost, built by a lean team spun out of the High-Flyer quant fund.',
  gomez:'Cohere builds enterprise LLMs (Command) and retrieval tooling, and partners with governments on private, sovereign deployments.',
  andrulis:'Aleph Alpha builds sovereign, transparent AI infrastructure for European governments and industry, a German answer to OpenAI.',
  pichai:'Google builds the Gemini models and DeepMind research, shipping AI through Search, Cloud, and Android at planetary scale.',
  vance:'The US hosts most frontier labs and compute; the administration pushes an opportunity-first, dominance-minded AI policy.',
  son:'SoftBank is betting heavily on AI through Arm, an OpenAI stake, and the Stargate compute build-out.',
  thiel:'Thiel-backed Palantir and Founders Fund sit at the intersection of AI, defence, and government data.',
  ek:'Ek chairs and funds Helsing, Europe’s defence-AI champion, and invests in European deep tech.',
  tangen:'Norway’s fund is among the largest shareholders across the AI supply chain, from chipmakers to hyperscalers.',
  furstenberg:'General Catalyst funds European AI and defence startups, pushing the continent to build its own champions.',
  asml:'ASML holds a near-monopoly on the EUV lithography machines without which no advanced AI chip can be made.',
  cook:'Apple ships on-device Apple Intelligence to billions of devices with a privacy-first, hybrid-cloud design.',
  alolama:'The UAE funds sovereign compute (G42, MGX) and the Falcon models, aiming to be a global AI hub.',
  pengxiao:'G42 builds the Gulf’s sovereign AI: data centres, the Jais Arabic model, and major US chip and cloud deals.',
  calvino:'The EIB is scaling financing for European chips, compute, and AI to back strategic autonomy.',
  lagarde:'The ECB studies AI’s effect on productivity, jobs, and financial stability, and uses AI in its own work.',
  vonderleyen:'The Commission runs the AI Act, the AI Continent plan, and InvestAI to mobilise European AI capacity.',
  eupublic:'Eurobarometer and other 2024-26 surveys: roughly 78% want public authorities to shape AI, most prioritise firm regulation over a race, and many trust the EU more than their own governments to govern it.',
  macron:'France hosts Mistral and a 100-billion-euro investment wave, and convened the Paris AI Action Summit.',
  sanchez:'Spain funds ALIA, a public open model in Spanish and co-official languages, set up the AESIA supervisory agency, and Sánchez champions AI regulation at the EU, the UN, and global summits.',
  merz:'Germany backs Aleph Alpha, industrial AI, and a European push on chips and quantum.',
  modi:'India runs the IndiaAI Mission, building shared compute, datasets, and homegrown models for a billion-plus people.',
  lula:'Brazil runs the multi-billion-real PBIA plan to build sovereign compute, data, and a Portuguese-language model, and uses the G20 and BRICS to push AI cooperation for the Global South.',
  starmer:'The UK has the AI Safety Institute, DeepMind’s home base, and an AI plan for sovereign compute.',
  burnham:'Greater Manchester pitches itself as a UK tech and digital hub, with AI and skills investment.',
  jetten:'The Netherlands hosts ASML, the chip-tool linchpin, and is deepening AI and semiconductor ties abroad.',
  schoof:'Dutch AI weight runs through ASML and the chip supply chain, paired with AI-security diplomacy.',
  meloni:'Italy used its 2024 G7 presidency to put AI risks, labour, and ethics on the global agenda.',
  mattarella:'As head of state, Mattarella repeatedly urges Italy and Europe to keep AI human-centred and weigh its impact on jobs.',
  pope:'The Holy See has made AI a central theme: the encyclical Magnifica Humanitas (2026) and Vatican messages call for ethical guardrails, protection of workers, and global governance.',
  lee:'Korea backs sovereign models and compute, with Samsung and SK Hynix supplying much of the world’s AI memory.',
  takaichi:'Japan invests in domestic AI and semiconductors, including Rapidus, as part of an economic-security agenda.',
  rutte:'NATO runs the DIANA accelerator and an innovation fund, treating AI as an alliance capability.',
  sanders:'US lawmakers shape AI through labour, antitrust, and safety debates; Sanders focuses on its effect on workers.',
  xi:'China fields DeepSeek, Alibaba, and Huawei chips, pursuing AI self-reliance under state direction.',
  putin:'Russia trails on frontier AI but pushes military AI and a state-led national AI strategy.'
};

// Portrait photos (Wikipedia / Wikimedia Commons). null falls back to initials.
const PHOTOS = {
  altman: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg/330px-Meeting_with_Masayoshi_Son_and_Sam_Altman_%28February_3%2C_2025%29_%283x4_cropped_on_Altman%29.jpg',
  musk: 'https://commons.wikimedia.org/wiki/Special:FilePath/Elon%20Musk%20%2854816836217%29%20%28cropped%29.jpg?width=400',
  huang: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jen-Hsun_Huang_2025.jpg/330px-Jen-Hsun_Huang_2025.jpg',
  amodei: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Dario_Amodei_at_TechCrunch_Disrupt_2023_01_%28cropped%29.jpg/330px-Dario_Amodei_at_TechCrunch_Disrupt_2023_01_%28cropped%29.jpg',
  suleyman: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Mustafa_Suleyman_photo_%28cropped%29.jpg/330px-Mustafa_Suleyman_photo_%28cropped%29.jpg',
  nadella: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/330px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg',
  pichai: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/330px-Sundar_Pichai_-_2023_%28cropped%29.jpg',
  garman: 'data:image/jpeg;base64,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',
  mensch: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Arthur_Mensch.png/330px-Arthur_Mensch.png',
  gomez: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Aidan_Gomez_at_%22ALL_IN%22_2025_06.jpg/330px-Aidan_Gomez_at_%22ALL_IN%22_2025_06.jpg',
  andrulis: 'https://commons.wikimedia.org/wiki/Special:FilePath/Andrulis%20DLD.jpg?width=400',
  vance: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance_%28head-and-shoulders_cropped%29.jpg/330px-March_2026_Official_Vice_Presidential_Portrait_of_JD_Vance_%28head-and-shoulders_cropped%29.jpg',
  son: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg/330px-Masayoshi_Son_%28P066533-522034%2C_cropped%29.jpg',
  thiel: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Peter_Thiel_by_Gage_Skidmore.jpg/330px-Peter_Thiel_by_Gage_Skidmore.jpg',
  ek: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Daniel_Ek_EC_2025_%28cropped%29.jpg/330px-Daniel_Ek_EC_2025_%28cropped%29.jpg',
  tangen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/NicolaiTangen.jpg/330px-NicolaiTangen.jpg',
  furstenberg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QxHbEDnRnuxJMWeDFBavgesBU4hyJUEUidcvsaBtjaaBervT-RhU5Fl7tv3f0ammEsXYzz3DtW-HLJJRRfKiqyeYxPlEY0uLEdTFheAHOA&s=10',
  asml: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ursula%20von%20der%20Leyen%20%26%20Christophe%20Fouquet%20-%202025.jpg?width=400',
  cook: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tim_Cook_March_2026_%28cropped_2%29.jpg/330px-Tim_Cook_March_2026_%28cropped_2%29.jpg',
  alolama: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Omar_Sultan_Al_Olama_at_the_2023_World_Economic_Forum_%28cropped%29.jpg/330px-Omar_Sultan_Al_Olama_at_the_2023_World_Economic_Forum_%28cropped%29.jpg',
  pengxiao: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Group_42_logo.png/330px-Group_42_logo.png',
  calvino: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nadia_Calvi%C3%B1o_2023_%28cropped%29.jpg/330px-Nadia_Calvi%C3%B1o_2023_%28cropped%29.jpg',
  lagarde: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lagarde_ECB_Portrait_2019.jpg/330px-Lagarde_ECB_Portrait_2019.jpg',
  vonderleyen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Prime_Minister_of_Bharat%2C_Shri_Narendra_Damodardas_Modi_greets_the_President_of_the_European_Council%2C_Mr._Ant%C3%B3nio_Costa_and_the_President_of_the_European_Commission%2C_Ms._Ursula_von_der_Leyen_%283x4_cropped%29.jpg/330px-thumbnail.jpg',
  macron: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg',
  sanchez: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pedro%20S%C3%A1nchez%202023%20%28cropped%29.jpg?width=400',
  eupublic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/330px-Flag_of_Europe.svg.png',
  pope: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pope%20Leo%20XIV.png?width=400',
  merz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg/330px-2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg',
  modi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg/330px-The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg',
  lula: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foto%20oficial%20de%20Luiz%20In%C3%A1cio%20Lula%20da%20Silva%20%282023%E2%80%932027%29.jpg?width=400',
  starmer: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg/330px-Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg',
  burnham: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Andy_Burnham_on_13_August_2024_%28cropped_2%29.jpg/330px-Andy_Burnham_on_13_August_2024_%28cropped_2%29.jpg',
  jetten: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rob_Jetten%2C_March_2026_-_02.jpg/330px-Rob_Jetten%2C_March_2026_-_02.jpg',
  schoof: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dick_Schoof_in_2025.jpg/330px-Dick_Schoof_in_2025.jpg',
  meloni: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Giorgia_Meloni_Official_2024_%28cropped%29.jpg/330px-Giorgia_Meloni_Official_2024_%28cropped%29.jpg',
  mattarella: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Sergio_Mattarella_Presidente_della_Repubblica_Italiana.jpg/330px-Sergio_Mattarella_Presidente_della_Repubblica_Italiana.jpg',
  lee: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/President_Lee_Jae_Myung_20260306.jpg/330px-President_Lee_Jae_Myung_20260306.jpg',
  takaichi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Official_portrait_of_Sanae_Takaichi%2C_Prime_Minister_of_Japan_%28HD%29.jpg/330px-Official_portrait_of_Sanae_Takaichi%2C_Prime_Minister_of_Japan_%28HD%29.jpg',
  rutte: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mark_Rutte%2C_23.03.23_%28cropped%29.jpg/330px-Mark_Rutte%2C_23.03.23_%28cropped%29.jpg',
  sanders: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bernie_Sanders_February_2026_%28cropped%29.jpg/330px-Bernie_Sanders_February_2026_%28cropped%29.jpg',
  xi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Xi_Jinping_meets_Putin_May_2026.jpg/330px-Xi_Jinping_meets_Putin_May_2026.jpg',
  putin: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg/330px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg'
};

// Per-section sources (real articles, transcripts, and interviews) for the
// simulation players. Each entry: { org, stance, sov } with {label, url, quote}.
const SRC = {
  huang: {
    org: {label:"NVIDIA Newsroom, sovereign AI in Korea", url:"https://nvidianews.nvidia.com/news/south-korea-ai-infrastructure", quote:"NVIDIA is working with South Korea to expand the nation's AI infrastructure with over a quarter-million GPUs across its sovereign clouds and AI factories."},
    stance: {label:"NVIDIA, a new industrial revolution", url:"https://blogs.nvidia.com/blog/ai-summit-japan-huang-son/", quote:"Every industry, every company, every country must produce a new industrial revolution."},
    sov: {label:"NVIDIA, World Governments Summit", url:"https://blogs.nvidia.com/blog/world-governments-summit/", quote:"Every country needs to own the production of their own intelligence."}
  },
  mensch: {
    org: {label:"Fortune, doubling down on open source", url:"https://fortune.com/2025/03/20/mistral-ai-ceo-mensch-denies-ipo-rumors-doubles-down-on-open-source-strategy-european-champion/", quote:"Mistral, the Paris-based European champion, builds open-source models as an alternative to OpenAI, Anthropic and Meta."},
    stance: {label:"Sifted, outside state control", url:"https://sifted.eu/articles/mistral-arthur-mensch-open-source-anthropic", quote:"Mensch frames Mistral as existing outside the centralized control exercised by states or corporations."},
    sov: {label:"AOL, French National Assembly hearing", url:"https://www.aol.com/articles/mistral-ais-ceo-says-europe-223501000.html", quote:"Europe risks becoming 'a vassal state' if it keeps importing its digital services from the US."}
  },
  andrulis: {
    org: {label:"Maginative, PhariaAI launch", url:"https://www.maginative.com/article/aleph-alpha-announces-phariaai-a-sovereign-enterprise-grade-ai-operating-system/", quote:"PhariaAI is for enterprises and governments seeking to leverage AI without compromising control or compliance."},
    stance: {label:"The Register, on a European LLM", url:"https://www.theregister.com/2025/02/23/aleph_alpha_sovereign_ai/", quote:"Just having a European LLM is not sufficient as a business model. It doesn't justify the investment."},
    sov: {label:"The Register, sovereign AI foundation", url:"https://www.theregister.com/2025/02/23/aleph_alpha_sovereign_ai/", quote:"We're trying to be the foundation for enterprises and governments to build their own sovereign AI strategy."}
  },
  asml: {
    org: {label:"Fast Company, powering the AI boom", url:"https://www.fastcompany.com/91235182/asmls-christophe-fouquet-is-leading-the-company-quietly-powering-the-ai-boom", quote:"ASML makes the only machines capable of EUV lithography, printing the patterns that define the most advanced chips."},
    stance: {label:"Yahoo Finance, on ASML's lead", url:"https://finance.yahoo.com/sectors/technology/articles/asml-ceo-christophe-fouquet-no-200640845.html", quote:"On ASML's lead in advanced lithography: 'no one is coming for us.'"},
    sov: {label:"FourWeekMBA, ASML CEO at the G7", url:"https://fourweekmba.com/asml-ceo-g7-europe-behind-sovereignty-sequence/", quote:"Sovereignty requires innovation first, not regulation first: you have to start with demand, not manufacturing."}
  },
  vance: {
    org: {label:"The American Presidency Project, VP remarks", url:"https://www.presidency.ucsb.edu/documents/remarks-the-vice-president-the-artificial-intelligence-action-summit-paris-france", quote:"This administration will ensure that American AI technology continues to be the gold standard worldwide."},
    stance: {label:"CNN, Vance at the Paris summit", url:"https://www.cnn.com/2025/02/11/tech/jd-vance-ai-regulation-paris-intl/index.html", quote:"Excessive regulation of the AI sector could kill a transformative industry just as it's taking off."},
    sov: {label:"NPR, Vance lays out an AI vision", url:"https://www.npr.org/2025/02/12/nx-s1-5290257/vice-president-vance-lays-out-ai-vision-very-different-from-biden-administrations", quote:"Vance pressed for US AI dominance, warning foreign governments against tightening rules on American tech."}
  },
  vonderleyen: {
    org: {label:"European Commission, InvestAI", url:"https://digital-strategy.ec.europa.eu/en/news/eu-launches-investai-initiative-mobilise-eu200-billion-investment-artificial-intelligence", quote:"InvestAI will mobilise EUR 200 billion for AI, including a EUR 20 billion fund for AI gigafactories."},
    stance: {label:"European Commission, AI Action Summit speech", url:"https://ec.europa.eu/commission/presscorner/detail/en/speech_25_471", quote:"We want Europe to be one of the leading AI continents."},
    sov: {label:"European Commission, AI Action Summit speech", url:"https://ec.europa.eu/commission/presscorner/detail/en/speech_25_471", quote:"We should invest in what we can do best and build our own strengths here in Europe."}
  },
  macron: {
    org: {label:"Euronews, AI Action Summit", url:"https://www.euronews.com/next/2025/02/11/heres-what-has-been-announced-at-the-ai-action-summit", quote:"Macron announced a 109 billion euro private-sector investment plan for AI in France."},
    stance: {label:"Fox Business, 'plug, baby, plug'", url:"https://www.foxbusiness.com/politics/frances-macron-says-plug-baby-plug-amid-push-nuclear-powered-ai", quote:"A good friend across the ocean says 'drill, baby, drill.' Here there is no need to drill. It's 'plug, baby, plug.'"},
    sov: {label:"Lombard Odier, Paris AI summit analysis", url:"https://www.lombardodier.com/insights/2025/february/ai-summit-in-paris.html", quote:"Macron framed France's AI push as a fight for sovereignty and strategic autonomy: Europe's own cloud, data centres and compute."}
  },
  modi: {
    org: {label:"Press Information Bureau, IndiaAI Mission", url:"https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2012355", quote:"The Cabinet approved the IndiaAI Mission with a Rs 10,371 crore outlay, including over 10,000 GPUs of compute."},
    stance: {label:"Business Standard, Modi at the AI summit", url:"https://www.business-standard.com/technology/tech-news/pm-modi-address-ai-action-summit-paris-open-source-data-sets-bias-jobs-125021101117_1.html", quote:"Modi called for open-source AI, bias-free datasets, and democratising technology for AI for Good and for All."},
    sov: {label:"Ministry of External Affairs, summit address", url:"https://www.mea.gov.in/Speeches-Statements.htm?dtl/39020/Opening_Address_by_Prime_Minister_Shri_Narendra_Modi_at_the_AI_Action_Summit_Paris_February_11_2025", quote:"Modi urged democratising technology and access for all, especially the Global South, and people-centric AI."}
  },
  meloni: {
    org: {label:"Reuters via U.S. News, Italy AI fund", url:"https://www.usnews.com/news/technology/articles/2024-03-12/italy-to-set-up-ai-fund-of-1-billion-euros-pm-says", quote:"Meloni announced a 1 billion euro fund, backed by state lender CDP's venture arm, to promote AI projects."},
    stance: {label:"governo.it, message on AI and Work", url:"https://www.governo.it/en/articolo/president-meloni-s-message-event-ai-and-work-managing-transformation-multiplying", quote:"AI can unleash its positive potential only if guided by ethical rules that keep people, their rights and needs at the centre."},
    sov: {label:"Decode39, national AI strategy", url:"https://decode39.com/8676/ai-meloni-gates-national-strategy/", quote:"Italy's strategy aims to reduce dependence on third countries, emphasising technological sovereignty."}
  },
  merz: {
    org: {label:"Bundesregierung, on AI and industry", url:"https://www.bundesregierung.de/breg-de/aktuelles/kanzler-kuenstliche-intelligenz-industrie-2422036", quote:"Merz argued Germany and the EU need sovereign access to the AI value chain to create industrial value and jobs."},
    stance: {label:"France 24 / AFP, at the digital summit", url:"https://www.france24.com/en/live-news/20251118-merz-macron-to-push-for-european-digital-sovereignty", quote:"The questions of the future will be decided predominantly in the digital realm."},
    sov: {label:"French MFA, Digital Sovereignty Summit", url:"https://uk.diplomatie.gouv.fr/en/summit-european-digital-sovereignty-delivers-landmark-commitments", quote:"A milestone towards a more sovereign, secure and competitive digital Europe."}
  },
  sanchez: {
    org: {label:"Barcelona Supercomputing Center, ALIA", url:"https://www.bsc.es/news/bsc-news/alia-europes-first-public-open-and-multilingual-ai-infrastructure", quote:"ALIA is the first European public, open and multilingual AI infrastructure, to reinforce technological sovereignty."},
    stance: {label:"La Moncloa, AI Impact Summit", url:"https://www.lamoncloa.gob.es/lang/en/presidente/news/paginas/2026/20260219-trip-to-india-second-day.aspx", quote:"Technologies like AI should expand human freedom, democracy and rights, not undermine them."},
    sov: {label:"La Moncloa, AI Impact Summit speech", url:"https://www.lamoncloa.gob.es/lang/en/presidente/intervenciones/Paginas/2026/20260219-global-ai-impact-summit-speech.aspx", quote:"A clear strategy of sustained public investment, European cooperation, and a firm commitment to technological sovereignty."}
  },
  starmer: {
    org: {label:"GOV.UK, AI Opportunities Action Plan", url:"https://www.gov.uk/government/news/prime-minister-sets-out-blueprint-to-turbocharge-ai", quote:"Starmer launched the AI Opportunities Action Plan, with AI Growth Zones and a major expansion of public compute."},
    stance: {label:"Computer Weekly, on backing bets", url:"https://www.computerweekly.com/news/366643844/Starmer-announces-sovereign-compute-strategy-amid-11bn-chip-investment", quote:"Government is active here, supporting risk-taking and making its own bets, but also making sure we are sovereign."},
    sov: {label:"Computer Weekly, sovereign compute", url:"https://www.computerweekly.com/news/366643844/Starmer-announces-sovereign-compute-strategy-amid-11bn-chip-investment", quote:"A sovereign compute strategy, aiming to make Britain an 'AI maker, not an AI taker'."}
  },
  schoof: {
    org: {label:"Netherlands government, AI Impact Summit", url:"https://www.netherlandsandyou.nl/web/india/w/prime-minister-dick-schoof-visits-ai-impact-summit", quote:"Schoof attended the AI Impact Summit to strengthen partnerships on trade, investment, innovation and AI talent."},
    stance: {label:"The Print, at the Delhi AI summit", url:"https://theprint.in/diplomacy/in-delhi-for-ai-summit-dutch-pm-schoof-calls-for-global-collaboration-on-ai-minus-us-china/2858962/", quote:"The US and China not being here shows other countries see rewards in working together on how to manage AI."},
    sov: {label:"The Print, 'own our own AI'", url:"https://theprint.in/diplomacy/in-delhi-for-ai-summit-dutch-pm-schoof-calls-for-global-collaboration-on-ai-minus-us-china/2858962/", quote:"Other countries should work together to create our own AI, to own our own AI, and make our own bloc."}
  },
  ek: {
    org: {label:"CNBC, Ek leads Helsing round", url:"https://www.cnbc.com/2025/06/17/spotifys-daniel-ek-leads-investment-in-defense-startup-helsing.html", quote:"Daniel Ek's Prima Materia led a 600 million euro round in defence-AI startup Helsing, valuing it at 12 billion euros."},
    stance: {label:"CNBC, on the new battlefield", url:"https://www.cnbc.com/2025/06/17/spotifys-daniel-ek-leads-investment-in-defense-startup-helsing.html", quote:"There's an enormous realisation that it's now AI, mass and autonomy that is driving the new battlefield."},
    sov: {label:"Helsing, European technological sovereignty", url:"https://helsing.ai/newsroom/helsing-raises-eur600m-to-invest-in-european-technological-sovereignty", quote:"An urgent need for investments in advanced technologies that ensure Europe's strategic autonomy and security."}
  },
  son: {
    org: {label:"OpenAI, the Stargate Project", url:"https://openai.com/index/announcing-the-stargate-project/", quote:"SoftBank and OpenAI lead a 500 billion dollar AI infrastructure project, Stargate, with Son as chairman."},
    stance: {label:"CNBC, the biggest revolution", url:"https://www.cnbc.com/2026/06/01/softbank-masayoshi-son-ai-revolution-investment.html", quote:"This is the biggest revolution of technology and realization that mankind ever experienced."},
    sov: {label:"Fortune, born to create ASI", url:"https://fortune.com/2024/06/27/softbank-ceo-masayoshi-son-born-to-create-artificial-super-intelligence/", quote:"This is what I was born to do, to realize artificial superintelligence."}
  },
  tangen: {
    org: {label:"Fortune, the fund and the Magnificent Seven", url:"https://fortune.com/europe/2025/01/22/ceo-nicolai-tangen-norway-wealth-fund-owns-173-billion-magnificent-7-tells-investors-sell-us-tech-stocks/", quote:"Norway's fund owns about 173 billion dollars of the Magnificent Seven, including roughly 1.3% of Nvidia."},
    stance: {label:"Bloomberg, staff must use AI", url:"https://www.bloomberg.com/news/articles/2025-05-27/norway-wealth-fund-ceo-tells-staff-they-must-use-ai", quote:"Tangen called AI the most important thing happening in the world, and told staff they must use it."},
    sov: {label:"CNBC, Europe must get its act together", url:"https://www.cnbc.com/2026/03/17/nbim-norway-norwegian-sovereign-wealth-fund-europe-iran-us-stocks-holdings-portfolio-nvidia-apple-microsoft.html", quote:"Because of the US companies' dominant position in AI we do not have strong companies in Europe in that field."}
  },
  furstenberg: {
    org: {label:"Sifted, on Helsing and Mistral boards", url:"https://sifted.eu/articles/jeannette-zu-furstenberg-interview-podcast", quote:"General Catalyst president and La Famiglia co-founder; sits on the boards of Helsing and Mistral AI."},
    stance: {label:"General Catalyst, profile", url:"https://www.generalcatalyst.com/team/jeannette-zu-furstenberg", quote:"Her investments are driven by a vision of a resilient, more prosperous Europe, with AI a key driver of transformation."},
    sov: {label:"Wikipedia, on winning the AI race", url:"https://en.wikipedia.org/wiki/Jeannette_zu_F%C3%BCrstenberg", quote:"Germany and Europe should not just make progress in AI but win the global race, not intimidated by projects like Stargate."}
  },
  alolama: {
    org: {label:"Atlantic Council, on the G42-Microsoft deal", url:"https://www.atlanticcouncil.org/blogs/new-atlanticist/uae-tech-minister-ai-will-be-the-new-lifeblood-for-governments-and-the-private-sector/", quote:"Al Olama described Microsoft's 1.5 billion dollar investment in Abu Dhabi's G42 as a 'marriage' of US tech and UAE talent."},
    stance: {label:"Atlantic Council, AI as 'new lifeblood'", url:"https://www.atlanticcouncil.org/blogs/new-atlanticist/uae-tech-minister-ai-will-be-the-new-lifeblood-for-governments-and-the-private-sector/", quote:"AI is going to be the new lifeblood, the new foundation for most governments, and for the private sector."},
    sov: {label:"Fortune, the UAE as a top AI power", url:"https://fortune.com/2023/12/21/uae-minister-future-ai-omar-al-olama-interview/", quote:"The future of AI is going to be determined by three countries: the US, China and the UAE."}
  },
  calvino: {
    org: {label:"European Investment Bank, financing AI gigafactories", url:"https://www.eib.org/en/press/all/2025-491-eib-group-and-european-commission-join-forces-to-finance-ai-gigafactories", quote:"By supporting major AI gigafactories, we scale up computing capacity and create the conditions for innovation to thrive."},
    stance: {label:"European Investment Bank, on Europe's strength", url:"https://www.eib.org/en/press/all/2025-491-eib-group-and-european-commission-join-forces-to-finance-ai-gigafactories", quote:"Europe is a technological powerhouse."},
    sov: {label:"European Commission, EIB partnership", url:"https://digital-strategy.ec.europa.eu/en/news/commission-and-european-investment-bank-group-team-support-ai-gigafactories", quote:"The EIB Group and Commission joined forces to finance AI gigafactories and reinforce technological sovereignty."}
  },
  lagarde: {
    org: {label:"BIS, 'The transformative power of AI'", url:"https://www.bis.org/review/r250407f.htm", quote:"We must act on the basis that we are facing an economic revolution."},
    stance: {label:"BIS, on the risk of falling behind", url:"https://www.bis.org/review/r250407f.htm", quote:"The risks of underestimating AI, and falling behind again, are simply too great to be ignored."},
    sov: {label:"BIS, on escalation dominance", url:"https://www.bis.org/review/r250916d.htm", quote:"A country that controls a critical technology can hold 'escalation dominance' even over partners with larger markets."}
  }
};

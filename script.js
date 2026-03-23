var state = {
  photo:'',
  skills:{
    lang:['Python','SystemVerilog','Verilog','C / C++','Embedded C','HTML / CSS','SQL'],
    ai:['CNN / ResNet-18','YOLOv8','Transfer Learning','GradCAM','LIME / XAI','PyTorch','TF-IDF / NLP','Data Augmentation'],
    test:['Vitrox AXI','Agilent 5DX','ICT / In-Circuit Test','Keysight i3070','False Call Reduction','DFT Analysis','Pre-Silicon Validation','HAPS-100','Root Cause Analysis','NPI','PCBA / SMT'],
    tools:['Xilinx Vivado','Electric VLSI','Vitis HLS','SIMIO','Streamlit','MongoDB','Git / GitHub','Google Colab','ExpertFit','VS Code'],
    core:['CMOS VLSI Design','Digital System Design','IEEE 754 / JTAG','BGA Solder Inspection','Discrete-Event Simulation','Inventory Optimization','IoT Systems','Wireless Power Transfer'],
    prof:['OEM Customer Collaboration','Schematic Analysis','Technical Writing','Research & Publication','Microsoft Office','Slack','Google Workspace','Cross-functional Teamwork']
  },
  experience:[
    {role:'Graduate Research Assistant',company:'State University of New York at Binghamton',loc:'',date:'Jul 2024 — Present',desc:'• Develop and test high-performance digital circuits, ensuring reliability and functionality across advanced hardware systems.\n• Contribute to FPGA-based prototyping and validation using the Synopsys HAPS-200 platform, focusing on signal integrity, debugging, and performance optimization for next-generation ASIC/SoC designs.\n• Performed board-level debugging and analyzed hardware failures across FPGA stacks and control interfaces.\n• Collaborated with cross-functional R&D and quality engineering teams to bridge theoretical research with practical hardware solutions and improve manufacturing yield.',tags:'FPGA,HAPS-200,ASIC / SoC,Signal Integrity,Board-Level Debug,Digital Design'},
    {role:'Test Engineer',company:'Sanmina Corporation',loc:'San Jose, CA',date:'Jan 2025 — Present',desc:'• Execute ICT and functional test programs on high-volume PCBA assemblies, validating fixture bring-up, test coverage, and first-pass yield targets across SMT production lines.\n• Conduct schematic analysis and board-level debugging to isolate and root-cause electrical failures; coordinate rework and drive corrective actions to improve manufacturing yield.\n• Support New Product Introduction by reviewing DFT requirements, defining test acceptance criteria, and validating test procedures against IPC-A-610 quality standards.\n• Collaborate directly with OEM customers and cross-functional engineering teams to analyze trended defects, disposition non-conforming product, and implement process improvements across the SMT line.',tags:'SMT / PCBA,ICT / Functional Test,Agilent 5DX,DFT Analysis,IPC-A-610,OEM Collaboration,Root Cause Analysis,NPI'}
  ],
  projects:[
    {num:'01',badge:'MS Thesis · 2026',title:'False Call Reduction in Vitrox AXI Using a Two-Stage Deep Learning Framework',course:'MS Thesis · SUNY Binghamton · Advisor: Dr. Daehan Won · Sanmina California',stats:[{val:'92.6%',lbl:'False Call Reduction'},{val:'387',lbl:'Eng Hours Saved/Day'},{val:'0.9662',lbl:'Model AUC'},{val:'$18K+',lbl:'Daily Cost Saved'}],desc:'The Vitrox AXI system at Sanmina generated ~1,000 false calls/day, consuming 416+ engineer hours where fewer than 7.4% of flagged boards had real defects. I built a two-stage framework: Stage 1 uses ResNet-18 fine-tuned on 977 normal and 185 defective X-ray images, augmented to 15,000 balanced samples; Stage 2 uses YOLOv8m for spatial solder ball localization. GradCAM and LIME provide interpretable evidence per decision. Deployed at threshold 0.70, false calls dropped from 1,000 to 74/day.',result:'AUC: 0.9662 · FCR: 5.55% · 92.6% Reduction · $18K+/day Saved',tags:'ResNet-18,YOLOv8,GradCAM,LIME,PyTorch,Vitrox AXI,Industrial AI'},
    {num:'02',badge:'',title:'Burgh Threads Inventory & Manufacturing Simulation',course:'',stats:[{val:'52',lbl:'SKUs Modeled'},{val:'991',lbl:'Optimal Inventory'},{val:'100%',lbl:'Fill Rate'}],desc:'I built a discrete-event simulation in SIMIO of a multi-stage apparel manufacturing system (Cutting → Sewing → QA → Storage → Shipping) with 52 SKUs and demand-proportional reorder points. Processing times fitted using ExpertFit across 40 time-study samples. Scenario 5 (Q ∈ [5,15], s = 30% monthly demand) achieved 991 units average inventory and 100% fill rate across 10 replications.',result:'SIMIO · ExpertFit · Inventory Control',tags:'SIMIO,Discrete-Event Simulation,Inventory Optimization,ExpertFit'},
    {num:'03',badge:'',title:'Course Recommendation Decision Support System',course:'',stats:[],desc:'I developed a smart DSS helping graduate students make personalized course selections — addressing scattered prerequisites and lack of structured guidance. Recommends three course combinations with visual weekly timetables and conflict detection. Built using Python, Streamlit, MongoDB, TF-IDF vectorization, and cosine similarity.',result:'Python · Streamlit · MongoDB · NLP',tags:'Python,Streamlit,MongoDB,TF-IDF,NLP,DSS'},
    {num:'04',badge:'',title:'32-Bit Single-Precision Floating Point Unit in SystemVerilog',course:'',stats:[{val:'IEEE 754',lbl:'Standard'},{val:'4 Ops',lbl:'+ − × ÷'},{val:'✓',lbl:'NaN / Inf / Zero'}],desc:'Designed and verified a fully functional 32-bit FPU from scratch in SystemVerilog conforming to IEEE 754, supporting all four arithmetic operations with sign handling, exponent alignment, mantissa normalization, rounding, and NaN/Infinity/Zero special-case logic. Verified in Xilinx Vivado via waveform simulation.',result:'SystemVerilog · Xilinx Vivado · Vitis HLS',tags:'SystemVerilog,Xilinx Vivado,IEEE 754,RTL Design'},
    {num:'05',badge:'',title:'16-Bit Accumulator — VLSI Schematic & Layout',course:'',stats:[{val:'0',lbl:'DRC Errors'},{val:'2743',lbl:'Networks'},{val:'✓',lbl:'NCC Match'}],desc:'Designed a fully custom 16-bit accumulator in Electric VLSI with multi-bit input buses, clock, reset, and output signals at the CMOS transistor level. Translated to physical layout and verified: DRC passed with 0 errors across 2743 networks, NCC confirmed all exports match, ERC found no well errors.',result:'Electric VLSI · SPICE · C5 Process Models · 2743 Networks',tags:'Electric VLSI,CMOS Design,DRC / NCC / ERC,Physical Layout'},
    {num:'06',badge:'',title:'IoT-Based Wireless Power Transfer System for EV Charging',course:'IEEE Published · ICSADL 2024',stats:[{val:'90%',lbl:'WPT Efficiency'},{val:'IEEE',lbl:'Published'}],desc:'Designed an IoT-based WPT system for EV charging using inductive coils embedded in road surfaces, enabling dynamic wireless charging. IoT module provides real-time monitoring of battery, charging time, and status via cloud server. Achieved 90% transfer efficiency. Published at IEEE ICSADL 2024.',result:'IEEE · ICSADL 2024 · DOI: 10.1109/ICSADL61749.2024.00128',tags:'IoT,WPT,Arduino UNO,Node MCU,IEEE Published'},
    {num:'07',badge:'',title:'Brain Tumor Localization & Multimodal Segmentation in MRI',course:'IEEE Published · ICKECS 2024',stats:[{val:'0.85',lbl:'Dice Coefficient'},{val:'0.92',lbl:'Sensitivity'},{val:'0.89',lbl:'Specificity'}],desc:'Built an automated multimodal brain tumor segmentation framework integrating T1, T2, and contrast-enhanced MRI using CNN with attention-based fusion. Pipeline includes wavelet denoising, normalization, registration, and skull stripping. Achieved DSC 0.85, Sensitivity 0.92, Specificity 0.89 — outperforming prior methods (DSC: 0.78). Published at IEEE ICKECS 2024.',result:'IEEE · ICKECS 2024 · DOI: 10.1109/ICKECS61492.2024.10617008',tags:'CNN,Deep Learning,MRI Segmentation,IEEE Published'}
  ],
  publications:[
    {year:'2024',title:'Brain Tumor Localization and Multimodal Segmentation in MRI Images by Automated Process',venue:'2024 ICKECS · IEEE · Chikkaballapur, India · 18–19 April 2024',link:'https://ieeexplore.ieee.org/document/10617008'},
    {year:'2024',title:'Wireless Power Transfer Systems for Electric Vehicle Application based on IoT',venue:'2024 3rd ICSADL · IEEE · Bhimdatta, Nepal · 13–14 March 2024',link:'https://ieeexplore.ieee.org/document/10601435'}
  ]
};

function handlePhoto(e){
  var f=e.target.files[0]; if(!f) return;
  var r=new FileReader();
  r.onload=function(ev){
    state.photo=ev.target.result;
    document.getElementById('hero-photo').src=state.photo;
    document.getElementById('hero-photo').style.display='block';
    document.getElementById('ph-placeholder').style.display='none';
    document.getElementById('modal-preview').src=state.photo;
    document.getElementById('modal-preview').style.display='block';
    document.getElementById('modal-icon').style.display='none';
  };
  r.readAsDataURL(f);
}

function renderChips(){
  ['lang','ai','test','tools','core','prof'].forEach(function(g){
    var el=document.getElementById('ce-'+g); if(!el) return;
    el.innerHTML=(state.skills[g]||[]).map(function(s,i){
      return '<span class="chip-editable">'+s+'<button onclick="removeChip(\''+g+'\','+i+')">✕</button></span>';
    }).join('');
  });
}
function addChip(g){ var inp=document.getElementById('ni-'+g); var v=inp.value.trim(); if(!v) return; state.skills[g].push(v); inp.value=''; renderChips(); }
function removeChip(g,i){ state.skills[g].splice(i,1); renderChips(); }

function renderExpEditor(){
  document.getElementById('exp-editor').innerHTML=state.experience.map(function(e,i){
    return '<div class="edit-card"><div class="edit-card-header"><span class="edit-card-title">'+(e.role||'New Entry')+'</span><button class="del-card-btn" onclick="delItem(\'experience\','+i+')">Remove</button></div>'+
      '<div class="field-row"><div class="field"><label>Job Title</label><input type="text" value="'+x(e.role)+'" oninput="state.experience['+i+'].role=this.value;this.closest(\'.edit-card\').querySelector(\'.edit-card-title\').textContent=this.value"/></div><div class="field"><label>Company</label><input type="text" value="'+x(e.company)+'" oninput="state.experience['+i+'].company=this.value"/></div></div>'+
      '<div class="field-row"><div class="field"><label>Location</label><input type="text" value="'+x(e.loc)+'" oninput="state.experience['+i+'].loc=this.value"/></div><div class="field"><label>Date</label><input type="text" value="'+x(e.date)+'" oninput="state.experience['+i+'].date=this.value"/></div></div>'+
      '<div class="field"><label>Description</label><textarea oninput="state.experience['+i+'].desc=this.value">'+x(e.desc)+'</textarea></div>'+
      '<div class="field"><label>Tags (comma-separated)</label><input type="text" value="'+x(e.tags)+'" oninput="state.experience['+i+'].tags=this.value"/></div></div>';
  }).join('');
}
function addExp(){ state.experience.unshift({role:'',company:'',loc:'',date:'',desc:'',tags:''}); renderExpEditor(); }

function renderProjEditor(){
  document.getElementById('proj-editor').innerHTML=state.projects.map(function(p,i){
    return '<div class="edit-card"><div class="edit-card-header"><span class="edit-card-title">'+(p.title||'New Project')+'</span><button class="del-card-btn" onclick="delItem(\'projects\','+i+')">Remove</button></div>'+
      '<div class="field-row"><div class="field"><label>Title</label><input type="text" value="'+x(p.title)+'" oninput="state.projects['+i+'].title=this.value;this.closest(\'.edit-card\').querySelector(\'.edit-card-title\').textContent=this.value"/></div><div class="field"><label>Number</label><input type="text" value="'+x(p.num)+'" oninput="state.projects['+i+'].num=this.value"/></div></div>'+
      '<div class="field"><label>Course / Context</label><input type="text" value="'+x(p.course)+'" oninput="state.projects['+i+'].course=this.value"/></div>'+
      '<div class="field"><label>Description</label><textarea oninput="state.projects['+i+'].desc=this.value">'+x(p.desc)+'</textarea></div>'+
      '<div class="field"><label>Result / Tools</label><input type="text" value="'+x(p.result)+'" oninput="state.projects['+i+'].result=this.value"/></div>'+
      '<div class="field"><label>Tags (comma-separated)</label><input type="text" value="'+x(p.tags)+'" oninput="state.projects['+i+'].tags=this.value"/></div></div>';
  }).join('');
}
function addProj(){ state.projects.push({num:'0'+(state.projects.length+1),title:'',course:'',desc:'',result:'',tags:''}); renderProjEditor(); }

function renderPubEditor(){
  document.getElementById('pub-editor').innerHTML=state.publications.map(function(p,i){
    return '<div class="edit-card"><div class="edit-card-header"><span class="edit-card-title">'+(p.title.substring(0,50)||'New Pub')+'...</span><button class="del-card-btn" onclick="delItem(\'publications\','+i+')">Remove</button></div>'+
      '<div class="field"><label>Title</label><input type="text" value="'+x(p.title)+'" oninput="state.publications['+i+'].title=this.value"/></div>'+
      '<div class="field-row"><div class="field"><label>Year</label><input type="text" value="'+x(p.year)+'" oninput="state.publications['+i+'].year=this.value"/></div><div class="field"><label>Link URL</label><input type="text" value="'+x(p.link)+'" oninput="state.publications['+i+'].link=this.value"/></div></div>'+
      '<div class="field"><label>Venue</label><textarea oninput="state.publications['+i+'].venue=this.value">'+x(p.venue)+'</textarea></div></div>';
  }).join('');
}
function addPub(){ state.publications.push({year:'2026',title:'',venue:'',link:''}); renderPubEditor(); }

function delItem(arr,i){ if(!confirm('Remove this entry?')) return; state[arr].splice(i,1); if(arr==='experience') renderExpEditor(); else if(arr==='projects') renderProjEditor(); else renderPubEditor(); }
function x(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function buildExpHTML(){
  return state.experience.map(function(e,i){
    var tags=e.tags.split(',').map(function(t){return '<span class="tag">'+t.trim()+'</span>';}).join('');
    var descHtml;
    if(e.desc && e.desc.indexOf('•')!==-1){
      var lines=e.desc.split('\n').filter(function(l){return l.trim();});
      descHtml='<ul style="padding-left:1.1rem;margin:0;display:flex;flex-direction:column;gap:.55rem">'+
        lines.map(function(l){return '<li>'+l.replace(/^[•\s]+/,'')+'</li>';}).join('')+
        '</ul>';
    } else { descHtml=e.desc; }
    var mbStyle=i===state.experience.length-1?' style="margin-bottom:0"':'';
    var compLoc=e.company+(e.loc?' · '+e.loc:'');
    return '<div class="exp-item"'+mbStyle+'><div class="exp-header"><div><div class="exp-role">'+e.role+'</div><div class="exp-company">'+compLoc+'</div></div><div class="exp-date">'+e.date+'</div></div><div class="exp-desc">'+descHtml+'</div><div class="tags" style="margin-top:1rem">'+tags+'</div></div>';
  }).join('');
}

function buildProjHTML(){
  return state.projects.map(function(p){
    var tags=p.tags.split(',').map(function(t){return '<span class="tag">'+t.trim()+'</span>';}).join('');
    var badge=p.badge?'<div class="proj-badge">'+p.badge+'</div>':'';
    var stats=p.stats&&p.stats.length?'<div class="proj-stats">'+p.stats.map(function(s){return '<div class="pstat"><div class="pstat-val">'+s.val+'</div><div class="pstat-lbl">'+s.lbl+'</div></div>';}).join('')+'</div>':'';
    return '<div class="proj-item">'+badge+'<div class="proj-header"><div class="proj-num">'+p.num+'</div><div class="proj-meta"><div class="proj-course">'+p.course+'</div><div class="proj-title">'+p.title+'</div></div></div>'+stats+'<div class="proj-desc">'+p.desc+'</div><div class="tags">'+tags+'</div><div class="proj-result">'+p.result+'</div></div>';
  }).join('');
}

function buildPubHTML(){
  return state.publications.map(function(p){
    var link=p.link?'<a href="'+p.link+'" target="_blank" class="pub-link">View on IEEE Xplore →</a>':'';
    return '<div class="pub-item"><span class="pub-year">'+p.year+'</span><div><div class="pub-title">'+p.title+'</div><div class="pub-venue">'+p.venue+'</div>'+link+'</div></div>';
  }).join('');
}

function buildSkillsHTML(){
  var groups=[{id:'lang',label:'Languages &amp; HDL'},{id:'ai',label:'AI &amp; Machine Learning'},{id:'test',label:'Test &amp; Inspection Engineering'},{id:'tools',label:'Tools &amp; Software'},{id:'core',label:'Core Engineering'},{id:'prof',label:'Professional Skills'}];
  return '<div class="skills-grid">'+groups.map(function(g){
    var chips=(state.skills[g.id]||[]).map(function(s){return '<span class="chip">'+s+'</span>';}).join('');
    return '<div class="skill-group"><h3>'+g.label+'</h3><div class="chip-list">'+chips+'</div></div>';
  }).join('')+'</div>';
}

function saveFile(){
  var fn=document.getElementById('e-fn').value;
  var ln=document.getElementById('e-ln').value;
  var role=document.getElementById('e-role').value;
  var bio=document.getElementById('e-bio').value;
  var email=document.getElementById('e-email').value;
  var loc=document.getElementById('e-loc').value;
  var li=document.getElementById('e-li').value;

  // Force-hide modal and overlay before capturing HTML so they don't appear on reload
  var modal=document.getElementById('modal');
  var overlay=document.getElementById('pw-overlay');
  var prevModal=modal.style.cssText;
  var prevOverlay=overlay.style.cssText;
  modal.style.cssText='display:none';
  overlay.style.cssText='display:none';
  document.body.style.overflow='';

  var html=document.documentElement.outerHTML;

  // Restore modal state after capture
  modal.style.cssText=prevModal;
  overlay.style.cssText=prevOverlay;

  var expNew='\n  <!-- EXP_START -->\n'+buildExpHTML()+'\n  <!-- EXP_END -->';
  html=html.replace(/<!-- EXP_START -->[\s\S]*?<!-- EXP_END -->/,expNew);

  var projNew='\n  <!-- PROJ_START -->\n'+buildProjHTML()+'\n  <!-- PROJ_END -->';
  html=html.replace(/<!-- PROJ_START -->[\s\S]*?<!-- PROJ_END -->/,projNew);

  var pubNew='\n  <!-- PUB_START -->\n'+buildPubHTML()+'\n  <!-- PUB_END -->';
  html=html.replace(/<!-- PUB_START -->[\s\S]*?<!-- PUB_END -->/,pubNew);

  var skillsNew='\n  <!-- SKILLS_START -->\n'+buildSkillsHTML()+'\n  <!-- SKILLS_END -->';
  html=html.replace(/<!-- SKILLS_START -->[\s\S]*?<!-- SKILLS_END -->/,skillsNew);

  // About Me paragraphs
  var a1=document.getElementById('e-about1').value;
  var a2=document.getElementById('e-about2').value;
  var a3=document.getElementById('e-about3').value;
  var aboutNew='<!-- ABOUT_START -->\n      <p>'+a1+'</p>\n      <p>'+a2+'</p>\n      <p>'+a3+'</p>\n      <!-- ABOUT_END -->';
  html=html.replace(/<!-- ABOUT_START -->[\s\S]*?<!-- ABOUT_END -->/,aboutNew);

  // Education card
  var edu=document.getElementById('e-edu').value;
  var eduLines=edu.split('\n').filter(function(l){return l.trim();});
  var eduHtml=eduLines.join('<br>');
  var eduNew='<!-- EDU_START -->\n      <div class="acard reveal-ready revealed"><h4>Education</h4><p>'+eduHtml+'</p></div>\n      <!-- EDU_END -->';
  html=html.replace(/<!-- EDU_START -->[\s\S]*?<!-- EDU_END -->/,eduNew);

  if(state.photo){
    html=html.replace(/id="hero-photo" src="[^"]*"/,'id="hero-photo" src="'+state.photo+'"');
    html=html.replace(/id="hero-photo"([^>]*)style="display:none"/,'id="hero-photo"$1style="display:block"');
    html=html.replace(/id="ph-placeholder"([^>]*)>/,'id="ph-placeholder"$1 style="display:none">');
  }

  // Update editor input field values so Profile tab shows correct data on re-edit
  var fn=document.getElementById('e-fn').value;
  var ln=document.getElementById('e-ln').value;
  var role=document.getElementById('e-role').value;
  var bio=document.getElementById('e-bio').value;
  var email=document.getElementById('e-email').value;
  var loc=document.getElementById('e-loc').value;
  var li=document.getElementById('e-li').value;
  function escAttr(s){ return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
  html=html.replace(/id="e-fn" value="[^"]*"/, 'id="e-fn" value="'+escAttr(fn)+'"');
  html=html.replace(/id="e-ln" value="[^"]*"/, 'id="e-ln" value="'+escAttr(ln)+'"');
  html=html.replace(/id="e-role" value="[^"]*"/, 'id="e-role" value="'+escAttr(role)+'"');
  html=html.replace(/id="e-li" value="[^"]*"/, 'id="e-li" value="'+escAttr(li)+'"');
  html=html.replace(/id="e-email" value="[^"]*"/, 'id="e-email" value="'+escAttr(email)+'"');
  html=html.replace(/id="e-loc" value="[^"]*"/, 'id="e-loc" value="'+escAttr(loc)+'"');
  // Update textareas by replacing their content
  html=html.replace(/(<textarea id="e-bio">)[^<]*(<\/textarea>)/, '$1'+escAttr(bio)+'$2');
  html=html.replace(/(<textarea id="e-about1">)[^<]*(<\/textarea>)/, '$1'+escAttr(a1)+'$2');
  html=html.replace(/(<textarea id="e-about2">)[^<]*(<\/textarea>)/, '$1'+escAttr(a2)+'$2');
  html=html.replace(/(<textarea id="e-about3">)[^<]*(<\/textarea>)/, '$1'+escAttr(a3)+'$2');
  html=html.replace(/(<textarea id="e-edu">)[^<]*(<\/textarea>)/, '$1'+escAttr(edu)+'$2');

  // Also update the state variable in the saved HTML so re-editing works correctly
  var savedState = JSON.parse(JSON.stringify(state));
  savedState.photo = ''; // don't embed photo in state (it's already in the img src)
  var stateStr = 'var state = ' + JSON.stringify(savedState, null, 2) + ';';
  html = html.replace(/var state\s*=\s*\{[\s\S]*?\n\};/, stateStr);

  // Strip scroll-reveal animation — downloaded file should show all content immediately
  html = html.replace(/\breveal-ready\b ?/g, '');
  html = html.replace('.reveal-ready{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}', '');

  var blob=new Blob(['<!DOCTYPE html>\n'+html],{type:'text/html'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a'); a.href=url; a.download='index.html'; a.click();
  URL.revokeObjectURL(url);
  var n=document.getElementById('notice'); n.style.display='block';
  setTimeout(function(){n.style.display='none'},5000);
}



function checkPw(){
  var pw=document.getElementById('pw-input').value;
  if(pw==='kaviya1202@'){
    document.getElementById('pw-overlay').style.display='none';
    document.getElementById('modal').style.display='flex';
    document.body.style.overflow='hidden';
  } else {
    document.getElementById('pw-error').style.display='block';
    document.getElementById('pw-input').value='';
    document.getElementById('pw-input').focus();
  }
}

function switchTab(id,btn){
  document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active');});
  document.querySelectorAll('.mtab').forEach(function(b){b.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

function openModal(){
  renderExpEditor(); renderProjEditor(); renderPubEditor(); renderChips();
  document.getElementById('modal').style.cssText='display:flex !important;position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:900;overflow-y:auto;padding:2rem;align-items:flex-start;justify-content:center';
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('modal').style.cssText='display:none';
  document.body.style.overflow='';
}

(function(){
  var eCount=0,eTimer=null;
  document.addEventListener('keydown',function(ev){
    if(ev.target.tagName==='INPUT'||ev.target.tagName==='TEXTAREA') return;
    if(ev.key==='e'||ev.key==='E'){
      eCount++;
      clearTimeout(eTimer);
      if(eCount>=3){
        eCount=0;
        document.getElementById('pw-overlay').style.display='flex';
        setTimeout(function(){document.getElementById('pw-input').focus();},50);
      } else {
        eTimer=setTimeout(function(){eCount=0;},700);
      }
    }
  });
})();
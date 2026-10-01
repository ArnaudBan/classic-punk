/* @ds-bundle: {"format":4,"namespace":"ClassicPunk","components":[{"name":"Logo"},{"name":"Icon"},{"name":"Button"},{"name":"ButtonGroup"},{"name":"TextLink"},{"name":"Badge"},{"name":"Credits"},{"name":"SectionHead"},{"name":"AppCard"},{"name":"TrackList"},{"name":"Manifesto"},{"name":"Stats"},{"name":"SloganBanner"},{"name":"Aplat"},{"name":"Highlight"},{"name":"Marker"},{"name":"Strike"},{"name":"Field"},{"name":"Notice"},{"name":"Faq"},{"name":"PriceTable"},{"name":"SiteHeader"},{"name":"SiteFooter"}]} */
(function(){
"use strict";
var React=window.React, h=React.createElement, useState=React.useState;
var LOGO={"W": {"disc": "M47 12.65A38 38 0 1 0 47 87.35Z", "label": "M47 28.09A23 23 0 1 0 47 71.91Z", "dot": "M40 46.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7Z", "pout": "M52 12H96A30 30 0 0 1 96 72H70V88H52Z", "pctr": "M70 30H96A12 12 0 0 1 96 54H70Z", "sleeve": "M52 12H126V88H52Z"}, "S": {"disc": "M40 19.8A31 31 0 1 0 40 80.2Z", "label": "M40 36.73A15 15 0 1 0 40 63.27Z", "dot": "M33 47a3 3 0 1 0 0 6a3 3 0 1 0 0-6Z", "pout": "M44 19H76A22 22 0 0 1 76 63H58V81H44Z", "pctr": "M58 33H76A8 8 0 0 1 76 49H58Z", "sleeve": "M44 19H98V81H44Z"}, "word": "M171.29 65.52Q165.0 65.52 160.80 63.75Q156.60 61.98 154.50 58.52Q152.40 55.07 152.40 49.95Q152.40 42.47 157.23 38.43Q162.06 34.38 171.34 34.38Q176.50 34.38 180.43 35.94Q184.37 37.49 186.58 40.31Q188.79 43.13 188.79 46.98H180.13Q180.13 45.10 179.01 43.76Q177.90 42.43 175.88 41.71Q173.87 40.99 171.20 40.99Q168.06 40.99 165.91 42.06Q163.77 43.13 162.66 45.01Q161.54 46.89 161.54 49.38V50.48Q161.54 52.97 162.66 54.87Q163.77 56.77 165.89 57.84Q168.01 58.92 171.07 58.92Q173.96 58.92 176.04 58.24Q178.11 57.56 179.23 56.25Q180.34 54.94 180.34 53.10H188.83Q188.83 56.82 186.69 59.62Q184.54 62.41 180.63 63.97Q176.72 65.52 171.29 65.52ZM194.91 65.0V34.91H203.79V57.82H223.11V65.0ZM224.82 65.0 239.60 34.91H249.53L264.31 65.0H254.65L252.37 60.18H236.28L234.00 65.0ZM239.25 53.67H249.40L246.69 47.55Q246.51 47.15 246.20 46.39Q245.90 45.62 245.55 44.77Q245.20 43.92 244.94 43.19Q244.67 42.47 244.50 42.12H244.19Q243.89 42.91 243.45 43.96Q243.01 45.01 242.64 45.97Q242.27 46.93 241.96 47.55ZM284.73 65.52Q281.06 65.52 277.87 65.08Q274.67 64.65 272.27 63.55Q269.86 62.46 268.51 60.49Q267.15 58.52 267.15 55.51Q267.15 55.42 267.15 55.29Q267.15 55.16 267.20 55.02H275.94Q275.90 55.20 275.88 55.37Q275.86 55.55 275.86 55.77Q275.86 57.12 276.88 57.89Q277.91 58.65 279.75 58.96Q281.58 59.27 284.08 59.27Q285.08 59.27 286.15 59.20Q287.23 59.13 288.23 58.98Q289.24 58.83 290.05 58.52Q290.86 58.22 291.31 57.76Q291.77 57.30 291.77 56.60Q291.77 55.68 290.79 55.13Q289.81 54.59 288.08 54.26Q286.35 53.93 284.23 53.67Q282.11 53.41 279.83 53.03Q277.56 52.66 275.42 52.03Q273.27 51.39 271.57 50.34Q269.86 49.30 268.86 47.63Q267.85 45.97 267.85 43.61Q267.85 41.20 269.05 39.48Q270.26 37.75 272.44 36.61Q274.63 35.48 277.60 34.93Q280.58 34.38 284.08 34.38Q287.66 34.38 290.57 34.95Q293.48 35.52 295.56 36.63Q297.63 37.75 298.75 39.43Q299.86 41.12 299.86 43.39V44.00H291.25V43.65Q291.25 42.74 290.46 42.01Q289.67 41.29 288.17 40.88Q286.66 40.46 284.51 40.46Q281.93 40.46 280.27 40.79Q278.61 41.12 277.82 41.66Q277.04 42.21 277.04 42.91Q277.04 43.79 278.04 44.29Q279.05 44.79 280.75 45.10Q282.46 45.40 284.58 45.67Q286.70 45.93 289.00 46.28Q291.29 46.63 293.41 47.24Q295.53 47.85 297.24 48.88Q298.95 49.91 299.95 51.50Q300.96 53.10 300.96 55.42Q300.96 59.05 298.86 61.28Q296.76 63.51 293.11 64.51Q289.46 65.52 284.73 65.52ZM322.65 65.52Q318.97 65.52 315.78 65.08Q312.59 64.65 310.18 63.55Q307.78 62.46 306.42 60.49Q305.07 58.52 305.07 55.51Q305.07 55.42 305.07 55.29Q305.07 55.16 305.11 55.02H313.86Q313.81 55.20 313.79 55.37Q313.77 55.55 313.77 55.77Q313.77 57.12 314.80 57.89Q315.83 58.65 317.66 58.96Q319.50 59.27 321.99 59.27Q323.00 59.27 324.07 59.20Q325.14 59.13 326.15 58.98Q327.15 58.83 327.96 58.52Q328.77 58.22 329.23 57.76Q329.69 57.30 329.69 56.60Q329.69 55.68 328.70 55.13Q327.72 54.59 325.99 54.26Q324.27 53.93 322.15 53.67Q320.02 53.41 317.75 53.03Q315.48 52.66 313.33 52.03Q311.19 51.39 309.48 50.34Q307.78 49.30 306.77 47.63Q305.77 45.97 305.77 43.61Q305.77 41.20 306.97 39.48Q308.17 37.75 310.36 36.61Q312.55 35.48 315.52 34.93Q318.49 34.38 321.99 34.38Q325.58 34.38 328.49 34.95Q331.39 35.52 333.47 36.63Q335.55 37.75 336.66 39.43Q337.78 41.12 337.78 43.39V44.00H329.16V43.65Q329.16 42.74 328.38 42.01Q327.59 41.29 326.08 40.88Q324.57 40.46 322.43 40.46Q319.85 40.46 318.19 40.79Q316.53 41.12 315.74 41.66Q314.95 42.21 314.95 42.91Q314.95 43.79 315.96 44.29Q316.96 44.79 318.67 45.10Q320.37 45.40 322.5 45.67Q324.62 45.93 326.91 46.28Q329.21 46.63 331.33 47.24Q333.45 47.85 335.16 48.88Q336.86 49.91 337.87 51.50Q338.87 53.10 338.87 55.42Q338.87 59.05 336.77 61.28Q334.67 63.51 331.02 64.51Q327.37 65.52 322.65 65.52ZM344.51 65.0V34.91H353.39V65.0ZM378.41 65.52Q372.11 65.52 367.91 63.75Q363.71 61.98 361.61 58.52Q359.51 55.07 359.51 49.95Q359.51 42.47 364.35 38.43Q369.18 34.38 378.45 34.38Q383.61 34.38 387.55 35.94Q391.48 37.49 393.69 40.31Q395.90 43.13 395.90 46.98H387.24Q387.24 45.10 386.12 43.76Q385.01 42.43 383.00 41.71Q380.99 40.99 378.32 40.99Q375.17 40.99 373.03 42.06Q370.88 43.13 369.77 45.01Q368.65 46.89 368.65 49.38V50.48Q368.65 52.97 369.77 54.87Q370.88 56.77 373.01 57.84Q375.13 58.92 378.19 58.92Q381.07 58.92 383.15 58.24Q385.23 57.56 386.34 56.25Q387.46 54.94 387.46 53.10H395.94Q395.94 56.82 393.80 59.62Q391.66 62.41 387.74 63.97Q383.83 65.52 378.41 65.52ZM415.32 65.0V34.91H438.49Q441.47 34.91 443.68 36.22Q445.88 37.53 447.13 39.83Q448.38 42.12 448.38 45.14Q448.38 48.16 447.11 50.50Q445.84 52.84 443.61 54.13Q441.38 55.42 438.41 55.42H424.19V65.0ZM424.19 48.81H435.96Q437.93 48.81 438.95 47.87Q439.98 46.93 439.98 45.18Q439.98 44.00 439.50 43.19Q439.02 42.39 438.14 41.95Q437.27 41.51 435.96 41.51H424.19ZM470.42 65.52Q464.47 65.52 460.58 63.79Q456.69 62.06 454.76 58.76Q452.84 55.46 452.84 50.83V34.91H461.72V50.43Q461.72 54.46 463.99 56.69Q466.26 58.92 470.42 58.92Q474.57 58.92 476.85 56.69Q479.12 54.46 479.12 50.43V34.91H488.04V50.83Q488.04 55.46 486.12 58.76Q484.19 62.06 480.28 63.79Q476.37 65.52 470.42 65.52ZM495.30 65.0V34.91H503.26L518.83 48.95Q519.22 49.30 519.86 49.91Q520.49 50.52 521.17 51.18Q521.85 51.83 522.33 52.40H522.72Q522.72 51.61 522.70 50.43Q522.68 49.25 522.68 48.33V34.91H531.07V65.0H523.25L508.03 51.26Q506.98 50.34 505.84 49.21Q504.70 48.07 504.00 47.41H503.65Q503.65 47.98 503.68 49.25Q503.70 50.52 503.70 51.96V65.0ZM538.51 65.0V34.91H547.39V49.51L563.74 34.91H574.98L561.25 47.33L575.29 65.0H564.27L554.69 52.66L547.39 58.57V65.0Z", "wordW": 578};
var ICONS={"mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\"/><path d=\"M3 6l9 7 9-7\"/>", "arrow-right": "<path d=\"M4 12h15\"/><path d=\"M13 6l6 6-6 6\"/>", "external": "<path d=\"M6 18L18 6\"/><path d=\"M8 6h10v10\"/>", "mac": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\"/><path d=\"M12 16v4\"/><path d=\"M8 20h8\"/>", "iphone": "<rect x=\"7\" y=\"2\" width=\"10\" height=\"20\"/><path d=\"M11 18h2\"/>", "lock": "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/>", "check": "<path d=\"M4 12.5l5.5 5.5L20 6\"/>", "chevron-down": "<path d=\"M6 9l6 6 6-6\"/>", "menu": "<path d=\"M3 7h18\"/><path d=\"M3 12h18\"/><path d=\"M3 17h18\"/>", "close": "<path d=\"M5 5l14 14\"/><path d=\"M19 5L5 19\"/>", "alert": "<path d=\"M12 3L2 20h20z\"/><path d=\"M12 10v4\"/><path d=\"M12 17v1\"/>"};

function cx(){return Array.prototype.filter.call(arguments,Boolean).join(" ");}

var INK="#121212", PAPER="#F2F0EA", Y="#FFCF1A", W="#FFFFFF";

function Icon(p){
  var size=p.size||20, name=p.name, s=ICONS[name];
  if(!s) return null;
  return h("svg",{className:cx("cp-icon",p.className),width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"square",strokeLinejoin:"miter","aria-hidden":p.title?undefined:"true",role:p.title?"img":undefined,dangerouslySetInnerHTML:{__html:(p.title?"<title>"+p.title+"</title>":"")+s}});
}

function symbolPaths(tone,g){
  var k=0; function P(fill,d,rule){return h("path",{key:k++,fill:fill,d:d,fillRule:rule});}
  if(tone==="dark") return [P(PAPER,g.disc),P(Y,g.label),P(INK,g.dot),P(Y,g.pout+g.pctr,"evenodd")];
  if(tone==="black"||tone==="white"){var c=tone==="black"?INK:W;return [P(c,g.disc+g.label+g.dot,"evenodd"),P(c,g.pout+g.pctr,"evenodd")];}
  return [P(INK,g.disc),P(Y,g.label),P(INK,g.dot),P(INK,g.sleeve+g.pout+g.pctr,"evenodd"),P(Y,g.pout+g.pctr,"evenodd")];
}
function Logo(p){
  var variant=p.variant||"horizontal", tone=p.tone||"light", height=p.height||40, title=p.title||"Classic Punk";
  var sq=variant==="square", g=sq?LOGO.S:LOGO.W;
  var vbW=variant==="horizontal"?LOGO.wordW:(sq?100:130);
  var kids=[h("title",{key:"t"},title)].concat(symbolPaths(tone,g));
  if(variant==="horizontal"){
    var wc={light:INK,dark:PAPER,black:INK,white:W}[tone]||INK;
    kids.push(h("path",{key:"w",fill:wc,d:LOGO.word}));
  }
  return h("span",{className:cx("cp-logo",p.className),style:{height:height}},
    h("svg",{viewBox:"0 0 "+vbW+" 100",role:"img",height:height,width:Math.round(height*vbW/100)},kids));
}

function Button(p){
  var variant=p.variant||"primary", soon=p.soon, disabled=p.disabled||soon;
  var cls=cx("cp-btn","cp-btn--"+variant,p.size==="lg"&&"cp-btn--lg",p.className);
  var kids=[p.icon&&h(Icon,{key:"i",name:p.icon,size:18}),h("span",{key:"l"},p.children),p.iconAfter&&h(Icon,{key:"a",name:p.iconAfter,size:18})];
  if(p.href&&!disabled) return h("a",{className:cls,href:p.href,target:p.target,rel:p.target==="_blank"?"noopener":undefined,onClick:p.onClick},kids);
  return h("button",{className:cls,type:p.type||"button",onClick:disabled?undefined:p.onClick,"aria-disabled":disabled?"true":undefined,disabled:p.disabled&&!soon?true:undefined},kids);
}
function ButtonGroup(p){return h("div",{className:cx("cp-btn-group",p.className)},p.children);}

function TextLink(p){
  return h("a",{className:cx("cp-link",p.className),href:p.href,target:p.external?"_blank":undefined,rel:p.external?"noopener":undefined},
    p.children, p.external&&h(Icon,{name:"external",size:16,title:"(nouvel onglet)"}));
}

var BADGE_TEXT={available:"Disponible",soon:"Bientôt",dev:"En développement",neutral:""};
function Badge(p){
  var status=p.status||"neutral";
  return h("span",{className:cx("cp-badge","cp-badge--"+status,p.className)},
    status==="available"&&h(Icon,{name:"check",size:14}),
    status==="dev"&&h("span",{className:"cp-badge__dot","aria-hidden":"true"}),
    p.children||BADGE_TEXT[status]);
}

function Credits(p){
  return h("ul",{className:cx("cp-credits",p.className)},(p.items||[]).map(function(t,i){return h("li",{key:i},t);}));
}

function SectionHead(p){
  var T=p.as||"h2";
  return h("header",{className:cx("cp-sechead",p.className),id:p.id},
    h("div",{className:"cp-sechead__num"},p.number||""),
    h("div",null,
      p.eyebrow&&h("p",{className:"cp-sechead__eyebrow"},p.eyebrow),
      h(T,{className:"cp-sechead__title"},p.title),
      p.intro&&h("p",{className:"cp-sechead__intro"},p.intro)));
}

function Aplat(p){
  return h("span",{className:cx("cp-aplat",p.className),"aria-hidden":"true",style:Object.assign({width:p.width||240,height:p.height||160},p.style)});
}
function Highlight(p){return h("span",{className:cx("cp-highlight",p.className)},p.children);}
function Marker(p){return h("span",{className:cx("cp-marker",p.className),style:p.style},p.children);}
function Strike(p){
  return h("span",{className:cx("cp-strike",p.className)},
    h("s",{style:{textDecoration:"none"}},p.children),
    h("svg",{viewBox:"0 0 100 10",preserveAspectRatio:"none","aria-hidden":"true"},h("path",{d:"M1 8 C30 5, 60 4, 99 1"})));
}

function AppCard(p){
  var body=[
    h("div",{key:"top",className:"cp-appcard__top"},h("b",null,p.catalog),h("span",null,p.side||""),h("span",null,p.platform)),
    h("div",{key:"b",className:"cp-appcard__body"},
      h("h3",{className:"cp-appcard__name"},p.name),
      p.endorsement&&h("div",{className:"cp-appcard__endorse"},p.endorsement),
      p.tagline&&h("p",{className:"cp-appcard__tagline"},p.tagline),
      p.description&&h("p",{className:"cp-appcard__desc"},p.description),
      h("div",{className:"cp-appcard__foot"},
        p.status&&h(Badge,{status:p.status},p.statusLabel),
        p.href&&h(TextLink,{href:p.href},p.linkLabel||"Découvrir"))),
    p.guestColor&&h("div",{key:"g",className:"cp-appcard__guest",style:{background:p.guestColor}})
  ];
  return h("article",{className:cx("cp-appcard",p.className)},body);
}

function TrackList(p){
  var side=p.side||"A", cols=p.columns;
  return h("ol",{className:cx("cp-tracks",cols&&"cp-tracks--cols",p.className),style:cols?{"--cp-cols":cols}:undefined},
    (p.items||[]).map(function(it,i){
      return h("li",{key:i,className:"cp-tracks__item"},
        h("span",{className:"cp-tracks__num"},it.number||(side+(i+1))),
        h("div",null,h("h3",{className:"cp-tracks__title"},it.title),it.text&&h("p",{className:"cp-tracks__text"},it.text)));
    }));
}

function Manifesto(p){
  function col(c,punk,side){
    return h("div",{className:cx("cp-manifesto__col",punk&&"cp-manifesto__col--punk cp-inverse")},
      h("div",{className:"cp-manifesto__head"},
        h("h3",{className:"cp-manifesto__title"},punk?h(Highlight,null,c.title):c.title),
        h("span",{className:"cp-manifesto__side"},"Face "+side)),
      h(TrackList,{side:side,items:c.items}));
  }
  return h("div",{className:cx("cp-manifesto",p.className)},col(p.left,false,"A"),col(p.right,true,"B"),
    p.outro&&h("p",{className:"cp-manifesto__outro"},p.outro));
}

function Stats(p){
  return h("dl",{className:cx("cp-stats",p.className)},(p.items||[]).map(function(s,i){
    return h("div",{key:i,className:"cp-stats__item"},h("dt",{className:"cp-stats__value"},s.value),h("dd",{className:"cp-stats__label"},s.label));
  }));
}

function SloganBanner(p){
  return h("section",{className:cx("cp-slogan","cp-slogan--"+(p.tone||"inverse"),p.className)},h("p",{className:"cp-slogan__text"},p.children));
}

function Field(p){
  var id=p.id||("f-"+p.name), type=p.type||"text", err=p.error, helpId=id+"-help", errId=id+"-err";
  var desc=[p.help&&helpId,err&&errId].filter(Boolean).join(" ")||undefined;
  var common={id:id,name:p.name,className:"cp-field__control",placeholder:p.placeholder,required:p.required,disabled:p.disabled,
    value:p.value,defaultValue:p.defaultValue,onChange:p.onChange,"aria-invalid":err?"true":undefined,"aria-describedby":desc};
  var control;
  if(type==="textarea") control=h("textarea",common);
  else if(type==="select") control=h("div",{className:"cp-field__select"},
      h("select",common,(p.options||[]).map(function(o,i){var v=typeof o==="string"?o:o.value;return h("option",{key:i,value:v},typeof o==="string"?o:o.label);})),
      h(Icon,{name:"chevron-down",size:20}));
  else control=h("input",Object.assign({type:type},common));
  return h("div",{className:cx("cp-field",err&&"cp-field--error",p.className)},
    h("label",{className:"cp-field__label",htmlFor:id},p.label,p.required&&h("span",{className:"cp-field__req"},"obligatoire")),
    control,
    p.help&&!err&&h("p",{className:"cp-field__help",id:helpId},p.help),
    err&&h("p",{className:"cp-field__error",id:errId},h(Icon,{name:"alert",size:18}),err));
}

function Notice(p){
  var tone=p.tone||"success";
  return h("div",{className:cx("cp-notice","cp-notice--"+tone,p.className),role:tone==="error"?"alert":"status"},
    h(Icon,{name:tone==="error"?"alert":"check",size:22}),
    h("div",{className:"cp-notice__body"},p.title&&h("p",{className:"cp-notice__title"},p.title),p.children&&h("p",{className:"cp-notice__text"},p.children)));
}

function Faq(p){
  return h("div",{className:cx("cp-faq",p.className)},(p.items||[]).map(function(it,i){
    return h("details",{key:i,className:"cp-faq__item",open:it.open},
      h("summary",{className:"cp-faq__q"},h("span",null,it.q),h(Icon,{name:"chevron-down",size:22})),
      h("p",{className:"cp-faq__a"},it.a));
  }));
}

function PriceTable(p){
  var plans=p.plans||[];
  return h("table",{className:cx("cp-price",p.className)},
    p.caption&&h("caption",{style:{position:"absolute",left:"-9999px"}},p.caption),
    h("thead",null,h("tr",null,h("td",null),plans.map(function(pl,i){return h("th",{key:i,scope:"col",className:pl.highlight?"cp-price__hl":undefined},pl.name);}))),
    h("tbody",null,
      h("tr",null,h("th",{scope:"row"},p.priceLabel||"Prix"),plans.map(function(pl,i){return h("td",{key:i},h("span",{className:"cp-price__amount"},pl.price),pl.note&&h("span",{className:"cp-price__note"},pl.note));})),
      (p.rows||[]).map(function(r,j){return h("tr",{key:j},h("th",{scope:"row"},r.label),r.values.map(function(v,i){
        return h("td",{key:i},v===true?[h(Icon,{key:"c",name:"check",size:20}),"Oui"]:v);}));})));
}

var DEFAULT_LINKS=[{label:"Accueil",href:"/"},{label:"Gig",href:"/gig/"},{label:"Last Round",href:"/last-round/"},{label:"Contact",href:"/contact/"}];
function SiteHeader(p){
  var st=useState(!!p.defaultOpen), open=st[0], setOpen=st[1];
  var links=p.links||DEFAULT_LINKS;
  function cur(l){return l.href===p.current||l.label===p.current?"page":undefined;}
  return h("header",{className:cx("cp-root cp-header",p.compact&&"cp-header--compact",open&&"cp-header--open",p.className)},
    h("div",{className:"cp-header__bar"},
      h("a",{className:"cp-header__home",href:p.homeHref||"/","aria-label":"Classic Punk, accueil"},h(Logo,{height:36})),
      h("nav",{className:"cp-header__nav","aria-label":"Navigation principale"},
        h("ul",{className:"cp-header__links"},links.map(function(l,i){return h("li",{key:i},h("a",{href:l.href,"aria-current":cur(l)},l.label));}))),
      h("button",{className:"cp-header__toggle","aria-expanded":open?"true":"false","aria-controls":"cp-menu",onClick:function(){setOpen(!open);}},
        h(Icon,{name:open?"close":"menu",size:22,title:open?"Fermer le menu":"Ouvrir le menu"}))),
    h("div",{className:"cp-header__panel",id:"cp-menu"},
      h("ul",null,links.map(function(l,i){return h("li",{key:i},h("a",{className:"cp-header__plink",href:l.href,"aria-current":cur(l)},h("span",null,l.label),h(Icon,{name:"arrow-right",size:28})));})),
      p.cta&&h(Button,{href:p.cta.href,variant:"primary",size:"lg",iconAfter:"arrow-right"},p.cta.label)));
}

var FOOT_LINKS=[{label:"Gig",href:"/gig/"},{label:"Last Round",href:"/last-round/"},{label:"Contact",href:"/contact/"},{label:"Mentions légales et confidentialité",href:"/legal/"}];
function SiteFooter(p){
  return h("footer",{className:cx("cp-root cp-footer cp-inverse",p.className)},
    h("div",{className:"cp-footer__inner"},
      h("div",null,
        h(Logo,{tone:"dark",height:44}),
        h("p",{className:"cp-footer__sig"},p.signature||"La rigueur du classique. L'énergie du punk."),
        h("p",{className:"cp-footer__text"},p.text||"Studio de développement indépendant. Fait main, sans investisseurs, sans abonnement.")),
      h("nav",{"aria-label":"Pied de page"},h("ul",{className:"cp-footer__links"},(p.links||FOOT_LINKS).map(function(l,i){return h("li",{key:i},h("a",{href:l.href},l.label,h(Icon,{name:"arrow-right",size:18})));}))),
      h("div",{className:"cp-footer__bottom"},h("span",null,p.copyright||"© 2026 Classic Punk"),h("span",null,p.catalog||"CP-000 · Développement indépendant"))));
}

var api={Icon:Icon,Logo:Logo,Button:Button,ButtonGroup:ButtonGroup,TextLink:TextLink,Badge:Badge,Credits:Credits,SectionHead:SectionHead,
  Aplat:Aplat,Highlight:Highlight,Marker:Marker,Strike:Strike,AppCard:AppCard,TrackList:TrackList,Manifesto:Manifesto,Stats:Stats,
  SloganBanner:SloganBanner,Field:Field,Notice:Notice,Faq:Faq,PriceTable:PriceTable,SiteHeader:SiteHeader,SiteFooter:SiteFooter};
window.ClassicPunk=Object.assign(window.ClassicPunk||{},api);
})();

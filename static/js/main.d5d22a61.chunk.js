(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/demo.e9ce333e.mov"},function(e,a,t){e.exports=t.p+"static/media/maplechat_preview.365d43b2.jpg"},function(e,a,t){e.exports=t.p+"static/media/taskflow_preview.211c7875.jpg"},function(e,a,t){e.exports=t.p+"static/media/taskflow_thumb.3308c087.jpg"},function(e,a,t){e.exports=t.p+"static/media/marionette_preview.a04f05b1.gif"},function(e,a,t){e.exports=t.p+"static/media/marionette.04774e0f.jpg"},function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(6),i=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(1),c=t(2),s=t(4),m=t(3),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={blackNav:null,showMenu:!1},e.toggleMenu=function(){e.setState({showMenu:!e.state.showMenu})},e.navBackdrop=function(){var a=window.innerHeight-35;document.documentElement.scrollTop>a?e.setState({blackNav:"opaque-black animated slideInDown fast"}):e.setState({blackNav:null})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.navBackdrop)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.navBackdrop)}},{key:"render",value:function(){var e="nav-right";return e+=this.state.showMenu?" nav-vertical":"",l.a.createElement("nav",{className:this.state.blackNav},l.a.createElement("div",{className:"nav-left"},l.a.createElement("h4",{id:"logo"},"chihjung")),l.a.createElement("div",{id:"nav-list",className:e},l.a.createElement("div",{className:"nav-hide",onClick:this.toggleMenu},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("div",{className:"nav-link"},l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("div",{className:"nav-link"},l.a.createElement("a",{href:"#portfolio"},"Portfolio")),l.a.createElement("div",{className:"nav-link"},l.a.createElement("a",{href:"mailto:liaocrong@outlook.com"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("div",{className:"nav-link"},l.a.createElement("a",{href:"https://github.com/smileycat",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("div",{className:"nav-link"},l.a.createElement("a",{href:"https://www.linkedin.com/in/chih-jung-liao/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin"})))))}}]),t}(l.a.Component);var d=function(e){return l.a.createElement("div",{className:"d-flex-v items-center"},l.a.createElement("i",{className:e.icon}),l.a.createElement("div",{className:"hidden-cap"},e.caption))};var u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about",className:"container-md"},l.a.createElement("div",{className:"ml-3 flex-100"},l.a.createElement("h1",{className:"title mb-6"},"David Liao")),l.a.createElement("div",{className:"mr-3 ml-3 flex-1"},l.a.createElement("div",{className:"description"},l.a.createElement("i",{className:"mr-2 fas fa-map-marker-alt"}),l.a.createElement("span",null,"Sydney, NSW 2007"),l.a.createElement("p",{className:"text-justify"},"I'm a recent graduate from Computer Science who loves doing software development and enjoyed doing web projects. I have solid fundamentals in data structure, object-oriented programming, HTTP protocols, and personally having Java, JavaScript being my strong programming language to work with."),l.a.createElement("p",null,"Currently having training in FDM Group that further specialises my skills in Java and Spring Framework."))),l.a.createElement("div",{id:"skills",className:"mr-3 ml-3 skill-icon"},l.a.createElement(d,{icon:"fab fa-java",caption:"Java"}),l.a.createElement(d,{icon:"fab fa-python",caption:"Python"}),l.a.createElement(d,{icon:"fab fa-sass",caption:"Sass"}),l.a.createElement(d,{icon:"fab fa-js-square",caption:"JavaScript"}),l.a.createElement(d,{icon:"fab fa-react",caption:"ReactJS"}),l.a.createElement(d,{icon:"fab fa-node",caption:"Node.JS"}),l.a.createElement(d,{icon:"fab fa-git-alt",caption:"git"}),l.a.createElement(d,{icon:"fab fa-gulp",caption:"gulp"}))))};var v=function(){return l.a.createElement("section",{id:"cover",className:"animated zoomIn"},l.a.createElement("div",null,l.a.createElement("span",{className:"title"},"Welcome,"),l.a.createElement("div",{className:"motto"},"I am a Software Developer")))},h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).handleKeyDown=function(e){n.state.show&&"Escape"===e.key&&(e.preventDefault(),n.setState({show:!1}))},n.toggleModal=function(){n.setState({show:!n.state.show})},n.state={show:!1},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){document.body.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e,a=this,t=this.state.show?"modal d-flex-v animated zoomIn":"modal d-none";return e=this.props.isVideo?l.a.createElement("video",{className:"modal-content",src:this.props.preview,autoPlay:!0,loop:!0,controls:!0}):l.a.createElement("img",{className:"modal-content",src:this.props.preview,alt:""}),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"project animated fadeInRight"},l.a.createElement("div",{className:"text-container flex-1 d-flex-v"},l.a.createElement("div",{className:"content-upper"},l.a.createElement("a",{href:this.props.link,target:"_blank",className:"d-flex items-center",rel:"noopener noreferrer"},l.a.createElement("h4",{className:"bold"},this.props.title),l.a.createElement("i",{className:"ml-3 fas fa-share"})),l.a.createElement("div",{className:"text-justify description mt-4"},this.props.description)),l.a.createElement("div",{className:"content-bottom"},l.a.createElement("div",{className:"divider mt-4 mb-4"}),l.a.createElement("div",{className:"tags"},l.a.createElement("div",null,this.props.tags)))),l.a.createElement("div",{className:"flex-1 img-container"},l.a.createElement("img",{src:this.props.thumbnail,onClick:function(){return a.toggleModal()},alt:""}))),l.a.createElement("div",{className:t},l.a.createElement("button",{className:"btn-close",onClick:this.toggleModal},"\xd7"),e))}}]),t}(l.a.Component),f=t(7),E=t.n(f),g=t(8),w=t.n(g),b=t(9),k=t.n(b),N=t(10),y=t.n(N),j=t(11),S=t.n(j),M=t(12),x=t.n(M);var D=function(){return l.a.createElement("section",{id:"portfolio"},l.a.createElement(h,{title:"MapleChat",description:"A chat app featuring character gameplay using cartoony sprites from the game MapleStory. Django was what I learned from a uni project.",link:"https://github.com/smileycat/MapleChat",isVideo:!0,preview:E.a,tags:"# Django, Django Channel, Websockets",thumbnail:w.a}),l.a.createElement(h,{title:"Marionette Replacement",description:"Replace the monkey puppet in the blue screen video with another character, while retaining the same motion.",link:"https://github.com/smileycat/Marionette-Replacement",isVideo:!1,preview:S.a,tags:"# Python, Opencv",thumbnail:x.a}),l.a.createElement(h,{title:"Taskflow",description:"Task managing app. List down your scheduled tasks to keep them organised.",link:"https://smileycat.github.io/Taskflow",isVideo:!1,preview:k.a,tags:"# HTML, SCSS, JavaScript",thumbnail:y.a}))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(v,null),l.a.createElement(u,null),l.a.createElement(D,null))};t(18),t(19);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d5d22a61.chunk.js.map
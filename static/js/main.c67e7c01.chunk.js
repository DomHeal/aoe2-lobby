(this.webpackJsonpaoe2=this.webpackJsonpaoe2||[]).push([[0],{14:function(e,a,t){},37:function(e,a,t){e.exports=t(57)},42:function(e,a,t){},48:function(e,a,t){e.exports=t.p+"static/media/img1.7a3826f9.jpeg"},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),l=t.n(o),c=(t(42),t(14),t(60)),s=t(61),i=t(62),m=t(63),u=t(64),p=t(65),b=t(12),d=t(10),f=t(13),E=t(59),g=t(58);function h(e){var a=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{type:"grow",color:"light"}),r.a.createElement("p",{className:"text-white"},a))}var v=function(e){var a="steam://joinlobby/813780/"+e;console.log("Attempting to join lobby - "+a);var t=document.createElement("iframe");t.style.display="none",t.src=a,t.onload=function(){t.parentNode.removeChild(t)},document.body.appendChild(t)},y=function(e){switch(e){case 0:return"Tiny";case 1:return"Small";case 2:return"Medium";case 3:return"Normal";case 4:return"Large";case 5:return"Giant";case 6:return"Luda";default:return e}},w=function(e){switch(e){case 0:return"Random Map";case 1:return"Regicide";case 2:return"Deathmatch";case 3:return"Scenario";case 13:return"Empire Wars";default:return e}},j=t(16),_=t.n(j),O=[{name:"Join",selector:"join",button:!0,cell:function(e){return r.a.createElement(E.a,{onClick:function(){return v(e.join)}},"Join")}},{name:"Type",selector:"type",sortable:!0},{name:"Name",selector:"name",sortable:!0},{name:"Players",selector:"players",sortable:!0},{name:"Map",selector:"map",sortable:!0},{name:"Server",selector:"server",sortable:!0},{name:"Average Rating",selector:"rating",sortable:!0}];function k(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!0),c=Object(f.a)(l,2),s=c[0],i=c[1];Object(n.useEffect)((function(){m();var e=setInterval((function(){m()}),5e3);return function(){return clearInterval(e)}}),[]);var m=function(){console.log("searching for lobbies"),fetch("https://aoe2.net/api/lobbies?game=aoe2de").then((function(e){return e.json()})).then((function(e){o(e),i(!1)}),(function(e){console.error(e)}))};if(s)return r.a.createElement(h,{text:"Loading lobbies..."});var u=t.reduce((function(e,a){return a.num_players===a.num_slots||"westeurope"!==a.server&&"ukwest"!==a.server||a.has_password||e.push({join:a.lobby_id,id:a.match_uuid,name:a.name,server:a.server,players:a.num_players+"/"+a.num_slots,rating:a.average_rating,map:w(a.game_type),type:y(a.map_type)}),e}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{columns:O,data:u,theme:"dark",pointerOnHover:!0,defaultSortField:"name",selectableRowsComponentProps:{inkDisabled:!0},expandableRows:!0,expandOnRowClicked:!0,expandableRowsComponent:r.a.createElement(_.a,null)}))}function x(){return r.a.createElement("img",{alt:"",src:t(48)})}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"text-white"},"Github URL: www.github.com/domheal/aoe2-lobby "))}var R=t(35),S=t(66),C=["xeon","methaddict","welshwonder","fatkidslag_irl"],F=[{name:"Join",selector:"join",button:!0,cell:function(e){return r.a.createElement(E.a,{onClick:function(){return v(e.join)}},"Join")}},{name:"Type",selector:"type",sortable:!0},{name:"Name",selector:"name",sortable:!0},{name:"Players",selector:"players",sortable:!0},{name:"Map",selector:"map",sortable:!0},{name:"Server",selector:"server",sortable:!0},{name:"Average Rating",selector:"rating",sortable:!0}];function A(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!0),c=Object(f.a)(l,2),s=c[0],i=c[1],m=Object(n.useState)(""),u=Object(f.a)(m,2),p=u[0],b=u[1];Object(n.useEffect)((function(){d()}));var d=function(){console.log("searching for lobbies"),fetch("https://aoe2.net/api/lobbies?game=aoe2de").then((function(e){return e.json()})).then((function(e){console.log(e);var a,t=[],n=Object(R.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;r.players.filter((function(e){return C.includes(e.name.toLowerCase())})).length>0&&(console.log("friend found"),t.push(r))}}catch(c){n.e(c)}finally{n.f()}var l=t.map((function(e){return{join:e.lobby_id,id:e.match_uuid,name:e.name,server:e.server,players:e.num_players+"/"+e.num_slots,rating:e.average_rating,map:w(e.game_type),type:y(e.map_type)}}));o(l),i(!1),b("")}),(function(e){b(e)}))};return s?r.a.createElement(h,{text:"Finding friends..."}):r.a.createElement(r.a.Fragment,null,""===p&&r.a.createElement(S.a,{color:"danger"},"Failed to get aoe2.net data - ",p),r.a.createElement(_.a,{columns:F,data:t,theme:"dark",pointerOnHover:!0,defaultSortField:"name",selectableRowsComponentProps:{inkDisabled:!0},expandableRows:!0,expandOnRowClicked:!0}))}function J(){return r.a.createElement("div",null,r.a.createElement(c.a,{style:{backgroundColor:"#424242"},expand:"md"},r.a.createElement(s.a,{href:"/"},"AoE2:DE"),r.a.createElement(i.a,null),r.a.createElement(m.a,{navbar:!0},r.a.createElement(u.a,{className:"mr-auto",navbar:!0},r.a.createElement(p.a,{className:"pr-2"},r.a.createElement(b.b,{to:"/"},"Home")),r.a.createElement(p.a,{className:"pr-2"},r.a.createElement(b.b,{to:"/friends"},"Friends")),r.a.createElement(p.a,{className:"pr-2"},r.a.createElement(b.b,{to:"/lobbies"},"Lobbies")),r.a.createElement(p.a,{className:"pr-2"},r.a.createElement(b.b,{to:"/about"},"About"))))),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/friends"},r.a.createElement(A,null)),r.a.createElement(d.a,{path:"/lobbies"},r.a.createElement(k,null)),r.a.createElement(d.a,{path:"/about"},r.a.createElement(N,null)),r.a.createElement(d.a,{path:"/"},r.a.createElement(x,null))))}var L=function(){return r.a.createElement(b.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.c67e7c01.chunk.js.map
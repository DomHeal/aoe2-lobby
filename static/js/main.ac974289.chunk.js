(this.webpackJsonpaoe2=this.webpackJsonpaoe2||[]).push([[0],{11:function(e,t,a){},30:function(e,t,a){e.exports=a(48)},35:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(35),a(11),a(52)),u=a(53),m=a(54),s=a(57),i=a(55),E=a(56),d=a(10),h=a(9),p=a(27),f=a(12),b=a(49),g=a(50),y=a(51),v=["Xeon","methaddict","Welshwonder"];function w(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),o=Object(f.a)(c,2),u=o[0],m=o[1];Object(n.useEffect)((function(){var e=setInterval((function(){console.log("searching for lobbies"),fetch("https://aoe2.net/api/lobbies?game=aoe2de",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t,n=[],r=Object(p.a)(a);try{for(r.s();!(t=r.n()).done;){var c=t.value.players.filter((function(e){return v.includes(e.name)}));c>0&&(console.log("friend found"),n.push(c))}}catch(o){r.e(o)}finally{r.f()}l(n),m(!1)}),(function(e){console.error(e)}))}),5e3);return function(){return clearInterval(e)}}));return u?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{type:"grow",color:"light"}),r.a.createElement("p",null,"Finding friends...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Friend"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Players"),r.a.createElement("th",null,"Map"),r.a.createElement("th",null,"Server"),r.a.createElement("th",null,"Average Rating"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.match_uuid},r.a.createElement("th",{scope:"row"},r.a.createElement(y.a,{onClick:function(){return function(e){var t="steam://joinlobby/813780/"+e;console.log("Attempting to join lobby - "+t);var a=document.createElement("iframe");a.style.display="none",a.src=t,a.onload=function(){a.parentNode.removeChild(a)},document.body.appendChild(a)}(e.lobby_id)}},"Join")),r.a.createElement("td",null,e.players.map((function(e){return r.a.createElement("p",null,e.name)}))),r.a.createElement("td",null,function(e){switch(e){case 0:return"Random Map";case 1:return"Regicide";case 2:return"Deathmatch";case 3:return"Scenario";case 13:return"Empire Wars";default:return e}}(e.game_type)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.num_players+"/"+e.num_slots),r.a.createElement("td",null,e.map_type," - (",function(e){switch(e){case 0:return"Tiny";case 1:return"Small";case 2:return"Medium";case 3:return"Normal";case 4:return"Large";case 5:return"Giant";case 6:return"Luda";default:return e}}(e.map_size),")"),r.a.createElement("td",null,e.server),r.a.createElement("td",null,e.average_rating))})))))}function _(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),o=Object(f.a)(c,2),u=o[0],m=o[1];Object(n.useEffect)((function(){var e=setInterval((function(){console.log("searching for lobbies"),fetch("https://aoe2.net/api/lobbies?game=aoe2de",{credentials:"include",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){l(e),m(!1)}),(function(e){console.error(e)}))}),5e3);return function(){return clearInterval(e)}}),[]);return u?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{type:"grow",color:"light"}),r.a.createElement("p",null,"Loading lobbies...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Players"),r.a.createElement("th",null,"Map"),r.a.createElement("th",null,"Server"),r.a.createElement("th",null,"Average Rating"))),r.a.createElement("tbody",null,a.map((function(e){return console.log(e),e.num_players===e.num_slots||"westeurope"!==e.server&&"ukwest"!==e.server||e.has_password?null:r.a.createElement("tr",{key:e.match_uuid},r.a.createElement("th",{scope:"row"},r.a.createElement(y.a,{onClick:function(){return function(e){var t="steam://joinlobby/813780/"+e;console.log("Attempting to join lobby - "+t);var a=document.createElement("iframe");a.style.display="none",a.src=t,a.onload=function(){a.parentNode.removeChild(a)},document.body.appendChild(a)}(e.lobby_id)}},"Join")),r.a.createElement("td",null,function(e){switch(e){case 0:return"Random Map";case 1:return"Regicide";case 2:return"Deathmatch";case 3:return"Scenario";case 13:return"Empire Wars";default:return e}}(e.game_type)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.num_players+"/"+e.num_slots),r.a.createElement("td",null,e.map_type," - (",function(e){switch(e){case 0:return"Tiny";case 1:return"Small";case 2:return"Medium";case 3:return"Normal";case 4:return"Large";case 5:return"Giant";case 6:return"Luda";default:return e}}(e.map_size),")"),r.a.createElement("td",null,e.server),r.a.createElement("td",null,e.average_rating))})))))}function j(){return r.a.createElement(r.a.Fragment,null)}function O(){return r.a.createElement(r.a.Fragment,null,"Github URL: www.github.com/domheal/aoe2-lobby")}function N(){return r.a.createElement("div",null,r.a.createElement(o.a,{color:"light",light:!0,expand:"md"},r.a.createElement(u.a,{href:"/"},"AoE2:DE"),r.a.createElement(m.a,null),r.a.createElement(s.a,{navbar:!0},r.a.createElement(i.a,{className:"mr-auto",navbar:!0},r.a.createElement(E.a,{className:"pr-2"},r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement(E.a,{className:"pr-2"},r.a.createElement(d.b,{to:"/friends"},"Friends")),r.a.createElement(E.a,{className:"pr-2"},r.a.createElement(d.b,{to:"/lobbies"},"Lobbies")),r.a.createElement(E.a,{className:"pr-2"},r.a.createElement(d.b,{to:"/about"},"About"))))),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/friends"},r.a.createElement(w,null)),r.a.createElement(h.a,{path:"/lobbies"},r.a.createElement(_,null)),r.a.createElement(h.a,{path:"/"},r.a.createElement(j,null)),r.a.createElement(h.a,{path:"/about"},r.a.createElement(O,null))))}var A=function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.ac974289.chunk.js.map
(this["webpackJsonpgame-board"]=this["webpackJsonpgame-board"]||[]).push([[0],[,,,function(e,a,t){e.exports=t(10)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(2),c=t.n(o),s=(t(8),t(9),function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,e.title),r.a.createElement("span",{className:"stats"},"Players: ",e.totalPlayers," "))}),l=function(e){return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement"},"-"),r.a.createElement("span",{className:"counter-score"},e.score),r.a.createElement("button",{className:"counter-action increment"},"+"))},i=function(e){return r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},e.playerName),r.a.createElement(l,{score:e.score}))};var m=function(e){var a=e.initialPlayers;return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(s,{title:"scoreboard",totalPlayers:a.length}),a.map((function(e){return r.a.createElement(i,{playerName:e.name,score:e.score,key:e.id.toString()})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,{initialPlayers:[{name:"Luz",score:45,id:1},{name:"George",score:65,id:2},{name:"Louis",score:75,id:3},{name:"Smith",score:95,id:4}]})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.32ec04e1.chunk.js.map
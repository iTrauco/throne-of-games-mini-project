(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),s=(a(30),a(31),a(2)),o=a(14);function i(){return r.a.createElement("div",{className:"game-selector-div"},r.a.createElement("p",null,r.a.createElement(s.b,{to:"/tic-tac-tyrion",className:"game-links"},"Tic-Tac-Tyrion")),r.a.createElement("p",null,r.a.createElement(s.b,{to:"/cersei-says",className:"game-links"},"Cersei Says")),r.a.createElement("p",null,r.a.createElement(s.b,{to:"/connect-four-houses",className:"game-links"},"Connect Four Houses")))}var u=a(7),m=a(8),d=a(9),p=a(11),E=a(10),y=a(12);function f(e){var t=e.board,a=e.clickHandler,n=(e.checkWinner,e.playerOneName),l=e.playerTwoName,c="./imgs/".concat(C(n),".png"),s="./imgs/".concat(C(l),".png"),o="./imgs/blank.png";return r.a.createElement("div",{className:"ticTacToeBoard"},r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.A1&&a("A1")}},r.a.createElement("img",{className:"O"===t.A1?"flipped":"",src:t.A1?"X"===t.A1?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.B1&&a("B1")}},r.a.createElement("img",{className:"O"===t.B1?"flipped":"",src:t.B1?"X"===t.B1?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.C1&&a("C1")}},r.a.createElement("img",{className:"O"===t.C1?"flipped":"",src:t.C1?"X"===t.C1?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.A2&&a("A2")}},r.a.createElement("img",{className:"O"===t.A2?"flipped":"",src:t.A2?"X"===t.A2?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.B2&&a("B2")}},r.a.createElement("img",{className:"O"===t.B2?"flipped":"",src:t.B2?"X"===t.B2?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.C2&&a("C2")}},r.a.createElement("img",{className:"O"===t.C2?"flipped":"",src:t.C2?"X"===t.C2?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.A3&&a("A3")}},r.a.createElement("img",{className:"O"===t.A3?"flipped":"",src:t.A3?"X"===t.A3?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.B3&&a("B3")}},r.a.createElement("img",{className:"O"===t.B3?"flipped":"",src:t.B3?"X"===t.B3?c:s:o,alt:"sprite"})),r.a.createElement("div",{className:"ticTacToeSquare",onClick:function(){null===t.C3&&a("C3")}},r.a.createElement("img",{className:"O"===t.C3?"flipped":"",src:t.C3?"X"===t.C3?c:s:o,alt:"sprite"})))}function C(e){var t={" ":"-"};return e.replace(/[ ]/g,function(e){return t[e]})}function h(e){var t=e.winner,a=e.clickHandler;return r.a.createElement("div",null,r.a.createElement("h1",{className:t?"result":null},t," ",null===t||"Draw"===t?"":"Wins"),r.a.createElement("button",{className:t?"pulse":null,onClick:a},"New Game"))}var b=[["Ned Stark",1],["Jon Snow",2],["Robert Baratheon",3],["Robb Stark",4],["Arya Stark",5],["Yara Greyjoy",6],["Theon Greyjoy",7],["Daenerys Targaryen",8],["Bran Stark",9],["Hodor",10],["Khal Drogo",11],["Samwell Tarly",12],["Melisandre",13],["Stannis Baratheon",14],["Varys",15],["Brienne of Tarth",16],["Jorah Mormont",17],["Jaime Lannister",18],["Tywin Lannister",19],["Jaqen Hghar",20],["Ghost",21],["Tyrion Lannister",22],["Cersei Lannister",23],["Oberyn Martell",24],["Ygritte",25],["White Walker",26],["Gendry",27],["Grey Worm",28],["The Hound",29],["The Mountain",30],["Joffrey Baratheon",31],["Ramsey Bolton",32],["Petyr Baelish",33]];function N(e){var t=e.characters,a=e.playerOne,n=e.playerTwo,l=e.setPlayer,c=e.turn,s=t.filter(function(e){return e[0]!==n});return s.sort(),r.a.createElement("div",{className:"player-div"},r.a.createElement("h3",{className:c?"playerTurn":null},a),r.a.createElement("select",{className:"custom-select",onChange:function(e){l(e.target.value)},defaultValue:a},r.a.createElement("option",{key:-1,disabled:!0,value:"Player One"},"Select Character"),s.map(function(e){return r.a.createElement("option",{key:e[1],value:e[0]},e[0])})))}function v(e){var t=e.characters,a=e.playerOne,n=e.playerTwo,l=e.setPlayer,c=e.turn,s=t.filter(function(e){return e[0]!==a});return s.sort(),r.a.createElement("div",{className:"player-div"},r.a.createElement("h3",{className:c?null:"playerTurn"},n),r.a.createElement("select",{className:"custom-select",onChange:function(e){l(e.target.value)},defaultValue:n},r.a.createElement("option",{key:-1,disabled:!0,value:"Player Two"},"Select Character"),s.map(function(e){return r.a.createElement("option",{key:e[1],value:e[0]},e[0])})))}var O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e)))._setPlayerOneName=function(e){a.setState({playerOneName:e})},a._setPlayerTwoName=function(e){a.setState({playerTwoName:e})},a._setCell=function(e){if(!a.state.winner){var t=Object(u.a)({},a.state.board);a.state.isPlayerOneTurn?t[e]="X":t[e]="O",console.log("the current board",a.state.board);var n=[t.A1,t.B1,t.C1],r=[t.A2,t.B2,t.C2],l=[t.A3,t.B3,t.C3],c=[t.A1,t.A2,t.A3],s=[t.B1,t.B2,t.B3],o=[t.C1,t.C2,t.C3],i=[t.A1,t.B2,t.C3],m=[t.A3,t.B2,t.C1],d=a.state.winner;(g(n)||g(r)||g(l)||g(c)||g(s)||g(o)||g(i)||g(m))&&(d=a.state.isPlayerOneTurn?a.state.playerOneName:a.state.playerTwoName),8===a.state.turnCounter&&null===d&&(d="Draw"),a.setState({board:t,turnCounter:a.state.turnCounter+1,isPlayerOneTurn:!a.state.isPlayerOneTurn,winner:d})}},a._newGame=function(){a.setState({isPlayerOneTurn:!0,board:{A1:null,A2:null,A3:null,B1:null,B2:null,B3:null,C1:null,C2:null,C3:null},turnCounter:0,winner:null})},a.state={playerOneName:"Player One",playerTwoName:"Player Two",isPlayerOneTurn:!0,board:{A1:null,A2:null,A3:null,B1:null,B2:null,B3:null,C1:null,C2:null,C3:null},turnCounter:0,winner:null},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tic-tac-tyrion-main"},r.a.createElement("link",{rel:"StyleSheet",type:"text/css",href:"../styles/tic-tac-tyrion.css"}),r.a.createElement("h1",null,"Tic-Tac-Tyrion"),r.a.createElement("div",{className:"tic-tac-tyrion-container"},r.a.createElement(N,{characters:b,playerOne:this.state.playerOneName,playerTwo:this.state.playerTwoName,turn:this.state.isPlayerOneTurn,setPlayer:this._setPlayerOneName}),r.a.createElement(f,{board:this.state.board,clickHandler:this._setCell,playerOneName:this.state.playerOneName,playerTwoName:this.state.playerTwoName}),r.a.createElement(v,{characters:b,playerOne:this.state.playerOneName,playerTwo:this.state.playerTwoName,turn:this.state.isPlayerOneTurn,setPlayer:this._setPlayerTwoName})),r.a.createElement(h,{winner:this.state.winner,clickHandler:this._newGame}))}}]),t}(n.Component);function g(e){return console.log(e[0],e[1],e[2]),e[0]===e[1]&&e[1]===e[2]&&null!==e[0]?(console.log("they are the same"),!0):(console.log("they are not the same"),!1)}var T=a(5),A=a(13),w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={style:{left:-500}},a.dropAreaRef=r.a.createRef(),a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dropArea","data-droparea":!0,ref:this.dropAreaRef,onMouseMove:function(t){if(t.clientX-(e.dropAreaRef.current.offsetLeft+e.dropAreaRef.current.offsetWidth)<=0){var a=Math.min(t.clientX-e.dropAreaRef.current.offsetLeft,e.dropAreaRef.current.offsetWidth-e.dropAreaRef.current.offsetHeight);e.setState({style:{left:a}})}},onClick:function(t){var a=parseInt((t.clientX-e.dropAreaRef.current.offsetLeft)/(e.dropAreaRef.current.offsetWidth/7))+1;-1!==[1,2,3,4,5,6,7].indexOf(a)&&e.props.getDropColumnFun(a)}},r.a.createElement("div",null,r.a.createElement("p",null,"CLICK HERE TO DROP"),r.a.createElement("img",{className:"coinToDrop",style:this.state.style,src:this.props.player?"./imgs/fire-ball.png":"./imgs/ice-ball.png",alt:this.props.player?"fire token":"ice token"})))}}]),t}(n.Component);function B(e){var t=e.board,a=e.getDropColumnFun,n=e.playerOne;return r.a.createElement("div",{className:"masterGrid"},r.a.createElement(w,{getDropColumnFun:a,player:n}),r.a.createElement("div",{className:"boardcontainer"},r.a.createElement("div",{className:"connect4housesBoard"},["A5","B5","C5","D5","E5","F5","G5","A4","B4","C4","D4","E4","F4","G4","A3","B3","C3","D3","E3","F3","G3","A2","B2","C2","D2","E2","F2","G2","A1","B1","C1","D1","E1","F1","G1","A0","B0","C0","D0","E0","F0","G0"].map(function(e,a){return r.a.createElement("div",{className:"connect4housesSquare",key:a},t[e]?r.a.createElement("img",{key:a,src:"X"===t[e]?"".concat("./imgs/fire-circle.gif","?").concat(e):"".concat("./imgs/ice.gif","?").concat(e),alt:"fireOrIceGif"}):r.a.createElement("div",{className:"empty-box-container"}))})),r.a.createElement("div",{className:"overlaydiv"},r.a.createElement("img",{src:"../imgs/darkwall.png",alt:"rock wall overlay for connect 4"}))))}function k(e){var t=e.winner,a=e.clickHandler;return r.a.createElement("div",null,r.a.createElement("h1",{className:t?"result":null},t," ",null===t||"Draw"===t?"":"Wins"),r.a.createElement("button",{className:t?"pulse":null,onClick:a},"New Game"))}var S={A0:null,B0:null,C0:null,D0:null,A1:null,B1:null,C1:null,D1:null,A2:null,B2:null,C2:null,D2:null,A3:null,B3:null,C3:null,D3:null,A4:null,B4:null,C4:null,D4:null,A5:null,B5:null,C5:null,D5:null,E0:null,F0:null,G0:null,E1:null,F1:null,G1:null,E2:null,F2:null,G2:null,E3:null,F3:null,G3:null,E4:null,F4:null,G4:null,E5:null,F5:null,G5:null},D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e)))._setPlayerOneName=function(e){a.setState({playerOneName:e})},a._setPlayerTwoName=function(e){a.setState({playerTwoName:e})},a._newGame=function(){a.setState({isPlayerOneTurn:!0,board:S,turnCounter:0,winner:null,columnA:[],columnB:[],columnC:[],columnD:[],columnE:[],columnF:[],columnG:[]})},a._getDropColumn=function(e){console.log("The drop column returned to main state from DropArea component is ",e);var t=a._returnColumnArray(e);if(t.length<6&&null===a.state.winner){var n,r=F(e)+t.length,l="column"+F(e),c=a.state.isPlayerOneTurn?"X":"O",s=Object(u.a)({},a.state.board);s[r]=c;var o=[s.A0,s.B0,s.C0,s.D0,s.E0,s.F0,s.G0],i=[s.A1,s.B1,s.C1,s.D1,s.E1,s.F1,s.G1],m=[s.A2,s.B2,s.C2,s.D2,s.E2,s.F2,s.G2],d=[s.A3,s.B3,s.C3,s.D3,s.E3,s.F3,s.G3],p=[s.A4,s.B4,s.C4,s.D4,s.E4,s.F4,s.G4],E=[s.A5,s.B5,s.C5,s.D5,s.E5,s.F5,s.G5],y=[s.A0,s.A1,s.A2,s.A3,s.A4,s.A5],f=[s.B0,s.B1,s.B2,s.B3,s.B4,s.B5],C=[s.C0,s.C1,s.C2,s.C3,s.C4,s.C5],h=[s.D0,s.D1,s.D2,s.D3,s.D4,s.D5],b=[s.E0,s.E1,s.E2,s.E3,s.E4,s.E5],N=[s.F0,s.F1,s.F2,s.F3,s.F4,s.F5],v=[s.G0,s.G1,s.G2,s.G3,s.G4,s.G5],O=[s.A2,s.B3,s.C4,s.D5],g=[s.A1,s.B2,s.C3,s.D4,s.E5],w=[s.A0,s.B1,s.C2,s.D3,s.E4,s.F5],B=[s.B0,s.C1,s.D2,s.E3,s.F4,s.G5],k=[s.C0,s.D1,s.E2,s.F3,s.G4],S=[s.D0,s.E1,s.F2,s.G3],D=[s.A3,s.B2,s.C1,s.D0],j=[s.A4,s.B3,s.C2,s.D1,s.E0],P=[s.A5,s.B4,s.C3,s.D2,s.E1,s.F0],_=[s.B5,s.C4,s.D3,s.E2,s.F1,s.G0],H=[s.C5,s.D4,s.E3,s.F2,s.G1],R=[s.D5,s.E4,s.F3,s.G2],W=a.state.winner;(G(o)||G(i)||G(m)||G(d)||G(p)||G(E)||G(y)||G(f)||G(C)||G(h)||G(b)||G(N)||G(v)||G(O)||G(g)||G(w)||G(B)||G(k)||G(S)||G(D)||G(j)||G(P)||G(_)||G(H)||G(R))&&(W=a.state.isPlayerOneTurn?a.state.playerOneName:a.state.playerTwoName),41===a.state.turnCounter&&null===W&&(W="Draw"),a.setState((n={colToAdd:e,board:Object(u.a)({},a.state.board,Object(A.a)({},r,c))},Object(A.a)(n,l,[].concat(Object(T.a)(t),[c])),Object(A.a)(n,"turnCounter",a.state.turnCounter+1),Object(A.a)(n,"isPlayerOneTurn",!a.state.isPlayerOneTurn),Object(A.a)(n,"winner",W),n))}},a._returnColumnArray=function(e){return 1===e?Object(T.a)(a.state.columnA):2===e?Object(T.a)(a.state.columnB):3===e?Object(T.a)(a.state.columnC):4===e?Object(T.a)(a.state.columnD):5===e?Object(T.a)(a.state.columnE):6===e?Object(T.a)(a.state.columnF):Object(T.a)(a.state.columnG)},a.state={playerOneName:"Fire",playerTwoName:"Ice",isPlayerOneTurn:!0,board:S,columnA:[],columnB:[],columnC:[],columnD:[],columnE:[],columnF:[],columnG:[],turnCounter:0,winner:null,colToAdd:null},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"connect4Flex"},r.a.createElement("div",{className:"connect4HousesMain"},r.a.createElement("link",{rel:"StyleSheet",type:"text/css",href:"../styles/connect4Houses.css"}),r.a.createElement("h1",null,"Connect 4 Houses"),r.a.createElement("div",{className:"connect-4-houses-container"},r.a.createElement(B,{board:this.state.board,getDropColumnFun:this._getDropColumn,playerOne:this.state.isPlayerOneTurn}))),r.a.createElement("div",null,r.a.createElement(k,{winner:this.state.winner,clickHandler:this._newGame})))}}]),t}(n.Component);function G(e){for(var t=!1,a=0;a<e.length-3;a++)e[a]===e[a+1]&&e[a+1]===e[a+2]&&e[a+2]===e[a+3]&&null!==e[a]&&(t=!0);return t}function F(e){return{1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G"}[e]}function j(e){var t=e.board,a=e.clickHandler;return r.a.createElement("div",{className:"cersei-says-board"},r.a.createElement("div",{className:"cersei-says-body"},t.map(function(e,t){return r.a.createElement("img",{key:t,src:e.image,className:"cube ".concat(e.className),id:"cube".concat(e.cube),onClick:function(){a(e)},alt:"cube"})})))}function P(e){var t=e.winner,a=e.loser,n=e.clickHandler;return r.a.createElement("div",null,r.a.createElement("h1",{className:t||a?"result":null},t?t?"You Win!":"":a?"You Lose!":""),r.a.createElement("button",{className:t||a?"pulse":null,onClick:n},"New Game"))}function _(e){var t=e.round;return r.a.createElement("div",null,r.a.createElement("div",{className:t?"roundCounter":""},t?"Round: ".concat(t):""))}var H=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e)))._newRound=function(){var e=parseInt(4*Math.random()),t=a.state.randomSelection,n=a.state.board;a.setState({userInput:[],randomSelection:t.concat(Object(u.a)({},n[e])),isComputerTurn:!0},function(){a._checkComputerTurn()})},a._checkComputerTurn=function(){a.state.isComputerTurn&&a._playComputerSound(a.state.randomSelection,0)},a._playComputerSound=function(e,t){for(var n=null,r=0;r<a.state.board.length;r++)a.state.board[r].cube===e[t].cube&&(n=r);var l=a.state.board;l[n].className="button-selector",a.setState({board:l});var c="";switch(e[t].cube){case"1":c=new Audio("./audio/wind.mp3");break;case"2":c=new Audio("./audio/crowd.mp3");break;case"3":c=new Audio("./audio/sword.mp3");break;case"4":c=new Audio("./audio/dragon.mp3");break;default:return null}c.addEventListener("ended",function(){l[n].className="",a.setState({board:l}),t<e.length-1&&a._playComputerSound(e,t+1),t===e.length-1&&a.setState({isComputerTurn:!1})}),c.play()},a._checkState=function(e){var t=a.state,n=t.isLoser,r=t.isWinner,l=t.isComputerTurn;if(!n&&!r&&!l){e.audio.play();var c=[].concat(Object(T.a)(a.state.userInput),[Object(u.a)({},e)]),s=a.state.randomSelection,o=s.length-1;s[c.length-1].cube===c[c.length-1].cube?c.length-1===o?c.length-1===20?a.setState({isWinner:!0}):setTimeout(function(){a.setState({isComputerTurn:!0},a._newRound)},1500):a.setState({userInput:c}):a.setState({isLoser:!0})}},a._startNewGame=function(){var e=parseInt(4*Math.random());a.setState({userInput:[],randomSelection:[Object(u.a)({},a.state.board[e])],isComputerTurn:!0,isLoser:!1,isWinner:!1},function(){a._checkComputerTurn()})},a.state={board:[{cube:"1",image:"./imgs/top-left-stark.png",audio:new Audio("./audio/wind.mp3"),className:""},{cube:"2",image:"./imgs/top-right-lannister.png",audio:new Audio("./audio/crowd.mp3"),className:""},{cube:"3",image:"./imgs/bottom-left-baratheon.png",audio:new Audio("./audio/sword.mp3"),className:""},{cube:"4",image:"./imgs/bottom-right-targaryen.png",audio:new Audio("./audio/dragon.mp3"),className:""}],userInput:[],randomSelection:[],isComputerTurn:!0,intervalSet:!1,isWinner:!1,isLoser:!1},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cersei-says-container"},r.a.createElement("link",{rel:"StyleSheet",type:"text/css",href:"../styles/cersei-says.css"}),r.a.createElement("h1",null,"Cersei Says"),r.a.createElement(_,{round:this.state.randomSelection.length}),r.a.createElement(j,{board:this.state.board,clickHandler:this._checkState}),r.a.createElement(P,{winner:this.state.isWinner,loser:this.state.isLoser,clickHandler:this._startNewGame}))}}]),t}(n.Component);function R(){return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"menu"},"MENU"),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement(s.b,{to:"/tic-tac-tyrion",className:"game-links item"},"Tic-Tac-Tyrion"),r.a.createElement(s.b,{to:"/cersei-says",className:"game-links item"},"Cersei Says"),r.a.createElement(s.b,{to:"/connect-four-houses",className:"game-links item"},"Connect Four Houses")))}var W=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement(R,null),r.a.createElement(s.b,{to:"/"},r.a.createElement("h2",{className:"title7"},"Throne of Games!"))),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:i}),r.a.createElement(o.a,{className:"tic-tac-tyrion",path:"/tic-tac-tyrion",component:O}),r.a.createElement(o.a,{path:"/cersei-says",component:H}),r.a.createElement(o.a,{path:"/connect-four-houses",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.fe7a7125.chunk.js.map
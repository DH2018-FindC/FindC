(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n(238)},115:function(e,t,n){},117:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),l=n.n(r),c=(n(115),n(26)),i=n(27),u=n(29),s=n(28),d=n(30),m=(n(117),n(31)),f=n.n(m),p=n(398),E=n(400),h=n(399),b=n(38),g=n.n(b),v=n(82),w=n.n(v),y=n(84),k=n.n(y),D=n(41),O=n.n(D),j=n(71),C=n.n(j),x=n(85),A=n.n(x),M=n(86),S=n.n(M),I=n(81),B=n.n(I),F=n(39),J=n.n(F),P=n(40),U=n.n(P),W=n(391),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).toggleDrawer=function(e){n.setState({open:e})},n.state={open:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(w.a,{position:"static",style:{backgroundColor:"#421dac",position:"absolute",top:0,left:0}},o.a.createElement(k.a,null,o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(O.a,{variant:"h6",color:"inherit",style:{textAlign:"left"}},o.a.createElement(W.a,{to:"",style:{textDecoration:"none",color:"white"}},"FindC"))),o.a.createElement(C.a,{color:"inherit","aria-label":"Menu",onClick:function(){e.toggleDrawer(!0)}},o.a.createElement(A.a,null)))),o.a.createElement(S.a,{anchor:"right",open:this.state.open,onClose:function(){return e.toggleDrawer(!1)},onOpen:function(){return e.toggleDrawer(!0)}},o.a.createElement("div",{style:{width:250},tabIndex:0,role:"button",onClick:function(){return e.toggleDrawer(!1)},onKeyDown:function(){return e.toggleDrawer(!1)}},o.a.createElement("div",null,o.a.createElement(B.a,null,o.a.createElement(J.a,null,o.a.createElement(U.a,null,o.a.createElement(W.a,{to:"",style:{textDecoration:"none",color:"black"}},"Home"))),o.a.createElement(J.a,null,o.a.createElement(U.a,null,o.a.createElement(W.a,{to:"/map",style:{textDecoration:"none",color:"black"}},"Map"))),o.a.createElement(J.a,null,o.a.createElement(U.a,null,o.a.createElement(W.a,{to:"/about",style:{textDecoration:"none",color:"black"}},"About"))))))))}}]),t}(a.Component),K=(n(94),function(){return o.a.createElement("div",null)}),R=g()({loader:function(){return Promise.all([n.e(4),n.e(1)]).then(n.bind(null,397))},loading:K}),Z=g()({loader:function(){return n.e(2).then(n.bind(null,393))},loading:K}),q=g()({loader:function(){return n.e(3).then(n.bind(null,394))},loading:K}),H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={coords:{},data:{}},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){e.setState({coords:t.coords})}),this.dataRef=f.a.database().ref("Data").on("value",function(t){e.setState({data:t.val()})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{basename:"/FindC"},o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement(E.a,null,o.a.createElement(h.a,{exact:!0,path:"/about",render:function(){return o.a.createElement(q,null)}}),o.a.createElement(h.a,{exact:!0,path:"/map",render:function(){return o.a.createElement(R,{coords:e.state.coords,data:e.state.data})}}),o.a.createElement(h.a,{render:function(){return o.a.createElement(Z,null)}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.initializeApp({apiKey:"AIzaSyAZaMPQd-aOdFZjOCJpMS8U_bwqnMAC-gU",authDomain:"findc-4a7e5.firebaseapp.com",databaseURL:"https://findc-4a7e5.firebaseio.com",projectId:"findc-4a7e5",storageBucket:"findc-4a7e5.appspot.com",messagingSenderId:"814470540647"}),l.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,6,5]]]);
//# sourceMappingURL=main.a30f0e24.chunk.js.map
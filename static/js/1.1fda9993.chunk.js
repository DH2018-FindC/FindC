(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{320:function(e,t,a){},332:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(26),s=a(27),o=a(29),r=a(28),i=a(30),c=a(0),l=a.n(c),d=a(391),u=a(397),h=a(390),p=a(396),m=a(387),f=(a(320),a(322),a(248)),v=a.n(f),g=a(247),b=a.n(g),y=a(31),E=a.n(y),k=(a(94),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).addCount=function(e,t){E.a.database().ref("Data/".concat(a.state.pushKey,"/services/").concat(e)).set(a.state.point.services[e]+(t?1:-1))},a.state={point:a.props.point,pushKey:a.props.pushKey},a.kv={F_condoms:"Free condoms",F_bcpills:"Free Birth Control Pills",F_iud:"Free IUDs",D_condoms:"Discounted condoms",D_bcpills:"Discounted Birth Control Pills",D_iud:"Discounted IUDs",D_morningAfter:"Discounted Morning After Pills"},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.point,a=e.pushKey;this.setState({point:t,pushKey:a})}},{key:"render",value:function(){var e=this,t=this.state.point;return l.a.createElement("div",{style:{width:330,height:360,fontSize:14,overflowY:"auto"}},l.a.createElement("p",null,l.a.createElement("strong",null,t.name)),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.google.com/maps/?q=".concat(t.lat,",").concat(t.lng),target:"_blank"},"Open in Google Maps")),l.a.createElement("p",null,"What did you visit for? Give it a thumbs up!"),Object.keys(t.services).map(function(a,n){return l.a.createElement("div",{key:e.state.pushKey+""+n,style:{verticalAlign:"baseline",borderBottom:"1px solid black",width:"90%",padding:3}},e.kv[a],": ",t.services[a],l.a.createElement("span",{style:{margin:3}}),l.a.createElement(b.a,{style:{padding:0,minHeight:0,minWidth:40},onClick:function(){e.addCount(a,!0)}},l.a.createElement("span",{role:"img","aria-label":"thumbs up"},"\ud83d\udc4d")),l.a.createElement(b.a,{style:{padding:0,minHeight:0,minWidth:40},onClick:function(){e.addCount(a,!1)}},l.a.createElement("span",{role:"img","aria-label":"thumbs down"},"\ud83d\udc4e")))}),l.a.createElement("div",{style:{marginTop:10}}),l.a.createElement(b.a,{color:"primary"},"Petition")," ",l.a.createElement(b.a,{color:"primary"},"Suggest")," ",l.a.createElement(b.a,{color:"secondary"},"Report"))}}]),t}(c.Component));delete v.a.Icon.Default.prototype._getIconUrl,v.a.Icon.Default.mergeOptions({iconRetinaUrl:a(324),iconUrl:a(325),shadowUrl:a(326)});var S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).setCentered=function(e,t){a.setState({centered:[e+.0025,t]})},a.containsServices=function(e){var t=!0;return Object.keys(a.state.services).forEach(function(n){console.log(a.state.services[n],e.services[n]),a.state.services[n]&&e.services[n]<=0&&(t=!1)}),t},a.state={coords:a.props.coords,data:a.props.data,services:a.props.services,centered:[]},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.coords,a=e.data,n=e.services;this.setState({coords:t,data:a,services:n})}},{key:"render",value:function(){var e=this,t=this.state.centered.length>0?this.state.centered:[this.state.coords&&this.state.coords.latitude?this.state.coords.latitude:0,this.state.coords&&this.state.coords.longitude?this.state.coords.longitude:0],a=[this.state.coords&&this.state.coords.latitude?this.state.coords.latitude:0,this.state.coords&&this.state.coords.longitude?this.state.coords.longitude:0],n=Object.keys(this.state.data).map(function(t,a){var n=e.state.data[t];return e.containsServices(n)?l.a.createElement(d.a,{key:"c"+a,center:v.a.latLng(n.lat,n.lng),radius:8,fill:!0,color:"#000000",fillColor:"#ff0000",fillOpacity:"0.75",onClick:function(){e.setCentered(n.lat,n.lng)}},l.a.createElement(u.a,null,l.a.createElement(k,{point:n,pushKey:t}))):null});return l.a.createElement("div",null,l.a.createElement(h.a,{center:t,zoom:16},l.a.createElement(p.a,{attribution:'<a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(m.a,{position:a,color:"red"}),l.a.createElement("div",null,n)))}}]),t}(c.Component),C=(a(332),a(334)),O=a.n(C),j=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{position:"absolute",bottom:20,right:20,zIndex:500}},l.a.createElement(b.a,{variant:"fab",style:{backgroundColor:"#421dac",color:"white"},onClick:function(){return e.props.setAddNewModalState(!0)}},l.a.createElement(O.a,null)))}}]),t}(c.Component),D=a(302),_=a(307),w=a.n(_),F=a(303),M=a.n(F),A=a(313),L=a.n(A),P=a(305),N=a.n(P),R=a(306),I=a.n(R),W=a(304),U=a.n(W),G=a(311),z=a.n(G),B=a(280),K=a.n(B),T=a(239),x=a.n(T),H=a(240),Y=a.n(H),J=a(312),X=a.n(J),q="AIzaSyA-u4mGseXsGu1mLytcpR3skLsn24vwH3Y",Q="https://maps.googleapis.com/maps/api/geocode/json?address=",V=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).submitToFirebase=function(){var e=a.state.services;Object.keys(e).forEach(function(t){e[t]=e[t]?1:0}),fetch("".concat(Q).concat(a.state.address,"&key=").concat(q)).then(function(e){return e.json()}).then(function(t){var n=t.results[0].geometry.location;E.a.database().ref("Data").push({name:a.state.name,address:a.state.address,services:e,lat:n.lat,lng:n.lng}),a.clearData()})},a.checkError=function(){return""===a.state.address?(a.setState({error:"address"}),!1):""!==a.state.name||(a.setState({error:"name"}),!1)},a.clearData=function(){a.setState({name:"",address:"",reverseLoading:!1,services:{}})},a.handleChange=function(e){return function(t){a.setState(Object(D.a)({},e,t.target.value))}},a.handleChecked=function(e){return function(t){var n=a.state.services;n[e]=!n[e],a.setState({services:n})}},a.getReverseGeoLocation=function(){a.setState({reverseLoading:!0});var e="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(a.state.coords.latitude,",").concat(a.state.coords.longitude,"&location_type=ROOFTOP&result_type=street_address&key=").concat(q);fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({address:e.results[0].formatted_address,reverseLoading:!1})})},a.state={open:a.props.open,name:"",address:"",reverseLoading:!1,services:{F_condoms:!1,F_bcpills:!1,F_iud:!1,D_condoms:!1,D_bcpills:!1,D_iud:!1,D_morningAfter:!1},error:""},a.servicesList=[{id:"F_condoms",title:"Free Condoms"},{id:"F_bcpills",title:"Free Birth Control Pills"},{id:"F_iud",title:"Free IUDs"},{id:"D_condoms",title:"Discounted Condoms"},{id:"D_bcpills",title:"Discounted Birth Control Pills"},{id:"D_iud",title:"Discounted IUDs"},{id:"D_morningAfter",title:"Discounted Morning After Pills"}],a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.open,coords:e.coords})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(M.a,{open:this.state.open,onClose:function(){e.props.setAddNewModalState(!1)},"aria-labelledby":"form-dialog-title",scroll:"paper"},l.a.createElement(U.a,{id:"form-dialog-title"},"Add new info"),l.a.createElement(N.a,null,l.a.createElement(I.a,null,"Please enter information about a location!"),l.a.createElement(w.a,{error:"name"===this.state.error,autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0,onChange:this.handleChange("name")}),l.a.createElement(w.a,{error:"address"===this.state.error,margin:"dense",id:"address",label:"Address",fullWidth:!0,onChange:this.handleChange("address"),value:this.state.address}),l.a.createElement(b.a,{onClick:function(){e.getReverseGeoLocation()},color:"primary",disabled:this.state.reverseLoading},"Use current location"),this.state.reverseLoading&&l.a.createElement(z.a,null),l.a.createElement(K.a,{component:"legend"},"What kinds of services does this place provide?"),l.a.createElement(x.a,null,this.servicesList.map(function(t,a){return l.a.createElement(Y.a,{key:"check"+a,control:l.a.createElement(X.a,{checked:e.state.services[t.id],onChange:e.handleChecked(t.id),value:t.id}),label:t.title})}))),l.a.createElement(L.a,null,l.a.createElement(b.a,{onClick:function(){e.clearData(),e.props.setAddNewModalState(!1)},color:"primary"},"Cancel"),l.a.createElement(b.a,{onClick:function(){e.checkError()&&(e.submitToFirebase(),e.props.setAddNewModalState(!1))},color:"primary"},"Submit"))))}}]),t}(c.Component),Z=a(379),$=a.n(Z),ee=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{position:"absolute",bottom:20,right:80,zIndex:500}},l.a.createElement(b.a,{variant:"fab",style:{backgroundColor:"#421dac",color:"white"},onClick:function(){return e.props.setSearchModalState(!0)}},l.a.createElement($.a,null)))}}]),t}(c.Component),te="AIzaSyA-u4mGseXsGu1mLytcpR3skLsn24vwH3Y",ae="https://maps.googleapis.com/maps/api/geocode/json?address=",ne=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).clearData=function(){a.setState({address:"",loading:!1,services:{}})},a.submit=function(){fetch("".concat(ae).concat(a.state.address,"&key=").concat(te)).then(function(e){return e.json()}).then(function(e){var t=e.results[0].geometry.location;a.props.setNewCoords(t.lat,t.lng),a.props.setFilter(a.state.services),a.clearData()})},a.getReverseGeoLocation=function(){a.setState({loading:!0});var e="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(a.state.coords.latitude,",").concat(a.state.coords.longitude,"&location_type=ROOFTOP&result_type=street_address&key=").concat(te);fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({address:e.results[0].formatted_address,loading:!1})})},a.handleChange=function(e){return function(t){a.setState(Object(D.a)({},e,t.target.value))}},a.handleChecked=function(e){return function(t){var n=a.state.services;n[e]=!n[e],a.setState({services:n})}},a.state={open:a.props.open,address:"",loading:!1,services:{F_condoms:!1,F_bcpills:!1,F_iud:!1,D_condoms:!1,D_bcpills:!1,D_iud:!1,D_morningAfter:!1},error:"",coords:a.props.coords},a.servicesList=[{id:"F_condoms",title:"Free Condoms"},{id:"F_bcpills",title:"Free Birth Control Pills"},{id:"F_iud",title:"Free IUDs"},{id:"D_condoms",title:"Discounted Condoms"},{id:"D_bcpills",title:"Discounted Birth Control Pills"},{id:"D_iud",title:"Discounted IUDs"},{id:"D_morningAfter",title:"Discounted Morning After Pills"}],a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({open:e.open,coords:e.coords})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(M.a,{open:this.state.open,onClose:function(){e.props.setSearchModalState(!1)},"aria-labelledby":"form-dialog-title",scroll:"paper"},l.a.createElement(U.a,{id:"form-dialog-title"},"Search or filter"),l.a.createElement(N.a,null,l.a.createElement(I.a,null,"Please enter the address you would like to see."),l.a.createElement(w.a,{error:"address"===this.state.error,margin:"dense",id:"address",label:"Address",fullWidth:!0,onChange:this.handleChange("address"),value:this.state.address}),l.a.createElement(b.a,{onClick:function(){e.getReverseGeoLocation()},color:"primary",disabled:this.state.loading},"Use current location"),this.state.loading&&l.a.createElement(z.a,null),l.a.createElement(K.a,{component:"legend"},"What kinds of services are you looking for?"),l.a.createElement(x.a,null,this.servicesList.map(function(t,a){return l.a.createElement(Y.a,{key:"check"+a,control:l.a.createElement(X.a,{checked:e.state.services[t.id],onChange:e.handleChecked(t.id),value:t.id}),label:t.title})}))),l.a.createElement(L.a,null,l.a.createElement(b.a,{onClick:function(){e.clearData(),e.props.setSearchModalState(!1)},color:"primary"},"Cancel"),l.a.createElement(b.a,{onClick:function(){e.submit(),e.props.setSearchModalState(!1)},color:"primary"},"Submit"))))}}]),t}(c.Component);a.d(t,"default",function(){return se});var se=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).setAddNewModalState=function(e){a.setState({addNewModalOpen:e})},a.setSearchModalState=function(e){a.setState({searchModalOpen:e})},a.setNewCoords=function(e,t){a.setState({coords:{latitude:e,longitude:t}})},a.setFilter=function(e){a.setState({services:e})},a.state={coords:a.props.coords,data:a.props.data,addNewModalOpen:!1,searchModalOpen:!1,services:{}},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.coords,a=e.data;this.setState({coords:t,data:a})}},{key:"render",value:function(){return l.a.createElement("div",{className:"classname",style:{width:"100vw",height:"100vh",overflow:"hidden"}},l.a.createElement(S,{coords:this.state.coords,style:{width:"100vw",height:"100vh"},data:this.state.data,services:this.state.services}),l.a.createElement(j,{setAddNewModalState:this.setAddNewModalState}),l.a.createElement(ee,{setSearchModalState:this.setSearchModalState}),l.a.createElement(V,{open:this.state.addNewModalOpen,coords:this.state.coords,setAddNewModalState:this.setAddNewModalState}),l.a.createElement(ne,{open:this.state.searchModalOpen,setNewCoords:this.setNewCoords,coords:this.state.coords,setSearchModalState:this.setSearchModalState,setFilter:this.setFilter}))}}]),t}(c.Component)}}]);
//# sourceMappingURL=1.1fda9993.chunk.js.map
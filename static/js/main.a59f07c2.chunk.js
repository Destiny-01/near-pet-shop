(this["webpackJsonppet-shop"]=this["webpackJsonppet-shop"]||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},143:function(e,t){},153:function(e,t){},171:function(e,t){},202:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(122),s=n.n(r),o=(n(133),n(10)),i=n(23),l=n(6),j=(n(134),n(212)),d=n(214),u=n(217),b=n(213),x=n(209),O=n(220),p=n(1),h=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.a.Toggle,{variant:"light",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(p.jsxs)(p.Fragment,{children:[n," ",Object(p.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(p.jsx)(x.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(p.jsxs)(b.a.Menu,{className:"shadow-lg border-0",children:[Object(p.jsx)(b.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(p.jsxs)(O.a,{direction:"horizontal",gap:2,children:[Object(p.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(p.jsx)("span",{className:"font-monospace",children:t})]})}),Object(p.jsx)(b.a.Divider,{}),Object(p.jsxs)(b.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(p.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},m=(n(138),Object({NODE_ENV:"production",PUBLIC_URL:"//osas2211.github.io/near-pet-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"nearpetshop.devfrank.testnet");var f=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:m,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org",headers:{}};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:m,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org",headers:{}};default:throw Error("Unknown environment '".concat(e,"'."))}},g=n(33),w=n(78),v=f("testnet");function N(){return(N=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.connect)(Object.assign({deps:{keyStore:new g.keyStores.BrowserLocalStorageKeyStore}},v));case 2:t=e.sent,window.walletConnection=new g.WalletConnection(t,null),window.accountId=window.walletConnection.getAccountId(),window.contract=new g.Contract(window.walletConnection.account(),v.contractName,{viewMethods:["getPet","getPets","petCount","getFee"],changeMethods:["adoptPet","listPet"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){window.walletConnection.requestSignIn(v.contractName)}function S(){window.walletConnection.signOut(),window.location.reload()}var I=n(41),P=function(){return Object(p.jsx)(I.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})},F=function(e){var t=e.text;return Object(p.jsxs)("div",{children:[Object(p.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(p.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T=function(e){var t=e.text;return Object(p.jsxs)("div",{children:[Object(p.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(p.jsx)("span",{className:"text-secondary mx-1",children:t})]})},U={text:""};F.defaultProps=U,T.defaultProps=U;var A=n(123),E=function(e){var t=e.name,n=e.coverImg,c=e.login;return t?Object(p.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#282c34",minHeight:"100vh"},children:[Object(p.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(p.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(p.jsx)("img",{src:n,alt:""})}),Object(p.jsx)("h1",{children:t}),Object(p.jsx)("p",{children:"Please connect your wallet to continue."}),Object(p.jsx)(A.a,{onClick:function(){return c().catch((function(e){return console.log(e)}))},variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(p.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by Near"})]}):null},L=n.p+"static/media/petshop.0b59a906.jpg",B=n(124),R=n(219),_=n(210),H=function(e){var t=e.pet,n=e.adopt,c=e.fee;return Object(p.jsx)(B.a,{children:Object(p.jsxs)(R.a,{className:" h-100",children:[Object(p.jsx)(R.a.Header,{children:Object(p.jsxs)(O.a,{direction:"horizontal",gap:2,children:[Object(p.jsx)("span",{className:"font-monospace text-secondary",children:t.adopter}),Object(p.jsx)(_.a,{bg:"secondary",className:"ms-auto",children:t.adopted})]})}),Object(p.jsx)("div",{className:" ratio ratio-4x3",children:Object(p.jsx)("img",{src:t.imageURL,alt:t.petName,style:{objectFit:"cover"}})}),Object(p.jsxs)(R.a.Body,{className:"d-flex  flex-column text-center",children:[Object(p.jsx)(R.a.Title,{children:t.petName}),Object(p.jsx)(R.a.Text,{className:"flex-grow-1 ",children:t.breed}),Object(p.jsx)(R.a.Text,{className:"text-secondary",children:Object(p.jsx)("span",{children:t.location})}),Object(p.jsxs)(A.a,{variant:"outline-dark",onClick:function(){n(t.id)},className:"w-100 py-3",children:["Buy for ",g.utils.format.formatNearAmount(c)," NEAR"]})]})]})},t.id)},D=n(216),W=n(215),M=n(125),K=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),x=b[0],O=(b[1],Object(c.useState)("")),h=Object(l.a)(O,2),m=h[0],f=h[1],g=Object(c.useState)(""),w=Object(l.a)(g,2),v=w[0],N=w[1],y=Object(c.useState)(!1),C=Object(l.a)(y,2),k=C[0],S=C[1],I=function(){return S(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(A.a,{onClick:function(){return S(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(p.jsx)("i",{className:"bi bi-plus"})}),Object(p.jsxs)(D.a,{show:k,onHide:I,centered:!0,children:[Object(p.jsx)(D.a.Header,{closeButton:!0,children:Object(p.jsx)(D.a.Title,{children:"New Pet"})}),Object(p.jsx)(W.a,{children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(M.a,{controlId:"inputName",label:"Pet name",className:"mb-3",children:Object(p.jsx)(W.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of pet"})}),Object(p.jsx)(M.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(p.jsx)(W.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){d(e.target.value)}})}),Object(p.jsx)(M.a,{controlId:"inputBreed",label:"Breed",className:"mb-3",children:Object(p.jsx)(W.a.Control,{as:"textarea",placeholder:"breed",onChange:function(e){f(e.target.value)}})}),Object(p.jsx)(M.a,{controlId:"inputAge",label:"Age",className:"mb-3",children:Object(p.jsx)(W.a.Control,{as:"textarea",placeholder:"age",onChange:function(e){f(e.target.value)}})}),Object(p.jsx)(M.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(p.jsx)(W.a.Control,{type:"text",placeholder:"Location",onChange:function(e){N(e.target.value)}})})]})}),Object(p.jsxs)(D.a.Footer,{children:[Object(p.jsx)(A.a,{variant:"outline-secondary",onClick:I,children:"Close"}),Object(p.jsx)(A.a,{variant:"dark",disabled:!(r&&j&&x&&m&&v),onClick:function(){t({petName:r,imageURL:j,breed:x,age:m,location:v}),I()},children:"List Pet"})]})]})]})},z=function(){return Object(p.jsx)("div",{className:"d-flex justify-content-center",children:Object(p.jsx)(x.a,{animation:"border",role:"status",className:"opacity-25",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},J=n(211),q=n(218),V=1e14;function G(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(i.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.fee,e.next=3,window.contract.adoptPet({petId:n},V,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],d=s[1],u=Object(c.useState)("0"),b=Object(l.a)(u,2),x=b[0],O=b[1],h=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=a,e.next=5,window.contract.getPets();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]),m=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=O,e.next=4,window.contract.getFee();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log({error:e.t2});case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),f=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(!0),(n=t,n.id=Object(q.a)(),window.contract.listPet({pet:n})).then((function(e){h()})),Object(I.b)(Object(p.jsx)(F,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(I.b)(Object(p.jsx)(T,{text:"Failed to create a product."}))}finally{d(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G({id:t,fee:x}).then((function(e){return h()}));case 3:Object(I.b)(Object(p.jsx)(F,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(I.b)(Object(p.jsx)(T,{text:"Failed to purchase product."}));case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h(),m()}),[h,m]),Object(p.jsx)(p.Fragment,{children:j?Object(p.jsx)(z,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"text-start container",children:Object(p.jsx)("div",{id:"adoptionNotice",className:"mb-4",style:{marginTop:"1em"},children:Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"bi bi-bell-fill"})," Adoption Fee is ",g.utils.format.formatNearAmount(x)," Near"]})})}),Object(p.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:Object(p.jsx)(K,{save:f})}),Object(p.jsx)(J.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(p.jsx)(H,{pet:e,adopt:w,fee:x})}))})]})})},Y=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,y();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))),[e]);return Object(c.useEffect)((function(){s()}),[s]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(P,{}),e.accountId?Object(p.jsxs)(j.a,{fluid:"md",children:[Object(p.jsx)(d.a,{bg:"white",expand:"lg",children:Object(p.jsxs)(j.a,{className:"container-fluid",children:[Object(p.jsx)(d.a.Brand,{href:"index.html",className:" m-0 h4 fw-bold",children:"Pet Adoption Shop"}),Object(p.jsx)(u.a,{className:"justify-content-end pt-3 pb-5",children:Object(p.jsx)(u.a.Item,{children:Object(p.jsx)(h,{address:e.accountId,amount:a,symbol:"NEAR",destroy:S})})})]})}),Object(p.jsx)("main",{children:Object(p.jsx)(X,{})})]}):Object(p.jsx)(E,{name:"Pet Shop",login:k,coverImg:L})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(200),n(201);window.nearInitPromise=function(){return N.apply(this,arguments)}().then((function(){s.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Y,{})}))})).catch(console.error),Z()}},[[202,1,2]]]);
//# sourceMappingURL=main.a59f07c2.chunk.js.map
(this["webpackJsonpreddit-saves-project"]=this["webpackJsonpreddit-saves-project"]||[]).push([[0],{30:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),s=a.n(r),l=(a(30),a(24)),i=a(3),o=[{title:"Favourites",url:"/favourites"},{title:"Search",url:"/search"}],d=a(0),u=function(){return Object(d.jsxs)("nav",{className:"sticky top-0 shadow-lg bg-gradient-to-r from-green-400 to-red-400 sm:pl-4 sm:pr-5 sm:py-2.5 z-10",children:[Object(d.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&display=swap",rel:"stylesheet"}),Object(d.jsxs)("div",{className:"mx-auto text-white sm:max-w-screen-lg sm:flex sm:justify-between",children:[Object(d.jsxs)("div",{className:"flex items-center justify-between py-2 pl-4 pr-2 sm:p-0",children:[Object(d.jsx)("div",{className:"flex items-center",children:Object(d.jsx)("h1",{children:"Saved Reddit Posts"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{className:"block px-4 transition-all duration-500 ease-in-out rounded cursor-pointer focus:outline-none hover:bg-purple-300 "})})]}),Object(d.jsx)("div",{className:"transform transition duration-500 ease-in-out px-4 pt-2 pb-4 sm:flex sm:p-0",children:o.map((function(e,t){return Object(d.jsx)("a",{style:{fontFamily:"Fredoka One, cursive"},className:"".concat(0===t?"mt-0":"mt-2"," block font-medium rounded px-2 py-1 transition-all duration-500 ease-in-out hover:bg-purple-300 sm:font-normal sm:mt-0 sm:ml-2 "),href:e.url,children:e.title},t)}))})]})]})},m=function(e){return Object(d.jsxs)("div",{className:"relative min-h-screen",children:[Object(d.jsx)(u,{}),Object(d.jsx)("main",{className:"pb-32 mx-auto sm:max-w-screen-lg",children:e.children})]})},h=a(8),j=function(e){var t=e.result,a=e.search,n=e.setSubreddit,c=e.setSearch;return t.length<=0||""===a?Object(d.jsx)("div",{}):Object(d.jsx)("div",{className:"static py-1",role:"none",children:t.map((function(e,t){return Object(d.jsx)("button",{onClick:function(){c(""),n(e.data.display_name_prefixed)},className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer",role:"menuitem",children:e.data.display_name_prefixed},e.data.display_name_prefixed)}))})},b=a(16),f=a(11);function x(e){var t;try{t=window[e];var a="__storage_test__";return t.setItem(a,a),t.removeItem(a),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&t&&0!==t.length}}String.prototype.replaceAt=function(e,t){return this.substr(0,e)+t+this.substr(e+t.length)};var p=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(e){var t=null,a=[],n=[];if(x("localStorage")){if(null!==(t=localStorage.getItem("FavPost"))){a=t.split("}{");for(var r=1;r<a.length;r++){var s;s=a[r].replaceAt(a[r].length-1,".json"),fetch(s).then((function(e){e.json().then((function(e){n=[].concat(Object(b.a)(n),[e[0].data.children[0]]),c(n)}))})).catch((function(e){console.log("***ERROR: "+e)}))}}}else Window.alert("LocalStorage is not available.")}()}),[]),Object(d.jsx)("div",{children:Object(d.jsx)(v,{postList:a})})},O=a(12),g=a(19),w=function(e){var t,a=e.postChild,c=Object(n.useState)(!1),r=Object(h.a)(c,2),s=r[0],l=r[1],i="FavPost",o=[],u=function(e){if(x("localStorage")){if(null!==(t=localStorage.getItem(i))){o=t.split("}{");for(var a=0,n=0;n<o.length;n++)0!==o[n].localeCompare(e)&&(a===o.length-1?(o=[].concat(Object(b.a)(o),[e.toString()]),n++):a++);localStorage.setItem(i,o.join("}{"))}}else window.alert("LocalStorage is not available.");window.alert("Post saved to favourites.")},m=function(){if(null!==a.data.secure_media){if(void 0!==a.data.secure_media.oembed){var e=a.data.secure_media.oembed.html;return null!==(e=e.match(/(\s(src=").*?(" )\b)/g)).toString().match(/((src=)\b.+?(?=\&))/g)?(e=(e=e.toString().match(/((src=)\b.+?(?=\&))/g)).toString().replace("src=",""),e=decodeURIComponent(e),Object(d.jsx)("iframe",{title:a.data.title,className:"block max-h-96 w-full",allowFullScreen:!0,src:e})):Object(d.jsx)("a",{href:"https://www.reddit.com"+a.data.permalink,children:Object(d.jsx)("iframe",{title:a.data.title,className:"block max-h-96 w-full hover:cursor-pointer",allowFullScreen:!0,width:a.data.secure_media.oembed.thumbnail_width,height:a.data.secure_media.oembed.thumbnail_height,src:a.data.secure_media.oembed.thumbnail_url})})}return Object(d.jsx)("iframe",{title:a.data.title,className:"block max-h-96 w-full cursor-pointer",height:a.data.secure_media.reddit_video.height,width:a.data.secure_media.reddit_video.width,src:a.data.secure_media.reddit_video.fallback_url})}return 0===a.data.post_hint.toString().localeCompare("link")?Object(d.jsx)("a",{href:"https://www.reddit.com"+a.data.permalink,children:Object(d.jsx)("iframe",{title:a.data.title,alt:"Placeholder",className:"h-auto w-full hidden hover:block cursor-pointer"})}):Object(d.jsx)("a",{href:"https://www.reddit.com"+a.data.permalink,children:Object(d.jsx)("img",{alt:"Placeholder",className:"block h-auto w-full cursor-pointer",src:a.data.url})})};return a.length<=0?Object(d.jsx)("div",{}):void 0===a.data.preview?Object(d.jsxs)("article",{className:"m-5 overflow-hidden rounded-lg shadow-lg",children:[Object(d.jsxs)("header",{className:"max-h-80 flex items-center justify-between leading-tight p-2 md:p-4 bg-purple-200",children:[Object(d.jsx)("h1",{className:"text-lg max-h-52 overflow-hidden",children:Object(d.jsx)("a",{href:"https://www.reddit.com"+a.data.permalink,className:"no-underline hover:underline text-black cursor-pointer",children:a.data.title})}),Object(d.jsx)("p",{className:"flex items-end text-grey-darker text-sm",children:(a.data.score/1e3).toFixed(1)+"K"})]}),Object(d.jsxs)("footer",{className:"flex items-center justify-between leading-none p-2 md:p-4 bg-purple-200",children:[Object(d.jsxs)("a",{href:"https://www.reddit.com"+a.data.permalink,className:"flex flex-col max-h-12 items-center no-underline hover:underline text-black",children:[Object(d.jsx)("p",{className:"ml-2 mb-2 text-sm font-semibold",children:"u/"+a.data.author}),Object(d.jsx)("p",{className:"ml-2 -mb-2 text-xs font-thin text-gray-800",children:a.data.subreddit_name_prefixed})]}),Object(d.jsxs)("a",{className:"no-underline text-grey-darker hover:text-red-dark",children:[Object(d.jsx)("span",{className:"hidden",children:"Like"}),Object(d.jsx)(f.a,{icon:s?O.a:g.a,onPointerOver:function(){l(!0)},onPointerOut:function(){l(!1)},onClick:function(){u("https://www.reddit.com"+a.data.permalink)}})]})]})]}):Object(d.jsxs)("article",{className:"m-5 overflow-hidden rounded-lg shadow-lg",children:[Object(d.jsx)(m,{}),Object(d.jsx)("link",{rel:"canonical",href:"https://getbootstrap.com/docs/4.0/examples/blog/"}),Object(d.jsxs)("header",{className:"flex items-center justify-between leading-tight p-2 md:p-4 bg-purple-200",children:[Object(d.jsx)("h1",{className:"text-lg max-h-20 overflow-hidden",children:Object(d.jsx)("a",{className:"no-underline hover:underline text-black",href:"https://www.reddit.com"+a.data.permalink,children:a.data.title})}),Object(d.jsx)("p",{className:"text-grey-darker text-sm cursor-default",children:(a.data.score/1e3).toFixed(1)+"K"})]}),Object(d.jsxs)("footer",{className:"flex items-center justify-between leading-none p-2 md:p-4 bg-purple-200 cursor-default",children:[Object(d.jsxs)("a",{href:"https://www.reddit.com"+a.data.permalink,className:"flex flex-col max-h-12 items-center no-underline hover:underline text-black cursor-default",children:[Object(d.jsx)("p",{className:"ml-2 mb-2 text-sm font-semibold cursor-default",children:"u/"+a.data.author}),Object(d.jsx)("p",{className:"ml-2 -mb-2 text-xs font-thin text-gray-800 cursor-default",children:a.data.subreddit_name_prefixed})]}),Object(d.jsxs)("a",{className:"no-underline text-grey-darker hover:text-red-dark",children:[Object(d.jsx)("span",{className:"hidden",children:"Like"}),Object(d.jsx)(f.a,{icon:s?O.a:g.a,onPointerOver:function(){l(!0)},onPointerOut:function(){l(!1)},onClick:function(){u("https://www.reddit.com"+a.data.permalink)}})]})]})]})},v=function(e){var t=e.postList;return Object(d.jsx)("div",{className:"flex justify-center flex-wrap mx-100 lg:mx-4",children:Object(d.jsx)("div",{className:"my-1 px-1 w-full md:w-1/2 lg:px-4 lg:w-3/6",children:t.map((function(e,t){return Object(d.jsx)(w,{postChild:e},t)}))})})},N=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(h.a)(r,2),l=s[0],i=s[1],o=Object(n.useState)(""),u=Object(h.a)(o,2),m=u[0],b=u[1],x=Object(n.useState)([]),p=Object(h.a)(x,2),g=p[0],w=p[1],N=Object(n.useState)([]),k=Object(h.a)(N,2),y=k[0],_=k[1],S="subreddits/search.json?q=".concat(l,"&limit=10"),R="https://www.reddit.com/";Object(n.useEffect)((function(){i(m)})),Object(n.useEffect)((function(){fetch(R+S).then((function(e){e.json().then((function(e){void 0!==e.data&&w(e.data.children)}))})).catch((function(e){console.log("***ERROR: "+e)}))}),[l]),Object(n.useEffect)((function(){fetch(R+a+"/hot.json?limit=10").then((function(e){403!==e.status&&404!==e.status||window.alert(R+a+" cannot be reach. Try a different subreddit."),e.json().then((function(e){void 0!==e.data&&(_(e.data.children),console.log(e))})).catch((function(e){console.log("****ERROR: "+e)}))})).catch((function(e){console.log("***ERROR: "+e)}))}),[a]);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"flex sticky top-12 items-center rounded-full shadow-xl",children:[Object(d.jsx)("input",{className:"rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none",id:"search",type:"text",placeholder:"Search",value:m,onChange:function(e){b(e.target.value)}}),Object(d.jsx)("div",{className:"p-4",children:Object(d.jsx)("button",{className:"bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center",children:Object(d.jsx)(f.a,{icon:O.b})})}),Object(d.jsx)("div",{className:"absolute origin-top-right top-20 left-0 ml-10 mt-0.5 w-3/6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:Object(d.jsx)(j,{result:g,search:m,setSubreddit:c,setSearch:b})})]}),Object(d.jsx)(v,{postList:y})]})};a(37),a(38);var k=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)(m,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/favourites",component:p}),Object(d.jsx)(i.a,{path:"/search",component:N})]})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.11c478a9.chunk.js.map
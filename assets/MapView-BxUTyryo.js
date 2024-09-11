import{r as k,o as c,d as x,c as M,e as C,F as B,u as L,f as R,w as m,g as r,a as D,t as V,h as S,n as T,b as I,i as g,j as b,_ as W,k as q,l as P,m as U,p as G,q as H,s as J,v as K}from"./index-xzCxpIyY.js";import{_ as Q}from"./plugin-vue_export-helper-DlAUqK2U.js";const X={__name:"SkeletonMarkerList",props:["loading"],setup(a){return(i,h)=>{const e=k("v-skeleton-loader");return c(),x(B,null,[a.loading?(c(),M(e,{key:0,class:"mx-auto mt-6",elevation:"12",type:"article, button"})):C("",!0),a.loading?(c(),M(e,{key:1,class:"mx-auto mt-6",elevation:"12",type:"article, button"})):C("",!0)],64)}}},Y={class:"text-h4 text-md-h2 text-xl-h1 text-truncate"},Z={key:0,class:"mt-6"},j={__name:"MarkerList",props:{loading:Boolean,markers:Array},emits:["watchOnMap"],setup(a,{emit:i}){const h=L(),e=R(()=>h.getters.getLocale),w=i,p=t=>{w("watchOnMap",t)};return(t,f)=>{const $=k("v-col"),l=k("v-btn"),v=k("v-card"),y=k("v-row");return c(),M(y,{dense:"",class:"overflow-auto row-max-height"},{default:m(()=>[r($,{cols:"12",class:"mb-6"},{default:m(()=>[D("h1",Y,V(t.$locale("markers",e.value)),1),!a.markers.length&&!a.loading?(c(),x("p",Z,V(t.$locale("markersEmpty",e.value)),1)):C("",!0),r(X,{loading:a.loading},null,8,["loading"])]),_:1}),(c(!0),x(B,null,S(a.markers,n=>(c(),M($,{key:n,cols:"12",class:T(n.active?"bg-blue":"")},{default:m(()=>[r(v,{title:`${t.$locale("buttons.marker",e.value)} #${n.id}`,text:`${t.$locale("buttons.address",e.value)}: ${n.address}`},{actions:m(()=>[r(l,{color:"primary",variant:"text",onClick:O=>p(n)},{default:m(()=>[I(V(t.$locale("buttons.watchOnMap",e.value)),1)]),_:2},1032,["onClick"])]),_:2},1032,["title","text"])]),_:2},1032,["class"]))),128))]),_:1})}}},ee={__name:"Map",props:{editing:Boolean,created:Boolean,markers:Array,mapCenter:Array},emits:["addedMarker","watchOnMap","creating","created"],setup(a,{emit:i}){const h=L(),e=i,w=a,p={default:"red",active:"#006efc"},t=g(!0),f=async v=>{await h.dispatch("addMarker",{coords:[v[0],v[1]]})},$=(v,y)=>{if(w.editing===!0&&t.value===!0)return async(n,O)=>{(n==null?void 0:n.type)!=="marker"&&(t.value=!1,e("creating"),await f(O.coordinates),e("addedMarker",!0),e("creating"),e("created"),setTimeout(()=>{t.value=!0},500))}},l=v=>{e("watchOnMap",v)};return(v,y)=>(c(),M(b(G),{settings:{location:{center:a.mapCenter,zoom:15}},height:"81vh"},{default:m(()=>[r(b(W),{settings:{theme:"dark"}}),r(b(q)),(c(!0),x(B,null,S(a.markers,n=>(c(),M(b(P),{settings:{coordinates:n.coordinates,color:n.active?p.active:p.default,onClick:()=>l(n)}},null,8,["settings"]))),256)),r(b(U),{settings:{onClick:$("dom","click")}},null,8,["settings"])]),_:1},8,["settings"]))}},z={__name:"Tooltip",props:["color","text"],setup(a){const i=g(!0);return(h,e)=>{const w=k("v-btn"),p=k("v-snackbar");return c(),M(p,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=t=>i.value=t),color:a.color,elevation:"24",timeout:3e3},{actions:m(()=>[r(w,{color:"white",variant:"text",onClick:e[0]||(e[0]=t=>i.value=!1)},{default:m(()=>e[2]||(e[2]=[I(" × ")])),_:1})]),default:m(()=>[I(V(a.text)+" ",1)]),_:1},8,["modelValue","color"])}}},te={__name:"MapView",setup(a){const i=H(),h=g(i.currentRoute),e=L(),w=R(()=>e.getters.getLocale),p=g(!1),t=g(!1),f=g(!1),$=g(!0),l=g([]),v=["20.6585188335062","44.87238218431069"],y=g(v),n=async u=>{u.name==="map"&&(l.value.forEach(o=>o.active=!1),y.value=v,await e.dispatch("addMarkers",{data:l.value}))},O=u=>{var s;const o=(s=h.value.params)==null?void 0:s.id;!u.find(d=>d.id===o)&&o&&i.push({name:"notFound"})},E=async u=>{const o=await e.dispatch("getMarkers");l.value=o.sort((s,d)=>parseInt(d.id)-parseInt(s.id)),u&&(t.value=p.value=f.value=!1),O(l.value);const _=l.value.find(s=>s.active===!0);if(_){const[s,d]=_.coordinates;y.value=[s,d]}$.value=!1},F=async u=>{const[o,_]=u.coordinates,s=l.value.find(d=>{const[N,A]=d.coordinates;return o===N&&_===A});if(s){const[d,N]=s.coordinates;l.value.forEach(A=>A.active=!1),s.active=!0,y.value=[d,N],await e.dispatch("addMarkers",{data:l.value}),await i.push({name:"mapItem",params:{id:s.id}})}};return J(async()=>{await E()}),K(h,async u=>{await n(u)},{deep:!0}),(u,o)=>{const _=k("v-col"),s=k("v-btn");return c(),x(B,null,[r(_,{cols:"12",lg:"4",md:"4"},{default:m(()=>[r(j,{markers:l.value,loading:$.value,onWatchOnMap:F},null,8,["markers","loading"])]),_:1}),r(_,{cols:"12",lg:"8",md:"8"},{default:m(()=>[r(ee,{class:"bg-white",markers:l.value,"map-center":y.value,editing:f.value,creating:t.value,onCreated:o[0]||(o[0]=d=>t.value=!0),onCreating:o[1]||(o[1]=d=>p.value=!0),onAddedMarker:E,onWatchOnMap:F},null,8,["markers","map-center","editing","creating"]),r(_,{cols:"12",class:"d-flex justify-end position-relative"},{default:m(()=>[r(s,{disabled:f.value,icon:"mdi-plus",size:"large","base-color":f.value?"orange":"blue",class:T(["position-absolute btn-create",{"--editing":f.value}]),onClick:o[2]||(o[2]=d=>f.value=!f.value)},null,8,["disabled","base-color","class"])]),_:1})]),_:1}),t.value?(c(),M(z,{key:0,color:"green",text:u.$locale("notification.success",w.value)},null,8,["text"])):C("",!0),p.value?(c(),M(z,{key:1,color:"primary",text:u.$locale("notification.creating",w.value)},null,8,["text"])):C("",!0)],64)}}},oe=Q(te,[["__scopeId","data-v-c9c340df"]]);export{oe as default};

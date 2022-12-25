import{w as s}from"./@vue.runtime-dom-c19fd55a.js";import{i as e}from"./index-21b83678.js";import{a}from"./element-plus-25f6940e.js";import{d as t,R as o,o as l,c,a as n,b as i,J as r,N as d,F as u,V as p,I as m,al as f,ak as v,L as j}from"./@vue.runtime-core-4f5b9f62.js";import{_ as b}from"./_plugin-vue_export-helper-c4cb8a60.js";import{e as h}from"./@vue.reactivity-bec702f3.js";import{h as x}from"./@vueuse.core-d0bf94bd.js";import"./@vue.shared-5670d8a7.js";import"./store-b4387695.js";import"./axios-4954bb58.js";import"./nprogress-92837e9c.js";import"./vue-echarts-85a407f1.js";import"./resize-detector-94afada7.js";import"./echarts-33de40b3.js";import"./tslib-ed971494.js";import"./zrender-d158d5d4.js";import"./lodash-es-a085e596.js";import"./vue-router-18ffceba.js";import"./pinia-dbeeb1e2.js";import"./vue-demi-5b9a0fa5.js";import"./vue-f9f57ea9.js";import"./mockjs-9b27e2f7.js";import"./mitt-dab1f1cb.js";import"./@vueuse.shared-3f1de09b.js";import"./@element-plus.icons-vue-c0c6c02f.js";import"./@popperjs.core-040feab9.js";import"./@ctrl.tinycolor-84ad98d6.js";import"./dayjs-a0adaf64.js";import"./async-validator-efc2d198.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-da779ce4.js";import"./@floating-ui.dom-9d85c32a.js";import"./@floating-ui.core-c56fb7e8.js";const _={class:"scope"},k=n("div",{class:"h"},[n("span",null,"cl-context-menu"),d(" 右鍵菜單 ")],-1),g={class:"c"},y=n("div",{class:"f"},[n("span",{class:"date"},"2019/10/23")],-1),I=t({name:"undefined"}),z=t({...I,setup(t){function u(s){e.exports.ContextMenu.open(s,{list:[{label:"新增",suffixIcon:"el-icon-plus",callback(s){a.info("點擊了新增"),s()}},{label:"編輯",suffixIcon:"el-icon-edit",callback(s){a.info("點擊了編輯"),s()}},{label:"刪除",suffixIcon:"el-icon-delete"},{label:"二級",suffixIcon:"el-icon-right",children:[{label:"文本超出隱藏，有一天晚上",ellipsis:!0},{label:"禁用",disabled:!0},{label:"更多",callback(s){a.warning("開發中"),s()}}]}]})}return(e,a)=>{const t=o("el-button");return l(),c("div",_,[k,n("div",g,[i(t,{type:"success",onContextmenu:s(u,["stop","prevent"])},{default:r((()=>[d("右鍵點擊")])),_:1},8,["onContextmenu"])]),y])}}}),w={},C={class:"scope"},q=n("div",{class:"h"},[n("span",null,"cl-crud"),d(" 增删改查，加强 ")],-1),$={class:"c"},F=n("div",{class:"f"},[n("span",{class:"date"},"2019/09/25")],-1);const J=b(w,[["render",function(s,e){const a=o("router-link");return l(),c("div",C,[q,n("div",$,[i(a,{to:"/crud"},{default:r((()=>[d("传送门")])),_:1})]),F])}]]),L={},M={class:"scope"},N=n("div",{class:"h"},[n("span",null,"cl-upload"),d(" 图片上传 ")],-1),Q={class:"c"},R=n("div",{class:"f"},[n("span",{class:"date"},"2019/09/25")],-1);const V=b(L,[["render",function(s,e){const a=o("router-link");return l(),c("div",M,[N,n("div",Q,[i(a,{to:"/upload"},{default:r((()=>[d("传送门")])),_:1})]),R])}]]),A={},B={class:"scope"},D=n("div",{class:"h"},[n("span",null,"cl-editor-quill"),d(" Quill 富文本編輯器 ")],-1),E={class:"c"},G=n("div",{class:"f"},[n("span",{class:"date"},"2019/11/07")],-1);const H=b(A,[["render",function(s,e){const a=o("router-link");return l(),c("div",B,[D,n("div",E,[i(a,{to:"/editor-quill"},{default:r((()=>[d("传送门")])),_:1})]),G])}]]),K=s=>(f("data-v-2770947d"),s=s(),v(),s),O={class:"scope"},P=K((()=>n("div",{class:"h"},[n("span",null,"cl-svg"),d(" svg图片库 ")],-1))),S={class:"c _svg"},T=K((()=>n("div",{class:"f"},[n("span",{class:"date"},"2019/09/25")],-1))),U=t({name:"undefined"}),W=b(t({...U,setup(s){const e=h(["like","video","rank","menu","favor"]);return(s,a)=>{const t=o("cl-svg"),d=o("el-tooltip");return l(),c("div",O,[P,n("div",S,[(l(!0),c(u,null,p(e.value,((s,e)=>(l(),m(d,{key:e,content:`icon-${s}`},{default:r((()=>[i(t,{size:18,name:`icon-${s}`},null,8,["name"])])),_:2},1032,["content"])))),128))]),T])}}}),[["__scopeId","data-v-2770947d"]]),X={class:"scope"},Y=n("div",{class:"h"},[n("span",null,"v-copy"),d(" 复制到剪贴板 ")],-1),Z={class:"c"},ss=n("div",{class:"f"},[n("span",{class:"date"},"2019/09/25")],-1),es=t({name:"undefined"}),as=t({...es,setup(s){const{copy:e}=x();function t(){e("https://cool-js.com"),a.success("保存成功")}return(s,e)=>{const a=o("el-button");return l(),c("div",X,[Y,n("div",Z,[i(a,{type:"success",onClick:t},{default:r((()=>[d(" https://cool-js.com 点击复制")])),_:1})]),ss])}}}),ts={class:"demo"},os=t({name:"demo"}),ls=t({...os,setup(s){const e=[z,J,V,H,W,as];return(s,a)=>{const t=o("el-col"),n=o("el-row");return l(),c("div",ts,[i(n,{gutter:10},{default:r((()=>[(l(),c(u,null,p(e,((s,e)=>i(t,{key:e,xs:24,sm:12,md:8,lg:6},{default:r((()=>[(l(),m(j(s)))])),_:2},1024))),64))])),_:1})])}}});export{ls as default};

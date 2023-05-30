import{m as b}from"./message-7f82acf6.js";import{t as Y,b as ee,v as le,c as ae,e as te}from"./query-486a71c4.js";import{d as oe,Z as ne,a as r,r as w,o as se,b as u,c as y,e as I,f as e,w as o,g as f,T as N,U as R,m as B,h as C}from"./index-e13c9028.js";const re={class:"form"},ue=I("h4",{class:"table-name"},"翻译查询:",-1),de={class:"pagination"},_e=oe({name:"translate",__name:"index",setup(ie){const j=ne(),x=r([]),D=r([]),F=r(!1),h=r([]),P=r([]),M=r(!1),c=r(1),p=r(10),E=r(!1),L=r(!1),Z=r(!1),v=w({data:[],total:0}),t=w({originalText:"",translationText:"",isTranslation:"",projectId:j.query.projectId,fileId:j.query.fileId}),$=()=>{t.originalText="",t.translationText="",t.isTranslation="",t.projectId="",t.fileId="",D.value=[],P.value=[]},g=w({value:[]}),q=n=>{g.value=n},A=()=>{if(g.value.length===0){b("请选择要删除的数据",{type:"warning"});return}const n=g.value.map(l=>l.id);ee(n).then(l=>{l.code===0&&(b("删除成功",{type:"success"}),k())})},G=n=>{n?le({projectName:n}).then(l=>{if(l.code===0){const d=l.data;x.value=d.map(s=>({value:s.projectId,label:s.projectName}))}}):x.value=[]},H=n=>{n?ae({projectId:t.projectId,fileName:n}).then(l=>{if(l.code===0){const d=l.data;h.value=d.map(s=>({value:s.fileId,label:s.fileName}))}}):h.value=[]},J=async n=>{te(n).then(l=>{l.code===0?b("修改翻译数据成功",{type:"success"}):b("修改翻译数据失败",{type:"error"})}),await m(c.value,p.value,t)},m=(n,l,d)=>Y({pageNum:n,pageSize:l,...d}).then(s=>{v.data=s.data.records,v.total=s.data.total}),K=n=>{m(c.value,n,t)},O=n=>{m(n,p.value,t)},k=()=>{m(c.value,p.value,t)};return se(()=>{m(c.value,p.value,t)}),(n,l)=>{const d=u("el-option"),s=u("el-select"),i=u("el-form-item"),S=u("el-form"),T=u("el-input"),V=u("el-button"),Q=u("el-popconfirm"),U=u("el-card"),_=u("el-table-column"),W=u("el-table"),X=u("el-pagination");return f(),y("div",null,[I("div",re,[e(U,null,{default:o(()=>[e(S,{inline:!0,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:o(()=>[e(i,{label:"项目:"},{default:o(()=>[e(s,{modelValue:t.projectId,"onUpdate:modelValue":l[0]||(l[0]=a=>t.projectId=a),filterable:"",remote:"","reserve-keyword":"",placeholder:"请选择项目","remote-method":G,loading:F.value},{default:o(()=>[(f(!0),y(N,null,R(x.value,a=>(f(),B(d,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1}),e(i,{label:"文件:"},{default:o(()=>[e(s,{modelValue:t.fileId,"onUpdate:modelValue":l[1]||(l[1]=a=>t.fileId=a),filterable:"",remote:"","reserve-keyword":"",placeholder:"请选择文件","remote-method":H,loading:M.value},{default:o(()=>[(f(!0),y(N,null,R(h.value,a=>(f(),B(d,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1})]),_:1}),e(S,{inline:!0,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:o(()=>[e(i,{label:"原文：",prop:"originalText"},{default:o(()=>[e(T,{modelValue:t.originalText,"onUpdate:modelValue":l[2]||(l[2]=a=>t.originalText=a),placeholder:"输入查询原文",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),e(i,{label:"译文：",prop:"translationText"},{default:o(()=>[e(T,{modelValue:t.translationText,"onUpdate:modelValue":l[3]||(l[3]=a=>t.translationText=a),placeholder:"输入查询译文",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),e(i,{label:"翻译状态：",prop:"isTranslation"},{default:o(()=>[e(s,{modelValue:t.isTranslation,"onUpdate:modelValue":l[4]||(l[4]=a=>t.isTranslation=a),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:o(()=>[e(d,{label:"已翻译",value:"true"}),e(d,{label:"未翻译",value:"false"})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:o(()=>[e(V,{type:"primary",onClick:k},{default:o(()=>[C(" 搜索 ")]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(V,{type:"warning",onClick:$},{default:o(()=>[C(" 重置 ")]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(Q,{onConfirm:A,title:"是否删除 "+g.value.length+" 条数据?"},{reference:o(()=>[e(V,{type:"danger"},{default:o(()=>[C("删除")]),_:1})]),_:1},8,["title"])]),_:1})]),_:1})]),_:1})]),e(U,null,{default:o(()=>[ue,e(W,{data:v.data,style:{width:"100%"},onSelectionChange:q},{default:o(()=>[e(_,{type:"selection",width:"55"}),e(_,{prop:"id",label:"id",width:"100"}),e(_,{prop:"originalText",label:"原文"}),e(_,{prop:"translationText",label:"原始译文"}),e(_,{prop:"translationText",label:"编辑译文"},{default:o(a=>[e(T,{autosize:{minRows:2,maxRows:4},modelValue:a.row.translationText,"onUpdate:modelValue":z=>a.row.translationText=z,type:"textarea",placeholder:"手动编辑译文",onChange:z=>J(a.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:1},8,["data"]),I("div",de,[e(X,{"current-page":c.value,"onUpdate:currentPage":l[5]||(l[5]=a=>c.value=a),"page-size":p.value,"onUpdate:pageSize":l[6]||(l[6]=a=>p.value=a),"page-sizes":[10,20,50,100],small:E.value,disabled:Z.value,background:L.value,layout:"total, sizes, prev, pager, next, jumper",total:v.total,onSizeChange:K,onCurrentChange:O},null,8,["current-page","page-size","small","disabled","background","total"])])]),_:1})])}}});export{_e as default};
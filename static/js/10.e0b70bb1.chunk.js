(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{641:function(e,a,r){"use strict";r.r(a);var t=r(157),s=r(158),l=r(160),n=r(159),c=r(1),m=r.n(c),o=r(615),g=r(616),i=r(614),p=function(e){Object(l.a)(r,e);var a=Object(n.a)(r);function r(e){var s;return Object(t.a)(this,r),(s=a.call(this,e)).state={show:!1,gender:"Male",ageGroup:1,state:"Delhi",country:"India",date:Date.now(),loading:!1,modal:!1},s}return Object(s.a)(r,[{key:"showGraph",value:function(){var e=this;this.setState({show:!1,loading:!0});setTimeout((function(){e.setState({show:!0,loading:!1})}),2e3)}},{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(o.J,null,m.a.createElement(o.k,null,m.a.createElement(o.f,null,m.a.createElement(o.g,null,m.a.createElement(o.J,null,m.a.createElement(o.k,null,m.a.createElement("h4",{id:"traffic",className:"card-title mb-0"},this.state.state,", ",this.state.country),m.a.createElement("div",{className:"small text-muted"},"Late Updated: ",this.state.date)),m.a.createElement(o.k,{sm:"6",className:"d-none d-md-block"},m.a.createElement(o.J,null,m.a.createElement(o.k,null,m.a.createElement(o.t,null,m.a.createElement(o.K,{custom:!0,name:"gender",id:"gender"},m.a.createElement("option",null,"Gender"),m.a.createElement("option",{value:"Male"},"Male"),m.a.createElement("option",{value:"Female"},"Female")))),m.a.createElement(o.k,null,m.a.createElement(o.t,null,m.a.createElement(o.K,{custom:!0,name:"gender",id:"gender"},m.a.createElement("option",null,"Age Group"),m.a.createElement("option",{value:"Male"},"0-16"),m.a.createElement("option",{value:"Female"},"16-25"),m.a.createElement("option",{value:"Female"},"26-34"),m.a.createElement("option",{value:"Female"},"35-44"),m.a.createElement("option",{value:"Female"},"45-60"),m.a.createElement("option",{value:"Female"},"61+")))),m.a.createElement(o.k,null,0==this.state.loading?m.a.createElement(o.d,{class:"btn btn-primary",onClick:function(){e.showGraph()}},m.a.createElement("span",{role:"status","aria-hidden":"true"}," Show Prediction ")):m.a.createElement(o.d,{class:"btn btn-primary",type:"button"},m.a.createElement("span",{class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),m.a.createElement("span",null," \xa0 Loading "))),m.a.createElement(o.k,null,m.a.createElement(o.d,{class:"btn btn-primary float-right",onClick:function(){e.setState({modal:!0})}},m.a.createElement("span",{role:"status","aria-hidden":"true"}," Show Analytics ")))))))))),m.a.createElement(m.a.Fragment,null,this.state.show?m.a.createElement(m.a.Fragment,null,m.a.createElement(o.J,null,m.a.createElement(o.k,{sm:"4"},m.a.createElement(o.f,null,m.a.createElement(o.g,null,m.a.createElement(g.a,{labels:["Red","Blue","Yellow","Green","Orange"],datasets:[{data:[.9,.6,.4,.35,.13],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(255, 159, 64, 0.6)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}],options:{legend:{display:!1},title:{display:!0,text:"Color Trends",fontSize:"14"},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{drawOnChartArea:!1},categoryPercentage:.9,barPercentage:.9}],xAxes:[{ticks:{beginAtZero:!0,max:1,min:0},gridLines:{drawOnChartArea:!1}}]}}})))),m.a.createElement(o.k,{sm:"4"},m.a.createElement(o.f,null,m.a.createElement(o.g,null,m.a.createElement(g.a,{labels:["High rise","Low rise","Mid rise"],datasets:[{data:[.9,.6,.4],backgroundColor:["rgba(0, 48, 143, 0.6)","rgba(114, 160, 193, 0.6)","rgba(137, 207, 240, 0.6)"],borderColor:["rgba(0, 48, 143, 1)","rgba(114, 160, 193, 1)","rgba(137, 207, 240, 1)"],borderWidth:1}],options:{legend:{display:!1},title:{display:!0,text:"Rise Type Trends",fontSize:"14"},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{drawOnChartArea:!1},categoryPercentage:.9,barPercentage:.9}],xAxes:[{ticks:{beginAtZero:!0,max:1,min:0},gridLines:{drawOnChartArea:!1}}]}}})))),m.a.createElement(o.k,{sm:"4"},m.a.createElement(o.f,null,m.a.createElement(o.g,null,m.a.createElement(g.a,{labels:["Straight loose","wide leg","Skinny"],datasets:[{data:[.6,.9,.4],backgroundColor:["rgba(0,100,0, 0.6)","rgba(34,139,34, 0.6)","rgba(50,205,50, 0.6)"],borderColor:["rgba(0,100,0, 1)","rgba(34,139,34, 1)","rgba(50,205,50, 1)"],borderWidth:1}],options:{legend:{display:!1},title:{display:!0,text:"Pant fit Trends",fontSize:"14"},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{drawOnChartArea:!1},categoryPercentage:.9,barPercentage:.9}],xAxes:[{ticks:{beginAtZero:!0,max:1,min:0},gridLines:{drawOnChartArea:!1}}]}}}))))),m.a.createElement(o.J,null,m.a.createElement(o.k,{sm:"4"},m.a.createElement(o.f,null,m.a.createElement(o.g,null,m.a.createElement(g.c,{datasets:[{backgroundColor:["rgba(0, 48, 143, 1)","rgba(114, 160, 193, 1)","rgba(137, 207, 240, 1)"],data:[30,20,50]}],labels:["Dark","Medium","Light"],options:{title:{display:!0,text:"Denim Wash Trends",fontSize:"14"},tooltips:{enabled:!0}}}))),m.a.createElement(o.f,null,m.a.createElement(o.g,null,m.a.createElement(g.a,{labels:["Performance sneakers","flat sandals","knee high boots","wedge sandals","flat shoes"],datasets:[{data:[.9,.6,.2,.35,.4],backgroundColor:["rgb(75,  0,  130, 0.6)","rgb(128,0,128, 0.6)","rgb(153,50,204, 0.6)","rgb(186,85,211, 0.6)","rgb(238,130,238, 0.6)"],borderColor:["rgb(75,  0,  130, 1)","rgb(128,0,128, 1)","rgb(153,50,204, 1)","rgb(186,85,211, 1)","rgb(238,130,238, 1)"],borderWidth:1}],options:{legend:{display:!1},title:{display:!0,text:"Footwear Trends",fontSize:"14"},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{drawOnChartArea:!1},categoryPercentage:.9,barPercentage:.9}],xAxes:[{ticks:{beginAtZero:!0,max:1,min:0},gridLines:{drawOnChartArea:!1}}]}}})))),m.a.createElement(o.k,{sm:"8"},m.a.createElement(o.f,null,m.a.createElement(o.g,null,m.a.createElement(g.c,{datasets:[{backgroundColor:["rgba(255, 99, 132, 1)","rgba(0, 48, 143, 1)","rgb(186,85,211, 1)","rgba(54, 162, 235, 1)","rgba(114, 160, 193, 1)","rgba(255, 206, 86, 1)","rgb(153,50,204, 1)","rgba(75, 192, 192, 1)","rgba(255, 159, 64, 1)","rgba(137, 207, 240, 1)","rgb(75,  0,  130, 1)"],data:[11,3,3,4,5,6,7,6,5,20,30]}],labels:["Sexy","Casual","Streetstyle","Modest","Minimalism","Business","Sporty","Bohemian","Sophisticated","Feminine","Fashion statement"],options:{title:{display:!0,text:"Style Trends",fontSize:"14"},tooltips:{enabled:!0}}})))))):""),m.a.createElement(o.F,{show:this.state.modal,onClose:function(){e.setState({modal:!1})},size:"lg"},m.a.createElement(o.H,null,"Clothes predictive Analysis"),m.a.createElement(o.G,null,m.a.createElement(o.J,null,m.a.createElement(o.k,{xs:"12",md:"6",xl:"6"},m.a.createElement(o.J,null,m.a.createElement(o.k,{sm:"6"},m.a.createElement(o.e,{color:"info"},m.a.createElement("small",{className:"text-muted"},"New Sales"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"9,123"))),m.a.createElement(o.k,{sm:"6"},m.a.createElement(o.e,{color:"danger"},m.a.createElement("small",{className:"text-muted"},"Recurring Sales"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"22,643")))),m.a.createElement("hr",{className:"mt-0"}),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"January")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"34"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"78"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"February")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"56"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"94"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"March")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"12"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"67"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"April")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"43"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"91"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"May")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"22"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"73"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"June")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"53"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"82"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"July")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"9"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"69"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"August")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"9"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"69"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"September")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"22"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"73"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"October")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"22"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"73"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"November")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"22"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"73"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"December")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"info",value:"22"}),m.a.createElement(o.I,{className:"progress-xs",color:"danger",value:"73"}))),m.a.createElement("div",{className:"legend text-center"},m.a.createElement("small",null,m.a.createElement("sup",{className:"px-1"},m.a.createElement(o.a,{shape:"pill",color:"info"},"\xa0")),"New clients \xa0",m.a.createElement("sup",{className:"px-1"},m.a.createElement(o.a,{shape:"pill",color:"danger"},"\xa0")),"Recurring clients"))),m.a.createElement(o.k,{xs:"12",md:"6",xl:"6"},m.a.createElement(o.J,null,m.a.createElement(o.k,{sm:"6"},m.a.createElement(o.e,{color:"primary"},m.a.createElement("small",{className:"text-muted"},"Sites Visited"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"78,623"))),m.a.createElement(o.k,{sm:"6"},m.a.createElement(o.e,{color:"success"},m.a.createElement("small",{className:"text-muted"},"Images analysed"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"49,123")))),m.a.createElement("hr",{className:"mt-0"}),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement(i.a,{className:"progress-group-icon",name:"cib-instagram"}),m.a.createElement("span",{className:"title"},"Instagram"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"191,235 ",m.a.createElement("span",{className:"text-muted small"},"(56%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"success",value:"56"}))),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement(i.a,{name:"cib-facebook",className:"progress-group-icon"}),m.a.createElement("span",{className:"title"},"Facebook"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"51,223 ",m.a.createElement("span",{className:"text-muted small"},"(15%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"success",value:"15"}))),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement(i.a,{name:"cib-twitter",className:"progress-group-icon"}),m.a.createElement("span",{className:"title"},"Twitter"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"37,564 ",m.a.createElement("span",{className:"text-muted small"},"(11%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"success",value:"11"}))),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement(i.a,{name:"cib-linkedin",className:"progress-group-icon"}),m.a.createElement("span",{className:"title"},"Chictopia.com"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"27,319 ",m.a.createElement("span",{className:"text-muted small"},"(8%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(o.I,{className:"progress-xs",color:"success",value:"8"}))),m.a.createElement("div",{className:"divider text-center"},m.a.createElement(o.d,{color:"link",size:"sm",className:"text-muted"},m.a.createElement(i.a,{name:"cil-options"}))))))))}}]),r}(c.Component);a.default=p}}]);
//# sourceMappingURL=10.e0b70bb1.chunk.js.map
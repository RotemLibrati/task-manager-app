(this["webpackJsonptask-manager-app"]=this["webpackJsonptask-manager-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(6),i=n.n(a),r=(n(12),n(7)),l=n(3),j=n(16),d=n(0),u=Object(s.createContext)(),o=function(t){var e=JSON.parse(localStorage.getItem("tasks")),n=Object(s.useState)([]),c=Object(l.a)(n,2),a=c[0],i=c[1],o=Object(s.useState)(e),b=Object(l.a)(o,2),O=b[0],f=b[1];Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]);return Object(d.jsx)(u.Provider,{value:{tasks:a,addTask:function(t){i([].concat(Object(r.a)(a),[{title:t,id:Object(j.a)()}]))},removeTask:function(t){i(a.filter((function(e){return e.id!==t})))},clearList:function(){i([])},findItem:function(t){var e=a.find((function(e){return e.id===t}));f(e)},editItem:O,editTask:function(t,e){var n=a.map((function(n){return n.id===e?{title:t,id:e}:n}));i(n),f(null)}},children:t.children})},b=function(t){var e=t.task,n=Object(s.useContext)(u),c=n.removeTask,a=n.findItem;return Object(d.jsxs)("li",{className:"list-item",children:[Object(d.jsx)("span",{children:e.title}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return c(e.id)},className:"btn-delete task-btn",children:Object(d.jsx)("i",{className:"fas fa-trash-alt"})}),Object(d.jsx)("button",{onClick:function(){return a(e.id)},className:"btn-edit task-btn",children:Object(d.jsx)("i",{className:"fas fa-pen"})})]})]})},O=function(){var t=Object(s.useContext)(u).tasks;return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"list",children:0===t.length?Object(d.jsx)("div",{className:"no-tasks",children:"No Tasks"}):t.map((function(t){return Object(d.jsx)(b,{task:t},t.id)}))})})},f=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(s.useContext)(u),i=a.addTask,r=a.clearList,j=a.editItem,o=a.editTask;return Object(s.useEffect)((function(){null!==j?(c(j.title),console.log(j)):c("")}),[j]),Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),j?o(n,j.id):(i(n),c(""))},children:[Object(d.jsx)("input",{type:"text",className:"task-input",placeholder:"Add Task",value:n,required:!0,onChange:function(t){c(t.target.value)}}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"submit",className:"btn add-task-btn",children:j?"Edit Task":"Add Task"}),Object(d.jsx)("button",{onClick:r,className:"btn clear-btn",children:"Clear"})]})]})},m=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:"Task Manager"})})},x=function(){return Object(d.jsx)(o,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(f,{}),Object(d.jsx)(O,{})]})]})})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fab2f452.chunk.js.map
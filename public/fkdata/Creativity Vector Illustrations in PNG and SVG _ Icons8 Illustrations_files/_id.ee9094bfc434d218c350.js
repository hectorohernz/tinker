(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{592:function(t,e,r){var content=r(601);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("73e5db72",content,!0,{sourceMap:!1})},600:function(t,e,r){"use strict";var o=r(592);r.n(o).a},601:function(t,e,r){(e=r(4)(!1)).push([t.i,"@-webkit-keyframes spin-data-v-ea442ada{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-ea442ada{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.category-page[data-v-ea442ada]{margin-top:24px}main[data-v-ea442ada]{width:100%;max-width:100%}",""]),t.exports=e},608:function(t,e,r){"use strict";r.r(e);r(24),r(23);var o=r(9),n=r(80),l=(r(50),{layout:"content",mixins:[n.a],name:"AuthorPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,l,c,data,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=t.app,n=t.store,l=t.error,c=n.state.i18n.locale,e.prev=2,e.next=5,o.$illustrationsRepository.index({page:1,per_page:30,author_id:r.id,locale:c});case 5:return data=e.sent,e.next=8,o.$tagsRepository.index({author_ids:r.id,locale:c});case 8:return d=e.sent,e.next=11,o.$usersRepository.show(r.id);case 11:return h=e.sent,n.dispatch("updateSEO",{title:o.$t("OUCH_V2.SEO.AUTHOR.TITLE",{author:h.name}),description:o.$t("OUCH_V2.SEO.AUTHOR.DESCRIPTION",{author:h.name}),image:"/vue-static/ouch/seo/opengraph.png"}),e.abrupt("return",{illustrations:data.illustrations,total:data.total,seoTags:d.tags,author:h});case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0),l({statusCode:500,message:"Whoops, something went wrong..."});case 20:case"end":return e.stop()}}),e,null,[[2,16]])})))()},data:function(){return{illustrations:[],seoTags:[],total:0,perPage:30,author:{}}},computed:{seoTitle:function(){return"Author: ".concat(this.author.name)}},methods:{fetch:function(){this.nextPage("illustrations",{author_id:this.author.id,per_page:this.perPage})}}}),c=(r(600),r(0)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-page container"},[r("ouch-seo-header",{attrs:{title:t.seoTitle,seoTags:t.seoTags}}),r("div",{staticClass:"content"},[t.illustrations.length?r("main",[r("ouch-illustrations-list",{attrs:{illustrations:t.illustrations,total:t.total}}),t.page*t.perPage<this.total||t.nextPageLoading?r("ouch-pagination",{attrs:{entity:"illustrations",page:t.page,perPage:t.perPage,loading:t.nextPageLoading},on:{nextPage:t.fetch}}):t._e()],1):t._e()])],1)}),[],!1,null,"ea442ada",null);e.default=component.exports}}]);
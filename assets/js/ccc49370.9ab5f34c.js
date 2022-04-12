"use strict";(self.webpackChunk_koora_site=self.webpackChunk_koora_site||[]).push([[103],{2352:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(1461),l=a(2784),r=a(6277),i=a(8073),o=a(9817),s="sidebar_PGAs",m="sidebarItemTitle_lS9L",c="sidebarItemList_oTwo",u="sidebarItem_QGIx",d="sidebarItemLink_nnrq",g="sidebarItemLinkActive__t32",v=a(1077);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];function b(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},7256:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(2784),l=a(6277),r=a(1077),i=a(9817),o=a(77),s=a(4862),m=a(958),c=a(1180),u=a(4058),d="blogPostTitle_b984",g="blogPostData_xth_",v="blogPostDetailsFull_vxQ3",p=a(4927),h="image_Kj4L";function b(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function E(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL,o=t.email,s=r||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(b,{href:s},n.createElement("img",{className:h,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_ofeZ",_="imageOnlyAuthorRow_tXBx",N="imageOnlyAuthorCol_hPdx";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?N:f),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,h=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,o.C)().withBaseUrl,E=e.children,f=e.frontMatter,_=e.assets,N=e.metadata,k=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,C=N.date,T=N.formattedDate,x=N.permalink,I=N.tags,y=N.readingTime,w=N.title,A=N.editUrl,M=N.authors,H=null!=(t=_.image)?t:f.image,B=!L&&k,U=I.length>0,R=L?"h1":"h2";return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(R,{className:d,itemProp:"headline"},L?w:n.createElement(i.Z,{itemProp:"url",to:x},w)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:C,itemProp:"datePublished"},T),void 0!==y&&n.createElement(n.Fragment,null," \xb7 ",h(y))),n.createElement(Z,{authors:M,assets:_})),H&&n.createElement("meta",{itemProp:"image",content:b(H,{absolute:!0})}),n.createElement("div",{id:L?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(c.Z,null,E)),(U||k)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",L&&v)},U&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},n.createElement(p.Z,{tags:I})),L&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:A})),B&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},n.createElement(i.Z,{to:N.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8564:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(2784),l=a(2352),r=a(7256),i=a(7896),o=a(1077),s=a(1636);function m(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,(0,i.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,(0,i.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var c=a(4862),u=a(480),d=a(6277);function g(e){var t,a=e.content,l=a.assets,r=a.metadata,i=r.title,o=r.description,s=r.date,m=r.tags,u=r.authors,d=r.frontMatter,g=d.keywords,v=null!=(t=l.image)?t:d.image;return n.createElement(c.d,{title:i,description:o,keywords:g,image:v},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function v(e){var t=e.content,a=e.sidebar,i=t.assets,o=t.metadata,s=o.nextItem,c=o.prevItem,d=o.frontMatter,g=d.hide_table_of_contents,v=d.toc_min_heading_level,p=d.toc_max_heading_level;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(u.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:p}):void 0},n.createElement(r.Z,{frontMatter:d,assets:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(s||c)&&n.createElement(m,{nextItem:s,prevItem:c}))}function p(e){return n.createElement(c.FG,{className:(0,d.Z)(c.kM.wrapper.blogPages,c.kM.page.blogPostPage)},n.createElement(g,e),n.createElement(v,e))}},4058:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(2784),l=a(1077),r=a(7896),i=a(1461),o=a(6277),s="iconEdit_xj76",m=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(4862);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1636:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(2784),l=a(9817);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},7969:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7896),l=a(1461),r=a(2784),i=a(4862),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,g=void 0===d?void 0:d,v=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,l.Z)(e,o),b=(0,i.LU)(),E=null!=v?v:b.tableOfContents.minHeadingLevel,f=null!=p?p:b.tableOfContents.maxHeadingLevel,_=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[u,g,E,f]);return(0,i.Si)(N),r.createElement(s,(0,n.Z)({toc:_,className:m,linkClassName:u},h))}},480:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7896),l=a(1461),r=a(2784),i=a(6277),o=a(7969),s="tableOfContents_EtLs",m=["className"];function c(e){var t=e.className,a=(0,l.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6233:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(2784),l=a(6277),r=a(9817),i="tag_YCD2",o="tagRegular_gQaq",s="tagWithCount_v9T4";function m(e){var t=e.permalink,a=e.name,m=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,m?s:o)},a,m&&n.createElement("span",null,m))}},4927:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(2784),l=a(6277),r=a(1077),i=a(6233),o="tags_oE6d",s="tag_uFUt";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);
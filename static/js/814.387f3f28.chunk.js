"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[814],{2940:function(n,A,r){r.d(A,{z:function(){return s}});var t,e=r(168),a=r(6444).ZP.button(t||(t=(0,e.Z)(["\n  border-radius: 6px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  :hover,\n  :focus {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  }\n"]))),i=r(184),s=function(n){var A=n.type,r=void 0===A?"button":A,t=n.onClick,e=n.text;return(0,i.jsx)(a,{type:r,onClick:t,children:e})}},1454:function(n,A,r){r.d(A,{a:function(){return u}});var t,e=r(8402),a=r(168),i=r(6444).ZP.div(t||(t=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n"]))),s=r(184),u=function(){return(0,s.jsx)(i,{children:(0,s.jsx)(e.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},4814:function(n,A,r){r.r(A),r.d(A,{default:function(){return B}});var t,e,a,i,s,u,o,c,p,l,d,f=r(5861),x=r(9439),v=r(7757),h=r.n(v),y=r(2791),g=r(7689),j=r(7596),m=r(8565),Z=r(1454),V=r(168),S=r(6444),U=r(1087),b=S.ZP.div(t||(t=(0,V.Z)(["\n  display: flex;\n  gap: 20px;\n  font-weight: 500;\n  padding: 30px;\n"]))),w=S.ZP.div(e||(e=(0,V.Z)(["\n  font-size: 18px;\n"]))),X=S.ZP.img(a||(a=(0,V.Z)(["\n  border-radius: 8px;\n"]))),q=S.ZP.p(i||(i=(0,V.Z)(["\n  text-align: justify;\n"]))),k=S.ZP.ul(s||(s=(0,V.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 40px;\n  margin: 0;\n  padding-left: 0;\n"]))),K=S.ZP.div(u||(u=(0,V.Z)(["\n  height: auto;\n  padding: 10px 30px;\n\n  border-bottom: 1px solid black;\n  border-top: 1px solid black;\n"]))),O=S.ZP.ul(o||(o=(0,V.Z)(["\n  display: flex;\n  margin-left: 0;\n  padding-left: 0;\n"]))),N=S.ZP.h2(c||(c=(0,V.Z)(["\n  text-transform: uppercase;\n  letter-spacing: 1.7;\n  margin-bottom: 20px;\n  font-size: 26px;\n  font-weight: 700px;\n  margin-top: 0;\n"]))),W=S.ZP.h3(p||(p=(0,V.Z)(["\n  text-transform: uppercase;\n  letter-spacing: 1.7;\n  margin: 0 0 10px 0;\n  font-size: 20px;\n  font-weight: 500px;\n"]))),F=S.ZP.li(l||(l=(0,V.Z)(["\n  list-style: none;\n  margin-right: 20px;\n"]))),Y=(0,S.ZP)(U.rU)(d||(d=(0,V.Z)(["\n  color: #0d253f;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 20px;\n  :hover,\n  :focus {\n    color: blue;\n  }\n  &.active {\n    color: blue;\n  }\n"]))),z=r(1553),L=r(184),D=function(n){var A=n.movie,r=(0,g.TH)(),t=A.poster_path,e=A.original_title,a=A.original_name,i=A.release_date,s=A.first_air_date,u=A.vote_average,o=A.genres,c=A.overview;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(b,{children:[(0,L.jsx)(X,{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):z,alt:e,width:"300"}),(0,L.jsxs)(w,{children:[(0,L.jsxs)(N,{children:[null!==e&&void 0!==e?e:a," (",(0,L.jsx)("span",{children:parseInt(null!==i&&void 0!==i?i:s)}),")"]}),(0,L.jsxs)(q,{children:["User Score: ","".concat(Math.round(10*u),"%")]}),(0,L.jsx)(W,{children:"Overview"}),(0,L.jsx)(q,{children:c}),(0,L.jsx)(W,{children:"Genres"}),(0,L.jsx)(O,{children:o.map((function(n,A){return(0,L.jsx)(F,{children:n.name},A)}))})]})]}),(0,L.jsxs)(K,{children:[(0,L.jsx)(W,{children:"Additional Information"}),(0,L.jsxs)(k,{children:[(0,L.jsxs)("li",{children:[(0,L.jsx)(Y,{to:"cast",state:r.state,children:"Cast"})," "]}),(0,L.jsxs)("li",{children:[(0,L.jsx)(Y,{to:"reviews",state:r.state,children:"Reviews"})," "]})]})]})]})},P=r(2940),B=function(){var n,A,r=(0,y.useState)({}),t=(0,x.Z)(r,2),e=t[0],a=t[1],i=(0,y.useState)(!1),s=(0,x.Z)(i,2),u=s[0],o=s[1],c=(0,g.UO)().id,p=(0,g.TH)(),l=(0,g.s0)(),d=null!==(n=null===(A=p.state)||void 0===A?void 0:A.from)&&void 0!==n?n:"/";return(0,y.useEffect)((function(){var n=function(){var n=(0,f.Z)(h().mark((function n(){var A;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,(0,m.TP)(c);case 4:A=n.sent,a(A),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),j.Am.error("Sorry, there was an error, please try again later");case 11:return n.prev=11,o(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[c]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(P.z,{text:"Go back",onClick:function(){return l(d)}}),u&&(0,L.jsx)(Z.a,{}),e.title&&(0,L.jsx)(D,{movie:e}),(0,L.jsx)(g.j3,{})]})}},8565:function(n,A,r){r.d(A,{Hg:function(){return u},TP:function(){return l},V0:function(){return c},tx:function(){return v},zv:function(){return f}});var t=r(5861),e=r(7757),a=r.n(e),i=r(1243),s="6e14e7f7adc702d050e16bca3452efd9";function u(n){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(a().mark((function n(A){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("trending/movie/day",{params:{api_key:s,page:A}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(n,A){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function n(A,r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("search/movie",{params:{api_key:s,query:A,page:r}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(A){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(A),{params:{api_key:s}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function n(A){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(A,"/credits"),{params:{api_key:s}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function n(A){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(A,"/reviews"),{params:{api_key:s}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"},1553:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREBUQEBIWFRUVFhAXFhUWFRUQFxcVFxUWFxUXFRYYHSggGBolGxUXIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFSsZFR0tKysrLTcrNzcrNysrKy0rLTcrKystKy0rLSstKy03LS0rKystKysrKysrKysrKysrK//AABEIAPYAzQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADgQAAIBAgQDBgMGBwADAAAAAAABAgMRBBIhMQVBURMiYXGBkQYy0VKhscHh8BQjM0JicpKCovH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APqAANsgAAAAAAAAAAAAAAAAMZltcyAAAAAAAAAAAAAAAAAAAAAAAAAAAAG0YN7FTxjF16ekabivt/MvS23qFXFOk39SLxbh9acf5M7afL8rflLkecwnF69Pad091LvL9PQvsB8R05WVVZH13j9USjzOIw9Wm+/GUX1d9/B7MuOD8TcrU6m/KXXwZ6VOFSP9sovykih4xwzDU++punLdRXfu/CO697AWQIvD8S6lOMnu739HYlFQAAAAAAAAAAAAAAAAAAAA4wxlHPklUSf3eV9kB1lJJXeiXXQqcZxuMdKaUn1e36npIQi1pZp+Uk/qVeM+HqM9Y3g/8fl9n+ViVWvD/iCjLSa7N+OsX68vUuIyjJaNNPpZo8ZjeDVqWrWaP2o3fuuRFwuKqU3enJx62ej81swPVY3gFGo7pOD/AMbW9Y/SxQcR4NUopydpRX9y090TIfFEstnTTl1u1H1X6kKSr4l5py7vLkl/rECDh8ROEr024vbTd+FifS4bObzVZPXV85P6FjhMDGHyrXq9yZGmWDXDUlCKjFWSJBrsbNNWb57BAAAAAAAAAAAAAAANoQb2A1OlOi34FHxjF1oPLkcF9re/k1oQ8DxetS0Us0fsy1+/dBXpcdw11I5Y1JQfhqn58zy+O4TVpayjeP2lqvXp6noMH8QUp6TTg+r1j7/Ut4STV0011TuQeEweNqUnenJrw3T9C9wvxJF6VYNf5R1XtyJHGcNhbZqrUH1jpJ+i+Y8jJuUstO7XLSza8uQHssZxyhTjdSzt7KO/r0PMYqtUxM7qCXLRJJeb5nbB8I51P+V+bLilTSSSWnJIQV+D4VGOsu8/uX1LOMDhicbTp6SevRav9CZwefaw7RxsrtRu90t2/X8CjDsk3ySbb5JLe5WYnjkFpBOb/wCV95N+KcTkoqmt5u1v8Vq/vsvUo/h/B9pWjdd2Pefpsvf8CUewwtG0VmSzWWbz5pHnfiLiDVeCi/6er6Znuvay9T0uIrKEXOW0U2zwNSUpycpayk7vzYHrqVRSSktmro3OGFjCMYwi72ir9M3O3XU7lAABAAAAAAAAA71KuRKMY3fN3svU4Gmdtu+9166DVdf43lUgrdV3l6pojYvglGqs1N5X/jZx9Y8vQRnK9r3WuuXK14ePn4GcrTzQeV9Vs/NEFHjuE1aSzSScftJ3909SDS4lUp/05Sj66e2xYcWoYipO9Say8uUV6ClQoUdW05f9P0S2AiUcFVrPPUbV+b1b8lyLihh6dKOlorq+fm2W+GwMbJyu3ZO3TwPLcexPaVmovux7semm7Xrf2AuOH14VamSN3ZNtray/VlpiJxo05Tt8qb83yXuV/wAL4TJS7R7zf/qrpfm/U4/FeJ0jSXN5n5K6S97v0A83GEpytvKT923+p7/C0FThGnHaKS+rPK/D9KPa9pNpKC585PRW+/7i9xHEbpqmutpPS3ilu/uA87x7EdpXl0j3V6bv3uWXw/UhSpuTu5Sey1eVbX5LW/PoR6PD4R37z8dvYlRjYDrjq8q0XBrLF2vbVuzulfZaojUsPCO0V58/fc6gDMXZ3JqZBO+GqX06DB3ABUAAAAAAAADlPSSfXT1Wq/M6nPELu6brVemoVi4uauWl9fSyfpfmaxk923yteydursQbzlZXabXVWaXg1uQqvD4ZlOKSkmn4O2uqGIxtKLu7N9Ers6Um6kM03GEJJpJ6za20SAn4jiKWGdZaNppf7bfj+B5LDYdzmoLeT3/Fv8S74lDPGFKmstOHXdvZWXk3v1OVDAwjru+r+gF28bSppQh3sqslHVaeOxR4nCurUlUqPfaK5LkrkpIXA50qEY/Kkv31OhgWAzcxcGAM3NWYuYYG2Y2pzs7nMygLJMHHDTurdDsVAAAAAAAAAAAV2NU6cG4NNK1r/wBqvr5oq7163N2/5ieknG6sRCKrqPC0vmfotF7k2FNR2VjoYASlcwDAG0U27IsoUVFWjlvfVyt9xWRk001yLKpCD85q66X/ACA3dKLb/lqy2a3b9DhWpU4pZlKN/W3mQozsyZhYt2c3pfuxfN9QIuKpZJZfZ+BxsTse/lzfMlrYhtAagyANWjBsasDpRnZk8rES8BUcqcW+iKJAACAAAAAAAABGrKzJJyxC0uFcDVsyYZAMGGzGYDOYn4Ko3BxUknF3u+nMr0dKNRxd1/8AV0YEqrQj2l20ovvefgvUk16mVXaTd+4uisR3iYtJOG21nocak3J3YHNtt3YZtYwBo0anRnCvXjD5nbw5+wGxrJ21ZAq8Sk3anH1ev3Cnw2tV1qNpeP02QDE4rO+zp6t6OS5LnYvsPTyxUeiSI2B4dCltq+pNKAACAAAAAAAABiS0MgCF5ms2b4hWZxIrDZlGDKAyjZGqNgOsEGcZ14x+ZpEOpxK+lON31f0AsmyHX4jCOi7z8PqcI4KtV+d6dOXsT8NwyEeV2UVrq16ukVlXhp953w/BVvN3LiMUtjIHGjhYQ+VI7ABAAAAAAAAAAAAAAAAHDF7XIhYVIKScXsymrKrS0cc8eTv3vXr5hUgXK2XEZvSMLPxu/uNqeArVdZvT98tiDvV4hCO3efht7nJVq1T5VlX75ljhuEwjq9WToQS2RYKmhwhvWbuWNHCwjsjuAgAAAAAAAAAAAAAAAAAAAAAAAAYaMgDTsY9DcAAAAAAAAAAAAAAAAAAAAAAAAAAAABD4ljHSSaSd3bXTkTCr4/8ALH/b8guNp8Qqw1qUrR6p3LCnNSSktnqisxMsRVi4dmoJ2u2+jua1YNzhhlJqKiszWl9wLcFRVg6FSGWTcZOzTd+hjicv5qVRyVO2mXqBbzlZN9E2csJiFUjnimldrXwISw9OVF5JyaV3vrdLZ+Bz4NhU4qpmd05aX09gLcHn/wCIhUlJ1ZT37qjeyR1w9eTw9RNvu7N6OzBF2cMbX7ODmle1tPUicNwzajVlNt20XJLY68Y/oy/8fxQG/D8Yqsb7Nbr98jEcW+2dK2iV789k/wAyuyOkqdeOzjBTXojvRmpYpyWzgmv+UBagqZJ1q0oOTUIck7Xe31FJOnW7HM3GcXa71Wj+gE+nik6jpWd479OX1O5RUcEnXnDNKyW99dlu/UvIRskuiS9gMgAIAAAAAAAAEHiuFlUjFRto7u7sTgAZBxuEm5qrTtmWjT5onAKrY4arUnGdWyUdorXXc74mVe7UIxlHxfvdEsAQMBgnCElJq873tsjnw+jWp2g1Fwvq762LMAVkMNWpSl2VpRk72eljtUp1Z0pxmoqT2SfLTdk0AcMFScKcYvdLXma8QoudNxju7b6cySAONGj/ACowkv7UmvSzIOB4fOnVzaONpJO+uu2haACurYapGo6tKzzbxZnC4WbqdrVte1kly/f5lgAKythqsazqU0nmWzfgvoWNO9lm3sr268zYAAAEAAAAAAAAAAAIc+IRVXsrdFfld8iTWqqMXJ7JNnn8sXSlUcl2jlmSur2/bYV6MEKpUlUoZ4NqVr6dVuvxI88e/wCGUk+8+7fx5v2AtQQKqcaUc9Vwf90t278l++RDoYvLVio1XOMmk009Lu3MCyVSp2uXL3LfN4nPB4qU6lSLStF6W83v7Gka0v4pxu8uW9uWyOfDP61bz/NgWhwxtZwpykrXXXzKrEVEr2xMnJX0Sdr9OhIqV3PCuT3tZ+NnYCdg6rnCMnu0nocuJYl04Zo2vdLUg0sNU7FTjVaajdR5WXIxjMQ6mGUnvmSfmrgXFN3SfVJmxV8QxbiqcFLLmSvLey0Rxo4rJVio1XUjLR35MEXQACAAAAAAAAAAAAACDxanOcVCCvd6vol+v4G64bRtbIvPUlgKgcLozp5oSXdu3F9eX0IsOHz7WzX8tScltb98i5AKr+L4ecskorNlbbj12+hwqUqs6lOfZ5VGUeavZSTuy3AFfGhL+Jc7d3La/ojGEw01Os2rKV7P1ZYgClw9GrGEqXZK7v3na2v4nanhprDOGXva6afauWgAqU68aapKnyspJ6W8fEzicDJYdU4q7um7eN77lqAK3HYSbyTgk5RSvF8zahUm5JOgo9Xpp5FgAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"}}]);
//# sourceMappingURL=814.387f3f28.chunk.js.map
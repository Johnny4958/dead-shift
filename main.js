var am=0,$f=1,lm=2;var cp=1,cm=2,zi=3,gs=0,gn=1,an=2,fs=0,ds=1,xn=2,Kf=3,Jf=4,hm=5,zs=100,um=101,fm=102,dm=103,pm=104,mm=200,gm=201,xm=202,ym=203,hh=204,uh=205,_m=206,vm=207,Mm=208,bm=209,Em=210,Sm=211,wm=212,Tm=213,Am=214,fh=0,dh=1,ph=2,Pr=3,mh=4,gh=5,xh=6,yh=7,hp=0,Rm=1,Cm=2,ps=0,Pm=1,Im=2,Lm=3,Du=4,Dm=5,Um=6,Nm=7,jf="attached",Om="detached",up=300,Ir=301,Lr=302,_h=303,vh=304,Ll=306,Lo=1e3,Gs=1001,Mh=1002,Gn=1003,km=1004;var ma=1005;var fi=1006,wc=1007;var Vs=1008;var Vi=1009,fp=1010,dp=1011,Do=1012,Uu=1013,Ws=1014,di=1015,qo=1016,Nu=1017,Ou=1018,Dr=1020,pp=35902,mp=1021,gp=1022,ni=1023,xp=1024,yp=1025,Ar=1026,Ur=1027,ku=1028,Fu=1029,_p=1030,Bu=1031;var zu=1033,Ya=33776,Za=33777,$a=33778,Ka=33779,bh=35840,Eh=35841,Sh=35842,wh=35843,Th=36196,Ah=37492,Rh=37496,Ch=37808,Ph=37809,Ih=37810,Lh=37811,Dh=37812,Uh=37813,Nh=37814,Oh=37815,kh=37816,Fh=37817,Bh=37818,zh=37819,Hh=37820,Gh=37821,Ja=36492,Vh=36494,Wh=36495,vp=36283,Xh=36284,qh=36285,Yh=36286;var Qa=2300,Zh=2301,Tc=2302,Qf=2400,ed=2401,td=2402;var Fm=3200,Bm=3201;var Mp=0,zm=1,hs="",Hn="srgb",vs="srgb-linear",Hu="display-p3",Dl="display-p3-linear",el="linear",qt="srgb",tl="rec709",nl="p3";var or=7680;var nd=519,Hm=512,Gm=513,Vm=514,bp=515,Wm=516,Xm=517,qm=518,Ym=519,$h=35044;var id="300 es",Gi=2e3,il=2001,xs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ac=Math.PI/180,sl=180/Math.PI;function bi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function Zm(n,e){return(n%e+e)%e}function Rc(n,e,t){return(1-t)*n+t*e}function Mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var _e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],p=s[3],m=s[6],b=s[1],M=s[4],E=s[7],U=s[2],C=s[5],P=s[8];return r[0]=o*x+a*b+l*U,r[3]=o*p+a*M+l*C,r[6]=o*m+a*E+l*P,r[1]=c*x+h*b+u*U,r[4]=c*p+h*M+u*C,r[7]=c*m+h*E+u*P,r[2]=f*x+d*b+g*U,r[5]=f*p+d*M+g*C,r[8]=f*m+d*E+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new ct;function Ep(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $m(){let n=rl("canvas");return n.style.display="block",n}var sd={};function ja(n){n in sd||(sd[n]=!0,console.warn(n))}function Km(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Jm(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jm(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var rd=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),od=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[vs]:{transfer:el,primaries:tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Hn]:{transfer:qt,primaries:tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Dl]:{transfer:el,primaries:nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(od),fromReference:n=>n.applyMatrix3(rd)},[Hu]:{transfer:qt,primaries:nl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(od),fromReference:n=>n.applyMatrix3(rd).convertLinearToSRGB()}},Qm=new Set([vs,Dl]),Ct={enabled:!0,_workingColorSpace:vs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=xo[e].toReference,s=xo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xo[n].primaries},getTransfer:function(n){return n===hs?el:xo[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(xo[e].luminanceCoefficients)}};function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ar,Kh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=rl("canvas")),ar.width=e.width,ar.height=e.height;let i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,ol=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ic(s[o].image)):r.push(Ic(s[o]))}else r=Ic(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ic(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tg=0,Vn=class n extends xs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gs,s=Gs,r=fi,o=Vs,a=ni,l=Vi,c=n.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=bi(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case Gs:e.x=e.x<0?0:1;break;case Mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case Gs:e.y=e.y<0?0:1;break;case Mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=up;Vn.DEFAULT_ANISOTROPY=1;var wt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,E=(d+1)/2,U=(m+1)/2,C=(h+f)/4,P=(u+x)/4,N=(g+p)/4;return M>E&&M>U?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=P/i):E>U?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=N/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=P/r,s=N/r),this.set(i,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jh=class extends xs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends Jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},al=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jh=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*x,b=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let U=Math.sqrt(M),C=Math.atan2(U,m*b);p=Math.sin(p*C)/U,a=Math.sin(a*C)/U}let E=a*b;if(l=l*p+f*E,c=c*p+d*E,h=h*p+g*E,u=u*p+x*E,p===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new D,ad=new Cn,Ei=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),xa.subVectors(this.max,yo),lr.subVectors(e.a,yo),cr.subVectors(e.b,yo),hr.subVectors(e.c,yo),ss.subVectors(cr,lr),rs.subVectors(hr,cr),Ds.subVectors(lr,hr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ds.z,Ds.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ds.z,0,-Ds.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ds.y,Ds.x,0];return!Dc(t,lr,cr,hr,xa)||(t=[1,0,0,0,1,0,0,0,1],!Dc(t,lr,cr,hr,xa))?!1:(ya.crossVectors(ss,rs),t=[ya.x,ya.y,ya.z],Dc(t,lr,cr,hr,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ni=[new D,new D,new D,new D,new D,new D,new D,new D],ci=new D,ga=new Ei,lr=new D,cr=new D,hr=new D,ss=new D,rs=new D,Ds=new D,yo=new D,xa=new D,ya=new D,Us=new D;function Dc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Us.fromArray(n,r);let a=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=i.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ng=new Ei,_o=new D,Uc=new D,ii=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ng.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);let t=_o.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_o,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Uc)),this.expandByPoint(_o.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Oi=new D,Nc=new D,_a=new D,os=new D,Oc=new D,va=new D,kc=new D,Uo=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nc.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=os.dot(this.direction),l=-os.dot(_a),c=os.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nc).addScaledVector(_a,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let i=Oi.dot(this.direction),s=Oi.dot(Oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,s,r){Oc.subVectors(t,e),va.subVectors(i,e),kc.crossVectors(Oc,va);let o=this.direction.dot(kc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);let l=a*this.direction.dot(va.crossVectors(os,va));if(l<0)return null;let c=a*this.direction.dot(Oc.cross(os));if(c<0||l+c>o)return null;let h=-a*os.dot(kc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,x,p)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,sg)}lookAt(e,t,i){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),as.crossVectors(i,Kn),as.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),as.crossVectors(i,Kn)),as.normalize(),Ma.crossVectors(Kn,as),s[0]=as.x,s[4]=Ma.x,s[8]=Kn.x,s[1]=as.y,s[5]=Ma.y,s[9]=Kn.y,s[2]=as.z,s[6]=Ma.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],b=i[3],M=i[7],E=i[11],U=i[15],C=s[0],P=s[4],N=s[8],X=s[12],v=s[1],S=s[5],G=s[9],z=s[13],K=s[2],le=s[6],$=s[10],pe=s[14],ie=s[3],ve=s[7],me=s[11],we=s[15];return r[0]=o*C+a*v+l*K+c*ie,r[4]=o*P+a*S+l*le+c*ve,r[8]=o*N+a*G+l*$+c*me,r[12]=o*X+a*z+l*pe+c*we,r[1]=h*C+u*v+f*K+d*ie,r[5]=h*P+u*S+f*le+d*ve,r[9]=h*N+u*G+f*$+d*me,r[13]=h*X+u*z+f*pe+d*we,r[2]=g*C+x*v+p*K+m*ie,r[6]=g*P+x*S+p*le+m*ve,r[10]=g*N+x*G+p*$+m*me,r[14]=g*X+x*z+p*pe+m*we,r[3]=b*C+M*v+E*K+U*ie,r[7]=b*P+M*S+E*le+U*ve,r[11]=b*N+M*G+E*$+U*me,r[15]=b*X+M*z+E*pe+U*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],b=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,M=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,E=h*x*c-g*u*c+g*a*d-o*x*d-h*a*m+o*u*m,U=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,C=t*b+i*M+s*E+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return e[0]=b*P,e[1]=(x*f*r-u*p*r-x*s*d+i*p*d+u*s*m-i*f*m)*P,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*P,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=M*P,e[5]=(h*p*r-g*f*r+g*s*d-t*p*d-h*s*m+t*f*m)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=E*P,e[9]=(g*u*r-h*x*r-g*i*d+t*x*d+h*i*m-t*u*m)*P,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*m+t*a*m)*P,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*P,e[12]=U*P,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*p+t*u*p)*P,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*p-t*a*p)*P,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,b=l*c,M=l*h,E=l*u,U=i.x,C=i.y,P=i.z;return s[0]=(1-(x+m))*U,s[1]=(d+E)*U,s[2]=(g-M)*U,s[3]=0,s[4]=(d-E)*C,s[5]=(1-(f+m))*C,s[6]=(p+b)*C,s[7]=0,s[8]=(g+M)*P,s[9]=(p-b)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),a=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);let c=1/r,h=1/o,u=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,t.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Gi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===Gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===il)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Gi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,d=(i+s)*h,g,x;if(a===Gi)g=(o+r)*u,x=-2*u;else if(a===il)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ur=new D,hi=new $e,ig=new D(0,0,0),sg=new D(1,1,1),as=new D,Ma=new D,Kn=new D,ld=new $e,cd=new Cn,yn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var ll=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rg=0,hd=new D,fr=new Cn,ki=new $e,ba=new D,vo=new D,og=new D,ag=new Cn,ud=new D(1,0,0),fd=new D(0,1,0),dd=new D(0,0,1),pd={type:"added"},lg={type:"removed"},dr={type:"childadded",child:null},Fc={type:"childremoved",child:null},Yt=class n extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new yn,i=new Cn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new ct}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(vo,ba,this.up):ki.lookAt(ba,vo,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(ki),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new D(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new D,Fi=new D,Bc=new D,Bi=new D,pr=new D,mr=new D,md=new D,zc=new D,Hc=new D,Gc=new D,Vc=new wt,Wc=new wt,Xc=new wt,us=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ui.subVectors(e,t),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ui.subVectors(s,t),Fi.subVectors(i,t),Bc.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Fi),l=ui.dot(Bc),c=Fi.dot(Fi),h=Fi.dot(Bc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Vc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Wc,r.y),o.addScaledVector(Xc,r.z),o}static isFrontFacing(e,t,i,s){return ui.subVectors(i,t),Fi.subVectors(e,t),ui.cross(Fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ui.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;pr.subVectors(s,i),mr.subVectors(r,i),zc.subVectors(e,i);let l=pr.dot(zc),c=mr.dot(zc);if(l<=0&&c<=0)return t.copy(i);Hc.subVectors(e,s);let h=pr.dot(Hc),u=mr.dot(Hc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(pr,o);Gc.subVectors(e,r);let d=pr.dot(Gc),g=mr.dot(Gc);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(mr,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return md.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(md,a);let m=1/(p+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function qc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=Zm(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qc(o,r,e+1/3),this.g=qc(o,r,e),this.b=qc(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){let i=Sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Ct.fromWorkingColorSpace(Rn.copy(this),e),Math.round(wn(Rn.r*255,0,255))*65536+Math.round(wn(Rn.g*255,0,255))*256+Math.round(wn(Rn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Rn.copy(this),t);let i=Rn.r,s=Rn.g,r=Rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Hn){Ct.fromWorkingColorSpace(Rn.copy(this),e);let t=Rn.r,i=Rn.g,s=Rn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Ea);let i=Rc(ls.h,Ea.h,t),s=Rc(ls.s,Ea.s,t),r=Rc(ls.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Je;Je.NAMES=Sp;var cg=0,Xi=class extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ds,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hh&&(i.blendSrc=this.blendSrc),this.blendDst!==uh&&(i.blendDst=this.blendDst),this.blendEquation!==zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ut=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var on=new D,Sa=new _e,Pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$h,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$h&&(e.usage=this.usage),e}};var Nr=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var cl=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},hg=0,ti=new $e,Yc=new Yt,gr=new D,Jn=new Ei,Mo=new Ei,pn=new D,Bt=class n extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?cl:Nr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Jn.min,Mo.min),Jn.expandByPoint(pn),pn.addVectors(Jn.max,Mo.max),Jn.expandByPoint(pn)):(Jn.expandByPoint(Mo.min),Jn.expandByPoint(Mo.max))}Jn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pn.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(e,c),pn.add(gr)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new D,l[N]=new D;let c=new D,h=new D,u=new D,f=new _e,d=new _e,g=new _e,x=new D,p=new D;function m(N,X,v){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,X),u.fromBufferAttribute(i,v),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,X),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(S),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(S),a[N].add(x),a[X].add(x),a[v].add(x),l[N].add(p),l[X].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,X=b.length;N<X;++N){let v=b[N],S=v.start,G=v.count;for(let z=S,K=S+G;z<K;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new D,E=new D,U=new D,C=new D;function P(N){U.fromBufferAttribute(s,N),C.copy(U);let X=a[N];M.copy(X),M.sub(U.multiplyScalar(U.dot(X))).normalize(),E.crossVectors(C,X);let S=E.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,S)}for(let N=0,X=b.length;N<X;++N){let v=b[N],S=v.start,G=v.count;for(let z=S,K=S+G;z<K;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gd=new $e,Ns=new Uo,wa=new ii,xd=new D,Ta=new D,Aa=new D,Ra=new D,Zc=new D,Ca=new D,yd=new D,Pa=new D,J=class extends Yt{constructor(e=new Bt,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Zc.fromBufferAttribute(u,e),o?Ca.addScaledVector(Zc,h):Ca.addScaledVector(Zc.sub(t),h))}t.add(Ca)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(wa.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(wa,xd)===null||Ns.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(gd.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(gd),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=b,U=M;E<U;E+=3){let C=a.getX(E),P=a.getX(E+1),N=a.getX(E+2);s=Ia(this,m,e,i,c,h,u,C,P,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=a.getX(p),M=a.getX(p+1),E=a.getX(p+2);s=Ia(this,o,e,i,c,h,u,b,M,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=b,U=M;E<U;E+=3){let C=E,P=E+1,N=E+2;s=Ia(this,m,e,i,c,h,u,C,P,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=p,M=p+1,E=p+2;s=Ia(this,o,e,i,c,h,u,b,M,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ug(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gs,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:n}}function Ia(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ta),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ra);let h=ug(n,e,t,i,Ta,Aa,Ra,yd);if(h){let u=new D;us.getBarycoord(yd,Ta,Aa,Ra,u),s&&(h.uv=us.getInterpolatedAttribute(s,a,l,c,u,new _e)),r&&(h.uv1=us.getInterpolatedAttribute(r,a,l,c,u,new _e)),o&&(h.normal=us.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};us.getNormal(Ta,Aa,Ra,f.normal),h.face=f,h.barycoord=u}return h}var Un=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function g(x,p,m,b,M,E,U,C,P,N,X){let v=E/P,S=U/N,G=E/2,z=U/2,K=C/2,le=P+1,$=N+1,pe=0,ie=0,ve=new D;for(let me=0;me<$;me++){let we=me*S-z;for(let Ke=0;Ke<le;Ke++){let rt=Ke*v-G;ve[x]=rt*b,ve[p]=we*M,ve[m]=K,c.push(ve.x,ve.y,ve.z),ve[x]=0,ve[p]=0,ve[m]=C>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(Ke/P),u.push(1-me/N),pe+=1}}for(let me=0;me<N;me++)for(let we=0;we<P;we++){let Ke=f+we+le*me,rt=f+we+le*(me+1),oe=f+(we+1)+le*(me+1),ge=f+(we+1)+le*me;l.push(Ke,rt,ge),l.push(rt,oe,ge),ie+=6}a.addGroup(d,ie,X),d+=ie,f+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=Or(n[t]);for(let s in i)e[s]=i[s]}return e}function fg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var dg={clone:Or,merge:Dn},pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},hl=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cs=new D,_d=new _e,vd=new _e,mn=class extends hl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,_d,vd),t.subVectors(vd,_d)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xr=-90,yr=1,Qh=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(xr,yr,e,t);s.layers=this.layers,this.add(s);let r=new mn(xr,yr,e,t);r.layers=this.layers,this.add(r);let o=new mn(xr,yr,e,t);o.layers=this.layers,this.add(o);let a=new mn(xr,yr,e,t);a.layers=this.layers,this.add(a);let l=new mn(xr,yr,e,t);l.layers=this.layers,this.add(l);let c=new mn(xr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ul=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eu=class extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ul(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Un(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:fs});r.uniforms.tEquirect.value=t;let o=new J(s,r),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=fi),new Qh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},$c=new D,gg=new D,xg=new ct,Hi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=$c.subVectors(i,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta($c),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||xg.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new ii,La=new D,No=class{constructor(e=new Hi,t=new Hi,i=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],b=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,p-d,E-m).normalize(),i[1].setComponents(l+r,f+c,p+d,E+m).normalize(),i[2].setComponents(l+o,f+h,p+g,E+b).normalize(),i[3].setComponents(l-o,f-h,p-g,E-b).normalize(),i[4].setComponents(l-a,f-u,p-x,E-M).normalize(),t===Gi)i[5].setComponents(l+a,f+u,p+x,E+M).normalize();else if(t===il)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(La.x=s.normal.x>0?e.max.x:e.min.x,La.y=s.normal.y>0?e.max.y:e.min.y,La.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yg(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zt=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let b=m*f-o;for(let M=0;M<c;M++){let E=M*u-r;g.push(E,-b,0),x.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let M=b+c*m,E=b+c*(m+1),U=b+1+c*(m+1),C=b+1+c*m;d.push(M,E,C),d.push(E,U,C)}this.setIndex(d),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},_g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:_g,alphahash_pars_fragment:vg,alphamap_fragment:Mg,alphamap_pars_fragment:bg,alphatest_fragment:Eg,alphatest_pars_fragment:Sg,aomap_fragment:wg,aomap_pars_fragment:Tg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Og,clipping_planes_vertex:kg,color_fragment:Fg,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:Hg,common:Gg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:Zg,colorspace_fragment:$g,colorspace_pars_fragment:Kg,envmap_fragment:Jg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Qg,envmap_pars_vertex:e1,envmap_physical_pars_fragment:u1,envmap_vertex:t1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:s1,fog_pars_fragment:r1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:a1,lights_lambert_fragment:l1,lights_lambert_pars_fragment:c1,lights_pars_begin:h1,lights_toon_fragment:f1,lights_toon_pars_fragment:d1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:x1,lights_fragment_begin:y1,lights_fragment_maps:_1,lights_fragment_end:v1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:S1,map_fragment:w1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:R1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:P1,morphinstance_vertex:I1,morphcolor_vertex:L1,morphnormal_vertex:D1,morphtarget_pars_vertex:U1,morphtarget_vertex:N1,normal_fragment_begin:O1,normal_fragment_maps:k1,normal_pars_fragment:F1,normal_pars_vertex:B1,normal_vertex:z1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:X1,opaque_fragment:q1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:$1,dithering_fragment:K1,dithering_pars_fragment:J1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:hx,tonemapping_pars_fragment:ux,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:xx,background_vert:yx,background_frag:_x,backgroundCube_vert:vx,backgroundCube_frag:Mx,cube_vert:bx,cube_frag:Ex,depth_vert:Sx,depth_frag:wx,distanceRGBA_vert:Tx,distanceRGBA_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Ix,meshbasic_vert:Lx,meshbasic_frag:Dx,meshlambert_vert:Ux,meshlambert_frag:Nx,meshmatcap_vert:Ox,meshmatcap_frag:kx,meshnormal_vert:Fx,meshnormal_frag:Bx,meshphong_vert:zx,meshphong_frag:Hx,meshphysical_vert:Gx,meshphysical_frag:Vx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:Zx,shadow_frag:$x,sprite_vert:Kx,sprite_frag:Jx},Ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},vi={basic:{uniforms:Dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Dn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Dn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Dn([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Dn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Dn([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Dn([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Dn([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Dn([Ce.lights,Ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};vi.physical={uniforms:Dn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Da={r:0,b:0,g:0},ks=new yn,jx=new $e;function Qx(n,e,t,i,s,r,o){let a=new Je(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1,E=g(b);E===null?m(a,l):E&&E.isColor&&(m(E,1),M=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,M){let E=g(M);E&&(E.isCubeTexture||E.mapping===Ll)?(h===void 0&&(h=new J(new Un(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Or(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ks.copy(M.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(ks)),h.material.toneMapped=Ct.getTransfer(E.colorSpace)!==qt,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new J(new zt(2,2),new Si({name:"BackgroundMaterial",uniforms:Or(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(E.colorSpace)!==qt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(Da,wp(n)),i.buffers.color.setClear(Da.r,Da.g,Da.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p}}function ey(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(v,S,G,z,K){let le=!1,$=u(z,G,S);r!==$&&(r=$,c(r.object)),le=d(v,z,G,K),le&&g(v,z,G,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,E(v,S,G,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,S,G){let z=G.wireframe===!0,K=i[v.id];K===void 0&&(K={},i[v.id]=K);let le=K[S.id];le===void 0&&(le={},K[S.id]=le);let $=le[z];return $===void 0&&($=f(l()),le[z]=$),$}function f(v){let S=[],G=[],z=[];for(let K=0;K<t;K++)S[K]=0,G[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:G,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,S,G,z){let K=r.attributes,le=S.attributes,$=0,pe=G.getAttributes();for(let ie in pe)if(pe[ie].location>=0){let me=K[ie],we=le[ie];if(we===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==z}function g(v,S,G,z){let K={},le=S.attributes,$=0,pe=G.getAttributes();for(let ie in pe)if(pe[ie].location>=0){let me=le[ie];me===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));let we={};we.attribute=me,me&&me.data&&(we.data=me.data),K[ie]=we,$++}r.attributes=K,r.attributesNum=$,r.index=z}function x(){let v=r.newAttributes;for(let S=0,G=v.length;S<G;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){let G=r.newAttributes,z=r.enabledAttributes,K=r.attributeDivisors;G[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),K[v]!==S&&(n.vertexAttribDivisor(v,S),K[v]=S)}function b(){let v=r.newAttributes,S=r.enabledAttributes;for(let G=0,z=S.length;G<z;G++)S[G]!==v[G]&&(n.disableVertexAttribArray(G),S[G]=0)}function M(v,S,G,z,K,le,$){$===!0?n.vertexAttribIPointer(v,S,G,K,le):n.vertexAttribPointer(v,S,G,z,K,le)}function E(v,S,G,z){x();let K=z.attributes,le=G.getAttributes(),$=S.defaultAttributeValues;for(let pe in le){let ie=le[pe];if(ie.location>=0){let ve=K[pe];if(ve===void 0&&(pe==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),pe==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),ve!==void 0){let me=ve.normalized,we=ve.itemSize,Ke=e.get(ve);if(Ke===void 0)continue;let rt=Ke.buffer,oe=Ke.type,ge=Ke.bytesPerElement,Pe=oe===n.INT||oe===n.UNSIGNED_INT||ve.gpuType===Uu;if(ve.isInterleavedBufferAttribute){let Me=ve.data,Ye=Me.stride,L=ve.offset;if(Me.isInstancedInterleavedBuffer){for(let V=0;V<ie.locationSize;V++)m(ie.location+V,Me.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let V=0;V<ie.locationSize;V++)p(ie.location+V);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let V=0;V<ie.locationSize;V++)M(ie.location+V,we/ie.locationSize,oe,me,Ye*ge,(L+we/ie.locationSize*V)*ge,Pe)}else{if(ve.isInstancedBufferAttribute){for(let Me=0;Me<ie.locationSize;Me++)m(ie.location+Me,ve.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Me=0;Me<ie.locationSize;Me++)p(ie.location+Me);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Me=0;Me<ie.locationSize;Me++)M(ie.location+Me,we/ie.locationSize,oe,me,we*ge,we/ie.locationSize*Me*ge,Pe)}}else if($!==void 0){let me=$[pe];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(ie.location,me);break;case 3:n.vertexAttrib3fv(ie.location,me);break;case 4:n.vertexAttrib4fv(ie.location,me);break;default:n.vertexAttrib1fv(ie.location,me)}}}}b()}function U(){N();for(let v in i){let S=i[v];for(let G in S){let z=S[G];for(let K in z)h(z[K].object),delete z[K];delete S[G]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;let S=i[v.id];for(let G in S){let z=S[G];for(let K in z)h(z[K].object),delete z[K];delete S[G]}delete i[v.id]}function P(v){for(let S in i){let G=i[S];if(G[v.id]===void 0)continue;let z=G[v.id];for(let K in z)h(z[K].object),delete z[K];delete G[v.id]}}function N(){X(),o=!0,r!==s&&(r=s,c(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:X,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function ty(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<f.length;x++)t.update(g,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ny(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==ni&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let N=P===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Vi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==di&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:U,maxSamples:C}}function iy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Hi,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:i,M=b*4,E=m.clippingState||null;l.value=E,E=h(g,f,M,d);for(let U=0;U!==M;++U)E[U]=t[U];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,E=d;M!==x;++M,E+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function sy(n){let e=new WeakMap;function t(o,a){return a===_h?o.mapping=Ir:a===vh&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===_h||a===vh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new eu(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var fl=class extends hl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wr=4,Md=[.125,.215,.35,.446,.526,.582],Hs=20,Kc=new fl,bd=new Je,Jc=null,jc=0,Qc=0,eh=!1,Bs=(1+Math.sqrt(5))/2,_r=1/Bs,Ed=[new D(-Bs,_r,0),new D(Bs,_r,0),new D(-_r,0,Bs),new D(_r,0,Bs),new D(0,Bs,-_r),new D(0,Bs,_r),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,jc,Qc),this._renderer.xr.enabled=eh,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:qo,format:ni,colorSpace:vs,depthBuffer:!1},s=Sd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(r)),this._blurMaterial=oy(r,e,t)}return s}_compileMaterial(e){let t=new J(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,i,s){let a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bd),h.toneMapping=ps,h.autoClear=!1;let d=new ut({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new J(new Un,d),x=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,x=!0):(d.color.copy(bd),x=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;Ua(s,b*M,m>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ir||e.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ed[(s-r-1)%Ed.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new J(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Hs;p>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hs}`);let m=[],b=0;for(let P=0;P<Hs;++P){let N=P/x,X=Math.exp(-N*N/2);m.push(X),P===0?b+=X:P<p&&(b+=2*X)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let E=this._sizeLods[s],U=3*E*(s>M-wr?s-M+wr:0),C=4*(this._cubeSize-E);Ua(t,U,C,3*E,2*E),l.setRenderTarget(t),l.render(u,Kc)}};function ry(n){let e=[],t=[],i=[],s=n,r=n-wr+1+Md.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-wr?l=Md[o-n+wr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,b=new Float32Array(x*g*d),M=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let C=0;C<d;C++){let P=C%3*2/3-1,N=C>2?0:-1,X=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];b.set(X,x*g*C),M.set(f,p*g*C);let v=[C,C,C,C,C,C];E.set(v,m*g*C)}let U=new Bt;U.setAttribute("position",new Pt(b,x)),U.setAttribute("uv",new Pt(M,p)),U.setAttribute("faceIndex",new Pt(E,m)),e.push(U),s>wr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sd(n,e,t){let i=new Wi(n,e,t);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function oy(n,e,t){let i=new Float32Array(Hs),s=new D(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function wd(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Td(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ay(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===_h||l===vh,h=l===Ir||l===Lr;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new kr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new kr(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ly(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ja("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cy(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let M=0,E=b.length;M<E;M+=3){let U=b[M+0],C=b[M+1],P=b[M+2];f.push(U,C,C,P,P,U)}}else if(g!==void 0){let b=g.array;x=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){let U=M+0,C=M+1,P=M+2;f.push(U,C,C,P,P,U)}}else return;let p=new(Ep(f)?cl:Nr)(f,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hy(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function u(f,d,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b];for(let b=0;b<x.length;b++)t.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function uy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fy(n,e,t){let i=new WeakMap,s=new wt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let X=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",X)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let E=a.attributes.position.count*M,U=1;E>e.maxTextureSize&&(U=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let C=new Float32Array(E*U*4*u),P=new al(C,E,U,u);P.type=di,P.needsUpdate=!0;let N=M*4;for(let v=0;v<u;v++){let S=p[v],G=m[v],z=b[v],K=E*U*4*v;for(let le=0;le<S.count;le++){let $=le*N;d===!0&&(s.fromBufferAttribute(S,le),C[K+$+0]=s.x,C[K+$+1]=s.y,C[K+$+2]=s.z,C[K+$+3]=0),g===!0&&(s.fromBufferAttribute(G,le),C[K+$+4]=s.x,C[K+$+5]=s.y,C[K+$+6]=s.z,C[K+$+7]=0),x===!0&&(s.fromBufferAttribute(z,le),C[K+$+8]=s.x,C[K+$+9]=s.y,C[K+$+10]=s.z,C[K+$+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new _e(E,U)},i.set(a,f),a.addEventListener("dispose",X)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function dy(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var dl=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h=Ar){if(h!==Ar&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ar&&(i=Ws),i===void 0&&h===Ur&&(i=Dr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ap=new Vn,Ad=new dl(1,1),Rp=new al,Cp=new jh,Pp=new ul,Rd=[],Cd=[],Pd=new Float32Array(16),Id=new Float32Array(9),Ld=new Float32Array(4);function Wr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ul(n,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,i))return;Ld.set(i),n.uniformMatrix2fv(this.addr,!1,Ld),un(t,i)}}function _y(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,i))return;Id.set(i),n.uniformMatrix3fv(this.addr,!1,Id),un(t,i)}}function vy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,i))return;Pd.set(i),n.uniformMatrix4fv(this.addr,!1,Pd),un(t,i)}}function My(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function by(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function Ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function wy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function Cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ad.compareFunction=bp,r=Ad):r=Ap,t.setTexture2D(e||r,s)}function Py(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function Iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pp,s)}function Ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rp,s)}function Dy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return xy;case 35674:return yy;case 35675:return _y;case 35676:return vy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return Sy;case 5125:return wy;case 36294:return Ty;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}function Uy(n,e){n.uniform1fv(this.addr,e)}function Ny(n,e){let t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function Oy(n,e){let t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function ky(n,e){let t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function Fy(n,e){let t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function By(n,e){let t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zy(n,e){let t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hy(n,e){n.uniform1iv(this.addr,e)}function Gy(n,e){n.uniform2iv(this.addr,e)}function Vy(n,e){n.uniform3iv(this.addr,e)}function Wy(n,e){n.uniform4iv(this.addr,e)}function Xy(n,e){n.uniform1uiv(this.addr,e)}function qy(n,e){n.uniform2uiv(this.addr,e)}function Yy(n,e){n.uniform3uiv(this.addr,e)}function Zy(n,e){n.uniform4uiv(this.addr,e)}function $y(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ap,r[o])}function Ky(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cp,r[o])}function Jy(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function jy(n,e,t){let i=this.cache,s=e.length,r=Ul(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rp,r[o])}function Qy(n){switch(n){case 5126:return Uy;case 35664:return Ny;case 35665:return Oy;case 35666:return ky;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Gy;case 35668:case 35672:return Vy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return jy}}var tu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dy(t.type)}},nu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},th=/(\w+)(\])?(\[|\.)?/g;function Dd(n,e){n.seq.push(e),n.map[e.id]=e}function e_(n,e,t){let i=n.name,s=i.length;for(th.lastIndex=0;;){let r=th.exec(i),o=th.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dd(t,c===void 0?new tu(a,n,e):new nu(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new iu(a),Dd(t,u)),t=u}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);e_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ud(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var t_=37297,n_=0;function i_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function s_(n){let e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(n),i;switch(e===t?i="":e===nl&&t===tl?i="LinearDisplayP3ToLinearSRGB":e===tl&&t===nl&&(i="LinearSRGBToLinearDisplayP3"),n){case vs:case Dl:return[i,"LinearTransferOETF"];case Hn:case Hu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+i_(n.getShaderSource(e),o)}else return s}function r_(n,e){let t=s_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function o_(n,e){let t;switch(e){case Pm:t="Linear";break;case Im:t="Reinhard";break;case Lm:t="Cineon";break;case Du:t="ACESFilmic";break;case Um:t="AgX";break;case Nm:t="Neutral";break;case Dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Na=new D;function a_(){Ct.getLuminanceCoefficients(Na);let n=Na.x.toFixed(4),e=Na.y.toFixed(4),t=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function c_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ro(n){return n!==""}function Od(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(n){return n.replace(u_,d_)}var f_=new Map;function d_(n,e){let t=lt[e];if(t===void 0){let i=f_.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return su(t)}var p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(n){return n.replace(p_,m_)}function m_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function x_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Lr:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Lr&&(e="ENVMAP_MODE_REFRACTION"),e}function __(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hp:e="ENVMAP_BLENDING_MULTIPLY";break;case Rm:e="ENVMAP_BLENDING_MIX";break;case Cm:e="ENVMAP_BLENDING_ADD";break}return e}function v_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function M_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=g_(t),c=x_(t),h=y_(t),u=__(t),f=v_(t),d=l_(t),g=c_(r),x=s.createProgram(),p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`)):(p=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),m=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?lt.tonemapping_pars_fragment:"",t.toneMapping!==ps?o_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,r_("linearToOutputTexel",t.outputColorSpace),a_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),o=su(o),o=Od(o,t),o=kd(o,t),a=su(a),a=Od(a,t),a=kd(a,t),o=Fd(o),a=Fd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=b+p+o,E=b+m+a,U=Ud(s,s.VERTEX_SHADER,M),C=Ud(s,s.FRAGMENT_SHADER,E);s.attachShader(x,U),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(S){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(U).trim(),K=s.getShaderInfoLog(C).trim(),le=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,U,C);else{let pe=Nd(s,U,"vertex"),ie=Nd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+G+`
`+pe+`
`+ie)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||K==="")&&($=!1);$&&(S.diagnostics={runnable:le,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(U),s.deleteShader(C),N=new Cr(s,x),X=h_(s,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let X;this.getAttributes=function(){return X===void 0&&P(this),X};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,t_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=C,this}var b_=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ou(e),t.set(e,i)),i}},ou=class{constructor(e){this.id=b_++,this.code=e,this.usedTimes=0}};function E_(n,e,t,i,s,r,o){let a=new ll,l=new ru,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,G,z,K){let le=z.fog,$=K.geometry,pe=v.isMeshStandardMaterial?z.environment:null,ie=(v.isMeshStandardMaterial?t:e).get(v.envMap||pe),ve=ie&&ie.mapping===Ll?ie.image.height:null,me=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let we=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ke=we!==void 0?we.length:0,rt=0;$.morphAttributes.position!==void 0&&(rt=1),$.morphAttributes.normal!==void 0&&(rt=2),$.morphAttributes.color!==void 0&&(rt=3);let oe,ge,Pe,Me;if(me){let zn=vi[me];oe=zn.vertexShader,ge=zn.fragmentShader}else oe=v.vertexShader,ge=v.fragmentShader,l.update(v),Pe=l.getVertexShaderID(v),Me=l.getFragmentShaderID(v);let Ye=n.getRenderTarget(),L=K.isInstancedMesh===!0,V=K.isBatchedMesh===!0,ae=!!v.map,O=!!v.matcap,w=!!ie,se=!!v.aoMap,te=!!v.lightMap,ee=!!v.bumpMap,fe=!!v.normalMap,Le=!!v.displacementMap,R=!!v.emissiveMap,_=!!v.metalnessMap,y=!!v.roughnessMap,I=v.anisotropy>0,F=v.clearcoat>0,q=v.dispersion>0,Y=v.iridescence>0,Ee=v.sheen>0,ye=v.transmission>0,Ie=I&&!!v.anisotropyMap,dt=F&&!!v.clearcoatMap,xe=F&&!!v.clearcoatNormalMap,ze=F&&!!v.clearcoatRoughnessMap,tt=Y&&!!v.iridescenceMap,nt=Y&&!!v.iridescenceThicknessMap,He=Ee&&!!v.sheenColorMap,yt=Ee&&!!v.sheenRoughnessMap,at=!!v.specularMap,Vt=!!v.specularColorMap,k=!!v.specularIntensityMap,ke=ye&&!!v.transmissionMap,re=ye&&!!v.thicknessMap,ue=!!v.gradientMap,Ue=!!v.alphaMap,Fe=v.alphaTest>0,_t=!!v.alphaHash,rn=!!v.extensions,Bn=ps;v.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(Bn=n.toneMapping);let St={shaderID:me,shaderType:v.type,shaderName:v.name,vertexShader:oe,fragmentShader:ge,defines:v.defines,customVertexShaderID:Pe,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:V,batchingColor:V&&K._colorsTexture!==null,instancing:L,instancingColor:L&&K.instanceColor!==null,instancingMorph:L&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ye===null?n.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:vs,alphaToCoverage:!!v.alphaToCoverage,map:ae,matcap:O,envMap:w,envMapMode:w&&ie.mapping,envMapCubeUVHeight:ve,aoMap:se,lightMap:te,bumpMap:ee,normalMap:fe,displacementMap:d&&Le,emissiveMap:R,normalMapObjectSpace:fe&&v.normalMapType===zm,normalMapTangentSpace:fe&&v.normalMapType===Mp,metalnessMap:_,roughnessMap:y,anisotropy:I,anisotropyMap:Ie,clearcoat:F,clearcoatMap:dt,clearcoatNormalMap:xe,clearcoatRoughnessMap:ze,dispersion:q,iridescence:Y,iridescenceMap:tt,iridescenceThicknessMap:nt,sheen:Ee,sheenColorMap:He,sheenRoughnessMap:yt,specularMap:at,specularColorMap:Vt,specularIntensityMap:k,transmission:ye,transmissionMap:ke,thicknessMap:re,gradientMap:ue,opaque:v.transparent===!1&&v.blending===ds&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Fe,alphaHash:_t,combine:v.combine,mapUv:ae&&p(v.map.channel),aoMapUv:se&&p(v.aoMap.channel),lightMapUv:te&&p(v.lightMap.channel),bumpMapUv:ee&&p(v.bumpMap.channel),normalMapUv:fe&&p(v.normalMap.channel),displacementMapUv:Le&&p(v.displacementMap.channel),emissiveMapUv:R&&p(v.emissiveMap.channel),metalnessMapUv:_&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:Ie&&p(v.anisotropyMap.channel),clearcoatMapUv:dt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(v.sheenRoughnessMap.channel),specularMapUv:at&&p(v.specularMap.channel),specularColorMapUv:Vt&&p(v.specularColorMap.channel),specularIntensityMapUv:k&&p(v.specularIntensityMap.channel),transmissionMapUv:ke&&p(v.transmissionMap.channel),thicknessMapUv:re&&p(v.thicknessMap.channel),alphaMapUv:Ue&&p(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(fe||I),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!$.attributes.uv&&(ae||Ue),fog:!!le,useFog:v.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ke,morphTextureStride:rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bn,decodeVideoTexture:ae&&v.map.isVideoTexture===!0&&Ct.getTransfer(v.map.colorSpace)===qt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rn&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rn&&v.extensions.multiDraw===!0||V)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function b(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let G in v.defines)S.push(G),S.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(M(S,v),E(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function U(v){let S=x[v.type],G;if(S){let z=vi[S];G=dg.clone(z.uniforms)}else G=v.uniforms;return G}function C(v,S){let G;for(let z=0,K=h.length;z<K;z++){let le=h[z];if(le.cacheKey===S){G=le,++G.usedTimes;break}}return G===void 0&&(G=new M_(n,S,v,r),h.push(G)),G}function P(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function N(v){l.remove(v)}function X(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:U,acquireProgram:C,releaseProgram:P,releaseShaderCache:N,programs:h,dispose:X}}function S_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function w_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,x,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||w_),i.length>1&&i.sort(f||zd),s.length>1&&s.sort(f||zd)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function T_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Hd,n.set(i,[o])):s>=r.length?(o=new Hd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function A_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function R_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var C_=0;function P_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function I_(n){let e=new A_,t=R_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new $e,o=new $e;function a(c){let h=0,u=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,b=0,M=0,E=0,U=0,C=0,P=0;c.sort(P_);for(let X=0,v=c.length;X<v;X++){let S=c[X],G=S.color,z=S.intensity,K=S.distance,le=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=G.r*z,u+=G.g*z,f+=G.b*z;else if(S.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(S.sh.coefficients[$],z);P++}else if(S.isDirectionalLight){let $=e.get(S);if($.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let pe=S.shadow,ie=t.get(S);ie.shadowIntensity=pe.intensity,ie.shadowBias=pe.bias,ie.shadowNormalBias=pe.normalBias,ie.shadowRadius=pe.radius,ie.shadowMapSize=pe.mapSize,i.directionalShadow[d]=ie,i.directionalShadowMap[d]=le,i.directionalShadowMatrix[d]=S.shadow.matrix,b++}i.directional[d]=$,d++}else if(S.isSpotLight){let $=e.get(S);$.position.setFromMatrixPosition(S.matrixWorld),$.color.copy(G).multiplyScalar(z),$.distance=K,$.coneCos=Math.cos(S.angle),$.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),$.decay=S.decay,i.spot[x]=$;let pe=S.shadow;if(S.map&&(i.spotLightMap[U]=S.map,U++,pe.updateMatrices(S),S.castShadow&&C++),i.spotLightMatrix[x]=pe.matrix,S.castShadow){let ie=t.get(S);ie.shadowIntensity=pe.intensity,ie.shadowBias=pe.bias,ie.shadowNormalBias=pe.normalBias,ie.shadowRadius=pe.radius,ie.shadowMapSize=pe.mapSize,i.spotShadow[x]=ie,i.spotShadowMap[x]=le,E++}x++}else if(S.isRectAreaLight){let $=e.get(S);$.color.copy(G).multiplyScalar(z),$.halfWidth.set(S.width*.5,0,0),$.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=$,p++}else if(S.isPointLight){let $=e.get(S);if($.color.copy(S.color).multiplyScalar(S.intensity),$.distance=S.distance,$.decay=S.decay,S.castShadow){let pe=S.shadow,ie=t.get(S);ie.shadowIntensity=pe.intensity,ie.shadowBias=pe.bias,ie.shadowNormalBias=pe.normalBias,ie.shadowRadius=pe.radius,ie.shadowMapSize=pe.mapSize,ie.shadowCameraNear=pe.camera.near,ie.shadowCameraFar=pe.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=le,i.pointShadowMatrix[g]=S.shadow.matrix,M++}i.point[g]=$,g++}else if(S.isHemisphereLight){let $=e.get(S);$.skyColor.copy(S.color).multiplyScalar(z),$.groundColor.copy(S.groundColor).multiplyScalar(z),i.hemi[m]=$,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==m||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==E||N.numSpotMaps!==U||N.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=m,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=E,N.numSpotMaps=U,N.numLightProbes=P,i.version=C_++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let M=c[m];if(M.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(M.isSpotLight){let E=i.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Gd(n){let e=new I_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function L_(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Gd(n),e.set(s,[a])):r>=o.length?(a=new Gd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var au=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lu=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N_(n,e,t){let i=new No,s=new _e,r=new _e,o=new wt,a=new au({depthPacking:Bm}),l=new lu,c={},h=t.maxTextureSize,u={[gs]:gn,[gn]:gs,[an]:an},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:D_,fragmentShader:U_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new J(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let m=this.type;this.render=function(C,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let X=n.getRenderTarget(),v=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),G=n.state;G.setBlending(fs),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=m!==zi&&this.type===zi,K=m===zi&&this.type!==zi;for(let le=0,$=C.length;le<$;le++){let pe=C[le],ie=pe.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let ve=ie.getFrameExtents();if(s.multiply(ve),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ve.x),s.x=r.x*ve.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ve.y),s.y=r.y*ve.y,ie.mapSize.y=r.y)),ie.map===null||z===!0||K===!0){let we=this.type!==zi?{minFilter:Gn,magFilter:Gn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Wi(s.x,s.y,we),ie.map.texture.name=pe.name+".shadowMap",ie.camera.updateProjectionMatrix()}n.setRenderTarget(ie.map),n.clear();let me=ie.getViewportCount();for(let we=0;we<me;we++){let Ke=ie.getViewport(we);o.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),G.viewport(o),ie.updateMatrices(pe,we),i=ie.getFrustum(),E(P,N,ie.camera,pe,this.type)}ie.isPointLightShadow!==!0&&this.type===zi&&b(ie,N),ie.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(X,v,S)};function b(C,P){let N=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,N,f,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,N,d,x,null)}function M(C,P,N,X){let v=null,S=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)v=S;else if(v=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let G=v.uuid,z=P.uuid,K=c[G];K===void 0&&(K={},c[G]=K);let le=K[z];le===void 0&&(le=v.clone(),K[z]=le,P.addEventListener("dispose",U)),v=le}if(v.visible=P.visible,v.wireframe=P.wireframe,X===zi?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:u[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let G=n.properties.get(v);G.light=N}return v}function E(C,P,N,X,v){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===zi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let z=e.update(C),K=C.material;if(Array.isArray(K)){let le=z.groups;for(let $=0,pe=le.length;$<pe;$++){let ie=le[$],ve=K[ie.materialIndex];if(ve&&ve.visible){let me=M(C,ve,X,v);C.onBeforeShadow(n,C,P,N,z,me,ie),n.renderBufferDirect(N,null,z,me,C,ie),C.onAfterShadow(n,C,P,N,z,me,ie)}}}else if(K.visible){let le=M(C,K,X,v);C.onBeforeShadow(n,C,P,N,z,le,null),n.renderBufferDirect(N,null,z,le,C,null),C.onAfterShadow(n,C,P,N,z,le,null)}}let G=C.children;for(let z=0,K=G.length;z<K;z++)E(G[z],P,N,X,v)}function U(C){C.target.removeEventListener("dispose",U);for(let N in c){let X=c[N],v=C.target.uuid;v in X&&(X[v].dispose(),delete X[v])}}}var O_={[fh]:dh,[ph]:xh,[mh]:yh,[Pr]:gh,[dh]:fh,[xh]:ph,[yh]:mh,[gh]:Pr};function k_(n){function e(){let k=!1,ke=new wt,re=null,ue=new wt(0,0,0,0);return{setMask:function(Ue){re!==Ue&&!k&&(n.colorMask(Ue,Ue,Ue,Ue),re=Ue)},setLocked:function(Ue){k=Ue},setClear:function(Ue,Fe,_t,rn,Bn){Bn===!0&&(Ue*=rn,Fe*=rn,_t*=rn),ke.set(Ue,Fe,_t,rn),ue.equals(ke)===!1&&(n.clearColor(Ue,Fe,_t,rn),ue.copy(ke))},reset:function(){k=!1,re=null,ue.set(-1,0,0,0)}}}function t(){let k=!1,ke=!1,re=null,ue=null,Ue=null;return{setReversed:function(Fe){ke=Fe},setTest:function(Fe){Fe?Pe(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Fe){re!==Fe&&!k&&(n.depthMask(Fe),re=Fe)},setFunc:function(Fe){if(ke&&(Fe=O_[Fe]),ue!==Fe){switch(Fe){case fh:n.depthFunc(n.NEVER);break;case dh:n.depthFunc(n.ALWAYS);break;case ph:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case mh:n.depthFunc(n.EQUAL);break;case gh:n.depthFunc(n.GEQUAL);break;case xh:n.depthFunc(n.GREATER);break;case yh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Fe}},setLocked:function(Fe){k=Fe},setClear:function(Fe){Ue!==Fe&&(n.clearDepth(Fe),Ue=Fe)},reset:function(){k=!1,re=null,ue=null,Ue=null}}}function i(){let k=!1,ke=null,re=null,ue=null,Ue=null,Fe=null,_t=null,rn=null,Bn=null;return{setTest:function(St){k||(St?Pe(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(St){ke!==St&&!k&&(n.stencilMask(St),ke=St)},setFunc:function(St,zn,Ui){(re!==St||ue!==zn||Ue!==Ui)&&(n.stencilFunc(St,zn,Ui),re=St,ue=zn,Ue=Ui)},setOp:function(St,zn,Ui){(Fe!==St||_t!==zn||rn!==Ui)&&(n.stencilOp(St,zn,Ui),Fe=St,_t=zn,rn=Ui)},setLocked:function(St){k=St},setClear:function(St){Bn!==St&&(n.clearStencil(St),Bn=St)},reset:function(){k=!1,ke=null,re=null,ue=null,Ue=null,Fe=null,_t=null,rn=null,Bn=null}}}let s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,b=null,M=null,E=null,U=null,C=new Je(0,0,0),P=0,N=!1,X=null,v=null,S=null,G=null,z=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),le=!1,$=0,pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(pe)[1]),le=$>=1):pe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),le=$>=2);let ie=null,ve={},me=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Ke=new wt().fromArray(me),rt=new wt().fromArray(we);function oe(k,ke,re,ue){let Ue=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(k,Fe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<re;_t++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ke,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(ke+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Fe}let ge={};ge[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Pe(n.DEPTH_TEST),r.setFunc(Pr),te(!1),ee($f),Pe(n.CULL_FACE),w(fs);function Pe(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function Me(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function Ye(k,ke){return h[k]!==ke?(n.bindFramebuffer(k,ke),h[k]=ke,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ke),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ke),!0):!1}function L(k,ke){let re=f,ue=!1;if(k){re=u.get(ke),re===void 0&&(re=[],u.set(ke,re));let Ue=k.textures;if(re.length!==Ue.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,_t=Ue.length;Fe<_t;Fe++)re[Fe]=n.COLOR_ATTACHMENT0+Fe;re.length=Ue.length,ue=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ue=!0);ue&&n.drawBuffers(re)}function V(k){return d!==k?(n.useProgram(k),d=k,!0):!1}let ae={[zs]:n.FUNC_ADD,[um]:n.FUNC_SUBTRACT,[fm]:n.FUNC_REVERSE_SUBTRACT};ae[dm]=n.MIN,ae[pm]=n.MAX;let O={[mm]:n.ZERO,[gm]:n.ONE,[xm]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[Em]:n.SRC_ALPHA_SATURATE,[Mm]:n.DST_COLOR,[_m]:n.DST_ALPHA,[ym]:n.ONE_MINUS_SRC_COLOR,[uh]:n.ONE_MINUS_SRC_ALPHA,[bm]:n.ONE_MINUS_DST_COLOR,[vm]:n.ONE_MINUS_DST_ALPHA,[Sm]:n.CONSTANT_COLOR,[wm]:n.ONE_MINUS_CONSTANT_COLOR,[Tm]:n.CONSTANT_ALPHA,[Am]:n.ONE_MINUS_CONSTANT_ALPHA};function w(k,ke,re,ue,Ue,Fe,_t,rn,Bn,St){if(k===fs){g===!0&&(Me(n.BLEND),g=!1);return}if(g===!1&&(Pe(n.BLEND),g=!0),k!==hm){if(k!==x||St!==N){if((p!==zs||M!==zs)&&(n.blendEquation(n.FUNC_ADD),p=zs,M=zs),St)switch(k){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xn:n.blendFunc(n.ONE,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,b=null,E=null,U=null,C.set(0,0,0),P=0,x=k,N=St}return}Ue=Ue||ke,Fe=Fe||re,_t=_t||ue,(ke!==p||Ue!==M)&&(n.blendEquationSeparate(ae[ke],ae[Ue]),p=ke,M=Ue),(re!==m||ue!==b||Fe!==E||_t!==U)&&(n.blendFuncSeparate(O[re],O[ue],O[Fe],O[_t]),m=re,b=ue,E=Fe,U=_t),(rn.equals(C)===!1||Bn!==P)&&(n.blendColor(rn.r,rn.g,rn.b,Bn),C.copy(rn),P=Bn),x=k,N=!1}function se(k,ke){k.side===an?Me(n.CULL_FACE):Pe(n.CULL_FACE);let re=k.side===gn;ke&&(re=!re),te(re),k.blending===ds&&k.transparent===!1?w(fs):w(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);let ue=k.stencilWrite;o.setTest(ue),ue&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){X!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),X=k)}function ee(k){k!==am?(Pe(n.CULL_FACE),k!==v&&(k===$f?n.cullFace(n.BACK):k===lm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),v=k}function fe(k){k!==S&&(le&&n.lineWidth(k),S=k)}function Le(k,ke,re){k?(Pe(n.POLYGON_OFFSET_FILL),(G!==ke||z!==re)&&(n.polygonOffset(ke,re),G=ke,z=re)):Me(n.POLYGON_OFFSET_FILL)}function R(k){k?Pe(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function _(k){k===void 0&&(k=n.TEXTURE0+K-1),ie!==k&&(n.activeTexture(k),ie=k)}function y(k,ke,re){re===void 0&&(ie===null?re=n.TEXTURE0+K-1:re=ie);let ue=ve[re];ue===void 0&&(ue={type:void 0,texture:void 0},ve[re]=ue),(ue.type!==k||ue.texture!==ke)&&(ie!==re&&(n.activeTexture(re),ie=re),n.bindTexture(k,ke||ge[k]),ue.type=k,ue.texture=ke)}function I(){let k=ve[ie];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(k){Ke.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Ke.copy(k))}function He(k){rt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),rt.copy(k))}function yt(k,ke){let re=l.get(ke);re===void 0&&(re=new WeakMap,l.set(ke,re));let ue=re.get(k);ue===void 0&&(ue=n.getUniformBlockIndex(ke,k.name),re.set(k,ue))}function at(k,ke){let ue=l.get(ke).get(k);a.get(ke)!==ue&&(n.uniformBlockBinding(ke,ue,k.__bindingPointIndex),a.set(ke,ue))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ie=null,ve={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,b=null,M=null,E=null,U=null,C=new Je(0,0,0),P=0,N=!1,X=null,v=null,S=null,G=null,z=null,Ke.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Pe,disable:Me,bindFramebuffer:Ye,drawBuffers:L,useProgram:V,setBlending:w,setMaterial:se,setFlipSided:te,setCullFace:ee,setLineWidth:fe,setPolygonOffset:Le,setScissorTest:R,activeTexture:_,bindTexture:y,unbindTexture:I,compressedTexImage2D:F,compressedTexImage3D:q,texImage2D:ze,texImage3D:tt,updateUBOMapping:yt,uniformBlockBinding:at,texStorage2D:dt,texStorage3D:xe,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ie,scissor:nt,viewport:He,reset:Vt}}function Vd(n,e,t,i){let s=F_(i);switch(t){case mp:return n*e;case xp:return n*e;case yp:return n*e*2;case ku:return n*e/s.components*s.byteLength;case Fu:return n*e/s.components*s.byteLength;case _p:return n*e*2/s.components*s.byteLength;case Bu:return n*e*2/s.components*s.byteLength;case gp:return n*e*3/s.components*s.byteLength;case ni:return n*e*4/s.components*s.byteLength;case zu:return n*e*4/s.components*s.byteLength;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eh:case wh:return Math.max(n,16)*Math.max(e,8)/4;case bh:case Sh:return Math.max(n,8)*Math.max(e,8)/2;case Th:case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Vh:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vp:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qh:case Yh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F_(n){switch(n){case Vi:case fp:return{byteLength:1,components:1};case Do:case dp:case qo:return{byteLength:2,components:1};case Nu:case Ou:return{byteLength:2,components:4};case Ws:case Uu:case di:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function B_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,y){return d?new OffscreenCanvas(_,y):rl("canvas")}function x(_,y,I){let F=1,q=R(_);if((q.width>I||q.height>I)&&(F=I/Math.max(q.width,q.height)),F<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let Y=Math.floor(F*q.width),Ee=Math.floor(F*q.height);u===void 0&&(u=g(Y,Ee));let ye=y?g(Y,Ee):u;return ye.width=Y,ye.height=Ee,ye.getContext("2d").drawImage(_,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+Y+"x"+Ee+")."),ye}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),_;return _}function p(_){return _.generateMipmaps&&_.minFilter!==Gn&&_.minFilter!==fi}function m(_){n.generateMipmap(_)}function b(_,y,I,F,q=!1){if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let Y=y;if(y===n.RED&&(I===n.FLOAT&&(Y=n.R32F),I===n.HALF_FLOAT&&(Y=n.R16F),I===n.UNSIGNED_BYTE&&(Y=n.R8)),y===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.R8UI),I===n.UNSIGNED_SHORT&&(Y=n.R16UI),I===n.UNSIGNED_INT&&(Y=n.R32UI),I===n.BYTE&&(Y=n.R8I),I===n.SHORT&&(Y=n.R16I),I===n.INT&&(Y=n.R32I)),y===n.RG&&(I===n.FLOAT&&(Y=n.RG32F),I===n.HALF_FLOAT&&(Y=n.RG16F),I===n.UNSIGNED_BYTE&&(Y=n.RG8)),y===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RG8UI),I===n.UNSIGNED_SHORT&&(Y=n.RG16UI),I===n.UNSIGNED_INT&&(Y=n.RG32UI),I===n.BYTE&&(Y=n.RG8I),I===n.SHORT&&(Y=n.RG16I),I===n.INT&&(Y=n.RG32I)),y===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),I===n.UNSIGNED_INT&&(Y=n.RGB32UI),I===n.BYTE&&(Y=n.RGB8I),I===n.SHORT&&(Y=n.RGB16I),I===n.INT&&(Y=n.RGB32I)),y===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),I===n.UNSIGNED_INT&&(Y=n.RGBA32UI),I===n.BYTE&&(Y=n.RGBA8I),I===n.SHORT&&(Y=n.RGBA16I),I===n.INT&&(Y=n.RGBA32I)),y===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),y===n.RGBA){let Ee=q?el:Ct.getTransfer(F);I===n.FLOAT&&(Y=n.RGBA32F),I===n.HALF_FLOAT&&(Y=n.RGBA16F),I===n.UNSIGNED_BYTE&&(Y=Ee===qt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(_,y){let I;return _?y===null||y===Ws||y===Dr?I=n.DEPTH24_STENCIL8:y===di?I=n.DEPTH32F_STENCIL8:y===Do&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ws||y===Dr?I=n.DEPTH_COMPONENT24:y===di?I=n.DEPTH_COMPONENT32F:y===Do&&(I=n.DEPTH_COMPONENT16),I}function E(_,y){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Gn&&_.minFilter!==fi?Math.log2(Math.max(y.width,y.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?y.mipmaps.length:1}function U(_){let y=_.target;y.removeEventListener("dispose",U),P(y),y.isVideoTexture&&h.delete(y)}function C(_){let y=_.target;y.removeEventListener("dispose",C),X(y)}function P(_){let y=i.get(_);if(y.__webglInit===void 0)return;let I=_.source,F=f.get(I);if(F){let q=F[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&N(_),Object.keys(F).length===0&&f.delete(I)}i.remove(_)}function N(_){let y=i.get(_);n.deleteTexture(y.__webglTexture);let I=_.source,F=f.get(I);delete F[y.__cacheKey],o.memory.textures--}function X(_){let y=i.get(_);if(_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(y.__webglFramebuffer[F]))for(let q=0;q<y.__webglFramebuffer[F].length;q++)n.deleteFramebuffer(y.__webglFramebuffer[F][q]);else n.deleteFramebuffer(y.__webglFramebuffer[F]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[F])}else{if(Array.isArray(y.__webglFramebuffer))for(let F=0;F<y.__webglFramebuffer.length;F++)n.deleteFramebuffer(y.__webglFramebuffer[F]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let F=0;F<y.__webglColorRenderbuffer.length;F++)y.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[F]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=_.textures;for(let F=0,q=I.length;F<q;F++){let Y=i.get(I[F]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(I[F])}i.remove(_)}let v=0;function S(){v=0}function G(){let _=v;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),v+=1,_}function z(_){let y=[];return y.push(_.wrapS),y.push(_.wrapT),y.push(_.wrapR||0),y.push(_.magFilter),y.push(_.minFilter),y.push(_.anisotropy),y.push(_.internalFormat),y.push(_.format),y.push(_.type),y.push(_.generateMipmaps),y.push(_.premultiplyAlpha),y.push(_.flipY),y.push(_.unpackAlignment),y.push(_.colorSpace),y.join()}function K(_,y){let I=i.get(_);if(_.isVideoTexture&&fe(_),_.isRenderTargetTexture===!1&&_.version>0&&I.__version!==_.version){let F=_.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(I,_,y);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+y)}function le(_,y){let I=i.get(_);if(_.version>0&&I.__version!==_.version){rt(I,_,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+y)}function $(_,y){let I=i.get(_);if(_.version>0&&I.__version!==_.version){rt(I,_,y);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+y)}function pe(_,y){let I=i.get(_);if(_.version>0&&I.__version!==_.version){oe(I,_,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+y)}let ie={[Lo]:n.REPEAT,[Gs]:n.CLAMP_TO_EDGE,[Mh]:n.MIRRORED_REPEAT},ve={[Gn]:n.NEAREST,[km]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[fi]:n.LINEAR,[wc]:n.LINEAR_MIPMAP_NEAREST,[Vs]:n.LINEAR_MIPMAP_LINEAR},me={[Hm]:n.NEVER,[Ym]:n.ALWAYS,[Gm]:n.LESS,[bp]:n.LEQUAL,[Vm]:n.EQUAL,[qm]:n.GEQUAL,[Wm]:n.GREATER,[Xm]:n.NOTEQUAL};function we(_,y){if(y.type===di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fi||y.magFilter===wc||y.magFilter===ma||y.magFilter===Vs||y.minFilter===fi||y.minFilter===wc||y.minFilter===ma||y.minFilter===Vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,ie[y.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,ve[y.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,ve[y.minFilter]),y.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Gn||y.minFilter!==ma&&y.minFilter!==Vs||y.type===di&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ke(_,y){let I=!1;_.__webglInit===void 0&&(_.__webglInit=!0,y.addEventListener("dispose",U));let F=y.source,q=f.get(F);q===void 0&&(q={},f.set(F,q));let Y=z(y);if(Y!==_.__cacheKey){q[Y]===void 0&&(q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),q[Y].usedTimes++;let Ee=q[_.__cacheKey];Ee!==void 0&&(q[_.__cacheKey].usedTimes--,Ee.usedTimes===0&&N(y)),_.__cacheKey=Y,_.__webglTexture=q[Y].texture}return I}function rt(_,y,I){let F=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(F=n.TEXTURE_3D);let q=Ke(_,y),Y=y.source;t.bindTexture(F,_.__webglTexture,n.TEXTURE0+I);let Ee=i.get(Y);if(Y.version!==Ee.__version||q===!0){t.activeTexture(n.TEXTURE0+I);let ye=Ct.getPrimaries(Ct.workingColorSpace),Ie=y.colorSpace===hs?null:Ct.getPrimaries(y.colorSpace),dt=y.colorSpace===hs||ye===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let xe=x(y.image,!1,s.maxTextureSize);xe=Le(y,xe);let ze=r.convert(y.format,y.colorSpace),tt=r.convert(y.type),nt=b(y.internalFormat,ze,tt,y.colorSpace,y.isVideoTexture);we(F,y);let He,yt=y.mipmaps,at=y.isVideoTexture!==!0,Vt=Ee.__version===void 0||q===!0,k=Y.dataReady,ke=E(y,xe);if(y.isDepthTexture)nt=M(y.format===Ur,y.type),Vt&&(at?t.texStorage2D(n.TEXTURE_2D,1,nt,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,nt,xe.width,xe.height,0,ze,tt,null));else if(y.isDataTexture)if(yt.length>0){at&&Vt&&t.texStorage2D(n.TEXTURE_2D,ke,nt,yt[0].width,yt[0].height);for(let re=0,ue=yt.length;re<ue;re++)He=yt[re],at?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,He.width,He.height,ze,tt,He.data):t.texImage2D(n.TEXTURE_2D,re,nt,He.width,He.height,0,ze,tt,He.data);y.generateMipmaps=!1}else at?(Vt&&t.texStorage2D(n.TEXTURE_2D,ke,nt,xe.width,xe.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe.width,xe.height,ze,tt,xe.data)):t.texImage2D(n.TEXTURE_2D,0,nt,xe.width,xe.height,0,ze,tt,xe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){at&&Vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,nt,yt[0].width,yt[0].height,xe.depth);for(let re=0,ue=yt.length;re<ue;re++)if(He=yt[re],y.format!==ni)if(ze!==null)if(at){if(k)if(y.layerUpdates.size>0){let Ue=Vd(He.width,He.height,y.format,y.type);for(let Fe of y.layerUpdates){let _t=He.data.subarray(Fe*Ue/He.data.BYTES_PER_ELEMENT,(Fe+1)*Ue/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Fe,He.width,He.height,1,ze,_t,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,He.width,He.height,xe.depth,ze,He.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,nt,He.width,He.height,xe.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,He.width,He.height,xe.depth,ze,tt,He.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,nt,He.width,He.height,xe.depth,0,ze,tt,He.data)}else{at&&Vt&&t.texStorage2D(n.TEXTURE_2D,ke,nt,yt[0].width,yt[0].height);for(let re=0,ue=yt.length;re<ue;re++)He=yt[re],y.format!==ni?ze!==null?at?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,He.width,He.height,ze,He.data):t.compressedTexImage2D(n.TEXTURE_2D,re,nt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,He.width,He.height,ze,tt,He.data):t.texImage2D(n.TEXTURE_2D,re,nt,He.width,He.height,0,ze,tt,He.data)}else if(y.isDataArrayTexture)if(at){if(Vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,nt,xe.width,xe.height,xe.depth),k)if(y.layerUpdates.size>0){let re=Vd(xe.width,xe.height,y.format,y.type);for(let ue of y.layerUpdates){let Ue=xe.data.subarray(ue*re/xe.data.BYTES_PER_ELEMENT,(ue+1)*re/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,xe.width,xe.height,1,ze,tt,Ue)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ze,tt,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,xe.width,xe.height,xe.depth,0,ze,tt,xe.data);else if(y.isData3DTexture)at?(Vt&&t.texStorage3D(n.TEXTURE_3D,ke,nt,xe.width,xe.height,xe.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ze,tt,xe.data)):t.texImage3D(n.TEXTURE_3D,0,nt,xe.width,xe.height,xe.depth,0,ze,tt,xe.data);else if(y.isFramebufferTexture){if(Vt)if(at)t.texStorage2D(n.TEXTURE_2D,ke,nt,xe.width,xe.height);else{let re=xe.width,ue=xe.height;for(let Ue=0;Ue<ke;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,nt,re,ue,0,ze,tt,null),re>>=1,ue>>=1}}else if(yt.length>0){if(at&&Vt){let re=R(yt[0]);t.texStorage2D(n.TEXTURE_2D,ke,nt,re.width,re.height)}for(let re=0,ue=yt.length;re<ue;re++)He=yt[re],at?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ze,tt,He):t.texImage2D(n.TEXTURE_2D,re,nt,ze,tt,He);y.generateMipmaps=!1}else if(at){if(Vt){let re=R(xe);t.texStorage2D(n.TEXTURE_2D,ke,nt,re.width,re.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,tt,xe)}else t.texImage2D(n.TEXTURE_2D,0,nt,ze,tt,xe);p(y)&&m(F),Ee.__version=Y.version,y.onUpdate&&y.onUpdate(y)}_.__version=y.version}function oe(_,y,I){if(y.image.length!==6)return;let F=Ke(_,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+I);let Y=i.get(q);if(q.version!==Y.__version||F===!0){t.activeTexture(n.TEXTURE0+I);let Ee=Ct.getPrimaries(Ct.workingColorSpace),ye=y.colorSpace===hs?null:Ct.getPrimaries(y.colorSpace),Ie=y.colorSpace===hs||Ee===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let dt=y.isCompressedTexture||y.image[0].isCompressedTexture,xe=y.image[0]&&y.image[0].isDataTexture,ze=[];for(let ue=0;ue<6;ue++)!dt&&!xe?ze[ue]=x(y.image[ue],!0,s.maxCubemapSize):ze[ue]=xe?y.image[ue].image:y.image[ue],ze[ue]=Le(y,ze[ue]);let tt=ze[0],nt=r.convert(y.format,y.colorSpace),He=r.convert(y.type),yt=b(y.internalFormat,nt,He,y.colorSpace),at=y.isVideoTexture!==!0,Vt=Y.__version===void 0||F===!0,k=q.dataReady,ke=E(y,tt);we(n.TEXTURE_CUBE_MAP,y);let re;if(dt){at&&Vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,yt,tt.width,tt.height);for(let ue=0;ue<6;ue++){re=ze[ue].mipmaps;for(let Ue=0;Ue<re.length;Ue++){let Fe=re[Ue];y.format!==ni?nt!==null?at?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Fe.width,Fe.height,nt,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,yt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Fe.width,Fe.height,nt,He,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,yt,Fe.width,Fe.height,0,nt,He,Fe.data)}}}else{if(re=y.mipmaps,at&&Vt){re.length>0&&ke++;let ue=R(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,yt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(xe){at?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze[ue].width,ze[ue].height,nt,He,ze[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,yt,ze[ue].width,ze[ue].height,0,nt,He,ze[ue].data);for(let Ue=0;Ue<re.length;Ue++){let _t=re[Ue].image[ue].image;at?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,_t.width,_t.height,nt,He,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,yt,_t.width,_t.height,0,nt,He,_t.data)}}else{at?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,nt,He,ze[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,yt,nt,He,ze[ue]);for(let Ue=0;Ue<re.length;Ue++){let Fe=re[Ue];at?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,nt,He,Fe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,yt,nt,He,Fe.image[ue])}}}p(y)&&m(n.TEXTURE_CUBE_MAP),Y.__version=q.version,y.onUpdate&&y.onUpdate(y)}_.__version=y.version}function ge(_,y,I,F,q,Y){let Ee=r.convert(I.format,I.colorSpace),ye=r.convert(I.type),Ie=b(I.internalFormat,Ee,ye,I.colorSpace);if(!i.get(y).__hasExternalTextures){let xe=Math.max(1,y.width>>Y),ze=Math.max(1,y.height>>Y);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,Y,Ie,xe,ze,y.depth,0,Ee,ye,null):t.texImage2D(q,Y,Ie,xe,ze,0,Ee,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,q,i.get(I).__webglTexture,0,te(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,q,i.get(I).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(_,y,I){if(n.bindRenderbuffer(n.RENDERBUFFER,_),y.depthBuffer){let F=y.depthTexture,q=F&&F.isDepthTexture?F.type:null,Y=M(y.stencilBuffer,q),Ee=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=te(y);ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Y,y.width,y.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Y,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Y,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,_)}else{let F=y.textures;for(let q=0;q<F.length;q++){let Y=F[q],Ee=r.convert(Y.format,Y.colorSpace),ye=r.convert(Y.type),Ie=b(Y.internalFormat,Ee,ye,Y.colorSpace),dt=te(y);I&&ee(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Ie,y.width,y.height):ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Ie,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(_,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let F=i.get(y.depthTexture).__webglTexture,q=te(y);if(y.depthTexture.format===Ar)ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(y.depthTexture.format===Ur)ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ye(_){let y=i.get(_),I=_.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==_.depthTexture){let F=_.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),F){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,F.removeEventListener("dispose",q)};F.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=F}if(_.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Me(y.__webglFramebuffer,_)}else if(I){y.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[F]),y.__webglDepthbuffer[F]===void 0)y.__webglDepthbuffer[F]=n.createRenderbuffer(),Pe(y.__webglDepthbuffer[F],_,!1);else{let q=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Pe(y.__webglDepthbuffer,_,!1);else{let F=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(_,y,I){let F=i.get(_);y!==void 0&&ge(F.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ye(_)}function V(_){let y=_.texture,I=i.get(_),F=i.get(y);_.addEventListener("dispose",C);let q=_.textures,Y=_.isWebGLCubeRenderTarget===!0,Ee=q.length>1;if(Ee||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=y.version,o.memory.textures++),Y){I.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[ye]=[];for(let Ie=0;Ie<y.mipmaps.length;Ie++)I.__webglFramebuffer[ye][Ie]=n.createFramebuffer()}else I.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let ye=0;ye<y.mipmaps.length;ye++)I.__webglFramebuffer[ye]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ye=0,Ie=q.length;ye<Ie;ye++){let dt=i.get(q[ye]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&ee(_)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ye=0;ye<q.length;ye++){let Ie=q[ye];I.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ye]);let dt=r.convert(Ie.format,Ie.colorSpace),xe=r.convert(Ie.type),ze=b(Ie.internalFormat,dt,xe,Ie.colorSpace,_.isXRRenderTarget===!0),tt=te(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,ze,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,I.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),we(n.TEXTURE_CUBE_MAP,y);for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)ge(I.__webglFramebuffer[ye][Ie],_,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie);else ge(I.__webglFramebuffer[ye],_,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ye=0,Ie=q.length;ye<Ie;ye++){let dt=q[ye],xe=i.get(dt);t.bindTexture(n.TEXTURE_2D,xe.__webglTexture),we(n.TEXTURE_2D,dt),ge(I.__webglFramebuffer,_,dt,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),p(dt)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ye=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,F.__webglTexture),we(ye,y),y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)ge(I.__webglFramebuffer[Ie],_,y,n.COLOR_ATTACHMENT0,ye,Ie);else ge(I.__webglFramebuffer,_,y,n.COLOR_ATTACHMENT0,ye,0);p(y)&&m(ye),t.unbindTexture()}_.depthBuffer&&Ye(_)}function ae(_){let y=_.textures;for(let I=0,F=y.length;I<F;I++){let q=y[I];if(p(q)){let Y=_.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(q).__webglTexture;t.bindTexture(Y,Ee),m(Y),t.unbindTexture()}}}let O=[],w=[];function se(_){if(_.samples>0){if(ee(_)===!1){let y=_.textures,I=_.width,F=_.height,q=n.COLOR_BUFFER_BIT,Y=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(_),ye=y.length>1;if(ye)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);let dt=i.get(y[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,dt,0)}n.blitFramebuffer(0,0,I,F,0,0,I,F,q,n.NEAREST),l===!0&&(O.length=0,w.length=0,O.push(n.COLOR_ATTACHMENT0+Ie),_.depthBuffer&&_.resolveDepthBuffer===!1&&(O.push(Y),w.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);let dt=i.get(y[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,dt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let y=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function te(_){return Math.min(s.maxSamples,_.samples)}function ee(_){let y=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(_){let y=o.render.frame;h.get(_)!==y&&(h.set(_,y),_.update())}function Le(_,y){let I=_.colorSpace,F=_.format,q=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||I!==vs&&I!==hs&&(Ct.getTransfer(I)===qt?(F!==ni||q!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function R(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=S,this.setTexture2D=K,this.setTexture2DArray=le,this.setTexture3D=$,this.setTextureCube=pe,this.rebindTextures=L,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ee}function z_(n,e){function t(i,s=hs){let r,o=Ct.getTransfer(s);if(i===Vi)return n.UNSIGNED_BYTE;if(i===Nu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fp)return n.BYTE;if(i===dp)return n.SHORT;if(i===Do)return n.UNSIGNED_SHORT;if(i===Uu)return n.INT;if(i===Ws)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===qo)return n.HALF_FLOAT;if(i===mp)return n.ALPHA;if(i===gp)return n.RGB;if(i===ni)return n.RGBA;if(i===xp)return n.LUMINANCE;if(i===yp)return n.LUMINANCE_ALPHA;if(i===Ar)return n.DEPTH_COMPONENT;if(i===Ur)return n.DEPTH_STENCIL;if(i===ku)return n.RED;if(i===Fu)return n.RED_INTEGER;if(i===_p)return n.RG;if(i===Bu)return n.RG_INTEGER;if(i===zu)return n.RGBA_INTEGER;if(i===Ya||i===Za||i===$a||i===Ka)if(o===qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bh||i===Eh||i===Sh||i===wh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===Ah||i===Rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Th||i===Ah)return o===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ch||i===Ph||i===Ih||i===Lh||i===Dh||i===Uh||i===Nh||i===Oh||i===kh||i===Fh||i===Bh||i===zh||i===Hh||i===Gh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ch)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ph)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ih)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===Vh||i===Wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ja)return o===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vp||i===Xh||i===qh||i===Yh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var cu=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Be=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},H_={type:"move"},Co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Vn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Si({vertexShader:G_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends xs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new hu,p=t.getContextAttributes(),m=null,b=null,M=[],E=[],U=new _e,C=null,P=new mn;P.layers.enable(1),P.viewport=new wt;let N=new mn;N.layers.enable(2),N.viewport=new wt;let X=[P,N],v=new cu;v.layers.enable(1),v.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ge=M[oe];return ge===void 0&&(ge=new Co,M[oe]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(oe){let ge=M[oe];return ge===void 0&&(ge=new Co,M[oe]=ge),ge.getGripSpace()},this.getHand=function(oe){let ge=M[oe];return ge===void 0&&(ge=new Co,M[oe]=ge),ge.getHandSpace()};function z(oe){let ge=E.indexOf(oe.inputSource);if(ge===-1)return;let Pe=M[ge];Pe!==void 0&&(Pe.update(oe.inputSource,oe.frame,c||o),Pe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function K(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",le);for(let oe=0;oe<M.length;oe++){let ge=E[oe];ge!==null&&(E[oe]=null,M[oe].disconnect(ge))}S=null,G=null,x.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,b=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",le),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){let ge={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Wi(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ge=null,Pe=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=p.stencil?Ur:Ar,Pe=p.stencil?Dr:Ws);let Ye={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Wi(f.textureWidth,f.textureHeight,{format:ni,type:Vi,depthTexture:new dl(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function le(oe){for(let ge=0;ge<oe.removed.length;ge++){let Pe=oe.removed[ge],Me=E.indexOf(Pe);Me>=0&&(E[Me]=null,M[Me].disconnect(Pe))}for(let ge=0;ge<oe.added.length;ge++){let Pe=oe.added[ge],Me=E.indexOf(Pe);if(Me===-1){for(let L=0;L<M.length;L++)if(L>=E.length){E.push(Pe),Me=L;break}else if(E[L]===null){E[L]=Pe,Me=L;break}if(Me===-1)break}let Ye=M[Me];Ye&&Ye.connect(Pe)}}let $=new D,pe=new D;function ie(oe,ge,Pe){$.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(Pe.matrixWorld);let Me=$.distanceTo(pe),Ye=ge.projectionMatrix.elements,L=Pe.projectionMatrix.elements,V=Ye[14]/(Ye[10]-1),ae=Ye[14]/(Ye[10]+1),O=(Ye[9]+1)/Ye[5],w=(Ye[9]-1)/Ye[5],se=(Ye[8]-1)/Ye[0],te=(L[8]+1)/L[0],ee=V*se,fe=V*te,Le=Me/(-se+te),R=Le*-se;if(ge.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(R),oe.translateZ(Le),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ye[10]===-1)oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let _=V+Le,y=ae+Le,I=ee-R,F=fe+(Me-R),q=O*ae/y*_,Y=w*ae/y*_;oe.projectionMatrix.makePerspective(I,F,q,Y,_,y),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ve(oe,ge){ge===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ge.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ge=oe.near,Pe=oe.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(Pe=x.depthFar)),v.near=N.near=P.near=ge,v.far=N.far=P.far=Pe,(S!==v.near||G!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,G=v.far);let Me=oe.parent,Ye=v.cameras;ve(v,Me);for(let L=0;L<Ye.length;L++)ve(Ye[L],Me);Ye.length===2?ie(v,P,N):v.projectionMatrix.copy(P.projectionMatrix),me(oe,v,Me)};function me(oe,ge,Pe){Pe===null?oe.matrix.copy(ge.matrixWorld):(oe.matrix.copy(Pe.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ge.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=sl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let we=null;function Ke(oe,ge){if(h=ge.getViewerPose(c||o),g=ge,h!==null){let Pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Me=!1;Pe.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let L=0;L<Pe.length;L++){let V=Pe[L],ae=null;if(d!==null)ae=d.getViewport(V);else{let w=u.getViewSubImage(f,V);ae=w.viewport,L===0&&(e.setRenderTargetTextures(b,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(b))}let O=X[L];O===void 0&&(O=new mn,O.layers.enable(L),O.viewport=new wt,X[L]=O),O.matrix.fromArray(V.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(V.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(ae.x,ae.y,ae.width,ae.height),L===0&&(v.matrix.copy(O.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(O)}let Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){let L=u.getDepthInformation(Pe[0]);L&&L.isValid&&L.texture&&x.init(e,L,s.renderState)}}for(let Pe=0;Pe<M.length;Pe++){let Me=E[Pe],Ye=M[Pe];Me!==null&&Ye!==void 0&&Ye.update(Me,ge,c||o)}we&&we(oe,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}let rt=new Tp;rt.setAnimationLoop(Ke),this.setAnimationLoop=function(oe){we=oe},this.dispose=function(){}}},Fs=new yn,W_=new $e;function X_(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,wp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),M=b.envMap,E=b.envMapRotation;M&&(p.envMap.value=M,Fs.copy(E),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),p.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Fs)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function q_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let E=M.program;i.uniformBlockBinding(b,E)}function c(b,M){let E=s[b.id];E===void 0&&(g(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",p));let U=M.program;i.updateUBOMapping(b,U);let C=e.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function h(b){let M=u();b.__bindingPointIndex=M;let E=n.createBuffer(),U=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=s[b.id],E=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,P=E.length;C<P;C++){let N=Array.isArray(E[C])?E[C]:[E[C]];for(let X=0,v=N.length;X<v;X++){let S=N[X];if(d(S,C,X,U)===!0){let G=S.__offset,z=Array.isArray(S.value)?S.value:[S.value],K=0;for(let le=0;le<z.length;le++){let $=z[le],pe=x($);typeof $=="number"||typeof $=="boolean"?(S.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,G+K,S.__data)):$.isMatrix3?(S.__data[0]=$.elements[0],S.__data[1]=$.elements[1],S.__data[2]=$.elements[2],S.__data[3]=0,S.__data[4]=$.elements[3],S.__data[5]=$.elements[4],S.__data[6]=$.elements[5],S.__data[7]=0,S.__data[8]=$.elements[6],S.__data[9]=$.elements[7],S.__data[10]=$.elements[8],S.__data[11]=0):($.toArray(S.__data,K),K+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,M,E,U){let C=b.value,P=M+"_"+E;if(U[P]===void 0)return typeof C=="number"||typeof C=="boolean"?U[P]=C:U[P]=C.clone(),!0;{let N=U[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return U[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(b){let M=b.uniforms,E=0,U=16;for(let P=0,N=M.length;P<N;P++){let X=Array.isArray(M[P])?M[P]:[M[P]];for(let v=0,S=X.length;v<S;v++){let G=X[v],z=Array.isArray(G.value)?G.value:[G.value];for(let K=0,le=z.length;K<le;K++){let $=z[K],pe=x($),ie=E%U,ve=ie%pe.boundary,me=ie+ve;E+=ve,me!==0&&U-me<pe.storage&&(E+=U-me),G.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=pe.storage}}}let C=E%U;return C>0&&(E+=U-C),b.__size=E,b.__cache={},this}function x(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){let M=b.target;M.removeEventListener("dispose",p);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var pl=class{constructor(e={}){let{canvas:t=$m(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=ps,this.toneMappingExposure=1;let M=this,E=!1,U=0,C=0,P=null,N=-1,X=null,v=new wt,S=new wt,G=null,z=new Je(0),K=0,le=t.width,$=t.height,pe=1,ie=null,ve=null,me=new wt(0,0,le,$),we=new wt(0,0,le,$),Ke=!1,rt=new No,oe=!1,ge=!1,Pe=new $e,Me=new $e,Ye=new D,L=new wt,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function O(){return P===null?pe:1}let w=i;function se(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),w===null){let B="webgl2";if(w=se(B,T),w===null)throw se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,ee,fe,Le,R,_,y,I,F,q,Y,Ee,ye,Ie,dt,xe,ze,tt,nt,He,yt,at,Vt,k;function ke(){te=new ly(w),te.init(),at=new z_(w,te),ee=new ny(w,te,e,at),fe=new k_(w),ee.reverseDepthBuffer&&fe.buffers.depth.setReversed(!0),Le=new uy(w),R=new S_,_=new B_(w,te,fe,R,ee,at,Le),y=new sy(M),I=new ay(M),F=new yg(w),Vt=new ey(w,F),q=new cy(w,F,Le,Vt),Y=new dy(w,q,F,Le),nt=new fy(w,ee,_),xe=new iy(R),Ee=new E_(M,y,I,te,ee,Vt,xe),ye=new X_(M,R),Ie=new T_,dt=new L_(te),tt=new Qx(M,y,I,fe,Y,f,l),ze=new N_(M,Y,ee),k=new q_(w,Le,ee,fe),He=new ty(w,te,Le),yt=new hy(w,te,Le),Le.programs=Ee.programs,M.capabilities=ee,M.extensions=te,M.properties=R,M.renderLists=Ie,M.shadowMap=ze,M.state=fe,M.info=Le}ke();let re=new uu(M,w);this.xr=re,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(T){T!==void 0&&(pe=T,this.setSize(le,$,!1))},this.getSize=function(T){return T.set(le,$)},this.setSize=function(T,B,j=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,$=B,t.width=Math.floor(T*pe),t.height=Math.floor(B*pe),j===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(le*pe,$*pe).floor()},this.setDrawingBufferSize=function(T,B,j){le=T,$=B,pe=j,t.width=Math.floor(T*j),t.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,B,j,Q){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,B,j,Q),fe.viewport(v.copy(me).multiplyScalar(pe).round())},this.getScissor=function(T){return T.copy(we)},this.setScissor=function(T,B,j,Q){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,B,j,Q),fe.scissor(S.copy(we).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){fe.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,B=!0,j=!0){let Q=0;if(T){let H=!1;if(P!==null){let Se=P.texture.format;H=Se===zu||Se===Bu||Se===Fu}if(H){let Se=P.texture.type,Ne=Se===Vi||Se===Ws||Se===Do||Se===Dr||Se===Nu||Se===Ou,Ge=tt.getClearColor(),Ve=tt.getClearAlpha(),je=Ge.r,Qe=Ge.g,We=Ge.b;Ne?(d[0]=je,d[1]=Qe,d[2]=We,d[3]=Ve,w.clearBufferuiv(w.COLOR,0,d)):(g[0]=je,g[1]=Qe,g[2]=We,g[3]=Ve,w.clearBufferiv(w.COLOR,0,g))}else Q|=w.COLOR_BUFFER_BIT}B&&(Q|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Q|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Ie.dispose(),dt.dispose(),R.dispose(),y.dispose(),I.dispose(),Y.dispose(),Vt.dispose(),k.dispose(),Ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",Hf),re.removeEventListener("sessionend",Gf),Ls.stop()};function ue(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=Le.autoReset,B=ze.enabled,j=ze.autoUpdate,Q=ze.needsUpdate,H=ze.type;ke(),Le.autoReset=T,ze.enabled=B,ze.autoUpdate=j,ze.needsUpdate=Q,ze.type=H}function Fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){let B=T.target;B.removeEventListener("dispose",_t),rn(B)}function rn(T){Bn(T),R.remove(T)}function Bn(T){let B=R.get(T).programs;B!==void 0&&(B.forEach(function(j){Ee.releaseProgram(j)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,Q,H,Se){B===null&&(B=V);let Ne=H.isMesh&&H.matrixWorld.determinant()<0,Ge=im(T,B,j,Q,H);fe.setMaterial(Q,Ne);let Ve=j.index,je=1;if(Q.wireframe===!0){if(Ve=q.getWireframeAttribute(j),Ve===void 0)return;je=2}let Qe=j.drawRange,We=j.attributes.position,Lt=Qe.start*je,Xt=(Qe.start+Qe.count)*je;Se!==null&&(Lt=Math.max(Lt,Se.start*je),Xt=Math.min(Xt,(Se.start+Se.count)*je)),Ve!==null?(Lt=Math.max(Lt,0),Xt=Math.min(Xt,Ve.count)):We!=null&&(Lt=Math.max(Lt,0),Xt=Math.min(Xt,We.count));let Qt=Xt-Lt;if(Qt<0||Qt===1/0)return;Vt.setup(H,Q,Ge,j,Ve);let Zn,At=He;if(Ve!==null&&(Zn=F.get(Ve),At=yt,At.setIndex(Zn)),H.isMesh)Q.wireframe===!0?(fe.setLineWidth(Q.wireframeLinewidth*O()),At.setMode(w.LINES)):At.setMode(w.TRIANGLES);else if(H.isLine){let Xe=Q.linewidth;Xe===void 0&&(Xe=1),fe.setLineWidth(Xe*O()),H.isLineSegments?At.setMode(w.LINES):H.isLineLoop?At.setMode(w.LINE_LOOP):At.setMode(w.LINE_STRIP)}else H.isPoints?At.setMode(w.POINTS):H.isSprite&&At.setMode(w.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)At.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))At.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Xe=H._multiDrawStarts,Sn=H._multiDrawCounts,Rt=H._multiDrawCount,li=Ve?F.get(Ve).bytesPerElement:1,rr=R.get(Q).currentProgram.getUniforms();for(let $n=0;$n<Rt;$n++)rr.setValue(w,"_gl_DrawID",$n),At.render(Xe[$n]/li,Sn[$n])}else if(H.isInstancedMesh)At.renderInstances(Lt,Qt,H.count);else if(j.isInstancedBufferGeometry){let Xe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Sn=Math.min(j.instanceCount,Xe);At.renderInstances(Lt,Qt,Sn)}else At.render(Lt,Qt)};function St(T,B,j){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,pa(T,B,j),T.side=gs,T.needsUpdate=!0,pa(T,B,j),T.side=an):pa(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),p=dt.get(j),p.init(B),b.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let Q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Se=H.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){let Ge=Se[Ne];St(Ge,j,H),Q.add(Ge)}else St(Se,j,H),Q.add(Se)}),b.pop(),p=null,Q},this.compileAsync=function(T,B,j=null){let Q=this.compile(T,B,j);return new Promise(H=>{function Se(){if(Q.forEach(function(Ne){R.get(Ne).currentProgram.isReady()&&Q.delete(Ne)}),Q.size===0){H(T);return}setTimeout(Se,10)}te.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let zn=null;function Ui(T){zn&&zn(T)}function Hf(){Ls.stop()}function Gf(){Ls.start()}let Ls=new Tp;Ls.setAnimationLoop(Ui),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(T){zn=T,re.setAnimationLoop(T),T===null?Ls.stop():Ls.start()},re.addEventListener("sessionstart",Hf),re.addEventListener("sessionend",Gf),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(B),B=re.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,P),p=dt.get(T,b.length),p.init(B),b.push(p),Me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),rt.setFromProjectionMatrix(Me),ge=this.localClippingEnabled,oe=xe.init(this.clippingPlanes,ge),x=Ie.get(T,m.length),x.init(),m.push(x),re.enabled===!0&&re.isPresenting===!0){let Se=M.xr.getDepthSensingMesh();Se!==null&&Mc(Se,B,-1/0,M.sortObjects)}Mc(T,B,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(ie,ve),ae=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ae&&tt.addToRenderList(x,T),this.info.render.frame++,oe===!0&&xe.beginShadows();let j=p.state.shadowsArray;ze.render(j,T,B),oe===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=x.opaque,H=x.transmissive;if(p.setupLights(),B.isArrayCamera){let Se=B.cameras;if(H.length>0)for(let Ne=0,Ge=Se.length;Ne<Ge;Ne++){let Ve=Se[Ne];Wf(Q,H,T,Ve)}ae&&tt.render(T);for(let Ne=0,Ge=Se.length;Ne<Ge;Ne++){let Ve=Se[Ne];Vf(x,T,Ve,Ve.viewport)}}else H.length>0&&Wf(Q,H,T,B),ae&&tt.render(T),Vf(x,T,B);P!==null&&(_.updateMultisampleRenderTarget(P),_.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(M,T,B),Vt.resetDefaultState(),N=-1,X=null,b.pop(),b.length>0?(p=b[b.length-1],oe===!0&&xe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Mc(T,B,j,Q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||rt.intersectsSprite(T)){Q&&L.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);let Ne=Y.update(T),Ge=T.material;Ge.visible&&x.push(T,Ne,Ge,j,L.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||rt.intersectsObject(T))){let Ne=Y.update(T),Ge=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),L.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),L.copy(Ne.boundingSphere.center)),L.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(Ge)){let Ve=Ne.groups;for(let je=0,Qe=Ve.length;je<Qe;je++){let We=Ve[je],Lt=Ge[We.materialIndex];Lt&&Lt.visible&&x.push(T,Ne,Lt,j,L.z,We)}}else Ge.visible&&x.push(T,Ne,Ge,j,L.z,null)}}let Se=T.children;for(let Ne=0,Ge=Se.length;Ne<Ge;Ne++)Mc(Se[Ne],B,j,Q)}function Vf(T,B,j,Q){let H=T.opaque,Se=T.transmissive,Ne=T.transparent;p.setupLightsView(j),oe===!0&&xe.setGlobalState(M.clippingPlanes,j),Q&&fe.viewport(v.copy(Q)),H.length>0&&da(H,B,j),Se.length>0&&da(Se,B,j),Ne.length>0&&da(Ne,B,j),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Wf(T,B,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Wi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?qo:Vi,minFilter:Vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));let Se=p.state.transmissionRenderTarget[Q.id],Ne=Q.viewport||v;Se.setSize(Ne.z,Ne.w);let Ge=M.getRenderTarget();M.setRenderTarget(Se),M.getClearColor(z),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),ae&&tt.render(j);let Ve=M.toneMapping;M.toneMapping=ps;let je=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),oe===!0&&xe.setGlobalState(M.clippingPlanes,Q),da(T,j,Q),_.updateMultisampleRenderTarget(Se),_.updateRenderTargetMipmap(Se),te.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let We=0,Lt=B.length;We<Lt;We++){let Xt=B[We],Qt=Xt.object,Zn=Xt.geometry,At=Xt.material,Xe=Xt.group;if(At.side===an&&Qt.layers.test(Q.layers)){let Sn=At.side;At.side=gn,At.needsUpdate=!0,Xf(Qt,j,Q,Zn,At,Xe),At.side=Sn,At.needsUpdate=!0,Qe=!0}}Qe===!0&&(_.updateMultisampleRenderTarget(Se),_.updateRenderTargetMipmap(Se))}M.setRenderTarget(Ge),M.setClearColor(z,K),je!==void 0&&(Q.viewport=je),M.toneMapping=Ve}function da(T,B,j){let Q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,Se=T.length;H<Se;H++){let Ne=T[H],Ge=Ne.object,Ve=Ne.geometry,je=Q===null?Ne.material:Q,Qe=Ne.group;Ge.layers.test(j.layers)&&Xf(Ge,B,j,Ve,je,Qe)}}function Xf(T,B,j,Q,H,Se){T.onBeforeRender(M,B,j,Q,H,Se),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(M,B,j,Q,T,Se),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,M.renderBufferDirect(j,B,Q,H,T,Se),H.side=gs,H.needsUpdate=!0,M.renderBufferDirect(j,B,Q,H,T,Se),H.side=an):M.renderBufferDirect(j,B,Q,H,T,Se),T.onAfterRender(M,B,j,Q,H,Se)}function pa(T,B,j){B.isScene!==!0&&(B=V);let Q=R.get(T),H=p.state.lights,Se=p.state.shadowsArray,Ne=H.state.version,Ge=Ee.getParameters(T,H.state,Se,B,j),Ve=Ee.getProgramCacheKey(Ge),je=Q.programs;Q.environment=T.isMeshStandardMaterial?B.environment:null,Q.fog=B.fog,Q.envMap=(T.isMeshStandardMaterial?I:y).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,je===void 0&&(T.addEventListener("dispose",_t),je=new Map,Q.programs=je);let Qe=je.get(Ve);if(Qe!==void 0){if(Q.currentProgram===Qe&&Q.lightsStateVersion===Ne)return Yf(T,Ge),Qe}else Ge.uniforms=Ee.getUniforms(T),T.onBeforeCompile(Ge,M),Qe=Ee.acquireProgram(Ge,Ve),je.set(Ve,Qe),Q.uniforms=Ge.uniforms;let We=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=xe.uniform),Yf(T,Ge),Q.needsLights=rm(T),Q.lightsStateVersion=Ne,Q.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=Qe,Q.uniformsList=null,Qe}function qf(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Cr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Yf(T,B){let j=R.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function im(T,B,j,Q,H){B.isScene!==!0&&(B=V),_.resetTextureUnits();let Se=B.fog,Ne=Q.isMeshStandardMaterial?B.environment:null,Ge=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vs,Ve=(Q.isMeshStandardMaterial?I:y).get(Q.envMap||Ne),je=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qe=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!j.morphAttributes.position,Lt=!!j.morphAttributes.normal,Xt=!!j.morphAttributes.color,Qt=ps;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Qt=M.toneMapping);let Zn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,At=Zn!==void 0?Zn.length:0,Xe=R.get(Q),Sn=p.state.lights;if(oe===!0&&(ge===!0||T!==X)){let ei=T===X&&Q.id===N;xe.setState(Q,T,ei)}let Rt=!1;Q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Sn.state.version||Xe.outputColorSpace!==Ge||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isBatchedMesh&&Xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xe.instancingMorph===!1&&H.morphTexture!==null||Xe.envMap!==Ve||Q.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==xe.numPlanes||Xe.numIntersection!==xe.numIntersection)||Xe.vertexAlphas!==je||Xe.vertexTangents!==Qe||Xe.morphTargets!==We||Xe.morphNormals!==Lt||Xe.morphColors!==Xt||Xe.toneMapping!==Qt||Xe.morphTargetsCount!==At)&&(Rt=!0):(Rt=!0,Xe.__version=Q.version);let li=Xe.currentProgram;Rt===!0&&(li=pa(Q,B,H));let rr=!1,$n=!1,bc=!1,en=li.getUniforms(),is=Xe.uniforms;if(fe.useProgram(li.program)&&(rr=!0,$n=!0,bc=!0),Q.id!==N&&(N=Q.id,$n=!0),rr||X!==T){ee.reverseDepthBuffer?(Pe.copy(T.projectionMatrix),Jm(Pe),jm(Pe),en.setValue(w,"projectionMatrix",Pe)):en.setValue(w,"projectionMatrix",T.projectionMatrix),en.setValue(w,"viewMatrix",T.matrixWorldInverse);let ei=en.map.cameraPosition;ei!==void 0&&ei.setValue(w,Ye.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&en.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&en.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,$n=!0,bc=!0)}if(H.isSkinnedMesh){en.setOptional(w,H,"bindMatrix"),en.setOptional(w,H,"bindMatrixInverse");let ei=H.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),en.setValue(w,"boneTexture",ei.boneTexture,_))}H.isBatchedMesh&&(en.setOptional(w,H,"batchingTexture"),en.setValue(w,"batchingTexture",H._matricesTexture,_),en.setOptional(w,H,"batchingIdTexture"),en.setValue(w,"batchingIdTexture",H._indirectTexture,_),en.setOptional(w,H,"batchingColorTexture"),H._colorsTexture!==null&&en.setValue(w,"batchingColorTexture",H._colorsTexture,_));let Ec=j.morphAttributes;if((Ec.position!==void 0||Ec.normal!==void 0||Ec.color!==void 0)&&nt.update(H,j,li),($n||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,en.setValue(w,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(is.envMap.value=Ve,is.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&B.environment!==null&&(is.envMapIntensity.value=B.environmentIntensity),$n&&(en.setValue(w,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&sm(is,bc),Se&&Q.fog===!0&&ye.refreshFogUniforms(is,Se),ye.refreshMaterialUniforms(is,Q,pe,$,p.state.transmissionRenderTarget[T.id]),Cr.upload(w,qf(Xe),is,_)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Cr.upload(w,qf(Xe),is,_),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&en.setValue(w,"center",H.center),en.setValue(w,"modelViewMatrix",H.modelViewMatrix),en.setValue(w,"normalMatrix",H.normalMatrix),en.setValue(w,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let ei=Q.uniformsGroups;for(let Sc=0,om=ei.length;Sc<om;Sc++){let Zf=ei[Sc];k.update(Zf,li),k.bind(Zf,li)}}return li}function sm(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function rm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,j){R.get(T.texture).__webglTexture=B,R.get(T.depthTexture).__webglTexture=j;let Q=R.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){let j=R.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,j=0){P=T,U=B,C=j;let Q=!0,H=null,Se=!1,Ne=!1;if(T){let Ve=R.get(T);if(Ve.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(w.FRAMEBUFFER,null),Q=!1;else if(Ve.__webglFramebuffer===void 0)_.setupRenderTarget(T);else if(Ve.__hasExternalTextures)_.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let We=T.depthTexture;if(Ve.__boundDepthTexture!==We){if(We!==null&&R.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(T)}}let je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);let Qe=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[B])?H=Qe[B][j]:H=Qe[B],Se=!0):T.samples>0&&_.useMultisampledRTT(T)===!1?H=R.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?H=Qe[j]:H=Qe,v.copy(T.viewport),S.copy(T.scissor),G=T.scissorTest}else v.copy(me).multiplyScalar(pe).floor(),S.copy(we).multiplyScalar(pe).floor(),G=Ke;if(fe.bindFramebuffer(w.FRAMEBUFFER,H)&&Q&&fe.drawBuffers(T,H),fe.viewport(v),fe.scissor(S),fe.setScissorTest(G),Se){let Ve=R.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ve.__webglTexture,j)}else if(Ne){let Ve=R.get(T.texture),je=B||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ve.__webglTexture,j||0,je)}N=-1},this.readRenderTargetPixels=function(T,B,j,Q,H,Se,Ne){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){fe.bindFramebuffer(w.FRAMEBUFFER,Ge);try{let Ve=T.texture,je=Ve.format,Qe=Ve.type;if(!ee.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Q&&j>=0&&j<=T.height-H&&w.readPixels(B,j,Q,H,at.convert(je),at.convert(Qe),Se)}finally{let Ve=P!==null?R.get(P).__webglFramebuffer:null;fe.bindFramebuffer(w.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,B,j,Q,H,Se,Ne){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){let Ve=T.texture,je=Ve.format,Qe=Ve.type;if(!ee.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Q&&j>=0&&j<=T.height-H){fe.bindFramebuffer(w.FRAMEBUFFER,Ge);let We=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,We),w.bufferData(w.PIXEL_PACK_BUFFER,Se.byteLength,w.STREAM_READ),w.readPixels(B,j,Q,H,at.convert(je),at.convert(Qe),0);let Lt=P!==null?R.get(P).__webglFramebuffer:null;fe.bindFramebuffer(w.FRAMEBUFFER,Lt);let Xt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Km(w,Xt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,We),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Se),w.deleteBuffer(We),w.deleteSync(Xt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,j=0){T.isTexture!==!0&&(ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);let Q=Math.pow(2,-j),H=Math.floor(T.image.width*Q),Se=Math.floor(T.image.height*Q),Ne=B!==null?B.x:0,Ge=B!==null?B.y:0;_.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,j,0,0,Ne,Ge,H,Se),fe.unbindTexture()},this.copyTextureToTexture=function(T,B,j=null,Q=null,H=0){T.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],B=arguments[2],H=arguments[3]||0,j=null);let Se,Ne,Ge,Ve,je,Qe;j!==null?(Se=j.max.x-j.min.x,Ne=j.max.y-j.min.y,Ge=j.min.x,Ve=j.min.y):(Se=T.image.width,Ne=T.image.height,Ge=0,Ve=0),Q!==null?(je=Q.x,Qe=Q.y):(je=0,Qe=0);let We=at.convert(B.format),Lt=at.convert(B.type);_.setTexture2D(B,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);let Xt=w.getParameter(w.UNPACK_ROW_LENGTH),Qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Zn=w.getParameter(w.UNPACK_SKIP_PIXELS),At=w.getParameter(w.UNPACK_SKIP_ROWS),Xe=w.getParameter(w.UNPACK_SKIP_IMAGES),Sn=T.isCompressedTexture?T.mipmaps[H]:T.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Sn.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Sn.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ge),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ve),T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,H,je,Qe,Se,Ne,We,Lt,Sn.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,H,je,Qe,Sn.width,Sn.height,We,Sn.data):w.texSubImage2D(w.TEXTURE_2D,H,je,Qe,Se,Ne,We,Lt,Sn),w.pixelStorei(w.UNPACK_ROW_LENGTH,Xt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Zn),w.pixelStorei(w.UNPACK_SKIP_ROWS,At),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Xe),H===0&&B.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,B,j=null,Q=null,H=0){T.isTexture!==!0&&(ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],B=arguments[3],H=arguments[4]||0);let Se,Ne,Ge,Ve,je,Qe,We,Lt,Xt,Qt=T.isCompressedTexture?T.mipmaps[H]:T.image;j!==null?(Se=j.max.x-j.min.x,Ne=j.max.y-j.min.y,Ge=j.max.z-j.min.z,Ve=j.min.x,je=j.min.y,Qe=j.min.z):(Se=Qt.width,Ne=Qt.height,Ge=Qt.depth,Ve=0,je=0,Qe=0),Q!==null?(We=Q.x,Lt=Q.y,Xt=Q.z):(We=0,Lt=0,Xt=0);let Zn=at.convert(B.format),At=at.convert(B.type),Xe;if(B.isData3DTexture)_.setTexture3D(B,0),Xe=w.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)_.setTexture2DArray(B,0),Xe=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);let Sn=w.getParameter(w.UNPACK_ROW_LENGTH),Rt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),li=w.getParameter(w.UNPACK_SKIP_PIXELS),rr=w.getParameter(w.UNPACK_SKIP_ROWS),$n=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Qt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ve),w.pixelStorei(w.UNPACK_SKIP_ROWS,je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Qe),T.isDataTexture||T.isData3DTexture?w.texSubImage3D(Xe,H,We,Lt,Xt,Se,Ne,Ge,Zn,At,Qt.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(Xe,H,We,Lt,Xt,Se,Ne,Ge,Zn,Qt.data):w.texSubImage3D(Xe,H,We,Lt,Xt,Se,Ne,Ge,Zn,At,Qt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Sn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Rt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,li),w.pixelStorei(w.UNPACK_SKIP_ROWS,rr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,$n),H===0&&B.generateMipmaps&&w.generateMipmap(Xe),fe.unbindTexture()},this.initRenderTarget=function(T){R.get(T).__webglFramebuffer===void 0&&_.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?_.setTextureCube(T,0):T.isData3DTexture?_.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_.setTexture2DArray(T,0):_.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){U=0,C=0,P=null,fe.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Hu?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Dl?"display-p3":"srgb"}},ml=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xs=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},gl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new D,Oo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tn=class extends Xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vr,bo=new D,Mr=new D,br=new D,Er=new _e,Eo=new _e,Ip=new $e,Oa=new D,So=new D,ka=new D,Wd=new _e,nh=new _e,Xd=new _e,Jt=class extends Yt{constructor(e=new tn){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gl(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Oo(i,3,0,!1)),vr.setAttribute("uv",new Oo(i,2,3,!1))}this.geometry=vr,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-br.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fa(Oa.set(-.5,-.5,0),br,o,Mr,s,r),Fa(So.set(.5,-.5,0),br,o,Mr,s,r),Fa(ka.set(.5,.5,0),br,o,Mr,s,r),Wd.set(0,0),nh.set(1,0),Xd.set(1,1);let a=e.ray.intersectTriangle(Oa,So,ka,!1,bo);if(a===null&&(Fa(So.set(-.5,.5,0),br,o,Mr,s,r),nh.set(0,1),a=e.ray.intersectTriangle(Oa,ka,So,!1,bo),a===null))return;let l=e.ray.origin.distanceTo(bo);l<e.near||l>e.far||t.push({distance:l,point:bo.clone(),uv:us.getInterpolation(bo,Oa,So,ka,Wd,nh,Xd,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fa(n,e,t,i,s,r){Er.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Eo.x=r*Er.x-s*Er.y,Eo.y=s*Er.x+r*Er.y):Eo.copy(Er),n.copy(e),n.x+=Eo.x,n.y+=Eo.y,n.applyMatrix4(Ip)}var qd=new D,Yd=new wt,Zd=new wt,Y_=new D,$d=new $e,Ba=new D,ih=new ii,Kd=new $e,sh=new Uo,xl=class extends J{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jf,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(s),e.ray.intersectsSphere(ih)!==!1&&(Kd.copy(s).invert(),sh.copy(e.ray).applyMatrix4(Kd),!(this.boundingBox!==null&&sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Yd.fromBufferAttribute(s.attributes.skinIndex,e),Zd.fromBufferAttribute(s.attributes.skinWeight,e),qd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Zd.getComponent(r);if(o!==0){let a=Yd.getComponent(r);$d.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Y_.copy(qd).applyMatrix4($d),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},fu=class extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},yl=class extends Vn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Gn,h=Gn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jd=new $e,Z_=new $e,_l=class n{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new $e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Z_;Jd.multiplyMatrices(a,t[r]),Jd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new yl(t,e,e,ni,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fu),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ko=class extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new $e,jd=new $e,za=[],Qd=new Ei,$_=new $e,wo=new J,To=new ii,Fr=class extends J{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sr),Qd.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sr),To.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(To)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),jd.multiplyMatrices(i,Sr),wo.matrixWorld=jd,wo.raycast(e,za);for(let o=0,a=za.length;o<a;o++){let l=za[o];l.instanceId=r,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yl(new Float32Array(s*this.count),s,this.count,ku,di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fo=class extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ep=new $e,du=new Uo,Ha=new ii,Ga=new D,vl=class extends Yt{constructor(e=new Bt,t=new Fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;ep.copy(s).invert(),du.copy(e.ray).applyMatrix4(ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);Ga.fromBufferAttribute(u,p),tp(Ga,p,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Ga.fromBufferAttribute(u,g),tp(Ga,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tp(n,e,t,i,s,r,o){let a=du.distanceSqToPoint(n);if(a<t){let l=new D;du.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ml=class extends Vn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new _e:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new D,s=[],r=[],o=[],a=new D,l=new $e;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(wn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(wn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bo=class extends si{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pu=class extends Bo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Va=new D,rh=new Vu,oh=new Vu,ah=new Vu,Br=class extends si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Va.subVectors(s[0],s[1]).add(s[0]),c=Va);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Va),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),rh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),oh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),ah.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),oh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ah.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(rh.calc(l),oh.calc(l),ah.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function np(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function K_(n,e){let t=1-n;return t*t*e}function J_(n,e){return 2*(1-n)*n*e}function j_(n,e){return n*n*e}function Po(n,e,t,i){return K_(n,e)+J_(n,t)+j_(n,i)}function Q_(n,e){let t=1-n;return t*t*t*e}function ev(n,e){let t=1-n;return 3*t*t*n*e}function tv(n,e){return 3*(1-n)*n*n*e}function nv(n,e){return n*n*n*e}function Io(n,e,t,i,s){return Q_(n,e)+ev(n,t)+tv(n,i)+nv(n,s)}var bl=class extends si{constructor(e=new _e,t=new _e,i=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mu=class extends si{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y),Io(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends si{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gu=class extends si{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends si{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends si{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y),Po(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(np(a,l.x,c.x,h.x,u.x),np(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},Al=Object.freeze({__proto__:null,ArcCurve:pu,CatmullRomCurve3:Br,CubicBezierCurve:bl,CubicBezierCurve3:mu,EllipseCurve:Bo,LineCurve:El,LineCurve3:gu,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:wl,SplineCurve:Tl}),xu=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Al[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Al[s.type]().fromJSON(s))}return this}},zo=class extends xu{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new El(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Sl(this.currentPoint.clone(),new _e(e,t),new _e(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new bl(this.currentPoint.clone(),new _e(e,t),new _e(i,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Tl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Bo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ho=class n extends Bt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=wn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new D,f=new _e,d=new D,g=new D,x=new D,p=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=t;b++){let M=i+b*h*s,E=Math.sin(M),U=Math.cos(M);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*E,u.y=e[C].y,u.z=e[C].x*U,o.push(u.x,u.y,u.z),f.x=b/t,f.y=C/(e.length-1),a.push(f.x,f.y);let P=l[3*C+0]*E,N=l[3*C+1],X=l[3*C+0]*U;c.push(P,N,X)}}for(let b=0;b<t;b++)for(let M=0;M<e.length-1;M++){let E=M+b*e.length,U=E,C=E+e.length,P=E+e.length+1,N=E+1;r.push(U,C,N),r.push(P,N,C)}this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("uv",new ot(a,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Tn=class n extends Ho{constructor(e=1,t=1,i=4,s=8){let r=new zo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},pi=class n extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,h=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ln=class n extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=i/2,m=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(d,2));function b(){let E=new D,U=new D,C=0,P=(t-e)/i;for(let N=0;N<=r;N++){let X=[],v=N/r,S=v*(t-e)+e;for(let G=0;G<=s;G++){let z=G/s,K=z*l+a,le=Math.sin(K),$=Math.cos(K);U.x=S*le,U.y=-v*i+p,U.z=S*$,u.push(U.x,U.y,U.z),E.set(le,P,$).normalize(),f.push(E.x,E.y,E.z),d.push(z,1-v),X.push(g++)}x.push(X)}for(let N=0;N<s;N++)for(let X=0;X<r;X++){let v=x[X][N],S=x[X+1][N],G=x[X+1][N+1],z=x[X][N+1];e>0&&(h.push(v,S,z),C+=3),t>0&&(h.push(S,G,z),C+=3)}c.addGroup(m,C,0),m+=C}function M(E){let U=g,C=new _e,P=new D,N=0,X=E===!0?e:t,v=E===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),g++;let S=g;for(let G=0;G<=s;G++){let K=G/s*l+a,le=Math.cos(K),$=Math.sin(K);P.x=X*$,P.y=p*v,P.z=X*le,u.push(P.x,P.y,P.z),f.push(0,v,0),C.x=le*.5+.5,C.y=$*.5*v+.5,d.push(C.x,C.y),g++}for(let G=0;G<s;G++){let z=U+G,K=S+G;E===!0?h.push(K,K+1,z):h.push(K+1,K,z),N+=3}c.addGroup(m,N,E===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ys=class n extends ln{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wi=class extends zo{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new zo().fromJSON(s))}return this}},iv={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Lp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=lv(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Go(r,o,t,a,l,d,0),o}};function Lp(n,e,t,i,s){let r,o;if(s===_v(n,e,t,i)>0)for(r=e;r<t;r+=i)o=ip(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=ip(r,n[r],n[r+1],o);return o&&Nl(o,o.next)&&(Wo(o),o=o.next),o}function qs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Nl(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Wo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Go(n,e,t,i,s,r,o){if(!n)return;!o&&r&&dv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?rv(n,i,s,r):sv(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Wo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ov(qs(n),e,t),Go(n,e,t,i,s,r,2)):o===2&&av(n,e,t,i,s,r):Go(qs(n),e,t,i,s,r,1);break}}}function sv(n){let e=n.prev,t=n,i=n.next;if(Kt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Tr(s,a,r,l,o,c,g.x,g.y)&&Kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rv(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=yu(d,g,e,t,i),b=yu(x,p,e,t,i),M=n.prevZ,E=n.nextZ;for(;M&&M.z>=m&&E&&E.z<=b;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Tr(a,h,l,u,c,f,M.x,M.y)&&Kt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Tr(a,h,l,u,c,f,E.x,E.y)&&Kt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Tr(a,h,l,u,c,f,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=b;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Tr(a,h,l,u,c,f,E.x,E.y)&&Kt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function ov(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Nl(s,r)&&Dp(s,i,i.next,r)&&Vo(s,r)&&Vo(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Wo(i),Wo(i.next),i=n=r),i=i.next}while(i!==n);return qs(i)}function av(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gv(o,a)){let l=Up(o,a);o=qs(o,o.next),l=qs(l,l.next),Go(o,e,t,i,s,r,0),Go(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function lv(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Lp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(mv(c));for(s.sort(cv),r=0;r<s.length;r++)t=hv(s[r],t);return t}function cv(n,e){return n.x-e.x}function hv(n,e){let t=uv(n,e);if(!t)return e;let i=Up(t,n);return qs(i,i.next),qs(t,t.next)}function uv(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Tr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Vo(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&fv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function fv(n,e){return Kt(n.prev,n,e.prev)<0&&Kt(e.next,n,n.next)<0}function dv(n,e,t,i){let s=n;do s.z===0&&(s.z=yu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pv(s)}function pv(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function yu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function mv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Tr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function gv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!xv(n,e)&&(Vo(n,e)&&Vo(e,n)&&yv(n,e)&&(Kt(n.prev,n,e.prev)||Kt(n,e.prev,e))||Nl(n,e)&&Kt(n.prev,n,n.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Nl(n,e){return n.x===e.x&&n.y===e.y}function Dp(n,e,t,i){let s=Xa(Kt(n,e,t)),r=Xa(Kt(n,e,i)),o=Xa(Kt(t,i,n)),a=Xa(Kt(t,i,e));return!!(s!==r&&o!==a||s===0&&Wa(n,t,e)||r===0&&Wa(n,i,e)||o===0&&Wa(t,n,i)||a===0&&Wa(t,e,i))}function Wa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Xa(n){return n>0?1:n<0?-1:0}function xv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Dp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vo(n,e){return Kt(n.prev,n,n.next)<0?Kt(n,e,n.next)>=0&&Kt(n,n.prev,e)>=0:Kt(n,e,n.prev)<0||Kt(n,n.next,e)<0}function yv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Up(n,e){let t=new _u(n.i,n.x,n.y),i=new _u(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ip(n,e,t,i){let s=new _u(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _u(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _v(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ms=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];sp(e),rp(i,e);let o=e.length;t.forEach(sp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,rp(i,t[l]);let a=iv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ys=class n extends Bt{constructor(e=new wi([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:vv,M,E=!1,U,C,P,N;m&&(M=m.getSpacedPoints(h),E=!0,f=!1,U=m.computeFrenetFrames(h,!1),C=new D,P=new D,N=new D),f||(p=0,d=0,g=0,x=0);let X=a.extractPoints(c),v=X.shape,S=X.holes;if(!ms.isClockWise(v)){v=v.reverse();for(let O=0,w=S.length;O<w;O++){let se=S[O];ms.isClockWise(se)&&(S[O]=se.reverse())}}let z=ms.triangulateShape(v,S),K=v;for(let O=0,w=S.length;O<w;O++){let se=S[O];v=v.concat(se)}function le(O,w,se){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(w,se)}let $=v.length,pe=z.length;function ie(O,w,se){let te,ee,fe,Le=O.x-w.x,R=O.y-w.y,_=se.x-O.x,y=se.y-O.y,I=Le*Le+R*R,F=Le*y-R*_;if(Math.abs(F)>Number.EPSILON){let q=Math.sqrt(I),Y=Math.sqrt(_*_+y*y),Ee=w.x-R/q,ye=w.y+Le/q,Ie=se.x-y/Y,dt=se.y+_/Y,xe=((Ie-Ee)*y-(dt-ye)*_)/(Le*y-R*_);te=Ee+Le*xe-O.x,ee=ye+R*xe-O.y;let ze=te*te+ee*ee;if(ze<=2)return new _e(te,ee);fe=Math.sqrt(ze/2)}else{let q=!1;Le>Number.EPSILON?_>Number.EPSILON&&(q=!0):Le<-Number.EPSILON?_<-Number.EPSILON&&(q=!0):Math.sign(R)===Math.sign(y)&&(q=!0),q?(te=-R,ee=Le,fe=Math.sqrt(I)):(te=Le,ee=R,fe=Math.sqrt(I/2))}return new _e(te/fe,ee/fe)}let ve=[];for(let O=0,w=K.length,se=w-1,te=O+1;O<w;O++,se++,te++)se===w&&(se=0),te===w&&(te=0),ve[O]=ie(K[O],K[se],K[te]);let me=[],we,Ke=ve.concat();for(let O=0,w=S.length;O<w;O++){let se=S[O];we=[];for(let te=0,ee=se.length,fe=ee-1,Le=te+1;te<ee;te++,fe++,Le++)fe===ee&&(fe=0),Le===ee&&(Le=0),we[te]=ie(se[te],se[fe],se[Le]);me.push(we),Ke=Ke.concat(we)}for(let O=0;O<p;O++){let w=O/p,se=d*Math.cos(w*Math.PI/2),te=g*Math.sin(w*Math.PI/2)+x;for(let ee=0,fe=K.length;ee<fe;ee++){let Le=le(K[ee],ve[ee],te);Me(Le.x,Le.y,-se)}for(let ee=0,fe=S.length;ee<fe;ee++){let Le=S[ee];we=me[ee];for(let R=0,_=Le.length;R<_;R++){let y=le(Le[R],we[R],te);Me(y.x,y.y,-se)}}}let rt=g+x;for(let O=0;O<$;O++){let w=f?le(v[O],Ke[O],rt):v[O];E?(P.copy(U.normals[0]).multiplyScalar(w.x),C.copy(U.binormals[0]).multiplyScalar(w.y),N.copy(M[0]).add(P).add(C),Me(N.x,N.y,N.z)):Me(w.x,w.y,0)}for(let O=1;O<=h;O++)for(let w=0;w<$;w++){let se=f?le(v[w],Ke[w],rt):v[w];E?(P.copy(U.normals[O]).multiplyScalar(se.x),C.copy(U.binormals[O]).multiplyScalar(se.y),N.copy(M[O]).add(P).add(C),Me(N.x,N.y,N.z)):Me(se.x,se.y,u/h*O)}for(let O=p-1;O>=0;O--){let w=O/p,se=d*Math.cos(w*Math.PI/2),te=g*Math.sin(w*Math.PI/2)+x;for(let ee=0,fe=K.length;ee<fe;ee++){let Le=le(K[ee],ve[ee],te);Me(Le.x,Le.y,u+se)}for(let ee=0,fe=S.length;ee<fe;ee++){let Le=S[ee];we=me[ee];for(let R=0,_=Le.length;R<_;R++){let y=le(Le[R],we[R],te);E?Me(y.x,y.y+M[h-1].y,M[h-1].x+se):Me(y.x,y.y,u+se)}}}oe(),ge();function oe(){let O=s.length/3;if(f){let w=0,se=$*w;for(let te=0;te<pe;te++){let ee=z[te];Ye(ee[2]+se,ee[1]+se,ee[0]+se)}w=h+p*2,se=$*w;for(let te=0;te<pe;te++){let ee=z[te];Ye(ee[0]+se,ee[1]+se,ee[2]+se)}}else{for(let w=0;w<pe;w++){let se=z[w];Ye(se[2],se[1],se[0])}for(let w=0;w<pe;w++){let se=z[w];Ye(se[0]+$*h,se[1]+$*h,se[2]+$*h)}}i.addGroup(O,s.length/3-O,0)}function ge(){let O=s.length/3,w=0;Pe(K,w),w+=K.length;for(let se=0,te=S.length;se<te;se++){let ee=S[se];Pe(ee,w),w+=ee.length}i.addGroup(O,s.length/3-O,1)}function Pe(O,w){let se=O.length;for(;--se>=0;){let te=se,ee=se-1;ee<0&&(ee=O.length-1);for(let fe=0,Le=h+p*2;fe<Le;fe++){let R=$*fe,_=$*(fe+1),y=w+te+R,I=w+ee+R,F=w+ee+_,q=w+te+_;L(y,I,F,q)}}}function Me(O,w,se){l.push(O),l.push(w),l.push(se)}function Ye(O,w,se){V(O),V(w),V(se);let te=s.length/3,ee=b.generateTopUV(i,s,te-3,te-2,te-1);ae(ee[0]),ae(ee[1]),ae(ee[2])}function L(O,w,se,te){V(O),V(w),V(te),V(w),V(se),V(te);let ee=s.length/3,fe=b.generateSideWallUV(i,s,ee-6,ee-3,ee-2,ee-1);ae(fe[0]),ae(fe[1]),ae(fe[3]),ae(fe[1]),ae(fe[2]),ae(fe[3])}function V(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function ae(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Mv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Al[s.type]().fromJSON(s)),new n(i,e.options)}},vv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new _e(r,o),new _e(a,l),new _e(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-u),new _e(f,1-g),new _e(x,1-m)]:[new _e(a,1-l),new _e(h,1-u),new _e(d,1-g),new _e(p,1-m)]}};function Mv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Rl=class n extends Bt{constructor(e=new wi([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;ms.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let b=g[p];ms.isClockWise(b)===!0&&(g[p]=b.reverse())}let x=ms.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){let b=d[p];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=x.length;p<m;p++){let b=x[p],M=b[0]+u,E=b[1]+u,U=b[2]+u;i.push(M,E,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return bv(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function bv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Et=class n extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,f=new D,d=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let b=[],M=m/i,E=0;m===0&&o===0?E=.5/t:m===i&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){let C=U/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(C+E,1-M),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){let M=h[m][b+1],E=h[m][b],U=h[m+1][b],C=h[m+1][b+1];(m!==0||o>0)&&d.push(M,E,C),(m!==i-1||l<Math.PI)&&d.push(E,U,C)}this.setIndex(d),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _n=class n extends Bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,p=d/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(x,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Cl=class n extends Bt{constructor(e=new wl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new _e,h=new D,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(d,2));function x(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),b(),m()}function p(M){h=e.getPointAt(M/t,h);let E=o.normals[M],U=o.binormals[M];for(let C=0;C<=s;C++){let P=C/s*Math.PI*2,N=Math.sin(P),X=-Math.cos(P);l.x=X*E.x+N*U.x,l.y=X*E.y+N*U.y,l.z=X*E.z+N*U.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=t;M++)for(let E=1;E<=s;E++){let U=(s+1)*(M-1)+(E-1),C=(s+1)*M+(E-1),P=(s+1)*M+E,N=(s+1)*(M-1)+E;g.push(U,C,N),g.push(C,P,N)}}function b(){for(let M=0;M<=t;M++)for(let E=0;E<=s;E++)c.x=M/t,c.y=E/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Al[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var jt=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function qa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ev(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var zr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vu=class extends zr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qf,endingEnd:Qf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ed:r=e,a=2*t-i;break;case td:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ed:o=e,l=2*i-t;break;case td:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,b=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*x+.5*g,E=d*p-d*x;for(let U=0;U!==a;++U)r[U]=m*o[h+U]+b*o[c+U]+M*o[l+U]+E*o[u+U];return r}},Mu=class extends zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},bu=class extends zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qa:t=this.InterpolantFactoryMethodDiscrete;break;case Zh:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return Zh;case this.InterpolantFactoryMethodSmooth:return Tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ev(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Zh;var Zs=class extends mi{constructor(e,t,i){super(e,t,i)}};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Qa;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Eu=class extends mi{};Eu.prototype.ValueTypeName="color";var Su=class extends mi{};Su.prototype.ValueTypeName="number";var wu=class extends zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pl=class extends mi{InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}};Pl.prototype.ValueTypeName="quaternion";Pl.prototype.InterpolantFactoryMethodSmooth=void 0;var $s=class extends mi{constructor(e,t,i){super(e,t,i)}};$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Qa;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Tu=class extends mi{};Tu.prototype.ValueTypeName="vector";var Au=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Sv=new Au,Ru=class{constructor(e){this.manager=e!==void 0?e:Sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gr=class extends Hr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},lh=new $e,op=new D,ap=new D,Xo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cu=class extends Xo{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=sl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Il=class extends Hr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lp=new $e,Ao=new D,ch=new D,Pu=class extends Xo{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ao),ch.copy(i.position),ch.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ch),i.updateMatrixWorld(),s.makeTranslation(-Ao.x,-Ao.y,-Ao.z),lp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp)}},_s=class extends Hr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Iu=class extends Xo{constructor(){super(new fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wu="\\[\\]\\.:\\/",wv=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",Tv="[^"+Wu.replace("\\.","")+"]",Av=/((?:WC+[\/:])*)/.source.replace("WC",Xu),Rv=/(WCOD+)?/.source.replace("WCOD",Tv),Cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),Pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),Iv=new RegExp("^"+Av+Rv+Cv+Pv+"$"),Lv=["material","materials","bones","map"],Lu=class{constructor(e,t,i){let s=i||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},$t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wv,"")}static parseTrackName(e){let t=Iv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Lv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=Lu;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var KM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Ol=class extends Xs{constructor(){super();let e=new Un;e.deleteAttribute("uv");let t=new jt({side:gn}),i=new jt,s=new _s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new J(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new J(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new J(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new J(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new J(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new J(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new J(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new J(e,Xr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new J(e,Xr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new J(e,Xr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new J(e,Xr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new J(e,Xr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new J(e,Xr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Xr(n){let e=new ut;return e.color.setScalar(n),e}var ne={mx:0,my:0,lx:0,ly:0,fire:!1,aim:!1,sprint:!1,use:!1,gas:0,brake:0,pressed:new Set,device:"kbm",padName:"",sens:1,invertY:!1},fn=new Set,Yo=n=>ne.pressed.add(n),Nn=n=>ne.pressed.has(n);function qu(){ne.pressed.clear(),ne.lx=0,ne.ly=0}var Np={KeyR:"reload",KeyF:"use",KeyE:"use",KeyQ:"swap",Digit1:"slot1",Digit2:"slot2",Digit3:"slot3",KeyV:"knife",KeyG:"grenade",KeyC:"view",KeyB:"build",Space:"jump",Escape:"pause",KeyP:"pause",KeyT:"rotate",KeyX:"rotate",Tab:"scores"};function kp(n,e){addEventListener("keydown",t=>{if(t.repeat&&(t.code==="KeyF"||t.code==="KeyE"))return;fn.add(t.code);let i=Np[t.code];i&&!t.repeat&&Yo(i),i==="use"&&(ne.use=!0),(t.code==="Tab"||t.code==="Space")&&t.preventDefault(),ne.device!=="kbm"&&/Key|Digit|Space|Shift/.test(t.code)&&Js("kbm")}),addEventListener("keyup",t=>{fn.delete(t.code),Np[t.code]==="use"&&(ne.use=fn.has("KeyF")||fn.has("KeyE"))}),addEventListener("blur",()=>{fn.clear(),ne.fire=ne.aim=ne.use=!1}),n.addEventListener("mousedown",t=>{if(ne.device!=="touch"){if(Js("kbm"),document.pointerLockElement!==n){e.canLock()&&n.requestPointerLock?.();return}t.button===0&&(ne.fire=!0),t.button===2&&(ne.aim=!0)}}),addEventListener("mouseup",t=>{t.button===0&&(ne.fire=!1),t.button===2&&(ne.aim=!1)}),n.addEventListener("contextmenu",t=>t.preventDefault()),addEventListener("mousemove",t=>{document.pointerLockElement===n&&(ne.lx+=t.movementX*.0022*ne.sens,ne.ly+=t.movementY*.0022*ne.sens*(ne.invertY?-1:1))}),addEventListener("wheel",t=>{document.pointerLockElement===n&&Yo(t.deltaY>0?"swap":"swapBack")},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==n&&(ne.fire=ne.aim=!1,e.onUnlock())}),Dv(e),addEventListener("gamepadconnected",t=>{ne.padName=t.gamepad.id,e.toast((/dualsense|054c|wireless controller|ps5/i.test(t.gamepad.id)?"PS5 controller":"Controller")+" connected")}),addEventListener("gamepaddisconnected",()=>{e.toast("Controller disconnected")})}function Js(n){ne.device!==n&&(ne.device=n,document.body.dataset.device=n)}function Fp(){ne.device==="kbm"&&(ne.mx=(fn.has("KeyD")||fn.has("ArrowRight")?1:0)-(fn.has("KeyA")||fn.has("ArrowLeft")?1:0),ne.my=(fn.has("KeyW")||fn.has("ArrowUp")?1:0)-(fn.has("KeyS")||fn.has("ArrowDown")?1:0),ne.up=fn.has("Space")?1:0,ne.down=fn.has("ControlLeft")||fn.has("ControlRight")||fn.has("KeyZ")?1:0,ne.sprint=fn.has("ShiftLeft")||fn.has("ShiftRight"),ne.gas=ne.my>0?1:0,ne.brake=ne.my<0?1:0)}var kl=[],Op=0;function Bp(n){let e=navigator.getGamepads?navigator.getGamepads():[],t=null;for(let g of e)if(g&&g.connected){t=g;break}if(!t)return;let i=g=>t.buttons[g]?t.buttons[g].value>.4||t.buttons[g].pressed:!1,s=g=>t.buttons[g]?t.buttons[g].value:0,r=(g,x=.16)=>Math.abs(g)<x?0:(g-Math.sign(g)*x)/(1-x),o=r(t.axes[0]||0),a=r(t.axes[1]||0),l=r(t.axes[2]||0,.12),c=r(t.axes[3]||0,.12),h=Math.abs(o)+Math.abs(a)+Math.abs(l)+Math.abs(c)>0;for(let g=0;g<16;g++)i(g)&&(h=!0);if(h?(Js("pad"),Op=0):Op+=n,ne.device!=="pad"){for(let g=0;g<17;g++)kl[g]=i(g);return}ne.mx=o,ne.my=-a;let u=g=>Math.sign(g)*Math.pow(Math.abs(g),1.8),f=i(6)?.55:1;ne.lx+=u(l)*3.4*n*ne.sens*f,ne.ly+=u(c)*2.4*n*ne.sens*f*(ne.invertY?-1:1),ne.fire=i(7),ne.aim=i(6),ne.gas=s(7),ne.brake=s(6),i(10)&&!kl[10]&&(ne.sprintToggle=!ne.sprintToggle),Math.hypot(o,a)<.3&&(ne.sprintToggle=!1),ne.sprint=!!ne.sprintToggle,ne.use=i(2);let d=(g,x)=>{i(g)&&!kl[g]&&Yo(x)};d(0,"jump"),d(1,"build"),d(2,"use"),d(2,"reload"),d(3,"swap"),d(5,"knife"),d(4,"grenade"),d(11,"knife"),d(9,"pause"),d(12,"view"),d(13,"rotate"),d(14,"swapBack"),d(15,"swap"),d(8,"scores");for(let g=0;g<17;g++)kl[g]=i(g)}function qr(n,e,t){if(ne.device!=="pad")return;let i=navigator.getGamepads?navigator.getGamepads():[];for(let s of i)s&&s.vibrationActuator&&s.vibrationActuator.playEffect?.("dual-rumble",{duration:t,strongMagnitude:n,weakMagnitude:e}).catch?.(()=>{})}function Dv(n){let e=document.getElementById("touch"),t=document.getElementById("stick"),i=document.getElementById("knob"),s=null,r=0,o=0,a=new Map,l=()=>Math.min(70,innerHeight*.12),c=f=>{if(ne.device!=="touch"&&Js("touch"),!!n.playing())for(let d of f.changedTouches){let g=document.elementFromPoint(d.clientX,d.clientY),x=g&&g.closest&&g.closest("[data-b]");if(x){let p=x.dataset.b;x.classList.add("on"),a.set(d.identifier,{x:d.clientX,y:d.clientY,btn:p,el:x}),p==="fire"?ne.fire=!0:p==="aim"?(ne.aim=!ne.aim,x.classList.toggle("lock",ne.aim)):p==="use"?(ne.use=!0,Yo("use")):p==="sprint"?(ne.sprintToggle=!ne.sprintToggle,x.classList.toggle("lock",ne.sprintToggle)):Yo(p),f.preventDefault();continue}d.clientX<innerWidth*.42&&s===null?(s=d.identifier,r=d.clientX,o=d.clientY,t.style.left=r+"px",t.style.top=o+"px",t.classList.add("on"),i.style.transform="translate(-50%,-50%)"):a.set(d.identifier,{x:d.clientX,y:d.clientY,btn:null}),f.preventDefault()}},h=f=>{for(let d of f.changedTouches){if(d.identifier===s){let x=d.clientX-r,p=d.clientY-o,m=Math.hypot(x,p),b=l();m>b&&(x*=b/m,p*=b/m),ne.mx=x/b,ne.my=-p/b,ne.gas=Math.max(0,ne.my),ne.brake=Math.max(0,-ne.my),i.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${p}px))`,Math.hypot(ne.mx,ne.my)>.97&&ne.my>.8?ne.autoSprint=!0:ne.my<.5&&(ne.autoSprint=!1)}let g=a.get(d.identifier);if(g&&(g.btn===null||g.btn==="fire"||g.btn==="aim")){let x=.0052*ne.sens*(ne.aim?.6:1);ne.lx+=(d.clientX-g.x)*x,ne.ly+=(d.clientY-g.y)*x*.85*(ne.invertY?-1:1),g.x=d.clientX,g.y=d.clientY}}f.preventDefault()},u=f=>{for(let d of f.changedTouches){d.identifier===s&&(s=null,ne.mx=ne.my=0,ne.gas=ne.brake=0,ne.autoSprint=!1,t.classList.remove("on"));let g=a.get(d.identifier);g&&(g.btn==="fire"&&(ne.fire=!1),g.btn==="use"&&(ne.use=!1),g.el&&g.el.classList.remove("on"),a.delete(d.identifier))}};e.addEventListener("touchstart",c,{passive:!1}),e.addEventListener("touchmove",h,{passive:!1}),e.addEventListener("touchend",u),e.addEventListener("touchcancel",u),addEventListener("touchstart",()=>{ne.device!=="touch"&&!n.playing()&&Js("touch")},{passive:!0})}function Yu(){return ne.device==="touch"&&(ne.sprintToggle||ne.autoSprint)}var he=null,vn=null,js=null,Ms=null,Uv=null,zp=.8;function Hp(){if(he){he.state==="suspended"&&he.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;he=new n,vn=he.createGain(),vn.gain.value=zp;let e=he.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=6,vn.connect(e),e.connect(he.destination),js=he.createBuffer(1,he.sampleRate*1.5,he.sampleRate);let t=js.getChannelData(0);for(let r=0;r<t.length;r++)t[r]=Math.random()*2-1;Fl=he.createConvolver();let i=he.sampleRate*1.6|0,s=he.createBuffer(2,i,he.sampleRate);for(let r=0;r<2;r++){let o=s.getChannelData(r);for(let a=0;a<i;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/i,3.2)}Fl.buffer=s,gi=he.createGain(),gi.gain.value=.3,gi.connect(Fl),Fl.connect(vn),kv()}var Fl=null,gi=null,Zu=0;function $u(n){zp=n,vn&&(vn.gain.value=n)}var it=()=>he.currentTime;function Ku(n,e,t,i,s,r=1e-4){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(i,e+t),n.gain.exponentialRampToValueAtTime(r,e+t+s)}function vt(n,e,t,i,s,r="lowpass",o=vn,a=1){let l=he.createBufferSource();l.buffer=js,l.playbackRate.value=a;let c=he.createBiquadFilter();c.type=r,c.frequency.value=t,c.Q.value=i;let h=he.createGain();return Ku(h,n,.003,s,e),l.connect(c),c.connect(h),h.connect(o),l.start(n,Math.random()),l.stop(n+e+.05),c}function mt(n,e,t,i,s,r="sine",o=vn){let a=he.createOscillator();a.type=r,a.frequency.setValueAtTime(e,n),a.frequency.exponentialRampToValueAtTime(Math.max(20,t),n+i);let l=he.createGain();Ku(l,n,.005,s,i),a.connect(l),l.connect(o),a.start(n),a.stop(n+i+.05)}function Bl(n){let e=he.createStereoPanner?he.createStereoPanner():null;return e?(e.pan.value=Math.max(-1,Math.min(1,n)),e.connect(vn),e):vn}function Nv(n,e,t,i){if(!he)return;let s=it();if(i==="ray"||t&&i!=="wave"){let c=he.createOscillator();c.type="square",c.frequency.setValueAtTime(2400*n,s),c.frequency.exponentialRampToValueAtTime(260,s+.22);let h=he.createOscillator();h.frequency.value=60;let u=he.createGain();u.gain.value=300,h.connect(u),u.connect(c.frequency);let f=he.createBiquadFilter();f.type="bandpass",f.frequency.value=1400,f.Q.value=1.2;let d=he.createGain();d.gain.setValueAtTime(1e-4,s),d.gain.exponentialRampToValueAtTime(.4,s+.004),d.gain.exponentialRampToValueAtTime(1e-4,s+.28),c.connect(f),f.connect(d),d.connect(vn),gi&&d.connect(gi),c.start(s),h.start(s),c.stop(s+.3),h.stop(s+.3),mt(s,900,120,.25,.2,"sawtooth"),vt(s,.12,4e3,3,.15,"bandpass");return}if(i==="wave"){mt(s,90,28,.9,1,"sine"),mt(s,180,40,.5,.5,"triangle");let c=he.createBufferSource();c.buffer=js;let h=he.createBiquadFilter();h.type="bandpass",h.Q.value=.8,h.frequency.setValueAtTime(300,s),h.frequency.exponentialRampToValueAtTime(3e3,s+.25),h.frequency.exponentialRampToValueAtTime(200,s+1.2);let u=he.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(.9,s+.02),u.gain.exponentialRampToValueAtTime(1e-4,s+1.2),c.connect(h),h.connect(u),u.connect(vn),gi&&u.connect(gi),c.start(s),c.stop(s+1.4);return}let r=e;vt(s,.018,7e3*n,.6,.85,"highpass");let o=he.createBufferSource();o.buffer=js,o.playbackRate.value=.9+Math.random()*.2;let a=he.createBiquadFilter();a.type="lowpass",a.Q.value=.9,a.frequency.setValueAtTime((5200-r*2600)*n,s),a.frequency.exponentialRampToValueAtTime(380+300*(1-r),s+.12+r*.2);let l=he.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.9,s+.002),l.gain.exponentialRampToValueAtTime(.25,s+.04+r*.05),l.gain.exponentialRampToValueAtTime(1e-4,s+.22+r*.45),o.connect(a),a.connect(l),l.connect(vn),gi&&l.connect(gi),o.start(s,Math.random()),o.stop(s+.9),mt(s,(120+40*(1-r))*n,38,.1+r*.22,.6+r*.45,"sine"),vt(s+.045+r*.02,.02,2200,4,.12,"bandpass"),vt(s+.11+r*.06,.18+r*.2,900+700*(1-r),.6,.1+r*.06)}function qi(n,e,t,i,s={}){if(Zu>7)return;Zu++,setTimeout(()=>Zu--,(e+.2)*1e3);let r=s.dest||vn,o=s.vol??.3,a=he.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(t,n),a.frequency.linearRampToValueAtTime(i,n+e);let l=he.createOscillator();l.type="sawtooth",l.frequency.value=s.fry??18+Math.random()*14;let c=he.createGain();c.gain.value=t*(s.rough??.35),l.connect(c),c.connect(a.frequency);let h=he.createBufferSource();h.buffer=js,h.playbackRate.value=.6;let u=he.createBiquadFilter();u.type="bandpass",u.frequency.value=s.rasp??1100,u.Q.value=.9;let f=he.createGain();f.gain.value=s.breath??.5,h.connect(u),u.connect(f);let d=he.createGain();a.connect(d),f.connect(d);let g=s.vowel||[520,900],x=s.close??.7,p=he.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(g[0],n),p.frequency.linearRampToValueAtTime(g[0]*x,n+e),p.Q.value=5;let m=he.createBiquadFilter();m.type="bandpass",m.frequency.setValueAtTime(g[1],n),m.frequency.linearRampToValueAtTime(g[1]*x,n+e),m.Q.value=7;let b=he.createGain();b.gain.value=.6;let M=he.createOscillator();M.frequency.value=s.gurgle??7+Math.random()*5;let E=he.createGain();E.gain.value=.45,M.connect(E),E.connect(b.gain);let U=he.createGain();U.gain.setValueAtTime(1e-4,n),U.gain.exponentialRampToValueAtTime(o,n+(s.att??.08)),U.gain.setValueAtTime(o,n+e*.6),U.gain.exponentialRampToValueAtTime(1e-4,n+e),d.connect(p),d.connect(m),p.connect(b),m.connect(b),b.connect(U),U.connect(r),gi&&!s.dry&&U.connect(gi);for(let C of[a,l,h,M])C.start(n),C.stop(n+e+.05)}var bs={walker:{f:85,vowel:[480,820],rough:.4},runner:{f:150,vowel:[700,1300],rough:.55,rasp:1800},fat:{f:55,vowel:[380,700],rough:.5,rasp:700},toxic:{f:95,vowel:[420,1e3],rough:.6,gurgle:14},screamer:{f:220,vowel:[900,1700],rough:.3,rasp:2600},boss:{f:42,vowel:[320,600],rough:.7,rasp:600}};function Yr(n=6,e=0){let t=he.createGain();return t.gain.value=Math.max(.05,Math.min(1,6/Math.max(2,n))),t.connect(Bl(e)),t}var Ov={zgroan(n="walker",e=6,t=0){if(!he)return;let i=it(),s=bs[n]||bs.walker,r=Math.random(),o=Yr(e,t);n==="runner"?qi(i,.5+r*.4,s.f*1.2,s.f*.8,{...s,dest:o,vol:.32,close:.8,att:.03}):n==="toxic"?(qi(i,1+r*.6,s.f,s.f*.75,{...s,dest:o,vol:.3}),vt(i+.3,.5,400,3,.08,"bandpass",o)):qi(i,.9+r*.9,s.f*(.9+r*.25),s.f*(.7+r*.15),{...s,dest:o,vol:n==="boss"?.5:.3})},zattack(n="walker",e=2,t=0){if(!he)return;let i=it(),s=bs[n]||bs.walker,r=Yr(e,t);qi(i,.32,s.f*1.9,s.f*1.2,{...s,dest:r,vol:.42,rough:.8,att:.015,vowel:[s.vowel[0]*1.3,s.vowel[1]*1.3],close:1,breath:.8}),vt(i+.18,.06,1800,2,.25,"bandpass",r)},zhurt(n="walker",e=4,t=0){if(!he)return;let i=it(),s=bs[n]||bs.walker;qi(i,.18,s.f*1.6,s.f*1.1,{...s,dest:Yr(e,t),vol:.3,att:.01,close:.9,rough:.6,dry:!0})},zdeath(n="walker",e=4,t=0){if(!he)return;let i=it(),s=bs[n]||bs.walker,r=Yr(e,t);qi(i,.9,s.f*1.3,s.f*.45,{...s,dest:r,vol:.34,close:.5,gurgle:16,breath:.9}),vt(i+.5,.4,500,2,.12,"bandpass",r)},zscream(n=8,e=0){if(!he)return;let t=it(),i=Yr(n*.5,e);qi(t,1.6,420,300,{dest:i,vol:.6,vowel:[1e3,2e3],rough:.25,rasp:3e3,breath:1.2,att:.05,close:.85,fry:40}),qi(t+.05,1.5,610,380,{dest:i,vol:.35,vowel:[1300,2600],rough:.2,rasp:3500,breath:.8,close:.9,fry:55})},zboss(n=8,e=0){if(!he)return;let t=it(),i=Yr(n*.4,e);qi(t,2.2,48,30,{dest:i,vol:.7,vowel:[300,560],rough:.8,rasp:500,breath:1,close:.6}),mt(t,60,30,2,.4,"sine",i)},whisper(n=0){if(!he)return;let e=it(),t=Bl(n);for(let i=0;i<5;i++)vt(e+i*.18+Math.random()*.1,.16,2500+Math.random()*2500,6,.06,"bandpass",t)},skid(n=1){if(!he)return;let e=it();vt(e,.25,1800+Math.random()*600,3,.1*n,"bandpass")},nos(){if(!he)return;let n=it();vt(n,.8,900,.6,.4,"highpass"),mt(n,200,900,.6,.1,"sawtooth")},rotor(n=1){if(!he)return;let e=it();for(let t=0;t<4;t++)vt(e+t*.075,.06,220,1.5,.3*n,"lowpass")},droneBuzz(){if(!he)return;let n=it();mt(n,240,260,.2,.05,"sawtooth")},beep(n=880){if(!he)return;let e=it();mt(e,n,n,.08,.1,"square")},page(){if(!he)return;let n=it();vt(n,.25,3e3,1,.12,"bandpass")}},st={...Ov,shot(n=1,e=.25,t=!1,i=""){Nv(n,e,t,i)},dry(){if(!he)return;let n=it();mt(n,1800,1500,.03,.15,"square")},reload(n){if(!he)return;let e=it();vt(e,.05,n?3500:1800,3,.35,"bandpass"),mt(e,n?900:500,300,.05,.12,"square")},hit(n){if(!he)return;let e=it();vt(e,.06,n?2500:1100,1.5,.35,"bandpass"),n&&mt(e,1400,900,.08,.15,"triangle")},hitmarker(){if(!he)return;let n=it();mt(n,2600,2400,.03,.08,"square")},kill(){if(!he)return;let n=it();vt(n,.18,600,1,.3)},knife(){if(!he)return;let n=it();vt(n,.12,4500,2,.35,"bandpass",vn,1.4)},groan(n=0,e=5){if(!he)return;let t=it(),i=Math.min(.35,1.6/(e+1)),s=Bl(n),r=70+Math.random()*70,o=he.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(r,t),o.frequency.linearRampToValueAtTime(r*(.6+Math.random()*.5),t+.8);let a=he.createBiquadFilter();a.type="bandpass",a.frequency.value=500+Math.random()*400,a.Q.value=3;let l=he.createOscillator();l.frequency.value=7+Math.random()*8;let c=he.createGain();c.gain.value=18,l.connect(c),c.connect(o.frequency);let h=he.createGain();Ku(h,t,.15,i,.9),o.connect(a),a.connect(h),h.connect(s),o.start(t),l.start(t),o.stop(t+1.2),l.stop(t+1.2)},scream(n=0){if(!he)return;let e=it(),t=Bl(n);mt(e,700,300,.6,.2,"sawtooth",t),vt(e,.5,1500,4,.2,"bandpass",t)},plank(){if(!he)return;let n=it();vt(n,.25,700,2,.5,"bandpass"),mt(n,180,90,.15,.25,"triangle")},nail(){if(!he)return;let n=it();mt(n,1600,1200,.05,.3,"square"),vt(n,.08,4e3,3,.3,"bandpass")},hurt(){if(!he)return;let n=it();vt(n,.2,400,1,.6),mt(n,120,60,.25,.4)},buy(){if(!he)return;let n=it();[1046,1318,1568].forEach((e,t)=>mt(n+t*.06,e,e,.18,.18,"triangle")),vt(n,.1,6e3,1,.1,"highpass")},deny(){if(!he)return;let n=it();mt(n,220,180,.2,.2,"square")},door(){if(!he)return;let n=it();vt(n,.8,300,1,.5),mt(n,90,40,.6,.4,"sawtooth")},round(n){if(!he)return;let e=it();(n?[196,233,196,174,196]:[196,247,294,247,220,196]).forEach((i,s)=>{mt(e+s*.32,i,i*.99,.5,.22,"sawtooth"),mt(e+s*.32,i/2,i/2,.55,.18,"triangle")}),vt(e,2.2,120,.5,.15)},box(){if(!he)return;let n=it();[784,659,698,587,659,523,587,494,523,659,784,1046].forEach((t,i)=>mt(n+i*.2,t,t,.22,.12,"triangle"))},boxReveal(){if(!he)return;let n=it();mt(n,523,1046,.4,.2,"triangle"),mt(n+.1,784,1568,.4,.15,"triangle")},teddy(){if(!he)return;let n=it();mt(n,300,80,1.2,.3,"sawtooth")},power(){if(!he)return;let n=it();mt(n,50,300,2,.4,"sawtooth"),vt(n,1.5,800,1,.3),mt(n+1.6,900,900,.3,.2,"square")},perk(){if(!he)return;let n=it();vt(n,.15,2e3,1,.2),[523,659,784,1046].forEach((e,t)=>mt(n+.25+t*.09,e,e,.2,.15,"triangle"))},powerup(n){if(!he)return;let e=it();(n==="nuke"?[200,100,50]:[660,880,1100,1320]).forEach((i,s)=>mt(e+s*.08,i,i,.25,.25,n==="nuke"?"sawtooth":"square")),n==="nuke"&&vt(e,1.6,200,.5,.8)},boom(){if(!he)return;let n=it();vt(n,1.2,380,.4,1),mt(n,90,25,.9,.8)},spike(){if(!he)return;let n=it();vt(n,.12,1500,2,.25,"bandpass")},build(){if(!he)return;let n=it();for(let e=0;e<3;e++)mt(n+e*.09,1500,1100,.05,.25,"square"),vt(n+e*.09,.07,3500,3,.25,"bandpass")},splat(){if(!he)return;let n=it();vt(n,.25,500,1,.5),mt(n,200,60,.2,.3)},toxic(){if(!he)return;let n=it();vt(n,.6,900,1,.5),mt(n,300,60,.5,.3,"square")},heartbeat(){if(!he)return;let n=it();mt(n,60,40,.12,.6),mt(n+.2,55,40,.12,.45)},carDoor(){if(!he)return;let n=it();vt(n,.12,600,1,.5),mt(n,140,80,.1,.3,"square")},crash(n){if(!he)return;let e=it();vt(e,.4,500,.6,Math.min(1,n*.08))}};function Yi(n,e=0){if(!he)return;if(n&&!Ms){let s=he.createOscillator();s.type="sawtooth";let r=he.createOscillator();r.type="square";let o=he.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let a=he.createGain();a.gain.value=1e-4,s.connect(o),r.connect(o),o.connect(a),a.connect(vn),s.start(),r.start(),Ms={o:s,o2:r,f:o,g:a}}if(!Ms)return;let t=it();if(!n){Ms.g.gain.setTargetAtTime(1e-4,t,.1);return}let i=34+e*70;Ms.o.frequency.setTargetAtTime(i,t,.05),Ms.o2.frequency.setTargetAtTime(i*.5,t,.05),Ms.f.frequency.setTargetAtTime(380+e*900,t,.05),Ms.g.gain.setTargetAtTime(.12+e*.1,t,.05)}function kv(){let n=he.createBufferSource();n.buffer=js,n.loop=!0;let e=he.createBiquadFilter();e.type="lowpass",e.frequency.value=260;let t=he.createGain();t.gain.value=.05,n.connect(e),e.connect(t),t.connect(vn),n.start();let i=he.createOscillator();i.frequency.value=55;let s=he.createGain();s.gain.value=.02;let r=he.createOscillator();r.frequency.value=.07;let o=he.createGain();o.gain.value=.015,r.connect(o),o.connect(s.gain),i.connect(s),s.connect(vn),i.start(),r.start(),Uv={g:t,og:s}}var Hl=["Lobby","Outside","Diner","Garage"];var De=new Uint8Array(21240),nn=new Int16Array(21240).fill(-1),ai=new Int16Array(21240).fill(-1),Zr=new Uint8Array(21240),$r=new Uint8Array(21240),jo=new Uint8Array(21240),Re=(n,e)=>e*180+n,dn=(n,e)=>n>=0&&e>=0&&n<180&&e<118,Mt=(n,e)=>dn(n,e)?De[Re(n,e)]:5,Ht=n=>Math.floor(n/2),W=n=>n*2+2/2,$i=[],On=[],Ri=[],ws=new Set([3]),Gl=[],Vl=[],Kr=[],$o=[],Ko=[],Wl=[],Ju=[],Qs=[],Jo=[],Gp=[],Es=[],Ss=[],Qo=[],Ot={},sf=!0;var nf=1234,zl=()=>(nf=nf*16807%2147483647)/2147483647;function Zo(n,e,t,i,s,r,o,a="stucco",l="shop"){Ri.push({name:n,z:e,i0:t,j0:i,i1:s,j1:r,floorKind:o,wallKind:a,kind:l});for(let c=i-1;c<=r+1;c++)for(let h=t-1;h<=s+1;h++){if(!dn(h,c))continue;let u=Re(h,c);h>=t&&h<=s&&c>=i&&c<=r?(De[u]=1,nn[u]=e):(De[u]===0||De[u]===12)&&(De[u]=2,nn[u]=e)}}function ju(n,e,t,i){let s=$i.length,r=n.length>1&&n[0][1]===n[1][1]?"x":"z";$i.push({id:s,tiles:n,cost:e,zone:t,open:!1,label:i,axis:r});for(let[o,a]of n)De[Re(o,a)]=4,ai[Re(o,a)]=s}function Qu(n,e){let t=On.length,i=Mt(n-1,e)===2||Mt(n+1,e)===2?"x":"z",s=i==="x"?Mt(n,e+1)===0?[0,1]:[0,-1]:Mt(n+1,e)===0?[1,0]:[-1,0];On.push({id:t,i:n,j:e,planks:6,axis:i,outDir:s,rip:0}),De[Re(n,e)]=3,ai[Re(n,e)]=t}function oi(n,e){dn(n,e)&&(De[Re(n,e)]=6)}var Ts=(n,e,t,i,s)=>{for(let r=e;r<=i;r++)for(let o=n;o<=t;o++)dn(o,r)&&s(Re(o,r),o,r)},Ti=(n,e,t,i,s)=>Ts(n,e,t,i,r=>{Zr[r]=s}),xi=(n,e,t,i,s)=>Ts(n,e,t,i,r=>{$r[r]=s}),Xl=4;function Mn(n,e,t,i,s,r={}){let o=Xl++;Hl[o]=n,ws.add(o),Zo(n,o,e,t,i,s,r.floor||"wood",r.wall||"siding",r.kind||"house");let a=r.doors||[[r.side||"s",.5]];for(let[h,u,f=r.kind==="house"?1:2]of a){let d=h==="n"||h==="s",g=d?e:t,p=Math.round(g+((d?i:s)-g)*u-(f-1)/2);for(let m=0;m<f;m++){let b=d?p+m:h==="w"?e-1:i+1,M=d?h==="n"?t-1:s+1:p+m;De[Re(b,M)]=11,nn[Re(b,M)]=o}}let l=r.winStep||3,c=(h,u)=>{Mt(h,u)===2&&(Mt(h-1,u)===11||Mt(h+1,u)===11||Mt(h,u-1)===11||Mt(h,u+1)===11||(De[Re(h,u)]=10,Qo.push([h,u])))};if(!r.noWin){for(let h=e+1;h<i;h+=l)c(h,t-1),c(h,s+1);for(let h=t+1;h<s;h+=l)c(e-1,h),c(i+1,h)}for(let h of r.loot||[])Kr.push({i:h[0]<0?i+1+h[0]:e+h[0],j:h[1]<0?s+1+h[1]:t+h[1],kind:h[2],used:!1,zone:o});return o}function rf(){De.fill(0),nn.fill(-1),ai.fill(-1),Zr.fill(0),$r.fill(0),jo.fill(0);for(let r of[$i,On,Ri,Gl,Vl,Kr,$o,Ko,Wl,Ju,Qs,Jo,Gp,Es,Ss,Qo])r.length=0;ws.clear(),ws.add(3),Hl.length=4,Xl=4,nf=1234,sf=!0;for(let r=0;r<118;r++)for(let o=0;o<180;o++){let a=Re(o,r);o===0||r===0||o===179||r===117||r===106?De[a]=5:nn[a]=1}Ti(1,1,43,39,8),xi(1,1,43,39,1),Ti(96,1,139,105,1),Ti(140,1,178,105,3),Ti(4,78,44,90,2),xi(4,78,44,90,3),Ti(4,92,44,104,4),xi(4,92,44,104,5),Ti(80,48,95,70,7),xi(80,48,95,70,4),Ti(98,46,138,88,6),xi(100,46,136,49,1),Ti(1,107,178,116,5),xi(1,41,178,45,2),xi(46,1,49,104,2),xi(1,72,95,75,2),xi(159,8,162,100,2),xi(50,38,60,40,5),xi(64,16,78,20,5),Zo("Lobby",0,17,22,26,29,"carpet","stucco","motel"),Zo("Diner",2,28,22,37,29,"checker","stucco","motel"),Zo("Garage",3,6,6,15,13,"concrete","brick","motel"),ju([[10,14],[11,14]],750,1,"Outside"),ju([[21,21],[22,21]],1e3,0,"Lobby"),ju([[27,25],[27,26]],1e3,2,"Diner");for(let[r,o]of[[18,21],[25,21],[19,30],[24,30],[16,25],[16,28]])Qu(r,o);for(let[r,o]of[[31,21],[35,21],[38,24],[38,28],[33,30]])Qu(r,o);for(let[r,o]of[[8,5],[13,5],[5,9],[16,10]])Qu(r,o);let n=Mn("Gas Station",52,31,59,36,{wall:"stucco",floor:"checker",kind:"shop",loot:[[0,0,"register"],[7,0,"cabinet"]]});Ot.pumps=[[54,39],[57,39]];for(let[r,o]of Ot.pumps)oi(r,o);Mn("Pharmacy",62,30,69,36,{wall:"brick",floor:"checker",kind:"shop",loot:[[0,0,"medicine"],[7,0,"medicine"],[3,0,"register"]]}),Mn("Hank's Market",72,28,83,36,{wall:"brick",floor:"checker",kind:"store",doors:[["s",.5,2]],loot:[[0,0,"register"],[1,0,"register"],[11,0,"cabinet"],[11,8,"fridge"],[0,8,"shelf"],[5,3,"shelf"],[6,3,"shelf"]]}),Mn("Hardware",86,28,94,36,{wall:"metal",floor:"concrete",kind:"store",loot:[[0,0,"toolbox"],[8,8,"shelf"],[8,0,"toolbox"]]}),Jo.push({i:90,j:28,face:[0,1],name:"Hardware"}),Qs.push({i:93,j:33}),Mn("Police Station",52,6,61,15,{wall:"brick",floor:"concrete",kind:"police",loot:[[0,0,"locker"],[1,0,"locker"],[9,9,"safe"]]}),Mn("Chop Shop",66,6,76,15,{wall:"metal",floor:"concrete",kind:"garage",doors:[["s",.5,3]],loot:[[0,0,"toolbox"],[10,0,"toolbox"]]}),Ot.pad={x:W(71),z:W(18)+1},Mn("The Rusty Nail",80,6,90,14,{wall:"wood",floor:"wood",kind:"bar",loot:[[0,0,"register"],[10,8,"fridge"]]}),Mn("St. Jude Church",52,49,59,61,{wall:"stone",floor:"wood",kind:"church",side:"n",loot:[[3,12,"cabinet"]]}),Mn("Lockwood High",64,49,77,60,{wall:"brick",floor:"checker",kind:"school",side:"n",loot:[[0,11,"locker"],[1,11,"locker"],[13,11,"cabinet"]]}),Ot.wheel={x:W(91),z:W(52)};for(let[r,o]of[[90,52],[91,52],[92,52]])oi(r,o);Ot.coaster={cx:W(87),cz:W(60),booth:{i:82,j:67},station:{x:W(84)+1,z:W(66)}},oi(82,67);for(let[r,o]of[[81,49],[94,49],[81,69],[94,69],[87,49],[87,69],[81,59],[94,59]])oi(r,o);let e=[[0,0,"cabinet"],[-1,-1,"fridge"]];for(let[r,o,a,l]of[[4,50,"n","siding"],[16,50,"n","brick"],[28,50,"n","siding"],[4,61,"s","brick"],[16,61,"s","siding"],[28,61,"s","siding"]])Mn("House",r,o,r+7,o+6,{side:a,wall:l,loot:e});for(let[r,o,a,l]of[[52,79,"n","siding"],[64,79,"n","brick"],[52,92,"s","siding"],[64,92,"s","siding"]])Mn("House",r,o,r+7,o+6,{side:a,wall:l,loot:e});Mn("Old Barn",78,80,90,92,{wall:"barn",floor:"dirt",kind:"barn",doors:[["w",.5,3]],loot:[[0,0,"toolbox"],[12,12,"cabinet"]]}),Qs.push({i:88,j:82});for(let r=3;r<=45;r++)(r<23||r>26)&&(De[Re(r,77)]=5),De[Re(r,91)]=r>=23&&r<=26?0:5;for(let r=77;r<=105;r++)De[Re(3,r)]=5,De[Re(45,r)]=5;for(let r=3;r<=45;r++)De[Re(r,105)]=5;Ot.graveGateN={i0:23,i1:26,j:77},Ot.baseGate={i0:23,i1:26,j:91};for(let r=79;r<=89;r+=2)for(let o=6;o<=43;o+=2)o>=22&&o<=27||zl()<.78&&(De[Re(o,r)]=13,Ss.push({i:o,j:r,kind:zl()*4|0}));Mn("Mausoleum",7,80,12,84,{wall:"stone",floor:"stone",kind:"crypt",side:"e",noWin:!0,loot:[[0,0,"safe"]]}),Ti(4,78,44,90,2);let t=Mn("Fort Calder Hangar",7,95,20,102,{wall:"metal",floor:"concrete",kind:"base",side:"n",doors:[["n",.5,3]],winStep:4});Ts(4,92,44,104,r=>{De[r]!==5&&(jo[r]=1)}),Ti(4,92,44,104,4),Gp.push({x:W(10),z:W(99),name:"Sarge"},{x:W(16),z:W(99),name:"Doc Reyes"}),Jo.push({i:19,j:95,face:[-1,0],name:"Hangar"}),Ot.trophy={x:W(13)+1,z:W(102)+1.2},Ot.tanks=[[28,95,.3],[38,101,-.4]];for(let[r,o]of Ot.tanks)Ts(r-1,o-1,r+1,o+1,a=>{De[a]=6});Ot.heli={x:W(33),z:W(99),i:33,j:99},Ot.hangarZone=t,Mn("Hunting Cabin",112,18,118,23,{wall:"log",floor:"wood",kind:"cabin",side:"s",loot:[[0,0,"cabinet"],[6,0,"locker"]]}),Qs.push({i:117,j:22}),Fv();for(let[r,o,a,l]of[[142,30,"s","siding"],[151,30,"s","brick"],[164,30,"s","siding"],[142,16,"s","siding"],[164,16,"s","brick"],[142,50,"n","brick"],[151,50,"n","siding"],[164,50,"n","siding"],[142,62,"n","siding"],[164,62,"n","brick"]])Mn("House",r,o,r+7,o+6,{side:a,wall:l,loot:e});Mn("Gas & Go",151,62,158,68,{wall:"stucco",floor:"checker",kind:"shop",side:"n",loot:[[0,0,"register"],[7,6,"shelf"]]}),Mn("Pine Chapel",165,78,172,87,{wall:"stone",floor:"wood",kind:"church",side:"w",loot:[[0,9,"cabinet"]]});for(let r=1;r<105;r++)for(let o=1;o<179;o++){let a=Re(o,r);if(De[a]!==0||$r[a]!==0)continue;let l=Zr[a],c=l===1?.2:l===3||l===0?.025:0;l===0&&o<96&&r<106&&(o<50||r<72)&&(c=.012),r>=39&&r<=47&&(c=0),zl()<c&&(De[a]=12,Es.push({i:o,j:r,s:.7+zl()*.7}))}let i=[[6,109],[40,109],[80,109],[118,109],[158,109]],s=[[70,25,"manhole"],[8,59,"cellar"],[92,95,"cellar"],[110,48,"manhole"],[151,26,"manhole"]];i.forEach(([r,o],a)=>{let l=Xl++;Hl[l]="Bunker",ws.add(l),Zo("Bunker",l,r,o,r+7,o+6,"concrete","bunker","bunker");let[c,h,u]=s[a];De[Re(c,h)]!==0&&(De[Re(c,h)]=0),Gl.push({i:c,j:h,kind:u,bunker:a}),Vl.push({i0:r,j0:o,i1:r+7,j1:o+6,ladder:{i:r+1,j:o+1},crate:{i:r+6,j:o+5},hatch:a,zone:l}),oi(r+6,o+5)}),Wl.push({i:12,j:6,face:[0,1],name:"Garage"},{i:21,j:29,face:[0,-1],name:"Lobby"},{i:36,j:22,face:[0,1],name:"Diner"},{i:37,j:14,face:[-1,0],name:"Motel Lot"},{i:83,j:32,face:[-1,0],name:"Hank's Market"},{i:61,j:10,face:[-1,0],name:"Police Station"},{i:53,j:60,face:[0,-1],name:"Church"},{i:85,j:6,face:[0,1],name:"The Rusty Nail"},{i:88,j:92,face:[0,-1],name:"Old Barn"},{i:114,j:64,face:[0,1],name:"Mall Atrium"},{i:142,j:56,face:[1,0],name:"Pine Hollow"},{i:113,j:18,face:[0,1],name:"Hunting Cabin"},{i:28,j:79,face:[0,1],name:"Graveyard"},{i:77,j:49,face:[0,1],name:"Lockwood High"}),$o.push({i:30,j:58,key:"brawler"},{i:57,j:13,key:"trench"},{i:75,j:35,key:"viper"},{i:115,j:21,key:"ranger"},{i:104,j:70,key:"kestrel"},{i:147,j:34,key:"ripper"},{i:86,j:88,key:"trench"},{i:10,j:88,key:"kestrel"},{i:132,j:55,key:"hammer"}),Ko.push({i:14,j:12,n:0},{i:25,j:27,n:1},{i:60,j:14,n:2},{i:64,j:35,n:3},{i:58,j:60,n:4},{i:10,j:84,n:5},{i:106,j:66,n:6},{i:116,j:22,n:7},{i:170,j:80,n:8},{i:12,j:101,n:9}),Ju.push({x:55,z:25,yaw:0,kind:"mustang"},{x:W(57),z:W(40)+2,yaw:Math.PI/2,kind:"pickup"},{x:W(58),z:W(18),yaw:0,kind:"cruiser"},{x:W(120),z:W(47),yaw:Math.PI/2,kind:"van"},{x:W(150),z:W(46)+1,yaw:-Math.PI/2,kind:"pickup"},{x:W(115),z:W(26),yaw:.4,kind:"pickup"},{x:W(40),z:W(96),yaw:0,kind:"jeep"});for(let r of $o)De[Re(r.i,r.j)]!==1&&De[Re(r.i,r.j)]!==0&&(De[Re(r.i,r.j)]=nn[Re(r.i,r.j)]>=0?1:0);for(let r of Ko){let o=Re(r.i,r.j);(De[o]===12||De[o]===13)&&(De[o]=0)}for(let r of Ju){let o=Ht(r.x),a=Ht(r.z);Ts(o-2,a-2,o+2,a+2,l=>{De[l]===12&&(De[l]=0)})}for(let r=Es.length-1;r>=0;r--)De[Re(Es[r].i,Es[r].j)]!==12&&Es.splice(r,1);for(let r=Ss.length-1;r>=0;r--)De[Re(Ss[r].i,Ss[r].j)]!==13&&Ss.splice(r,1);for(let r of Kr)oi(r.i,r.j);for(let r of Qs){let o=Re(r.i,r.j);De[o]===12&&(De[o]=0)}}function Fv(){let s=Xl++;Hl[s]="Greenbrook Park Mall",ws.add(s),Ts(100,50,136,86,l=>{De[l]=2,nn[l]=s});let r=(l,c,h,u,f,d="mall")=>{Ts(l,c,h,u,g=>{De[g]=1,nn[g]=s}),Ri.push({name:f,z:s,i0:l,j0:c,i1:h,j1:u,floorKind:d==="mall"?"mall":"shop",wallKind:"mall",kind:d})},o=(l,c,h,u)=>Ts(l,c,h,u,f=>{De[f]=11,nn[f]=s});r(102,58,134,60,"North Hall"),r(102,76,134,78,"South Hall"),r(109,52,111,84,"West Hall"),r(125,52,127,84,"East Hall"),r(113,64,123,72,"Center Court"),r(112,68,112,68,"hall"),r(124,68,124,68,"hall"),r(118,61,118,63,"hall"),r(118,73,118,75,"hall"),r(117,51,119,57,"Main Entrance"),o(117,50,119,50),o(136,59,136,59),o(100,77,100,77),r(101,51,107,56,"Department Store","store"),o(104,57,104,57),o(108,54,108,54),r(129,51,135,56,"Sporting Goods","store"),o(132,57,132,57),o(128,54,128,54),r(101,80,107,85,"Department Store","store"),o(104,79,104,79),o(108,82,108,82),r(129,80,135,85,"Department Store","store"),o(132,79,132,79),o(128,82,128,82),r(102,62,107,74,"Food Court","food"),o(108,64,108,66),o(108,70,108,72);let a=[[113,51,115,56,114,57],[121,51,123,56,122,57],[113,80,115,85,114,79],[117,80,119,85,118,79],[121,80,123,85,122,79],[129,62,135,66,128,64],[129,70,135,74,128,72],[113,62,116,62,0,0]];for(let[l,c,h,u,f,d]of a)f&&(r(l,c,h,u,"Shop","shop"),o(f,d,f,d));for(let l=102;l<136;l+=4)for(let c of[50,86])De[Re(l,c)]===2&&De[Re(l,c+(c===50?1:-1))]===1&&(De[Re(l,c)]=10,Qo.push([l,c]));Kr.push({i:102,j:62,kind:"register",used:!1,zone:s},{i:107,j:74,kind:"fridge",used:!1,zone:s},{i:135,j:51,kind:"locker",used:!1,zone:s},{i:101,j:85,kind:"shelf",used:!1,zone:s},{i:135,j:85,kind:"shelf",used:!1,zone:s},{i:115,j:51,kind:"register",used:!1,zone:s},{i:135,j:74,kind:"safe",used:!1,zone:s}),Ot.fountain={x:W(118),z:W(68)},oi(118,68)}function ea(n){return n===2||n===3||n===4||n===5||n===6||n===7||n===10||n===12||n===13||n===15}function Jr(n,e){return n===2||n===5||n===6||n===4||n===7||n===8||n===10||n===12||n===13||n===15||n===3&&On[ai[e]].planks>0||e>=0&&sf&&jo[e]}function Zl(n){return n!==0&&n!==9&&n!==14}function Wp(n){return n===2||n===4||n===6||n===12}function er(n,e,t){let i=Ht(n.x-e),s=Ht(n.x+e),r=Ht(n.z-e),o=Ht(n.z+e),a=!1;for(let l=r;l<=o;l++)for(let c=i;c<=s;c++){let h=dn(c,l)?Re(c,l):-1,u=h<0?5:De[h];if(!t(u,h))continue;let f=Math.max(c*2,Math.min(n.x,c*2+2)),d=Math.max(l*2,Math.min(n.z,l*2+2)),g=n.x-f,x=n.z-d,p=Math.hypot(g,x);if(p<e)if(a=!0,p>1e-5)n.x+=g/p*(e-p),n.z+=x/p*(e-p);else{let m=c*2+1,b=l*2+2/2;g=n.x-m,x=n.z-b,Math.abs(g)>Math.abs(x)?n.x=m+Math.sign(g||1)*(2/2+e):n.z=b+Math.sign(x||1)*(2/2+e)}}return a}function $l(n,e,t,i,s,r){let o=Math.hypot(t,i);if(o<1e-6)return s;t/=o,i/=o;let a=Ht(n),l=Ht(e),c=t>0?1:-1,h=i>0?1:-1,u=Math.abs(2/(t||1e-9)),f=Math.abs(2/(i||1e-9)),d=t>0?((a+1)*2-n)/t:t<0?(a*2-n)/t:1/0,g=i>0?((l+1)*2-e)/i:i<0?(l*2-e)/i:1/0,x=0;for(let p=0;p<400&&x<s&&(d<g?(x=d,d+=u,a+=c):(x=g,g+=f,l+=h),!(x>s));p++){let m=dn(a,l)?Re(a,l):-1;if(r(m<0?5:De[m],m))return x}return s}var Ai=new Float32Array(21240),ql=1e9,Bv=90;function ef(n){let e=De[n];return sf&&jo[n]?ql:e===0||e===1||e===11||e===14?1:e===9?4:e===3?On[ai[n]].planks>0?3+On[ai[n]].planks:1.5:e===7||e===8?30:ql}var ri=new Int32Array(21240*4),bn=new Float32Array(21240*4),Zi=0;function Vp(n,e){let t=Zi++;for(ri[t]=e,bn[t]=n;t>0;){let i=t-1>>1;if(bn[i]<=bn[t])break;let s=ri[i],r=bn[i];ri[i]=ri[t],bn[i]=bn[t],ri[t]=s,bn[t]=r,t=i}}function zv(){let n=ri[0];if(Zi--,Zi>0){ri[0]=ri[Zi],bn[0]=bn[Zi];let e=0;for(;;){let t=e*2+1,i=t+1,s=e;if(t<Zi&&bn[t]<bn[s]&&(s=t),i<Zi&&bn[i]<bn[s]&&(s=i),s===e)break;let r=ri[s],o=bn[s];ri[s]=ri[e],bn[s]=bn[e],ri[e]=r,bn[e]=o,e=s}}return n}var tf=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];function Xp(n){Ai.fill(ql),Zi=0;for(let[e,t]of n){if(!dn(e,t))continue;let i=Re(e,t);Ai[i]=0,Vp(0,i)}for(;Zi;){let e=bn[0],t=zv();if(e>Ai[t]||e>Bv)continue;let i=t%180,s=t/180|0;for(let r=0;r<8;r++){let o=tf[r][0],a=tf[r][1],l=i+o,c=s+a;if(!dn(l,c))continue;let h=Re(l,c);if(o&&a&&(ef(Re(i+o,s))>=2||ef(Re(i,s+a))>=2))continue;let u=ef(h);if(u>=ql)continue;let f=e+u*tf[r][2];f<Ai[h]&&(Ai[h]=f,Vp(f,h))}}}var Yl=[];function qp(){Yl.length=0;for(let n=2;n<105;n+=2)for(let e=2;e<178;e+=2){let t=Re(e,n);De[t]===0&&!jo[t]&&Yl.push([e,n])}}function jn(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Bt,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Yp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Yp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Yp(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Pt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Pn=(n,e,t)=>n<e?e:n>t?t:n,Ki=(n,e,t)=>n+(e-n)*t;function Wt(n){let e=n>>>0||1;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}var kt=Math.random,tr=n=>n[Math.random()*n.length|0];function ta(n,e){let t=e-n;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}var de=n=>document.getElementById(n);var Kl=new Map,Zp=4;function $p(n){Zp=n;for(let e of Kl.values())e.anisotropy=n,e.needsUpdate=!0}function Ze(n,e,t,i,s=!0){if(Kl.has(n))return Kl.get(n);let r=document.createElement("canvas");r.width=e,r.height=t;let o=r.getContext("2d");i(o,e,t);let a=new Ml(r);return s&&(a.colorSpace=Hn),a.wrapS=a.wrapT=Lo,a.anisotropy=Zp,Kl.set(n,a),a}function Dt(n,e,t,i,s,r,o,a){let l=Wt(a);for(let c=0;c<i;c++){n.fillStyle=s[l()*s.length|0];let h=r+l()*(o-r);n.fillRect(l()*e,l()*t,h,h)}}function pt(n,e,t,i,s,r,o,a){let l=Wt(a);for(let c=0;c<i;c++){let h=l()*e,u=l()*t,f=r+l()*(o-r);for(let d of[-e,0,e])for(let g of[-t,0,t]){let x=n.createRadialGradient(h+d,u+g,0,h+d,u+g,f);x.addColorStop(0,s),x.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=x,n.fillRect(h+d-f,u+g-f,f*2,f*2)}}}function jr(n,e,t,i){let s=n.createLinearGradient(0,t,0,t*.55);s.addColorStop(0,`rgba(25,20,15,${i})`),s.addColorStop(1,"rgba(25,20,15,0)"),n.fillStyle=s,n.fillRect(0,0,e,t)}function of(n,e,t,i,s=2){return Ze(n,e,t,r=>{let o=document.createElement("canvas");o.width=e,o.height=t;let a=o.getContext("2d");i(a,e,t);let l=a.getImageData(0,0,e,t).data,c=r.createImageData(e,t),h=c.data,u=(f,d)=>l[((d+t)%t*e+(f+e)%e)*4]/255;for(let f=0;f<t;f++)for(let d=0;d<e;d++){let g=(u(d+1,f)-u(d-1,f))*s,x=(u(d,f+1)-u(d,f-1))*s,p=Math.hypot(g,x,1),m=(f*e+d)*4;h[m]=(-g/p*.5+.5)*255,h[m+1]=(x/p*.5+.5)*255,h[m+2]=(1/p*.5+.5)*255,h[m+3]=255}r.putImageData(c,0,0)},!1)}var Hv=(n,e,t)=>{n.fillStyle="#fff",n.fillRect(0,0,e,t),n.fillStyle="#444";let i=t/16,s=e/4;for(let r=0;r<16;r++){n.fillRect(0,r*i,e,3);let o=r%2?s/2:0;for(let a=0;a<=4;a++)n.fillRect(o+a*s-1.5,r*i,3,i)}Dt(n,e,t,1500,["#ddd","#bbb"],1,3,3)},be={asphalt:()=>Ze("asphalt",512,512,(n,e,t)=>{n.fillStyle="#2b2c2e",n.fillRect(0,0,e,t),Dt(n,e,t,26e3,["#242527","#333436","#3b3c3e","#1f2022","#46474a"],1,2.5,1),pt(n,e,t,14,"rgba(10,10,12,.35)",30,90,2),pt(n,e,t,10,"rgba(90,85,70,.12)",20,70,3);let i=Wt(4);n.strokeStyle="rgba(8,8,8,.75)",n.lineCap="round";for(let s=0;s<9;s++){n.lineWidth=1+i()*2,n.beginPath();let r=i()*e,o=i()*t;n.moveTo(r,o);for(let a=0;a<7;a++)r+=(i()-.5)*70,o+=(i()-.5)*70,n.lineTo(r,o);n.stroke()}}),asphaltN:()=>of("asphaltN",256,256,(n,e,t)=>{n.fillStyle="#888",n.fillRect(0,0,e,t),Dt(n,e,t,9e3,["#666","#aaa","#999","#777"],1,2,5)},3),stucco:()=>Ze("stucco",256,256,(n,e,t)=>{n.fillStyle="#b8a98c",n.fillRect(0,0,e,t),Dt(n,e,t,9e3,["#ab9c80","#c4b597","#a29378","#cdbfa2"],1,3,6),pt(n,e,t,10,"rgba(70,60,40,.18)",20,60,7),jr(n,e,t,.55)}),stuccoN:()=>of("stuccoN",128,128,(n,e,t)=>{n.fillStyle="#888",n.fillRect(0,0,e,t),Dt(n,e,t,3e3,["#555","#bbb"],1,3,8)},2.5),brick:()=>Ze("brick",256,256,(n,e,t)=>{n.fillStyle="#6d6a63",n.fillRect(0,0,e,t);let i=Wt(9),s=t/16,r=e/4;for(let o=0;o<16;o++){let a=o%2?r/2:0;for(let l=-1;l<=4;l++){let c=.75+i()*.35;n.fillStyle=`rgb(${120*c|0},${52*c|0},${38*c|0})`,n.fillRect(a+l*r+1.5,o*s+1.5,r-3,s-3)}}Dt(n,e,t,3e3,["rgba(0,0,0,.18)","rgba(255,220,200,.07)"],1,3,10),jr(n,e,t,.6)}),brickN:()=>of("brickN",256,256,Hv,4),panel:()=>Ze("panel",256,256,(n,e,t)=>{n.fillStyle="#5d6b55",n.fillRect(0,0,e,t),n.strokeStyle="rgba(30,40,25,.35)",n.lineWidth=2;for(let i=0;i<e;i+=16)n.beginPath(),n.moveTo(i,0),n.lineTo(i,t),n.stroke();for(let i=8;i<t*.62;i+=32)for(let s=8;s<e;s+=32)n.fillStyle="rgba(200,190,140,.16)",n.beginPath(),n.arc(s+i/32%2*16,i,4,0,7),n.fill();pt(n,e,t,12,"rgba(60,50,20,.25)",15,50,11),n.fillStyle="#4b3220",n.fillRect(0,t*.66,e,t*.34),n.fillStyle="#2e1d12",n.fillRect(0,t*.66,e,5);for(let i=0;i<e;i+=32)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(i,t*.66,2,t);jr(n,e,t,.5)}),dinerWall:()=>Ze("dinerwall",256,256,(n,e,t)=>{n.fillStyle="#9a9a92",n.fillRect(0,0,e,t);let i=32,s=16;for(let r=0;r<t/s;r++)for(let o=-1;o<e/i+1;o++){let a=r%2?i/2:0;n.fillStyle=r>9&&r<12?"#7a1a1a":"#d8d6cc",n.fillRect(o*i+a+1,r*s+1,i-2,s-2)}pt(n,e,t,10,"rgba(70,55,25,.35)",15,45,43),jr(n,e,t,.55)}),block:()=>Ze("block",256,256,(n,e,t)=>{n.fillStyle="#5c5b57",n.fillRect(0,0,e,t);let i=Wt(44);for(let s=0;s<8;s++){let r=s%2?64:0;for(let o=-1;o<3;o++){let a=.8+i()*.25;n.fillStyle=`rgb(${128*a|0},${126*a|0},${118*a|0})`,n.fillRect(o*128+r+2,s*32+2,124,28)}}Dt(n,e,t,4e3,["rgba(0,0,0,.15)","rgba(255,255,255,.06)"],1,3,45),pt(n,e,t,6,"rgba(30,25,15,.4)",15,50,46),jr(n,e,t,.6)}),tileChecker:()=>Ze("checker",256,256,(n,e,t)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)n.fillStyle=(r+s)%2?"#1d1d1f":"#d9d4c5",n.fillRect(r*32,s*32,32,32);Dt(n,e,t,2500,["rgba(60,50,30,.18)","rgba(0,0,0,.2)"],1,3,12),pt(n,e,t,10,"rgba(50,35,15,.3)",15,50,13),n.strokeStyle="rgba(0,0,0,.4)",n.lineWidth=1;for(let s=0;s<=8;s++)n.beginPath(),n.moveTo(s*32,0),n.lineTo(s*32,t),n.stroke(),n.beginPath(),n.moveTo(0,s*32),n.lineTo(e,s*32),n.stroke()}),carpet:()=>Ze("carpet",256,256,(n,e,t)=>{n.fillStyle="#5a1e1e",n.fillRect(0,0,e,t),Dt(n,e,t,9e3,["#4a1818","#6a2626","#3e1313","#702d24"],1,2.5,14),n.strokeStyle="rgba(200,160,80,.25)",n.lineWidth=3;for(let i=0;i<4;i++)for(let s=0;s<4;s++)n.beginPath(),n.moveTo(i*64+32,s*64+12),n.lineTo(i*64+52,s*64+32),n.lineTo(i*64+32,s*64+52),n.lineTo(i*64+12,s*64+32),n.closePath(),n.stroke();pt(n,e,t,8,"rgba(20,10,5,.35)",20,60,15)}),concrete:()=>Ze("concrete",256,256,(n,e,t)=>{n.fillStyle="#6f6e6a",n.fillRect(0,0,e,t),Dt(n,e,t,7e3,["#666561","#787773","#5e5d59","#82817c"],1,3,16),pt(n,e,t,6,"rgba(15,12,8,.5)",20,55,17),n.strokeStyle="rgba(0,0,0,.35)",n.lineWidth=2,n.strokeRect(0,0,e,t)}),wood:()=>Ze("wood",256,64,(n,e,t)=>{n.fillStyle="#7a5434",n.fillRect(0,0,e,t);let i=Wt(18);for(let s=0;s<45;s++){n.strokeStyle=`rgba(40,20,8,${.08+i()*.18})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*t;n.moveTo(0,r),n.bezierCurveTo(e*.3,r+i()*8-4,e*.6,r+i()*8-4,e,r+i()*4-2),n.stroke()}for(let s=0;s<3;s++)n.fillStyle="rgba(30,15,5,.5)",n.beginPath(),n.ellipse(i()*e,i()*t,5,3,0,0,7),n.fill()}),plank:()=>Ze("plank",256,64,(n,e,t)=>{n.fillStyle="#8a6a48",n.fillRect(0,0,e,t);let i=Wt(19);for(let s=0;s<40;s++){n.strokeStyle=`rgba(50,30,10,${.1+i()*.2})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*t;n.moveTo(0,r),n.lineTo(e,r+i()*6-3),n.stroke()}n.fillStyle="#333";for(let s of[14,e-14])n.beginPath(),n.arc(s,t*.3,3,0,7),n.fill(),n.beginPath(),n.arc(s,t*.7,3,0,7),n.fill();jr(n,e,t,.25)}),metal:()=>Ze("metal",128,128,(n,e,t)=>{n.fillStyle="#5b5f62",n.fillRect(0,0,e,t);for(let i=0;i<e;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"#4c5053"),s.addColorStop(.5,"#73777a"),s.addColorStop(1,"#4c5053"),n.fillStyle=s,n.fillRect(i,0,16,t)}pt(n,e,t,8,"rgba(110,55,20,.45)",8,30,20)}),rust:()=>Ze("rust",128,128,(n,e,t)=>{n.fillStyle="#5a3a26",n.fillRect(0,0,e,t),Dt(n,e,t,3e3,["#6d4630","#4a2d1c","#7d5236","#3a2416"],1,4,21),pt(n,e,t,6,"rgba(60,70,70,.5)",10,40,22)}),ceiling:()=>Ze("ceiling",128,128,(n,e,t)=>{n.fillStyle="#8f8b80",n.fillRect(0,0,e,t),Dt(n,e,t,1200,["rgba(0,0,0,.12)","rgba(255,255,255,.06)"],1,2,23),pt(n,e,t,4,"rgba(90,70,30,.35)",10,40,24),n.strokeStyle="#5e5a52",n.lineWidth=3,n.strokeRect(0,0,e,t)}),chain:()=>Ze("chain",128,128,(n,e,t)=>{n.clearRect(0,0,e,t),n.strokeStyle="rgba(170,175,175,1)",n.lineWidth=2.2;let i=16;for(let s=-t;s<e+t;s+=i)n.beginPath(),n.moveTo(s,0),n.lineTo(s+t,t),n.stroke(),n.beginPath(),n.moveTo(s+t,0),n.lineTo(s,t),n.stroke()}),glow:()=>Ze("glow",64,64,(n,e,t)=>{let i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.3,"rgba(255,255,255,.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,e,t)}),puff:()=>Ze("puff",64,64,(n,e,t)=>{let i=Wt(25);for(let s=0;s<18;s++){let r=i()*6.28,o=i()*14,a=32+Math.cos(r)*o,l=32+Math.sin(r)*o,c=8+i()*12,h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,.3)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,e,t)}}),flame:()=>Ze("flame",64,128,(n,e,t)=>{for(let i=0;i<3;i++){let s=n.createRadialGradient(32,96,2,32,84,40-i*9);s.addColorStop(0,"rgba(255,255,255,.95)"),s.addColorStop(.5,"rgba(255,255,255,.4)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(32,4+i*14),n.bezierCurveTo(60,50,62,112,32,124),n.bezierCurveTo(2,112,4,50,32,4+i*14),n.fill()}}),blood:()=>Ze("blood",128,128,(n,e,t)=>{n.clearRect(0,0,e,t);let i=Wt(26);n.fillStyle="rgba(70,4,4,.9)",n.beginPath(),n.arc(64,64,22,0,7),n.fill();for(let s=0;s<26;s++){let r=i()*6.28,o=18+i()*40,a=2+i()*8;n.beginPath(),n.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,7),n.fill()}}),sky:()=>Ze("sky",16,256,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#02030a"),i.addColorStop(.42,"#0b1224"),i.addColorStop(.5,"#1f2a36"),i.addColorStop(.53,"#2a2a2a"),i.addColorStop(1,"#0a0a0a"),n.fillStyle=i,n.fillRect(0,0,e,t)}),moon:()=>Ze("moon",128,128,(n,e,t)=>{let i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(240,240,255,1)"),i.addColorStop(.33,"rgba(220,225,240,1)"),i.addColorStop(.36,"rgba(160,180,230,.35)"),i.addColorStop(1,"rgba(100,120,200,0)"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="rgba(150,150,170,.35)";for(let[s,r,o]of[[56,54,7],[72,70,5],[60,76,4],[74,52,3]])n.beginPath(),n.arc(s,r,o,0,7),n.fill()}),label:(n,e,t,i=256,s=64,r="bold 38px Arial")=>Ze("lbl"+n+e+t+i+s,i,s,o=>{o.fillStyle=e,o.fillRect(0,0,i,s),o.fillStyle=t,o.font=r,o.textAlign="center",o.textBaseline="middle",o.fillText(n,i/2,s/2+2)}),chalk:(n,e)=>Ze("chalk"+n,256,128,(t,i,s)=>{t.clearRect(0,0,i,s),t.strokeStyle="rgba(240,235,215,.9)",t.lineWidth=3,t.lineJoin="round",t.shadowColor="rgba(255,255,240,.6)",t.shadowBlur=4,e(t,i,s)}),neon:(n,e,t=512,i=128,s=72)=>Ze("neon"+n+e,t,i,r=>{r.clearRect(0,0,t,i),r.font=`bold ${s}px Arial Black, Arial`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e,r.shadowBlur=24,r.fillStyle=e,r.fillText(n,t/2,i/2),r.shadowBlur=8,r.fillStyle="#fff",r.globalAlpha=.65,r.fillText(n,t/2,i/2)}),perk:(n,e,t)=>Ze("perk"+n,128,256,(i,s,r)=>{let o=i.createLinearGradient(0,0,0,r);o.addColorStop(0,e),o.addColorStop(1,"#111"),i.fillStyle=o,i.fillRect(0,0,s,r),i.fillStyle="rgba(0,0,0,.35)",i.fillRect(10,150,s-20,80),i.fillStyle="#fff",i.font="bold 22px Arial Black, Arial",i.textAlign="center",n.split(" ").forEach((l,c)=>i.fillText(l.toUpperCase(),s/2,40+c*26)),i.font="bold 15px Arial",i.fillText(t,s/2,185),i.strokeStyle="rgba(255,255,255,.6)",i.lineWidth=3,i.strokeRect(6,6,s-12,r-12);for(let l=0;l<3;l++)i.fillStyle="rgba(255,255,255,.25)",i.beginPath(),i.arc(s/2,100,20-l*6,0,7),i.fill()}),boxSide:()=>Ze("boxside",256,128,(n,e,t)=>{n.fillStyle="#4a3420",n.fillRect(0,0,e,t);let i=Wt(30);for(let s=0;s<30;s++){n.strokeStyle=`rgba(20,10,4,${.15+i()*.2})`,n.beginPath();let r=i()*t;n.moveTo(0,r),n.lineTo(e,r+i()*4-2),n.stroke()}n.font="bold 84px Arial Black, Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#d8c79a",n.fillText("?",e/2,t/2+4),n.strokeStyle="#2a1a0d",n.lineWidth=8,n.strokeRect(4,4,e-8,t-8),n.fillStyle="#8a7a50";for(let[s,r]of[[4,4],[e-20,4],[4,t-20],[e-20,t-20]])n.fillRect(s,r,16,16)}),skin:n=>Ze("skin"+n,128,128,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i),Dt(e,t,i,1800,["rgba(60,20,20,.25)","rgba(40,50,30,.25)","rgba(255,255,255,.06)"],1,4,31),pt(e,t,i,7,"rgba(90,10,10,.45)",6,22,32),pt(e,t,i,5,"rgba(30,40,20,.4)",8,26,33)}),cloth:n=>Ze("cloth"+n,128,128,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let s=0;s<i;s+=3)e.fillStyle="rgba(0,0,0,.06)",e.fillRect(0,s,t,1);pt(e,t,i,9,"rgba(80,5,5,.55)",6,26,34),pt(e,t,i,6,"rgba(20,15,10,.45)",8,28,35),Dt(e,t,i,500,["rgba(0,0,0,.25)"],1,3,36)}),camo:()=>Ze("camo",128,128,(n,e,t)=>{n.fillStyle="#4b5136",n.fillRect(0,0,e,t),pt(n,e,t,14,"rgba(30,32,20,.8)",8,22,37),pt(n,e,t,10,"rgba(110,100,70,.6)",6,18,38)}),pap:()=>Ze("pap",128,128,(n,e,t)=>{let i=n.createLinearGradient(0,0,e,t);i.addColorStop(0,"#3b0d5e"),i.addColorStop(.5,"#8a2ad8"),i.addColorStop(1,"#1d6fd8"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(255,180,255,.55)",n.lineWidth=2;let s=Wt(39);for(let r=0;r<18;r++){n.beginPath();let o=s()*e,a=s()*t;n.moveTo(o,a);for(let l=0;l<4;l++)o+=(s()-.5)*40,a+=(s()-.5)*40,n.lineTo(o,a);n.stroke()}}),lines:()=>Ze("lines",64,256,(n,e,t)=>{n.clearRect(0,0,e,t),n.fillStyle="rgba(220,210,170,.75)",n.fillRect(24,0,16,t),Dt(n,e,t,900,["rgba(0,0,0,.9)"],1,4,40)},!0),dirt:()=>Ze("dirt",128,128,(n,e,t)=>{n.clearRect(0,0,e,t),pt(n,e,t,10,"rgba(48,38,24,.55)",12,40,41),Dt(n,e,t,900,["rgba(40,30,20,.6)","rgba(70,60,40,.4)"],1,3,42)})};var Gv=(n,e,t,i,s,r)=>{for(let o=0;o<i;o++)n.fillStyle=s,r?n.fillRect(o*e/i,0,2,t):n.fillRect(0,o*t/i,e,2)},Ft={grass:()=>Ze("grass",256,256,(n,e,t)=>{n.fillStyle="#3b4426",n.fillRect(0,0,e,t),pt(n,e,t,18,"rgba(70,62,38,.5)",14,40,101),pt(n,e,t,14,"rgba(34,48,22,.55)",10,36,102);let i=Wt(103);for(let s=0;s<2600;s++){let r=i()*e,o=i()*t,a=3+i()*7;n.strokeStyle=i()<.5?"rgba(96,110,52,.55)":"rgba(40,52,24,.6)",n.lineWidth=1,n.beginPath(),n.moveTo(r,o),n.lineTo(r+(i()-.5)*3,o-a),n.stroke()}}),road:()=>Ze("road",256,512,(n,e,t)=>{n.fillStyle="#2e2e2f",n.fillRect(0,0,e,t),Dt(n,e,t,5e3,["rgba(255,255,255,.07)","rgba(0,0,0,.25)","rgba(90,90,90,.2)"],1,3,111),pt(n,e,t,10,"rgba(15,15,15,.4)",12,40,112),n.fillStyle="rgba(190,160,60,.55)";for(let s=0;s<t;s+=128)n.fillRect(e/2-4,s+20,8,70);let i=Wt(113);for(let s=0;s<9;s++){let r=i()*e,o=i()*t;n.strokeStyle="rgba(10,10,10,.8)",n.lineWidth=1.5,n.beginPath(),n.moveTo(r,o);for(let a=0;a<8;a++)r+=(i()-.5)*30,o+=(i()-.5)*30,n.lineTo(r,o);n.stroke(),n.fillStyle="rgba(70,90,35,.7)";for(let a=0;a<6;a++)n.fillRect(r+(i()-.5)*10,o+(i()-.5)*10,2,4)}}),weeds:()=>Ze("weeds",128,128,(n,e,t)=>{n.clearRect(0,0,e,t);let i=Wt(121);for(let s=0;s<70;s++){let r=8+i()*(e-16),o=30+i()*90;n.strokeStyle=["#56662c","#6f7a34","#3e4d22","#7d7440"][i()*4|0],n.lineWidth=1.5+i()*2,n.beginPath(),n.moveTo(r,t),n.quadraticCurveTo(r+(i()-.5)*30,t-o*.6,r+(i()-.5)*40,t-o),n.stroke()}for(let s=0;s<6;s++)n.fillStyle="rgba(160,140,70,.8)",n.beginPath(),n.arc(10+i()*(e-20),10+i()*50,3,0,7),n.fill()}),siding:(n="#7d8a8c")=>Ze("siding"+n,256,256,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i);for(let r=0;r<i;r+=16)e.fillStyle="rgba(0,0,0,.28)",e.fillRect(0,r+13,t,3),e.fillStyle="rgba(255,255,255,.07)",e.fillRect(0,r,t,2);pt(e,t,i,12,"rgba(40,45,30,.35)",10,36,131),Dt(e,t,i,900,["rgba(0,0,0,.2)"],1,3,132);let s=Wt(133);for(let r=0;r<14;r++)e.fillStyle="rgba(60,50,40,.45)",e.fillRect(s()*t,s()*i,6+s()*20,3+s()*6);for(let r=0;r<10;r++)e.fillStyle="rgba(30,25,15,.18)",e.fillRect(s()*t,0,3+s()*5,i*(.3+s()*.7))}),logs:()=>Ze("logs",256,256,(n,e,t)=>{n.fillStyle="#5a3f26",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+32);s.addColorStop(0,"#3a2715"),s.addColorStop(.5,"#7a5634"),s.addColorStop(1,"#2c1d10"),n.fillStyle=s,n.fillRect(0,i,e,32)}Dt(n,e,t,1400,["rgba(0,0,0,.25)","rgba(140,100,60,.2)"],1,4,141)}),stone:()=>Ze("stone",256,256,(n,e,t)=>{n.fillStyle="#6d6a63",n.fillRect(0,0,e,t);let i=Wt(151);for(let s=0;s<t;s+=32)for(let r=s/32%2?-24:0;r<e;r+=48)n.fillStyle=`rgb(${90+i()*30|0},${88+i()*28|0},${82+i()*24|0})`,n.fillRect(r+2,s+2,44,28);pt(n,e,t,14,"rgba(50,60,30,.35)",8,30,152),Dt(n,e,t,2e3,["rgba(0,0,0,.25)","rgba(255,255,255,.08)"],1,3,153)}),barn:()=>Ze("barn",256,256,(n,e,t)=>{n.fillStyle="#6b2a20",n.fillRect(0,0,e,t),Gv(n,e,t,12,"rgba(0,0,0,.45)",!0),pt(n,e,t,16,"rgba(80,70,60,.5)",8,28,161),Dt(n,e,t,1500,["rgba(0,0,0,.25)","rgba(200,170,140,.12)"],1,4,162)}),metal:()=>Ze("metal",256,256,(n,e,t)=>{n.fillStyle="#6f7472",n.fillRect(0,0,e,t);for(let i=0;i<e;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"rgba(0,0,0,.25)"),s.addColorStop(.5,"rgba(255,255,255,.12)"),s.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=s,n.fillRect(i,0,16,t)}pt(n,e,t,18,"rgba(120,60,20,.4)",6,30,171),Dt(n,e,t,800,["rgba(100,50,20,.5)"],1,4,172)}),bunker:()=>Ze("bunker",256,256,(n,e,t)=>{n.fillStyle="#4d4f4a",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=64)n.fillStyle="rgba(0,0,0,.4)",n.fillRect(0,i,e,3);pt(n,e,t,14,"rgba(30,40,20,.4)",10,40,181),Dt(n,e,t,2500,["rgba(0,0,0,.3)","rgba(255,255,255,.06)"],1,3,182),n.fillStyle="rgba(200,170,40,.6)";for(let i=0;i<e;i+=32)n.save(),n.translate(i,t-20),n.rotate(-.6),n.fillRect(0,0,12,40),n.restore()}),mallTile:()=>Ze("mallTile",256,256,(n,e,t)=>{n.fillStyle="#b7b0a2",n.fillRect(0,0,e,t);for(let s=0;s<4;s++)for(let r=0;r<4;r++)n.fillStyle=(r+s)%2?"#a69f90":"#c2bcae",n.fillRect(r*64+1,s*64+1,62,62);pt(n,e,t,12,"rgba(60,50,30,.35)",10,40,191),Dt(n,e,t,1500,["rgba(0,0,0,.2)"],1,4,192);let i=Wt(193);for(let s=0;s<5;s++){n.strokeStyle="rgba(30,30,30,.6)",n.beginPath();let r=i()*e,o=i()*t;n.moveTo(r,o);for(let a=0;a<6;a++)r+=(i()-.5)*40,o+=(i()-.5)*40,n.lineTo(r,o);n.stroke()}}),roof:()=>Ze("roof",256,256,(n,e,t)=>{n.fillStyle="#2b2a28",n.fillRect(0,0,e,t),Dt(n,e,t,4e3,["rgba(255,255,255,.06)","rgba(0,0,0,.3)"],1,3,201),pt(n,e,t,10,"rgba(60,70,40,.4)",10,40,202)}),bark:()=>Ze("bark",64,256,(n,e,t)=>{n.fillStyle="#3b2c20",n.fillRect(0,0,e,t);let i=Wt(211);for(let s=0;s<40;s++)n.fillStyle=i()<.5?"rgba(0,0,0,.4)":"rgba(110,90,70,.3)",n.fillRect(i()*e,0,1+i()*3,t)}),leaves:()=>Ze("leaves",256,256,(n,e,t)=>{n.clearRect(0,0,e,t);let i=Wt(221);for(let s=0;s<900;s++){let r=i()*e,o=i()*t,a=r-e/2,l=o-t/2;a*a+l*l>(e/2-6)**2*(.6+i()*.4)||(n.fillStyle=["#1f2d16","#2b3b1b","#384a22","#1a2412","#4a4a24"][i()*5|0],n.beginPath(),n.ellipse(r,o,4+i()*6,2+i()*3,i()*3,0,7),n.fill())}}),shards:()=>Ze("shards",128,128,(n,e,t)=>{n.clearRect(0,0,e,t),n.fillStyle="rgba(170,200,210,.35)";let i=Wt(231);for(let s=0;s<9;s++){let r=i()<.5?0:e,o=i()*t;n.beginPath(),n.moveTo(r,o),n.lineTo(e/2+(i()-.5)*90,o+(i()-.5)*60),n.lineTo(r,o+10+i()*30),n.fill()}for(let s=0;s<6;s++){let r=i()<.5?0:t,o=i()*e;n.beginPath(),n.moveTo(o,r),n.lineTo(o+(i()-.5)*50,t/2+(i()-.5)*60),n.lineTo(o+12+i()*20,r),n.fill()}}),zskin:n=>Ze("zskin"+n,256,256,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i),pt(e,t,i,26,"rgba(70,90,60,.35)",8,30,241),pt(e,t,i,18,"rgba(90,40,70,.35)",6,24,242),pt(e,t,i,10,"rgba(110,15,10,.6)",4,14,243),pt(e,t,i,7,"rgba(40,10,5,.75)",3,8,244);let s=Wt(245);e.lineWidth=1.2;for(let r=0;r<26;r++){e.strokeStyle=s()<.5?"rgba(40,30,70,.45)":"rgba(70,20,30,.4)";let o=s()*t,a=s()*i;e.beginPath(),e.moveTo(o,a);for(let l=0;l<7;l++)o+=(s()-.5)*18,a+=(s()-.3)*18,e.lineTo(o,a);e.stroke()}Dt(e,t,i,3e3,["rgba(0,0,0,.18)","rgba(255,255,230,.06)","rgba(60,70,40,.2)"],1,3,246)}),zface:n=>Ze("zface"+n,256,256,(e,t,i)=>{e.fillStyle=n,e.fillRect(0,0,t,i),pt(e,t,i,20,"rgba(70,90,60,.35)",8,26,251),pt(e,t,i,10,"rgba(100,20,15,.55)",4,14,252);let s=t*.5;for(let a of[-1,1]){let l=s+a*17,c=i*.4,h=e.createRadialGradient(l,c,2,l,c,17);h.addColorStop(0,"rgba(10,0,0,.95)"),h.addColorStop(.55,"rgba(40,10,15,.75)"),h.addColorStop(1,"rgba(40,10,15,0)"),e.fillStyle=h,e.beginPath(),e.ellipse(l,c,17,14,0,0,7),e.fill(),h=e.createRadialGradient(l,c+1,0,l,c+1,6),h.addColorStop(0,"rgba(255,250,200,1)"),h.addColorStop(.4,"rgba(230,210,120,.95)"),h.addColorStop(1,"rgba(120,90,30,0)"),e.fillStyle=h,e.beginPath(),e.arc(l,c+1,6,0,7),e.fill(),e.fillStyle="rgba(60,0,0,.9)",e.beginPath(),e.arc(l+a*1,c+1,2.4,0,7),e.fill(),e.strokeStyle="rgba(30,10,10,.8)",e.lineWidth=3,e.beginPath(),e.moveTo(l-12,c-11-a*3),e.lineTo(l+12,c-11+a*3),e.stroke()}e.fillStyle="rgba(20,5,5,.9)",e.beginPath(),e.moveTo(s-7,i*.58),e.lineTo(s+7,i*.58),e.lineTo(s,i*.5),e.fill();let r=i*.7;e.fillStyle="rgba(25,0,0,.95)",e.beginPath(),e.ellipse(s+2,r,20,11,.06,0,7),e.fill(),e.fillStyle="rgba(120,20,30,.9)",e.fillRect(s-18,r-10,38,4),e.fillRect(s-16,r+6,34,4);let o=Wt(253);for(let a=0;a<8;a++)o()<.2||(e.fillStyle=`rgb(${190+o()*40|0},${170+o()*30|0},${110+o()*30|0})`,e.fillRect(s-16+a*4.4,r-7,3.4,5+o()*3),e.fillRect(s-15+a*4.4,r+2+o()*2,3.4,4+o()*3));e.fillStyle="rgba(110,5,5,.85)";for(let a=0;a<6;a++)e.fillRect(s-14+o()*28,r+8,3,12+o()*28);e.strokeStyle="rgba(90,5,5,.9)",e.lineWidth=4,e.beginPath(),e.moveTo(s+26,i*.46),e.lineTo(s+36,i*.64),e.stroke(),Dt(e,t,i,2400,["rgba(0,0,0,.18)","rgba(60,70,40,.2)"],1,3,254),e.fillStyle="rgba(25,20,15,.85)";for(let a=0;a<260;a++){let l=o()<.5?o()*t*.22:t*.78+o()*t*.22;e.fillRect(l,o()*i*.5,2,6+o()*8)}e.fillRect(0,0,t,i*.08)}),paper:()=>Ze("paper",128,128,(n,e,t)=>{n.fillStyle="#d9cfb0",n.fillRect(0,0,e,t);for(let i=18;i<t;i+=10)n.fillStyle="rgba(40,40,80,.45)",n.fillRect(12,i,60+Math.sin(i)*40,2);pt(n,e,t,5,"rgba(110,20,10,.5)",4,12,261)}),wood2:()=>Ze("wood2",256,256,(n,e,t)=>{n.fillStyle="#5b4632",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=21)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(0,i,e,2);Dt(n,e,t,1600,["rgba(0,0,0,.2)","rgba(160,120,80,.15)"],1,5,271),pt(n,e,t,10,"rgba(30,20,10,.4)",10,40,272)})};var Kp=n=>new jt(n),Jp={},i0=(n,e)=>Jp[n]||(Jp[n]=e());function Qr(n,{x:e=0,y:t=0,z:i=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1,c:h=16777215}={}){let u=new $e().compose(new D(e,t,i),new Cn().setFromEuler(new yn(s,r,o)),new D(a,l,c)),f=n.index?n.toNonIndexed():n.clone();f.applyMatrix4(u);let d=new Je(h),g=f.attributes.position.count,x=new Float32Array(g*3);for(let p=0;p<g;p++)x[p*3]=d.r,x[p*3+1]=d.g,x[p*3+2]=d.b;return f.setAttribute("color",new Pt(x,3)),f.attributes.uv||f.setAttribute("uv",new Pt(new Float32Array(g*2),2)),f}var na=n=>jn(n,!1),Vv=(n,e,t)=>new Un(n,e,t),Wv=(n,e,t,i=10)=>new ln(n,e,t,i),af=16777215,Jl=(n,e=14)=>new Ho(n.map(([t,i])=>new _e(t,i)),e);function lf(n,e,t,i){let s=n.attributes.position,r=i,o=()=>(r=r*16807%2147483647)/2147483647;for(let a=0;a<s.count;a++)s.getY(a)<e&&s.setY(a,s.getY(a)+(o()-.3)*t);return n}function As(n,e,t,i=9){let s=new ln(e,n,t,i,3);return s.translate(0,-t/2,0),s}function jp(n=1,e=!1){let t=[],i=new Et(.045*n,8,6);t.push(Qr(i,{y:-.04*n,sx:1,sy:1.2,sz:.5,c:af}));for(let s=0;s<4;s++){let r=As(.011*n,.008*n,(e?.085:.07)*n,5);t.push(Qr(r,{x:(-.03+s*.02)*n,y:-.085*n,z:.008,rx:.5+s*.08,c:af}))}return t.push(Qr(As(.012*n,.009*n,.05*n,5),{x:.042*n,y:-.03*n,z:.015,rz:.9,rx:.4,c:af})),t}var Xv=()=>i0("zg2",()=>{let n=(e,t=10,i=8)=>new Et(e,t,i);return{torso:Jl([[.001,-.06],[.13,-.04],[.15,.06],[.135,.2],[.15,.32],[.18,.44],[.19,.52],[.165,.6],[.07,.67],[.045,.72],[.001,.73]]),shirt:lf(Jl([[.152,.05],[.14,.2],[.157,.32],[.187,.44],[.198,.52],[.174,.6],[.08,.665],[.06,.68]],16),.1,.12,7),belly:Jl([[.001,-.06],[.16,-.04],[.22,.08],[.25,.2],[.23,.34],[.22,.46],[.2,.55],[.17,.61],[.07,.67],[.05,.72],[.001,.73]]),bellyShirt:lf(Jl([[.17,.22],[.24,.3],[.232,.4],[.212,.5],[.18,.6],[.08,.665],[.06,.68]],16),.27,.08,9),ribs:(()=>{let e=[];for(let t=0;t<5;t++){let i=new _n(.17-t*.006,.008,4,14,Math.PI*.9);e.push(Qr(i,{y:.3+t*.055,rx:Math.PI/2,rz:Math.PI*.05,sx:1.04,sy:.6,c:14274486}))}return na(e)})(),pelvis:n(.16,12,8),head:(()=>{let e=n(.115,18,14);return e.rotateY(-Math.PI/2),e})(),brow:(()=>{let e=new Tn(.026,.11,3,8);return e.rotateZ(Math.PI/2),e})(),ear:n(.03,6,5),jaw:new Et(.095,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2),teeth:(()=>{let e=[];for(let t=0;t<7;t++)e.push(Qr(Vv(.013,.022,.012),{x:-.039+t*.013,y:.005,z:.082-Math.abs(t-3)*.006,ry:(t-3)*.15,c:14208928}));return na(e)})(),eye:n(.017,8,6),pustule:n(.03,6,5),neck:As(.05,.045,.12,8),upper:As(.058,.045,.29),sleeve:lf(As(.067,.06,.15,10),-.12,.05,3),shoulder:n(.068),fore:As(.044,.033,.27),elbow:n(.046),thigh:As(.088,.062,.44),knee:n(.063),shin:As(.06,.042,.42),shoe:(()=>{let e=new Tn(.05,.14,4,8);return e.rotateX(Math.PI/2),e})(),hand:na(jp(1)),claw:na(jp(1.2,!0))}}),qv=()=>i0("zm2",()=>{let n=(t,i=0,s=0)=>Kp({map:Ft.zskin("#c9c6bc"),vertexColors:!0,roughness:.82,emissive:i,emissiveIntensity:s}),e=(t,i=0,s=0)=>Kp({map:Ft.zface(t),roughness:.75,emissive:i,emissiveIntensity:s});return{body:n(),toxicBody:n(0,2817824,.28),bossBody:n(0,5900288,.25),faces:["#8e9a86","#9c9283","#7f8a7c","#a19a8a","#b0a796"].map(t=>e(t)),toxicFace:e("#6f9a48",3997482,.3),screamFace:e("#c4c0b4"),bossFace:e("#7a6a5c",6293504,.3),eyes:new ut({color:16765024}),eyesG:new ut({color:10354506}),eyesR:new ut({color:16726560}),eyesW:new ut({color:15267071}),pus:new jt({color:10354506,emissive:6749986,emissiveIntensity:1.2,roughness:.3})}}),Qp=[9345670,10261123,8358524,10590858,11577238],Yv=[13617592,8071973,3100014,2829099,6122298,9071931,7031406,3955290],Zv=[3095893,5918005,2434341,4868676,3885675],cf={},e0={},s0=3,$v=new Bt,t0=()=>null,n0=new $e,Kv=new $e;function Jv(n,e,t,i,s){e.updateMatrixWorld(!0),n0.copy(e.matrixWorld).invert();let r=[];for(let l of t)r.includes(l.parent)||r.push(l.parent);let o=cf[n];if(!o){let l=[[],[],[],[]];for(let x of t){let p=x.geometry.index?x.geometry.toNonIndexed():x.geometry.clone();for(let U of Object.keys(p.attributes))U!=="position"&&U!=="normal"&&U!=="uv"&&U!=="color"&&p.deleteAttribute(U);let m=p.attributes.position.count;p.attributes.uv||p.setAttribute("uv",new Pt(new Float32Array(m*2),2)),p.attributes.color||p.setAttribute("color",new Pt(new Float32Array(m*3).fill(1),3)),p.applyMatrix4(Kv.multiplyMatrices(n0,x.matrixWorld));let b=r.indexOf(x.parent),M=new Uint16Array(m*4),E=new Float32Array(m*4);for(let U=0;U<m;U++)M[U*4]=b,E[U*4]=1;p.setAttribute("skinIndex",new Nr(M,4)),p.setAttribute("skinWeight",new ot(E,4)),l[i[x.material.uuid]??0].push(p)}let c=[],h=[];for(let x of l)if(x.length){let p=jn(x,!1);c.push(p),h.push(p.attributes.position.count)}else h.push(0);o=jn(c,!1),o.clearGroups();let u=0;h.forEach((x,p)=>{x&&o.addGroup(u,x,p),u+=x}),o.boundingSphere=new ii(new D(0,.9,0),1.6),cf[n]=o;let f=r.map(()=>[0,0,0,0]),d=o.attributes.position,g=o.attributes.skinIndex;for(let x=0;x<d.count;x++){let p=f[g.getX(x)];p[0]+=d.getX(x),p[1]+=d.getY(x),p[2]+=d.getZ(x),p[3]++}e0[n]=f.map((x,p)=>{let m=new D(x[0]/(x[3]||1),x[1]/(x[3]||1),x[2]/(x[3]||1));return m.applyMatrix4(e.matrixWorld),r[p].worldToLocal(m)})}let a=new xl(o,s);return a.castShadow=!0,e.add(a),a.updateMatrixWorld(!0),a.bind(new _l(r)),a.userData.cent=e0[n],a}function hf(){for(let n of["walker","runner","fat","toxic","screamer","boss"])for(let e=0;e<s0;e++)jl(n,e)}function jl(n,e){let t=e??Math.random()*s0|0,i=n+t,s=!!cf[i],r=Wt(17+t*7919+n.charCodeAt(0)*131+n.length*977),o=s?t0:Qr,a=s?t0:na,l=Xv(),c=qv(),h=L=>L[r()*L.length|0],u=r()*Qp.length|0,f=Qp[u],d=h(Yv),g=h(Zv),x=c.eyes,p=c.faces[u],m=c.body,b=n==="fat"||n==="boss",M=n==="runner"||n==="screamer";n==="toxic"&&(f=7313992,d=2898460,g=2898460,x=c.eyesG,p=c.toxicFace,m=c.toxicBody),n==="runner"&&(x=c.eyesR),n==="screamer"&&(f=12894388,x=c.eyesW,p=c.screamFace,d=9208952),n==="boss"&&(f=8022620,x=c.eyesR,p=c.bossFace,m=c.bossBody,d=3811872,g=2761760);let E=(L,V=m)=>new J(s||!L?$v:L,V),U=new Be,C=new Be;U.add(C);let P=new Be;P.position.y=.95,C.add(P),P.add(E(a([o(l.pelvis,{y:-.02,sx:b?1.35:1.05,sy:.75,sz:b?1:.72,c:g})])));let N=new Be;P.add(N);let X=n==="runner"||n!=="boss"&&r()<.15,v=[o(b?l.belly:l.torso,{sx:b?1.25:M?1.05:1.2,sz:b?1:M?.62:.72,c:f})];if(X?v.push(o(l.ribs,{sx:M?1:1.12,sz:M?.68:.78,y:0})):v.push(o(b?l.bellyShirt:l.shirt,{sx:b?1.25:M?1.06:1.21,sz:b?1:M?.64:.74,c:d})),N.add(E(a(v))),n==="toxic"||n==="boss")for(let L=0;L<(n==="boss"?0:7);L++){let V=new J(l.pustule,c.pus),ae=r()*6.28;V.position.set(Math.cos(ae)*.18,.15+r()*.4,Math.sin(ae)*.12),V.scale.setScalar(.5+r()*.8),N.add(V)}if(n==="boss"){let L=[];for(let V=0;V<6;V++)L.push(o(Wv(0,.04,.3,6),{x:(V%2?1:-1)*.08,y:.25+V*.07,z:-.2,rx:-.9,c:14274486}));N.add(E(a(L)))}let S=new Be;S.position.y=.68,N.add(S),S.add(E(a([o(l.neck,{y:.1,c:f})])));let G=new Be;G.position.set(0,.12,.02),S.add(G);let z=E(l.head,p);z.scale.set(.92,1.08,1),G.add(z);let K=[o(l.brow,{y:.035,z:.088,sy:.7,sz:.8,c:f}),o(l.ear,{x:-.105,y:0,sz:.5,sx:.4,c:f}),o(l.ear,{x:.105,y:0,sz:.5,sx:.4,c:f}),o(new Et(.03,6,5),{y:-.005,z:.11,sx:.7,sy:.9,c:f})];n==="screamer"&&K.push(o(new Et(.12,10,8),{y:.03,sx:.95,sy:1,c:2762272})),G.add(E(a(K)));let le=new Be;le.position.set(0,-.045,.012),G.add(le),le.add(E(a([o(l.jaw,{sx:.82,sy:n==="screamer"?.8:.55,sz:1,c:f}),o(l.teeth,{y:0,sx:.9})])));for(let L of[-1,1]){let V=new J(l.eye,x);V.position.set(L*.036,.012,.095),G.add(V)}let $=L=>{let V=new Be;V.position.set((b?.27:M?.2:.23)*L,.55,0),N.add(V);let ae=[o(l.shoulder,{c:X?f:d}),o(l.upper,{c:f})];X||ae.push(o(l.sleeve,{c:d})),V.add(E(a(ae)));let O=new Be;return O.position.y=-.29,V.add(O),O.add(E(a([o(l.elbow,{c:f}),o(l.fore,{c:f}),o(n==="runner"||n==="boss"?l.claw:l.hand,{y:-.27,c:f})]))),{sh:V,el:O}},pe=L=>{let V=new Be;V.position.set((b?.12:.09)*L,-.03,0),P.add(V),V.add(E(a([o(l.thigh,{c:g})])));let ae=new Be;ae.position.y=-.44,V.add(ae);let O=r()<.35;return ae.add(E(a([o(l.knee,{c:g}),o(l.shin,{c:O?f:g,sx:O?1:1.12,sz:O?1:1.12}),o(l.shoe,{y:-.44,z:.05,c:2761760})]))),{hp:V,kn:ae}},ie=$(-1),ve=$(1),me=pe(-1),we=pe(1),Ke=1;n==="fat"&&(Ke=1.2),n==="runner"&&(Ke=1.02,U.scale.set(.92,1,.92)),n==="screamer"&&(Ke=1.06),n==="boss"&&(Ke=1.85),U.scale.multiplyScalar(Ke);let rt=[];U.traverse(L=>{L.isMesh&&rt.push(L)});let oe=Jv(i,U,rt,{[m.uuid]:0,[p.uuid]:1,[x.uuid]:2,[c.pus.uuid]:3},[m,p,x,c.pus]);for(let L of rt)L.parent.remove(L);let ge=oe.userData.cent,Pe=L=>oe.skeleton.bones.indexOf(L),Me=Pe(G)>=0?ge[Pe(G)].clone():new D(0,.12,0),Ye=Pe(N)>=0?ge[Pe(N)].clone():new D(0,.25,0);return{headC:Me,bodyC:Ye,sk:oe,root:U,body:C,hips:P,spine:N,neck:S,head:G,jaw:le,aL:ie,aR:ve,lL:me,lR:we,meshes:[oe],scale:Ke,type:n,phase:Math.random()*10,armUp:.6+Math.random()*.8,limp:Math.random()<.3?.4:0,tilt:(Math.random()-.5)*.5,scream:0}}function eo(n,e,t,i,s){let r=t>2.2,o=r?2.4+t*.5:1.3+t*.9,a=e*o+n.phase,l=Math.sin(a),c=Math.cos(a),h=Math.min(1,t/(r?4:1.6));if(n.lL.hp.rotation.x=l*(r?.9:.5)*h,n.lR.hp.rotation.x=-l*(r?.9:.5)*h*(1-n.limp),n.lL.kn.rotation.x=Math.max(0,-c)*(r?1.3:.6)*h,n.lR.kn.rotation.x=Math.max(0,c)*(r?1.3:.6)*h,n.hips.position.y=.95-Math.abs(c)*.05*h-(r?.06:0),n.spine.rotation.x=r?.45:.2+Math.sin(e*.7+n.phase)*.05,n.spine.rotation.z=n.tilt*.3+l*.06*h,n.neck.rotation.z=n.tilt+Math.sin(e*1.3+n.phase)*.1,n.neck.rotation.x=r?-.35:-.15,n.jaw.rotation.x=.12+Math.max(0,Math.sin(e*2.1+n.phase))*.18+i*.45+(n.scream||0)*.7,n.scream){n.neck.rotation.x=-.6*n.scream,n.aL.sh.rotation.x=-.4,n.aR.sh.rotation.x=-.4,n.aL.sh.rotation.z=.6,n.aR.sh.rotation.z=-.6;return}let u=r?1:n.armUp,f=r?c*.9:Math.sin(e*1.7+n.phase)*.12;n.aL.sh.rotation.x=-u-f-i*1.2,n.aR.sh.rotation.x=-u+f-i*1.4*Math.max(0,Math.sin(e*14)),n.aL.sh.rotation.z=.08,n.aR.sh.rotation.z=-.08,n.aL.el.rotation.x=-.3-i*.4,n.aR.el.rotation.x=-.25-i*.6*Math.max(0,Math.cos(e*14)),s&&(n.spine.rotation.x=.9,n.aL.sh.rotation.x=-2.2,n.aR.sh.rotation.x=-2,n.lL.hp.rotation.x=-1,n.lL.kn.rotation.x=1.4)}var Ci=n=>new jt(n),Ql=null;function jv(){return Ql||(Ql={metal:Ci({color:2829617,metalness:.7,roughness:.42}),blued:Ci({color:1909032,metalness:.85,roughness:.3}),steel:Ci({color:10133156,metalness:.9,roughness:.25}),wood:Ci({map:be.wood(),color:11038783,roughness:.55}),poly:Ci({color:1842464,roughness:.78}),olive:Ci({color:4870710,roughness:.72}),tan:Ci({color:9075290,roughness:.75}),rubber:Ci({color:921103,roughness:.95}),brass:Ci({color:13148234,metalness:.9,roughness:.3}),lens:new jt({color:661552,metalness:.2,roughness:.05,emissive:530480,emissiveIntensity:.6}),red:new ut({color:16719904}),pap:Ci({map:be.pap(),emissive:6953648,emissiveIntensity:.55,metalness:.5,roughness:.3}),glow:new ut({color:6750088}),glowB:new ut({color:6342911}),glowP:new ut({color:14713087})},Ql)}var r0=new $e,Qv=new Cn,eM=new yn,tM=new D,nM=new D(1,1,1);function iM(n){n=n.index?n.toNonIndexed():n;for(let e of Object.keys(n.attributes))e!=="position"&&e!=="normal"&&e!=="uv"&&n.deleteAttribute(e);return n.attributes.uv||n.setAttribute("uv",new Pt(new Float32Array(n.attributes.position.count*2),2)),n}var sM={pistol:.099,ranger:.102,viper:.117,ripper:.117,trench:.095,kestrel:.128,hammer:.136,brawler:.107,widow:.136,ion:.148,surge:.152};function Ji(n,e){let t=jv(),i=new Map,s=x=>e&&x!=="steel"&&x!=="lens"&&x!=="red"&&x!=="brass"&&x!=="rubber"&&x!=="glow"?t.pap:x==="glow"&&e?t.glowP:t[x],r=(x,p,m=0,b=0,M=0,E=0,U=0,C=0)=>{r0.compose(tM.set(M,b,-m),Qv.setFromEuler(eM.set(E,U,C)),nM),x.applyMatrix4(r0);let P=s(p);i.has(P)||i.set(P,[]),i.get(P).push(iM(x))},o=(x,p,m,b=.004,M=0)=>{let E=new wi;E.moveTo(x[0][0],x[0][1]);for(let P=1;P<x.length;P++)E.lineTo(x[P][0],x[P][1]);E.closePath();let U=Math.max(.002,p-2*b),C=new Ys(E,{depth:U,bevelEnabled:b>0,bevelThickness:b,bevelSize:b,bevelSegments:2,curveSegments:4});C.translate(0,0,-U/2),C.rotateY(Math.PI/2),r(C,m,0,0,M)},a=(x,p,m,b,M,E=14,U=m,C=0)=>r(new ln(U,m,Math.abs(p-x),E).rotateX(-Math.PI/2),M,(x+p)/2,b,C),l=(x,p,m,b,M,E,U=0,C=0)=>r(new Un(m,b,M),E,x,p,U,C),c=(x,p,m=.022,b=.05)=>{let M=new _n(m,.0042,5,12,Math.PI);M.rotateZ(Math.PI),M.scale(b/(2*m),1,1),M.rotateY(Math.PI/2),r(M,"metal",x,p),l(x+.004,p-.008,.006,.02,.006,"steel",0,.35)},h=(x,p,m,b="metal")=>{l((x+p)/2,m,.024,.006,p-x,b);for(let M=x+.01;M<p;M+=.02)l(M,m+.006,.026,.006,.009,b)},u=.5,f=.06;switch(n){case"pistol":{o([[-.05,.046],[.165,.046],[.172,.052],[.172,.086],[.005,.09],[-.045,.088],[-.054,.078]],.033,"blued",.004);for(let x=0;x<6;x++)l(-.042+x*.006,.066,.035,.03,.0025,"rubber");o([[-.046,.047],[.158,.047],[.158,.032],[.07,.028],[.045,.022],[-.03,.022],[-.046,.03]],.029,"metal",.003),o([[-.045,.03],[.014,.03],[0,-.092],[-.006,-.104],[-.058,-.104],[-.066,-.088],[-.053,0]],.035,"wood",.005),l(-.032,-.109,.033,.009,.05,"steel",0,.12),a(.165,.178,.009,.07,"steel"),l(.155,.094,.006,.01,.012,"metal"),l(-.036,.094,.03,.012,.01,"metal"),l(-.058,.08,.012,.016,.012,"steel",0,-.4),l(.02,.04,.008,.008,.02,"steel",.018),c(.035,.022),u=.18,f=.07;break}case"brawler":{o([[-.045,.03],[.075,.03],[.075,.094],[0,.098],[-.03,.094],[-.052,.074]],.03,"steel",.004),r(new ln(.033,.033,.064,12).rotateX(-Math.PI/2),"steel",.035,.062);for(let x=0;x<6;x++){let p=x/6*Math.PI*2;r(new ln(.0075,.0075,.066,6).rotateX(-Math.PI/2),"rubber",.035,.062+Math.sin(p)*.019,Math.cos(p)*.019)}a(.07,.27,.012,.074,"steel",14),l(.17,.088,.013,.012,.2,"steel"),l(.14,.054,.016,.022,.13,"steel"),l(.262,.1,.004,.016,.014,"red"),l(-.03,.1,.022,.01,.012,"metal"),l(-.055,.09,.01,.014,.024,"metal",0,-.6),o([[-.046,.034],[0,.034],[-.012,-.08],[-.024,-.096],[-.066,-.096],[-.072,-.07],[-.062,0]],.037,"wood",.006),c(.03,.025),u=.275,f=.074;break}case"viper":case"ripper":{let x=n==="ripper";o([[-.08,.03],[.2,.03],[.205,.04],[.205,.076],[.1,.086],[-.08,.086]],.05,x?"poly":"metal",.006),a(.08,.33,.012,.09,"metal",10),o([[.2,.026],[.34,.032],[.345,.04],[.345,.074],[.2,.078]],.058,"poly",.008);for(let m=0;m<4;m++)l(.235+m*.028,.03,.06,.006,.012,"rubber");a(.34,.39,.011,.056,"steel"),a(.38,.405,.016,.056,"metal",10),o([[-.035,.03],[.02,.03],[.004,-.088],[-.004,-.096],[-.046,-.096],[-.054,-.08],[-.048,0]],.04,"poly",.006);let p=x?1.35:1;o([[.052,.03],[.092,.03],[.1+.03*p,-.1*p],[.12+.03*p,-.17*p],[.085+.03*p,-.18*p],[.07+.01*p,-.1*p],[.056,.03]],.03,"metal",.004),c(.03,.026);for(let m of[-.018,.018])a(-.08,-.27,.006,.066,"steel",8,.006,m);o([[-.29,-.005],[-.265,-.005],[-.265,.09],[-.29,.096]],.052,"rubber",.006),r(new ln(.015,.015,.03,10).rotateZ(Math.PI/2),"metal",-.06,.1),l(.325,.108,.004,.018,.008,"metal",.012),l(.325,.108,.004,.018,.008,"metal",-.012),l(.325,.104,.003,.012,.004,"steel"),u=.41,f=.056;break}case"trench":{o([[-.06,.025],[.14,.025],[.14,.086],[-.02,.09],[-.06,.078]],.05,"blued",.006),l(.04,.06,.004,.026,.06,"steel",.026),a(.14,.74,.013,.074,"blued",14),a(.14,.64,.012,.043,"metal",12),a(.63,.66,.016,.058,"metal",10),o([[.3,.02],[.5,.02],[.51,.035],[.5,.066],[.3,.066],[.29,.035]],.054,"wood",.009);for(let x=0;x<7;x++)l(.32+x*.025,.043,.058,.03,.005,"rubber");o([[-.055,.08],[-.055,.025],[-.025,-.01],[-.03,-.075],[-.07,-.08],[-.085,-.02],[-.42,-.04],[-.43,-.035],[-.43,.07],[-.36,.08]],.044,"wood",.008),l(-.44,.015,.046,.115,.02,"rubber"),r(new Et(.005,6,5),"steel",.735,.09),c(.02,.024),u=.75,f=.074;break}case"ranger":case"widow":{let x=n==="widow";o([[.48,.062],[.48,.036],[.06,.026],[.03,.006],[0,-.07],[-.046,-.07],[-.052,-.02],[-.1,.004],[-.44,-.035],[-.455,-.03],[-.455,.078],[-.1,.068],[-.06,.062]],.046,x?"tan":"wood",.008),l(-.465,.022,.048,.11,.02,"rubber"),a(-.06,.18,.02,.076,"blued",14),r(new ln(.005,.005,.05,6).rotateZ(Math.PI/2),"steel",-.01,.07,.035,0,0,-.5),r(new Et(.01,8,6),"steel",-.01,.058,.056);let p=x?.8:.64;if(a(.18,p,.012,.076,"blued",12,.009),x){a(p-.01,p+.05,.016,.076,"metal",10),a(-.06,.18,.018,.136,"poly",16),a(.18,.24,.018,.136,"poly",16,.031),a(-.11,-.06,.025,.136,"poly",16,.018),r(new pi(.028,16),"lens",.241,.136,0,0,Math.PI),r(new pi(.022,16),"lens",-.111,.136),r(new ln(.012,.012,.03,10),"metal",.06,.162),r(new ln(.012,.012,.03,10).rotateZ(Math.PI/2),"metal",.06,.136,.026),l(0,.108,.02,.03,.02,"metal"),l(.14,.108,.02,.03,.02,"metal");for(let m of[-.02,.02])a(.47,.6,.004,.02,"metal",6,.004,m)}else l(.62,.094,.004,.016,.01,"metal"),l(.12,.096,.02,.012,.012,"metal"),a(.42,.47,.016,.076,"metal",10);c(0,.004,.022,.06),u=p+(x?.06:.01),f=.076;break}case"kestrel":{o([[-.08,.04],[.16,.04],[.16,.088],[-.08,.088]],.044,"olive",.005),o([[-.065,.042],[.12,.042],[.12,.012],[.08,0],[-.02,0],[-.065,.02]],.04,"metal",.004),h(-.07,.42,.094),a(.16,.42,.031,.064,"poly",8);for(let x=0;x<5;x++)l(.19+x*.05,.064,.066,.012,.02,"rubber");a(.42,.53,.01,.064,"steel",10),a(.52,.565,.015,.064,"metal",8),o([[.37,.09],[.385,.135],[.4,.135],[.41,.09]],.012,"metal",.002),o([[.06,.012],[.108,.012],[.128,-.1],[.152,-.172],[.108,-.184],[.088,-.1],[.064,.012]],.027,"metal",.004),o([[-.032,.012],[.01,.012],[-.006,-.088],[-.014,-.096],[-.05,-.096],[-.058,-.08]],.035,"poly",.006),c(.03,.006),a(-.08,-.27,.016,.062,"metal",12),o([[-.19,.084],[-.36,.088],[-.372,.08],[-.372,-.024],[-.34,-.024],[-.2,.034]],.042,"poly",.006),l(.04,.108,.026,.012,.05,"metal"),a(.015,.075,.019,.128,"metal",14),r(new pi(.015,14),"lens",.076,.128,0,0,Math.PI),r(new Et(.002,4,3),"red",.045,.128),l(-.075,.094,.03,.01,.014,"metal"),u=.57,f=.064;break}case"hammer":{o([[-.1,.02],[.22,.02],[.22,.1],[-.1,.1]],.07,"metal",.007),o([[-.06,.098],[.17,.098],[.15,.118],[-.06,.118]],.066,"blued",.004),h(-.05,.15,.124),l(.06,-.035,.07,.12,.14,"olive",.065),l(.06,.03,.074,.012,.144,"metal",.065);for(let x=0;x<5;x++)r(new ln(.006,.006,.04,6).rotateZ(Math.PI/2),"brass",.03+x*.014,.06-x*.003,.05);a(.22,.6,.032,.062,"poly",12);for(let x=0;x<6;x++)l(.26+x*.055,.062,.068,.014,.02,"rubber"),l(.26+x*.055,.062,.014,.068,.02,"rubber");a(.6,.75,.012,.062,"blued",12),a(.74,.79,.017,.062,"metal",8);{let x=new _n(.04,.006,5,12,Math.PI);x.rotateY(Math.PI/2),r(x,"metal",.3,.1)}for(let x of[-.012,.012])a(.48,.72,.005,.025,"metal",6,.005,x);o([[-.034,.02],[.01,.02],[-.004,-.088],[-.012,-.096],[-.05,-.096],[-.058,-.08]],.038,"poly",.006),c(.025,.016),o([[-.1,.092],[-.39,.082],[-.405,.072],[-.405,-.03],[-.375,-.03],[-.12,.03]],.05,"poly",.007),u=.8,f=.062;break}case"ion":{o([[-.085,.02],[.2,.03],[.28,.052],[.2,.09],[-.06,.102],[-.095,.08]],.07,"metal",.014);for(let x=0;x<4;x++)r(new _n(.06,.012,8,18),"steel",.06+x*.075,.058);a(0,.33,.026,.058,"glow",12),a(.3,.37,.022,.058,"steel",16,.05);for(let x of[-.03,0,.03])o([[0,.1],[.16,.096],[.12,.14],[.03,.135]],.006,"steel",.0015,x);r(new Et(.045,14,10),"glow",-.04,.13),r(new _n(.047,.008,6,16).rotateX(Math.PI/2),"steel",-.04,.13),o([[-.036,.024],[.012,.024],[-.004,-.088],[-.012,-.096],[-.05,-.096],[-.058,-.08]],.04,"poly",.008),c(.02,.02),u=.37,f=.058;break}case"surge":{o([[-.12,.02],[.18,.025],[.24,.05],[.2,.11],[-.08,.12],[-.13,.09]],.09,"metal",.016);for(let x=0;x<5;x++)r(new _n(.07,.014,8,18),"steel",.02+x*.06,.07);a(-.02,.3,.034,.07,"glowB",12),a(.3,.42,.11,.07,"steel",18,.04),r(new _n(.105,.012,6,20),"glowB",.42,.07),r(new Et(.05,14,10),"glowB",-.06,.15),r(new _n(.052,.009,6,16).rotateX(Math.PI/2),"steel",-.06,.15),o([[-.04,.024],[.012,.024],[-.004,-.09],[-.012,-.1],[-.05,-.1],[-.06,-.08]],.045,"poly",.008),c(.02,.02),u=.42,f=.07;break}}let d=new Be;for(let[x,p]of i){let m=new J(jn(p,!1),x);m.castShadow=!0,d.add(m)}let g=new Yt;return g.position.set(0,f,-u),d.add(g),{group:d,muzzle:g,sight:sM[n]??.11}}var Gt=n=>new jt(n),o0={},uf=(n,e)=>o0[n]||(o0[n]=e());function Te(n,{x:e=0,y:t=0,z:i=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1,c:h=16777215}={}){let u=new $e().compose(new D(e,t,i),new Cn().setFromEuler(new yn(s,r,o)),new D(a,l,c)),f=n.index?n.toNonIndexed():n.clone();f.applyMatrix4(u);let d=new Je(h),g=f.attributes.position.count,x=new Float32Array(g*3);for(let p=0;p<g;p++)x[p*3]=d.r,x[p*3+1]=d.g,x[p*3+2]=d.b;return f.setAttribute("color",new Pt(x,3)),f.attributes.uv||f.setAttribute("uv",new Pt(new Float32Array(g*2),2)),f}var Pi=n=>jn(n,!1),ce=(n,e,t)=>new Un(n,e,t),ht=(n,e,t,i=10)=>new ln(n,e,t,i),rM=()=>uf("zg",()=>({torso:new Tn(.19,.34,4,10),pelvis:new Tn(.16,.08,4,8),head:(()=>{let n=new Et(.135,14,10),e=ce(.17,.07,.14);e.translate(0,-.11,.04);let t=ce(.2,.04,.06);t.translate(0,.03,.11);let i=ce(.035,.05,.05);return i.translate(0,-.02,.135),jn([n.toNonIndexed(),e.toNonIndexed(),t.toNonIndexed(),i.toNonIndexed()])})(),upper:(()=>{let n=new Tn(.06,.22,3,8);return n.translate(0,-.15,0),n})(),fore:(()=>{let n=new Tn(.05,.22,3,8);n.translate(0,-.14,0);let e=ce(.07,.11,.04);e.translate(0,-.32,0);let t=ce(.075,.06,.03);return t.translate(0,-.4,.02),t.rotateX(.3),jn([n.toNonIndexed(),e.toNonIndexed(),t.toNonIndexed()])})(),thigh:(()=>{let n=new Tn(.085,.3,3,8);return n.translate(0,-.22,0),n})(),shin:(()=>{let n=new Tn(.068,.3,3,8);n.translate(0,-.2,0);let e=ce(.1,.07,.24);return e.translate(0,-.42,.05),jn([n.toNonIndexed(),e.toNonIndexed()])})(),eyes:(()=>{let n=new Et(.022,6,5),e=n.clone();return n.translate(-.045,0,.118),e.translate(.045,0,.118),jn([n,e])})()}));function l0(){let n=rM(),e=Gt({map:be.camo(),roughness:.9}),t=Gt({color:2763812,roughness:.8}),i=Gt({color:12159594,roughness:.7}),s=Gt({color:1710618,roughness:.7}),r=Gt({color:3817520,roughness:.75}),o=new Be,a=new Be;a.position.y=.95,o.add(a);let l=new J(n.pelvis,e);l.rotation.z=Math.PI/2,l.scale.set(1,1.2,.85),a.add(l);let c=new Be;a.add(c);let h=new J(n.torso,e);h.position.y=.3,h.scale.set(1.3,1,.8),c.add(h);let u=new J(ce(.46,.42,.34),t);u.position.y=.36,c.add(u);for(let X=0;X<3;X++){let v=new J(ce(.11,.13,.06),t);v.position.set(-.13+X*.13,.26,.19),c.add(v)}let f=new J(ce(.36,.4,.16),s);f.position.set(0,.36,-.24),c.add(f);let d=new Be;d.position.y=.66,c.add(d);let g=new J(new Et(.13,12,10),i);g.position.y=.08,d.add(g);let x=new J(new Et(.155,14,8,0,Math.PI*2,0,Math.PI*.55),r);x.position.y=.12,d.add(x);let p=new J(ce(.2,.05,.05),s);p.position.set(0,.2,.12),d.add(p);let m=X=>{let v=new Be;v.position.set(.29*X,.53,0),c.add(v),v.add(new J(n.upper,e));let S=new Be;return S.position.y=-.31,v.add(S),S.add(new J(n.fore,s)),{sh:v,el:S}},b=X=>{let v=new Be;v.position.set(.11*X,-.02,0),a.add(v),v.add(new J(n.thigh,e));let S=new Be;S.position.y=-.45,v.add(S);let G=new J(n.shin,e);S.add(G);let z=new J(ce(.12,.12,.26),s);return z.position.set(0,-.4,.04),S.add(z),{hp:v,kn:S}},M=m(-1),E=m(1),U=b(-1),C=b(1),P=new Be;P.position.set(.12,.38,.32),c.add(P),o.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),o.rotation.y=Math.PI;let N=new Be;return N.add(o),{wrap:N,root:o,hips:a,spine:c,neck:d,aL:M,aR:E,lL:U,lR:C,hand:P}}function c0(n,e,t,i,s){let r=2+t*1.1,o=e*r,a=Math.min(1,t/4);n.lL.hp.rotation.x=Math.sin(o)*.7*a,n.lR.hp.rotation.x=-Math.sin(o)*.7*a,n.lL.kn.rotation.x=Math.max(0,-Math.cos(o))*1*a,n.lR.kn.rotation.x=Math.max(0,Math.cos(o))*1*a,n.hips.position.y=.95-Math.abs(Math.cos(o))*.04*a,n.spine.rotation.x=s?.25:.05,n.neck.rotation.x=-i*.5;let l=s?-.6:-1.45-i*.9;n.aR.sh.rotation.set(l,0,-.15),n.aR.el.rotation.x=-.35,n.aL.sh.rotation.set(l+.1,0,.55),n.aL.el.rotation.x=-.7,n.hand.rotation.x=s?.9:-i*.9,n.hand.position.y=s?.25:.38+i*.15}function h0(){let n=Gt({map:be.camo(),roughness:.9}),e=Gt({color:1842204,roughness:.7}),t=new Be,i=new J(new Tn(.045,.32,3,8),n);i.rotation.x=Math.PI/2-.25,i.position.set(.03,-.09,.22),t.add(i);let s=new J(ce(.07,.08,.1),e);s.position.set(0,-.03,.03),t.add(s);let r=new J(new Tn(.042,.36,3,8),n);r.rotation.set(Math.PI/2-.2,0,-.45),r.position.set(-.11,-.08,0),t.add(r);let o=new J(ce(.07,.07,.1),e);return o.position.set(-.02,0,-.17),t.add(o),{group:t,leftHand:o,leftArm:r}}function a0(n){let e=new Map;for(let t of[...n.children])!t.isMesh||t.isSkinnedMesh||t.isInstancedMesh||Array.isArray(t.material)||(e.has(t.material)||e.set(t.material,[]),e.get(t.material).push(t));for(let[t,i]of e){if(i.length<2)continue;let s=i.map(o=>{o.updateMatrix();let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();for(let l of Object.keys(a.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&a.deleteAttribute(l);return a.attributes.uv||a.setAttribute("uv",new Pt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(o.matrix)}),r=new J(jn(s,!1),t);n.add(r);for(let o of i)n.remove(o)}}function u0(n){let e=new Be,t=new Be;t.rotation.y=Math.PI/2,e.add(t);let i=Gt({color:7211792,metalness:.6,roughness:.3,envMap:n,envMapIntensity:.9}),s=Gt({color:15526110,metalness:.4,roughness:.35,envMap:n,envMapIntensity:.7}),r=Gt({color:14343648,metalness:1,roughness:.15,envMap:n,envMapIntensity:1.2}),o=Gt({color:725272,metalness:.9,roughness:.08,envMap:n,envMapIntensity:1.3,side:an}),a=Gt({color:1118481,roughness:.6}),l=Gt({color:1381653,roughness:.92}),c=new ut({color:16773832}),h=new ut({color:16722458}),u=new wi;u.moveTo(-2.25,.3),u.lineTo(-1.82,.3),u.absarc(-1.4,.3,.42,Math.PI,0,!0),u.lineTo(.96,.3),u.absarc(1.38,.3,.42,Math.PI,0,!0),u.lineTo(2.24,.3),u.lineTo(2.36,.42),u.lineTo(2.37,.66),u.lineTo(2.22,.8),u.lineTo(.78,.9),u.lineTo(-1.8,.94),u.lineTo(-2.27,.9),u.lineTo(-2.35,.62),u.lineTo(-2.3,.36),u.closePath();let f=new Ys(u,{depth:1.72,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3,curveSegments:10});f.translate(0,0,-.86),t.add(new J(f,i));let d=new wi;d.moveTo(.78,.9),d.lineTo(.05,1.3),d.lineTo(-.7,1.33),d.lineTo(-1.95,.95),d.lineTo(-1.95,.9),d.closePath();let g=new Ys(d,{depth:1.36,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2});g.translate(0,0,-.68),t.add(new J(g,i));let x=(C,P,N)=>{let X=new wi;X.moveTo(C[0][0],C[0][1]);for(let S of C.slice(1))X.lineTo(S[0],S[1]);let v=new J(new Rl(X),o);v.position.z=P,N&&(v.rotation.y=Math.PI,v.scale.x=-1),t.add(v)};x([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],.725),x([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],-.725,!0);let p=(C,P,N,X)=>{let v=new D(X[0],X[1],0).normalize(),S=new D(0,0,-1),G=new D().crossVectors(S,v),z=new J(new zt(C,P),o);z.quaternion.setFromRotationMatrix(new $e().makeBasis(S,v,G)),z.position.set(N[0]+G.x*.045,N[1]+G.y*.045,0),t.add(z)};p(1.24,.8,[.42,1.1],[-.73,.4]),p(1.22,1.1,[-1.28,1.15],[-.956,-.296]);for(let C of[-.15,.15]){let P=(N,X,v,S,G=.17)=>{let z=new J(ce(N,.012,G),s);z.position.set(X,v,C),z.rotation.z=S,t.add(z)};P(1.46,1.5,.89,-.062),P(.75,-.33,1.375,-.04),P(1.32,-1.32,1.18,.29),P(.32,-2.1,.985,.08)}let m=(C,P,N,X,v,S=0)=>{let G=new J(C,P);return G.position.set(N,X,v),G.rotation.y=S,t.add(G),G};m(ce(.45,.07,.5),a,1.25,.92,0),m(ce(.05,.26,1.4),a,2.41,.58,0);for(let C of[-.62,.62])m(ht(.09,.09,.05,14),c,2.42,.6,C).rotation.z=Math.PI/2,m(ce(.06,.2,.36),h,-2.39,.66,C*.95),m(ht(.035,.035,.2,8),r,-2.3,.3,C*.6).rotation.z=Math.PI/2,m(ce(.42,.18,.04),a,-.95,.66,C>0?.92:-.92);m(ce(.1,.09,1.86),r,2.44,.36,0),m(ce(.1,.09,1.86),r,-2.4,.38,0);let b=[],M=ht(.34,.34,.26,20).rotateX(Math.PI/2),E=ht(.2,.2,.27,14).rotateX(Math.PI/2),U=ht(.07,.07,.28,8).rotateX(Math.PI/2);for(let[C,P]of[[1.38,.8],[1.38,-.8],[-1.4,.8],[-1.4,-.8]]){let N=new Be;N.position.set(C,.34,P),t.add(N);let X=new Be;N.add(X),X.add(new J(M,l)),X.add(new J(E,r)),X.add(new J(U,a));for(let v=0;v<5;v++){let S=new J(ce(.04,.3,.02),a);S.rotation.z=v*Math.PI/2.5,S.position.z=P>0?.14:-.14,X.add(S)}b.push({w:N,spin:X,front:C>0})}m(ce(1.6,.4,1.3),a,-.4,.85,0),a0(t);for(let C of b)a0(C.spin);return e.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),{group:e,wheels:b}}function f0(){let n=new Be,e=Gt({map:be.boxSide(),roughness:.7}),t=Gt({map:be.wood(),color:6964774,roughness:.75}),i=Gt({color:9075274,metalness:.7,roughness:.4}),s=new J(ce(1.7,.62,.8),[t,t,t,t,e,e]);s.position.y=.31,n.add(s);for(let h of[-.82,.82]){let u=new J(ce(.06,.66,.84),i);u.position.set(h,.33,0),n.add(u)}let r=new Be;r.position.set(0,.62,-.4),n.add(r);let o=new J(ce(1.72,.16,.82),[t,t,t,t,e,e]);o.position.set(0,.08,.41),r.add(o);let a=new J(new ln(.6,.9,40,16,1,!0),new ut({color:5941503,transparent:!0,opacity:.16,blending:xn,depthWrite:!1,side:an}));a.position.y=20,n.add(a);let l=new Jt(new tn({map:be.glow(),color:6992127,transparent:!0,opacity:.8,blending:xn,depthWrite:!1}));l.scale.set(3,1.6,1),l.position.y=.8,n.add(l);let c=new Be;return c.position.y=.75,n.add(c),n.traverse(h=>{h.isMesh&&h!==a&&(h.castShadow=!0)}),{group:n,lid:r,beam:a,glow:l,gunSlot:c}}function ec(){let n=new Be,e=Gt({map:be.wood(),color:5914148,roughness:.8}),t=new J(ce(1.7,.62,.8),e);return t.position.y=.31,t.castShadow=!0,n.add(t),n}function d0(n,e,t){let i=new Be,s=Gt({map:be.perk(n,e,t),emissiveMap:be.perk(n,e,t),emissive:16777215,emissiveIntensity:0,roughness:.5}),r=Gt({color:new Je(e).multiplyScalar(.45),roughness:.55,metalness:.3}),o=new J(ce(1,2.1,.8),[r,r,r,r,s,r]);o.position.y=1.05,i.add(o);let a=new J(ht(.35,.45,.25,12),r);a.position.y=2.22,i.add(a);let l=new ut({color:2236962}),c=new J(new Et(.18,10,8),l);c.position.y=2.42,i.add(c);let h=new Jt(new tn({map:be.glow(),color:e,transparent:!0,opacity:0,blending:xn,depthWrite:!1}));return h.scale.set(2.4,3.2,1),h.position.set(0,1.2,.5),i.add(h),i.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),{group:i,face:s,bulbM:l,glow:h,col:e}}function p0(){let n=new Be,e=Gt({color:5593178,metalness:.6,roughness:.5}),t=new J(ce(.7,1,.18),e);t.position.y=1.4,n.add(t);let i=new J(new zt(.5,.18),new ut({map:be.label("POWER","#d8b020","#111",256,80)}));i.position.set(0,1.78,.095),n.add(i);let s=new Be;s.position.set(0,1.3,.1),n.add(s);let r=new J(ce(.06,.45,.06),Gt({color:2236962}));r.position.y=.2,s.add(r);let o=new J(new Et(.06,8,6),Gt({color:12591136,roughness:.4}));o.position.y=.43,s.add(o),s.rotation.x=.6;let a=new J(new Et(.05,8,6),new ut({color:4460817}));return a.position.set(.25,1.75,.1),n.add(a),{group:n,lever:s,lamp:a}}function m0(){let n=new Be,e=Gt({color:3025456,metalness:.7,roughness:.45}),t=Gt({color:2230320,emissive:10502399,emissiveIntensity:0,roughness:.4}),i=new J(ce(1.8,1,1.2),e);i.position.y=.5,n.add(i);let s=new J(ce(1.4,.5,.9),t);s.position.y=1.25,n.add(s);let r=new J(ce(1.8,.4,1.2),e);r.position.y=1.7,n.add(r);for(let c of[-.75,.75]){let h=new J(ht(.1,.1,1.4,8),Gt({color:9079434,metalness:.9,roughness:.3}));h.position.set(c,1.4,.45),n.add(h)}let o=new J(new zt(1.5,.3),new ut({map:be.label("THE FORGE","#14081c","#c88aff",512,100,"bold 60px Arial Black, Arial")}));o.position.set(0,2.1,0),n.add(o),o.position.z=.61;let a=new Jt(new tn({map:be.glow(),color:10502399,transparent:!0,opacity:0,blending:xn,depthWrite:!1}));a.scale.set(3.4,2.4,1),a.position.set(0,1.25,.7),n.add(a);let l=new Be;return l.position.set(0,1.25,.2),n.add(l),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),{group:n,glowM:t,glow:a,slot:l}}var oM=()=>uf("bm",()=>({wood:Gt({map:be.plank(),vertexColors:!0,roughness:.85}),metal:Gt({map:be.rust(),vertexColors:!0,roughness:.8,metalness:.3})}));function g0(){return oM()}function tc(n){return uf("piece"+n,()=>{let e=[],t=[];if(n==="wall"){for(let i of[-.92,0,.92])e.push(Te(ce(.16,2.6,.16),{x:i,y:1.3,c:9071178}));for(let i=0;i<6;i++)e.push(Te(ce(2.05,.3,.06),{y:.3+i*.38,z:.1,rz:Math.sin(i*7.3)*.04,c:[13676688,12097648,13150338][i%3]}));e.push(Te(ce(2.5,.14,.06),{y:1.2,z:-.1,rz:.85,c:10123866})),t.push(Te(ce(.8,.9,.03),{x:.4,y:1.4,z:.15,rz:.06,c:16777215}));for(let i of[-.92,0,.92])e.push(Te(new ys(.1,.3,6),{x:i,y:2.75,c:9071178}))}else if(n==="door"){for(let i of[-.95,.95])e.push(Te(ce(.18,2.7,.18),{x:i,y:1.35,c:8018490}));e.push(Te(ce(2.1,.2,.2),{y:2.6,c:8018490}))}else if(n==="gate"){for(let i=0;i<7;i++)e.push(Te(ce(.24,2.2,.06),{x:.14+i*.25,y:1.15,c:[13676688,12097648,13150338][i%3]}));for(let i of[.5,1.8])e.push(Te(ce(1.76,.16,.06),{x:.88,y:i,z:.06,c:10123866}));e.push(Te(ce(2.1,.14,.06),{x:.88,y:1.15,z:.06,rz:.62,c:10123866}))}else if(n==="spikes"){e.push(Te(ce(1.9,.12,.12),{y:.25,c:6965802})),e.push(Te(ce(1.9,.12,.12),{y:.25,z:.5,c:6965802})),e.push(Te(ce(1.9,.12,.12),{y:.25,z:-.5,c:6965802}));for(let i=0;i<12;i++){let s=-.8+i%6*.32,r=i<6?.28:-.28;e.push(Te(new ys(.06,1,5),{x:s,y:.55,z:r,rx:i<6?.55:-.55,c:13148272}))}t.push(Te(ce(1.9,.04,.04),{y:.42,c:16777215}))}return{wood:Pi(e),metal:t.length?Pi(t):null}})}var ji={pistol:{name:"Patrol .45",kind:"pistol",dmg:50,rpm:420,auto:!1,mag:8,reserve:80,reload:1.5,spread:.01,head:2.5,pierce:1,col:2763308,sound:[.9,.18]},ranger:{name:"Ranger Rifle",kind:"rifle",dmg:120,rpm:330,auto:!1,mag:10,reserve:120,reload:2.1,spread:.006,head:3,pierce:2,col:5913378,sound:[.6,.3]},viper:{name:"Viper SMG",kind:"smg",dmg:55,rpm:780,auto:!0,mag:30,reserve:180,reload:2,spread:.022,head:2.2,pierce:1,col:1974050,sound:[1.15,.14]},trench:{name:"Trench 12",kind:"shotgun",dmg:70,pellets:8,rpm:80,auto:!1,mag:6,reserve:48,reload:2.8,spread:.075,head:1.5,pierce:2,col:4861984,sound:[.45,.42]},kestrel:{name:"Kestrel AR",kind:"ar",dmg:95,rpm:640,auto:!0,mag:30,reserve:210,reload:2.3,spread:.014,head:2.5,pierce:2,col:3160618,sound:[.75,.24]},hammer:{name:"Hammer LMG",kind:"lmg",dmg:130,rpm:700,auto:!0,mag:100,reserve:400,reload:4.2,spread:.026,head:2.2,pierce:3,col:2895660,sound:[.55,.3]},brawler:{name:"Brawler Magnum",kind:"pistol",dmg:520,rpm:160,auto:!1,mag:6,reserve:60,reload:2.4,spread:.008,head:3,pierce:3,col:9409174,sound:[.5,.45]},ripper:{name:"Ripper SMG",kind:"smg",dmg:80,rpm:950,auto:!0,mag:40,reserve:280,reload:2.2,spread:.028,head:2.2,pierce:1,col:3811904,sound:[1.3,.13]},widow:{name:"Widowmaker",kind:"sniper",dmg:1600,rpm:50,auto:!1,mag:5,reserve:40,reload:3.2,spread:.001,head:4,pierce:6,col:2304042,sound:[.35,.6],zoom:2.6},ion:{name:"Ion Ray",kind:"ray",dmg:1400,rpm:260,auto:!1,mag:20,reserve:160,reload:2.4,spread:.004,head:1,pierce:1,splash:3.2,col:1727018,sound:[1.6,.35],wonder:!0},surge:{name:"Surge Cannon",kind:"wave",dmg:1100,rpm:70,auto:!1,mag:4,reserve:28,reload:3,spread:0,head:1,pierce:1,wave:14,col:1718874,sound:[1,.9],wonder:!0}},ff=["ranger","viper","trench","kestrel","hammer","brawler","ripper","widow","ion","hammer","kestrel","ripper","ion","surge"],df={surge:"Cataclysm Engine",pistol:"Hellfire .45",ranger:"Longshot Rapture",viper:"Venom Kiss",trench:"Doomsayer 24",kestrel:"Raptor Reign",hammer:"Anvil of Ruin",brawler:"Judgment Day",ripper:"Shredder Supreme",widow:"Black Widow Queen",ion:"Ion Annihilator"};function nc(n,e=!1){let t=ji[n],i={key:n,pap:e,def:t,name:e?df[n]:t.name,dmg:t.dmg*(e?2.4:1),mag:Math.round(t.mag*(e?1.5:1)),maxReserve:Math.round(t.reserve*(e?2:1)),clip:0,reserve:0,rpm:t.rpm*(e?1.12:1)};return i.clip=i.mag,i.reserve=i.maxReserve,i}var x0=[{key:"ranger",cost:500,i:16,j:23,face:[1,0]},{key:"viper",cost:1e3,i:32,j:30,face:[0,-1]},{key:"trench",cost:1500,i:13,j:14,face:[0,1]},{key:"kestrel",cost:1400,i:5,j:12,face:[1,0]}];var Tt=n=>new jt(n),y0=99,bt=()=>(y0=y0*16807%2147483647)/2147483647;function v0(n,e,t,i,s){let r=360,o=236,a=(R,_,y=!0)=>{if(!R.length)return null;let I=new J(Pi(R),_);return I.castShadow=y,I.receiveShadow=!0,i(I),I},l=(R={})=>Tt({vertexColors:!0,roughness:.85,...R}),c={},h=(R,_,y,I,F,q)=>{(c[R]||(c[R]=[])).push(_,q,y,I,q,y,I,q,F,_,q,y,I,q,F,_,q,F)};for(let R=0;R<118;R++)for(let _=0;_<180;_++){let y=$r[Re(_,R)];y&&h(y,_*2,R*2,_*2+2,R*2+2,.006+y*.001)}let u=Tt({map:Ft.road(),roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1}),f={1:e.asphaltM,2:u,3:Tt({map:be.dirt(),roughness:1,color:6969928}),4:Tt({map:be.concrete(),roughness:1,color:8025192}),5:Tt({map:be.concrete(),roughness:.95,color:9079428})};for(let R in c){let _=c[R],y=new Bt;y.setAttribute("position",new ot(_,3));let I=[],F=R==2?1/8:1/6;for(let Y=0;Y<_.length;Y+=3)I.push(_[Y]*F,_[Y+2]*F);y.setAttribute("uv",new ot(I,2)),y.computeVertexNormals();let q=new J(y,f[R]);q.receiveShadow=!0,i(q)}let d=[],g=[],x=[];for(let R=0;R<118;R++)for(let _=0;_<180;_++){if(Mt(_,R)!==5)continue;let y=W(_),I=W(R);if(R===77&&_>=3&&_<=45||(_===3||_===45)&&R>=77&&R<91){g.push(Te(ce(2,.08,.08),{x:y,y:.3,z:I,c:1710618}),Te(ce(2,.08,.08),{x:y,y:1.9,z:I,c:1710618}));let Ee=R===77;for(let ye=0;ye<5;ye++){let Ie=-.8+ye*.4;g.push(Te(ht(.025,.025,2.1,4),{x:y+(Ee?Ie:0),y:1.05,z:I+(Ee?0:Ie),c:1447446}),Te(ht(0,.05,.16,4),{x:y+(Ee?Ie:0),y:2.18,z:I+(Ee?0:Ie),c:1447446}))}continue}let q=Zr[Re(_,Math.min(117,R))]===4||R===91||R===105&&_<=45||(_===3||_===45)&&R>91&&R<=105,Y=q?3.6:5;d.push(Te(ce(2.02,Y,2.02),{x:y,y:Y/2,z:I,c:q?8026736:6973538})),q&&x.push(Te(new _n(.32,.025,4,10),{x:y,y:Y+.3,z:I,ry:(_+R)%2?0:Math.PI/2,c:9079434}))}a(d,Tt({map:be.concrete(),vertexColors:!0,roughness:.95})),a(g,l({metalness:.6,roughness:.5}),!1),a(x,l({metalness:.7}),!1);let p=[],m=[],b=[];for(let R of Es){let _=W(R.i)+(bt()-.5)*.8,y=W(R.j)+(bt()-.5)*.8,I=R.s;if(Zr[Re(R.i,R.j)]===2||bt()<.08){b.push(Te(ht(.12*I,.25*I,5*I,6),{x:_,y:2.5*I,z:y,c:2892828}));for(let Y=0;Y<4;Y++)b.push(Te(ht(.03*I,.08*I,2.2*I,4),{x:_+Math.cos(Y*1.7)*.6*I,y:(3+Y*.5)*I,z:y+Math.sin(Y*1.7)*.6*I,rz:Math.cos(Y*1.7)*.9,rx:Math.sin(Y*1.7)*.9,c:2892828}));continue}p.push(Te(ht(.14*I,.24*I,3*I,6),{x:_,y:1.5*I,z:y,c:3812384}));let F=6+bt()*5,q=new Je().setHSL(.27+bt()*.06,.3,.1+bt()*.06).getHex();for(let Y=0;Y<3;Y++)m.push(Te(new ys((2.2-Y*.55)*I,F*.45*I,7),{x:_,y:(2.2+Y*F*.22)*I+F*.2*I,z:y,ry:bt()*3,c:q}))}for(let[R,_]of[[8,87],[20,80],[33,86],[42,81],[15,89]]){let y=W(R),I=W(_);b.push(Te(ht(.16,.32,6,6),{x:y,y:3,z:I,c:2367e3}));for(let F=0;F<5;F++)b.push(Te(ht(.03,.09,2.6,4),{x:y+Math.cos(F*1.3)*.7,y:3.4+F*.5,z:I+Math.sin(F*1.3)*.7,rz:Math.cos(F*1.3),rx:Math.sin(F*1.3),c:2367e3}))}a(p,Tt({map:Ft.bark(),vertexColors:!0,roughness:1}),!1),a(m,l({roughness:1}),s==="high"),a(b,l({roughness:1}),!1);let M=(()=>{let R=new zt(1.2,.9);R.translate(0,.45,0);let _=R.clone();return _.rotateY(Math.PI/2),Pi([Te(R,{c:16777215}),Te(_,{c:16777215})])})(),E=Tt({map:Ft.weeds(),alphaTest:.45,side:an,roughness:1,vertexColors:!0}),U=[];for(let R=1;R<105;R++)for(let _=1;_<179;_++){let y=Re(_,R);if(De[y]!==0)continue;let I=$r[y],F=Mt(_+1,R)>=2&&Mt(_+1,R)!==12||Mt(_-1,R)>=2&&Mt(_-1,R)!==12||Mt(_,R+1)>=2||Mt(_,R-1)>=2,q=F?.55:I===0?.16:I===2?.07:.1;bt()<q*(s==="low"?.5:1)&&U.push([W(_)+(bt()-.5)*1.6,W(R)+(bt()-.5)*1.6,F?1.2:.7+bt()*.6])}let C=new Fr(M,E,U.length),P=new $e,N=new Cn,X=new yn,v=new D;U.forEach(([R,_,y],I)=>{X.set(0,bt()*6.28,0),N.setFromEuler(X),v.set(y,y*(.7+bt()*.6),y),P.compose(new D(R,0,_),N,v),C.setMatrixAt(I,P),C.setColorAt(I,new Je().setHSL(.18+bt()*.08,.35,.45+bt()*.25))}),C.receiveShadow=!0,i(C);let S=Tt({map:Ft.leaves(),alphaTest:.5,side:an,roughness:1,color:9083504}),G=[];for(let R=1;R<105;R++)for(let _=1;_<179;_++)if(!(De[Re(_,R)]!==2||bt()>.06)){for(let[y,I]of[[1,0],[-1,0],[0,1],[0,-1]])if(Mt(_+y,R+I)===0){let F=new zt(1.6+bt(),1.8+bt()*1.4);F.translate(0,.9,0),G.push(Te(F,{x:W(_)+y*1.03,y:bt()*.6,z:W(R)+I*1.03,ry:y?Math.PI/2:0,c:16777215}));break}}a(G,S,!1);let z=[];for(let[R,_]of Qo){let y=Mt(R-1,_)!==0&&Mt(R+1,_)!==0&&(Mt(R,_-1)===0||Mt(R,_+1)===0||Mt(R,_-1)!==2),I=new zt(1.9,1.4);z.push(Te(I,{x:W(R),y:1.6,z:W(_),ry:y?0:Math.PI/2,c:16777215}))}a(z,Tt({map:Ft.shards(),transparent:!0,depthWrite:!1,side:an,roughness:.1,metalness:.6,vertexColors:!0}),!1);let K=new Set;e.signs=[];for(let R of Ri){if(R.z<=3||R.name==="House"||R.name==="Bunker"||R.name==="Shop"||K.has(R.name)||/Hall|hall|Court|Entrance/.test(R.name))continue;K.add(R.name);let _=null;for(let Ee=R.j0-1;Ee<=R.j1+1;Ee++)for(let ye=R.i0-1;ye<=R.i1+1;ye++)if(Mt(ye,Ee)===11){_=[ye,Ee];break}if(!_)continue;let[y,I]=_,F=Mt(y,I+1)===0||Mt(y,I+1)===0?[0,1]:Mt(y,I-1)===0?[0,-1]:Mt(y+1,I)===0?[1,0]:[-1,0],q=Math.min(6,1.4+R.name.length*.32),Y=new J(new zt(q,.8),Tt({map:be.label(R.name.toUpperCase(),"#1c1a16","#d8c89a",512,86,"bold 52px Arial Black, Arial"),roughness:.8}));Y.position.set(W(y)+F[0]*1.06,2.95,W(I)+F[1]*1.06),Y.rotation.y=Math.atan2(F[0],F[1]),Y.rotation.z=(bt()-.5)*.12,i(Y)}{let R=new J(new zt(14,1.6),Tt({map:be.label("GREENBROOK PARK MALL","#2a2420","#c8b890",1024,116,"bold 76px Arial Black, Arial"),roughness:.8}));R.position.set(W(118),3.1,W(50)-1.06),R.rotation.y=Math.PI,i(R)}let le=[];for(let R of Ss){let _=W(R.i)+(bt()-.5)*.4,y=W(R.j)+(bt()-.5)*.3,I=(bt()-.5)*.3,F=new Je().setHSL(.1,.05,.3+bt()*.15).getHex();R.kind===0?(le.push(Te(ce(.8,1,.18),{x:_,y:.5,z:y,rz:I,c:F})),le.push(Te(ht(.4,.4,.18,10,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),{x:_,y:1,z:y,rz:I+Math.PI/2,c:F}))):R.kind===1?(le.push(Te(ce(.16,1.4,.16),{x:_,y:.7,z:y,rx:I,c:F})),le.push(Te(ce(.7,.16,.16),{x:_,y:1.05,z:y,rx:I,c:F}))):R.kind===2?le.push(Te(ht(.12,.28,1.8,4),{x:_,y:.9,z:y,ry:.78,c:F}),Te(ce(.7,.3,.7),{x:_,y:.15,z:y,c:F})):le.push(Te(ce(.9,.7,.22),{x:_,y:.35,z:y,rz:I*2,c:F})),le.push(Te(ce(.9,.08,1.8),{x:_,y:.04,z:y+1,c:2760728}))}a(le,Tt({map:Ft.stone(),vertexColors:!0,roughness:.95})),e.graveFog=[];let $=new tn({map:be.glow(),color:9083530,transparent:!0,opacity:.22,depthWrite:!1,fog:!0});for(let R=0;R<26;R++){let _=new Jt($);_.position.set(W(5+bt()*38),.6+bt()*.8,W(78+bt()*12)),_.scale.set(10+bt()*8,2.6+bt()*1.5,1),i(_),e.graveFog.push(_)}{let R=new J(new zt(4.5,.9),Tt({map:be.label("LOCKWOOD CEMETERY","#151412","#a89a80",512,96,"bold 50px Georgia, serif"),roughness:.9}));R.position.set(W(24)+1,2.7,W(77)-.2),R.rotation.y=Math.PI,i(R);for(let _ of[W(22)+1,W(27)-1]){let y=new J(ce(.5,3,.5),t.stone);y.position.set(_,1.5,W(77)),i(y)}}{let R=new J(new zt(5,.9),Tt({map:be.label("FORT CALDER - RESTRICTED","#2a3020","#e0d8b0",512,96,"bold 44px Arial Black, Arial"),roughness:.9}));R.position.set(W(24)+1,3,W(91)-1.05),R.rotation.y=Math.PI,i(R)}let pe=[],ie=4870706;for(let[R,_,y]of Ot.tanks){let I=W(R),F=W(_),q=(Ee,ye)=>[I+Ee*Math.cos(y)+ye*Math.sin(y),F-Ee*Math.sin(y)+ye*Math.cos(y)];pe.push(Te(ce(3.2,1,5.6),{x:I,y:.8,z:F,ry:y,c:ie}),Te(ce(2.4,.7,2.6),{x:q(0,-.3)[0],y:1.6,z:q(0,-.3)[1],ry:y,c:4409900}));let Y=q(0,2.2);pe.push(Te(ht(.12,.14,3.2,8).rotateX(Math.PI/2),{x:Y[0],y:1.7,z:Y[1],ry:y,c:3817512}));for(let Ee of[-1,1]){let ye=q(Ee*1.55,0);pe.push(Te(ce(.6,.9,5.8),{x:ye[0],y:.45,z:ye[1],ry:y,c:2236962}))}}for(let R=0;R<18;R++){let _=R/18*Math.PI*2;pe.push(Te(new Tn(.28,.6,3,6).rotateZ(Math.PI/2),{x:W(24)+1+Math.cos(_)*3.2*(R<9?1:0)+(R>=9?(R-13)*.8:0),y:.28,z:W(93)+(R<9?Math.sin(_)*.3:.6),ry:R<9?_+Math.PI/2:0,c:9075288}))}a(pe,l({roughness:.9})),e.heli=fM(),e.heli.group.position.set(Ot.heli.x,0,Ot.heli.z),e.heli.group.rotation.y=-.4,i(e.heli.group);{let R=new J(new pi(4.5,24),Tt({map:be.label("H","#3a3a36","#e8e0c0",256,256,"bold 200px Arial Black, Arial"),roughness:.9}));R.rotation.x=-Math.PI/2,R.position.set(Ot.heli.x,.02,Ot.heli.z),i(R)}let ve=new Be;ve.position.set(Ot.wheel.x,0,Ot.wheel.z),i(ve);let me=Tt({map:be.rust(),roughness:.8,metalness:.4,color:10518640});for(let R of[-1,1]){let _=new J(ht(.15,.2,13,6),me);_.position.set(R*3.5,6,.9),_.rotation.z=R*.28,ve.add(_);let y=_.clone();y.position.z=-.9,ve.add(y)}let we=new Be;we.position.y=12,ve.add(we),we.add(new J(new _n(9,.14,6,40),me));let Ke=new J(new _n(9,.14,6,40),me);Ke.position.z=1.2,we.add(Ke);for(let R=0;R<12;R++){let _=new J(ht(.05,.05,9,4),me);_.rotation.z=R/12*Math.PI*2,_.position.set(Math.sin(R/12*Math.PI*2)*-4.5,Math.cos(R/12*Math.PI*2)*4.5,.6),we.add(_)}e.wheelBulbM=new ut({color:3807764});let rt=[];for(let R=0;R<36;R++){let _=R/36*Math.PI*2;rt.push(Te(new Et(.13,5,4),{x:Math.cos(_)*9.2,y:Math.sin(_)*9.2,z:.6,c:16777215}))}we.add(new J(Pi(rt),e.wheelBulbM));let oe=[];for(let R=0;R<8;R++){let _=R/8*Math.PI*2;oe.push(Te(ce(1.3,1,1),{x:Math.cos(_)*9,y:Math.sin(_)*9-.9,z:.6,c:[9054752,2771562,10521130][R%3]}))}we.add(new J(Pi(oe),l({map:be.rust()}))),e.wheel={group:ve,rim:we,glow:null};{let R=new Jt(new tn({map:be.glow(),color:16719888,transparent:!0,opacity:0,blending:xn,depthWrite:!1}));R.scale.set(26,26,1),R.position.set(Ot.wheel.x,12,Ot.wheel.z+.6),i(R),e.wheel.glow=R}let ge=Ot.coaster,Pe=[];for(let R=0;R<16;R++){let _=R/16*Math.PI*2,y=12.5,I=18;Pe.push(new D(ge.cx+Math.cos(_)*y*(1+.15*Math.sin(_*3)),4+3.5*Math.max(0,Math.sin(_*2+.6))+(R===4?6:0),ge.cz+Math.sin(_)*I))}let Me=new Br(Pe,!0,"catmullrom",.5),Ye=Tt({color:9054746,roughness:.6,metalness:.5,map:be.rust()}),L=[];for(let R of[-.5,.5]){let _=[];for(let y=0;y<=200;y++){let I=y/200,F=Me.getPointAt(I),q=Me.getTangentAt(I),Y=new D(-q.z,0,q.x).normalize();_.push(F.clone().addScaledVector(Y,R))}L.push(new Cl(new Br(_,!0),200,.07,5,!0))}let V=[];for(let R=0;R<120;R++){let _=R/120,y=Me.getPointAt(_),I=Me.getTangentAt(_);V.push(Te(ce(1.3,.08,.18),{x:y.x,y:y.y-.08,z:y.z,ry:Math.atan2(I.x,I.z),c:4861984})),R%6===0&&V.push(Te(ht(.12,.16,y.y,6),{x:y.x,y:y.y/2,z:y.z,c:5917248}))}for(let R of L){let _=new J(R,Ye);i(_)}a(V,l({map:be.rust()}),!1),e.coaster={curve:Me,cart:uM(),t:0},i(e.coaster.cart);{let R=Me.getPointAt(0);e.coaster.cart.position.copy(R)}{let R=ge.booth,_=W(R.i),y=W(R.j),I=new J(ce(1.8,2.4,1.8),Tt({map:be.metal(),color:6961706,roughness:.7}));I.position.set(_,1.2,y),I.castShadow=!0,i(I),e.coasterLamp=new J(new Et(.16,8,6),new ut({color:4194304})),e.coasterLamp.position.set(_+.95,2,y),i(e.coasterLamp);let F=new J(new zt(1.6,.4),Tt({map:be.label("THE WIDOWMAKER","#200a08","#ff6040",512,128,"bold 62px Arial Black, Arial")}));F.position.set(_+.92,2.5,y),F.rotation.y=Math.PI/2,i(F)}let ae=[];for(let[R,_,y]of[[84,52,10496544],[93,64,2771600],[83,58,10521120]])ae.push(Te(new ys(3,3.5,10),{x:W(R),y:3.4,z:W(_),c:y}),Te(ht(2.9,2.9,1.8,10,1,!0),{x:W(R),y:.9,z:W(_),c:14209208})),_0(R,_);a(ae,l({side:an}));let O=[];for(let[R,_]of Ot.pumps)O.push(Te(ce(.8,1.7,.6),{x:W(R),y:.85,z:W(_),c:11545120}),Te(ce(.82,.4,.62),{x:W(R),y:1.5,z:W(_),c:14735560}));for(let[R,_]of[[W(53)-.5,W(38)],[W(58)+.5,W(38)],[W(53)-.5,W(40)+1],[W(58)+.5,W(40)+1]])O.push(Te(ht(.15,.15,4.4,8),{x:R,y:2.2,z:_,c:14211280}));O.push(Te(ce(13,.5,7),{x:(W(53)+W(58))/2,y:4.6,z:W(39)+.5,c:13156528})),a(O,l({metalness:.3}));{let R=new J(new zt(6,6),Tt({map:be.label("UPGRADES","#3a3a20","#f0d040",256,256,"bold 46px Arial Black, Arial"),roughness:.9,transparent:!0,opacity:.9}));R.rotation.x=-Math.PI/2,R.position.set(Ot.pad.x,.03,Ot.pad.z),i(R)}{let R=Ot.fountain,_=Tt({map:Ft.stone(),roughness:.9}),y=new J(ht(3,3.2,.7,20),_);y.position.set(R.x,.35,R.z),i(y);let I=new J(ht(.5,.7,2.2,10),_);I.position.set(R.x,1.1,R.z),i(I);let F=new J(new pi(2.8,20),Tt({color:1714712,roughness:.1,metalness:.3}));F.rotation.x=-Math.PI/2,F.position.set(R.x,.55,R.z),i(F)}let w=[];for(let R=0;R<8;R++){let _=W(103+R%2*3)+1,y=W(63+Math.floor(R/2)*3);w.push(Te(ht(.6,.6,.06,10),{x:_,y:.75,z:y,c:13156528}),Te(ht(.05,.05,.75,6),{x:_,y:.37,z:y,c:5592405}))}a(w,l(),!1),e.hatchUse=[];let se=[];for(let R of Gl){let _=W(R.i),y=W(R.j);R.kind==="manhole"?se.push(Te(ht(.6,.6,.05,16),{x:_,y:.03,z:y,c:2763306}),Te(new _n(.62,.05,4,16).rotateX(Math.PI/2),{x:_,y:.04,z:y,c:3815994})):se.push(Te(ce(1.6,.3,1.4),{x:_,y:.15,z:y,rx:.15,c:5910560}),Te(ce(.04,.32,1.36),{x:_,y:.17,z:y,rx:.15,c:2759184}))}a(se,l({map:be.rust(),metalness:.5})),e.bunkerCrates=[];let te=[];for(let R of Vl){let _=W(R.ladder.i),y=W(R.ladder.j)-.9;for(let q of[-.3,.3])te.push(Te(ce(.06,3.4,.06),{x:_+q,y:3.4/2,z:y,c:6974058}));for(let q=0;q<8;q++)te.push(Te(ce(.6,.04,.04),{x:_,y:.3+q*.4,z:y,c:6974058}));let I=ec();I.position.set(W(R.crate.i),0,W(R.crate.j)),i(I),e.bunkerCrates.push(I);let F=new J(ce(.8,.1,.3),new ut({color:16769184}));F.position.set(W(R.i0+4),3.4-.05,W(R.j0+3)),i(F);for(let q=0;q<3;q++)te.push(Te(ce(.5,2.2,1.6),{x:W(R.i1)+.6,y:1.1,z:W(R.j0+1+q*2),c:3820080}))}a(te,l({metalness:.5})),e.bunkerLight=new _s(16767136,0,16,1.4),i(e.bunkerLight);let ee=[];for(let R of Kr){let _=W(R.i),y=W(R.j),I=R.kind,F=0;if(I==="register")ee.push(Te(ce(1.8,1,1),{x:_,y:.5,z:y,c:5917242}),Te(ce(.5,.3,.4),{x:_,y:1.15,z:y,c:2763306}));else if(I==="fridge")ee.push(Te(ce(1,1.9,.9),{x:_,y:.95,z:y,c:14210248}));else if(I==="locker")ee.push(Te(ce(1.6,1.9,.6),{x:_,y:.95,z:y,c:4872810}));else if(I==="safe")ee.push(Te(ce(.9,1,.9),{x:_,y:.5,z:y,c:2763822}),Te(ht(.12,.12,.05,10).rotateX(Math.PI/2),{x:_,y:.6,z:y+.47,c:11184810}));else if(I==="toolbox")ee.push(Te(ce(1.4,1,.7),{x:_,y:.5,z:y,c:10493984}));else if(I==="shelf"){for(let q=0;q<4;q++)ee.push(Te(ce(1.9,.05,.7),{x:_,y:.2+q*.5,z:y,c:6974048}));ee.push(Te(ce(.05,1.8,.7),{x:_-.93,y:.9,z:y,c:5921360}),Te(ce(.05,1.8,.7),{x:_+.93,y:.9,z:y,c:5921360}));for(let q=0;q<5;q++)ee.push(Te(ce(.25,.3,.25),{x:_-.7+bt()*1.4,y:.4+Math.floor(bt()*3)*.5,z:y,c:[10498080,2779706,12623936][q%3]}))}else I==="medicine"?ee.push(Te(ce(1.8,1.6,.6),{x:_,y:.8,z:y,c:14211288}),Te(ce(.4,.4,.05),{x:_,y:1.3,z:y+.32,c:12591136})):ee.push(Te(ce(1.4,1.2,.7),{x:_,y:.6,z:y,c:6967352}))}a(ee,l({map:be.metal()})),e.genMeshes=Qs.map(R=>{let _=hM();return _.position.set(W(R.i),0,W(R.j)),i(_),_});let fe=[];for(let R of Jo)_0(R.i,R.j),fe.push(Te(ce(1.9,.95,1),{x:W(R.i),y:.48,z:W(R.j),c:6965802}),Te(ce(1.9,.6,.1),{x:W(R.i)-R.face[0]*.45,y:1.3,z:W(R.j)-R.face[1]*.45,ry:R.face[0]?Math.PI/2:0,c:4864554}));a(fe,l({map:be.wood()}));let Le=R=>new tn({map:be.glow(),color:R,transparent:!0,opacity:.55,blending:xn,depthWrite:!1});e.intel=Ko.map(R=>{let _=new Be;_.position.set(W(R.i),0,W(R.j));let y=new J(new zt(.4,.5),Tt({map:Ft.paper(),roughness:.9,side:an}));y.rotation.x=-Math.PI/2,y.rotation.z=bt()*3,y.position.y=.95,_.add(y);let I=new J(ce(.9,.9,.6),t.wood);I.position.y=.45,_.add(I);let F=new Jt(Le(16773280));return F.scale.set(1.2,1.2,1),F.position.y=1,_.add(F),i(_),_}),e.groundGuns=$o.map(R=>{let _=new Be;_.position.set(W(R.i)+.3,.06,W(R.j)+.2);let y=Ji(R.key,!1);y.group?_.add(y.group):_.add(y),_.rotation.y=bt()*6,(y.group||y).rotation.z=Math.PI/2,(y.group||y).scale.setScalar(1.6);let I=new Jt(Le(9486591));return I.scale.set(1.4,1.4,1),I.position.y=.3,_.add(I),i(_),_})}var _0=(n,e)=>{dn(n,e)&&(De[Re(n,e)]=6)};function hM(){let n=new Be,e=Tt({color:12099616,roughness:.5,metalness:.3}),t=Tt({color:2236962,roughness:.6,metalness:.6}),i=new J(ce(1,.6,.65),e);i.position.y=.5,n.add(i);let s=new J(ht(.25,.25,.9,10).rotateZ(Math.PI/2),e);s.position.set(0,.95,0),n.add(s);for(let r of[-1,1]){let o=new J(ce(.05,.9,.7),t);o.position.set(r*.52,.5,0),n.add(o)}return n.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n}function uM(){let n=new Be,e=Tt({color:12593696,roughness:.4,metalness:.4}),t=new J(ce(1.3,.6,2.2),e);t.position.y=.45,n.add(t);let i=new J(ce(1.1,.5,.15),Tt({color:2236962}));return i.position.set(0,.9,-.6),n.add(i),n}function fM(){let n=new Be,e=Tt({color:4870706,roughness:.6,metalness:.3}),t=Tt({color:1711128,roughness:.5}),i=Tt({color:725272,metalness:.9,roughness:.1}),s=new J(new Tn(1.2,3.2,6,12).rotateX(Math.PI/2),e);s.position.set(0,1.9,0),s.scale.set(1,.95,1),n.add(s);let r=new J(new Et(1.15,12,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),i);r.position.set(0,2,2.3),n.add(r);let o=new J(ht(.25,.5,6,8).rotateX(Math.PI/2),e);o.position.set(0,2.4,-4.8),n.add(o);let a=new J(ce(.12,1.6,1),e);a.position.set(0,3,-7.6),n.add(a);for(let u of[-1,1]){let f=new J(ce(.12,.12,4.4),t);f.position.set(u*1.2,.25,.2),n.add(f);for(let d of[-1,1.2]){let g=new J(ce(.08,.7,.08),t);g.position.set(u*1.1,.6,d),g.rotation.z=u*.3,n.add(g)}}let l=new J(ht(.12,.12,.7,8),t);l.position.set(0,3.3,0),n.add(l);let c=new Be;c.position.set(0,3.65,0),n.add(c);for(let u=0;u<4;u++){let f=new J(ce(.35,.05,6.5),t);f.position.z=3.25;let d=new Be;d.rotation.y=u*Math.PI/2,d.add(f),c.add(d)}let h=new Be;h.position.set(.2,3.1,-7.6),n.add(h);for(let u=0;u<2;u++){let f=new J(ce(.05,1.6,.18),t);f.rotation.x=u*Math.PI/2,h.add(f)}return n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),{group:n,rotor:c,trot:h}}var et=n=>new jt(n),no=.9,ra=2.3,oa=2.6,mf=class{constructor(){this.cells=new Map}cell(e,t){let i=Math.floor(e/32)+","+Math.floor(t/32),s=this.cells.get(i);return s||this.cells.set(i,s={p:[],n:[],u:[]}),s}quad(e,t,i,s,r,o,a,l,c){let h=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],u=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],f=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]],d=[e,t,i,e,i,s],g=[o,a,l,o,l,c];f[0]*r[0]+f[1]*r[1]+f[2]*r[2]<0&&(d=[e,i,t,e,s,i],g=[o,l,a,o,c,l]);let x=this.cell((e[0]+i[0])/2,(e[2]+i[2])/2);for(let p=0;p<6;p++)x.p.push(...d[p]),x.n.push(...r),x.u.push(...g[p])}wall(e,t,i,s,r,o,a){let l=(h,u)=>e==="x"?[h,u,t]:[t,u,h],c=(h,u)=>[h/2,u/3.4];this.quad(l(i,r),l(s,r),l(s,o),l(i,o),a,c(i,r),c(s,r),c(s,o),c(i,o))}flat(e,t,i,s,r,o,a=1/2){let l=[0,o?1:-1,0];this.quad([e,r,t],[i,r,t],[i,r,s],[e,r,s],l,[e*a,t*a],[i*a,t*a],[i*a,s*a],[e*a,s*a])}mesh(e){let t=new Be;for(let i of this.cells.values()){let s=new Bt;s.setAttribute("position",new ot(i.p,3)),s.setAttribute("normal",new ot(i.n,3)),s.setAttribute("uv",new ot(i.u,2)),s.computeBoundingSphere();let r=new J(s,e);r.receiveShadow=!0,r.castShadow=!0,t.add(r)}return t}};function dM(n){let e=t=>t?t.getHexString():"-";return[n.type,e(n.color),n.map?n.map.uuid:"-",n.roughness,n.metalness,e(n.emissive),n.emissiveIntensity,n.transparent,n.opacity,n.side,n.vertexColors,n.blending,n.depthWrite].join("|")}function pM(n,e){n.updateMatrixWorld(!0);let t=new Map;for(let r of e){if(!r.parent||Array.isArray(r.material))continue;let o=new D;r.getWorldPosition(o);let a=dM(r.material)+"#"+Math.floor(o.x/32)+","+Math.floor(o.z/32);t.has(a)||t.set(a,[]),t.get(a).push(r)}let i=0,s=0;for(let r of t.values()){if(i+=r.length,r.length<2){s++;continue}let o=[],a=!1;for(let h of r){let u=h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone();for(let f of Object.keys(u.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&f!=="color"&&u.deleteAttribute(f);u.attributes.uv||u.setAttribute("uv",new Pt(new Float32Array(u.attributes.position.count*2),2)),u.applyMatrix4(h.matrixWorld),o.push(u),a=a||h.castShadow}let l=Object.keys(o[0].attributes).sort().join();if(!o.every(h=>Object.keys(h.attributes).sort().join()===l)){s+=r.length;continue}let c=new J(Pi(o),r[0].material);c.castShadow=a,c.receiveShadow=!0,n.add(c);for(let h of r)h.parent.remove(h);s++}return{before:i,after:s}}function mM(n){let e=[];n.traverse(i=>{if(i.isMesh&&!i.isInstancedMesh&&!i.isSkinnedMesh&&i.parent===n&&!Array.isArray(i.material)){let s=i.geometry;s.boundingSphere||s.computeBoundingSphere(),s.boundingSphere.radius>60&&s.attributes.position.count>600&&e.push(i)}});let t=0;for(let i of e){i.updateMatrixWorld(!0);let s=i.geometry.index?i.geometry.toNonIndexed():i.geometry;s.applyMatrix4(i.matrixWorld);let r=s.attributes.position,o=Object.keys(s.attributes),a=new Map;for(let l=0;l<r.count;l+=3){let c=(r.getX(l)+r.getX(l+1)+r.getX(l+2))/3,h=(r.getZ(l)+r.getZ(l+1)+r.getZ(l+2))/3,u=Math.floor(c/32)+","+Math.floor(h/32),f=a.get(u);f||a.set(u,f=[]),f.push(l)}if(!(a.size<2)){for(let l of a.values()){let c=new Bt;for(let u of o){let f=s.attributes[u],d=f.itemSize,g=new f.array.constructor(l.length*3*d),x=0;for(let p of l)for(let m=0;m<3;m++)for(let b=0;b<d;b++)g[x++]=f.array[(p+m)*d+b];c.setAttribute(u,new Pt(g,d,f.normalized))}c.computeBoundingSphere();let h=new J(c,i.material);h.castShadow=i.castShadow,h.receiveShadow=i.receiveShadow,h.renderOrder=i.renderOrder,n.add(h),t++}n.remove(i)}}return{split:e.length,made:t}}function M0(n,e,t){let i={},s=L=>(n.add(L),L),r=[],o=(L,V,ae)=>{let O=L.clone();return O.needsUpdate=!0,O.repeat.set(V,ae),O},a={stucco:et({map:be.stucco(),normalMap:be.stuccoN(),roughness:.92,color:14208184}),brick:et({map:be.brick(),normalMap:be.brickN(),roughness:.9}),panel:et({map:be.panel(),roughness:.85}),diner:et({map:be.dinerWall(),roughness:.6}),block:et({map:be.block(),roughness:.9}),ceiling:et({map:be.ceiling(),roughness:.95}),carpet:et({map:be.carpet(),roughness:.98}),checker:et({map:be.tileChecker(),roughness:.45}),concrete:et({map:be.concrete(),roughness:.9}),wood:et({map:be.wood(),roughness:.75}),plank:et({map:be.plank(),roughness:.85}),metal:et({map:be.metal(),roughness:.6,metalness:.5}),rust:et({map:be.rust(),roughness:.85,metalness:.2}),dark:et({color:1710620,roughness:.7}),trim:et({color:3811868,roughness:.7}),siding:et({map:Ft.siding("#8a9590"),roughness:.9}),sidingB:et({map:Ft.siding("#9a8c6e"),roughness:.9}),sidingW:et({map:Ft.siding("#b8b4a6"),roughness:.9}),logs:et({map:Ft.logs(),roughness:.95}),stone:et({map:Ft.stone(),roughness:.95}),barn:et({map:Ft.barn(),roughness:.9}),sheet:et({map:Ft.metal(),roughness:.6,metalness:.45}),bunker:et({map:Ft.bunker(),roughness:.95}),mall:et({map:Ft.mallTile(),roughness:.5}),roof:et({map:Ft.roof(),roughness:1}),wood2:et({map:Ft.wood2(),roughness:.85}),dirtF:et({map:be.dirt(),roughness:1,color:9075296}),mallWall:et({map:be.panel(),roughness:.8,color:13156528})};i.M=a;let l=new Map;for(let L of Ri)l.has(L.z)||l.set(L.z,L.wallKind);let c=[a.siding,a.sidingB,a.sidingW],h=(L,V)=>({stucco:a.stucco,brick:a.brick,siding:c[V%3],wood:a.wood2,metal:a.sheet,stone:a.stone,barn:a.barn,log:a.logs,bunker:a.bunker,mall:a.stucco,concrete:a.block})[L]||a.stucco,u=L=>L===3?a.brick:L<=2?a.stucco:h(l.get(L),L),f=L=>L===0?a.panel:L===2?a.diner:L===3?a.block:{bunker:a.bunker,mall:a.mallWall,log:a.logs,barn:a.wood2,metal:a.sheet,stone:a.stone,wood:a.wood2}[l.get(L)]||a.panel,d=(L,V)=>{for(let[ae,O]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]){let w=Mt(L+ae,V+O);if(w===1||w===11)return nn[Re(L+ae,V+O)]}return 0},g=360,x=236,p=et({map:o(Ft.grass(),g/6,x/6),roughness:1,color:11053200}),m=s(new J(new zt(g,x),p));m.rotation.x=-Math.PI/2,m.position.set(g/2,0,x/2),m.receiveShadow=!0;let b=s(new J(new zt(1400,1400),et({color:1381391,roughness:1})));b.rotation.x=-Math.PI/2,b.position.set(g/2,-.02,x/2),i.asphaltM=et({map:be.asphalt(),normalMap:be.asphaltN(),normalScale:new _e(.6,.6),roughness:.82,color:10132122});let M=new jt({map:be.dirt(),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1});for(let[L,V,ae]of[[8,8,10],[80,10,12],[44,4,9],[6,40,9],[84,36,9],[30,74,9],[52,34,8],[22,40,7]]){let O=s(new J(new zt(ae,ae),M));O.rotation.x=-Math.PI/2,O.position.set(L,.015,V),O.receiveShadow=!0}let E=new Map,U=L=>(E.has(L)||E.set(L,new mf),E.get(L)),C=L=>L===2||L===3||L===4||L===10||L===11;for(let L=0;L<118;L++)for(let V=0;V<180;V++){let ae=Mt(V,L),O=V*2,w=O+2,se=L*2,te=se+2;if(ae===1||ae===6&&nn[Re(V,L)]>3&&Ri.some(R=>V>=R.i0&&V<=R.i1&&L>=R.j0&&L<=R.j1)||ae===6&&nn[Re(V,L)]>=0&&nn[Re(V,L)]!==1&&nn[Re(V,L)]<=3){U(a.ceiling).flat(O,se,w,te,3.4,!1),U(a.roof).flat(O,se,w,te,3.4+.25,!0);continue}if(!C(ae))continue;let ee=d(V,L),fe=u(ee);U(a.ceiling).flat(O,se,w,te,3.4,!1),U(a.roof).flat(O,se,w,te,3.4+.25,!0);let Le=[[1,0,"z",w,se,te,[1,0,0]],[-1,0,"z",O,se,te,[-1,0,0]],[0,1,"x",te,O,w,[0,0,1]],[0,-1,"x",se,O,w,[0,0,-1]]];for(let[R,_,y,I,F,q,Y]of Le){let Ee=Mt(V+R,L+_),ye=dn(V+R,L+_)?Re(V+R,L+_):0,Ie=Ee===1||Ee===6&&nn[ye]>=0&&nn[ye]!==1&&Ri.some(xe=>V+R>=xe.i0&&V+R<=xe.i1&&L+_>=xe.j0&&L+_<=xe.j1),dt=Ie?f(nn[ye]):fe;if(!C(Ee)&&!Ie&&U(a.trim).wall(y,I,F,q,3.4,3.4+.25,Y),ae===2){if(Ee===2)continue;if(Ee===3||Ee===10){U(fe).wall(y,I,F,q,no,ra,Y);continue}if(Ee===4||Ee===11){U(fe).wall(y,I,F,q,0,oa,Y);continue}U(dt).wall(y,I,F,q,0,3.4,Y)}else if(!C(Ee)){let xe=ae===3||ae===10?ra:oa;U(dt).wall(y,I,F,q,xe,3.4,Y),(ae===3||ae===10)&&U(dt).wall(y,I,F,q,0,no,Y)}}(ae===3||ae===10)&&(U(a.wood).flat(O,se,w,te,no,!0),U(fe).flat(O,se,w,te,ra,!1)),(ae===4||ae===11)&&U(fe).flat(O,se,w,te,oa,!1)}for(let L of Ri){let V=L.floorKind,ae=V==="carpet"?a.carpet:V==="checker"?a.checker:V==="wood"?a.wood:V==="mall"||V==="shop"?a.mall:V==="stone"?a.stone:V==="dirt"?a.dirtF:a.concrete;U(ae).flat(L.i0*2,L.j0*2,(L.i1+1)*2,(L.j1+1)*2,.01,!0,V==="checker"||V==="mall"||V==="shop"?1/4:1/3)}for(let L=0;L<118;L++)for(let V=0;V<180;V++){let ae=Mt(V,L);(ae===4||ae===11||ae===3||ae===10)&&U(a.concrete).flat(V*2,L*2,V*2+2,L*2+2,.012,!0)}for(let[L,V]of E){let ae=V.mesh(L);s(ae)}let P=[],N=new Un(2.1,.22,.05);i.planks=[];let X=[];for(let L of On){let V=W(L.i),ae=W(L.j),O=L.axis==="x"?0:Math.PI/2,w=L.outDir;for(let ee of[-1,1])P.push(Te(ce(.12,ra-no,.25),{x:V+(L.axis==="x"?ee*.94:0),z:ae+(L.axis==="z"?ee*.94:0),y:(no+ra)/2,ry:O,c:3811868}));let se=new Be;se.position.set(V-w[0]*.55,0,ae-w[1]*.55),se.rotation.y=O,s(se);let te=[];for(let ee=0;ee<6;ee++){let fe=new Yt,Le=no+.18+ee%3*.45+(ee>2?.2:0);fe.position.set(0,Le,ee>2?-.06:0),fe.rotation.z=(ee%2?1:-1)*(.12+ee*.13%.3),se.add(fe),te.push(fe),X.push(fe)}i.planks[L.id]={group:se,list:te,base:te.map(ee=>({y:ee.position.y,rz:ee.rotation.z}))}}{let L=new Fr(N,a.plank,X.length);L.castShadow=!0,L.receiveShadow=!0,s(L),n.updateMatrixWorld(!0);let V=new $e().makeScale(0,0,0);X.forEach((ae,O)=>{let w=ae.matrixWorld.clone(),se=!0;L.setMatrixAt(O,w),Object.defineProperty(ae,"visible",{get:()=>se,set:te=>{te=!!te,te!==se&&(se=te,L.setMatrixAt(O,te?w:V),L.instanceMatrix.needsUpdate=!0)},configurable:!0})}),L.instanceMatrix.needsUpdate=!0,L.computeBoundingSphere()}let v=new J(Pi(P),et({vertexColors:!0,roughness:.8}));v.castShadow=!0,s(v),i.doorMeshes=[];let S=et({map:o(be.plank(),1,3),roughness:.85,color:11571312});for(let L of $i){let V=new Be,ae=0,O=0;for(let[te,ee]of L.tiles)ae+=W(te),O+=W(ee);V.position.set(ae/L.tiles.length,0,O/L.tiles.length),V.rotation.y=L.axis==="x"?0:Math.PI/2,s(V);let w=new J(ce(4,oa,.14),S);w.position.y=oa/2,w.castShadow=w.receiveShadow=!0,V.add(w);for(let te of[-1,1]){let ee=new J(ce(4.4,.25,.06),a.plank);ee.position.set(0,1.3,te*.11),ee.rotation.z=te*.5,V.add(ee)}let se=new J(new zt(1.2,.36),new ut({map:be.label("$"+L.cost,"#1a1208","#f0d080",256,76,"bold 50px Arial Black, Arial"),transparent:!0}));for(let te of[-1,1]){let ee=se.clone();ee.position.set(0,1.9,te*.15),ee.rotation.y=te<0?Math.PI:0,V.add(ee)}i.doorMeshes[L.id]=V}let G=7,z=()=>(G=G*16807%2147483647)/2147483647;v0(n,i,a,s,t);let K=s(new J(new Et(700,24,16),new ut({map:be.sky(),side:gn,fog:!1,depthWrite:!1})));K.position.set(g/2,0,x/2),K.renderOrder=-1;let le=new Bt,$=[];for(let L=0;L<900;L++){let V=z()*Math.PI*2,ae=.08+z()*1.4;$.push(Math.cos(V)*Math.cos(ae)*650+g/2,Math.sin(ae)*650,Math.sin(V)*Math.cos(ae)*650+x/2)}le.setAttribute("position",new ot($,3)),s(new vl(le,new Fo({color:13160703,size:1.3,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1})));let pe=s(new Jt(new tn({map:be.moon(),fog:!1,depthWrite:!1,transparent:!0})));pe.scale.set(90,90,1),pe.position.set(g/2-280,330,x/2-400);let ie=(L,V=.9)=>new tn({map:be.glow(),color:L,transparent:!0,opacity:V,blending:xn,depthWrite:!1}),ve=(L,V,ae=L,O=V)=>{for(let w=V;w<=O;w++)for(let se=L;se<=ae;se++)oi(se,w)},me=(L,V,ae,O,w,se=0)=>{let te=new J(L,V);return te.position.set(ae,O,w),te.rotation.y=se,L.boundingSphere||L.computeBoundingSphere(),te.castShadow=L.boundingSphere.radius>.9,te.receiveShadow=!0,s(te),r.push(te),te},we=(L,V,ae,O)=>{let w=new Be;w.position.set(L,0,V),w.rotation.y=ae,s(w);let se=et({map:be.rust(),color:O,roughness:.8,metalness:.3}),te=new J(ce(1.8,.7,4.4),se);te.position.y=.55,w.add(te);let ee=new J(ce(1.6,.55,2.2),se);ee.position.set(0,1.15,.2),w.add(ee);let fe=new J(ce(1.62,.4,2),a.dark);fe.position.set(0,1.15,.2),fe.scale.set(1,1,1.02),w.add(fe);for(let[Le,R]of[[.85,1.4],[-.85,1.4],[.85,-1.4],[-.85,-1.4]]){let _=new J(ht(.32,.32,.22,10),a.dark);_.rotation.z=Math.PI/2,_.position.set(Le,.28,R),w.add(_)}w.rotation.z=(z()-.5)*.08,w.traverse(Le=>{Le.isMesh&&(Le.castShadow=Le.receiveShadow=!0,r.push(Le))})};we(41,21,.2,8030874),ve(20,9,20,11),we(13,49,1.4,10127962),ve(5,23,7,25),we(70,66,.4,5925466),ve(34,32,35,34),we(18,18,.1,6969978),ve(8,8,9,10),me(ce(3.4,1.5,1.8),et({map:be.metal(),color:3103290,roughness:.7,metalness:.4}),55,.75,35),ve(27,17),me(ce(3.6,1.1,.9),a.wood,50,.55,57),ve(24,28,25,28),me(ce(3.8,.12,1),et({color:9050650,roughness:.5}),50,1.13,57),me(ce(2.2,.8,.9),et({color:3811914,roughness:.95}),37,.4,45.2),ve(18,22),me(ce(9.6,1.05,1),et({color:13156520,roughness:.5}),65,.52,47),ve(30,23,34,23),me(ce(9.8,.08,1.2),et({color:10099226,roughness:.3,metalness:.3}),65,1.08,47);for(let L=0;L<6;L++)me(ht(.22,.22,.12,12),et({color:10491928,roughness:.4}),61+L*1.6,.75,48.3),me(ht(.04,.04,.7,6),a.metal,61+L*1.6,.35,48.3);for(let L of[51,53])me(ce(1.6,.9,.5),et({color:9050650,roughness:.5}),75,.45,L-.7),me(ce(1.6,.9,.5),et({color:9050650,roughness:.5}),75,.45,L+.7),me(ce(1.2,.08,.8),et({color:14209208,roughness:.4}),75,.78,L);ve(37,25,37,26),me(ce(3.6,.95,.8),a.metal,13,.48,23),ve(6,11),me(ce(1,1.4,.6),et({color:10492442,roughness:.4,metalness:.4}),31,.7,13),ve(15,6);for(let[L,V]of[[15.6,16.4],[20.4,16.4],[15.6,19.6],[20.4,19.6]])me(ht(.12,.12,.6,8),a.metal,L,.3,V);i.fires=[];let Ke=et({map:be.rust(),color:9064496,roughness:.8,metalness:.3});for(let[L,V]of[[24,18],[14,19],[36,18],[9,31],[31,35],[40,9]]){let ae=W(L),O=W(V);me(ht(.42,.42,1,12),Ke,ae,.5,O),ve(L,V);let w=[];for(let te=0;te<3;te++){let ee=new Jt(new tn({map:be.flame(),color:te?16742944:16760928,transparent:!0,blending:xn,depthWrite:!1}));ee.position.set(ae+(te-1)*.12,1.3,O),ee.scale.set(.6,1.1,1),s(ee),w.push(ee)}let se=new Jt(ie(16740384,.5));se.scale.set(5,4,1),se.position.set(ae,1.3,O),s(se),i.fires.push({x:ae,z:O,fl:w,gl:se})}let rt=et({color:4869198,metalness:.6,roughness:.5});i.poles=[];for(let[L,V]of[[12,19],[33,17],[10,34],[36,33],[29,4],[4,13]]){let ae=W(L),O=W(V);me(ht(.12,.16,7,8),rt,ae,3.5,O),me(ce(1.4,.15,.4),rt,ae+.6,7,O),ve(L,V);let w=me(ce(.6,.08,.3),new ut({color:16760944}),ae+1.1,6.9,O);w.castShadow=!1;let se=new Jt(ie(16752704,.55));se.scale.set(4,4,1),se.position.set(ae+1.1,6.8,O),s(se);let te=s(new J(new pi(4.5,20),new ut({map:be.glow(),color:6965792,transparent:!0,blending:xn,depthWrite:!1})));te.rotation.x=-Math.PI/2,te.position.set(ae+1.1,.03,O),i.poles.push({x:ae+1.1,z:O})}let oe=(L,V,ae,O,w,se,te,ee=0)=>{let fe=new J(new zt(se,te),new ut({map:be.neon(L,V),transparent:!0,depthWrite:!1,side:an}));fe.position.set(ae,O,w),fe.rotation.y=ee,s(fe);let Le=new Jt(ie(V,.35));return Le.scale.set(se*1.2,te*2.5,1),Le.position.set(ae,O,w+(ee?0:-.2)),s(Le),fe},ge=me(ce(9,2,.2),a.dark,43,4.6,41.8);ge.castShadow=!1;for(let L of[39.5,46.5])me(ht(.08,.08,1.4,6),rt,L,3.6,41.8);i.motelSign=oe("LOCKWOOD MOTEL","#ff3a6a",43,4.75,41.65,8.6,1.6,Math.PI),i.vacancy=oe("NO VACANCY","#ff2a20",43,3.85,41.65,3.4,.6,Math.PI),oe("DINER","#3ae0ff",66,4.2,41.85,4,1.1,Math.PI),me(ce(4.4,1.3,.15),a.dark,66,4.2,41.95);let Pe=new J(new zt(5,.9),new jt({map:be.label("ED'S AUTO REPAIR","#c8b070","#2a1a0a",512,96,"bold 58px Arial Black, Arial"),roughness:.8}));Pe.position.set(18,2.95,30.02),s(Pe);let Me=(L,V,ae,O,w=.45)=>{let se=W(V)-O[0]*w,te=W(ae)-O[1]*w;return L.position.set(se,0,te),L.rotation.y=Math.atan2(O[0],O[1]),s(L),{x:W(V)+O[0]*.6,z:W(ae)+O[1]*.6}};i.boxSpots=Wl.map(L=>({...L})),i.box=f0(),s(i.box.group);for(let L of i.boxSpots)oi(L.i,L.j),L.crate=ec(),L.use=Me(L.crate,L.i,L.j,L.face,.2),L.pos={x:W(L.i)-L.face[0]*.2,z:W(L.j)-L.face[1]*.2},L.rot=Math.atan2(L.face[0],L.face[1]);i.perks=[{key:"revive",name:"Second Wind",col:"#3a8aff",sub:"SELF-REVIVE",cost:500,i:26,j:23,face:[-1,0],needsPower:!1,desc:"Get back up once when you go down"},{key:"tank",name:"Tank Tonic",col:"#e02020",sub:"MORE HEALTH",cost:2500,i:29,j:29,face:[0,-1],needsPower:!0,desc:"Take 2.5x more hits"},{key:"rapid",name:"Rapid Brew",col:"#2ac040",sub:"FAST RELOAD",cost:3e3,i:37,j:29,face:[0,-1],needsPower:!0,desc:"Reload twice as fast"},{key:"double",name:"Double Shot",col:"#e0b020",sub:"FIRE RATE",cost:2e3,i:15,j:13,face:[0,-1],needsPower:!0,desc:"Shoot 33% faster"},{key:"stamina",name:"Fleetfoot",col:"#f07020",sub:"MOVE FASTER",cost:2e3,i:33,j:22,face:[0,1],needsPower:!0,desc:"Run faster and longer"}];for(let L of i.perks)oi(L.i,L.j),L.m=d0(L.name,L.col,L.sub),L.use=Me(L.m.group,L.i,L.j,L.face,.2);i.sw=p0(),i.swUse=Me(i.sw.group,16,7,[-1,0],-.08-1),i.forge=m0(),oi(7,7),i.forgeUse=Me(i.forge.group,7,7,[0,1],.1),i.wallbuys=x0.map(L=>{let V=ji[L.key],ae=be.chalk(L.key,(te,ee,fe)=>gM(te,ee,fe,V.kind)),O=new J(new zt(1.8,.9),new ut({map:ae,transparent:!0,depthWrite:!1,color:14209216})),w=W(L.i)+L.face[0]*1.02,se=W(L.j)+L.face[1]*1.02;return O.position.set(w,1.55,se),O.rotation.y=Math.atan2(L.face[0],L.face[1]),s(O),{...L,mesh:O,use:{x:W(L.i)+L.face[0]*1.6,z:W(L.j)+L.face[1]*1.6}}}),i.hemi=s(new Gr(4872832,1709072,.55)),i.moonL=s(new Vr(9085144,.55)),i.moonL.position.set(-60,90,-80),s(i.moonL.target),i.lightSrc=[{col:16763024,base:14,dist:16,decay:1.6,x:43,y:3,z:51,flick:.25,kind:"room"},{col:13168895,base:14,dist:17,decay:1.6,x:66,y:3,z:52,flick:.05,kind:"room"},{col:16767120,base:13,dist:17,decay:1.6,x:22,y:3,z:20,flick:.12,kind:"room"}];let Ye=new ut({color:16773336});for(let[L,V]of[[43,51],[36,47],[50,55],[66,52],[60,50],[72,56],[22,20],[14,16],[28,24]]){let ae=me(ce(1.4,.06,.3),Ye,L,3.4-.04,V);ae.castShadow=!1}return i.fires.forEach((L,V)=>i.lightSrc.push({col:16742960,base:10,dist:13,decay:1.7,x:L.x,y:1.6,z:L.z,kind:"fire",i:V})),i.lightPool=[0,1,2].map(()=>{let L=new _s(16777215,0,16,1.6);return L.position.set(0,-50,0),s(L),{light:L,src:null,w:0}}),i.car=u0(e),s(i.car.group),i.carLight=new Il(16773328,0,30,.55,.5,1.2),s(i.carLight),s(i.carLight.target),i.batched=pM(n,r),i.split=mM(n),i}function gM(n,e,t,i){n.beginPath();let s=i==="smg"?150:i==="pistol"?90:210,r=(e-s)/2,o=t/2-12;n.moveTo(r,o),n.lineTo(r+s*.75,o),n.lineTo(r+s*.75,o-6),n.lineTo(r+s,o-6),n.lineTo(r+s,o+4),n.lineTo(r+s*.72,o+4),n.lineTo(r+s*.72,o+16),n.lineTo(r+s*.48,o+16),i!=="pistol"&&(n.lineTo(r+s*.46,o+40),n.lineTo(r+s*.4,o+40),n.lineTo(r+s*.4,o+18)),n.lineTo(r+s*.3,o+18),n.lineTo(r+s*.24,o+44),n.lineTo(r+s*.15,o+44),n.lineTo(r+s*.2,o+16),i!=="pistol"&&(n.lineTo(r+10,o+26),n.lineTo(r-6,o+30),n.lineTo(r-6,o+2)),n.closePath(),n.stroke(),n.beginPath(),n.moveTo(r+s*.3,o+8),n.lineTo(r+s*.6,o+8),n.stroke()}var Zt=Object.assign({q:"auto",sens:1,fov:75,vol:.8,inv:0,fps:0},JSON.parse(localStorage.getItem("ds_set")||"{}")),uo=()=>localStorage.setItem("ds_set",JSON.stringify(Zt)),ns=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;ns&&Js("touch");var P0=()=>Zt.q==="auto"?ns?"low":"medium":Zt.q,ho=de("c"),In=new pl({canvas:ho,antialias:!ns,powerPreference:"high-performance"});In.outputColorSpace=Hn;In.toneMapping=Du;In.toneMappingExposure=1.4;In.autoClear=!1;var It=new Xs;It.background=new Je(658710);It.fog=new ml(658710,.024);var xM=new kr(In),I0=xM.fromScene(new Ol,.04).texture,xt=new mn(75,1,.05,300);xt.rotation.order="YXZ";var ua=new Xs,Ef=new mn(60,1,.01,10);ua.add(new Gr(11581648,3156e3,1.4));var L0=new Vr(16769216,1.2);L0.position.set(1,2,1);ua.add(L0);rf();var qe=M0(It,I0,P0());qe.hemi.intensity=1.3;qe.moonL.intensity=1.2;It.environment=I0;It.environmentIntensity=.22;var gc=1;function Nf(){let n=P0(),e=Math.min(devicePixelRatio||1,n==="high"?2:n==="medium"?1.5:1.25);if(In.setPixelRatio(e*gc),In.shadowMap.enabled=n!=="low",qe.moonL.castShadow=n!=="low",n!=="low"){let t=n==="high"?2048:1024;qe.moonL.shadow.mapSize.set(t,t);let i=qe.moonL.shadow.camera;i.left=i.bottom=-30,i.right=i.top=30,i.near=1,i.far=250,i.updateProjectionMatrix()}$p(n==="low"?2:n==="medium"?4:8),de("qInfo").textContent="Graphics now: "+n.toUpperCase()+(Zt.q==="auto"?" (auto picks LOW on phones, MED on computers)":"")}function D0(){let n=innerWidth,e=innerHeight;In.setSize(n,e,!1),ho.style.width=n+"px",ho.style.height=e+"px",xt.aspect=Ef.aspect=n/e,U0(),Ef.updateProjectionMatrix()}function U0(){let n=xt.aspect;xt.userData.fov=n<1?Math.min(100,Zt.fov*1.3):Zt.fov}addEventListener("resize",D0);var ac=[];function Is(n,e,t,i,s,r,o,a={}){let l=new tn({map:n,color:e,transparent:!0,depthWrite:!1,blending:a.add?xn:ds,opacity:a.op??1}),c=new Jt(l);return c.position.set(t,i,s),c.scale.set(r,r,1),It.add(c),ac.push({sp:c,life:o,t:0,grow:a.grow||0,vy:a.vy||0,op:a.op??1}),c}function N0(n){for(let e=ac.length-1;e>=0;e--){let t=ac[e];t.t+=n;let i=t.t/t.life;t.sp.position.y+=t.vy*n;let s=t.sp.scale.x+t.grow*n;t.sp.scale.set(s,s,1),t.sp.material.opacity=t.op*(1-i),i>=1&&(It.remove(t.sp),t.sp.material.dispose(),ac.splice(e,1))}}var lc=0;function es(n){let e=de("toast");e.textContent=n,e.classList.add("show"),lc=2.6}var cc=0;function ts(n,e=3){let t=de("center");t.innerHTML=n,t.classList.add("show"),cc=e}var yM=n=>ne.device==="pad"?{use:"SQUARE",build:"CIRCLE"}[n]||n:ne.device==="touch"?{use:"USE",build:"BUILD"}[n]||n:{use:"F",build:"B"}[n]||n,nr=new D,ic=new D,Z={state:"title",t:0,round:0,toSpawn:0,spawnT:0,between:!1,betweenT:0,kills:0,heads:0,points:0,power:!1,flowT:0,flowDirty:!0,lastFlowK:-1,insta:0,dbl:0,pupsRound:0,repairPts:0,god:!1,mapDirty:!0},A={x:0,z:0,y:0,vy:0,yaw:0,pitch:0,hp:100,maxHp:100,lastHit:-9,guns:[],cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,perks:new Set,view:"fp",bob:0,ads:0,recoil:0,repT:0,driving:!1,semi:!1,heartT:0,speed:0},Ut=[],Ps=[],ao=[],lo=[],Di=[];qp();var hc=Yl.filter(([n,e])=>De[Re(n,e)]===0),ro={x:W(11),z:W(10)},yi=new Be;ua.add(yi);var _M=h0();yi.add(_M.group);var _i=null;function co(){_i&&yi.remove(_i.group);let n=A.guns[A.cur];_i=n?Ji(n.key,n.pap):null,_i&&yi.add(_i.group),aa&&Qi.hand.remove(aa.group),aa=n?Ji(n.key,n.pap):null,aa&&Qi.hand.add(aa.group),sn()}var Qi=l0();It.add(Qi.wrap);Qi.wrap.visible=!1;var aa=null,Sf=ns?9:14,b0=ns?8:14,sc=[];function vM(n){let e=xt.position.x,t=xt.position.z,i=qe.lightSrc,s=qe.lightPool;sc.length=0;for(let o of i)o.d=Math.hypot(o.x-e,o.z-t),sc.push(o);sc.sort((o,a)=>o.d-a.d);let r=sc.slice(0,s.length);for(let o of s)o.src&&!r.includes(o.src)&&(o.w-=n*3,o.w<=0&&(o.w=0,o.src=null));for(let o of r)if(!s.some(a=>a.src===o)){let a=s.find(l=>!l.src);if(a){a.src=o,a.w=0;let l=a.light;l.color.setHex(o.col),l.distance=o.dist,l.decay=o.decay,l.position.set(o.x,o.y,o.z)}}for(let o of s){let a=o.src,l=o.light;if(!a){l.intensity=0;continue}r.includes(a)&&(o.w=Math.min(1,o.w+n*3));let c=a.kind==="fire"?(9+Math.sin(Z.t*11+a.i*3)*1.5+kt())/10:1-(kt()<a.flick*.05?.8:0);l.intensity=a.base*c*o.w}}var E0=-1;function ir(n,e){!e&&Z.dbl>0&&(n*=2),Z.points+=e?-n:n;let t=document.createElement("div");t.className="pop"+(e?" neg":""),t.textContent=(e?"-":"+")+n,t.style.bottom=20+kt()*30+"px",de("points").appendChild(t),setTimeout(()=>t.remove(),1e3)}function MM(){let n=Z.round,e=de("round");if(n<=5){let t='<span class="tally">';for(let i=0;i<Math.min(n,4);i++)t+="<i></i>";n===5&&(t+='<i class="x"></i>'),e.innerHTML=t+"</span>"}else e.textContent=n}function sn(){E0!==Z.points&&(de("pts").textContent=Z.points,E0=Z.points);let n=A.guns[A.cur];n&&(de("gunName").textContent=n.name,de("gunName").className=n.pap?"pap":"",de("clip").innerHTML=n.clip+"<small> / "+n.reserve+"</small>",de("clip").className=n.clip<=n.mag*.25?"low":""),de("nades").textContent="Grenades: "+A.nades,de("perks").innerHTML=[...A.perks].map(t=>{let i=qe.perks.find(s=>s.key===t);return`<b style="background:${i.col};color:${i.col}"><span style="color:#fff">${i.name[0]}</span></b>`}).join(""),de("powerups").innerHTML=(Z.insta>0?`<div class="${Z.insta<5?"blink":""}">INSTA-KILL<br>${Math.ceil(Z.insta)}</div>`:"")+(Z.dbl>0?`<div class="${Z.dbl<5?"blink":""}">DOUBLE POINTS<br>${Math.ceil(Z.dbl)}</div>`:"");let e=Z.toSpawn+Ut.filter(t=>!t.dead).length;de("zcount").textContent=Z.between?"Next round soon":"Zombies left: "+e}var O0=de("minimap"),cn=O0.getContext("2d"),uc=document.createElement("canvas"),qn=3.6;function bM(){uc.width=360*qn,uc.height=236*qn;let n=uc.getContext("2d");for(let e=0;e<118;e++)for(let t=0;t<180;t++){let i=De[Re(t,e)];n.fillStyle=i===0?"#20261c":i===1?ws.has(nn[Re(t,e)])?"#6a6458":"#3a3630":i===3?"#c09040":i===4?"#d0b050":i===7||i===8?"#a07040":i===9?"#805030":i===6?"#2c3028":"#9a9a9a",n.fillRect(t*2*qn,e*2*qn,2*qn+.5,2*qn+.5)}Z.mapDirty=!1}function EM(){Z.mapDirty&&bM();let n=O0.width,e=A.driving?Ae.x:A.x,t=A.driving?Ae.z:A.z,i=A.driving?Ae.h:A.yaw;cn.clearRect(0,0,n,n),cn.save(),cn.translate(n/2,n/2),cn.rotate(i),cn.drawImage(uc,-e*qn,-t*qn),cn.fillStyle="#ff3030";for(let r of Ut)r.dead||(cn.beginPath(),cn.arc((r.x-e)*qn,(r.z-t)*qn,4,0,7),cn.fill());cn.fillStyle="#5ab0ff";let s=qe.boxSpots[Oe.spot].pos;cn.fillRect((s.x-e)*qn-5,(s.z-t)*qn-5,10,10),cn.fillStyle="#ffd040",cn.fillRect((Ae.x-e)*qn-4,(Ae.z-t)*qn-7,8,14),cn.restore(),cn.fillStyle="#fff",cn.beginPath(),cn.moveTo(n/2,n/2-10),cn.lineTo(n/2-7,n/2+8),cn.lineTo(n/2+7,n/2+8),cn.fill()}var Oe={spot:0,state:"idle",t:0,key:null,uses:0,cycleT:0,model:null};function Of(){let n=qe.boxSpots[Oe.spot];qe.box.group.position.set(n.pos.x,0,n.pos.z),qe.box.group.rotation.y=n.rot,qe.boxSpots.forEach((e,t)=>e.crate.visible=t!==Oe.spot)}var Ae={x:0,z:0,h:0,v:0,steer:0};function SM(){for(let[n,e]of[[27,12],[24,11],[30,14],[20,16],[32,8]]){let t=!0;for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++)(!dn(n+i,e+s)||De[Re(n+i,e+s)]!==0)&&(t=!1);if(t)return{x:W(n),z:W(e)}}return{x:W(27),z:W(12)}}var wf=SM(),Qn={t:0},gf=g0(),Tf=[{kind:"wall",name:"Wall",cost:250,hp:900,tile:7},{kind:"door",name:"Door",cost:400,hp:700,tile:8},{kind:"spikes",name:"Spikes",cost:300,hp:1600,tile:9}],ft={on:!1,sel:0,rot:0,ghost:null,gi:-1,gj:-1,ok:!1},ca=[];function wM(){let n=ca.length,e=new Be,t=new J(new ln(.03,.05,1.5,6),new jt({color:5916210,roughness:.9}));t.position.y=.75,e.add(t);let i=new jt({map:Ft.zface?Ft.zface("#6f5f52"):null,color:10127994,roughness:.8}),s=new J(new Et(.2,14,10),i);s.scale.set(1,1.15,1.05),s.position.y=1.62,s.rotation.y=Math.PI,e.add(s);for(let a of[-.07,.07]){let l=new J(new Et(.03,6,4),new ut({color:16724e3}));l.position.set(a,1.66,.18),e.add(l)}let r=new Jt(new tn({map:be.label("BOSS "+(n+1)+" - RD "+Z.round,"rgba(0,0,0,0.5)","#ffcc66",512,96,"bold 44px Arial"),transparent:!0,depthWrite:!1}));r.scale.set(1,.19,1),r.position.y=2,e.add(r);let o=S0[n%S0.length];e.position.set(o.x,0,o.z),It.add(e),ca.push(e),es("Boss trophy added near the start ("+ca.length+")")}function k0(){for(let n of ca)It.remove(n);ca.length=0;for(let n of Ut)It.remove(n.m.root);Ut.length=0;for(let n of Ps)It.remove(n.g);Ps.length=0;for(let n of ao)It.remove(n.sp);ao.length=0;for(let n of lo)It.remove(n.m);lo.length=0;for(let n of Di){It.remove(n.g);for(let[e,t]of[[n.i,n.j]])De[Re(e,t)]=n.under,ai[Re(e,t)]=-1}Di.length=0}function TM(){k0(),rf();for(let n of F0)De[n]=6;for(let n of $i)qe.doorMeshes[n.id].visible=!0;for(let n of On)n.planks=6,qe.planks[n.id].list.forEach(e=>e.visible=!0);Object.assign(Z,{t:0,round:0,toSpawn:0,between:!1,kills:0,heads:0,points:500,power:!1,flowDirty:!0,insta:0,dbl:0,mapDirty:!0,downs:0,god:!1}),Object.assign(A,{x:ro.x,z:ro.z,y:0,vy:0,yaw:Math.PI,pitch:0,hp:100,maxHp:100,lastHit:-9,cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,view:"fp",ads:0,driving:!1}),A.perks.clear(),A.guns=[nc("pistol")],co(),B0(!1),Oe.spot=0,Oe.state="idle",Oe.uses=0,Oe.model&&(qe.box.gunSlot.remove(Oe.model),Oe.model=null),qe.box.lid.rotation.x=0,Of(),Object.assign(Ae,{x:wf.x,z:wf.z,h:0,v:0}),Yi(!1),ft.on=!1,document.body.classList.remove("building","driving"),de("buildbar").classList.add("hidden"),de("carhud").classList.add("hidden"),kf(1),sn()}var F0=[];for(let n=0;n<De.length;n++)De[n]===6&&F0.push(n);var S0=(()=>{let n=[],e=Ht(ro.x),t=Ht(ro.z),i=[];for(let s=-5;s<=5;s++)for(let r=-5;r<=5;r++){let o=e+s,a=t+r;if(!dn(o,a)||Math.hypot(s,r)<1.5)continue;let l=!0;for(let c=-1;c<=1&&l;c++)for(let h=-1;h<=1;h++)if(!dn(o+c,a+h)||De[Re(o+c,a+h)]!==1){l=!1;break}l&&i.push([Math.hypot(s,r),o,a])}i.sort((s,r)=>s[0]-r[0]);for(let[,s,r]of i.slice(0,6))n.push({x:W(s),z:W(r)});return n.length||n.push({x:ro.x+1,z:ro.z+1}),n})();setTimeout(()=>{try{hf()}catch(n){console.warn(n)}},50);function B0(n){Z.power=n,qe.sw.lever.rotation.x=n?-.6:.6,qe.sw.lamp.material.color.set(n?3211072:4460817);for(let e of qe.perks){let t=n||!e.needsPower;e.m.face.material?.forEach?.(()=>{}),e.m.bulbM.color.set(t?e.col:2236962),e.m.glow.material.opacity=t?.35:0;let i=Array.isArray(e.m.face)?null:e.m.face;i&&(i.emissiveIntensity=t?.8:0)}qe.forge.glowM.emissiveIntensity=n?1.4:0,qe.forge.glow.material.opacity=n?.4:0}var z0=n=>n<=4?[6,8,13,18][n-1]:Math.min(24+(n-5)*5,220),w0=n=>n<10?150+100*(n-1):Math.round(950*Math.pow(1.1,n-9)),T0=()=>ns?16:24;function kf(n){Z.round=n,Z.toSpawn=z0(n),Z.bosses=n%10===0?Math.min(3,n/10):0,Z.screamAdds=0,Z.spawnT=n===1?3:1.5,Z.between=!1,Z.pupsRound=0,Z.repairPts=0,n>1?(A.nades=Math.min(4,A.nades+2),st.round(!0),ts("ROUND "+n+(n===100?"<small>THE LAST ONE</small>":""),3)):ts("DEAD SHIFT<small>SURVIVE THE NIGHT</small>",3.5),MM(),de("round").classList.add("flash"),setTimeout(()=>de("round").classList.remove("flash"),1200),sn()}function AM(n){if(Z.between){Z.betweenT-=n,Z.betweenT<=0&&kf(Z.round+1);return}let e=Ut.filter(t=>!t.dead).length;Z.spawnT-=n,Z.bosses>0&&Z.toSpawn<=z0(Z.round)*(.75-.25*(Math.min(3,Z.round/10)-Z.bosses))&&e<T0()+1&&(Z.bosses--,Af("boss"),sn()),Z.toSpawn>0&&e<T0()&&Z.spawnT<=0&&(Af(),Z.toSpawn--,Z.spawnT=Math.max(.35,2-Z.round*.08)*(.6+kt()*.8),sn()),Z.toSpawn===0&&e===0&&!(Z.bosses>0)&&(Z.between=!0,Z.betweenT=8,st.round(!1),ts(Z.round===100?"YOU SURVIVED ROUND 100<small>KEEP GOING IF YOU DARE</small>":"ROUND "+Z.round+" SURVIVED",4),sn())}function Af(n){let e=Z.round,t=kt(),i="walker";e>=5&&t<.05?i="screamer":e>=6&&t<.15?i="toxic":e>=4&&t<.28?i="fat":e>=3&&t<.46&&(i="runner"),n&&(i=n);let s=A.driving?Ae.x:A.x,r=A.driving?Ae.z:A.z,o=hc.filter(([g,x])=>{let p=Math.hypot(W(g)-s,W(x)-r);return p>12&&p<50});o.length||(o=hc.filter(([g,x])=>Math.hypot(W(g)-s,W(x)-r)>8)),o.length||(o=hc);let[a,l]=tr(o),c=W(a)+(kt()-.5)*1.4,h=W(l)+(kt()-.5)*1.4,u=jl(i),f=w0(e),d=Math.min(1+e*.1,1.9)*(.85+kt()*.3);e>=8&&i==="walker"&&kt()<Math.min(.6,(e-7)*.08)&&(d=2.8+kt()*.6),i==="runner"&&(d=3.9+Math.min(e*.04,1.2),f*=.75),i==="fat"&&(d=Math.min(.9+e*.05,1.6),f*=2.3),i==="toxic"&&(d=1.7,f*=.9),i==="screamer"&&(d=2.3,f*=.7),i==="boss"&&(d=1.6+Math.min(e*.01,.6),f=w0(e)*14+4e3,c=W(a),h=W(l),st.zboss(Math.hypot(c-s,h-r),0),ts("BOSS ZOMBIE<small>IT HEARD YOU</small>",3),qr(.8,.8,500)),u.root.position.set(c,-1.8,h),It.add(u.root),Ut.push({m:u,type:i,x:c,z:h,hp:f,maxHp:f,speed:d,state:"rise",t:0,atk:0,atkCd:0,dead:!1,deadT:0,yaw:kt()*6.28,rip:0,stun:0,rage:0,screamCd:4+kt()*4,screamT:0,groanT:2+kt()*6,best:1e9,stuckT:0,cur:0,head:!1})}function xc(n,e,t,i){let s=Math.hypot(t-n,i-e);return $l(n,e,t-n,i-e,s,(r,o)=>Jr(r,o)||r===3)>=s-.01}var RM=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function H0(n,e,t,i){let s=n.m;if(n.dead){n.deadT+=e;let N=Math.min(1,n.deadT/.6);s.body.rotation.x=-N*Math.PI/2*n.fallDir,s.body.position.y=-N*.75*(s.scale||1)+Math.sin(N*Math.PI)*.2;let X=Sf;n.deadT>X&&(s.root.position.y=-(n.deadT-X)*.8),n.deadT>X+1.6&&(It.remove(s.root),Ut.splice(Ut.indexOf(n),1));return}if(n.state==="rise"){n.t+=e;let N=Math.min(1,n.t/1.4);s.root.position.y=-1.8*(1-N),s.root.rotation.y=n.yaw,eo(s,Z.t,0,.6,!0),N>=1&&(n.state="move");return}let r=t-n.x,o=i-n.z,a=Math.hypot(r,o);if(n.stun>0){n.stun-=e,s.root.position.set(n.x,0,n.z),eo(s,Z.t,0,0,!1);return}if(n.rage>0&&(n.rage-=e),n.type==="screamer"){if(n.screamCd-=e,n.screamT>0){n.screamT-=e,s.scream=Math.min(1,s.scream+e*4),n.yaw+=ta(n.yaw,Math.atan2(r,o))*Math.min(1,e*6),s.root.position.set(n.x,0,n.z),s.root.rotation.y=n.yaw,eo(s,Z.t,0,0,!1),n.screamT<=0&&(s.scream=0,CM(n));return}if(n.screamCd<=0&&a<24&&a>3&&xc(n.x,n.z,t,i)){n.screamT=1.5,n.screamCd=14+kt()*6,st.zscream(a,oo(r,o));return}}let l=Ht(n.x),c=Ht(n.z),h=dn(l,c)?Re(l,c):0,u=t,f=i,d="walk",g=null;if(!(a<8&&xc(n.x,n.z,t,i))){let N=Ai[h],X=-1;for(let[v,S]of RM){let G=l+v,z=c+S;if(!dn(G,z)||v&&S&&(Jr(De[Re(l+v,c)],Re(l+v,c))||Jr(De[Re(l,c+S)],Re(l,c+S))||De[Re(l+v,c)]===3||De[Re(l,c+S)]===3))continue;let K=Re(G,z);Ai[K]<N&&(N=Ai[K],X=K)}if(X>=0){let v=De[X],S=X%180,G=X/180|0;if(u=W(S),f=W(G),v===3&&On[ai[X]].planks>0){let z=On[ai[X]];d="window",g=z,u=W(z.i)+z.outDir[0]*1.15,f=W(z.j)+z.outDir[1]*1.15}else(v===7||v===8)&&(d="piece",g=Di.find(z=>z.k===X))}}let x=n.speed*(n.rage>0?1.35:1),p=De[h];if(p===3&&(x*=.45),p===9){x*=.5;let N=Di.find(X=>X.k===h);if(n.hp-=160*e*Math.max(1,Z.round/6),N&&(N.hp-=12*e,N.hp<=0&&C0(N)),kt()<e*2&&st.spike(),n.hp<=0){Ff(n,"spike");return}}let m=u-n.x,b=f-n.z,M=Math.hypot(m,b),E=!1;if(d==="window"&&M<.35)E=!0,n.yaw=Math.atan2(-g.outDir[0],-g.outDir[1]),n.rip+=e,n.rip>1.5&&(n.rip=0,g.planks=Math.max(0,g.planks-1),qe.planks[g.id].list[g.planks].visible=!1,st.plank(),Z.flowDirty=!0);else if(d==="piece"&&g&&Math.hypot(g.x-n.x,g.z-n.z)<1.55)E=!0,n.yaw=Math.atan2(g.x-n.x,g.z-n.z),g.hp-=30*e,kt()<e*1.2&&st.plank(),g.hp<=0&&C0(g);else if(a<1.25+(n.type==="fat"?.2:n.type==="boss"?.5:0))E=!0,n.yaw=Math.atan2(r,o);else if(M>.01){let N=Math.min(M,x*e);n.x+=m/M*N,n.z+=b/M*N,n.yaw+=ta(n.yaw,Math.atan2(m,b))*Math.min(1,e*8)}n.atkCd-=e;let U=n.type==="fat"?.2:n.type==="boss"?.6:0;if(a<1.3+U&&n.atkCd<=0&&n.atk===0&&(n.atk=.001,kt()<.6&&st.zattack(n.type,a,oo(r,o))),n.atk>0){let N=n.atk;n.atk+=e/(n.type==="boss"?1:.8),N<.5&&n.atk>=.5&&a<1.6+U&&A.y<1.2&&vc(n.type==="boss"?A.driving?30:60:A.driving?18:34),n.atk>=1&&(n.atk=0,n.atkCd=.4)}let C={x:n.x,z:n.z};er(C,.3,Jr),n.x=C.x,n.z=C.z;let P=Ai[h];if(P<n.best-.5?(n.best=P,n.stuckT=0):n.stuckT+=e,n.stuckT>22&&a>18){let[N,X]=tr(hc);n.x=W(N),n.z=W(X),n.best=1e9,n.stuckT=0,n.state="rise",n.t=0}s.root.position.set(n.x,0,n.z),s.root.rotation.y=n.yaw,n.cur=Ki(n.cur,E?0:x,Math.min(1,e*6)),eo(s,Z.t,n.cur,Math.max(E?.5+.5*Math.sin(Z.t*6):0,n.atk>0?Math.sin(n.atk*Math.PI):0),p===3),n.groanT-=e,n.groanT<=0&&(n.groanT=3+kt()*7,a<30&&(n.type==="boss"&&kt()<.4?st.zboss(a,oo(r,o)):st.zgroan(n.type,a,oo(r,o))))}function oo(n,e){let t=ta(A.yaw,Math.atan2(-n,-e));return Pn(-Math.sin(t),-1,1)}function CM(n){for(let e of Ut)!e.dead&&e!==n&&Math.hypot(e.x-n.x,e.z-n.z)<30&&(e.rage=9);Z.screamAdds<8&&(Z.toSpawn+=2,Z.screamAdds+=2),es("A screamer called the horde"),sn()}function PM(){for(let n=0;n<Ut.length;n++){let e=Ut[n];if(!(e.dead||e.state==="rise")){for(let t=n+1;t<Ut.length;t++){let i=Ut[t];if(i.dead||i.state==="rise")continue;let s=i.x-e.x,r=i.z-e.z,o=Math.hypot(s,r);if(o<.62&&o>1e-4){let a=(.62-o)/2;e.x-=s/o*a,e.z-=r/o*a,i.x+=s/o*a,i.z+=r/o*a}}if(!A.driving){let t=A.x-e.x,i=A.z-e.z,s=Math.hypot(t,i);s<.7&&s>1e-4&&(e.x-=t/s*(.7-s),e.z-=i/s*(.7-s))}}}}function sr(n,e,t,i){n.dead||(Z.insta>0&&n.type!=="boss"&&(e=1e12),n.hp-=e,st.hit(t),n.hp<=0?Ff(n,i,t):(ir(10),G0(!1),kt()<.2&&st.zhurt(n.type,Math.hypot(n.x-A.x,n.z-A.z),oo(n.x-A.x,n.z-A.z))))}function Ff(n,e,t){n.dead=!0,n.deadT=0,n.fallDir=kt()<.5?1:-1;{let i=Ut.filter(s=>s.dead&&s!==n&&s.deadT<Sf);if(i.length>=b0){i.sort((s,r)=>r.deadT-s.deadT);for(let s=0;s<=i.length-b0;s++)i[s].deadT=Sf}}if(Z.kills++,t&&Z.heads++,ir(n.type==="boss"?1500:e==="knife"?130:t?100:e==="nuke"?0:60),G0(!0),st.kill(),(e!=="nuke"||kt()<.2)&&st.zdeath(n.type,Math.hypot(n.x-A.x,n.z-A.z),oo(n.x-A.x,n.z-A.z)),n.type==="boss"&&(wM(),Rf(n.x,n.z,"max")),Is(be.blood(),16777215,n.x,1.1,n.z,.9,.5,{grow:1.5}),n.type==="toxic"){st.toxic();let i=Is(be.puff(),6356800,n.x,1,n.z,3.5,6,{op:.55,grow:.4});ao.push({x:n.x,z:n.z,t:6})}e!=="nuke"&&Z.pupsRound<4&&kt()<.035&&Rf(n.x,n.z),sn()}var fc=0;function G0(n){let e=de("hit");e.className=n?"kill":"",e.style.opacity=1,fc=.18,n||st.hitmarker()}var dc={max:["MAX AMMO",4259680],insta:["INSTA-KILL",16728128],dbl:["DOUBLE POINTS",16764992],nuke:["NUKE",16744480],carp:["CARPENTER",4235519]};function Rf(n,e,t){t=t||tr(Object.keys(dc)),Z.pupsRound++;let i=new Be;i.position.set(n,1,e);let s=new Jt(new tn({map:be.glow(),color:dc[t][1],transparent:!0,blending:xn,depthWrite:!1}));s.scale.set(1.8,1.8,1),i.add(s);let r=new Jt(new tn({map:be.label(dc[t][0],"rgba(0,0,0,0)","#fff",512,96,"bold 52px Arial Black, Arial"),transparent:!0,depthWrite:!1}));r.scale.set(1.9,.36,1),r.position.y=.75,i.add(r),It.add(i),Ps.push({g:i,kind:t,x:n,z:e,t:26})}function IM(n){if(st.powerup(n.kind),ts(dc[n.kind][0],2),n.kind==="max"){for(let e of A.guns)e.reserve=e.maxReserve;A.nades=Math.max(A.nades,4)}if(n.kind==="insta"&&(Z.insta=30),n.kind==="dbl"&&(Z.dbl=30),n.kind==="nuke"){de("flash").style.opacity=1,pc=1;for(let e of Ut)!e.dead&&e.type!=="boss"&&Ff(e,"nuke");ir(400),st.boom()}if(n.kind==="carp"){for(let e of On)e.planks=6,qe.planks[e.id].list.forEach(t=>t.visible=!0);Z.flowDirty=!0,ir(200)}sn()}var pc=0;function vc(n){if(!(Z.god||Z.state!=="play")&&(A.hp-=n,A.lastHit=Z.t,st.hurt(),qr(.8,.5,200),de("dmg").style.opacity=1,A.hp<=0))if(A.perks.has("revive")){A.perks.delete("revive"),A.hp=A.maxHp,ts("SECOND WIND<small>YOU GOT BACK UP</small>",2.5);for(let e of Ut)!e.dead&&Math.hypot(e.x-A.x,e.z-A.z)<5&&(e.x+=(e.x-A.x)*.8,e.z+=(e.z-A.z)*.8);sn()}else V0()}function V0(){Z.state="over",A.hp=0,Yi(!1),document.pointerLockElement&&document.exitPointerLock();let n=Math.max(+localStorage.getItem("ds_best")||0,Z.round);localStorage.setItem("ds_best",n),de("stats").innerHTML=`You made it to <b>round ${Z.round}</b><br>Kills: <b>${Z.kills}</b> &nbsp; Headshots: <b>${Z.heads}</b><br>Points left: <b>${Z.points}</b><br>Best round: <b>${n}</b>`,setTimeout(()=>{de("hud").classList.add("hidden"),de("touch").classList.remove("live"),de("over").classList.remove("hidden")},1200),ts("YOU DIED",2)}function fo(){return A.guns[A.cur]}function Cf(){let n=fo();!n||A.reloadT>0||n.clip>=n.mag||n.reserve<=0||(A.reloadT=n.def.reload*(A.perks.has("rapid")?.5:1),A.reloadMax=A.reloadT,st.reload(0))}function yc(n,e=!1){let t=A.guns.findIndex(s=>s.key===n),i=nc(n,e);t>=0?(A.guns[t]=i,A.cur=t):A.guns.length<2?(A.guns.push(i),A.cur=A.guns.length-1):A.guns[A.cur]=i,A.reloadT=0,A.swapT=.4,co()}var xf=new D,yf=new D;function W0(){let n=fo();if(!n)return;n.clip--,A.fireT=60/(n.rpm*(A.perks.has("double")?1.33:1)),A.recoil=Math.min(1,A.recoil+.35);let e=n.def;st.shot(e.sound[0],e.sound[1],!!e.wonder,e.kind),qr(.3,.6,60),xt.getWorldPosition(xf);let t=e.pellets||1;for(let i=0;i<t;i++){let s=e.spread*(A.ads>.5?.35:1)*(A.speed>1?1.6:1);yf.set((kt()-.5)*2*s,(kt()-.5)*2*s,-1).normalize().applyQuaternion(xt.quaternion),e.wave||DM(xf,yf,n)}e.wave&&LM(xf,yf,n),A.pitch=Pn(A.pitch+.006+e.sound[1]*.01,-1.45,1.45),Pf=.05,sn(),n.clip===0&&Cf()}var Pf=0,ha=new Jt(new tn({map:be.glow(),color:16760944,transparent:!0,blending:xn,depthWrite:!1}));ha.scale.set(.25,.25,1);ua.add(ha);var _f=new D,vf=new D;function LM(n,e,t){let i=t.def.wave*(t.pap?1.3:1),s=e.x,r=e.z,o=Math.hypot(s,r)||1;for(let a=1;a<=5;a++){let l=a*i/5.5;Is(be.glow(),6342911,n.x+s/o*l,1.1,n.z+r/o*l,.8+a*.7,.3+a*.05,{add:!0,grow:3})}for(let a of Ut){if(a.dead||a.state==="rise")continue;let l=a.x-n.x,c=a.z-n.z,h=Math.hypot(l,c);if(h>i||h<.01||(l*s+c*r)/(h*o)<.78||!xc(n.x,n.z,a.x,a.z))continue;let u=1-h/(i*1.15),f=(a.type==="boss"?.6:a.type==="fat"?1.6:3.2)*u,d={x:a.x+l/h*f,z:a.z+c/h*f};er(d,.3,Jr),a.x=d.x,a.z=d.z,a.stun=.8*u,sr(a,t.dmg*(.4+.6*u),!1,"gun")}}function DM(n,e,t){let i=Math.hypot(e.x,e.z),s=150;i>1e-4&&(s=$l(n.x,n.z,e.x,e.z,150*i,u=>Wp(u))/i),e.y<-1e-4&&(s=Math.min(s,-n.y/e.y)),e.y>1e-4&&(s=Math.min(s,(3.4-n.y)/e.y));let r=[];for(let u of Ut){if(u.dead||u.state==="rise"&&u.t<.7||Math.hypot(u.x-n.x,u.z-n.z)>s+2)continue;let f=u.m.scale||1;u.m.root.updateMatrixWorld(!0),_f.copy(u.m.headC),u.m.head.localToWorld(_f),vf.copy(u.m.bodyC),u.m.spine.localToWorld(vf);let d=[[_f,.17*f,!0],[vf,(u.type==="fat"?.48:.32)*f,!1]],g=1/0,x=!1;for(let[p,m,b]of d){let M=p.x-n.x,E=p.y-n.y,U=p.z-n.z,C=M*e.x+E*e.y+U*e.z;if(C<0)continue;let P=M*M+E*E+U*U-C*C;if(P<m*m){let N=C-Math.sqrt(m*m-P);N<g&&(g=N,x=b)}}if(g===1/0){let p=u.x-n.x,m=u.z-n.z,b=(p*e.x+m*e.z)/Math.max(1e-6,i*i),M=n.x+e.x*b-u.x,E=n.z+e.z*b-u.z,U=n.y+e.y*b;b>0&&M*M+E*E<.09&&U>0&&U<.9*f&&(g=b)}g<s&&r.push([g,u,x])}r.sort((u,f)=>u[0]-f[0]);let o=t.def.pierce||1,a=s;for(let u=0;u<Math.min(o,r.length);u++){let[f,d,g]=r[u];sr(d,t.dmg*(g?t.def.head:1)*Math.pow(.75,u),g,"gun"),Is(be.blood(),16777215,n.x+e.x*f,n.y+e.y*f,n.z+e.z*f,.4,.35,{grow:1}),u===o-1&&(a=f)}let l=n.x+e.x*a,c=n.y+e.y*a,h=n.z+e.z*a;if(t.def.splash){Is(be.glow(),5308272,l,c,h,2.5,.4,{add:!0,grow:4});for(let u of Ut)!u.dead&&Math.hypot(u.x-l,u.z-h)<t.def.splash&&sr(u,t.dmg,!1,"gun")}else r.length||Is(be.puff(),10064e3,l,c,h,.25,.4,{grow:.8})}function UM(){if(A.knifeT>0)return;A.knifeT=.5,st.knife();let n=null,e=1.9;for(let t of Ut){if(t.dead||t.state==="rise")continue;let i=t.x-A.x,s=t.z-A.z,r=Math.hypot(i,s),o=Math.abs(ta(Math.atan2(-i,-s),A.yaw));r<e&&o<1&&(e=r,n=t)}n&&sr(n,150+Z.round*25,!1,"knife")}function NM(){if(A.nades<=0)return;A.nades--,sn();let n=new J(new Et(.08,8,6),new jt({color:3820074,roughness:.6}));It.add(n),xt.getWorldDirection(nr),xt.getWorldPosition(ic),lo.push({m:n,x:ic.x+nr.x*.5,y:ic.y,z:ic.z+nr.z*.5,vx:nr.x*14,vy:nr.y*14+3,vz:nr.z*14,t:2.2})}function OM(n){for(let e=lo.length-1;e>=0;e--){let t=lo[e];t.t-=n,t.vy-=18*n;let i=t.x+t.vx*n,s=t.z+t.vz*n,r=De[Re(Pn(Ht(i),0,179),Pn(Ht(s),0,117))];if(ea(r)||r===3?(t.vx*=-.4,t.vz*=-.4):(t.x=i,t.z=s),t.y+=t.vy*n,t.y<.08&&(t.y=.08,t.vy*=-.35,t.vx*=.7,t.vz*=.7),t.m.position.set(t.x,t.y,t.z),t.t<=0){It.remove(t.m),lo.splice(e,1),st.boom(),qr(1,1,300),Is(be.glow(),16752704,t.x,1,t.z,3,.4,{add:!0,grow:10}),Is(be.puff(),5263440,t.x,1.2,t.z,2,1.6,{grow:3,vy:.8,op:.8});for(let a of Ut){if(a.dead)continue;let l=Math.hypot(a.x-t.x,a.z-t.z);l<5.5&&sr(a,(900+Z.round*120)*(1-l/6),!1,"nade")}let o=Math.hypot(A.x-t.x,A.z-t.z);o<3.5&&!A.driving&&vc(25*(1-o/3.5))}}}function Cs(n,e){return Math.hypot(n.x-A.x,n.z-A.z)<e}function If(n){de("prompt").innerHTML=n}function so(n){return Z.points<n?(st.deny(),es("Not enough points"),!1):(ir(n,!0),st.buy(),sn(),!0)}var Ii=()=>`<span class="k">${yM("use")}</span>`;function kM(n){let e="",t=Nn("use"),i=ne.use;if(A.driving){If(Ii()+" Get out"),t&&VM();return}let s=!1;for(let r of On){let o={x:W(r.i)-r.outDir[0]*1.1,z:W(r.j)-r.outDir[1]*1.1};if(r.planks<6&&Cs(o,1.6)){e="Hold "+Ii()+" to rebuild the barrier",i&&(s=!0,A.repT+=n,A.repT>.7&&(A.repT=0,qe.planks[r.id].list[r.planks].visible=!0,r.planks++,st.nail(),Z.flowDirty=!0,Z.repairPts<500&&(ir(10),Z.repairPts+=10),sn()));break}}if(s||(A.repT=0),!e)for(let r of $i){if(r.open)continue;let o=0,a=0;for(let[l,c]of r.tiles)o+=W(l),a+=W(c);if(Cs({x:o/r.tiles.length,z:a/r.tiles.length},2.6)){e=Ii()+" Open door to "+r.label+" ["+r.cost+"]",t&&so(r.cost)&&X0(r);break}}if(!e){for(let r of qe.wallbuys)if(Cs(r.use,1.6)){let o=A.guns.find(l=>l.key===r.key),a=o?o.pap?4500:Math.round(r.cost/2):r.cost;e=Ii()+(o?" Buy ammo for "+o.name:" Buy "+ji[r.key].name)+" ["+a+"]",t&&so(a)&&(o?(o.reserve=o.maxReserve,o.clip=o.mag,sn()):yc(r.key));break}}if(!e){for(let r of qe.perks)if(Cs(r.use,1.7)){A.perks.has(r.key)?e=r.name+": you have it":r.needsPower&&!Z.power?e=r.name+": turn on the power first":(e=Ii()+" "+r.name+" ("+r.desc+") ["+r.cost+"]",t&&so(r.cost)&&(A.perks.add(r.key),st.perk(),r.key==="tank"&&(A.maxHp=250,A.hp=250),es(r.name+": "+r.desc),sn()));break}}if(!e&&!Z.power&&Cs(qe.swUse,1.8)&&(e=Ii()+" Turn on the power",t&&(B0(!0),st.power(),ts("POWER ON",2.5))),!e&&Cs(qe.forgeUse,2)){let r=fo();if(!Z.power)e="The Forge: turn on the power first";else if(Qn.t>0)e="The Forge is working...";else if(!r||r.pap)e="The Forge: this gun is already upgraded";else if(e=Ii()+" Upgrade "+r.name+" [5000]",t&&so(5e3)){Qn.t=2.5;let o=r.key;A.guns[A.cur]=nc(o,!0),co(),st.power(),ts(df[o]||"UPGRADED",2),Qn.model=Ji(o,!0).group,Qn.model.scale.setScalar(1.8),qe.forge.slot.add(Qn.model)}}if(!e){let r=qe.boxSpots[Oe.spot];Cs(r.use,2)&&(Oe.state==="idle"?(e=Ii()+" Mystery Box [950]",t&&so(950)&&FM()):Oe.state==="ready"?(e=Ii()+" Take "+ji[Oe.key].name,t&&(yc(Oe.key),q0())):e="")}!e&&Cs(Ae,3.2)&&(e=Ii()+" Drive the car",t&&GM()),If(e)}function X0(n){n.open=!0;for(let[e,t]of n.tiles)De[Re(e,t)]=1,nn[Re(e,t)]=n.zone;ws.add(n.zone),qe.doorMeshes[n.id].visible=!1,st.door(),Z.flowDirty=!0,Z.mapDirty=!0,es(n.label+" opened")}function FM(){Oe.state="rolling",Oe.t=0,Oe.cycleT=0,Oe.uses++,st.box()}function q0(){Oe.state="idle",Oe.model&&(qe.box.gunSlot.remove(Oe.model),Oe.model=null)}function A0(n){Oe.model&&qe.box.gunSlot.remove(Oe.model),Oe.model=Ji(n,!1).group,Oe.model.scale.setScalar(2),Oe.model.rotation.y=Math.PI/2,qe.box.gunSlot.add(Oe.model)}function BM(n){let e=qe.box.lid;if(e.rotation.x=Ki(e.rotation.x,Oe.state==="idle"||Oe.state==="moving"?0:-1.2,Math.min(1,n*6)),qe.box.beam.visible=Oe.state!=="moving",Oe.state==="rolling"){Oe.t+=n,Oe.cycleT-=n;let t=Oe.t/3.2;Oe.model&&(Oe.model.position.y=t*.6),Oe.cycleT<=0&&(Oe.cycleT=.08+t*.15,A0(tr(ff.filter(i=>!A.guns.some(s=>s.key===i))))),Oe.t>=3.2&&(Oe.uses>4&&kt()<.3?(Oe.state="teddy",Oe.t=0,st.teddy(),ir(950),es("The box is moving! You got your points back."),Oe.model&&(qe.box.gunSlot.remove(Oe.model),Oe.model=null)):(Oe.key=tr(ff.filter(i=>!A.guns.some(s=>s.key===i))),A0(Oe.key),Oe.model.position.y=.6,Oe.state="ready",Oe.t=0,st.boxReveal()))}else if(Oe.state==="ready")Oe.t+=n,Oe.model&&(Oe.model.position.y=.6-Oe.t/9*.6),Oe.t>9&&q0();else if(Oe.state==="teddy"&&(Oe.t+=n,qe.box.group.position.y=Math.min(6,Oe.t*Oe.t),Oe.t>2.5)){qe.box.group.position.y=0;let t=qe.boxSpots.map((i,s)=>s).filter(i=>i!==Oe.spot);Oe.spot=tr(t),Oe.uses=0,Oe.state="idle",Of(),es("The box moved to the "+qe.boxSpots[Oe.spot].name)}}function Y0(){ft.on=!ft.on,document.body.classList.toggle("building",ft.on),de("buildbar").classList.toggle("hidden",!ft.on),!ft.on&&ft.ghost&&(ft.ghost.visible=!1),Z0(),ft.on&&es("Build mode: aim at the ground, "+(ne.device==="touch"?"tap FIRE to place, SWAP to change piece":ne.device==="pad"?"R2 to place, Triangle to change piece":"click to place, Q to change piece"))}function Z0(){de("buildbar").innerHTML=Tf.map((n,e)=>`<div class="${e===ft.sel?"sel":""}">${n.name}<span>${n.cost}</span></div>`).join("")}var R0=new ut({color:4259680,transparent:!0,opacity:.35,depthWrite:!1});function zM(){if(!ft.on)return;Nn("swap")&&(ft.sel=(ft.sel+1)%Tf.length,Z0(),ft.ghost&&(It.remove(ft.ghost),ft.ghost=null)),Nn("rotate")&&(ft.rot^=1);let n=Tf[ft.sel];ft.ghost||(ft.ghost=new J(tc(n.kind).wood,R0),It.add(ft.ghost));let e=-Math.sin(A.yaw),t=-Math.cos(A.yaw),i=Ht(A.x+e*2.4),s=Ht(A.z+t*2.4),r=dn(i,s)?Re(i,s):-1,o=r>=0?De[r]:-1,a=Ht(A.x)===i&&Ht(A.z)===s;ft.ok=(o===0||o===1)&&!a&&!Ut.some(l=>!l.dead&&Ht(l.x)===i&&Ht(l.z)===s)&&!(Math.abs(W(i)-Ae.x)<2.6&&Math.abs(W(s)-Ae.z)<2.6),ft.gi=i,ft.gj=s,ft.ghost.visible=!0,ft.ghost.position.set(W(i),0,W(s)),ft.ghost.rotation.y=ft.rot?Math.PI/2:0,R0.color.set(ft.ok&&Z.points>=n.cost?4259680:16728112),If(n.name+" ["+n.cost+"]"+(ft.ok?"":" - cannot build here")),ne.fire&&!A.semi&&(A.semi=!0,ft.ok?so(n.cost)&&HM(n,i,s,ft.rot):st.deny())}function HM(n,e,t,i){let s=Re(e,t),r=new Be,o=tc(n.kind),a=new J(o.wood,gf.wood);a.castShadow=!0,r.add(a),o.metal&&r.add(new J(o.metal,gf.metal));let l=null;if(n.kind==="door"){l=new Be,l.position.x=-.88;let h=new J(tc("gate").wood,gf.wood);l.add(h),r.add(l)}r.position.set(W(e),0,W(t)),r.rotation.y=i?Math.PI/2:0,It.add(r);let c={k:s,i:e,j:t,x:W(e),z:W(t),g:r,gate:l,hp:n.hp,kind:n.kind,under:De[s]};Di.push(c),De[s]=n.tile,ai[s]=Di.length-1,st.build(),Z.flowDirty=!0,Z.mapDirty=!0}function C0(n){let e=Di.indexOf(n);e<0||(It.remove(n.g),De[n.k]=n.under,ai[n.k]=-1,Di.splice(e,1),st.crash(.4),Z.flowDirty=!0,Z.mapDirty=!0)}function GM(){A.driving=!0,st.carDoor(),document.body.classList.add("driving"),de("carhud").classList.remove("hidden"),ft.on=!1,document.body.classList.remove("building"),de("buildbar").classList.add("hidden"),ft.ghost&&(ft.ghost.visible=!1),Yi(!0,0)}function VM(){A.driving=!1,st.carDoor(),document.body.classList.remove("driving"),de("carhud").classList.add("hidden"),Yi(!1),qe.carLight.intensity=0;for(let n of[1,-1]){let e=Ae.x+Math.cos(Ae.h)*1.8*n,t=Ae.z-Math.sin(Ae.h)*1.8*n,i=De[Re(Pn(Ht(e),0,179),Pn(Ht(t),0,117))];if(!ea(i)){A.x=e,A.z=t;break}}A.yaw=Ae.h,Ae.v=0}function $0(n){let e=qe.car.group;if(A.driving){let t=ne.gas-ne.brake;Ae.steer=Ki(Ae.steer,-ne.mx,Math.min(1,n*6)),Ae.v+=t*(t*Ae.v<0?22:11)*n,Ae.v*=Math.pow(.55,n),Ae.v=Pn(Ae.v,-7,24),Ae.h+=Ae.steer*Ae.v*.11*n;let i=Ae.x-Math.sin(Ae.h)*Ae.v*n,s=Ae.z-Math.cos(Ae.h)*Ae.v*n,r={x:i,z:s};er(r,1.15,Zl)|er({x:i-Math.sin(Ae.h)*1.3,z:s-Math.cos(Ae.h)*1.3},1,Zl)|er({x:i+Math.sin(Ae.h)*1.3,z:s+Math.cos(Ae.h)*1.3},1,Zl)?(Math.abs(Ae.v)>6&&(st.crash(Math.min(1,Math.abs(Ae.v)/20)),qr(1,.6,200)),Ae.v*=-.25):(Ae.x=r.x,Ae.z=r.z);for(let a of Ut)if(!(a.dead||a.state==="rise")&&Math.hypot(a.x-Ae.x,a.z-Ae.z)<1.9)if(Math.abs(Ae.v)>5)st.splat(),sr(a,400+Math.abs(Ae.v)*120+Z.round*40,!1,"car"),Ae.v*=.9;else{let l=a.x-Ae.x,c=a.z-Ae.z,h=Math.hypot(l,c)||1;a.x=Ae.x+l/h*1.9,a.z=Ae.z+c/h*1.9}A.x=Ae.x,A.z=Ae.z,Yi(!0,Math.abs(Ae.v)/24),de("carhud").innerHTML=Math.round(Math.abs(Ae.v)*2.237)+" <small>MPH</small>",qe.carLight.intensity=60,qe.carLight.position.set(Ae.x-Math.sin(Ae.h)*2.4,.8,Ae.z-Math.cos(Ae.h)*2.4),qe.carLight.target.position.set(Ae.x-Math.sin(Ae.h)*14,0,Ae.z-Math.cos(Ae.h)*14)}e.position.set(Ae.x,0,Ae.z),e.rotation.y=Ae.h;for(let t of qe.car.wheels)t.spin.rotation.z-=Ae.v*n/.34,t.front&&(t.w.rotation.y=Ae.steer*.5)}var Lf=performance.now(),rc=0,Mf=0,bf=0,oc=0;function K0(n){if(Z.t+=n,Fp(),Bp(n),ne.sens=Zt.sens,ne.invertY=!!Zt.inv,Nn("pause")){Q0();return}if(A.driving||(A.yaw-=ne.lx,A.pitch=Pn(A.pitch-ne.ly,-1.45,1.45)),Nn("view")&&(A.view=A.view==="fp"?"tp":"fp"),Nn("build")&&!A.driving&&Y0(),ne.fire||(A.semi=!1),!A.driving){let i=(ne.sprint||Yu())&&ne.my>.3&&!ne.aim&&A.reloadT<=0,s=(i?6.4:4.2)*(A.perks.has("stamina")?1.15:1)*(ne.aim?.6:1),r=Math.min(1,Math.hypot(ne.mx,ne.my)),o=-Math.sin(A.yaw),a=-Math.cos(A.yaw),l=Math.cos(A.yaw),c=-Math.sin(A.yaw),h=o*ne.my+l*ne.mx,u=a*ne.my+c*ne.mx,f=Math.hypot(h,u);if(f>1e-4?(h=h/f*r*s,u=u/f*r*s):h=u=0,Z.fly){let g=(ne.sprint||Yu()?26:12)*r,x=Math.cos(A.pitch),p=Math.hypot(ne.mx,ne.my)||1,m=ne.my/p,b=ne.mx/p;A.x+=(o*x*m+l*b)*g*n,A.z+=(a*x*m+c*b)*g*n,A.y+=(Math.sin(A.pitch)*m*g+((ne.up||0)-(ne.down||0))*10)*n,A.x=Pn(A.x,1,359),A.z=Pn(A.z,1,235),A.y=Pn(A.y,0,90),A.vy=0,A.speed=0,A.sprinting=!1}else{let g={x:A.x+h*n,z:A.z+u*n};er(g,.35,(x,p)=>ea(x,p)||x===7),A.x=g.x,A.z=g.z,A.speed=Math.hypot(h,u),A.sprinting=i&&A.speed>1,Nn("jump")&&A.y<=0&&(A.vy=4.6),A.vy-=14*n,A.y=Math.max(0,A.y+A.vy*n),A.y===0&&(A.vy=Math.max(0,A.vy)),A.y>0&&A.vy===0&&!Z.fly&&(A.vy=-.01)}A.bob+=A.speed*n*1.8;let d=fo();if(A.fireT-=n,A.knifeT-=n,A.swapT-=n,A.reloadT>0&&(A.reloadT-=n,A.reloadT<=0&&d)){let g=Math.min(d.mag-d.clip,d.reserve);d.clip+=g,d.reserve-=g,st.reload(1),sn()}ft.on||(Nn("reload")&&Cf(),(Nn("swap")||Nn("swapBack"))&&A.guns.length>1&&(A.cur=(A.cur+1)%A.guns.length,A.reloadT=0,A.swapT=.35,co()),Nn("slot1")&&A.guns[0]&&(A.cur=0,co()),Nn("slot2")&&A.guns[1]&&(A.cur=1,co()),Nn("knife")&&UM(),Nn("grenade")&&NM(),ne.fire&&d&&A.reloadT<=0&&A.swapT<=0&&A.knifeT<=0&&!A.sprinting&&(d.clip<=0?A.semi||(st.dry(),A.semi=!0,Cf()):A.fireT<=0&&(d.def.auto||!A.semi||ne.device==="touch")&&(W0(),A.semi=!0))),A.ads=Ki(A.ads,ne.aim&&!A.sprinting&&A.reloadT<=0&&!ft.on?1:0,Math.min(1,n*12)),zM()}A.recoil=Math.max(0,A.recoil-n*4),kM(n),$0(n),Z.t-A.lastHit>3.5&&A.hp<A.maxHp&&(A.hp=Math.min(A.maxHp,A.hp+A.maxHp*.5*n)),de("dmg").style.opacity=Pn(1-A.hp/A.maxHp,0,1)*.9,A.hp<A.maxHp*.35&&(A.heartT-=n,A.heartT<=0&&(st.heartbeat(),A.heartT=.9)),Z.flowT-=n;let e=Re(Pn(Ht(A.x),0,179),Pn(Ht(A.z),0,117));if(Z.flowDirty||e!==Z.lastFlowK&&Z.flowT<=0){Xp([[Ht(A.x),Ht(A.z)]]),Z.lastFlowK=e,Z.flowT=.25,Z.flowDirty=!1;for(let i of Ut)i.best=1e9}for(let i=Ut.length-1;i>=0;i--){let s=Ut[i];s&&H0(s,n,A.x,A.z)}if(PM(),Z.state!=="play")return;AM(n),OM(n),BM(n);let t=!1;for(let i=ao.length-1;i>=0;i--){let s=ao[i];if(s.t-=n,s.t<=0){ao.splice(i,1);continue}Math.hypot(s.x-A.x,s.z-A.z)<2.6&&!A.driving&&(t=!0,kt()<n*2&&vc(8))}de("toxicfx").style.opacity=t?.7:0;for(let i=Ps.length-1;i>=0;i--){let s=Ps[i];s.t-=n,s.g.position.y=1+Math.sin(Z.t*3)*.15,s.g.visible=s.t>5||Math.sin(Z.t*18)>0,Math.hypot(s.x-A.x,s.z-A.z)<1.6?(IM(s),It.remove(s.g),Ps.splice(i,1)):s.t<=0&&(It.remove(s.g),Ps.splice(i,1))}Z.insta>0&&(Z.insta-=n),Z.dbl>0&&(Z.dbl-=n),Qn.t>0&&(Qn.t-=n,Qn.model&&(Qn.model.rotation.y+=n*3),Qn.t<=0&&Qn.model&&(qe.forge.slot.remove(Qn.model),Qn.model=null));for(let i of Di)if(i.gate){let s=Math.hypot(i.x-A.x,i.z-A.z)<2.2;i.gate.rotation.y=Ki(i.gate.rotation.y,s?1.5:0,Math.min(1,n*6))}for(let i of qe.fires)for(let s of i.fl)s.scale.y=1+Math.sin(Z.t*13+s.id)*.15;vM(n),N0(n),lc>0&&(lc-=n,lc<=0&&de("toast").classList.remove("show")),cc>0&&(cc-=n,cc<=0&&de("center").classList.remove("show")),fc>0&&(fc-=n,fc<=0&&(de("hit").style.opacity=0)),pc>0&&(pc-=n,de("flash").style.opacity=Math.max(0,pc)),(Z.t*4|0)!==((Z.t-n)*4|0)&&sn()}function WM(n){let e=A.view==="tp"||A.driving;if(A.driving){let u=Ae.x+Math.sin(Ae.h)*7,f=Ae.z+Math.cos(Ae.h)*7;xt.position.lerp(nr.set(u,3.2,f),Math.min(1,n*5)),xt.lookAt(Ae.x-Math.sin(Ae.h)*4,1,Ae.z-Math.cos(Ae.h)*4)}else{let u=1.62+A.y+Math.sin(A.bob*2)*.035*(A.speed>.5?1:0);if(xt.rotation.set(A.pitch+A.recoil*.02,A.yaw,0),e){let d=A.x+Math.sin(A.yaw)*2.6*Math.cos(A.pitch)+Math.cos(A.yaw)*.6,g=A.z+Math.cos(A.yaw)*2.6*Math.cos(A.pitch)-Math.sin(A.yaw)*.6,x=$l(A.x,A.z,d-A.x,g-A.z,Math.hypot(d-A.x,g-A.z),b=>ea(b)),p=Math.hypot(d-A.x,g-A.z),m=Math.max(.2,(x-.3)/p);xt.position.set(A.x+(d-A.x)*m,u+.3+Math.sin(A.pitch)*2.6*.5,A.z+(g-A.z)*m)}else xt.position.set(A.x,u,A.z)}let t=fo(),i=t&&t.def.zoom&&A.ads>.8?t.def.zoom:1,s=(xt.userData.fov||Zt.fov)/(1+A.ads*.25)/i;Math.abs(xt.fov-s)>.01&&(xt.fov=s,xt.updateProjectionMatrix()),de("scope").style.opacity=i>1?1:0;let r=i>1;de("cross").classList.toggle("hide",r||A.driving),de("cross").classList.toggle("ads",A.ads>.6&&!r),Qi.wrap.visible=e&&!A.driving,Qi.wrap.visible&&(Qi.wrap.position.set(A.x,A.y,A.z),Qi.wrap.rotation.y=A.yaw,c0(Qi,Z.t,A.speed,A.pitch,A.sprinting)),yi.visible=!e&&!ft.on&&!(t&&t.def.zoom&&A.ads>.8);let o=A.ads,a=A.reloadT>0?Math.sin(Math.min(1,1-A.reloadT/(A.reloadMax||1))*Math.PI):0,l=A.swapT>0?A.swapT/.4:0,c=A.knifeT>0?Math.sin((.5-A.knifeT)/.5*Math.PI):0,h=_i?_i.sight:.095;yi.position.set(Ki(.17,0,o)+c*-.1,Ki(-.19,-h,o)-a*.12-l*.3+Math.sin(A.bob*2)*.008*(1-o),Ki(-.38,-.27,o)+A.recoil*.05-c*.15),yi.rotation.set(a*.6+A.recoil*.08*(1-o*.85)+(A.sprinting?-.35:0),(A.sprinting?.6:0)+c*.8,a*.4),Pf>0?(Pf-=n,ha.visible=!e,ha.position.set(yi.position.x,yi.position.y+(_i?_i.muzzle.position.y:.06),yi.position.z+(_i?_i.muzzle.position.z:-.55))):ha.visible=!1;{let u=A.y>8?260:125;xt.far!==u&&(xt.far=u,xt.updateProjectionMatrix())}{let u=Pn((A.y-4)/30,0,1);It.fog.density=.024*(1-u*.82),qe.hemi.intensity=1.3+u*1.6,In.toneMappingExposure=1.4+u*.6}qe.moonL.position.set(A.x-30,60,A.z-40),qe.moonL.target.position.set(A.x,0,A.z),In.clear(),In.render(It,xt),yi.visible&&(In.clearDepth(),In.render(ua,Ef)),Z.t%.1<n&&EM()}function J0(n){requestAnimationFrame(J0);let e=Math.min(.05,(n-Lf)/1e3);if(Lf=n,rc+=e,Mf++,rc>1&&(bf=Math.round(Mf/rc),rc=0,Mf=0,de("fps").textContent=bf+" FPS",Z.state==="play"&&Zt.q==="auto"&&(bf<35?oc++:oc=0,oc>=3&&gc>.6&&(gc-=.15,Nf(),oc=0))),Z.state==="play")K0(e);else if(Z.state==="over"){Z.t+=e,N0(e);for(let t of Ut)H0(t,e,A.x,A.z)}Z.state==="play"||Z.state==="over"||Z.state==="pause"?WM(Z.state==="pause"?0:e):(Z.t+=e,xt.position.set(44+Math.sin(Z.t*.08)*30,9,40+Math.cos(Z.t*.08)*30),xt.lookAt(44,1,46),xt.fov!==60&&(xt.fov=60,xt.updateProjectionMatrix()),In.clear(),In.render(It,xt)),qu()}var XM=["title","pause","settings","controls","over","admin","pin"],po="title";function Yn(n){for(let e of XM)de(e).classList.toggle("hidden",e!==n)}function j0(){Hp(),$u(Zt.vol),TM(),zf=!1,Z.state="play",Yn(null),de("hud").classList.remove("hidden"),de("touch").classList.add("live"),ne.device==="kbm"&&!ns&&ho.requestPointerLock?.()}function Q0(){Z.state==="play"&&(Z.state="pause",ne.fire=ne.aim=!1,Yi(!1),Yn("pause"),de("touch").classList.remove("live"),document.pointerLockElement&&document.exitPointerLock())}function qM(){Z.state="play",Yn(null),de("touch").classList.add("live"),Lf=performance.now(),A.driving&&Yi(!0,0),ne.device==="kbm"&&!ns&&ho.requestPointerLock?.()}function em(){Z.state="title",k0(),Yn("title"),de("hud").classList.add("hidden"),de("touch").classList.remove("live"),Yi(!1),tm()}function tm(){let n=+localStorage.getItem("ds_best")||0;de("best").textContent=n?"Best: round "+n:""}de("bUpright").onclick=()=>document.body.classList.add("upright");de("bPlay").onclick=j0;de("bAgain").onclick=j0;de("bMenu").onclick=em;de("bResume").onclick=qM;de("bQuit").onclick=em;de("bControls").onclick=()=>{po="title",Yn("controls")};de("bControls2").onclick=()=>{po="pause",Yn("controls")};de("bSettings").onclick=()=>{po="title",go(),Yn("settings")};de("bSettings2").onclick=()=>{po="pause",go(),Yn("settings")};var Bf=!1;function fa(){de("admPts").textContent=Z.points.toLocaleString();for(let n of de("admPapSeg").children)n.classList.toggle("on",+n.dataset.v==1===Bf);de("admExtra").children[1].textContent="GOD MODE: "+(Z.god?"ON":"OFF"),de("admExtra").children[1].classList.toggle("on",!!Z.god),de("admExtra").children[2].textContent="FLY: "+(Z.fly?"ON":"OFF"),de("admExtra").children[2].classList.toggle("on",!!Z.fly)}function mo(n){de("admMsg").textContent=n}de("admGuns").innerHTML=Object.keys(ji).map(n=>`<button data-k="${n}">${ji[n].name}</button>`).join("");var zf=!1,Li="",YM=n=>[...n].reduce((e,t)=>e*31+t.charCodeAt(0)|0,7);function nm(){mo(""),fa(),Yn("admin")}function la(){[...de("pinDots").children].forEach((n,e)=>n.classList.toggle("f",e<Li.length))}function mc(n){if(n==="x"){Yn("pause");return}if(n==="b"){Li=Li.slice(0,-1),la();return}Li.length>=4||(Li+=n,de("pinMsg").textContent="",la(),Li.length===4&&(YM(Li)===7945292?(zf=!0,Li="",la(),nm()):(Li="",de("pinMsg").textContent="Wrong PIN",setTimeout(la,250))))}for(let n of de("pinPad").children)n.onclick=()=>mc(n.dataset.k);addEventListener("keydown",n=>{de("pin").classList.contains("hidden")||(n.stopImmediatePropagation(),n.preventDefault(),/^\d$/.test(n.key)?mc(n.key):n.key==="Backspace"?mc("b"):n.key==="Escape"&&mc("x"))},!0);de("bAdmin").onclick=()=>{if(zf)return nm();Li="",la(),de("pinMsg").textContent="",Yn("pin")};de("bAdmBack").onclick=()=>Yn("pause");for(let n of de("admMoney").children)n.onclick=()=>{let e=+n.dataset.n;Z.points+=e,sn(),fa(),mo("Added "+e.toLocaleString()+" points to you.")};for(let n of de("admPapSeg").children)n.onclick=()=>{Bf=n.dataset.v==="1",fa()};for(let n of de("admGuns").children)n.onclick=()=>{yc(n.dataset.k,Bf),sn(),mo("You now have the "+fo().name+".")};de("admExtra").children[0].onclick=()=>{for(let n of A.guns)n.clip=n.mag,n.reserve=n.maxReserve;A.nades=Math.max(A.nades,4),sn(),mo("Ammo and grenades refilled.")};de("admExtra").children[2].onclick=()=>{Z.fly=!Z.fly,Z.fly||(A.vy=-.01),fa(),mo(Z.fly?"Flight on: fly where you look. Keyboard: Space up, Ctrl or Z down, Shift fast. Phone/controller: look up or down while moving.":"Flight off: you drop back to the ground.")};de("admExtra").children[1].onclick=()=>{Z.god=!Z.god,fa(),mo(Z.god?"God mode on: zombies cannot hurt you.":"God mode off.")};de("bSetBack").onclick=()=>Yn(po);de("bCtlBack").onclick=()=>Yn(po);function go(){for(let n of de("qSeg").children)n.classList.toggle("on",n.dataset.q===Zt.q);for(let n of de("invSeg").children)n.classList.toggle("on",+n.dataset.v===Zt.inv);for(let n of de("fpsSeg").children)n.classList.toggle("on",+n.dataset.v===Zt.fps);de("sens").value=Zt.sens,de("fov").value=Zt.fov,de("vol").value=Zt.vol,de("fps").classList.toggle("hidden",!Zt.fps),Nf()}for(let n of de("qSeg").children)n.onclick=()=>{Zt.q=n.dataset.q,gc=1,uo(),go()};for(let n of de("invSeg").children)n.onclick=()=>{Zt.inv=+n.dataset.v,uo(),go()};for(let n of de("fpsSeg").children)n.onclick=()=>{Zt.fps=+n.dataset.v,uo(),go()};de("sens").oninput=n=>{Zt.sens=+n.target.value,uo()};de("fov").oninput=n=>{Zt.fov=+n.target.value,U0(),uo()};de("vol").oninput=n=>{Zt.vol=+n.target.value,$u(Zt.vol),uo()};kp(ho,{canLock:()=>Z.state==="play",onUnlock:()=>{Z.state==="play"&&ne.device==="kbm"&&Q0()},toast:es,playing:()=>Z.state==="play"});D0();Nf();go();tm();Of();Object.assign(Ae,wf);$0(0);de("loading").textContent="";de("titleHint").textContent=ns?"Plays best with your phone sideways. A PS5 controller works too.":"Keyboard and mouse or a PS5 controller.";requestAnimationFrame(J0);var ZM=(n,e)=>{for(let t=0;t<n*30&&Z.state==="play";t++)e&&$M(),K0(1/30),qu();return Z.state};function $M(){let n=null,e=1e9;for(let t of Ut){if(t.dead||t.state==="rise")continue;let i=Math.hypot(t.x-A.x,t.z-A.z);i<e&&(e=i,n=t)}ne.fire=!1,n&&e<25&&xc(A.x,A.z,n.x,n.z)&&(A.yaw=Math.atan2(-(n.x-A.x),-(n.z-A.z)),A.pitch=Math.atan2(1.2*(n.m.scale||1)-1.62,e),xt.rotation.set(A.pitch,A.yaw,0),xt.position.set(A.x,1.62,A.z),xt.updateMatrixWorld(),ne.fire=!ne.fire_last,ne.fire_last=ne.fire)}window.__ds={renderer:In,scene:It,camera:xt,fireOnce:()=>{xt.rotation.set(A.pitch,A.yaw,0,"YXZ"),xt.position.set(A.x,1.62+A.y,A.z),xt.updateMatrixWorld(),W0()},gunModel:Ji,W:ji,inp:ne,WD:qe,box:Oe,build:ft,toggleBuild:Y0,sim:ZM,G:Z,P:A,zombies:Ut,pups:Ps,windows:On,doors:$i,startRound:kf,giveGun:yc,hurt:vc,gameOver:V0,car:Ae,pieces:Di,dropPup:Rf,spawnZombie:Af,openDoor:X0,damageZombie:sr};

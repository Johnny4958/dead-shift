var lp=0,pu=1,cp=2;var vf=1,hp=2,ui=3,zi=0,Je=1,un=2,Oi=0,Fi=1,fn=2,mu=3,gu=4,up=5,is=100,fp=101,dp=102,pp=103,mp=104,gp=200,_p=201,xp=202,yp=203,Wl=204,Xl=205,vp=206,Mp=207,Sp=208,bp=209,Ep=210,wp=211,Tp=212,Ap=213,Rp=214,ql=0,Yl=1,Zl=2,qs=3,$l=4,Kl=5,Jl=6,jl=7,Mf=0,Cp=1,Pp=2,Bi=0,Ip=1,Lp=2,Dp=3,gh=4,Up=5,Np=6,Op=7;var Sf=300,Ys=301,Zs=302,Ql=303,tc=304,Aa=306,Or=1e3,rs=1001,ec=1002,Dn=1003,Fp=1004;var po=1005;var Vn=1006,al=1007;var os=1008;var gi=1009,bf=1010,Ef=1011,Fr=1012,_h=1013,as=1014,di=1015,Zr=1016,xh=1017,yh=1018,$s=1020,wf=35902,Tf=1021,Af=1022,Wn=1023,Rf=1024,Cf=1025,Vs=1026,Ks=1027,Pf=1028,vh=1029,If=1030,Mh=1031;var Sh=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,hc=37809,uc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,_c=37816,xc=37817,yc=37818,vc=37819,Mc=37820,Sc=37821,Zo=36492,bc=36494,Ec=36495,Lf=36283,wc=36284,Tc=36285,Ac=36286;var Ko=2300,Rc=2301,ll=2302,_u=2400,xu=2401,yu=2402;var Bp=3200,kp=3201;var Df=0,zp=1,Ui="",yn="srgb",Vi="srgb-linear",bh="display-p3",Ra="display-p3-linear",Jo="linear",Pe="srgb",jo="rec709",Qo="p3";var bs=7680;var vu=519,Hp=512,Gp=513,Vp=514,Uf=515,Wp=516,Xp=517,qp=518,Yp=519,Cc=35044;var Mu="300 es",pi=2e3,ta=2001,Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cl=Math.PI/180,ea=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function en(n,t,e){return Math.max(t,Math.min(e,n))}function Zp(n,t){return(n%t+t)%t}function hl(n,t,e){return(1-e)*n+e*t}function jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ft=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],x=s[0],p=s[3],g=s[6],E=s[1],M=s[4],w=s[7],D=s[2],P=s[5],R=s[8];return r[0]=o*x+a*E+l*D,r[3]=o*p+a*M+l*P,r[6]=o*g+a*w+l*R,r[1]=c*x+h*E+u*D,r[4]=c*p+h*M+u*P,r[7]=c*g+h*w+u*R,r[2]=d*x+f*E+m*D,r[5]=d*p+f*M+m*P,r[8]=d*g+f*w+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ul.makeScale(t,e)),this}rotate(t){return this.premultiply(ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ul=new ee;function Nf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $p(){let n=na("canvas");return n.style.display="block",n}var Su={};function $o(n){n in Su||(Su[n]=!0,console.warn(n))}function Kp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Jp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var bu=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eu=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[Vi]:{transfer:Jo,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[yn]:{transfer:Pe,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ra]:{transfer:Jo,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Eu),fromReference:n=>n.applyMatrix3(bu)},[bh]:{transfer:Pe,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Eu),fromReference:n=>n.applyMatrix3(bu).convertLinearToSRGB()}},Qp=new Set([Vi,Ra]),_e={enabled:!0,_workingColorSpace:Vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=br[t].toReference,s=br[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return br[n].primaries},getTransfer:function(n){return n===Ui?Jo:br[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(br[t].luminanceCoefficients)}};function Ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Es,Pc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=na("canvas")),Es.width=t.width,Es.height=t.height;let i=Es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=na("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ws(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ws(e[i]/255)*255):e[i]=Ws(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tm=0,ia=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dl(s[o].image)):r.push(dl(s[o]))}else r=dl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var em=0,Rn=class n extends Hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rs,s=rs,r=Vn,o=os,a=Wn,l=gi,c=n.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=mi(),this.name="",this.source=new ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Sf;Rn.DEFAULT_ANISOTROPY=1;var Me=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,w=(f+1)/2,D=(g+1)/2,P=(h+d)/4,R=(u+x)/4,L=(m+p)/4;return M>w&&M>D?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=R/i):w>D?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=P/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=R/r,s=L/r),this.set(i,s,r,e),this}let E=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends Hi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ia(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Ic{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sa=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let p=1-a,g=l*d+c*f+h*m+u*x,E=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let D=Math.sqrt(M),P=Math.atan2(D,g*E);p=Math.sin(p*P)/D,a=Math.sin(a*P)/D}let w=a*E;if(l=l*p+d*w,c=c*p+f*w,h=h*p+m*w,u=u*p+x*w,p===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pl=new I,wu=new Qn,ls=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),go.subVectors(this.max,Er),ws.subVectors(t.a,Er),Ts.subVectors(t.b,Er),As.subVectors(t.c,Er),Ri.subVectors(Ts,ws),Ci.subVectors(As,Ts),Ki.subVectors(ws,As);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!ml(e,ws,Ts,As,go)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,ws,Ts,As,go))?!1:(_o.crossVectors(Ri,Ci),e=[_o.x,_o.y,_o.z],ml(e,ws,Ts,As,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new I,new I,new I,new I,new I,new I,new I,new I],zn=new I,mo=new ls,ws=new I,Ts=new I,As=new I,Ri=new I,Ci=new I,Ki=new I,Er=new I,go=new I,_o=new I,Ji=new I;function ml(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ji.fromArray(n,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nm=new ls,wr=new I,gl=new I,Js=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):nm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(gl)),this.expandByPoint(wr.copy(t.center).sub(gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new I,_l=new I,xo=new I,Pi=new I,xl=new I,yo=new I,yl=new I,ra=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_l.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(_l);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=Pi.dot(this.direction),l=-Pi.dot(xo),c=Pi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_l).addScaledVector(xo,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){xl.subVectors(e,t),yo.subVectors(i,t),yl.crossVectors(xl,yo);let o=this.direction.dot(yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);let l=a*this.direction.dot(yo.crossVectors(Pi,yo));if(l<0)return null;let c=a*this.direction.dot(xl.cross(Pi));if(c<0||l+c>o)return null;let h=-a*Pi.dot(yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,m,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,m,x,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,sm)}lookAt(t,e,i){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ii.crossVectors(i,Tn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ii.crossVectors(i,Tn)),Ii.normalize(),vo.crossVectors(Tn,Ii),s[0]=Ii.x,s[4]=vo.x,s[8]=Tn.x,s[1]=Ii.y,s[5]=vo.y,s[9]=Tn.y,s[2]=Ii.z,s[6]=vo.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],x=i[6],p=i[10],g=i[14],E=i[3],M=i[7],w=i[11],D=i[15],P=s[0],R=s[4],L=s[8],q=s[12],_=s[1],v=s[5],N=s[9],B=s[13],X=s[2],rt=s[6],z=s[10],ht=s[14],Z=s[3],yt=s[7],Mt=s[11],St=s[15];return r[0]=o*P+a*_+l*X+c*Z,r[4]=o*R+a*v+l*rt+c*yt,r[8]=o*L+a*N+l*z+c*Mt,r[12]=o*q+a*B+l*ht+c*St,r[1]=h*P+u*_+d*X+f*Z,r[5]=h*R+u*v+d*rt+f*yt,r[9]=h*L+u*N+d*z+f*Mt,r[13]=h*q+u*B+d*ht+f*St,r[2]=m*P+x*_+p*X+g*Z,r[6]=m*R+x*v+p*rt+g*yt,r[10]=m*L+x*N+p*z+g*Mt,r[14]=m*q+x*B+p*ht+g*St,r[3]=E*P+M*_+w*X+D*Z,r[7]=E*R+M*v+w*rt+D*yt,r[11]=E*L+M*N+w*z+D*Mt,r[15]=E*q+M*B+w*ht+D*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+g*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],E=u*p*c-x*d*c+x*l*f-a*p*f-u*l*g+a*d*g,M=m*d*c-h*p*c-m*l*f+o*p*f+h*l*g-o*d*g,w=h*x*c-m*u*c+m*a*f-o*x*f-h*a*g+o*u*g,D=m*u*l-h*x*l-m*a*d+o*x*d+h*a*p-o*u*p,P=e*E+i*M+s*w+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return t[0]=E*R,t[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*g-i*d*g)*R,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*g+i*l*g)*R,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,t[4]=M*R,t[5]=(h*p*r-m*d*r+m*s*f-e*p*f-h*s*g+e*d*g)*R,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=w*R,t[9]=(m*u*r-h*x*r-m*i*f+e*x*f+h*i*g-e*u*g)*R,t[10]=(o*x*r-m*a*r+m*i*c-e*x*c-o*i*g+e*a*g)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*R,t[12]=D*R,t[13]=(h*x*s-m*u*s+m*i*d-e*x*d-h*i*p+e*u*p)*R,t[14]=(m*a*s-o*x*s-m*i*l+e*x*l+o*i*p-e*a*p)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,p=o*u,g=a*u,E=l*c,M=l*h,w=l*u,D=i.x,P=i.y,R=i.z;return s[0]=(1-(x+g))*D,s[1]=(f+w)*D,s[2]=(m-M)*D,s[3]=0,s[4]=(f-w)*P,s[5]=(1-(d+g))*P,s[6]=(p+E)*P,s[7]=0,s[8]=(m+M)*R,s[9]=(p-E)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Hn.copy(this);let c=1/r,h=1/o,u=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,m;if(a===pi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ta)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,m,x;if(a===pi)m=(o+r)*u,x=-2*u;else if(a===ta)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Rs=new I,Hn=new Se,im=new I(0,0,0),sm=new I(1,1,1),Ii=new I,vo=new I,Tn=new I,Tu=new Se,Au=new Qn,Un=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rm=0,Ru=new I,Cs=new Qn,li=new Se,Mo=new I,Tr=new I,om=new I,am=new Qn,Cu=new I(1,0,0),Pu=new I(0,1,0),Iu=new I(0,0,1),Lu={type:"added"},lm={type:"removed"},Ps={type:"childadded",child:null},vl={type:"childremoved",child:null},ze=class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Un,i=new Qn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ee}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Iu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mo.copy(t):Mo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Tr,Mo,this.up):li.lookAt(Mo,Tr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(li),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new I,ci=new I,Ml=new I,hi=new I,Is=new I,Ls=new I,Du=new I,Sl=new I,bl=new I,El=new I,wl=new Me,Tl=new Me,Al=new Me,Ni=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Gn.subVectors(s,e),ci.subVectors(i,e),Ml.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(ci),l=Gn.dot(Ml),c=ci.dot(ci),h=ci.dot(Ml),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return wl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,i),Al.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(Tl,r.y),o.addScaledVector(Al,r.z),o}static isFrontFacing(t,e,i,s){return Gn.subVectors(i,e),ci.subVectors(t,e),Gn.cross(ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Gn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,i),Ls.subVectors(r,i),Sl.subVectors(t,i);let l=Is.dot(Sl),c=Ls.dot(Sl);if(l<=0&&c<=0)return e.copy(i);bl.subVectors(t,s);let h=Is.dot(bl),u=Ls.dot(bl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Is,o);El.subVectors(t,r);let f=Is.dot(El),m=Ls.dot(El);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ls,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Du.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Du,a);let g=1/(p+x+d);return o=x*g,a=d*g,e.copy(i).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},So={h:0,s:0,l:0};function Rl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=Zp(t,1),e=en(e,0,1),i=en(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Rl(o,r,t+1/3),this.g=Rl(o,r,t),this.b=Rl(o,r,t-1/3)}return _e.toWorkingColorSpace(this,s),this}setStyle(t,e=yn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){let i=Of[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}copyLinearToSRGB(t){return this.r=fl(t.r),this.g=fl(t.g),this.b=fl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return _e.fromWorkingColorSpace(rn.copy(this),t),Math.round(en(rn.r*255,0,255))*65536+Math.round(en(rn.g*255,0,255))*256+Math.round(en(rn.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(rn.copy(this),e);let i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=yn){_e.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,i=rn.g,s=rn.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(So);let i=hl(Li.h,So.h,e),s=hl(Li.s,So.s,e),r=hl(Li.l,So.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Kt;Kt.NAMES=Of;var cm=0,xi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Fi,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ye=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new I,bo=new ft,je=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cc,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cc&&(t.usage=this.usage),t}};var aa=class extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var la=class extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ae=class extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}},hm=0,Ln=new Se,Cl=new ze,Ds=new I,An=new ls,Ar=new ls,$e=new I,He=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nf(t)?la:aa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(An.min,Ar.min),An.expandByPoint($e),$e.addVectors(An.max,Ar.max),An.expandByPoint($e)):(An.expandByPoint(Ar.min),An.expandByPoint(Ar.max))}An.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),$e.add(Ds)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;let c=new I,h=new I,u=new I,d=new ft,f=new ft,m=new ft,x=new I,p=new I;function g(L,q,_){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,q),u.fromBufferAttribute(i,_),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,q),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let v=1/(f.x*m.y-m.x*f.y);isFinite(v)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(v),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(v),a[L].add(x),a[q].add(x),a[_].add(x),l[L].add(p),l[q].add(p),l[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,q=E.length;L<q;++L){let _=E[L],v=_.start,N=_.count;for(let B=v,X=v+N;B<X;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new I,w=new I,D=new I,P=new I;function R(L){D.fromBufferAttribute(s,L),P.copy(D);let q=a[L];M.copy(q),M.sub(D.multiplyScalar(D.dot(q))).normalize(),w.crossVectors(P,q);let v=w.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,v)}for(let L=0,q=E.length;L<q;++L){let _=E[L],v=_.start,N=_.count;for(let B=v,X=v+N;B<X;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uu=new Se,ji=new ra,Eo=new Js,Nu=new I,wo=new I,To=new I,Ao=new I,Pl=new I,Ro=new I,Ou=new I,Co=new I,nt=class extends ze{constructor(t=new He,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Pl.fromBufferAttribute(u,t),o?Ro.addScaledVector(Pl,h):Ro.addScaledVector(Pl.sub(e),h))}e.add(Ro)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(Eo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Eo,Nu)===null||ji.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Uu.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Uu),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],E=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=E,D=M;w<D;w+=3){let P=a.getX(w),R=a.getX(w+1),L=a.getX(w+2);s=Po(this,g,t,i,c,h,u,P,R,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let E=a.getX(p),M=a.getX(p+1),w=a.getX(p+2);s=Po(this,o,t,i,c,h,u,E,M,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],E=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=E,D=M;w<D;w+=3){let P=w,R=w+1,L=w+2;s=Po(this,g,t,i,c,h,u,P,R,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let E=p,M=p+1,w=p+2;s=Po(this,o,t,i,c,h,u,E,M,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function um(n,t,e,i,s,r,o,a){let l;if(t.side===Je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===zi,a),l===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:n}}function Po(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,wo),n.getVertexPosition(l,To),n.getVertexPosition(c,Ao);let h=um(n,t,e,i,wo,To,Ao,Ou);if(h){let u=new I;Ni.getBarycoord(Ou,wo,To,Ao,u),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,u,new ft)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,u,new ft)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Ni.getNormal(wo,To,Ao,d.normal),h.face=d,h.barycoord=u}return h}var Xn=class n extends He{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function m(x,p,g,E,M,w,D,P,R,L,q){let _=w/R,v=D/L,N=w/2,B=D/2,X=P/2,rt=R+1,z=L+1,ht=0,Z=0,yt=new I;for(let Mt=0;Mt<z;Mt++){let St=Mt*v-B;for(let Ht=0;Ht<rt;Ht++){let Ft=Ht*_-N;yt[x]=Ft*E,yt[p]=St*M,yt[g]=X,c.push(yt.x,yt.y,yt.z),yt[x]=0,yt[p]=0,yt[g]=P>0?1:-1,h.push(yt.x,yt.y,yt.z),u.push(Ht/R),u.push(1-Mt/L),ht+=1}}for(let Mt=0;Mt<L;Mt++)for(let St=0;St<R;St++){let Ht=d+St+rt*Mt,Ft=d+St+rt*(Mt+1),et=d+(St+1)+rt*(Mt+1),ut=d+(St+1)+rt*Mt;l.push(Ht,Ft,ut),l.push(Ft,et,ut),Z+=6}a.addGroup(f,Z,q),f+=Z,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function hn(n){let t={};for(let e=0;e<n.length;e++){let i=js(n[e]);for(let s in i)t[s]=i[s]}return t}function fm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ff(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var dm={clone:js,merge:hn},pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ca=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new I,Fu=new ft,Bu=new ft,Ke=class extends ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Bu),e.subVectors(Bu,Fu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Us=-90,Ns=1,Dc=class extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(Us,Ns,t,e);s.layers=this.layers,this.add(s);let r=new Ke(Us,Ns,t,e);r.layers=this.layers,this.add(r);let o=new Ke(Us,Ns,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Us,Ns,t,e);a.layers=this.layers,this.add(a);let l=new Ke(Us,Ns,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Us,Ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ha=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Uc=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Oi});r.uniforms.tEquirect.value=e;let o=new nt(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=Vn),new Dc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Il=new I,gm=new I,_m=new ee,fi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Il.subVectors(i,e).cross(gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||_m.getNormalMatrix(t),s=this.coplanarPoint(Il).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new Js,Io=new I,Br=class{constructor(t=new fi,e=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],p=s[11],g=s[12],E=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,d-c,p-f,w-g).normalize(),i[1].setComponents(l+r,d+c,p+f,w+g).normalize(),i[2].setComponents(l+o,d+h,p+m,w+E).normalize(),i[3].setComponents(l-o,d-h,p-m,w-E).normalize(),i[4].setComponents(l-a,d-u,p-x,w-M).normalize(),e===pi)i[5].setComponents(l+a,d+u,p+x,w+M).normalize();else if(e===ta)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function xm(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qe=class n extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let E=g*d-o;for(let M=0;M<c;M++){let w=M*u-r;m.push(w,-E,0),x.push(0,0,1),p.push(M/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<a;E++){let M=E+c*g,w=E+c*(g+1),D=E+1+c*(g+1),P=E+1+c*g;f.push(M,w,P),f.push(w,D,P)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
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
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Am=`#ifdef USE_BATCHING
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
#endif`,Rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Dm=`#ifdef USE_BUMPMAP
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gm=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wm=`vec3 transformedNormal = objectNormal;
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
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Km=`
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
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
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
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
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
#endif`,_0=`struct PhysicalMaterial {
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
}`,x0=`
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:ym,alphahash_pars_fragment:vm,alphamap_fragment:Mm,alphamap_pars_fragment:Sm,alphatest_fragment:bm,alphatest_pars_fragment:Em,aomap_fragment:wm,aomap_pars_fragment:Tm,batching_pars_vertex:Am,batching_vertex:Rm,begin_vertex:Cm,beginnormal_vertex:Pm,bsdfs:Im,iridescence_fragment:Lm,bumpmap_pars_fragment:Dm,clipping_planes_fragment:Um,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Fm,color_fragment:Bm,color_pars_fragment:km,color_pars_vertex:zm,color_vertex:Hm,common:Gm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Wm,displacementmap_pars_vertex:Xm,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:Zm,colorspace_fragment:$m,colorspace_pars_fragment:Km,envmap_fragment:Jm,envmap_common_pars_fragment:jm,envmap_pars_fragment:Qm,envmap_pars_vertex:t0,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:s0,fog_pars_fragment:r0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:h0,lights_toon_fragment:f0,lights_toon_pars_fragment:d0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:y0,lights_fragment_end:v0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:I0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:U0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:F0,normal_pars_fragment:B0,normal_pars_vertex:k0,normal_vertex:z0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:$0,dithering_fragment:K0,dithering_pars_fragment:J0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:fg,transmission_pars_fragment:dg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:_g,background_vert:xg,background_frag:yg,backgroundCube_vert:vg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:bg,depth_vert:Eg,depth_frag:wg,distanceRGBA_vert:Tg,distanceRGBA_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Ig,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ug,meshlambert_frag:Ng,meshmatcap_vert:Og,meshmatcap_frag:Fg,meshnormal_vert:Bg,meshnormal_frag:kg,meshphong_vert:zg,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:Zg,shadow_frag:$g,sprite_vert:Kg,sprite_frag:Jg},xt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Jn={basic:{uniforms:hn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:hn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:hn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:hn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:hn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:hn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:hn([xt.points,xt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:hn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:hn([xt.common,xt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:hn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:hn([xt.sprite,xt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:hn([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:hn([xt.lights,xt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Jn.physical={uniforms:hn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Lo={r:0,b:0,g:0},ts=new Un,jg=new Se;function Qg(n,t,e,i,s,r,o){let a=new Kt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function x(E){let M=!1,w=m(E);w===null?g(a,l):w&&w.isColor&&(g(w,1),M=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,M){let w=m(M);w&&(w.isCubeTexture||w.mapping===Aa)?(h===void 0&&(h=new nt(new Xn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:js(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(M.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(ts)),h.material.toneMapped=_e.getTransfer(w.colorSpace)!==Pe,(u!==w||d!==w.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new nt(new Qe(2,2),new ti({name:"BackgroundMaterial",uniforms:js(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=_e.getTransfer(w.colorSpace)!==Pe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,M){E.getRGB(Lo,Ff(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,g(a,l)},render:x,addToRenderList:p}}function t_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(_,v,N,B,X){let rt=!1,z=u(B,N,v);r!==z&&(r=z,c(r.object)),rt=f(_,B,N,X),rt&&m(_,B,N,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,w(_,v,N,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,v,N){let B=N.wireframe===!0,X=i[_.id];X===void 0&&(X={},i[_.id]=X);let rt=X[v.id];rt===void 0&&(rt={},X[v.id]=rt);let z=rt[B];return z===void 0&&(z=d(l()),rt[B]=z),z}function d(_){let v=[],N=[],B=[];for(let X=0;X<e;X++)v[X]=0,N[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:N,attributeDivisors:B,object:_,attributes:{},index:null}}function f(_,v,N,B){let X=r.attributes,rt=v.attributes,z=0,ht=N.getAttributes();for(let Z in ht)if(ht[Z].location>=0){let Mt=X[Z],St=rt[Z];if(St===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(St=_.instanceColor)),Mt===void 0||Mt.attribute!==St||St&&Mt.data!==St.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function m(_,v,N,B){let X={},rt=v.attributes,z=0,ht=N.getAttributes();for(let Z in ht)if(ht[Z].location>=0){let Mt=rt[Z];Mt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor));let St={};St.attribute=Mt,Mt&&Mt.data&&(St.data=Mt.data),X[Z]=St,z++}r.attributes=X,r.attributesNum=z,r.index=B}function x(){let _=r.newAttributes;for(let v=0,N=_.length;v<N;v++)_[v]=0}function p(_){g(_,0)}function g(_,v){let N=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;N[_]=1,B[_]===0&&(n.enableVertexAttribArray(_),B[_]=1),X[_]!==v&&(n.vertexAttribDivisor(_,v),X[_]=v)}function E(){let _=r.newAttributes,v=r.enabledAttributes;for(let N=0,B=v.length;N<B;N++)v[N]!==_[N]&&(n.disableVertexAttribArray(N),v[N]=0)}function M(_,v,N,B,X,rt,z){z===!0?n.vertexAttribIPointer(_,v,N,X,rt):n.vertexAttribPointer(_,v,N,B,X,rt)}function w(_,v,N,B){x();let X=B.attributes,rt=N.getAttributes(),z=v.defaultAttributeValues;for(let ht in rt){let Z=rt[ht];if(Z.location>=0){let yt=X[ht];if(yt===void 0&&(ht==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),ht==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),yt!==void 0){let Mt=yt.normalized,St=yt.itemSize,Ht=t.get(yt);if(Ht===void 0)continue;let Ft=Ht.buffer,et=Ht.type,ut=Ht.bytesPerElement,Rt=et===n.INT||et===n.UNSIGNED_INT||yt.gpuType===_h;if(yt.isInterleavedBufferAttribute){let gt=yt.data,Wt=gt.stride,zt=yt.offset;if(gt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Z.locationSize;Xt++)g(Z.location+Xt,gt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xt=0;Xt<Z.locationSize;Xt++)p(Z.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let Xt=0;Xt<Z.locationSize;Xt++)M(Z.location+Xt,St/Z.locationSize,et,Mt,Wt*ut,(zt+St/Z.locationSize*Xt)*ut,Rt)}else{if(yt.isInstancedBufferAttribute){for(let gt=0;gt<Z.locationSize;gt++)g(Z.location+gt,yt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let gt=0;gt<Z.locationSize;gt++)p(Z.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let gt=0;gt<Z.locationSize;gt++)M(Z.location+gt,St/Z.locationSize,et,Mt,St*ut,St/Z.locationSize*gt*ut,Rt)}}else if(z!==void 0){let Mt=z[ht];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(Z.location,Mt);break;case 3:n.vertexAttrib3fv(Z.location,Mt);break;case 4:n.vertexAttrib4fv(Z.location,Mt);break;default:n.vertexAttrib1fv(Z.location,Mt)}}}}E()}function D(){L();for(let _ in i){let v=i[_];for(let N in v){let B=v[N];for(let X in B)h(B[X].object),delete B[X];delete v[N]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;let v=i[_.id];for(let N in v){let B=v[N];for(let X in B)h(B[X].object),delete B[X];delete v[N]}delete i[_.id]}function R(_){for(let v in i){let N=i[v];if(N[_.id]===void 0)continue;let B=N[_.id];for(let X in B)h(B[X].object),delete B[X];delete N[_.id]}}function L(){q(),o=!0,r!==s&&(r=s,c(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:q,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function e_(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];for(let x=0;x<d.length;x++)e.update(m,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function n_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let L=R===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==gi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:D,maxSamples:P}}function i_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new fi,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=n.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let E=r?0:i,M=E*4,w=g.clippingState||null;l.value=w,w=h(m,d,M,f);for(let D=0;D!==M;++D)w[D]=e[D];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,w=f;M!==x;++M,w+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function s_(n){let t=new WeakMap;function e(o,a){return a===Ql?o.mapping=Ys:a===tc&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ql||a===tc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Uc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ua=class extends ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hs=4,ku=[.125,.215,.35,.446,.526,.582],ss=20,Ll=new ua,zu=new Kt,Dl=null,Ul=0,Nl=0,Ol=!1,ns=(1+Math.sqrt(5))/2,Os=1/ns,Hu=[new I(-ns,Os,0),new I(ns,Os,0),new I(-Os,0,ns),new I(Os,0,ns),new I(0,ns,-Os),new I(0,ns,Os),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dl,Ul,Nl),this._renderer.xr.enabled=Ol,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Zr,format:Wn,colorSpace:Vi,depthBuffer:!1},s=Gu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r_(r)),this._blurMaterial=o_(r,t,e)}return s}_compileMaterial(t){let e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,i,s){let a=new Ke(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zu),h.toneMapping=Bi,h.autoClear=!1;let f=new ye({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new nt(new Xn,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(zu),x=!0);for(let g=0;g<6;g++){let E=g%3;E===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):E===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let M=this._cubeSize;Do(s,E*M,g>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ys||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Do(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ll)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hu[(s-r-1)%Hu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new nt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ss-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):ss;p>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ss}`);let g=[],E=0;for(let R=0;R<ss;++R){let L=R/x,q=Math.exp(-L*L/2);g.push(q),R===0?E+=q:R<p&&(E+=2*q)}for(let R=0;R<g.length;R++)g[R]=g[R]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;let w=this._sizeLods[s],D=3*w*(s>M-Hs?s-M+Hs:0),P=4*(this._cubeSize-w);Do(e,D,P,3*w,2*w),l.setRenderTarget(e),l.render(u,Ll)}};function r_(n){let t=[],e=[],i=[],s=n,r=n-Hs+1+ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Hs?l=ku[o-n+Hs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,p=2,g=1,E=new Float32Array(x*m*f),M=new Float32Array(p*m*f),w=new Float32Array(g*m*f);for(let P=0;P<f;P++){let R=P%3*2/3-1,L=P>2?0:-1,q=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(q,x*m*P),M.set(d,p*m*P);let _=[P,P,P,P,P,P];w.set(_,g*m*P)}let D=new He;D.setAttribute("position",new je(E,x)),D.setAttribute("uv",new je(M,p)),D.setAttribute("faceIndex",new je(w,g)),t.push(D),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gu(n,t,e){let i=new _i(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function o_(n,t,e){let i=new Float32Array(ss),s=new I(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Vu(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Wu(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function a_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ql||l===tc,h=l===Ys||l===Zs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Qs(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Qs(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function l_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$o("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function c_(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let M=0,w=E.length;M<w;M+=3){let D=E[M+0],P=E[M+1],R=E[M+2];d.push(D,P,P,R,R,D)}}else if(m!==void 0){let E=m.array;x=m.version;for(let M=0,w=E.length/3-1;M<w;M+=3){let D=M+0,P=M+1,R=M+2;d.push(D,P,P,R,R,D)}}else return;let p=new(Nf(d)?la:aa)(d,1);p.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function h_(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*o,m),e.update(f,i,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,i,1)}function u(d,f,m,x){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,m);let g=0;for(let E=0;E<m;E++)g+=f[E];for(let E=0;E<x.length;E++)e.update(g,i,x[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function u_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function f_(n,t,e){let i=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let q=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let w=a.attributes.position.count*M,D=1;w>t.maxTextureSize&&(D=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let P=new Float32Array(w*D*4*u),R=new sa(P,w,D,u);R.type=di,R.needsUpdate=!0;let L=M*4;for(let _=0;_<u;_++){let v=p[_],N=g[_],B=E[_],X=w*D*4*_;for(let rt=0;rt<v.count;rt++){let z=rt*L;f===!0&&(s.fromBufferAttribute(v,rt),P[X+z+0]=s.x,P[X+z+1]=s.y,P[X+z+2]=s.z,P[X+z+3]=0),m===!0&&(s.fromBufferAttribute(N,rt),P[X+z+4]=s.x,P[X+z+5]=s.y,P[X+z+6]=s.z,P[X+z+7]=0),x===!0&&(s.fromBufferAttribute(B,rt),P[X+z+8]=s.x,P[X+z+9]=s.y,P[X+z+10]=s.z,P[X+z+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ft(w,D)},i.set(a,d),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function d_(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var fa=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h=Vs){if(h!==Vs&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vs&&(i=as),i===void 0&&h===Ks&&(i=$s),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},kf=new Rn,Xu=new fa(1,1),zf=new sa,Hf=new Lc,Gf=new ha,qu=[],Yu=[],Zu=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function rr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ca(n,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function p_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function m_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function __(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function x_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Ku.set(i),n.uniformMatrix2fv(this.addr,!1,Ku),Ye(e,i)}}function y_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Ye(e,i)}}function v_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),Ye(e,i)}}function M_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function w_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function T_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function A_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function C_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xu.compareFunction=Uf,r=Xu):r=kf,e.setTexture2D(t||r,s)}function P_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hf,s)}function I_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gf,s)}function L_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||zf,s)}function D_(n){switch(n){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return y_;case 35676:return v_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return b_;case 35669:case 35673:return E_;case 5125:return w_;case 36294:return T_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return L_}}function U_(n,t){n.uniform1fv(this.addr,t)}function N_(n,t){let e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function O_(n,t){let e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function F_(n,t){let e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function B_(n,t){let e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function k_(n,t){let e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function z_(n,t){let e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function H_(n,t){n.uniform1iv(this.addr,t)}function G_(n,t){n.uniform2iv(this.addr,t)}function V_(n,t){n.uniform3iv(this.addr,t)}function W_(n,t){n.uniform4iv(this.addr,t)}function X_(n,t){n.uniform1uiv(this.addr,t)}function q_(n,t){n.uniform2uiv(this.addr,t)}function Y_(n,t){n.uniform3uiv(this.addr,t)}function Z_(n,t){n.uniform4uiv(this.addr,t)}function $_(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||kf,r[o])}function K_(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hf,r[o])}function J_(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gf,r[o])}function j_(n,t,e){let i=this.cache,s=t.length,r=Ca(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zf,r[o])}function Q_(n){switch(n){case 5126:return U_;case 35664:return N_;case 35665:return O_;case 35666:return F_;case 35674:return B_;case 35675:return k_;case 35676:return z_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return j_}}var Nc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=D_(e.type)}},Oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q_(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Fl=/(\w+)(\])?(\[|\.)?/g;function Ju(n,t){n.seq.push(t),n.map[t.id]=t}function tx(n,t,e){let i=n.name,s=i.length;for(Fl.lastIndex=0;;){let r=Fl.exec(i),o=Fl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ju(e,c===void 0?new Nc(a,n,t):new Oc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Fc(a),Ju(e,u)),e=u}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);tx(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ju(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ex=37297,nx=0;function ix(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function sx(n){let t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(n),i;switch(t===e?i="":t===Qo&&e===jo?i="LinearDisplayP3ToLinearSRGB":t===jo&&e===Qo&&(i="LinearSRGBToLinearDisplayP3"),n){case Vi:case Ra:return[i,"LinearTransferOETF"];case yn:case bh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Qu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ix(n.getShaderSource(t),o)}else return s}function rx(n,t){let e=sx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ox(n,t){let e;switch(t){case Ip:e="Linear";break;case Lp:e="Reinhard";break;case Dp:e="Cineon";break;case gh:e="ACESFilmic";break;case Np:e="AgX";break;case Op:e="Neutral";break;case Up:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uo=new I;function ax(){_e.getLuminanceCoefficients(Uo);let n=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function cx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function tf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ef(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(ux,dx)}var fx=new Map;function dx(n,t){let e=te[t];if(e===void 0){let i=fx.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}var px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(px,mx)}function mx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function _x(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case Zs:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xx(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Zs&&(t="ENVMAP_MODE_REFRACTION"),t}function yx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mf:t="ENVMAP_BLENDING_MULTIPLY";break;case Cp:t="ENVMAP_BLENDING_MIX";break;case Pp:t="ENVMAP_BLENDING_ADD";break}return t}function vx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Mx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=gx(e),c=_x(e),h=xx(e),u=yx(e),d=vx(e),f=lx(e),m=cx(r),x=s.createProgram(),p,g,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Lr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Lr).join(`
`),g.length>0&&(g+=`
`)):(p=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),g=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?te.tonemapping_pars_fragment:"",e.toneMapping!==Bi?ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,rx("linearToOutputTexel",e.outputColorSpace),ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Bc(o),o=tf(o,e),o=ef(o,e),a=Bc(a),a=tf(a,e),a=ef(a,e),o=nf(o),a=nf(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=E+p+o,w=E+g+a,D=ju(s,s.VERTEX_SHADER,M),P=ju(s,s.FRAGMENT_SHADER,w);s.attachShader(x,D),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(v){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(P).trim(),rt=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,P);else{let ht=Qu(s,D,"vertex"),Z=Qu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+N+`
`+ht+`
`+Z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||X==="")&&(z=!1);z&&(v.diagnostics={runnable:rt,programLog:N,vertexShader:{log:B,prefix:p},fragmentShader:{log:X,prefix:g}})}s.deleteShader(D),s.deleteShader(P),L=new Xs(s,x),q=hx(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let q;this.getAttributes=function(){return q===void 0&&R(this),q};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,ex)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=P,this}var Sx=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zc(t),e.set(t,i)),i}},zc=class{constructor(t){this.id=Sx++,this.code=t,this.usedTimes=0}};function bx(n,t,e,i,s,r,o){let a=new oa,l=new kc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,v,N,B,X){let rt=B.fog,z=X.geometry,ht=_.isMeshStandardMaterial?B.environment:null,Z=(_.isMeshStandardMaterial?e:t).get(_.envMap||ht),yt=Z&&Z.mapping===Aa?Z.image.height:null,Mt=x[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ht=St!==void 0?St.length:0,Ft=0;z.morphAttributes.position!==void 0&&(Ft=1),z.morphAttributes.normal!==void 0&&(Ft=2),z.morphAttributes.color!==void 0&&(Ft=3);let et,ut,Rt,gt;if(Mt){let xn=Jn[Mt];et=xn.vertexShader,ut=xn.fragmentShader}else et=_.vertexShader,ut=_.fragmentShader,l.update(_),Rt=l.getVertexShaderID(_),gt=l.getFragmentShaderID(_);let Wt=n.getRenderTarget(),zt=X.isInstancedMesh===!0,Xt=X.isBatchedMesh===!0,jt=!!_.map,C=!!_.matcap,S=!!Z,H=!!_.aoMap,G=!!_.lightMap,V=!!_.bumpMap,K=!!_.normalMap,ot=!!_.displacementMap,it=!!_.emissiveMap,T=!!_.metalnessMap,y=!!_.roughnessMap,k=_.anisotropy>0,Q=_.clearcoat>0,st=_.dispersion>0,tt=_.iridescence>0,It=_.sheen>0,pt=_.transmission>0,vt=k&&!!_.anisotropyMap,Qt=Q&&!!_.clearcoatMap,ct=Q&&!!_.clearcoatNormalMap,bt=Q&&!!_.clearcoatRoughnessMap,qt=tt&&!!_.iridescenceMap,$t=tt&&!!_.iridescenceThicknessMap,Dt=It&&!!_.sheenColorMap,le=It&&!!_.sheenRoughnessMap,Jt=!!_.specularMap,we=!!_.specularColorMap,U=!!_.specularIntensityMap,Ct=pt&&!!_.transmissionMap,J=pt&&!!_.thicknessMap,at=!!_.gradientMap,Et=!!_.alphaMap,Pt=_.alphaTest>0,ce=!!_.alphaHash,Ve=!!_.extensions,_n=Bi;_.toneMapped&&(Wt===null||Wt.isXRRenderTarget===!0)&&(_n=n.toneMapping);let fe={shaderID:Mt,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:ut,defines:_.defines,customVertexShaderID:Rt,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Xt,batchingColor:Xt&&X._colorsTexture!==null,instancing:zt,instancingColor:zt&&X.instanceColor!==null,instancingMorph:zt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Wt===null?n.outputColorSpace:Wt.isXRRenderTarget===!0?Wt.texture.colorSpace:Vi,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:C,envMap:S,envMapMode:S&&Z.mapping,envMapCubeUVHeight:yt,aoMap:H,lightMap:G,bumpMap:V,normalMap:K,displacementMap:f&&ot,emissiveMap:it,normalMapObjectSpace:K&&_.normalMapType===zp,normalMapTangentSpace:K&&_.normalMapType===Df,metalnessMap:T,roughnessMap:y,anisotropy:k,anisotropyMap:vt,clearcoat:Q,clearcoatMap:Qt,clearcoatNormalMap:ct,clearcoatRoughnessMap:bt,dispersion:st,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:$t,sheen:It,sheenColorMap:Dt,sheenRoughnessMap:le,specularMap:Jt,specularColorMap:we,specularIntensityMap:U,transmission:pt,transmissionMap:Ct,thicknessMap:J,gradientMap:at,opaque:_.transparent===!1&&_.blending===Fi&&_.alphaToCoverage===!1,alphaMap:Et,alphaTest:Pt,alphaHash:ce,combine:_.combine,mapUv:jt&&p(_.map.channel),aoMapUv:H&&p(_.aoMap.channel),lightMapUv:G&&p(_.lightMap.channel),bumpMapUv:V&&p(_.bumpMap.channel),normalMapUv:K&&p(_.normalMap.channel),displacementMapUv:ot&&p(_.displacementMap.channel),emissiveMapUv:it&&p(_.emissiveMap.channel),metalnessMapUv:T&&p(_.metalnessMap.channel),roughnessMapUv:y&&p(_.roughnessMap.channel),anisotropyMapUv:vt&&p(_.anisotropyMap.channel),clearcoatMapUv:Qt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&p(_.sheenRoughnessMap.channel),specularMapUv:Jt&&p(_.specularMap.channel),specularColorMapUv:we&&p(_.specularColorMap.channel),specularIntensityMapUv:U&&p(_.specularIntensityMap.channel),transmissionMapUv:Ct&&p(_.transmissionMap.channel),thicknessMapUv:J&&p(_.thicknessMap.channel),alphaMapUv:Et&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(K||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(jt||Et),fog:!!rt,useFog:_.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:_n,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&_e.getTransfer(_.map.colorSpace)===Pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ve&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&_.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function E(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)v.push(N),v.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(M(v,_),w(v,_),v.push(n.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function M(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function w(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function D(_){let v=x[_.type],N;if(v){let B=Jn[v];N=dm.clone(B.uniforms)}else N=_.uniforms;return N}function P(_,v){let N;for(let B=0,X=h.length;B<X;B++){let rt=h[B];if(rt.cacheKey===v){N=rt,++N.usedTimes;break}}return N===void 0&&(N=new Mx(n,v,_,r),h.push(N)),N}function R(_){if(--_.usedTimes===0){let v=h.indexOf(_);h[v]=h[h.length-1],h.pop(),_.destroy()}}function L(_){l.remove(_)}function q(){l.dispose()}return{getParameters:g,getProgramCacheKey:E,getUniforms:D,acquireProgram:P,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:q}}function Ex(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function wx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function rf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function of(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,m,x,p){let g=n[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},n[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),t++,g}function a(u,d,f,m,x,p){let g=o(u,d,f,m,x,p);f.transmission>0?i.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(u,d,f,m,x,p){let g=o(u,d,f,m,x,p);f.transmission>0?i.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||wx),i.length>1&&i.sort(d||rf),s.length>1&&s.sort(d||rf)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Tx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new of,n.set(i,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ax(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Kt};break;case"SpotLight":e={position:new I,direction:new I,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Rx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Cx=0;function Px(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ix(n){let t=new Ax,e=Rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Se,o=new Se;function a(c){let h=0,u=0,d=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,E=0,M=0,w=0,D=0,P=0,R=0;c.sort(Px);for(let q=0,_=c.length;q<_;q++){let v=c[q],N=v.color,B=v.intensity,X=v.distance,rt=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=N.r*B,u+=N.g*B,d+=N.b*B;else if(v.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(v.sh.coefficients[z],B);R++}else if(v.isDirectionalLight){let z=t.get(v);if(z.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let ht=v.shadow,Z=e.get(v);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=rt,i.directionalShadowMatrix[f]=v.shadow.matrix,E++}i.directional[f]=z,f++}else if(v.isSpotLight){let z=t.get(v);z.position.setFromMatrixPosition(v.matrixWorld),z.color.copy(N).multiplyScalar(B),z.distance=X,z.coneCos=Math.cos(v.angle),z.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),z.decay=v.decay,i.spot[x]=z;let ht=v.shadow;if(v.map&&(i.spotLightMap[D]=v.map,D++,ht.updateMatrices(v),v.castShadow&&P++),i.spotLightMatrix[x]=ht.matrix,v.castShadow){let Z=e.get(v);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=rt,w++}x++}else if(v.isRectAreaLight){let z=t.get(v);z.color.copy(N).multiplyScalar(B),z.halfWidth.set(v.width*.5,0,0),z.halfHeight.set(0,v.height*.5,0),i.rectArea[p]=z,p++}else if(v.isPointLight){let z=t.get(v);if(z.color.copy(v.color).multiplyScalar(v.intensity),z.distance=v.distance,z.decay=v.decay,v.castShadow){let ht=v.shadow,Z=e.get(v);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,Z.shadowCameraNear=ht.camera.near,Z.shadowCameraFar=ht.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=rt,i.pointShadowMatrix[m]=v.shadow.matrix,M++}i.point[m]=z,m++}else if(v.isHemisphereLight){let z=t.get(v);z.skyColor.copy(v.color).multiplyScalar(B),z.groundColor.copy(v.groundColor).multiplyScalar(B),i.hemi[g]=z,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==g||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==w||L.numSpotMaps!==D||L.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+D-P,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=g,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=w,L.numSpotMaps=D,L.numLightProbes=R,i.version=Cx++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=h.matrixWorldInverse;for(let g=0,E=c.length;g<E;g++){let M=c[g];if(M.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(M.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(M.isRectAreaLight){let w=i.rectArea[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function af(n){let t=new Ix(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Lx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new af(n),t.set(s,[a])):r>=o.length?(a=new af(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hc=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gc=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Nx(n,t,e){let i=new Br,s=new ft,r=new ft,o=new Me,a=new Hc({depthPacking:kp}),l=new Gc,c={},h=e.maxTextureSize,u={[zi]:Je,[Je]:zi,[un]:un},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Dx,fragmentShader:Ux}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new He;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let g=this.type;this.render=function(P,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let q=n.getRenderTarget(),_=n.getActiveCubeFace(),v=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Oi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=g!==ui&&this.type===ui,X=g===ui&&this.type!==ui;for(let rt=0,z=P.length;rt<z;rt++){let ht=P[rt],Z=ht.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let yt=Z.getFrameExtents();if(s.multiply(yt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,Z.mapSize.y=r.y)),Z.map===null||B===!0||X===!0){let St=this.type!==ui?{minFilter:Dn,magFilter:Dn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new _i(s.x,s.y,St),Z.map.texture.name=ht.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let Mt=Z.getViewportCount();for(let St=0;St<Mt;St++){let Ht=Z.getViewport(St);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),N.viewport(o),Z.updateMatrices(ht,St),i=Z.getFrustum(),w(R,L,Z.camera,ht,this.type)}Z.isPointLightShadow!==!0&&this.type===ui&&E(Z,L),Z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(q,_,v)};function E(P,R){let L=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,L,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,L,f,x,null)}function M(P,R,L,q){let _=null,v=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(v!==void 0)_=v;else if(_=L.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let N=_.uuid,B=R.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let rt=X[B];rt===void 0&&(rt=_.clone(),X[B]=rt,R.addEventListener("dispose",D)),_=rt}if(_.visible=R.visible,_.wireframe=R.wireframe,q===ui?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=n.properties.get(_);N.light=L}return _}function w(P,R,L,q,_){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===ui)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);let B=t.update(P),X=P.material;if(Array.isArray(X)){let rt=B.groups;for(let z=0,ht=rt.length;z<ht;z++){let Z=rt[z],yt=X[Z.materialIndex];if(yt&&yt.visible){let Mt=M(P,yt,q,_);P.onBeforeShadow(n,P,R,L,B,Mt,Z),n.renderBufferDirect(L,null,B,Mt,P,Z),P.onAfterShadow(n,P,R,L,B,Mt,Z)}}}else if(X.visible){let rt=M(P,X,q,_);P.onBeforeShadow(n,P,R,L,B,rt,null),n.renderBufferDirect(L,null,B,rt,P,null),P.onAfterShadow(n,P,R,L,B,rt,null)}}let N=P.children;for(let B=0,X=N.length;B<X;B++)w(N[B],R,L,q,_)}function D(P){P.target.removeEventListener("dispose",D);for(let L in c){let q=c[L],_=P.target.uuid;_ in q&&(q[_].dispose(),delete q[_])}}}var Ox={[ql]:Yl,[Zl]:Jl,[$l]:jl,[qs]:Kl,[Yl]:ql,[Jl]:Zl,[jl]:$l,[Kl]:qs};function Fx(n){function t(){let U=!1,Ct=new Me,J=null,at=new Me(0,0,0,0);return{setMask:function(Et){J!==Et&&!U&&(n.colorMask(Et,Et,Et,Et),J=Et)},setLocked:function(Et){U=Et},setClear:function(Et,Pt,ce,Ve,_n){_n===!0&&(Et*=Ve,Pt*=Ve,ce*=Ve),Ct.set(Et,Pt,ce,Ve),at.equals(Ct)===!1&&(n.clearColor(Et,Pt,ce,Ve),at.copy(Ct))},reset:function(){U=!1,J=null,at.set(-1,0,0,0)}}}function e(){let U=!1,Ct=!1,J=null,at=null,Et=null;return{setReversed:function(Pt){Ct=Pt},setTest:function(Pt){Pt?Rt(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(Pt){J!==Pt&&!U&&(n.depthMask(Pt),J=Pt)},setFunc:function(Pt){if(Ct&&(Pt=Ox[Pt]),at!==Pt){switch(Pt){case ql:n.depthFunc(n.NEVER);break;case Yl:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case $l:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case Jl:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=Pt}},setLocked:function(Pt){U=Pt},setClear:function(Pt){Et!==Pt&&(n.clearDepth(Pt),Et=Pt)},reset:function(){U=!1,J=null,at=null,Et=null}}}function i(){let U=!1,Ct=null,J=null,at=null,Et=null,Pt=null,ce=null,Ve=null,_n=null;return{setTest:function(fe){U||(fe?Rt(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(fe){Ct!==fe&&!U&&(n.stencilMask(fe),Ct=fe)},setFunc:function(fe,xn,ri){(J!==fe||at!==xn||Et!==ri)&&(n.stencilFunc(fe,xn,ri),J=fe,at=xn,Et=ri)},setOp:function(fe,xn,ri){(Pt!==fe||ce!==xn||Ve!==ri)&&(n.stencilOp(fe,xn,ri),Pt=fe,ce=xn,Ve=ri)},setLocked:function(fe){U=fe},setClear:function(fe){_n!==fe&&(n.clearStencil(fe),_n=fe)},reset:function(){U=!1,Ct=null,J=null,at=null,Et=null,Pt=null,ce=null,Ve=null,_n=null}}}let s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,m=!1,x=null,p=null,g=null,E=null,M=null,w=null,D=null,P=new Kt(0,0,0),R=0,L=!1,q=null,_=null,v=null,N=null,B=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,z=0,ht=n.getParameter(n.VERSION);ht.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ht)[1]),rt=z>=1):ht.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),rt=z>=2);let Z=null,yt={},Mt=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Ht=new Me().fromArray(Mt),Ft=new Me().fromArray(St);function et(U,Ct,J,at){let Et=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(U,Pt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<J;ce++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(Ct+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return Pt}let ut={};ut[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),ut[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ut[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Rt(n.DEPTH_TEST),r.setFunc(qs),G(!1),V(pu),Rt(n.CULL_FACE),S(Oi);function Rt(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function gt(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Wt(U,Ct){return h[U]!==Ct?(n.bindFramebuffer(U,Ct),h[U]=Ct,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ct),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function zt(U,Ct){let J=d,at=!1;if(U){J=u.get(Ct),J===void 0&&(J=[],u.set(Ct,J));let Et=U.textures;if(J.length!==Et.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Pt=0,ce=Et.length;Pt<ce;Pt++)J[Pt]=n.COLOR_ATTACHMENT0+Pt;J.length=Et.length,at=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,at=!0);at&&n.drawBuffers(J)}function Xt(U){return f!==U?(n.useProgram(U),f=U,!0):!1}let jt={[is]:n.FUNC_ADD,[fp]:n.FUNC_SUBTRACT,[dp]:n.FUNC_REVERSE_SUBTRACT};jt[pp]=n.MIN,jt[mp]=n.MAX;let C={[gp]:n.ZERO,[_p]:n.ONE,[xp]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[Ep]:n.SRC_ALPHA_SATURATE,[Sp]:n.DST_COLOR,[vp]:n.DST_ALPHA,[yp]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[bp]:n.ONE_MINUS_DST_COLOR,[Mp]:n.ONE_MINUS_DST_ALPHA,[wp]:n.CONSTANT_COLOR,[Tp]:n.ONE_MINUS_CONSTANT_COLOR,[Ap]:n.CONSTANT_ALPHA,[Rp]:n.ONE_MINUS_CONSTANT_ALPHA};function S(U,Ct,J,at,Et,Pt,ce,Ve,_n,fe){if(U===Oi){m===!0&&(gt(n.BLEND),m=!1);return}if(m===!1&&(Rt(n.BLEND),m=!0),U!==up){if(U!==x||fe!==L){if((p!==is||M!==is)&&(n.blendEquation(n.FUNC_ADD),p=is,M=is),fe)switch(U){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fn:n.blendFunc(n.ONE,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,E=null,w=null,D=null,P.set(0,0,0),R=0,x=U,L=fe}return}Et=Et||Ct,Pt=Pt||J,ce=ce||at,(Ct!==p||Et!==M)&&(n.blendEquationSeparate(jt[Ct],jt[Et]),p=Ct,M=Et),(J!==g||at!==E||Pt!==w||ce!==D)&&(n.blendFuncSeparate(C[J],C[at],C[Pt],C[ce]),g=J,E=at,w=Pt,D=ce),(Ve.equals(P)===!1||_n!==R)&&(n.blendColor(Ve.r,Ve.g,Ve.b,_n),P.copy(Ve),R=_n),x=U,L=!1}function H(U,Ct){U.side===un?gt(n.CULL_FACE):Rt(n.CULL_FACE);let J=U.side===Je;Ct&&(J=!J),G(J),U.blending===Fi&&U.transparent===!1?S(Oi):S(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let at=U.stencilWrite;o.setTest(at),at&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Rt(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){q!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),q=U)}function V(U){U!==lp?(Rt(n.CULL_FACE),U!==_&&(U===pu?n.cullFace(n.BACK):U===cp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),_=U}function K(U){U!==v&&(rt&&n.lineWidth(U),v=U)}function ot(U,Ct,J){U?(Rt(n.POLYGON_OFFSET_FILL),(N!==Ct||B!==J)&&(n.polygonOffset(Ct,J),N=Ct,B=J)):gt(n.POLYGON_OFFSET_FILL)}function it(U){U?Rt(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function T(U){U===void 0&&(U=n.TEXTURE0+X-1),Z!==U&&(n.activeTexture(U),Z=U)}function y(U,Ct,J){J===void 0&&(Z===null?J=n.TEXTURE0+X-1:J=Z);let at=yt[J];at===void 0&&(at={type:void 0,texture:void 0},yt[J]=at),(at.type!==U||at.texture!==Ct)&&(Z!==J&&(n.activeTexture(J),Z=J),n.bindTexture(U,Ct||ut[U]),at.type=U,at.texture=Ct)}function k(){let U=yt[Z];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $t(U){Ht.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ht.copy(U))}function Dt(U){Ft.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ft.copy(U))}function le(U,Ct){let J=l.get(Ct);J===void 0&&(J=new WeakMap,l.set(Ct,J));let at=J.get(U);at===void 0&&(at=n.getUniformBlockIndex(Ct,U.name),J.set(U,at))}function Jt(U,Ct){let at=l.get(Ct).get(U);a.get(Ct)!==at&&(n.uniformBlockBinding(Ct,at,U.__bindingPointIndex),a.set(Ct,at))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Z=null,yt={},h={},u=new WeakMap,d=[],f=null,m=!1,x=null,p=null,g=null,E=null,M=null,w=null,D=null,P=new Kt(0,0,0),R=0,L=!1,q=null,_=null,v=null,N=null,B=null,Ht.set(0,0,n.canvas.width,n.canvas.height),Ft.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Rt,disable:gt,bindFramebuffer:Wt,drawBuffers:zt,useProgram:Xt,setBlending:S,setMaterial:H,setFlipSided:G,setCullFace:V,setLineWidth:K,setPolygonOffset:ot,setScissorTest:it,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:st,texImage2D:bt,texImage3D:qt,updateUBOMapping:le,uniformBlockBinding:Jt,texStorage2D:Qt,texStorage3D:ct,texSubImage2D:tt,texSubImage3D:It,compressedTexSubImage2D:pt,compressedTexSubImage3D:vt,scissor:$t,viewport:Dt,reset:we}}function lf(n,t,e,i){let s=Bx(i);switch(e){case Tf:return n*t;case Rf:return n*t;case Cf:return n*t*2;case Pf:return n*t/s.components*s.byteLength;case vh:return n*t/s.components*s.byteLength;case If:return n*t*2/s.components*s.byteLength;case Mh:return n*t*2/s.components*s.byteLength;case Af:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case Sh:return n*t*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zo:case bc:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Lf:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bx(n){switch(n){case gi:case bf:return{byteLength:1,components:1};case Fr:case Ef:case Zr:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case as:case _h:case di:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return f?new OffscreenCanvas(T,y):na("canvas")}function x(T,y,k){let Q=1,st=it(T);if((st.width>k||st.height>k)&&(Q=k/Math.max(st.width,st.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let tt=Math.floor(Q*st.width),It=Math.floor(Q*st.height);u===void 0&&(u=m(tt,It));let pt=y?m(tt,It):u;return pt.width=tt,pt.height=It,pt.getContext("2d").drawImage(T,0,0,tt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+It+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Dn&&T.minFilter!==Vn}function g(T){n.generateMipmap(T)}function E(T,y,k,Q,st=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let tt=y;if(y===n.RED&&(k===n.FLOAT&&(tt=n.R32F),k===n.HALF_FLOAT&&(tt=n.R16F),k===n.UNSIGNED_BYTE&&(tt=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.R8UI),k===n.UNSIGNED_SHORT&&(tt=n.R16UI),k===n.UNSIGNED_INT&&(tt=n.R32UI),k===n.BYTE&&(tt=n.R8I),k===n.SHORT&&(tt=n.R16I),k===n.INT&&(tt=n.R32I)),y===n.RG&&(k===n.FLOAT&&(tt=n.RG32F),k===n.HALF_FLOAT&&(tt=n.RG16F),k===n.UNSIGNED_BYTE&&(tt=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RG8UI),k===n.UNSIGNED_SHORT&&(tt=n.RG16UI),k===n.UNSIGNED_INT&&(tt=n.RG32UI),k===n.BYTE&&(tt=n.RG8I),k===n.SHORT&&(tt=n.RG16I),k===n.INT&&(tt=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),k===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),k===n.UNSIGNED_INT&&(tt=n.RGB32UI),k===n.BYTE&&(tt=n.RGB8I),k===n.SHORT&&(tt=n.RGB16I),k===n.INT&&(tt=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),k===n.UNSIGNED_INT&&(tt=n.RGBA32UI),k===n.BYTE&&(tt=n.RGBA8I),k===n.SHORT&&(tt=n.RGBA16I),k===n.INT&&(tt=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),y===n.RGBA){let It=st?Jo:_e.getTransfer(Q);k===n.FLOAT&&(tt=n.RGBA32F),k===n.HALF_FLOAT&&(tt=n.RGBA16F),k===n.UNSIGNED_BYTE&&(tt=It===Pe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(T,y){let k;return T?y===null||y===as||y===$s?k=n.DEPTH24_STENCIL8:y===di?k=n.DEPTH32F_STENCIL8:y===Fr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===as||y===$s?k=n.DEPTH_COMPONENT24:y===di?k=n.DEPTH_COMPONENT32F:y===Fr&&(k=n.DEPTH_COMPONENT16),k}function w(T,y){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dn&&T.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function D(T){let y=T.target;y.removeEventListener("dispose",D),R(y),y.isVideoTexture&&h.delete(y)}function P(T){let y=T.target;y.removeEventListener("dispose",P),q(y)}function R(T){let y=i.get(T);if(y.__webglInit===void 0)return;let k=T.source,Q=d.get(k);if(Q){let st=Q[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&L(T),Object.keys(Q).length===0&&d.delete(k)}i.remove(T)}function L(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let k=T.source,Q=d.get(k);delete Q[y.__cacheKey],o.memory.textures--}function q(T){let y=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let st=0;st<y.__webglFramebuffer[Q].length;st++)n.deleteFramebuffer(y.__webglFramebuffer[Q][st]);else n.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=T.textures;for(let Q=0,st=k.length;Q<st;Q++){let tt=i.get(k[Q]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(T)}let _=0;function v(){_=0}function N(){let T=_;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),_+=1,T}function B(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function X(T,y){let k=i.get(T);if(T.isVideoTexture&&K(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(k,T,y);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function rt(T,y){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Ft(k,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function z(T,y){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Ft(k,T,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function ht(T,y){let k=i.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let Z={[Or]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},yt={[Dn]:n.NEAREST,[Fp]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},Mt={[Hp]:n.NEVER,[Yp]:n.ALWAYS,[Gp]:n.LESS,[Uf]:n.LEQUAL,[Vp]:n.EQUAL,[qp]:n.GEQUAL,[Wp]:n.GREATER,[Xp]:n.NOTEQUAL};function St(T,y){if(y.type===di&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===al||y.magFilter===po||y.magFilter===os||y.minFilter===Vn||y.minFilter===al||y.minFilter===po||y.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Z[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,yt[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dn||y.minFilter!==po&&y.minFilter!==os||y.type===di&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ht(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",D));let Q=y.source,st=d.get(Q);st===void 0&&(st={},d.set(Q,st));let tt=B(y);if(tt!==T.__cacheKey){st[tt]===void 0&&(st[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),st[tt].usedTimes++;let It=st[T.__cacheKey];It!==void 0&&(st[T.__cacheKey].usedTimes--,It.usedTimes===0&&L(y)),T.__cacheKey=tt,T.__webglTexture=st[tt].texture}return k}function Ft(T,y,k){let Q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=n.TEXTURE_3D);let st=Ht(T,y),tt=y.source;e.bindTexture(Q,T.__webglTexture,n.TEXTURE0+k);let It=i.get(tt);if(tt.version!==It.__version||st===!0){e.activeTexture(n.TEXTURE0+k);let pt=_e.getPrimaries(_e.workingColorSpace),vt=y.colorSpace===Ui?null:_e.getPrimaries(y.colorSpace),Qt=y.colorSpace===Ui||pt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ct=x(y.image,!1,s.maxTextureSize);ct=ot(y,ct);let bt=r.convert(y.format,y.colorSpace),qt=r.convert(y.type),$t=E(y.internalFormat,bt,qt,y.colorSpace,y.isVideoTexture);St(Q,y);let Dt,le=y.mipmaps,Jt=y.isVideoTexture!==!0,we=It.__version===void 0||st===!0,U=tt.dataReady,Ct=w(y,ct);if(y.isDepthTexture)$t=M(y.format===Ks,y.type),we&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,$t,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,$t,ct.width,ct.height,0,bt,qt,null));else if(y.isDataTexture)if(le.length>0){Jt&&we&&e.texStorage2D(n.TEXTURE_2D,Ct,$t,le[0].width,le[0].height);for(let J=0,at=le.length;J<at;J++)Dt=le[J],Jt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Dt.width,Dt.height,bt,qt,Dt.data):e.texImage2D(n.TEXTURE_2D,J,$t,Dt.width,Dt.height,0,bt,qt,Dt.data);y.generateMipmaps=!1}else Jt?(we&&e.texStorage2D(n.TEXTURE_2D,Ct,$t,ct.width,ct.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,bt,qt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,$t,ct.width,ct.height,0,bt,qt,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,$t,le[0].width,le[0].height,ct.depth);for(let J=0,at=le.length;J<at;J++)if(Dt=le[J],y.format!==Wn)if(bt!==null)if(Jt){if(U)if(y.layerUpdates.size>0){let Et=lf(Dt.width,Dt.height,y.format,y.type);for(let Pt of y.layerUpdates){let ce=Dt.data.subarray(Pt*Et/Dt.data.BYTES_PER_ELEMENT,(Pt+1)*Et/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Pt,Dt.width,Dt.height,1,bt,ce,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Dt.width,Dt.height,ct.depth,bt,Dt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,$t,Dt.width,Dt.height,ct.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Dt.width,Dt.height,ct.depth,bt,qt,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,$t,Dt.width,Dt.height,ct.depth,0,bt,qt,Dt.data)}else{Jt&&we&&e.texStorage2D(n.TEXTURE_2D,Ct,$t,le[0].width,le[0].height);for(let J=0,at=le.length;J<at;J++)Dt=le[J],y.format!==Wn?bt!==null?Jt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Dt.width,Dt.height,bt,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,$t,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Dt.width,Dt.height,bt,qt,Dt.data):e.texImage2D(n.TEXTURE_2D,J,$t,Dt.width,Dt.height,0,bt,qt,Dt.data)}else if(y.isDataArrayTexture)if(Jt){if(we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,$t,ct.width,ct.height,ct.depth),U)if(y.layerUpdates.size>0){let J=lf(ct.width,ct.height,y.format,y.type);for(let at of y.layerUpdates){let Et=ct.data.subarray(at*J/ct.data.BYTES_PER_ELEMENT,(at+1)*J/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,ct.width,ct.height,1,bt,qt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,bt,qt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,ct.width,ct.height,ct.depth,0,bt,qt,ct.data);else if(y.isData3DTexture)Jt?(we&&e.texStorage3D(n.TEXTURE_3D,Ct,$t,ct.width,ct.height,ct.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,bt,qt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,$t,ct.width,ct.height,ct.depth,0,bt,qt,ct.data);else if(y.isFramebufferTexture){if(we)if(Jt)e.texStorage2D(n.TEXTURE_2D,Ct,$t,ct.width,ct.height);else{let J=ct.width,at=ct.height;for(let Et=0;Et<Ct;Et++)e.texImage2D(n.TEXTURE_2D,Et,$t,J,at,0,bt,qt,null),J>>=1,at>>=1}}else if(le.length>0){if(Jt&&we){let J=it(le[0]);e.texStorage2D(n.TEXTURE_2D,Ct,$t,J.width,J.height)}for(let J=0,at=le.length;J<at;J++)Dt=le[J],Jt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,bt,qt,Dt):e.texImage2D(n.TEXTURE_2D,J,$t,bt,qt,Dt);y.generateMipmaps=!1}else if(Jt){if(we){let J=it(ct);e.texStorage2D(n.TEXTURE_2D,Ct,$t,J.width,J.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,qt,ct)}else e.texImage2D(n.TEXTURE_2D,0,$t,bt,qt,ct);p(y)&&g(Q),It.__version=tt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function et(T,y,k){if(y.image.length!==6)return;let Q=Ht(T,y),st=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);let tt=i.get(st);if(st.version!==tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);let It=_e.getPrimaries(_e.workingColorSpace),pt=y.colorSpace===Ui?null:_e.getPrimaries(y.colorSpace),vt=y.colorSpace===Ui||It===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Qt=y.isCompressedTexture||y.image[0].isCompressedTexture,ct=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let at=0;at<6;at++)!Qt&&!ct?bt[at]=x(y.image[at],!0,s.maxCubemapSize):bt[at]=ct?y.image[at].image:y.image[at],bt[at]=ot(y,bt[at]);let qt=bt[0],$t=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type),le=E(y.internalFormat,$t,Dt,y.colorSpace),Jt=y.isVideoTexture!==!0,we=tt.__version===void 0||Q===!0,U=st.dataReady,Ct=w(y,qt);St(n.TEXTURE_CUBE_MAP,y);let J;if(Qt){Jt&&we&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,le,qt.width,qt.height);for(let at=0;at<6;at++){J=bt[at].mipmaps;for(let Et=0;Et<J.length;Et++){let Pt=J[Et];y.format!==Wn?$t!==null?Jt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,0,0,Pt.width,Pt.height,$t,Pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,le,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,0,0,Pt.width,Pt.height,$t,Dt,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,le,Pt.width,Pt.height,0,$t,Dt,Pt.data)}}}else{if(J=y.mipmaps,Jt&&we){J.length>0&&Ct++;let at=it(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,le,at.width,at.height)}for(let at=0;at<6;at++)if(ct){Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,bt[at].width,bt[at].height,$t,Dt,bt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,le,bt[at].width,bt[at].height,0,$t,Dt,bt[at].data);for(let Et=0;Et<J.length;Et++){let ce=J[Et].image[at].image;Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,0,0,ce.width,ce.height,$t,Dt,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,le,ce.width,ce.height,0,$t,Dt,ce.data)}}else{Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,$t,Dt,bt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,le,$t,Dt,bt[at]);for(let Et=0;Et<J.length;Et++){let Pt=J[Et];Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,0,0,$t,Dt,Pt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,le,$t,Dt,Pt.image[at])}}}p(y)&&g(n.TEXTURE_CUBE_MAP),tt.__version=st.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ut(T,y,k,Q,st,tt){let It=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),vt=E(k.internalFormat,It,pt,k.colorSpace);if(!i.get(y).__hasExternalTextures){let ct=Math.max(1,y.width>>tt),bt=Math.max(1,y.height>>tt);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,vt,ct,bt,y.depth,0,It,pt,null):e.texImage2D(st,tt,vt,ct,bt,0,It,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),V(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,st,i.get(k).__webglTexture,0,G(y)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,st,i.get(k).__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(T,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let Q=y.depthTexture,st=Q&&Q.isDepthTexture?Q.type:null,tt=M(y.stencilBuffer,st),It=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=G(y);V(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,tt,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,tt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,tt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,T)}else{let Q=y.textures;for(let st=0;st<Q.length;st++){let tt=Q[st],It=r.convert(tt.format,tt.colorSpace),pt=r.convert(tt.type),vt=E(tt.internalFormat,It,pt,tt.colorSpace),Qt=G(y);k&&V(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,vt,y.width,y.height):V(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,vt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,vt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let Q=i.get(y.depthTexture).__webglTexture,st=G(y);if(y.depthTexture.format===Vs)V(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ks)V(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Wt(T){let y=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let Q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",st)};Q.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=Q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=n.createRenderbuffer(),Rt(y.__webglDepthbuffer[Q],T,!1);else{let st=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Rt(y.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(T,y,k){let Q=i.get(T);y!==void 0&&ut(Q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Wt(T)}function Xt(T){let y=T.texture,k=i.get(T),Q=i.get(y);T.addEventListener("dispose",P);let st=T.textures,tt=T.isWebGLCubeRenderTarget===!0,It=st.length>1;if(It||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=y.version,o.memory.textures++),tt){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let vt=0;vt<y.mipmaps.length;vt++)k.__webglFramebuffer[pt][vt]=n.createFramebuffer()}else k.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)k.__webglFramebuffer[pt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(It)for(let pt=0,vt=st.length;pt<vt;pt++){let Qt=i.get(st[pt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&V(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<st.length;pt++){let vt=st[pt];k.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);let Qt=r.convert(vt.format,vt.colorSpace),ct=r.convert(vt.type),bt=E(vt.internalFormat,Qt,ct,vt.colorSpace,T.isXRRenderTarget===!0),qt=G(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,bt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Rt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),St(n.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)ut(k.__webglFramebuffer[pt][vt],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else ut(k.__webglFramebuffer[pt],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(y)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let pt=0,vt=st.length;pt<vt;pt++){let Qt=st[pt],ct=i.get(Qt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),St(n.TEXTURE_2D,Qt),ut(k.__webglFramebuffer,T,Qt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),p(Qt)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),St(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)ut(k.__webglFramebuffer[vt],T,y,n.COLOR_ATTACHMENT0,pt,vt);else ut(k.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,pt,0);p(y)&&g(pt),e.unbindTexture()}T.depthBuffer&&Wt(T)}function jt(T){let y=T.textures;for(let k=0,Q=y.length;k<Q;k++){let st=y[k];if(p(st)){let tt=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,It=i.get(st).__webglTexture;e.bindTexture(tt,It),g(tt),e.unbindTexture()}}}let C=[],S=[];function H(T){if(T.samples>0){if(V(T)===!1){let y=T.textures,k=T.width,Q=T.height,st=n.COLOR_BUFFER_BIT,tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(T),pt=y.length>1;if(pt)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[vt]);let Qt=i.get(y[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,st,n.NEAREST),l===!0&&(C.length=0,S.length=0,C.push(n.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(C.push(tt),S.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,It.__webglColorRenderbuffer[vt]);let Qt=i.get(y[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function G(T){return Math.min(s.maxSamples,T.samples)}function V(T){let y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function K(T){let y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function ot(T,y){let k=T.colorSpace,Q=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Vi&&k!==Ui&&(_e.getTransfer(k)===Pe?(Q!==Wn||st!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function it(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=v,this.setTexture2D=X,this.setTexture2DArray=rt,this.setTexture3D=z,this.setTextureCube=ht,this.rebindTextures=zt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=V}function zx(n,t){function e(i,s=Ui){let r,o=_e.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===xh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bf)return n.BYTE;if(i===Ef)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===_h)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Zr)return n.HALF_FLOAT;if(i===Tf)return n.ALPHA;if(i===Af)return n.RGB;if(i===Wn)return n.RGBA;if(i===Rf)return n.LUMINANCE;if(i===Cf)return n.LUMINANCE_ALPHA;if(i===Vs)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===Pf)return n.RED;if(i===vh)return n.RED_INTEGER;if(i===If)return n.RG;if(i===Mh)return n.RG_INTEGER;if(i===Sh)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===qo||i===Yo)if(o===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===xc||i===yc||i===vc||i===Mc||i===Sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===bc||i===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zo)return o===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lf||i===wc||i===Tc||i===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Vc=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Gt=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`,Wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ti({vertexShader:Gx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Qe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends Hi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=new Wc,p=e.getContextAttributes(),g=null,E=null,M=[],w=[],D=new ft,P=null,R=new Ke;R.layers.enable(1),R.viewport=new Me;let L=new Ke;L.layers.enable(2),L.viewport=new Me;let q=[R,L],_=new Vc;_.layers.enable(1),_.layers.enable(2);let v=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=M[et];return ut===void 0&&(ut=new Dr,M[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=M[et];return ut===void 0&&(ut=new Dr,M[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=M[et];return ut===void 0&&(ut=new Dr,M[et]=ut),ut.getHandSpace()};function B(et){let ut=w.indexOf(et.inputSource);if(ut===-1)return;let Rt=M[ut];Rt!==void 0&&(Rt.update(et.inputSource,et.frame,c||o),Rt.dispatchEvent({type:et.type,data:et.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",rt);for(let et=0;et<M.length;et++){let ut=w[et];ut!==null&&(w[et]=null,M[et].disconnect(ut))}v=null,N=null,x.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,E=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",rt),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let ut={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new _i(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ut=null,Rt=null,gt=null;p.depth&&(gt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=p.stencil?Ks:Vs,Rt=p.stencil?$s:as);let Wt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new _i(d.textureWidth,d.textureHeight,{format:Wn,type:gi,depthTexture:new fa(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function rt(et){for(let ut=0;ut<et.removed.length;ut++){let Rt=et.removed[ut],gt=w.indexOf(Rt);gt>=0&&(w[gt]=null,M[gt].disconnect(Rt))}for(let ut=0;ut<et.added.length;ut++){let Rt=et.added[ut],gt=w.indexOf(Rt);if(gt===-1){for(let zt=0;zt<M.length;zt++)if(zt>=w.length){w.push(Rt),gt=zt;break}else if(w[zt]===null){w[zt]=Rt,gt=zt;break}if(gt===-1)break}let Wt=M[gt];Wt&&Wt.connect(Rt)}}let z=new I,ht=new I;function Z(et,ut,Rt){z.setFromMatrixPosition(ut.matrixWorld),ht.setFromMatrixPosition(Rt.matrixWorld);let gt=z.distanceTo(ht),Wt=ut.projectionMatrix.elements,zt=Rt.projectionMatrix.elements,Xt=Wt[14]/(Wt[10]-1),jt=Wt[14]/(Wt[10]+1),C=(Wt[9]+1)/Wt[5],S=(Wt[9]-1)/Wt[5],H=(Wt[8]-1)/Wt[0],G=(zt[8]+1)/zt[0],V=Xt*H,K=Xt*G,ot=gt/(-H+G),it=ot*-H;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(it),et.translateZ(ot),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Wt[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let T=Xt+ot,y=jt+ot,k=V-it,Q=K+(gt-it),st=C*jt/y*T,tt=S*jt/y*T;et.projectionMatrix.makePerspective(k,Q,st,tt,T,y),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function yt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ut=et.near,Rt=et.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),_.near=L.near=R.near=ut,_.far=L.far=R.far=Rt,(v!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,N=_.far);let gt=et.parent,Wt=_.cameras;yt(_,gt);for(let zt=0;zt<Wt.length;zt++)yt(Wt[zt],gt);Wt.length===2?Z(_,R,L):_.projectionMatrix.copy(R.projectionMatrix),Mt(et,_,gt)};function Mt(et,ut,Rt){Rt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(Rt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ea*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let St=null;function Ht(et,ut){if(h=ut.getViewerPose(c||o),m=ut,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let gt=!1;Rt.length!==_.cameras.length&&(_.cameras.length=0,gt=!0);for(let zt=0;zt<Rt.length;zt++){let Xt=Rt[zt],jt=null;if(f!==null)jt=f.getViewport(Xt);else{let S=u.getViewSubImage(d,Xt);jt=S.viewport,zt===0&&(t.setRenderTargetTextures(E,S.colorTexture,d.ignoreDepthValues?void 0:S.depthStencilTexture),t.setRenderTarget(E))}let C=q[zt];C===void 0&&(C=new Ke,C.layers.enable(zt),C.viewport=new Me,q[zt]=C),C.matrix.fromArray(Xt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Xt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(jt.x,jt.y,jt.width,jt.height),zt===0&&(_.matrix.copy(C.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),gt===!0&&_.cameras.push(C)}let Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){let zt=u.getDepthInformation(Rt[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,s.renderState)}}for(let Rt=0;Rt<M.length;Rt++){let gt=w[Rt],Wt=M[Rt];gt!==null&&Wt!==void 0&&Wt.update(gt,ut,c||o)}St&&St(et,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),m=null}let Ft=new Bf;Ft.setAnimationLoop(Ht),this.setAnimationLoop=function(et){St=et},this.dispose=function(){}}},es=new Un,Wx=new Se;function Xx(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Ff(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,E,M,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,w)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,E,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let E=t.get(g),M=E.envMap,w=E.envMapRotation;M&&(p.envMap.value=M,es.copy(w),es.x*=-1,es.y*=-1,es.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),p.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(es)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,E,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*E,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,E){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Je&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let E=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let w=M.program;i.uniformBlockBinding(E,w)}function c(E,M){let w=s[E.id];w===void 0&&(m(E),w=h(E),s[E.id]=w,E.addEventListener("dispose",p));let D=M.program;i.updateUBOMapping(E,D);let P=t.render.frame;r[E.id]!==P&&(d(E),r[E.id]=P)}function h(E){let M=u();E.__bindingPointIndex=M;let w=n.createBuffer(),D=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,D,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let M=s[E.id],w=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,R=w.length;P<R;P++){let L=Array.isArray(w[P])?w[P]:[w[P]];for(let q=0,_=L.length;q<_;q++){let v=L[q];if(f(v,P,q,D)===!0){let N=v.__offset,B=Array.isArray(v.value)?v.value:[v.value],X=0;for(let rt=0;rt<B.length;rt++){let z=B[rt],ht=x(z);typeof z=="number"||typeof z=="boolean"?(v.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,N+X,v.__data)):z.isMatrix3?(v.__data[0]=z.elements[0],v.__data[1]=z.elements[1],v.__data[2]=z.elements[2],v.__data[3]=0,v.__data[4]=z.elements[3],v.__data[5]=z.elements[4],v.__data[6]=z.elements[5],v.__data[7]=0,v.__data[8]=z.elements[6],v.__data[9]=z.elements[7],v.__data[10]=z.elements[8],v.__data[11]=0):(z.toArray(v.__data,X),X+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,v.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,M,w,D){let P=E.value,R=M+"_"+w;if(D[R]===void 0)return typeof P=="number"||typeof P=="boolean"?D[R]=P:D[R]=P.clone(),!0;{let L=D[R];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return D[R]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function m(E){let M=E.uniforms,w=0,D=16;for(let R=0,L=M.length;R<L;R++){let q=Array.isArray(M[R])?M[R]:[M[R]];for(let _=0,v=q.length;_<v;_++){let N=q[_],B=Array.isArray(N.value)?N.value:[N.value];for(let X=0,rt=B.length;X<rt;X++){let z=B[X],ht=x(z),Z=w%D,yt=Z%ht.boundary,Mt=Z+yt;w+=yt,Mt!==0&&D-Mt<ht.storage&&(w+=D-Mt),N.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=ht.storage}}}let P=w%D;return P>0&&(w+=D-P),E.__size=w,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){let M=E.target;M.removeEventListener("dispose",p);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var da=class{constructor(t={}){let{canvas:e=$p(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,g=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Bi,this.toneMappingExposure=1;let M=this,w=!1,D=0,P=0,R=null,L=-1,q=null,_=new Me,v=new Me,N=null,B=new Kt(0),X=0,rt=e.width,z=e.height,ht=1,Z=null,yt=null,Mt=new Me(0,0,rt,z),St=new Me(0,0,rt,z),Ht=!1,Ft=new Br,et=!1,ut=!1,Rt=new Se,gt=new Se,Wt=new I,zt=new Me,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function C(){return R===null?ht:1}let S=i;function H(b,O){return e.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),S===null){let O="webgl2";if(S=H(O,b),S===null)throw H(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let G,V,K,ot,it,T,y,k,Q,st,tt,It,pt,vt,Qt,ct,bt,qt,$t,Dt,le,Jt,we,U;function Ct(){G=new l_(S),G.init(),Jt=new zx(S,G),V=new n_(S,G,t,Jt),K=new Fx(S),V.reverseDepthBuffer&&K.buffers.depth.setReversed(!0),ot=new u_(S),it=new Ex,T=new kx(S,G,K,it,V,Jt,ot),y=new s_(M),k=new a_(M),Q=new xm(S),we=new t_(S,Q),st=new c_(S,Q,ot,we),tt=new d_(S,st,Q,ot),$t=new f_(S,V,T),ct=new i_(it),It=new bx(M,y,k,G,V,we,ct),pt=new Xx(M,it),vt=new Tx,Qt=new Lx(G),qt=new Qg(M,y,k,K,tt,d,l),bt=new Nx(M,tt,V),U=new qx(S,ot,V,K),Dt=new e_(S,G,ot),le=new h_(S,G,ot),ot.programs=It.programs,M.capabilities=V,M.extensions=G,M.properties=it,M.renderLists=vt,M.shadowMap=bt,M.state=K,M.info=ot}Ct();let J=new Xc(M,S);this.xr=J,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let b=G.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=G.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(rt,z,!1))},this.getSize=function(b){return b.set(rt,z)},this.setSize=function(b,O,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=b,z=O,e.width=Math.floor(b*ht),e.height=Math.floor(O*ht),W===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(rt*ht,z*ht).floor()},this.setDrawingBufferSize=function(b,O,W){rt=b,z=O,ht=W,e.width=Math.floor(b*W),e.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,O,W,Y){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,O,W,Y),K.viewport(_.copy(Mt).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,O,W,Y){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,O,W,Y),K.scissor(v.copy(St).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(b){K.setScissorTest(Ht=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(b=!0,O=!0,W=!0){let Y=0;if(b){let F=!1;if(R!==null){let dt=R.texture.format;F=dt===Sh||dt===Mh||dt===vh}if(F){let dt=R.texture.type,wt=dt===gi||dt===as||dt===Fr||dt===$s||dt===xh||dt===yh,Ut=qt.getClearColor(),Nt=qt.getClearAlpha(),Yt=Ut.r,Zt=Ut.g,Ot=Ut.b;wt?(f[0]=Yt,f[1]=Zt,f[2]=Ot,f[3]=Nt,S.clearBufferuiv(S.COLOR,0,f)):(m[0]=Yt,m[1]=Zt,m[2]=Ot,m[3]=Nt,S.clearBufferiv(S.COLOR,0,m))}else Y|=S.COLOR_BUFFER_BIT}O&&(Y|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(Y|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),vt.dispose(),Qt.dispose(),it.dispose(),y.dispose(),k.dispose(),tt.dispose(),we.dispose(),U.dispose(),It.dispose(),J.dispose(),J.removeEventListener("sessionstart",ou),J.removeEventListener("sessionend",au),$i.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=ot.autoReset,O=bt.enabled,W=bt.autoUpdate,Y=bt.needsUpdate,F=bt.type;Ct(),ot.autoReset=b,bt.enabled=O,bt.autoUpdate=W,bt.needsUpdate=Y,bt.type=F}function Pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ce(b){let O=b.target;O.removeEventListener("dispose",ce),Ve(O)}function Ve(b){_n(b),it.remove(b)}function _n(b){let O=it.get(b).programs;O!==void 0&&(O.forEach(function(W){It.releaseProgram(W)}),b.isShaderMaterial&&It.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,Y,F,dt){O===null&&(O=Xt);let wt=F.isMesh&&F.matrixWorld.determinant()<0,Ut=sp(b,O,W,Y,F);K.setMaterial(Y,wt);let Nt=W.index,Yt=1;if(Y.wireframe===!0){if(Nt=st.getWireframeAttribute(W),Nt===void 0)return;Yt=2}let Zt=W.drawRange,Ot=W.attributes.position,xe=Zt.start*Yt,Ce=(Zt.start+Zt.count)*Yt;dt!==null&&(xe=Math.max(xe,dt.start*Yt),Ce=Math.min(Ce,(dt.start+dt.count)*Yt)),Nt!==null?(xe=Math.max(xe,0),Ce=Math.min(Ce,Nt.count)):Ot!=null&&(xe=Math.max(xe,0),Ce=Math.min(Ce,Ot.count));let Fe=Ce-xe;if(Fe<0||Fe===1/0)return;we.setup(F,Y,Ut,W,Nt);let En,me=Dt;if(Nt!==null&&(En=Q.get(Nt),me=le,me.setIndex(En)),F.isMesh)Y.wireframe===!0?(K.setLineWidth(Y.wireframeLinewidth*C()),me.setMode(S.LINES)):me.setMode(S.TRIANGLES);else if(F.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),K.setLineWidth(Bt*C()),F.isLineSegments?me.setMode(S.LINES):F.isLineLoop?me.setMode(S.LINE_LOOP):me.setMode(S.LINE_STRIP)}else F.isPoints?me.setMode(S.POINTS):F.isSprite&&me.setMode(S.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)me.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))me.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Bt=F._multiDrawStarts,tn=F._multiDrawCounts,ge=F._multiDrawCount,kn=Nt?Q.get(Nt).bytesPerElement:1,Ss=it.get(Y).currentProgram.getUniforms();for(let wn=0;wn<ge;wn++)Ss.setValue(S,"_gl_DrawID",wn),me.render(Bt[wn]/kn,tn[wn])}else if(F.isInstancedMesh)me.renderInstances(xe,Fe,F.count);else if(W.isInstancedBufferGeometry){let Bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,tn=Math.min(W.instanceCount,Bt);me.renderInstances(xe,Fe,tn)}else me.render(xe,Fe)};function fe(b,O,W){b.transparent===!0&&b.side===un&&b.forceSinglePass===!1?(b.side=Je,b.needsUpdate=!0,fo(b,O,W),b.side=zi,b.needsUpdate=!0,fo(b,O,W),b.side=un):fo(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),p=Qt.get(W),p.init(O),E.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==W&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let Y=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let dt=F.material;if(dt)if(Array.isArray(dt))for(let wt=0;wt<dt.length;wt++){let Ut=dt[wt];fe(Ut,W,F),Y.add(Ut)}else fe(dt,W,F),Y.add(dt)}),E.pop(),p=null,Y},this.compileAsync=function(b,O,W=null){let Y=this.compile(b,O,W);return new Promise(F=>{function dt(){if(Y.forEach(function(wt){it.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){F(b);return}setTimeout(dt,10)}G.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let xn=null;function ri(b){xn&&xn(b)}function ou(){$i.stop()}function au(){$i.start()}let $i=new Bf;$i.setAnimationLoop(ri),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(b){xn=b,J.setAnimationLoop(b),b===null?$i.stop():$i.start()},J.addEventListener("sessionstart",ou),J.addEventListener("sessionend",au),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,R),p=Qt.get(b,E.length),p.init(O),E.push(p),gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ft.setFromProjectionMatrix(gt),ut=this.localClippingEnabled,et=ct.init(this.clippingPlanes,ut),x=vt.get(b,g.length),x.init(),g.push(x),J.enabled===!0&&J.isPresenting===!0){let dt=M.xr.getDepthSensingMesh();dt!==null&&il(dt,O,-1/0,M.sortObjects)}il(b,O,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(Z,yt),jt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,jt&&qt.addToRenderList(x,b),this.info.render.frame++,et===!0&&ct.beginShadows();let W=p.state.shadowsArray;bt.render(W,b,O),et===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=x.opaque,F=x.transmissive;if(p.setupLights(),O.isArrayCamera){let dt=O.cameras;if(F.length>0)for(let wt=0,Ut=dt.length;wt<Ut;wt++){let Nt=dt[wt];cu(Y,F,b,Nt)}jt&&qt.render(b);for(let wt=0,Ut=dt.length;wt<Ut;wt++){let Nt=dt[wt];lu(x,b,Nt,Nt.viewport)}}else F.length>0&&cu(Y,F,b,O),jt&&qt.render(b),lu(x,b,O);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(M,b,O),we.resetDefaultState(),L=-1,q=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&ct.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function il(b,O,W,Y){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ft.intersectsSprite(b)){Y&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);let wt=tt.update(b),Ut=b.material;Ut.visible&&x.push(b,wt,Ut,W,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ft.intersectsObject(b))){let wt=tt.update(b),Ut=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),zt.copy(wt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(Ut)){let Nt=wt.groups;for(let Yt=0,Zt=Nt.length;Yt<Zt;Yt++){let Ot=Nt[Yt],xe=Ut[Ot.materialIndex];xe&&xe.visible&&x.push(b,wt,xe,W,zt.z,Ot)}}else Ut.visible&&x.push(b,wt,Ut,W,zt.z,null)}}let dt=b.children;for(let wt=0,Ut=dt.length;wt<Ut;wt++)il(dt[wt],O,W,Y)}function lu(b,O,W,Y){let F=b.opaque,dt=b.transmissive,wt=b.transparent;p.setupLightsView(W),et===!0&&ct.setGlobalState(M.clippingPlanes,W),Y&&K.viewport(_.copy(Y)),F.length>0&&uo(F,O,W),dt.length>0&&uo(dt,O,W),wt.length>0&&uo(wt,O,W),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function cu(b,O,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new _i(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Zr:gi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));let dt=p.state.transmissionRenderTarget[Y.id],wt=Y.viewport||_;dt.setSize(wt.z,wt.w);let Ut=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(B),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),jt&&qt.render(W);let Nt=M.toneMapping;M.toneMapping=Bi;let Yt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),et===!0&&ct.setGlobalState(M.clippingPlanes,Y),uo(b,W,Y),T.updateMultisampleRenderTarget(dt),T.updateRenderTargetMipmap(dt),G.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ot=0,xe=O.length;Ot<xe;Ot++){let Ce=O[Ot],Fe=Ce.object,En=Ce.geometry,me=Ce.material,Bt=Ce.group;if(me.side===un&&Fe.layers.test(Y.layers)){let tn=me.side;me.side=Je,me.needsUpdate=!0,hu(Fe,W,Y,En,me,Bt),me.side=tn,me.needsUpdate=!0,Zt=!0}}Zt===!0&&(T.updateMultisampleRenderTarget(dt),T.updateRenderTargetMipmap(dt))}M.setRenderTarget(Ut),M.setClearColor(B,X),Yt!==void 0&&(Y.viewport=Yt),M.toneMapping=Nt}function uo(b,O,W){let Y=O.isScene===!0?O.overrideMaterial:null;for(let F=0,dt=b.length;F<dt;F++){let wt=b[F],Ut=wt.object,Nt=wt.geometry,Yt=Y===null?wt.material:Y,Zt=wt.group;Ut.layers.test(W.layers)&&hu(Ut,O,W,Nt,Yt,Zt)}}function hu(b,O,W,Y,F,dt){b.onBeforeRender(M,O,W,Y,F,dt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(M,O,W,Y,b,dt),F.transparent===!0&&F.side===un&&F.forceSinglePass===!1?(F.side=Je,F.needsUpdate=!0,M.renderBufferDirect(W,O,Y,F,b,dt),F.side=zi,F.needsUpdate=!0,M.renderBufferDirect(W,O,Y,F,b,dt),F.side=un):M.renderBufferDirect(W,O,Y,F,b,dt),b.onAfterRender(M,O,W,Y,F,dt)}function fo(b,O,W){O.isScene!==!0&&(O=Xt);let Y=it.get(b),F=p.state.lights,dt=p.state.shadowsArray,wt=F.state.version,Ut=It.getParameters(b,F.state,dt,O,W),Nt=It.getProgramCacheKey(Ut),Yt=Y.programs;Y.environment=b.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Yt===void 0&&(b.addEventListener("dispose",ce),Yt=new Map,Y.programs=Yt);let Zt=Yt.get(Nt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===wt)return fu(b,Ut),Zt}else Ut.uniforms=It.getUniforms(b),b.onBeforeCompile(Ut,M),Zt=It.acquireProgram(Ut,Nt),Yt.set(Nt,Zt),Y.uniforms=Ut.uniforms;let Ot=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=ct.uniform),fu(b,Ut),Y.needsLights=op(b),Y.lightsStateVersion=wt,Y.needsLights&&(Ot.ambientLightColor.value=F.state.ambient,Ot.lightProbe.value=F.state.probe,Ot.directionalLights.value=F.state.directional,Ot.directionalLightShadows.value=F.state.directionalShadow,Ot.spotLights.value=F.state.spot,Ot.spotLightShadows.value=F.state.spotShadow,Ot.rectAreaLights.value=F.state.rectArea,Ot.ltc_1.value=F.state.rectAreaLTC1,Ot.ltc_2.value=F.state.rectAreaLTC2,Ot.pointLights.value=F.state.point,Ot.pointLightShadows.value=F.state.pointShadow,Ot.hemisphereLights.value=F.state.hemi,Ot.directionalShadowMap.value=F.state.directionalShadowMap,Ot.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ot.spotShadowMap.value=F.state.spotShadowMap,Ot.spotLightMatrix.value=F.state.spotLightMatrix,Ot.spotLightMap.value=F.state.spotLightMap,Ot.pointShadowMap.value=F.state.pointShadowMap,Ot.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=Zt,Y.uniformsList=null,Zt}function uu(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Xs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function fu(b,O){let W=it.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function sp(b,O,W,Y,F){O.isScene!==!0&&(O=Xt),T.resetTextureUnits();let dt=O.fog,wt=Y.isMeshStandardMaterial?O.environment:null,Ut=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vi,Nt=(Y.isMeshStandardMaterial?k:y).get(Y.envMap||wt),Yt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Zt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!W.morphAttributes.position,xe=!!W.morphAttributes.normal,Ce=!!W.morphAttributes.color,Fe=Bi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Fe=M.toneMapping);let En=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=En!==void 0?En.length:0,Bt=it.get(Y),tn=p.state.lights;if(et===!0&&(ut===!0||b!==q)){let In=b===q&&Y.id===L;ct.setState(Y,b,In)}let ge=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==tn.state.version||Bt.outputColorSpace!==Ut||F.isBatchedMesh&&Bt.batching===!1||!F.isBatchedMesh&&Bt.batching===!0||F.isBatchedMesh&&Bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Bt.instancing===!1||!F.isInstancedMesh&&Bt.instancing===!0||F.isSkinnedMesh&&Bt.skinning===!1||!F.isSkinnedMesh&&Bt.skinning===!0||F.isInstancedMesh&&Bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Bt.instancingMorph===!1&&F.morphTexture!==null||Bt.envMap!==Nt||Y.fog===!0&&Bt.fog!==dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ct.numPlanes||Bt.numIntersection!==ct.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==Zt||Bt.morphTargets!==Ot||Bt.morphNormals!==xe||Bt.morphColors!==Ce||Bt.toneMapping!==Fe||Bt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Bt.__version=Y.version);let kn=Bt.currentProgram;ge===!0&&(kn=fo(Y,O,F));let Ss=!1,wn=!1,sl=!1,ke=kn.getUniforms(),Ai=Bt.uniforms;if(K.useProgram(kn.program)&&(Ss=!0,wn=!0,sl=!0),Y.id!==L&&(L=Y.id,wn=!0),Ss||q!==b){V.reverseDepthBuffer?(Rt.copy(b.projectionMatrix),Jp(Rt),jp(Rt),ke.setValue(S,"projectionMatrix",Rt)):ke.setValue(S,"projectionMatrix",b.projectionMatrix),ke.setValue(S,"viewMatrix",b.matrixWorldInverse);let In=ke.map.cameraPosition;In!==void 0&&In.setValue(S,Wt.setFromMatrixPosition(b.matrixWorld)),V.logarithmicDepthBuffer&&ke.setValue(S,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ke.setValue(S,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,wn=!0,sl=!0)}if(F.isSkinnedMesh){ke.setOptional(S,F,"bindMatrix"),ke.setOptional(S,F,"bindMatrixInverse");let In=F.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),ke.setValue(S,"boneTexture",In.boneTexture,T))}F.isBatchedMesh&&(ke.setOptional(S,F,"batchingTexture"),ke.setValue(S,"batchingTexture",F._matricesTexture,T),ke.setOptional(S,F,"batchingIdTexture"),ke.setValue(S,"batchingIdTexture",F._indirectTexture,T),ke.setOptional(S,F,"batchingColorTexture"),F._colorsTexture!==null&&ke.setValue(S,"batchingColorTexture",F._colorsTexture,T));let rl=W.morphAttributes;if((rl.position!==void 0||rl.normal!==void 0||rl.color!==void 0)&&$t.update(F,W,kn),(wn||Bt.receiveShadow!==F.receiveShadow)&&(Bt.receiveShadow=F.receiveShadow,ke.setValue(S,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ai.envMap.value=Nt,Ai.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Ai.envMapIntensity.value=O.environmentIntensity),wn&&(ke.setValue(S,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&rp(Ai,sl),dt&&Y.fog===!0&&pt.refreshFogUniforms(Ai,dt),pt.refreshMaterialUniforms(Ai,Y,ht,z,p.state.transmissionRenderTarget[b.id]),Xs.upload(S,uu(Bt),Ai,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xs.upload(S,uu(Bt),Ai,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ke.setValue(S,"center",F.center),ke.setValue(S,"modelViewMatrix",F.modelViewMatrix),ke.setValue(S,"normalMatrix",F.normalMatrix),ke.setValue(S,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let In=Y.uniformsGroups;for(let ol=0,ap=In.length;ol<ap;ol++){let du=In[ol];U.update(du,kn),U.bind(du,kn)}}return kn}function rp(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function op(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,O,W){it.get(b.texture).__webglTexture=O,it.get(b.depthTexture).__webglTexture=W;let Y=it.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let W=it.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){R=b,D=O,P=W;let Y=!0,F=null,dt=!1,wt=!1;if(b){let Nt=it.get(b);if(Nt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(S.FRAMEBUFFER,null),Y=!1;else if(Nt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Nt.__hasExternalTextures)T.rebindTextures(b,it.get(b.texture).__webglTexture,it.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ot=b.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&it.has(Ot)&&(b.width!==Ot.image.width||b.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(wt=!0);let Zt=it.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?F=Zt[O][W]:F=Zt[O],dt=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?F=it.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?F=Zt[W]:F=Zt,_.copy(b.viewport),v.copy(b.scissor),N=b.scissorTest}else _.copy(Mt).multiplyScalar(ht).floor(),v.copy(St).multiplyScalar(ht).floor(),N=Ht;if(K.bindFramebuffer(S.FRAMEBUFFER,F)&&Y&&K.drawBuffers(b,F),K.viewport(_),K.scissor(v),K.setScissorTest(N),dt){let Nt=it.get(b.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+O,Nt.__webglTexture,W)}else if(wt){let Nt=it.get(b.texture),Yt=O||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Nt.__webglTexture,W||0,Yt)}L=-1},this.readRenderTargetPixels=function(b,O,W,Y,F,dt,wt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){K.bindFramebuffer(S.FRAMEBUFFER,Ut);try{let Nt=b.texture,Yt=Nt.format,Zt=Nt.type;if(!V.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Y&&W>=0&&W<=b.height-F&&S.readPixels(O,W,Y,F,Jt.convert(Yt),Jt.convert(Zt),dt)}finally{let Nt=R!==null?it.get(R).__webglFramebuffer:null;K.bindFramebuffer(S.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,Y,F,dt,wt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){let Nt=b.texture,Yt=Nt.format,Zt=Nt.type;if(!V.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-Y&&W>=0&&W<=b.height-F){K.bindFramebuffer(S.FRAMEBUFFER,Ut);let Ot=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ot),S.bufferData(S.PIXEL_PACK_BUFFER,dt.byteLength,S.STREAM_READ),S.readPixels(O,W,Y,F,Jt.convert(Yt),Jt.convert(Zt),0);let xe=R!==null?it.get(R).__webglFramebuffer:null;K.bindFramebuffer(S.FRAMEBUFFER,xe);let Ce=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Kp(S,Ce,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ot),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,dt),S.deleteBuffer(Ot),S.deleteSync(Ce),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&($o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let Y=Math.pow(2,-W),F=Math.floor(b.image.width*Y),dt=Math.floor(b.image.height*Y),wt=O!==null?O.x:0,Ut=O!==null?O.y:0;T.setTexture2D(b,0),S.copyTexSubImage2D(S.TEXTURE_2D,W,0,0,wt,Ut,F,dt),K.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,Y=null,F=0){b.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,W=null);let dt,wt,Ut,Nt,Yt,Zt;W!==null?(dt=W.max.x-W.min.x,wt=W.max.y-W.min.y,Ut=W.min.x,Nt=W.min.y):(dt=b.image.width,wt=b.image.height,Ut=0,Nt=0),Y!==null?(Yt=Y.x,Zt=Y.y):(Yt=0,Zt=0);let Ot=Jt.convert(O.format),xe=Jt.convert(O.type);T.setTexture2D(O,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);let Ce=S.getParameter(S.UNPACK_ROW_LENGTH),Fe=S.getParameter(S.UNPACK_IMAGE_HEIGHT),En=S.getParameter(S.UNPACK_SKIP_PIXELS),me=S.getParameter(S.UNPACK_SKIP_ROWS),Bt=S.getParameter(S.UNPACK_SKIP_IMAGES),tn=b.isCompressedTexture?b.mipmaps[F]:b.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,tn.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,tn.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ut),S.pixelStorei(S.UNPACK_SKIP_ROWS,Nt),b.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,F,Yt,Zt,dt,wt,Ot,xe,tn.data):b.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,F,Yt,Zt,tn.width,tn.height,Ot,tn.data):S.texSubImage2D(S.TEXTURE_2D,F,Yt,Zt,dt,wt,Ot,xe,tn),S.pixelStorei(S.UNPACK_ROW_LENGTH,Ce),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Fe),S.pixelStorei(S.UNPACK_SKIP_PIXELS,En),S.pixelStorei(S.UNPACK_SKIP_ROWS,me),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Bt),F===0&&O.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,Y=null,F=0){b.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0);let dt,wt,Ut,Nt,Yt,Zt,Ot,xe,Ce,Fe=b.isCompressedTexture?b.mipmaps[F]:b.image;W!==null?(dt=W.max.x-W.min.x,wt=W.max.y-W.min.y,Ut=W.max.z-W.min.z,Nt=W.min.x,Yt=W.min.y,Zt=W.min.z):(dt=Fe.width,wt=Fe.height,Ut=Fe.depth,Nt=0,Yt=0,Zt=0),Y!==null?(Ot=Y.x,xe=Y.y,Ce=Y.z):(Ot=0,xe=0,Ce=0);let En=Jt.convert(O.format),me=Jt.convert(O.type),Bt;if(O.isData3DTexture)T.setTexture3D(O,0),Bt=S.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)T.setTexture2DArray(O,0),Bt=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);let tn=S.getParameter(S.UNPACK_ROW_LENGTH),ge=S.getParameter(S.UNPACK_IMAGE_HEIGHT),kn=S.getParameter(S.UNPACK_SKIP_PIXELS),Ss=S.getParameter(S.UNPACK_SKIP_ROWS),wn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Fe.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Fe.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Nt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Yt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Zt),b.isDataTexture||b.isData3DTexture?S.texSubImage3D(Bt,F,Ot,xe,Ce,dt,wt,Ut,En,me,Fe.data):O.isCompressedArrayTexture?S.compressedTexSubImage3D(Bt,F,Ot,xe,Ce,dt,wt,Ut,En,Fe.data):S.texSubImage3D(Bt,F,Ot,xe,Ce,dt,wt,Ut,En,me,Fe),S.pixelStorei(S.UNPACK_ROW_LENGTH,tn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ge),S.pixelStorei(S.UNPACK_SKIP_PIXELS,kn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ss),S.pixelStorei(S.UNPACK_SKIP_IMAGES,wn),F===0&&O.generateMipmaps&&S.generateMipmap(Bt),K.unbindTexture()},this.initRenderTarget=function(b){it.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){D=0,P=0,R=null,K.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===bh?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===Ra?"display-p3":"srgb"}},pa=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var cs=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ma=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cc,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new I,kr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),i=ve(i,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},on=class extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fs,Rr=new I,Bs=new I,ks=new I,zs=new ft,Cr=new ft,Vf=new Se,No=new I,Pr=new I,Oo=new I,cf=new ft,Bl=new ft,hf=new ft,nn=class extends ze{constructor(t=new on){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new He;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ma(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new kr(i,3,0,!1)),Fs.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),Vf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fo(No.set(-.5,-.5,0),ks,o,Bs,s,r),Fo(Pr.set(.5,-.5,0),ks,o,Bs,s,r),Fo(Oo.set(.5,.5,0),ks,o,Bs,s,r),cf.set(0,0),Bl.set(1,0),hf.set(1,1);let a=t.ray.intersectTriangle(No,Pr,Oo,!1,Rr);if(a===null&&(Fo(Pr.set(-.5,.5,0),ks,o,Bs,s,r),Bl.set(0,1),a=t.ray.intersectTriangle(No,Oo,Pr,!1,Rr),a===null))return;let l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:Ni.getInterpolation(Rr,No,Pr,Oo,cf,Bl,hf,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fo(n,t,e,i,s,r){zs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Cr.x=r*zs.x-s*zs.y,Cr.y=s*zs.x+r*zs.y):Cr.copy(zs),n.copy(t),n.x+=Cr.x,n.y+=Cr.y,n.applyMatrix4(Vf)}var zr=class extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uf=new Se,qc=new ra,Bo=new Js,ko=new I,ga=class extends ze{constructor(t=new He,e=new zr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;uf.copy(s).invert(),qc.copy(t.ray).applyMatrix4(uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let p=c.getX(m);ko.fromBufferAttribute(u,p),ff(ko,p,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)ko.fromBufferAttribute(u,m),ff(ko,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ff(n,t,e,i,s,r,o){let a=qc.distanceSqToPoint(n);if(a<e){let l=new I;qc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var _a=class extends Rn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new I,s=[],r=[],o=[],a=new I,l=new Se;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(en(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(en(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends Nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yc=class extends Hr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var zo=new I,kl=new wh,zl=new wh,Hl=new wh,Zc=class extends Nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),c=zo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),kl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,p),zl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,p),Hl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(kl.calc(l),zl.calc(l),Hl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function df(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Yx(n,t){let e=1-n;return e*e*t}function Zx(n,t){return 2*(1-n)*n*t}function $x(n,t){return n*n*t}function Ur(n,t,e,i){return Yx(n,t)+Zx(n,e)+$x(n,i)}function Kx(n,t){let e=1-n;return e*e*e*t}function Jx(n,t){let e=1-n;return 3*e*e*n*t}function jx(n,t){return 3*(1-n)*n*n*t}function Qx(n,t){return n*n*n*t}function Nr(n,t,e,i,s){return Kx(n,t)+Jx(n,e)+jx(n,i)+Qx(n,s)}var xa=class extends Nn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends Nn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y),Nr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ya=class extends Nn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends Nn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends Nn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends Nn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y),Ur(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(df(a,l.x,c.x,h.x,u.x),df(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},jc=Object.freeze({__proto__:null,ArcCurve:Yc,CatmullRomCurve3:Zc,CubicBezierCurve:xa,CubicBezierCurve3:$c,EllipseCurve:Hr,LineCurve:ya,LineCurve3:Kc,QuadraticBezierCurve:va,QuadraticBezierCurve3:Jc,SplineCurve:Ma}),Qc=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new jc[s.type]().fromJSON(s))}return this}},Gr=class extends Qc{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ya(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new va(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new xa(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ma(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Hr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},th=class n extends He{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=en(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,d=new ft,f=new I,m=new I,x=new I,p=0,g=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:p=t[E+1].x-t[E].x,g=t[E+1].y-t[E].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[E+1].x-t[E].x,g=t[E+1].y-t[E].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let E=0;E<=e;E++){let M=i+E*h*s,w=Math.sin(M),D=Math.cos(M);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*w,u.y=t[P].y,u.z=t[P].x*D,o.push(u.x,u.y,u.z),d.x=E/e,d.y=P/(t.length-1),a.push(d.x,d.y);let R=l[3*P+0]*w,L=l[3*P+1],q=l[3*P+0]*D;c.push(R,L,q)}}for(let E=0;E<e;E++)for(let M=0;M<t.length-1;M++){let w=M+E*t.length,D=w,P=w+t.length,R=w+t.length+1,L=w+1;r.push(D,P,L),r.push(R,L,P)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},qn=class n extends th{constructor(t=1,e=1,i=4,s=8){let r=new Gr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},Sa=class n extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tr=class n extends He{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],p=i/2,g=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function E(){let w=new I,D=new I,P=0,R=(e-t)/i;for(let L=0;L<=r;L++){let q=[],_=L/r,v=_*(e-t)+t;for(let N=0;N<=s;N++){let B=N/s,X=B*l+a,rt=Math.sin(X),z=Math.cos(X);D.x=v*rt,D.y=-_*i+p,D.z=v*z,u.push(D.x,D.y,D.z),w.set(rt,R,z).normalize(),d.push(w.x,w.y,w.z),f.push(B,1-_),q.push(m++)}x.push(q)}for(let L=0;L<s;L++)for(let q=0;q<r;q++){let _=x[q][L],v=x[q+1][L],N=x[q+1][L+1],B=x[q][L+1];t>0&&(h.push(_,v,B),P+=3),e>0&&(h.push(v,N,B),P+=3)}c.addGroup(g,P,0),g+=P}function M(w){let D=m,P=new ft,R=new I,L=0,q=w===!0?t:e,_=w===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),m++;let v=m;for(let N=0;N<=s;N++){let X=N/s*l+a,rt=Math.cos(X),z=Math.sin(X);R.x=q*z,R.y=p*_,R.z=q*rt,u.push(R.x,R.y,R.z),d.push(0,_,0),P.x=rt*.5+.5,P.y=z*.5*_+.5,f.push(P.x,P.y),m++}for(let N=0;N<s;N++){let B=D+N,X=v+N;w===!0?h.push(X,X+1,B):h.push(X+1,X,B),L+=3}c.addGroup(g,L,w===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hs=class n extends tr{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Gi=class extends Gr{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Gr().fromJSON(s))}return this}},ty={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Wf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=ry(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let m=e;m<s;m+=e)u=n[m],d=n[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Vr(r,o,e,a,l,f,0),o}};function Wf(n,t,e,i,s){let r,o;if(s===gy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=pf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=pf(r,n[r],n[r+1],o);return o&&Pa(o,o.next)&&(Xr(o),o=o.next),o}function us(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Pa(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&hy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?ny(n,i,s,r):ey(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Xr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=iy(us(n),t,e),Vr(n,t,e,i,s,r,2)):o===2&&sy(n,t,e,i,s,r):Vr(us(n),t,e,i,s,r,1);break}}}function ey(n){let t=n.prev,e=n,i=n.next;if(Ne(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Gs(s,a,r,l,o,c,m.x,m.y)&&Ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ny(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ne(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=eh(f,m,t,e,i),E=eh(x,p,t,e,i),M=n.prevZ,w=n.nextZ;for(;M&&M.z>=g&&w&&w.z<=E;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Gs(a,h,l,u,c,d,M.x,M.y)&&Ne(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=f&&w.x<=x&&w.y>=m&&w.y<=p&&w!==s&&w!==o&&Gs(a,h,l,u,c,d,w.x,w.y)&&Ne(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Gs(a,h,l,u,c,d,M.x,M.y)&&Ne(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=E;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=p&&w!==s&&w!==o&&Gs(a,h,l,u,c,d,w.x,w.y)&&Ne(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function iy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Pa(s,r)&&Xf(s,i,i.next,r)&&Wr(s,r)&&Wr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Xr(i),Xr(i.next),i=n=r),i=i.next}while(i!==n);return us(i)}function sy(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dy(o,a)){let l=qf(o,a);o=us(o,o.next),l=us(l,l.next),Vr(o,t,e,i,s,r,0),Vr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ry(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Wf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(fy(c));for(s.sort(oy),r=0;r<s.length;r++)e=ay(s[r],e);return e}function oy(n,t){return n.x-t.x}function ay(n,t){let e=ly(n,t);if(!e)return t;let i=qf(e,n);return us(i,i.next),us(e,e.next)}function ly(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Gs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Wr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&cy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function cy(n,t){return Ne(n.prev,n,t.prev)<0&&Ne(t.next,n,n.next)<0}function hy(n,t,e,i){let s=n;do s.z===0&&(s.z=eh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,uy(s)}function uy(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function eh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function fy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Gs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function dy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!py(n,t)&&(Wr(n,t)&&Wr(t,n)&&my(n,t)&&(Ne(n.prev,n,t.prev)||Ne(n,t.prev,t))||Pa(n,t)&&Ne(n.prev,n,n.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Pa(n,t){return n.x===t.x&&n.y===t.y}function Xf(n,t,e,i){let s=Go(Ne(n,t,e)),r=Go(Ne(n,t,i)),o=Go(Ne(e,i,n)),a=Go(Ne(e,i,t));return!!(s!==r&&o!==a||s===0&&Ho(n,e,t)||r===0&&Ho(n,i,t)||o===0&&Ho(e,n,i)||a===0&&Ho(e,t,i))}function Ho(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Go(n){return n>0?1:n<0?-1:0}function py(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Xf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Wr(n,t){return Ne(n.prev,n,n.next)<0?Ne(n,t,n.next)>=0&&Ne(n,n.prev,t)>=0:Ne(n,t,n.prev)<0||Ne(n,n.next,t)<0}function my(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function qf(n,t){let e=new nh(n.i,n.x,n.y),i=new nh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function pf(n,t,e,i){let s=new nh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ki=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];mf(t),gf(i,t);let o=t.length;e.forEach(mf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,gf(i,e[l]);let a=ty.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function mf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function gf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var qr=class n extends He{constructor(t=new Gi([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:_y,M,w=!1,D,P,R,L;g&&(M=g.getSpacedPoints(h),w=!0,d=!1,D=g.computeFrenetFrames(h,!1),P=new I,R=new I,L=new I),d||(p=0,f=0,m=0,x=0);let q=a.extractPoints(c),_=q.shape,v=q.holes;if(!ki.isClockWise(_)){_=_.reverse();for(let C=0,S=v.length;C<S;C++){let H=v[C];ki.isClockWise(H)&&(v[C]=H.reverse())}}let B=ki.triangulateShape(_,v),X=_;for(let C=0,S=v.length;C<S;C++){let H=v[C];_=_.concat(H)}function rt(C,S,H){return S||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(S,H)}let z=_.length,ht=B.length;function Z(C,S,H){let G,V,K,ot=C.x-S.x,it=C.y-S.y,T=H.x-C.x,y=H.y-C.y,k=ot*ot+it*it,Q=ot*y-it*T;if(Math.abs(Q)>Number.EPSILON){let st=Math.sqrt(k),tt=Math.sqrt(T*T+y*y),It=S.x-it/st,pt=S.y+ot/st,vt=H.x-y/tt,Qt=H.y+T/tt,ct=((vt-It)*y-(Qt-pt)*T)/(ot*y-it*T);G=It+ot*ct-C.x,V=pt+it*ct-C.y;let bt=G*G+V*V;if(bt<=2)return new ft(G,V);K=Math.sqrt(bt/2)}else{let st=!1;ot>Number.EPSILON?T>Number.EPSILON&&(st=!0):ot<-Number.EPSILON?T<-Number.EPSILON&&(st=!0):Math.sign(it)===Math.sign(y)&&(st=!0),st?(G=-it,V=ot,K=Math.sqrt(k)):(G=ot,V=it,K=Math.sqrt(k/2))}return new ft(G/K,V/K)}let yt=[];for(let C=0,S=X.length,H=S-1,G=C+1;C<S;C++,H++,G++)H===S&&(H=0),G===S&&(G=0),yt[C]=Z(X[C],X[H],X[G]);let Mt=[],St,Ht=yt.concat();for(let C=0,S=v.length;C<S;C++){let H=v[C];St=[];for(let G=0,V=H.length,K=V-1,ot=G+1;G<V;G++,K++,ot++)K===V&&(K=0),ot===V&&(ot=0),St[G]=Z(H[G],H[K],H[ot]);Mt.push(St),Ht=Ht.concat(St)}for(let C=0;C<p;C++){let S=C/p,H=f*Math.cos(S*Math.PI/2),G=m*Math.sin(S*Math.PI/2)+x;for(let V=0,K=X.length;V<K;V++){let ot=rt(X[V],yt[V],G);gt(ot.x,ot.y,-H)}for(let V=0,K=v.length;V<K;V++){let ot=v[V];St=Mt[V];for(let it=0,T=ot.length;it<T;it++){let y=rt(ot[it],St[it],G);gt(y.x,y.y,-H)}}}let Ft=m+x;for(let C=0;C<z;C++){let S=d?rt(_[C],Ht[C],Ft):_[C];w?(R.copy(D.normals[0]).multiplyScalar(S.x),P.copy(D.binormals[0]).multiplyScalar(S.y),L.copy(M[0]).add(R).add(P),gt(L.x,L.y,L.z)):gt(S.x,S.y,0)}for(let C=1;C<=h;C++)for(let S=0;S<z;S++){let H=d?rt(_[S],Ht[S],Ft):_[S];w?(R.copy(D.normals[C]).multiplyScalar(H.x),P.copy(D.binormals[C]).multiplyScalar(H.y),L.copy(M[C]).add(R).add(P),gt(L.x,L.y,L.z)):gt(H.x,H.y,u/h*C)}for(let C=p-1;C>=0;C--){let S=C/p,H=f*Math.cos(S*Math.PI/2),G=m*Math.sin(S*Math.PI/2)+x;for(let V=0,K=X.length;V<K;V++){let ot=rt(X[V],yt[V],G);gt(ot.x,ot.y,u+H)}for(let V=0,K=v.length;V<K;V++){let ot=v[V];St=Mt[V];for(let it=0,T=ot.length;it<T;it++){let y=rt(ot[it],St[it],G);w?gt(y.x,y.y+M[h-1].y,M[h-1].x+H):gt(y.x,y.y,u+H)}}}et(),ut();function et(){let C=s.length/3;if(d){let S=0,H=z*S;for(let G=0;G<ht;G++){let V=B[G];Wt(V[2]+H,V[1]+H,V[0]+H)}S=h+p*2,H=z*S;for(let G=0;G<ht;G++){let V=B[G];Wt(V[0]+H,V[1]+H,V[2]+H)}}else{for(let S=0;S<ht;S++){let H=B[S];Wt(H[2],H[1],H[0])}for(let S=0;S<ht;S++){let H=B[S];Wt(H[0]+z*h,H[1]+z*h,H[2]+z*h)}}i.addGroup(C,s.length/3-C,0)}function ut(){let C=s.length/3,S=0;Rt(X,S),S+=X.length;for(let H=0,G=v.length;H<G;H++){let V=v[H];Rt(V,S),S+=V.length}i.addGroup(C,s.length/3-C,1)}function Rt(C,S){let H=C.length;for(;--H>=0;){let G=H,V=H-1;V<0&&(V=C.length-1);for(let K=0,ot=h+p*2;K<ot;K++){let it=z*K,T=z*(K+1),y=S+G+it,k=S+V+it,Q=S+V+T,st=S+G+T;zt(y,k,Q,st)}}}function gt(C,S,H){l.push(C),l.push(S),l.push(H)}function Wt(C,S,H){Xt(C),Xt(S),Xt(H);let G=s.length/3,V=E.generateTopUV(i,s,G-3,G-2,G-1);jt(V[0]),jt(V[1]),jt(V[2])}function zt(C,S,H,G){Xt(C),Xt(S),Xt(G),Xt(S),Xt(H),Xt(G);let V=s.length/3,K=E.generateSideWallUV(i,s,V-6,V-3,V-2,V-1);jt(K[0]),jt(K[1]),jt(K[3]),jt(K[1]),jt(K[2]),jt(K[3])}function Xt(C){s.push(l[C*3+0]),s.push(l[C*3+1]),s.push(l[C*3+2])}function jt(C){r.push(C.x),r.push(C.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return xy(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jc[s.type]().fromJSON(s)),new n(i,t.options)}},_y={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-u),new ft(d,1-m),new ft(x,1-g)]:[new ft(a,1-l),new ft(h,1-u),new ft(f,1-m),new ft(p,1-g)]}};function xy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ba=class n extends He{constructor(t=new Gi([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;ki.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let E=m[p];ki.isClockWise(E)===!0&&(m[p]=E.reverse())}let x=ki.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let E=m[p];f=f.concat(E)}for(let p=0,g=f.length;p<g;p++){let E=f[p];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let p=0,g=x.length;p<g;p++){let E=x[p],M=E[0]+u,w=E[1]+u,D=E[2]+u;i.push(M,w,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return yy(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function yy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var dn=class n extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let E=[],M=g/i,w=0;g===0&&o===0?w=.5/e:g===i&&l===Math.PI&&(w=-.5/e);for(let D=0;D<=e;D++){let P=D/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(P+w,1-M),E.push(c++)}h.push(E)}for(let g=0;g<i;g++)for(let E=0;E<e;E++){let M=h[g][E+1],w=h[g][E],D=h[g+1][E],P=h[g+1][E+1];(g!==0||o>0)&&f.push(M,w,P),(g!==i-1||l<Math.PI)&&f.push(w,D,P)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ea=class n extends He{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){let x=m/s*r,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,p=(s+1)*(f-1)+m-1,g=(s+1)*(f-1)+m,E=(s+1)*f+m;o.push(x,p,E),o.push(p,g,E)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var vn=class extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function vy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var er=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ih=class extends er{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xu:r=t,a=2*e-i;break;case yu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xu:o=t,l=2*i-e;break;case yu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,E=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*p+(1.5+f)*x+.5*m,w=f*p-f*x;for(let D=0;D!==a;++D)r[D]=g*o[h+D]+E*o[c+D]+M*o[l+D]+w*o[u+D];return r}},sh=class extends er{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},rh=class extends er{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Yn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(e,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new rh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ih(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ko:e=this.InterpolantFactoryMethodDiscrete;break;case Rc:e=this.InterpolantFactoryMethodLinear;break;case ll:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return Rc;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&vy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ll,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Rc;var fs=class extends Yn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ko;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends Yn{};oh.prototype.ValueTypeName="color";var ah=class extends Yn{};ah.prototype.ValueTypeName="number";var lh=class extends er{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wa=class extends Yn{InterpolantFactoryMethodLinear(t){return new lh(this.times,this.values,this.getValueSize(),t)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Yn{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Ko;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var ch=class extends Yn{};ch.prototype.ValueTypeName="vector";var hh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},My=new hh,uh=class{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uh.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ir=class extends nr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Gl=new Se,_f=new I,xf=new I,Yr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;_f.setFromMatrixPosition(t.matrixWorld),e.position.copy(_f),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fh=class extends Yr{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=ea*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ta=class extends nr{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yf=new Se,Ir=new I,Vl=new I,dh=class extends Yr{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ir),Vl.copy(i.position),Vl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Vl),i.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),yf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}},yi=class extends nr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ph=class extends Yr{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new ph}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Th="\\[\\]\\.:\\/",Sy=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",by="[^"+Th.replace("\\.","")+"]",Ey=/((?:WC+[\/:])*)/.source.replace("WC",Ah),wy=/(WCOD+)?/.source.replace("WCOD",by),Ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),Ry=new RegExp("^"+Ey+wy+Ty+Ay+"$"),Cy=["material","materials","bones","map"],mh=class{constructor(t,e,i){let s=i||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sy,"")}static parseTrackName(t){let e=Ry.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Cy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=mh;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var La=class extends cs{constructor(){super();let t=new Xn;t.deleteAttribute("uv");let e=new vn({side:Je}),i=new vn,s=new yi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new nt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new nt(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new nt(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new nt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new nt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new nt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new nt(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new nt(t,or(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new nt(t,or(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new nt(t,or(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new nt(t,or(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new nt(t,or(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let g=new nt(t,or(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function or(n){let t=new ye;return t.color.setScalar(n),t}var $={mx:0,my:0,lx:0,ly:0,fire:!1,aim:!1,sprint:!1,use:!1,gas:0,brake:0,pressed:new Set,device:"kbm",padName:"",sens:1,invertY:!1},pn=new Set,$r=n=>$.pressed.add(n),mn=n=>$.pressed.has(n);function Rh(){$.pressed.clear(),$.lx=0,$.ly=0}var Yf={KeyR:"reload",KeyF:"use",KeyE:"use",KeyQ:"swap",Digit1:"slot1",Digit2:"slot2",Digit3:"slot3",KeyV:"knife",KeyG:"grenade",KeyC:"view",KeyB:"build",Space:"jump",Escape:"pause",KeyP:"pause",KeyT:"rotate",KeyX:"rotate",Tab:"scores"};function $f(n,t){addEventListener("keydown",e=>{if(e.repeat&&(e.code==="KeyF"||e.code==="KeyE"))return;pn.add(e.code);let i=Yf[e.code];i&&!e.repeat&&$r(i),i==="use"&&($.use=!0),(e.code==="Tab"||e.code==="Space")&&e.preventDefault(),$.device!=="kbm"&&/Key|Digit|Space|Shift/.test(e.code)&&ps("kbm")}),addEventListener("keyup",e=>{pn.delete(e.code),Yf[e.code]==="use"&&($.use=pn.has("KeyF")||pn.has("KeyE"))}),addEventListener("blur",()=>{pn.clear(),$.fire=$.aim=$.use=!1}),n.addEventListener("mousedown",e=>{if($.device!=="touch"){if(ps("kbm"),document.pointerLockElement!==n){t.canLock()&&n.requestPointerLock?.();return}e.button===0&&($.fire=!0),e.button===2&&($.aim=!0)}}),addEventListener("mouseup",e=>{e.button===0&&($.fire=!1),e.button===2&&($.aim=!1)}),n.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("mousemove",e=>{document.pointerLockElement===n&&($.lx+=e.movementX*.0022*$.sens,$.ly+=e.movementY*.0022*$.sens*($.invertY?-1:1))}),addEventListener("wheel",e=>{document.pointerLockElement===n&&$r(e.deltaY>0?"swap":"swapBack")},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==n&&($.fire=$.aim=!1,t.onUnlock())}),Py(t),addEventListener("gamepadconnected",e=>{$.padName=e.gamepad.id,t.toast((/dualsense|054c|wireless controller|ps5/i.test(e.gamepad.id)?"PS5 controller":"Controller")+" connected")}),addEventListener("gamepaddisconnected",()=>{t.toast("Controller disconnected")})}function ps(n){$.device!==n&&($.device=n,document.body.dataset.device=n)}function Kf(){$.device==="kbm"&&($.mx=(pn.has("KeyD")||pn.has("ArrowRight")?1:0)-(pn.has("KeyA")||pn.has("ArrowLeft")?1:0),$.my=(pn.has("KeyW")||pn.has("ArrowUp")?1:0)-(pn.has("KeyS")||pn.has("ArrowDown")?1:0),$.sprint=pn.has("ShiftLeft")||pn.has("ShiftRight"),$.gas=$.my>0?1:0,$.brake=$.my<0?1:0)}var Da=[],Zf=0;function Jf(n){let t=navigator.getGamepads?navigator.getGamepads():[],e=null;for(let m of t)if(m&&m.connected){e=m;break}if(!e)return;let i=m=>e.buttons[m]?e.buttons[m].value>.4||e.buttons[m].pressed:!1,s=m=>e.buttons[m]?e.buttons[m].value:0,r=(m,x=.16)=>Math.abs(m)<x?0:(m-Math.sign(m)*x)/(1-x),o=r(e.axes[0]||0),a=r(e.axes[1]||0),l=r(e.axes[2]||0,.12),c=r(e.axes[3]||0,.12),h=Math.abs(o)+Math.abs(a)+Math.abs(l)+Math.abs(c)>0;for(let m=0;m<16;m++)i(m)&&(h=!0);if(h?(ps("pad"),Zf=0):Zf+=n,$.device!=="pad"){for(let m=0;m<17;m++)Da[m]=i(m);return}$.mx=o,$.my=-a;let u=m=>Math.sign(m)*Math.pow(Math.abs(m),1.8),d=i(6)?.55:1;$.lx+=u(l)*3.4*n*$.sens*d,$.ly+=u(c)*2.4*n*$.sens*d*($.invertY?-1:1),$.fire=i(7),$.aim=i(6),$.gas=s(7),$.brake=s(6),i(10)&&!Da[10]&&($.sprintToggle=!$.sprintToggle),Math.hypot(o,a)<.3&&($.sprintToggle=!1),$.sprint=!!$.sprintToggle,$.use=i(2);let f=(m,x)=>{i(m)&&!Da[m]&&$r(x)};f(0,"jump"),f(1,"build"),f(2,"use"),f(2,"reload"),f(3,"swap"),f(5,"knife"),f(4,"grenade"),f(11,"knife"),f(9,"pause"),f(12,"view"),f(13,"rotate"),f(14,"swapBack"),f(15,"swap"),f(8,"scores");for(let m=0;m<17;m++)Da[m]=i(m)}function Kr(n,t,e){if($.device!=="pad")return;let i=navigator.getGamepads?navigator.getGamepads():[];for(let s of i)s&&s.vibrationActuator&&s.vibrationActuator.playEffect?.("dual-rumble",{duration:e,strongMagnitude:n,weakMagnitude:t}).catch?.(()=>{})}function Py(n){let t=document.getElementById("touch"),e=document.getElementById("stick"),i=document.getElementById("knob"),s=null,r=0,o=0,a=new Map,l=()=>Math.min(70,innerHeight*.12),c=d=>{if($.device!=="touch"&&ps("touch"),!!n.playing())for(let f of d.changedTouches){let m=document.elementFromPoint(f.clientX,f.clientY),x=m&&m.closest&&m.closest("[data-b]");if(x){let p=x.dataset.b;x.classList.add("on"),a.set(f.identifier,{x:f.clientX,y:f.clientY,btn:p,el:x}),p==="fire"?$.fire=!0:p==="aim"?($.aim=!$.aim,x.classList.toggle("lock",$.aim)):p==="use"?($.use=!0,$r("use")):p==="sprint"?($.sprintToggle=!$.sprintToggle,x.classList.toggle("lock",$.sprintToggle)):$r(p),d.preventDefault();continue}f.clientX<innerWidth*.42&&s===null?(s=f.identifier,r=f.clientX,o=f.clientY,e.style.left=r+"px",e.style.top=o+"px",e.classList.add("on"),i.style.transform="translate(-50%,-50%)"):a.set(f.identifier,{x:f.clientX,y:f.clientY,btn:null}),d.preventDefault()}},h=d=>{for(let f of d.changedTouches){if(f.identifier===s){let x=f.clientX-r,p=f.clientY-o,g=Math.hypot(x,p),E=l();g>E&&(x*=E/g,p*=E/g),$.mx=x/E,$.my=-p/E,$.gas=Math.max(0,$.my),$.brake=Math.max(0,-$.my),i.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${p}px))`,Math.hypot($.mx,$.my)>.97&&$.my>.8?$.autoSprint=!0:$.my<.5&&($.autoSprint=!1)}let m=a.get(f.identifier);if(m&&(m.btn===null||m.btn==="fire"||m.btn==="aim")){let x=.0052*$.sens*($.aim?.6:1);$.lx+=(f.clientX-m.x)*x,$.ly+=(f.clientY-m.y)*x*.85*($.invertY?-1:1),m.x=f.clientX,m.y=f.clientY}}d.preventDefault()},u=d=>{for(let f of d.changedTouches){f.identifier===s&&(s=null,$.mx=$.my=0,$.gas=$.brake=0,$.autoSprint=!1,e.classList.remove("on"));let m=a.get(f.identifier);m&&(m.btn==="fire"&&($.fire=!1),m.btn==="use"&&($.use=!1),m.el&&m.el.classList.remove("on"),a.delete(f.identifier))}};t.addEventListener("touchstart",c,{passive:!1}),t.addEventListener("touchmove",h,{passive:!1}),t.addEventListener("touchend",u),t.addEventListener("touchcancel",u),addEventListener("touchstart",()=>{$.device!=="touch"&&!n.playing()&&ps("touch")},{passive:!0})}function jf(){return $.device==="touch"&&($.sprintToggle||$.autoSprint)}var Lt=null,Cn=null,Ua=null,Wi=null,Iy=null,td=.8;function ed(){if(Lt){Lt.state==="suspended"&&Lt.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Lt=new n,Cn=Lt.createGain(),Cn.gain.value=td;let t=Lt.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=6,Cn.connect(t),t.connect(Lt.destination),Ua=Lt.createBuffer(1,Lt.sampleRate*1.5,Lt.sampleRate);let e=Ua.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;Ly()}function Ch(n){td=n,Cn&&(Cn.gain.value=n)}var pe=()=>Lt.currentTime;function Ph(n,t,e,i,s,r=1e-4){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(r,t+e+s)}function Ie(n,t,e,i,s,r="lowpass",o=Cn,a=1){let l=Lt.createBufferSource();l.buffer=Ua,l.playbackRate.value=a;let c=Lt.createBiquadFilter();c.type=r,c.frequency.value=e,c.Q.value=i;let h=Lt.createGain();return Ph(h,n,.003,s,t),l.connect(c),c.connect(h),h.connect(o),l.start(n,Math.random()),l.stop(n+t+.05),c}function de(n,t,e,i,s,r="sine",o=Cn){let a=Lt.createOscillator();a.type=r,a.frequency.setValueAtTime(t,n),a.frequency.exponentialRampToValueAtTime(Math.max(20,e),n+i);let l=Lt.createGain();Ph(l,n,.005,s,i),a.connect(l),l.connect(o),a.start(n),a.stop(n+i+.05)}function Qf(n){let t=Lt.createStereoPanner?Lt.createStereoPanner():null;return t?(t.pan.value=Math.max(-1,Math.min(1,n)),t.connect(Cn),t):Cn}var re={shot(n=1,t=.25,e=!1){if(!Lt)return;let i=pe();if(e){de(i,1800*n,200,.35,.3,"sawtooth"),de(i,900,80,.4,.25,"square"),Ie(i,.2,3e3,2,.2,"bandpass");return}Ie(i,.08+t*.25,2600*n,.7,.55+t*.4),Ie(i,.05,6e3*n,1,.25,"highpass"),de(i,160*n,40,.12+t*.25,.5+t*.5,"sine"),Ie(i+.02,.4+t,900,.5,.06+t*.06)},dry(){if(!Lt)return;let n=pe();de(n,1800,1500,.03,.15,"square")},reload(n){if(!Lt)return;let t=pe();Ie(t,.05,n?3500:1800,3,.35,"bandpass"),de(t,n?900:500,300,.05,.12,"square")},hit(n){if(!Lt)return;let t=pe();Ie(t,.06,n?2500:1100,1.5,.35,"bandpass"),n&&de(t,1400,900,.08,.15,"triangle")},hitmarker(){if(!Lt)return;let n=pe();de(n,2600,2400,.03,.08,"square")},kill(){if(!Lt)return;let n=pe();Ie(n,.18,600,1,.3)},knife(){if(!Lt)return;let n=pe();Ie(n,.12,4500,2,.35,"bandpass",Cn,1.4)},groan(n=0,t=5){if(!Lt)return;let e=pe(),i=Math.min(.35,1.6/(t+1)),s=Qf(n),r=70+Math.random()*70,o=Lt.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(r,e),o.frequency.linearRampToValueAtTime(r*(.6+Math.random()*.5),e+.8);let a=Lt.createBiquadFilter();a.type="bandpass",a.frequency.value=500+Math.random()*400,a.Q.value=3;let l=Lt.createOscillator();l.frequency.value=7+Math.random()*8;let c=Lt.createGain();c.gain.value=18,l.connect(c),c.connect(o.frequency);let h=Lt.createGain();Ph(h,e,.15,i,.9),o.connect(a),a.connect(h),h.connect(s),o.start(e),l.start(e),o.stop(e+1.2),l.stop(e+1.2)},scream(n=0){if(!Lt)return;let t=pe(),e=Qf(n);de(t,700,300,.6,.2,"sawtooth",e),Ie(t,.5,1500,4,.2,"bandpass",e)},plank(){if(!Lt)return;let n=pe();Ie(n,.25,700,2,.5,"bandpass"),de(n,180,90,.15,.25,"triangle")},nail(){if(!Lt)return;let n=pe();de(n,1600,1200,.05,.3,"square"),Ie(n,.08,4e3,3,.3,"bandpass")},hurt(){if(!Lt)return;let n=pe();Ie(n,.2,400,1,.6),de(n,120,60,.25,.4)},buy(){if(!Lt)return;let n=pe();[1046,1318,1568].forEach((t,e)=>de(n+e*.06,t,t,.18,.18,"triangle")),Ie(n,.1,6e3,1,.1,"highpass")},deny(){if(!Lt)return;let n=pe();de(n,220,180,.2,.2,"square")},door(){if(!Lt)return;let n=pe();Ie(n,.8,300,1,.5),de(n,90,40,.6,.4,"sawtooth")},round(n){if(!Lt)return;let t=pe();(n?[196,233,196,174,196]:[196,247,294,247,220,196]).forEach((i,s)=>{de(t+s*.32,i,i*.99,.5,.22,"sawtooth"),de(t+s*.32,i/2,i/2,.55,.18,"triangle")}),Ie(t,2.2,120,.5,.15)},box(){if(!Lt)return;let n=pe();[784,659,698,587,659,523,587,494,523,659,784,1046].forEach((e,i)=>de(n+i*.2,e,e,.22,.12,"triangle"))},boxReveal(){if(!Lt)return;let n=pe();de(n,523,1046,.4,.2,"triangle"),de(n+.1,784,1568,.4,.15,"triangle")},teddy(){if(!Lt)return;let n=pe();de(n,300,80,1.2,.3,"sawtooth")},power(){if(!Lt)return;let n=pe();de(n,50,300,2,.4,"sawtooth"),Ie(n,1.5,800,1,.3),de(n+1.6,900,900,.3,.2,"square")},perk(){if(!Lt)return;let n=pe();Ie(n,.15,2e3,1,.2),[523,659,784,1046].forEach((t,e)=>de(n+.25+e*.09,t,t,.2,.15,"triangle"))},powerup(n){if(!Lt)return;let t=pe();(n==="nuke"?[200,100,50]:[660,880,1100,1320]).forEach((i,s)=>de(t+s*.08,i,i,.25,.25,n==="nuke"?"sawtooth":"square")),n==="nuke"&&Ie(t,1.6,200,.5,.8)},boom(){if(!Lt)return;let n=pe();Ie(n,1.2,380,.4,1),de(n,90,25,.9,.8)},spike(){if(!Lt)return;let n=pe();Ie(n,.12,1500,2,.25,"bandpass")},build(){if(!Lt)return;let n=pe();for(let t=0;t<3;t++)de(n+t*.09,1500,1100,.05,.25,"square"),Ie(n+t*.09,.07,3500,3,.25,"bandpass")},splat(){if(!Lt)return;let n=pe();Ie(n,.25,500,1,.5),de(n,200,60,.2,.3)},toxic(){if(!Lt)return;let n=pe();Ie(n,.6,900,1,.5),de(n,300,60,.5,.3,"square")},heartbeat(){if(!Lt)return;let n=pe();de(n,60,40,.12,.6),de(n+.2,55,40,.12,.45)},carDoor(){if(!Lt)return;let n=pe();Ie(n,.12,600,1,.5),de(n,140,80,.1,.3,"square")},crash(n){if(!Lt)return;let t=pe();Ie(t,.4,500,.6,Math.min(1,n*.08))}};function vi(n,t=0){if(!Lt)return;if(n&&!Wi){let s=Lt.createOscillator();s.type="sawtooth";let r=Lt.createOscillator();r.type="square";let o=Lt.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let a=Lt.createGain();a.gain.value=1e-4,s.connect(o),r.connect(o),o.connect(a),a.connect(Cn),s.start(),r.start(),Wi={o:s,o2:r,f:o,g:a}}if(!Wi)return;let e=pe();if(!n){Wi.g.gain.setTargetAtTime(1e-4,e,.1);return}let i=34+t*70;Wi.o.frequency.setTargetAtTime(i,e,.05),Wi.o2.frequency.setTargetAtTime(i*.5,e,.05),Wi.f.frequency.setTargetAtTime(380+t*900,e,.05),Wi.g.gain.setTargetAtTime(.12+t*.1,e,.05)}function Ly(){let n=Lt.createBufferSource();n.buffer=Ua,n.loop=!0;let t=Lt.createBiquadFilter();t.type="lowpass",t.frequency.value=260;let e=Lt.createGain();e.gain.value=.05,n.connect(t),t.connect(e),e.connect(Cn),n.start();let i=Lt.createOscillator();i.frequency.value=55;let s=Lt.createGain();s.gain.value=.02;let r=Lt.createOscillator();r.frequency.value=.07;let o=Lt.createGain();o.gain.value=.015,r.connect(o),o.connect(s.gain),i.connect(s),s.connect(Cn),i.start(),r.start(),Iy={g:e,og:s}}var he=new Uint8Array(1760),Si=new Int8Array(1760).fill(-1),On=new Int16Array(1760).fill(-1),ne=(n,t)=>t*44+n,Zn=(n,t)=>n>=0&&t>=0&&n<44&&t<40,Mi=(n,t)=>Zn(n,t)?he[ne(n,t)]:5,Oe=n=>Math.floor(n/2),Vt=n=>n*2+2/2,bi=[],gn=[],Na=[],Jr=new Set([0]);function Ih(n,t,e,i,s,r,o){Na.push({name:n,z:t,i0:e,j0:i,i1:s,j1:r,floorKind:o});for(let a=i-1;a<=r+1;a++)for(let l=e-1;l<=s+1;l++){let c=ne(l,a);l>=e&&l<=s&&a>=i&&a<=r?(he[c]=1,Si[c]=t):he[c]===0&&(he[c]=2)}}function Lh(n,t,e,i){let s=bi.length,r=n.length>1&&n[0][1]===n[1][1]?"x":"z";bi.push({id:s,tiles:n,cost:t,zone:e,open:!1,label:i,axis:r});for(let[o,a]of n)he[ne(o,a)]=4,On[ne(o,a)]=s}function Dh(n,t){let e=gn.length,i=Mi(n-1,t)===2||Mi(n+1,t)===2?"x":"z",s=i==="x"?Mi(n,t+1)===0?[0,1]:[0,-1]:Mi(n+1,t)===0?[1,0]:[-1,0];gn.push({id:e,i:n,j:t,planks:6,axis:i,outDir:s,rip:0}),he[ne(n,t)]=3,On[ne(n,t)]=e}function jr(n,t){Zn(n,t)&&(he[ne(n,t)]=6)}function Oh(){he.fill(0),Si.fill(-1),On.fill(-1),bi.length=0,gn.length=0,Na.length=0,Jr.clear(),Jr.add(0);for(let n=0;n<40;n++)for(let t=0;t<44;t++){let e=ne(t,n);t===0||n===0||t===43||n===39?he[e]=5:Si[e]=1}Ih("Lobby",0,17,22,26,29,"carpet"),Ih("Diner",2,28,22,37,29,"checker"),Ih("Garage",3,6,6,15,13,"concrete"),Lh([[21,21],[22,21]],750,1,"Parking Lot"),Lh([[27,25],[27,26]],1e3,2,"Diner"),Lh([[10,14],[11,14]],1250,3,"Garage");for(let[n,t]of[[18,21],[25,21],[19,30],[24,30],[16,25],[16,28]])Dh(n,t);for(let[n,t]of[[31,21],[35,21],[38,24],[38,28],[33,30]])Dh(n,t);for(let[n,t]of[[8,5],[13,5],[5,9],[16,10]])Dh(n,t)}function Qr(n){return n===2||n===3||n===4||n===5||n===6||n===7}function to(n,t){return n===2||n===5||n===6||n===4||n===7||n===8||n===3&&gn[On[t]].planks>0}function Oa(n){return n!==0&&n!==9}function nd(n){return n===2||n===4||n===6}function ar(n,t,e){let i=Oe(n.x-t),s=Oe(n.x+t),r=Oe(n.z-t),o=Oe(n.z+t),a=!1;for(let l=r;l<=o;l++)for(let c=i;c<=s;c++){let h=Zn(c,l)?ne(c,l):-1,u=h<0?5:he[h];if(!e(u,h))continue;let d=Math.max(c*2,Math.min(n.x,c*2+2)),f=Math.max(l*2,Math.min(n.z,l*2+2)),m=n.x-d,x=n.z-f,p=Math.hypot(m,x);if(p<t)if(a=!0,p>1e-5)n.x+=m/p*(t-p),n.z+=x/p*(t-p);else{let g=c*2+1,E=l*2+2/2;m=n.x-g,x=n.z-E,Math.abs(m)>Math.abs(x)?n.x=g+Math.sign(m||1)*(2/2+t):n.z=E+Math.sign(x||1)*(2/2+t)}}return a}function Fa(n,t,e,i,s,r){let o=Math.hypot(e,i);if(o<1e-6)return s;e/=o,i/=o;let a=Oe(n),l=Oe(t),c=e>0?1:-1,h=i>0?1:-1,u=Math.abs(2/(e||1e-9)),d=Math.abs(2/(i||1e-9)),f=e>0?((a+1)*2-n)/e:e<0?(a*2-n)/e:1/0,m=i>0?((l+1)*2-t)/i:i<0?(l*2-t)/i:1/0,x=0;for(let p=0;p<200&&x<s&&(f<m?(x=f,f+=u,a+=c):(x=m,m+=d,l+=h),!(x>s));p++){let g=Zn(a,l)?ne(a,l):-1;if(r(g<0?5:he[g],g))return x}return s}var ei=new Float32Array(1760),Le=[],Nh=1e9;function Uh(n){let t=he[n];return t===0||t===1||t===9?t===9?4:1:t===3?gn[On[n]].planks>0?3+gn[On[n]].planks:1.5:t===7||t===8?30:Nh}function id(n,t){if(ei.fill(Nh),Le.length=0,!Zn(n,t))return;let e=ne(n,t);ei[e]=0,Le.push([0,e]);let i=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;Le.length;){let[s,r]=Uy();if(s>ei[r])continue;let o=r%44,a=r/44|0;for(let[l,c,h]of i){let u=o+l,d=a+c;if(!Zn(u,d))continue;let f=ne(u,d);if(l&&c&&(Uh(ne(o+l,a))>=2||Uh(ne(o,a+c))>=2))continue;let m=Uh(f);if(m>=Nh)continue;let x=s+m*h;x<ei[f]&&(ei[f]=x,Dy([x,f]))}}}function Dy(n){Le.push(n);let t=Le.length-1;for(;t>0;){let e=t-1>>1;if(Le[e][0]<=Le[t][0])break;[Le[e],Le[t]]=[Le[t],Le[e]],t=e}}function Uy(){let n=Le[0],t=Le.pop();if(Le.length){Le[0]=t;let e=0;for(;;){let i=e*2+1,s=i+1,r=e;if(i<Le.length&&Le[i][0]<Le[r][0]&&(r=i),s<Le.length&&Le[s][0]<Le[r][0]&&(r=s),r===e)break;[Le[r],Le[e]]=[Le[e],Le[r]],e=r}}return n}var sd=[[3,3],[22,2],[40,3],[2,20],[41,17],[3,36],[14,37],[30,37],[40,36],[41,30],[25,16],[3,28]];function lr(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new He,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=rd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=rd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function rd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new je(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Fn=(n,t,e)=>n<t?t:n>e?e:n,Ei=(n,t,e)=>n+(t-n)*e;function Bn(n){let t=n>>>0||1;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}var Be=Math.random,ms=n=>n[Math.random()*n.length|0];function Ba(n,t){let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var mt=n=>document.getElementById(n);var ka=new Map,od=4;function ad(n){od=n;for(let t of ka.values())t.anisotropy=n,t.needsUpdate=!0}function ue(n,t,e,i,s=!0){if(ka.has(n))return ka.get(n);let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");i(o,t,e);let a=new _a(r);return s&&(a.colorSpace=yn),a.wrapS=a.wrapT=Or,a.anisotropy=od,ka.set(n,a),a}function an(n,t,e,i,s,r,o,a){let l=Bn(a);for(let c=0;c<i;c++){n.fillStyle=s[l()*s.length|0];let h=r+l()*(o-r);n.fillRect(l()*t,l()*e,h,h)}}function Ze(n,t,e,i,s,r,o,a){let l=Bn(a);for(let c=0;c<i;c++){let h=l()*t,u=l()*e,d=r+l()*(o-r);for(let f of[-t,0,t])for(let m of[-e,0,e]){let x=n.createRadialGradient(h+f,u+m,0,h+f,u+m,d);x.addColorStop(0,s),x.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=x,n.fillRect(h+f-d,u+m-d,d*2,d*2)}}}function cr(n,t,e,i){let s=n.createLinearGradient(0,e,0,e*.55);s.addColorStop(0,`rgba(25,20,15,${i})`),s.addColorStop(1,"rgba(25,20,15,0)"),n.fillStyle=s,n.fillRect(0,0,t,e)}function Fh(n,t,e,i,s=2){return ue(n,t,e,r=>{let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");i(a,t,e);let l=a.getImageData(0,0,t,e).data,c=r.createImageData(t,e),h=c.data,u=(d,f)=>l[((f+e)%e*t+(d+t)%t)*4]/255;for(let d=0;d<e;d++)for(let f=0;f<t;f++){let m=(u(f+1,d)-u(f-1,d))*s,x=(u(f,d+1)-u(f,d-1))*s,p=Math.hypot(m,x,1),g=(d*t+f)*4;h[g]=(-m/p*.5+.5)*255,h[g+1]=(x/p*.5+.5)*255,h[g+2]=(1/p*.5+.5)*255,h[g+3]=255}r.putImageData(c,0,0)},!1)}var Ny=(n,t,e)=>{n.fillStyle="#fff",n.fillRect(0,0,t,e),n.fillStyle="#444";let i=e/16,s=t/4;for(let r=0;r<16;r++){n.fillRect(0,r*i,t,3);let o=r%2?s/2:0;for(let a=0;a<=4;a++)n.fillRect(o+a*s-1.5,r*i,3,i)}an(n,t,e,1500,["#ddd","#bbb"],1,3,3)},Tt={asphalt:()=>ue("asphalt",512,512,(n,t,e)=>{n.fillStyle="#2b2c2e",n.fillRect(0,0,t,e),an(n,t,e,26e3,["#242527","#333436","#3b3c3e","#1f2022","#46474a"],1,2.5,1),Ze(n,t,e,14,"rgba(10,10,12,.35)",30,90,2),Ze(n,t,e,10,"rgba(90,85,70,.12)",20,70,3);let i=Bn(4);n.strokeStyle="rgba(8,8,8,.75)",n.lineCap="round";for(let s=0;s<9;s++){n.lineWidth=1+i()*2,n.beginPath();let r=i()*t,o=i()*e;n.moveTo(r,o);for(let a=0;a<7;a++)r+=(i()-.5)*70,o+=(i()-.5)*70,n.lineTo(r,o);n.stroke()}}),asphaltN:()=>Fh("asphaltN",256,256,(n,t,e)=>{n.fillStyle="#888",n.fillRect(0,0,t,e),an(n,t,e,9e3,["#666","#aaa","#999","#777"],1,2,5)},3),stucco:()=>ue("stucco",256,256,(n,t,e)=>{n.fillStyle="#b8a98c",n.fillRect(0,0,t,e),an(n,t,e,9e3,["#ab9c80","#c4b597","#a29378","#cdbfa2"],1,3,6),Ze(n,t,e,10,"rgba(70,60,40,.18)",20,60,7),cr(n,t,e,.55)}),stuccoN:()=>Fh("stuccoN",128,128,(n,t,e)=>{n.fillStyle="#888",n.fillRect(0,0,t,e),an(n,t,e,3e3,["#555","#bbb"],1,3,8)},2.5),brick:()=>ue("brick",256,256,(n,t,e)=>{n.fillStyle="#6d6a63",n.fillRect(0,0,t,e);let i=Bn(9),s=e/16,r=t/4;for(let o=0;o<16;o++){let a=o%2?r/2:0;for(let l=-1;l<=4;l++){let c=.75+i()*.35;n.fillStyle=`rgb(${120*c|0},${52*c|0},${38*c|0})`,n.fillRect(a+l*r+1.5,o*s+1.5,r-3,s-3)}}an(n,t,e,3e3,["rgba(0,0,0,.18)","rgba(255,220,200,.07)"],1,3,10),cr(n,t,e,.6)}),brickN:()=>Fh("brickN",256,256,Ny,4),panel:()=>ue("panel",256,256,(n,t,e)=>{n.fillStyle="#5d6b55",n.fillRect(0,0,t,e),n.strokeStyle="rgba(30,40,25,.35)",n.lineWidth=2;for(let i=0;i<t;i+=16)n.beginPath(),n.moveTo(i,0),n.lineTo(i,e),n.stroke();for(let i=8;i<e*.62;i+=32)for(let s=8;s<t;s+=32)n.fillStyle="rgba(200,190,140,.16)",n.beginPath(),n.arc(s+i/32%2*16,i,4,0,7),n.fill();Ze(n,t,e,12,"rgba(60,50,20,.25)",15,50,11),n.fillStyle="#4b3220",n.fillRect(0,e*.66,t,e*.34),n.fillStyle="#2e1d12",n.fillRect(0,e*.66,t,5);for(let i=0;i<t;i+=32)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(i,e*.66,2,e);cr(n,t,e,.5)}),dinerWall:()=>ue("dinerwall",256,256,(n,t,e)=>{n.fillStyle="#9a9a92",n.fillRect(0,0,t,e);let i=32,s=16;for(let r=0;r<e/s;r++)for(let o=-1;o<t/i+1;o++){let a=r%2?i/2:0;n.fillStyle=r>9&&r<12?"#7a1a1a":"#d8d6cc",n.fillRect(o*i+a+1,r*s+1,i-2,s-2)}Ze(n,t,e,10,"rgba(70,55,25,.35)",15,45,43),cr(n,t,e,.55)}),block:()=>ue("block",256,256,(n,t,e)=>{n.fillStyle="#5c5b57",n.fillRect(0,0,t,e);let i=Bn(44);for(let s=0;s<8;s++){let r=s%2?64:0;for(let o=-1;o<3;o++){let a=.8+i()*.25;n.fillStyle=`rgb(${128*a|0},${126*a|0},${118*a|0})`,n.fillRect(o*128+r+2,s*32+2,124,28)}}an(n,t,e,4e3,["rgba(0,0,0,.15)","rgba(255,255,255,.06)"],1,3,45),Ze(n,t,e,6,"rgba(30,25,15,.4)",15,50,46),cr(n,t,e,.6)}),tileChecker:()=>ue("checker",256,256,(n,t,e)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)n.fillStyle=(r+s)%2?"#1d1d1f":"#d9d4c5",n.fillRect(r*32,s*32,32,32);an(n,t,e,2500,["rgba(60,50,30,.18)","rgba(0,0,0,.2)"],1,3,12),Ze(n,t,e,10,"rgba(50,35,15,.3)",15,50,13),n.strokeStyle="rgba(0,0,0,.4)",n.lineWidth=1;for(let s=0;s<=8;s++)n.beginPath(),n.moveTo(s*32,0),n.lineTo(s*32,e),n.stroke(),n.beginPath(),n.moveTo(0,s*32),n.lineTo(t,s*32),n.stroke()}),carpet:()=>ue("carpet",256,256,(n,t,e)=>{n.fillStyle="#5a1e1e",n.fillRect(0,0,t,e),an(n,t,e,9e3,["#4a1818","#6a2626","#3e1313","#702d24"],1,2.5,14),n.strokeStyle="rgba(200,160,80,.25)",n.lineWidth=3;for(let i=0;i<4;i++)for(let s=0;s<4;s++)n.beginPath(),n.moveTo(i*64+32,s*64+12),n.lineTo(i*64+52,s*64+32),n.lineTo(i*64+32,s*64+52),n.lineTo(i*64+12,s*64+32),n.closePath(),n.stroke();Ze(n,t,e,8,"rgba(20,10,5,.35)",20,60,15)}),concrete:()=>ue("concrete",256,256,(n,t,e)=>{n.fillStyle="#6f6e6a",n.fillRect(0,0,t,e),an(n,t,e,7e3,["#666561","#787773","#5e5d59","#82817c"],1,3,16),Ze(n,t,e,6,"rgba(15,12,8,.5)",20,55,17),n.strokeStyle="rgba(0,0,0,.35)",n.lineWidth=2,n.strokeRect(0,0,t,e)}),wood:()=>ue("wood",256,64,(n,t,e)=>{n.fillStyle="#7a5434",n.fillRect(0,0,t,e);let i=Bn(18);for(let s=0;s<45;s++){n.strokeStyle=`rgba(40,20,8,${.08+i()*.18})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*e;n.moveTo(0,r),n.bezierCurveTo(t*.3,r+i()*8-4,t*.6,r+i()*8-4,t,r+i()*4-2),n.stroke()}for(let s=0;s<3;s++)n.fillStyle="rgba(30,15,5,.5)",n.beginPath(),n.ellipse(i()*t,i()*e,5,3,0,0,7),n.fill()}),plank:()=>ue("plank",256,64,(n,t,e)=>{n.fillStyle="#8a6a48",n.fillRect(0,0,t,e);let i=Bn(19);for(let s=0;s<40;s++){n.strokeStyle=`rgba(50,30,10,${.1+i()*.2})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*e;n.moveTo(0,r),n.lineTo(t,r+i()*6-3),n.stroke()}n.fillStyle="#333";for(let s of[14,t-14])n.beginPath(),n.arc(s,e*.3,3,0,7),n.fill(),n.beginPath(),n.arc(s,e*.7,3,0,7),n.fill();cr(n,t,e,.25)}),metal:()=>ue("metal",128,128,(n,t,e)=>{n.fillStyle="#5b5f62",n.fillRect(0,0,t,e);for(let i=0;i<t;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"#4c5053"),s.addColorStop(.5,"#73777a"),s.addColorStop(1,"#4c5053"),n.fillStyle=s,n.fillRect(i,0,16,e)}Ze(n,t,e,8,"rgba(110,55,20,.45)",8,30,20)}),rust:()=>ue("rust",128,128,(n,t,e)=>{n.fillStyle="#5a3a26",n.fillRect(0,0,t,e),an(n,t,e,3e3,["#6d4630","#4a2d1c","#7d5236","#3a2416"],1,4,21),Ze(n,t,e,6,"rgba(60,70,70,.5)",10,40,22)}),ceiling:()=>ue("ceiling",128,128,(n,t,e)=>{n.fillStyle="#8f8b80",n.fillRect(0,0,t,e),an(n,t,e,1200,["rgba(0,0,0,.12)","rgba(255,255,255,.06)"],1,2,23),Ze(n,t,e,4,"rgba(90,70,30,.35)",10,40,24),n.strokeStyle="#5e5a52",n.lineWidth=3,n.strokeRect(0,0,t,e)}),chain:()=>ue("chain",128,128,(n,t,e)=>{n.clearRect(0,0,t,e),n.strokeStyle="rgba(170,175,175,1)",n.lineWidth=2.2;let i=16;for(let s=-e;s<t+e;s+=i)n.beginPath(),n.moveTo(s,0),n.lineTo(s+e,e),n.stroke(),n.beginPath(),n.moveTo(s+e,0),n.lineTo(s,e),n.stroke()}),glow:()=>ue("glow",64,64,(n,t,e)=>{let i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.3,"rgba(255,255,255,.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,e)}),puff:()=>ue("puff",64,64,(n,t,e)=>{let i=Bn(25);for(let s=0;s<18;s++){let r=i()*6.28,o=i()*14,a=32+Math.cos(r)*o,l=32+Math.sin(r)*o,c=8+i()*12,h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,.3)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,t,e)}}),flame:()=>ue("flame",64,128,(n,t,e)=>{for(let i=0;i<3;i++){let s=n.createRadialGradient(32,96,2,32,84,40-i*9);s.addColorStop(0,"rgba(255,255,255,.95)"),s.addColorStop(.5,"rgba(255,255,255,.4)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(32,4+i*14),n.bezierCurveTo(60,50,62,112,32,124),n.bezierCurveTo(2,112,4,50,32,4+i*14),n.fill()}}),blood:()=>ue("blood",128,128,(n,t,e)=>{n.clearRect(0,0,t,e);let i=Bn(26);n.fillStyle="rgba(70,4,4,.9)",n.beginPath(),n.arc(64,64,22,0,7),n.fill();for(let s=0;s<26;s++){let r=i()*6.28,o=18+i()*40,a=2+i()*8;n.beginPath(),n.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,7),n.fill()}}),sky:()=>ue("sky",16,256,(n,t,e)=>{let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#02030a"),i.addColorStop(.42,"#0b1224"),i.addColorStop(.5,"#1f2a36"),i.addColorStop(.53,"#2a2a2a"),i.addColorStop(1,"#0a0a0a"),n.fillStyle=i,n.fillRect(0,0,t,e)}),moon:()=>ue("moon",128,128,(n,t,e)=>{let i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(240,240,255,1)"),i.addColorStop(.33,"rgba(220,225,240,1)"),i.addColorStop(.36,"rgba(160,180,230,.35)"),i.addColorStop(1,"rgba(100,120,200,0)"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(150,150,170,.35)";for(let[s,r,o]of[[56,54,7],[72,70,5],[60,76,4],[74,52,3]])n.beginPath(),n.arc(s,r,o,0,7),n.fill()}),label:(n,t,e,i=256,s=64,r="bold 38px Arial")=>ue("lbl"+n+t+e+i+s,i,s,o=>{o.fillStyle=t,o.fillRect(0,0,i,s),o.fillStyle=e,o.font=r,o.textAlign="center",o.textBaseline="middle",o.fillText(n,i/2,s/2+2)}),chalk:(n,t)=>ue("chalk"+n,256,128,(e,i,s)=>{e.clearRect(0,0,i,s),e.strokeStyle="rgba(240,235,215,.9)",e.lineWidth=3,e.lineJoin="round",e.shadowColor="rgba(255,255,240,.6)",e.shadowBlur=4,t(e,i,s)}),neon:(n,t,e=512,i=128,s=72)=>ue("neon"+n+t,e,i,r=>{r.clearRect(0,0,e,i),r.font=`bold ${s}px Arial Black, Arial`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=24,r.fillStyle=t,r.fillText(n,e/2,i/2),r.shadowBlur=8,r.fillStyle="#fff",r.globalAlpha=.65,r.fillText(n,e/2,i/2)}),perk:(n,t,e)=>ue("perk"+n,128,256,(i,s,r)=>{let o=i.createLinearGradient(0,0,0,r);o.addColorStop(0,t),o.addColorStop(1,"#111"),i.fillStyle=o,i.fillRect(0,0,s,r),i.fillStyle="rgba(0,0,0,.35)",i.fillRect(10,150,s-20,80),i.fillStyle="#fff",i.font="bold 22px Arial Black, Arial",i.textAlign="center",n.split(" ").forEach((l,c)=>i.fillText(l.toUpperCase(),s/2,40+c*26)),i.font="bold 15px Arial",i.fillText(e,s/2,185),i.strokeStyle="rgba(255,255,255,.6)",i.lineWidth=3,i.strokeRect(6,6,s-12,r-12);for(let l=0;l<3;l++)i.fillStyle="rgba(255,255,255,.25)",i.beginPath(),i.arc(s/2,100,20-l*6,0,7),i.fill()}),boxSide:()=>ue("boxside",256,128,(n,t,e)=>{n.fillStyle="#4a3420",n.fillRect(0,0,t,e);let i=Bn(30);for(let s=0;s<30;s++){n.strokeStyle=`rgba(20,10,4,${.15+i()*.2})`,n.beginPath();let r=i()*e;n.moveTo(0,r),n.lineTo(t,r+i()*4-2),n.stroke()}n.font="bold 84px Arial Black, Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#d8c79a",n.fillText("?",t/2,e/2+4),n.strokeStyle="#2a1a0d",n.lineWidth=8,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#8a7a50";for(let[s,r]of[[4,4],[t-20,4],[4,e-20],[t-20,e-20]])n.fillRect(s,r,16,16)}),skin:n=>ue("skin"+n,128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i),an(t,e,i,1800,["rgba(60,20,20,.25)","rgba(40,50,30,.25)","rgba(255,255,255,.06)"],1,4,31),Ze(t,e,i,7,"rgba(90,10,10,.45)",6,22,32),Ze(t,e,i,5,"rgba(30,40,20,.4)",8,26,33)}),cloth:n=>ue("cloth"+n,128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let s=0;s<i;s+=3)t.fillStyle="rgba(0,0,0,.06)",t.fillRect(0,s,e,1);Ze(t,e,i,9,"rgba(80,5,5,.55)",6,26,34),Ze(t,e,i,6,"rgba(20,15,10,.45)",8,28,35),an(t,e,i,500,["rgba(0,0,0,.25)"],1,3,36)}),camo:()=>ue("camo",128,128,(n,t,e)=>{n.fillStyle="#4b5136",n.fillRect(0,0,t,e),Ze(n,t,e,14,"rgba(30,32,20,.8)",8,22,37),Ze(n,t,e,10,"rgba(110,100,70,.6)",6,18,38)}),pap:()=>ue("pap",128,128,(n,t,e)=>{let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#3b0d5e"),i.addColorStop(.5,"#8a2ad8"),i.addColorStop(1,"#1d6fd8"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="rgba(255,180,255,.55)",n.lineWidth=2;let s=Bn(39);for(let r=0;r<18;r++){n.beginPath();let o=s()*t,a=s()*e;n.moveTo(o,a);for(let l=0;l<4;l++)o+=(s()-.5)*40,a+=(s()-.5)*40,n.lineTo(o,a);n.stroke()}}),lines:()=>ue("lines",64,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(220,210,170,.75)",n.fillRect(24,0,16,e),an(n,t,e,900,["rgba(0,0,0,.9)"],1,4,40)},!0),dirt:()=>ue("dirt",128,128,(n,t,e)=>{n.clearRect(0,0,t,e),Ze(n,t,e,10,"rgba(48,38,24,.55)",12,40,41),an(n,t,e,900,["rgba(40,30,20,.6)","rgba(70,60,40,.4)"],1,3,42)})};var ie=n=>new vn(n),ld={},eo=(n,t)=>ld[n]||(ld[n]=t());function Ge(n,{x:t=0,y:e=0,z:i=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1,c:h=16777215}={}){let u=new Se().compose(new I(t,e,i),new Qn().setFromEuler(new Un(s,r,o)),new I(a,l,c)),d=n.index?n.toNonIndexed():n.clone();d.applyMatrix4(u);let f=new Kt(h),m=d.attributes.position.count,x=new Float32Array(m*3);for(let p=0;p<m;p++)x[p*3]=f.r,x[p*3+1]=f.g,x[p*3+2]=f.b;return d.setAttribute("color",new je(x,3)),d.attributes.uv||d.setAttribute("uv",new je(new Float32Array(m*2),2)),d}var gs=n=>lr(n,!1),lt=(n,t,e)=>new Xn(n,t,e),Te=(n,t,e,i=10)=>new tr(n,t,e,i),cd=()=>eo("zg",()=>({torso:new qn(.19,.34,4,10),pelvis:new qn(.16,.08,4,8),head:(()=>{let n=new dn(.135,14,10),t=lt(.17,.07,.14);t.translate(0,-.11,.04);let e=lt(.2,.04,.06);e.translate(0,.03,.11);let i=lt(.035,.05,.05);return i.translate(0,-.02,.135),lr([n.toNonIndexed(),t.toNonIndexed(),e.toNonIndexed(),i.toNonIndexed()])})(),upper:(()=>{let n=new qn(.06,.22,3,8);return n.translate(0,-.15,0),n})(),fore:(()=>{let n=new qn(.05,.22,3,8);n.translate(0,-.14,0);let t=lt(.07,.11,.04);t.translate(0,-.32,0);let e=lt(.075,.06,.03);return e.translate(0,-.4,.02),e.rotateX(.3),lr([n.toNonIndexed(),t.toNonIndexed(),e.toNonIndexed()])})(),thigh:(()=>{let n=new qn(.085,.3,3,8);return n.translate(0,-.22,0),n})(),shin:(()=>{let n=new qn(.068,.3,3,8);n.translate(0,-.2,0);let t=lt(.1,.07,.24);return t.translate(0,-.42,.05),lr([n.toNonIndexed(),t.toNonIndexed()])})(),eyes:(()=>{let n=new dn(.022,6,5),t=n.clone();return n.translate(-.045,0,.118),t.translate(.045,0,.118),lr([n,t])})()})),Oy=()=>eo("zm",()=>{let n=["#8e9a86","#9c9283","#7f8a7c","#a19a8a"].map(c=>ie({map:Tt.skin(c),roughness:.85})),t=["#cfc9b8","#7b2b25","#2f4d6e","#2b2b2b","#5d6b3a","#8a6d3b"].map(c=>ie({map:Tt.cloth(c),roughness:.95})),e=["#2f3d55","#5a4d35","#252525","#4a4a44"].map(c=>ie({map:Tt.cloth(c),roughness:.95})),i=ie({map:Tt.skin("#5f8f3a"),roughness:.6,emissive:3997482,emissiveIntensity:.35}),s=ie({map:Tt.cloth("#2c3a1c"),roughness:.9,emissive:1731088,emissiveIntensity:.2}),r=ie({map:Tt.skin("#a39383"),roughness:.8}),o=new ye({color:16756784}),a=new ye({color:10354506}),l=new ye({color:16726560});return{skins:n,shirts:t,pants:e,toxicSkin:i,toxicCloth:s,fatSkin:r,eyes:o,eyesG:a,eyesR:l}});function hd(n){let t=cd(),e=Oy(),i=_=>_[Math.random()*_.length|0],s=i(e.skins),r=i(e.shirts),o=i(e.pants),a=e.eyes;n==="toxic"&&(s=e.toxicSkin,r=e.toxicCloth,o=e.toxicCloth,a=e.eyesG),n==="fat"&&(s=e.fatSkin),n==="runner"&&(a=e.eyesR);let l=new Gt,c=new Gt;l.add(c);let h=new Gt;h.position.y=.95,c.add(h);let u=new nt(t.pelvis,o);u.rotation.z=Math.PI/2,u.scale.set(1,1.2,.8),h.add(u);let d=new Gt;h.add(d);let f=new nt(t.torso,r);f.position.y=.3,f.scale.set(1.25,1,.75),d.add(f);let m=new Gt;m.position.y=.66,d.add(m);let x=new nt(t.head,s);x.position.y=.08,m.add(x);let p=new nt(t.eyes,a);x.add(p);let g=_=>{let v=new Gt;v.position.set(.28*_,.53,0),d.add(v);let N=new nt(t.upper,r);v.add(N);let B=new Gt;B.position.y=-.31,v.add(B);let X=new nt(t.fore,s);return B.add(X),{sh:v,el:B}},E=_=>{let v=new Gt;v.position.set(.11*_,-.02,0),h.add(v);let N=new nt(t.thigh,o);v.add(N);let B=new Gt;B.position.y=-.45,v.add(B);let X=new nt(t.shin,o);return B.add(X),{hp:v,kn:B}},M=g(-1),w=g(1),D=E(-1),P=E(1),R=1;n==="fat"&&(f.scale.set(1.9,1.15,1.55),u.scale.set(1.6,1.6,1.3),M.sh.position.x=-.38,w.sh.position.x=.38,D.hp.position.x=-.17,P.hp.position.x=.17,R=1.22),n==="runner"&&(f.scale.set(1,1.05,.62),R=1.04,l.scale.set(.9,1,.9)),n==="toxic"&&(R=1.02),l.scale.multiplyScalar(R);let L=[];return l.traverse(_=>{_.isMesh&&(_.castShadow=!0,L.push(_))}),p.castShadow=!1,{root:l,body:c,hips:h,spine:d,neck:m,head:x,aL:M,aR:w,lL:D,lR:P,meshes:L,scale:R,phase:Math.random()*10,armUp:.6+Math.random()*.8,limp:Math.random()<.3?.4:0,tilt:(Math.random()-.5)*.5}}function Bh(n,t,e,i,s){let r=e>2.2,o=r?2.4+e*.5:1.3+e*.9,a=t*o+n.phase,l=Math.sin(a),c=Math.cos(a),h=Math.min(1,e/(r?4:1.6));n.lL.hp.rotation.x=l*(r?.9:.5)*h,n.lR.hp.rotation.x=-l*(r?.9:.5)*h*(1-n.limp),n.lL.kn.rotation.x=Math.max(0,-c)*(r?1.3:.6)*h,n.lR.kn.rotation.x=Math.max(0,c)*(r?1.3:.6)*h,n.hips.position.y=.95-Math.abs(c)*.05*h-(r?.06:0),n.spine.rotation.x=r?.45:.18+Math.sin(t*.7+n.phase)*.05,n.spine.rotation.z=n.tilt*.3+l*.06*h,n.neck.rotation.z=n.tilt+Math.sin(t*1.3+n.phase)*.1,n.neck.rotation.x=r?-.3:-.1;let u=r?1:n.armUp,d=r?c*.9:Math.sin(t*1.7+n.phase)*.12;n.aL.sh.rotation.x=-u-d-i*1.2,n.aR.sh.rotation.x=-u+d-i*1.4*Math.max(0,Math.sin(t*14)),n.aL.sh.rotation.z=.08,n.aR.sh.rotation.z=-.08,n.aL.el.rotation.x=-.3-i*.4,n.aR.el.rotation.x=-.25-i*.6*Math.max(0,Math.cos(t*14)),s&&(n.spine.rotation.x=.9,n.aL.sh.rotation.x=-2.2,n.aR.sh.rotation.x=-2,n.lL.hp.rotation.x=-1,n.lL.kn.rotation.x=1.4)}function ud(){let n=cd(),t=ie({map:Tt.camo(),roughness:.9}),e=ie({color:2763812,roughness:.8}),i=ie({color:12159594,roughness:.7}),s=ie({color:1710618,roughness:.7}),r=ie({color:3817520,roughness:.75}),o=new Gt,a=new Gt;a.position.y=.95,o.add(a);let l=new nt(n.pelvis,t);l.rotation.z=Math.PI/2,l.scale.set(1,1.2,.85),a.add(l);let c=new Gt;a.add(c);let h=new nt(n.torso,t);h.position.y=.3,h.scale.set(1.3,1,.8),c.add(h);let u=new nt(lt(.46,.42,.34),e);u.position.y=.36,c.add(u);for(let q=0;q<3;q++){let _=new nt(lt(.11,.13,.06),e);_.position.set(-.13+q*.13,.26,.19),c.add(_)}let d=new nt(lt(.36,.4,.16),s);d.position.set(0,.36,-.24),c.add(d);let f=new Gt;f.position.y=.66,c.add(f);let m=new nt(new dn(.13,12,10),i);m.position.y=.08,f.add(m);let x=new nt(new dn(.155,14,8,0,Math.PI*2,0,Math.PI*.55),r);x.position.y=.12,f.add(x);let p=new nt(lt(.2,.05,.05),s);p.position.set(0,.2,.12),f.add(p);let g=q=>{let _=new Gt;_.position.set(.29*q,.53,0),c.add(_),_.add(new nt(n.upper,t));let v=new Gt;return v.position.y=-.31,_.add(v),v.add(new nt(n.fore,s)),{sh:_,el:v}},E=q=>{let _=new Gt;_.position.set(.11*q,-.02,0),a.add(_),_.add(new nt(n.thigh,t));let v=new Gt;v.position.y=-.45,_.add(v);let N=new nt(n.shin,t);v.add(N);let B=new nt(lt(.12,.12,.26),s);return B.position.set(0,-.4,.04),v.add(B),{hp:_,kn:v}},M=g(-1),w=g(1),D=E(-1),P=E(1),R=new Gt;R.position.set(.12,.38,.32),c.add(R),o.traverse(q=>{q.isMesh&&(q.castShadow=!0)}),o.rotation.y=Math.PI;let L=new Gt;return L.add(o),{wrap:L,root:o,hips:a,spine:c,neck:f,aL:M,aR:w,lL:D,lR:P,hand:R}}function fd(n,t,e,i,s){let r=2+e*1.1,o=t*r,a=Math.min(1,e/4);n.lL.hp.rotation.x=Math.sin(o)*.7*a,n.lR.hp.rotation.x=-Math.sin(o)*.7*a,n.lL.kn.rotation.x=Math.max(0,-Math.cos(o))*1*a,n.lR.kn.rotation.x=Math.max(0,Math.cos(o))*1*a,n.hips.position.y=.95-Math.abs(Math.cos(o))*.04*a,n.spine.rotation.x=s?.25:.05,n.neck.rotation.x=-i*.5;let l=s?-.6:-1.45-i*.9;n.aR.sh.rotation.set(l,0,-.15),n.aR.el.rotation.x=-.35,n.aL.sh.rotation.set(l+.1,0,.55),n.aL.el.rotation.x=-.7,n.hand.rotation.x=s?.9:-i*.9,n.hand.position.y=s?.25:.38+i*.15}var Fy=()=>eo("gm",()=>({metal:ie({color:2303015,metalness:.75,roughness:.38}),steel:ie({color:9409432,metalness:.9,roughness:.28}),wood:ie({map:Tt.wood(),color:10512956,roughness:.6}),poly:ie({color:1776670,roughness:.75}),olive:ie({color:4015664,roughness:.7}),pap:ie({map:Tt.pap(),emissive:6953648,emissiveIntensity:.55,metalness:.5,roughness:.3}),glow:new ye({color:6750088}),glowP:new ye({color:14713087})}));function no(n,t){let e=Fy(),i=new Gt,s=t?e.pap:e.metal,r=t?e.pap:e.wood,o=t?e.pap:e.poly,a=(u,d,f,m,x,p=0)=>{let g=new nt(u,d);return g.position.set(f,m,x),g.rotation.x=p,i.add(g),g},l=(u,d,f,m=.06)=>a(Te(d,d,u,10).rotateX(Math.PI/2),e.steel,0,m,f-u/2),c=-.5;switch(n){case"pistol":case"brawler":{let u=n==="brawler";a(lt(.045,.1,.17),o,0,-.02,0,.25),a(lt(.05,.055,u?.3:.24),u?e.steel:s,0,.055,u?-.1:-.07),u?(a(Te(.04,.04,.07,8),e.steel,0,.04,0).rotation.z=Math.PI/2,l(.18,.018,-.24),c=-.43):(a(lt(.015,.015,.02),e.steel,0,.09,-.17),c=-.21),a(lt(.012,.04,.05),s,0,-.005,-.02);break}case"smg":case"ripper":case"viper":{a(lt(.05,.1,.06),o,0,-.04,.04,.2),a(lt(.06,.08,.36),s,0,.05,-.1),a(lt(.035,.18,.05),s,0,-.06,-.12,.15),a(lt(.03,.03,.22),o,0,.04,.2),a(lt(.05,.07,.03),o,0,.03,.31),l(.12,.016,-.28),a(lt(.02,.03,.04),e.steel,0,.1,-.05),c=-.41;break}case"trench":{a(lt(.05,.11,.07),r,0,-.04,.06,.25),a(lt(.065,.08,.3),s,0,.05,-.08),a(lt(.06,.09,.32),r,0,-0,.3,-.12),l(.55,.022,-.22,.075),a(Te(.028,.028,.32,10).rotateX(Math.PI/2),r,0,.025,-.42),c=-.78;break}case"widow":case"ranger":{let u=n==="widow";a(lt(.05,.1,.07),r,0,-.04,.05,.25),a(lt(.06,.075,.42),s,0,.05,-.12),a(lt(.065,.07,.5),r,0,.02,-.22),a(lt(.06,.1,.34),r,0,0,.3,-.1),l(u?.6:.42,.016,-.45,.065),a(lt(.03,.1,.05),s,0,-.06,-.06),u&&(a(Te(.032,.032,.36,12).rotateX(Math.PI/2),e.metal,0,.14,-.1),a(Te(.042,.032,.06,12).rotateX(Math.PI/2),e.metal,0,.14,-.3)),c=u?-1.05:-.87;break}case"kestrel":{a(lt(.05,.11,.06),o,0,-.05,.05,.25),a(lt(.065,.09,.42),e.olive===s||t?s:e.olive,0,.05,-.12),a(lt(.04,.2,.08),s,0,-.07,-.13,.25),a(lt(.06,.08,.26),o,0,.04,-.42),a(lt(.05,.08,.28),o,0,.03,.28),a(lt(.03,.05,.12),s,0,.12,-.05),l(.14,.015,-.55),c=-.7;break}case"hammer":{a(lt(.05,.11,.06),o,0,-.05,.05,.25),a(lt(.1,.12,.5),s,0,.05,-.12),a(lt(.12,.16,.14),e.olive,.06,-.08,-.12),a(Te(.05,.05,.4,12).rotateX(Math.PI/2),o,0,.05,-.55),l(.25,.018,-.75),a(lt(.06,.1,.28),o,0,.02,.3),c=-1;break}case"ion":{a(lt(.05,.11,.06),o,0,-.05,.05,.25),a(lt(.1,.1,.4),s,0,.05,-.12);for(let u=0;u<4;u++)a(new Ea(.065,.015,6,14),e.steel,0,.05,-.12-u*.09);a(Te(.03,.03,.3,10).rotateX(Math.PI/2),t?e.glowP:e.glow,0,.05,-.25),a(Te(.05,.02,.1,10).rotateX(Math.PI/2),e.steel,0,.05,-.47),a(new dn(.05,10,8),t?e.glowP:e.glow,0,.13,.02),c=-.53;break}}i.traverse(u=>{u.isMesh&&(u.castShadow=!0)});let h=new ze;return h.position.set(0,.06,c),i.add(h),{group:i,muzzle:h}}function dd(){let n=ie({map:Tt.camo(),roughness:.9}),t=ie({color:1842204,roughness:.7}),e=new Gt,i=new nt(new qn(.045,.32,3,8),n);i.rotation.x=Math.PI/2-.25,i.position.set(.03,-.09,.22),e.add(i);let s=new nt(lt(.07,.08,.1),t);s.position.set(0,-.03,.03),e.add(s);let r=new nt(new qn(.042,.36,3,8),n);r.rotation.set(Math.PI/2-.2,0,-.45),r.position.set(-.11,-.08,0),e.add(r);let o=new nt(lt(.07,.07,.1),t);return o.position.set(-.02,0,-.17),e.add(o),{group:e,leftHand:o,leftArm:r}}function pd(n){let t=new Gt,e=new Gt;e.rotation.y=Math.PI/2,t.add(e);let i=ie({color:7211792,metalness:.6,roughness:.3,envMap:n,envMapIntensity:.9}),s=ie({color:15526110,metalness:.4,roughness:.35,envMap:n,envMapIntensity:.7}),r=ie({color:14343648,metalness:1,roughness:.15,envMap:n,envMapIntensity:1.2}),o=ie({color:725272,metalness:.9,roughness:.08,envMap:n,envMapIntensity:1.3,side:un}),a=ie({color:1118481,roughness:.6}),l=ie({color:1381653,roughness:.92}),c=new ye({color:16773832}),h=new ye({color:16722458}),u=new Gi;u.moveTo(-2.25,.3),u.lineTo(-1.82,.3),u.absarc(-1.4,.3,.42,Math.PI,0,!0),u.lineTo(.96,.3),u.absarc(1.38,.3,.42,Math.PI,0,!0),u.lineTo(2.24,.3),u.lineTo(2.36,.42),u.lineTo(2.37,.66),u.lineTo(2.22,.8),u.lineTo(.78,.9),u.lineTo(-1.8,.94),u.lineTo(-2.27,.9),u.lineTo(-2.35,.62),u.lineTo(-2.3,.36),u.closePath();let d=new qr(u,{depth:1.72,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3,curveSegments:10});d.translate(0,0,-.86),e.add(new nt(d,i));let f=new Gi;f.moveTo(.78,.9),f.lineTo(.05,1.3),f.lineTo(-.7,1.33),f.lineTo(-1.95,.95),f.lineTo(-1.95,.9),f.closePath();let m=new qr(f,{depth:1.36,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2});m.translate(0,0,-.68),e.add(new nt(m,i));let x=(P,R,L)=>{let q=new Gi;q.moveTo(P[0][0],P[0][1]);for(let v of P.slice(1))q.lineTo(v[0],v[1]);let _=new nt(new ba(q),o);_.position.z=R,L&&(_.rotation.y=Math.PI,_.scale.x=-1),e.add(_)};x([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],.725),x([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],-.725,!0);let p=(P,R,L,q)=>{let _=new I(q[0],q[1],0).normalize(),v=new I(0,0,-1),N=new I().crossVectors(v,_),B=new nt(new Qe(P,R),o);B.quaternion.setFromRotationMatrix(new Se().makeBasis(v,_,N)),B.position.set(L[0]+N.x*.045,L[1]+N.y*.045,0),e.add(B)};p(1.24,.8,[.42,1.1],[-.73,.4]),p(1.22,1.1,[-1.28,1.15],[-.956,-.296]);for(let P of[-.15,.15]){let R=(L,q,_,v,N=.17)=>{let B=new nt(lt(L,.012,N),s);B.position.set(q,_,P),B.rotation.z=v,e.add(B)};R(1.46,1.5,.89,-.062),R(.75,-.33,1.375,-.04),R(1.32,-1.32,1.18,.29),R(.32,-2.1,.985,.08)}let g=(P,R,L,q,_,v=0)=>{let N=new nt(P,R);return N.position.set(L,q,_),N.rotation.y=v,e.add(N),N};g(lt(.45,.07,.5),a,1.25,.92,0),g(lt(.05,.26,1.4),a,2.41,.58,0);for(let P of[-.62,.62])g(Te(.09,.09,.05,14),c,2.42,.6,P).rotation.z=Math.PI/2,g(lt(.06,.2,.36),h,-2.39,.66,P*.95),g(Te(.035,.035,.2,8),r,-2.3,.3,P*.6).rotation.z=Math.PI/2,g(lt(.42,.18,.04),a,-.95,.66,P>0?.92:-.92);g(lt(.1,.09,1.86),r,2.44,.36,0),g(lt(.1,.09,1.86),r,-2.4,.38,0);let E=[],M=Te(.34,.34,.26,20).rotateX(Math.PI/2),w=Te(.2,.2,.27,14).rotateX(Math.PI/2),D=Te(.07,.07,.28,8).rotateX(Math.PI/2);for(let[P,R]of[[1.38,.8],[1.38,-.8],[-1.4,.8],[-1.4,-.8]]){let L=new Gt;L.position.set(P,.34,R),e.add(L);let q=new Gt;L.add(q),q.add(new nt(M,l)),q.add(new nt(w,r)),q.add(new nt(D,a));for(let _=0;_<5;_++){let v=new nt(lt(.04,.3,.02),a);v.rotation.z=_*Math.PI/2.5,v.position.z=R>0?.14:-.14,q.add(v)}E.push({w:L,spin:q,front:P>0})}return g(lt(1.6,.4,1.3),a,-.4,.85,0),t.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),{group:t,wheels:E}}function md(){let n=new Gt,t=ie({map:Tt.boxSide(),roughness:.7}),e=ie({map:Tt.wood(),color:6964774,roughness:.75}),i=ie({color:9075274,metalness:.7,roughness:.4}),s=new nt(lt(1.7,.62,.8),[e,e,e,e,t,t]);s.position.y=.31,n.add(s);for(let h of[-.82,.82]){let u=new nt(lt(.06,.66,.84),i);u.position.set(h,.33,0),n.add(u)}let r=new Gt;r.position.set(0,.62,-.4),n.add(r);let o=new nt(lt(1.72,.16,.82),[e,e,e,e,t,t]);o.position.set(0,.08,.41),r.add(o);let a=new nt(new tr(.6,.9,40,16,1,!0),new ye({color:5941503,transparent:!0,opacity:.16,blending:fn,depthWrite:!1,side:un}));a.position.y=20,n.add(a);let l=new nn(new on({map:Tt.glow(),color:6992127,transparent:!0,opacity:.8,blending:fn,depthWrite:!1}));l.scale.set(3,1.6,1),l.position.y=.8,n.add(l);let c=new Gt;return c.position.y=.75,n.add(c),n.traverse(h=>{h.isMesh&&h!==a&&(h.castShadow=!0)}),{group:n,lid:r,beam:a,glow:l,gunSlot:c}}function gd(){let n=new Gt,t=ie({map:Tt.wood(),color:5914148,roughness:.8}),e=new nt(lt(1.7,.62,.8),t);return e.position.y=.31,e.castShadow=!0,n.add(e),n}function _d(n,t,e){let i=new Gt,s=ie({map:Tt.perk(n,t,e),emissiveMap:Tt.perk(n,t,e),emissive:16777215,emissiveIntensity:0,roughness:.5}),r=ie({color:new Kt(t).multiplyScalar(.45),roughness:.55,metalness:.3}),o=new nt(lt(1,2.1,.8),[r,r,r,r,s,r]);o.position.y=1.05,i.add(o);let a=new nt(Te(.35,.45,.25,12),r);a.position.y=2.22,i.add(a);let l=new ye({color:2236962}),c=new nt(new dn(.18,10,8),l);c.position.y=2.42,i.add(c);let h=new nn(new on({map:Tt.glow(),color:t,transparent:!0,opacity:0,blending:fn,depthWrite:!1}));return h.scale.set(2.4,3.2,1),h.position.set(0,1.2,.5),i.add(h),i.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),{group:i,face:s,bulbM:l,glow:h,col:t}}function xd(){let n=new Gt,t=ie({color:5593178,metalness:.6,roughness:.5}),e=new nt(lt(.7,1,.18),t);e.position.y=1.4,n.add(e);let i=new nt(new Qe(.5,.18),new ye({map:Tt.label("POWER","#d8b020","#111",256,80)}));i.position.set(0,1.78,.095),n.add(i);let s=new Gt;s.position.set(0,1.3,.1),n.add(s);let r=new nt(lt(.06,.45,.06),ie({color:2236962}));r.position.y=.2,s.add(r);let o=new nt(new dn(.06,8,6),ie({color:12591136,roughness:.4}));o.position.y=.43,s.add(o),s.rotation.x=.6;let a=new nt(new dn(.05,8,6),new ye({color:4460817}));return a.position.set(.25,1.75,.1),n.add(a),{group:n,lever:s,lamp:a}}function yd(){let n=new Gt,t=ie({color:3025456,metalness:.7,roughness:.45}),e=ie({color:2230320,emissive:10502399,emissiveIntensity:0,roughness:.4}),i=new nt(lt(1.8,1,1.2),t);i.position.y=.5,n.add(i);let s=new nt(lt(1.4,.5,.9),e);s.position.y=1.25,n.add(s);let r=new nt(lt(1.8,.4,1.2),t);r.position.y=1.7,n.add(r);for(let c of[-.75,.75]){let h=new nt(Te(.1,.1,1.4,8),ie({color:9079434,metalness:.9,roughness:.3}));h.position.set(c,1.4,.45),n.add(h)}let o=new nt(new Qe(1.5,.3),new ye({map:Tt.label("THE FORGE","#14081c","#c88aff",512,100,"bold 60px Arial Black, Arial")}));o.position.set(0,2.1,0),n.add(o),o.position.z=.61;let a=new nn(new on({map:Tt.glow(),color:10502399,transparent:!0,opacity:0,blending:fn,depthWrite:!1}));a.scale.set(3.4,2.4,1),a.position.set(0,1.25,.7),n.add(a);let l=new Gt;return l.position.set(0,1.25,.2),n.add(l),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),{group:n,glowM:e,glow:a,slot:l}}var By=()=>eo("bm",()=>({wood:ie({map:Tt.plank(),vertexColors:!0,roughness:.85}),metal:ie({map:Tt.rust(),vertexColors:!0,roughness:.8,metalness:.3})}));function vd(){return By()}function za(n){return eo("piece"+n,()=>{let t=[],e=[];if(n==="wall"){for(let i of[-.92,0,.92])t.push(Ge(lt(.16,2.6,.16),{x:i,y:1.3,c:9071178}));for(let i=0;i<6;i++)t.push(Ge(lt(2.05,.3,.06),{y:.3+i*.38,z:.1,rz:Math.sin(i*7.3)*.04,c:[13676688,12097648,13150338][i%3]}));t.push(Ge(lt(2.5,.14,.06),{y:1.2,z:-.1,rz:.85,c:10123866})),e.push(Ge(lt(.8,.9,.03),{x:.4,y:1.4,z:.15,rz:.06,c:16777215}));for(let i of[-.92,0,.92])t.push(Ge(new hs(.1,.3,6),{x:i,y:2.75,c:9071178}))}else if(n==="door"){for(let i of[-.95,.95])t.push(Ge(lt(.18,2.7,.18),{x:i,y:1.35,c:8018490}));t.push(Ge(lt(2.1,.2,.2),{y:2.6,c:8018490}))}else if(n==="gate"){for(let i=0;i<7;i++)t.push(Ge(lt(.24,2.2,.06),{x:.14+i*.25,y:1.15,c:[13676688,12097648,13150338][i%3]}));for(let i of[.5,1.8])t.push(Ge(lt(1.76,.16,.06),{x:.88,y:i,z:.06,c:10123866}));t.push(Ge(lt(2.1,.14,.06),{x:.88,y:1.15,z:.06,rz:.62,c:10123866}))}else if(n==="spikes"){t.push(Ge(lt(1.9,.12,.12),{y:.25,c:6965802})),t.push(Ge(lt(1.9,.12,.12),{y:.25,z:.5,c:6965802})),t.push(Ge(lt(1.9,.12,.12),{y:.25,z:-.5,c:6965802}));for(let i=0;i<12;i++){let s=-.8+i%6*.32,r=i<6?.28:-.28;t.push(Ge(new hs(.06,1,5),{x:s,y:.55,z:r,rx:i<6?.55:-.55,c:13148272}))}e.push(Ge(lt(1.9,.04,.04),{y:.42,c:16777215}))}return{wood:gs(t),metal:e.length?gs(e):null}})}var hr={pistol:{name:"Patrol .45",kind:"pistol",dmg:50,rpm:420,auto:!1,mag:8,reserve:80,reload:1.5,spread:.01,head:2.5,pierce:1,col:2763308,sound:[.9,.18]},ranger:{name:"Ranger Rifle",kind:"rifle",dmg:120,rpm:330,auto:!1,mag:10,reserve:120,reload:2.1,spread:.006,head:3,pierce:2,col:5913378,sound:[.6,.3]},viper:{name:"Viper SMG",kind:"smg",dmg:55,rpm:780,auto:!0,mag:30,reserve:180,reload:2,spread:.022,head:2.2,pierce:1,col:1974050,sound:[1.15,.14]},trench:{name:"Trench 12",kind:"shotgun",dmg:70,pellets:8,rpm:80,auto:!1,mag:6,reserve:48,reload:2.8,spread:.075,head:1.5,pierce:2,col:4861984,sound:[.45,.42]},kestrel:{name:"Kestrel AR",kind:"ar",dmg:95,rpm:640,auto:!0,mag:30,reserve:210,reload:2.3,spread:.014,head:2.5,pierce:2,col:3160618,sound:[.75,.24]},hammer:{name:"Hammer LMG",kind:"lmg",dmg:130,rpm:700,auto:!0,mag:100,reserve:400,reload:4.2,spread:.026,head:2.2,pierce:3,col:2895660,sound:[.55,.3]},brawler:{name:"Brawler Magnum",kind:"pistol",dmg:520,rpm:160,auto:!1,mag:6,reserve:60,reload:2.4,spread:.008,head:3,pierce:3,col:9409174,sound:[.5,.45]},ripper:{name:"Ripper SMG",kind:"smg",dmg:80,rpm:950,auto:!0,mag:40,reserve:280,reload:2.2,spread:.028,head:2.2,pierce:1,col:3811904,sound:[1.3,.13]},widow:{name:"Widowmaker",kind:"sniper",dmg:1600,rpm:50,auto:!1,mag:5,reserve:40,reload:3.2,spread:.001,head:4,pierce:6,col:2304042,sound:[.35,.6],zoom:2.6},ion:{name:"Ion Ray",kind:"ray",dmg:1400,rpm:260,auto:!1,mag:20,reserve:160,reload:2.4,spread:.004,head:1,pierce:1,splash:3.2,col:1727018,sound:[1.6,.35],wonder:!0}},kh=["ranger","viper","trench","kestrel","hammer","brawler","ripper","widow","ion","hammer","kestrel","ripper","ion"],zh={pistol:"Hellfire .45",ranger:"Longshot Rapture",viper:"Venom Kiss",trench:"Doomsayer 24",kestrel:"Raptor Reign",hammer:"Anvil of Ruin",brawler:"Judgment Day",ripper:"Shredder Supreme",widow:"Black Widow Queen",ion:"Ion Annihilator"};function Ha(n,t=!1){let e=hr[n],i={key:n,pap:t,def:e,name:t?zh[n]:e.name,dmg:e.dmg*(t?2.4:1),mag:Math.round(e.mag*(t?1.5:1)),maxReserve:Math.round(e.reserve*(t?2:1)),clip:0,reserve:0,rpm:e.rpm*(t?1.12:1)};return i.clip=i.mag,i.reserve=i.maxReserve,i}var Md=[{key:"ranger",cost:500,i:16,j:23,face:[1,0]},{key:"viper",cost:1e3,i:32,j:30,face:[0,-1]},{key:"trench",cost:1500,i:13,j:14,face:[0,1]},{key:"kestrel",cost:1400,i:5,j:12,face:[1,0]}];var oe=n=>new vn(n),ur=.9,io=2.3,so=2.6,Gh=class{constructor(){this.p=[],this.n=[],this.u=[]}quad(t,e,i,s,r,o,a,l,c){let h=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],u=[i[0]-t[0],i[1]-t[1],i[2]-t[2]],d=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]],f=[t,e,i,t,i,s],m=[o,a,l,o,l,c];d[0]*r[0]+d[1]*r[1]+d[2]*r[2]<0&&(f=[t,i,e,t,s,i],m=[o,l,a,o,c,l]);for(let x=0;x<6;x++)this.p.push(...f[x]),this.n.push(...r),this.u.push(...m[x])}wall(t,e,i,s,r,o,a){let l=(h,u)=>t==="x"?[h,u,e]:[e,u,h],c=(h,u)=>[h/2,u/3.4];this.quad(l(i,r),l(s,r),l(s,o),l(i,o),a,c(i,r),c(s,r),c(s,o),c(i,o))}flat(t,e,i,s,r,o,a=1/2){let l=[0,o?1:-1,0];this.quad([t,r,e],[i,r,e],[i,r,s],[t,r,s],l,[t*a,e*a],[i*a,e*a],[i*a,s*a],[t*a,s*a])}mesh(t){let e=new He;e.setAttribute("position",new ae(this.p,3)),e.setAttribute("normal",new ae(this.n,3)),e.setAttribute("uv",new ae(this.u,2)),e.computeTangents?.call;let i=new nt(e,t);return i.receiveShadow=!0,i.castShadow=!0,i}};function Sd(n,t,e){let i={},s=C=>(n.add(C),C),r=(C,S,H)=>{let G=C.clone();return G.needsUpdate=!0,G.repeat.set(S,H),G},o={stucco:oe({map:Tt.stucco(),normalMap:Tt.stuccoN(),roughness:.92,color:14208184}),brick:oe({map:Tt.brick(),normalMap:Tt.brickN(),roughness:.9}),panel:oe({map:Tt.panel(),roughness:.85}),diner:oe({map:Tt.dinerWall(),roughness:.6}),block:oe({map:Tt.block(),roughness:.9}),ceiling:oe({map:Tt.ceiling(),roughness:.95}),carpet:oe({map:Tt.carpet(),roughness:.98}),checker:oe({map:Tt.tileChecker(),roughness:.45}),concrete:oe({map:Tt.concrete(),roughness:.9}),wood:oe({map:Tt.wood(),roughness:.75}),plank:oe({map:Tt.plank(),roughness:.85}),metal:oe({map:Tt.metal(),roughness:.6,metalness:.5}),rust:oe({map:Tt.rust(),roughness:.85,metalness:.2}),dark:oe({color:1710620,roughness:.7}),trim:oe({color:3811868,roughness:.7})};i.M=o;let a=C=>C===3?o.brick:o.stucco,l=C=>C===0?o.panel:C===2?o.diner:o.block,c=(C,S)=>{for(let[H,G]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]])if(Mi(C+H,S+G)===1)return Si[ne(C+H,S+G)];return 0},h=88,u=80,d=oe({map:r(Tt.asphalt(),h/8,u/8),normalMap:r(Tt.asphaltN(),h/4,u/4),normalScale:new ft(.6,.6),roughness:.82,color:10132122}),f=s(new nt(new Qe(h,u),d));f.rotation.x=-Math.PI/2,f.position.set(h/2,0,u/2),f.receiveShadow=!0;let m=s(new nt(new Qe(600,600),oe({color:1381391,roughness:1})));m.rotation.x=-Math.PI/2,m.position.set(h/2,-.02,u/2);let x=new vn({map:Tt.lines(),transparent:!0,depthWrite:!1,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),p=new Qe(.5,5);p.rotateX(-Math.PI/2);for(let C=0;C<10;C++){let S=new nt(p,x);S.position.set(48+C*3.2,.01,6.5),s(S);let H=S.clone();H.position.set(6+C*3.2,.01,72),s(H)}let g=new vn({map:Tt.dirt(),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1});for(let[C,S,H]of[[8,8,10],[80,10,12],[10,70,12],[82,70,10],[44,4,9],[6,40,9],[84,36,9],[30,74,9],[60,74,10],[52,34,8],[22,40,7]]){let G=s(new nt(new Qe(H,H),g));G.rotation.x=-Math.PI/2,G.rotation.z=C,G.position.set(C,.012,S)}let E=new Map,M=C=>(E.has(C)||E.set(C,new Gh),E.get(C));for(let C=0;C<40;C++)for(let S=0;S<44;S++){let H=Mi(S,C),G=S*2,V=G+2,K=C*2,ot=K+2;if(H===1){M(o.ceiling).flat(G,K,V,ot,3.4,!1);continue}if(H!==2&&H!==3&&H!==4)continue;let it=c(S,C),T=a(it),y=l(it);M(o.ceiling).flat(G,K,V,ot,3.4,!1);let k=[[1,0,"z",V,K,ot,[1,0,0]],[-1,0,"z",G,K,ot,[-1,0,0]],[0,1,"x",ot,G,V,[0,0,1]],[0,-1,"x",K,G,V,[0,0,-1]]];for(let[Q,st,tt,It,pt,vt,Qt]of k){let ct=Mi(S+Q,C+st),bt=ct===1?l(Si[ne(S+Q,C+st)]):T;if(H===2){if(ct===2)continue;if(ct===3){M(T).wall(tt,It,pt,vt,ur,io,Qt);continue}if(ct===4){M(T).wall(tt,It,pt,vt,0,so,Qt);continue}M(bt).wall(tt,It,pt,vt,0,3.4,Qt)}else if(ct===1||ct===0||ct===6){let qt=H===3?io:so;M(bt).wall(tt,It,pt,vt,qt,3.4,Qt),H===3&&M(bt).wall(tt,It,pt,vt,0,ur,Qt)}}H===3&&(M(o.wood).flat(G,K,V,ot,ur,!0),M(T).flat(G,K,V,ot,io,!1)),H===4&&M(T).flat(G,K,V,ot,so,!1)}for(let C of Na){let S=C.floorKind==="carpet"?o.carpet:C.floorKind==="checker"?o.checker:o.concrete;M(S).flat(C.i0*2,C.j0*2,(C.i1+1)*2,(C.j1+1)*2,.01,!0,C.floorKind==="checker"?1/4:1/3)}for(let C=0;C<40;C++)for(let S=0;S<44;S++)Mi(S,C)===4&&M(o.concrete).flat(S*2,C*2,S*2+2,C*2+2,.012,!0);for(let[C,S]of E){let H=S.mesh(C);s(H)}let w=[],D=new Xn(2.1,.22,.05);i.planks=[];for(let C of gn){let S=Vt(C.i),H=Vt(C.j),G=C.axis==="x"?0:Math.PI/2,V=C.outDir;for(let it of[-1,1])w.push(Ge(lt(.12,io-ur,.25),{x:S+(C.axis==="x"?it*.94:0),z:H+(C.axis==="z"?it*.94:0),y:(ur+io)/2,ry:G,c:3811868}));let K=new Gt;K.position.set(S-V[0]*.55,0,H-V[1]*.55),K.rotation.y=G,s(K);let ot=[];for(let it=0;it<6;it++){let T=new nt(D,o.plank),y=ur+.18+it%3*.45+(it>2?.2:0);T.position.set(0,y,it>2?-.06:0),T.rotation.z=(it%2?1:-1)*(.12+it*.13%.3),T.castShadow=!0,K.add(T),ot.push(T)}i.planks[C.id]={group:K,list:ot,base:ot.map(it=>({y:it.position.y,rz:it.rotation.z}))}}let P=new nt(gs(w),oe({vertexColors:!0,roughness:.8}));P.castShadow=!0,s(P),i.doorMeshes=[];let R=oe({map:r(Tt.plank(),1,3),roughness:.85,color:11571312});for(let C of bi){let S=new Gt,H=0,G=0;for(let[ot,it]of C.tiles)H+=Vt(ot),G+=Vt(it);S.position.set(H/C.tiles.length,0,G/C.tiles.length),S.rotation.y=C.axis==="x"?0:Math.PI/2,s(S);let V=new nt(lt(4,so,.14),R);V.position.y=so/2,V.castShadow=V.receiveShadow=!0,S.add(V);for(let ot of[-1,1]){let it=new nt(lt(4.4,.25,.06),o.plank);it.position.set(0,1.3,ot*.11),it.rotation.z=ot*.5,S.add(it)}let K=new nt(new Qe(1.2,.36),new ye({map:Tt.label("$"+C.cost,"#1a1208","#f0d080",256,76,"bold 50px Arial Black, Arial"),transparent:!0}));for(let ot of[-1,1]){let it=K.clone();it.position.set(0,1.9,ot*.15),it.rotation.y=ot<0?Math.PI:0,S.add(it)}i.doorMeshes[C.id]=S}let L=oe({map:r(Tt.chain(),h/2.6,1),alphaTest:.5,side:un,metalness:.6,roughness:.5,color:10133664}),q=[],_=2.8,v=(C,S,H,G)=>{let V=Math.hypot(H-C,G-S),K=new nt(new Qe(V,_),L);K.position.set((C+H)/2,_/2,(S+G)/2),K.rotation.y=-Math.atan2(G-S,H-C),K.material.map.repeat.set(V/2.6,1),s(K);for(let ot=0;ot<=V;ot+=4){let it=ot/V;q.push(Ge(Te(.05,.05,_+.1,6),{x:C+(H-C)*it,z:S+(G-S)*it,y:_/2,c:7830396}))}q.push(Ge(Te(.03,.03,V,6),{x:(C+H)/2,z:(S+G)/2,y:_,rz:Math.PI/2,ry:-Math.atan2(G-S,H-C),c:7830396}))},N=2;v(N,N,h-N,N),v(h-N,N,h-N,u-N),v(h-N,u-N,N,u-N),v(N,u-N,N,N),s(new nt(gs(q),oe({vertexColors:!0,metalness:.7,roughness:.45})));let B=[],X=[],rt=7,z=()=>(rt=rt*16807%2147483647)/2147483647;for(let C=0;C<220;C++){let S=z()*Math.PI*2,H=62+z()*70,G=h/2+Math.cos(S)*H*1.05,V=u/2+Math.sin(S)*H,K=8+z()*10;B.push(Ge(new hs(2+z()*1.6,K,7),{x:G,y:K/2+1.5,z:V,c:new Kt().setHSL(.3,.25,.08+z()*.05).getHex()})),X.push(Ge(Te(.25,.35,3,5),{x:G,y:1.5,z:V,c:2759954}))}s(new nt(gs(B),oe({vertexColors:!0,roughness:1}))),s(new nt(gs(X),oe({vertexColors:!0,roughness:1})));let ht=s(new nt(new dn(420,24,16),new ye({map:Tt.sky(),side:Je,fog:!1,depthWrite:!1})));ht.position.set(h/2,0,u/2),ht.renderOrder=-1;let Z=new He,yt=[];for(let C=0;C<900;C++){let S=z()*Math.PI*2,H=.08+z()*1.4;yt.push(Math.cos(S)*Math.cos(H)*400+h/2,Math.sin(H)*400,Math.sin(S)*Math.cos(H)*400+u/2)}Z.setAttribute("position",new ae(yt,3)),s(new ga(Z,new zr({color:13160703,size:1.3,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1})));let Mt=s(new nn(new on({map:Tt.moon(),fog:!1,depthWrite:!1,transparent:!0})));Mt.scale.set(60,60,1),Mt.position.set(h/2-180,210,u/2-260);let St=(C,S=.9)=>new on({map:Tt.glow(),color:C,transparent:!0,opacity:S,blending:fn,depthWrite:!1}),Ht=(C,S,H=C,G=S)=>{for(let V=S;V<=G;V++)for(let K=C;K<=H;K++)jr(K,V)},Ft=(C,S,H,G,V,K=0)=>{let ot=new nt(C,S);return ot.position.set(H,G,V),ot.rotation.y=K,ot.castShadow=ot.receiveShadow=!0,s(ot),ot},et=(C,S,H,G)=>{let V=new Gt;V.position.set(C,0,S),V.rotation.y=H,s(V);let K=oe({map:Tt.rust(),color:G,roughness:.8,metalness:.3}),ot=new nt(lt(1.8,.7,4.4),K);ot.position.y=.55,V.add(ot);let it=new nt(lt(1.6,.55,2.2),K);it.position.set(0,1.15,.2),V.add(it);let T=new nt(lt(1.62,.4,2),o.dark);T.position.set(0,1.15,.2),T.scale.set(1,1,1.02),V.add(T);for(let[y,k]of[[.85,1.4],[-.85,1.4],[.85,-1.4],[-.85,-1.4]]){let Q=new nt(Te(.32,.32,.22,10),o.dark);Q.rotation.z=Math.PI/2,Q.position.set(y,.28,k),V.add(Q)}V.rotation.z=(z()-.5)*.08,V.traverse(y=>{y.isMesh&&(y.castShadow=y.receiveShadow=!0)})};et(41,21,.2,8030874),Ht(20,9,20,11),et(13,49,1.4,10127962),Ht(5,23,7,25),et(70,66,.4,5925466),Ht(34,32,35,34),et(18,18,.1,6969978),Ht(8,8,9,10),Ft(lt(3.4,1.5,1.8),oe({map:Tt.metal(),color:3103290,roughness:.7,metalness:.4}),55,.75,35),Ht(27,17),Ft(lt(3.6,1.1,.9),o.wood,50,.55,57),Ht(24,28,25,28),Ft(lt(3.8,.12,1),oe({color:9050650,roughness:.5}),50,1.13,57),Ft(lt(2.2,.8,.9),oe({color:3811914,roughness:.95}),37,.4,45.2),Ht(18,22),Ft(lt(9.6,1.05,1),oe({color:13156520,roughness:.5}),65,.52,47),Ht(30,23,34,23),Ft(lt(9.8,.08,1.2),oe({color:10099226,roughness:.3,metalness:.3}),65,1.08,47);for(let C=0;C<6;C++)Ft(Te(.22,.22,.12,12),oe({color:10491928,roughness:.4}),61+C*1.6,.75,48.3),Ft(Te(.04,.04,.7,6),o.metal,61+C*1.6,.35,48.3);for(let C of[51,53])Ft(lt(1.6,.9,.5),oe({color:9050650,roughness:.5}),75,.45,C-.7),Ft(lt(1.6,.9,.5),oe({color:9050650,roughness:.5}),75,.45,C+.7),Ft(lt(1.2,.08,.8),oe({color:14209208,roughness:.4}),75,.78,C);Ht(37,25,37,26),Ft(lt(3.6,.95,.8),o.metal,13,.48,23),Ht(6,11),Ft(lt(1,1.4,.6),oe({color:10492442,roughness:.4,metalness:.4}),31,.7,13),Ht(15,6);for(let[C,S]of[[15.6,16.4],[20.4,16.4],[15.6,19.6],[20.4,19.6]])Ft(Te(.12,.12,.6,8),o.metal,C,.3,S);i.fires=[];let ut=oe({map:Tt.rust(),color:9064496,roughness:.8,metalness:.3});for(let[C,S]of[[24,18],[14,19],[36,18],[9,31],[31,35],[40,9]]){let H=Vt(C),G=Vt(S);Ft(Te(.42,.42,1,12),ut,H,.5,G),Ht(C,S);let V=[];for(let ot=0;ot<3;ot++){let it=new nn(new on({map:Tt.flame(),color:ot?16742944:16760928,transparent:!0,blending:fn,depthWrite:!1}));it.position.set(H+(ot-1)*.12,1.3,G),it.scale.set(.6,1.1,1),s(it),V.push(it)}let K=new nn(St(16740384,.5));K.scale.set(5,4,1),K.position.set(H,1.3,G),s(K),i.fires.push({x:H,z:G,fl:V,gl:K})}let Rt=oe({color:4869198,metalness:.6,roughness:.5});i.poles=[];for(let[C,S]of[[12,19],[33,17],[10,34],[36,33],[29,4],[4,13]]){let H=Vt(C),G=Vt(S);Ft(Te(.12,.16,7,8),Rt,H,3.5,G),Ft(lt(1.4,.15,.4),Rt,H+.6,7,G),Ht(C,S);let V=Ft(lt(.6,.08,.3),new ye({color:16760944}),H+1.1,6.9,G);V.castShadow=!1;let K=new nn(St(16752704,.55));K.scale.set(4,4,1),K.position.set(H+1.1,6.8,G),s(K);let ot=s(new nt(new Sa(4.5,20),new ye({map:Tt.glow(),color:6965792,transparent:!0,blending:fn,depthWrite:!1})));ot.rotation.x=-Math.PI/2,ot.position.set(H+1.1,.03,G),i.poles.push({x:H+1.1,z:G})}let gt=(C,S,H,G,V,K,ot,it=0)=>{let T=new nt(new Qe(K,ot),new ye({map:Tt.neon(C,S),transparent:!0,depthWrite:!1,side:un}));T.position.set(H,G,V),T.rotation.y=it,s(T);let y=new nn(St(S,.35));return y.scale.set(K*1.2,ot*2.5,1),y.position.set(H,G,V+(it?0:-.2)),s(y),T},Wt=Ft(lt(9,2,.2),o.dark,43,4.6,41.8);Wt.castShadow=!1;for(let C of[39.5,46.5])Ft(Te(.08,.08,1.4,6),Rt,C,3.6,41.8);i.motelSign=gt("LOCKWOOD MOTEL","#ff3a6a",43,4.75,41.65,8.6,1.6,Math.PI),i.vacancy=gt("NO VACANCY","#ff2a20",43,3.85,41.65,3.4,.6,Math.PI),gt("DINER","#3ae0ff",66,4.2,41.85,4,1.1,Math.PI),Ft(lt(4.4,1.3,.15),o.dark,66,4.2,41.95);let zt=new nt(new Qe(5,.9),new vn({map:Tt.label("ED'S AUTO REPAIR","#c8b070","#2a1a0a",512,96,"bold 58px Arial Black, Arial"),roughness:.8}));zt.position.set(18,2.95,30.02),s(zt);let Xt=(C,S,H,G,V=.45)=>{let K=Vt(S)-G[0]*V,ot=Vt(H)-G[1]*V;return C.position.set(K,0,ot),C.rotation.y=Math.atan2(G[0],G[1]),s(C),{x:Vt(S)+G[0]*.6,z:Vt(H)+G[1]*.6}};i.boxSpots=[{i:21,j:29,face:[0,-1],name:"Lobby"},{i:36,j:22,face:[0,1],name:"Diner"},{i:12,j:6,face:[0,1],name:"Garage"},{i:37,j:14,face:[-1,0],name:"Parking Lot"}],i.box=md(),s(i.box.group);for(let C of i.boxSpots)jr(C.i,C.j),C.crate=gd(),C.use=Xt(C.crate,C.i,C.j,C.face,.2),C.pos={x:Vt(C.i)-C.face[0]*.2,z:Vt(C.j)-C.face[1]*.2},C.rot=Math.atan2(C.face[0],C.face[1]);i.perks=[{key:"revive",name:"Second Wind",col:"#3a8aff",sub:"SELF-REVIVE",cost:500,i:26,j:23,face:[-1,0],needsPower:!1,desc:"Get back up once when you go down"},{key:"tank",name:"Tank Tonic",col:"#e02020",sub:"MORE HEALTH",cost:2500,i:29,j:29,face:[0,-1],needsPower:!0,desc:"Take 2.5x more hits"},{key:"rapid",name:"Rapid Brew",col:"#2ac040",sub:"FAST RELOAD",cost:3e3,i:37,j:29,face:[0,-1],needsPower:!0,desc:"Reload twice as fast"},{key:"double",name:"Double Shot",col:"#e0b020",sub:"FIRE RATE",cost:2e3,i:15,j:13,face:[0,-1],needsPower:!0,desc:"Shoot 33% faster"},{key:"stamina",name:"Fleetfoot",col:"#f07020",sub:"MOVE FASTER",cost:2e3,i:33,j:22,face:[0,1],needsPower:!0,desc:"Run faster and longer"}];for(let C of i.perks)jr(C.i,C.j),C.m=_d(C.name,C.col,C.sub),C.use=Xt(C.m.group,C.i,C.j,C.face,.2);i.sw=xd(),i.swUse=Xt(i.sw.group,16,7,[-1,0],-.08-1),i.forge=yd(),jr(7,7),i.forgeUse=Xt(i.forge.group,7,7,[0,1],.1),i.wallbuys=Md.map(C=>{let S=hr[C.key],H=Tt.chalk(C.key,(ot,it,T)=>zy(ot,it,T,S.kind)),G=new nt(new Qe(1.8,.9),new ye({map:H,transparent:!0,depthWrite:!1,color:14209216})),V=Vt(C.i)+C.face[0]*1.02,K=Vt(C.j)+C.face[1]*1.02;return G.position.set(V,1.55,K),G.rotation.y=Math.atan2(C.face[0],C.face[1]),s(G),{...C,mesh:G,use:{x:Vt(C.i)+C.face[0]*1.6,z:Vt(C.j)+C.face[1]*1.6}}}),i.car=pd(t),s(i.car.group),i.hemi=s(new ir(4872832,1709072,.55)),i.moonL=s(new sr(9085144,.55)),i.moonL.position.set(-60,90,-80),s(i.moonL.target),i.room=[{light:new yi(16763024,14,16,1.6),x:43,y:3,z:51,flick:.25},{light:new yi(13168895,14,17,1.6),x:66,y:3,z:52,flick:.05},{light:new yi(16767120,13,17,1.6),x:22,y:3,z:20,flick:.12}];for(let C of i.room)C.light.position.set(C.x,C.y,C.z),s(C.light);let jt=new ye({color:16773336});for(let[C,S]of[[43,51],[36,47],[50,55],[66,52],[60,50],[72,56],[22,20],[14,16],[28,24]]){let H=Ft(lt(1.4,.06,.3),jt,C,3.4-.04,S);H.castShadow=!1}return i.fireLights=i.fires.map(C=>{let S=new yi(16742960,10,13,1.7);return S.position.set(C.x,1.6,C.z),s(S),S}),i.carLight=new Ta(16773328,0,30,.55,.5,1.2),s(i.carLight),s(i.carLight.target),i}function zy(n,t,e,i){n.beginPath();let s=i==="smg"?150:i==="pistol"?90:210,r=(t-s)/2,o=e/2-12;n.moveTo(r,o),n.lineTo(r+s*.75,o),n.lineTo(r+s*.75,o-6),n.lineTo(r+s,o-6),n.lineTo(r+s,o+4),n.lineTo(r+s*.72,o+4),n.lineTo(r+s*.72,o+16),n.lineTo(r+s*.48,o+16),i!=="pistol"&&(n.lineTo(r+s*.46,o+40),n.lineTo(r+s*.4,o+40),n.lineTo(r+s*.4,o+18)),n.lineTo(r+s*.3,o+18),n.lineTo(r+s*.24,o+44),n.lineTo(r+s*.15,o+44),n.lineTo(r+s*.2,o+16),i!=="pistol"&&(n.lineTo(r+10,o+26),n.lineTo(r-6,o+30),n.lineTo(r-6,o+2)),n.closePath(),n.stroke(),n.beginPath(),n.moveTo(r+s*.3,o+8),n.lineTo(r+s*.6,o+8),n.stroke()}var De=Object.assign({q:"auto",sens:1,fov:75,vol:.8,inv:0,fps:0},JSON.parse(localStorage.getItem("ds_set")||"{}")),vr=()=>localStorage.setItem("ds_set",JSON.stringify(De)),Ms=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;Ms&&ps("touch");var Id=()=>De.q==="auto"?Ms?"low":"medium":De.q,yr=mt("c"),bn=new da({canvas:yr,antialias:!Ms,powerPreference:"high-performance"});bn.outputColorSpace=yn;bn.toneMapping=gh;bn.toneMappingExposure=1.4;bn.autoClear=!1;var Re=new cs;Re.background=new Kt(658710);Re.fog=new pa(658710,.024);var Hy=new Qs(bn),Ld=Hy.fromScene(new La,.04).texture,be=new Ke(75,1,.05,300);be.rotation.order="YXZ";var co=new cs,Yh=new Ke(60,1,.01,10);co.add(new ir(11581648,3156e3,1.4));var Dd=new sr(16769216,1.2);Dd.position.set(1,2,1);co.add(Dd);Oh();var kt=Sd(Re,Ld,Id());kt.hemi.intensity=1.3;kt.moonL.intensity=1.2;Re.environment=Ld;Re.environmentIntensity=.22;var Qa=1;function iu(){let n=Id(),t=Math.min(devicePixelRatio||1,n==="high"?2:n==="medium"?1.5:1.25);if(bn.setPixelRatio(t*Qa),bn.shadowMap.enabled=n!=="low",kt.moonL.castShadow=n!=="low",n!=="low"){let e=n==="high"?2048:1024;kt.moonL.shadow.mapSize.set(e,e);let i=kt.moonL.shadow.camera;i.left=i.bottom=-30,i.right=i.top=30,i.near=1,i.far=250,i.updateProjectionMatrix()}ad(n==="low"?2:n==="medium"?4:8),mt("qInfo").textContent="Graphics now: "+n.toUpperCase()+(De.q==="auto"?" (auto picks LOW on phones, MED on computers)":"")}function Ud(){let n=innerWidth,t=innerHeight;bn.setSize(n,t,!1),yr.style.width=n+"px",yr.style.height=t+"px",be.aspect=Yh.aspect=n/t,Nd(),Yh.updateProjectionMatrix()}function Nd(){let n=be.aspect;be.userData.fov=n<1?Math.min(100,De.fov*1.3):De.fov}addEventListener("resize",Ud);var Xa=[];function xs(n,t,e,i,s,r,o,a={}){let l=new on({map:n,color:t,transparent:!0,depthWrite:!1,blending:a.add?fn:Fi,opacity:a.op??1}),c=new nn(l);return c.position.set(e,i,s),c.scale.set(r,r,1),Re.add(c),Xa.push({sp:c,life:o,t:0,grow:a.grow||0,vy:a.vy||0,op:a.op??1}),c}function Od(n){for(let t=Xa.length-1;t>=0;t--){let e=Xa[t];e.t+=n;let i=e.t/e.life;e.sp.position.y+=e.vy*n;let s=e.sp.scale.x+e.grow*n;e.sp.scale.set(s,s,1),e.sp.material.opacity=e.op*(1-i),i>=1&&(Re.remove(e.sp),e.sp.material.dispose(),Xa.splice(t,1))}}var qa=0;function ys(n){let t=mt("toast");t.textContent=n,t.classList.add("show"),qa=2.6}var Ya=0;function Zi(n,t=3){let e=mt("center");e.innerHTML=n,e.classList.add("show"),Ya=t}var Gy=n=>$.device==="pad"?{use:"SQUARE",build:"CIRCLE"}[n]||n:$.device==="touch"?{use:"USE",build:"BUILD"}[n]||n:{use:"F",build:"B"}[n]||n,_s=new I,Ga=new I,j={state:"title",t:0,round:0,toSpawn:0,spawnT:0,between:!1,betweenT:0,kills:0,heads:0,points:0,power:!1,flowT:0,flowDirty:!0,lastFlowK:-1,insta:0,dbl:0,pupsRound:0,repairPts:0,god:!1,mapDirty:!0},A={x:0,z:0,y:0,vy:0,yaw:0,pitch:0,hp:100,maxHp:100,lastHit:-9,guns:[],cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,perks:new Set,view:"fp",bob:0,ads:0,recoil:0,repT:0,driving:!1,semi:!1,heartT:0,speed:0},Ee=[],Yi=[],gr=[],_r=[],ii=[],Za=sd.filter(([n,t])=>he[ne(n,t)]===0),bd={x:Vt(21)+1,z:Vt(25)+1},Kn=new Gt;co.add(Kn);var Vy=dd();Kn.add(Vy.group);var ro=null;function xr(){ro&&Kn.remove(ro.group);let n=A.guns[A.cur];ro=n?no(n.key,n.pap):null,ro&&Kn.add(ro.group),oo&&Ti.hand.remove(oo.group),oo=n?no(n.key,n.pap):null,oo&&Ti.hand.add(oo.group),ln()}var Ti=ud();Re.add(Ti.wrap);Ti.wrap.visible=!1;var oo=null,Ed=-1;function vs(n,t){!t&&j.dbl>0&&(n*=2),j.points+=t?-n:n;let e=document.createElement("div");e.className="pop"+(t?" neg":""),e.textContent=(t?"-":"+")+n,e.style.bottom=20+Be()*30+"px",mt("points").appendChild(e),setTimeout(()=>e.remove(),1e3)}function Wy(){let n=j.round,t=mt("round");if(n<=5){let e='<span class="tally">';for(let i=0;i<Math.min(n,4);i++)e+="<i></i>";n===5&&(e+='<i class="x"></i>'),t.innerHTML=e+"</span>"}else t.textContent=n}function ln(){Ed!==j.points&&(mt("pts").textContent=j.points,Ed=j.points);let n=A.guns[A.cur];n&&(mt("gunName").textContent=n.name,mt("gunName").className=n.pap?"pap":"",mt("clip").innerHTML=n.clip+"<small> / "+n.reserve+"</small>",mt("clip").className=n.clip<=n.mag*.25?"low":""),mt("nades").textContent="Grenades: "+A.nades,mt("perks").innerHTML=[...A.perks].map(e=>{let i=kt.perks.find(s=>s.key===e);return`<b style="background:${i.col};color:${i.col}"><span style="color:#fff">${i.name[0]}</span></b>`}).join(""),mt("powerups").innerHTML=(j.insta>0?`<div class="${j.insta<5?"blink":""}">INSTA-KILL<br>${Math.ceil(j.insta)}</div>`:"")+(j.dbl>0?`<div class="${j.dbl<5?"blink":""}">DOUBLE POINTS<br>${Math.ceil(j.dbl)}</div>`:"");let t=j.toSpawn+Ee.filter(e=>!e.dead).length;mt("zcount").textContent=j.between?"Next round soon":"Zombies left: "+t}var Fd=mt("minimap"),Xe=Fd.getContext("2d"),$a=document.createElement("canvas"),Sn=3.6;function Xy(){$a.width=88*Sn,$a.height=80*Sn;let n=$a.getContext("2d");for(let t=0;t<40;t++)for(let e=0;e<44;e++){let i=he[ne(e,t)];n.fillStyle=i===0?"#20261c":i===1?Jr.has(Si[ne(e,t)])?"#6a6458":"#3a3630":i===3?"#c09040":i===4?"#d0b050":i===7||i===8?"#a07040":i===9?"#805030":i===6?"#2c3028":"#9a9a9a",n.fillRect(e*2*Sn,t*2*Sn,2*Sn+.5,2*Sn+.5)}j.mapDirty=!1}function qy(){j.mapDirty&&Xy();let n=Fd.width,t=A.driving?_t.x:A.x,e=A.driving?_t.z:A.z,i=A.driving?_t.h:A.yaw;Xe.clearRect(0,0,n,n),Xe.save(),Xe.translate(n/2,n/2),Xe.rotate(i),Xe.drawImage($a,-t*Sn,-e*Sn),Xe.fillStyle="#ff3030";for(let r of Ee)r.dead||(Xe.beginPath(),Xe.arc((r.x-t)*Sn,(r.z-e)*Sn,4,0,7),Xe.fill());Xe.fillStyle="#5ab0ff";let s=kt.boxSpots[At.spot].pos;Xe.fillRect((s.x-t)*Sn-5,(s.z-e)*Sn-5,10,10),Xe.fillStyle="#ffd040",Xe.fillRect((_t.x-t)*Sn-4,(_t.z-e)*Sn-7,8,14),Xe.restore(),Xe.fillStyle="#fff",Xe.beginPath(),Xe.moveTo(n/2,n/2-10),Xe.lineTo(n/2-7,n/2+8),Xe.lineTo(n/2+7,n/2+8),Xe.fill()}var At={spot:0,state:"idle",t:0,key:null,uses:0,cycleT:0,model:null};function su(){let n=kt.boxSpots[At.spot];kt.box.group.position.set(n.pos.x,0,n.pos.z),kt.box.group.rotation.y=n.rot,kt.boxSpots.forEach((t,e)=>t.crate.visible=e!==At.spot)}var _t={x:0,z:0,h:0,v:0,steer:0};function Yy(){for(let[n,t]of[[27,12],[24,11],[30,14],[20,16],[32,8]]){let e=!0;for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++)(!Zn(n+i,t+s)||he[ne(n+i,t+s)]!==0)&&(e=!1);if(e)return{x:Vt(n),z:Vt(t)}}return{x:Vt(27),z:Vt(12)}}var Zh=Yy(),Pn={t:0},Vh=vd(),$h=[{kind:"wall",name:"Wall",cost:250,hp:900,tile:7},{kind:"door",name:"Door",cost:400,hp:700,tile:8},{kind:"spikes",name:"Spikes",cost:300,hp:1600,tile:9}],se={on:!1,sel:0,rot:0,ghost:null,gi:-1,gj:-1,ok:!1};function Bd(){for(let n of Ee)Re.remove(n.m.root);Ee.length=0;for(let n of Yi)Re.remove(n.g);Yi.length=0;for(let n of gr)Re.remove(n.sp);gr.length=0;for(let n of _r)Re.remove(n.m);_r.length=0;for(let n of ii){Re.remove(n.g);for(let[t,e]of[[n.i,n.j]])he[ne(t,e)]=n.under,On[ne(t,e)]=-1}ii.length=0}function Zy(){Bd(),Oh();for(let n of kd)he[n]=6;for(let n of bi)kt.doorMeshes[n.id].visible=!0;for(let n of gn)n.planks=6,kt.planks[n.id].list.forEach(t=>t.visible=!0);Object.assign(j,{t:0,round:0,toSpawn:0,between:!1,kills:0,heads:0,points:500,power:!1,flowDirty:!0,insta:0,dbl:0,mapDirty:!0,downs:0}),Object.assign(A,{x:bd.x,z:bd.z,y:0,vy:0,yaw:Math.PI,pitch:0,hp:100,maxHp:100,lastHit:-9,cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,view:"fp",ads:0,driving:!1}),A.perks.clear(),A.guns=[Ha("pistol")],xr(),zd(!1),At.spot=0,At.state="idle",At.uses=0,At.model&&(kt.box.gunSlot.remove(At.model),At.model=null),kt.box.lid.rotation.x=0,su(),Object.assign(_t,{x:Zh.x,z:Zh.z,h:0,v:0}),vi(!1),se.on=!1,document.body.classList.remove("building","driving"),mt("buildbar").classList.add("hidden"),mt("carhud").classList.add("hidden"),ru(1),ln()}var kd=[];for(let n=0;n<he.length;n++)he[n]===6&&kd.push(n);function zd(n){j.power=n,kt.sw.lever.rotation.x=n?-.6:.6,kt.sw.lamp.material.color.set(n?3211072:4460817);for(let t of kt.perks){let e=n||!t.needsPower;t.m.face.material?.forEach?.(()=>{}),t.m.bulbM.color.set(e?t.col:2236962),t.m.glow.material.opacity=e?.35:0;let i=Array.isArray(t.m.face)?null:t.m.face;i&&(i.emissiveIntensity=e?.8:0)}kt.forge.glowM.emissiveIntensity=n?1.4:0,kt.forge.glow.material.opacity=n?.4:0}var $y=n=>n<=4?[6,8,13,18][n-1]:Math.min(24+(n-5)*5,220),Ky=n=>n<10?150+100*(n-1):Math.round(950*Math.pow(1.1,n-9)),Jy=()=>Ms?16:24;function ru(n){j.round=n,j.toSpawn=$y(n),j.spawnT=n===1?3:1.5,j.between=!1,j.pupsRound=0,j.repairPts=0,n>1?(A.nades=Math.min(4,A.nades+2),re.round(!0),Zi("ROUND "+n+(n===100?"<small>THE LAST ONE</small>":""),3)):Zi("DEAD SHIFT<small>SURVIVE THE NIGHT</small>",3.5),Wy(),mt("round").classList.add("flash"),setTimeout(()=>mt("round").classList.remove("flash"),1200),ln()}function jy(n){if(j.between){j.betweenT-=n,j.betweenT<=0&&ru(j.round+1);return}let t=Ee.filter(e=>!e.dead).length;j.spawnT-=n,j.toSpawn>0&&t<Jy()&&j.spawnT<=0&&(Hd(),j.toSpawn--,j.spawnT=Math.max(.35,2-j.round*.08)*(.6+Be()*.8),ln()),j.toSpawn===0&&t===0&&(j.between=!0,j.betweenT=8,re.round(!1),Zi(j.round===100?"YOU SURVIVED ROUND 100<small>KEEP GOING IF YOU DARE</small>":"ROUND "+j.round+" SURVIVED",4),ln())}function Hd(){let n=j.round,t=Be(),e="walker";n>=6&&t<.1?e="toxic":n>=4&&t<.24?e="fat":n>=3&&t<.42&&(e="runner");let i=A.driving?_t.x:A.x,s=A.driving?_t.z:A.z,r=Za.filter(([f,m])=>{let x=Math.hypot(Vt(f)-i,Vt(m)-s);return x>12&&x<50});r.length||(r=Za.filter(([f,m])=>Math.hypot(Vt(f)-i,Vt(m)-s)>8)),r.length||(r=Za);let[o,a]=ms(r),l=Vt(o)+(Be()-.5)*1.4,c=Vt(a)+(Be()-.5)*1.4,h=hd(e),u=Ky(n),d=Math.min(1+n*.1,1.9)*(.85+Be()*.3);n>=8&&e==="walker"&&Be()<Math.min(.6,(n-7)*.08)&&(d=2.8+Be()*.6),e==="runner"&&(d=3.9+Math.min(n*.04,1.2),u*=.75),e==="fat"&&(d=Math.min(.9+n*.05,1.6),u*=2.3),e==="toxic"&&(d=1.7,u*=.9),h.root.position.set(l,-1.8,c),Re.add(h.root),Ee.push({m:h,type:e,x:l,z:c,hp:u,maxHp:u,speed:d,state:"rise",t:0,atk:0,atkCd:0,dead:!1,deadT:0,yaw:Be()*6.28,rip:0,groanT:2+Be()*6,best:1e9,stuckT:0,cur:0,head:!1})}function Gd(n,t,e,i){let s=Math.hypot(e-n,i-t);return Fa(n,t,e-n,i-t,s,(r,o)=>to(r,o)||r===3)>=s-.01}var Qy=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function Vd(n,t,e,i){let s=n.m;if(n.dead){n.deadT+=t;let R=Math.min(1,n.deadT/.6);s.body.rotation.x=-R*Math.PI/2*n.fallDir,s.body.position.y=-R*.75*(s.scale||1)+Math.sin(R*Math.PI)*.2,n.deadT>4&&(s.root.position.y=-(n.deadT-4)*.8),n.deadT>5.5&&(Re.remove(s.root),Ee.splice(Ee.indexOf(n),1));return}if(n.state==="rise"){n.t+=t;let R=Math.min(1,n.t/1.4);s.root.position.y=-1.8*(1-R),s.root.rotation.y=n.yaw,Bh(s,j.t,0,.6,!0),R>=1&&(n.state="move");return}let r=e-n.x,o=i-n.z,a=Math.hypot(r,o),l=Oe(n.x),c=Oe(n.z),h=Zn(l,c)?ne(l,c):0,u=e,d=i,f="walk",m=null;if(!(a<8&&Gd(n.x,n.z,e,i))){let R=ei[h],L=-1;for(let[q,_]of Qy){let v=l+q,N=c+_;if(!Zn(v,N)||q&&_&&(to(he[ne(l+q,c)],ne(l+q,c))||to(he[ne(l,c+_)],ne(l,c+_))||he[ne(l+q,c)]===3||he[ne(l,c+_)]===3))continue;let B=ne(v,N);ei[B]<R&&(R=ei[B],L=B)}if(L>=0){let q=he[L],_=L%44,v=L/44|0;if(u=Vt(_),d=Vt(v),q===3&&gn[On[L]].planks>0){let N=gn[On[L]];f="window",m=N,u=Vt(N.i)+N.outDir[0]*1.15,d=Vt(N.j)+N.outDir[1]*1.15}else(q===7||q===8)&&(f="piece",m=ii.find(N=>N.k===L))}}let x=n.speed,p=he[h];if(p===3&&(x*=.45),p===9){x*=.5;let R=ii.find(L=>L.k===h);if(n.hp-=160*t*Math.max(1,j.round/6),R&&(R.hp-=12*t,R.hp<=0&&Pd(R)),Be()<t*2&&re.spike(),n.hp<=0){tl(n,"spike");return}}let g=u-n.x,E=d-n.z,M=Math.hypot(g,E),w=!1;if(f==="window"&&M<.35)w=!0,n.yaw=Math.atan2(-m.outDir[0],-m.outDir[1]),n.rip+=t,n.rip>1.5&&(n.rip=0,m.planks=Math.max(0,m.planks-1),kt.planks[m.id].list[m.planks].visible=!1,re.plank(),j.flowDirty=!0);else if(f==="piece"&&m&&Math.hypot(m.x-n.x,m.z-n.z)<1.55)w=!0,n.yaw=Math.atan2(m.x-n.x,m.z-n.z),m.hp-=30*t,Be()<t*1.2&&re.plank(),m.hp<=0&&Pd(m);else if(a<1.25+(n.type==="fat"?.2:0))w=!0,n.yaw=Math.atan2(r,o);else if(M>.01){let R=Math.min(M,x*t);n.x+=g/M*R,n.z+=E/M*R,n.yaw+=Ba(n.yaw,Math.atan2(g,E))*Math.min(1,t*8)}if(n.atkCd-=t,a<1.3+(n.type==="fat"?.2:0)&&n.atkCd<=0&&n.atk===0&&(n.atk=.001),n.atk>0){let R=n.atk;n.atk+=t/.8,R<.5&&n.atk>=.5&&a<1.6&&nl(A.driving?18:34),n.atk>=1&&(n.atk=0,n.atkCd=.4)}let D={x:n.x,z:n.z};ar(D,.3,to),n.x=D.x,n.z=D.z;let P=ei[h];if(P<n.best-.5?(n.best=P,n.stuckT=0):n.stuckT+=t,n.stuckT>22&&a>18){let[R,L]=ms(Za);n.x=Vt(R),n.z=Vt(L),n.best=1e9,n.stuckT=0,n.state="rise",n.t=0}if(s.root.position.set(n.x,0,n.z),s.root.rotation.y=n.yaw,n.cur=Ei(n.cur,w?0:x,Math.min(1,t*6)),Bh(s,j.t,n.cur,Math.max(w?.5+.5*Math.sin(j.t*6):0,n.atk>0?Math.sin(n.atk*Math.PI):0),p===3),n.groanT-=t,n.groanT<=0&&(n.groanT=3+Be()*7,a<30)){let R=Ba(A.yaw,Math.atan2(-r,-o));re.groan(Fn(-Math.sin(R),-1,1),a)}}function tv(){for(let n=0;n<Ee.length;n++){let t=Ee[n];if(!(t.dead||t.state==="rise")){for(let e=n+1;e<Ee.length;e++){let i=Ee[e];if(i.dead||i.state==="rise")continue;let s=i.x-t.x,r=i.z-t.z,o=Math.hypot(s,r);if(o<.62&&o>1e-4){let a=(.62-o)/2;t.x-=s/o*a,t.z-=r/o*a,i.x+=s/o*a,i.z+=r/o*a}}if(!A.driving){let e=A.x-t.x,i=A.z-t.z,s=Math.hypot(e,i);s<.7&&s>1e-4&&(t.x-=e/s*(.7-s),t.z-=i/s*(.7-s))}}}}function lo(n,t,e,i){n.dead||(j.insta>0&&(t=1e12),n.hp-=t,re.hit(e),n.hp<=0?tl(n,i,e):(vs(10),Wd(!1)))}function tl(n,t,e){if(n.dead=!0,n.deadT=0,n.fallDir=Be()<.5?1:-1,j.kills++,e&&j.heads++,vs(t==="knife"?130:e?100:t==="nuke"?0:60),Wd(!0),re.kill(),xs(Tt.blood(),16777215,n.x,1.1,n.z,.9,.5,{grow:1.5}),n.type==="toxic"){re.toxic();let i=xs(Tt.puff(),6356800,n.x,1,n.z,3.5,6,{op:.55,grow:.4});gr.push({x:n.x,z:n.z,t:6})}t!=="nuke"&&j.pupsRound<4&&Be()<.035&&Xd(n.x,n.z),ln()}var Ka=0;function Wd(n){let t=mt("hit");t.className=n?"kill":"",t.style.opacity=1,Ka=.18,n||re.hitmarker()}var Ja={max:["MAX AMMO",4259680],insta:["INSTA-KILL",16728128],dbl:["DOUBLE POINTS",16764992],nuke:["NUKE",16744480],carp:["CARPENTER",4235519]};function Xd(n,t,e){e=e||ms(Object.keys(Ja)),j.pupsRound++;let i=new Gt;i.position.set(n,1,t);let s=new nn(new on({map:Tt.glow(),color:Ja[e][1],transparent:!0,blending:fn,depthWrite:!1}));s.scale.set(1.8,1.8,1),i.add(s);let r=new nn(new on({map:Tt.label(Ja[e][0],"rgba(0,0,0,0)","#fff",512,96,"bold 52px Arial Black, Arial"),transparent:!0,depthWrite:!1}));r.scale.set(1.9,.36,1),r.position.y=.75,i.add(r),Re.add(i),Yi.push({g:i,kind:e,x:n,z:t,t:26})}function ev(n){if(re.powerup(n.kind),Zi(Ja[n.kind][0],2),n.kind==="max"){for(let t of A.guns)t.reserve=t.maxReserve;A.nades=Math.max(A.nades,4)}if(n.kind==="insta"&&(j.insta=30),n.kind==="dbl"&&(j.dbl=30),n.kind==="nuke"){mt("flash").style.opacity=1,ja=1;for(let t of Ee)!t.dead&&t.state!=="rise"&&tl(t,"nuke");for(let t of Ee)t.dead||tl(t,"nuke");vs(400),re.boom()}if(n.kind==="carp"){for(let t of gn)t.planks=6,kt.planks[t.id].list.forEach(e=>e.visible=!0);j.flowDirty=!0,vs(200)}ln()}var ja=0;function nl(n){if(!(j.god||j.state!=="play")&&(A.hp-=n,A.lastHit=j.t,re.hurt(),Kr(.8,.5,200),mt("dmg").style.opacity=1,A.hp<=0))if(A.perks.has("revive")){A.perks.delete("revive"),A.hp=A.maxHp,Zi("SECOND WIND<small>YOU GOT BACK UP</small>",2.5);for(let t of Ee)!t.dead&&Math.hypot(t.x-A.x,t.z-A.z)<5&&(t.x+=(t.x-A.x)*.8,t.z+=(t.z-A.z)*.8);ln()}else qd()}function qd(){j.state="over",A.hp=0,vi(!1),document.pointerLockElement&&document.exitPointerLock();let n=Math.max(+localStorage.getItem("ds_best")||0,j.round);localStorage.setItem("ds_best",n),mt("stats").innerHTML=`You made it to <b>round ${j.round}</b><br>Kills: <b>${j.kills}</b> &nbsp; Headshots: <b>${j.heads}</b><br>Points left: <b>${j.points}</b><br>Best round: <b>${n}</b>`,setTimeout(()=>{mt("hud").classList.add("hidden"),mt("touch").classList.remove("live"),mt("over").classList.remove("hidden")},1200),Zi("YOU DIED",2)}function ho(){return A.guns[A.cur]}function Kh(){let n=ho();!n||A.reloadT>0||n.clip>=n.mag||n.reserve<=0||(A.reloadT=n.def.reload*(A.perks.has("rapid")?.5:1),A.reloadMax=A.reloadT,re.reload(0))}function Jh(n,t=!1){let e=A.guns.findIndex(s=>s.key===n),i=Ha(n,t);e>=0?(A.guns[e]=i,A.cur=e):A.guns.length<2?(A.guns.push(i),A.cur=A.guns.length-1):A.guns[A.cur]=i,A.reloadT=0,A.swapT=.4,xr()}var wd=new I,Td=new I;function nv(){let n=ho();if(!n)return;n.clip--,A.fireT=60/(n.rpm*(A.perks.has("double")?1.33:1)),A.recoil=Math.min(1,A.recoil+.35);let t=n.def;re.shot(t.sound[0],t.sound[1],!!t.wonder),Kr(.3,.6,60),be.getWorldPosition(wd);let e=t.pellets||1;for(let i=0;i<e;i++){let s=t.spread*(A.ads>.5?.35:1)*(A.speed>1?1.6:1);Td.set((Be()-.5)*2*s,(Be()-.5)*2*s,-1).normalize().applyQuaternion(be.quaternion),iv(wd,Td,n)}A.pitch=Fn(A.pitch+.006+t.sound[1]*.01,-1.45,1.45),jh=.05,ln(),n.clip===0&&Kh()}var jh=0,ao=new nn(new on({map:Tt.glow(),color:16760944,transparent:!0,blending:fn,depthWrite:!1}));ao.scale.set(.25,.25,1);co.add(ao);var Ad=new I,Wh=new I;function iv(n,t,e){let i=Math.hypot(t.x,t.z),s=150;i>1e-4&&(s=Fa(n.x,n.z,t.x,t.z,150*i,u=>nd(u))/i),t.y<-1e-4&&(s=Math.min(s,-n.y/t.y)),t.y>1e-4&&(s=Math.min(s,(3.4-n.y)/t.y));let r=[];for(let u of Ee){if(u.dead||u.state==="rise"&&u.t<.7||Math.hypot(u.x-n.x,u.z-n.z)>s+2)continue;let d=u.m.scale||1;u.m.head.getWorldPosition(Ad),u.m.spine.getWorldPosition(Wh),Wh.y+=.25*d;let f=[[Ad,.17*d,!0],[Wh,(u.type==="fat"?.48:.32)*d,!1]],m=1/0,x=!1;for(let[p,g,E]of f){let M=p.x-n.x,w=p.y-n.y,D=p.z-n.z,P=M*t.x+w*t.y+D*t.z;if(P<0)continue;let R=M*M+w*w+D*D-P*P;if(R<g*g){let L=P-Math.sqrt(g*g-R);L<m&&(m=L,x=E)}}if(m===1/0){let p=u.x-n.x,g=u.z-n.z,E=(p*t.x+g*t.z)/Math.max(1e-6,i*i),M=n.x+t.x*E-u.x,w=n.z+t.z*E-u.z,D=n.y+t.y*E;E>0&&M*M+w*w<.09&&D>0&&D<.9*d&&(m=E)}m<s&&r.push([m,u,x])}r.sort((u,d)=>u[0]-d[0]);let o=e.def.pierce||1,a=s;for(let u=0;u<Math.min(o,r.length);u++){let[d,f,m]=r[u];lo(f,e.dmg*(m?e.def.head:1)*Math.pow(.75,u),m,"gun"),xs(Tt.blood(),16777215,n.x+t.x*d,n.y+t.y*d,n.z+t.z*d,.4,.35,{grow:1}),u===o-1&&(a=d)}let l=n.x+t.x*a,c=n.y+t.y*a,h=n.z+t.z*a;if(e.def.splash){xs(Tt.glow(),5308272,l,c,h,2.5,.4,{add:!0,grow:4});for(let u of Ee)!u.dead&&Math.hypot(u.x-l,u.z-h)<e.def.splash&&lo(u,e.dmg,!1,"gun")}else r.length||xs(Tt.puff(),10064e3,l,c,h,.25,.4,{grow:.8})}function sv(){if(A.knifeT>0)return;A.knifeT=.5,re.knife();let n=null,t=1.9;for(let e of Ee){if(e.dead||e.state==="rise")continue;let i=e.x-A.x,s=e.z-A.z,r=Math.hypot(i,s),o=Math.abs(Ba(Math.atan2(-i,-s),A.yaw));r<t&&o<1&&(t=r,n=e)}n&&lo(n,150+j.round*25,!1,"knife")}function rv(){if(A.nades<=0)return;A.nades--,ln();let n=new nt(new dn(.08,8,6),new vn({color:3820074,roughness:.6}));Re.add(n),be.getWorldDirection(_s),be.getWorldPosition(Ga),_r.push({m:n,x:Ga.x+_s.x*.5,y:Ga.y,z:Ga.z+_s.z*.5,vx:_s.x*14,vy:_s.y*14+3,vz:_s.z*14,t:2.2})}function ov(n){for(let t=_r.length-1;t>=0;t--){let e=_r[t];e.t-=n,e.vy-=18*n;let i=e.x+e.vx*n,s=e.z+e.vz*n,r=he[ne(Fn(Oe(i),0,43),Fn(Oe(s),0,39))];if(Qr(r)||r===3?(e.vx*=-.4,e.vz*=-.4):(e.x=i,e.z=s),e.y+=e.vy*n,e.y<.08&&(e.y=.08,e.vy*=-.35,e.vx*=.7,e.vz*=.7),e.m.position.set(e.x,e.y,e.z),e.t<=0){Re.remove(e.m),_r.splice(t,1),re.boom(),Kr(1,1,300),xs(Tt.glow(),16752704,e.x,1,e.z,3,.4,{add:!0,grow:10}),xs(Tt.puff(),5263440,e.x,1.2,e.z,2,1.6,{grow:3,vy:.8,op:.8});for(let a of Ee){if(a.dead)continue;let l=Math.hypot(a.x-e.x,a.z-e.z);l<5.5&&lo(a,(900+j.round*120)*(1-l/6),!1,"nade")}let o=Math.hypot(A.x-e.x,A.z-e.z);o<3.5&&!A.driving&&nl(25*(1-o/3.5))}}}function qi(n,t){return Math.hypot(n.x-A.x,n.z-A.z)<t}function Qh(n){mt("prompt").innerHTML=n}function mr(n){return j.points<n?(re.deny(),ys("Not enough points"),!1):(vs(n,!0),re.buy(),ln(),!0)}var ni=()=>`<span class="k">${Gy("use")}</span>`;function av(n){let t="",e=mn("use"),i=$.use;if(A.driving){Qh(ni()+" Get out"),e&&dv();return}let s=!1;for(let r of gn){let o={x:Vt(r.i)-r.outDir[0]*1.1,z:Vt(r.j)-r.outDir[1]*1.1};if(r.planks<6&&qi(o,1.6)){t="Hold "+ni()+" to rebuild the barrier",i&&(s=!0,A.repT+=n,A.repT>.7&&(A.repT=0,kt.planks[r.id].list[r.planks].visible=!0,r.planks++,re.nail(),j.flowDirty=!0,j.repairPts<500&&(vs(10),j.repairPts+=10),ln()));break}}if(s||(A.repT=0),!t)for(let r of bi){if(r.open)continue;let o=0,a=0;for(let[l,c]of r.tiles)o+=Vt(l),a+=Vt(c);if(qi({x:o/r.tiles.length,z:a/r.tiles.length},2.6)){t=ni()+" Open door to "+r.label+" ["+r.cost+"]",e&&mr(r.cost)&&Yd(r);break}}if(!t){for(let r of kt.wallbuys)if(qi(r.use,1.6)){let o=A.guns.find(l=>l.key===r.key),a=o?o.pap?4500:Math.round(r.cost/2):r.cost;t=ni()+(o?" Buy ammo for "+o.name:" Buy "+hr[r.key].name)+" ["+a+"]",e&&mr(a)&&(o?(o.reserve=o.maxReserve,o.clip=o.mag,ln()):Jh(r.key));break}}if(!t){for(let r of kt.perks)if(qi(r.use,1.7)){A.perks.has(r.key)?t=r.name+": you have it":r.needsPower&&!j.power?t=r.name+": turn on the power first":(t=ni()+" "+r.name+" ("+r.desc+") ["+r.cost+"]",e&&mr(r.cost)&&(A.perks.add(r.key),re.perk(),r.key==="tank"&&(A.maxHp=250,A.hp=250),ys(r.name+": "+r.desc),ln()));break}}if(!t&&!j.power&&qi(kt.swUse,1.8)&&(t=ni()+" Turn on the power",e&&(zd(!0),re.power(),Zi("POWER ON",2.5))),!t&&qi(kt.forgeUse,2)){let r=ho();if(!j.power)t="The Forge: turn on the power first";else if(Pn.t>0)t="The Forge is working...";else if(!r||r.pap)t="The Forge: this gun is already upgraded";else if(t=ni()+" Upgrade "+r.name+" [5000]",e&&mr(5e3)){Pn.t=2.5;let o=r.key;A.guns[A.cur]=Ha(o,!0),xr(),re.power(),Zi(zh[o]||"UPGRADED",2),Pn.model=no(o,!0).group,Pn.model.scale.setScalar(1.8),kt.forge.slot.add(Pn.model)}}if(!t){let r=kt.boxSpots[At.spot];qi(r.use,2)&&(At.state==="idle"?(t=ni()+" Mystery Box [950]",e&&mr(950)&&lv()):At.state==="ready"?(t=ni()+" Take "+hr[At.key].name,e&&(Jh(At.key),Zd())):t="")}!t&&qi(_t,3.2)&&(t=ni()+" Drive the car",e&&fv()),Qh(t)}function Yd(n){n.open=!0;for(let[t,e]of n.tiles)he[ne(t,e)]=1,Si[ne(t,e)]=n.zone;Jr.add(n.zone),kt.doorMeshes[n.id].visible=!1,re.door(),j.flowDirty=!0,j.mapDirty=!0,ys(n.label+" opened")}function lv(){At.state="rolling",At.t=0,At.cycleT=0,At.uses++,re.box()}function Zd(){At.state="idle",At.model&&(kt.box.gunSlot.remove(At.model),At.model=null)}function Rd(n){At.model&&kt.box.gunSlot.remove(At.model),At.model=no(n,!1).group,At.model.scale.setScalar(2),At.model.rotation.y=Math.PI/2,kt.box.gunSlot.add(At.model)}function cv(n){let t=kt.box.lid;if(t.rotation.x=Ei(t.rotation.x,At.state==="idle"||At.state==="moving"?0:-1.2,Math.min(1,n*6)),kt.box.beam.visible=At.state!=="moving",At.state==="rolling"){At.t+=n,At.cycleT-=n;let e=At.t/3.2;At.model&&(At.model.position.y=e*.6),At.cycleT<=0&&(At.cycleT=.08+e*.15,Rd(ms(kh.filter(i=>!A.guns.some(s=>s.key===i))))),At.t>=3.2&&(At.uses>4&&Be()<.3?(At.state="teddy",At.t=0,re.teddy(),vs(950),ys("The box is moving! You got your points back."),At.model&&(kt.box.gunSlot.remove(At.model),At.model=null)):(At.key=ms(kh.filter(i=>!A.guns.some(s=>s.key===i))),Rd(At.key),At.model.position.y=.6,At.state="ready",At.t=0,re.boxReveal()))}else if(At.state==="ready")At.t+=n,At.model&&(At.model.position.y=.6-At.t/9*.6),At.t>9&&Zd();else if(At.state==="teddy"&&(At.t+=n,kt.box.group.position.y=Math.min(6,At.t*At.t),At.t>2.5)){kt.box.group.position.y=0;let e=kt.boxSpots.map((i,s)=>s).filter(i=>i!==At.spot);At.spot=ms(e),At.uses=0,At.state="idle",su(),ys("The box moved to the "+kt.boxSpots[At.spot].name)}}function $d(){se.on=!se.on,document.body.classList.toggle("building",se.on),mt("buildbar").classList.toggle("hidden",!se.on),!se.on&&se.ghost&&(se.ghost.visible=!1),Kd(),se.on&&ys("Build mode: aim at the ground, "+($.device==="touch"?"tap FIRE to place, SWAP to change piece":$.device==="pad"?"R2 to place, Triangle to change piece":"click to place, Q to change piece"))}function Kd(){mt("buildbar").innerHTML=$h.map((n,t)=>`<div class="${t===se.sel?"sel":""}">${n.name}<span>${n.cost}</span></div>`).join("")}var Cd=new ye({color:4259680,transparent:!0,opacity:.35,depthWrite:!1});function hv(){if(!se.on)return;mn("swap")&&(se.sel=(se.sel+1)%$h.length,Kd(),se.ghost&&(Re.remove(se.ghost),se.ghost=null)),mn("rotate")&&(se.rot^=1);let n=$h[se.sel];se.ghost||(se.ghost=new nt(za(n.kind).wood,Cd),Re.add(se.ghost));let t=-Math.sin(A.yaw),e=-Math.cos(A.yaw),i=Oe(A.x+t*2.4),s=Oe(A.z+e*2.4),r=Zn(i,s)?ne(i,s):-1,o=r>=0?he[r]:-1,a=Oe(A.x)===i&&Oe(A.z)===s;se.ok=(o===0||o===1)&&!a&&!Ee.some(l=>!l.dead&&Oe(l.x)===i&&Oe(l.z)===s)&&!(Math.abs(Vt(i)-_t.x)<2.6&&Math.abs(Vt(s)-_t.z)<2.6),se.gi=i,se.gj=s,se.ghost.visible=!0,se.ghost.position.set(Vt(i),0,Vt(s)),se.ghost.rotation.y=se.rot?Math.PI/2:0,Cd.color.set(se.ok&&j.points>=n.cost?4259680:16728112),Qh(n.name+" ["+n.cost+"]"+(se.ok?"":" - cannot build here")),$.fire&&!A.semi&&(A.semi=!0,se.ok?mr(n.cost)&&uv(n,i,s,se.rot):re.deny())}function uv(n,t,e,i){let s=ne(t,e),r=new Gt,o=za(n.kind),a=new nt(o.wood,Vh.wood);a.castShadow=!0,r.add(a),o.metal&&r.add(new nt(o.metal,Vh.metal));let l=null;if(n.kind==="door"){l=new Gt,l.position.x=-.88;let h=new nt(za("gate").wood,Vh.wood);l.add(h),r.add(l)}r.position.set(Vt(t),0,Vt(e)),r.rotation.y=i?Math.PI/2:0,Re.add(r);let c={k:s,i:t,j:e,x:Vt(t),z:Vt(e),g:r,gate:l,hp:n.hp,kind:n.kind,under:he[s]};ii.push(c),he[s]=n.tile,On[s]=ii.length-1,re.build(),j.flowDirty=!0,j.mapDirty=!0}function Pd(n){let t=ii.indexOf(n);t<0||(Re.remove(n.g),he[n.k]=n.under,On[n.k]=-1,ii.splice(t,1),re.crash(.4),j.flowDirty=!0,j.mapDirty=!0)}function fv(){A.driving=!0,re.carDoor(),document.body.classList.add("driving"),mt("carhud").classList.remove("hidden"),se.on=!1,document.body.classList.remove("building"),mt("buildbar").classList.add("hidden"),se.ghost&&(se.ghost.visible=!1),vi(!0,0)}function dv(){A.driving=!1,re.carDoor(),document.body.classList.remove("driving"),mt("carhud").classList.add("hidden"),vi(!1),kt.carLight.intensity=0;for(let n of[1,-1]){let t=_t.x+Math.cos(_t.h)*1.8*n,e=_t.z-Math.sin(_t.h)*1.8*n,i=he[ne(Fn(Oe(t),0,43),Fn(Oe(e),0,39))];if(!Qr(i)){A.x=t,A.z=e;break}}A.yaw=_t.h,_t.v=0}function Jd(n){let t=kt.car.group;if(A.driving){let e=$.gas-$.brake;_t.steer=Ei(_t.steer,-$.mx,Math.min(1,n*6)),_t.v+=e*(e*_t.v<0?22:11)*n,_t.v*=Math.pow(.55,n),_t.v=Fn(_t.v,-7,24),_t.h+=_t.steer*_t.v*.11*n;let i=_t.x-Math.sin(_t.h)*_t.v*n,s=_t.z-Math.cos(_t.h)*_t.v*n,r={x:i,z:s};ar(r,1.15,Oa)|ar({x:i-Math.sin(_t.h)*1.3,z:s-Math.cos(_t.h)*1.3},1,Oa)|ar({x:i+Math.sin(_t.h)*1.3,z:s+Math.cos(_t.h)*1.3},1,Oa)?(Math.abs(_t.v)>6&&(re.crash(Math.min(1,Math.abs(_t.v)/20)),Kr(1,.6,200)),_t.v*=-.25):(_t.x=r.x,_t.z=r.z);for(let a of Ee)if(!(a.dead||a.state==="rise")&&Math.hypot(a.x-_t.x,a.z-_t.z)<1.9)if(Math.abs(_t.v)>5)re.splat(),lo(a,400+Math.abs(_t.v)*120+j.round*40,!1,"car"),_t.v*=.9;else{let l=a.x-_t.x,c=a.z-_t.z,h=Math.hypot(l,c)||1;a.x=_t.x+l/h*1.9,a.z=_t.z+c/h*1.9}A.x=_t.x,A.z=_t.z,vi(!0,Math.abs(_t.v)/24),mt("carhud").innerHTML=Math.round(Math.abs(_t.v)*2.237)+" <small>MPH</small>",kt.carLight.intensity=60,kt.carLight.position.set(_t.x-Math.sin(_t.h)*2.4,.8,_t.z-Math.cos(_t.h)*2.4),kt.carLight.target.position.set(_t.x-Math.sin(_t.h)*14,0,_t.z-Math.cos(_t.h)*14)}t.position.set(_t.x,0,_t.z),t.rotation.y=_t.h;for(let e of kt.car.wheels)e.spin.rotation.z-=_t.v*n/.34,e.front&&(e.w.rotation.y=_t.steer*.5)}var tu=performance.now(),Va=0,Xh=0,qh=0,Wa=0;function jd(n){if(j.t+=n,Kf(),Jf(n),$.sens=De.sens,$.invertY=!!De.inv,mn("pause")){ep();return}if(A.driving||(A.yaw-=$.lx,A.pitch=Fn(A.pitch-$.ly,-1.45,1.45)),mn("view")&&(A.view=A.view==="fp"?"tp":"fp"),mn("build")&&!A.driving&&$d(),$.fire||(A.semi=!1),!A.driving){let i=($.sprint||jf())&&$.my>.3&&!$.aim&&A.reloadT<=0,s=(i?6.4:4.2)*(A.perks.has("stamina")?1.15:1)*($.aim?.6:1),r=Math.min(1,Math.hypot($.mx,$.my)),o=-Math.sin(A.yaw),a=-Math.cos(A.yaw),l=Math.cos(A.yaw),c=-Math.sin(A.yaw),h=o*$.my+l*$.mx,u=a*$.my+c*$.mx,d=Math.hypot(h,u);d>1e-4?(h=h/d*r*s,u=u/d*r*s):h=u=0;let f={x:A.x+h*n,z:A.z+u*n};ar(f,.35,(x,p)=>Qr(x,p)||x===7),A.x=f.x,A.z=f.z,A.speed=Math.hypot(h,u),A.sprinting=i&&A.speed>1,mn("jump")&&A.y<=0&&(A.vy=4.6),A.vy-=14*n,A.y=Math.max(0,A.y+A.vy*n),A.y===0&&(A.vy=Math.max(0,A.vy)),A.bob+=A.speed*n*1.8;let m=ho();if(A.fireT-=n,A.knifeT-=n,A.swapT-=n,A.reloadT>0&&(A.reloadT-=n,A.reloadT<=0&&m)){let x=Math.min(m.mag-m.clip,m.reserve);m.clip+=x,m.reserve-=x,re.reload(1),ln()}se.on||(mn("reload")&&Kh(),(mn("swap")||mn("swapBack"))&&A.guns.length>1&&(A.cur=(A.cur+1)%A.guns.length,A.reloadT=0,A.swapT=.35,xr()),mn("slot1")&&A.guns[0]&&(A.cur=0,xr()),mn("slot2")&&A.guns[1]&&(A.cur=1,xr()),mn("knife")&&sv(),mn("grenade")&&rv(),$.fire&&m&&A.reloadT<=0&&A.swapT<=0&&A.knifeT<=0&&!A.sprinting&&(m.clip<=0?A.semi||(re.dry(),A.semi=!0,Kh()):A.fireT<=0&&(m.def.auto||!A.semi||$.device==="touch")&&(nv(),A.semi=!0))),A.ads=Ei(A.ads,$.aim&&!A.sprinting&&A.reloadT<=0&&!se.on?1:0,Math.min(1,n*12)),hv()}A.recoil=Math.max(0,A.recoil-n*4),av(n),Jd(n),j.t-A.lastHit>3.5&&A.hp<A.maxHp&&(A.hp=Math.min(A.maxHp,A.hp+A.maxHp*.5*n)),mt("dmg").style.opacity=Fn(1-A.hp/A.maxHp,0,1)*.9,A.hp<A.maxHp*.35&&(A.heartT-=n,A.heartT<=0&&(re.heartbeat(),A.heartT=.9)),j.flowT-=n;let t=ne(Fn(Oe(A.x),0,43),Fn(Oe(A.z),0,39));if(j.flowDirty||t!==j.lastFlowK&&j.flowT<=0){id(Oe(A.x),Oe(A.z)),j.lastFlowK=t,j.flowT=.25,j.flowDirty=!1;for(let i of Ee)i.best=1e9}for(let i=Ee.length-1;i>=0;i--){let s=Ee[i];s&&Vd(s,n,A.x,A.z)}if(tv(),j.state!=="play")return;jy(n),ov(n),cv(n);let e=!1;for(let i=gr.length-1;i>=0;i--){let s=gr[i];if(s.t-=n,s.t<=0){gr.splice(i,1);continue}Math.hypot(s.x-A.x,s.z-A.z)<2.6&&!A.driving&&(e=!0,Be()<n*2&&nl(8))}mt("toxicfx").style.opacity=e?.7:0;for(let i=Yi.length-1;i>=0;i--){let s=Yi[i];s.t-=n,s.g.position.y=1+Math.sin(j.t*3)*.15,s.g.visible=s.t>5||Math.sin(j.t*18)>0,Math.hypot(s.x-A.x,s.z-A.z)<1.6?(ev(s),Re.remove(s.g),Yi.splice(i,1)):s.t<=0&&(Re.remove(s.g),Yi.splice(i,1))}j.insta>0&&(j.insta-=n),j.dbl>0&&(j.dbl-=n),Pn.t>0&&(Pn.t-=n,Pn.model&&(Pn.model.rotation.y+=n*3),Pn.t<=0&&Pn.model&&(kt.forge.slot.remove(Pn.model),Pn.model=null));for(let i of ii)if(i.gate){let s=Math.hypot(i.x-A.x,i.z-A.z)<2.2;i.gate.rotation.y=Ei(i.gate.rotation.y,s?1.5:0,Math.min(1,n*6))}for(let i of kt.fires)for(let s of i.fl)s.scale.y=1+Math.sin(j.t*13+s.id)*.15;kt.fireLights.forEach((i,s)=>i.intensity=9+Math.sin(j.t*11+s*3)*1.5+Be());for(let i of kt.room)i.light.intensity=14*(1-(Be()<i.flick*.05?.8:0));Od(n),qa>0&&(qa-=n,qa<=0&&mt("toast").classList.remove("show")),Ya>0&&(Ya-=n,Ya<=0&&mt("center").classList.remove("show")),Ka>0&&(Ka-=n,Ka<=0&&(mt("hit").style.opacity=0)),ja>0&&(ja-=n,mt("flash").style.opacity=Math.max(0,ja)),(j.t*4|0)!==((j.t-n)*4|0)&&ln()}function pv(n){let t=A.view==="tp"||A.driving;if(A.driving){let c=_t.x+Math.sin(_t.h)*7,h=_t.z+Math.cos(_t.h)*7;be.position.lerp(_s.set(c,3.2,h),Math.min(1,n*5)),be.lookAt(_t.x-Math.sin(_t.h)*4,1,_t.z-Math.cos(_t.h)*4)}else{let c=1.62+A.y+Math.sin(A.bob*2)*.035*(A.speed>.5?1:0);if(be.rotation.set(A.pitch+A.recoil*.02,A.yaw,0),t){let u=A.x+Math.sin(A.yaw)*2.6*Math.cos(A.pitch)+Math.cos(A.yaw)*.6,d=A.z+Math.cos(A.yaw)*2.6*Math.cos(A.pitch)-Math.sin(A.yaw)*.6,f=Fa(A.x,A.z,u-A.x,d-A.z,Math.hypot(u-A.x,d-A.z),p=>Qr(p)),m=Math.hypot(u-A.x,d-A.z),x=Math.max(.2,(f-.3)/m);be.position.set(A.x+(u-A.x)*x,c+.3+Math.sin(A.pitch)*2.6*.5,A.z+(d-A.z)*x)}else be.position.set(A.x,c,A.z)}let e=ho(),i=e&&e.def.zoom&&A.ads>.8?e.def.zoom:1,s=(be.userData.fov||De.fov)/(1+A.ads*.25)/i;Math.abs(be.fov-s)>.01&&(be.fov=s,be.updateProjectionMatrix()),mt("scope").style.opacity=i>1?1:0,mt("cross").classList.toggle("hide",A.ads>.6||A.driving),Ti.wrap.visible=t&&!A.driving,Ti.wrap.visible&&(Ti.wrap.position.set(A.x,A.y,A.z),Ti.wrap.rotation.y=A.yaw,fd(Ti,j.t,A.speed,A.pitch,A.sprinting)),Kn.visible=!t&&!se.on;let r=A.ads,o=A.reloadT>0?Math.sin(Math.min(1,1-A.reloadT/(A.reloadMax||1))*Math.PI):0,a=A.swapT>0?A.swapT/.4:0,l=A.knifeT>0?Math.sin((.5-A.knifeT)/.5*Math.PI):0;Kn.position.set(Ei(.17,0,r)+l*-.1,Ei(-.19,-.095,r)-o*.12-a*.3+Math.sin(A.bob*2)*.008*(1-r),Ei(-.38,-.27,r)+A.recoil*.05-l*.15),Kn.rotation.set(o*.6+A.recoil*.08+(A.sprinting?-.35:0),(A.sprinting?.6:0)+l*.8,o*.4),jh>0?(jh-=n,ao.visible=!t,ao.position.set(Kn.position.x,Kn.position.y+.06,Kn.position.z-.55)):ao.visible=!1,kt.moonL.position.set(A.x-30,60,A.z-40),kt.moonL.target.position.set(A.x,0,A.z),bn.clear(),bn.render(Re,be),Kn.visible&&(bn.clearDepth(),bn.render(co,Yh)),j.t%.1<n&&qy()}function Qd(n){requestAnimationFrame(Qd);let t=Math.min(.05,(n-tu)/1e3);if(tu=n,Va+=t,Xh++,Va>1&&(qh=Math.round(Xh/Va),Va=0,Xh=0,mt("fps").textContent=qh+" FPS",j.state==="play"&&De.q==="auto"&&(qh<35?Wa++:Wa=0,Wa>=3&&Qa>.6&&(Qa-=.15,iu(),Wa=0))),j.state==="play")jd(t);else if(j.state==="over"){j.t+=t,Od(t);for(let e of Ee)Vd(e,t,A.x,A.z)}j.state==="play"||j.state==="over"||j.state==="pause"?pv(j.state==="pause"?0:t):(j.t+=t,be.position.set(44+Math.sin(j.t*.08)*30,9,40+Math.cos(j.t*.08)*30),be.lookAt(44,1,46),be.fov!==60&&(be.fov=60,be.updateProjectionMatrix()),bn.clear(),bn.render(Re,be)),Rh()}var mv=["title","pause","settings","controls","over"],Mr="title";function si(n){for(let t of mv)mt(t).classList.toggle("hidden",t!==n)}function tp(){ed(),Ch(De.vol),Zy(),j.state="play",si(null),mt("hud").classList.remove("hidden"),mt("touch").classList.add("live"),$.device==="kbm"&&!Ms&&yr.requestPointerLock?.()}function ep(){j.state==="play"&&(j.state="pause",$.fire=$.aim=!1,vi(!1),si("pause"),mt("touch").classList.remove("live"),document.pointerLockElement&&document.exitPointerLock())}function gv(){j.state="play",si(null),mt("touch").classList.add("live"),tu=performance.now(),A.driving&&vi(!0,0),$.device==="kbm"&&!Ms&&yr.requestPointerLock?.()}function np(){j.state="title",Bd(),si("title"),mt("hud").classList.add("hidden"),mt("touch").classList.remove("live"),vi(!1),ip()}function ip(){let n=+localStorage.getItem("ds_best")||0;mt("best").textContent=n?"Best: round "+n:""}mt("bUpright").onclick=()=>document.body.classList.add("upright");mt("bPlay").onclick=tp;mt("bAgain").onclick=tp;mt("bMenu").onclick=np;mt("bResume").onclick=gv;mt("bQuit").onclick=np;mt("bControls").onclick=()=>{Mr="title",si("controls")};mt("bControls2").onclick=()=>{Mr="pause",si("controls")};mt("bSettings").onclick=()=>{Mr="title",Sr(),si("settings")};mt("bSettings2").onclick=()=>{Mr="pause",Sr(),si("settings")};mt("bSetBack").onclick=()=>si(Mr);mt("bCtlBack").onclick=()=>si(Mr);function Sr(){for(let n of mt("qSeg").children)n.classList.toggle("on",n.dataset.q===De.q);for(let n of mt("invSeg").children)n.classList.toggle("on",+n.dataset.v===De.inv);for(let n of mt("fpsSeg").children)n.classList.toggle("on",+n.dataset.v===De.fps);mt("sens").value=De.sens,mt("fov").value=De.fov,mt("vol").value=De.vol,mt("fps").classList.toggle("hidden",!De.fps),iu()}for(let n of mt("qSeg").children)n.onclick=()=>{De.q=n.dataset.q,Qa=1,vr(),Sr()};for(let n of mt("invSeg").children)n.onclick=()=>{De.inv=+n.dataset.v,vr(),Sr()};for(let n of mt("fpsSeg").children)n.onclick=()=>{De.fps=+n.dataset.v,vr(),Sr()};mt("sens").oninput=n=>{De.sens=+n.target.value,vr()};mt("fov").oninput=n=>{De.fov=+n.target.value,Nd(),vr()};mt("vol").oninput=n=>{De.vol=+n.target.value,Ch(De.vol),vr()};$f(yr,{canLock:()=>j.state==="play",onUnlock:()=>{j.state==="play"&&$.device==="kbm"&&ep()},toast:ys,playing:()=>j.state==="play"});Ud();iu();Sr();ip();su();Object.assign(_t,Zh);Jd(0);mt("loading").textContent="";mt("titleHint").textContent=Ms?"Plays best with your phone sideways. A PS5 controller works too.":"Keyboard and mouse or a PS5 controller.";requestAnimationFrame(Qd);var _v=(n,t)=>{for(let e=0;e<n*30&&j.state==="play";e++)t&&xv(),jd(1/30),Rh();return j.state};function xv(){let n=null,t=1e9;for(let e of Ee){if(e.dead||e.state==="rise")continue;let i=Math.hypot(e.x-A.x,e.z-A.z);i<t&&(t=i,n=e)}$.fire=!1,n&&t<25&&Gd(A.x,A.z,n.x,n.z)&&(A.yaw=Math.atan2(-(n.x-A.x),-(n.z-A.z)),A.pitch=Math.atan2(1.2*(n.m.scale||1)-1.62,t),be.rotation.set(A.pitch,A.yaw,0),be.position.set(A.x,1.62,A.z),be.updateMatrixWorld(),$.fire=!$.fire_last,$.fire_last=$.fire)}window.__ds={inp:$,WD:kt,box:At,build:se,toggleBuild:$d,sim:_v,G:j,P:A,zombies:Ee,pups:Yi,windows:gn,doors:bi,startRound:ru,giveGun:Jh,hurt:nl,gameOver:qd,car:_t,pieces:ii,dropPup:Xd,spawnZombie:Hd,openDoor:Yd};

var Yp=0,ku=1,Zp=2;var td=1,$p=2,vi=3,Yi=0,Qe=1,dn=2,Vi=0,Wi=1,pn=2,zu=3,Hu=4,Kp=5,ds=100,Jp=101,jp=102,Qp=103,t0=104,e0=200,n0=201,i0=202,s0=203,uc=204,fc=205,r0=206,o0=207,a0=208,l0=209,c0=210,h0=211,u0=212,f0=213,d0=214,dc=0,pc=1,mc=2,er=3,gc=4,xc=5,_c=6,yc=7,ed=0,p0=1,m0=2,Xi=0,g0=1,x0=2,_0=3,Bh=4,y0=5,v0=6,M0=7,Gu="attached",b0="detached",nd=300,nr=301,ir=302,vc=303,Mc=304,Ha=306,Zr=1e3,ms=1001,bc=1002,bn=1003,S0=1004;var To=1005;var $n=1006,Tl=1007;var gs=1008;var Si=1009,id=1010,sd=1011,$r=1012,kh=1013,xs=1014,Kn=1015,ao=1016,zh=1017,Hh=1018,sr=1020,rd=35902,od=1021,ad=1022,Bn=1023,ld=1024,cd=1025,js=1026,rr=1027,Gh=1028,Vh=1029,hd=1030,Wh=1031;var Xh=1033,sa=33776,ra=33777,oa=33778,aa=33779,Sc=35840,Ec=35841,wc=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Uc=37812,Nc=37813,Oc=37814,Fc=37815,Bc=37816,kc=37817,zc=37818,Hc=37819,Gc=37820,Vc=37821,la=36492,Wc=36494,Xc=36495,ud=36283,qc=36284,Yc=36285,Zc=36286;var ha=2300,$c=2301,Al=2302,Vu=2400,Wu=2401,Xu=2402;var E0=3200,w0=3201;var fd=0,T0=1,Hi="",Mn="srgb",Ji="srgb-linear",qh="display-p3",Ga="display-p3-linear",ua="linear",Ce="srgb",fa="rec709",da="p3";var Is=7680;var qu=519,A0=512,R0=513,C0=514,dd=515,P0=516,I0=517,L0=518,D0=519,Kc=35044;var Yu="300 es",bi=2e3,pa=2001,Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rl=Math.PI/180,ma=180/Math.PI;function ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function sn(n,t,e){return Math.max(t,Math.min(e,n))}function U0(n,t){return(n%t+t)%t}function Cl(n,t,e){return(1-e)*n+e*t}function si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Se(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ft=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],p=s[3],m=s[6],b=s[1],v=s[4],E=s[7],D=s[2],R=s[5],T=s[8];return r[0]=o*x+a*b+l*D,r[3]=o*p+a*v+l*R,r[6]=o*m+a*E+l*T,r[1]=c*x+h*b+u*D,r[4]=c*p+h*v+u*R,r[7]=c*m+h*E+u*T,r[2]=f*x+d*b+g*D,r[5]=f*p+d*v+g*R,r[8]=f*m+d*E+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pl.makeScale(t,e)),this}rotate(t){return this.premultiply(Pl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pl=new te;function pd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N0(){let n=ga("canvas");return n.style.display="block",n}var Zu={};function ca(n){n in Zu||(Zu[n]=!0,console.warn(n))}function O0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function F0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function B0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $u=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ku=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[Ji]:{transfer:ua,primaries:fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Mn]:{transfer:Ce,primaries:fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ga]:{transfer:ua,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u)},[qh]:{transfer:Ce,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u).convertLinearToSRGB()}},k0=new Set([Ji,Ga]),ve={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!k0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Dr[t].toReference,s=Dr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Dr[n].primaries},getTransfer:function(n){return n===Hi?ua:Dr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Dr[t].luminanceCoefficients)}};function Qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Il(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ls,Jc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=ga("canvas")),Ls.width=t.width,Ls.height=t.height;let i=Ls.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ga("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qs(e[i]/255)*255):e[i]=Qs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},z0=0,xa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ll(s[o].image)):r.push(Ll(s[o]))}else r=Ll(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var H0=0,Sn=class n extends Zi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ms,s=ms,r=$n,o=gs,a=Bn,l=Si,c=n.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ri(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case ms:t.x=t.x<0?0:1;break;case bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case ms:t.y=t.y<0?0:1;break;case bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=nd;Sn.DEFAULT_ANISOTROPY=1;var pe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,E=(d+1)/2,D=(m+1)/2,R=(h+f)/4,T=(u+x)/4,L=(g+p)/4;return v>E&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=T/i):E>D?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=L/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends Zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends jc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},_a=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qc=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*x,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let D=Math.sqrt(v),R=Math.atan2(D,m*b);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}let E=a*b;if(l=l*p+f*E,c=c*p+d*E,h=h*p+g*E,u=u*p+x*E,p===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ju.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dl.copy(this).projectOnVector(t),this.sub(Dl)}reflect(t){return this.sub(Dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dl=new I,Ju=new kn,oi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Ro.subVectors(this.max,Ur),Ds.subVectors(t.a,Ur),Us.subVectors(t.b,Ur),Ns.subVectors(t.c,Ur),Ni.subVectors(Us,Ds),Oi.subVectors(Ns,Us),os.subVectors(Ds,Ns);let e=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-os.z,os.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,os.z,0,-os.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-os.y,os.x,0];return!Ul(e,Ds,Us,Ns,Ro)||(e=[1,0,0,0,1,0,0,0,1],!Ul(e,Ds,Us,Ns,Ro))?!1:(Co.crossVectors(Ni,Oi),e=[Co.x,Co.y,Co.z],Ul(e,Ds,Us,Ns,Ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mi=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,Ao=new oi,Ds=new I,Us=new I,Ns=new I,Ni=new I,Oi=new I,os=new I,Ur=new I,Ro=new I,Co=new I,as=new I;function Ul(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){as.fromArray(n,r);let a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),h=i.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var G0=new oi,Nr=new I,Nl=new I,zn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):G0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Nr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Nl)),this.expandByPoint(Nr.copy(t.center).sub(Nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new I,Ol=new I,Po=new I,Fi=new I,Fl=new I,Io=new I,Bl=new I,Kr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ol.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(Ol);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=Fi.dot(this.direction),l=-Fi.dot(Po),c=Fi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ol).addScaledVector(Po,f),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,s,r){Fl.subVectors(e,t),Io.subVectors(i,t),Bl.crossVectors(Fl,Io);let o=this.direction.dot(Bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,t);let l=a*this.direction.dot(Io.crossVectors(Fi,Io));if(l<0)return null;let c=a*this.direction.dot(Fl.cross(Fi));if(c<0||l+c>o)return null;let h=-a*Fi.dot(Bl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,p)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V0,t,W0)}lookAt(t,e,i){let s=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Bi.crossVectors(i,In),Bi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Bi.crossVectors(i,In)),Bi.normalize(),Lo.crossVectors(In,Bi),s[0]=Bi.x,s[4]=Lo.x,s[8]=In.x,s[1]=Bi.y,s[5]=Lo.y,s[9]=In.y,s[2]=Bi.z,s[6]=Lo.z,s[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],b=i[3],v=i[7],E=i[11],D=i[15],R=s[0],T=s[4],L=s[8],Y=s[12],_=s[1],M=s[5],k=s[9],F=s[13],G=s[2],at=s[6],W=s[10],ut=s[14],Z=s[3],_t=s[7],Mt=s[11],bt=s[15];return r[0]=o*R+a*_+l*G+c*Z,r[4]=o*T+a*M+l*at+c*_t,r[8]=o*L+a*k+l*W+c*Mt,r[12]=o*Y+a*F+l*ut+c*bt,r[1]=h*R+u*_+f*G+d*Z,r[5]=h*T+u*M+f*at+d*_t,r[9]=h*L+u*k+f*W+d*Mt,r[13]=h*Y+u*F+f*ut+d*bt,r[2]=g*R+x*_+p*G+m*Z,r[6]=g*T+x*M+p*at+m*_t,r[10]=g*L+x*k+p*W+m*Mt,r[14]=g*Y+x*F+p*ut+m*bt,r[3]=b*R+v*_+E*G+D*Z,r[7]=b*T+v*M+E*at+D*_t,r[11]=b*L+v*k+E*W+D*Mt,r[15]=b*Y+v*F+E*ut+D*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],b=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,v=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,E=h*x*c-g*u*c+g*a*d-o*x*d-h*a*m+o*u*m,D=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,R=e*b+i*v+s*E+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=b*T,t[1]=(x*f*r-u*p*r-x*s*d+i*p*d+u*s*m-i*f*m)*T,t[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*m+i*l*m)*T,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*T,t[4]=v*T,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*T,t[8]=E*T,t[9]=(g*u*r-h*x*r-g*i*d+e*x*d+h*i*m-e*u*m)*T,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*T,t[12]=D*T,t[13]=(h*x*s-g*u*s+g*i*f-e*x*f-h*i*p+e*u*p)*T,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*p-e*a*p)*T,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,b=l*c,v=l*h,E=l*u,D=i.x,R=i.y,T=i.z;return s[0]=(1-(x+m))*D,s[1]=(d+E)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(d-E)*R,s[5]=(1-(f+m))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+v)*T,s[9]=(p-b)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);let c=1/r,h=1/o,u=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,e.setFromRotationMatrix(Yn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=bi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===bi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=bi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h,g,x;if(a===bi)g=(o+r)*u,x=-2*u;else if(a===pa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Os=new I,Yn=new Yt,V0=new I(0,0,0),W0=new I(1,1,1),Bi=new I,Lo=new I,In=new I,ju=new Yt,Qu=new kn,En=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ju,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},X0=0,tf=new I,Fs=new kn,xi=new Yt,Do=new I,Or=new I,q0=new I,Y0=new kn,ef=new I(1,0,0),nf=new I(0,1,0),sf=new I(0,0,1),rf={type:"added"},Z0={type:"removed"},Bs={type:"childadded",child:null},kl={type:"childremoved",child:null},Ie=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new En,i=new kn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new te}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(ef,t)}rotateY(t){return this.rotateOnAxis(nf,t)}rotateZ(t){return this.rotateOnAxis(sf,t)}translateOnAxis(t,e){return tf.copy(t).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ef,t)}translateY(t){return this.translateOnAxis(nf,t)}translateZ(t){return this.translateOnAxis(sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Do.copy(t):Do.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Or,Do,this.up):xi.lookAt(Do,Or,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(xi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rf),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Z0),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rf),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Y0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new I,_i=new I,zl=new I,yi=new I,ks=new I,zs=new I,of=new I,Hl=new I,Gl=new I,Vl=new I,Wl=new pe,Xl=new pe,ql=new pe,Gi=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Zn.subVectors(s,e),_i.subVectors(i,e),zl.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(_i),l=Zn.dot(zl),c=_i.dot(_i),h=_i.dot(zl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Wl.setScalar(0),Xl.setScalar(0),ql.setScalar(0),Wl.fromBufferAttribute(t,e),Xl.fromBufferAttribute(t,i),ql.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wl,r.x),o.addScaledVector(Xl,r.y),o.addScaledVector(ql,r.z),o}static isFrontFacing(t,e,i,s){return Zn.subVectors(i,e),_i.subVectors(t,e),Zn.cross(_i).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Zn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,i),zs.subVectors(r,i),Hl.subVectors(t,i);let l=ks.dot(Hl),c=zs.dot(Hl);if(l<=0&&c<=0)return e.copy(i);Gl.subVectors(t,s);let h=ks.dot(Gl),u=zs.dot(Gl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ks,o);Vl.subVectors(t,r);let d=ks.dot(Vl),g=zs.dot(Vl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(zs,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return of.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(of,a);let m=1/(p+x+f);return o=x*m,a=f*m,e.copy(i).addScaledVector(ks,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var $t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ve.workingColorSpace){if(t=U0(t,1),e=sn(e,0,1),i=sn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yl(o,r,t+1/3),this.g=Yl(o,r,t),this.b=Yl(o,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let i=md[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}copyLinearToSRGB(t){return this.r=Il(t.r),this.g=Il(t.g),this.b=Il(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return ve.fromWorkingColorSpace(ln.copy(this),t),Math.round(sn(ln.r*255,0,255))*65536+Math.round(sn(ln.g*255,0,255))*256+Math.round(sn(ln.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(ln.copy(this),e);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Mn){ve.fromWorkingColorSpace(ln.copy(this),t);let e=ln.r,i=ln.g,s=ln.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Uo);let i=Cl(ki.h,Uo.h,e),s=Cl(ki.s,Uo.s,e),r=Cl(ki.l,Uo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new $t;$t.NAMES=md;var $0=0,wi=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Wi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=fc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uc&&(i.blendSrc=this.blendSrc),this.blendDst!==fc&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},me=class extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new I,No=new ft,Pe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}};var or=class extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var va=class extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},K0=0,Fn=new Yt,Zl=new Ie,Hs=new I,Ln=new oi,Fr=new oi,Je=new I,He=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pd(t)?va:or)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,i){return Fn.makeTranslation(t,e,i),this.applyMatrix4(Fn),this}scale(t,e,i){return Fn.makeScale(t,e,i),this.applyMatrix4(Fn),this}lookAt(t){return Zl.lookAt(t),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Ln.min,Fr.min),Ln.expandByPoint(Je),Je.addVectors(Ln.max,Fr.max),Ln.expandByPoint(Je)):(Ln.expandByPoint(Fr.min),Ln.expandByPoint(Fr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),Je.add(Hs)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;let c=new I,h=new I,u=new I,f=new ft,d=new ft,g=new ft,x=new I,p=new I;function m(L,Y,_){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,Y),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let M=1/(d.x*g.y-g.x*d.y);isFinite(M)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(M),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(M),a[L].add(x),a[Y].add(x),a[_].add(x),l[L].add(p),l[Y].add(p),l[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,Y=b.length;L<Y;++L){let _=b[L],M=_.start,k=_.count;for(let F=M,G=M+k;F<G;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new I,E=new I,D=new I,R=new I;function T(L){D.fromBufferAttribute(s,L),R.copy(D);let Y=a[L];v.copy(Y),v.sub(D.multiplyScalar(D.dot(Y))).normalize(),E.crossVectors(R,Y);let M=E.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,M)}for(let L=0,Y=b.length;L<Y;++L){let _=b[L],M=_.start,k=_.count;for(let F=M,G=M+k;F<G;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},af=new Yt,ls=new Kr,Oo=new zn,lf=new I,Fo=new I,Bo=new I,ko=new I,$l=new I,zo=new I,cf=new I,Ho=new I,nt=class extends Ie{constructor(t=new He,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&($l.fromBufferAttribute(u,t),o?zo.addScaledVector($l,h):zo.addScaledVector($l.sub(e),h))}e.add(zo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(Oo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Oo,lf)===null||ls.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(af.copy(r).invert(),ls.copy(t.ray).applyMatrix4(af),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=b,D=v;E<D;E+=3){let R=a.getX(E),T=a.getX(E+1),L=a.getX(E+2);s=Go(this,m,t,i,c,h,u,R,T,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=Go(this,o,t,i,c,h,u,b,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=b,D=v;E<D;E+=3){let R=E,T=E+1,L=E+2;s=Go(this,m,t,i,c,h,u,R,T,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=p,v=p+1,E=p+2;s=Go(this,o,t,i,c,h,u,b,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function J0(n,t,e,i,s,r,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:n}}function Go(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Fo),n.getVertexPosition(l,Bo),n.getVertexPosition(c,ko);let h=J0(n,t,e,i,Fo,Bo,ko,cf);if(h){let u=new I;Gi.getBarycoord(cf,Fo,Bo,ko,u),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,l,c,u,new ft)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,l,c,u,new ft)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Gi.getNormal(Fo,Bo,ko,f.normal),h.face=f,h.barycoord=u}return h}var Dn=class n extends He{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(x,p,m,b,v,E,D,R,T,L,Y){let _=E/T,M=D/L,k=E/2,F=D/2,G=R/2,at=T+1,W=L+1,ut=0,Z=0,_t=new I;for(let Mt=0;Mt<W;Mt++){let bt=Mt*M-F;for(let ee=0;ee<at;ee++){let oe=ee*_-k;_t[x]=oe*b,_t[p]=bt*v,_t[m]=G,c.push(_t.x,_t.y,_t.z),_t[x]=0,_t[p]=0,_t[m]=R>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(ee/T),u.push(1-Mt/L),ut+=1}}for(let Mt=0;Mt<L;Mt++)for(let bt=0;bt<T;bt++){let ee=f+bt+at*Mt,oe=f+bt+at*(Mt+1),J=f+(bt+1)+at*(Mt+1),st=f+(bt+1)+at*Mt;l.push(ee,oe,st),l.push(oe,J,st),Z+=6}a.addGroup(d,Z,Y),d+=Z,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ar(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function fn(n){let t={};for(let e=0;e<n.length;e++){let i=ar(n[e]);for(let s in i)t[s]=i[s]}return t}function j0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Q0={clone:ar,merge:fn},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=j0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ma=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zi=new I,hf=new ft,uf=new ft,je=class extends Ma{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,hf,uf),e.subVectors(uf,hf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Vs=1,th=class extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(Gs,Vs,t,e);s.layers=this.layers,this.add(s);let r=new je(Gs,Vs,t,e);r.layers=this.layers,this.add(r);let o=new je(Gs,Vs,t,e);o.layers=this.layers,this.add(o);let a=new je(Gs,Vs,t,e);a.layers=this.layers,this.add(a);let l=new je(Gs,Vs,t,e);l.layers=this.layers,this.add(l);let c=new je(Gs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ba=class extends Sn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},eh=class extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dn(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Vi});r.uniforms.tEquirect.value=e;let o=new nt(s,r),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=$n),new th(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Kl=new I,nm=new I,im=new te,Mi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Kl.subVectors(i,e).cross(nm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Kl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||im.getNormalMatrix(t),s=this.coplanarPoint(Kl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new zn,Vo=new I,Jr=class{constructor(t=new Mi,e=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],b=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,p-d,E-m).normalize(),i[1].setComponents(l+r,f+c,p+d,E+m).normalize(),i[2].setComponents(l+o,f+h,p+g,E+b).normalize(),i[3].setComponents(l-o,f-h,p-g,E-b).normalize(),i[4].setComponents(l-a,f-u,p-x,E-v).normalize(),e===bi)i[5].setComponents(l+a,f+u,p+x,E+v).normalize();else if(e===pa)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Vo.x=s.normal.x>0?t.max.x:t.min.x,Vo.y=s.normal.y>0?t.max.y:t.min.y,Vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function sm(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var tn=class n extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let b=m*f-o;for(let v=0;v<c;v++){let E=v*u-r;g.push(E,-b,0),x.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let v=b+c*m,E=b+c*(m+1),D=b+1+c*(m+1),R=b+1+c*m;d.push(v,E,R),d.push(E,D,R)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`
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
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
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
#endif`,ig=`struct PhysicalMaterial {
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
}`,sg=`
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,xx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,yx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,bx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Ix=`#define TOON
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
}`,Lx=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ox=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:rm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:fm,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:xm,iridescence_fragment:_m,bumpmap_pars_fragment:ym,clipping_planes_fragment:vm,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Sm,color_fragment:Em,color_pars_fragment:wm,color_pars_vertex:Tm,color_vertex:Am,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:Lm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Um,colorspace_fragment:Nm,colorspace_pars_fragment:Om,envmap_fragment:Fm,envmap_common_pars_fragment:Bm,envmap_pars_fragment:km,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Jm,envmap_vertex:Hm,fog_vertex:Gm,fog_pars_vertex:Vm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:$m,lights_pars_begin:Km,lights_toon_fragment:jm,lights_toon_pars_fragment:Qm,lights_phong_fragment:tg,lights_phong_pars_fragment:eg,lights_physical_fragment:ng,lights_physical_pars_fragment:ig,lights_fragment_begin:sg,lights_fragment_maps:rg,lights_fragment_end:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:fg,map_particle_fragment:dg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:_g,morphnormal_vertex:yg,morphtarget_pars_vertex:vg,morphtarget_vertex:Mg,normal_fragment_begin:bg,normal_fragment_maps:Sg,normal_pars_fragment:Eg,normal_pars_vertex:wg,normal_vertex:Tg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ug,project_vertex:Ng,dithering_fragment:Og,dithering_pars_fragment:Fg,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Yg,specularmap_fragment:Zg,specularmap_pars_fragment:$g,tonemapping_fragment:Kg,tonemapping_pars_fragment:Jg,transmission_fragment:jg,transmission_pars_fragment:Qg,uv_pars_fragment:tx,uv_pars_vertex:ex,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ox,backgroundCube_frag:ax,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distanceRGBA_vert:fx,distanceRGBA_frag:dx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:_x,meshbasic_frag:yx,meshlambert_vert:vx,meshlambert_frag:Mx,meshmatcap_vert:bx,meshmatcap_frag:Sx,meshnormal_vert:Ex,meshnormal_frag:wx,meshphong_vert:Tx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Lx,points_frag:Dx,shadow_vert:Ux,shadow_frag:Nx,sprite_vert:Ox,sprite_frag:Fx},xt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ii={basic:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:fn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:fn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:fn([xt.points,xt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:fn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:fn([xt.common,xt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:fn([xt.sprite,xt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:fn([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:fn([xt.lights,xt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ii.physical={uniforms:fn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Wo={r:0,b:0,g:0},hs=new En,Bx=new Yt;function kx(n,t,e,i,s,r,o){let a=new $t(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function x(b){let v=!1,E=g(b);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,v){let E=g(v);E&&(E.isCubeTexture||E.mapping===Ha)?(h===void 0&&(h=new nt(new Dn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:ar(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(v.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(hs)),h.material.toneMapped=ve.getTransfer(E.colorSpace)!==Ce,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new nt(new tn(2,2),new ai({name:"BackgroundMaterial",uniforms:ar(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ve.getTransfer(E.colorSpace)!==Ce,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,v){b.getRGB(Wo,gd(n)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:p}}function zx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,M,k,F,G){let at=!1,W=u(F,k,M);r!==W&&(r=W,c(r.object)),at=d(_,F,k,G),at&&g(_,F,k,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,E(_,M,k,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,M,k){let F=k.wireframe===!0,G=i[_.id];G===void 0&&(G={},i[_.id]=G);let at=G[M.id];at===void 0&&(at={},G[M.id]=at);let W=at[F];return W===void 0&&(W=f(l()),at[F]=W),W}function f(_){let M=[],k=[],F=[];for(let G=0;G<e;G++)M[G]=0,k[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:F,object:_,attributes:{},index:null}}function d(_,M,k,F){let G=r.attributes,at=M.attributes,W=0,ut=k.getAttributes();for(let Z in ut)if(ut[Z].location>=0){let Mt=G[Z],bt=at[Z];if(bt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(bt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(bt=_.instanceColor)),Mt===void 0||Mt.attribute!==bt||bt&&Mt.data!==bt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(_,M,k,F){let G={},at=M.attributes,W=0,ut=k.getAttributes();for(let Z in ut)if(ut[Z].location>=0){let Mt=at[Z];Mt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor));let bt={};bt.attribute=Mt,Mt&&Mt.data&&(bt.data=Mt.data),G[Z]=bt,W++}r.attributes=G,r.attributesNum=W,r.index=F}function x(){let _=r.newAttributes;for(let M=0,k=_.length;M<k;M++)_[M]=0}function p(_){m(_,0)}function m(_,M){let k=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;k[_]=1,F[_]===0&&(n.enableVertexAttribArray(_),F[_]=1),G[_]!==M&&(n.vertexAttribDivisor(_,M),G[_]=M)}function b(){let _=r.newAttributes,M=r.enabledAttributes;for(let k=0,F=M.length;k<F;k++)M[k]!==_[k]&&(n.disableVertexAttribArray(k),M[k]=0)}function v(_,M,k,F,G,at,W){W===!0?n.vertexAttribIPointer(_,M,k,G,at):n.vertexAttribPointer(_,M,k,F,G,at)}function E(_,M,k,F){x();let G=F.attributes,at=k.getAttributes(),W=M.defaultAttributeValues;for(let ut in at){let Z=at[ut];if(Z.location>=0){let _t=G[ut];if(_t===void 0&&(ut==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),ut==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),_t!==void 0){let Mt=_t.normalized,bt=_t.itemSize,ee=t.get(_t);if(ee===void 0)continue;let oe=ee.buffer,J=ee.type,st=ee.bytesPerElement,Tt=J===n.INT||J===n.UNSIGNED_INT||_t.gpuType===kh;if(_t.isInterleavedBufferAttribute){let gt=_t.data,Ht=gt.stride,zt=_t.offset;if(gt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<Z.locationSize;Zt++)m(Z.location+Zt,gt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Zt=0;Zt<Z.locationSize;Zt++)p(Z.location+Zt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Zt=0;Zt<Z.locationSize;Zt++)v(Z.location+Zt,bt/Z.locationSize,J,Mt,Ht*st,(zt+bt/Z.locationSize*Zt)*st,Tt)}else{if(_t.isInstancedBufferAttribute){for(let gt=0;gt<Z.locationSize;gt++)m(Z.location+gt,_t.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let gt=0;gt<Z.locationSize;gt++)p(Z.location+gt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let gt=0;gt<Z.locationSize;gt++)v(Z.location+gt,bt/Z.locationSize,J,Mt,bt*st,bt/Z.locationSize*gt*st,Tt)}}else if(W!==void 0){let Mt=W[ut];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(Z.location,Mt);break;case 3:n.vertexAttrib3fv(Z.location,Mt);break;case 4:n.vertexAttrib4fv(Z.location,Mt);break;default:n.vertexAttrib1fv(Z.location,Mt)}}}}b()}function D(){L();for(let _ in i){let M=i[_];for(let k in M){let F=M[k];for(let G in F)h(F[G].object),delete F[G];delete M[k]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;let M=i[_.id];for(let k in M){let F=M[k];for(let G in F)h(F[G].object),delete F[G];delete M[k]}delete i[_.id]}function T(_){for(let M in i){let k=i[M];if(k[_.id]===void 0)continue;let F=k[_.id];for(let G in F)h(F[G].object),delete F[G];delete k[_.id]}}function L(){Y(),o=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function Hx(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<f.length;x++)e.update(g,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Bn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let L=T===ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Si&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!L)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:D,maxSamples:R}}function Vx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Mi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:i,v=b*4,E=m.clippingState||null;l.value=E,E=h(g,f,v,d);for(let D=0;D!==v;++D)E[D]=e[D];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=d;v!==x;++v,E+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Wx(n){let t=new WeakMap;function e(o,a){return a===vc?o.mapping=nr:a===Mc&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vc||a===Mc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new eh(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Sa=class extends Ma{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,ff=[.125,.215,.35,.446,.526,.582],ps=20,Jl=new Sa,df=new $t,jl=null,Ql=0,tc=0,ec=!1,fs=(1+Math.sqrt(5))/2,Ws=1/fs,pf=[new I(-fs,Ws,0),new I(fs,Ws,0),new I(-Ws,0,fs),new I(Ws,0,fs),new I(0,fs,-Ws),new I(0,fs,Ws),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],lr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jl,Ql,tc),this._renderer.xr.enabled=ec,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ao,format:Bn,colorSpace:Ji,depthBuffer:!1},s=mf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xx(r)),this._blurMaterial=qx(r,t,e)}return s}_compileMaterial(t){let e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,Jl)}_sceneToCubeUV(t,e,i,s){let a=new je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(df),h.toneMapping=Xi,h.autoClear=!1;let d=new me({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new nt(new Dn,d),x=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(df),x=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Xo(s,b*v,m>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Xo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Jl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pf[(s-r-1)%pf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new nt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ps-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):ps;p>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ps}`);let m=[],b=0;for(let T=0;T<ps;++T){let L=T/x,Y=Math.exp(-L*L/2);m.push(Y),T===0?b+=Y:T<p&&(b+=2*Y)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let E=this._sizeLods[s],D=3*E*(s>v-Ks?s-v+Ks:0),R=4*(this._cubeSize-E);Xo(e,D,R,3*E,2*E),l.setRenderTarget(e),l.render(u,Jl)}};function Xx(n){let t=[],e=[],i=[],s=n,r=n-Ks+1+ff.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ks?l=ff[o-n+Ks-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,b=new Float32Array(x*g*d),v=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let R=0;R<d;R++){let T=R%3*2/3-1,L=R>2?0:-1,Y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];b.set(Y,x*g*R),v.set(f,p*g*R);let _=[R,R,R,R,R,R];E.set(_,m*g*R)}let D=new He;D.setAttribute("position",new Pe(b,x)),D.setAttribute("uv",new Pe(v,p)),D.setAttribute("faceIndex",new Pe(E,m)),t.push(D),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function mf(n,t,e){let i=new Ei(n,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function qx(n,t,e){let i=new Float32Array(ps),s=new I(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gf(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function xf(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Yh(){return`

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
	`}function Yx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===vc||l===Mc,h=l===nr||l===ir;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new lr(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new lr(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Zx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $x(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let v=0,E=b.length;v<E;v+=3){let D=b[v+0],R=b[v+1],T=b[v+2];f.push(D,R,R,T,T,D)}}else if(g!==void 0){let b=g.array;x=g.version;for(let v=0,E=b.length/3-1;v<E;v+=3){let D=v+0,R=v+1,T=v+2;f.push(D,R,R,T,T,D)}}else return;let p=new(pd(f)?va:or)(f,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Kx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function u(f,d,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b];for(let b=0;b<x.length;b++)e.update(m,i,x[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function jx(n,t,e){let i=new WeakMap,s=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let Y=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",Y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let E=a.attributes.position.count*v,D=1;E>t.maxTextureSize&&(D=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let R=new Float32Array(E*D*4*u),T=new _a(R,E,D,u);T.type=Kn,T.needsUpdate=!0;let L=v*4;for(let _=0;_<u;_++){let M=p[_],k=m[_],F=b[_],G=E*D*4*_;for(let at=0;at<M.count;at++){let W=at*L;d===!0&&(s.fromBufferAttribute(M,at),R[G+W+0]=s.x,R[G+W+1]=s.y,R[G+W+2]=s.z,R[G+W+3]=0),g===!0&&(s.fromBufferAttribute(k,at),R[G+W+4]=s.x,R[G+W+5]=s.y,R[G+W+6]=s.z,R[G+W+7]=0),x===!0&&(s.fromBufferAttribute(F,at),R[G+W+8]=s.x,R[G+W+9]=s.y,R[G+W+10]=s.z,R[G+W+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new ft(E,D)},i.set(a,f),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Qx(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ea=class extends Sn{constructor(t,e,i,s,r,o,a,l,c,h=js){if(h!==js&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===js&&(i=xs),i===void 0&&h===rr&&(i=sr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_d=new Sn,_f=new Ea(1,1),yd=new _a,vd=new Qc,Md=new ba,yf=[],vf=[],Mf=new Float32Array(16),bf=new Float32Array(9),Sf=new Float32Array(4);function pr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Va(n,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function t_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function i_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function s_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Sf.set(i),n.uniformMatrix2fv(this.addr,!1,Sf),Ye(e,i)}}function r_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;bf.set(i),n.uniformMatrix3fv(this.addr,!1,bf),Ye(e,i)}}function o_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Mf.set(i),n.uniformMatrix4fv(this.addr,!1,Mf),Ye(e,i)}}function a_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function u_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function p_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_f.compareFunction=dd,r=_f):r=_d,e.setTexture2D(t||r,s)}function g_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vd,s)}function x_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Md,s)}function __(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yd,s)}function y_(n){switch(n){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return __}}function v_(n,t){n.uniform1fv(this.addr,t)}function M_(n,t){let e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function b_(n,t){let e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function S_(n,t){let e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function E_(n,t){let e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function w_(n,t){let e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function T_(n,t){let e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function A_(n,t){n.uniform1iv(this.addr,t)}function R_(n,t){n.uniform2iv(this.addr,t)}function C_(n,t){n.uniform3iv(this.addr,t)}function P_(n,t){n.uniform4iv(this.addr,t)}function I_(n,t){n.uniform1uiv(this.addr,t)}function L_(n,t){n.uniform2uiv(this.addr,t)}function D_(n,t){n.uniform3uiv(this.addr,t)}function U_(n,t){n.uniform4uiv(this.addr,t)}function N_(n,t,e){let i=this.cache,s=t.length,r=Va(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||_d,r[o])}function O_(n,t,e){let i=this.cache,s=t.length,r=Va(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vd,r[o])}function F_(n,t,e){let i=this.cache,s=t.length,r=Va(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Md,r[o])}function B_(n,t,e){let i=this.cache,s=t.length,r=Va(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yd,r[o])}function k_(n){switch(n){case 5126:return v_;case 35664:return M_;case 35665:return b_;case 35666:return S_;case 35674:return E_;case 35675:return w_;case 35676:return T_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return L_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return B_}}var nh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=y_(e.type)}},ih=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k_(e.type)}},sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},nc=/(\w+)(\])?(\[|\.)?/g;function Ef(n,t){n.seq.push(t),n.map[t.id]=t}function z_(n,t,e){let i=n.name,s=i.length;for(nc.lastIndex=0;;){let r=nc.exec(i),o=nc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ef(e,c===void 0?new nh(a,n,t):new ih(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new sh(a),Ef(e,u)),e=u}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);z_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function wf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var H_=37297,G_=0;function V_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function W_(n){let t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(n),i;switch(t===e?i="":t===da&&e===fa?i="LinearDisplayP3ToLinearSRGB":t===fa&&e===da&&(i="LinearSRGBToLinearDisplayP3"),n){case Ji:case Ga:return[i,"LinearTransferOETF"];case Mn:case qh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Tf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+V_(n.getShaderSource(t),o)}else return s}function X_(n,t){let e=W_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function q_(n,t){let e;switch(t){case g0:e="Linear";break;case x0:e="Reinhard";break;case _0:e="Cineon";break;case Bh:e="ACESFilmic";break;case v0:e="AgX";break;case M0:e="Neutral";break;case y0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qo=new I;function Y_(){ve.getLuminanceCoefficients(qo);let n=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function $_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Wr(n){return n!==""}function Af(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(n){return n.replace(J_,Q_)}var j_=new Map;function Q_(n,t){let e=Qt[t];if(e===void 0){let i=j_.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rh(e)}var ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(n){return n.replace(ty,ey)}function ey(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ny(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===td?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$p?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function iy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sy(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ir&&(t="ENVMAP_MODE_REFRACTION"),t}function ry(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ed:t="ENVMAP_BLENDING_MULTIPLY";break;case p0:t="ENVMAP_BLENDING_MIX";break;case m0:t="ENVMAP_BLENDING_ADD";break}return t}function oy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ay(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ny(e),c=iy(e),h=sy(e),u=ry(e),f=oy(e),d=Z_(e),g=$_(r),x=s.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(p=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?q_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,X_("linearToOutputTexel",e.outputColorSpace),Y_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=rh(o),o=Af(o,e),o=Rf(o,e),a=rh(a),a=Af(a,e),a=Rf(a,e),o=Cf(o),a=Cf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=b+p+o,E=b+m+a,D=wf(s,s.VERTEX_SHADER,v),R=wf(s,s.FRAGMENT_SHADER,E);s.attachShader(x,D),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(M){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(R).trim(),at=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,R);else{let ut=Tf(s,D,"vertex"),Z=Tf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+ut+`
`+Z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||G==="")&&(W=!1);W&&(M.diagnostics={runnable:at,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(D),s.deleteShader(R),L=new tr(s,x),Y=K_(s,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let Y;this.getAttributes=function(){return Y===void 0&&T(this),Y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,H_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}var ly=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ah(t),e.set(t,i)),i}},ah=class{constructor(t){this.id=ly++,this.code=t,this.usedTimes=0}};function cy(n,t,e,i,s,r,o){let a=new ya,l=new oh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,k,F,G){let at=F.fog,W=G.geometry,ut=_.isMeshStandardMaterial?F.environment:null,Z=(_.isMeshStandardMaterial?e:t).get(_.envMap||ut),_t=Z&&Z.mapping===Ha?Z.image.height:null,Mt=x[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let bt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=bt!==void 0?bt.length:0,oe=0;W.morphAttributes.position!==void 0&&(oe=1),W.morphAttributes.normal!==void 0&&(oe=2),W.morphAttributes.color!==void 0&&(oe=3);let J,st,Tt,gt;if(Mt){let vn=ii[Mt];J=vn.vertexShader,st=vn.fragmentShader}else J=_.vertexShader,st=_.fragmentShader,l.update(_),Tt=l.getVertexShaderID(_),gt=l.getFragmentShaderID(_);let Ht=n.getRenderTarget(),zt=G.isInstancedMesh===!0,Zt=G.isBatchedMesh===!0,Jt=!!_.map,rt=!!_.matcap,C=!!Z,P=!!_.aoMap,H=!!_.lightMap,z=!!_.bumpMap,V=!!_.normalMap,it=!!_.displacementMap,tt=!!_.emissiveMap,S=!!_.metalnessMap,y=!!_.roughnessMap,N=_.anisotropy>0,j=_.clearcoat>0,ot=_.dispersion>0,et=_.iridescence>0,Dt=_.sheen>0,pt=_.transmission>0,yt=N&&!!_.anisotropyMap,jt=j&&!!_.clearcoatMap,ht=j&&!!_.clearcoatNormalMap,vt=j&&!!_.clearcoatRoughnessMap,Bt=et&&!!_.iridescenceMap,Wt=et&&!!_.iridescenceThicknessMap,It=Dt&&!!_.sheenColorMap,le=Dt&&!!_.sheenRoughnessMap,Kt=!!_.specularMap,we=!!_.specularColorMap,U=!!_.specularIntensityMap,Ct=pt&&!!_.transmissionMap,Q=pt&&!!_.thicknessMap,lt=!!_.gradientMap,St=!!_.alphaMap,Pt=_.alphaTest>0,ce=!!_.alphaHash,Ve=!!_.extensions,yn=Xi;_.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(yn=n.toneMapping);let de={shaderID:Mt,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:st,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&G._colorsTexture!==null,instancing:zt,instancingColor:zt&&G.instanceColor!==null,instancingMorph:zt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ht===null?n.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:Ji,alphaToCoverage:!!_.alphaToCoverage,map:Jt,matcap:rt,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:_t,aoMap:P,lightMap:H,bumpMap:z,normalMap:V,displacementMap:d&&it,emissiveMap:tt,normalMapObjectSpace:V&&_.normalMapType===T0,normalMapTangentSpace:V&&_.normalMapType===fd,metalnessMap:S,roughnessMap:y,anisotropy:N,anisotropyMap:yt,clearcoat:j,clearcoatMap:jt,clearcoatNormalMap:ht,clearcoatRoughnessMap:vt,dispersion:ot,iridescence:et,iridescenceMap:Bt,iridescenceThicknessMap:Wt,sheen:Dt,sheenColorMap:It,sheenRoughnessMap:le,specularMap:Kt,specularColorMap:we,specularIntensityMap:U,transmission:pt,transmissionMap:Ct,thicknessMap:Q,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Wi&&_.alphaToCoverage===!1,alphaMap:St,alphaTest:Pt,alphaHash:ce,combine:_.combine,mapUv:Jt&&p(_.map.channel),aoMapUv:P&&p(_.aoMap.channel),lightMapUv:H&&p(_.lightMap.channel),bumpMapUv:z&&p(_.bumpMap.channel),normalMapUv:V&&p(_.normalMap.channel),displacementMapUv:it&&p(_.displacementMap.channel),emissiveMapUv:tt&&p(_.emissiveMap.channel),metalnessMapUv:S&&p(_.metalnessMap.channel),roughnessMapUv:y&&p(_.roughnessMap.channel),anisotropyMapUv:yt&&p(_.anisotropyMap.channel),clearcoatMapUv:jt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:It&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&p(_.sheenRoughnessMap.channel),specularMapUv:Kt&&p(_.specularMap.channel),specularColorMapUv:we&&p(_.specularColorMap.channel),specularIntensityMapUv:U&&p(_.specularIntensityMap.channel),transmissionMapUv:Ct&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:St&&p(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(V||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Jt||St),fog:!!at,useFog:_.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:yn,decodeVideoTexture:Jt&&_.map.isVideoTexture===!0&&ve.getTransfer(_.map.colorSpace)===Ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ve&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&_.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function b(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)M.push(k),M.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(M,_),E(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function E(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function D(_){let M=x[_.type],k;if(M){let F=ii[M];k=Q0.clone(F.uniforms)}else k=_.uniforms;return k}function R(_,M){let k;for(let F=0,G=h.length;F<G;F++){let at=h[F];if(at.cacheKey===M){k=at,++k.usedTimes;break}}return k===void 0&&(k=new ay(n,M,_,r),h.push(k)),k}function T(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function L(_){l.remove(_)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:D,acquireProgram:R,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:Y}}function hy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function uy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function If(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||uy),i.length>1&&i.sort(f||If),s.length>1&&s.sort(f||If)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Lf,n.set(i,[o])):s>=r.length?(o=new Lf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function dy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new $t};break;case"SpotLight":e={position:new I,direction:new I,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function py(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var my=0;function gy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xy(n){let t=new dy,e=py(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Yt,o=new Yt;function a(c){let h=0,u=0,f=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,b=0,v=0,E=0,D=0,R=0,T=0;c.sort(gy);for(let Y=0,_=c.length;Y<_;Y++){let M=c[Y],k=M.color,F=M.intensity,G=M.distance,at=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=k.r*F,u+=k.g*F,f+=k.b*F;else if(M.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(M.sh.coefficients[W],F);T++}else if(M.isDirectionalLight){let W=t.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let ut=M.shadow,Z=e.get(M);Z.shadowIntensity=ut.intensity,Z.shadowBias=ut.bias,Z.shadowNormalBias=ut.normalBias,Z.shadowRadius=ut.radius,Z.shadowMapSize=ut.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=at,i.directionalShadowMatrix[d]=M.shadow.matrix,b++}i.directional[d]=W,d++}else if(M.isSpotLight){let W=t.get(M);W.position.setFromMatrixPosition(M.matrixWorld),W.color.copy(k).multiplyScalar(F),W.distance=G,W.coneCos=Math.cos(M.angle),W.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),W.decay=M.decay,i.spot[x]=W;let ut=M.shadow;if(M.map&&(i.spotLightMap[D]=M.map,D++,ut.updateMatrices(M),M.castShadow&&R++),i.spotLightMatrix[x]=ut.matrix,M.castShadow){let Z=e.get(M);Z.shadowIntensity=ut.intensity,Z.shadowBias=ut.bias,Z.shadowNormalBias=ut.normalBias,Z.shadowRadius=ut.radius,Z.shadowMapSize=ut.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=at,E++}x++}else if(M.isRectAreaLight){let W=t.get(M);W.color.copy(k).multiplyScalar(F),W.halfWidth.set(M.width*.5,0,0),W.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=W,p++}else if(M.isPointLight){let W=t.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),W.distance=M.distance,W.decay=M.decay,M.castShadow){let ut=M.shadow,Z=e.get(M);Z.shadowIntensity=ut.intensity,Z.shadowBias=ut.bias,Z.shadowNormalBias=ut.normalBias,Z.shadowRadius=ut.radius,Z.shadowMapSize=ut.mapSize,Z.shadowCameraNear=ut.camera.near,Z.shadowCameraFar=ut.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=at,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=W,g++}else if(M.isHemisphereLight){let W=t.get(M);W.skyColor.copy(M.color).multiplyScalar(F),W.groundColor.copy(M.groundColor).multiplyScalar(F),i.hemi[m]=W,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==b||L.numPointShadows!==v||L.numSpotShadows!==E||L.numSpotMaps!==D||L.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,L.directionalLength=d,L.pointLength=g,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=b,L.numPointShadows=v,L.numSpotShadows=E,L.numSpotMaps=D,L.numLightProbes=T,i.version=my++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let v=c[m];if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){let E=i.spot[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(v.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Df(n){let t=new xy(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _y(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Df(n),t.set(s,[a])):r>=o.length?(a=new Df(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var lh=class extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ch=class extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`;function My(n,t,e){let i=new Jr,s=new ft,r=new ft,o=new pe,a=new lh({depthPacking:w0}),l=new ch,c={},h=e.maxTextureSize,u={[Yi]:Qe,[Qe]:Yi,[dn]:dn},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:yy,fragmentShader:vy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let m=this.type;this.render=function(R,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let Y=n.getRenderTarget(),_=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Vi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=m!==vi&&this.type===vi,G=m===vi&&this.type!==vi;for(let at=0,W=R.length;at<W;at++){let ut=R[at],Z=ut.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let _t=Z.getFrameExtents();if(s.multiply(_t),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,Z.mapSize.y=r.y)),Z.map===null||F===!0||G===!0){let bt=this.type!==vi?{minFilter:bn,magFilter:bn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ei(s.x,s.y,bt),Z.map.texture.name=ut.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let Mt=Z.getViewportCount();for(let bt=0;bt<Mt;bt++){let ee=Z.getViewport(bt);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),k.viewport(o),Z.updateMatrices(ut,bt),i=Z.getFrustum(),E(T,L,Z.camera,ut,this.type)}Z.isPointLightShadow!==!0&&this.type===vi&&b(Z,L),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(Y,_,M)};function b(R,T){let L=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ei(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,L,d,x,null)}function v(R,T,L,Y){let _=null,M=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)_=M;else if(_=L.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let k=_.uuid,F=T.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let at=G[F];at===void 0&&(at=_.clone(),G[F]=at,T.addEventListener("dispose",D)),_=at}if(_.visible=T.visible,_.wireframe=T.wireframe,Y===vi?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let k=n.properties.get(_);k.light=L}return _}function E(R,T,L,Y,_){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===vi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);let F=t.update(R),G=R.material;if(Array.isArray(G)){let at=F.groups;for(let W=0,ut=at.length;W<ut;W++){let Z=at[W],_t=G[Z.materialIndex];if(_t&&_t.visible){let Mt=v(R,_t,Y,_);R.onBeforeShadow(n,R,T,L,F,Mt,Z),n.renderBufferDirect(L,null,F,Mt,R,Z),R.onAfterShadow(n,R,T,L,F,Mt,Z)}}}else if(G.visible){let at=v(R,G,Y,_);R.onBeforeShadow(n,R,T,L,F,at,null),n.renderBufferDirect(L,null,F,at,R,null),R.onAfterShadow(n,R,T,L,F,at,null)}}let k=R.children;for(let F=0,G=k.length;F<G;F++)E(k[F],T,L,Y,_)}function D(R){R.target.removeEventListener("dispose",D);for(let L in c){let Y=c[L],_=R.target.uuid;_ in Y&&(Y[_].dispose(),delete Y[_])}}}var by={[dc]:pc,[mc]:_c,[gc]:yc,[er]:xc,[pc]:dc,[_c]:mc,[yc]:gc,[xc]:er};function Sy(n){function t(){let U=!1,Ct=new pe,Q=null,lt=new pe(0,0,0,0);return{setMask:function(St){Q!==St&&!U&&(n.colorMask(St,St,St,St),Q=St)},setLocked:function(St){U=St},setClear:function(St,Pt,ce,Ve,yn){yn===!0&&(St*=Ve,Pt*=Ve,ce*=Ve),Ct.set(St,Pt,ce,Ve),lt.equals(Ct)===!1&&(n.clearColor(St,Pt,ce,Ve),lt.copy(Ct))},reset:function(){U=!1,Q=null,lt.set(-1,0,0,0)}}}function e(){let U=!1,Ct=!1,Q=null,lt=null,St=null;return{setReversed:function(Pt){Ct=Pt},setTest:function(Pt){Pt?Tt(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(Pt){Q!==Pt&&!U&&(n.depthMask(Pt),Q=Pt)},setFunc:function(Pt){if(Ct&&(Pt=by[Pt]),lt!==Pt){switch(Pt){case dc:n.depthFunc(n.NEVER);break;case pc:n.depthFunc(n.ALWAYS);break;case mc:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case gc:n.depthFunc(n.EQUAL);break;case xc:n.depthFunc(n.GEQUAL);break;case _c:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=Pt}},setLocked:function(Pt){U=Pt},setClear:function(Pt){St!==Pt&&(n.clearDepth(Pt),St=Pt)},reset:function(){U=!1,Q=null,lt=null,St=null}}}function i(){let U=!1,Ct=null,Q=null,lt=null,St=null,Pt=null,ce=null,Ve=null,yn=null;return{setTest:function(de){U||(de?Tt(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(de){Ct!==de&&!U&&(n.stencilMask(de),Ct=de)},setFunc:function(de,vn,pi){(Q!==de||lt!==vn||St!==pi)&&(n.stencilFunc(de,vn,pi),Q=de,lt=vn,St=pi)},setOp:function(de,vn,pi){(Pt!==de||ce!==vn||Ve!==pi)&&(n.stencilOp(de,vn,pi),Pt=de,ce=vn,Ve=pi)},setLocked:function(de){U=de},setClear:function(de){yn!==de&&(n.clearStencil(de),yn=de)},reset:function(){U=!1,Ct=null,Q=null,lt=null,St=null,Pt=null,ce=null,Ve=null,yn=null}}}let s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,b=null,v=null,E=null,D=null,R=new $t(0,0,0),T=0,L=!1,Y=null,_=null,M=null,k=null,F=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,W=0,ut=n.getParameter(n.VERSION);ut.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ut)[1]),at=W>=1):ut.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),at=W>=2);let Z=null,_t={},Mt=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),ee=new pe().fromArray(Mt),oe=new pe().fromArray(bt);function J(U,Ct,Q,lt){let St=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(U,Pt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<Q;ce++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(Ct+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Pt}let st={};st[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Tt(n.DEPTH_TEST),r.setFunc(er),H(!1),z(ku),Tt(n.CULL_FACE),C(Vi);function Tt(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function gt(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Ht(U,Ct){return h[U]!==Ct?(n.bindFramebuffer(U,Ct),h[U]=Ct,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ct),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function zt(U,Ct){let Q=f,lt=!1;if(U){Q=u.get(Ct),Q===void 0&&(Q=[],u.set(Ct,Q));let St=U.textures;if(Q.length!==St.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Pt=0,ce=St.length;Pt<ce;Pt++)Q[Pt]=n.COLOR_ATTACHMENT0+Pt;Q.length=St.length,lt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,lt=!0);lt&&n.drawBuffers(Q)}function Zt(U){return d!==U?(n.useProgram(U),d=U,!0):!1}let Jt={[ds]:n.FUNC_ADD,[Jp]:n.FUNC_SUBTRACT,[jp]:n.FUNC_REVERSE_SUBTRACT};Jt[Qp]=n.MIN,Jt[t0]=n.MAX;let rt={[e0]:n.ZERO,[n0]:n.ONE,[i0]:n.SRC_COLOR,[uc]:n.SRC_ALPHA,[c0]:n.SRC_ALPHA_SATURATE,[a0]:n.DST_COLOR,[r0]:n.DST_ALPHA,[s0]:n.ONE_MINUS_SRC_COLOR,[fc]:n.ONE_MINUS_SRC_ALPHA,[l0]:n.ONE_MINUS_DST_COLOR,[o0]:n.ONE_MINUS_DST_ALPHA,[h0]:n.CONSTANT_COLOR,[u0]:n.ONE_MINUS_CONSTANT_COLOR,[f0]:n.CONSTANT_ALPHA,[d0]:n.ONE_MINUS_CONSTANT_ALPHA};function C(U,Ct,Q,lt,St,Pt,ce,Ve,yn,de){if(U===Vi){g===!0&&(gt(n.BLEND),g=!1);return}if(g===!1&&(Tt(n.BLEND),g=!0),U!==Kp){if(U!==x||de!==L){if((p!==ds||v!==ds)&&(n.blendEquation(n.FUNC_ADD),p=ds,v=ds),de)switch(U){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFunc(n.ONE,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,b=null,E=null,D=null,R.set(0,0,0),T=0,x=U,L=de}return}St=St||Ct,Pt=Pt||Q,ce=ce||lt,(Ct!==p||St!==v)&&(n.blendEquationSeparate(Jt[Ct],Jt[St]),p=Ct,v=St),(Q!==m||lt!==b||Pt!==E||ce!==D)&&(n.blendFuncSeparate(rt[Q],rt[lt],rt[Pt],rt[ce]),m=Q,b=lt,E=Pt,D=ce),(Ve.equals(R)===!1||yn!==T)&&(n.blendColor(Ve.r,Ve.g,Ve.b,yn),R.copy(Ve),T=yn),x=U,L=!1}function P(U,Ct){U.side===dn?gt(n.CULL_FACE):Tt(n.CULL_FACE);let Q=U.side===Qe;Ct&&(Q=!Q),H(Q),U.blending===Wi&&U.transparent===!1?C(Vi):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let lt=U.stencilWrite;o.setTest(lt),lt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),it(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Tt(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(U){Y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),Y=U)}function z(U){U!==Yp?(Tt(n.CULL_FACE),U!==_&&(U===ku?n.cullFace(n.BACK):U===Zp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),_=U}function V(U){U!==M&&(at&&n.lineWidth(U),M=U)}function it(U,Ct,Q){U?(Tt(n.POLYGON_OFFSET_FILL),(k!==Ct||F!==Q)&&(n.polygonOffset(Ct,Q),k=Ct,F=Q)):gt(n.POLYGON_OFFSET_FILL)}function tt(U){U?Tt(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function S(U){U===void 0&&(U=n.TEXTURE0+G-1),Z!==U&&(n.activeTexture(U),Z=U)}function y(U,Ct,Q){Q===void 0&&(Z===null?Q=n.TEXTURE0+G-1:Q=Z);let lt=_t[Q];lt===void 0&&(lt={type:void 0,texture:void 0},_t[Q]=lt),(lt.type!==U||lt.texture!==Ct)&&(Z!==Q&&(n.activeTexture(Q),Z=Q),n.bindTexture(U,Ct||st[U]),lt.type=U,lt.texture=Ct)}function N(){let U=_t[Z];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(U){ee.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function It(U){oe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),oe.copy(U))}function le(U,Ct){let Q=l.get(Ct);Q===void 0&&(Q=new WeakMap,l.set(Ct,Q));let lt=Q.get(U);lt===void 0&&(lt=n.getUniformBlockIndex(Ct,U.name),Q.set(U,lt))}function Kt(U,Ct){let lt=l.get(Ct).get(U);a.get(Ct)!==lt&&(n.uniformBlockBinding(Ct,lt,U.__bindingPointIndex),a.set(Ct,lt))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Z=null,_t={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,b=null,v=null,E=null,D=null,R=new $t(0,0,0),T=0,L=!1,Y=null,_=null,M=null,k=null,F=null,ee.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Tt,disable:gt,bindFramebuffer:Ht,drawBuffers:zt,useProgram:Zt,setBlending:C,setMaterial:P,setFlipSided:H,setCullFace:z,setLineWidth:V,setPolygonOffset:it,setScissorTest:tt,activeTexture:S,bindTexture:y,unbindTexture:N,compressedTexImage2D:j,compressedTexImage3D:ot,texImage2D:vt,texImage3D:Bt,updateUBOMapping:le,uniformBlockBinding:Kt,texStorage2D:jt,texStorage3D:ht,texSubImage2D:et,texSubImage3D:Dt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Wt,viewport:It,reset:we}}function Uf(n,t,e,i){let s=Ey(i);switch(e){case od:return n*t;case ld:return n*t;case cd:return n*t*2;case Gh:return n*t/s.components*s.byteLength;case Vh:return n*t/s.components*s.byteLength;case hd:return n*t*2/s.components*s.byteLength;case Wh:return n*t*2/s.components*s.byteLength;case ad:return n*t*3/s.components*s.byteLength;case Bn:return n*t*4/s.components*s.byteLength;case Xh:return n*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ec:case Tc:return Math.max(n,16)*Math.max(t,8)/4;case Sc:case wc:return Math.max(n,8)*Math.max(t,8)/2;case Ac:case Rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case la:case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ud:case qc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Yc:case Zc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ey(n){switch(n){case Si:case id:return{byteLength:1,components:1};case $r:case sd:case ao:return{byteLength:2,components:1};case zh:case Hh:return{byteLength:2,components:4};case xs:case kh:case Kn:return{byteLength:4,components:1};case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wy(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return d?new OffscreenCanvas(S,y):ga("canvas")}function x(S,y,N){let j=1,ot=tt(S);if((ot.width>N||ot.height>N)&&(j=N/Math.max(ot.width,ot.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let et=Math.floor(j*ot.width),Dt=Math.floor(j*ot.height);u===void 0&&(u=g(et,Dt));let pt=y?g(et,Dt):u;return pt.width=et,pt.height=Dt,pt.getContext("2d").drawImage(S,0,0,et,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Dt+")."),pt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==bn&&S.minFilter!==$n}function m(S){n.generateMipmap(S)}function b(S,y,N,j,ot=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let et=y;if(y===n.RED&&(N===n.FLOAT&&(et=n.R32F),N===n.HALF_FLOAT&&(et=n.R16F),N===n.UNSIGNED_BYTE&&(et=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.R8UI),N===n.UNSIGNED_SHORT&&(et=n.R16UI),N===n.UNSIGNED_INT&&(et=n.R32UI),N===n.BYTE&&(et=n.R8I),N===n.SHORT&&(et=n.R16I),N===n.INT&&(et=n.R32I)),y===n.RG&&(N===n.FLOAT&&(et=n.RG32F),N===n.HALF_FLOAT&&(et=n.RG16F),N===n.UNSIGNED_BYTE&&(et=n.RG8)),y===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RG8UI),N===n.UNSIGNED_SHORT&&(et=n.RG16UI),N===n.UNSIGNED_INT&&(et=n.RG32UI),N===n.BYTE&&(et=n.RG8I),N===n.SHORT&&(et=n.RG16I),N===n.INT&&(et=n.RG32I)),y===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RGB8UI),N===n.UNSIGNED_SHORT&&(et=n.RGB16UI),N===n.UNSIGNED_INT&&(et=n.RGB32UI),N===n.BYTE&&(et=n.RGB8I),N===n.SHORT&&(et=n.RGB16I),N===n.INT&&(et=n.RGB32I)),y===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),N===n.UNSIGNED_INT&&(et=n.RGBA32UI),N===n.BYTE&&(et=n.RGBA8I),N===n.SHORT&&(et=n.RGBA16I),N===n.INT&&(et=n.RGBA32I)),y===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),y===n.RGBA){let Dt=ot?ua:ve.getTransfer(j);N===n.FLOAT&&(et=n.RGBA32F),N===n.HALF_FLOAT&&(et=n.RGBA16F),N===n.UNSIGNED_BYTE&&(et=Dt===Ce?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(S,y){let N;return S?y===null||y===xs||y===sr?N=n.DEPTH24_STENCIL8:y===Kn?N=n.DEPTH32F_STENCIL8:y===$r&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xs||y===sr?N=n.DEPTH_COMPONENT24:y===Kn?N=n.DEPTH_COMPONENT32F:y===$r&&(N=n.DEPTH_COMPONENT16),N}function E(S,y){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==bn&&S.minFilter!==$n?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function D(S){let y=S.target;y.removeEventListener("dispose",D),T(y),y.isVideoTexture&&h.delete(y)}function R(S){let y=S.target;y.removeEventListener("dispose",R),Y(y)}function T(S){let y=i.get(S);if(y.__webglInit===void 0)return;let N=S.source,j=f.get(N);if(j){let ot=j[y.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&L(S),Object.keys(j).length===0&&f.delete(N)}i.remove(S)}function L(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let N=S.source,j=f.get(N);delete j[y.__cacheKey],o.memory.textures--}function Y(S){let y=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let ot=0;ot<y.__webglFramebuffer[j].length;ot++)n.deleteFramebuffer(y.__webglFramebuffer[j][ot]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let N=S.textures;for(let j=0,ot=N.length;j<ot;j++){let et=i.get(N[j]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),i.remove(N[j])}i.remove(S)}let _=0;function M(){_=0}function k(){let S=_;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),_+=1,S}function F(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function G(S,y){let N=i.get(S);if(S.isVideoTexture&&V(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(N,S,y);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function at(S,y){let N=i.get(S);if(S.version>0&&N.__version!==S.version){oe(N,S,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function W(S,y){let N=i.get(S);if(S.version>0&&N.__version!==S.version){oe(N,S,y);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function ut(S,y){let N=i.get(S);if(S.version>0&&N.__version!==S.version){J(N,S,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}let Z={[Zr]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},_t={[bn]:n.NEAREST,[S0]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},Mt={[A0]:n.NEVER,[D0]:n.ALWAYS,[R0]:n.LESS,[dd]:n.LEQUAL,[C0]:n.EQUAL,[L0]:n.GEQUAL,[P0]:n.GREATER,[I0]:n.NOTEQUAL};function bt(S,y){if(y.type===Kn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===$n||y.magFilter===Tl||y.magFilter===To||y.magFilter===gs||y.minFilter===$n||y.minFilter===Tl||y.minFilter===To||y.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Z[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,_t[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bn||y.minFilter!==To&&y.minFilter!==gs||y.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ee(S,y){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",D));let j=y.source,ot=f.get(j);ot===void 0&&(ot={},f.set(j,ot));let et=F(y);if(et!==S.__cacheKey){ot[et]===void 0&&(ot[et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ot[et].usedTimes++;let Dt=ot[S.__cacheKey];Dt!==void 0&&(ot[S.__cacheKey].usedTimes--,Dt.usedTimes===0&&L(y)),S.__cacheKey=et,S.__webglTexture=ot[et].texture}return N}function oe(S,y,N){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);let ot=ee(S,y),et=y.source;e.bindTexture(j,S.__webglTexture,n.TEXTURE0+N);let Dt=i.get(et);if(et.version!==Dt.__version||ot===!0){e.activeTexture(n.TEXTURE0+N);let pt=ve.getPrimaries(ve.workingColorSpace),yt=y.colorSpace===Hi?null:ve.getPrimaries(y.colorSpace),jt=y.colorSpace===Hi||pt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ht=x(y.image,!1,s.maxTextureSize);ht=it(y,ht);let vt=r.convert(y.format,y.colorSpace),Bt=r.convert(y.type),Wt=b(y.internalFormat,vt,Bt,y.colorSpace,y.isVideoTexture);bt(j,y);let It,le=y.mipmaps,Kt=y.isVideoTexture!==!0,we=Dt.__version===void 0||ot===!0,U=et.dataReady,Ct=E(y,ht);if(y.isDepthTexture)Wt=v(y.format===rr,y.type),we&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Wt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Wt,ht.width,ht.height,0,vt,Bt,null));else if(y.isDataTexture)if(le.length>0){Kt&&we&&e.texStorage2D(n.TEXTURE_2D,Ct,Wt,le[0].width,le[0].height);for(let Q=0,lt=le.length;Q<lt;Q++)It=le[Q],Kt?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,It.width,It.height,vt,Bt,It.data):e.texImage2D(n.TEXTURE_2D,Q,Wt,It.width,It.height,0,vt,Bt,It.data);y.generateMipmaps=!1}else Kt?(we&&e.texStorage2D(n.TEXTURE_2D,Ct,Wt,ht.width,ht.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,vt,Bt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Wt,ht.width,ht.height,0,vt,Bt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Wt,le[0].width,le[0].height,ht.depth);for(let Q=0,lt=le.length;Q<lt;Q++)if(It=le[Q],y.format!==Bn)if(vt!==null)if(Kt){if(U)if(y.layerUpdates.size>0){let St=Uf(It.width,It.height,y.format,y.type);for(let Pt of y.layerUpdates){let ce=It.data.subarray(Pt*St/It.data.BYTES_PER_ELEMENT,(Pt+1)*St/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Pt,It.width,It.height,1,vt,ce,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,It.width,It.height,ht.depth,vt,It.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Wt,It.width,It.height,ht.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,It.width,It.height,ht.depth,vt,Bt,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Wt,It.width,It.height,ht.depth,0,vt,Bt,It.data)}else{Kt&&we&&e.texStorage2D(n.TEXTURE_2D,Ct,Wt,le[0].width,le[0].height);for(let Q=0,lt=le.length;Q<lt;Q++)It=le[Q],y.format!==Bn?vt!==null?Kt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,It.width,It.height,vt,It.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Wt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,It.width,It.height,vt,Bt,It.data):e.texImage2D(n.TEXTURE_2D,Q,Wt,It.width,It.height,0,vt,Bt,It.data)}else if(y.isDataArrayTexture)if(Kt){if(we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Wt,ht.width,ht.height,ht.depth),U)if(y.layerUpdates.size>0){let Q=Uf(ht.width,ht.height,y.format,y.type);for(let lt of y.layerUpdates){let St=ht.data.subarray(lt*Q/ht.data.BYTES_PER_ELEMENT,(lt+1)*Q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,ht.width,ht.height,1,vt,Bt,St)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,vt,Bt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Wt,ht.width,ht.height,ht.depth,0,vt,Bt,ht.data);else if(y.isData3DTexture)Kt?(we&&e.texStorage3D(n.TEXTURE_3D,Ct,Wt,ht.width,ht.height,ht.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,vt,Bt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Wt,ht.width,ht.height,ht.depth,0,vt,Bt,ht.data);else if(y.isFramebufferTexture){if(we)if(Kt)e.texStorage2D(n.TEXTURE_2D,Ct,Wt,ht.width,ht.height);else{let Q=ht.width,lt=ht.height;for(let St=0;St<Ct;St++)e.texImage2D(n.TEXTURE_2D,St,Wt,Q,lt,0,vt,Bt,null),Q>>=1,lt>>=1}}else if(le.length>0){if(Kt&&we){let Q=tt(le[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Wt,Q.width,Q.height)}for(let Q=0,lt=le.length;Q<lt;Q++)It=le[Q],Kt?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,vt,Bt,It):e.texImage2D(n.TEXTURE_2D,Q,Wt,vt,Bt,It);y.generateMipmaps=!1}else if(Kt){if(we){let Q=tt(ht);e.texStorage2D(n.TEXTURE_2D,Ct,Wt,Q.width,Q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Bt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Wt,vt,Bt,ht);p(y)&&m(j),Dt.__version=et.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function J(S,y,N){if(y.image.length!==6)return;let j=ee(S,y),ot=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+N);let et=i.get(ot);if(ot.version!==et.__version||j===!0){e.activeTexture(n.TEXTURE0+N);let Dt=ve.getPrimaries(ve.workingColorSpace),pt=y.colorSpace===Hi?null:ve.getPrimaries(y.colorSpace),yt=y.colorSpace===Hi||Dt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let jt=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let lt=0;lt<6;lt++)!jt&&!ht?vt[lt]=x(y.image[lt],!0,s.maxCubemapSize):vt[lt]=ht?y.image[lt].image:y.image[lt],vt[lt]=it(y,vt[lt]);let Bt=vt[0],Wt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),le=b(y.internalFormat,Wt,It,y.colorSpace),Kt=y.isVideoTexture!==!0,we=et.__version===void 0||j===!0,U=ot.dataReady,Ct=E(y,Bt);bt(n.TEXTURE_CUBE_MAP,y);let Q;if(jt){Kt&&we&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,le,Bt.width,Bt.height);for(let lt=0;lt<6;lt++){Q=vt[lt].mipmaps;for(let St=0;St<Q.length;St++){let Pt=Q[St];y.format!==Bn?Wt!==null?Kt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Pt.width,Pt.height,Wt,Pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,le,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Pt.width,Pt.height,Wt,It,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,le,Pt.width,Pt.height,0,Wt,It,Pt.data)}}}else{if(Q=y.mipmaps,Kt&&we){Q.length>0&&Ct++;let lt=tt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,le,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ht){Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,vt[lt].width,vt[lt].height,Wt,It,vt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,le,vt[lt].width,vt[lt].height,0,Wt,It,vt[lt].data);for(let St=0;St<Q.length;St++){let ce=Q[St].image[lt].image;Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,ce.width,ce.height,Wt,It,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,le,ce.width,ce.height,0,Wt,It,ce.data)}}else{Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Wt,It,vt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,le,Wt,It,vt[lt]);for(let St=0;St<Q.length;St++){let Pt=Q[St];Kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Wt,It,Pt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,le,Wt,It,Pt.image[lt])}}}p(y)&&m(n.TEXTURE_CUBE_MAP),et.__version=ot.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function st(S,y,N,j,ot,et){let Dt=r.convert(N.format,N.colorSpace),pt=r.convert(N.type),yt=b(N.internalFormat,Dt,pt,N.colorSpace);if(!i.get(y).__hasExternalTextures){let ht=Math.max(1,y.width>>et),vt=Math.max(1,y.height>>et);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,yt,ht,vt,y.depth,0,Dt,pt,null):e.texImage2D(ot,et,yt,ht,vt,0,Dt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ot,i.get(N).__webglTexture,0,H(y)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ot,i.get(N).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(S,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let j=y.depthTexture,ot=j&&j.isDepthTexture?j.type:null,et=v(y.stencilBuffer,ot),Dt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=H(y);z(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,et,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,et,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,S)}else{let j=y.textures;for(let ot=0;ot<j.length;ot++){let et=j[ot],Dt=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),yt=b(et.internalFormat,Dt,pt,et.colorSpace),jt=H(y);N&&z(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,yt,y.width,y.height):z(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,yt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,yt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);let j=i.get(y.depthTexture).__webglTexture,ot=H(y);if(y.depthTexture.format===js)z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===rr)z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ht(S){let y=i.get(S),N=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let j=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let ot=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",ot)};j.addEventListener("dispose",ot),y.__depthDisposeCallback=ot}y.__boundDepthTexture=j}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,S)}else if(N){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),Tt(y.__webglDepthbuffer[j],S,!1);else{let ot=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,et)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Tt(y.__webglDepthbuffer,S,!1);else{let j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(S,y,N){let j=i.get(S);y!==void 0&&st(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ht(S)}function Zt(S){let y=S.texture,N=i.get(S),j=i.get(y);S.addEventListener("dispose",R);let ot=S.textures,et=S.isWebGLCubeRenderTarget===!0,Dt=ot.length>1;if(Dt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),et){N.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[pt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)N.__webglFramebuffer[pt][yt]=n.createFramebuffer()}else N.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)N.__webglFramebuffer[pt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let pt=0,yt=ot.length;pt<yt;pt++){let jt=i.get(ot[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&z(S)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pt=0;pt<ot.length;pt++){let yt=ot[pt];N.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[pt]);let jt=r.convert(yt.format,yt.colorSpace),ht=r.convert(yt.type),vt=b(yt.internalFormat,jt,ht,yt.colorSpace,S.isXRRenderTarget===!0),Bt=H(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,vt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,N.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),bt(n.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)st(N.__webglFramebuffer[pt][yt],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else st(N.__webglFramebuffer[pt],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(y)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let pt=0,yt=ot.length;pt<yt;pt++){let jt=ot[pt],ht=i.get(jt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),bt(n.TEXTURE_2D,jt),st(N.__webglFramebuffer,S,jt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),p(jt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(pt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,j.__webglTexture),bt(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)st(N.__webglFramebuffer[yt],S,y,n.COLOR_ATTACHMENT0,pt,yt);else st(N.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,pt,0);p(y)&&m(pt),e.unbindTexture()}S.depthBuffer&&Ht(S)}function Jt(S){let y=S.textures;for(let N=0,j=y.length;N<j;N++){let ot=y[N];if(p(ot)){let et=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Dt=i.get(ot).__webglTexture;e.bindTexture(et,Dt),m(et),e.unbindTexture()}}}let rt=[],C=[];function P(S){if(S.samples>0){if(z(S)===!1){let y=S.textures,N=S.width,j=S.height,ot=n.COLOR_BUFFER_BIT,et=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(S),pt=y.length>1;if(pt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[yt]);let jt=i.get(y[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,N,j,0,0,N,j,ot,n.NEAREST),l===!0&&(rt.length=0,C.length=0,rt.push(n.COLOR_ATTACHMENT0+yt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(rt.push(et),C.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[yt]);let jt=i.get(y[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function H(S){return Math.min(s.maxSamples,S.samples)}function z(S){let y=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(S){let y=o.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function it(S,y){let N=S.colorSpace,j=S.format,ot=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==Ji&&N!==Hi&&(ve.getTransfer(N)===Ce?(j!==Bn||ot!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function tt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=G,this.setTexture2DArray=at,this.setTexture3D=W,this.setTextureCube=ut,this.rebindTextures=zt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=st,this.useMultisampledRTT=z}function Ty(n,t){function e(i,s=Hi){let r,o=ve.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===id)return n.BYTE;if(i===sd)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===kh)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===ao)return n.HALF_FLOAT;if(i===od)return n.ALPHA;if(i===ad)return n.RGB;if(i===Bn)return n.RGBA;if(i===ld)return n.LUMINANCE;if(i===cd)return n.LUMINANCE_ALPHA;if(i===js)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===Gh)return n.RED;if(i===Vh)return n.RED_INTEGER;if(i===hd)return n.RG;if(i===Wh)return n.RG_INTEGER;if(i===Xh)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sc||i===Ec||i===wc||i===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Rc||i===Cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ac||i===Rc)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pc||i===Ic||i===Lc||i===Dc||i===Uc||i===Nc||i===Oc||i===Fc||i===Bc||i===kc||i===zc||i===Hc||i===Gc||i===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Wc||i===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ud||i===qc||i===Yc||i===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===la)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var hh=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Gt=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ay={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
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

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ai({vertexShader:Ry,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Zi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new uh,p=e.getContextAttributes(),m=null,b=null,v=[],E=[],D=new ft,R=null,T=new je;T.layers.enable(1),T.viewport=new pe;let L=new je;L.layers.enable(2),L.viewport=new pe;let Y=[T,L],_=new hh;_.layers.enable(1),_.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=v[J];return st===void 0&&(st=new Xr,v[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=v[J];return st===void 0&&(st=new Xr,v[J]=st),st.getGripSpace()},this.getHand=function(J){let st=v[J];return st===void 0&&(st=new Xr,v[J]=st),st.getHandSpace()};function F(J){let st=E.indexOf(J.inputSource);if(st===-1)return;let Tt=v[st];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,c||o),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",at);for(let J=0;J<v.length;J++){let st=E[J];st!==null&&(E[J]=null,v[J].disconnect(st))}M=null,k=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,b=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",at),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ei(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,Tt=null,gt=null;p.depth&&(gt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?rr:js,Tt=p.stencil?sr:xs);let Ht={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ei(f.textureWidth,f.textureHeight,{format:Bn,type:Si,depthTexture:new Ea(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(J){for(let st=0;st<J.removed.length;st++){let Tt=J.removed[st],gt=E.indexOf(Tt);gt>=0&&(E[gt]=null,v[gt].disconnect(Tt))}for(let st=0;st<J.added.length;st++){let Tt=J.added[st],gt=E.indexOf(Tt);if(gt===-1){for(let zt=0;zt<v.length;zt++)if(zt>=E.length){E.push(Tt),gt=zt;break}else if(E[zt]===null){E[zt]=Tt,gt=zt;break}if(gt===-1)break}let Ht=v[gt];Ht&&Ht.connect(Tt)}}let W=new I,ut=new I;function Z(J,st,Tt){W.setFromMatrixPosition(st.matrixWorld),ut.setFromMatrixPosition(Tt.matrixWorld);let gt=W.distanceTo(ut),Ht=st.projectionMatrix.elements,zt=Tt.projectionMatrix.elements,Zt=Ht[14]/(Ht[10]-1),Jt=Ht[14]/(Ht[10]+1),rt=(Ht[9]+1)/Ht[5],C=(Ht[9]-1)/Ht[5],P=(Ht[8]-1)/Ht[0],H=(zt[8]+1)/zt[0],z=Zt*P,V=Zt*H,it=gt/(-P+H),tt=it*-P;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(tt),J.translateZ(it),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ht[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let S=Zt+it,y=Jt+it,N=z-tt,j=V+(gt-tt),ot=rt*Jt/y*S,et=C*Jt/y*S;J.projectionMatrix.makePerspective(N,j,ot,et,S,y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _t(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,Tt=J.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),_.near=L.near=T.near=st,_.far=L.far=T.far=Tt,(M!==_.near||k!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,k=_.far);let gt=J.parent,Ht=_.cameras;_t(_,gt);for(let zt=0;zt<Ht.length;zt++)_t(Ht[zt],gt);Ht.length===2?Z(_,T,L):_.projectionMatrix.copy(T.projectionMatrix),Mt(J,_,gt)};function Mt(J,st,Tt){Tt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ma*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let bt=null;function ee(J,st){if(h=st.getViewerPose(c||o),g=st,h!==null){let Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let gt=!1;Tt.length!==_.cameras.length&&(_.cameras.length=0,gt=!0);for(let zt=0;zt<Tt.length;zt++){let Zt=Tt[zt],Jt=null;if(d!==null)Jt=d.getViewport(Zt);else{let C=u.getViewSubImage(f,Zt);Jt=C.viewport,zt===0&&(t.setRenderTargetTextures(b,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(b))}let rt=Y[zt];rt===void 0&&(rt=new je,rt.layers.enable(zt),rt.viewport=new pe,Y[zt]=rt),rt.matrix.fromArray(Zt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Zt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),zt===0&&(_.matrix.copy(rt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),gt===!0&&_.cameras.push(rt)}let Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){let zt=u.getDepthInformation(Tt[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,s.renderState)}}for(let Tt=0;Tt<v.length;Tt++){let gt=E[Tt],Ht=v[Tt];gt!==null&&Ht!==void 0&&Ht.update(gt,st,c||o)}bt&&bt(J,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}let oe=new xd;oe.setAnimationLoop(ee),this.setAnimationLoop=function(J){bt=J},this.dispose=function(){}}},us=new En,Py=new Yt;function Iy(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,gd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),v=b.envMap,E=b.envMapRotation;v&&(p.envMap.value=v,us.copy(E),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(us)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ly(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let E=v.program;i.uniformBlockBinding(b,E)}function c(b,v){let E=s[b.id];E===void 0&&(g(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",p));let D=v.program;i.updateUBOMapping(b,D);let R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){let v=u();b.__bindingPointIndex=v;let E=n.createBuffer(),D=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],E=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,T=E.length;R<T;R++){let L=Array.isArray(E[R])?E[R]:[E[R]];for(let Y=0,_=L.length;Y<_;Y++){let M=L[Y];if(d(M,R,Y,D)===!0){let k=M.__offset,F=Array.isArray(M.value)?M.value:[M.value],G=0;for(let at=0;at<F.length;at++){let W=F[at],ut=x(W);typeof W=="number"||typeof W=="boolean"?(M.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+G,M.__data)):W.isMatrix3?(M.__data[0]=W.elements[0],M.__data[1]=W.elements[1],M.__data[2]=W.elements[2],M.__data[3]=0,M.__data[4]=W.elements[3],M.__data[5]=W.elements[4],M.__data[6]=W.elements[5],M.__data[7]=0,M.__data[8]=W.elements[6],M.__data[9]=W.elements[7],M.__data[10]=W.elements[8],M.__data[11]=0):(W.toArray(M.__data,G),G+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,v,E,D){let R=b.value,T=v+"_"+E;if(D[T]===void 0)return typeof R=="number"||typeof R=="boolean"?D[T]=R:D[T]=R.clone(),!0;{let L=D[T];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return D[T]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(b){let v=b.uniforms,E=0,D=16;for(let T=0,L=v.length;T<L;T++){let Y=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,M=Y.length;_<M;_++){let k=Y[_],F=Array.isArray(k.value)?k.value:[k.value];for(let G=0,at=F.length;G<at;G++){let W=F[G],ut=x(W),Z=E%D,_t=Z%ut.boundary,Mt=Z+_t;E+=_t,Mt!==0&&D-Mt<ut.storage&&(E+=D-Mt),k.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=ut.storage}}}let R=E%D;return R>0&&(E+=D-R),b.__size=E,b.__cache={},this}function x(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var wa=class{constructor(t={}){let{canvas:e=N0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Xi,this.toneMappingExposure=1;let v=this,E=!1,D=0,R=0,T=null,L=-1,Y=null,_=new pe,M=new pe,k=null,F=new $t(0),G=0,at=e.width,W=e.height,ut=1,Z=null,_t=null,Mt=new pe(0,0,at,W),bt=new pe(0,0,at,W),ee=!1,oe=new Jr,J=!1,st=!1,Tt=new Yt,gt=new Yt,Ht=new I,zt=new pe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function rt(){return T===null?ut:1}let C=i;function P(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),C===null){let O="webgl2";if(C=P(O,w),C===null)throw P(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let H,z,V,it,tt,S,y,N,j,ot,et,Dt,pt,yt,jt,ht,vt,Bt,Wt,It,le,Kt,we,U;function Ct(){H=new Zx(C),H.init(),Kt=new Ty(C,H),z=new Gx(C,H,t,Kt),V=new Sy(C),z.reverseDepthBuffer&&V.buffers.depth.setReversed(!0),it=new Jx(C),tt=new hy,S=new wy(C,H,V,tt,z,Kt,it),y=new Wx(v),N=new Yx(v),j=new sm(C),we=new zx(C,j),ot=new $x(C,j,it,we),et=new Qx(C,ot,j,it),Wt=new jx(C,z,S),ht=new Vx(tt),Dt=new cy(v,y,N,H,z,we,ht),pt=new Iy(v,tt),yt=new fy,jt=new _y(H),Bt=new kx(v,y,N,V,et,f,l),vt=new My(v,et,z),U=new Ly(C,it,z,V),It=new Hx(C,H,it),le=new Kx(C,H,it),it.programs=Dt.programs,v.capabilities=z,v.extensions=H,v.properties=tt,v.renderLists=yt,v.shadowMap=vt,v.state=V,v.info=it}Ct();let Q=new fh(v,C);this.xr=Q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=H.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=H.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(w){w!==void 0&&(ut=w,this.setSize(at,W,!1))},this.getSize=function(w){return w.set(at,W)},this.setSize=function(w,O,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=w,W=O,e.width=Math.floor(w*ut),e.height=Math.floor(O*ut),X===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(at*ut,W*ut).floor()},this.setDrawingBufferSize=function(w,O,X){at=w,W=O,ut=X,e.width=Math.floor(w*X),e.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,O,X,q){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,O,X,q),V.viewport(_.copy(Mt).multiplyScalar(ut).round())},this.getScissor=function(w){return w.copy(bt)},this.setScissor=function(w,O,X,q){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,O,X,q),V.scissor(M.copy(bt).multiplyScalar(ut).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){V.setScissorTest(ee=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(w=!0,O=!0,X=!0){let q=0;if(w){let B=!1;if(T!==null){let dt=T.texture.format;B=dt===Xh||dt===Wh||dt===Vh}if(B){let dt=T.texture.type,Et=dt===Si||dt===xs||dt===$r||dt===sr||dt===zh||dt===Hh,Ut=Bt.getClearColor(),Nt=Bt.getClearAlpha(),Xt=Ut.r,qt=Ut.g,Ot=Ut.b;Et?(d[0]=Xt,d[1]=qt,d[2]=Ot,d[3]=Nt,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=Xt,g[1]=qt,g[2]=Ot,g[3]=Nt,C.clearBufferiv(C.COLOR,0,g))}else q|=C.COLOR_BUFFER_BIT}O&&(q|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),yt.dispose(),jt.dispose(),tt.dispose(),y.dispose(),N.dispose(),et.dispose(),we.dispose(),U.dispose(),Dt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Iu),Q.removeEventListener("sessionend",Lu),rs.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=it.autoReset,O=vt.enabled,X=vt.autoUpdate,q=vt.needsUpdate,B=vt.type;Ct(),it.autoReset=w,vt.enabled=O,vt.autoUpdate=X,vt.needsUpdate=q,vt.type=B}function Pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let O=w.target;O.removeEventListener("dispose",ce),Ve(O)}function Ve(w){yn(w),tt.remove(w)}function yn(w){let O=tt.get(w).programs;O!==void 0&&(O.forEach(function(X){Dt.releaseProgram(X)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,q,B,dt){O===null&&(O=Zt);let Et=B.isMesh&&B.matrixWorld.determinant()<0,Ut=Vp(w,O,X,q,B);V.setMaterial(q,Et);let Nt=X.index,Xt=1;if(q.wireframe===!0){if(Nt=ot.getWireframeAttribute(X),Nt===void 0)return;Xt=2}let qt=X.drawRange,Ot=X.attributes.position,Me=qt.start*Xt,Re=(qt.start+qt.count)*Xt;dt!==null&&(Me=Math.max(Me,dt.start*Xt),Re=Math.min(Re,(dt.start+dt.count)*Xt)),Nt!==null?(Me=Math.max(Me,0),Re=Math.min(Re,Nt.count)):Ot!=null&&(Me=Math.max(Me,0),Re=Math.min(Re,Ot.count));let Be=Re-Me;if(Be<0||Be===1/0)return;we.setup(B,q,Ut,X,Nt);let Cn,_e=It;if(Nt!==null&&(Cn=j.get(Nt),_e=le,_e.setIndex(Cn)),B.isMesh)q.wireframe===!0?(V.setLineWidth(q.wireframeLinewidth*rt()),_e.setMode(C.LINES)):_e.setMode(C.TRIANGLES);else if(B.isLine){let Ft=q.linewidth;Ft===void 0&&(Ft=1),V.setLineWidth(Ft*rt()),B.isLineSegments?_e.setMode(C.LINES):B.isLineLoop?_e.setMode(C.LINE_LOOP):_e.setMode(C.LINE_STRIP)}else B.isPoints?_e.setMode(C.POINTS):B.isSprite&&_e.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)_e.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))_e.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ft=B._multiDrawStarts,nn=B._multiDrawCounts,ye=B._multiDrawCount,Xn=Nt?j.get(Nt).bytesPerElement:1,Ps=tt.get(q).currentProgram.getUniforms();for(let Pn=0;Pn<ye;Pn++)Ps.setValue(C,"_gl_DrawID",Pn),_e.render(Ft[Pn]/Xn,nn[Pn])}else if(B.isInstancedMesh)_e.renderInstances(Me,Be,B.count);else if(X.isInstancedBufferGeometry){let Ft=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,nn=Math.min(X.instanceCount,Ft);_e.renderInstances(Me,Be,nn)}else _e.render(Me,Be)};function de(w,O,X){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=Qe,w.needsUpdate=!0,wo(w,O,X),w.side=Yi,w.needsUpdate=!0,wo(w,O,X),w.side=dn):wo(w,O,X)}this.compile=function(w,O,X=null){X===null&&(X=w),p=jt.get(X),p.init(O),b.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==X&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let q=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let dt=B.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){let Ut=dt[Et];de(Ut,X,B),q.add(Ut)}else de(dt,X,B),q.add(dt)}),b.pop(),p=null,q},this.compileAsync=function(w,O,X=null){let q=this.compile(w,O,X);return new Promise(B=>{function dt(){if(q.forEach(function(Et){tt.get(Et).currentProgram.isReady()&&q.delete(Et)}),q.size===0){B(w);return}setTimeout(dt,10)}H.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let vn=null;function pi(w){vn&&vn(w)}function Iu(){rs.stop()}function Lu(){rs.start()}let rs=new xd;rs.setAnimationLoop(pi),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(w){vn=w,Q.setAnimationLoop(w),w===null?rs.stop():rs.start()},Q.addEventListener("sessionstart",Iu),Q.addEventListener("sessionend",Lu),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,T),p=jt.get(w,b.length),p.init(O),b.push(p),gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),oe.setFromProjectionMatrix(gt),st=this.localClippingEnabled,J=ht.init(this.clippingPlanes,st),x=yt.get(w,m.length),x.init(),m.push(x),Q.enabled===!0&&Q.isPresenting===!0){let dt=v.xr.getDepthSensingMesh();dt!==null&&bl(dt,O,-1/0,v.sortObjects)}bl(w,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Z,_t),Jt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Jt&&Bt.addToRenderList(x,w),this.info.render.frame++,J===!0&&ht.beginShadows();let X=p.state.shadowsArray;vt.render(X,w,O),J===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=x.opaque,B=x.transmissive;if(p.setupLights(),O.isArrayCamera){let dt=O.cameras;if(B.length>0)for(let Et=0,Ut=dt.length;Et<Ut;Et++){let Nt=dt[Et];Uu(q,B,w,Nt)}Jt&&Bt.render(w);for(let Et=0,Ut=dt.length;Et<Ut;Et++){let Nt=dt[Et];Du(x,w,Nt,Nt.viewport)}}else B.length>0&&Uu(q,B,w,O),Jt&&Bt.render(w),Du(x,w,O);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,O),we.resetDefaultState(),L=-1,Y=null,b.pop(),b.length>0?(p=b[b.length-1],J===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function bl(w,O,X,q){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){q&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);let Et=et.update(w),Ut=w.material;Ut.visible&&x.push(w,Et,Ut,X,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){let Et=et.update(w),Ut=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(Ut)){let Nt=Et.groups;for(let Xt=0,qt=Nt.length;Xt<qt;Xt++){let Ot=Nt[Xt],Me=Ut[Ot.materialIndex];Me&&Me.visible&&x.push(w,Et,Me,X,zt.z,Ot)}}else Ut.visible&&x.push(w,Et,Ut,X,zt.z,null)}}let dt=w.children;for(let Et=0,Ut=dt.length;Et<Ut;Et++)bl(dt[Et],O,X,q)}function Du(w,O,X,q){let B=w.opaque,dt=w.transmissive,Et=w.transparent;p.setupLightsView(X),J===!0&&ht.setGlobalState(v.clippingPlanes,X),q&&V.viewport(_.copy(q)),B.length>0&&Eo(B,O,X),dt.length>0&&Eo(dt,O,X),Et.length>0&&Eo(Et,O,X),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Uu(w,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ei(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?ao:Si,minFilter:gs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let dt=p.state.transmissionRenderTarget[q.id],Et=q.viewport||_;dt.setSize(Et.z,Et.w);let Ut=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&Bt.render(X);let Nt=v.toneMapping;v.toneMapping=Xi;let Xt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),J===!0&&ht.setGlobalState(v.clippingPlanes,q),Eo(w,X,q),S.updateMultisampleRenderTarget(dt),S.updateRenderTargetMipmap(dt),H.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ot=0,Me=O.length;Ot<Me;Ot++){let Re=O[Ot],Be=Re.object,Cn=Re.geometry,_e=Re.material,Ft=Re.group;if(_e.side===dn&&Be.layers.test(q.layers)){let nn=_e.side;_e.side=Qe,_e.needsUpdate=!0,Nu(Be,X,q,Cn,_e,Ft),_e.side=nn,_e.needsUpdate=!0,qt=!0}}qt===!0&&(S.updateMultisampleRenderTarget(dt),S.updateRenderTargetMipmap(dt))}v.setRenderTarget(Ut),v.setClearColor(F,G),Xt!==void 0&&(q.viewport=Xt),v.toneMapping=Nt}function Eo(w,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,dt=w.length;B<dt;B++){let Et=w[B],Ut=Et.object,Nt=Et.geometry,Xt=q===null?Et.material:q,qt=Et.group;Ut.layers.test(X.layers)&&Nu(Ut,O,X,Nt,Xt,qt)}}function Nu(w,O,X,q,B,dt){w.onBeforeRender(v,O,X,q,B,dt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,O,X,q,w,dt),B.transparent===!0&&B.side===dn&&B.forceSinglePass===!1?(B.side=Qe,B.needsUpdate=!0,v.renderBufferDirect(X,O,q,B,w,dt),B.side=Yi,B.needsUpdate=!0,v.renderBufferDirect(X,O,q,B,w,dt),B.side=dn):v.renderBufferDirect(X,O,q,B,w,dt),w.onAfterRender(v,O,X,q,B,dt)}function wo(w,O,X){O.isScene!==!0&&(O=Zt);let q=tt.get(w),B=p.state.lights,dt=p.state.shadowsArray,Et=B.state.version,Ut=Dt.getParameters(w,B.state,dt,O,X),Nt=Dt.getProgramCacheKey(Ut),Xt=q.programs;q.environment=w.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(w.isMeshStandardMaterial?N:y).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",ce),Xt=new Map,q.programs=Xt);let qt=Xt.get(Nt);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===Et)return Fu(w,Ut),qt}else Ut.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Ut,v),qt=Dt.acquireProgram(Ut,Nt),Xt.set(Nt,qt),q.uniforms=Ut.uniforms;let Ot=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=ht.uniform),Fu(w,Ut),q.needsLights=Xp(w),q.lightsStateVersion=Et,q.needsLights&&(Ot.ambientLightColor.value=B.state.ambient,Ot.lightProbe.value=B.state.probe,Ot.directionalLights.value=B.state.directional,Ot.directionalLightShadows.value=B.state.directionalShadow,Ot.spotLights.value=B.state.spot,Ot.spotLightShadows.value=B.state.spotShadow,Ot.rectAreaLights.value=B.state.rectArea,Ot.ltc_1.value=B.state.rectAreaLTC1,Ot.ltc_2.value=B.state.rectAreaLTC2,Ot.pointLights.value=B.state.point,Ot.pointLightShadows.value=B.state.pointShadow,Ot.hemisphereLights.value=B.state.hemi,Ot.directionalShadowMap.value=B.state.directionalShadowMap,Ot.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ot.spotShadowMap.value=B.state.spotShadowMap,Ot.spotLightMatrix.value=B.state.spotLightMatrix,Ot.spotLightMap.value=B.state.spotLightMap,Ot.pointShadowMap.value=B.state.pointShadowMap,Ot.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function Ou(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=tr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Fu(w,O){let X=tt.get(w);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Vp(w,O,X,q,B){O.isScene!==!0&&(O=Zt),S.resetTextureUnits();let dt=O.fog,Et=q.isMeshStandardMaterial?O.environment:null,Ut=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ji,Nt=(q.isMeshStandardMaterial?N:y).get(q.envMap||Et),Xt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!X.morphAttributes.position,Me=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color,Be=Xi;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Be=v.toneMapping);let Cn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=Cn!==void 0?Cn.length:0,Ft=tt.get(q),nn=p.state.lights;if(J===!0&&(st===!0||w!==Y)){let On=w===Y&&q.id===L;ht.setState(q,w,On)}let ye=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==nn.state.version||Ft.outputColorSpace!==Ut||B.isBatchedMesh&&Ft.batching===!1||!B.isBatchedMesh&&Ft.batching===!0||B.isBatchedMesh&&Ft.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ft.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ft.instancing===!1||!B.isInstancedMesh&&Ft.instancing===!0||B.isSkinnedMesh&&Ft.skinning===!1||!B.isSkinnedMesh&&Ft.skinning===!0||B.isInstancedMesh&&Ft.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ft.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ft.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ft.instancingMorph===!1&&B.morphTexture!==null||Ft.envMap!==Nt||q.fog===!0&&Ft.fog!==dt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==qt||Ft.morphTargets!==Ot||Ft.morphNormals!==Me||Ft.morphColors!==Re||Ft.toneMapping!==Be||Ft.morphTargetsCount!==_e)&&(ye=!0):(ye=!0,Ft.__version=q.version);let Xn=Ft.currentProgram;ye===!0&&(Xn=wo(q,O,B));let Ps=!1,Pn=!1,Sl=!1,ze=Xn.getUniforms(),Ui=Ft.uniforms;if(V.useProgram(Xn.program)&&(Ps=!0,Pn=!0,Sl=!0),q.id!==L&&(L=q.id,Pn=!0),Ps||Y!==w){z.reverseDepthBuffer?(Tt.copy(w.projectionMatrix),F0(Tt),B0(Tt),ze.setValue(C,"projectionMatrix",Tt)):ze.setValue(C,"projectionMatrix",w.projectionMatrix),ze.setValue(C,"viewMatrix",w.matrixWorldInverse);let On=ze.map.cameraPosition;On!==void 0&&On.setValue(C,Ht.setFromMatrixPosition(w.matrixWorld)),z.logarithmicDepthBuffer&&ze.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ze.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Pn=!0,Sl=!0)}if(B.isSkinnedMesh){ze.setOptional(C,B,"bindMatrix"),ze.setOptional(C,B,"bindMatrixInverse");let On=B.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),ze.setValue(C,"boneTexture",On.boneTexture,S))}B.isBatchedMesh&&(ze.setOptional(C,B,"batchingTexture"),ze.setValue(C,"batchingTexture",B._matricesTexture,S),ze.setOptional(C,B,"batchingIdTexture"),ze.setValue(C,"batchingIdTexture",B._indirectTexture,S),ze.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&ze.setValue(C,"batchingColorTexture",B._colorsTexture,S));let El=X.morphAttributes;if((El.position!==void 0||El.normal!==void 0||El.color!==void 0)&&Wt.update(B,X,Xn),(Pn||Ft.receiveShadow!==B.receiveShadow)&&(Ft.receiveShadow=B.receiveShadow,ze.setValue(C,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ui.envMap.value=Nt,Ui.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Ui.envMapIntensity.value=O.environmentIntensity),Pn&&(ze.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Wp(Ui,Sl),dt&&q.fog===!0&&pt.refreshFogUniforms(Ui,dt),pt.refreshMaterialUniforms(Ui,q,ut,W,p.state.transmissionRenderTarget[w.id]),tr.upload(C,Ou(Ft),Ui,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(tr.upload(C,Ou(Ft),Ui,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ze.setValue(C,"center",B.center),ze.setValue(C,"modelViewMatrix",B.modelViewMatrix),ze.setValue(C,"normalMatrix",B.normalMatrix),ze.setValue(C,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let On=q.uniformsGroups;for(let wl=0,qp=On.length;wl<qp;wl++){let Bu=On[wl];U.update(Bu,Xn),U.bind(Bu,Xn)}}return Xn}function Wp(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Xp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,O,X){tt.get(w.texture).__webglTexture=O,tt.get(w.depthTexture).__webglTexture=X;let q=tt.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let X=tt.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,X=0){T=w,D=O,R=X;let q=!0,B=null,dt=!1,Et=!1;if(w){let Nt=tt.get(w);if(Nt.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Nt.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(Nt.__hasExternalTextures)S.rebindTextures(w,tt.get(w.texture).__webglTexture,tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ot=w.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&tt.has(Ot)&&(w.width!==Ot.image.width||w.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}let Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Et=!0);let qt=tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[O])?B=qt[O][X]:B=qt[O],dt=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?B=tt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?B=qt[X]:B=qt,_.copy(w.viewport),M.copy(w.scissor),k=w.scissorTest}else _.copy(Mt).multiplyScalar(ut).floor(),M.copy(bt).multiplyScalar(ut).floor(),k=ee;if(V.bindFramebuffer(C.FRAMEBUFFER,B)&&q&&V.drawBuffers(w,B),V.viewport(_),V.scissor(M),V.setScissorTest(k),dt){let Nt=tt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Nt.__webglTexture,X)}else if(Et){let Nt=tt.get(w.texture),Xt=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Nt.__webglTexture,X||0,Xt)}L=-1},this.readRenderTargetPixels=function(w,O,X,q,B,dt,Et){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){V.bindFramebuffer(C.FRAMEBUFFER,Ut);try{let Nt=w.texture,Xt=Nt.format,qt=Nt.type;if(!z.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-q&&X>=0&&X<=w.height-B&&C.readPixels(O,X,q,B,Kt.convert(Xt),Kt.convert(qt),dt)}finally{let Nt=T!==null?tt.get(T).__webglFramebuffer:null;V.bindFramebuffer(C.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,O,X,q,B,dt,Et){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){let Nt=w.texture,Xt=Nt.format,qt=Nt.type;if(!z.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-q&&X>=0&&X<=w.height-B){V.bindFramebuffer(C.FRAMEBUFFER,Ut);let Ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.bufferData(C.PIXEL_PACK_BUFFER,dt.byteLength,C.STREAM_READ),C.readPixels(O,X,q,B,Kt.convert(Xt),Kt.convert(qt),0);let Me=T!==null?tt.get(T).__webglFramebuffer:null;V.bindFramebuffer(C.FRAMEBUFFER,Me);let Re=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await O0(C,Re,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,dt),C.deleteBuffer(Ot),C.deleteSync(Re),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,X=0){w.isTexture!==!0&&(ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-X),B=Math.floor(w.image.width*q),dt=Math.floor(w.image.height*q),Et=O!==null?O.x:0,Ut=O!==null?O.y:0;S.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Et,Ut,B,dt),V.unbindTexture()},this.copyTextureToTexture=function(w,O,X=null,q=null,B=0){w.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let dt,Et,Ut,Nt,Xt,qt;X!==null?(dt=X.max.x-X.min.x,Et=X.max.y-X.min.y,Ut=X.min.x,Nt=X.min.y):(dt=w.image.width,Et=w.image.height,Ut=0,Nt=0),q!==null?(Xt=q.x,qt=q.y):(Xt=0,qt=0);let Ot=Kt.convert(O.format),Me=Kt.convert(O.type);S.setTexture2D(O,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let Re=C.getParameter(C.UNPACK_ROW_LENGTH),Be=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Cn=C.getParameter(C.UNPACK_SKIP_PIXELS),_e=C.getParameter(C.UNPACK_SKIP_ROWS),Ft=C.getParameter(C.UNPACK_SKIP_IMAGES),nn=w.isCompressedTexture?w.mipmaps[B]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,nn.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nn.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,B,Xt,qt,dt,Et,Ot,Me,nn.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,B,Xt,qt,nn.width,nn.height,Ot,nn.data):C.texSubImage2D(C.TEXTURE_2D,B,Xt,qt,dt,Et,Ot,Me,nn),C.pixelStorei(C.UNPACK_ROW_LENGTH,Re),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Be),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Cn),C.pixelStorei(C.UNPACK_SKIP_ROWS,_e),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ft),B===0&&O.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(w,O,X=null,q=null,B=0){w.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0);let dt,Et,Ut,Nt,Xt,qt,Ot,Me,Re,Be=w.isCompressedTexture?w.mipmaps[B]:w.image;X!==null?(dt=X.max.x-X.min.x,Et=X.max.y-X.min.y,Ut=X.max.z-X.min.z,Nt=X.min.x,Xt=X.min.y,qt=X.min.z):(dt=Be.width,Et=Be.height,Ut=Be.depth,Nt=0,Xt=0,qt=0),q!==null?(Ot=q.x,Me=q.y,Re=q.z):(Ot=0,Me=0,Re=0);let Cn=Kt.convert(O.format),_e=Kt.convert(O.type),Ft;if(O.isData3DTexture)S.setTexture3D(O,0),Ft=C.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)S.setTexture2DArray(O,0),Ft=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let nn=C.getParameter(C.UNPACK_ROW_LENGTH),ye=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ps=C.getParameter(C.UNPACK_SKIP_ROWS),Pn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Be.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Be.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Ft,B,Ot,Me,Re,dt,Et,Ut,Cn,_e,Be.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Ft,B,Ot,Me,Re,dt,Et,Ut,Cn,Be.data):C.texSubImage3D(Ft,B,Ot,Me,Re,dt,Et,Ut,Cn,_e,Be),C.pixelStorei(C.UNPACK_ROW_LENGTH,nn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ye),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ps),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pn),B===0&&O.generateMipmaps&&C.generateMipmap(Ft),V.unbindTexture()},this.initRenderTarget=function(w){tt.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),V.unbindTexture()},this.resetState=function(){D=0,R=0,T=null,V.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===qh?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===Ga?"display-p3":"srgb"}},Ta=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _s=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Aa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new I,jr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cn=class extends wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xs,Br=new I,qs=new I,Ys=new I,Zs=new ft,kr=new ft,bd=new Yt,Yo=new I,zr=new I,Zo=new I,Nf=new ft,ic=new ft,Of=new ft,rn=class extends Ie{constructor(t=new cn){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new He;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Aa(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new jr(i,3,0,!1)),Xs.setAttribute("uv",new jr(i,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),bd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;$o(Yo.set(-.5,-.5,0),Ys,o,qs,s,r),$o(zr.set(.5,-.5,0),Ys,o,qs,s,r),$o(Zo.set(.5,.5,0),Ys,o,qs,s,r),Nf.set(0,0),ic.set(1,0),Of.set(1,1);let a=t.ray.intersectTriangle(Yo,zr,Zo,!1,Br);if(a===null&&($o(zr.set(-.5,.5,0),Ys,o,qs,s,r),ic.set(0,1),a=t.ray.intersectTriangle(Yo,Zo,zr,!1,Br),a===null))return;let l=t.ray.origin.distanceTo(Br);l<t.near||l>t.far||e.push({distance:l,point:Br.clone(),uv:Gi.getInterpolation(Br,Yo,zr,Zo,Nf,ic,Of,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $o(n,t,e,i,s,r){Zs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(kr.x=r*Zs.x-s*Zs.y,kr.y=s*Zs.x+r*Zs.y):kr.copy(Zs),n.copy(t),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(bd)}var Ff=new I,Bf=new pe,kf=new pe,Dy=new I,zf=new Yt,Ko=new I,sc=new zn,Hf=new Yt,rc=new Kr,Ra=class extends nt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ko),this.boundingSphere.expandByPoint(Ko)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(s),t.ray.intersectsSphere(sc)!==!1&&(Hf.copy(s).invert(),rc.copy(t.ray).applyMatrix4(Hf),!(this.boundingBox!==null&&rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,rc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new pe,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===b0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;Bf.fromBufferAttribute(s.attributes.skinIndex,t),kf.fromBufferAttribute(s.attributes.skinWeight,t),Ff.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=kf.getComponent(r);if(o!==0){let a=Bf.getComponent(r);zf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Dy.copy(Ff).applyMatrix4(zf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},dh=class extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ca=class extends Sn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=bn,h=bn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gf=new Yt,Uy=new Yt,Pa=class n{constructor(t=[],e=[]){this.uuid=ri(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Yt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Uy;Gf.multiplyMatrices(a,e[r]),Gf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Ca(e,t,t,Bn,Kn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let r=t.bones[i],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new dh),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=i[s];t.boneInverses.push(a.toArray())}return t}},Qr=class extends Pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new Yt,Vf=new Yt,Jo=[],Wf=new oi,Ny=new Yt,Hr=new nt,Gr=new zn,Ia=class extends nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ny)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Wf.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Wf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Gr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(i),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Vf.multiplyMatrices(i,$s),Hr.matrixWorld=Vf,Hr.raycast(t,Jo);for(let o=0,a=Jo.length;o<a;o++){let l=Jo[o];l.instanceId=r,l.object=this,e.push(l)}Jo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ca(new Float32Array(s*this.count),s,this.count,Gh,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var to=class extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xf=new Yt,ph=new Kr,jo=new zn,Qo=new I,La=class extends Ie{constructor(t=new He,e=new to){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,t.ray.intersectsSphere(jo)===!1)return;Xf.copy(s).invert(),ph.copy(t.ray).applyMatrix4(Xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);Qo.fromBufferAttribute(u,p),qf(Qo,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Qo.fromBufferAttribute(u,g),qf(Qo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qf(n,t,e,i,s,r,o){let a=ph.distanceSqToPoint(n);if(a<e){let l=new I;ph.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Da=class extends Sn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new I,s=[],r=[],o=[],a=new I,l=new Yt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(sn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(sn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},eo=class extends Hn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},mh=class extends eo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ta=new I,oc=new Zh,ac=new Zh,lc=new Zh,gh=class extends Hn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ta.subVectors(s[0],s[1]).add(s[0]),c=ta);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),oc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),ac.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),lc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ac.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),lc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(oc.calc(l),ac.calc(l),lc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Oy(n,t){let e=1-n;return e*e*t}function Fy(n,t){return 2*(1-n)*n*t}function By(n,t){return n*n*t}function qr(n,t,e,i){return Oy(n,t)+Fy(n,e)+By(n,i)}function ky(n,t){let e=1-n;return e*e*e*t}function zy(n,t){let e=1-n;return 3*e*e*n*t}function Hy(n,t){return 3*(1-n)*n*n*t}function Gy(n,t){return n*n*n*t}function Yr(n,t,e,i,s){return ky(n,t)+zy(n,e)+Hy(n,i)+Gy(n,s)}var Ua=class extends Hn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xh=class extends Hn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y),Yr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends Hn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_h=class extends Hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends Hn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yh=class extends Hn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y),qr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Yf(a,l.x,c.x,h.x,u.x),Yf(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},vh=Object.freeze({__proto__:null,ArcCurve:mh,CatmullRomCurve3:gh,CubicBezierCurve:Ua,CubicBezierCurve3:xh,EllipseCurve:eo,LineCurve:Na,LineCurve3:_h,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:yh,SplineCurve:Fa}),Mh=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new vh[s.type]().fromJSON(s))}return this}},no=class extends Mh{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Na(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Oa(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ua(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Fa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new eo(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bh=class n extends He{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=sn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new ft,d=new I,g=new I,x=new I,p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=e;b++){let v=i+b*h*s,E=Math.sin(v),D=Math.cos(v);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*E,u.y=t[R].y,u.z=t[R].x*D,o.push(u.x,u.y,u.z),f.x=b/e,f.y=R/(t.length-1),a.push(f.x,f.y);let T=l[3*R+0]*E,L=l[3*R+1],Y=l[3*R+0]*D;c.push(T,L,Y)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){let E=v+b*t.length,D=E,R=E+t.length,T=E+t.length+1,L=E+1;r.push(D,R,L),r.push(T,L,R)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Jn=class n extends bh{constructor(t=1,e=1,i=4,s=8){let r=new no;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},$i=class n extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mn=class n extends He{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=i/2,m=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function b(){let E=new I,D=new I,R=0,T=(e-t)/i;for(let L=0;L<=r;L++){let Y=[],_=L/r,M=_*(e-t)+t;for(let k=0;k<=s;k++){let F=k/s,G=F*l+a,at=Math.sin(G),W=Math.cos(G);D.x=M*at,D.y=-_*i+p,D.z=M*W,u.push(D.x,D.y,D.z),E.set(at,T,W).normalize(),f.push(E.x,E.y,E.z),d.push(F,1-_),Y.push(g++)}x.push(Y)}for(let L=0;L<s;L++)for(let Y=0;Y<r;Y++){let _=x[Y][L],M=x[Y+1][L],k=x[Y+1][L+1],F=x[Y][L+1];t>0&&(h.push(_,M,F),R+=3),e>0&&(h.push(M,k,F),R+=3)}c.addGroup(m,R,0),m+=R}function v(E){let D=g,R=new ft,T=new I,L=0,Y=E===!0?t:e,_=E===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;let M=g;for(let k=0;k<=s;k++){let G=k/s*l+a,at=Math.cos(G),W=Math.sin(G);T.x=Y*W,T.y=p*_,T.z=Y*at,u.push(T.x,T.y,T.z),f.push(0,_,0),R.x=at*.5+.5,R.y=W*.5*_+.5,d.push(R.x,R.y),g++}for(let k=0;k<s;k++){let F=D+k,G=M+k;E===!0?h.push(G,G+1,F):h.push(G+1,G,F),L+=3}c.addGroup(m,L,E===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ys=class n extends mn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var li=class extends no{constructor(t){super(t),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new no().fromJSON(s))}return this}},Vy={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Sd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=Zy(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return io(r,o,e,a,l,d,0),o}};function Sd(n,t,e,i,s){let r,o;if(s===rv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Zf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Zf(r,n[r],n[r+1],o);return o&&Wa(o,o.next)&&(ro(o),o=o.next),o}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Wa(e,e.next)||Oe(e.prev,e,e.next)===0)){if(ro(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function io(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Qy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Xy(n,i,s,r):Wy(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ro(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=qy(vs(n),t,e),io(n,t,e,i,s,r,2)):o===2&&Yy(n,t,e,i,s,r):io(vs(n),t,e,i,s,r,1);break}}}function Wy(n){let t=n.prev,e=n,i=n.next;if(Oe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Js(s,a,r,l,o,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xy(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Oe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Sh(d,g,t,e,i),b=Sh(x,p,t,e,i),v=n.prevZ,E=n.nextZ;for(;v&&v.z>=m&&E&&E.z<=b;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Js(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Js(a,h,l,u,c,f,E.x,E.y)&&Oe(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Js(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=b;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Js(a,h,l,u,c,f,E.x,E.y)&&Oe(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function qy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Wa(s,r)&&Ed(s,i,i.next,r)&&so(s,r)&&so(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ro(i),ro(i.next),i=n=r),i=i.next}while(i!==n);return vs(i)}function Yy(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nv(o,a)){let l=wd(o,a);o=vs(o,o.next),l=vs(l,l.next),io(o,t,e,i,s,r,0),io(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Zy(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Sd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ev(c));for(s.sort($y),r=0;r<s.length;r++)e=Ky(s[r],e);return e}function $y(n,t){return n.x-t.x}function Ky(n,t){let e=Jy(n,t);if(!e)return t;let i=wd(e,n);return vs(i,i.next),vs(e,e.next)}function Jy(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Js(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),so(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&jy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function jy(n,t){return Oe(n.prev,n,t.prev)<0&&Oe(t.next,n,n.next)<0}function Qy(n,t,e,i){let s=n;do s.z===0&&(s.z=Sh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tv(s)}function tv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Sh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ev(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Js(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function nv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!iv(n,t)&&(so(n,t)&&so(t,n)&&sv(n,t)&&(Oe(n.prev,n,t.prev)||Oe(n,t.prev,t))||Wa(n,t)&&Oe(n.prev,n,n.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Wa(n,t){return n.x===t.x&&n.y===t.y}function Ed(n,t,e,i){let s=na(Oe(n,t,e)),r=na(Oe(n,t,i)),o=na(Oe(e,i,n)),a=na(Oe(e,i,t));return!!(s!==r&&o!==a||s===0&&ea(n,e,t)||r===0&&ea(n,i,t)||o===0&&ea(e,n,i)||a===0&&ea(e,t,i))}function ea(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function na(n){return n>0?1:n<0?-1:0}function iv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ed(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function so(n,t){return Oe(n.prev,n,n.next)<0?Oe(n,t,n.next)>=0&&Oe(n,n.prev,t)>=0:Oe(n,t,n.prev)<0||Oe(n,n.next,t)<0}function sv(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wd(n,t){let e=new Eh(n.i,n.x,n.y),i=new Eh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Zf(n,t,e,i){let s=new Eh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var qi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];$f(t),Kf(i,t);let o=t.length;e.forEach($f);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kf(i,e[l]);let a=Vy.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function $f(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Kf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ms=class n extends He{constructor(t=new li([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:ov,v,E=!1,D,R,T,L;m&&(v=m.getSpacedPoints(h),E=!0,f=!1,D=m.computeFrenetFrames(h,!1),R=new I,T=new I,L=new I),f||(p=0,d=0,g=0,x=0);let Y=a.extractPoints(c),_=Y.shape,M=Y.holes;if(!qi.isClockWise(_)){_=_.reverse();for(let rt=0,C=M.length;rt<C;rt++){let P=M[rt];qi.isClockWise(P)&&(M[rt]=P.reverse())}}let F=qi.triangulateShape(_,M),G=_;for(let rt=0,C=M.length;rt<C;rt++){let P=M[rt];_=_.concat(P)}function at(rt,C,P){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(C,P)}let W=_.length,ut=F.length;function Z(rt,C,P){let H,z,V,it=rt.x-C.x,tt=rt.y-C.y,S=P.x-rt.x,y=P.y-rt.y,N=it*it+tt*tt,j=it*y-tt*S;if(Math.abs(j)>Number.EPSILON){let ot=Math.sqrt(N),et=Math.sqrt(S*S+y*y),Dt=C.x-tt/ot,pt=C.y+it/ot,yt=P.x-y/et,jt=P.y+S/et,ht=((yt-Dt)*y-(jt-pt)*S)/(it*y-tt*S);H=Dt+it*ht-rt.x,z=pt+tt*ht-rt.y;let vt=H*H+z*z;if(vt<=2)return new ft(H,z);V=Math.sqrt(vt/2)}else{let ot=!1;it>Number.EPSILON?S>Number.EPSILON&&(ot=!0):it<-Number.EPSILON?S<-Number.EPSILON&&(ot=!0):Math.sign(tt)===Math.sign(y)&&(ot=!0),ot?(H=-tt,z=it,V=Math.sqrt(N)):(H=it,z=tt,V=Math.sqrt(N/2))}return new ft(H/V,z/V)}let _t=[];for(let rt=0,C=G.length,P=C-1,H=rt+1;rt<C;rt++,P++,H++)P===C&&(P=0),H===C&&(H=0),_t[rt]=Z(G[rt],G[P],G[H]);let Mt=[],bt,ee=_t.concat();for(let rt=0,C=M.length;rt<C;rt++){let P=M[rt];bt=[];for(let H=0,z=P.length,V=z-1,it=H+1;H<z;H++,V++,it++)V===z&&(V=0),it===z&&(it=0),bt[H]=Z(P[H],P[V],P[it]);Mt.push(bt),ee=ee.concat(bt)}for(let rt=0;rt<p;rt++){let C=rt/p,P=d*Math.cos(C*Math.PI/2),H=g*Math.sin(C*Math.PI/2)+x;for(let z=0,V=G.length;z<V;z++){let it=at(G[z],_t[z],H);gt(it.x,it.y,-P)}for(let z=0,V=M.length;z<V;z++){let it=M[z];bt=Mt[z];for(let tt=0,S=it.length;tt<S;tt++){let y=at(it[tt],bt[tt],H);gt(y.x,y.y,-P)}}}let oe=g+x;for(let rt=0;rt<W;rt++){let C=f?at(_[rt],ee[rt],oe):_[rt];E?(T.copy(D.normals[0]).multiplyScalar(C.x),R.copy(D.binormals[0]).multiplyScalar(C.y),L.copy(v[0]).add(T).add(R),gt(L.x,L.y,L.z)):gt(C.x,C.y,0)}for(let rt=1;rt<=h;rt++)for(let C=0;C<W;C++){let P=f?at(_[C],ee[C],oe):_[C];E?(T.copy(D.normals[rt]).multiplyScalar(P.x),R.copy(D.binormals[rt]).multiplyScalar(P.y),L.copy(v[rt]).add(T).add(R),gt(L.x,L.y,L.z)):gt(P.x,P.y,u/h*rt)}for(let rt=p-1;rt>=0;rt--){let C=rt/p,P=d*Math.cos(C*Math.PI/2),H=g*Math.sin(C*Math.PI/2)+x;for(let z=0,V=G.length;z<V;z++){let it=at(G[z],_t[z],H);gt(it.x,it.y,u+P)}for(let z=0,V=M.length;z<V;z++){let it=M[z];bt=Mt[z];for(let tt=0,S=it.length;tt<S;tt++){let y=at(it[tt],bt[tt],H);E?gt(y.x,y.y+v[h-1].y,v[h-1].x+P):gt(y.x,y.y,u+P)}}}J(),st();function J(){let rt=s.length/3;if(f){let C=0,P=W*C;for(let H=0;H<ut;H++){let z=F[H];Ht(z[2]+P,z[1]+P,z[0]+P)}C=h+p*2,P=W*C;for(let H=0;H<ut;H++){let z=F[H];Ht(z[0]+P,z[1]+P,z[2]+P)}}else{for(let C=0;C<ut;C++){let P=F[C];Ht(P[2],P[1],P[0])}for(let C=0;C<ut;C++){let P=F[C];Ht(P[0]+W*h,P[1]+W*h,P[2]+W*h)}}i.addGroup(rt,s.length/3-rt,0)}function st(){let rt=s.length/3,C=0;Tt(G,C),C+=G.length;for(let P=0,H=M.length;P<H;P++){let z=M[P];Tt(z,C),C+=z.length}i.addGroup(rt,s.length/3-rt,1)}function Tt(rt,C){let P=rt.length;for(;--P>=0;){let H=P,z=P-1;z<0&&(z=rt.length-1);for(let V=0,it=h+p*2;V<it;V++){let tt=W*V,S=W*(V+1),y=C+H+tt,N=C+z+tt,j=C+z+S,ot=C+H+S;zt(y,N,j,ot)}}}function gt(rt,C,P){l.push(rt),l.push(C),l.push(P)}function Ht(rt,C,P){Zt(rt),Zt(C),Zt(P);let H=s.length/3,z=b.generateTopUV(i,s,H-3,H-2,H-1);Jt(z[0]),Jt(z[1]),Jt(z[2])}function zt(rt,C,P,H){Zt(rt),Zt(C),Zt(H),Zt(C),Zt(P),Zt(H);let z=s.length/3,V=b.generateSideWallUV(i,s,z-6,z-3,z-2,z-1);Jt(V[0]),Jt(V[1]),Jt(V[3]),Jt(V[1]),Jt(V[2]),Jt(V[3])}function Zt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function Jt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return av(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vh[s.type]().fromJSON(s)),new n(i,t.options)}},ov={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-u),new ft(f,1-g),new ft(x,1-m)]:[new ft(a,1-l),new ft(h,1-u),new ft(d,1-g),new ft(p,1-m)]}};function av(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ba=class n extends He{constructor(t=new li([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;qi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let b=g[p];qi.isClockWise(b)===!0&&(g[p]=b.reverse())}let x=qi.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){let b=d[p];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=x.length;p<m;p++){let b=x[p],v=b[0]+u,E=b[1]+u,D=b[2]+u;i.push(v,E,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return lv(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function lv(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ze=class n extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let b=[],v=m/i,E=0;m===0&&o===0?E=.5/e:m===i&&l===Math.PI&&(E=-.5/e);for(let D=0;D<=e;D++){let R=D/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(R+E,1-v),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){let v=h[m][b+1],E=h[m][b],D=h[m+1][b],R=h[m+1][b+1];(m!==0||o>0)&&d.push(v,E,R),(m!==i-1||l<Math.PI)&&d.push(E,D,R)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ki=class n extends He{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,p=d/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(x,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var on=class extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ia(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function cv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var cr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wh=class extends cr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wu:r=t,a=2*e-i;break;case Xu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wu:o=t,l=2*i-e;break;case Xu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,b=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*x+.5*g,E=d*p-d*x;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+b*o[c+D]+v*o[l+D]+E*o[u+D];return r}},Th=class extends cr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ah=class extends cr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},jn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ha:e=this.InterpolantFactoryMethodDiscrete;break;case $c:e=this.InterpolantFactoryMethodLinear;break;case Al:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return $c;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&cv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Al,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=$c;var bs=class extends jn{constructor(t,e,i){super(t,e,i)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=ha;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends jn{};Rh.prototype.ValueTypeName="color";var Ch=class extends jn{};Ch.prototype.ValueTypeName="number";var Ph=class extends cr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)kn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ka=class extends jn{InterpolantFactoryMethodLinear(t){return new Ph(this.times,this.values,this.getValueSize(),t)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends jn{constructor(t,e,i){super(t,e,i)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ha;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends jn{};Ih.prototype.ValueTypeName="vector";var Lh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},hv=new Lh,Dh=class{constructor(t){this.manager=t!==void 0?t:hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ur=class extends hr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},cc=new Yt,Jf=new I,jf=new I,oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Jf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jf),jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jf),e.updateMatrixWorld(),cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Uh=class extends oo{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=ma*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},za=class extends hr{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Uh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Qf=new Yt,Vr=new I,hc=new I,Nh=class extends oo{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vr),hc.copy(i.position),hc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(hc),i.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Qf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qf)}},fr=class extends hr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Oh=class extends oo{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Oh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $h="\\[\\]\\.:\\/",uv=new RegExp("["+$h+"]","g"),Kh="[^"+$h+"]",fv="[^"+$h.replace("\\.","")+"]",dv=/((?:WC+[\/:])*)/.source.replace("WC",Kh),pv=/(WCOD+)?/.source.replace("WCOD",fv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),xv=new RegExp("^"+dv+pv+mv+gv+"$"),_v=["material","materials","bones","map"],Fh=class{constructor(t,e,i){let s=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(t){let e=xv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);_v.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Fh;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Xa=class extends _s{constructor(){super();let t=new Dn;t.deleteAttribute("uv");let e=new on({side:Qe}),i=new on,s=new fr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new nt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new nt(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new nt(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new nt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new nt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new nt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new nt(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new nt(t,mr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new nt(t,mr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new nt(t,mr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new nt(t,mr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new nt(t,mr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new nt(t,mr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function mr(n){let t=new me;return t.color.setScalar(n),t}var K={mx:0,my:0,lx:0,ly:0,fire:!1,aim:!1,sprint:!1,use:!1,gas:0,brake:0,pressed:new Set,device:"kbm",padName:"",sens:1,invertY:!1},gn=new Set,co=n=>K.pressed.add(n),xn=n=>K.pressed.has(n);function Jh(){K.pressed.clear(),K.lx=0,K.ly=0}var Td={KeyR:"reload",KeyF:"use",KeyE:"use",KeyQ:"swap",Digit1:"slot1",Digit2:"slot2",Digit3:"slot3",KeyV:"knife",KeyG:"grenade",KeyC:"view",KeyB:"build",Space:"jump",Escape:"pause",KeyP:"pause",KeyT:"rotate",KeyX:"rotate",Tab:"scores"};function Rd(n,t){addEventListener("keydown",e=>{if(e.repeat&&(e.code==="KeyF"||e.code==="KeyE"))return;gn.add(e.code);let i=Td[e.code];i&&!e.repeat&&co(i),i==="use"&&(K.use=!0),(e.code==="Tab"||e.code==="Space")&&e.preventDefault(),K.device!=="kbm"&&/Key|Digit|Space|Shift/.test(e.code)&&Es("kbm")}),addEventListener("keyup",e=>{gn.delete(e.code),Td[e.code]==="use"&&(K.use=gn.has("KeyF")||gn.has("KeyE"))}),addEventListener("blur",()=>{gn.clear(),K.fire=K.aim=K.use=!1}),n.addEventListener("mousedown",e=>{if(K.device!=="touch"){if(Es("kbm"),document.pointerLockElement!==n){t.canLock()&&n.requestPointerLock?.();return}e.button===0&&(K.fire=!0),e.button===2&&(K.aim=!0)}}),addEventListener("mouseup",e=>{e.button===0&&(K.fire=!1),e.button===2&&(K.aim=!1)}),n.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("mousemove",e=>{document.pointerLockElement===n&&(K.lx+=e.movementX*.0022*K.sens,K.ly+=e.movementY*.0022*K.sens*(K.invertY?-1:1))}),addEventListener("wheel",e=>{document.pointerLockElement===n&&co(e.deltaY>0?"swap":"swapBack")},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==n&&(K.fire=K.aim=!1,t.onUnlock())}),yv(t),addEventListener("gamepadconnected",e=>{K.padName=e.gamepad.id,t.toast((/dualsense|054c|wireless controller|ps5/i.test(e.gamepad.id)?"PS5 controller":"Controller")+" connected")}),addEventListener("gamepaddisconnected",()=>{t.toast("Controller disconnected")})}function Es(n){K.device!==n&&(K.device=n,document.body.dataset.device=n)}function Cd(){K.device==="kbm"&&(K.mx=(gn.has("KeyD")||gn.has("ArrowRight")?1:0)-(gn.has("KeyA")||gn.has("ArrowLeft")?1:0),K.my=(gn.has("KeyW")||gn.has("ArrowUp")?1:0)-(gn.has("KeyS")||gn.has("ArrowDown")?1:0),K.sprint=gn.has("ShiftLeft")||gn.has("ShiftRight"),K.gas=K.my>0?1:0,K.brake=K.my<0?1:0)}var qa=[],Ad=0;function Pd(n){let t=navigator.getGamepads?navigator.getGamepads():[],e=null;for(let g of t)if(g&&g.connected){e=g;break}if(!e)return;let i=g=>e.buttons[g]?e.buttons[g].value>.4||e.buttons[g].pressed:!1,s=g=>e.buttons[g]?e.buttons[g].value:0,r=(g,x=.16)=>Math.abs(g)<x?0:(g-Math.sign(g)*x)/(1-x),o=r(e.axes[0]||0),a=r(e.axes[1]||0),l=r(e.axes[2]||0,.12),c=r(e.axes[3]||0,.12),h=Math.abs(o)+Math.abs(a)+Math.abs(l)+Math.abs(c)>0;for(let g=0;g<16;g++)i(g)&&(h=!0);if(h?(Es("pad"),Ad=0):Ad+=n,K.device!=="pad"){for(let g=0;g<17;g++)qa[g]=i(g);return}K.mx=o,K.my=-a;let u=g=>Math.sign(g)*Math.pow(Math.abs(g),1.8),f=i(6)?.55:1;K.lx+=u(l)*3.4*n*K.sens*f,K.ly+=u(c)*2.4*n*K.sens*f*(K.invertY?-1:1),K.fire=i(7),K.aim=i(6),K.gas=s(7),K.brake=s(6),i(10)&&!qa[10]&&(K.sprintToggle=!K.sprintToggle),Math.hypot(o,a)<.3&&(K.sprintToggle=!1),K.sprint=!!K.sprintToggle,K.use=i(2);let d=(g,x)=>{i(g)&&!qa[g]&&co(x)};d(0,"jump"),d(1,"build"),d(2,"use"),d(2,"reload"),d(3,"swap"),d(5,"knife"),d(4,"grenade"),d(11,"knife"),d(9,"pause"),d(12,"view"),d(13,"rotate"),d(14,"swapBack"),d(15,"swap"),d(8,"scores");for(let g=0;g<17;g++)qa[g]=i(g)}function ho(n,t,e){if(K.device!=="pad")return;let i=navigator.getGamepads?navigator.getGamepads():[];for(let s of i)s&&s.vibrationActuator&&s.vibrationActuator.playEffect?.("dual-rumble",{duration:e,strongMagnitude:n,weakMagnitude:t}).catch?.(()=>{})}function yv(n){let t=document.getElementById("touch"),e=document.getElementById("stick"),i=document.getElementById("knob"),s=null,r=0,o=0,a=new Map,l=()=>Math.min(70,innerHeight*.12),c=f=>{if(K.device!=="touch"&&Es("touch"),!!n.playing())for(let d of f.changedTouches){let g=document.elementFromPoint(d.clientX,d.clientY),x=g&&g.closest&&g.closest("[data-b]");if(x){let p=x.dataset.b;x.classList.add("on"),a.set(d.identifier,{x:d.clientX,y:d.clientY,btn:p,el:x}),p==="fire"?K.fire=!0:p==="aim"?(K.aim=!K.aim,x.classList.toggle("lock",K.aim)):p==="use"?(K.use=!0,co("use")):p==="sprint"?(K.sprintToggle=!K.sprintToggle,x.classList.toggle("lock",K.sprintToggle)):co(p),f.preventDefault();continue}d.clientX<innerWidth*.42&&s===null?(s=d.identifier,r=d.clientX,o=d.clientY,e.style.left=r+"px",e.style.top=o+"px",e.classList.add("on"),i.style.transform="translate(-50%,-50%)"):a.set(d.identifier,{x:d.clientX,y:d.clientY,btn:null}),f.preventDefault()}},h=f=>{for(let d of f.changedTouches){if(d.identifier===s){let x=d.clientX-r,p=d.clientY-o,m=Math.hypot(x,p),b=l();m>b&&(x*=b/m,p*=b/m),K.mx=x/b,K.my=-p/b,K.gas=Math.max(0,K.my),K.brake=Math.max(0,-K.my),i.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${p}px))`,Math.hypot(K.mx,K.my)>.97&&K.my>.8?K.autoSprint=!0:K.my<.5&&(K.autoSprint=!1)}let g=a.get(d.identifier);if(g&&(g.btn===null||g.btn==="fire"||g.btn==="aim")){let x=.0052*K.sens*(K.aim?.6:1);K.lx+=(d.clientX-g.x)*x,K.ly+=(d.clientY-g.y)*x*.85*(K.invertY?-1:1),g.x=d.clientX,g.y=d.clientY}}f.preventDefault()},u=f=>{for(let d of f.changedTouches){d.identifier===s&&(s=null,K.mx=K.my=0,K.gas=K.brake=0,K.autoSprint=!1,e.classList.remove("on"));let g=a.get(d.identifier);g&&(g.btn==="fire"&&(K.fire=!1),g.btn==="use"&&(K.use=!1),g.el&&g.el.classList.remove("on"),a.delete(d.identifier))}};t.addEventListener("touchstart",c,{passive:!1}),t.addEventListener("touchmove",h,{passive:!1}),t.addEventListener("touchend",u),t.addEventListener("touchcancel",u),addEventListener("touchstart",()=>{K.device!=="touch"&&!n.playing()&&Es("touch")},{passive:!0})}function Id(){return K.device==="touch"&&(K.sprintToggle||K.autoSprint)}var Lt=null,Un=null,Ya=null,ji=null,vv=null,Dd=.8;function Ud(){if(Lt){Lt.state==="suspended"&&Lt.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Lt=new n,Un=Lt.createGain(),Un.gain.value=Dd;let t=Lt.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=6,Un.connect(t),t.connect(Lt.destination),Ya=Lt.createBuffer(1,Lt.sampleRate*1.5,Lt.sampleRate);let e=Ya.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;Mv()}function jh(n){Dd=n,Un&&(Un.gain.value=n)}var xe=()=>Lt.currentTime;function Qh(n,t,e,i,s,r=1e-4){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(r,t+e+s)}function Le(n,t,e,i,s,r="lowpass",o=Un,a=1){let l=Lt.createBufferSource();l.buffer=Ya,l.playbackRate.value=a;let c=Lt.createBiquadFilter();c.type=r,c.frequency.value=e,c.Q.value=i;let h=Lt.createGain();return Qh(h,n,.003,s,t),l.connect(c),c.connect(h),h.connect(o),l.start(n,Math.random()),l.stop(n+t+.05),c}function ge(n,t,e,i,s,r="sine",o=Un){let a=Lt.createOscillator();a.type=r,a.frequency.setValueAtTime(t,n),a.frequency.exponentialRampToValueAtTime(Math.max(20,e),n+i);let l=Lt.createGain();Qh(l,n,.005,s,i),a.connect(l),l.connect(o),a.start(n),a.stop(n+i+.05)}function Ld(n){let t=Lt.createStereoPanner?Lt.createStereoPanner():null;return t?(t.pan.value=Math.max(-1,Math.min(1,n)),t.connect(Un),t):Un}var se={shot(n=1,t=.25,e=!1){if(!Lt)return;let i=xe();if(e){ge(i,1800*n,200,.35,.3,"sawtooth"),ge(i,900,80,.4,.25,"square"),Le(i,.2,3e3,2,.2,"bandpass");return}Le(i,.08+t*.25,2600*n,.7,.55+t*.4),Le(i,.05,6e3*n,1,.25,"highpass"),ge(i,160*n,40,.12+t*.25,.5+t*.5,"sine"),Le(i+.02,.4+t,900,.5,.06+t*.06)},dry(){if(!Lt)return;let n=xe();ge(n,1800,1500,.03,.15,"square")},reload(n){if(!Lt)return;let t=xe();Le(t,.05,n?3500:1800,3,.35,"bandpass"),ge(t,n?900:500,300,.05,.12,"square")},hit(n){if(!Lt)return;let t=xe();Le(t,.06,n?2500:1100,1.5,.35,"bandpass"),n&&ge(t,1400,900,.08,.15,"triangle")},hitmarker(){if(!Lt)return;let n=xe();ge(n,2600,2400,.03,.08,"square")},kill(){if(!Lt)return;let n=xe();Le(n,.18,600,1,.3)},knife(){if(!Lt)return;let n=xe();Le(n,.12,4500,2,.35,"bandpass",Un,1.4)},groan(n=0,t=5){if(!Lt)return;let e=xe(),i=Math.min(.35,1.6/(t+1)),s=Ld(n),r=70+Math.random()*70,o=Lt.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(r,e),o.frequency.linearRampToValueAtTime(r*(.6+Math.random()*.5),e+.8);let a=Lt.createBiquadFilter();a.type="bandpass",a.frequency.value=500+Math.random()*400,a.Q.value=3;let l=Lt.createOscillator();l.frequency.value=7+Math.random()*8;let c=Lt.createGain();c.gain.value=18,l.connect(c),c.connect(o.frequency);let h=Lt.createGain();Qh(h,e,.15,i,.9),o.connect(a),a.connect(h),h.connect(s),o.start(e),l.start(e),o.stop(e+1.2),l.stop(e+1.2)},scream(n=0){if(!Lt)return;let t=xe(),e=Ld(n);ge(t,700,300,.6,.2,"sawtooth",e),Le(t,.5,1500,4,.2,"bandpass",e)},plank(){if(!Lt)return;let n=xe();Le(n,.25,700,2,.5,"bandpass"),ge(n,180,90,.15,.25,"triangle")},nail(){if(!Lt)return;let n=xe();ge(n,1600,1200,.05,.3,"square"),Le(n,.08,4e3,3,.3,"bandpass")},hurt(){if(!Lt)return;let n=xe();Le(n,.2,400,1,.6),ge(n,120,60,.25,.4)},buy(){if(!Lt)return;let n=xe();[1046,1318,1568].forEach((t,e)=>ge(n+e*.06,t,t,.18,.18,"triangle")),Le(n,.1,6e3,1,.1,"highpass")},deny(){if(!Lt)return;let n=xe();ge(n,220,180,.2,.2,"square")},door(){if(!Lt)return;let n=xe();Le(n,.8,300,1,.5),ge(n,90,40,.6,.4,"sawtooth")},round(n){if(!Lt)return;let t=xe();(n?[196,233,196,174,196]:[196,247,294,247,220,196]).forEach((i,s)=>{ge(t+s*.32,i,i*.99,.5,.22,"sawtooth"),ge(t+s*.32,i/2,i/2,.55,.18,"triangle")}),Le(t,2.2,120,.5,.15)},box(){if(!Lt)return;let n=xe();[784,659,698,587,659,523,587,494,523,659,784,1046].forEach((e,i)=>ge(n+i*.2,e,e,.22,.12,"triangle"))},boxReveal(){if(!Lt)return;let n=xe();ge(n,523,1046,.4,.2,"triangle"),ge(n+.1,784,1568,.4,.15,"triangle")},teddy(){if(!Lt)return;let n=xe();ge(n,300,80,1.2,.3,"sawtooth")},power(){if(!Lt)return;let n=xe();ge(n,50,300,2,.4,"sawtooth"),Le(n,1.5,800,1,.3),ge(n+1.6,900,900,.3,.2,"square")},perk(){if(!Lt)return;let n=xe();Le(n,.15,2e3,1,.2),[523,659,784,1046].forEach((t,e)=>ge(n+.25+e*.09,t,t,.2,.15,"triangle"))},powerup(n){if(!Lt)return;let t=xe();(n==="nuke"?[200,100,50]:[660,880,1100,1320]).forEach((i,s)=>ge(t+s*.08,i,i,.25,.25,n==="nuke"?"sawtooth":"square")),n==="nuke"&&Le(t,1.6,200,.5,.8)},boom(){if(!Lt)return;let n=xe();Le(n,1.2,380,.4,1),ge(n,90,25,.9,.8)},spike(){if(!Lt)return;let n=xe();Le(n,.12,1500,2,.25,"bandpass")},build(){if(!Lt)return;let n=xe();for(let t=0;t<3;t++)ge(n+t*.09,1500,1100,.05,.25,"square"),Le(n+t*.09,.07,3500,3,.25,"bandpass")},splat(){if(!Lt)return;let n=xe();Le(n,.25,500,1,.5),ge(n,200,60,.2,.3)},toxic(){if(!Lt)return;let n=xe();Le(n,.6,900,1,.5),ge(n,300,60,.5,.3,"square")},heartbeat(){if(!Lt)return;let n=xe();ge(n,60,40,.12,.6),ge(n+.2,55,40,.12,.45)},carDoor(){if(!Lt)return;let n=xe();Le(n,.12,600,1,.5),ge(n,140,80,.1,.3,"square")},crash(n){if(!Lt)return;let t=xe();Le(t,.4,500,.6,Math.min(1,n*.08))}};function Ti(n,t=0){if(!Lt)return;if(n&&!ji){let s=Lt.createOscillator();s.type="sawtooth";let r=Lt.createOscillator();r.type="square";let o=Lt.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let a=Lt.createGain();a.gain.value=1e-4,s.connect(o),r.connect(o),o.connect(a),a.connect(Un),s.start(),r.start(),ji={o:s,o2:r,f:o,g:a}}if(!ji)return;let e=xe();if(!n){ji.g.gain.setTargetAtTime(1e-4,e,.1);return}let i=34+t*70;ji.o.frequency.setTargetAtTime(i,e,.05),ji.o2.frequency.setTargetAtTime(i*.5,e,.05),ji.f.frequency.setTargetAtTime(380+t*900,e,.05),ji.g.gain.setTargetAtTime(.12+t*.1,e,.05)}function Mv(){let n=Lt.createBufferSource();n.buffer=Ya,n.loop=!0;let t=Lt.createBiquadFilter();t.type="lowpass",t.frequency.value=260;let e=Lt.createGain();e.gain.value=.05,n.connect(t),t.connect(e),e.connect(Un),n.start();let i=Lt.createOscillator();i.frequency.value=55;let s=Lt.createGain();s.gain.value=.02;let r=Lt.createOscillator();r.frequency.value=.07;let o=Lt.createGain();o.gain.value=.015,r.connect(o),o.connect(s.gain),i.connect(s),s.connect(Un),i.start(),r.start(),vv={g:e,og:s}}var he=new Uint8Array(1760),Ri=new Int8Array(1760).fill(-1),Gn=new Int16Array(1760).fill(-1),ne=(n,t)=>t*44+n,Qn=(n,t)=>n>=0&&t>=0&&n<44&&t<40,Ai=(n,t)=>Qn(n,t)?he[ne(n,t)]:5,Fe=n=>Math.floor(n/2),Vt=n=>n*2+2/2,Ci=[],_n=[],Za=[],uo=new Set([0]);function tu(n,t,e,i,s,r,o){Za.push({name:n,z:t,i0:e,j0:i,i1:s,j1:r,floorKind:o});for(let a=i-1;a<=r+1;a++)for(let l=e-1;l<=s+1;l++){let c=ne(l,a);l>=e&&l<=s&&a>=i&&a<=r?(he[c]=1,Ri[c]=t):he[c]===0&&(he[c]=2)}}function eu(n,t,e,i){let s=Ci.length,r=n.length>1&&n[0][1]===n[1][1]?"x":"z";Ci.push({id:s,tiles:n,cost:t,zone:e,open:!1,label:i,axis:r});for(let[o,a]of n)he[ne(o,a)]=4,Gn[ne(o,a)]=s}function nu(n,t){let e=_n.length,i=Ai(n-1,t)===2||Ai(n+1,t)===2?"x":"z",s=i==="x"?Ai(n,t+1)===0?[0,1]:[0,-1]:Ai(n+1,t)===0?[1,0]:[-1,0];_n.push({id:e,i:n,j:t,planks:6,axis:i,outDir:s,rip:0}),he[ne(n,t)]=3,Gn[ne(n,t)]=e}function fo(n,t){Qn(n,t)&&(he[ne(n,t)]=6)}function ru(){he.fill(0),Ri.fill(-1),Gn.fill(-1),Ci.length=0,_n.length=0,Za.length=0,uo.clear(),uo.add(0);for(let n=0;n<40;n++)for(let t=0;t<44;t++){let e=ne(t,n);t===0||n===0||t===43||n===39?he[e]=5:Ri[e]=1}tu("Lobby",0,17,22,26,29,"carpet"),tu("Diner",2,28,22,37,29,"checker"),tu("Garage",3,6,6,15,13,"concrete"),eu([[21,21],[22,21]],750,1,"Parking Lot"),eu([[27,25],[27,26]],1e3,2,"Diner"),eu([[10,14],[11,14]],1250,3,"Garage");for(let[n,t]of[[18,21],[25,21],[19,30],[24,30],[16,25],[16,28]])nu(n,t);for(let[n,t]of[[31,21],[35,21],[38,24],[38,28],[33,30]])nu(n,t);for(let[n,t]of[[8,5],[13,5],[5,9],[16,10]])nu(n,t)}function po(n){return n===2||n===3||n===4||n===5||n===6||n===7}function mo(n,t){return n===2||n===5||n===6||n===4||n===7||n===8||n===3&&_n[Gn[t]].planks>0}function $a(n){return n!==0&&n!==9}function Nd(n){return n===2||n===4||n===6}function gr(n,t,e){let i=Fe(n.x-t),s=Fe(n.x+t),r=Fe(n.z-t),o=Fe(n.z+t),a=!1;for(let l=r;l<=o;l++)for(let c=i;c<=s;c++){let h=Qn(c,l)?ne(c,l):-1,u=h<0?5:he[h];if(!e(u,h))continue;let f=Math.max(c*2,Math.min(n.x,c*2+2)),d=Math.max(l*2,Math.min(n.z,l*2+2)),g=n.x-f,x=n.z-d,p=Math.hypot(g,x);if(p<t)if(a=!0,p>1e-5)n.x+=g/p*(t-p),n.z+=x/p*(t-p);else{let m=c*2+1,b=l*2+2/2;g=n.x-m,x=n.z-b,Math.abs(g)>Math.abs(x)?n.x=m+Math.sign(g||1)*(2/2+t):n.z=b+Math.sign(x||1)*(2/2+t)}}return a}function Ka(n,t,e,i,s,r){let o=Math.hypot(e,i);if(o<1e-6)return s;e/=o,i/=o;let a=Fe(n),l=Fe(t),c=e>0?1:-1,h=i>0?1:-1,u=Math.abs(2/(e||1e-9)),f=Math.abs(2/(i||1e-9)),d=e>0?((a+1)*2-n)/e:e<0?(a*2-n)/e:1/0,g=i>0?((l+1)*2-t)/i:i<0?(l*2-t)/i:1/0,x=0;for(let p=0;p<200&&x<s&&(d<g?(x=d,d+=u,a+=c):(x=g,g+=f,l+=h),!(x>s));p++){let m=Qn(a,l)?ne(a,l):-1;if(r(m<0?5:he[m],m))return x}return s}var ci=new Float32Array(1760),De=[],su=1e9;function iu(n){let t=he[n];return t===0||t===1||t===9?t===9?4:1:t===3?_n[Gn[n]].planks>0?3+_n[Gn[n]].planks:1.5:t===7||t===8?30:su}function Od(n,t){if(ci.fill(su),De.length=0,!Qn(n,t))return;let e=ne(n,t);ci[e]=0,De.push([0,e]);let i=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;De.length;){let[s,r]=Sv();if(s>ci[r])continue;let o=r%44,a=r/44|0;for(let[l,c,h]of i){let u=o+l,f=a+c;if(!Qn(u,f))continue;let d=ne(u,f);if(l&&c&&(iu(ne(o+l,a))>=2||iu(ne(o,a+c))>=2))continue;let g=iu(d);if(g>=su)continue;let x=s+g*h;x<ci[d]&&(ci[d]=x,bv([x,d]))}}}function bv(n){De.push(n);let t=De.length-1;for(;t>0;){let e=t-1>>1;if(De[e][0]<=De[t][0])break;[De[e],De[t]]=[De[t],De[e]],t=e}}function Sv(){let n=De[0],t=De.pop();if(De.length){De[0]=t;let e=0;for(;;){let i=e*2+1,s=i+1,r=e;if(i<De.length&&De[i][0]<De[r][0]&&(r=i),s<De.length&&De[s][0]<De[r][0]&&(r=s),r===e)break;[De[r],De[e]]=[De[e],De[r]],e=r}}return n}var Fd=[[3,3],[22,2],[40,3],[2,20],[41,17],[3,36],[14,37],[30,37],[40,36],[41,30],[25,16],[3,28]];function ti(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new He,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Bd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Bd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Bd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Pe(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Vn=(n,t,e)=>n<t?t:n>e?e:n,Pi=(n,t,e)=>n+(t-n)*e;function Wn(n){let t=n>>>0||1;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}var ke=Math.random,ws=n=>n[Math.random()*n.length|0];function Ja(n,t){let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var ct=n=>document.getElementById(n);var ja=new Map,kd=4;function zd(n){kd=n;for(let t of ja.values())t.anisotropy=n,t.needsUpdate=!0}function ue(n,t,e,i,s=!0){if(ja.has(n))return ja.get(n);let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");i(o,t,e);let a=new Da(r);return s&&(a.colorSpace=Mn),a.wrapS=a.wrapT=Zr,a.anisotropy=kd,ja.set(n,a),a}function hn(n,t,e,i,s,r,o,a){let l=Wn(a);for(let c=0;c<i;c++){n.fillStyle=s[l()*s.length|0];let h=r+l()*(o-r);n.fillRect(l()*t,l()*e,h,h)}}function $e(n,t,e,i,s,r,o,a){let l=Wn(a);for(let c=0;c<i;c++){let h=l()*t,u=l()*e,f=r+l()*(o-r);for(let d of[-t,0,t])for(let g of[-e,0,e]){let x=n.createRadialGradient(h+d,u+g,0,h+d,u+g,f);x.addColorStop(0,s),x.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=x,n.fillRect(h+d-f,u+g-f,f*2,f*2)}}}function xr(n,t,e,i){let s=n.createLinearGradient(0,e,0,e*.55);s.addColorStop(0,`rgba(25,20,15,${i})`),s.addColorStop(1,"rgba(25,20,15,0)"),n.fillStyle=s,n.fillRect(0,0,t,e)}function ou(n,t,e,i,s=2){return ue(n,t,e,r=>{let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");i(a,t,e);let l=a.getImageData(0,0,t,e).data,c=r.createImageData(t,e),h=c.data,u=(f,d)=>l[((d+e)%e*t+(f+t)%t)*4]/255;for(let f=0;f<e;f++)for(let d=0;d<t;d++){let g=(u(d+1,f)-u(d-1,f))*s,x=(u(d,f+1)-u(d,f-1))*s,p=Math.hypot(g,x,1),m=(f*t+d)*4;h[m]=(-g/p*.5+.5)*255,h[m+1]=(x/p*.5+.5)*255,h[m+2]=(1/p*.5+.5)*255,h[m+3]=255}r.putImageData(c,0,0)},!1)}var Ev=(n,t,e)=>{n.fillStyle="#fff",n.fillRect(0,0,t,e),n.fillStyle="#444";let i=e/16,s=t/4;for(let r=0;r<16;r++){n.fillRect(0,r*i,t,3);let o=r%2?s/2:0;for(let a=0;a<=4;a++)n.fillRect(o+a*s-1.5,r*i,3,i)}hn(n,t,e,1500,["#ddd","#bbb"],1,3,3)},wt={asphalt:()=>ue("asphalt",512,512,(n,t,e)=>{n.fillStyle="#2b2c2e",n.fillRect(0,0,t,e),hn(n,t,e,26e3,["#242527","#333436","#3b3c3e","#1f2022","#46474a"],1,2.5,1),$e(n,t,e,14,"rgba(10,10,12,.35)",30,90,2),$e(n,t,e,10,"rgba(90,85,70,.12)",20,70,3);let i=Wn(4);n.strokeStyle="rgba(8,8,8,.75)",n.lineCap="round";for(let s=0;s<9;s++){n.lineWidth=1+i()*2,n.beginPath();let r=i()*t,o=i()*e;n.moveTo(r,o);for(let a=0;a<7;a++)r+=(i()-.5)*70,o+=(i()-.5)*70,n.lineTo(r,o);n.stroke()}}),asphaltN:()=>ou("asphaltN",256,256,(n,t,e)=>{n.fillStyle="#888",n.fillRect(0,0,t,e),hn(n,t,e,9e3,["#666","#aaa","#999","#777"],1,2,5)},3),stucco:()=>ue("stucco",256,256,(n,t,e)=>{n.fillStyle="#b8a98c",n.fillRect(0,0,t,e),hn(n,t,e,9e3,["#ab9c80","#c4b597","#a29378","#cdbfa2"],1,3,6),$e(n,t,e,10,"rgba(70,60,40,.18)",20,60,7),xr(n,t,e,.55)}),stuccoN:()=>ou("stuccoN",128,128,(n,t,e)=>{n.fillStyle="#888",n.fillRect(0,0,t,e),hn(n,t,e,3e3,["#555","#bbb"],1,3,8)},2.5),brick:()=>ue("brick",256,256,(n,t,e)=>{n.fillStyle="#6d6a63",n.fillRect(0,0,t,e);let i=Wn(9),s=e/16,r=t/4;for(let o=0;o<16;o++){let a=o%2?r/2:0;for(let l=-1;l<=4;l++){let c=.75+i()*.35;n.fillStyle=`rgb(${120*c|0},${52*c|0},${38*c|0})`,n.fillRect(a+l*r+1.5,o*s+1.5,r-3,s-3)}}hn(n,t,e,3e3,["rgba(0,0,0,.18)","rgba(255,220,200,.07)"],1,3,10),xr(n,t,e,.6)}),brickN:()=>ou("brickN",256,256,Ev,4),panel:()=>ue("panel",256,256,(n,t,e)=>{n.fillStyle="#5d6b55",n.fillRect(0,0,t,e),n.strokeStyle="rgba(30,40,25,.35)",n.lineWidth=2;for(let i=0;i<t;i+=16)n.beginPath(),n.moveTo(i,0),n.lineTo(i,e),n.stroke();for(let i=8;i<e*.62;i+=32)for(let s=8;s<t;s+=32)n.fillStyle="rgba(200,190,140,.16)",n.beginPath(),n.arc(s+i/32%2*16,i,4,0,7),n.fill();$e(n,t,e,12,"rgba(60,50,20,.25)",15,50,11),n.fillStyle="#4b3220",n.fillRect(0,e*.66,t,e*.34),n.fillStyle="#2e1d12",n.fillRect(0,e*.66,t,5);for(let i=0;i<t;i+=32)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(i,e*.66,2,e);xr(n,t,e,.5)}),dinerWall:()=>ue("dinerwall",256,256,(n,t,e)=>{n.fillStyle="#9a9a92",n.fillRect(0,0,t,e);let i=32,s=16;for(let r=0;r<e/s;r++)for(let o=-1;o<t/i+1;o++){let a=r%2?i/2:0;n.fillStyle=r>9&&r<12?"#7a1a1a":"#d8d6cc",n.fillRect(o*i+a+1,r*s+1,i-2,s-2)}$e(n,t,e,10,"rgba(70,55,25,.35)",15,45,43),xr(n,t,e,.55)}),block:()=>ue("block",256,256,(n,t,e)=>{n.fillStyle="#5c5b57",n.fillRect(0,0,t,e);let i=Wn(44);for(let s=0;s<8;s++){let r=s%2?64:0;for(let o=-1;o<3;o++){let a=.8+i()*.25;n.fillStyle=`rgb(${128*a|0},${126*a|0},${118*a|0})`,n.fillRect(o*128+r+2,s*32+2,124,28)}}hn(n,t,e,4e3,["rgba(0,0,0,.15)","rgba(255,255,255,.06)"],1,3,45),$e(n,t,e,6,"rgba(30,25,15,.4)",15,50,46),xr(n,t,e,.6)}),tileChecker:()=>ue("checker",256,256,(n,t,e)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)n.fillStyle=(r+s)%2?"#1d1d1f":"#d9d4c5",n.fillRect(r*32,s*32,32,32);hn(n,t,e,2500,["rgba(60,50,30,.18)","rgba(0,0,0,.2)"],1,3,12),$e(n,t,e,10,"rgba(50,35,15,.3)",15,50,13),n.strokeStyle="rgba(0,0,0,.4)",n.lineWidth=1;for(let s=0;s<=8;s++)n.beginPath(),n.moveTo(s*32,0),n.lineTo(s*32,e),n.stroke(),n.beginPath(),n.moveTo(0,s*32),n.lineTo(t,s*32),n.stroke()}),carpet:()=>ue("carpet",256,256,(n,t,e)=>{n.fillStyle="#5a1e1e",n.fillRect(0,0,t,e),hn(n,t,e,9e3,["#4a1818","#6a2626","#3e1313","#702d24"],1,2.5,14),n.strokeStyle="rgba(200,160,80,.25)",n.lineWidth=3;for(let i=0;i<4;i++)for(let s=0;s<4;s++)n.beginPath(),n.moveTo(i*64+32,s*64+12),n.lineTo(i*64+52,s*64+32),n.lineTo(i*64+32,s*64+52),n.lineTo(i*64+12,s*64+32),n.closePath(),n.stroke();$e(n,t,e,8,"rgba(20,10,5,.35)",20,60,15)}),concrete:()=>ue("concrete",256,256,(n,t,e)=>{n.fillStyle="#6f6e6a",n.fillRect(0,0,t,e),hn(n,t,e,7e3,["#666561","#787773","#5e5d59","#82817c"],1,3,16),$e(n,t,e,6,"rgba(15,12,8,.5)",20,55,17),n.strokeStyle="rgba(0,0,0,.35)",n.lineWidth=2,n.strokeRect(0,0,t,e)}),wood:()=>ue("wood",256,64,(n,t,e)=>{n.fillStyle="#7a5434",n.fillRect(0,0,t,e);let i=Wn(18);for(let s=0;s<45;s++){n.strokeStyle=`rgba(40,20,8,${.08+i()*.18})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*e;n.moveTo(0,r),n.bezierCurveTo(t*.3,r+i()*8-4,t*.6,r+i()*8-4,t,r+i()*4-2),n.stroke()}for(let s=0;s<3;s++)n.fillStyle="rgba(30,15,5,.5)",n.beginPath(),n.ellipse(i()*t,i()*e,5,3,0,0,7),n.fill()}),plank:()=>ue("plank",256,64,(n,t,e)=>{n.fillStyle="#8a6a48",n.fillRect(0,0,t,e);let i=Wn(19);for(let s=0;s<40;s++){n.strokeStyle=`rgba(50,30,10,${.1+i()*.2})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*e;n.moveTo(0,r),n.lineTo(t,r+i()*6-3),n.stroke()}n.fillStyle="#333";for(let s of[14,t-14])n.beginPath(),n.arc(s,e*.3,3,0,7),n.fill(),n.beginPath(),n.arc(s,e*.7,3,0,7),n.fill();xr(n,t,e,.25)}),metal:()=>ue("metal",128,128,(n,t,e)=>{n.fillStyle="#5b5f62",n.fillRect(0,0,t,e);for(let i=0;i<t;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"#4c5053"),s.addColorStop(.5,"#73777a"),s.addColorStop(1,"#4c5053"),n.fillStyle=s,n.fillRect(i,0,16,e)}$e(n,t,e,8,"rgba(110,55,20,.45)",8,30,20)}),rust:()=>ue("rust",128,128,(n,t,e)=>{n.fillStyle="#5a3a26",n.fillRect(0,0,t,e),hn(n,t,e,3e3,["#6d4630","#4a2d1c","#7d5236","#3a2416"],1,4,21),$e(n,t,e,6,"rgba(60,70,70,.5)",10,40,22)}),ceiling:()=>ue("ceiling",128,128,(n,t,e)=>{n.fillStyle="#8f8b80",n.fillRect(0,0,t,e),hn(n,t,e,1200,["rgba(0,0,0,.12)","rgba(255,255,255,.06)"],1,2,23),$e(n,t,e,4,"rgba(90,70,30,.35)",10,40,24),n.strokeStyle="#5e5a52",n.lineWidth=3,n.strokeRect(0,0,t,e)}),chain:()=>ue("chain",128,128,(n,t,e)=>{n.clearRect(0,0,t,e),n.strokeStyle="rgba(170,175,175,1)",n.lineWidth=2.2;let i=16;for(let s=-e;s<t+e;s+=i)n.beginPath(),n.moveTo(s,0),n.lineTo(s+e,e),n.stroke(),n.beginPath(),n.moveTo(s+e,0),n.lineTo(s,e),n.stroke()}),glow:()=>ue("glow",64,64,(n,t,e)=>{let i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.3,"rgba(255,255,255,.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,e)}),puff:()=>ue("puff",64,64,(n,t,e)=>{let i=Wn(25);for(let s=0;s<18;s++){let r=i()*6.28,o=i()*14,a=32+Math.cos(r)*o,l=32+Math.sin(r)*o,c=8+i()*12,h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,.3)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,t,e)}}),flame:()=>ue("flame",64,128,(n,t,e)=>{for(let i=0;i<3;i++){let s=n.createRadialGradient(32,96,2,32,84,40-i*9);s.addColorStop(0,"rgba(255,255,255,.95)"),s.addColorStop(.5,"rgba(255,255,255,.4)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(32,4+i*14),n.bezierCurveTo(60,50,62,112,32,124),n.bezierCurveTo(2,112,4,50,32,4+i*14),n.fill()}}),blood:()=>ue("blood",128,128,(n,t,e)=>{n.clearRect(0,0,t,e);let i=Wn(26);n.fillStyle="rgba(70,4,4,.9)",n.beginPath(),n.arc(64,64,22,0,7),n.fill();for(let s=0;s<26;s++){let r=i()*6.28,o=18+i()*40,a=2+i()*8;n.beginPath(),n.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,7),n.fill()}}),sky:()=>ue("sky",16,256,(n,t,e)=>{let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#02030a"),i.addColorStop(.42,"#0b1224"),i.addColorStop(.5,"#1f2a36"),i.addColorStop(.53,"#2a2a2a"),i.addColorStop(1,"#0a0a0a"),n.fillStyle=i,n.fillRect(0,0,t,e)}),moon:()=>ue("moon",128,128,(n,t,e)=>{let i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(240,240,255,1)"),i.addColorStop(.33,"rgba(220,225,240,1)"),i.addColorStop(.36,"rgba(160,180,230,.35)"),i.addColorStop(1,"rgba(100,120,200,0)"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(150,150,170,.35)";for(let[s,r,o]of[[56,54,7],[72,70,5],[60,76,4],[74,52,3]])n.beginPath(),n.arc(s,r,o,0,7),n.fill()}),label:(n,t,e,i=256,s=64,r="bold 38px Arial")=>ue("lbl"+n+t+e+i+s,i,s,o=>{o.fillStyle=t,o.fillRect(0,0,i,s),o.fillStyle=e,o.font=r,o.textAlign="center",o.textBaseline="middle",o.fillText(n,i/2,s/2+2)}),chalk:(n,t)=>ue("chalk"+n,256,128,(e,i,s)=>{e.clearRect(0,0,i,s),e.strokeStyle="rgba(240,235,215,.9)",e.lineWidth=3,e.lineJoin="round",e.shadowColor="rgba(255,255,240,.6)",e.shadowBlur=4,t(e,i,s)}),neon:(n,t,e=512,i=128,s=72)=>ue("neon"+n+t,e,i,r=>{r.clearRect(0,0,e,i),r.font=`bold ${s}px Arial Black, Arial`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=24,r.fillStyle=t,r.fillText(n,e/2,i/2),r.shadowBlur=8,r.fillStyle="#fff",r.globalAlpha=.65,r.fillText(n,e/2,i/2)}),perk:(n,t,e)=>ue("perk"+n,128,256,(i,s,r)=>{let o=i.createLinearGradient(0,0,0,r);o.addColorStop(0,t),o.addColorStop(1,"#111"),i.fillStyle=o,i.fillRect(0,0,s,r),i.fillStyle="rgba(0,0,0,.35)",i.fillRect(10,150,s-20,80),i.fillStyle="#fff",i.font="bold 22px Arial Black, Arial",i.textAlign="center",n.split(" ").forEach((l,c)=>i.fillText(l.toUpperCase(),s/2,40+c*26)),i.font="bold 15px Arial",i.fillText(e,s/2,185),i.strokeStyle="rgba(255,255,255,.6)",i.lineWidth=3,i.strokeRect(6,6,s-12,r-12);for(let l=0;l<3;l++)i.fillStyle="rgba(255,255,255,.25)",i.beginPath(),i.arc(s/2,100,20-l*6,0,7),i.fill()}),boxSide:()=>ue("boxside",256,128,(n,t,e)=>{n.fillStyle="#4a3420",n.fillRect(0,0,t,e);let i=Wn(30);for(let s=0;s<30;s++){n.strokeStyle=`rgba(20,10,4,${.15+i()*.2})`,n.beginPath();let r=i()*e;n.moveTo(0,r),n.lineTo(t,r+i()*4-2),n.stroke()}n.font="bold 84px Arial Black, Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#d8c79a",n.fillText("?",t/2,e/2+4),n.strokeStyle="#2a1a0d",n.lineWidth=8,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#8a7a50";for(let[s,r]of[[4,4],[t-20,4],[4,e-20],[t-20,e-20]])n.fillRect(s,r,16,16)}),skin:n=>ue("skin"+n,128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i),hn(t,e,i,1800,["rgba(60,20,20,.25)","rgba(40,50,30,.25)","rgba(255,255,255,.06)"],1,4,31),$e(t,e,i,7,"rgba(90,10,10,.45)",6,22,32),$e(t,e,i,5,"rgba(30,40,20,.4)",8,26,33)}),cloth:n=>ue("cloth"+n,128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let s=0;s<i;s+=3)t.fillStyle="rgba(0,0,0,.06)",t.fillRect(0,s,e,1);$e(t,e,i,9,"rgba(80,5,5,.55)",6,26,34),$e(t,e,i,6,"rgba(20,15,10,.45)",8,28,35),hn(t,e,i,500,["rgba(0,0,0,.25)"],1,3,36)}),camo:()=>ue("camo",128,128,(n,t,e)=>{n.fillStyle="#4b5136",n.fillRect(0,0,t,e),$e(n,t,e,14,"rgba(30,32,20,.8)",8,22,37),$e(n,t,e,10,"rgba(110,100,70,.6)",6,18,38)}),pap:()=>ue("pap",128,128,(n,t,e)=>{let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#3b0d5e"),i.addColorStop(.5,"#8a2ad8"),i.addColorStop(1,"#1d6fd8"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="rgba(255,180,255,.55)",n.lineWidth=2;let s=Wn(39);for(let r=0;r<18;r++){n.beginPath();let o=s()*t,a=s()*e;n.moveTo(o,a);for(let l=0;l<4;l++)o+=(s()-.5)*40,a+=(s()-.5)*40,n.lineTo(o,a);n.stroke()}}),lines:()=>ue("lines",64,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(220,210,170,.75)",n.fillRect(24,0,16,e),hn(n,t,e,900,["rgba(0,0,0,.9)"],1,4,40)},!0),dirt:()=>ue("dirt",128,128,(n,t,e)=>{n.clearRect(0,0,t,e),$e(n,t,e,10,"rgba(48,38,24,.55)",12,40,41),hn(n,t,e,900,["rgba(40,30,20,.6)","rgba(70,60,40,.4)"],1,3,42)})};var hi=n=>new on(n),Qa=null;function wv(){return Qa||(Qa={metal:hi({color:2829617,metalness:.7,roughness:.42}),blued:hi({color:1909032,metalness:.85,roughness:.3}),steel:hi({color:10133156,metalness:.9,roughness:.25}),wood:hi({map:wt.wood(),color:11038783,roughness:.55}),poly:hi({color:1842464,roughness:.78}),olive:hi({color:4870710,roughness:.72}),tan:hi({color:9075290,roughness:.75}),rubber:hi({color:921103,roughness:.95}),brass:hi({color:13148234,metalness:.9,roughness:.3}),lens:new on({color:661552,metalness:.2,roughness:.05,emissive:530480,emissiveIntensity:.6}),red:new me({color:16719904}),pap:hi({map:wt.pap(),emissive:6953648,emissiveIntensity:.55,metalness:.5,roughness:.3}),glow:new me({color:6750088}),glowP:new me({color:14713087})},Qa)}var Hd=new Yt,Tv=new kn,Av=new En,Rv=new I,Cv=new I(1,1,1);function Pv(n){n=n.index?n.toNonIndexed():n;for(let t of Object.keys(n.attributes))t!=="position"&&t!=="normal"&&t!=="uv"&&n.deleteAttribute(t);return n.attributes.uv||n.setAttribute("uv",new Pe(new Float32Array(n.attributes.position.count*2),2)),n}function _r(n,t){let e=wv(),i=new Map,s=x=>t&&x!=="steel"&&x!=="lens"&&x!=="red"&&x!=="brass"&&x!=="rubber"&&x!=="glow"?e.pap:x==="glow"&&t?e.glowP:e[x],r=(x,p,m=0,b=0,v=0,E=0,D=0,R=0)=>{Hd.compose(Rv.set(v,b,-m),Tv.setFromEuler(Av.set(E,D,R)),Cv),x.applyMatrix4(Hd);let T=s(p);i.has(T)||i.set(T,[]),i.get(T).push(Pv(x))},o=(x,p,m,b=.004,v=0)=>{let E=new li;E.moveTo(x[0][0],x[0][1]);for(let T=1;T<x.length;T++)E.lineTo(x[T][0],x[T][1]);E.closePath();let D=Math.max(.002,p-2*b),R=new Ms(E,{depth:D,bevelEnabled:b>0,bevelThickness:b,bevelSize:b,bevelSegments:2,curveSegments:4});R.translate(0,0,-D/2),R.rotateY(Math.PI/2),r(R,m,0,0,v)},a=(x,p,m,b,v,E=14,D=m,R=0)=>r(new mn(D,m,Math.abs(p-x),E).rotateX(-Math.PI/2),v,(x+p)/2,b,R),l=(x,p,m,b,v,E,D=0,R=0)=>r(new Dn(m,b,v),E,x,p,D,R),c=(x,p,m=.022,b=.05)=>{let v=new Ki(m,.0042,5,12,Math.PI);v.rotateZ(Math.PI),v.scale(b/(2*m),1,1),v.rotateY(Math.PI/2),r(v,"metal",x,p),l(x+.004,p-.008,.006,.02,.006,"steel",0,.35)},h=(x,p,m,b="metal")=>{l((x+p)/2,m,.024,.006,p-x,b);for(let v=x+.01;v<p;v+=.02)l(v,m+.006,.026,.006,.009,b)},u=.5,f=.06;switch(n){case"pistol":{o([[-.05,.046],[.165,.046],[.172,.052],[.172,.086],[.005,.09],[-.045,.088],[-.054,.078]],.033,"blued",.004);for(let x=0;x<6;x++)l(-.042+x*.006,.066,.035,.03,.0025,"rubber");o([[-.046,.047],[.158,.047],[.158,.032],[.07,.028],[.045,.022],[-.03,.022],[-.046,.03]],.029,"metal",.003),o([[-.045,.03],[.014,.03],[0,-.092],[-.006,-.104],[-.058,-.104],[-.066,-.088],[-.053,0]],.035,"wood",.005),l(-.032,-.109,.033,.009,.05,"steel",0,.12),a(.165,.178,.009,.07,"steel"),l(.155,.094,.006,.01,.012,"metal"),l(-.036,.094,.03,.012,.01,"metal"),l(-.058,.08,.012,.016,.012,"steel",0,-.4),l(.02,.04,.008,.008,.02,"steel",.018),c(.035,.022),u=.18,f=.07;break}case"brawler":{o([[-.045,.03],[.075,.03],[.075,.094],[0,.098],[-.03,.094],[-.052,.074]],.03,"steel",.004),r(new mn(.033,.033,.064,12).rotateX(-Math.PI/2),"steel",.035,.062);for(let x=0;x<6;x++){let p=x/6*Math.PI*2;r(new mn(.0075,.0075,.066,6).rotateX(-Math.PI/2),"rubber",.035,.062+Math.sin(p)*.019,Math.cos(p)*.019)}a(.07,.27,.012,.074,"steel",14),l(.17,.088,.013,.012,.2,"steel"),l(.14,.054,.016,.022,.13,"steel"),l(.262,.1,.004,.016,.014,"red"),l(-.03,.1,.022,.01,.012,"metal"),l(-.055,.09,.01,.014,.024,"metal",0,-.6),o([[-.046,.034],[0,.034],[-.012,-.08],[-.024,-.096],[-.066,-.096],[-.072,-.07],[-.062,0]],.037,"wood",.006),c(.03,.025),u=.275,f=.074;break}case"viper":case"ripper":{let x=n==="ripper";o([[-.08,.03],[.2,.03],[.205,.04],[.205,.076],[.1,.086],[-.08,.086]],.05,x?"poly":"metal",.006),a(.08,.33,.012,.09,"metal",10),o([[.2,.026],[.34,.032],[.345,.04],[.345,.074],[.2,.078]],.058,"poly",.008);for(let m=0;m<4;m++)l(.235+m*.028,.03,.06,.006,.012,"rubber");a(.34,.39,.011,.056,"steel"),a(.38,.405,.016,.056,"metal",10),o([[-.035,.03],[.02,.03],[.004,-.088],[-.004,-.096],[-.046,-.096],[-.054,-.08],[-.048,0]],.04,"poly",.006);let p=x?1.35:1;o([[.052,.03],[.092,.03],[.1+.03*p,-.1*p],[.12+.03*p,-.17*p],[.085+.03*p,-.18*p],[.07+.01*p,-.1*p],[.056,.03]],.03,"metal",.004),c(.03,.026);for(let m of[-.018,.018])a(-.08,-.27,.006,.066,"steel",8,.006,m);o([[-.29,-.005],[-.265,-.005],[-.265,.09],[-.29,.096]],.052,"rubber",.006),r(new mn(.015,.015,.03,10).rotateZ(Math.PI/2),"metal",-.06,.1),l(.325,.108,.004,.018,.008,"metal",.012),l(.325,.108,.004,.018,.008,"metal",-.012),l(.325,.104,.003,.012,.004,"steel"),u=.41,f=.056;break}case"trench":{o([[-.06,.025],[.14,.025],[.14,.086],[-.02,.09],[-.06,.078]],.05,"blued",.006),l(.04,.06,.004,.026,.06,"steel",.026),a(.14,.74,.013,.074,"blued",14),a(.14,.64,.012,.043,"metal",12),a(.63,.66,.016,.058,"metal",10),o([[.3,.02],[.5,.02],[.51,.035],[.5,.066],[.3,.066],[.29,.035]],.054,"wood",.009);for(let x=0;x<7;x++)l(.32+x*.025,.043,.058,.03,.005,"rubber");o([[-.055,.08],[-.055,.025],[-.025,-.01],[-.03,-.075],[-.07,-.08],[-.085,-.02],[-.42,-.04],[-.43,-.035],[-.43,.07],[-.36,.08]],.044,"wood",.008),l(-.44,.015,.046,.115,.02,"rubber"),r(new Ze(.005,6,5),"steel",.735,.09),c(.02,.024),u=.75,f=.074;break}case"ranger":case"widow":{let x=n==="widow";o([[.48,.062],[.48,.036],[.06,.026],[.03,.006],[0,-.07],[-.046,-.07],[-.052,-.02],[-.1,.004],[-.44,-.035],[-.455,-.03],[-.455,.078],[-.1,.068],[-.06,.062]],.046,x?"tan":"wood",.008),l(-.465,.022,.048,.11,.02,"rubber"),a(-.06,.18,.02,.076,"blued",14),r(new mn(.005,.005,.05,6).rotateZ(Math.PI/2),"steel",-.01,.07,.035,0,0,-.5),r(new Ze(.01,8,6),"steel",-.01,.058,.056);let p=x?.8:.64;if(a(.18,p,.012,.076,"blued",12,.009),x){a(p-.01,p+.05,.016,.076,"metal",10),a(-.06,.18,.018,.136,"poly",16),a(.18,.24,.018,.136,"poly",16,.031),a(-.11,-.06,.025,.136,"poly",16,.018),r(new $i(.028,16),"lens",.241,.136,0,0,Math.PI),r(new $i(.022,16),"lens",-.111,.136),r(new mn(.012,.012,.03,10),"metal",.06,.162),r(new mn(.012,.012,.03,10).rotateZ(Math.PI/2),"metal",.06,.136,.026),l(0,.108,.02,.03,.02,"metal"),l(.14,.108,.02,.03,.02,"metal");for(let m of[-.02,.02])a(.47,.6,.004,.02,"metal",6,.004,m)}else l(.62,.094,.004,.016,.01,"metal"),l(.12,.096,.02,.012,.012,"metal"),a(.42,.47,.016,.076,"metal",10);c(0,.004,.022,.06),u=p+(x?.06:.01),f=.076;break}case"kestrel":{o([[-.08,.04],[.16,.04],[.16,.088],[-.08,.088]],.044,"olive",.005),o([[-.065,.042],[.12,.042],[.12,.012],[.08,0],[-.02,0],[-.065,.02]],.04,"metal",.004),h(-.07,.42,.094),a(.16,.42,.031,.064,"poly",8);for(let x=0;x<5;x++)l(.19+x*.05,.064,.066,.012,.02,"rubber");a(.42,.53,.01,.064,"steel",10),a(.52,.565,.015,.064,"metal",8),o([[.37,.09],[.385,.135],[.4,.135],[.41,.09]],.012,"metal",.002),o([[.06,.012],[.108,.012],[.128,-.1],[.152,-.172],[.108,-.184],[.088,-.1],[.064,.012]],.027,"metal",.004),o([[-.032,.012],[.01,.012],[-.006,-.088],[-.014,-.096],[-.05,-.096],[-.058,-.08]],.035,"poly",.006),c(.03,.006),a(-.08,-.27,.016,.062,"metal",12),o([[-.19,.084],[-.36,.088],[-.372,.08],[-.372,-.024],[-.34,-.024],[-.2,.034]],.042,"poly",.006),l(.04,.108,.026,.012,.05,"metal"),a(.015,.075,.019,.128,"metal",14),r(new $i(.015,14),"lens",.076,.128,0,0,Math.PI),r(new Ze(.002,4,3),"red",.045,.128),l(-.075,.094,.03,.01,.014,"metal"),u=.57,f=.064;break}case"hammer":{o([[-.1,.02],[.22,.02],[.22,.1],[-.1,.1]],.07,"metal",.007),o([[-.06,.098],[.17,.098],[.15,.118],[-.06,.118]],.066,"blued",.004),h(-.05,.15,.124),l(.06,-.035,.07,.12,.14,"olive",.065),l(.06,.03,.074,.012,.144,"metal",.065);for(let x=0;x<5;x++)r(new mn(.006,.006,.04,6).rotateZ(Math.PI/2),"brass",.03+x*.014,.06-x*.003,.05);a(.22,.6,.032,.062,"poly",12);for(let x=0;x<6;x++)l(.26+x*.055,.062,.068,.014,.02,"rubber"),l(.26+x*.055,.062,.014,.068,.02,"rubber");a(.6,.75,.012,.062,"blued",12),a(.74,.79,.017,.062,"metal",8);{let x=new Ki(.04,.006,5,12,Math.PI);x.rotateY(Math.PI/2),r(x,"metal",.3,.1)}for(let x of[-.012,.012])a(.48,.72,.005,.025,"metal",6,.005,x);o([[-.034,.02],[.01,.02],[-.004,-.088],[-.012,-.096],[-.05,-.096],[-.058,-.08]],.038,"poly",.006),c(.025,.016),o([[-.1,.092],[-.39,.082],[-.405,.072],[-.405,-.03],[-.375,-.03],[-.12,.03]],.05,"poly",.007),u=.8,f=.062;break}case"ion":{o([[-.085,.02],[.2,.03],[.28,.052],[.2,.09],[-.06,.102],[-.095,.08]],.07,"metal",.014);for(let x=0;x<4;x++)r(new Ki(.06,.012,8,18),"steel",.06+x*.075,.058);a(0,.33,.026,.058,"glow",12),a(.3,.37,.022,.058,"steel",16,.05);for(let x of[-.03,0,.03])o([[0,.1],[.16,.096],[.12,.14],[.03,.135]],.006,"steel",.0015,x);r(new Ze(.045,14,10),"glow",-.04,.13),r(new Ki(.047,.008,6,16).rotateX(Math.PI/2),"steel",-.04,.13),o([[-.036,.024],[.012,.024],[-.004,-.088],[-.012,-.096],[-.05,-.096],[-.058,-.08]],.04,"poly",.008),c(.02,.02),u=.37,f=.058;break}}let d=new Gt;for(let[x,p]of i){let m=new nt(ti(p,!1),x);m.castShadow=!0,d.add(m)}let g=new Ie;return g.position.set(0,f,-u),d.add(g),{group:d,muzzle:g}}var fe=n=>new on(n),Gd={},tl=(n,t)=>Gd[n]||(Gd[n]=t());function Ge(n,{x:t=0,y:e=0,z:i=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1,c:h=16777215}={}){let u=new Yt().compose(new I(t,e,i),new kn().setFromEuler(new En(s,r,o)),new I(a,l,c)),f=n.index?n.toNonIndexed():n.clone();f.applyMatrix4(u);let d=new $t(h),g=f.attributes.position.count,x=new Float32Array(g*3);for(let p=0;p<g;p++)x[p*3]=d.r,x[p*3+1]=d.g,x[p*3+2]=d.b;return f.setAttribute("color",new Pe(x,3)),f.attributes.uv||f.setAttribute("uv",new Pe(new Float32Array(g*2),2)),f}var Qi=n=>ti(n,!1),At=(n,t,e)=>new Dn(n,t,e),en=(n,t,e,i=10)=>new mn(n,t,e,i),qd=()=>tl("zg",()=>({torso:new Jn(.19,.34,4,10),pelvis:new Jn(.16,.08,4,8),head:(()=>{let n=new Ze(.135,14,10),t=At(.17,.07,.14);t.translate(0,-.11,.04);let e=At(.2,.04,.06);e.translate(0,.03,.11);let i=At(.035,.05,.05);return i.translate(0,-.02,.135),ti([n.toNonIndexed(),t.toNonIndexed(),e.toNonIndexed(),i.toNonIndexed()])})(),upper:(()=>{let n=new Jn(.06,.22,3,8);return n.translate(0,-.15,0),n})(),fore:(()=>{let n=new Jn(.05,.22,3,8);n.translate(0,-.14,0);let t=At(.07,.11,.04);t.translate(0,-.32,0);let e=At(.075,.06,.03);return e.translate(0,-.4,.02),e.rotateX(.3),ti([n.toNonIndexed(),t.toNonIndexed(),e.toNonIndexed()])})(),thigh:(()=>{let n=new Jn(.085,.3,3,8);return n.translate(0,-.22,0),n})(),shin:(()=>{let n=new Jn(.068,.3,3,8);n.translate(0,-.2,0);let t=At(.1,.07,.24);return t.translate(0,-.42,.05),ti([n.toNonIndexed(),t.toNonIndexed()])})(),eyes:(()=>{let n=new Ze(.022,6,5),t=n.clone();return n.translate(-.045,0,.118),t.translate(.045,0,.118),ti([n,t])})()})),Iv=()=>tl("zm",()=>{let n=["#8e9a86","#9c9283","#7f8a7c","#a19a8a"].map(c=>fe({map:wt.skin(c),roughness:.85})),t=["#cfc9b8","#7b2b25","#2f4d6e","#2b2b2b","#5d6b3a","#8a6d3b"].map(c=>fe({map:wt.cloth(c),roughness:.95})),e=["#2f3d55","#5a4d35","#252525","#4a4a44"].map(c=>fe({map:wt.cloth(c),roughness:.95})),i=fe({map:wt.skin("#5f8f3a"),roughness:.6,emissive:3997482,emissiveIntensity:.35}),s=fe({map:wt.cloth("#2c3a1c"),roughness:.9,emissive:1731088,emissiveIntensity:.2}),r=fe({map:wt.skin("#a39383"),roughness:.8}),o=new me({color:16756784}),a=new me({color:10354506}),l=new me({color:16726560});return{skins:n,shirts:t,pants:e,toxicSkin:i,toxicCloth:s,fatSkin:r,eyes:o,eyesG:a,eyesR:l}}),Vd={},Wd=new Yt,Lv=new Yt;function Dv(n,t,e,i,s){t.updateMatrixWorld(!0),Wd.copy(t.matrixWorld).invert();let r=[];for(let l of e)r.includes(l.parent)||r.push(l.parent);let o=Vd[n];if(!o){let l=[[],[],[],[]];for(let f of e){let d=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();for(let b of Object.keys(d.attributes))b!=="position"&&b!=="normal"&&b!=="uv"&&d.deleteAttribute(b);d.attributes.uv||d.setAttribute("uv",new Pe(new Float32Array(d.attributes.position.count*2),2)),d.applyMatrix4(Lv.multiplyMatrices(Wd,f.matrixWorld));let g=d.attributes.position.count,x=r.indexOf(f.parent),p=new Uint16Array(g*4),m=new Float32Array(g*4);for(let b=0;b<g;b++)p[b*4]=x,m[b*4]=1;d.setAttribute("skinIndex",new or(p,4)),d.setAttribute("skinWeight",new re(m,4)),l[i[f.material.uuid]??2].push(d)}let c=[],h=[];for(let f of l)if(f.length){let d=ti(f,!1);c.push(d),h.push(d.attributes.position.count)}else h.push(0);o=ti(c,!1),o.clearGroups();let u=0;h.forEach((f,d)=>{f&&o.addGroup(u,f,d),u+=f}),o.boundingSphere=new zn(new I(0,.9,0),1.6),Vd[n]=o}let a=new Ra(o,s);a.castShadow=!0,t.add(a),a.updateMatrixWorld(!0),a.bind(new Pa(r));for(let l of e)l.visible=!1,l.castShadow=!1}function Yd(n){let t=qd(),e=Iv(),i=_=>_[Math.random()*_.length|0],s=i(e.skins),r=i(e.shirts),o=i(e.pants),a=e.eyes;n==="toxic"&&(s=e.toxicSkin,r=e.toxicCloth,o=e.toxicCloth,a=e.eyesG),n==="fat"&&(s=e.fatSkin),n==="runner"&&(a=e.eyesR);let l=new Gt,c=new Gt;l.add(c);let h=new Gt;h.position.y=.95,c.add(h);let u=new nt(t.pelvis,o);u.rotation.z=Math.PI/2,u.scale.set(1,1.2,.8),h.add(u);let f=new Gt;h.add(f);let d=new nt(t.torso,r);d.position.y=.3,d.scale.set(1.25,1,.75),f.add(d);let g=new Gt;g.position.y=.66,f.add(g);let x=new nt(t.head,s);x.position.y=.08,g.add(x);let p=new nt(t.eyes,a);x.add(p);let m=_=>{let M=new Gt;M.position.set(.28*_,.53,0),f.add(M);let k=new nt(t.upper,r);M.add(k);let F=new Gt;F.position.y=-.31,M.add(F);let G=new nt(t.fore,s);return F.add(G),{sh:M,el:F}},b=_=>{let M=new Gt;M.position.set(.11*_,-.02,0),h.add(M);let k=new nt(t.thigh,o);M.add(k);let F=new Gt;F.position.y=-.45,M.add(F);let G=new nt(t.shin,o);return F.add(G),{hp:M,kn:F}},v=m(-1),E=m(1),D=b(-1),R=b(1),T=1;n==="fat"&&(d.scale.set(1.9,1.15,1.55),u.scale.set(1.6,1.6,1.3),v.sh.position.x=-.38,E.sh.position.x=.38,D.hp.position.x=-.17,R.hp.position.x=.17,T=1.22),n==="runner"&&(d.scale.set(1,1.05,.62),T=1.04,l.scale.set(.9,1,.9)),n==="toxic"&&(T=1.02),l.scale.multiplyScalar(T);let L=[];return l.traverse(_=>{_.isMesh&&(_.castShadow=!0,L.push(_))}),p.castShadow=!1,Dv(n,l,L,{[o.uuid]:0,[r.uuid]:1,[s.uuid]:2,[a.uuid]:3},[o,r,s,a]),{root:l,body:c,hips:h,spine:f,neck:g,head:x,aL:v,aR:E,lL:D,lR:R,meshes:L,scale:T,phase:Math.random()*10,armUp:.6+Math.random()*.8,limp:Math.random()<.3?.4:0,tilt:(Math.random()-.5)*.5}}function au(n,t,e,i,s){let r=e>2.2,o=r?2.4+e*.5:1.3+e*.9,a=t*o+n.phase,l=Math.sin(a),c=Math.cos(a),h=Math.min(1,e/(r?4:1.6));n.lL.hp.rotation.x=l*(r?.9:.5)*h,n.lR.hp.rotation.x=-l*(r?.9:.5)*h*(1-n.limp),n.lL.kn.rotation.x=Math.max(0,-c)*(r?1.3:.6)*h,n.lR.kn.rotation.x=Math.max(0,c)*(r?1.3:.6)*h,n.hips.position.y=.95-Math.abs(c)*.05*h-(r?.06:0),n.spine.rotation.x=r?.45:.18+Math.sin(t*.7+n.phase)*.05,n.spine.rotation.z=n.tilt*.3+l*.06*h,n.neck.rotation.z=n.tilt+Math.sin(t*1.3+n.phase)*.1,n.neck.rotation.x=r?-.3:-.1;let u=r?1:n.armUp,f=r?c*.9:Math.sin(t*1.7+n.phase)*.12;n.aL.sh.rotation.x=-u-f-i*1.2,n.aR.sh.rotation.x=-u+f-i*1.4*Math.max(0,Math.sin(t*14)),n.aL.sh.rotation.z=.08,n.aR.sh.rotation.z=-.08,n.aL.el.rotation.x=-.3-i*.4,n.aR.el.rotation.x=-.25-i*.6*Math.max(0,Math.cos(t*14)),s&&(n.spine.rotation.x=.9,n.aL.sh.rotation.x=-2.2,n.aR.sh.rotation.x=-2,n.lL.hp.rotation.x=-1,n.lL.kn.rotation.x=1.4)}function Zd(){let n=qd(),t=fe({map:wt.camo(),roughness:.9}),e=fe({color:2763812,roughness:.8}),i=fe({color:12159594,roughness:.7}),s=fe({color:1710618,roughness:.7}),r=fe({color:3817520,roughness:.75}),o=new Gt,a=new Gt;a.position.y=.95,o.add(a);let l=new nt(n.pelvis,t);l.rotation.z=Math.PI/2,l.scale.set(1,1.2,.85),a.add(l);let c=new Gt;a.add(c);let h=new nt(n.torso,t);h.position.y=.3,h.scale.set(1.3,1,.8),c.add(h);let u=new nt(At(.46,.42,.34),e);u.position.y=.36,c.add(u);for(let Y=0;Y<3;Y++){let _=new nt(At(.11,.13,.06),e);_.position.set(-.13+Y*.13,.26,.19),c.add(_)}let f=new nt(At(.36,.4,.16),s);f.position.set(0,.36,-.24),c.add(f);let d=new Gt;d.position.y=.66,c.add(d);let g=new nt(new Ze(.13,12,10),i);g.position.y=.08,d.add(g);let x=new nt(new Ze(.155,14,8,0,Math.PI*2,0,Math.PI*.55),r);x.position.y=.12,d.add(x);let p=new nt(At(.2,.05,.05),s);p.position.set(0,.2,.12),d.add(p);let m=Y=>{let _=new Gt;_.position.set(.29*Y,.53,0),c.add(_),_.add(new nt(n.upper,t));let M=new Gt;return M.position.y=-.31,_.add(M),M.add(new nt(n.fore,s)),{sh:_,el:M}},b=Y=>{let _=new Gt;_.position.set(.11*Y,-.02,0),a.add(_),_.add(new nt(n.thigh,t));let M=new Gt;M.position.y=-.45,_.add(M);let k=new nt(n.shin,t);M.add(k);let F=new nt(At(.12,.12,.26),s);return F.position.set(0,-.4,.04),M.add(F),{hp:_,kn:M}},v=m(-1),E=m(1),D=b(-1),R=b(1),T=new Gt;T.position.set(.12,.38,.32),c.add(T),o.traverse(Y=>{Y.isMesh&&(Y.castShadow=!0)}),o.rotation.y=Math.PI;let L=new Gt;return L.add(o),{wrap:L,root:o,hips:a,spine:c,neck:d,aL:v,aR:E,lL:D,lR:R,hand:T}}function $d(n,t,e,i,s){let r=2+e*1.1,o=t*r,a=Math.min(1,e/4);n.lL.hp.rotation.x=Math.sin(o)*.7*a,n.lR.hp.rotation.x=-Math.sin(o)*.7*a,n.lL.kn.rotation.x=Math.max(0,-Math.cos(o))*1*a,n.lR.kn.rotation.x=Math.max(0,Math.cos(o))*1*a,n.hips.position.y=.95-Math.abs(Math.cos(o))*.04*a,n.spine.rotation.x=s?.25:.05,n.neck.rotation.x=-i*.5;let l=s?-.6:-1.45-i*.9;n.aR.sh.rotation.set(l,0,-.15),n.aR.el.rotation.x=-.35,n.aL.sh.rotation.set(l+.1,0,.55),n.aL.el.rotation.x=-.7,n.hand.rotation.x=s?.9:-i*.9,n.hand.position.y=s?.25:.38+i*.15}function Kd(){let n=fe({map:wt.camo(),roughness:.9}),t=fe({color:1842204,roughness:.7}),e=new Gt,i=new nt(new Jn(.045,.32,3,8),n);i.rotation.x=Math.PI/2-.25,i.position.set(.03,-.09,.22),e.add(i);let s=new nt(At(.07,.08,.1),t);s.position.set(0,-.03,.03),e.add(s);let r=new nt(new Jn(.042,.36,3,8),n);r.rotation.set(Math.PI/2-.2,0,-.45),r.position.set(-.11,-.08,0),e.add(r);let o=new nt(At(.07,.07,.1),t);return o.position.set(-.02,0,-.17),e.add(o),{group:e,leftHand:o,leftArm:r}}function Xd(n){let t=new Map;for(let e of[...n.children])!e.isMesh||e.isSkinnedMesh||e.isInstancedMesh||Array.isArray(e.material)||(t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e));for(let[e,i]of t){if(i.length<2)continue;let s=i.map(o=>{o.updateMatrix();let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();for(let l of Object.keys(a.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&a.deleteAttribute(l);return a.attributes.uv||a.setAttribute("uv",new Pe(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(o.matrix)}),r=new nt(ti(s,!1),e);n.add(r);for(let o of i)n.remove(o)}}function Jd(n){let t=new Gt,e=new Gt;e.rotation.y=Math.PI/2,t.add(e);let i=fe({color:7211792,metalness:.6,roughness:.3,envMap:n,envMapIntensity:.9}),s=fe({color:15526110,metalness:.4,roughness:.35,envMap:n,envMapIntensity:.7}),r=fe({color:14343648,metalness:1,roughness:.15,envMap:n,envMapIntensity:1.2}),o=fe({color:725272,metalness:.9,roughness:.08,envMap:n,envMapIntensity:1.3,side:dn}),a=fe({color:1118481,roughness:.6}),l=fe({color:1381653,roughness:.92}),c=new me({color:16773832}),h=new me({color:16722458}),u=new li;u.moveTo(-2.25,.3),u.lineTo(-1.82,.3),u.absarc(-1.4,.3,.42,Math.PI,0,!0),u.lineTo(.96,.3),u.absarc(1.38,.3,.42,Math.PI,0,!0),u.lineTo(2.24,.3),u.lineTo(2.36,.42),u.lineTo(2.37,.66),u.lineTo(2.22,.8),u.lineTo(.78,.9),u.lineTo(-1.8,.94),u.lineTo(-2.27,.9),u.lineTo(-2.35,.62),u.lineTo(-2.3,.36),u.closePath();let f=new Ms(u,{depth:1.72,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3,curveSegments:10});f.translate(0,0,-.86),e.add(new nt(f,i));let d=new li;d.moveTo(.78,.9),d.lineTo(.05,1.3),d.lineTo(-.7,1.33),d.lineTo(-1.95,.95),d.lineTo(-1.95,.9),d.closePath();let g=new Ms(d,{depth:1.36,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2});g.translate(0,0,-.68),e.add(new nt(g,i));let x=(R,T,L)=>{let Y=new li;Y.moveTo(R[0][0],R[0][1]);for(let M of R.slice(1))Y.lineTo(M[0],M[1]);let _=new nt(new Ba(Y),o);_.position.z=T,L&&(_.rotation.y=Math.PI,_.scale.x=-1),e.add(_)};x([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],.725),x([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],-.725,!0);let p=(R,T,L,Y)=>{let _=new I(Y[0],Y[1],0).normalize(),M=new I(0,0,-1),k=new I().crossVectors(M,_),F=new nt(new tn(R,T),o);F.quaternion.setFromRotationMatrix(new Yt().makeBasis(M,_,k)),F.position.set(L[0]+k.x*.045,L[1]+k.y*.045,0),e.add(F)};p(1.24,.8,[.42,1.1],[-.73,.4]),p(1.22,1.1,[-1.28,1.15],[-.956,-.296]);for(let R of[-.15,.15]){let T=(L,Y,_,M,k=.17)=>{let F=new nt(At(L,.012,k),s);F.position.set(Y,_,R),F.rotation.z=M,e.add(F)};T(1.46,1.5,.89,-.062),T(.75,-.33,1.375,-.04),T(1.32,-1.32,1.18,.29),T(.32,-2.1,.985,.08)}let m=(R,T,L,Y,_,M=0)=>{let k=new nt(R,T);return k.position.set(L,Y,_),k.rotation.y=M,e.add(k),k};m(At(.45,.07,.5),a,1.25,.92,0),m(At(.05,.26,1.4),a,2.41,.58,0);for(let R of[-.62,.62])m(en(.09,.09,.05,14),c,2.42,.6,R).rotation.z=Math.PI/2,m(At(.06,.2,.36),h,-2.39,.66,R*.95),m(en(.035,.035,.2,8),r,-2.3,.3,R*.6).rotation.z=Math.PI/2,m(At(.42,.18,.04),a,-.95,.66,R>0?.92:-.92);m(At(.1,.09,1.86),r,2.44,.36,0),m(At(.1,.09,1.86),r,-2.4,.38,0);let b=[],v=en(.34,.34,.26,20).rotateX(Math.PI/2),E=en(.2,.2,.27,14).rotateX(Math.PI/2),D=en(.07,.07,.28,8).rotateX(Math.PI/2);for(let[R,T]of[[1.38,.8],[1.38,-.8],[-1.4,.8],[-1.4,-.8]]){let L=new Gt;L.position.set(R,.34,T),e.add(L);let Y=new Gt;L.add(Y),Y.add(new nt(v,l)),Y.add(new nt(E,r)),Y.add(new nt(D,a));for(let _=0;_<5;_++){let M=new nt(At(.04,.3,.02),a);M.rotation.z=_*Math.PI/2.5,M.position.z=T>0?.14:-.14,Y.add(M)}b.push({w:L,spin:Y,front:R>0})}m(At(1.6,.4,1.3),a,-.4,.85,0),Xd(e);for(let R of b)Xd(R.spin);return t.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),{group:t,wheels:b}}function jd(){let n=new Gt,t=fe({map:wt.boxSide(),roughness:.7}),e=fe({map:wt.wood(),color:6964774,roughness:.75}),i=fe({color:9075274,metalness:.7,roughness:.4}),s=new nt(At(1.7,.62,.8),[e,e,e,e,t,t]);s.position.y=.31,n.add(s);for(let h of[-.82,.82]){let u=new nt(At(.06,.66,.84),i);u.position.set(h,.33,0),n.add(u)}let r=new Gt;r.position.set(0,.62,-.4),n.add(r);let o=new nt(At(1.72,.16,.82),[e,e,e,e,t,t]);o.position.set(0,.08,.41),r.add(o);let a=new nt(new mn(.6,.9,40,16,1,!0),new me({color:5941503,transparent:!0,opacity:.16,blending:pn,depthWrite:!1,side:dn}));a.position.y=20,n.add(a);let l=new rn(new cn({map:wt.glow(),color:6992127,transparent:!0,opacity:.8,blending:pn,depthWrite:!1}));l.scale.set(3,1.6,1),l.position.y=.8,n.add(l);let c=new Gt;return c.position.y=.75,n.add(c),n.traverse(h=>{h.isMesh&&h!==a&&(h.castShadow=!0)}),{group:n,lid:r,beam:a,glow:l,gunSlot:c}}function Qd(){let n=new Gt,t=fe({map:wt.wood(),color:5914148,roughness:.8}),e=new nt(At(1.7,.62,.8),t);return e.position.y=.31,e.castShadow=!0,n.add(e),n}function tp(n,t,e){let i=new Gt,s=fe({map:wt.perk(n,t,e),emissiveMap:wt.perk(n,t,e),emissive:16777215,emissiveIntensity:0,roughness:.5}),r=fe({color:new $t(t).multiplyScalar(.45),roughness:.55,metalness:.3}),o=new nt(At(1,2.1,.8),[r,r,r,r,s,r]);o.position.y=1.05,i.add(o);let a=new nt(en(.35,.45,.25,12),r);a.position.y=2.22,i.add(a);let l=new me({color:2236962}),c=new nt(new Ze(.18,10,8),l);c.position.y=2.42,i.add(c);let h=new rn(new cn({map:wt.glow(),color:t,transparent:!0,opacity:0,blending:pn,depthWrite:!1}));return h.scale.set(2.4,3.2,1),h.position.set(0,1.2,.5),i.add(h),i.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),{group:i,face:s,bulbM:l,glow:h,col:t}}function ep(){let n=new Gt,t=fe({color:5593178,metalness:.6,roughness:.5}),e=new nt(At(.7,1,.18),t);e.position.y=1.4,n.add(e);let i=new nt(new tn(.5,.18),new me({map:wt.label("POWER","#d8b020","#111",256,80)}));i.position.set(0,1.78,.095),n.add(i);let s=new Gt;s.position.set(0,1.3,.1),n.add(s);let r=new nt(At(.06,.45,.06),fe({color:2236962}));r.position.y=.2,s.add(r);let o=new nt(new Ze(.06,8,6),fe({color:12591136,roughness:.4}));o.position.y=.43,s.add(o),s.rotation.x=.6;let a=new nt(new Ze(.05,8,6),new me({color:4460817}));return a.position.set(.25,1.75,.1),n.add(a),{group:n,lever:s,lamp:a}}function np(){let n=new Gt,t=fe({color:3025456,metalness:.7,roughness:.45}),e=fe({color:2230320,emissive:10502399,emissiveIntensity:0,roughness:.4}),i=new nt(At(1.8,1,1.2),t);i.position.y=.5,n.add(i);let s=new nt(At(1.4,.5,.9),e);s.position.y=1.25,n.add(s);let r=new nt(At(1.8,.4,1.2),t);r.position.y=1.7,n.add(r);for(let c of[-.75,.75]){let h=new nt(en(.1,.1,1.4,8),fe({color:9079434,metalness:.9,roughness:.3}));h.position.set(c,1.4,.45),n.add(h)}let o=new nt(new tn(1.5,.3),new me({map:wt.label("THE FORGE","#14081c","#c88aff",512,100,"bold 60px Arial Black, Arial")}));o.position.set(0,2.1,0),n.add(o),o.position.z=.61;let a=new rn(new cn({map:wt.glow(),color:10502399,transparent:!0,opacity:0,blending:pn,depthWrite:!1}));a.scale.set(3.4,2.4,1),a.position.set(0,1.25,.7),n.add(a);let l=new Gt;return l.position.set(0,1.25,.2),n.add(l),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),{group:n,glowM:e,glow:a,slot:l}}var Uv=()=>tl("bm",()=>({wood:fe({map:wt.plank(),vertexColors:!0,roughness:.85}),metal:fe({map:wt.rust(),vertexColors:!0,roughness:.8,metalness:.3})}));function ip(){return Uv()}function el(n){return tl("piece"+n,()=>{let t=[],e=[];if(n==="wall"){for(let i of[-.92,0,.92])t.push(Ge(At(.16,2.6,.16),{x:i,y:1.3,c:9071178}));for(let i=0;i<6;i++)t.push(Ge(At(2.05,.3,.06),{y:.3+i*.38,z:.1,rz:Math.sin(i*7.3)*.04,c:[13676688,12097648,13150338][i%3]}));t.push(Ge(At(2.5,.14,.06),{y:1.2,z:-.1,rz:.85,c:10123866})),e.push(Ge(At(.8,.9,.03),{x:.4,y:1.4,z:.15,rz:.06,c:16777215}));for(let i of[-.92,0,.92])t.push(Ge(new ys(.1,.3,6),{x:i,y:2.75,c:9071178}))}else if(n==="door"){for(let i of[-.95,.95])t.push(Ge(At(.18,2.7,.18),{x:i,y:1.35,c:8018490}));t.push(Ge(At(2.1,.2,.2),{y:2.6,c:8018490}))}else if(n==="gate"){for(let i=0;i<7;i++)t.push(Ge(At(.24,2.2,.06),{x:.14+i*.25,y:1.15,c:[13676688,12097648,13150338][i%3]}));for(let i of[.5,1.8])t.push(Ge(At(1.76,.16,.06),{x:.88,y:i,z:.06,c:10123866}));t.push(Ge(At(2.1,.14,.06),{x:.88,y:1.15,z:.06,rz:.62,c:10123866}))}else if(n==="spikes"){t.push(Ge(At(1.9,.12,.12),{y:.25,c:6965802})),t.push(Ge(At(1.9,.12,.12),{y:.25,z:.5,c:6965802})),t.push(Ge(At(1.9,.12,.12),{y:.25,z:-.5,c:6965802}));for(let i=0;i<12;i++){let s=-.8+i%6*.32,r=i<6?.28:-.28;t.push(Ge(new ys(.06,1,5),{x:s,y:.55,z:r,rx:i<6?.55:-.55,c:13148272}))}e.push(Ge(At(1.9,.04,.04),{y:.42,c:16777215}))}return{wood:Qi(t),metal:e.length?Qi(e):null}})}var ts={pistol:{name:"Patrol .45",kind:"pistol",dmg:50,rpm:420,auto:!1,mag:8,reserve:80,reload:1.5,spread:.01,head:2.5,pierce:1,col:2763308,sound:[.9,.18]},ranger:{name:"Ranger Rifle",kind:"rifle",dmg:120,rpm:330,auto:!1,mag:10,reserve:120,reload:2.1,spread:.006,head:3,pierce:2,col:5913378,sound:[.6,.3]},viper:{name:"Viper SMG",kind:"smg",dmg:55,rpm:780,auto:!0,mag:30,reserve:180,reload:2,spread:.022,head:2.2,pierce:1,col:1974050,sound:[1.15,.14]},trench:{name:"Trench 12",kind:"shotgun",dmg:70,pellets:8,rpm:80,auto:!1,mag:6,reserve:48,reload:2.8,spread:.075,head:1.5,pierce:2,col:4861984,sound:[.45,.42]},kestrel:{name:"Kestrel AR",kind:"ar",dmg:95,rpm:640,auto:!0,mag:30,reserve:210,reload:2.3,spread:.014,head:2.5,pierce:2,col:3160618,sound:[.75,.24]},hammer:{name:"Hammer LMG",kind:"lmg",dmg:130,rpm:700,auto:!0,mag:100,reserve:400,reload:4.2,spread:.026,head:2.2,pierce:3,col:2895660,sound:[.55,.3]},brawler:{name:"Brawler Magnum",kind:"pistol",dmg:520,rpm:160,auto:!1,mag:6,reserve:60,reload:2.4,spread:.008,head:3,pierce:3,col:9409174,sound:[.5,.45]},ripper:{name:"Ripper SMG",kind:"smg",dmg:80,rpm:950,auto:!0,mag:40,reserve:280,reload:2.2,spread:.028,head:2.2,pierce:1,col:3811904,sound:[1.3,.13]},widow:{name:"Widowmaker",kind:"sniper",dmg:1600,rpm:50,auto:!1,mag:5,reserve:40,reload:3.2,spread:.001,head:4,pierce:6,col:2304042,sound:[.35,.6],zoom:2.6},ion:{name:"Ion Ray",kind:"ray",dmg:1400,rpm:260,auto:!1,mag:20,reserve:160,reload:2.4,spread:.004,head:1,pierce:1,splash:3.2,col:1727018,sound:[1.6,.35],wonder:!0}},lu=["ranger","viper","trench","kestrel","hammer","brawler","ripper","widow","ion","hammer","kestrel","ripper","ion"],cu={pistol:"Hellfire .45",ranger:"Longshot Rapture",viper:"Venom Kiss",trench:"Doomsayer 24",kestrel:"Raptor Reign",hammer:"Anvil of Ruin",brawler:"Judgment Day",ripper:"Shredder Supreme",widow:"Black Widow Queen",ion:"Ion Annihilator"};function nl(n,t=!1){let e=ts[n],i={key:n,pap:t,def:e,name:t?cu[n]:e.name,dmg:e.dmg*(t?2.4:1),mag:Math.round(e.mag*(t?1.5:1)),maxReserve:Math.round(e.reserve*(t?2:1)),clip:0,reserve:0,rpm:e.rpm*(t?1.12:1)};return i.clip=i.mag,i.reserve=i.maxReserve,i}var sp=[{key:"ranger",cost:500,i:16,j:23,face:[1,0]},{key:"viper",cost:1e3,i:32,j:30,face:[0,-1]},{key:"trench",cost:1500,i:13,j:14,face:[0,1]},{key:"kestrel",cost:1400,i:5,j:12,face:[1,0]}];var ae=n=>new on(n),yr=.9,go=2.3,xo=2.6,uu=class{constructor(){this.p=[],this.n=[],this.u=[]}quad(t,e,i,s,r,o,a,l,c){let h=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],u=[i[0]-t[0],i[1]-t[1],i[2]-t[2]],f=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]],d=[t,e,i,t,i,s],g=[o,a,l,o,l,c];f[0]*r[0]+f[1]*r[1]+f[2]*r[2]<0&&(d=[t,i,e,t,s,i],g=[o,l,a,o,c,l]);for(let x=0;x<6;x++)this.p.push(...d[x]),this.n.push(...r),this.u.push(...g[x])}wall(t,e,i,s,r,o,a){let l=(h,u)=>t==="x"?[h,u,e]:[e,u,h],c=(h,u)=>[h/2,u/3.4];this.quad(l(i,r),l(s,r),l(s,o),l(i,o),a,c(i,r),c(s,r),c(s,o),c(i,o))}flat(t,e,i,s,r,o,a=1/2){let l=[0,o?1:-1,0];this.quad([t,r,e],[i,r,e],[i,r,s],[t,r,s],l,[t*a,e*a],[i*a,e*a],[i*a,s*a],[t*a,s*a])}mesh(t){let e=new He;e.setAttribute("position",new re(this.p,3)),e.setAttribute("normal",new re(this.n,3)),e.setAttribute("uv",new re(this.u,2)),e.computeTangents?.call;let i=new nt(e,t);return i.receiveShadow=!0,i.castShadow=!0,i}};function Ov(n){let t=e=>e?e.getHexString():"-";return[n.type,t(n.color),n.map?n.map.uuid:"-",n.roughness,n.metalness,t(n.emissive),n.emissiveIntensity,n.transparent,n.opacity,n.side,n.vertexColors,n.blending,n.depthWrite].join("|")}function Fv(n,t){n.updateMatrixWorld(!0);let e=new Map;for(let r of t){if(!r.parent||Array.isArray(r.material))continue;let o=new I;r.getWorldPosition(o);let a=Ov(r.material)+"#"+Math.floor(o.x/32)+","+Math.floor(o.z/32);e.has(a)||e.set(a,[]),e.get(a).push(r)}let i=0,s=0;for(let r of e.values()){if(i+=r.length,r.length<2){s++;continue}let o=[],a=!1;for(let h of r){let u=h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone();for(let f of Object.keys(u.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&f!=="color"&&u.deleteAttribute(f);u.attributes.uv||u.setAttribute("uv",new Pe(new Float32Array(u.attributes.position.count*2),2)),u.applyMatrix4(h.matrixWorld),o.push(u),a=a||h.castShadow}let l=Object.keys(o[0].attributes).sort().join();if(!o.every(h=>Object.keys(h.attributes).sort().join()===l)){s+=r.length;continue}let c=new nt(Qi(o),r[0].material);c.castShadow=a,c.receiveShadow=!0,n.add(c);for(let h of r)h.parent.remove(h);s++}return{before:i,after:s}}function rp(n,t,e){let i={},s=P=>(n.add(P),P),r=[],o=(P,H,z)=>{let V=P.clone();return V.needsUpdate=!0,V.repeat.set(H,z),V},a={stucco:ae({map:wt.stucco(),normalMap:wt.stuccoN(),roughness:.92,color:14208184}),brick:ae({map:wt.brick(),normalMap:wt.brickN(),roughness:.9}),panel:ae({map:wt.panel(),roughness:.85}),diner:ae({map:wt.dinerWall(),roughness:.6}),block:ae({map:wt.block(),roughness:.9}),ceiling:ae({map:wt.ceiling(),roughness:.95}),carpet:ae({map:wt.carpet(),roughness:.98}),checker:ae({map:wt.tileChecker(),roughness:.45}),concrete:ae({map:wt.concrete(),roughness:.9}),wood:ae({map:wt.wood(),roughness:.75}),plank:ae({map:wt.plank(),roughness:.85}),metal:ae({map:wt.metal(),roughness:.6,metalness:.5}),rust:ae({map:wt.rust(),roughness:.85,metalness:.2}),dark:ae({color:1710620,roughness:.7}),trim:ae({color:3811868,roughness:.7})};i.M=a;let l=P=>P===3?a.brick:a.stucco,c=P=>P===0?a.panel:P===2?a.diner:a.block,h=(P,H)=>{for(let[z,V]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]])if(Ai(P+z,H+V)===1)return Ri[ne(P+z,H+V)];return 0},u=88,f=80,d=ae({map:o(wt.asphalt(),u/8,f/8),normalMap:o(wt.asphaltN(),u/4,f/4),normalScale:new ft(.6,.6),roughness:.82,color:10132122}),g=s(new nt(new tn(u,f),d));g.rotation.x=-Math.PI/2,g.position.set(u/2,0,f/2),g.receiveShadow=!0;let x=s(new nt(new tn(600,600),ae({color:1381391,roughness:1})));x.rotation.x=-Math.PI/2,x.position.set(u/2,-.02,f/2);let p=new on({map:wt.lines(),transparent:!0,depthWrite:!1,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),m=new tn(.5,5);m.rotateX(-Math.PI/2);for(let P=0;P<10;P++){let H=new nt(m,p);H.position.set(48+P*3.2,.01,6.5),s(H);let z=H.clone();z.position.set(6+P*3.2,.01,72),s(z)}let b=new on({map:wt.dirt(),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1});for(let[P,H,z]of[[8,8,10],[80,10,12],[10,70,12],[82,70,10],[44,4,9],[6,40,9],[84,36,9],[30,74,9],[60,74,10],[52,34,8],[22,40,7]]){let V=s(new nt(new tn(z,z),b));V.rotation.x=-Math.PI/2,V.rotation.z=P,V.position.set(P,.012,H)}let v=new Map,E=P=>(v.has(P)||v.set(P,new uu),v.get(P));for(let P=0;P<40;P++)for(let H=0;H<44;H++){let z=Ai(H,P),V=H*2,it=V+2,tt=P*2,S=tt+2;if(z===1){E(a.ceiling).flat(V,tt,it,S,3.4,!1);continue}if(z!==2&&z!==3&&z!==4)continue;let y=h(H,P),N=l(y),j=c(y);E(a.ceiling).flat(V,tt,it,S,3.4,!1);let ot=[[1,0,"z",it,tt,S,[1,0,0]],[-1,0,"z",V,tt,S,[-1,0,0]],[0,1,"x",S,V,it,[0,0,1]],[0,-1,"x",tt,V,it,[0,0,-1]]];for(let[et,Dt,pt,yt,jt,ht,vt]of ot){let Bt=Ai(H+et,P+Dt),Wt=Bt===1?c(Ri[ne(H+et,P+Dt)]):N;if(z===2){if(Bt===2)continue;if(Bt===3){E(N).wall(pt,yt,jt,ht,yr,go,vt);continue}if(Bt===4){E(N).wall(pt,yt,jt,ht,0,xo,vt);continue}E(Wt).wall(pt,yt,jt,ht,0,3.4,vt)}else if(Bt===1||Bt===0||Bt===6){let It=z===3?go:xo;E(Wt).wall(pt,yt,jt,ht,It,3.4,vt),z===3&&E(Wt).wall(pt,yt,jt,ht,0,yr,vt)}}z===3&&(E(a.wood).flat(V,tt,it,S,yr,!0),E(N).flat(V,tt,it,S,go,!1)),z===4&&E(N).flat(V,tt,it,S,xo,!1)}for(let P of Za){let H=P.floorKind==="carpet"?a.carpet:P.floorKind==="checker"?a.checker:a.concrete;E(H).flat(P.i0*2,P.j0*2,(P.i1+1)*2,(P.j1+1)*2,.01,!0,P.floorKind==="checker"?1/4:1/3)}for(let P=0;P<40;P++)for(let H=0;H<44;H++)Ai(H,P)===4&&E(a.concrete).flat(H*2,P*2,H*2+2,P*2+2,.012,!0);for(let[P,H]of v){let z=H.mesh(P);s(z)}let D=[],R=new Dn(2.1,.22,.05);i.planks=[];let T=[];for(let P of _n){let H=Vt(P.i),z=Vt(P.j),V=P.axis==="x"?0:Math.PI/2,it=P.outDir;for(let y of[-1,1])D.push(Ge(At(.12,go-yr,.25),{x:H+(P.axis==="x"?y*.94:0),z:z+(P.axis==="z"?y*.94:0),y:(yr+go)/2,ry:V,c:3811868}));let tt=new Gt;tt.position.set(H-it[0]*.55,0,z-it[1]*.55),tt.rotation.y=V,s(tt);let S=[];for(let y=0;y<6;y++){let N=new Ie,j=yr+.18+y%3*.45+(y>2?.2:0);N.position.set(0,j,y>2?-.06:0),N.rotation.z=(y%2?1:-1)*(.12+y*.13%.3),tt.add(N),S.push(N),T.push(N)}i.planks[P.id]={group:tt,list:S,base:S.map(y=>({y:y.position.y,rz:y.rotation.z}))}}{let P=new Ia(R,a.plank,T.length);P.castShadow=!0,P.receiveShadow=!0,s(P),n.updateMatrixWorld(!0);let H=new Yt().makeScale(0,0,0);T.forEach((z,V)=>{let it=z.matrixWorld.clone(),tt=!0;P.setMatrixAt(V,it),Object.defineProperty(z,"visible",{get:()=>tt,set:S=>{S=!!S,S!==tt&&(tt=S,P.setMatrixAt(V,S?it:H),P.instanceMatrix.needsUpdate=!0)},configurable:!0})}),P.instanceMatrix.needsUpdate=!0,P.computeBoundingSphere()}let L=new nt(Qi(D),ae({vertexColors:!0,roughness:.8}));L.castShadow=!0,s(L),i.doorMeshes=[];let Y=ae({map:o(wt.plank(),1,3),roughness:.85,color:11571312});for(let P of Ci){let H=new Gt,z=0,V=0;for(let[S,y]of P.tiles)z+=Vt(S),V+=Vt(y);H.position.set(z/P.tiles.length,0,V/P.tiles.length),H.rotation.y=P.axis==="x"?0:Math.PI/2,s(H);let it=new nt(At(4,xo,.14),Y);it.position.y=xo/2,it.castShadow=it.receiveShadow=!0,H.add(it);for(let S of[-1,1]){let y=new nt(At(4.4,.25,.06),a.plank);y.position.set(0,1.3,S*.11),y.rotation.z=S*.5,H.add(y)}let tt=new nt(new tn(1.2,.36),new me({map:wt.label("$"+P.cost,"#1a1208","#f0d080",256,76,"bold 50px Arial Black, Arial"),transparent:!0}));for(let S of[-1,1]){let y=tt.clone();y.position.set(0,1.9,S*.15),y.rotation.y=S<0?Math.PI:0,H.add(y)}i.doorMeshes[P.id]=H}let _=ae({map:o(wt.chain(),u/2.6,1),alphaTest:.5,side:dn,metalness:.6,roughness:.5,color:10133664}),M=[],k=2.8,F=(P,H,z,V)=>{let it=Math.hypot(z-P,V-H),tt=new nt(new tn(it,k),_);tt.position.set((P+z)/2,k/2,(H+V)/2),tt.rotation.y=-Math.atan2(V-H,z-P),tt.material.map.repeat.set(it/2.6,1),s(tt);for(let S=0;S<=it;S+=4){let y=S/it;M.push(Ge(en(.05,.05,k+.1,6),{x:P+(z-P)*y,z:H+(V-H)*y,y:k/2,c:7830396}))}M.push(Ge(en(.03,.03,it,6),{x:(P+z)/2,z:(H+V)/2,y:k,rz:Math.PI/2,ry:-Math.atan2(V-H,z-P),c:7830396}))},G=2;F(G,G,u-G,G),F(u-G,G,u-G,f-G),F(u-G,f-G,G,f-G),F(G,f-G,G,G),s(new nt(Qi(M),ae({vertexColors:!0,metalness:.7,roughness:.45})));let at=[],W=[],ut=7,Z=()=>(ut=ut*16807%2147483647)/2147483647;for(let P=0;P<220;P++){let H=Z()*Math.PI*2,z=62+Z()*70,V=u/2+Math.cos(H)*z*1.05,it=f/2+Math.sin(H)*z,tt=8+Z()*10;at.push(Ge(new ys(2+Z()*1.6,tt,7),{x:V,y:tt/2+1.5,z:it,c:new $t().setHSL(.3,.25,.08+Z()*.05).getHex()})),W.push(Ge(en(.25,.35,3,5),{x:V,y:1.5,z:it,c:2759954}))}s(new nt(Qi(at),ae({vertexColors:!0,roughness:1}))),s(new nt(Qi(W),ae({vertexColors:!0,roughness:1})));let _t=s(new nt(new Ze(420,24,16),new me({map:wt.sky(),side:Qe,fog:!1,depthWrite:!1})));_t.position.set(u/2,0,f/2),_t.renderOrder=-1;let Mt=new He,bt=[];for(let P=0;P<900;P++){let H=Z()*Math.PI*2,z=.08+Z()*1.4;bt.push(Math.cos(H)*Math.cos(z)*400+u/2,Math.sin(z)*400,Math.sin(H)*Math.cos(z)*400+f/2)}Mt.setAttribute("position",new re(bt,3)),s(new La(Mt,new to({color:13160703,size:1.3,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1})));let ee=s(new rn(new cn({map:wt.moon(),fog:!1,depthWrite:!1,transparent:!0})));ee.scale.set(60,60,1),ee.position.set(u/2-180,210,f/2-260);let oe=(P,H=.9)=>new cn({map:wt.glow(),color:P,transparent:!0,opacity:H,blending:pn,depthWrite:!1}),J=(P,H,z=P,V=H)=>{for(let it=H;it<=V;it++)for(let tt=P;tt<=z;tt++)fo(tt,it)},st=(P,H,z,V,it,tt=0)=>{let S=new nt(P,H);return S.position.set(z,V,it),S.rotation.y=tt,P.boundingSphere||P.computeBoundingSphere(),S.castShadow=P.boundingSphere.radius>.9,S.receiveShadow=!0,s(S),r.push(S),S},Tt=(P,H,z,V)=>{let it=new Gt;it.position.set(P,0,H),it.rotation.y=z,s(it);let tt=ae({map:wt.rust(),color:V,roughness:.8,metalness:.3}),S=new nt(At(1.8,.7,4.4),tt);S.position.y=.55,it.add(S);let y=new nt(At(1.6,.55,2.2),tt);y.position.set(0,1.15,.2),it.add(y);let N=new nt(At(1.62,.4,2),a.dark);N.position.set(0,1.15,.2),N.scale.set(1,1,1.02),it.add(N);for(let[j,ot]of[[.85,1.4],[-.85,1.4],[.85,-1.4],[-.85,-1.4]]){let et=new nt(en(.32,.32,.22,10),a.dark);et.rotation.z=Math.PI/2,et.position.set(j,.28,ot),it.add(et)}it.rotation.z=(Z()-.5)*.08,it.traverse(j=>{j.isMesh&&(j.castShadow=j.receiveShadow=!0,r.push(j))})};Tt(41,21,.2,8030874),J(20,9,20,11),Tt(13,49,1.4,10127962),J(5,23,7,25),Tt(70,66,.4,5925466),J(34,32,35,34),Tt(18,18,.1,6969978),J(8,8,9,10),st(At(3.4,1.5,1.8),ae({map:wt.metal(),color:3103290,roughness:.7,metalness:.4}),55,.75,35),J(27,17),st(At(3.6,1.1,.9),a.wood,50,.55,57),J(24,28,25,28),st(At(3.8,.12,1),ae({color:9050650,roughness:.5}),50,1.13,57),st(At(2.2,.8,.9),ae({color:3811914,roughness:.95}),37,.4,45.2),J(18,22),st(At(9.6,1.05,1),ae({color:13156520,roughness:.5}),65,.52,47),J(30,23,34,23),st(At(9.8,.08,1.2),ae({color:10099226,roughness:.3,metalness:.3}),65,1.08,47);for(let P=0;P<6;P++)st(en(.22,.22,.12,12),ae({color:10491928,roughness:.4}),61+P*1.6,.75,48.3),st(en(.04,.04,.7,6),a.metal,61+P*1.6,.35,48.3);for(let P of[51,53])st(At(1.6,.9,.5),ae({color:9050650,roughness:.5}),75,.45,P-.7),st(At(1.6,.9,.5),ae({color:9050650,roughness:.5}),75,.45,P+.7),st(At(1.2,.08,.8),ae({color:14209208,roughness:.4}),75,.78,P);J(37,25,37,26),st(At(3.6,.95,.8),a.metal,13,.48,23),J(6,11),st(At(1,1.4,.6),ae({color:10492442,roughness:.4,metalness:.4}),31,.7,13),J(15,6);for(let[P,H]of[[15.6,16.4],[20.4,16.4],[15.6,19.6],[20.4,19.6]])st(en(.12,.12,.6,8),a.metal,P,.3,H);i.fires=[];let gt=ae({map:wt.rust(),color:9064496,roughness:.8,metalness:.3});for(let[P,H]of[[24,18],[14,19],[36,18],[9,31],[31,35],[40,9]]){let z=Vt(P),V=Vt(H);st(en(.42,.42,1,12),gt,z,.5,V),J(P,H);let it=[];for(let S=0;S<3;S++){let y=new rn(new cn({map:wt.flame(),color:S?16742944:16760928,transparent:!0,blending:pn,depthWrite:!1}));y.position.set(z+(S-1)*.12,1.3,V),y.scale.set(.6,1.1,1),s(y),it.push(y)}let tt=new rn(oe(16740384,.5));tt.scale.set(5,4,1),tt.position.set(z,1.3,V),s(tt),i.fires.push({x:z,z:V,fl:it,gl:tt})}let Ht=ae({color:4869198,metalness:.6,roughness:.5});i.poles=[];for(let[P,H]of[[12,19],[33,17],[10,34],[36,33],[29,4],[4,13]]){let z=Vt(P),V=Vt(H);st(en(.12,.16,7,8),Ht,z,3.5,V),st(At(1.4,.15,.4),Ht,z+.6,7,V),J(P,H);let it=st(At(.6,.08,.3),new me({color:16760944}),z+1.1,6.9,V);it.castShadow=!1;let tt=new rn(oe(16752704,.55));tt.scale.set(4,4,1),tt.position.set(z+1.1,6.8,V),s(tt);let S=s(new nt(new $i(4.5,20),new me({map:wt.glow(),color:6965792,transparent:!0,blending:pn,depthWrite:!1})));S.rotation.x=-Math.PI/2,S.position.set(z+1.1,.03,V),i.poles.push({x:z+1.1,z:V})}let zt=(P,H,z,V,it,tt,S,y=0)=>{let N=new nt(new tn(tt,S),new me({map:wt.neon(P,H),transparent:!0,depthWrite:!1,side:dn}));N.position.set(z,V,it),N.rotation.y=y,s(N);let j=new rn(oe(H,.35));return j.scale.set(tt*1.2,S*2.5,1),j.position.set(z,V,it+(y?0:-.2)),s(j),N},Zt=st(At(9,2,.2),a.dark,43,4.6,41.8);Zt.castShadow=!1;for(let P of[39.5,46.5])st(en(.08,.08,1.4,6),Ht,P,3.6,41.8);i.motelSign=zt("LOCKWOOD MOTEL","#ff3a6a",43,4.75,41.65,8.6,1.6,Math.PI),i.vacancy=zt("NO VACANCY","#ff2a20",43,3.85,41.65,3.4,.6,Math.PI),zt("DINER","#3ae0ff",66,4.2,41.85,4,1.1,Math.PI),st(At(4.4,1.3,.15),a.dark,66,4.2,41.95);let Jt=new nt(new tn(5,.9),new on({map:wt.label("ED'S AUTO REPAIR","#c8b070","#2a1a0a",512,96,"bold 58px Arial Black, Arial"),roughness:.8}));Jt.position.set(18,2.95,30.02),s(Jt);let rt=(P,H,z,V,it=.45)=>{let tt=Vt(H)-V[0]*it,S=Vt(z)-V[1]*it;return P.position.set(tt,0,S),P.rotation.y=Math.atan2(V[0],V[1]),s(P),{x:Vt(H)+V[0]*.6,z:Vt(z)+V[1]*.6}};i.boxSpots=[{i:21,j:29,face:[0,-1],name:"Lobby"},{i:36,j:22,face:[0,1],name:"Diner"},{i:12,j:6,face:[0,1],name:"Garage"},{i:37,j:14,face:[-1,0],name:"Parking Lot"}],i.box=jd(),s(i.box.group);for(let P of i.boxSpots)fo(P.i,P.j),P.crate=Qd(),P.use=rt(P.crate,P.i,P.j,P.face,.2),P.pos={x:Vt(P.i)-P.face[0]*.2,z:Vt(P.j)-P.face[1]*.2},P.rot=Math.atan2(P.face[0],P.face[1]);i.perks=[{key:"revive",name:"Second Wind",col:"#3a8aff",sub:"SELF-REVIVE",cost:500,i:26,j:23,face:[-1,0],needsPower:!1,desc:"Get back up once when you go down"},{key:"tank",name:"Tank Tonic",col:"#e02020",sub:"MORE HEALTH",cost:2500,i:29,j:29,face:[0,-1],needsPower:!0,desc:"Take 2.5x more hits"},{key:"rapid",name:"Rapid Brew",col:"#2ac040",sub:"FAST RELOAD",cost:3e3,i:37,j:29,face:[0,-1],needsPower:!0,desc:"Reload twice as fast"},{key:"double",name:"Double Shot",col:"#e0b020",sub:"FIRE RATE",cost:2e3,i:15,j:13,face:[0,-1],needsPower:!0,desc:"Shoot 33% faster"},{key:"stamina",name:"Fleetfoot",col:"#f07020",sub:"MOVE FASTER",cost:2e3,i:33,j:22,face:[0,1],needsPower:!0,desc:"Run faster and longer"}];for(let P of i.perks)fo(P.i,P.j),P.m=tp(P.name,P.col,P.sub),P.use=rt(P.m.group,P.i,P.j,P.face,.2);i.sw=ep(),i.swUse=rt(i.sw.group,16,7,[-1,0],-.08-1),i.forge=np(),fo(7,7),i.forgeUse=rt(i.forge.group,7,7,[0,1],.1),i.wallbuys=sp.map(P=>{let H=ts[P.key],z=wt.chalk(P.key,(S,y,N)=>Bv(S,y,N,H.kind)),V=new nt(new tn(1.8,.9),new me({map:z,transparent:!0,depthWrite:!1,color:14209216})),it=Vt(P.i)+P.face[0]*1.02,tt=Vt(P.j)+P.face[1]*1.02;return V.position.set(it,1.55,tt),V.rotation.y=Math.atan2(P.face[0],P.face[1]),s(V),{...P,mesh:V,use:{x:Vt(P.i)+P.face[0]*1.6,z:Vt(P.j)+P.face[1]*1.6}}}),i.car=Jd(t),s(i.car.group),i.hemi=s(new ur(4872832,1709072,.55)),i.moonL=s(new dr(9085144,.55)),i.moonL.position.set(-60,90,-80),s(i.moonL.target),i.lightSrc=[{col:16763024,base:14,dist:16,decay:1.6,x:43,y:3,z:51,flick:.25,kind:"room"},{col:13168895,base:14,dist:17,decay:1.6,x:66,y:3,z:52,flick:.05,kind:"room"},{col:16767120,base:13,dist:17,decay:1.6,x:22,y:3,z:20,flick:.12,kind:"room"}];let C=new me({color:16773336});for(let[P,H]of[[43,51],[36,47],[50,55],[66,52],[60,50],[72,56],[22,20],[14,16],[28,24]]){let z=st(At(1.4,.06,.3),C,P,3.4-.04,H);z.castShadow=!1}return i.fires.forEach((P,H)=>i.lightSrc.push({col:16742960,base:10,dist:13,decay:1.7,x:P.x,y:1.6,z:P.z,kind:"fire",i:H})),i.lightPool=[0,1,2].map(()=>{let P=new fr(16777215,0,16,1.6);return P.position.set(0,-50,0),s(P),{light:P,src:null,w:0}}),i.carLight=new za(16773328,0,30,.55,.5,1.2),s(i.carLight),s(i.carLight.target),i.batched=Fv(n,r),i}function Bv(n,t,e,i){n.beginPath();let s=i==="smg"?150:i==="pistol"?90:210,r=(t-s)/2,o=e/2-12;n.moveTo(r,o),n.lineTo(r+s*.75,o),n.lineTo(r+s*.75,o-6),n.lineTo(r+s,o-6),n.lineTo(r+s,o+4),n.lineTo(r+s*.72,o+4),n.lineTo(r+s*.72,o+16),n.lineTo(r+s*.48,o+16),i!=="pistol"&&(n.lineTo(r+s*.46,o+40),n.lineTo(r+s*.4,o+40),n.lineTo(r+s*.4,o+18)),n.lineTo(r+s*.3,o+18),n.lineTo(r+s*.24,o+44),n.lineTo(r+s*.15,o+44),n.lineTo(r+s*.2,o+16),i!=="pistol"&&(n.lineTo(r+10,o+26),n.lineTo(r-6,o+30),n.lineTo(r-6,o+2)),n.closePath(),n.stroke(),n.beginPath(),n.moveTo(r+s*.3,o+8),n.lineTo(r+s*.6,o+8),n.stroke()}var Ue=Object.assign({q:"auto",sens:1,fov:75,vol:.8,inv:0,fps:0},JSON.parse(localStorage.getItem("ds_set")||"{}")),Cr=()=>localStorage.setItem("ds_set",JSON.stringify(Ue)),Di=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;Di&&Es("touch");var mp=()=>Ue.q==="auto"?Di?"low":"medium":Ue.q,Ar=ct("c"),An=new wa({canvas:Ar,antialias:!Di,powerPreference:"high-performance"});An.outputColorSpace=Mn;An.toneMapping=Bh;An.toneMappingExposure=1.4;An.autoClear=!1;var Ae=new _s;Ae.background=new $t(658710);Ae.fog=new Ta(658710,.024);var kv=new lr(An),gp=kv.fromScene(new Xa,.04).texture,be=new je(75,1,.05,300);be.rotation.order="YXZ";var bo=new _s,gu=new je(60,1,.01,10);bo.add(new ur(11581648,3156e3,1.4));var xp=new dr(16769216,1.2);xp.position.set(1,2,1);bo.add(xp);ru();var kt=rp(Ae,gp,mp());kt.hemi.intensity=1.3;kt.moonL.intensity=1.2;Ae.environment=gp;Ae.environmentIntensity=.22;var gl=1;function Tu(){let n=mp(),t=Math.min(devicePixelRatio||1,n==="high"?2:n==="medium"?1.5:1.25);if(An.setPixelRatio(t*gl),An.shadowMap.enabled=n!=="low",kt.moonL.castShadow=n!=="low",n!=="low"){let e=n==="high"?2048:1024;kt.moonL.shadow.mapSize.set(e,e);let i=kt.moonL.shadow.camera;i.left=i.bottom=-30,i.right=i.top=30,i.near=1,i.far=250,i.updateProjectionMatrix()}zd(n==="low"?2:n==="medium"?4:8),ct("qInfo").textContent="Graphics now: "+n.toUpperCase()+(Ue.q==="auto"?" (auto picks LOW on phones, MED on computers)":"")}function _p(){let n=innerWidth,t=innerHeight;An.setSize(n,t,!1),Ar.style.width=n+"px",Ar.style.height=t+"px",be.aspect=gu.aspect=n/t,yp(),gu.updateProjectionMatrix()}function yp(){let n=be.aspect;be.userData.fov=n<1?Math.min(100,Ue.fov*1.3):Ue.fov}addEventListener("resize",_p);var al=[];function As(n,t,e,i,s,r,o,a={}){let l=new cn({map:n,color:t,transparent:!0,depthWrite:!1,blending:a.add?pn:Wi,opacity:a.op??1}),c=new rn(l);return c.position.set(e,i,s),c.scale.set(r,r,1),Ae.add(c),al.push({sp:c,life:o,t:0,grow:a.grow||0,vy:a.vy||0,op:a.op??1}),c}function vp(n){for(let t=al.length-1;t>=0;t--){let e=al[t];e.t+=n;let i=e.t/e.life;e.sp.position.y+=e.vy*n;let s=e.sp.scale.x+e.grow*n;e.sp.scale.set(s,s,1),e.sp.material.opacity=e.op*(1-i),i>=1&&(Ae.remove(e.sp),e.sp.material.dispose(),al.splice(t,1))}}var ll=0;function Rs(n){let t=ct("toast");t.textContent=n,t.classList.add("show"),ll=2.6}var cl=0;function ss(n,t=3){let e=ct("center");e.innerHTML=n,e.classList.add("show"),cl=t}var zv=n=>K.device==="pad"?{use:"SQUARE",build:"CIRCLE"}[n]||n:K.device==="touch"?{use:"USE",build:"BUILD"}[n]||n:{use:"F",build:"B"}[n]||n,Ts=new I,il=new I,$={state:"title",t:0,round:0,toSpawn:0,spawnT:0,between:!1,betweenT:0,kills:0,heads:0,points:0,power:!1,flowT:0,flowDirty:!0,lastFlowK:-1,insta:0,dbl:0,pupsRound:0,repairPts:0,god:!1,mapDirty:!0},A={x:0,z:0,y:0,vy:0,yaw:0,pitch:0,hp:100,maxHp:100,lastHit:-9,guns:[],cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,perks:new Set,view:"fp",bob:0,ads:0,recoil:0,repT:0,driving:!1,semi:!1,heartT:0,speed:0},Ee=[],is=[],Er=[],wr=[],di=[],hl=Fd.filter(([n,t])=>he[ne(n,t)]===0),op={x:Vt(21)+1,z:Vt(25)+1},ni=new Gt;bo.add(ni);var Hv=Kd();ni.add(Hv.group);var _o=null;function Tr(){_o&&ni.remove(_o.group);let n=A.guns[A.cur];_o=n?_r(n.key,n.pap):null,_o&&ni.add(_o.group),yo&&Li.hand.remove(yo.group),yo=n?_r(n.key,n.pap):null,yo&&Li.hand.add(yo.group),Ke()}var Li=Zd();Ae.add(Li.wrap);Li.wrap.visible=!1;var yo=null,xu=Di?9:14,ap=Di?8:14,sl=[];function Gv(n){let t=be.position.x,e=be.position.z,i=kt.lightSrc,s=kt.lightPool;sl.length=0;for(let o of i)o.d=Math.hypot(o.x-t,o.z-e),sl.push(o);sl.sort((o,a)=>o.d-a.d);let r=sl.slice(0,s.length);for(let o of s)o.src&&!r.includes(o.src)&&(o.w-=n*3,o.w<=0&&(o.w=0,o.src=null));for(let o of r)if(!s.some(a=>a.src===o)){let a=s.find(l=>!l.src);if(a){a.src=o,a.w=0;let l=a.light;l.color.setHex(o.col),l.distance=o.dist,l.decay=o.decay,l.position.set(o.x,o.y,o.z)}}for(let o of s){let a=o.src,l=o.light;if(!a){l.intensity=0;continue}r.includes(a)&&(o.w=Math.min(1,o.w+n*3));let c=a.kind==="fire"?(9+Math.sin($.t*11+a.i*3)*1.5+ke())/10:1-(ke()<a.flick*.05?.8:0);l.intensity=a.base*c*o.w}}var lp=-1;function Cs(n,t){!t&&$.dbl>0&&(n*=2),$.points+=t?-n:n;let e=document.createElement("div");e.className="pop"+(t?" neg":""),e.textContent=(t?"-":"+")+n,e.style.bottom=20+ke()*30+"px",ct("points").appendChild(e),setTimeout(()=>e.remove(),1e3)}function Vv(){let n=$.round,t=ct("round");if(n<=5){let e='<span class="tally">';for(let i=0;i<Math.min(n,4);i++)e+="<i></i>";n===5&&(e+='<i class="x"></i>'),t.innerHTML=e+"</span>"}else t.textContent=n}function Ke(){lp!==$.points&&(ct("pts").textContent=$.points,lp=$.points);let n=A.guns[A.cur];n&&(ct("gunName").textContent=n.name,ct("gunName").className=n.pap?"pap":"",ct("clip").innerHTML=n.clip+"<small> / "+n.reserve+"</small>",ct("clip").className=n.clip<=n.mag*.25?"low":""),ct("nades").textContent="Grenades: "+A.nades,ct("perks").innerHTML=[...A.perks].map(e=>{let i=kt.perks.find(s=>s.key===e);return`<b style="background:${i.col};color:${i.col}"><span style="color:#fff">${i.name[0]}</span></b>`}).join(""),ct("powerups").innerHTML=($.insta>0?`<div class="${$.insta<5?"blink":""}">INSTA-KILL<br>${Math.ceil($.insta)}</div>`:"")+($.dbl>0?`<div class="${$.dbl<5?"blink":""}">DOUBLE POINTS<br>${Math.ceil($.dbl)}</div>`:"");let t=$.toSpawn+Ee.filter(e=>!e.dead).length;ct("zcount").textContent=$.between?"Next round soon":"Zombies left: "+t}var Mp=ct("minimap"),Xe=Mp.getContext("2d"),ul=document.createElement("canvas"),Tn=3.6;function Wv(){ul.width=88*Tn,ul.height=80*Tn;let n=ul.getContext("2d");for(let t=0;t<40;t++)for(let e=0;e<44;e++){let i=he[ne(e,t)];n.fillStyle=i===0?"#20261c":i===1?uo.has(Ri[ne(e,t)])?"#6a6458":"#3a3630":i===3?"#c09040":i===4?"#d0b050":i===7||i===8?"#a07040":i===9?"#805030":i===6?"#2c3028":"#9a9a9a",n.fillRect(e*2*Tn,t*2*Tn,2*Tn+.5,2*Tn+.5)}$.mapDirty=!1}function Xv(){$.mapDirty&&Wv();let n=Mp.width,t=A.driving?mt.x:A.x,e=A.driving?mt.z:A.z,i=A.driving?mt.h:A.yaw;Xe.clearRect(0,0,n,n),Xe.save(),Xe.translate(n/2,n/2),Xe.rotate(i),Xe.drawImage(ul,-t*Tn,-e*Tn),Xe.fillStyle="#ff3030";for(let r of Ee)r.dead||(Xe.beginPath(),Xe.arc((r.x-t)*Tn,(r.z-e)*Tn,4,0,7),Xe.fill());Xe.fillStyle="#5ab0ff";let s=kt.boxSpots[Rt.spot].pos;Xe.fillRect((s.x-t)*Tn-5,(s.z-e)*Tn-5,10,10),Xe.fillStyle="#ffd040",Xe.fillRect((mt.x-t)*Tn-4,(mt.z-e)*Tn-7,8,14),Xe.restore(),Xe.fillStyle="#fff",Xe.beginPath(),Xe.moveTo(n/2,n/2-10),Xe.lineTo(n/2-7,n/2+8),Xe.lineTo(n/2+7,n/2+8),Xe.fill()}var Rt={spot:0,state:"idle",t:0,key:null,uses:0,cycleT:0,model:null};function Au(){let n=kt.boxSpots[Rt.spot];kt.box.group.position.set(n.pos.x,0,n.pos.z),kt.box.group.rotation.y=n.rot,kt.boxSpots.forEach((t,e)=>t.crate.visible=e!==Rt.spot)}var mt={x:0,z:0,h:0,v:0,steer:0};function qv(){for(let[n,t]of[[27,12],[24,11],[30,14],[20,16],[32,8]]){let e=!0;for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++)(!Qn(n+i,t+s)||he[ne(n+i,t+s)]!==0)&&(e=!1);if(e)return{x:Vt(n),z:Vt(t)}}return{x:Vt(27),z:Vt(12)}}var _u=qv(),Nn={t:0},fu=ip(),yu=[{kind:"wall",name:"Wall",cost:250,hp:900,tile:7},{kind:"door",name:"Door",cost:400,hp:700,tile:8},{kind:"spikes",name:"Spikes",cost:300,hp:1600,tile:9}],ie={on:!1,sel:0,rot:0,ghost:null,gi:-1,gj:-1,ok:!1};function bp(){for(let n of Ee)Ae.remove(n.m.root);Ee.length=0;for(let n of is)Ae.remove(n.g);is.length=0;for(let n of Er)Ae.remove(n.sp);Er.length=0;for(let n of wr)Ae.remove(n.m);wr.length=0;for(let n of di){Ae.remove(n.g);for(let[t,e]of[[n.i,n.j]])he[ne(t,e)]=n.under,Gn[ne(t,e)]=-1}di.length=0}function Yv(){bp(),ru();for(let n of Sp)he[n]=6;for(let n of Ci)kt.doorMeshes[n.id].visible=!0;for(let n of _n)n.planks=6,kt.planks[n.id].list.forEach(t=>t.visible=!0);Object.assign($,{t:0,round:0,toSpawn:0,between:!1,kills:0,heads:0,points:500,power:!1,flowDirty:!0,insta:0,dbl:0,mapDirty:!0,downs:0,god:!1}),Object.assign(A,{x:op.x,z:op.z,y:0,vy:0,yaw:Math.PI,pitch:0,hp:100,maxHp:100,lastHit:-9,cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,view:"fp",ads:0,driving:!1}),A.perks.clear(),A.guns=[nl("pistol")],Tr(),Ep(!1),Rt.spot=0,Rt.state="idle",Rt.uses=0,Rt.model&&(kt.box.gunSlot.remove(Rt.model),Rt.model=null),kt.box.lid.rotation.x=0,Au(),Object.assign(mt,{x:_u.x,z:_u.z,h:0,v:0}),Ti(!1),ie.on=!1,document.body.classList.remove("building","driving"),ct("buildbar").classList.add("hidden"),ct("carhud").classList.add("hidden"),Ru(1),Ke()}var Sp=[];for(let n=0;n<he.length;n++)he[n]===6&&Sp.push(n);function Ep(n){$.power=n,kt.sw.lever.rotation.x=n?-.6:.6,kt.sw.lamp.material.color.set(n?3211072:4460817);for(let t of kt.perks){let e=n||!t.needsPower;t.m.face.material?.forEach?.(()=>{}),t.m.bulbM.color.set(e?t.col:2236962),t.m.glow.material.opacity=e?.35:0;let i=Array.isArray(t.m.face)?null:t.m.face;i&&(i.emissiveIntensity=e?.8:0)}kt.forge.glowM.emissiveIntensity=n?1.4:0,kt.forge.glow.material.opacity=n?.4:0}var Zv=n=>n<=4?[6,8,13,18][n-1]:Math.min(24+(n-5)*5,220),$v=n=>n<10?150+100*(n-1):Math.round(950*Math.pow(1.1,n-9)),Kv=()=>Di?16:24;function Ru(n){$.round=n,$.toSpawn=Zv(n),$.spawnT=n===1?3:1.5,$.between=!1,$.pupsRound=0,$.repairPts=0,n>1?(A.nades=Math.min(4,A.nades+2),se.round(!0),ss("ROUND "+n+(n===100?"<small>THE LAST ONE</small>":""),3)):ss("DEAD SHIFT<small>SURVIVE THE NIGHT</small>",3.5),Vv(),ct("round").classList.add("flash"),setTimeout(()=>ct("round").classList.remove("flash"),1200),Ke()}function Jv(n){if($.between){$.betweenT-=n,$.betweenT<=0&&Ru($.round+1);return}let t=Ee.filter(e=>!e.dead).length;$.spawnT-=n,$.toSpawn>0&&t<Kv()&&$.spawnT<=0&&(wp(),$.toSpawn--,$.spawnT=Math.max(.35,2-$.round*.08)*(.6+ke()*.8),Ke()),$.toSpawn===0&&t===0&&($.between=!0,$.betweenT=8,se.round(!1),ss($.round===100?"YOU SURVIVED ROUND 100<small>KEEP GOING IF YOU DARE</small>":"ROUND "+$.round+" SURVIVED",4),Ke())}function wp(){let n=$.round,t=ke(),e="walker";n>=6&&t<.1?e="toxic":n>=4&&t<.24?e="fat":n>=3&&t<.42&&(e="runner");let i=A.driving?mt.x:A.x,s=A.driving?mt.z:A.z,r=hl.filter(([d,g])=>{let x=Math.hypot(Vt(d)-i,Vt(g)-s);return x>12&&x<50});r.length||(r=hl.filter(([d,g])=>Math.hypot(Vt(d)-i,Vt(g)-s)>8)),r.length||(r=hl);let[o,a]=ws(r),l=Vt(o)+(ke()-.5)*1.4,c=Vt(a)+(ke()-.5)*1.4,h=Yd(e),u=$v(n),f=Math.min(1+n*.1,1.9)*(.85+ke()*.3);n>=8&&e==="walker"&&ke()<Math.min(.6,(n-7)*.08)&&(f=2.8+ke()*.6),e==="runner"&&(f=3.9+Math.min(n*.04,1.2),u*=.75),e==="fat"&&(f=Math.min(.9+n*.05,1.6),u*=2.3),e==="toxic"&&(f=1.7,u*=.9),h.root.position.set(l,-1.8,c),Ae.add(h.root),Ee.push({m:h,type:e,x:l,z:c,hp:u,maxHp:u,speed:f,state:"rise",t:0,atk:0,atkCd:0,dead:!1,deadT:0,yaw:ke()*6.28,rip:0,groanT:2+ke()*6,best:1e9,stuckT:0,cur:0,head:!1})}function Tp(n,t,e,i){let s=Math.hypot(e-n,i-t);return Ka(n,t,e-n,i-t,s,(r,o)=>mo(r,o)||r===3)>=s-.01}var jv=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function Ap(n,t,e,i){let s=n.m;if(n.dead){n.deadT+=t;let T=Math.min(1,n.deadT/.6);s.body.rotation.x=-T*Math.PI/2*n.fallDir,s.body.position.y=-T*.75*(s.scale||1)+Math.sin(T*Math.PI)*.2;let L=xu;n.deadT>L&&(s.root.position.y=-(n.deadT-L)*.8),n.deadT>L+1.6&&(Ae.remove(s.root),Ee.splice(Ee.indexOf(n),1));return}if(n.state==="rise"){n.t+=t;let T=Math.min(1,n.t/1.4);s.root.position.y=-1.8*(1-T),s.root.rotation.y=n.yaw,au(s,$.t,0,.6,!0),T>=1&&(n.state="move");return}let r=e-n.x,o=i-n.z,a=Math.hypot(r,o),l=Fe(n.x),c=Fe(n.z),h=Qn(l,c)?ne(l,c):0,u=e,f=i,d="walk",g=null;if(!(a<8&&Tp(n.x,n.z,e,i))){let T=ci[h],L=-1;for(let[Y,_]of jv){let M=l+Y,k=c+_;if(!Qn(M,k)||Y&&_&&(mo(he[ne(l+Y,c)],ne(l+Y,c))||mo(he[ne(l,c+_)],ne(l,c+_))||he[ne(l+Y,c)]===3||he[ne(l,c+_)]===3))continue;let F=ne(M,k);ci[F]<T&&(T=ci[F],L=F)}if(L>=0){let Y=he[L],_=L%44,M=L/44|0;if(u=Vt(_),f=Vt(M),Y===3&&_n[Gn[L]].planks>0){let k=_n[Gn[L]];d="window",g=k,u=Vt(k.i)+k.outDir[0]*1.15,f=Vt(k.j)+k.outDir[1]*1.15}else(Y===7||Y===8)&&(d="piece",g=di.find(k=>k.k===L))}}let x=n.speed,p=he[h];if(p===3&&(x*=.45),p===9){x*=.5;let T=di.find(L=>L.k===h);if(n.hp-=160*t*Math.max(1,$.round/6),T&&(T.hp-=12*t,T.hp<=0&&pp(T)),ke()<t*2&&se.spike(),n.hp<=0){xl(n,"spike");return}}let m=u-n.x,b=f-n.z,v=Math.hypot(m,b),E=!1;if(d==="window"&&v<.35)E=!0,n.yaw=Math.atan2(-g.outDir[0],-g.outDir[1]),n.rip+=t,n.rip>1.5&&(n.rip=0,g.planks=Math.max(0,g.planks-1),kt.planks[g.id].list[g.planks].visible=!1,se.plank(),$.flowDirty=!0);else if(d==="piece"&&g&&Math.hypot(g.x-n.x,g.z-n.z)<1.55)E=!0,n.yaw=Math.atan2(g.x-n.x,g.z-n.z),g.hp-=30*t,ke()<t*1.2&&se.plank(),g.hp<=0&&pp(g);else if(a<1.25+(n.type==="fat"?.2:0))E=!0,n.yaw=Math.atan2(r,o);else if(v>.01){let T=Math.min(v,x*t);n.x+=m/v*T,n.z+=b/v*T,n.yaw+=Ja(n.yaw,Math.atan2(m,b))*Math.min(1,t*8)}if(n.atkCd-=t,a<1.3+(n.type==="fat"?.2:0)&&n.atkCd<=0&&n.atk===0&&(n.atk=.001),n.atk>0){let T=n.atk;n.atk+=t/.8,T<.5&&n.atk>=.5&&a<1.6&&vl(A.driving?18:34),n.atk>=1&&(n.atk=0,n.atkCd=.4)}let D={x:n.x,z:n.z};gr(D,.3,mo),n.x=D.x,n.z=D.z;let R=ci[h];if(R<n.best-.5?(n.best=R,n.stuckT=0):n.stuckT+=t,n.stuckT>22&&a>18){let[T,L]=ws(hl);n.x=Vt(T),n.z=Vt(L),n.best=1e9,n.stuckT=0,n.state="rise",n.t=0}if(s.root.position.set(n.x,0,n.z),s.root.rotation.y=n.yaw,n.cur=Pi(n.cur,E?0:x,Math.min(1,t*6)),au(s,$.t,n.cur,Math.max(E?.5+.5*Math.sin($.t*6):0,n.atk>0?Math.sin(n.atk*Math.PI):0),p===3),n.groanT-=t,n.groanT<=0&&(n.groanT=3+ke()*7,a<30)){let T=Ja(A.yaw,Math.atan2(-r,-o));se.groan(Vn(-Math.sin(T),-1,1),a)}}function Qv(){for(let n=0;n<Ee.length;n++){let t=Ee[n];if(!(t.dead||t.state==="rise")){for(let e=n+1;e<Ee.length;e++){let i=Ee[e];if(i.dead||i.state==="rise")continue;let s=i.x-t.x,r=i.z-t.z,o=Math.hypot(s,r);if(o<.62&&o>1e-4){let a=(.62-o)/2;t.x-=s/o*a,t.z-=r/o*a,i.x+=s/o*a,i.z+=r/o*a}}if(!A.driving){let e=A.x-t.x,i=A.z-t.z,s=Math.hypot(e,i);s<.7&&s>1e-4&&(t.x-=e/s*(.7-s),t.z-=i/s*(.7-s))}}}}function Rr(n,t,e,i){n.dead||($.insta>0&&(t=1e12),n.hp-=t,se.hit(e),n.hp<=0?xl(n,i,e):(Cs(10),Rp(!1)))}function xl(n,t,e){n.dead=!0,n.deadT=0,n.fallDir=ke()<.5?1:-1;{let i=Ee.filter(s=>s.dead&&s!==n&&s.deadT<xu);if(i.length>=ap){i.sort((s,r)=>r.deadT-s.deadT);for(let s=0;s<=i.length-ap;s++)i[s].deadT=xu}}if($.kills++,e&&$.heads++,Cs(t==="knife"?130:e?100:t==="nuke"?0:60),Rp(!0),se.kill(),As(wt.blood(),16777215,n.x,1.1,n.z,.9,.5,{grow:1.5}),n.type==="toxic"){se.toxic();let i=As(wt.puff(),6356800,n.x,1,n.z,3.5,6,{op:.55,grow:.4});Er.push({x:n.x,z:n.z,t:6})}t!=="nuke"&&$.pupsRound<4&&ke()<.035&&Cp(n.x,n.z),Ke()}var fl=0;function Rp(n){let t=ct("hit");t.className=n?"kill":"",t.style.opacity=1,fl=.18,n||se.hitmarker()}var dl={max:["MAX AMMO",4259680],insta:["INSTA-KILL",16728128],dbl:["DOUBLE POINTS",16764992],nuke:["NUKE",16744480],carp:["CARPENTER",4235519]};function Cp(n,t,e){e=e||ws(Object.keys(dl)),$.pupsRound++;let i=new Gt;i.position.set(n,1,t);let s=new rn(new cn({map:wt.glow(),color:dl[e][1],transparent:!0,blending:pn,depthWrite:!1}));s.scale.set(1.8,1.8,1),i.add(s);let r=new rn(new cn({map:wt.label(dl[e][0],"rgba(0,0,0,0)","#fff",512,96,"bold 52px Arial Black, Arial"),transparent:!0,depthWrite:!1}));r.scale.set(1.9,.36,1),r.position.y=.75,i.add(r),Ae.add(i),is.push({g:i,kind:e,x:n,z:t,t:26})}function t1(n){if(se.powerup(n.kind),ss(dl[n.kind][0],2),n.kind==="max"){for(let t of A.guns)t.reserve=t.maxReserve;A.nades=Math.max(A.nades,4)}if(n.kind==="insta"&&($.insta=30),n.kind==="dbl"&&($.dbl=30),n.kind==="nuke"){ct("flash").style.opacity=1,pl=1;for(let t of Ee)!t.dead&&t.state!=="rise"&&xl(t,"nuke");for(let t of Ee)t.dead||xl(t,"nuke");Cs(400),se.boom()}if(n.kind==="carp"){for(let t of _n)t.planks=6,kt.planks[t.id].list.forEach(e=>e.visible=!0);$.flowDirty=!0,Cs(200)}Ke()}var pl=0;function vl(n){if(!($.god||$.state!=="play")&&(A.hp-=n,A.lastHit=$.t,se.hurt(),ho(.8,.5,200),ct("dmg").style.opacity=1,A.hp<=0))if(A.perks.has("revive")){A.perks.delete("revive"),A.hp=A.maxHp,ss("SECOND WIND<small>YOU GOT BACK UP</small>",2.5);for(let t of Ee)!t.dead&&Math.hypot(t.x-A.x,t.z-A.z)<5&&(t.x+=(t.x-A.x)*.8,t.z+=(t.z-A.z)*.8);Ke()}else Pp()}function Pp(){$.state="over",A.hp=0,Ti(!1),document.pointerLockElement&&document.exitPointerLock();let n=Math.max(+localStorage.getItem("ds_best")||0,$.round);localStorage.setItem("ds_best",n),ct("stats").innerHTML=`You made it to <b>round ${$.round}</b><br>Kills: <b>${$.kills}</b> &nbsp; Headshots: <b>${$.heads}</b><br>Points left: <b>${$.points}</b><br>Best round: <b>${n}</b>`,setTimeout(()=>{ct("hud").classList.add("hidden"),ct("touch").classList.remove("live"),ct("over").classList.remove("hidden")},1200),ss("YOU DIED",2)}function Pr(){return A.guns[A.cur]}function vu(){let n=Pr();!n||A.reloadT>0||n.clip>=n.mag||n.reserve<=0||(A.reloadT=n.def.reload*(A.perks.has("rapid")?.5:1),A.reloadMax=A.reloadT,se.reload(0))}function _l(n,t=!1){let e=A.guns.findIndex(s=>s.key===n),i=nl(n,t);e>=0?(A.guns[e]=i,A.cur=e):A.guns.length<2?(A.guns.push(i),A.cur=A.guns.length-1):A.guns[A.cur]=i,A.reloadT=0,A.swapT=.4,Tr()}var cp=new I,hp=new I;function e1(){let n=Pr();if(!n)return;n.clip--,A.fireT=60/(n.rpm*(A.perks.has("double")?1.33:1)),A.recoil=Math.min(1,A.recoil+.35);let t=n.def;se.shot(t.sound[0],t.sound[1],!!t.wonder),ho(.3,.6,60),be.getWorldPosition(cp);let e=t.pellets||1;for(let i=0;i<e;i++){let s=t.spread*(A.ads>.5?.35:1)*(A.speed>1?1.6:1);hp.set((ke()-.5)*2*s,(ke()-.5)*2*s,-1).normalize().applyQuaternion(be.quaternion),n1(cp,hp,n)}A.pitch=Vn(A.pitch+.006+t.sound[1]*.01,-1.45,1.45),Mu=.05,Ke(),n.clip===0&&vu()}var Mu=0,Mo=new rn(new cn({map:wt.glow(),color:16760944,transparent:!0,blending:pn,depthWrite:!1}));Mo.scale.set(.25,.25,1);bo.add(Mo);var up=new I,du=new I;function n1(n,t,e){let i=Math.hypot(t.x,t.z),s=150;i>1e-4&&(s=Ka(n.x,n.z,t.x,t.z,150*i,u=>Nd(u))/i),t.y<-1e-4&&(s=Math.min(s,-n.y/t.y)),t.y>1e-4&&(s=Math.min(s,(3.4-n.y)/t.y));let r=[];for(let u of Ee){if(u.dead||u.state==="rise"&&u.t<.7||Math.hypot(u.x-n.x,u.z-n.z)>s+2)continue;let f=u.m.scale||1;u.m.head.getWorldPosition(up),u.m.spine.getWorldPosition(du),du.y+=.25*f;let d=[[up,.17*f,!0],[du,(u.type==="fat"?.48:.32)*f,!1]],g=1/0,x=!1;for(let[p,m,b]of d){let v=p.x-n.x,E=p.y-n.y,D=p.z-n.z,R=v*t.x+E*t.y+D*t.z;if(R<0)continue;let T=v*v+E*E+D*D-R*R;if(T<m*m){let L=R-Math.sqrt(m*m-T);L<g&&(g=L,x=b)}}if(g===1/0){let p=u.x-n.x,m=u.z-n.z,b=(p*t.x+m*t.z)/Math.max(1e-6,i*i),v=n.x+t.x*b-u.x,E=n.z+t.z*b-u.z,D=n.y+t.y*b;b>0&&v*v+E*E<.09&&D>0&&D<.9*f&&(g=b)}g<s&&r.push([g,u,x])}r.sort((u,f)=>u[0]-f[0]);let o=e.def.pierce||1,a=s;for(let u=0;u<Math.min(o,r.length);u++){let[f,d,g]=r[u];Rr(d,e.dmg*(g?e.def.head:1)*Math.pow(.75,u),g,"gun"),As(wt.blood(),16777215,n.x+t.x*f,n.y+t.y*f,n.z+t.z*f,.4,.35,{grow:1}),u===o-1&&(a=f)}let l=n.x+t.x*a,c=n.y+t.y*a,h=n.z+t.z*a;if(e.def.splash){As(wt.glow(),5308272,l,c,h,2.5,.4,{add:!0,grow:4});for(let u of Ee)!u.dead&&Math.hypot(u.x-l,u.z-h)<e.def.splash&&Rr(u,e.dmg,!1,"gun")}else r.length||As(wt.puff(),10064e3,l,c,h,.25,.4,{grow:.8})}function i1(){if(A.knifeT>0)return;A.knifeT=.5,se.knife();let n=null,t=1.9;for(let e of Ee){if(e.dead||e.state==="rise")continue;let i=e.x-A.x,s=e.z-A.z,r=Math.hypot(i,s),o=Math.abs(Ja(Math.atan2(-i,-s),A.yaw));r<t&&o<1&&(t=r,n=e)}n&&Rr(n,150+$.round*25,!1,"knife")}function s1(){if(A.nades<=0)return;A.nades--,Ke();let n=new nt(new Ze(.08,8,6),new on({color:3820074,roughness:.6}));Ae.add(n),be.getWorldDirection(Ts),be.getWorldPosition(il),wr.push({m:n,x:il.x+Ts.x*.5,y:il.y,z:il.z+Ts.z*.5,vx:Ts.x*14,vy:Ts.y*14+3,vz:Ts.z*14,t:2.2})}function r1(n){for(let t=wr.length-1;t>=0;t--){let e=wr[t];e.t-=n,e.vy-=18*n;let i=e.x+e.vx*n,s=e.z+e.vz*n,r=he[ne(Vn(Fe(i),0,43),Vn(Fe(s),0,39))];if(po(r)||r===3?(e.vx*=-.4,e.vz*=-.4):(e.x=i,e.z=s),e.y+=e.vy*n,e.y<.08&&(e.y=.08,e.vy*=-.35,e.vx*=.7,e.vz*=.7),e.m.position.set(e.x,e.y,e.z),e.t<=0){Ae.remove(e.m),wr.splice(t,1),se.boom(),ho(1,1,300),As(wt.glow(),16752704,e.x,1,e.z,3,.4,{add:!0,grow:10}),As(wt.puff(),5263440,e.x,1.2,e.z,2,1.6,{grow:3,vy:.8,op:.8});for(let a of Ee){if(a.dead)continue;let l=Math.hypot(a.x-e.x,a.z-e.z);l<5.5&&Rr(a,(900+$.round*120)*(1-l/6),!1,"nade")}let o=Math.hypot(A.x-e.x,A.z-e.z);o<3.5&&!A.driving&&vl(25*(1-o/3.5))}}}function ns(n,t){return Math.hypot(n.x-A.x,n.z-A.z)<t}function bu(n){ct("prompt").innerHTML=n}function Sr(n){return $.points<n?(se.deny(),Rs("Not enough points"),!1):(Cs(n,!0),se.buy(),Ke(),!0)}var ui=()=>`<span class="k">${zv("use")}</span>`;function o1(n){let t="",e=xn("use"),i=K.use;if(A.driving){bu(ui()+" Get out"),e&&f1();return}let s=!1;for(let r of _n){let o={x:Vt(r.i)-r.outDir[0]*1.1,z:Vt(r.j)-r.outDir[1]*1.1};if(r.planks<6&&ns(o,1.6)){t="Hold "+ui()+" to rebuild the barrier",i&&(s=!0,A.repT+=n,A.repT>.7&&(A.repT=0,kt.planks[r.id].list[r.planks].visible=!0,r.planks++,se.nail(),$.flowDirty=!0,$.repairPts<500&&(Cs(10),$.repairPts+=10),Ke()));break}}if(s||(A.repT=0),!t)for(let r of Ci){if(r.open)continue;let o=0,a=0;for(let[l,c]of r.tiles)o+=Vt(l),a+=Vt(c);if(ns({x:o/r.tiles.length,z:a/r.tiles.length},2.6)){t=ui()+" Open door to "+r.label+" ["+r.cost+"]",e&&Sr(r.cost)&&Ip(r);break}}if(!t){for(let r of kt.wallbuys)if(ns(r.use,1.6)){let o=A.guns.find(l=>l.key===r.key),a=o?o.pap?4500:Math.round(r.cost/2):r.cost;t=ui()+(o?" Buy ammo for "+o.name:" Buy "+ts[r.key].name)+" ["+a+"]",e&&Sr(a)&&(o?(o.reserve=o.maxReserve,o.clip=o.mag,Ke()):_l(r.key));break}}if(!t){for(let r of kt.perks)if(ns(r.use,1.7)){A.perks.has(r.key)?t=r.name+": you have it":r.needsPower&&!$.power?t=r.name+": turn on the power first":(t=ui()+" "+r.name+" ("+r.desc+") ["+r.cost+"]",e&&Sr(r.cost)&&(A.perks.add(r.key),se.perk(),r.key==="tank"&&(A.maxHp=250,A.hp=250),Rs(r.name+": "+r.desc),Ke()));break}}if(!t&&!$.power&&ns(kt.swUse,1.8)&&(t=ui()+" Turn on the power",e&&(Ep(!0),se.power(),ss("POWER ON",2.5))),!t&&ns(kt.forgeUse,2)){let r=Pr();if(!$.power)t="The Forge: turn on the power first";else if(Nn.t>0)t="The Forge is working...";else if(!r||r.pap)t="The Forge: this gun is already upgraded";else if(t=ui()+" Upgrade "+r.name+" [5000]",e&&Sr(5e3)){Nn.t=2.5;let o=r.key;A.guns[A.cur]=nl(o,!0),Tr(),se.power(),ss(cu[o]||"UPGRADED",2),Nn.model=_r(o,!0).group,Nn.model.scale.setScalar(1.8),kt.forge.slot.add(Nn.model)}}if(!t){let r=kt.boxSpots[Rt.spot];ns(r.use,2)&&(Rt.state==="idle"?(t=ui()+" Mystery Box [950]",e&&Sr(950)&&a1()):Rt.state==="ready"?(t=ui()+" Take "+ts[Rt.key].name,e&&(_l(Rt.key),Lp())):t="")}!t&&ns(mt,3.2)&&(t=ui()+" Drive the car",e&&u1()),bu(t)}function Ip(n){n.open=!0;for(let[t,e]of n.tiles)he[ne(t,e)]=1,Ri[ne(t,e)]=n.zone;uo.add(n.zone),kt.doorMeshes[n.id].visible=!1,se.door(),$.flowDirty=!0,$.mapDirty=!0,Rs(n.label+" opened")}function a1(){Rt.state="rolling",Rt.t=0,Rt.cycleT=0,Rt.uses++,se.box()}function Lp(){Rt.state="idle",Rt.model&&(kt.box.gunSlot.remove(Rt.model),Rt.model=null)}function fp(n){Rt.model&&kt.box.gunSlot.remove(Rt.model),Rt.model=_r(n,!1).group,Rt.model.scale.setScalar(2),Rt.model.rotation.y=Math.PI/2,kt.box.gunSlot.add(Rt.model)}function l1(n){let t=kt.box.lid;if(t.rotation.x=Pi(t.rotation.x,Rt.state==="idle"||Rt.state==="moving"?0:-1.2,Math.min(1,n*6)),kt.box.beam.visible=Rt.state!=="moving",Rt.state==="rolling"){Rt.t+=n,Rt.cycleT-=n;let e=Rt.t/3.2;Rt.model&&(Rt.model.position.y=e*.6),Rt.cycleT<=0&&(Rt.cycleT=.08+e*.15,fp(ws(lu.filter(i=>!A.guns.some(s=>s.key===i))))),Rt.t>=3.2&&(Rt.uses>4&&ke()<.3?(Rt.state="teddy",Rt.t=0,se.teddy(),Cs(950),Rs("The box is moving! You got your points back."),Rt.model&&(kt.box.gunSlot.remove(Rt.model),Rt.model=null)):(Rt.key=ws(lu.filter(i=>!A.guns.some(s=>s.key===i))),fp(Rt.key),Rt.model.position.y=.6,Rt.state="ready",Rt.t=0,se.boxReveal()))}else if(Rt.state==="ready")Rt.t+=n,Rt.model&&(Rt.model.position.y=.6-Rt.t/9*.6),Rt.t>9&&Lp();else if(Rt.state==="teddy"&&(Rt.t+=n,kt.box.group.position.y=Math.min(6,Rt.t*Rt.t),Rt.t>2.5)){kt.box.group.position.y=0;let e=kt.boxSpots.map((i,s)=>s).filter(i=>i!==Rt.spot);Rt.spot=ws(e),Rt.uses=0,Rt.state="idle",Au(),Rs("The box moved to the "+kt.boxSpots[Rt.spot].name)}}function Dp(){ie.on=!ie.on,document.body.classList.toggle("building",ie.on),ct("buildbar").classList.toggle("hidden",!ie.on),!ie.on&&ie.ghost&&(ie.ghost.visible=!1),Up(),ie.on&&Rs("Build mode: aim at the ground, "+(K.device==="touch"?"tap FIRE to place, SWAP to change piece":K.device==="pad"?"R2 to place, Triangle to change piece":"click to place, Q to change piece"))}function Up(){ct("buildbar").innerHTML=yu.map((n,t)=>`<div class="${t===ie.sel?"sel":""}">${n.name}<span>${n.cost}</span></div>`).join("")}var dp=new me({color:4259680,transparent:!0,opacity:.35,depthWrite:!1});function c1(){if(!ie.on)return;xn("swap")&&(ie.sel=(ie.sel+1)%yu.length,Up(),ie.ghost&&(Ae.remove(ie.ghost),ie.ghost=null)),xn("rotate")&&(ie.rot^=1);let n=yu[ie.sel];ie.ghost||(ie.ghost=new nt(el(n.kind).wood,dp),Ae.add(ie.ghost));let t=-Math.sin(A.yaw),e=-Math.cos(A.yaw),i=Fe(A.x+t*2.4),s=Fe(A.z+e*2.4),r=Qn(i,s)?ne(i,s):-1,o=r>=0?he[r]:-1,a=Fe(A.x)===i&&Fe(A.z)===s;ie.ok=(o===0||o===1)&&!a&&!Ee.some(l=>!l.dead&&Fe(l.x)===i&&Fe(l.z)===s)&&!(Math.abs(Vt(i)-mt.x)<2.6&&Math.abs(Vt(s)-mt.z)<2.6),ie.gi=i,ie.gj=s,ie.ghost.visible=!0,ie.ghost.position.set(Vt(i),0,Vt(s)),ie.ghost.rotation.y=ie.rot?Math.PI/2:0,dp.color.set(ie.ok&&$.points>=n.cost?4259680:16728112),bu(n.name+" ["+n.cost+"]"+(ie.ok?"":" - cannot build here")),K.fire&&!A.semi&&(A.semi=!0,ie.ok?Sr(n.cost)&&h1(n,i,s,ie.rot):se.deny())}function h1(n,t,e,i){let s=ne(t,e),r=new Gt,o=el(n.kind),a=new nt(o.wood,fu.wood);a.castShadow=!0,r.add(a),o.metal&&r.add(new nt(o.metal,fu.metal));let l=null;if(n.kind==="door"){l=new Gt,l.position.x=-.88;let h=new nt(el("gate").wood,fu.wood);l.add(h),r.add(l)}r.position.set(Vt(t),0,Vt(e)),r.rotation.y=i?Math.PI/2:0,Ae.add(r);let c={k:s,i:t,j:e,x:Vt(t),z:Vt(e),g:r,gate:l,hp:n.hp,kind:n.kind,under:he[s]};di.push(c),he[s]=n.tile,Gn[s]=di.length-1,se.build(),$.flowDirty=!0,$.mapDirty=!0}function pp(n){let t=di.indexOf(n);t<0||(Ae.remove(n.g),he[n.k]=n.under,Gn[n.k]=-1,di.splice(t,1),se.crash(.4),$.flowDirty=!0,$.mapDirty=!0)}function u1(){A.driving=!0,se.carDoor(),document.body.classList.add("driving"),ct("carhud").classList.remove("hidden"),ie.on=!1,document.body.classList.remove("building"),ct("buildbar").classList.add("hidden"),ie.ghost&&(ie.ghost.visible=!1),Ti(!0,0)}function f1(){A.driving=!1,se.carDoor(),document.body.classList.remove("driving"),ct("carhud").classList.add("hidden"),Ti(!1),kt.carLight.intensity=0;for(let n of[1,-1]){let t=mt.x+Math.cos(mt.h)*1.8*n,e=mt.z-Math.sin(mt.h)*1.8*n,i=he[ne(Vn(Fe(t),0,43),Vn(Fe(e),0,39))];if(!po(i)){A.x=t,A.z=e;break}}A.yaw=mt.h,mt.v=0}function Np(n){let t=kt.car.group;if(A.driving){let e=K.gas-K.brake;mt.steer=Pi(mt.steer,-K.mx,Math.min(1,n*6)),mt.v+=e*(e*mt.v<0?22:11)*n,mt.v*=Math.pow(.55,n),mt.v=Vn(mt.v,-7,24),mt.h+=mt.steer*mt.v*.11*n;let i=mt.x-Math.sin(mt.h)*mt.v*n,s=mt.z-Math.cos(mt.h)*mt.v*n,r={x:i,z:s};gr(r,1.15,$a)|gr({x:i-Math.sin(mt.h)*1.3,z:s-Math.cos(mt.h)*1.3},1,$a)|gr({x:i+Math.sin(mt.h)*1.3,z:s+Math.cos(mt.h)*1.3},1,$a)?(Math.abs(mt.v)>6&&(se.crash(Math.min(1,Math.abs(mt.v)/20)),ho(1,.6,200)),mt.v*=-.25):(mt.x=r.x,mt.z=r.z);for(let a of Ee)if(!(a.dead||a.state==="rise")&&Math.hypot(a.x-mt.x,a.z-mt.z)<1.9)if(Math.abs(mt.v)>5)se.splat(),Rr(a,400+Math.abs(mt.v)*120+$.round*40,!1,"car"),mt.v*=.9;else{let l=a.x-mt.x,c=a.z-mt.z,h=Math.hypot(l,c)||1;a.x=mt.x+l/h*1.9,a.z=mt.z+c/h*1.9}A.x=mt.x,A.z=mt.z,Ti(!0,Math.abs(mt.v)/24),ct("carhud").innerHTML=Math.round(Math.abs(mt.v)*2.237)+" <small>MPH</small>",kt.carLight.intensity=60,kt.carLight.position.set(mt.x-Math.sin(mt.h)*2.4,.8,mt.z-Math.cos(mt.h)*2.4),kt.carLight.target.position.set(mt.x-Math.sin(mt.h)*14,0,mt.z-Math.cos(mt.h)*14)}t.position.set(mt.x,0,mt.z),t.rotation.y=mt.h;for(let e of kt.car.wheels)e.spin.rotation.z-=mt.v*n/.34,e.front&&(e.w.rotation.y=mt.steer*.5)}var Su=performance.now(),rl=0,pu=0,mu=0,ol=0;function Op(n){if($.t+=n,Cd(),Pd(n),K.sens=Ue.sens,K.invertY=!!Ue.inv,xn("pause")){kp();return}if(A.driving||(A.yaw-=K.lx,A.pitch=Vn(A.pitch-K.ly,-1.45,1.45)),xn("view")&&(A.view=A.view==="fp"?"tp":"fp"),xn("build")&&!A.driving&&Dp(),K.fire||(A.semi=!1),!A.driving){let i=(K.sprint||Id())&&K.my>.3&&!K.aim&&A.reloadT<=0,s=(i?6.4:4.2)*(A.perks.has("stamina")?1.15:1)*(K.aim?.6:1),r=Math.min(1,Math.hypot(K.mx,K.my)),o=-Math.sin(A.yaw),a=-Math.cos(A.yaw),l=Math.cos(A.yaw),c=-Math.sin(A.yaw),h=o*K.my+l*K.mx,u=a*K.my+c*K.mx,f=Math.hypot(h,u);f>1e-4?(h=h/f*r*s,u=u/f*r*s):h=u=0;let d={x:A.x+h*n,z:A.z+u*n};gr(d,.35,(x,p)=>po(x,p)||x===7),A.x=d.x,A.z=d.z,A.speed=Math.hypot(h,u),A.sprinting=i&&A.speed>1,xn("jump")&&A.y<=0&&(A.vy=4.6),A.vy-=14*n,A.y=Math.max(0,A.y+A.vy*n),A.y===0&&(A.vy=Math.max(0,A.vy)),A.bob+=A.speed*n*1.8;let g=Pr();if(A.fireT-=n,A.knifeT-=n,A.swapT-=n,A.reloadT>0&&(A.reloadT-=n,A.reloadT<=0&&g)){let x=Math.min(g.mag-g.clip,g.reserve);g.clip+=x,g.reserve-=x,se.reload(1),Ke()}ie.on||(xn("reload")&&vu(),(xn("swap")||xn("swapBack"))&&A.guns.length>1&&(A.cur=(A.cur+1)%A.guns.length,A.reloadT=0,A.swapT=.35,Tr()),xn("slot1")&&A.guns[0]&&(A.cur=0,Tr()),xn("slot2")&&A.guns[1]&&(A.cur=1,Tr()),xn("knife")&&i1(),xn("grenade")&&s1(),K.fire&&g&&A.reloadT<=0&&A.swapT<=0&&A.knifeT<=0&&!A.sprinting&&(g.clip<=0?A.semi||(se.dry(),A.semi=!0,vu()):A.fireT<=0&&(g.def.auto||!A.semi||K.device==="touch")&&(e1(),A.semi=!0))),A.ads=Pi(A.ads,K.aim&&!A.sprinting&&A.reloadT<=0&&!ie.on?1:0,Math.min(1,n*12)),c1()}A.recoil=Math.max(0,A.recoil-n*4),o1(n),Np(n),$.t-A.lastHit>3.5&&A.hp<A.maxHp&&(A.hp=Math.min(A.maxHp,A.hp+A.maxHp*.5*n)),ct("dmg").style.opacity=Vn(1-A.hp/A.maxHp,0,1)*.9,A.hp<A.maxHp*.35&&(A.heartT-=n,A.heartT<=0&&(se.heartbeat(),A.heartT=.9)),$.flowT-=n;let t=ne(Vn(Fe(A.x),0,43),Vn(Fe(A.z),0,39));if($.flowDirty||t!==$.lastFlowK&&$.flowT<=0){Od(Fe(A.x),Fe(A.z)),$.lastFlowK=t,$.flowT=.25,$.flowDirty=!1;for(let i of Ee)i.best=1e9}for(let i=Ee.length-1;i>=0;i--){let s=Ee[i];s&&Ap(s,n,A.x,A.z)}if(Qv(),$.state!=="play")return;Jv(n),r1(n),l1(n);let e=!1;for(let i=Er.length-1;i>=0;i--){let s=Er[i];if(s.t-=n,s.t<=0){Er.splice(i,1);continue}Math.hypot(s.x-A.x,s.z-A.z)<2.6&&!A.driving&&(e=!0,ke()<n*2&&vl(8))}ct("toxicfx").style.opacity=e?.7:0;for(let i=is.length-1;i>=0;i--){let s=is[i];s.t-=n,s.g.position.y=1+Math.sin($.t*3)*.15,s.g.visible=s.t>5||Math.sin($.t*18)>0,Math.hypot(s.x-A.x,s.z-A.z)<1.6?(t1(s),Ae.remove(s.g),is.splice(i,1)):s.t<=0&&(Ae.remove(s.g),is.splice(i,1))}$.insta>0&&($.insta-=n),$.dbl>0&&($.dbl-=n),Nn.t>0&&(Nn.t-=n,Nn.model&&(Nn.model.rotation.y+=n*3),Nn.t<=0&&Nn.model&&(kt.forge.slot.remove(Nn.model),Nn.model=null));for(let i of di)if(i.gate){let s=Math.hypot(i.x-A.x,i.z-A.z)<2.2;i.gate.rotation.y=Pi(i.gate.rotation.y,s?1.5:0,Math.min(1,n*6))}for(let i of kt.fires)for(let s of i.fl)s.scale.y=1+Math.sin($.t*13+s.id)*.15;Gv(n),vp(n),ll>0&&(ll-=n,ll<=0&&ct("toast").classList.remove("show")),cl>0&&(cl-=n,cl<=0&&ct("center").classList.remove("show")),fl>0&&(fl-=n,fl<=0&&(ct("hit").style.opacity=0)),pl>0&&(pl-=n,ct("flash").style.opacity=Math.max(0,pl)),($.t*4|0)!==(($.t-n)*4|0)&&Ke()}function d1(n){let t=A.view==="tp"||A.driving;if(A.driving){let c=mt.x+Math.sin(mt.h)*7,h=mt.z+Math.cos(mt.h)*7;be.position.lerp(Ts.set(c,3.2,h),Math.min(1,n*5)),be.lookAt(mt.x-Math.sin(mt.h)*4,1,mt.z-Math.cos(mt.h)*4)}else{let c=1.62+A.y+Math.sin(A.bob*2)*.035*(A.speed>.5?1:0);if(be.rotation.set(A.pitch+A.recoil*.02,A.yaw,0),t){let u=A.x+Math.sin(A.yaw)*2.6*Math.cos(A.pitch)+Math.cos(A.yaw)*.6,f=A.z+Math.cos(A.yaw)*2.6*Math.cos(A.pitch)-Math.sin(A.yaw)*.6,d=Ka(A.x,A.z,u-A.x,f-A.z,Math.hypot(u-A.x,f-A.z),p=>po(p)),g=Math.hypot(u-A.x,f-A.z),x=Math.max(.2,(d-.3)/g);be.position.set(A.x+(u-A.x)*x,c+.3+Math.sin(A.pitch)*2.6*.5,A.z+(f-A.z)*x)}else be.position.set(A.x,c,A.z)}let e=Pr(),i=e&&e.def.zoom&&A.ads>.8?e.def.zoom:1,s=(be.userData.fov||Ue.fov)/(1+A.ads*.25)/i;Math.abs(be.fov-s)>.01&&(be.fov=s,be.updateProjectionMatrix()),ct("scope").style.opacity=i>1?1:0,ct("cross").classList.toggle("hide",A.ads>.6||A.driving),Li.wrap.visible=t&&!A.driving,Li.wrap.visible&&(Li.wrap.position.set(A.x,A.y,A.z),Li.wrap.rotation.y=A.yaw,$d(Li,$.t,A.speed,A.pitch,A.sprinting)),ni.visible=!t&&!ie.on;let r=A.ads,o=A.reloadT>0?Math.sin(Math.min(1,1-A.reloadT/(A.reloadMax||1))*Math.PI):0,a=A.swapT>0?A.swapT/.4:0,l=A.knifeT>0?Math.sin((.5-A.knifeT)/.5*Math.PI):0;ni.position.set(Pi(.17,0,r)+l*-.1,Pi(-.19,-.095,r)-o*.12-a*.3+Math.sin(A.bob*2)*.008*(1-r),Pi(-.38,-.27,r)+A.recoil*.05-l*.15),ni.rotation.set(o*.6+A.recoil*.08+(A.sprinting?-.35:0),(A.sprinting?.6:0)+l*.8,o*.4),Mu>0?(Mu-=n,Mo.visible=!t,Mo.position.set(ni.position.x,ni.position.y+.06,ni.position.z-.55)):Mo.visible=!1,kt.moonL.position.set(A.x-30,60,A.z-40),kt.moonL.target.position.set(A.x,0,A.z),An.clear(),An.render(Ae,be),ni.visible&&(An.clearDepth(),An.render(bo,gu)),$.t%.1<n&&Xv()}function Fp(n){requestAnimationFrame(Fp);let t=Math.min(.05,(n-Su)/1e3);if(Su=n,rl+=t,pu++,rl>1&&(mu=Math.round(pu/rl),rl=0,pu=0,ct("fps").textContent=mu+" FPS",$.state==="play"&&Ue.q==="auto"&&(mu<35?ol++:ol=0,ol>=3&&gl>.6&&(gl-=.15,Tu(),ol=0))),$.state==="play")Op(t);else if($.state==="over"){$.t+=t,vp(t);for(let e of Ee)Ap(e,t,A.x,A.z)}$.state==="play"||$.state==="over"||$.state==="pause"?d1($.state==="pause"?0:t):($.t+=t,be.position.set(44+Math.sin($.t*.08)*30,9,40+Math.cos($.t*.08)*30),be.lookAt(44,1,46),be.fov!==60&&(be.fov=60,be.updateProjectionMatrix()),An.clear(),An.render(Ae,be)),Jh()}var p1=["title","pause","settings","controls","over","admin","pin"],Ir="title";function Rn(n){for(let t of p1)ct(t).classList.toggle("hidden",t!==n)}function Bp(){Ud(),jh(Ue.vol),Yv(),Pu=!1,$.state="play",Rn(null),ct("hud").classList.remove("hidden"),ct("touch").classList.add("live"),K.device==="kbm"&&!Di&&Ar.requestPointerLock?.()}function kp(){$.state==="play"&&($.state="pause",K.fire=K.aim=!1,Ti(!1),Rn("pause"),ct("touch").classList.remove("live"),document.pointerLockElement&&document.exitPointerLock())}function m1(){$.state="play",Rn(null),ct("touch").classList.add("live"),Su=performance.now(),A.driving&&Ti(!0,0),K.device==="kbm"&&!Di&&Ar.requestPointerLock?.()}function zp(){$.state="title",bp(),Rn("title"),ct("hud").classList.add("hidden"),ct("touch").classList.remove("live"),Ti(!1),Hp()}function Hp(){let n=+localStorage.getItem("ds_best")||0;ct("best").textContent=n?"Best: round "+n:""}ct("bUpright").onclick=()=>document.body.classList.add("upright");ct("bPlay").onclick=Bp;ct("bAgain").onclick=Bp;ct("bMenu").onclick=zp;ct("bResume").onclick=m1;ct("bQuit").onclick=zp;ct("bControls").onclick=()=>{Ir="title",Rn("controls")};ct("bControls2").onclick=()=>{Ir="pause",Rn("controls")};ct("bSettings").onclick=()=>{Ir="title",Lr(),Rn("settings")};ct("bSettings2").onclick=()=>{Ir="pause",Lr(),Rn("settings")};var Cu=!1;function Ml(){ct("admPts").textContent=$.points.toLocaleString();for(let n of ct("admPapSeg").children)n.classList.toggle("on",+n.dataset.v==1===Cu);ct("admExtra").children[1].textContent="GOD MODE: "+($.god?"ON":"OFF"),ct("admExtra").children[1].classList.toggle("on",!!$.god)}function So(n){ct("admMsg").textContent=n}ct("admGuns").innerHTML=Object.keys(ts).map(n=>`<button data-k="${n}">${ts[n].name}</button>`).join("");var Pu=!1,fi="",g1=n=>[...n].reduce((t,e)=>t*31+e.charCodeAt(0)|0,7);function Gp(){So(""),Ml(),Rn("admin")}function vo(){[...ct("pinDots").children].forEach((n,t)=>n.classList.toggle("f",t<fi.length))}function ml(n){if(n==="x"){Rn("pause");return}if(n==="b"){fi=fi.slice(0,-1),vo();return}fi.length>=4||(fi+=n,ct("pinMsg").textContent="",vo(),fi.length===4&&(g1(fi)===7945292?(Pu=!0,fi="",vo(),Gp()):(fi="",ct("pinMsg").textContent="Wrong PIN",setTimeout(vo,250))))}for(let n of ct("pinPad").children)n.onclick=()=>ml(n.dataset.k);addEventListener("keydown",n=>{ct("pin").classList.contains("hidden")||(n.stopImmediatePropagation(),n.preventDefault(),/^\d$/.test(n.key)?ml(n.key):n.key==="Backspace"?ml("b"):n.key==="Escape"&&ml("x"))},!0);ct("bAdmin").onclick=()=>{if(Pu)return Gp();fi="",vo(),ct("pinMsg").textContent="",Rn("pin")};ct("bAdmBack").onclick=()=>Rn("pause");for(let n of ct("admMoney").children)n.onclick=()=>{let t=+n.dataset.n;$.points+=t,Ke(),Ml(),So("Added "+t.toLocaleString()+" points to you.")};for(let n of ct("admPapSeg").children)n.onclick=()=>{Cu=n.dataset.v==="1",Ml()};for(let n of ct("admGuns").children)n.onclick=()=>{_l(n.dataset.k,Cu),Ke(),So("You now have the "+Pr().name+".")};ct("admExtra").children[0].onclick=()=>{for(let n of A.guns)n.clip=n.mag,n.reserve=n.maxReserve;A.nades=Math.max(A.nades,4),Ke(),So("Ammo and grenades refilled.")};ct("admExtra").children[1].onclick=()=>{$.god=!$.god,Ml(),So($.god?"God mode on: zombies cannot hurt you.":"God mode off.")};ct("bSetBack").onclick=()=>Rn(Ir);ct("bCtlBack").onclick=()=>Rn(Ir);function Lr(){for(let n of ct("qSeg").children)n.classList.toggle("on",n.dataset.q===Ue.q);for(let n of ct("invSeg").children)n.classList.toggle("on",+n.dataset.v===Ue.inv);for(let n of ct("fpsSeg").children)n.classList.toggle("on",+n.dataset.v===Ue.fps);ct("sens").value=Ue.sens,ct("fov").value=Ue.fov,ct("vol").value=Ue.vol,ct("fps").classList.toggle("hidden",!Ue.fps),Tu()}for(let n of ct("qSeg").children)n.onclick=()=>{Ue.q=n.dataset.q,gl=1,Cr(),Lr()};for(let n of ct("invSeg").children)n.onclick=()=>{Ue.inv=+n.dataset.v,Cr(),Lr()};for(let n of ct("fpsSeg").children)n.onclick=()=>{Ue.fps=+n.dataset.v,Cr(),Lr()};ct("sens").oninput=n=>{Ue.sens=+n.target.value,Cr()};ct("fov").oninput=n=>{Ue.fov=+n.target.value,yp(),Cr()};ct("vol").oninput=n=>{Ue.vol=+n.target.value,jh(Ue.vol),Cr()};Rd(Ar,{canLock:()=>$.state==="play",onUnlock:()=>{$.state==="play"&&K.device==="kbm"&&kp()},toast:Rs,playing:()=>$.state==="play"});_p();Tu();Lr();Hp();Au();Object.assign(mt,_u);Np(0);ct("loading").textContent="";ct("titleHint").textContent=Di?"Plays best with your phone sideways. A PS5 controller works too.":"Keyboard and mouse or a PS5 controller.";requestAnimationFrame(Fp);var x1=(n,t)=>{for(let e=0;e<n*30&&$.state==="play";e++)t&&_1(),Op(1/30),Jh();return $.state};function _1(){let n=null,t=1e9;for(let e of Ee){if(e.dead||e.state==="rise")continue;let i=Math.hypot(e.x-A.x,e.z-A.z);i<t&&(t=i,n=e)}K.fire=!1,n&&t<25&&Tp(A.x,A.z,n.x,n.z)&&(A.yaw=Math.atan2(-(n.x-A.x),-(n.z-A.z)),A.pitch=Math.atan2(1.2*(n.m.scale||1)-1.62,t),be.rotation.set(A.pitch,A.yaw,0),be.position.set(A.x,1.62,A.z),be.updateMatrixWorld(),K.fire=!K.fire_last,K.fire_last=K.fire)}window.__ds={inp:K,WD:kt,box:Rt,build:ie,toggleBuild:Dp,sim:x1,G:$,P:A,zombies:Ee,pups:is,windows:_n,doors:Ci,startRound:Ru,giveGun:_l,hurt:vl,gameOver:Pp,car:mt,pieces:di,dropPup:Cp,spawnZombie:wp,openDoor:Ip,damageZombie:Rr};

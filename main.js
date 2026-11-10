var M0=0,df=1,b0=2;var Ad=1,S0=2,Ei=3,es=0,rn=1,_n=2,Ji=0,ji=1,xn=2,pf=3,mf=4,E0=5,vs=100,w0=101,T0=102,A0=103,R0=104,C0=200,P0=201,I0=202,L0=203,Ac=204,Rc=205,D0=206,U0=207,N0=208,O0=209,F0=210,B0=211,k0=212,z0=213,H0=214,Cc=0,Pc=1,Ic=2,hr=3,Lc=4,Dc=5,Uc=6,Nc=7,Rd=0,G0=1,V0=2,Qi=0,W0=1,X0=2,q0=3,Qh=4,Y0=5,Z0=6,$0=7,gf="attached",K0="detached",Cd=300,ur=301,fr=302,Oc=303,Fc=304,il=306,ho=1e3,bs=1001,Bc=1002,An=1003,J0=1004;var Go=1005;var ti=1006,Gl=1007;var Ss=1008;var Ai=1009,Pd=1010,Id=1011,uo=1012,tu=1013,Es=1014,ei=1015,wo=1016,eu=1017,nu=1018,dr=1020,Ld=35902,Dd=1021,Ud=1022,Xn=1023,Nd=1024,Od=1025,ar=1026,pr=1027,iu=1028,su=1029,Fd=1030,ru=1031;var ou=1033,va=33776,Ma=33777,ba=33778,Sa=33779,kc=35840,zc=35841,Hc=35842,Gc=35843,Vc=36196,Wc=37492,Xc=37496,qc=37808,Yc=37809,Zc=37810,$c=37811,Kc=37812,Jc=37813,jc=37814,Qc=37815,th=37816,eh=37817,nh=37818,ih=37819,sh=37820,rh=37821,Ea=36492,oh=36494,ah=36495,Bd=36283,lh=36284,ch=36285,hh=36286;var Ta=2300,uh=2301,Vl=2302,yf=2400,_f=2401,xf=2402;var j0=3200,Q0=3201;var kd=0,tm=1,$i="",Tn="srgb",ss="srgb-linear",au="display-p3",sl="display-p3-linear",Aa="linear",Oe="srgb",Ra="rec709",Ca="p3";var zs=7680;var vf=519,em=512,nm=513,im=514,zd=515,sm=516,rm=517,om=518,am=519,fh=35044;var Mf="300 es",Ti=2e3,Pa=2001,ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wl=Math.PI/180,Ia=180/Math.PI;function li(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function un(n,t,e){return Math.max(t,Math.min(e,n))}function lm(n,t){return(n%t+t)%t}function Xl(n,t,e){return(1-e)*n+e*t}function ai(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var dt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],b=s[1],v=s[4],S=s[7],D=s[2],A=s[5],R=s[8];return r[0]=o*y+a*b+l*D,r[3]=o*p+a*v+l*A,r[6]=o*m+a*S+l*R,r[1]=c*y+h*b+u*D,r[4]=c*p+h*v+u*A,r[7]=c*m+h*S+u*R,r[2]=f*y+d*b+g*D,r[5]=f*p+d*v+g*A,r[8]=f*m+d*S+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ql.makeScale(t,e)),this}rotate(t){return this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ql=new re;function Hd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cm(){let n=La("canvas");return n.style.display="block",n}var bf={};function wa(n){n in bf||(bf[n]=!0,console.warn(n))}function hm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function um(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fm(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Sf=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ef=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[ss]:{transfer:Aa,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Tn]:{transfer:Oe,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sl]:{transfer:Aa,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ef),fromReference:n=>n.applyMatrix3(Sf)},[au]:{transfer:Oe,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ef),fromReference:n=>n.applyMatrix3(Sf).convertLinearToSRGB()}},dm=new Set([ss,sl]),be={enabled:!0,_workingColorSpace:ss,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=$r[t].toReference,s=$r[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return $r[n].primaries},getTransfer:function(n){return n===$i?Aa:$r[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray($r[t].luminanceCoefficients)}};function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,dh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=La("canvas")),Hs.width=t.width,Hs.height=t.height;let i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=lr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(lr(e[i]/255)*255):e[i]=lr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pm=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zl(s[o].image)):r.push(Zl(s[o]))}else r=Zl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mm=0,Rn=class n extends ns{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=bs,s=bs,r=ti,o=Ss,a=Xn,l=Ai,c=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=li(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ho:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case Bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ho:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case Bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Cd;Rn.DEFAULT_ANISOTROPY=1;var xe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,S=(d+1)/2,D=(m+1)/2,A=(h+f)/4,R=(u+y)/4,L=(g+p)/4;return v>S&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=R/i):S>D?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=R/r,s=L/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-y)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ph=class extends ns{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends ph{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ua=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mh=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*y,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let D=Math.sqrt(v),A=Math.atan2(D,m*b);p=Math.sin(p*A)/D,a=Math.sin(a*A)/D}let S=a*b;if(l=l*p+f*S,c=c*p+d*S,h=h*p+g*S,u=u*p+y*S,p===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new I,wf=new Cn,ci=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),Wo.subVectors(this.max,Kr),Gs.subVectors(t.a,Kr),Vs.subVectors(t.b,Kr),Ws.subVectors(t.c,Kr),Vi.subVectors(Vs,Gs),Wi.subVectors(Ws,Vs),ds.subVectors(Gs,Ws);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-ds.z,ds.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,ds.z,0,-ds.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-ds.y,ds.x,0];return!Kl(e,Gs,Vs,Ws,Wo)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,Gs,Vs,Ws,Wo))?!1:(Xo.crossVectors(Vi,Wi),e=[Xo.x,Xo.y,Xo.z],Kl(e,Gs,Vs,Ws,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xi=[new I,new I,new I,new I,new I,new I,new I,new I],Jn=new I,Vo=new ci,Gs=new I,Vs=new I,Ws=new I,Vi=new I,Wi=new I,ds=new I,Kr=new I,Wo=new I,Xo=new I,ps=new I;function Kl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ps.fromArray(n,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),h=i.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gm=new ci,Jr=new I,Jl=new I,qn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);let e=Jr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(Jl)),this.expandByPoint(Jr.copy(t.center).sub(Jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new I,jl=new I,qo=new I,Xi=new I,Ql=new I,Yo=new I,tc=new I,fo=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){jl.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(jl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qo),a=Xi.dot(this.direction),l=-Xi.dot(qo),c=Xi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jl).addScaledVector(qo,f),d}intersectSphere(t,e){vi.subVectors(t.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,i,s,r){Ql.subVectors(e,t),Yo.subVectors(i,t),tc.crossVectors(Ql,Yo);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);let l=a*this.direction.dot(Yo.crossVectors(Xi,Yo));if(l<0)return null;let c=a*this.direction.dot(Ql.cross(Xi));if(c<0||l+c>o)return null;let h=-a*Xi.dot(tc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,y,p)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),o=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ym,t,_m)}lookAt(t,e,i){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),qi.crossVectors(i,Fn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),qi.crossVectors(i,Fn)),qi.normalize(),Zo.crossVectors(Fn,qi),s[0]=qi.x,s[4]=Zo.x,s[8]=Fn.x,s[1]=qi.y,s[5]=Zo.y,s[9]=Fn.y,s[2]=qi.z,s[6]=Zo.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],b=i[3],v=i[7],S=i[11],D=i[15],A=s[0],R=s[4],L=s[8],W=s[12],_=s[1],M=s[5],k=s[9],F=s[13],G=s[2],ot=s[6],X=s[10],ut=s[14],K=s[3],vt=s[7],Mt=s[11],St=s[15];return r[0]=o*A+a*_+l*G+c*K,r[4]=o*R+a*M+l*ot+c*vt,r[8]=o*L+a*k+l*X+c*Mt,r[12]=o*W+a*F+l*ut+c*St,r[1]=h*A+u*_+f*G+d*K,r[5]=h*R+u*M+f*ot+d*vt,r[9]=h*L+u*k+f*X+d*Mt,r[13]=h*W+u*F+f*ut+d*St,r[2]=g*A+y*_+p*G+m*K,r[6]=g*R+y*M+p*ot+m*vt,r[10]=g*L+y*k+p*X+m*Mt,r[14]=g*W+y*F+p*ut+m*St,r[3]=b*A+v*_+S*G+D*K,r[7]=b*R+v*M+S*ot+D*vt,r[11]=b*L+v*k+S*X+D*Mt,r[15]=b*W+v*F+S*ut+D*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+y*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],b=u*p*c-y*f*c+y*l*d-a*p*d-u*l*m+a*f*m,v=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,S=h*y*c-g*u*c+g*a*d-o*y*d-h*a*m+o*u*m,D=g*u*l-h*y*l-g*a*f+o*y*f+h*a*p-o*u*p,A=e*b+i*v+s*S+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=b*R,t[1]=(y*f*r-u*p*r-y*s*d+i*p*d+u*s*m-i*f*m)*R,t[2]=(a*p*r-y*l*r+y*s*c-i*p*c-a*s*m+i*l*m)*R,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*R,t[4]=v*R,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*R,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=S*R,t[9]=(g*u*r-h*y*r-g*i*d+e*y*d+h*i*m-e*u*m)*R,t[10]=(o*y*r-g*a*r+g*i*c-e*y*c-o*i*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*R,t[12]=D*R,t[13]=(h*y*s-g*u*s+g*i*f-e*y*f-h*i*p+e*u*p)*R,t[14]=(g*a*s-o*y*s-g*i*l+e*y*l+o*i*p-e*a*p)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,y=o*h,p=o*u,m=a*u,b=l*c,v=l*h,S=l*u,D=i.x,A=i.y,R=i.z;return s[0]=(1-(y+m))*D,s[1]=(d+S)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(f+m))*A,s[6]=(p+b)*A,s[7]=0,s[8]=(g+v)*R,s[9]=(p-b)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Xs.set(s[0],s[1],s[2]).length(),o=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);let c=1/r,h=1/o,u=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,e.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ti){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===Ti)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ti){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h,g,y;if(a===Ti)g=(o+r)*u,y=-2*u;else if(a===Pa)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Xs=new I,jn=new Zt,ym=new I(0,0,0),_m=new I(1,1,1),qi=new I,Zo=new I,Fn=new I,Tf=new Zt,Af=new Cn,mn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Tf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Af.setFromEuler(this),this.setFromQuaternion(Af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xm=0,Rf=new I,qs=new Cn,Mi=new Zt,$o=new I,jr=new I,vm=new I,Mm=new Cn,Cf=new I(1,0,0),Pf=new I(0,1,0),If=new I(0,0,1),Lf={type:"added"},bm={type:"removed"},Ys={type:"childadded",child:null},ec={type:"childremoved",child:null},Fe=class n extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new mn,i=new Cn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new re}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(Cf,t)}rotateY(t){return this.rotateOnAxis(Pf,t)}rotateZ(t){return this.rotateOnAxis(If,t)}translateOnAxis(t,e){return Rf.copy(t).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cf,t)}translateY(t){return this.translateOnAxis(Pf,t)}translateZ(t){return this.translateOnAxis(If,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$o.copy(t):$o.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(jr,$o,this.up):Mi.lookAt($o,jr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Mi),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bm),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,vm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new I,bi=new I,nc=new I,Si=new I,Zs=new I,$s=new I,Df=new I,ic=new I,sc=new I,rc=new I,oc=new xe,ac=new xe,lc=new xe,Ki=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qn.subVectors(s,e),bi.subVectors(i,e),nc.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(bi),l=Qn.dot(nc),c=bi.dot(bi),h=bi.dot(nc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,i),lc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(t,e,i,s){return Qn.subVectors(i,e),bi.subVectors(t,e),Qn.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Qn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Zs.subVectors(s,i),$s.subVectors(r,i),ic.subVectors(t,i);let l=Zs.dot(ic),c=$s.dot(ic);if(l<=0&&c<=0)return e.copy(i);sc.subVectors(t,s);let h=Zs.dot(sc),u=$s.dot(sc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Zs,o);rc.subVectors(t,r);let d=Zs.dot(rc),g=$s.dot(rc);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector($s,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Df.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Df,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(i).addScaledVector(Zs,o).addScaledVector($s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function cc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=lm(t,1),e=un(e,0,1),i=un(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=cc(o,r,t+1/3),this.g=cc(o,r,t),this.b=cc(o,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){let i=Gd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=Yl(t.r),this.g=Yl(t.g),this.b=Yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return be.fromWorkingColorSpace(pn.copy(this),t),Math.round(un(pn.r*255,0,255))*65536+Math.round(un(pn.g*255,0,255))*256+Math.round(un(pn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(pn.copy(this),e);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Tn){be.fromWorkingColorSpace(pn.copy(this),t);let e=pn.r,i=pn.g,s=pn.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Ko);let i=Xl(Yi.h,Ko.h,e),s=Xl(Yi.s,Ko.s,e),r=Xl(Yi.l,Ko.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new jt;jt.NAMES=Gd;var Sm=0,Ci=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ji,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==Rc&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fe=class extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ke=new I,Jo=new dt,Ee=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fh&&(t.usage=this.usage),t}};var mr=class extends Ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Oa=class extends Ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ce=class extends Ee{constructor(t,e,i){super(new Float32Array(t),e,i)}},Em=0,Wn=new Zt,hc=new Fe,Ks=new I,Bn=new ci,Qr=new ci,nn=new I,Ve=class n extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hd(t)?Oa:mr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Bn.min,Qr.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,Qr.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(Qr.min),Bn.expandByPoint(Qr.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),nn.add(Ks)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;let c=new I,h=new I,u=new I,f=new dt,d=new dt,g=new dt,y=new I,p=new I;function m(L,W,_){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,W),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,W),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let M=1/(d.x*g.y-g.x*d.y);isFinite(M)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(M),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(M),a[L].add(y),a[W].add(y),a[_].add(y),l[L].add(p),l[W].add(p),l[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,W=b.length;L<W;++L){let _=b[L],M=_.start,k=_.count;for(let F=M,G=M+k;F<G;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new I,S=new I,D=new I,A=new I;function R(L){D.fromBufferAttribute(s,L),A.copy(D);let W=a[L];v.copy(W),v.sub(D.multiplyScalar(D.dot(W))).normalize(),S.crossVectors(A,W);let M=S.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,M)}for(let L=0,W=b.length;L<W;++L){let _=b[L],M=_.start,k=_.count;for(let F=M,G=M+k;F<G;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Ee(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uf=new Zt,ms=new fo,jo=new qn,Nf=new I,Qo=new I,ta=new I,ea=new I,uc=new I,na=new I,Of=new I,ia=new I,st=class extends Fe{constructor(t=new Ve,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(uc.fromBufferAttribute(u,t),o?na.addScaledVector(uc,h):na.addScaledVector(uc.sub(e),h))}e.add(na)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(jo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(jo,Nf)===null||ms.origin.distanceToSquared(Nf)>(t.far-t.near)**2))&&(Uf.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Uf),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=b,D=v;S<D;S+=3){let A=a.getX(S),R=a.getX(S+1),L=a.getX(S+2);s=sa(this,m,t,i,c,h,u,A,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let b=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);s=sa(this,o,t,i,c,h,u,b,v,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=b,D=v;S<D;S+=3){let A=S,R=S+1,L=S+2;s=sa(this,m,t,i,c,h,u,A,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let b=p,v=p+1,S=p+2;s=sa(this,o,t,i,c,h,u,b,v,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function wm(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===es,a),l===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:n}}function sa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Qo),n.getVertexPosition(l,ta),n.getVertexPosition(c,ea);let h=wm(n,t,e,i,Qo,ta,ea,Of);if(h){let u=new I;Ki.getBarycoord(Of,Qo,ta,ea,u),s&&(h.uv=Ki.getInterpolatedAttribute(s,a,l,c,u,new dt)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,a,l,c,u,new dt)),o&&(h.normal=Ki.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Ki.getNormal(Qo,ta,ea,f.normal),h.face=f,h.barycoord=u}return h}var vn=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(y,p,m,b,v,S,D,A,R,L,W){let _=S/R,M=D/L,k=S/2,F=D/2,G=A/2,ot=R+1,X=L+1,ut=0,K=0,vt=new I;for(let Mt=0;Mt<X;Mt++){let St=Mt*M-F;for(let Kt=0;Kt<ot;Kt++){let ne=Kt*_-k;vt[y]=ne*b,vt[p]=St*v,vt[m]=G,c.push(vt.x,vt.y,vt.z),vt[y]=0,vt[p]=0,vt[m]=A>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(Kt/R),u.push(1-Mt/L),ut+=1}}for(let Mt=0;Mt<L;Mt++)for(let St=0;St<R;St++){let Kt=f+St+ot*Mt,ne=f+St+ot*(Mt+1),J=f+(St+1)+ot*(Mt+1),it=f+(St+1)+ot*Mt;l.push(Kt,ne,it),l.push(ne,J,it),K+=6}a.addGroup(d,K,W),d+=K,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function yn(n){let t={};for(let e=0;e<n.length;e++){let i=gr(n[e]);for(let s in i)t[s]=i[s]}return t}function Tm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Am={clone:gr,merge:yn},Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=Tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Fa=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new I,Ff=new dt,Bf=new dt,sn=class extends Fa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Ff,Bf),e.subVectors(Bf,Ff)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Js=-90,js=1,gh=class extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Js,js,t,e);s.layers=this.layers,this.add(s);let r=new sn(Js,js,t,e);r.layers=this.layers,this.add(r);let o=new sn(Js,js,t,e);o.layers=this.layers,this.add(o);let a=new sn(Js,js,t,e);a.layers=this.layers,this.add(a);let l=new sn(Js,js,t,e);l.layers=this.layers,this.add(l);let c=new sn(Js,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ba=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yh=class extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Ji});r.uniforms.tEquirect.value=e;let o=new st(s,r),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=ti),new gh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},fc=new I,Pm=new I,Im=new re,wi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=fc.subVectors(i,e).cross(Pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(fc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Im.getNormalMatrix(t),s=this.coplanarPoint(fc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new qn,ra=new I,po=class{constructor(t=new wi,e=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ti){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],y=s[10],p=s[11],m=s[12],b=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,p-d,S-m).normalize(),i[1].setComponents(l+r,f+c,p+d,S+m).normalize(),i[2].setComponents(l+o,f+h,p+g,S+b).normalize(),i[3].setComponents(l-o,f-h,p-g,S-b).normalize(),i[4].setComponents(l-a,f-u,p-y,S-v).normalize(),e===Ti)i[5].setComponents(l+a,f+u,p+y,S+v).normalize();else if(e===Pa)i[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lm(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var on=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let b=m*f-o;for(let v=0;v<c;v++){let S=v*u-r;g.push(S,-b,0),y.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let v=b+c*m,S=b+c*(m+1),D=b+1+c*(m+1),A=b+1+c*m;d.push(v,S,A),d.push(S,D,A)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
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
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
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
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`
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
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eg=`uniform bool receiveShadow;
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
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Ig=`struct PhysicalMaterial {
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
}`,Lg=`
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ey=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yy=`float getShadowMask() {
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
}`,_y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
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
#endif`,by=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dy=`uniform sampler2D t2D;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
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
}`,ky=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,Hy=`#define DISTANCE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Zy=`#define LAMBERT
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
}`,$y=`#define LAMBERT
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
}`,Ky=`#define MATCAP
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
}`,Jy=`#define MATCAP
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
}`,jy=`#define NORMAL
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
}`,Qy=`#define NORMAL
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
}`,t_=`#define PHONG
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
}`,e_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Dm,alphahash_pars_fragment:Um,alphamap_fragment:Nm,alphamap_pars_fragment:Om,alphatest_fragment:Fm,alphatest_pars_fragment:Bm,aomap_fragment:km,aomap_pars_fragment:zm,batching_pars_vertex:Hm,batching_vertex:Gm,begin_vertex:Vm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Jm,color_fragment:jm,color_pars_fragment:Qm,color_pars_vertex:tg,color_vertex:eg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:lg,colorspace_fragment:cg,colorspace_pars_fragment:hg,envmap_fragment:ug,envmap_common_pars_fragment:fg,envmap_pars_fragment:dg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:wg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:yg,fog_fragment:_g,fog_pars_fragment:xg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:Mg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:Sg,lights_pars_begin:Eg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Lg,lights_fragment_maps:Dg,lights_fragment_end:Ug,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Bg,map_fragment:kg,map_pars_fragment:zg,map_particle_fragment:Hg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:Zg,morphtarget_vertex:$g,normal_fragment_begin:Kg,normal_fragment_maps:Jg,normal_pars_fragment:jg,normal_pars_vertex:Qg,normal_vertex:ty,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:sy,iridescence_pars_fragment:ry,opaque_fragment:oy,packing:ay,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:hy,dithering_pars_fragment:uy,roughnessmap_fragment:fy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:yy,skinbase_vertex:_y,skinning_pars_vertex:xy,skinning_vertex:vy,skinnormal_vertex:My,specularmap_fragment:by,specularmap_pars_fragment:Sy,tonemapping_fragment:Ey,tonemapping_pars_fragment:wy,transmission_fragment:Ty,transmission_pars_fragment:Ay,uv_pars_fragment:Ry,uv_pars_vertex:Cy,uv_vertex:Py,worldpos_vertex:Iy,background_vert:Ly,background_frag:Dy,backgroundCube_vert:Uy,backgroundCube_frag:Ny,cube_vert:Oy,cube_frag:Fy,depth_vert:By,depth_frag:ky,distanceRGBA_vert:zy,distanceRGBA_frag:Hy,equirect_vert:Gy,equirect_frag:Vy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:Zy,meshlambert_frag:$y,meshmatcap_vert:Ky,meshmatcap_frag:Jy,meshnormal_vert:jy,meshnormal_frag:Qy,meshphong_vert:t_,meshphong_frag:e_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:h_,sprite_frag:u_},xt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},oi={basic:{uniforms:yn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:yn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new jt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:yn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:yn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:yn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new jt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:yn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:yn([xt.points,xt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:yn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:yn([xt.common,xt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:yn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:yn([xt.sprite,xt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:yn([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:yn([xt.lights,xt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};oi.physical={uniforms:yn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var oa={r:0,b:0,g:0},ys=new mn,f_=new Zt;function d_(n,t,e,i,s,r,o){let a=new jt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function y(b){let v=!1,S=g(b);S===null?m(a,l):S&&S.isColor&&(m(S,1),v=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,v){let S=g(v);S&&(S.isCubeTexture||S.mapping===il)?(h===void 0&&(h=new st(new vn(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:gr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(v.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(ys)),h.material.toneMapped=be.getTransfer(S.colorSpace)!==Oe,(u!==S||f!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new st(new on(2,2),new hi({name:"BackgroundMaterial",uniforms:gr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=be.getTransfer(S.colorSpace)!==Oe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,v){b.getRGB(oa,Vd(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:y,addToRenderList:p}}function p_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,M,k,F,G){let ot=!1,X=u(F,k,M);r!==X&&(r=X,c(r.object)),ot=d(_,F,k,G),ot&&g(_,F,k,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,S(_,M,k,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,M,k){let F=k.wireframe===!0,G=i[_.id];G===void 0&&(G={},i[_.id]=G);let ot=G[M.id];ot===void 0&&(ot={},G[M.id]=ot);let X=ot[F];return X===void 0&&(X=f(l()),ot[F]=X),X}function f(_){let M=[],k=[],F=[];for(let G=0;G<e;G++)M[G]=0,k[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:F,object:_,attributes:{},index:null}}function d(_,M,k,F){let G=r.attributes,ot=M.attributes,X=0,ut=k.getAttributes();for(let K in ut)if(ut[K].location>=0){let Mt=G[K],St=ot[K];if(St===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(St=_.instanceColor)),Mt===void 0||Mt.attribute!==St||St&&Mt.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(_,M,k,F){let G={},ot=M.attributes,X=0,ut=k.getAttributes();for(let K in ut)if(ut[K].location>=0){let Mt=ot[K];Mt===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor));let St={};St.attribute=Mt,Mt&&Mt.data&&(St.data=Mt.data),G[K]=St,X++}r.attributes=G,r.attributesNum=X,r.index=F}function y(){let _=r.newAttributes;for(let M=0,k=_.length;M<k;M++)_[M]=0}function p(_){m(_,0)}function m(_,M){let k=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;k[_]=1,F[_]===0&&(n.enableVertexAttribArray(_),F[_]=1),G[_]!==M&&(n.vertexAttribDivisor(_,M),G[_]=M)}function b(){let _=r.newAttributes,M=r.enabledAttributes;for(let k=0,F=M.length;k<F;k++)M[k]!==_[k]&&(n.disableVertexAttribArray(k),M[k]=0)}function v(_,M,k,F,G,ot,X){X===!0?n.vertexAttribIPointer(_,M,k,G,ot):n.vertexAttribPointer(_,M,k,F,G,ot)}function S(_,M,k,F){y();let G=F.attributes,ot=k.getAttributes(),X=M.defaultAttributeValues;for(let ut in ot){let K=ot[ut];if(K.location>=0){let vt=G[ut];if(vt===void 0&&(ut==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),ut==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),vt!==void 0){let Mt=vt.normalized,St=vt.itemSize,Kt=t.get(vt);if(Kt===void 0)continue;let ne=Kt.buffer,J=Kt.type,it=Kt.bytesPerElement,bt=J===n.INT||J===n.UNSIGNED_INT||vt.gpuType===tu;if(vt.isInterleavedBufferAttribute){let gt=vt.data,Gt=gt.stride,yt=vt.offset;if(gt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<K.locationSize;Tt++)m(K.location+Tt,gt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Tt=0;Tt<K.locationSize;Tt++)p(K.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Tt=0;Tt<K.locationSize;Tt++)v(K.location+Tt,St/K.locationSize,J,Mt,Gt*it,(yt+St/K.locationSize*Tt)*it,bt)}else{if(vt.isInstancedBufferAttribute){for(let gt=0;gt<K.locationSize;gt++)m(K.location+gt,vt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let gt=0;gt<K.locationSize;gt++)p(K.location+gt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let gt=0;gt<K.locationSize;gt++)v(K.location+gt,St/K.locationSize,J,Mt,St*it,St/K.locationSize*gt*it,bt)}}else if(X!==void 0){let Mt=X[ut];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(K.location,Mt);break;case 3:n.vertexAttrib3fv(K.location,Mt);break;case 4:n.vertexAttrib4fv(K.location,Mt);break;default:n.vertexAttrib1fv(K.location,Mt)}}}}b()}function D(){L();for(let _ in i){let M=i[_];for(let k in M){let F=M[k];for(let G in F)h(F[G].object),delete F[G];delete M[k]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;let M=i[_.id];for(let k in M){let F=M[k];for(let G in F)h(F[G].object),delete F[G];delete M[k]}delete i[_.id]}function R(_){for(let M in i){let k=i[M];if(k[_.id]===void 0)continue;let F=k[_.id];for(let G in F)h(F[G].object),delete F[G];delete k[_.id]}}function L(){W(),o=!0,r!==s&&(r=s,c(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:W,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function m_(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<f.length;y++)e.update(g,i,f[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let L=R===wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ai&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:D,maxSamples:A}}function y_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new wi,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:i,v=b*4,S=m.clippingState||null;l.value=S,S=h(g,f,v,d);for(let D=0;D!==v;++D)S[D]=e[D];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=d;v!==y;++v,S+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function __(n){let t=new WeakMap;function e(o,a){return a===Oc?o.mapping=ur:a===Fc&&(o.mapping=fr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Oc||a===Fc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yh(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ka=class extends Fa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rr=4,kf=[.125,.215,.35,.446,.526,.582],Ms=20,dc=new ka,zf=new jt,pc=null,mc=0,gc=0,yc=!1,xs=(1+Math.sqrt(5))/2,Qs=1/xs,Hf=[new I(-xs,Qs,0),new I(xs,Qs,0),new I(-Qs,0,xs),new I(Qs,0,xs),new I(0,xs,-Qs),new I(0,xs,Qs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=yc,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:wo,format:Xn,colorSpace:ss,depthBuffer:!1},s=Gf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(r)),this._blurMaterial=v_(r,t,e)}return s}_compileMaterial(t){let e=new st(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,i,s){let a=new sn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(zf),h.toneMapping=Qi,h.autoClear=!1;let d=new fe({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new st(new vn,d),y=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,y=!0):(d.color.copy(zf),y=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;aa(s,b*v,m>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ur||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;aa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,dc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hf[(s-r-1)%Hf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new st(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ms-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):Ms;p>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ms}`);let m=[],b=0;for(let R=0;R<Ms;++R){let L=R/y,W=Math.exp(-L*L/2);m.push(W),R===0?b+=W:R<p&&(b+=2*W)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let S=this._sizeLods[s],D=3*S*(s>v-rr?s-v+rr:0),A=4*(this._cubeSize-S);aa(e,D,A,3*S,2*S),l.setRenderTarget(e),l.render(u,dc)}};function x_(n){let t=[],e=[],i=[],s=n,r=n-rr+1+kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-rr?l=kf[o-n+rr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,p=2,m=1,b=new Float32Array(y*g*d),v=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let A=0;A<d;A++){let R=A%3*2/3-1,L=A>2?0:-1,W=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(W,y*g*A),v.set(f,p*g*A);let _=[A,A,A,A,A,A];S.set(_,m*g*A)}let D=new Ve;D.setAttribute("position",new Ee(b,y)),D.setAttribute("uv",new Ee(v,p)),D.setAttribute("faceIndex",new Ee(S,m)),t.push(D),s>rr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gf(n,t,e){let i=new Ri(n,t,e);return i.texture.mapping=il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function v_(n,t,e){let i=new Float32Array(Ms),s=new I(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Vf(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Wf(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function M_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Oc||l===Fc,h=l===ur||l===fr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new yr(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new yr(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function b_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&wa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S_(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let b=d.array;y=d.version;for(let v=0,S=b.length;v<S;v+=3){let D=b[v+0],A=b[v+1],R=b[v+2];f.push(D,A,A,R,R,D)}}else if(g!==void 0){let b=g.array;y=g.version;for(let v=0,S=b.length/3-1;v<S;v+=3){let D=v+0,A=v+1,R=v+2;f.push(D,A,A,R,R,D)}}else return;let p=new(Hd(f)?Oa:mr)(f,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function E_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function u(f,d,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,y,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b];for(let b=0;b<y.length;b++)e.update(m,i,y[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function w_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function T_(n,t,e){let i=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let W=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",W)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let S=a.attributes.position.count*v,D=1;S>t.maxTextureSize&&(D=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*D*4*u),R=new Ua(A,S,D,u);R.type=ei,R.needsUpdate=!0;let L=v*4;for(let _=0;_<u;_++){let M=p[_],k=m[_],F=b[_],G=S*D*4*_;for(let ot=0;ot<M.count;ot++){let X=ot*L;d===!0&&(s.fromBufferAttribute(M,ot),A[G+X+0]=s.x,A[G+X+1]=s.y,A[G+X+2]=s.z,A[G+X+3]=0),g===!0&&(s.fromBufferAttribute(k,ot),A[G+X+4]=s.x,A[G+X+5]=s.y,A[G+X+6]=s.z,A[G+X+7]=0),y===!0&&(s.fromBufferAttribute(F,ot),A[G+X+8]=s.x,A[G+X+9]=s.y,A[G+X+10]=s.z,A[G+X+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new dt(S,D)},i.set(a,f),a.addEventListener("dispose",W)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function A_(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var za=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h=ar){if(h!==ar&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=Es),i===void 0&&h===pr&&(i=dr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xd=new Rn,Xf=new za(1,1),qd=new Ua,Yd=new mh,Zd=new Ba,qf=[],Yf=[],Zf=new Float32Array(16),$f=new Float32Array(9),Kf=new Float32Array(4);function Sr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rl(n,t){let e=Yf[t];e===void 0&&(e=new Int32Array(t),Yf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function R_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function C_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function P_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function I_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function L_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Kf.set(i),n.uniformMatrix2fv(this.addr,!1,Kf),tn(e,i)}}function D_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;$f.set(i),n.uniformMatrix3fv(this.addr,!1,$f),tn(e,i)}}function U_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Zf.set(i),n.uniformMatrix4fv(this.addr,!1,Zf),tn(e,i)}}function N_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function F_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function k_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function H_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function G_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function V_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xf.compareFunction=zd,r=Xf):r=Xd,e.setTexture2D(t||r,s)}function W_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yd,s)}function X_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Zd,s)}function q_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qd,s)}function Y_(n){switch(n){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return O_;case 35668:case 35672:return F_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return z_;case 36295:return H_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function Z_(n,t){n.uniform1fv(this.addr,t)}function $_(n,t){let e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function K_(n,t){let e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function J_(n,t){let e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function j_(n,t){let e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Q_(n,t){let e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tx(n,t){let e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ex(n,t){n.uniform1iv(this.addr,t)}function nx(n,t){n.uniform2iv(this.addr,t)}function ix(n,t){n.uniform3iv(this.addr,t)}function sx(n,t){n.uniform4iv(this.addr,t)}function rx(n,t){n.uniform1uiv(this.addr,t)}function ox(n,t){n.uniform2uiv(this.addr,t)}function ax(n,t){n.uniform3uiv(this.addr,t)}function lx(n,t){n.uniform4uiv(this.addr,t)}function cx(n,t,e){let i=this.cache,s=t.length,r=rl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xd,r[o])}function hx(n,t,e){let i=this.cache,s=t.length,r=rl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yd,r[o])}function ux(n,t,e){let i=this.cache,s=t.length,r=rl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zd,r[o])}function fx(n,t,e){let i=this.cache,s=t.length,r=rl(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qd,r[o])}function dx(n){switch(n){case 5126:return Z_;case 35664:return $_;case 35665:return K_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return fx}}var _h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}},xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},_c=/(\w+)(\])?(\[|\.)?/g;function Jf(n,t){n.seq.push(t),n.map[t.id]=t}function px(n,t,e){let i=n.name,s=i.length;for(_c.lastIndex=0;;){let r=_c.exec(i),o=_c.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jf(e,c===void 0?new _h(a,n,t):new xh(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new vh(a),Jf(e,u)),e=u}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);px(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function jf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mx=37297,gx=0;function yx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function _x(n){let t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(n),i;switch(t===e?i="":t===Ca&&e===Ra?i="LinearDisplayP3ToLinearSRGB":t===Ra&&e===Ca&&(i="LinearSRGBToLinearDisplayP3"),n){case ss:case sl:return[i,"LinearTransferOETF"];case Tn:case au:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Qf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yx(n.getShaderSource(t),o)}else return s}function xx(n,t){let e=_x(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vx(n,t){let e;switch(t){case W0:e="Linear";break;case X0:e="Reinhard";break;case q0:e="Cineon";break;case Qh:e="ACESFilmic";break;case Z0:e="AgX";break;case $0:e="Neutral";break;case Y0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var la=new I;function Mx(){be.getLuminanceCoefficients(la);let n=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Sx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ex(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function oo(n){return n!==""}function td(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ed(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(n){return n.replace(wx,Ax)}var Tx=new Map;function Ax(n,t){let e=se[t];if(e===void 0){let i=Tx.get(t);if(i!==void 0)e=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mh(e)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(n){return n.replace(Rx,Cx)}function Cx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Px(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ad?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===S0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Ix(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case fr:t="ENVMAP_TYPE_CUBE";break;case il:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lx(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===fr&&(t="ENVMAP_MODE_REFRACTION"),t}function Dx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rd:t="ENVMAP_BLENDING_MULTIPLY";break;case G0:t="ENVMAP_BLENDING_MIX";break;case V0:t="ENVMAP_BLENDING_ADD";break}return t}function Ux(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Nx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Px(e),c=Ix(e),h=Lx(e),u=Dx(e),f=Ux(e),d=bx(e),g=Sx(r),y=s.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(p=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?se.tonemapping_pars_fragment:"",e.toneMapping!==Qi?vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,xx("linearToOutputTexel",e.outputColorSpace),Mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=Mh(o),o=td(o,e),o=ed(o,e),a=Mh(a),a=td(a,e),a=ed(a,e),o=nd(o),a=nd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=b+p+o,S=b+m+a,D=jf(s,s.VERTEX_SHADER,v),A=jf(s,s.FRAGMENT_SHADER,S);s.attachShader(y,D),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(M){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(A).trim(),ot=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,D,A);else{let ut=Qf(s,D,"vertex"),K=Qf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+ut+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||G==="")&&(X=!1);X&&(M.diagnostics={runnable:ot,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(D),s.deleteShader(A),L=new cr(s,y),W=Ex(s,y)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let W;this.getAttributes=function(){return W===void 0&&R(this),W};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,mx)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=A,this}var Ox=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sh(t),e.set(t,i)),i}},Sh=class{constructor(t){this.id=Ox++,this.code=t,this.usedTimes=0}};function Fx(n,t,e,i,s,r,o){let a=new Na,l=new bh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,k,F,G){let ot=F.fog,X=G.geometry,ut=_.isMeshStandardMaterial?F.environment:null,K=(_.isMeshStandardMaterial?e:t).get(_.envMap||ut),vt=K&&K.mapping===il?K.image.height:null,Mt=y[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Kt=St!==void 0?St.length:0,ne=0;X.morphAttributes.position!==void 0&&(ne=1),X.morphAttributes.normal!==void 0&&(ne=2),X.morphAttributes.color!==void 0&&(ne=3);let J,it,bt,gt;if(Mt){let wn=oi[Mt];J=wn.vertexShader,it=wn.fragmentShader}else J=_.vertexShader,it=_.fragmentShader,l.update(_),bt=l.getVertexShaderID(_),gt=l.getFragmentShaderID(_);let Gt=n.getRenderTarget(),yt=G.isInstancedMesh===!0,Tt=G.isBatchedMesh===!0,Xt=!!_.map,nt=!!_.matcap,C=!!K,P=!!_.aoMap,H=!!_.lightMap,z=!!_.bumpMap,q=!!_.normalMap,rt=!!_.displacementMap,tt=!!_.emissiveMap,E=!!_.metalnessMap,x=!!_.roughnessMap,N=_.anisotropy>0,j=_.clearcoat>0,at=_.dispersion>0,et=_.iridescence>0,Nt=_.sheen>0,mt=_.transmission>0,Et=N&&!!_.anisotropyMap,ie=j&&!!_.clearcoatMap,ft=j&&!!_.clearcoatNormalMap,wt=j&&!!_.clearcoatRoughnessMap,Vt=et&&!!_.iridescenceMap,Yt=et&&!!_.iridescenceThicknessMap,Dt=Nt&&!!_.sheenColorMap,de=Nt&&!!_.sheenRoughnessMap,ee=!!_.specularMap,De=!!_.specularColorMap,U=!!_.specularIntensityMap,It=mt&&!!_.transmissionMap,Q=mt&&!!_.thicknessMap,ct=!!_.gradientMap,At=!!_.alphaMap,Lt=_.alphaTest>0,me=!!_.alphaHash,$e=!!_.extensions,En=Qi;_.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(En=n.toneMapping);let _e={shaderID:Mt,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:it,defines:_.defines,customVertexShaderID:bt,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Tt,batchingColor:Tt&&G._colorsTexture!==null,instancing:yt,instancingColor:yt&&G.instanceColor!==null,instancingMorph:yt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Gt===null?n.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:ss,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:nt,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:vt,aoMap:P,lightMap:H,bumpMap:z,normalMap:q,displacementMap:d&&rt,emissiveMap:tt,normalMapObjectSpace:q&&_.normalMapType===tm,normalMapTangentSpace:q&&_.normalMapType===kd,metalnessMap:E,roughnessMap:x,anisotropy:N,anisotropyMap:Et,clearcoat:j,clearcoatMap:ie,clearcoatNormalMap:ft,clearcoatRoughnessMap:wt,dispersion:at,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:Yt,sheen:Nt,sheenColorMap:Dt,sheenRoughnessMap:de,specularMap:ee,specularColorMap:De,specularIntensityMap:U,transmission:mt,transmissionMap:It,thicknessMap:Q,gradientMap:ct,opaque:_.transparent===!1&&_.blending===ji&&_.alphaToCoverage===!1,alphaMap:At,alphaTest:Lt,alphaHash:me,combine:_.combine,mapUv:Xt&&p(_.map.channel),aoMapUv:P&&p(_.aoMap.channel),lightMapUv:H&&p(_.lightMap.channel),bumpMapUv:z&&p(_.bumpMap.channel),normalMapUv:q&&p(_.normalMap.channel),displacementMapUv:rt&&p(_.displacementMap.channel),emissiveMapUv:tt&&p(_.emissiveMap.channel),metalnessMapUv:E&&p(_.metalnessMap.channel),roughnessMapUv:x&&p(_.roughnessMap.channel),anisotropyMapUv:Et&&p(_.anisotropyMap.channel),clearcoatMapUv:ie&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(_.sheenRoughnessMap.channel),specularMapUv:ee&&p(_.specularMap.channel),specularColorMapUv:De&&p(_.specularColorMap.channel),specularIntensityMapUv:U&&p(_.specularIntensityMap.channel),transmissionMapUv:It&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:At&&p(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(q||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(Xt||At),fog:!!ot,useFog:_.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:En,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&be.getTransfer(_.map.colorSpace)===Oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function b(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)M.push(k),M.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(M,_),S(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function S(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function D(_){let M=y[_.type],k;if(M){let F=oi[M];k=Am.clone(F.uniforms)}else k=_.uniforms;return k}function A(_,M){let k;for(let F=0,G=h.length;F<G;F++){let ot=h[F];if(ot.cacheKey===M){k=ot,++k.usedTimes;break}}return k===void 0&&(k=new Nx(n,M,_,r),h.push(k)),k}function R(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function L(_){l.remove(_)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:D,acquireProgram:A,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:W}}function Bx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function kx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,y,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=p),t++,m}function a(u,f,d,g,y,p){let m=o(u,f,d,g,y,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,y,p){let m=o(u,f,d,g,y,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||kx),i.length>1&&i.sort(f||sd),s.length>1&&s.sort(f||sd)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function zx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new rd,n.set(i,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new jt};break;case"SpotLight":e={position:new I,direction:new I,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Gx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Vx=0;function Wx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xx(n){let t=new Hx,e=Gx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Zt,o=new Zt;function a(c){let h=0,u=0,f=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,b=0,v=0,S=0,D=0,A=0,R=0;c.sort(Wx);for(let W=0,_=c.length;W<_;W++){let M=c[W],k=M.color,F=M.intensity,G=M.distance,ot=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=k.r*F,u+=k.g*F,f+=k.b*F;else if(M.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(M.sh.coefficients[X],F);R++}else if(M.isDirectionalLight){let X=t.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let ut=M.shadow,K=e.get(M);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=ot,i.directionalShadowMatrix[d]=M.shadow.matrix,b++}i.directional[d]=X,d++}else if(M.isSpotLight){let X=t.get(M);X.position.setFromMatrixPosition(M.matrixWorld),X.color.copy(k).multiplyScalar(F),X.distance=G,X.coneCos=Math.cos(M.angle),X.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),X.decay=M.decay,i.spot[y]=X;let ut=M.shadow;if(M.map&&(i.spotLightMap[D]=M.map,D++,ut.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[y]=ut.matrix,M.castShadow){let K=e.get(M);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=ot,S++}y++}else if(M.isRectAreaLight){let X=t.get(M);X.color.copy(k).multiplyScalar(F),X.halfWidth.set(M.width*.5,0,0),X.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=X,p++}else if(M.isPointLight){let X=t.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity),X.distance=M.distance,X.decay=M.decay,M.castShadow){let ut=M.shadow,K=e.get(M);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,K.shadowCameraNear=ut.camera.near,K.shadowCameraFar=ut.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=ot,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=X,g++}else if(M.isHemisphereLight){let X=t.get(M);X.skyColor.copy(M.color).multiplyScalar(F),X.groundColor.copy(M.groundColor).multiplyScalar(F),i.hemi[m]=X,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==b||L.numPointShadows!==v||L.numSpotShadows!==S||L.numSpotMaps!==D||L.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=y,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=b,L.numPointShadows=v,L.numSpotShadows=S,L.numSpotMaps=D,L.numLightProbes=R,i.version=Vx++)}function l(c,h){let u=0,f=0,d=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let v=c[m];if(v.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(v.isSpotLight){let S=i.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(v.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function od(n){let t=new Xx(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new od(n),t.set(s,[a])):r>=o.length?(a=new od(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Eh=class extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wh=class extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`;function $x(n,t,e){let i=new po,s=new dt,r=new dt,o=new xe,a=new Eh({depthPacking:Q0}),l=new wh,c={},h=e.maxTextureSize,u={[es]:rn,[rn]:es,[_n]:_n},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Yx,fragmentShader:Zx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new st(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad;let m=this.type;this.render=function(A,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let W=n.getRenderTarget(),_=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=m!==Ei&&this.type===Ei,G=m===Ei&&this.type!==Ei;for(let ot=0,X=A.length;ot<X;ot++){let ut=A[ot],K=ut.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let vt=K.getFrameExtents();if(s.multiply(vt),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,K.mapSize.y=r.y)),K.map===null||F===!0||G===!0){let St=this.type!==Ei?{minFilter:An,magFilter:An}:{};K.map!==null&&K.map.dispose(),K.map=new Ri(s.x,s.y,St),K.map.texture.name=ut.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();let Mt=K.getViewportCount();for(let St=0;St<Mt;St++){let Kt=K.getViewport(St);o.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),k.viewport(o),K.updateMatrices(ut,St),i=K.getFrustum(),S(R,L,K.camera,ut,this.type)}K.isPointLightShadow!==!0&&this.type===Ei&&b(K,L),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(W,_,M)};function b(A,R){let L=t.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,L,f,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,L,d,y,null)}function v(A,R,L,W){let _=null,M=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)_=M;else if(_=L.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=_.uuid,F=R.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let ot=G[F];ot===void 0&&(ot=_.clone(),G[F]=ot,R.addEventListener("dispose",D)),_=ot}if(_.visible=R.visible,_.wireframe=R.wireframe,W===Ei?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let k=n.properties.get(_);k.light=L}return _}function S(A,R,L,W,_){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Ei)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let F=t.update(A),G=A.material;if(Array.isArray(G)){let ot=F.groups;for(let X=0,ut=ot.length;X<ut;X++){let K=ot[X],vt=G[K.materialIndex];if(vt&&vt.visible){let Mt=v(A,vt,W,_);A.onBeforeShadow(n,A,R,L,F,Mt,K),n.renderBufferDirect(L,null,F,Mt,A,K),A.onAfterShadow(n,A,R,L,F,Mt,K)}}}else if(G.visible){let ot=v(A,G,W,_);A.onBeforeShadow(n,A,R,L,F,ot,null),n.renderBufferDirect(L,null,F,ot,A,null),A.onAfterShadow(n,A,R,L,F,ot,null)}}let k=A.children;for(let F=0,G=k.length;F<G;F++)S(k[F],R,L,W,_)}function D(A){A.target.removeEventListener("dispose",D);for(let L in c){let W=c[L],_=A.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}var Kx={[Cc]:Pc,[Ic]:Uc,[Lc]:Nc,[hr]:Dc,[Pc]:Cc,[Uc]:Ic,[Nc]:Lc,[Dc]:hr};function Jx(n){function t(){let U=!1,It=new xe,Q=null,ct=new xe(0,0,0,0);return{setMask:function(At){Q!==At&&!U&&(n.colorMask(At,At,At,At),Q=At)},setLocked:function(At){U=At},setClear:function(At,Lt,me,$e,En){En===!0&&(At*=$e,Lt*=$e,me*=$e),It.set(At,Lt,me,$e),ct.equals(It)===!1&&(n.clearColor(At,Lt,me,$e),ct.copy(It))},reset:function(){U=!1,Q=null,ct.set(-1,0,0,0)}}}function e(){let U=!1,It=!1,Q=null,ct=null,At=null;return{setReversed:function(Lt){It=Lt},setTest:function(Lt){Lt?bt(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(Lt){Q!==Lt&&!U&&(n.depthMask(Lt),Q=Lt)},setFunc:function(Lt){if(It&&(Lt=Kx[Lt]),ct!==Lt){switch(Lt){case Cc:n.depthFunc(n.NEVER);break;case Pc:n.depthFunc(n.ALWAYS);break;case Ic:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case Lc:n.depthFunc(n.EQUAL);break;case Dc:n.depthFunc(n.GEQUAL);break;case Uc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Lt}},setLocked:function(Lt){U=Lt},setClear:function(Lt){At!==Lt&&(n.clearDepth(Lt),At=Lt)},reset:function(){U=!1,Q=null,ct=null,At=null}}}function i(){let U=!1,It=null,Q=null,ct=null,At=null,Lt=null,me=null,$e=null,En=null;return{setTest:function(_e){U||(_e?bt(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(_e){It!==_e&&!U&&(n.stencilMask(_e),It=_e)},setFunc:function(_e,wn,_i){(Q!==_e||ct!==wn||At!==_i)&&(n.stencilFunc(_e,wn,_i),Q=_e,ct=wn,At=_i)},setOp:function(_e,wn,_i){(Lt!==_e||me!==wn||$e!==_i)&&(n.stencilOp(_e,wn,_i),Lt=_e,me=wn,$e=_i)},setLocked:function(_e){U=_e},setClear:function(_e){En!==_e&&(n.clearStencil(_e),En=_e)},reset:function(){U=!1,It=null,Q=null,ct=null,At=null,Lt=null,me=null,$e=null,En=null}}}let s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,y=null,p=null,m=null,b=null,v=null,S=null,D=null,A=new jt(0,0,0),R=0,L=!1,W=null,_=null,M=null,k=null,F=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,X=0,ut=n.getParameter(n.VERSION);ut.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ut)[1]),ot=X>=1):ut.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),ot=X>=2);let K=null,vt={},Mt=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Kt=new xe().fromArray(Mt),ne=new xe().fromArray(St);function J(U,It,Q,ct){let At=new Uint8Array(4),Lt=n.createTexture();n.bindTexture(U,Lt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<Q;me++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(It+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Lt}let it={};it[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),bt(n.DEPTH_TEST),r.setFunc(hr),H(!1),z(df),bt(n.CULL_FACE),C(Ji);function bt(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function gt(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Gt(U,It){return h[U]!==It?(n.bindFramebuffer(U,It),h[U]=It,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=It),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=It),!0):!1}function yt(U,It){let Q=f,ct=!1;if(U){Q=u.get(It),Q===void 0&&(Q=[],u.set(It,Q));let At=U.textures;if(Q.length!==At.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Lt=0,me=At.length;Lt<me;Lt++)Q[Lt]=n.COLOR_ATTACHMENT0+Lt;Q.length=At.length,ct=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ct=!0);ct&&n.drawBuffers(Q)}function Tt(U){return d!==U?(n.useProgram(U),d=U,!0):!1}let Xt={[vs]:n.FUNC_ADD,[w0]:n.FUNC_SUBTRACT,[T0]:n.FUNC_REVERSE_SUBTRACT};Xt[A0]=n.MIN,Xt[R0]=n.MAX;let nt={[C0]:n.ZERO,[P0]:n.ONE,[I0]:n.SRC_COLOR,[Ac]:n.SRC_ALPHA,[F0]:n.SRC_ALPHA_SATURATE,[N0]:n.DST_COLOR,[D0]:n.DST_ALPHA,[L0]:n.ONE_MINUS_SRC_COLOR,[Rc]:n.ONE_MINUS_SRC_ALPHA,[O0]:n.ONE_MINUS_DST_COLOR,[U0]:n.ONE_MINUS_DST_ALPHA,[B0]:n.CONSTANT_COLOR,[k0]:n.ONE_MINUS_CONSTANT_COLOR,[z0]:n.CONSTANT_ALPHA,[H0]:n.ONE_MINUS_CONSTANT_ALPHA};function C(U,It,Q,ct,At,Lt,me,$e,En,_e){if(U===Ji){g===!0&&(gt(n.BLEND),g=!1);return}if(g===!1&&(bt(n.BLEND),g=!0),U!==E0){if(U!==y||_e!==L){if((p!==vs||v!==vs)&&(n.blendEquation(n.FUNC_ADD),p=vs,v=vs),_e)switch(U){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xn:n.blendFunc(n.ONE,n.ONE);break;case pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,b=null,S=null,D=null,A.set(0,0,0),R=0,y=U,L=_e}return}At=At||It,Lt=Lt||Q,me=me||ct,(It!==p||At!==v)&&(n.blendEquationSeparate(Xt[It],Xt[At]),p=It,v=At),(Q!==m||ct!==b||Lt!==S||me!==D)&&(n.blendFuncSeparate(nt[Q],nt[ct],nt[Lt],nt[me]),m=Q,b=ct,S=Lt,D=me),($e.equals(A)===!1||En!==R)&&(n.blendColor($e.r,$e.g,$e.b,En),A.copy($e),R=En),y=U,L=!1}function P(U,It){U.side===_n?gt(n.CULL_FACE):bt(n.CULL_FACE);let Q=U.side===rn;It&&(Q=!Q),H(Q),U.blending===ji&&U.transparent===!1?C(Ji):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let ct=U.stencilWrite;o.setTest(ct),ct&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?bt(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(U){W!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),W=U)}function z(U){U!==M0?(bt(n.CULL_FACE),U!==_&&(U===df?n.cullFace(n.BACK):U===b0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),_=U}function q(U){U!==M&&(ot&&n.lineWidth(U),M=U)}function rt(U,It,Q){U?(bt(n.POLYGON_OFFSET_FILL),(k!==It||F!==Q)&&(n.polygonOffset(It,Q),k=It,F=Q)):gt(n.POLYGON_OFFSET_FILL)}function tt(U){U?bt(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function E(U){U===void 0&&(U=n.TEXTURE0+G-1),K!==U&&(n.activeTexture(U),K=U)}function x(U,It,Q){Q===void 0&&(K===null?Q=n.TEXTURE0+G-1:Q=K);let ct=vt[Q];ct===void 0&&(ct={type:void 0,texture:void 0},vt[Q]=ct),(ct.type!==U||ct.texture!==It)&&(K!==Q&&(n.activeTexture(Q),K=Q),n.bindTexture(U,It||it[U]),ct.type=U,ct.texture=It)}function N(){let U=vt[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(U){Kt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Kt.copy(U))}function Dt(U){ne.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function de(U,It){let Q=l.get(It);Q===void 0&&(Q=new WeakMap,l.set(It,Q));let ct=Q.get(U);ct===void 0&&(ct=n.getUniformBlockIndex(It,U.name),Q.set(U,ct))}function ee(U,It){let ct=l.get(It).get(U);a.get(It)!==ct&&(n.uniformBlockBinding(It,ct,U.__bindingPointIndex),a.set(It,ct))}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},K=null,vt={},h={},u=new WeakMap,f=[],d=null,g=!1,y=null,p=null,m=null,b=null,v=null,S=null,D=null,A=new jt(0,0,0),R=0,L=!1,W=null,_=null,M=null,k=null,F=null,Kt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:bt,disable:gt,bindFramebuffer:Gt,drawBuffers:yt,useProgram:Tt,setBlending:C,setMaterial:P,setFlipSided:H,setCullFace:z,setLineWidth:q,setPolygonOffset:rt,setScissorTest:tt,activeTexture:E,bindTexture:x,unbindTexture:N,compressedTexImage2D:j,compressedTexImage3D:at,texImage2D:wt,texImage3D:Vt,updateUBOMapping:de,uniformBlockBinding:ee,texStorage2D:ie,texStorage3D:ft,texSubImage2D:et,texSubImage3D:Nt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:Yt,viewport:Dt,reset:De}}function ad(n,t,e,i){let s=jx(i);switch(e){case Dd:return n*t;case Nd:return n*t;case Od:return n*t*2;case iu:return n*t/s.components*s.byteLength;case su:return n*t/s.components*s.byteLength;case Fd:return n*t*2/s.components*s.byteLength;case ru:return n*t*2/s.components*s.byteLength;case Ud:return n*t*3/s.components*s.byteLength;case Xn:return n*t*4/s.components*s.byteLength;case ou:return n*t*4/s.components*s.byteLength;case va:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ba:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:case Gc:return Math.max(n,16)*Math.max(t,8)/4;case kc:case Hc:return Math.max(n,8)*Math.max(t,8)/2;case Vc:case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case th:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ea:case oh:case ah:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bd:case lh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ch:case hh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jx(n){switch(n){case Ai:case Pd:return{byteLength:1,components:1};case uo:case Id:case wo:return{byteLength:2,components:1};case eu:case nu:return{byteLength:2,components:4};case Es:case tu:case ei:return{byteLength:4,components:1};case Ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Qx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return d?new OffscreenCanvas(E,x):La("canvas")}function y(E,x,N){let j=1,at=tt(E);if((at.width>N||at.height>N)&&(j=N/Math.max(at.width,at.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let et=Math.floor(j*at.width),Nt=Math.floor(j*at.height);u===void 0&&(u=g(et,Nt));let mt=x?g(et,Nt):u;return mt.width=et,mt.height=Nt,mt.getContext("2d").drawImage(E,0,0,et,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+et+"x"+Nt+")."),mt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==An&&E.minFilter!==ti}function m(E){n.generateMipmap(E)}function b(E,x,N,j,at=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let et=x;if(x===n.RED&&(N===n.FLOAT&&(et=n.R32F),N===n.HALF_FLOAT&&(et=n.R16F),N===n.UNSIGNED_BYTE&&(et=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.R8UI),N===n.UNSIGNED_SHORT&&(et=n.R16UI),N===n.UNSIGNED_INT&&(et=n.R32UI),N===n.BYTE&&(et=n.R8I),N===n.SHORT&&(et=n.R16I),N===n.INT&&(et=n.R32I)),x===n.RG&&(N===n.FLOAT&&(et=n.RG32F),N===n.HALF_FLOAT&&(et=n.RG16F),N===n.UNSIGNED_BYTE&&(et=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RG8UI),N===n.UNSIGNED_SHORT&&(et=n.RG16UI),N===n.UNSIGNED_INT&&(et=n.RG32UI),N===n.BYTE&&(et=n.RG8I),N===n.SHORT&&(et=n.RG16I),N===n.INT&&(et=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RGB8UI),N===n.UNSIGNED_SHORT&&(et=n.RGB16UI),N===n.UNSIGNED_INT&&(et=n.RGB32UI),N===n.BYTE&&(et=n.RGB8I),N===n.SHORT&&(et=n.RGB16I),N===n.INT&&(et=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),N===n.UNSIGNED_INT&&(et=n.RGBA32UI),N===n.BYTE&&(et=n.RGBA8I),N===n.SHORT&&(et=n.RGBA16I),N===n.INT&&(et=n.RGBA32I)),x===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),x===n.RGBA){let Nt=at?Aa:be.getTransfer(j);N===n.FLOAT&&(et=n.RGBA32F),N===n.HALF_FLOAT&&(et=n.RGBA16F),N===n.UNSIGNED_BYTE&&(et=Nt===Oe?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(E,x){let N;return E?x===null||x===Es||x===dr?N=n.DEPTH24_STENCIL8:x===ei?N=n.DEPTH32F_STENCIL8:x===uo&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Es||x===dr?N=n.DEPTH_COMPONENT24:x===ei?N=n.DEPTH_COMPONENT32F:x===uo&&(N=n.DEPTH_COMPONENT16),N}function S(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==An&&E.minFilter!==ti?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function D(E){let x=E.target;x.removeEventListener("dispose",D),R(x),x.isVideoTexture&&h.delete(x)}function A(E){let x=E.target;x.removeEventListener("dispose",A),W(x)}function R(E){let x=i.get(E);if(x.__webglInit===void 0)return;let N=E.source,j=f.get(N);if(j){let at=j[x.__cacheKey];at.usedTimes--,at.usedTimes===0&&L(E),Object.keys(j).length===0&&f.delete(N)}i.remove(E)}function L(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let N=E.source,j=f.get(N);delete j[x.__cacheKey],o.memory.textures--}function W(E){let x=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let at=0;at<x.__webglFramebuffer[j].length;at++)n.deleteFramebuffer(x.__webglFramebuffer[j][at]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=E.textures;for(let j=0,at=N.length;j<at;j++){let et=i.get(N[j]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),i.remove(N[j])}i.remove(E)}let _=0;function M(){_=0}function k(){let E=_;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),_+=1,E}function F(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function G(E,x){let N=i.get(E);if(E.isVideoTexture&&q(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){let j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(N,E,x);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function ot(E,x){let N=i.get(E);if(E.version>0&&N.__version!==E.version){ne(N,E,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function X(E,x){let N=i.get(E);if(E.version>0&&N.__version!==E.version){ne(N,E,x);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function ut(E,x){let N=i.get(E);if(E.version>0&&N.__version!==E.version){J(N,E,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}let K={[ho]:n.REPEAT,[bs]:n.CLAMP_TO_EDGE,[Bc]:n.MIRRORED_REPEAT},vt={[An]:n.NEAREST,[J0]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},Mt={[em]:n.NEVER,[am]:n.ALWAYS,[nm]:n.LESS,[zd]:n.LEQUAL,[im]:n.EQUAL,[om]:n.GEQUAL,[sm]:n.GREATER,[rm]:n.NOTEQUAL};function St(E,x){if(x.type===ei&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ti||x.magFilter===Gl||x.magFilter===Go||x.magFilter===Ss||x.minFilter===ti||x.minFilter===Gl||x.minFilter===Go||x.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,K[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,vt[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===An||x.minFilter!==Go&&x.minFilter!==Ss||x.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D));let j=x.source,at=f.get(j);at===void 0&&(at={},f.set(j,at));let et=F(x);if(et!==E.__cacheKey){at[et]===void 0&&(at[et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),at[et].usedTimes++;let Nt=at[E.__cacheKey];Nt!==void 0&&(at[E.__cacheKey].usedTimes--,Nt.usedTimes===0&&L(x)),E.__cacheKey=et,E.__webglTexture=at[et].texture}return N}function ne(E,x,N){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);let at=Kt(E,x),et=x.source;e.bindTexture(j,E.__webglTexture,n.TEXTURE0+N);let Nt=i.get(et);if(et.version!==Nt.__version||at===!0){e.activeTexture(n.TEXTURE0+N);let mt=be.getPrimaries(be.workingColorSpace),Et=x.colorSpace===$i?null:be.getPrimaries(x.colorSpace),ie=x.colorSpace===$i||mt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ft=y(x.image,!1,s.maxTextureSize);ft=rt(x,ft);let wt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type),Yt=b(x.internalFormat,wt,Vt,x.colorSpace,x.isVideoTexture);St(j,x);let Dt,de=x.mipmaps,ee=x.isVideoTexture!==!0,De=Nt.__version===void 0||at===!0,U=et.dataReady,It=S(x,ft);if(x.isDepthTexture)Yt=v(x.format===pr,x.type),De&&(ee?e.texStorage2D(n.TEXTURE_2D,1,Yt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Yt,ft.width,ft.height,0,wt,Vt,null));else if(x.isDataTexture)if(de.length>0){ee&&De&&e.texStorage2D(n.TEXTURE_2D,It,Yt,de[0].width,de[0].height);for(let Q=0,ct=de.length;Q<ct;Q++)Dt=de[Q],ee?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Dt.width,Dt.height,wt,Vt,Dt.data):e.texImage2D(n.TEXTURE_2D,Q,Yt,Dt.width,Dt.height,0,wt,Vt,Dt.data);x.generateMipmaps=!1}else ee?(De&&e.texStorage2D(n.TEXTURE_2D,It,Yt,ft.width,ft.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,wt,Vt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,ft.width,ft.height,0,wt,Vt,ft.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ee&&De&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Yt,de[0].width,de[0].height,ft.depth);for(let Q=0,ct=de.length;Q<ct;Q++)if(Dt=de[Q],x.format!==Xn)if(wt!==null)if(ee){if(U)if(x.layerUpdates.size>0){let At=ad(Dt.width,Dt.height,x.format,x.type);for(let Lt of x.layerUpdates){let me=Dt.data.subarray(Lt*At/Dt.data.BYTES_PER_ELEMENT,(Lt+1)*At/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Lt,Dt.width,Dt.height,1,wt,me,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Dt.width,Dt.height,ft.depth,wt,Dt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Yt,Dt.width,Dt.height,ft.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Dt.width,Dt.height,ft.depth,wt,Vt,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Yt,Dt.width,Dt.height,ft.depth,0,wt,Vt,Dt.data)}else{ee&&De&&e.texStorage2D(n.TEXTURE_2D,It,Yt,de[0].width,de[0].height);for(let Q=0,ct=de.length;Q<ct;Q++)Dt=de[Q],x.format!==Xn?wt!==null?ee?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Dt.width,Dt.height,wt,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Yt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Dt.width,Dt.height,wt,Vt,Dt.data):e.texImage2D(n.TEXTURE_2D,Q,Yt,Dt.width,Dt.height,0,wt,Vt,Dt.data)}else if(x.isDataArrayTexture)if(ee){if(De&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Yt,ft.width,ft.height,ft.depth),U)if(x.layerUpdates.size>0){let Q=ad(ft.width,ft.height,x.format,x.type);for(let ct of x.layerUpdates){let At=ft.data.subarray(ct*Q/ft.data.BYTES_PER_ELEMENT,(ct+1)*Q/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,ft.width,ft.height,1,wt,Vt,At)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,wt,Vt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,ft.width,ft.height,ft.depth,0,wt,Vt,ft.data);else if(x.isData3DTexture)ee?(De&&e.texStorage3D(n.TEXTURE_3D,It,Yt,ft.width,ft.height,ft.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,wt,Vt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,ft.width,ft.height,ft.depth,0,wt,Vt,ft.data);else if(x.isFramebufferTexture){if(De)if(ee)e.texStorage2D(n.TEXTURE_2D,It,Yt,ft.width,ft.height);else{let Q=ft.width,ct=ft.height;for(let At=0;At<It;At++)e.texImage2D(n.TEXTURE_2D,At,Yt,Q,ct,0,wt,Vt,null),Q>>=1,ct>>=1}}else if(de.length>0){if(ee&&De){let Q=tt(de[0]);e.texStorage2D(n.TEXTURE_2D,It,Yt,Q.width,Q.height)}for(let Q=0,ct=de.length;Q<ct;Q++)Dt=de[Q],ee?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,wt,Vt,Dt):e.texImage2D(n.TEXTURE_2D,Q,Yt,wt,Vt,Dt);x.generateMipmaps=!1}else if(ee){if(De){let Q=tt(ft);e.texStorage2D(n.TEXTURE_2D,It,Yt,Q.width,Q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Vt,ft)}else e.texImage2D(n.TEXTURE_2D,0,Yt,wt,Vt,ft);p(x)&&m(j),Nt.__version=et.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function J(E,x,N){if(x.image.length!==6)return;let j=Kt(E,x),at=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);let et=i.get(at);if(at.version!==et.__version||j===!0){e.activeTexture(n.TEXTURE0+N);let Nt=be.getPrimaries(be.workingColorSpace),mt=x.colorSpace===$i?null:be.getPrimaries(x.colorSpace),Et=x.colorSpace===$i||Nt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ie=x.isCompressedTexture||x.image[0].isCompressedTexture,ft=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let ct=0;ct<6;ct++)!ie&&!ft?wt[ct]=y(x.image[ct],!0,s.maxCubemapSize):wt[ct]=ft?x.image[ct].image:x.image[ct],wt[ct]=rt(x,wt[ct]);let Vt=wt[0],Yt=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),de=b(x.internalFormat,Yt,Dt,x.colorSpace),ee=x.isVideoTexture!==!0,De=et.__version===void 0||j===!0,U=at.dataReady,It=S(x,Vt);St(n.TEXTURE_CUBE_MAP,x);let Q;if(ie){ee&&De&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,de,Vt.width,Vt.height);for(let ct=0;ct<6;ct++){Q=wt[ct].mipmaps;for(let At=0;At<Q.length;At++){let Lt=Q[At];x.format!==Xn?Yt!==null?ee?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,0,0,Lt.width,Lt.height,Yt,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,de,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,0,0,Lt.width,Lt.height,Yt,Dt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,de,Lt.width,Lt.height,0,Yt,Dt,Lt.data)}}}else{if(Q=x.mipmaps,ee&&De){Q.length>0&&It++;let ct=tt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,de,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ft){ee?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,wt[ct].width,wt[ct].height,Yt,Dt,wt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,de,wt[ct].width,wt[ct].height,0,Yt,Dt,wt[ct].data);for(let At=0;At<Q.length;At++){let me=Q[At].image[ct].image;ee?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,0,0,me.width,me.height,Yt,Dt,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,de,me.width,me.height,0,Yt,Dt,me.data)}}else{ee?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Yt,Dt,wt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,de,Yt,Dt,wt[ct]);for(let At=0;At<Q.length;At++){let Lt=Q[At];ee?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,0,0,Yt,Dt,Lt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,de,Yt,Dt,Lt.image[ct])}}}p(x)&&m(n.TEXTURE_CUBE_MAP),et.__version=at.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function it(E,x,N,j,at,et){let Nt=r.convert(N.format,N.colorSpace),mt=r.convert(N.type),Et=b(N.internalFormat,Nt,mt,N.colorSpace);if(!i.get(x).__hasExternalTextures){let ft=Math.max(1,x.width>>et),wt=Math.max(1,x.height>>et);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,et,Et,ft,wt,x.depth,0,Nt,mt,null):e.texImage2D(at,et,Et,ft,wt,0,Nt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,at,i.get(N).__webglTexture,0,H(x)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,at,i.get(N).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(E,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let j=x.depthTexture,at=j&&j.isDepthTexture?j.type:null,et=v(x.stencilBuffer,at),Nt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=H(x);z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,et,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,et,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,et,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Nt,n.RENDERBUFFER,E)}else{let j=x.textures;for(let at=0;at<j.length;at++){let et=j[at],Nt=r.convert(et.format,et.colorSpace),mt=r.convert(et.type),Et=b(et.internalFormat,Nt,mt,et.colorSpace),ie=H(x);N&&z(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,Et,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,Et,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Et,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);let j=i.get(x.depthTexture).__webglTexture,at=H(x);if(x.depthTexture.format===ar)z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===pr)z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Gt(E){let x=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let j=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let at=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",at)};j.addEventListener("dispose",at),x.__depthDisposeCallback=at}x.__boundDepthTexture=j}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");gt(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),bt(x.__webglDepthbuffer[j],E,!1);else{let at=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,et)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),bt(x.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(E,x,N){let j=i.get(E);x!==void 0&&it(j.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Gt(E)}function Tt(E){let x=E.texture,N=i.get(E),j=i.get(x);E.addEventListener("dispose",A);let at=E.textures,et=E.isWebGLCubeRenderTarget===!0,Nt=at.length>1;if(Nt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,o.memory.textures++),et){N.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[mt]=[];for(let Et=0;Et<x.mipmaps.length;Et++)N.__webglFramebuffer[mt][Et]=n.createFramebuffer()}else N.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let mt=0;mt<x.mipmaps.length;mt++)N.__webglFramebuffer[mt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Nt)for(let mt=0,Et=at.length;mt<Et;mt++){let ie=i.get(at[mt]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&z(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let mt=0;mt<at.length;mt++){let Et=at[mt];N.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[mt]);let ie=r.convert(Et.format,Et.colorSpace),ft=r.convert(Et.type),wt=b(Et.internalFormat,ie,ft,Et.colorSpace,E.isXRRenderTarget===!0),Vt=H(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,wt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,N.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),St(n.TEXTURE_CUBE_MAP,x);for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)it(N.__webglFramebuffer[mt][Et],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else it(N.__webglFramebuffer[mt],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(x)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let mt=0,Et=at.length;mt<Et;mt++){let ie=at[mt],ft=i.get(ie);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),St(n.TEXTURE_2D,ie),it(N.__webglFramebuffer,E,ie,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),p(ie)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(mt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),St(mt,x),x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)it(N.__webglFramebuffer[Et],E,x,n.COLOR_ATTACHMENT0,mt,Et);else it(N.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,mt,0);p(x)&&m(mt),e.unbindTexture()}E.depthBuffer&&Gt(E)}function Xt(E){let x=E.textures;for(let N=0,j=x.length;N<j;N++){let at=x[N];if(p(at)){let et=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Nt=i.get(at).__webglTexture;e.bindTexture(et,Nt),m(et),e.unbindTexture()}}}let nt=[],C=[];function P(E){if(E.samples>0){if(z(E)===!1){let x=E.textures,N=E.width,j=E.height,at=n.COLOR_BUFFER_BIT,et=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=i.get(E),mt=x.length>1;if(mt)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Et]);let ie=i.get(x[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,N,j,0,0,N,j,at,n.NEAREST),l===!0&&(nt.length=0,C.length=0,nt.push(n.COLOR_ATTACHMENT0+Et),E.depthBuffer&&E.resolveDepthBuffer===!1&&(nt.push(et),C.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Et]);let ie=i.get(x[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,ie,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function H(E){return Math.min(s.maxSamples,E.samples)}function z(E){let x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function q(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function rt(E,x){let N=E.colorSpace,j=E.format,at=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==ss&&N!==$i&&(be.getTransfer(N)===Oe?(j!==Xn||at!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=G,this.setTexture2DArray=ot,this.setTexture3D=X,this.setTextureCube=ut,this.rebindTextures=yt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=z}function tv(n,t){function e(i,s=$i){let r,o=be.getTransfer(s);if(i===Ai)return n.UNSIGNED_BYTE;if(i===eu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pd)return n.BYTE;if(i===Id)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===tu)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===wo)return n.HALF_FLOAT;if(i===Dd)return n.ALPHA;if(i===Ud)return n.RGB;if(i===Xn)return n.RGBA;if(i===Nd)return n.LUMINANCE;if(i===Od)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===iu)return n.RED;if(i===su)return n.RED_INTEGER;if(i===Fd)return n.RG;if(i===ru)return n.RG_INTEGER;if(i===ou)return n.RGBA_INTEGER;if(i===va||i===Ma||i===ba||i===Sa)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kc||i===zc||i===Hc||i===Gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Wc||i===Xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Wc)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qc||i===Yc||i===Zc||i===$c||i===Kc||i===Jc||i===jc||i===Qc||i===th||i===eh||i===nh||i===ih||i===sh||i===rh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$c)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ih)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rh)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===oh||i===ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ea)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bd||i===lh||i===ch||i===hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Th=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},zt=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ev={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new hi({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends ns{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,y=new Ah,p=e.getContextAttributes(),m=null,b=null,v=[],S=[],D=new dt,A=null,R=new sn;R.layers.enable(1),R.viewport=new xe;let L=new sn;L.layers.enable(2),L.viewport=new xe;let W=[R,L],_=new Th;_.layers.enable(1),_.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=v[J];return it===void 0&&(it=new ao,v[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=v[J];return it===void 0&&(it=new ao,v[J]=it),it.getGripSpace()},this.getHand=function(J){let it=v[J];return it===void 0&&(it=new ao,v[J]=it),it.getHandSpace()};function F(J){let it=S.indexOf(J.inputSource);if(it===-1)return;let bt=v[it];bt!==void 0&&(bt.update(J.inputSource,J.frame,c||o),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ot);for(let J=0;J<v.length;J++){let it=S[J];it!==null&&(S[J]=null,v[J].disconnect(it))}M=null,k=null,y.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,b=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ot),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ri(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,bt=null,gt=null;p.depth&&(gt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?pr:ar,bt=p.stencil?dr:Es);let Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ri(f.textureWidth,f.textureHeight,{format:Xn,type:Ai,depthTexture:new za(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ot(J){for(let it=0;it<J.removed.length;it++){let bt=J.removed[it],gt=S.indexOf(bt);gt>=0&&(S[gt]=null,v[gt].disconnect(bt))}for(let it=0;it<J.added.length;it++){let bt=J.added[it],gt=S.indexOf(bt);if(gt===-1){for(let yt=0;yt<v.length;yt++)if(yt>=S.length){S.push(bt),gt=yt;break}else if(S[yt]===null){S[yt]=bt,gt=yt;break}if(gt===-1)break}let Gt=v[gt];Gt&&Gt.connect(bt)}}let X=new I,ut=new I;function K(J,it,bt){X.setFromMatrixPosition(it.matrixWorld),ut.setFromMatrixPosition(bt.matrixWorld);let gt=X.distanceTo(ut),Gt=it.projectionMatrix.elements,yt=bt.projectionMatrix.elements,Tt=Gt[14]/(Gt[10]-1),Xt=Gt[14]/(Gt[10]+1),nt=(Gt[9]+1)/Gt[5],C=(Gt[9]-1)/Gt[5],P=(Gt[8]-1)/Gt[0],H=(yt[8]+1)/yt[0],z=Tt*P,q=Tt*H,rt=gt/(-P+H),tt=rt*-P;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(tt),J.translateZ(rt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Gt[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let E=Tt+rt,x=Xt+rt,N=z-tt,j=q+(gt-tt),at=nt*Xt/x*E,et=C*Xt/x*E;J.projectionMatrix.makePerspective(N,j,at,et,E,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function vt(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let it=J.near,bt=J.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),_.near=L.near=R.near=it,_.far=L.far=R.far=bt,(M!==_.near||k!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,k=_.far);let gt=J.parent,Gt=_.cameras;vt(_,gt);for(let yt=0;yt<Gt.length;yt++)vt(Gt[yt],gt);Gt.length===2?K(_,R,L):_.projectionMatrix.copy(R.projectionMatrix),Mt(J,_,gt)};function Mt(J,it,bt){bt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ia*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let St=null;function Kt(J,it){if(h=it.getViewerPose(c||o),g=it,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let gt=!1;bt.length!==_.cameras.length&&(_.cameras.length=0,gt=!0);for(let yt=0;yt<bt.length;yt++){let Tt=bt[yt],Xt=null;if(d!==null)Xt=d.getViewport(Tt);else{let C=u.getViewSubImage(f,Tt);Xt=C.viewport,yt===0&&(t.setRenderTargetTextures(b,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(b))}let nt=W[yt];nt===void 0&&(nt=new sn,nt.layers.enable(yt),nt.viewport=new xe,W[yt]=nt),nt.matrix.fromArray(Tt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Tt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),yt===0&&(_.matrix.copy(nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),gt===!0&&_.cameras.push(nt)}let Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){let yt=u.getDepthInformation(bt[0]);yt&&yt.isValid&&yt.texture&&y.init(t,yt,s.renderState)}}for(let bt=0;bt<v.length;bt++){let gt=S[bt],Gt=v[bt];gt!==null&&Gt!==void 0&&Gt.update(gt,it,c||o)}St&&St(J,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let ne=new Wd;ne.setAnimationLoop(Kt),this.setAnimationLoop=function(J){St=J},this.dispose=function(){}}},_s=new mn,sv=new Zt;function rv(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Vd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),v=b.envMap,S=b.envMapRotation;v&&(p.envMap.value=v,_s.copy(S),_s.x*=-1,_s.y*=-1,_s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),p.envMapRotation.value.setFromMatrix4(sv.makeRotationFromEuler(_s)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ov(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;i.uniformBlockBinding(b,S)}function c(b,v){let S=s[b.id];S===void 0&&(g(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",p));let D=v.program;i.updateUBOMapping(b,D);let A=t.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){let v=u();b.__bindingPointIndex=v;let S=n.createBuffer(),D=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],S=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,R=S.length;A<R;A++){let L=Array.isArray(S[A])?S[A]:[S[A]];for(let W=0,_=L.length;W<_;W++){let M=L[W];if(d(M,A,W,D)===!0){let k=M.__offset,F=Array.isArray(M.value)?M.value:[M.value],G=0;for(let ot=0;ot<F.length;ot++){let X=F[ot],ut=y(X);typeof X=="number"||typeof X=="boolean"?(M.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,k+G,M.__data)):X.isMatrix3?(M.__data[0]=X.elements[0],M.__data[1]=X.elements[1],M.__data[2]=X.elements[2],M.__data[3]=0,M.__data[4]=X.elements[3],M.__data[5]=X.elements[4],M.__data[6]=X.elements[5],M.__data[7]=0,M.__data[8]=X.elements[6],M.__data[9]=X.elements[7],M.__data[10]=X.elements[8],M.__data[11]=0):(X.toArray(M.__data,G),G+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,v,S,D){let A=b.value,R=v+"_"+S;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{let L=D[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(b){let v=b.uniforms,S=0,D=16;for(let R=0,L=v.length;R<L;R++){let W=Array.isArray(v[R])?v[R]:[v[R]];for(let _=0,M=W.length;_<M;_++){let k=W[_],F=Array.isArray(k.value)?k.value:[k.value];for(let G=0,ot=F.length;G<ot;G++){let X=F[G],ut=y(X),K=S%D,vt=K%ut.boundary,Mt=K+vt;S+=vt,Mt!==0&&D-Mt<ut.storage&&(S+=D-Mt),k.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=ut.storage}}}let A=S%D;return A>0&&(S+=D-A),b.__size=S,b.__cache={},this}function y(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ha=class{constructor(t={}){let{canvas:e=cm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Qi,this.toneMappingExposure=1;let v=this,S=!1,D=0,A=0,R=null,L=-1,W=null,_=new xe,M=new xe,k=null,F=new jt(0),G=0,ot=e.width,X=e.height,ut=1,K=null,vt=null,Mt=new xe(0,0,ot,X),St=new xe(0,0,ot,X),Kt=!1,ne=new po,J=!1,it=!1,bt=new Zt,gt=new Zt,Gt=new I,yt=new xe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function nt(){return R===null?ut:1}let C=i;function P(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),C===null){let O="webgl2";if(C=P(O,w),C===null)throw P(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let H,z,q,rt,tt,E,x,N,j,at,et,Nt,mt,Et,ie,ft,wt,Vt,Yt,Dt,de,ee,De,U;function It(){H=new b_(C),H.init(),ee=new tv(C,H),z=new g_(C,H,t,ee),q=new Jx(C),z.reverseDepthBuffer&&q.buffers.depth.setReversed(!0),rt=new w_(C),tt=new Bx,E=new Qx(C,H,q,tt,z,ee,rt),x=new __(v),N=new M_(v),j=new Lm(C),De=new p_(C,j),at=new S_(C,j,rt,De),et=new A_(C,at,j,rt),Yt=new T_(C,z,E),ft=new y_(tt),Nt=new Fx(v,x,N,H,z,De,ft),mt=new rv(v,tt),Et=new zx,ie=new qx(H),Vt=new d_(v,x,N,q,et,f,l),wt=new $x(v,et,z),U=new ov(C,rt,z,q),Dt=new m_(C,H,rt),de=new E_(C,H,rt),rt.programs=Nt.programs,v.capabilities=z,v.extensions=H,v.properties=tt,v.renderLists=Et,v.shadowMap=wt,v.state=q,v.info=rt}It();let Q=new Rh(v,C);this.xr=Q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=H.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=H.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(w){w!==void 0&&(ut=w,this.setSize(ot,X,!1))},this.getSize=function(w){return w.set(ot,X)},this.setSize=function(w,O,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=w,X=O,e.width=Math.floor(w*ut),e.height=Math.floor(O*ut),Y===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ot*ut,X*ut).floor()},this.setDrawingBufferSize=function(w,O,Y){ot=w,X=O,ut=Y,e.width=Math.floor(w*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,O,Y,Z){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,O,Y,Z),q.viewport(_.copy(Mt).multiplyScalar(ut).round())},this.getScissor=function(w){return w.copy(St)},this.setScissor=function(w,O,Y,Z){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,O,Y,Z),q.scissor(M.copy(St).multiplyScalar(ut).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){q.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(w=!0,O=!0,Y=!0){let Z=0;if(w){let B=!1;if(R!==null){let pt=R.texture.format;B=pt===ou||pt===ru||pt===su}if(B){let pt=R.texture.type,Rt=pt===Ai||pt===Es||pt===uo||pt===dr||pt===eu||pt===nu,Ot=Vt.getClearColor(),Ft=Vt.getClearAlpha(),$t=Ot.r,Jt=Ot.g,Bt=Ot.b;Rt?(d[0]=$t,d[1]=Jt,d[2]=Bt,d[3]=Ft,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=$t,g[1]=Jt,g[2]=Bt,g[3]=Ft,C.clearBufferiv(C.COLOR,0,g))}else Z|=C.COLOR_BUFFER_BIT}O&&(Z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Et.dispose(),ie.dispose(),tt.dispose(),x.dispose(),N.dispose(),et.dispose(),De.dispose(),U.dispose(),Nt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",rf),Q.removeEventListener("sessionend",of),fs.stop()};function ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let w=rt.autoReset,O=wt.enabled,Y=wt.autoUpdate,Z=wt.needsUpdate,B=wt.type;It(),rt.autoReset=w,wt.enabled=O,wt.autoUpdate=Y,wt.needsUpdate=Z,wt.type=B}function Lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function me(w){let O=w.target;O.removeEventListener("dispose",me),$e(O)}function $e(w){En(w),tt.remove(w)}function En(w){let O=tt.get(w).programs;O!==void 0&&(O.forEach(function(Y){Nt.releaseProgram(Y)}),w.isShaderMaterial&&Nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,Z,B,pt){O===null&&(O=Tt);let Rt=B.isMesh&&B.matrixWorld.determinant()<0,Ot=y0(w,O,Y,Z,B);q.setMaterial(Z,Rt);let Ft=Y.index,$t=1;if(Z.wireframe===!0){if(Ft=at.getWireframeAttribute(Y),Ft===void 0)return;$t=2}let Jt=Y.drawRange,Bt=Y.attributes.position,Se=Jt.start*$t,Ne=(Jt.start+Jt.count)*$t;pt!==null&&(Se=Math.max(Se,pt.start*$t),Ne=Math.min(Ne,(pt.start+pt.count)*$t)),Ft!==null?(Se=Math.max(Se,0),Ne=Math.min(Ne,Ft.count)):Bt!=null&&(Se=Math.max(Se,0),Ne=Math.min(Ne,Bt.count));let We=Ne-Se;if(We<0||We===1/0)return;De.setup(B,Z,Ot,Y,Ft);let Nn,ve=Dt;if(Ft!==null&&(Nn=j.get(Ft),ve=de,ve.setIndex(Nn)),B.isMesh)Z.wireframe===!0?(q.setLineWidth(Z.wireframeLinewidth*nt()),ve.setMode(C.LINES)):ve.setMode(C.TRIANGLES);else if(B.isLine){let kt=Z.linewidth;kt===void 0&&(kt=1),q.setLineWidth(kt*nt()),B.isLineSegments?ve.setMode(C.LINES):B.isLineLoop?ve.setMode(C.LINE_LOOP):ve.setMode(C.LINE_STRIP)}else B.isPoints?ve.setMode(C.POINTS):B.isSprite&&ve.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ve.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))ve.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let kt=B._multiDrawStarts,hn=B._multiDrawCounts,Me=B._multiDrawCount,Kn=Ft?j.get(Ft).bytesPerElement:1,ks=tt.get(Z).currentProgram.getUniforms();for(let On=0;On<Me;On++)ks.setValue(C,"_gl_DrawID",On),ve.render(kt[On]/Kn,hn[On])}else if(B.isInstancedMesh)ve.renderInstances(Se,We,B.count);else if(Y.isInstancedBufferGeometry){let kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,hn=Math.min(Y.instanceCount,kt);ve.renderInstances(Se,We,hn)}else ve.render(Se,We)};function _e(w,O,Y){w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,Ho(w,O,Y),w.side=es,w.needsUpdate=!0,Ho(w,O,Y),w.side=_n):Ho(w,O,Y)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),p=ie.get(Y),p.init(O),b.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==Y&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let Z=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let pt=B.material;if(pt)if(Array.isArray(pt))for(let Rt=0;Rt<pt.length;Rt++){let Ot=pt[Rt];_e(Ot,Y,B),Z.add(Ot)}else _e(pt,Y,B),Z.add(pt)}),b.pop(),p=null,Z},this.compileAsync=function(w,O,Y=null){let Z=this.compile(w,O,Y);return new Promise(B=>{function pt(){if(Z.forEach(function(Rt){tt.get(Rt).currentProgram.isReady()&&Z.delete(Rt)}),Z.size===0){B(w);return}setTimeout(pt,10)}H.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let wn=null;function _i(w){wn&&wn(w)}function rf(){fs.stop()}function of(){fs.start()}let fs=new Wd;fs.setAnimationLoop(_i),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(w){wn=w,Q.setAnimationLoop(w),w===null?fs.stop():fs.start()},Q.addEventListener("sessionstart",rf),Q.addEventListener("sessionend",of),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,R),p=ie.get(w,b.length),p.init(O),b.push(p),gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(gt),it=this.localClippingEnabled,J=ft.init(this.clippingPlanes,it),y=Et.get(w,m.length),y.init(),m.push(y),Q.enabled===!0&&Q.isPresenting===!0){let pt=v.xr.getDepthSensingMesh();pt!==null&&Bl(pt,O,-1/0,v.sortObjects)}Bl(w,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(K,vt),Xt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Xt&&Vt.addToRenderList(y,w),this.info.render.frame++,J===!0&&ft.beginShadows();let Y=p.state.shadowsArray;wt.render(Y,w,O),J===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=y.opaque,B=y.transmissive;if(p.setupLights(),O.isArrayCamera){let pt=O.cameras;if(B.length>0)for(let Rt=0,Ot=pt.length;Rt<Ot;Rt++){let Ft=pt[Rt];lf(Z,B,w,Ft)}Xt&&Vt.render(w);for(let Rt=0,Ot=pt.length;Rt<Ot;Rt++){let Ft=pt[Rt];af(y,w,Ft,Ft.viewport)}}else B.length>0&&lf(Z,B,w,O),Xt&&Vt.render(w),af(y,w,O);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,O),De.resetDefaultState(),L=-1,W=null,b.pop(),b.length>0?(p=b[b.length-1],J===!0&&ft.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Bl(w,O,Y,Z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){Z&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gt);let Rt=et.update(w),Ot=w.material;Ot.visible&&y.push(w,Rt,Ot,Y,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){let Rt=et.update(w),Ot=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),yt.copy(Rt.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(gt)),Array.isArray(Ot)){let Ft=Rt.groups;for(let $t=0,Jt=Ft.length;$t<Jt;$t++){let Bt=Ft[$t],Se=Ot[Bt.materialIndex];Se&&Se.visible&&y.push(w,Rt,Se,Y,yt.z,Bt)}}else Ot.visible&&y.push(w,Rt,Ot,Y,yt.z,null)}}let pt=w.children;for(let Rt=0,Ot=pt.length;Rt<Ot;Rt++)Bl(pt[Rt],O,Y,Z)}function af(w,O,Y,Z){let B=w.opaque,pt=w.transmissive,Rt=w.transparent;p.setupLightsView(Y),J===!0&&ft.setGlobalState(v.clippingPlanes,Y),Z&&q.viewport(_.copy(Z)),B.length>0&&zo(B,O,Y),pt.length>0&&zo(pt,O,Y),Rt.length>0&&zo(Rt,O,Y),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function lf(w,O,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Ri(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?wo:Ai,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));let pt=p.state.transmissionRenderTarget[Z.id],Rt=Z.viewport||_;pt.setSize(Rt.z,Rt.w);let Ot=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Xt&&Vt.render(Y);let Ft=v.toneMapping;v.toneMapping=Qi;let $t=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),J===!0&&ft.setGlobalState(v.clippingPlanes,Z),zo(w,Y,Z),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt),H.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Bt=0,Se=O.length;Bt<Se;Bt++){let Ne=O[Bt],We=Ne.object,Nn=Ne.geometry,ve=Ne.material,kt=Ne.group;if(ve.side===_n&&We.layers.test(Z.layers)){let hn=ve.side;ve.side=rn,ve.needsUpdate=!0,cf(We,Y,Z,Nn,ve,kt),ve.side=hn,ve.needsUpdate=!0,Jt=!0}}Jt===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt))}v.setRenderTarget(Ot),v.setClearColor(F,G),$t!==void 0&&(Z.viewport=$t),v.toneMapping=Ft}function zo(w,O,Y){let Z=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pt=w.length;B<pt;B++){let Rt=w[B],Ot=Rt.object,Ft=Rt.geometry,$t=Z===null?Rt.material:Z,Jt=Rt.group;Ot.layers.test(Y.layers)&&cf(Ot,O,Y,Ft,$t,Jt)}}function cf(w,O,Y,Z,B,pt){w.onBeforeRender(v,O,Y,Z,B,pt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,O,Y,Z,w,pt),B.transparent===!0&&B.side===_n&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,v.renderBufferDirect(Y,O,Z,B,w,pt),B.side=es,B.needsUpdate=!0,v.renderBufferDirect(Y,O,Z,B,w,pt),B.side=_n):v.renderBufferDirect(Y,O,Z,B,w,pt),w.onAfterRender(v,O,Y,Z,B,pt)}function Ho(w,O,Y){O.isScene!==!0&&(O=Tt);let Z=tt.get(w),B=p.state.lights,pt=p.state.shadowsArray,Rt=B.state.version,Ot=Nt.getParameters(w,B.state,pt,O,Y),Ft=Nt.getProgramCacheKey(Ot),$t=Z.programs;Z.environment=w.isMeshStandardMaterial?O.environment:null,Z.fog=O.fog,Z.envMap=(w.isMeshStandardMaterial?N:x).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",me),$t=new Map,Z.programs=$t);let Jt=$t.get(Ft);if(Jt!==void 0){if(Z.currentProgram===Jt&&Z.lightsStateVersion===Rt)return uf(w,Ot),Jt}else Ot.uniforms=Nt.getUniforms(w),w.onBeforeCompile(Ot,v),Jt=Nt.acquireProgram(Ot,Ft),$t.set(Ft,Jt),Z.uniforms=Ot.uniforms;let Bt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=ft.uniform),uf(w,Ot),Z.needsLights=x0(w),Z.lightsStateVersion=Rt,Z.needsLights&&(Bt.ambientLightColor.value=B.state.ambient,Bt.lightProbe.value=B.state.probe,Bt.directionalLights.value=B.state.directional,Bt.directionalLightShadows.value=B.state.directionalShadow,Bt.spotLights.value=B.state.spot,Bt.spotLightShadows.value=B.state.spotShadow,Bt.rectAreaLights.value=B.state.rectArea,Bt.ltc_1.value=B.state.rectAreaLTC1,Bt.ltc_2.value=B.state.rectAreaLTC2,Bt.pointLights.value=B.state.point,Bt.pointLightShadows.value=B.state.pointShadow,Bt.hemisphereLights.value=B.state.hemi,Bt.directionalShadowMap.value=B.state.directionalShadowMap,Bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Bt.spotShadowMap.value=B.state.spotShadowMap,Bt.spotLightMatrix.value=B.state.spotLightMatrix,Bt.spotLightMap.value=B.state.spotLightMap,Bt.pointShadowMap.value=B.state.pointShadowMap,Bt.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=Jt,Z.uniformsList=null,Jt}function hf(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=cr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function uf(w,O){let Y=tt.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function y0(w,O,Y,Z,B){O.isScene!==!0&&(O=Tt),E.resetTextureUnits();let pt=O.fog,Rt=Z.isMeshStandardMaterial?O.environment:null,Ot=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ss,Ft=(Z.isMeshStandardMaterial?N:x).get(Z.envMap||Rt),$t=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Jt=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!Y.morphAttributes.position,Se=!!Y.morphAttributes.normal,Ne=!!Y.morphAttributes.color,We=Qi;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(We=v.toneMapping);let Nn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=Nn!==void 0?Nn.length:0,kt=tt.get(Z),hn=p.state.lights;if(J===!0&&(it===!0||w!==W)){let Vn=w===W&&Z.id===L;ft.setState(Z,w,Vn)}let Me=!1;Z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==hn.state.version||kt.outputColorSpace!==Ot||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isBatchedMesh&&kt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&kt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&kt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&kt.instancingMorph===!1&&B.morphTexture!==null||kt.envMap!==Ft||Z.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ft.numPlanes||kt.numIntersection!==ft.numIntersection)||kt.vertexAlphas!==$t||kt.vertexTangents!==Jt||kt.morphTargets!==Bt||kt.morphNormals!==Se||kt.morphColors!==Ne||kt.toneMapping!==We||kt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,kt.__version=Z.version);let Kn=kt.currentProgram;Me===!0&&(Kn=Ho(Z,O,B));let ks=!1,On=!1,kl=!1,qe=Kn.getUniforms(),Gi=kt.uniforms;if(q.useProgram(Kn.program)&&(ks=!0,On=!0,kl=!0),Z.id!==L&&(L=Z.id,On=!0),ks||W!==w){z.reverseDepthBuffer?(bt.copy(w.projectionMatrix),um(bt),fm(bt),qe.setValue(C,"projectionMatrix",bt)):qe.setValue(C,"projectionMatrix",w.projectionMatrix),qe.setValue(C,"viewMatrix",w.matrixWorldInverse);let Vn=qe.map.cameraPosition;Vn!==void 0&&Vn.setValue(C,Gt.setFromMatrixPosition(w.matrixWorld)),z.logarithmicDepthBuffer&&qe.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&qe.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,On=!0,kl=!0)}if(B.isSkinnedMesh){qe.setOptional(C,B,"bindMatrix"),qe.setOptional(C,B,"bindMatrixInverse");let Vn=B.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),qe.setValue(C,"boneTexture",Vn.boneTexture,E))}B.isBatchedMesh&&(qe.setOptional(C,B,"batchingTexture"),qe.setValue(C,"batchingTexture",B._matricesTexture,E),qe.setOptional(C,B,"batchingIdTexture"),qe.setValue(C,"batchingIdTexture",B._indirectTexture,E),qe.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&qe.setValue(C,"batchingColorTexture",B._colorsTexture,E));let zl=Y.morphAttributes;if((zl.position!==void 0||zl.normal!==void 0||zl.color!==void 0)&&Yt.update(B,Y,Kn),(On||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,qe.setValue(C,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Gi.envMap.value=Ft,Gi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&O.environment!==null&&(Gi.envMapIntensity.value=O.environmentIntensity),On&&(qe.setValue(C,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&_0(Gi,kl),pt&&Z.fog===!0&&mt.refreshFogUniforms(Gi,pt),mt.refreshMaterialUniforms(Gi,Z,ut,X,p.state.transmissionRenderTarget[w.id]),cr.upload(C,hf(kt),Gi,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cr.upload(C,hf(kt),Gi,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&qe.setValue(C,"center",B.center),qe.setValue(C,"modelViewMatrix",B.modelViewMatrix),qe.setValue(C,"normalMatrix",B.normalMatrix),qe.setValue(C,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Vn=Z.uniformsGroups;for(let Hl=0,v0=Vn.length;Hl<v0;Hl++){let ff=Vn[Hl];U.update(ff,Kn),U.bind(ff,Kn)}}return Kn}function _0(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function x0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,Y){tt.get(w.texture).__webglTexture=O,tt.get(w.depthTexture).__webglTexture=Y;let Z=tt.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let Y=tt.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,Y=0){R=w,D=O,A=Y;let Z=!0,B=null,pt=!1,Rt=!1;if(w){let Ft=tt.get(w);if(Ft.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(C.FRAMEBUFFER,null),Z=!1;else if(Ft.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Ft.__hasExternalTextures)E.rebindTextures(w,tt.get(w.texture).__webglTexture,tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Bt=w.depthTexture;if(Ft.__boundDepthTexture!==Bt){if(Bt!==null&&tt.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Rt=!0);let Jt=tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[O])?B=Jt[O][Y]:B=Jt[O],pt=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?B=tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?B=Jt[Y]:B=Jt,_.copy(w.viewport),M.copy(w.scissor),k=w.scissorTest}else _.copy(Mt).multiplyScalar(ut).floor(),M.copy(St).multiplyScalar(ut).floor(),k=Kt;if(q.bindFramebuffer(C.FRAMEBUFFER,B)&&Z&&q.drawBuffers(w,B),q.viewport(_),q.scissor(M),q.setScissorTest(k),pt){let Ft=tt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ft.__webglTexture,Y)}else if(Rt){let Ft=tt.get(w.texture),$t=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,Y||0,$t)}L=-1},this.readRenderTargetPixels=function(w,O,Y,Z,B,pt,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ot=Ot[Rt]),Ot){q.bindFramebuffer(C.FRAMEBUFFER,Ot);try{let Ft=w.texture,$t=Ft.format,Jt=Ft.type;if(!z.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Z&&Y>=0&&Y<=w.height-B&&C.readPixels(O,Y,Z,B,ee.convert($t),ee.convert(Jt),pt)}finally{let Ft=R!==null?tt.get(R).__webglFramebuffer:null;q.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,Z,B,pt,Rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ot=Ot[Rt]),Ot){let Ft=w.texture,$t=Ft.format,Jt=Ft.type;if(!z.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-Z&&Y>=0&&Y<=w.height-B){q.bindFramebuffer(C.FRAMEBUFFER,Ot);let Bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.bufferData(C.PIXEL_PACK_BUFFER,pt.byteLength,C.STREAM_READ),C.readPixels(O,Y,Z,B,ee.convert($t),ee.convert(Jt),0);let Se=R!==null?tt.get(R).__webglFramebuffer:null;q.bindFramebuffer(C.FRAMEBUFFER,Se);let Ne=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await hm(C,Ne,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,pt),C.deleteBuffer(Bt),C.deleteSync(Ne),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,Y=0){w.isTexture!==!0&&(wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let Z=Math.pow(2,-Y),B=Math.floor(w.image.width*Z),pt=Math.floor(w.image.height*Z),Rt=O!==null?O.x:0,Ot=O!==null?O.y:0;E.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,Rt,Ot,B,pt),q.unbindTexture()},this.copyTextureToTexture=function(w,O,Y=null,Z=null,B=0){w.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,Y=null);let pt,Rt,Ot,Ft,$t,Jt;Y!==null?(pt=Y.max.x-Y.min.x,Rt=Y.max.y-Y.min.y,Ot=Y.min.x,Ft=Y.min.y):(pt=w.image.width,Rt=w.image.height,Ot=0,Ft=0),Z!==null?($t=Z.x,Jt=Z.y):($t=0,Jt=0);let Bt=ee.convert(O.format),Se=ee.convert(O.type);E.setTexture2D(O,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let Ne=C.getParameter(C.UNPACK_ROW_LENGTH),We=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nn=C.getParameter(C.UNPACK_SKIP_PIXELS),ve=C.getParameter(C.UNPACK_SKIP_ROWS),kt=C.getParameter(C.UNPACK_SKIP_IMAGES),hn=w.isCompressedTexture?w.mipmaps[B]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,hn.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,hn.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ot),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,B,$t,Jt,pt,Rt,Bt,Se,hn.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,B,$t,Jt,hn.width,hn.height,Bt,hn.data):C.texSubImage2D(C.TEXTURE_2D,B,$t,Jt,pt,Rt,Bt,Se,hn),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ne),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,We),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ve),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt),B===0&&O.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(w,O,Y=null,Z=null,B=0){w.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0);let pt,Rt,Ot,Ft,$t,Jt,Bt,Se,Ne,We=w.isCompressedTexture?w.mipmaps[B]:w.image;Y!==null?(pt=Y.max.x-Y.min.x,Rt=Y.max.y-Y.min.y,Ot=Y.max.z-Y.min.z,Ft=Y.min.x,$t=Y.min.y,Jt=Y.min.z):(pt=We.width,Rt=We.height,Ot=We.depth,Ft=0,$t=0,Jt=0),Z!==null?(Bt=Z.x,Se=Z.y,Ne=Z.z):(Bt=0,Se=0,Ne=0);let Nn=ee.convert(O.format),ve=ee.convert(O.type),kt;if(O.isData3DTexture)E.setTexture3D(O,0),kt=C.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)E.setTexture2DArray(O,0),kt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let hn=C.getParameter(C.UNPACK_ROW_LENGTH),Me=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Kn=C.getParameter(C.UNPACK_SKIP_PIXELS),ks=C.getParameter(C.UNPACK_SKIP_ROWS),On=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,We.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,We.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,$t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Jt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(kt,B,Bt,Se,Ne,pt,Rt,Ot,Nn,ve,We.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(kt,B,Bt,Se,Ne,pt,Rt,Ot,Nn,We.data):C.texSubImage3D(kt,B,Bt,Se,Ne,pt,Rt,Ot,Nn,ve,We),C.pixelStorei(C.UNPACK_ROW_LENGTH,hn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Me),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Kn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ks),C.pixelStorei(C.UNPACK_SKIP_IMAGES,On),B===0&&O.generateMipmaps&&C.generateMipmap(kt),q.unbindTexture()},this.initRenderTarget=function(w){tt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),q.unbindTexture()},this.resetState=function(){D=0,A=0,R=null,q.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===au?"display-p3":"srgb",e.unpackColorSpace=be.workingColorSpace===sl?"display-p3":"srgb"}},Ga=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ws=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new I,mo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fn=class extends Ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tr,to=new I,er=new I,nr=new I,ir=new dt,eo=new dt,$d=new Zt,ca=new I,no=new I,ha=new I,ld=new dt,xc=new dt,cd=new dt,an=class extends Fe{constructor(t=new fn){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Va(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new mo(i,3,0,!1)),tr.setAttribute("uv",new mo(i,2,3,!1))}this.geometry=tr,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),$d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ua(ca.set(-.5,-.5,0),nr,o,er,s,r),ua(no.set(.5,-.5,0),nr,o,er,s,r),ua(ha.set(.5,.5,0),nr,o,er,s,r),ld.set(0,0),xc.set(1,0),cd.set(1,1);let a=t.ray.intersectTriangle(ca,no,ha,!1,to);if(a===null&&(ua(no.set(-.5,.5,0),nr,o,er,s,r),xc.set(0,1),a=t.ray.intersectTriangle(ca,ha,no,!1,to),a===null))return;let l=t.ray.origin.distanceTo(to);l<t.near||l>t.far||e.push({distance:l,point:to.clone(),uv:Ki.getInterpolation(to,ca,no,ha,ld,xc,cd,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(n,t,e,i,s,r){ir.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(eo.x=r*ir.x-s*ir.y,eo.y=s*ir.x+r*ir.y):eo.copy(ir),n.copy(t),n.x+=eo.x,n.y+=eo.y,n.applyMatrix4($d)}var hd=new I,ud=new xe,fd=new xe,av=new I,dd=new Zt,fa=new I,vc=new qn,pd=new Zt,Mc=new fo,Wa=class extends st{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gf,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ci),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,fa),this.boundingSphere.expandByPoint(fa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vc.copy(this.boundingSphere),vc.applyMatrix4(s),t.ray.intersectsSphere(vc)!==!1&&(pd.copy(s).invert(),Mc.copy(t.ray).applyMatrix4(pd),!(this.boundingBox!==null&&Mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Mc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new xe,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===gf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===K0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;ud.fromBufferAttribute(s.attributes.skinIndex,t),fd.fromBufferAttribute(s.attributes.skinWeight,t),hd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=fd.getComponent(r);if(o!==0){let a=ud.getComponent(r);dd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(av.copy(hd).applyMatrix4(dd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},Ch=class extends Fe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xa=class extends Rn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=An,h=An,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},md=new Zt,lv=new Zt,qa=class n{constructor(t=[],e=[]){this.uuid=li(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Zt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:lv;md.multiplyMatrices(a,e[r]),md.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Xa(e,t,t,Xn,ei);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let r=t.bones[i],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ch),this.bones.push(o),this.boneInverses.push(new Zt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=i[s];t.boneInverses.push(a.toArray())}return t}},go=class extends Ee{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sr=new Zt,gd=new Zt,da=[],yd=new ci,cv=new Zt,io=new st,so=new qn,Ya=class extends st{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new go(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,sr),yd.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(yd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,sr),so.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),t.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),gd.multiplyMatrices(i,sr),io.matrixWorld=gd,io.raycast(t,da);for(let o=0,a=da.length;o<a;o++){let l=da[o];l.instanceId=r,l.object=this,e.push(l)}da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new go(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(s*this.count),s,this.count,iu,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yo=class extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_d=new Zt,Ph=new fo,pa=new qn,ma=new I,Za=class extends Fe{constructor(t=new Ve,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;_d.copy(s).invert(),Ph.copy(t.ray).applyMatrix4(_d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let p=c.getX(g);ma.fromBufferAttribute(u,p),xd(ma,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)ma.fromBufferAttribute(u,g),xd(ma,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xd(n,t,e,i,s,r,o){let a=Ph.distanceSqToPoint(n);if(a<e){let l=new I;Ph.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var $a=class extends Rn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new dt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new I,s=[],r=[],o=[],a=new I,l=new Zt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(un(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(un(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_o=class extends Yn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ih=class extends _o{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ga=new I,bc=new cu,Sc=new cu,Ec=new cu,Lh=class extends Yn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ga.subVectors(s[0],s[1]).add(s[0]),c=ga);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ga.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ga),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),bc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,p),Sc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,p),Ec.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Sc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ec.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(bc.calc(l),Sc.calc(l),Ec.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function hv(n,t){let e=1-n;return e*e*t}function uv(n,t){return 2*(1-n)*n*t}function fv(n,t){return n*n*t}function lo(n,t,e,i){return hv(n,t)+uv(n,e)+fv(n,i)}function dv(n,t){let e=1-n;return e*e*e*t}function pv(n,t){let e=1-n;return 3*e*e*n*t}function mv(n,t){return 3*(1-n)*n*n*t}function gv(n,t){return n*n*n*t}function co(n,t,e,i,s){return dv(n,t)+pv(n,e)+mv(n,i)+gv(n,s)}var Ka=class extends Yn{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(t,s.x,r.x,o.x,a.x),co(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dh=class extends Yn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(t,s.x,r.x,o.x,a.x),co(t,s.y,r.y,o.y,a.y),co(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends Yn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uh=class extends Yn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends Yn{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(t,s.x,r.x,o.x),lo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nh=class extends Yn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(t,s.x,r.x,o.x),lo(t,s.y,r.y,o.y),lo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(vd(a,l.x,c.x,h.x,u.x),vd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Oh=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:Lh,CubicBezierCurve:Ka,CubicBezierCurve3:Dh,EllipseCurve:_o,LineCurve:Ja,LineCurve3:Uh,QuadraticBezierCurve:ja,QuadraticBezierCurve3:Nh,SplineCurve:Qa}),Fh=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Oh[s.type]().fromJSON(s))}return this}},xo=class extends Fh{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ja(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ja(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ka(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Qa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new _o(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vo=class n extends Ve{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=un(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new dt,d=new I,g=new I,y=new I,p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(g)}for(let b=0;b<=e;b++){let v=i+b*h*s,S=Math.sin(v),D=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*S,u.y=t[A].y,u.z=t[A].x*D,o.push(u.x,u.y,u.z),f.x=b/e,f.y=A/(t.length-1),a.push(f.x,f.y);let R=l[3*A+0]*S,L=l[3*A+1],W=l[3*A+0]*D;c.push(R,L,W)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){let S=v+b*t.length,D=S,A=S+t.length,R=S+t.length+1,L=S+1;r.push(D,A,L),r.push(R,L,A)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Pn=class n extends vo{constructor(t=1,e=1,i=4,s=8){let r=new xo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},is=class n extends Ve{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Je=class n extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=i/2,m=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(d,2));function b(){let S=new I,D=new I,A=0,R=(e-t)/i;for(let L=0;L<=r;L++){let W=[],_=L/r,M=_*(e-t)+t;for(let k=0;k<=s;k++){let F=k/s,G=F*l+a,ot=Math.sin(G),X=Math.cos(G);D.x=M*ot,D.y=-_*i+p,D.z=M*X,u.push(D.x,D.y,D.z),S.set(ot,R,X).normalize(),f.push(S.x,S.y,S.z),d.push(F,1-_),W.push(g++)}y.push(W)}for(let L=0;L<s;L++)for(let W=0;W<r;W++){let _=y[W][L],M=y[W+1][L],k=y[W+1][L+1],F=y[W][L+1];t>0&&(h.push(_,M,F),A+=3),e>0&&(h.push(M,k,F),A+=3)}c.addGroup(m,A,0),m+=A}function v(S){let D=g,A=new dt,R=new I,L=0,W=S===!0?t:e,_=S===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;let M=g;for(let k=0;k<=s;k++){let G=k/s*l+a,ot=Math.cos(G),X=Math.sin(G);R.x=W*X,R.y=p*_,R.z=W*ot,u.push(R.x,R.y,R.z),f.push(0,_,0),A.x=ot*.5+.5,A.y=X*.5*_+.5,d.push(A.x,A.y),g++}for(let k=0;k<s;k++){let F=D+k,G=M+k;S===!0?h.push(G,G+1,F):h.push(G+1,G,F),L+=3}c.addGroup(m,L,S===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ts=class n extends Je{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ui=class extends xo{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new xo().fromJSON(s))}return this}},yv={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Kd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=bv(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Mo(r,o,e,a,l,d,0),o}};function Kd(n,t,e,i,s){let r,o;if(s===Dv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Md(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Md(r,n[r],n[r+1],o);return o&&ol(o,o.next)&&(So(o),o=o.next),o}function As(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ol(e,e.next)||Ge(e.prev,e,e.next)===0)){if(So(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Mo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Av(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?xv(n,i,s,r):_v(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),So(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=vv(As(n),t,e),Mo(n,t,e,i,s,r,2)):o===2&&Mv(n,t,e,i,s,r):Mo(As(n),t,e,i,s,r,1);break}}}function _v(n){let t=n.prev,e=n,i=n.next;if(Ge(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&or(s,a,r,l,o,c,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xv(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ge(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,y=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Bh(d,g,t,e,i),b=Bh(y,p,t,e,i),v=n.prevZ,S=n.nextZ;for(;v&&v.z>=m&&S&&S.z<=b;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&or(a,h,l,u,c,f,S.x,S.y)&&Ge(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&or(a,h,l,u,c,f,S.x,S.y)&&Ge(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function vv(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ol(s,r)&&Jd(s,i,i.next,r)&&bo(s,r)&&bo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),So(i),So(i.next),i=n=r),i=i.next}while(i!==n);return As(i)}function Mv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pv(o,a)){let l=jd(o,a);o=As(o,o.next),l=As(l,l.next),Mo(o,t,e,i,s,r,0),Mo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function bv(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Kd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Cv(c));for(s.sort(Sv),r=0;r<s.length;r++)e=Ev(s[r],e);return e}function Sv(n,t){return n.x-t.x}function Ev(n,t){let e=wv(n,t);if(!e)return t;let i=jd(e,n);return As(i,i.next),As(e,e.next)}function wv(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&or(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),bo(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Tv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Tv(n,t){return Ge(n.prev,n,t.prev)<0&&Ge(t.next,n,n.next)<0}function Av(n,t,e,i){let s=n;do s.z===0&&(s.z=Bh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Rv(s)}function Rv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Bh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Cv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function or(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Pv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Iv(n,t)&&(bo(n,t)&&bo(t,n)&&Lv(n,t)&&(Ge(n.prev,n,t.prev)||Ge(n,t.prev,t))||ol(n,t)&&Ge(n.prev,n,n.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ol(n,t){return n.x===t.x&&n.y===t.y}function Jd(n,t,e,i){let s=_a(Ge(n,t,e)),r=_a(Ge(n,t,i)),o=_a(Ge(e,i,n)),a=_a(Ge(e,i,t));return!!(s!==r&&o!==a||s===0&&ya(n,e,t)||r===0&&ya(n,i,t)||o===0&&ya(e,n,i)||a===0&&ya(e,t,i))}function ya(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function _a(n){return n>0?1:n<0?-1:0}function Iv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Jd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function bo(n,t){return Ge(n.prev,n,n.next)<0?Ge(n,t,n.next)>=0&&Ge(n,n.prev,t)>=0:Ge(n,t,n.prev)<0||Ge(n,n.next,t)<0}function Lv(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function jd(n,t){let e=new kh(n.i,n.x,n.y),i=new kh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Md(n,t,e,i){let s=new kh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function So(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ts=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];bd(t),Sd(i,t);let o=t.length;e.forEach(bd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sd(i,e[l]);let a=yv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Sd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Rs=class n extends Ve{constructor(t=new ui([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Uv,v,S=!1,D,A,R,L;m&&(v=m.getSpacedPoints(h),S=!0,f=!1,D=m.computeFrenetFrames(h,!1),A=new I,R=new I,L=new I),f||(p=0,d=0,g=0,y=0);let W=a.extractPoints(c),_=W.shape,M=W.holes;if(!ts.isClockWise(_)){_=_.reverse();for(let nt=0,C=M.length;nt<C;nt++){let P=M[nt];ts.isClockWise(P)&&(M[nt]=P.reverse())}}let F=ts.triangulateShape(_,M),G=_;for(let nt=0,C=M.length;nt<C;nt++){let P=M[nt];_=_.concat(P)}function ot(nt,C,P){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(C,P)}let X=_.length,ut=F.length;function K(nt,C,P){let H,z,q,rt=nt.x-C.x,tt=nt.y-C.y,E=P.x-nt.x,x=P.y-nt.y,N=rt*rt+tt*tt,j=rt*x-tt*E;if(Math.abs(j)>Number.EPSILON){let at=Math.sqrt(N),et=Math.sqrt(E*E+x*x),Nt=C.x-tt/at,mt=C.y+rt/at,Et=P.x-x/et,ie=P.y+E/et,ft=((Et-Nt)*x-(ie-mt)*E)/(rt*x-tt*E);H=Nt+rt*ft-nt.x,z=mt+tt*ft-nt.y;let wt=H*H+z*z;if(wt<=2)return new dt(H,z);q=Math.sqrt(wt/2)}else{let at=!1;rt>Number.EPSILON?E>Number.EPSILON&&(at=!0):rt<-Number.EPSILON?E<-Number.EPSILON&&(at=!0):Math.sign(tt)===Math.sign(x)&&(at=!0),at?(H=-tt,z=rt,q=Math.sqrt(N)):(H=rt,z=tt,q=Math.sqrt(N/2))}return new dt(H/q,z/q)}let vt=[];for(let nt=0,C=G.length,P=C-1,H=nt+1;nt<C;nt++,P++,H++)P===C&&(P=0),H===C&&(H=0),vt[nt]=K(G[nt],G[P],G[H]);let Mt=[],St,Kt=vt.concat();for(let nt=0,C=M.length;nt<C;nt++){let P=M[nt];St=[];for(let H=0,z=P.length,q=z-1,rt=H+1;H<z;H++,q++,rt++)q===z&&(q=0),rt===z&&(rt=0),St[H]=K(P[H],P[q],P[rt]);Mt.push(St),Kt=Kt.concat(St)}for(let nt=0;nt<p;nt++){let C=nt/p,P=d*Math.cos(C*Math.PI/2),H=g*Math.sin(C*Math.PI/2)+y;for(let z=0,q=G.length;z<q;z++){let rt=ot(G[z],vt[z],H);gt(rt.x,rt.y,-P)}for(let z=0,q=M.length;z<q;z++){let rt=M[z];St=Mt[z];for(let tt=0,E=rt.length;tt<E;tt++){let x=ot(rt[tt],St[tt],H);gt(x.x,x.y,-P)}}}let ne=g+y;for(let nt=0;nt<X;nt++){let C=f?ot(_[nt],Kt[nt],ne):_[nt];S?(R.copy(D.normals[0]).multiplyScalar(C.x),A.copy(D.binormals[0]).multiplyScalar(C.y),L.copy(v[0]).add(R).add(A),gt(L.x,L.y,L.z)):gt(C.x,C.y,0)}for(let nt=1;nt<=h;nt++)for(let C=0;C<X;C++){let P=f?ot(_[C],Kt[C],ne):_[C];S?(R.copy(D.normals[nt]).multiplyScalar(P.x),A.copy(D.binormals[nt]).multiplyScalar(P.y),L.copy(v[nt]).add(R).add(A),gt(L.x,L.y,L.z)):gt(P.x,P.y,u/h*nt)}for(let nt=p-1;nt>=0;nt--){let C=nt/p,P=d*Math.cos(C*Math.PI/2),H=g*Math.sin(C*Math.PI/2)+y;for(let z=0,q=G.length;z<q;z++){let rt=ot(G[z],vt[z],H);gt(rt.x,rt.y,u+P)}for(let z=0,q=M.length;z<q;z++){let rt=M[z];St=Mt[z];for(let tt=0,E=rt.length;tt<E;tt++){let x=ot(rt[tt],St[tt],H);S?gt(x.x,x.y+v[h-1].y,v[h-1].x+P):gt(x.x,x.y,u+P)}}}J(),it();function J(){let nt=s.length/3;if(f){let C=0,P=X*C;for(let H=0;H<ut;H++){let z=F[H];Gt(z[2]+P,z[1]+P,z[0]+P)}C=h+p*2,P=X*C;for(let H=0;H<ut;H++){let z=F[H];Gt(z[0]+P,z[1]+P,z[2]+P)}}else{for(let C=0;C<ut;C++){let P=F[C];Gt(P[2],P[1],P[0])}for(let C=0;C<ut;C++){let P=F[C];Gt(P[0]+X*h,P[1]+X*h,P[2]+X*h)}}i.addGroup(nt,s.length/3-nt,0)}function it(){let nt=s.length/3,C=0;bt(G,C),C+=G.length;for(let P=0,H=M.length;P<H;P++){let z=M[P];bt(z,C),C+=z.length}i.addGroup(nt,s.length/3-nt,1)}function bt(nt,C){let P=nt.length;for(;--P>=0;){let H=P,z=P-1;z<0&&(z=nt.length-1);for(let q=0,rt=h+p*2;q<rt;q++){let tt=X*q,E=X*(q+1),x=C+H+tt,N=C+z+tt,j=C+z+E,at=C+H+E;yt(x,N,j,at)}}}function gt(nt,C,P){l.push(nt),l.push(C),l.push(P)}function Gt(nt,C,P){Tt(nt),Tt(C),Tt(P);let H=s.length/3,z=b.generateTopUV(i,s,H-3,H-2,H-1);Xt(z[0]),Xt(z[1]),Xt(z[2])}function yt(nt,C,P,H){Tt(nt),Tt(C),Tt(H),Tt(C),Tt(P),Tt(H);let z=s.length/3,q=b.generateSideWallUV(i,s,z-6,z-3,z-2,z-1);Xt(q[0]),Xt(q[1]),Xt(q[3]),Xt(q[1]),Xt(q[2]),Xt(q[3])}function Tt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Xt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Nv(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oh[s.type]().fromJSON(s)),new n(i,t.options)}},Uv={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-u),new dt(f,1-g),new dt(y,1-m)]:[new dt(a,1-l),new dt(h,1-u),new dt(d,1-g),new dt(p,1-m)]}};function Nv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var tl=class n extends Ve{constructor(t=new ui([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;ts.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let b=g[p];ts.isClockWise(b)===!0&&(g[p]=b.reverse())}let y=ts.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){let b=d[p];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=y.length;p<m;p++){let b=y[p],v=b[0]+u,S=b[1]+u,D=b[2]+u;i.push(v,S,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ov(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Ov(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Re=class n extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let b=[],v=m/i,S=0;m===0&&o===0?S=.5/e:m===i&&l===Math.PI&&(S=-.5/e);for(let D=0;D<=e;D++){let A=D/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(A+S,1-v),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){let v=h[m][b+1],S=h[m][b],D=h[m+1][b],A=h[m+1][b+1];(m!==0||o>0)&&d.push(v,S,A),(m!==i-1||l<Math.PI)&&d.push(S,D,A)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(y,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var kn=class n extends Ve{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let y=g/s*r,p=d/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(y),u.y=(t+e*Math.cos(p))*Math.sin(y),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let y=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(y,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xe=class extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Fv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var _r=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends _r{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yf,endingEnd:yf}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _f:r=t,a=2*e-i;break;case xf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _f:o=t,l=2*i-e;break;case xf:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,b=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*y+.5*g,S=d*p-d*y;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+b*o[c+D]+v*o[l+D]+S*o[u+D];return r}},Hh=class extends _r{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Gh=class extends _r{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ni=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case uh:e=this.InterpolantFactoryMethodLinear;break;case Vl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=uh;var Cs=class extends ni{constructor(t,e,i){super(t,e,i)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ta;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vh=class extends ni{};Vh.prototype.ValueTypeName="color";var Wh=class extends ni{};Wh.prototype.ValueTypeName="number";var Xh=class extends _r{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},el=class extends ni{InterpolantFactoryMethodLinear(t){return new Xh(this.times,this.values,this.getValueSize(),t)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends ni{constructor(t,e,i){super(t,e,i)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ta;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var qh=class extends ni{};qh.prototype.ValueTypeName="vector";var Yh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Bv=new Yh,Zh=class{constructor(t){this.manager=t!==void 0?t:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zh.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vr=class extends xr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wc=new Zt,Ed=new I,wd=new I,Eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ed),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$h=class extends Eo{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Ia*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},nl=class extends xr{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Td=new Zt,ro=new I,Tc=new I,Kh=class extends Eo{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ro.setFromMatrixPosition(t.matrixWorld),i.position.copy(ro),Tc.copy(i.position),Tc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Tc),i.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),Td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td)}},Mr=class extends xr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jh=class extends Eo{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var hu="\\[\\]\\.:\\/",kv=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",zv="[^"+hu.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",uu),Gv=/(WCOD+)?/.source.replace("WCOD",zv),Vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),Wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),Xv=new RegExp("^"+Hv+Gv+Vv+Wv+"$"),qv=["material","materials","bones","map"],jh=class{constructor(t,e,i){let s=i||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},He=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kv,"")}static parseTrackName(t){let e=Xv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=jh;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var al=class extends ws{constructor(){super();let t=new vn;t.deleteAttribute("uv");let e=new Xe({side:rn}),i=new Xe,s=new Mr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new st(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new st(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new st(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new st(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new st(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new st(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new st(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new st(t,wr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new st(t,wr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new st(t,wr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new st(t,wr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let p=new st(t,wr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new st(t,wr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function wr(n){let t=new fe;return t.color.setScalar(n),t}var $={mx:0,my:0,lx:0,ly:0,fire:!1,aim:!1,sprint:!1,use:!1,gas:0,brake:0,pressed:new Set,device:"kbm",padName:"",sens:1,invertY:!1},en=new Set,To=n=>$.pressed.add(n),Mn=n=>$.pressed.has(n);function fu(){$.pressed.clear(),$.lx=0,$.ly=0}var Qd={KeyR:"reload",KeyF:"use",KeyE:"use",KeyQ:"swap",Digit1:"slot1",Digit2:"slot2",Digit3:"slot3",KeyV:"knife",KeyG:"grenade",KeyC:"view",KeyB:"build",Space:"jump",Escape:"pause",KeyP:"pause",KeyT:"rotate",KeyX:"rotate",Tab:"scores"};function ep(n,t){addEventListener("keydown",e=>{if(e.repeat&&(e.code==="KeyF"||e.code==="KeyE"))return;en.add(e.code);let i=Qd[e.code];i&&!e.repeat&&To(i),i==="use"&&($.use=!0),(e.code==="Tab"||e.code==="Space")&&e.preventDefault(),$.device!=="kbm"&&/Key|Digit|Space|Shift/.test(e.code)&&Is("kbm")}),addEventListener("keyup",e=>{en.delete(e.code),Qd[e.code]==="use"&&($.use=en.has("KeyF")||en.has("KeyE"))}),addEventListener("blur",()=>{en.clear(),$.fire=$.aim=$.use=!1}),n.addEventListener("mousedown",e=>{if($.device!=="touch"){if(Is("kbm"),document.pointerLockElement!==n){t.canLock()&&n.requestPointerLock?.();return}e.button===0&&($.fire=!0),e.button===2&&($.aim=!0)}}),addEventListener("mouseup",e=>{e.button===0&&($.fire=!1),e.button===2&&($.aim=!1)}),n.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("mousemove",e=>{document.pointerLockElement===n&&($.lx+=e.movementX*.0022*$.sens,$.ly+=e.movementY*.0022*$.sens*($.invertY?-1:1))}),addEventListener("wheel",e=>{document.pointerLockElement===n&&To(e.deltaY>0?"swap":"swapBack")},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==n&&($.fire=$.aim=!1,t.onUnlock())}),Yv(t),addEventListener("gamepadconnected",e=>{$.padName=e.gamepad.id,t.toast((/dualsense|054c|wireless controller|ps5/i.test(e.gamepad.id)?"PS5 controller":"Controller")+" connected")}),addEventListener("gamepaddisconnected",()=>{t.toast("Controller disconnected")})}function Is(n){$.device!==n&&($.device=n,document.body.dataset.device=n)}function np(){$.device==="kbm"&&($.mx=(en.has("KeyD")||en.has("ArrowRight")?1:0)-(en.has("KeyA")||en.has("ArrowLeft")?1:0),$.my=(en.has("KeyW")||en.has("ArrowUp")?1:0)-(en.has("KeyS")||en.has("ArrowDown")?1:0),$.up=en.has("Space")?1:0,$.down=en.has("ControlLeft")||en.has("ControlRight")||en.has("KeyZ")?1:0,$.sprint=en.has("ShiftLeft")||en.has("ShiftRight"),$.gas=$.my>0?1:0,$.brake=$.my<0?1:0)}var ll=[],tp=0;function ip(n){let t=navigator.getGamepads?navigator.getGamepads():[],e=null;for(let g of t)if(g&&g.connected){e=g;break}if(!e)return;let i=g=>e.buttons[g]?e.buttons[g].value>.4||e.buttons[g].pressed:!1,s=g=>e.buttons[g]?e.buttons[g].value:0,r=(g,y=.16)=>Math.abs(g)<y?0:(g-Math.sign(g)*y)/(1-y),o=r(e.axes[0]||0),a=r(e.axes[1]||0),l=r(e.axes[2]||0,.12),c=r(e.axes[3]||0,.12),h=Math.abs(o)+Math.abs(a)+Math.abs(l)+Math.abs(c)>0;for(let g=0;g<16;g++)i(g)&&(h=!0);if(h?(Is("pad"),tp=0):tp+=n,$.device!=="pad"){for(let g=0;g<17;g++)ll[g]=i(g);return}$.mx=o,$.my=-a;let u=g=>Math.sign(g)*Math.pow(Math.abs(g),1.8),f=i(6)?.55:1;$.lx+=u(l)*3.4*n*$.sens*f,$.ly+=u(c)*2.4*n*$.sens*f*($.invertY?-1:1),$.fire=i(7),$.aim=i(6),$.gas=s(7),$.brake=s(6),i(10)&&!ll[10]&&($.sprintToggle=!$.sprintToggle),Math.hypot(o,a)<.3&&($.sprintToggle=!1),$.sprint=!!$.sprintToggle,$.use=i(2);let d=(g,y)=>{i(g)&&!ll[g]&&To(y)};d(0,"jump"),d(1,"build"),d(2,"use"),d(2,"reload"),d(3,"swap"),d(5,"knife"),d(4,"grenade"),d(11,"knife"),d(9,"pause"),d(12,"view"),d(13,"rotate"),d(14,"swapBack"),d(15,"swap"),d(8,"scores");for(let g=0;g<17;g++)ll[g]=i(g)}function Tr(n,t,e){if($.device!=="pad")return;let i=navigator.getGamepads?navigator.getGamepads():[];for(let s of i)s&&s.vibrationActuator&&s.vibrationActuator.playEffect?.("dual-rumble",{duration:e,strongMagnitude:n,weakMagnitude:t}).catch?.(()=>{})}function Yv(n){let t=document.getElementById("touch"),e=document.getElementById("stick"),i=document.getElementById("knob"),s=null,r=0,o=0,a=new Map,l=()=>Math.min(70,innerHeight*.12),c=f=>{if($.device!=="touch"&&Is("touch"),!!n.playing())for(let d of f.changedTouches){let g=document.elementFromPoint(d.clientX,d.clientY),y=g&&g.closest&&g.closest("[data-b]");if(y){let p=y.dataset.b;y.classList.add("on"),a.set(d.identifier,{x:d.clientX,y:d.clientY,btn:p,el:y}),p==="fire"?$.fire=!0:p==="aim"?($.aim=!$.aim,y.classList.toggle("lock",$.aim)):p==="use"?($.use=!0,To("use")):p==="sprint"?($.sprintToggle=!$.sprintToggle,y.classList.toggle("lock",$.sprintToggle)):To(p),f.preventDefault();continue}d.clientX<innerWidth*.42&&s===null?(s=d.identifier,r=d.clientX,o=d.clientY,e.style.left=r+"px",e.style.top=o+"px",e.classList.add("on"),i.style.transform="translate(-50%,-50%)"):a.set(d.identifier,{x:d.clientX,y:d.clientY,btn:null}),f.preventDefault()}},h=f=>{for(let d of f.changedTouches){if(d.identifier===s){let y=d.clientX-r,p=d.clientY-o,m=Math.hypot(y,p),b=l();m>b&&(y*=b/m,p*=b/m),$.mx=y/b,$.my=-p/b,$.gas=Math.max(0,$.my),$.brake=Math.max(0,-$.my),i.style.transform=`translate(calc(-50% + ${y}px), calc(-50% + ${p}px))`,Math.hypot($.mx,$.my)>.97&&$.my>.8?$.autoSprint=!0:$.my<.5&&($.autoSprint=!1)}let g=a.get(d.identifier);if(g&&(g.btn===null||g.btn==="fire"||g.btn==="aim")){let y=.0052*$.sens*($.aim?.6:1);$.lx+=(d.clientX-g.x)*y,$.ly+=(d.clientY-g.y)*y*.85*($.invertY?-1:1),g.x=d.clientX,g.y=d.clientY}}f.preventDefault()},u=f=>{for(let d of f.changedTouches){d.identifier===s&&(s=null,$.mx=$.my=0,$.gas=$.brake=0,$.autoSprint=!1,e.classList.remove("on"));let g=a.get(d.identifier);g&&(g.btn==="fire"&&($.fire=!1),g.btn==="use"&&($.use=!1),g.el&&g.el.classList.remove("on"),a.delete(d.identifier))}};t.addEventListener("touchstart",c,{passive:!1}),t.addEventListener("touchmove",h,{passive:!1}),t.addEventListener("touchend",u),t.addEventListener("touchcancel",u),addEventListener("touchstart",()=>{$.device!=="touch"&&!n.playing()&&Is("touch")},{passive:!0})}function du(){return $.device==="touch"&&($.sprintToggle||$.autoSprint)}var lt=null,ln=null,Ls=null,rs=null,Zv=null,sp=.8;function rp(){if(lt){lt.state==="suspended"&&lt.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;lt=new n,ln=lt.createGain(),ln.gain.value=sp;let t=lt.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=6,ln.connect(t),t.connect(lt.destination),Ls=lt.createBuffer(1,lt.sampleRate*1.5,lt.sampleRate);let e=Ls.getChannelData(0);for(let r=0;r<e.length;r++)e[r]=Math.random()*2-1;cl=lt.createConvolver();let i=lt.sampleRate*1.6|0,s=lt.createBuffer(2,i,lt.sampleRate);for(let r=0;r<2;r++){let o=s.getChannelData(r);for(let a=0;a<i;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/i,3.2)}cl.buffer=s,ii=lt.createGain(),ii.gain.value=.3,ii.connect(cl),cl.connect(ln),Jv()}var cl=null,ii=null,pu=0;function mu(n){sp=n,ln&&(ln.gain.value=n)}var Qt=()=>lt.currentTime;function gu(n,t,e,i,s,r=1e-4){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(r,t+e+s)}function ge(n,t,e,i,s,r="lowpass",o=ln,a=1){let l=lt.createBufferSource();l.buffer=Ls,l.playbackRate.value=a;let c=lt.createBiquadFilter();c.type=r,c.frequency.value=e,c.Q.value=i;let h=lt.createGain();return gu(h,n,.003,s,t),l.connect(c),c.connect(h),h.connect(o),l.start(n,Math.random()),l.stop(n+t+.05),c}function he(n,t,e,i,s,r="sine",o=ln){let a=lt.createOscillator();a.type=r,a.frequency.setValueAtTime(t,n),a.frequency.exponentialRampToValueAtTime(Math.max(20,e),n+i);let l=lt.createGain();gu(l,n,.005,s,i),a.connect(l),l.connect(o),a.start(n),a.stop(n+i+.05)}function hl(n){let t=lt.createStereoPanner?lt.createStereoPanner():null;return t?(t.pan.value=Math.max(-1,Math.min(1,n)),t.connect(ln),t):ln}function $v(n,t,e,i){if(!lt)return;let s=Qt();if(i==="ray"||e&&i!=="wave"){let c=lt.createOscillator();c.type="square",c.frequency.setValueAtTime(2400*n,s),c.frequency.exponentialRampToValueAtTime(260,s+.22);let h=lt.createOscillator();h.frequency.value=60;let u=lt.createGain();u.gain.value=300,h.connect(u),u.connect(c.frequency);let f=lt.createBiquadFilter();f.type="bandpass",f.frequency.value=1400,f.Q.value=1.2;let d=lt.createGain();d.gain.setValueAtTime(1e-4,s),d.gain.exponentialRampToValueAtTime(.4,s+.004),d.gain.exponentialRampToValueAtTime(1e-4,s+.28),c.connect(f),f.connect(d),d.connect(ln),ii&&d.connect(ii),c.start(s),h.start(s),c.stop(s+.3),h.stop(s+.3),he(s,900,120,.25,.2,"sawtooth"),ge(s,.12,4e3,3,.15,"bandpass");return}if(i==="wave"){he(s,90,28,.9,1,"sine"),he(s,180,40,.5,.5,"triangle");let c=lt.createBufferSource();c.buffer=Ls;let h=lt.createBiquadFilter();h.type="bandpass",h.Q.value=.8,h.frequency.setValueAtTime(300,s),h.frequency.exponentialRampToValueAtTime(3e3,s+.25),h.frequency.exponentialRampToValueAtTime(200,s+1.2);let u=lt.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(.9,s+.02),u.gain.exponentialRampToValueAtTime(1e-4,s+1.2),c.connect(h),h.connect(u),u.connect(ln),ii&&u.connect(ii),c.start(s),c.stop(s+1.4);return}let r=t;ge(s,.018,7e3*n,.6,.85,"highpass");let o=lt.createBufferSource();o.buffer=Ls,o.playbackRate.value=.9+Math.random()*.2;let a=lt.createBiquadFilter();a.type="lowpass",a.Q.value=.9,a.frequency.setValueAtTime((5200-r*2600)*n,s),a.frequency.exponentialRampToValueAtTime(380+300*(1-r),s+.12+r*.2);let l=lt.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(.9,s+.002),l.gain.exponentialRampToValueAtTime(.25,s+.04+r*.05),l.gain.exponentialRampToValueAtTime(1e-4,s+.22+r*.45),o.connect(a),a.connect(l),l.connect(ln),ii&&l.connect(ii),o.start(s,Math.random()),o.stop(s+.9),he(s,(120+40*(1-r))*n,38,.1+r*.22,.6+r*.45,"sine"),ge(s+.045+r*.02,.02,2200,4,.12,"bandpass"),ge(s+.11+r*.06,.18+r*.2,900+700*(1-r),.6,.1+r*.06)}function Pi(n,t,e,i,s={}){if(pu>7)return;pu++,setTimeout(()=>pu--,(t+.2)*1e3);let r=s.dest||ln,o=s.vol??.3,a=lt.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(e,n),a.frequency.linearRampToValueAtTime(i,n+t);let l=lt.createOscillator();l.type="sawtooth",l.frequency.value=s.fry??18+Math.random()*14;let c=lt.createGain();c.gain.value=e*(s.rough??.35),l.connect(c),c.connect(a.frequency);let h=lt.createBufferSource();h.buffer=Ls,h.playbackRate.value=.6;let u=lt.createBiquadFilter();u.type="bandpass",u.frequency.value=s.rasp??1100,u.Q.value=.9;let f=lt.createGain();f.gain.value=s.breath??.5,h.connect(u),u.connect(f);let d=lt.createGain();a.connect(d),f.connect(d);let g=s.vowel||[520,900],y=s.close??.7,p=lt.createBiquadFilter();p.type="bandpass",p.frequency.setValueAtTime(g[0],n),p.frequency.linearRampToValueAtTime(g[0]*y,n+t),p.Q.value=5;let m=lt.createBiquadFilter();m.type="bandpass",m.frequency.setValueAtTime(g[1],n),m.frequency.linearRampToValueAtTime(g[1]*y,n+t),m.Q.value=7;let b=lt.createGain();b.gain.value=.6;let v=lt.createOscillator();v.frequency.value=s.gurgle??7+Math.random()*5;let S=lt.createGain();S.gain.value=.45,v.connect(S),S.connect(b.gain);let D=lt.createGain();D.gain.setValueAtTime(1e-4,n),D.gain.exponentialRampToValueAtTime(o,n+(s.att??.08)),D.gain.setValueAtTime(o,n+t*.6),D.gain.exponentialRampToValueAtTime(1e-4,n+t),d.connect(p),d.connect(m),p.connect(b),m.connect(b),b.connect(D),D.connect(r),ii&&!s.dry&&D.connect(ii);for(let A of[a,l,h,v])A.start(n),A.stop(n+t+.05)}var os={walker:{f:85,vowel:[480,820],rough:.4},runner:{f:150,vowel:[700,1300],rough:.55,rasp:1800},fat:{f:55,vowel:[380,700],rough:.5,rasp:700},toxic:{f:95,vowel:[420,1e3],rough:.6,gurgle:14},screamer:{f:220,vowel:[900,1700],rough:.3,rasp:2600},boss:{f:42,vowel:[320,600],rough:.7,rasp:600}};function Ar(n=6,t=0){let e=lt.createGain();return e.gain.value=Math.max(.05,Math.min(1,6/Math.max(2,n))),e.connect(hl(t)),e}var Kv={zgroan(n="walker",t=6,e=0){if(!lt)return;let i=Qt(),s=os[n]||os.walker,r=Math.random(),o=Ar(t,e);n==="runner"?Pi(i,.5+r*.4,s.f*1.2,s.f*.8,{...s,dest:o,vol:.32,close:.8,att:.03}):n==="toxic"?(Pi(i,1+r*.6,s.f,s.f*.75,{...s,dest:o,vol:.3}),ge(i+.3,.5,400,3,.08,"bandpass",o)):Pi(i,.9+r*.9,s.f*(.9+r*.25),s.f*(.7+r*.15),{...s,dest:o,vol:n==="boss"?.5:.3})},zattack(n="walker",t=2,e=0){if(!lt)return;let i=Qt(),s=os[n]||os.walker,r=Ar(t,e);Pi(i,.32,s.f*1.9,s.f*1.2,{...s,dest:r,vol:.42,rough:.8,att:.015,vowel:[s.vowel[0]*1.3,s.vowel[1]*1.3],close:1,breath:.8}),ge(i+.18,.06,1800,2,.25,"bandpass",r)},zhurt(n="walker",t=4,e=0){if(!lt)return;let i=Qt(),s=os[n]||os.walker;Pi(i,.18,s.f*1.6,s.f*1.1,{...s,dest:Ar(t,e),vol:.3,att:.01,close:.9,rough:.6,dry:!0})},zdeath(n="walker",t=4,e=0){if(!lt)return;let i=Qt(),s=os[n]||os.walker,r=Ar(t,e);Pi(i,.9,s.f*1.3,s.f*.45,{...s,dest:r,vol:.34,close:.5,gurgle:16,breath:.9}),ge(i+.5,.4,500,2,.12,"bandpass",r)},zscream(n=8,t=0){if(!lt)return;let e=Qt(),i=Ar(n*.5,t);Pi(e,1.6,420,300,{dest:i,vol:.6,vowel:[1e3,2e3],rough:.25,rasp:3e3,breath:1.2,att:.05,close:.85,fry:40}),Pi(e+.05,1.5,610,380,{dest:i,vol:.35,vowel:[1300,2600],rough:.2,rasp:3500,breath:.8,close:.9,fry:55})},zboss(n=8,t=0){if(!lt)return;let e=Qt(),i=Ar(n*.4,t);Pi(e,2.2,48,30,{dest:i,vol:.7,vowel:[300,560],rough:.8,rasp:500,breath:1,close:.6}),he(e,60,30,2,.4,"sine",i)},whisper(n=0){if(!lt)return;let t=Qt(),e=hl(n);for(let i=0;i<5;i++)ge(t+i*.18+Math.random()*.1,.16,2500+Math.random()*2500,6,.06,"bandpass",e)},skid(n=1){if(!lt)return;let t=Qt();ge(t,.25,1800+Math.random()*600,3,.1*n,"bandpass")},nos(){if(!lt)return;let n=Qt();ge(n,.8,900,.6,.4,"highpass"),he(n,200,900,.6,.1,"sawtooth")},rotor(n=1){if(!lt)return;let t=Qt();for(let e=0;e<4;e++)ge(t+e*.075,.06,220,1.5,.3*n,"lowpass")},droneBuzz(){if(!lt)return;let n=Qt();he(n,240,260,.2,.05,"sawtooth")},beep(n=880){if(!lt)return;let t=Qt();he(t,n,n,.08,.1,"square")},page(){if(!lt)return;let n=Qt();ge(n,.25,3e3,1,.12,"bandpass")}},te={...Kv,shot(n=1,t=.25,e=!1,i=""){$v(n,t,e,i)},dry(){if(!lt)return;let n=Qt();he(n,1800,1500,.03,.15,"square")},reload(n){if(!lt)return;let t=Qt();ge(t,.05,n?3500:1800,3,.35,"bandpass"),he(t,n?900:500,300,.05,.12,"square")},hit(n){if(!lt)return;let t=Qt();ge(t,.06,n?2500:1100,1.5,.35,"bandpass"),n&&he(t,1400,900,.08,.15,"triangle")},hitmarker(){if(!lt)return;let n=Qt();he(n,2600,2400,.03,.08,"square")},kill(){if(!lt)return;let n=Qt();ge(n,.18,600,1,.3)},knife(){if(!lt)return;let n=Qt();ge(n,.12,4500,2,.35,"bandpass",ln,1.4)},groan(n=0,t=5){if(!lt)return;let e=Qt(),i=Math.min(.35,1.6/(t+1)),s=hl(n),r=70+Math.random()*70,o=lt.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(r,e),o.frequency.linearRampToValueAtTime(r*(.6+Math.random()*.5),e+.8);let a=lt.createBiquadFilter();a.type="bandpass",a.frequency.value=500+Math.random()*400,a.Q.value=3;let l=lt.createOscillator();l.frequency.value=7+Math.random()*8;let c=lt.createGain();c.gain.value=18,l.connect(c),c.connect(o.frequency);let h=lt.createGain();gu(h,e,.15,i,.9),o.connect(a),a.connect(h),h.connect(s),o.start(e),l.start(e),o.stop(e+1.2),l.stop(e+1.2)},scream(n=0){if(!lt)return;let t=Qt(),e=hl(n);he(t,700,300,.6,.2,"sawtooth",e),ge(t,.5,1500,4,.2,"bandpass",e)},plank(){if(!lt)return;let n=Qt();ge(n,.25,700,2,.5,"bandpass"),he(n,180,90,.15,.25,"triangle")},nail(){if(!lt)return;let n=Qt();he(n,1600,1200,.05,.3,"square"),ge(n,.08,4e3,3,.3,"bandpass")},hurt(){if(!lt)return;let n=Qt();ge(n,.2,400,1,.6),he(n,120,60,.25,.4)},buy(){if(!lt)return;let n=Qt();[1046,1318,1568].forEach((t,e)=>he(n+e*.06,t,t,.18,.18,"triangle")),ge(n,.1,6e3,1,.1,"highpass")},deny(){if(!lt)return;let n=Qt();he(n,220,180,.2,.2,"square")},door(){if(!lt)return;let n=Qt();ge(n,.8,300,1,.5),he(n,90,40,.6,.4,"sawtooth")},round(n){if(!lt)return;let t=Qt();(n?[196,233,196,174,196]:[196,247,294,247,220,196]).forEach((i,s)=>{he(t+s*.32,i,i*.99,.5,.22,"sawtooth"),he(t+s*.32,i/2,i/2,.55,.18,"triangle")}),ge(t,2.2,120,.5,.15)},box(){if(!lt)return;let n=Qt();[784,659,698,587,659,523,587,494,523,659,784,1046].forEach((e,i)=>he(n+i*.2,e,e,.22,.12,"triangle"))},boxReveal(){if(!lt)return;let n=Qt();he(n,523,1046,.4,.2,"triangle"),he(n+.1,784,1568,.4,.15,"triangle")},teddy(){if(!lt)return;let n=Qt();he(n,300,80,1.2,.3,"sawtooth")},power(){if(!lt)return;let n=Qt();he(n,50,300,2,.4,"sawtooth"),ge(n,1.5,800,1,.3),he(n+1.6,900,900,.3,.2,"square")},perk(){if(!lt)return;let n=Qt();ge(n,.15,2e3,1,.2),[523,659,784,1046].forEach((t,e)=>he(n+.25+e*.09,t,t,.2,.15,"triangle"))},powerup(n){if(!lt)return;let t=Qt();(n==="nuke"?[200,100,50]:[660,880,1100,1320]).forEach((i,s)=>he(t+s*.08,i,i,.25,.25,n==="nuke"?"sawtooth":"square")),n==="nuke"&&ge(t,1.6,200,.5,.8)},boom(){if(!lt)return;let n=Qt();ge(n,1.2,380,.4,1),he(n,90,25,.9,.8)},spike(){if(!lt)return;let n=Qt();ge(n,.12,1500,2,.25,"bandpass")},build(){if(!lt)return;let n=Qt();for(let t=0;t<3;t++)he(n+t*.09,1500,1100,.05,.25,"square"),ge(n+t*.09,.07,3500,3,.25,"bandpass")},splat(){if(!lt)return;let n=Qt();ge(n,.25,500,1,.5),he(n,200,60,.2,.3)},toxic(){if(!lt)return;let n=Qt();ge(n,.6,900,1,.5),he(n,300,60,.5,.3,"square")},heartbeat(){if(!lt)return;let n=Qt();he(n,60,40,.12,.6),he(n+.2,55,40,.12,.45)},carDoor(){if(!lt)return;let n=Qt();ge(n,.12,600,1,.5),he(n,140,80,.1,.3,"square")},crash(n){if(!lt)return;let t=Qt();ge(t,.4,500,.6,Math.min(1,n*.08))}};function Ii(n,t=0){if(!lt)return;if(n&&!rs){let s=lt.createOscillator();s.type="sawtooth";let r=lt.createOscillator();r.type="square";let o=lt.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let a=lt.createGain();a.gain.value=1e-4,s.connect(o),r.connect(o),o.connect(a),a.connect(ln),s.start(),r.start(),rs={o:s,o2:r,f:o,g:a}}if(!rs)return;let e=Qt();if(!n){rs.g.gain.setTargetAtTime(1e-4,e,.1);return}let i=34+t*70;rs.o.frequency.setTargetAtTime(i,e,.05),rs.o2.frequency.setTargetAtTime(i*.5,e,.05),rs.f.frequency.setTargetAtTime(380+t*900,e,.05),rs.g.gain.setTargetAtTime(.12+t*.1,e,.05)}function Jv(){let n=lt.createBufferSource();n.buffer=Ls,n.loop=!0;let t=lt.createBiquadFilter();t.type="lowpass",t.frequency.value=260;let e=lt.createGain();e.gain.value=.05,n.connect(t),t.connect(e),e.connect(ln),n.start();let i=lt.createOscillator();i.frequency.value=55;let s=lt.createGain();s.gain.value=.02;let r=lt.createOscillator();r.frequency.value=.07;let o=lt.createGain();o.gain.value=.015,r.connect(o),o.connect(s.gain),i.connect(s),s.connect(ln),i.start(),r.start(),Zv={g:e,og:s}}var pe=new Uint8Array(1760),Di=new Int8Array(1760).fill(-1),Zn=new Int16Array(1760).fill(-1),oe=(n,t)=>t*44+n,zn=(n,t)=>n>=0&&t>=0&&n<44&&t<40,Li=(n,t)=>zn(n,t)?pe[oe(n,t)]:5,ke=n=>Math.floor(n/2),Ht=n=>n*2+2/2,Ui=[],bn=[],ul=[],Ao=new Set([0]);function yu(n,t,e,i,s,r,o){ul.push({name:n,z:t,i0:e,j0:i,i1:s,j1:r,floorKind:o});for(let a=i-1;a<=r+1;a++)for(let l=e-1;l<=s+1;l++){let c=oe(l,a);l>=e&&l<=s&&a>=i&&a<=r?(pe[c]=1,Di[c]=t):pe[c]===0&&(pe[c]=2)}}function _u(n,t,e,i){let s=Ui.length,r=n.length>1&&n[0][1]===n[1][1]?"x":"z";Ui.push({id:s,tiles:n,cost:t,zone:e,open:!1,label:i,axis:r});for(let[o,a]of n)pe[oe(o,a)]=4,Zn[oe(o,a)]=s}function xu(n,t){let e=bn.length,i=Li(n-1,t)===2||Li(n+1,t)===2?"x":"z",s=i==="x"?Li(n,t+1)===0?[0,1]:[0,-1]:Li(n+1,t)===0?[1,0]:[-1,0];bn.push({id:e,i:n,j:t,planks:6,axis:i,outDir:s,rip:0}),pe[oe(n,t)]=3,Zn[oe(n,t)]=e}function Ro(n,t){zn(n,t)&&(pe[oe(n,t)]=6)}function bu(){pe.fill(0),Di.fill(-1),Zn.fill(-1),Ui.length=0,bn.length=0,ul.length=0,Ao.clear(),Ao.add(0);for(let n=0;n<40;n++)for(let t=0;t<44;t++){let e=oe(t,n);t===0||n===0||t===43||n===39?pe[e]=5:Di[e]=1}yu("Lobby",0,17,22,26,29,"carpet"),yu("Diner",2,28,22,37,29,"checker"),yu("Garage",3,6,6,15,13,"concrete"),_u([[21,21],[22,21]],750,1,"Parking Lot"),_u([[27,25],[27,26]],1e3,2,"Diner"),_u([[10,14],[11,14]],1250,3,"Garage");for(let[n,t]of[[18,21],[25,21],[19,30],[24,30],[16,25],[16,28]])xu(n,t);for(let[n,t]of[[31,21],[35,21],[38,24],[38,28],[33,30]])xu(n,t);for(let[n,t]of[[8,5],[13,5],[5,9],[16,10]])xu(n,t)}function Co(n){return n===2||n===3||n===4||n===5||n===6||n===7}function Rr(n,t){return n===2||n===5||n===6||n===4||n===7||n===8||n===3&&bn[Zn[t]].planks>0}function fl(n){return n!==0&&n!==9}function op(n){return n===2||n===4||n===6}function Ds(n,t,e){let i=ke(n.x-t),s=ke(n.x+t),r=ke(n.z-t),o=ke(n.z+t),a=!1;for(let l=r;l<=o;l++)for(let c=i;c<=s;c++){let h=zn(c,l)?oe(c,l):-1,u=h<0?5:pe[h];if(!e(u,h))continue;let f=Math.max(c*2,Math.min(n.x,c*2+2)),d=Math.max(l*2,Math.min(n.z,l*2+2)),g=n.x-f,y=n.z-d,p=Math.hypot(g,y);if(p<t)if(a=!0,p>1e-5)n.x+=g/p*(t-p),n.z+=y/p*(t-p);else{let m=c*2+1,b=l*2+2/2;g=n.x-m,y=n.z-b,Math.abs(g)>Math.abs(y)?n.x=m+Math.sign(g||1)*(2/2+t):n.z=b+Math.sign(y||1)*(2/2+t)}}return a}function dl(n,t,e,i,s,r){let o=Math.hypot(e,i);if(o<1e-6)return s;e/=o,i/=o;let a=ke(n),l=ke(t),c=e>0?1:-1,h=i>0?1:-1,u=Math.abs(2/(e||1e-9)),f=Math.abs(2/(i||1e-9)),d=e>0?((a+1)*2-n)/e:e<0?(a*2-n)/e:1/0,g=i>0?((l+1)*2-t)/i:i<0?(l*2-t)/i:1/0,y=0;for(let p=0;p<200&&y<s&&(d<g?(y=d,d+=u,a+=c):(y=g,g+=f,l+=h),!(y>s));p++){let m=zn(a,l)?oe(a,l):-1;if(r(m<0?5:pe[m],m))return y}return s}var fi=new Float32Array(1760),Be=[],Mu=1e9;function vu(n){let t=pe[n];return t===0||t===1||t===9?t===9?4:1:t===3?bn[Zn[n]].planks>0?3+bn[Zn[n]].planks:1.5:t===7||t===8?30:Mu}function ap(n,t){if(fi.fill(Mu),Be.length=0,!zn(n,t))return;let e=oe(n,t);fi[e]=0,Be.push([0,e]);let i=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;Be.length;){let[s,r]=Qv();if(s>fi[r])continue;let o=r%44,a=r/44|0;for(let[l,c,h]of i){let u=o+l,f=a+c;if(!zn(u,f))continue;let d=oe(u,f);if(l&&c&&(vu(oe(o+l,a))>=2||vu(oe(o,a+c))>=2))continue;let g=vu(d);if(g>=Mu)continue;let y=s+g*h;y<fi[d]&&(fi[d]=y,jv([y,d]))}}}function jv(n){Be.push(n);let t=Be.length-1;for(;t>0;){let e=t-1>>1;if(Be[e][0]<=Be[t][0])break;[Be[e],Be[t]]=[Be[t],Be[e]],t=e}}function Qv(){let n=Be[0],t=Be.pop();if(Be.length){Be[0]=t;let e=0;for(;;){let i=e*2+1,s=i+1,r=e;if(i<Be.length&&Be[i][0]<Be[r][0]&&(r=i),s<Be.length&&Be[s][0]<Be[r][0]&&(r=s),r===e)break;[Be[r],Be[e]]=[Be[e],Be[r]],e=r}}return n}var lp=[[3,3],[22,2],[40,3],[2,20],[41,17],[3,36],[14,37],[30,37],[40,36],[41,30],[25,16],[3,28]];function Hn(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ve,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=cp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=cp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function cp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ee(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+u,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Sn=(n,t,e)=>n<t?t:n>e?e:n,Ni=(n,t,e)=>n+(t-n)*e;function Ue(n){let t=n>>>0||1;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}var Ce=Math.random,Us=n=>n[Math.random()*n.length|0];function Po(n,t){let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var ht=n=>document.getElementById(n);var pl=new Map,hp=4;function up(n){hp=n;for(let t of pl.values())t.anisotropy=n,t.needsUpdate=!0}function qt(n,t,e,i,s=!0){if(pl.has(n))return pl.get(n);let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");i(o,t,e);let a=new $a(r);return s&&(a.colorSpace=Tn),a.wrapS=a.wrapT=ho,a.anisotropy=hp,pl.set(n,a),a}function we(n,t,e,i,s,r,o,a){let l=Ue(a);for(let c=0;c<i;c++){n.fillStyle=s[l()*s.length|0];let h=r+l()*(o-r);n.fillRect(l()*t,l()*e,h,h)}}function le(n,t,e,i,s,r,o,a){let l=Ue(a);for(let c=0;c<i;c++){let h=l()*t,u=l()*e,f=r+l()*(o-r);for(let d of[-t,0,t])for(let g of[-e,0,e]){let y=n.createRadialGradient(h+d,u+g,0,h+d,u+g,f);y.addColorStop(0,s),y.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=y,n.fillRect(h+d-f,u+g-f,f*2,f*2)}}}function Cr(n,t,e,i){let s=n.createLinearGradient(0,e,0,e*.55);s.addColorStop(0,`rgba(25,20,15,${i})`),s.addColorStop(1,"rgba(25,20,15,0)"),n.fillStyle=s,n.fillRect(0,0,t,e)}function Su(n,t,e,i,s=2){return qt(n,t,e,r=>{let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");i(a,t,e);let l=a.getImageData(0,0,t,e).data,c=r.createImageData(t,e),h=c.data,u=(f,d)=>l[((d+e)%e*t+(f+t)%t)*4]/255;for(let f=0;f<e;f++)for(let d=0;d<t;d++){let g=(u(d+1,f)-u(d-1,f))*s,y=(u(d,f+1)-u(d,f-1))*s,p=Math.hypot(g,y,1),m=(f*t+d)*4;h[m]=(-g/p*.5+.5)*255,h[m+1]=(y/p*.5+.5)*255,h[m+2]=(1/p*.5+.5)*255,h[m+3]=255}r.putImageData(c,0,0)},!1)}var t1=(n,t,e)=>{n.fillStyle="#fff",n.fillRect(0,0,t,e),n.fillStyle="#444";let i=e/16,s=t/4;for(let r=0;r<16;r++){n.fillRect(0,r*i,t,3);let o=r%2?s/2:0;for(let a=0;a<=4;a++)n.fillRect(o+a*s-1.5,r*i,3,i)}we(n,t,e,1500,["#ddd","#bbb"],1,3,3)},Ut={asphalt:()=>qt("asphalt",512,512,(n,t,e)=>{n.fillStyle="#2b2c2e",n.fillRect(0,0,t,e),we(n,t,e,26e3,["#242527","#333436","#3b3c3e","#1f2022","#46474a"],1,2.5,1),le(n,t,e,14,"rgba(10,10,12,.35)",30,90,2),le(n,t,e,10,"rgba(90,85,70,.12)",20,70,3);let i=Ue(4);n.strokeStyle="rgba(8,8,8,.75)",n.lineCap="round";for(let s=0;s<9;s++){n.lineWidth=1+i()*2,n.beginPath();let r=i()*t,o=i()*e;n.moveTo(r,o);for(let a=0;a<7;a++)r+=(i()-.5)*70,o+=(i()-.5)*70,n.lineTo(r,o);n.stroke()}}),asphaltN:()=>Su("asphaltN",256,256,(n,t,e)=>{n.fillStyle="#888",n.fillRect(0,0,t,e),we(n,t,e,9e3,["#666","#aaa","#999","#777"],1,2,5)},3),stucco:()=>qt("stucco",256,256,(n,t,e)=>{n.fillStyle="#b8a98c",n.fillRect(0,0,t,e),we(n,t,e,9e3,["#ab9c80","#c4b597","#a29378","#cdbfa2"],1,3,6),le(n,t,e,10,"rgba(70,60,40,.18)",20,60,7),Cr(n,t,e,.55)}),stuccoN:()=>Su("stuccoN",128,128,(n,t,e)=>{n.fillStyle="#888",n.fillRect(0,0,t,e),we(n,t,e,3e3,["#555","#bbb"],1,3,8)},2.5),brick:()=>qt("brick",256,256,(n,t,e)=>{n.fillStyle="#6d6a63",n.fillRect(0,0,t,e);let i=Ue(9),s=e/16,r=t/4;for(let o=0;o<16;o++){let a=o%2?r/2:0;for(let l=-1;l<=4;l++){let c=.75+i()*.35;n.fillStyle=`rgb(${120*c|0},${52*c|0},${38*c|0})`,n.fillRect(a+l*r+1.5,o*s+1.5,r-3,s-3)}}we(n,t,e,3e3,["rgba(0,0,0,.18)","rgba(255,220,200,.07)"],1,3,10),Cr(n,t,e,.6)}),brickN:()=>Su("brickN",256,256,t1,4),panel:()=>qt("panel",256,256,(n,t,e)=>{n.fillStyle="#5d6b55",n.fillRect(0,0,t,e),n.strokeStyle="rgba(30,40,25,.35)",n.lineWidth=2;for(let i=0;i<t;i+=16)n.beginPath(),n.moveTo(i,0),n.lineTo(i,e),n.stroke();for(let i=8;i<e*.62;i+=32)for(let s=8;s<t;s+=32)n.fillStyle="rgba(200,190,140,.16)",n.beginPath(),n.arc(s+i/32%2*16,i,4,0,7),n.fill();le(n,t,e,12,"rgba(60,50,20,.25)",15,50,11),n.fillStyle="#4b3220",n.fillRect(0,e*.66,t,e*.34),n.fillStyle="#2e1d12",n.fillRect(0,e*.66,t,5);for(let i=0;i<t;i+=32)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(i,e*.66,2,e);Cr(n,t,e,.5)}),dinerWall:()=>qt("dinerwall",256,256,(n,t,e)=>{n.fillStyle="#9a9a92",n.fillRect(0,0,t,e);let i=32,s=16;for(let r=0;r<e/s;r++)for(let o=-1;o<t/i+1;o++){let a=r%2?i/2:0;n.fillStyle=r>9&&r<12?"#7a1a1a":"#d8d6cc",n.fillRect(o*i+a+1,r*s+1,i-2,s-2)}le(n,t,e,10,"rgba(70,55,25,.35)",15,45,43),Cr(n,t,e,.55)}),block:()=>qt("block",256,256,(n,t,e)=>{n.fillStyle="#5c5b57",n.fillRect(0,0,t,e);let i=Ue(44);for(let s=0;s<8;s++){let r=s%2?64:0;for(let o=-1;o<3;o++){let a=.8+i()*.25;n.fillStyle=`rgb(${128*a|0},${126*a|0},${118*a|0})`,n.fillRect(o*128+r+2,s*32+2,124,28)}}we(n,t,e,4e3,["rgba(0,0,0,.15)","rgba(255,255,255,.06)"],1,3,45),le(n,t,e,6,"rgba(30,25,15,.4)",15,50,46),Cr(n,t,e,.6)}),tileChecker:()=>qt("checker",256,256,(n,t,e)=>{for(let s=0;s<8;s++)for(let r=0;r<8;r++)n.fillStyle=(r+s)%2?"#1d1d1f":"#d9d4c5",n.fillRect(r*32,s*32,32,32);we(n,t,e,2500,["rgba(60,50,30,.18)","rgba(0,0,0,.2)"],1,3,12),le(n,t,e,10,"rgba(50,35,15,.3)",15,50,13),n.strokeStyle="rgba(0,0,0,.4)",n.lineWidth=1;for(let s=0;s<=8;s++)n.beginPath(),n.moveTo(s*32,0),n.lineTo(s*32,e),n.stroke(),n.beginPath(),n.moveTo(0,s*32),n.lineTo(t,s*32),n.stroke()}),carpet:()=>qt("carpet",256,256,(n,t,e)=>{n.fillStyle="#5a1e1e",n.fillRect(0,0,t,e),we(n,t,e,9e3,["#4a1818","#6a2626","#3e1313","#702d24"],1,2.5,14),n.strokeStyle="rgba(200,160,80,.25)",n.lineWidth=3;for(let i=0;i<4;i++)for(let s=0;s<4;s++)n.beginPath(),n.moveTo(i*64+32,s*64+12),n.lineTo(i*64+52,s*64+32),n.lineTo(i*64+32,s*64+52),n.lineTo(i*64+12,s*64+32),n.closePath(),n.stroke();le(n,t,e,8,"rgba(20,10,5,.35)",20,60,15)}),concrete:()=>qt("concrete",256,256,(n,t,e)=>{n.fillStyle="#6f6e6a",n.fillRect(0,0,t,e),we(n,t,e,7e3,["#666561","#787773","#5e5d59","#82817c"],1,3,16),le(n,t,e,6,"rgba(15,12,8,.5)",20,55,17),n.strokeStyle="rgba(0,0,0,.35)",n.lineWidth=2,n.strokeRect(0,0,t,e)}),wood:()=>qt("wood",256,64,(n,t,e)=>{n.fillStyle="#7a5434",n.fillRect(0,0,t,e);let i=Ue(18);for(let s=0;s<45;s++){n.strokeStyle=`rgba(40,20,8,${.08+i()*.18})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*e;n.moveTo(0,r),n.bezierCurveTo(t*.3,r+i()*8-4,t*.6,r+i()*8-4,t,r+i()*4-2),n.stroke()}for(let s=0;s<3;s++)n.fillStyle="rgba(30,15,5,.5)",n.beginPath(),n.ellipse(i()*t,i()*e,5,3,0,0,7),n.fill()}),plank:()=>qt("plank",256,64,(n,t,e)=>{n.fillStyle="#8a6a48",n.fillRect(0,0,t,e);let i=Ue(19);for(let s=0;s<40;s++){n.strokeStyle=`rgba(50,30,10,${.1+i()*.2})`,n.lineWidth=1+i()*2,n.beginPath();let r=i()*e;n.moveTo(0,r),n.lineTo(t,r+i()*6-3),n.stroke()}n.fillStyle="#333";for(let s of[14,t-14])n.beginPath(),n.arc(s,e*.3,3,0,7),n.fill(),n.beginPath(),n.arc(s,e*.7,3,0,7),n.fill();Cr(n,t,e,.25)}),metal:()=>qt("metal",128,128,(n,t,e)=>{n.fillStyle="#5b5f62",n.fillRect(0,0,t,e);for(let i=0;i<t;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"#4c5053"),s.addColorStop(.5,"#73777a"),s.addColorStop(1,"#4c5053"),n.fillStyle=s,n.fillRect(i,0,16,e)}le(n,t,e,8,"rgba(110,55,20,.45)",8,30,20)}),rust:()=>qt("rust",128,128,(n,t,e)=>{n.fillStyle="#5a3a26",n.fillRect(0,0,t,e),we(n,t,e,3e3,["#6d4630","#4a2d1c","#7d5236","#3a2416"],1,4,21),le(n,t,e,6,"rgba(60,70,70,.5)",10,40,22)}),ceiling:()=>qt("ceiling",128,128,(n,t,e)=>{n.fillStyle="#8f8b80",n.fillRect(0,0,t,e),we(n,t,e,1200,["rgba(0,0,0,.12)","rgba(255,255,255,.06)"],1,2,23),le(n,t,e,4,"rgba(90,70,30,.35)",10,40,24),n.strokeStyle="#5e5a52",n.lineWidth=3,n.strokeRect(0,0,t,e)}),chain:()=>qt("chain",128,128,(n,t,e)=>{n.clearRect(0,0,t,e),n.strokeStyle="rgba(170,175,175,1)",n.lineWidth=2.2;let i=16;for(let s=-e;s<t+e;s+=i)n.beginPath(),n.moveTo(s,0),n.lineTo(s+e,e),n.stroke(),n.beginPath(),n.moveTo(s+e,0),n.lineTo(s,e),n.stroke()}),glow:()=>qt("glow",64,64,(n,t,e)=>{let i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.3,"rgba(255,255,255,.5)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,e)}),puff:()=>qt("puff",64,64,(n,t,e)=>{let i=Ue(25);for(let s=0;s<18;s++){let r=i()*6.28,o=i()*14,a=32+Math.cos(r)*o,l=32+Math.sin(r)*o,c=8+i()*12,h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,.3)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,t,e)}}),flame:()=>qt("flame",64,128,(n,t,e)=>{for(let i=0;i<3;i++){let s=n.createRadialGradient(32,96,2,32,84,40-i*9);s.addColorStop(0,"rgba(255,255,255,.95)"),s.addColorStop(.5,"rgba(255,255,255,.4)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.beginPath(),n.moveTo(32,4+i*14),n.bezierCurveTo(60,50,62,112,32,124),n.bezierCurveTo(2,112,4,50,32,4+i*14),n.fill()}}),blood:()=>qt("blood",128,128,(n,t,e)=>{n.clearRect(0,0,t,e);let i=Ue(26);n.fillStyle="rgba(70,4,4,.9)",n.beginPath(),n.arc(64,64,22,0,7),n.fill();for(let s=0;s<26;s++){let r=i()*6.28,o=18+i()*40,a=2+i()*8;n.beginPath(),n.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,7),n.fill()}}),sky:()=>qt("sky",16,256,(n,t,e)=>{let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#02030a"),i.addColorStop(.42,"#0b1224"),i.addColorStop(.5,"#1f2a36"),i.addColorStop(.53,"#2a2a2a"),i.addColorStop(1,"#0a0a0a"),n.fillStyle=i,n.fillRect(0,0,t,e)}),moon:()=>qt("moon",128,128,(n,t,e)=>{let i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(240,240,255,1)"),i.addColorStop(.33,"rgba(220,225,240,1)"),i.addColorStop(.36,"rgba(160,180,230,.35)"),i.addColorStop(1,"rgba(100,120,200,0)"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(150,150,170,.35)";for(let[s,r,o]of[[56,54,7],[72,70,5],[60,76,4],[74,52,3]])n.beginPath(),n.arc(s,r,o,0,7),n.fill()}),label:(n,t,e,i=256,s=64,r="bold 38px Arial")=>qt("lbl"+n+t+e+i+s,i,s,o=>{o.fillStyle=t,o.fillRect(0,0,i,s),o.fillStyle=e,o.font=r,o.textAlign="center",o.textBaseline="middle",o.fillText(n,i/2,s/2+2)}),chalk:(n,t)=>qt("chalk"+n,256,128,(e,i,s)=>{e.clearRect(0,0,i,s),e.strokeStyle="rgba(240,235,215,.9)",e.lineWidth=3,e.lineJoin="round",e.shadowColor="rgba(255,255,240,.6)",e.shadowBlur=4,t(e,i,s)}),neon:(n,t,e=512,i=128,s=72)=>qt("neon"+n+t,e,i,r=>{r.clearRect(0,0,e,i),r.font=`bold ${s}px Arial Black, Arial`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=24,r.fillStyle=t,r.fillText(n,e/2,i/2),r.shadowBlur=8,r.fillStyle="#fff",r.globalAlpha=.65,r.fillText(n,e/2,i/2)}),perk:(n,t,e)=>qt("perk"+n,128,256,(i,s,r)=>{let o=i.createLinearGradient(0,0,0,r);o.addColorStop(0,t),o.addColorStop(1,"#111"),i.fillStyle=o,i.fillRect(0,0,s,r),i.fillStyle="rgba(0,0,0,.35)",i.fillRect(10,150,s-20,80),i.fillStyle="#fff",i.font="bold 22px Arial Black, Arial",i.textAlign="center",n.split(" ").forEach((l,c)=>i.fillText(l.toUpperCase(),s/2,40+c*26)),i.font="bold 15px Arial",i.fillText(e,s/2,185),i.strokeStyle="rgba(255,255,255,.6)",i.lineWidth=3,i.strokeRect(6,6,s-12,r-12);for(let l=0;l<3;l++)i.fillStyle="rgba(255,255,255,.25)",i.beginPath(),i.arc(s/2,100,20-l*6,0,7),i.fill()}),boxSide:()=>qt("boxside",256,128,(n,t,e)=>{n.fillStyle="#4a3420",n.fillRect(0,0,t,e);let i=Ue(30);for(let s=0;s<30;s++){n.strokeStyle=`rgba(20,10,4,${.15+i()*.2})`,n.beginPath();let r=i()*e;n.moveTo(0,r),n.lineTo(t,r+i()*4-2),n.stroke()}n.font="bold 84px Arial Black, Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#d8c79a",n.fillText("?",t/2,e/2+4),n.strokeStyle="#2a1a0d",n.lineWidth=8,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#8a7a50";for(let[s,r]of[[4,4],[t-20,4],[4,e-20],[t-20,e-20]])n.fillRect(s,r,16,16)}),skin:n=>qt("skin"+n,128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i),we(t,e,i,1800,["rgba(60,20,20,.25)","rgba(40,50,30,.25)","rgba(255,255,255,.06)"],1,4,31),le(t,e,i,7,"rgba(90,10,10,.45)",6,22,32),le(t,e,i,5,"rgba(30,40,20,.4)",8,26,33)}),cloth:n=>qt("cloth"+n,128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let s=0;s<i;s+=3)t.fillStyle="rgba(0,0,0,.06)",t.fillRect(0,s,e,1);le(t,e,i,9,"rgba(80,5,5,.55)",6,26,34),le(t,e,i,6,"rgba(20,15,10,.45)",8,28,35),we(t,e,i,500,["rgba(0,0,0,.25)"],1,3,36)}),camo:()=>qt("camo",128,128,(n,t,e)=>{n.fillStyle="#4b5136",n.fillRect(0,0,t,e),le(n,t,e,14,"rgba(30,32,20,.8)",8,22,37),le(n,t,e,10,"rgba(110,100,70,.6)",6,18,38)}),pap:()=>qt("pap",128,128,(n,t,e)=>{let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#3b0d5e"),i.addColorStop(.5,"#8a2ad8"),i.addColorStop(1,"#1d6fd8"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="rgba(255,180,255,.55)",n.lineWidth=2;let s=Ue(39);for(let r=0;r<18;r++){n.beginPath();let o=s()*t,a=s()*e;n.moveTo(o,a);for(let l=0;l<4;l++)o+=(s()-.5)*40,a+=(s()-.5)*40,n.lineTo(o,a);n.stroke()}}),lines:()=>qt("lines",64,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(220,210,170,.75)",n.fillRect(24,0,16,e),we(n,t,e,900,["rgba(0,0,0,.9)"],1,4,40)},!0),dirt:()=>qt("dirt",128,128,(n,t,e)=>{n.clearRect(0,0,t,e),le(n,t,e,10,"rgba(48,38,24,.55)",12,40,41),we(n,t,e,900,["rgba(40,30,20,.6)","rgba(70,60,40,.4)"],1,3,42)})};var e1=(n,t,e,i,s,r)=>{for(let o=0;o<i;o++)n.fillStyle=s,r?n.fillRect(o*t/i,0,2,e):n.fillRect(0,o*e/i,t,2)},Pr={grass:()=>qt("grass",256,256,(n,t,e)=>{n.fillStyle="#3b4426",n.fillRect(0,0,t,e),le(n,t,e,18,"rgba(70,62,38,.5)",14,40,101),le(n,t,e,14,"rgba(34,48,22,.55)",10,36,102);let i=Ue(103);for(let s=0;s<2600;s++){let r=i()*t,o=i()*e,a=3+i()*7;n.strokeStyle=i()<.5?"rgba(96,110,52,.55)":"rgba(40,52,24,.6)",n.lineWidth=1,n.beginPath(),n.moveTo(r,o),n.lineTo(r+(i()-.5)*3,o-a),n.stroke()}}),road:()=>qt("road",256,512,(n,t,e)=>{n.fillStyle="#2e2e2f",n.fillRect(0,0,t,e),we(n,t,e,5e3,["rgba(255,255,255,.07)","rgba(0,0,0,.25)","rgba(90,90,90,.2)"],1,3,111),le(n,t,e,10,"rgba(15,15,15,.4)",12,40,112),n.fillStyle="rgba(190,160,60,.55)";for(let s=0;s<e;s+=128)n.fillRect(t/2-4,s+20,8,70);let i=Ue(113);for(let s=0;s<9;s++){let r=i()*t,o=i()*e;n.strokeStyle="rgba(10,10,10,.8)",n.lineWidth=1.5,n.beginPath(),n.moveTo(r,o);for(let a=0;a<8;a++)r+=(i()-.5)*30,o+=(i()-.5)*30,n.lineTo(r,o);n.stroke(),n.fillStyle="rgba(70,90,35,.7)";for(let a=0;a<6;a++)n.fillRect(r+(i()-.5)*10,o+(i()-.5)*10,2,4)}}),weeds:()=>qt("weeds",128,128,(n,t,e)=>{n.clearRect(0,0,t,e);let i=Ue(121);for(let s=0;s<70;s++){let r=8+i()*(t-16),o=30+i()*90;n.strokeStyle=["#56662c","#6f7a34","#3e4d22","#7d7440"][i()*4|0],n.lineWidth=1.5+i()*2,n.beginPath(),n.moveTo(r,e),n.quadraticCurveTo(r+(i()-.5)*30,e-o*.6,r+(i()-.5)*40,e-o),n.stroke()}for(let s=0;s<6;s++)n.fillStyle="rgba(160,140,70,.8)",n.beginPath(),n.arc(10+i()*(t-20),10+i()*50,3,0,7),n.fill()}),siding:(n="#7d8a8c")=>qt("siding"+n,256,256,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let r=0;r<i;r+=16)t.fillStyle="rgba(0,0,0,.28)",t.fillRect(0,r+13,e,3),t.fillStyle="rgba(255,255,255,.07)",t.fillRect(0,r,e,2);le(t,e,i,12,"rgba(40,45,30,.35)",10,36,131),we(t,e,i,900,["rgba(0,0,0,.2)"],1,3,132);let s=Ue(133);for(let r=0;r<14;r++)t.fillStyle="rgba(60,50,40,.45)",t.fillRect(s()*e,s()*i,6+s()*20,3+s()*6);for(let r=0;r<10;r++)t.fillStyle="rgba(30,25,15,.18)",t.fillRect(s()*e,0,3+s()*5,i*(.3+s()*.7))}),logs:()=>qt("logs",256,256,(n,t,e)=>{n.fillStyle="#5a3f26",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=32){let s=n.createLinearGradient(0,i,0,i+32);s.addColorStop(0,"#3a2715"),s.addColorStop(.5,"#7a5634"),s.addColorStop(1,"#2c1d10"),n.fillStyle=s,n.fillRect(0,i,t,32)}we(n,t,e,1400,["rgba(0,0,0,.25)","rgba(140,100,60,.2)"],1,4,141)}),stone:()=>qt("stone",256,256,(n,t,e)=>{n.fillStyle="#6d6a63",n.fillRect(0,0,t,e);let i=Ue(151);for(let s=0;s<e;s+=32)for(let r=s/32%2?-24:0;r<t;r+=48)n.fillStyle=`rgb(${90+i()*30|0},${88+i()*28|0},${82+i()*24|0})`,n.fillRect(r+2,s+2,44,28);le(n,t,e,14,"rgba(50,60,30,.35)",8,30,152),we(n,t,e,2e3,["rgba(0,0,0,.25)","rgba(255,255,255,.08)"],1,3,153)}),barn:()=>qt("barn",256,256,(n,t,e)=>{n.fillStyle="#6b2a20",n.fillRect(0,0,t,e),e1(n,t,e,12,"rgba(0,0,0,.45)",!0),le(n,t,e,16,"rgba(80,70,60,.5)",8,28,161),we(n,t,e,1500,["rgba(0,0,0,.25)","rgba(200,170,140,.12)"],1,4,162)}),metal:()=>qt("metal",256,256,(n,t,e)=>{n.fillStyle="#6f7472",n.fillRect(0,0,t,e);for(let i=0;i<t;i+=16){let s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"rgba(0,0,0,.25)"),s.addColorStop(.5,"rgba(255,255,255,.12)"),s.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=s,n.fillRect(i,0,16,e)}le(n,t,e,18,"rgba(120,60,20,.4)",6,30,171),we(n,t,e,800,["rgba(100,50,20,.5)"],1,4,172)}),bunker:()=>qt("bunker",256,256,(n,t,e)=>{n.fillStyle="#4d4f4a",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=64)n.fillStyle="rgba(0,0,0,.4)",n.fillRect(0,i,t,3);le(n,t,e,14,"rgba(30,40,20,.4)",10,40,181),we(n,t,e,2500,["rgba(0,0,0,.3)","rgba(255,255,255,.06)"],1,3,182),n.fillStyle="rgba(200,170,40,.6)";for(let i=0;i<t;i+=32)n.save(),n.translate(i,e-20),n.rotate(-.6),n.fillRect(0,0,12,40),n.restore()}),mallTile:()=>qt("mallTile",256,256,(n,t,e)=>{n.fillStyle="#b7b0a2",n.fillRect(0,0,t,e);for(let s=0;s<4;s++)for(let r=0;r<4;r++)n.fillStyle=(r+s)%2?"#a69f90":"#c2bcae",n.fillRect(r*64+1,s*64+1,62,62);le(n,t,e,12,"rgba(60,50,30,.35)",10,40,191),we(n,t,e,1500,["rgba(0,0,0,.2)"],1,4,192);let i=Ue(193);for(let s=0;s<5;s++){n.strokeStyle="rgba(30,30,30,.6)",n.beginPath();let r=i()*t,o=i()*e;n.moveTo(r,o);for(let a=0;a<6;a++)r+=(i()-.5)*40,o+=(i()-.5)*40,n.lineTo(r,o);n.stroke()}}),roof:()=>qt("roof",256,256,(n,t,e)=>{n.fillStyle="#2b2a28",n.fillRect(0,0,t,e),we(n,t,e,4e3,["rgba(255,255,255,.06)","rgba(0,0,0,.3)"],1,3,201),le(n,t,e,10,"rgba(60,70,40,.4)",10,40,202)}),bark:()=>qt("bark",64,256,(n,t,e)=>{n.fillStyle="#3b2c20",n.fillRect(0,0,t,e);let i=Ue(211);for(let s=0;s<40;s++)n.fillStyle=i()<.5?"rgba(0,0,0,.4)":"rgba(110,90,70,.3)",n.fillRect(i()*t,0,1+i()*3,e)}),leaves:()=>qt("leaves",256,256,(n,t,e)=>{n.clearRect(0,0,t,e);let i=Ue(221);for(let s=0;s<900;s++){let r=i()*t,o=i()*e,a=r-t/2,l=o-e/2;a*a+l*l>(t/2-6)**2*(.6+i()*.4)||(n.fillStyle=["#1f2d16","#2b3b1b","#384a22","#1a2412","#4a4a24"][i()*5|0],n.beginPath(),n.ellipse(r,o,4+i()*6,2+i()*3,i()*3,0,7),n.fill())}}),shards:()=>qt("shards",128,128,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(170,200,210,.35)";let i=Ue(231);for(let s=0;s<9;s++){let r=i()<.5?0:t,o=i()*e;n.beginPath(),n.moveTo(r,o),n.lineTo(t/2+(i()-.5)*90,o+(i()-.5)*60),n.lineTo(r,o+10+i()*30),n.fill()}for(let s=0;s<6;s++){let r=i()<.5?0:e,o=i()*t;n.beginPath(),n.moveTo(o,r),n.lineTo(o+(i()-.5)*50,e/2+(i()-.5)*60),n.lineTo(o+12+i()*20,r),n.fill()}}),zskin:n=>qt("zskin"+n,256,256,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i),le(t,e,i,26,"rgba(70,90,60,.35)",8,30,241),le(t,e,i,18,"rgba(90,40,70,.35)",6,24,242),le(t,e,i,10,"rgba(110,15,10,.6)",4,14,243),le(t,e,i,7,"rgba(40,10,5,.75)",3,8,244);let s=Ue(245);t.lineWidth=1.2;for(let r=0;r<26;r++){t.strokeStyle=s()<.5?"rgba(40,30,70,.45)":"rgba(70,20,30,.4)";let o=s()*e,a=s()*i;t.beginPath(),t.moveTo(o,a);for(let l=0;l<7;l++)o+=(s()-.5)*18,a+=(s()-.3)*18,t.lineTo(o,a);t.stroke()}we(t,e,i,3e3,["rgba(0,0,0,.18)","rgba(255,255,230,.06)","rgba(60,70,40,.2)"],1,3,246)}),zface:n=>qt("zface"+n,256,256,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i),le(t,e,i,20,"rgba(70,90,60,.35)",8,26,251),le(t,e,i,10,"rgba(100,20,15,.55)",4,14,252);let s=e*.5;for(let a of[-1,1]){let l=s+a*17,c=i*.4,h=t.createRadialGradient(l,c,2,l,c,17);h.addColorStop(0,"rgba(10,0,0,.95)"),h.addColorStop(.55,"rgba(40,10,15,.75)"),h.addColorStop(1,"rgba(40,10,15,0)"),t.fillStyle=h,t.beginPath(),t.ellipse(l,c,17,14,0,0,7),t.fill(),h=t.createRadialGradient(l,c+1,0,l,c+1,6),h.addColorStop(0,"rgba(255,250,200,1)"),h.addColorStop(.4,"rgba(230,210,120,.95)"),h.addColorStop(1,"rgba(120,90,30,0)"),t.fillStyle=h,t.beginPath(),t.arc(l,c+1,6,0,7),t.fill(),t.fillStyle="rgba(60,0,0,.9)",t.beginPath(),t.arc(l+a*1,c+1,2.4,0,7),t.fill(),t.strokeStyle="rgba(30,10,10,.8)",t.lineWidth=3,t.beginPath(),t.moveTo(l-12,c-11-a*3),t.lineTo(l+12,c-11+a*3),t.stroke()}t.fillStyle="rgba(20,5,5,.9)",t.beginPath(),t.moveTo(s-7,i*.58),t.lineTo(s+7,i*.58),t.lineTo(s,i*.5),t.fill();let r=i*.7;t.fillStyle="rgba(25,0,0,.95)",t.beginPath(),t.ellipse(s+2,r,20,11,.06,0,7),t.fill(),t.fillStyle="rgba(120,20,30,.9)",t.fillRect(s-18,r-10,38,4),t.fillRect(s-16,r+6,34,4);let o=Ue(253);for(let a=0;a<8;a++)o()<.2||(t.fillStyle=`rgb(${190+o()*40|0},${170+o()*30|0},${110+o()*30|0})`,t.fillRect(s-16+a*4.4,r-7,3.4,5+o()*3),t.fillRect(s-15+a*4.4,r+2+o()*2,3.4,4+o()*3));t.fillStyle="rgba(110,5,5,.85)";for(let a=0;a<6;a++)t.fillRect(s-14+o()*28,r+8,3,12+o()*28);t.strokeStyle="rgba(90,5,5,.9)",t.lineWidth=4,t.beginPath(),t.moveTo(s+26,i*.46),t.lineTo(s+36,i*.64),t.stroke(),we(t,e,i,2400,["rgba(0,0,0,.18)","rgba(60,70,40,.2)"],1,3,254),t.fillStyle="rgba(25,20,15,.85)";for(let a=0;a<260;a++){let l=o()<.5?o()*e*.22:e*.78+o()*e*.22;t.fillRect(l,o()*i*.5,2,6+o()*8)}t.fillRect(0,0,e,i*.08)}),paper:()=>qt("paper",128,128,(n,t,e)=>{n.fillStyle="#d9cfb0",n.fillRect(0,0,t,e);for(let i=18;i<e;i+=10)n.fillStyle="rgba(40,40,80,.45)",n.fillRect(12,i,60+Math.sin(i)*40,2);le(n,t,e,5,"rgba(110,20,10,.5)",4,12,261)}),wood2:()=>qt("wood2",256,256,(n,t,e)=>{n.fillStyle="#5b4632",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=21)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(0,i,t,2);we(n,t,e,1600,["rgba(0,0,0,.2)","rgba(160,120,80,.15)"],1,5,271),le(n,t,e,10,"rgba(30,20,10,.4)",10,40,272)})};var fp=n=>new Xe(n),dp={},xp=(n,t)=>dp[n]||(dp[n]=t());function Ir(n,{x:t=0,y:e=0,z:i=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1,c:h=16777215}={}){let u=new Zt().compose(new I(t,e,i),new Cn().setFromEuler(new mn(s,r,o)),new I(a,l,c)),f=n.index?n.toNonIndexed():n.clone();f.applyMatrix4(u);let d=new jt(h),g=f.attributes.position.count,y=new Float32Array(g*3);for(let p=0;p<g;p++)y[p*3]=d.r,y[p*3+1]=d.g,y[p*3+2]=d.b;return f.setAttribute("color",new Ee(y,3)),f.attributes.uv||f.setAttribute("uv",new Ee(new Float32Array(g*2),2)),f}var Io=n=>Hn(n,!1),n1=(n,t,e)=>new vn(n,t,e),i1=(n,t,e,i=10)=>new Je(n,t,e,i),Eu=16777215,ml=(n,t=14)=>new vo(n.map(([e,i])=>new dt(e,i)),t);function wu(n,t,e,i){let s=n.attributes.position,r=i,o=()=>(r=r*16807%2147483647)/2147483647;for(let a=0;a<s.count;a++)s.getY(a)<t&&s.setY(a,s.getY(a)+(o()-.3)*e);return n}function as(n,t,e,i=9){let s=new Je(t,n,e,i,3);return s.translate(0,-e/2,0),s}function pp(n=1,t=!1){let e=[],i=new Re(.045*n,8,6);e.push(Ir(i,{y:-.04*n,sx:1,sy:1.2,sz:.5,c:Eu}));for(let s=0;s<4;s++){let r=as(.011*n,.008*n,(t?.085:.07)*n,5);e.push(Ir(r,{x:(-.03+s*.02)*n,y:-.085*n,z:.008,rx:.5+s*.08,c:Eu}))}return e.push(Ir(as(.012*n,.009*n,.05*n,5),{x:.042*n,y:-.03*n,z:.015,rz:.9,rx:.4,c:Eu})),e}var s1=()=>xp("zg2",()=>{let n=(t,e=10,i=8)=>new Re(t,e,i);return{torso:ml([[.001,-.06],[.13,-.04],[.15,.06],[.135,.2],[.15,.32],[.18,.44],[.19,.52],[.165,.6],[.07,.67],[.045,.72],[.001,.73]]),shirt:wu(ml([[.152,.05],[.14,.2],[.157,.32],[.187,.44],[.198,.52],[.174,.6],[.08,.665],[.06,.68]],16),.1,.12,7),belly:ml([[.001,-.06],[.16,-.04],[.22,.08],[.25,.2],[.23,.34],[.22,.46],[.2,.55],[.17,.61],[.07,.67],[.05,.72],[.001,.73]]),bellyShirt:wu(ml([[.17,.22],[.24,.3],[.232,.4],[.212,.5],[.18,.6],[.08,.665],[.06,.68]],16),.27,.08,9),ribs:(()=>{let t=[];for(let e=0;e<5;e++){let i=new kn(.17-e*.006,.008,4,14,Math.PI*.9);t.push(Ir(i,{y:.3+e*.055,rx:Math.PI/2,rz:Math.PI*.05,sx:1.04,sy:.6,c:14274486}))}return Io(t)})(),pelvis:n(.16,12,8),head:(()=>{let t=n(.115,18,14);return t.rotateY(-Math.PI/2),t})(),brow:(()=>{let t=new Pn(.026,.11,3,8);return t.rotateZ(Math.PI/2),t})(),ear:n(.03,6,5),jaw:new Re(.095,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2),teeth:(()=>{let t=[];for(let e=0;e<7;e++)t.push(Ir(n1(.013,.022,.012),{x:-.039+e*.013,y:.005,z:.082-Math.abs(e-3)*.006,ry:(e-3)*.15,c:14208928}));return Io(t)})(),eye:n(.017,8,6),pustule:n(.03,6,5),neck:as(.05,.045,.12,8),upper:as(.058,.045,.29),sleeve:wu(as(.067,.06,.15,10),-.12,.05,3),shoulder:n(.068),fore:as(.044,.033,.27),elbow:n(.046),thigh:as(.088,.062,.44),knee:n(.063),shin:as(.06,.042,.42),shoe:(()=>{let t=new Pn(.05,.14,4,8);return t.rotateX(Math.PI/2),t})(),hand:Io(pp(1)),claw:Io(pp(1.2,!0))}}),r1=()=>xp("zm2",()=>{let n=(e,i=0,s=0)=>fp({map:Pr.zskin("#c9c6bc"),vertexColors:!0,roughness:.82,emissive:i,emissiveIntensity:s}),t=(e,i=0,s=0)=>fp({map:Pr.zface(e),roughness:.75,emissive:i,emissiveIntensity:s});return{body:n(),toxicBody:n(0,2817824,.28),bossBody:n(0,5900288,.25),faces:["#8e9a86","#9c9283","#7f8a7c","#a19a8a","#b0a796"].map(e=>t(e)),toxicFace:t("#6f9a48",3997482,.3),screamFace:t("#c4c0b4"),bossFace:t("#7a6a5c",6293504,.3),eyes:new fe({color:16765024}),eyesG:new fe({color:10354506}),eyesR:new fe({color:16726560}),eyesW:new fe({color:15267071}),pus:new Xe({color:10354506,emissive:6749986,emissiveIntensity:1.2,roughness:.3})}}),mp=[9345670,10261123,8358524,10590858,11577238],o1=[13617592,8071973,3100014,2829099,6122298,9071931,7031406,3955290],a1=[3095893,5918005,2434341,4868676,3885675],Tu={},gp={},vp=3,l1=new Ve,yp=()=>null,_p=new Zt,c1=new Zt;function h1(n,t,e,i,s){t.updateMatrixWorld(!0),_p.copy(t.matrixWorld).invert();let r=[];for(let l of e)r.includes(l.parent)||r.push(l.parent);let o=Tu[n];if(!o){let l=[[],[],[],[]];for(let y of e){let p=y.geometry.index?y.geometry.toNonIndexed():y.geometry.clone();for(let D of Object.keys(p.attributes))D!=="position"&&D!=="normal"&&D!=="uv"&&D!=="color"&&p.deleteAttribute(D);let m=p.attributes.position.count;p.attributes.uv||p.setAttribute("uv",new Ee(new Float32Array(m*2),2)),p.attributes.color||p.setAttribute("color",new Ee(new Float32Array(m*3).fill(1),3)),p.applyMatrix4(c1.multiplyMatrices(_p,y.matrixWorld));let b=r.indexOf(y.parent),v=new Uint16Array(m*4),S=new Float32Array(m*4);for(let D=0;D<m;D++)v[D*4]=b,S[D*4]=1;p.setAttribute("skinIndex",new mr(v,4)),p.setAttribute("skinWeight",new ce(S,4)),l[i[y.material.uuid]??0].push(p)}let c=[],h=[];for(let y of l)if(y.length){let p=Hn(y,!1);c.push(p),h.push(p.attributes.position.count)}else h.push(0);o=Hn(c,!1),o.clearGroups();let u=0;h.forEach((y,p)=>{y&&o.addGroup(u,y,p),u+=y}),o.boundingSphere=new qn(new I(0,.9,0),1.6),Tu[n]=o;let f=r.map(()=>[0,0,0,0]),d=o.attributes.position,g=o.attributes.skinIndex;for(let y=0;y<d.count;y++){let p=f[g.getX(y)];p[0]+=d.getX(y),p[1]+=d.getY(y),p[2]+=d.getZ(y),p[3]++}gp[n]=f.map((y,p)=>{let m=new I(y[0]/(y[3]||1),y[1]/(y[3]||1),y[2]/(y[3]||1));return m.applyMatrix4(t.matrixWorld),r[p].worldToLocal(m)})}let a=new Wa(o,s);return a.castShadow=!0,t.add(a),a.updateMatrixWorld(!0),a.bind(new qa(r)),a.userData.cent=gp[n],a}function Au(){for(let n of["walker","runner","fat","toxic","screamer","boss"])for(let t=0;t<vp;t++)gl(n,t)}function gl(n,t){let e=t??Math.random()*vp|0,i=n+e,s=!!Tu[i],r=Ue(17+e*7919+n.charCodeAt(0)*131+n.length*977),o=s?yp:Ir,a=s?yp:Io,l=s1(),c=r1(),h=yt=>yt[r()*yt.length|0],u=r()*mp.length|0,f=mp[u],d=h(o1),g=h(a1),y=c.eyes,p=c.faces[u],m=c.body,b=n==="fat"||n==="boss",v=n==="runner"||n==="screamer";n==="toxic"&&(f=7313992,d=2898460,g=2898460,y=c.eyesG,p=c.toxicFace,m=c.toxicBody),n==="runner"&&(y=c.eyesR),n==="screamer"&&(f=12894388,y=c.eyesW,p=c.screamFace,d=9208952),n==="boss"&&(f=8022620,y=c.eyesR,p=c.bossFace,m=c.bossBody,d=3811872,g=2761760);let S=(yt,Tt=m)=>new st(s||!yt?l1:yt,Tt),D=new zt,A=new zt;D.add(A);let R=new zt;R.position.y=.95,A.add(R),R.add(S(a([o(l.pelvis,{y:-.02,sx:b?1.35:1.05,sy:.75,sz:b?1:.72,c:g})])));let L=new zt;R.add(L);let W=n==="runner"||n!=="boss"&&r()<.15,_=[o(b?l.belly:l.torso,{sx:b?1.25:v?1.05:1.2,sz:b?1:v?.62:.72,c:f})];if(W?_.push(o(l.ribs,{sx:v?1:1.12,sz:v?.68:.78,y:0})):_.push(o(b?l.bellyShirt:l.shirt,{sx:b?1.25:v?1.06:1.21,sz:b?1:v?.64:.74,c:d})),L.add(S(a(_))),n==="toxic"||n==="boss")for(let yt=0;yt<(n==="boss"?0:7);yt++){let Tt=new st(l.pustule,c.pus),Xt=r()*6.28;Tt.position.set(Math.cos(Xt)*.18,.15+r()*.4,Math.sin(Xt)*.12),Tt.scale.setScalar(.5+r()*.8),L.add(Tt)}if(n==="boss"){let yt=[];for(let Tt=0;Tt<6;Tt++)yt.push(o(i1(0,.04,.3,6),{x:(Tt%2?1:-1)*.08,y:.25+Tt*.07,z:-.2,rx:-.9,c:14274486}));L.add(S(a(yt)))}let M=new zt;M.position.y=.68,L.add(M),M.add(S(a([o(l.neck,{y:.1,c:f})])));let k=new zt;k.position.set(0,.12,.02),M.add(k);let F=S(l.head,p);F.scale.set(.92,1.08,1),k.add(F);let G=[o(l.brow,{y:.035,z:.088,sy:.7,sz:.8,c:f}),o(l.ear,{x:-.105,y:0,sz:.5,sx:.4,c:f}),o(l.ear,{x:.105,y:0,sz:.5,sx:.4,c:f}),o(new Re(.03,6,5),{y:-.005,z:.11,sx:.7,sy:.9,c:f})];n==="screamer"&&G.push(o(new Re(.12,10,8),{y:.03,sx:.95,sy:1,c:2762272})),k.add(S(a(G)));let ot=new zt;ot.position.set(0,-.045,.012),k.add(ot),ot.add(S(a([o(l.jaw,{sx:.82,sy:n==="screamer"?.8:.55,sz:1,c:f}),o(l.teeth,{y:0,sx:.9})])));for(let yt of[-1,1]){let Tt=new st(l.eye,y);Tt.position.set(yt*.036,.012,.095),k.add(Tt)}let X=yt=>{let Tt=new zt;Tt.position.set((b?.27:v?.2:.23)*yt,.55,0),L.add(Tt);let Xt=[o(l.shoulder,{c:W?f:d}),o(l.upper,{c:f})];W||Xt.push(o(l.sleeve,{c:d})),Tt.add(S(a(Xt)));let nt=new zt;return nt.position.y=-.29,Tt.add(nt),nt.add(S(a([o(l.elbow,{c:f}),o(l.fore,{c:f}),o(n==="runner"||n==="boss"?l.claw:l.hand,{y:-.27,c:f})]))),{sh:Tt,el:nt}},ut=yt=>{let Tt=new zt;Tt.position.set((b?.12:.09)*yt,-.03,0),R.add(Tt),Tt.add(S(a([o(l.thigh,{c:g})])));let Xt=new zt;Xt.position.y=-.44,Tt.add(Xt);let nt=r()<.35;return Xt.add(S(a([o(l.knee,{c:g}),o(l.shin,{c:nt?f:g,sx:nt?1:1.12,sz:nt?1:1.12}),o(l.shoe,{y:-.44,z:.05,c:2761760})]))),{hp:Tt,kn:Xt}},K=X(-1),vt=X(1),Mt=ut(-1),St=ut(1),Kt=1;n==="fat"&&(Kt=1.2),n==="runner"&&(Kt=1.02,D.scale.set(.92,1,.92)),n==="screamer"&&(Kt=1.06),n==="boss"&&(Kt=1.85),D.scale.multiplyScalar(Kt);let ne=[];D.traverse(yt=>{yt.isMesh&&ne.push(yt)});let J=h1(i,D,ne,{[m.uuid]:0,[p.uuid]:1,[y.uuid]:2,[c.pus.uuid]:3},[m,p,y,c.pus]);for(let yt of ne)yt.parent.remove(yt);let it=J.userData.cent,bt=yt=>J.skeleton.bones.indexOf(yt),gt=bt(k)>=0?it[bt(k)].clone():new I(0,.12,0),Gt=bt(L)>=0?it[bt(L)].clone():new I(0,.25,0);return{headC:gt,bodyC:Gt,sk:J,root:D,body:A,hips:R,spine:L,neck:M,head:k,jaw:ot,aL:K,aR:vt,lL:Mt,lR:St,meshes:[J],scale:Kt,type:n,phase:Math.random()*10,armUp:.6+Math.random()*.8,limp:Math.random()<.3?.4:0,tilt:(Math.random()-.5)*.5,scream:0}}function Lr(n,t,e,i,s){let r=e>2.2,o=r?2.4+e*.5:1.3+e*.9,a=t*o+n.phase,l=Math.sin(a),c=Math.cos(a),h=Math.min(1,e/(r?4:1.6));if(n.lL.hp.rotation.x=l*(r?.9:.5)*h,n.lR.hp.rotation.x=-l*(r?.9:.5)*h*(1-n.limp),n.lL.kn.rotation.x=Math.max(0,-c)*(r?1.3:.6)*h,n.lR.kn.rotation.x=Math.max(0,c)*(r?1.3:.6)*h,n.hips.position.y=.95-Math.abs(c)*.05*h-(r?.06:0),n.spine.rotation.x=r?.45:.2+Math.sin(t*.7+n.phase)*.05,n.spine.rotation.z=n.tilt*.3+l*.06*h,n.neck.rotation.z=n.tilt+Math.sin(t*1.3+n.phase)*.1,n.neck.rotation.x=r?-.35:-.15,n.jaw.rotation.x=.12+Math.max(0,Math.sin(t*2.1+n.phase))*.18+i*.45+(n.scream||0)*.7,n.scream){n.neck.rotation.x=-.6*n.scream,n.aL.sh.rotation.x=-.4,n.aR.sh.rotation.x=-.4,n.aL.sh.rotation.z=.6,n.aR.sh.rotation.z=-.6;return}let u=r?1:n.armUp,f=r?c*.9:Math.sin(t*1.7+n.phase)*.12;n.aL.sh.rotation.x=-u-f-i*1.2,n.aR.sh.rotation.x=-u+f-i*1.4*Math.max(0,Math.sin(t*14)),n.aL.sh.rotation.z=.08,n.aR.sh.rotation.z=-.08,n.aL.el.rotation.x=-.3-i*.4,n.aR.el.rotation.x=-.25-i*.6*Math.max(0,Math.cos(t*14)),s&&(n.spine.rotation.x=.9,n.aL.sh.rotation.x=-2.2,n.aR.sh.rotation.x=-2,n.lL.hp.rotation.x=-1,n.lL.kn.rotation.x=1.4)}var di=n=>new Xe(n),yl=null;function u1(){return yl||(yl={metal:di({color:2829617,metalness:.7,roughness:.42}),blued:di({color:1909032,metalness:.85,roughness:.3}),steel:di({color:10133156,metalness:.9,roughness:.25}),wood:di({map:Ut.wood(),color:11038783,roughness:.55}),poly:di({color:1842464,roughness:.78}),olive:di({color:4870710,roughness:.72}),tan:di({color:9075290,roughness:.75}),rubber:di({color:921103,roughness:.95}),brass:di({color:13148234,metalness:.9,roughness:.3}),lens:new Xe({color:661552,metalness:.2,roughness:.05,emissive:530480,emissiveIntensity:.6}),red:new fe({color:16719904}),pap:di({map:Ut.pap(),emissive:6953648,emissiveIntensity:.55,metalness:.5,roughness:.3}),glow:new fe({color:6750088}),glowB:new fe({color:6342911}),glowP:new fe({color:14713087})},yl)}var Mp=new Zt,f1=new Cn,d1=new mn,p1=new I,m1=new I(1,1,1);function g1(n){n=n.index?n.toNonIndexed():n;for(let t of Object.keys(n.attributes))t!=="position"&&t!=="normal"&&t!=="uv"&&n.deleteAttribute(t);return n.attributes.uv||n.setAttribute("uv",new Ee(new Float32Array(n.attributes.position.count*2),2)),n}var y1={pistol:.099,ranger:.102,viper:.117,ripper:.117,trench:.095,kestrel:.128,hammer:.136,brawler:.107,widow:.136,ion:.148,surge:.152};function Ns(n,t){let e=u1(),i=new Map,s=y=>t&&y!=="steel"&&y!=="lens"&&y!=="red"&&y!=="brass"&&y!=="rubber"&&y!=="glow"?e.pap:y==="glow"&&t?e.glowP:e[y],r=(y,p,m=0,b=0,v=0,S=0,D=0,A=0)=>{Mp.compose(p1.set(v,b,-m),f1.setFromEuler(d1.set(S,D,A)),m1),y.applyMatrix4(Mp);let R=s(p);i.has(R)||i.set(R,[]),i.get(R).push(g1(y))},o=(y,p,m,b=.004,v=0)=>{let S=new ui;S.moveTo(y[0][0],y[0][1]);for(let R=1;R<y.length;R++)S.lineTo(y[R][0],y[R][1]);S.closePath();let D=Math.max(.002,p-2*b),A=new Rs(S,{depth:D,bevelEnabled:b>0,bevelThickness:b,bevelSize:b,bevelSegments:2,curveSegments:4});A.translate(0,0,-D/2),A.rotateY(Math.PI/2),r(A,m,0,0,v)},a=(y,p,m,b,v,S=14,D=m,A=0)=>r(new Je(D,m,Math.abs(p-y),S).rotateX(-Math.PI/2),v,(y+p)/2,b,A),l=(y,p,m,b,v,S,D=0,A=0)=>r(new vn(m,b,v),S,y,p,D,A),c=(y,p,m=.022,b=.05)=>{let v=new kn(m,.0042,5,12,Math.PI);v.rotateZ(Math.PI),v.scale(b/(2*m),1,1),v.rotateY(Math.PI/2),r(v,"metal",y,p),l(y+.004,p-.008,.006,.02,.006,"steel",0,.35)},h=(y,p,m,b="metal")=>{l((y+p)/2,m,.024,.006,p-y,b);for(let v=y+.01;v<p;v+=.02)l(v,m+.006,.026,.006,.009,b)},u=.5,f=.06;switch(n){case"pistol":{o([[-.05,.046],[.165,.046],[.172,.052],[.172,.086],[.005,.09],[-.045,.088],[-.054,.078]],.033,"blued",.004);for(let y=0;y<6;y++)l(-.042+y*.006,.066,.035,.03,.0025,"rubber");o([[-.046,.047],[.158,.047],[.158,.032],[.07,.028],[.045,.022],[-.03,.022],[-.046,.03]],.029,"metal",.003),o([[-.045,.03],[.014,.03],[0,-.092],[-.006,-.104],[-.058,-.104],[-.066,-.088],[-.053,0]],.035,"wood",.005),l(-.032,-.109,.033,.009,.05,"steel",0,.12),a(.165,.178,.009,.07,"steel"),l(.155,.094,.006,.01,.012,"metal"),l(-.036,.094,.03,.012,.01,"metal"),l(-.058,.08,.012,.016,.012,"steel",0,-.4),l(.02,.04,.008,.008,.02,"steel",.018),c(.035,.022),u=.18,f=.07;break}case"brawler":{o([[-.045,.03],[.075,.03],[.075,.094],[0,.098],[-.03,.094],[-.052,.074]],.03,"steel",.004),r(new Je(.033,.033,.064,12).rotateX(-Math.PI/2),"steel",.035,.062);for(let y=0;y<6;y++){let p=y/6*Math.PI*2;r(new Je(.0075,.0075,.066,6).rotateX(-Math.PI/2),"rubber",.035,.062+Math.sin(p)*.019,Math.cos(p)*.019)}a(.07,.27,.012,.074,"steel",14),l(.17,.088,.013,.012,.2,"steel"),l(.14,.054,.016,.022,.13,"steel"),l(.262,.1,.004,.016,.014,"red"),l(-.03,.1,.022,.01,.012,"metal"),l(-.055,.09,.01,.014,.024,"metal",0,-.6),o([[-.046,.034],[0,.034],[-.012,-.08],[-.024,-.096],[-.066,-.096],[-.072,-.07],[-.062,0]],.037,"wood",.006),c(.03,.025),u=.275,f=.074;break}case"viper":case"ripper":{let y=n==="ripper";o([[-.08,.03],[.2,.03],[.205,.04],[.205,.076],[.1,.086],[-.08,.086]],.05,y?"poly":"metal",.006),a(.08,.33,.012,.09,"metal",10),o([[.2,.026],[.34,.032],[.345,.04],[.345,.074],[.2,.078]],.058,"poly",.008);for(let m=0;m<4;m++)l(.235+m*.028,.03,.06,.006,.012,"rubber");a(.34,.39,.011,.056,"steel"),a(.38,.405,.016,.056,"metal",10),o([[-.035,.03],[.02,.03],[.004,-.088],[-.004,-.096],[-.046,-.096],[-.054,-.08],[-.048,0]],.04,"poly",.006);let p=y?1.35:1;o([[.052,.03],[.092,.03],[.1+.03*p,-.1*p],[.12+.03*p,-.17*p],[.085+.03*p,-.18*p],[.07+.01*p,-.1*p],[.056,.03]],.03,"metal",.004),c(.03,.026);for(let m of[-.018,.018])a(-.08,-.27,.006,.066,"steel",8,.006,m);o([[-.29,-.005],[-.265,-.005],[-.265,.09],[-.29,.096]],.052,"rubber",.006),r(new Je(.015,.015,.03,10).rotateZ(Math.PI/2),"metal",-.06,.1),l(.325,.108,.004,.018,.008,"metal",.012),l(.325,.108,.004,.018,.008,"metal",-.012),l(.325,.104,.003,.012,.004,"steel"),u=.41,f=.056;break}case"trench":{o([[-.06,.025],[.14,.025],[.14,.086],[-.02,.09],[-.06,.078]],.05,"blued",.006),l(.04,.06,.004,.026,.06,"steel",.026),a(.14,.74,.013,.074,"blued",14),a(.14,.64,.012,.043,"metal",12),a(.63,.66,.016,.058,"metal",10),o([[.3,.02],[.5,.02],[.51,.035],[.5,.066],[.3,.066],[.29,.035]],.054,"wood",.009);for(let y=0;y<7;y++)l(.32+y*.025,.043,.058,.03,.005,"rubber");o([[-.055,.08],[-.055,.025],[-.025,-.01],[-.03,-.075],[-.07,-.08],[-.085,-.02],[-.42,-.04],[-.43,-.035],[-.43,.07],[-.36,.08]],.044,"wood",.008),l(-.44,.015,.046,.115,.02,"rubber"),r(new Re(.005,6,5),"steel",.735,.09),c(.02,.024),u=.75,f=.074;break}case"ranger":case"widow":{let y=n==="widow";o([[.48,.062],[.48,.036],[.06,.026],[.03,.006],[0,-.07],[-.046,-.07],[-.052,-.02],[-.1,.004],[-.44,-.035],[-.455,-.03],[-.455,.078],[-.1,.068],[-.06,.062]],.046,y?"tan":"wood",.008),l(-.465,.022,.048,.11,.02,"rubber"),a(-.06,.18,.02,.076,"blued",14),r(new Je(.005,.005,.05,6).rotateZ(Math.PI/2),"steel",-.01,.07,.035,0,0,-.5),r(new Re(.01,8,6),"steel",-.01,.058,.056);let p=y?.8:.64;if(a(.18,p,.012,.076,"blued",12,.009),y){a(p-.01,p+.05,.016,.076,"metal",10),a(-.06,.18,.018,.136,"poly",16),a(.18,.24,.018,.136,"poly",16,.031),a(-.11,-.06,.025,.136,"poly",16,.018),r(new is(.028,16),"lens",.241,.136,0,0,Math.PI),r(new is(.022,16),"lens",-.111,.136),r(new Je(.012,.012,.03,10),"metal",.06,.162),r(new Je(.012,.012,.03,10).rotateZ(Math.PI/2),"metal",.06,.136,.026),l(0,.108,.02,.03,.02,"metal"),l(.14,.108,.02,.03,.02,"metal");for(let m of[-.02,.02])a(.47,.6,.004,.02,"metal",6,.004,m)}else l(.62,.094,.004,.016,.01,"metal"),l(.12,.096,.02,.012,.012,"metal"),a(.42,.47,.016,.076,"metal",10);c(0,.004,.022,.06),u=p+(y?.06:.01),f=.076;break}case"kestrel":{o([[-.08,.04],[.16,.04],[.16,.088],[-.08,.088]],.044,"olive",.005),o([[-.065,.042],[.12,.042],[.12,.012],[.08,0],[-.02,0],[-.065,.02]],.04,"metal",.004),h(-.07,.42,.094),a(.16,.42,.031,.064,"poly",8);for(let y=0;y<5;y++)l(.19+y*.05,.064,.066,.012,.02,"rubber");a(.42,.53,.01,.064,"steel",10),a(.52,.565,.015,.064,"metal",8),o([[.37,.09],[.385,.135],[.4,.135],[.41,.09]],.012,"metal",.002),o([[.06,.012],[.108,.012],[.128,-.1],[.152,-.172],[.108,-.184],[.088,-.1],[.064,.012]],.027,"metal",.004),o([[-.032,.012],[.01,.012],[-.006,-.088],[-.014,-.096],[-.05,-.096],[-.058,-.08]],.035,"poly",.006),c(.03,.006),a(-.08,-.27,.016,.062,"metal",12),o([[-.19,.084],[-.36,.088],[-.372,.08],[-.372,-.024],[-.34,-.024],[-.2,.034]],.042,"poly",.006),l(.04,.108,.026,.012,.05,"metal"),a(.015,.075,.019,.128,"metal",14),r(new is(.015,14),"lens",.076,.128,0,0,Math.PI),r(new Re(.002,4,3),"red",.045,.128),l(-.075,.094,.03,.01,.014,"metal"),u=.57,f=.064;break}case"hammer":{o([[-.1,.02],[.22,.02],[.22,.1],[-.1,.1]],.07,"metal",.007),o([[-.06,.098],[.17,.098],[.15,.118],[-.06,.118]],.066,"blued",.004),h(-.05,.15,.124),l(.06,-.035,.07,.12,.14,"olive",.065),l(.06,.03,.074,.012,.144,"metal",.065);for(let y=0;y<5;y++)r(new Je(.006,.006,.04,6).rotateZ(Math.PI/2),"brass",.03+y*.014,.06-y*.003,.05);a(.22,.6,.032,.062,"poly",12);for(let y=0;y<6;y++)l(.26+y*.055,.062,.068,.014,.02,"rubber"),l(.26+y*.055,.062,.014,.068,.02,"rubber");a(.6,.75,.012,.062,"blued",12),a(.74,.79,.017,.062,"metal",8);{let y=new kn(.04,.006,5,12,Math.PI);y.rotateY(Math.PI/2),r(y,"metal",.3,.1)}for(let y of[-.012,.012])a(.48,.72,.005,.025,"metal",6,.005,y);o([[-.034,.02],[.01,.02],[-.004,-.088],[-.012,-.096],[-.05,-.096],[-.058,-.08]],.038,"poly",.006),c(.025,.016),o([[-.1,.092],[-.39,.082],[-.405,.072],[-.405,-.03],[-.375,-.03],[-.12,.03]],.05,"poly",.007),u=.8,f=.062;break}case"ion":{o([[-.085,.02],[.2,.03],[.28,.052],[.2,.09],[-.06,.102],[-.095,.08]],.07,"metal",.014);for(let y=0;y<4;y++)r(new kn(.06,.012,8,18),"steel",.06+y*.075,.058);a(0,.33,.026,.058,"glow",12),a(.3,.37,.022,.058,"steel",16,.05);for(let y of[-.03,0,.03])o([[0,.1],[.16,.096],[.12,.14],[.03,.135]],.006,"steel",.0015,y);r(new Re(.045,14,10),"glow",-.04,.13),r(new kn(.047,.008,6,16).rotateX(Math.PI/2),"steel",-.04,.13),o([[-.036,.024],[.012,.024],[-.004,-.088],[-.012,-.096],[-.05,-.096],[-.058,-.08]],.04,"poly",.008),c(.02,.02),u=.37,f=.058;break}case"surge":{o([[-.12,.02],[.18,.025],[.24,.05],[.2,.11],[-.08,.12],[-.13,.09]],.09,"metal",.016);for(let y=0;y<5;y++)r(new kn(.07,.014,8,18),"steel",.02+y*.06,.07);a(-.02,.3,.034,.07,"glowB",12),a(.3,.42,.11,.07,"steel",18,.04),r(new kn(.105,.012,6,20),"glowB",.42,.07),r(new Re(.05,14,10),"glowB",-.06,.15),r(new kn(.052,.009,6,16).rotateX(Math.PI/2),"steel",-.06,.15),o([[-.04,.024],[.012,.024],[-.004,-.09],[-.012,-.1],[-.05,-.1],[-.06,-.08]],.045,"poly",.008),c(.02,.02),u=.42,f=.07;break}}let d=new zt;for(let[y,p]of i){let m=new st(Hn(p,!1),y);m.castShadow=!0,d.add(m)}let g=new Fe;return g.position.set(0,f,-u),d.add(g),{group:d,muzzle:g,sight:y1[n]??.11}}var Le=n=>new Xe(n),bp={},Ru=(n,t)=>bp[n]||(bp[n]=t());function Ye(n,{x:t=0,y:e=0,z:i=0,rx:s=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:c=1,c:h=16777215}={}){let u=new Zt().compose(new I(t,e,i),new Cn().setFromEuler(new mn(s,r,o)),new I(a,l,c)),f=n.index?n.toNonIndexed():n.clone();f.applyMatrix4(u);let d=new jt(h),g=f.attributes.position.count,y=new Float32Array(g*3);for(let p=0;p<g;p++)y[p*3]=d.r,y[p*3+1]=d.g,y[p*3+2]=d.b;return f.setAttribute("color",new Ee(y,3)),f.attributes.uv||f.setAttribute("uv",new Ee(new Float32Array(g*2),2)),f}var ls=n=>Hn(n,!1),Ct=(n,t,e)=>new vn(n,t,e),cn=(n,t,e,i=10)=>new Je(n,t,e,i),_1=()=>Ru("zg",()=>({torso:new Pn(.19,.34,4,10),pelvis:new Pn(.16,.08,4,8),head:(()=>{let n=new Re(.135,14,10),t=Ct(.17,.07,.14);t.translate(0,-.11,.04);let e=Ct(.2,.04,.06);e.translate(0,.03,.11);let i=Ct(.035,.05,.05);return i.translate(0,-.02,.135),Hn([n.toNonIndexed(),t.toNonIndexed(),e.toNonIndexed(),i.toNonIndexed()])})(),upper:(()=>{let n=new Pn(.06,.22,3,8);return n.translate(0,-.15,0),n})(),fore:(()=>{let n=new Pn(.05,.22,3,8);n.translate(0,-.14,0);let t=Ct(.07,.11,.04);t.translate(0,-.32,0);let e=Ct(.075,.06,.03);return e.translate(0,-.4,.02),e.rotateX(.3),Hn([n.toNonIndexed(),t.toNonIndexed(),e.toNonIndexed()])})(),thigh:(()=>{let n=new Pn(.085,.3,3,8);return n.translate(0,-.22,0),n})(),shin:(()=>{let n=new Pn(.068,.3,3,8);n.translate(0,-.2,0);let t=Ct(.1,.07,.24);return t.translate(0,-.42,.05),Hn([n.toNonIndexed(),t.toNonIndexed()])})(),eyes:(()=>{let n=new Re(.022,6,5),t=n.clone();return n.translate(-.045,0,.118),t.translate(.045,0,.118),Hn([n,t])})()}));function Ep(){let n=_1(),t=Le({map:Ut.camo(),roughness:.9}),e=Le({color:2763812,roughness:.8}),i=Le({color:12159594,roughness:.7}),s=Le({color:1710618,roughness:.7}),r=Le({color:3817520,roughness:.75}),o=new zt,a=new zt;a.position.y=.95,o.add(a);let l=new st(n.pelvis,t);l.rotation.z=Math.PI/2,l.scale.set(1,1.2,.85),a.add(l);let c=new zt;a.add(c);let h=new st(n.torso,t);h.position.y=.3,h.scale.set(1.3,1,.8),c.add(h);let u=new st(Ct(.46,.42,.34),e);u.position.y=.36,c.add(u);for(let W=0;W<3;W++){let _=new st(Ct(.11,.13,.06),e);_.position.set(-.13+W*.13,.26,.19),c.add(_)}let f=new st(Ct(.36,.4,.16),s);f.position.set(0,.36,-.24),c.add(f);let d=new zt;d.position.y=.66,c.add(d);let g=new st(new Re(.13,12,10),i);g.position.y=.08,d.add(g);let y=new st(new Re(.155,14,8,0,Math.PI*2,0,Math.PI*.55),r);y.position.y=.12,d.add(y);let p=new st(Ct(.2,.05,.05),s);p.position.set(0,.2,.12),d.add(p);let m=W=>{let _=new zt;_.position.set(.29*W,.53,0),c.add(_),_.add(new st(n.upper,t));let M=new zt;return M.position.y=-.31,_.add(M),M.add(new st(n.fore,s)),{sh:_,el:M}},b=W=>{let _=new zt;_.position.set(.11*W,-.02,0),a.add(_),_.add(new st(n.thigh,t));let M=new zt;M.position.y=-.45,_.add(M);let k=new st(n.shin,t);M.add(k);let F=new st(Ct(.12,.12,.26),s);return F.position.set(0,-.4,.04),M.add(F),{hp:_,kn:M}},v=m(-1),S=m(1),D=b(-1),A=b(1),R=new zt;R.position.set(.12,.38,.32),c.add(R),o.traverse(W=>{W.isMesh&&(W.castShadow=!0)}),o.rotation.y=Math.PI;let L=new zt;return L.add(o),{wrap:L,root:o,hips:a,spine:c,neck:d,aL:v,aR:S,lL:D,lR:A,hand:R}}function wp(n,t,e,i,s){let r=2+e*1.1,o=t*r,a=Math.min(1,e/4);n.lL.hp.rotation.x=Math.sin(o)*.7*a,n.lR.hp.rotation.x=-Math.sin(o)*.7*a,n.lL.kn.rotation.x=Math.max(0,-Math.cos(o))*1*a,n.lR.kn.rotation.x=Math.max(0,Math.cos(o))*1*a,n.hips.position.y=.95-Math.abs(Math.cos(o))*.04*a,n.spine.rotation.x=s?.25:.05,n.neck.rotation.x=-i*.5;let l=s?-.6:-1.45-i*.9;n.aR.sh.rotation.set(l,0,-.15),n.aR.el.rotation.x=-.35,n.aL.sh.rotation.set(l+.1,0,.55),n.aL.el.rotation.x=-.7,n.hand.rotation.x=s?.9:-i*.9,n.hand.position.y=s?.25:.38+i*.15}function Tp(){let n=Le({map:Ut.camo(),roughness:.9}),t=Le({color:1842204,roughness:.7}),e=new zt,i=new st(new Pn(.045,.32,3,8),n);i.rotation.x=Math.PI/2-.25,i.position.set(.03,-.09,.22),e.add(i);let s=new st(Ct(.07,.08,.1),t);s.position.set(0,-.03,.03),e.add(s);let r=new st(new Pn(.042,.36,3,8),n);r.rotation.set(Math.PI/2-.2,0,-.45),r.position.set(-.11,-.08,0),e.add(r);let o=new st(Ct(.07,.07,.1),t);return o.position.set(-.02,0,-.17),e.add(o),{group:e,leftHand:o,leftArm:r}}function Sp(n){let t=new Map;for(let e of[...n.children])!e.isMesh||e.isSkinnedMesh||e.isInstancedMesh||Array.isArray(e.material)||(t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e));for(let[e,i]of t){if(i.length<2)continue;let s=i.map(o=>{o.updateMatrix();let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();for(let l of Object.keys(a.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&a.deleteAttribute(l);return a.attributes.uv||a.setAttribute("uv",new Ee(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(o.matrix)}),r=new st(Hn(s,!1),e);n.add(r);for(let o of i)n.remove(o)}}function Ap(n){let t=new zt,e=new zt;e.rotation.y=Math.PI/2,t.add(e);let i=Le({color:7211792,metalness:.6,roughness:.3,envMap:n,envMapIntensity:.9}),s=Le({color:15526110,metalness:.4,roughness:.35,envMap:n,envMapIntensity:.7}),r=Le({color:14343648,metalness:1,roughness:.15,envMap:n,envMapIntensity:1.2}),o=Le({color:725272,metalness:.9,roughness:.08,envMap:n,envMapIntensity:1.3,side:_n}),a=Le({color:1118481,roughness:.6}),l=Le({color:1381653,roughness:.92}),c=new fe({color:16773832}),h=new fe({color:16722458}),u=new ui;u.moveTo(-2.25,.3),u.lineTo(-1.82,.3),u.absarc(-1.4,.3,.42,Math.PI,0,!0),u.lineTo(.96,.3),u.absarc(1.38,.3,.42,Math.PI,0,!0),u.lineTo(2.24,.3),u.lineTo(2.36,.42),u.lineTo(2.37,.66),u.lineTo(2.22,.8),u.lineTo(.78,.9),u.lineTo(-1.8,.94),u.lineTo(-2.27,.9),u.lineTo(-2.35,.62),u.lineTo(-2.3,.36),u.closePath();let f=new Rs(u,{depth:1.72,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3,curveSegments:10});f.translate(0,0,-.86),e.add(new st(f,i));let d=new ui;d.moveTo(.78,.9),d.lineTo(.05,1.3),d.lineTo(-.7,1.33),d.lineTo(-1.95,.95),d.lineTo(-1.95,.9),d.closePath();let g=new Rs(d,{depth:1.36,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2});g.translate(0,0,-.68),e.add(new st(g,i));let y=(A,R,L)=>{let W=new ui;W.moveTo(A[0][0],A[0][1]);for(let M of A.slice(1))W.lineTo(M[0],M[1]);let _=new st(new tl(W),o);_.position.z=R,L&&(_.rotation.y=Math.PI,_.scale.x=-1),e.add(_)};y([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],.725),y([[.66,.97],[.06,1.27],[-.62,1.29],[-.95,1.18],[-.95,.97]],-.725,!0);let p=(A,R,L,W)=>{let _=new I(W[0],W[1],0).normalize(),M=new I(0,0,-1),k=new I().crossVectors(M,_),F=new st(new on(A,R),o);F.quaternion.setFromRotationMatrix(new Zt().makeBasis(M,_,k)),F.position.set(L[0]+k.x*.045,L[1]+k.y*.045,0),e.add(F)};p(1.24,.8,[.42,1.1],[-.73,.4]),p(1.22,1.1,[-1.28,1.15],[-.956,-.296]);for(let A of[-.15,.15]){let R=(L,W,_,M,k=.17)=>{let F=new st(Ct(L,.012,k),s);F.position.set(W,_,A),F.rotation.z=M,e.add(F)};R(1.46,1.5,.89,-.062),R(.75,-.33,1.375,-.04),R(1.32,-1.32,1.18,.29),R(.32,-2.1,.985,.08)}let m=(A,R,L,W,_,M=0)=>{let k=new st(A,R);return k.position.set(L,W,_),k.rotation.y=M,e.add(k),k};m(Ct(.45,.07,.5),a,1.25,.92,0),m(Ct(.05,.26,1.4),a,2.41,.58,0);for(let A of[-.62,.62])m(cn(.09,.09,.05,14),c,2.42,.6,A).rotation.z=Math.PI/2,m(Ct(.06,.2,.36),h,-2.39,.66,A*.95),m(cn(.035,.035,.2,8),r,-2.3,.3,A*.6).rotation.z=Math.PI/2,m(Ct(.42,.18,.04),a,-.95,.66,A>0?.92:-.92);m(Ct(.1,.09,1.86),r,2.44,.36,0),m(Ct(.1,.09,1.86),r,-2.4,.38,0);let b=[],v=cn(.34,.34,.26,20).rotateX(Math.PI/2),S=cn(.2,.2,.27,14).rotateX(Math.PI/2),D=cn(.07,.07,.28,8).rotateX(Math.PI/2);for(let[A,R]of[[1.38,.8],[1.38,-.8],[-1.4,.8],[-1.4,-.8]]){let L=new zt;L.position.set(A,.34,R),e.add(L);let W=new zt;L.add(W),W.add(new st(v,l)),W.add(new st(S,r)),W.add(new st(D,a));for(let _=0;_<5;_++){let M=new st(Ct(.04,.3,.02),a);M.rotation.z=_*Math.PI/2.5,M.position.z=R>0?.14:-.14,W.add(M)}b.push({w:L,spin:W,front:A>0})}m(Ct(1.6,.4,1.3),a,-.4,.85,0),Sp(e);for(let A of b)Sp(A.spin);return t.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),{group:t,wheels:b}}function Rp(){let n=new zt,t=Le({map:Ut.boxSide(),roughness:.7}),e=Le({map:Ut.wood(),color:6964774,roughness:.75}),i=Le({color:9075274,metalness:.7,roughness:.4}),s=new st(Ct(1.7,.62,.8),[e,e,e,e,t,t]);s.position.y=.31,n.add(s);for(let h of[-.82,.82]){let u=new st(Ct(.06,.66,.84),i);u.position.set(h,.33,0),n.add(u)}let r=new zt;r.position.set(0,.62,-.4),n.add(r);let o=new st(Ct(1.72,.16,.82),[e,e,e,e,t,t]);o.position.set(0,.08,.41),r.add(o);let a=new st(new Je(.6,.9,40,16,1,!0),new fe({color:5941503,transparent:!0,opacity:.16,blending:xn,depthWrite:!1,side:_n}));a.position.y=20,n.add(a);let l=new an(new fn({map:Ut.glow(),color:6992127,transparent:!0,opacity:.8,blending:xn,depthWrite:!1}));l.scale.set(3,1.6,1),l.position.y=.8,n.add(l);let c=new zt;return c.position.y=.75,n.add(c),n.traverse(h=>{h.isMesh&&h!==a&&(h.castShadow=!0)}),{group:n,lid:r,beam:a,glow:l,gunSlot:c}}function Cp(){let n=new zt,t=Le({map:Ut.wood(),color:5914148,roughness:.8}),e=new st(Ct(1.7,.62,.8),t);return e.position.y=.31,e.castShadow=!0,n.add(e),n}function Pp(n,t,e){let i=new zt,s=Le({map:Ut.perk(n,t,e),emissiveMap:Ut.perk(n,t,e),emissive:16777215,emissiveIntensity:0,roughness:.5}),r=Le({color:new jt(t).multiplyScalar(.45),roughness:.55,metalness:.3}),o=new st(Ct(1,2.1,.8),[r,r,r,r,s,r]);o.position.y=1.05,i.add(o);let a=new st(cn(.35,.45,.25,12),r);a.position.y=2.22,i.add(a);let l=new fe({color:2236962}),c=new st(new Re(.18,10,8),l);c.position.y=2.42,i.add(c);let h=new an(new fn({map:Ut.glow(),color:t,transparent:!0,opacity:0,blending:xn,depthWrite:!1}));return h.scale.set(2.4,3.2,1),h.position.set(0,1.2,.5),i.add(h),i.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),{group:i,face:s,bulbM:l,glow:h,col:t}}function Ip(){let n=new zt,t=Le({color:5593178,metalness:.6,roughness:.5}),e=new st(Ct(.7,1,.18),t);e.position.y=1.4,n.add(e);let i=new st(new on(.5,.18),new fe({map:Ut.label("POWER","#d8b020","#111",256,80)}));i.position.set(0,1.78,.095),n.add(i);let s=new zt;s.position.set(0,1.3,.1),n.add(s);let r=new st(Ct(.06,.45,.06),Le({color:2236962}));r.position.y=.2,s.add(r);let o=new st(new Re(.06,8,6),Le({color:12591136,roughness:.4}));o.position.y=.43,s.add(o),s.rotation.x=.6;let a=new st(new Re(.05,8,6),new fe({color:4460817}));return a.position.set(.25,1.75,.1),n.add(a),{group:n,lever:s,lamp:a}}function Lp(){let n=new zt,t=Le({color:3025456,metalness:.7,roughness:.45}),e=Le({color:2230320,emissive:10502399,emissiveIntensity:0,roughness:.4}),i=new st(Ct(1.8,1,1.2),t);i.position.y=.5,n.add(i);let s=new st(Ct(1.4,.5,.9),e);s.position.y=1.25,n.add(s);let r=new st(Ct(1.8,.4,1.2),t);r.position.y=1.7,n.add(r);for(let c of[-.75,.75]){let h=new st(cn(.1,.1,1.4,8),Le({color:9079434,metalness:.9,roughness:.3}));h.position.set(c,1.4,.45),n.add(h)}let o=new st(new on(1.5,.3),new fe({map:Ut.label("THE FORGE","#14081c","#c88aff",512,100,"bold 60px Arial Black, Arial")}));o.position.set(0,2.1,0),n.add(o),o.position.z=.61;let a=new an(new fn({map:Ut.glow(),color:10502399,transparent:!0,opacity:0,blending:xn,depthWrite:!1}));a.scale.set(3.4,2.4,1),a.position.set(0,1.25,.7),n.add(a);let l=new zt;return l.position.set(0,1.25,.2),n.add(l),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),{group:n,glowM:e,glow:a,slot:l}}var x1=()=>Ru("bm",()=>({wood:Le({map:Ut.plank(),vertexColors:!0,roughness:.85}),metal:Le({map:Ut.rust(),vertexColors:!0,roughness:.8,metalness:.3})}));function Dp(){return x1()}function _l(n){return Ru("piece"+n,()=>{let t=[],e=[];if(n==="wall"){for(let i of[-.92,0,.92])t.push(Ye(Ct(.16,2.6,.16),{x:i,y:1.3,c:9071178}));for(let i=0;i<6;i++)t.push(Ye(Ct(2.05,.3,.06),{y:.3+i*.38,z:.1,rz:Math.sin(i*7.3)*.04,c:[13676688,12097648,13150338][i%3]}));t.push(Ye(Ct(2.5,.14,.06),{y:1.2,z:-.1,rz:.85,c:10123866})),e.push(Ye(Ct(.8,.9,.03),{x:.4,y:1.4,z:.15,rz:.06,c:16777215}));for(let i of[-.92,0,.92])t.push(Ye(new Ts(.1,.3,6),{x:i,y:2.75,c:9071178}))}else if(n==="door"){for(let i of[-.95,.95])t.push(Ye(Ct(.18,2.7,.18),{x:i,y:1.35,c:8018490}));t.push(Ye(Ct(2.1,.2,.2),{y:2.6,c:8018490}))}else if(n==="gate"){for(let i=0;i<7;i++)t.push(Ye(Ct(.24,2.2,.06),{x:.14+i*.25,y:1.15,c:[13676688,12097648,13150338][i%3]}));for(let i of[.5,1.8])t.push(Ye(Ct(1.76,.16,.06),{x:.88,y:i,z:.06,c:10123866}));t.push(Ye(Ct(2.1,.14,.06),{x:.88,y:1.15,z:.06,rz:.62,c:10123866}))}else if(n==="spikes"){t.push(Ye(Ct(1.9,.12,.12),{y:.25,c:6965802})),t.push(Ye(Ct(1.9,.12,.12),{y:.25,z:.5,c:6965802})),t.push(Ye(Ct(1.9,.12,.12),{y:.25,z:-.5,c:6965802}));for(let i=0;i<12;i++){let s=-.8+i%6*.32,r=i<6?.28:-.28;t.push(Ye(new Ts(.06,1,5),{x:s,y:.55,z:r,rx:i<6?.55:-.55,c:13148272}))}e.push(Ye(Ct(1.9,.04,.04),{y:.42,c:16777215}))}return{wood:ls(t),metal:e.length?ls(e):null}})}var Oi={pistol:{name:"Patrol .45",kind:"pistol",dmg:50,rpm:420,auto:!1,mag:8,reserve:80,reload:1.5,spread:.01,head:2.5,pierce:1,col:2763308,sound:[.9,.18]},ranger:{name:"Ranger Rifle",kind:"rifle",dmg:120,rpm:330,auto:!1,mag:10,reserve:120,reload:2.1,spread:.006,head:3,pierce:2,col:5913378,sound:[.6,.3]},viper:{name:"Viper SMG",kind:"smg",dmg:55,rpm:780,auto:!0,mag:30,reserve:180,reload:2,spread:.022,head:2.2,pierce:1,col:1974050,sound:[1.15,.14]},trench:{name:"Trench 12",kind:"shotgun",dmg:70,pellets:8,rpm:80,auto:!1,mag:6,reserve:48,reload:2.8,spread:.075,head:1.5,pierce:2,col:4861984,sound:[.45,.42]},kestrel:{name:"Kestrel AR",kind:"ar",dmg:95,rpm:640,auto:!0,mag:30,reserve:210,reload:2.3,spread:.014,head:2.5,pierce:2,col:3160618,sound:[.75,.24]},hammer:{name:"Hammer LMG",kind:"lmg",dmg:130,rpm:700,auto:!0,mag:100,reserve:400,reload:4.2,spread:.026,head:2.2,pierce:3,col:2895660,sound:[.55,.3]},brawler:{name:"Brawler Magnum",kind:"pistol",dmg:520,rpm:160,auto:!1,mag:6,reserve:60,reload:2.4,spread:.008,head:3,pierce:3,col:9409174,sound:[.5,.45]},ripper:{name:"Ripper SMG",kind:"smg",dmg:80,rpm:950,auto:!0,mag:40,reserve:280,reload:2.2,spread:.028,head:2.2,pierce:1,col:3811904,sound:[1.3,.13]},widow:{name:"Widowmaker",kind:"sniper",dmg:1600,rpm:50,auto:!1,mag:5,reserve:40,reload:3.2,spread:.001,head:4,pierce:6,col:2304042,sound:[.35,.6],zoom:2.6},ion:{name:"Ion Ray",kind:"ray",dmg:1400,rpm:260,auto:!1,mag:20,reserve:160,reload:2.4,spread:.004,head:1,pierce:1,splash:3.2,col:1727018,sound:[1.6,.35],wonder:!0},surge:{name:"Surge Cannon",kind:"wave",dmg:1100,rpm:70,auto:!1,mag:4,reserve:28,reload:3,spread:0,head:1,pierce:1,wave:14,col:1718874,sound:[1,.9],wonder:!0}},Cu=["ranger","viper","trench","kestrel","hammer","brawler","ripper","widow","ion","hammer","kestrel","ripper","ion","surge"],Pu={surge:"Cataclysm Engine",pistol:"Hellfire .45",ranger:"Longshot Rapture",viper:"Venom Kiss",trench:"Doomsayer 24",kestrel:"Raptor Reign",hammer:"Anvil of Ruin",brawler:"Judgment Day",ripper:"Shredder Supreme",widow:"Black Widow Queen",ion:"Ion Annihilator"};function xl(n,t=!1){let e=Oi[n],i={key:n,pap:t,def:e,name:t?Pu[n]:e.name,dmg:e.dmg*(t?2.4:1),mag:Math.round(e.mag*(t?1.5:1)),maxReserve:Math.round(e.reserve*(t?2:1)),clip:0,reserve:0,rpm:e.rpm*(t?1.12:1)};return i.clip=i.mag,i.reserve=i.maxReserve,i}var Up=[{key:"ranger",cost:500,i:16,j:23,face:[1,0]},{key:"viper",cost:1e3,i:32,j:30,face:[0,-1]},{key:"trench",cost:1500,i:13,j:14,face:[0,1]},{key:"kestrel",cost:1400,i:5,j:12,face:[1,0]}];var ue=n=>new Xe(n),Dr=.9,Lo=2.3,Do=2.6,Lu=class{constructor(){this.p=[],this.n=[],this.u=[]}quad(t,e,i,s,r,o,a,l,c){let h=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],u=[i[0]-t[0],i[1]-t[1],i[2]-t[2]],f=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]],d=[t,e,i,t,i,s],g=[o,a,l,o,l,c];f[0]*r[0]+f[1]*r[1]+f[2]*r[2]<0&&(d=[t,i,e,t,s,i],g=[o,l,a,o,c,l]);for(let y=0;y<6;y++)this.p.push(...d[y]),this.n.push(...r),this.u.push(...g[y])}wall(t,e,i,s,r,o,a){let l=(h,u)=>t==="x"?[h,u,e]:[e,u,h],c=(h,u)=>[h/2,u/3.4];this.quad(l(i,r),l(s,r),l(s,o),l(i,o),a,c(i,r),c(s,r),c(s,o),c(i,o))}flat(t,e,i,s,r,o,a=1/2){let l=[0,o?1:-1,0];this.quad([t,r,e],[i,r,e],[i,r,s],[t,r,s],l,[t*a,e*a],[i*a,e*a],[i*a,s*a],[t*a,s*a])}mesh(t){let e=new Ve;e.setAttribute("position",new ce(this.p,3)),e.setAttribute("normal",new ce(this.n,3)),e.setAttribute("uv",new ce(this.u,2)),e.computeTangents?.call;let i=new st(e,t);return i.receiveShadow=!0,i.castShadow=!0,i}};function M1(n){let t=e=>e?e.getHexString():"-";return[n.type,t(n.color),n.map?n.map.uuid:"-",n.roughness,n.metalness,t(n.emissive),n.emissiveIntensity,n.transparent,n.opacity,n.side,n.vertexColors,n.blending,n.depthWrite].join("|")}function b1(n,t){n.updateMatrixWorld(!0);let e=new Map;for(let r of t){if(!r.parent||Array.isArray(r.material))continue;let o=new I;r.getWorldPosition(o);let a=M1(r.material)+"#"+Math.floor(o.x/32)+","+Math.floor(o.z/32);e.has(a)||e.set(a,[]),e.get(a).push(r)}let i=0,s=0;for(let r of e.values()){if(i+=r.length,r.length<2){s++;continue}let o=[],a=!1;for(let h of r){let u=h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone();for(let f of Object.keys(u.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&f!=="color"&&u.deleteAttribute(f);u.attributes.uv||u.setAttribute("uv",new Ee(new Float32Array(u.attributes.position.count*2),2)),u.applyMatrix4(h.matrixWorld),o.push(u),a=a||h.castShadow}let l=Object.keys(o[0].attributes).sort().join();if(!o.every(h=>Object.keys(h.attributes).sort().join()===l)){s+=r.length;continue}let c=new st(ls(o),r[0].material);c.castShadow=a,c.receiveShadow=!0,n.add(c);for(let h of r)h.parent.remove(h);s++}return{before:i,after:s}}function Np(n,t,e){let i={},s=P=>(n.add(P),P),r=[],o=(P,H,z)=>{let q=P.clone();return q.needsUpdate=!0,q.repeat.set(H,z),q},a={stucco:ue({map:Ut.stucco(),normalMap:Ut.stuccoN(),roughness:.92,color:14208184}),brick:ue({map:Ut.brick(),normalMap:Ut.brickN(),roughness:.9}),panel:ue({map:Ut.panel(),roughness:.85}),diner:ue({map:Ut.dinerWall(),roughness:.6}),block:ue({map:Ut.block(),roughness:.9}),ceiling:ue({map:Ut.ceiling(),roughness:.95}),carpet:ue({map:Ut.carpet(),roughness:.98}),checker:ue({map:Ut.tileChecker(),roughness:.45}),concrete:ue({map:Ut.concrete(),roughness:.9}),wood:ue({map:Ut.wood(),roughness:.75}),plank:ue({map:Ut.plank(),roughness:.85}),metal:ue({map:Ut.metal(),roughness:.6,metalness:.5}),rust:ue({map:Ut.rust(),roughness:.85,metalness:.2}),dark:ue({color:1710620,roughness:.7}),trim:ue({color:3811868,roughness:.7})};i.M=a;let l=P=>P===3?a.brick:a.stucco,c=P=>P===0?a.panel:P===2?a.diner:a.block,h=(P,H)=>{for(let[z,q]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]])if(Li(P+z,H+q)===1)return Di[oe(P+z,H+q)];return 0},u=88,f=80,d=ue({map:o(Ut.asphalt(),u/8,f/8),normalMap:o(Ut.asphaltN(),u/4,f/4),normalScale:new dt(.6,.6),roughness:.82,color:10132122}),g=s(new st(new on(u,f),d));g.rotation.x=-Math.PI/2,g.position.set(u/2,0,f/2),g.receiveShadow=!0;let y=s(new st(new on(600,600),ue({color:1381391,roughness:1})));y.rotation.x=-Math.PI/2,y.position.set(u/2,-.02,f/2);let p=new Xe({map:Ut.lines(),transparent:!0,depthWrite:!1,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),m=new on(.5,5);m.rotateX(-Math.PI/2);for(let P=0;P<10;P++){let H=new st(m,p);H.position.set(48+P*3.2,.01,6.5),s(H);let z=H.clone();z.position.set(6+P*3.2,.01,72),s(z)}let b=new Xe({map:Ut.dirt(),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1});for(let[P,H,z]of[[8,8,10],[80,10,12],[10,70,12],[82,70,10],[44,4,9],[6,40,9],[84,36,9],[30,74,9],[60,74,10],[52,34,8],[22,40,7]]){let q=s(new st(new on(z,z),b));q.rotation.x=-Math.PI/2,q.rotation.z=P,q.position.set(P,.012,H)}let v=new Map,S=P=>(v.has(P)||v.set(P,new Lu),v.get(P));for(let P=0;P<40;P++)for(let H=0;H<44;H++){let z=Li(H,P),q=H*2,rt=q+2,tt=P*2,E=tt+2;if(z===1){S(a.ceiling).flat(q,tt,rt,E,3.4,!1);continue}if(z!==2&&z!==3&&z!==4)continue;let x=h(H,P),N=l(x),j=c(x);S(a.ceiling).flat(q,tt,rt,E,3.4,!1);let at=[[1,0,"z",rt,tt,E,[1,0,0]],[-1,0,"z",q,tt,E,[-1,0,0]],[0,1,"x",E,q,rt,[0,0,1]],[0,-1,"x",tt,q,rt,[0,0,-1]]];for(let[et,Nt,mt,Et,ie,ft,wt]of at){let Vt=Li(H+et,P+Nt),Yt=Vt===1?c(Di[oe(H+et,P+Nt)]):N;if(z===2){if(Vt===2)continue;if(Vt===3){S(N).wall(mt,Et,ie,ft,Dr,Lo,wt);continue}if(Vt===4){S(N).wall(mt,Et,ie,ft,0,Do,wt);continue}S(Yt).wall(mt,Et,ie,ft,0,3.4,wt)}else if(Vt===1||Vt===0||Vt===6){let Dt=z===3?Lo:Do;S(Yt).wall(mt,Et,ie,ft,Dt,3.4,wt),z===3&&S(Yt).wall(mt,Et,ie,ft,0,Dr,wt)}}z===3&&(S(a.wood).flat(q,tt,rt,E,Dr,!0),S(N).flat(q,tt,rt,E,Lo,!1)),z===4&&S(N).flat(q,tt,rt,E,Do,!1)}for(let P of ul){let H=P.floorKind==="carpet"?a.carpet:P.floorKind==="checker"?a.checker:a.concrete;S(H).flat(P.i0*2,P.j0*2,(P.i1+1)*2,(P.j1+1)*2,.01,!0,P.floorKind==="checker"?1/4:1/3)}for(let P=0;P<40;P++)for(let H=0;H<44;H++)Li(H,P)===4&&S(a.concrete).flat(H*2,P*2,H*2+2,P*2+2,.012,!0);for(let[P,H]of v){let z=H.mesh(P);s(z)}let D=[],A=new vn(2.1,.22,.05);i.planks=[];let R=[];for(let P of bn){let H=Ht(P.i),z=Ht(P.j),q=P.axis==="x"?0:Math.PI/2,rt=P.outDir;for(let x of[-1,1])D.push(Ye(Ct(.12,Lo-Dr,.25),{x:H+(P.axis==="x"?x*.94:0),z:z+(P.axis==="z"?x*.94:0),y:(Dr+Lo)/2,ry:q,c:3811868}));let tt=new zt;tt.position.set(H-rt[0]*.55,0,z-rt[1]*.55),tt.rotation.y=q,s(tt);let E=[];for(let x=0;x<6;x++){let N=new Fe,j=Dr+.18+x%3*.45+(x>2?.2:0);N.position.set(0,j,x>2?-.06:0),N.rotation.z=(x%2?1:-1)*(.12+x*.13%.3),tt.add(N),E.push(N),R.push(N)}i.planks[P.id]={group:tt,list:E,base:E.map(x=>({y:x.position.y,rz:x.rotation.z}))}}{let P=new Ya(A,a.plank,R.length);P.castShadow=!0,P.receiveShadow=!0,s(P),n.updateMatrixWorld(!0);let H=new Zt().makeScale(0,0,0);R.forEach((z,q)=>{let rt=z.matrixWorld.clone(),tt=!0;P.setMatrixAt(q,rt),Object.defineProperty(z,"visible",{get:()=>tt,set:E=>{E=!!E,E!==tt&&(tt=E,P.setMatrixAt(q,E?rt:H),P.instanceMatrix.needsUpdate=!0)},configurable:!0})}),P.instanceMatrix.needsUpdate=!0,P.computeBoundingSphere()}let L=new st(ls(D),ue({vertexColors:!0,roughness:.8}));L.castShadow=!0,s(L),i.doorMeshes=[];let W=ue({map:o(Ut.plank(),1,3),roughness:.85,color:11571312});for(let P of Ui){let H=new zt,z=0,q=0;for(let[E,x]of P.tiles)z+=Ht(E),q+=Ht(x);H.position.set(z/P.tiles.length,0,q/P.tiles.length),H.rotation.y=P.axis==="x"?0:Math.PI/2,s(H);let rt=new st(Ct(4,Do,.14),W);rt.position.y=Do/2,rt.castShadow=rt.receiveShadow=!0,H.add(rt);for(let E of[-1,1]){let x=new st(Ct(4.4,.25,.06),a.plank);x.position.set(0,1.3,E*.11),x.rotation.z=E*.5,H.add(x)}let tt=new st(new on(1.2,.36),new fe({map:Ut.label("$"+P.cost,"#1a1208","#f0d080",256,76,"bold 50px Arial Black, Arial"),transparent:!0}));for(let E of[-1,1]){let x=tt.clone();x.position.set(0,1.9,E*.15),x.rotation.y=E<0?Math.PI:0,H.add(x)}i.doorMeshes[P.id]=H}let _=ue({map:o(Ut.chain(),u/2.6,1),alphaTest:.5,side:_n,metalness:.6,roughness:.5,color:10133664}),M=[],k=2.8,F=(P,H,z,q)=>{let rt=Math.hypot(z-P,q-H),tt=new st(new on(rt,k),_);tt.position.set((P+z)/2,k/2,(H+q)/2),tt.rotation.y=-Math.atan2(q-H,z-P),tt.material.map.repeat.set(rt/2.6,1),s(tt);for(let E=0;E<=rt;E+=4){let x=E/rt;M.push(Ye(cn(.05,.05,k+.1,6),{x:P+(z-P)*x,z:H+(q-H)*x,y:k/2,c:7830396}))}M.push(Ye(cn(.03,.03,rt,6),{x:(P+z)/2,z:(H+q)/2,y:k,rz:Math.PI/2,ry:-Math.atan2(q-H,z-P),c:7830396}))},G=2;F(G,G,u-G,G),F(u-G,G,u-G,f-G),F(u-G,f-G,G,f-G),F(G,f-G,G,G),s(new st(ls(M),ue({vertexColors:!0,metalness:.7,roughness:.45})));let ot=[],X=[],ut=7,K=()=>(ut=ut*16807%2147483647)/2147483647;for(let P=0;P<220;P++){let H=K()*Math.PI*2,z=62+K()*70,q=u/2+Math.cos(H)*z*1.05,rt=f/2+Math.sin(H)*z,tt=8+K()*10;ot.push(Ye(new Ts(2+K()*1.6,tt,7),{x:q,y:tt/2+1.5,z:rt,c:new jt().setHSL(.3,.25,.08+K()*.05).getHex()})),X.push(Ye(cn(.25,.35,3,5),{x:q,y:1.5,z:rt,c:2759954}))}s(new st(ls(ot),ue({vertexColors:!0,roughness:1}))),s(new st(ls(X),ue({vertexColors:!0,roughness:1})));let vt=s(new st(new Re(420,24,16),new fe({map:Ut.sky(),side:rn,fog:!1,depthWrite:!1})));vt.position.set(u/2,0,f/2),vt.renderOrder=-1;let Mt=new Ve,St=[];for(let P=0;P<900;P++){let H=K()*Math.PI*2,z=.08+K()*1.4;St.push(Math.cos(H)*Math.cos(z)*400+u/2,Math.sin(z)*400,Math.sin(H)*Math.cos(z)*400+f/2)}Mt.setAttribute("position",new ce(St,3)),s(new Za(Mt,new yo({color:13160703,size:1.3,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1})));let Kt=s(new an(new fn({map:Ut.moon(),fog:!1,depthWrite:!1,transparent:!0})));Kt.scale.set(60,60,1),Kt.position.set(u/2-180,210,f/2-260);let ne=(P,H=.9)=>new fn({map:Ut.glow(),color:P,transparent:!0,opacity:H,blending:xn,depthWrite:!1}),J=(P,H,z=P,q=H)=>{for(let rt=H;rt<=q;rt++)for(let tt=P;tt<=z;tt++)Ro(tt,rt)},it=(P,H,z,q,rt,tt=0)=>{let E=new st(P,H);return E.position.set(z,q,rt),E.rotation.y=tt,P.boundingSphere||P.computeBoundingSphere(),E.castShadow=P.boundingSphere.radius>.9,E.receiveShadow=!0,s(E),r.push(E),E},bt=(P,H,z,q)=>{let rt=new zt;rt.position.set(P,0,H),rt.rotation.y=z,s(rt);let tt=ue({map:Ut.rust(),color:q,roughness:.8,metalness:.3}),E=new st(Ct(1.8,.7,4.4),tt);E.position.y=.55,rt.add(E);let x=new st(Ct(1.6,.55,2.2),tt);x.position.set(0,1.15,.2),rt.add(x);let N=new st(Ct(1.62,.4,2),a.dark);N.position.set(0,1.15,.2),N.scale.set(1,1,1.02),rt.add(N);for(let[j,at]of[[.85,1.4],[-.85,1.4],[.85,-1.4],[-.85,-1.4]]){let et=new st(cn(.32,.32,.22,10),a.dark);et.rotation.z=Math.PI/2,et.position.set(j,.28,at),rt.add(et)}rt.rotation.z=(K()-.5)*.08,rt.traverse(j=>{j.isMesh&&(j.castShadow=j.receiveShadow=!0,r.push(j))})};bt(41,21,.2,8030874),J(20,9,20,11),bt(13,49,1.4,10127962),J(5,23,7,25),bt(70,66,.4,5925466),J(34,32,35,34),bt(18,18,.1,6969978),J(8,8,9,10),it(Ct(3.4,1.5,1.8),ue({map:Ut.metal(),color:3103290,roughness:.7,metalness:.4}),55,.75,35),J(27,17),it(Ct(3.6,1.1,.9),a.wood,50,.55,57),J(24,28,25,28),it(Ct(3.8,.12,1),ue({color:9050650,roughness:.5}),50,1.13,57),it(Ct(2.2,.8,.9),ue({color:3811914,roughness:.95}),37,.4,45.2),J(18,22),it(Ct(9.6,1.05,1),ue({color:13156520,roughness:.5}),65,.52,47),J(30,23,34,23),it(Ct(9.8,.08,1.2),ue({color:10099226,roughness:.3,metalness:.3}),65,1.08,47);for(let P=0;P<6;P++)it(cn(.22,.22,.12,12),ue({color:10491928,roughness:.4}),61+P*1.6,.75,48.3),it(cn(.04,.04,.7,6),a.metal,61+P*1.6,.35,48.3);for(let P of[51,53])it(Ct(1.6,.9,.5),ue({color:9050650,roughness:.5}),75,.45,P-.7),it(Ct(1.6,.9,.5),ue({color:9050650,roughness:.5}),75,.45,P+.7),it(Ct(1.2,.08,.8),ue({color:14209208,roughness:.4}),75,.78,P);J(37,25,37,26),it(Ct(3.6,.95,.8),a.metal,13,.48,23),J(6,11),it(Ct(1,1.4,.6),ue({color:10492442,roughness:.4,metalness:.4}),31,.7,13),J(15,6);for(let[P,H]of[[15.6,16.4],[20.4,16.4],[15.6,19.6],[20.4,19.6]])it(cn(.12,.12,.6,8),a.metal,P,.3,H);i.fires=[];let gt=ue({map:Ut.rust(),color:9064496,roughness:.8,metalness:.3});for(let[P,H]of[[24,18],[14,19],[36,18],[9,31],[31,35],[40,9]]){let z=Ht(P),q=Ht(H);it(cn(.42,.42,1,12),gt,z,.5,q),J(P,H);let rt=[];for(let E=0;E<3;E++){let x=new an(new fn({map:Ut.flame(),color:E?16742944:16760928,transparent:!0,blending:xn,depthWrite:!1}));x.position.set(z+(E-1)*.12,1.3,q),x.scale.set(.6,1.1,1),s(x),rt.push(x)}let tt=new an(ne(16740384,.5));tt.scale.set(5,4,1),tt.position.set(z,1.3,q),s(tt),i.fires.push({x:z,z:q,fl:rt,gl:tt})}let Gt=ue({color:4869198,metalness:.6,roughness:.5});i.poles=[];for(let[P,H]of[[12,19],[33,17],[10,34],[36,33],[29,4],[4,13]]){let z=Ht(P),q=Ht(H);it(cn(.12,.16,7,8),Gt,z,3.5,q),it(Ct(1.4,.15,.4),Gt,z+.6,7,q),J(P,H);let rt=it(Ct(.6,.08,.3),new fe({color:16760944}),z+1.1,6.9,q);rt.castShadow=!1;let tt=new an(ne(16752704,.55));tt.scale.set(4,4,1),tt.position.set(z+1.1,6.8,q),s(tt);let E=s(new st(new is(4.5,20),new fe({map:Ut.glow(),color:6965792,transparent:!0,blending:xn,depthWrite:!1})));E.rotation.x=-Math.PI/2,E.position.set(z+1.1,.03,q),i.poles.push({x:z+1.1,z:q})}let yt=(P,H,z,q,rt,tt,E,x=0)=>{let N=new st(new on(tt,E),new fe({map:Ut.neon(P,H),transparent:!0,depthWrite:!1,side:_n}));N.position.set(z,q,rt),N.rotation.y=x,s(N);let j=new an(ne(H,.35));return j.scale.set(tt*1.2,E*2.5,1),j.position.set(z,q,rt+(x?0:-.2)),s(j),N},Tt=it(Ct(9,2,.2),a.dark,43,4.6,41.8);Tt.castShadow=!1;for(let P of[39.5,46.5])it(cn(.08,.08,1.4,6),Gt,P,3.6,41.8);i.motelSign=yt("LOCKWOOD MOTEL","#ff3a6a",43,4.75,41.65,8.6,1.6,Math.PI),i.vacancy=yt("NO VACANCY","#ff2a20",43,3.85,41.65,3.4,.6,Math.PI),yt("DINER","#3ae0ff",66,4.2,41.85,4,1.1,Math.PI),it(Ct(4.4,1.3,.15),a.dark,66,4.2,41.95);let Xt=new st(new on(5,.9),new Xe({map:Ut.label("ED'S AUTO REPAIR","#c8b070","#2a1a0a",512,96,"bold 58px Arial Black, Arial"),roughness:.8}));Xt.position.set(18,2.95,30.02),s(Xt);let nt=(P,H,z,q,rt=.45)=>{let tt=Ht(H)-q[0]*rt,E=Ht(z)-q[1]*rt;return P.position.set(tt,0,E),P.rotation.y=Math.atan2(q[0],q[1]),s(P),{x:Ht(H)+q[0]*.6,z:Ht(z)+q[1]*.6}};i.boxSpots=[{i:21,j:29,face:[0,-1],name:"Lobby"},{i:36,j:22,face:[0,1],name:"Diner"},{i:12,j:6,face:[0,1],name:"Garage"},{i:37,j:14,face:[-1,0],name:"Parking Lot"}],i.box=Rp(),s(i.box.group);for(let P of i.boxSpots)Ro(P.i,P.j),P.crate=Cp(),P.use=nt(P.crate,P.i,P.j,P.face,.2),P.pos={x:Ht(P.i)-P.face[0]*.2,z:Ht(P.j)-P.face[1]*.2},P.rot=Math.atan2(P.face[0],P.face[1]);i.perks=[{key:"revive",name:"Second Wind",col:"#3a8aff",sub:"SELF-REVIVE",cost:500,i:26,j:23,face:[-1,0],needsPower:!1,desc:"Get back up once when you go down"},{key:"tank",name:"Tank Tonic",col:"#e02020",sub:"MORE HEALTH",cost:2500,i:29,j:29,face:[0,-1],needsPower:!0,desc:"Take 2.5x more hits"},{key:"rapid",name:"Rapid Brew",col:"#2ac040",sub:"FAST RELOAD",cost:3e3,i:37,j:29,face:[0,-1],needsPower:!0,desc:"Reload twice as fast"},{key:"double",name:"Double Shot",col:"#e0b020",sub:"FIRE RATE",cost:2e3,i:15,j:13,face:[0,-1],needsPower:!0,desc:"Shoot 33% faster"},{key:"stamina",name:"Fleetfoot",col:"#f07020",sub:"MOVE FASTER",cost:2e3,i:33,j:22,face:[0,1],needsPower:!0,desc:"Run faster and longer"}];for(let P of i.perks)Ro(P.i,P.j),P.m=Pp(P.name,P.col,P.sub),P.use=nt(P.m.group,P.i,P.j,P.face,.2);i.sw=Ip(),i.swUse=nt(i.sw.group,16,7,[-1,0],-.08-1),i.forge=Lp(),Ro(7,7),i.forgeUse=nt(i.forge.group,7,7,[0,1],.1),i.wallbuys=Up.map(P=>{let H=Oi[P.key],z=Ut.chalk(P.key,(E,x,N)=>S1(E,x,N,H.kind)),q=new st(new on(1.8,.9),new fe({map:z,transparent:!0,depthWrite:!1,color:14209216})),rt=Ht(P.i)+P.face[0]*1.02,tt=Ht(P.j)+P.face[1]*1.02;return q.position.set(rt,1.55,tt),q.rotation.y=Math.atan2(P.face[0],P.face[1]),s(q),{...P,mesh:q,use:{x:Ht(P.i)+P.face[0]*1.6,z:Ht(P.j)+P.face[1]*1.6}}}),i.car=Ap(t),s(i.car.group),i.hemi=s(new vr(4872832,1709072,.55)),i.moonL=s(new br(9085144,.55)),i.moonL.position.set(-60,90,-80),s(i.moonL.target),i.lightSrc=[{col:16763024,base:14,dist:16,decay:1.6,x:43,y:3,z:51,flick:.25,kind:"room"},{col:13168895,base:14,dist:17,decay:1.6,x:66,y:3,z:52,flick:.05,kind:"room"},{col:16767120,base:13,dist:17,decay:1.6,x:22,y:3,z:20,flick:.12,kind:"room"}];let C=new fe({color:16773336});for(let[P,H]of[[43,51],[36,47],[50,55],[66,52],[60,50],[72,56],[22,20],[14,16],[28,24]]){let z=it(Ct(1.4,.06,.3),C,P,3.4-.04,H);z.castShadow=!1}return i.fires.forEach((P,H)=>i.lightSrc.push({col:16742960,base:10,dist:13,decay:1.7,x:P.x,y:1.6,z:P.z,kind:"fire",i:H})),i.lightPool=[0,1,2].map(()=>{let P=new Mr(16777215,0,16,1.6);return P.position.set(0,-50,0),s(P),{light:P,src:null,w:0}}),i.carLight=new nl(16773328,0,30,.55,.5,1.2),s(i.carLight),s(i.carLight.target),i.batched=b1(n,r),i}function S1(n,t,e,i){n.beginPath();let s=i==="smg"?150:i==="pistol"?90:210,r=(t-s)/2,o=e/2-12;n.moveTo(r,o),n.lineTo(r+s*.75,o),n.lineTo(r+s*.75,o-6),n.lineTo(r+s,o-6),n.lineTo(r+s,o+4),n.lineTo(r+s*.72,o+4),n.lineTo(r+s*.72,o+16),n.lineTo(r+s*.48,o+16),i!=="pistol"&&(n.lineTo(r+s*.46,o+40),n.lineTo(r+s*.4,o+40),n.lineTo(r+s*.4,o+18)),n.lineTo(r+s*.3,o+18),n.lineTo(r+s*.24,o+44),n.lineTo(r+s*.15,o+44),n.lineTo(r+s*.2,o+16),i!=="pistol"&&(n.lineTo(r+10,o+26),n.lineTo(r-6,o+30),n.lineTo(r-6,o+2)),n.closePath(),n.stroke(),n.beginPath(),n.moveTo(r+s*.3,o+8),n.lineTo(r+s*.6,o+8),n.stroke()}var ze=Object.assign({q:"auto",sens:1,fov:75,vol:.8,inv:0,fps:0},JSON.parse(localStorage.getItem("ds_set")||"{}")),Wr=()=>localStorage.setItem("ds_set",JSON.stringify(ze)),Hi=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;Hi&&Is("touch");var Wp=()=>ze.q==="auto"?Hi?"low":"medium":ze.q,Vr=ht("c"),Dn=new Ha({canvas:Vr,antialias:!Hi,powerPreference:"high-performance"});Dn.outputColorSpace=Tn;Dn.toneMapping=Qh;Dn.toneMappingExposure=1.4;Dn.autoClear=!1;var Ie=new ws;Ie.background=new jt(658710);Ie.fog=new Ga(658710,.024);var E1=new yr(Dn),Xp=E1.fromScene(new al,.04).texture,ye=new sn(75,1,.05,300);ye.rotation.order="YXZ";var Bo=new ws,zu=new sn(60,1,.01,10);Bo.add(new vr(11581648,3156e3,1.4));var qp=new br(16769216,1.2);qp.position.set(1,2,1);Bo.add(qp);bu();var Wt=Np(Ie,Xp,Wp());Wt.hemi.intensity=1.3;Wt.moonL.intensity=1.2;Ie.environment=Xp;Ie.environmentIntensity=.22;var Dl=1;function ju(){let n=Wp(),t=Math.min(devicePixelRatio||1,n==="high"?2:n==="medium"?1.5:1.25);if(Dn.setPixelRatio(t*Dl),Dn.shadowMap.enabled=n!=="low",Wt.moonL.castShadow=n!=="low",n!=="low"){let e=n==="high"?2048:1024;Wt.moonL.shadow.mapSize.set(e,e);let i=Wt.moonL.shadow.camera;i.left=i.bottom=-30,i.right=i.top=30,i.near=1,i.far=250,i.updateProjectionMatrix()}up(n==="low"?2:n==="medium"?4:8),ht("qInfo").textContent="Graphics now: "+n.toUpperCase()+(ze.q==="auto"?" (auto picks LOW on phones, MED on computers)":"")}function Yp(){let n=innerWidth,t=innerHeight;Dn.setSize(n,t,!1),Vr.style.width=n+"px",Vr.style.height=t+"px",ye.aspect=zu.aspect=n/t,Zp(),zu.updateProjectionMatrix()}function Zp(){let n=ye.aspect;ye.userData.fov=n<1?Math.min(100,ze.fov*1.3):ze.fov}addEventListener("resize",Yp);var El=[];function us(n,t,e,i,s,r,o,a={}){let l=new fn({map:n,color:t,transparent:!0,depthWrite:!1,blending:a.add?xn:ji,opacity:a.op??1}),c=new an(l);return c.position.set(e,i,s),c.scale.set(r,r,1),Ie.add(c),El.push({sp:c,life:o,t:0,grow:a.grow||0,vy:a.vy||0,op:a.op??1}),c}function $p(n){for(let t=El.length-1;t>=0;t--){let e=El[t];e.t+=n;let i=e.t/e.life;e.sp.position.y+=e.vy*n;let s=e.sp.scale.x+e.grow*n;e.sp.scale.set(s,s,1),e.sp.material.opacity=e.op*(1-i),i>=1&&(Ie.remove(e.sp),e.sp.material.dispose(),El.splice(t,1))}}var wl=0;function ki(n){let t=ht("toast");t.textContent=n,t.classList.add("show"),wl=2.6}var Tl=0;function zi(n,t=3){let e=ht("center");e.innerHTML=n,e.classList.add("show"),Tl=t}var w1=n=>$.device==="pad"?{use:"SQUARE",build:"CIRCLE"}[n]||n:$.device==="touch"?{use:"USE",build:"BUILD"}[n]||n:{use:"F",build:"B"}[n]||n,Os=new I,vl=new I,V={state:"title",t:0,round:0,toSpawn:0,spawnT:0,between:!1,betweenT:0,kills:0,heads:0,points:0,power:!1,flowT:0,flowDirty:!0,lastFlowK:-1,insta:0,dbl:0,pupsRound:0,repairPts:0,god:!1,mapDirty:!0},T={x:0,z:0,y:0,vy:0,yaw:0,pitch:0,hp:100,maxHp:100,lastHit:-9,guns:[],cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,perks:new Set,view:"fp",bob:0,ads:0,recoil:0,repT:0,driving:!1,semi:!1,heartT:0,speed:0},Te=[],hs=[],zr=[],Hr=[],yi=[],Al=lp.filter(([n,t])=>pe[oe(n,t)]===0),Br={x:Ht(21)+1,z:Ht(25)+1},si=new zt;Bo.add(si);var T1=Tp();si.add(T1.group);var ri=null;function Gr(){ri&&si.remove(ri.group);let n=T.guns[T.cur];ri=n?Ns(n.key,n.pap):null,ri&&si.add(ri.group),Uo&&Bi.hand.remove(Uo.group),Uo=n?Ns(n.key,n.pap):null,Uo&&Bi.hand.add(Uo.group),Ze()}var Bi=Ep();Ie.add(Bi.wrap);Bi.wrap.visible=!1;var Uo=null,Hu=Hi?9:14,Op=Hi?8:14,Ml=[];function A1(n){let t=ye.position.x,e=ye.position.z,i=Wt.lightSrc,s=Wt.lightPool;Ml.length=0;for(let o of i)o.d=Math.hypot(o.x-t,o.z-e),Ml.push(o);Ml.sort((o,a)=>o.d-a.d);let r=Ml.slice(0,s.length);for(let o of s)o.src&&!r.includes(o.src)&&(o.w-=n*3,o.w<=0&&(o.w=0,o.src=null));for(let o of r)if(!s.some(a=>a.src===o)){let a=s.find(l=>!l.src);if(a){a.src=o,a.w=0;let l=a.light;l.color.setHex(o.col),l.distance=o.dist,l.decay=o.decay,l.position.set(o.x,o.y,o.z)}}for(let o of s){let a=o.src,l=o.light;if(!a){l.intensity=0;continue}r.includes(a)&&(o.w=Math.min(1,o.w+n*3));let c=a.kind==="fire"?(9+Math.sin(V.t*11+a.i*3)*1.5+Ce())/10:1-(Ce()<a.flick*.05?.8:0);l.intensity=a.base*c*o.w}}var Fp=-1;function Fs(n,t){!t&&V.dbl>0&&(n*=2),V.points+=t?-n:n;let e=document.createElement("div");e.className="pop"+(t?" neg":""),e.textContent=(t?"-":"+")+n,e.style.bottom=20+Ce()*30+"px",ht("points").appendChild(e),setTimeout(()=>e.remove(),1e3)}function R1(){let n=V.round,t=ht("round");if(n<=5){let e='<span class="tally">';for(let i=0;i<Math.min(n,4);i++)e+="<i></i>";n===5&&(e+='<i class="x"></i>'),t.innerHTML=e+"</span>"}else t.textContent=n}function Ze(){Fp!==V.points&&(ht("pts").textContent=V.points,Fp=V.points);let n=T.guns[T.cur];n&&(ht("gunName").textContent=n.name,ht("gunName").className=n.pap?"pap":"",ht("clip").innerHTML=n.clip+"<small> / "+n.reserve+"</small>",ht("clip").className=n.clip<=n.mag*.25?"low":""),ht("nades").textContent="Grenades: "+T.nades,ht("perks").innerHTML=[...T.perks].map(e=>{let i=Wt.perks.find(s=>s.key===e);return`<b style="background:${i.col};color:${i.col}"><span style="color:#fff">${i.name[0]}</span></b>`}).join(""),ht("powerups").innerHTML=(V.insta>0?`<div class="${V.insta<5?"blink":""}">INSTA-KILL<br>${Math.ceil(V.insta)}</div>`:"")+(V.dbl>0?`<div class="${V.dbl<5?"blink":""}">DOUBLE POINTS<br>${Math.ceil(V.dbl)}</div>`:"");let t=V.toSpawn+Te.filter(e=>!e.dead).length;ht("zcount").textContent=V.between?"Next round soon":"Zombies left: "+t}var Kp=ht("minimap"),je=Kp.getContext("2d"),Rl=document.createElement("canvas"),Ln=3.6;function C1(){Rl.width=88*Ln,Rl.height=80*Ln;let n=Rl.getContext("2d");for(let t=0;t<40;t++)for(let e=0;e<44;e++){let i=pe[oe(e,t)];n.fillStyle=i===0?"#20261c":i===1?Ao.has(Di[oe(e,t)])?"#6a6458":"#3a3630":i===3?"#c09040":i===4?"#d0b050":i===7||i===8?"#a07040":i===9?"#805030":i===6?"#2c3028":"#9a9a9a",n.fillRect(e*2*Ln,t*2*Ln,2*Ln+.5,2*Ln+.5)}V.mapDirty=!1}function P1(){V.mapDirty&&C1();let n=Kp.width,t=T.driving?_t.x:T.x,e=T.driving?_t.z:T.z,i=T.driving?_t.h:T.yaw;je.clearRect(0,0,n,n),je.save(),je.translate(n/2,n/2),je.rotate(i),je.drawImage(Rl,-t*Ln,-e*Ln),je.fillStyle="#ff3030";for(let r of Te)r.dead||(je.beginPath(),je.arc((r.x-t)*Ln,(r.z-e)*Ln,4,0,7),je.fill());je.fillStyle="#5ab0ff";let s=Wt.boxSpots[Pt.spot].pos;je.fillRect((s.x-t)*Ln-5,(s.z-e)*Ln-5,10,10),je.fillStyle="#ffd040",je.fillRect((_t.x-t)*Ln-4,(_t.z-e)*Ln-7,8,14),je.restore(),je.fillStyle="#fff",je.beginPath(),je.moveTo(n/2,n/2-10),je.lineTo(n/2-7,n/2+8),je.lineTo(n/2+7,n/2+8),je.fill()}var Pt={spot:0,state:"idle",t:0,key:null,uses:0,cycleT:0,model:null};function Qu(){let n=Wt.boxSpots[Pt.spot];Wt.box.group.position.set(n.pos.x,0,n.pos.z),Wt.box.group.rotation.y=n.rot,Wt.boxSpots.forEach((t,e)=>t.crate.visible=e!==Pt.spot)}var _t={x:0,z:0,h:0,v:0,steer:0};function I1(){for(let[n,t]of[[27,12],[24,11],[30,14],[20,16],[32,8]]){let e=!0;for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++)(!zn(n+i,t+s)||pe[oe(n+i,t+s)]!==0)&&(e=!1);if(e)return{x:Ht(n),z:Ht(t)}}return{x:Ht(27),z:Ht(12)}}var Gu=I1(),Gn={t:0},Du=Dp(),Vu=[{kind:"wall",name:"Wall",cost:250,hp:900,tile:7},{kind:"door",name:"Door",cost:400,hp:700,tile:8},{kind:"spikes",name:"Spikes",cost:300,hp:1600,tile:9}],ae={on:!1,sel:0,rot:0,ghost:null,gi:-1,gj:-1,ok:!1},Oo=[];function L1(){let n=Oo.length,t=new zt,e=new st(new Je(.03,.05,1.5,6),new Xe({color:5916210,roughness:.9}));e.position.y=.75,t.add(e);let i=new Xe({map:Pr.zface?Pr.zface("#6f5f52"):null,color:10127994,roughness:.8}),s=new st(new Re(.2,14,10),i);s.scale.set(1,1.15,1.05),s.position.y=1.62,s.rotation.y=Math.PI,t.add(s);for(let a of[-.07,.07]){let l=new st(new Re(.03,6,4),new fe({color:16724e3}));l.position.set(a,1.66,.18),t.add(l)}let r=new an(new fn({map:Ut.label("BOSS "+(n+1)+" - RD "+V.round,"rgba(0,0,0,0.5)","#ffcc66",512,96,"bold 44px Arial"),transparent:!0,depthWrite:!1}));r.scale.set(1,.19,1),r.position.y=2,t.add(r);let o=Bp[n%Bp.length];t.position.set(o.x,0,o.z),Ie.add(t),Oo.push(t),ki("Boss trophy added near the start ("+Oo.length+")")}function Jp(){for(let n of Oo)Ie.remove(n);Oo.length=0;for(let n of Te)Ie.remove(n.m.root);Te.length=0;for(let n of hs)Ie.remove(n.g);hs.length=0;for(let n of zr)Ie.remove(n.sp);zr.length=0;for(let n of Hr)Ie.remove(n.m);Hr.length=0;for(let n of yi){Ie.remove(n.g);for(let[t,e]of[[n.i,n.j]])pe[oe(t,e)]=n.under,Zn[oe(t,e)]=-1}yi.length=0}function D1(){Jp(),bu();for(let n of jp)pe[n]=6;for(let n of Ui)Wt.doorMeshes[n.id].visible=!0;for(let n of bn)n.planks=6,Wt.planks[n.id].list.forEach(t=>t.visible=!0);Object.assign(V,{t:0,round:0,toSpawn:0,between:!1,kills:0,heads:0,points:500,power:!1,flowDirty:!0,insta:0,dbl:0,mapDirty:!0,downs:0,god:!1}),Object.assign(T,{x:Br.x,z:Br.z,y:0,vy:0,yaw:Math.PI,pitch:0,hp:100,maxHp:100,lastHit:-9,cur:0,reloadT:0,fireT:0,knifeT:0,swapT:0,nades:2,view:"fp",ads:0,driving:!1}),T.perks.clear(),T.guns=[xl("pistol")],Gr(),Qp(!1),Pt.spot=0,Pt.state="idle",Pt.uses=0,Pt.model&&(Wt.box.gunSlot.remove(Pt.model),Pt.model=null),Wt.box.lid.rotation.x=0,Qu(),Object.assign(_t,{x:Gu.x,z:Gu.z,h:0,v:0}),Ii(!1),ae.on=!1,document.body.classList.remove("building","driving"),ht("buildbar").classList.add("hidden"),ht("carhud").classList.add("hidden"),tf(1),Ze()}var jp=[];for(let n=0;n<pe.length;n++)pe[n]===6&&jp.push(n);var Bp=(()=>{let n=[],t=ke(Br.x),e=ke(Br.z),i=[];for(let s=-5;s<=5;s++)for(let r=-5;r<=5;r++){let o=t+s,a=e+r;if(!zn(o,a)||Math.hypot(s,r)<1.5)continue;let l=!0;for(let c=-1;c<=1&&l;c++)for(let h=-1;h<=1;h++)if(!zn(o+c,a+h)||pe[oe(o+c,a+h)]!==1){l=!1;break}l&&i.push([Math.hypot(s,r),o,a])}i.sort((s,r)=>s[0]-r[0]);for(let[,s,r]of i.slice(0,6))n.push({x:Ht(s),z:Ht(r)});return n.length||n.push({x:Br.x+1,z:Br.z+1}),n})();setTimeout(()=>{try{Au()}catch(n){console.warn(n)}},50);function Qp(n){V.power=n,Wt.sw.lever.rotation.x=n?-.6:.6,Wt.sw.lamp.material.color.set(n?3211072:4460817);for(let t of Wt.perks){let e=n||!t.needsPower;t.m.face.material?.forEach?.(()=>{}),t.m.bulbM.color.set(e?t.col:2236962),t.m.glow.material.opacity=e?.35:0;let i=Array.isArray(t.m.face)?null:t.m.face;i&&(i.emissiveIntensity=e?.8:0)}Wt.forge.glowM.emissiveIntensity=n?1.4:0,Wt.forge.glow.material.opacity=n?.4:0}var t0=n=>n<=4?[6,8,13,18][n-1]:Math.min(24+(n-5)*5,220),kp=n=>n<10?150+100*(n-1):Math.round(950*Math.pow(1.1,n-9)),zp=()=>Hi?16:24;function tf(n){V.round=n,V.toSpawn=t0(n),V.bosses=n%10===0?Math.min(3,n/10):0,V.screamAdds=0,V.spawnT=n===1?3:1.5,V.between=!1,V.pupsRound=0,V.repairPts=0,n>1?(T.nades=Math.min(4,T.nades+2),te.round(!0),zi("ROUND "+n+(n===100?"<small>THE LAST ONE</small>":""),3)):zi("DEAD SHIFT<small>SURVIVE THE NIGHT</small>",3.5),R1(),ht("round").classList.add("flash"),setTimeout(()=>ht("round").classList.remove("flash"),1200),Ze()}function U1(n){if(V.between){V.betweenT-=n,V.betweenT<=0&&tf(V.round+1);return}let t=Te.filter(e=>!e.dead).length;V.spawnT-=n,V.bosses>0&&V.toSpawn<=t0(V.round)*(.75-.25*(Math.min(3,V.round/10)-V.bosses))&&t<zp()+1&&(V.bosses--,Wu("boss"),Ze()),V.toSpawn>0&&t<zp()&&V.spawnT<=0&&(Wu(),V.toSpawn--,V.spawnT=Math.max(.35,2-V.round*.08)*(.6+Ce()*.8),Ze()),V.toSpawn===0&&t===0&&!(V.bosses>0)&&(V.between=!0,V.betweenT=8,te.round(!1),zi(V.round===100?"YOU SURVIVED ROUND 100<small>KEEP GOING IF YOU DARE</small>":"ROUND "+V.round+" SURVIVED",4),Ze())}function Wu(n){let t=V.round,e=Ce(),i="walker";t>=5&&e<.05?i="screamer":t>=6&&e<.15?i="toxic":t>=4&&e<.28?i="fat":t>=3&&e<.46&&(i="runner"),n&&(i=n);let s=T.driving?_t.x:T.x,r=T.driving?_t.z:T.z,o=Al.filter(([g,y])=>{let p=Math.hypot(Ht(g)-s,Ht(y)-r);return p>12&&p<50});o.length||(o=Al.filter(([g,y])=>Math.hypot(Ht(g)-s,Ht(y)-r)>8)),o.length||(o=Al);let[a,l]=Us(o),c=Ht(a)+(Ce()-.5)*1.4,h=Ht(l)+(Ce()-.5)*1.4,u=gl(i),f=kp(t),d=Math.min(1+t*.1,1.9)*(.85+Ce()*.3);t>=8&&i==="walker"&&Ce()<Math.min(.6,(t-7)*.08)&&(d=2.8+Ce()*.6),i==="runner"&&(d=3.9+Math.min(t*.04,1.2),f*=.75),i==="fat"&&(d=Math.min(.9+t*.05,1.6),f*=2.3),i==="toxic"&&(d=1.7,f*=.9),i==="screamer"&&(d=2.3,f*=.7),i==="boss"&&(d=1.6+Math.min(t*.01,.6),f=kp(t)*14+4e3,c=Ht(a),h=Ht(l),te.zboss(Math.hypot(c-s,h-r),0),zi("BOSS ZOMBIE<small>IT HEARD YOU</small>",3),Tr(.8,.8,500)),u.root.position.set(c,-1.8,h),Ie.add(u.root),Te.push({m:u,type:i,x:c,z:h,hp:f,maxHp:f,speed:d,state:"rise",t:0,atk:0,atkCd:0,dead:!1,deadT:0,yaw:Ce()*6.28,rip:0,stun:0,rage:0,screamCd:4+Ce()*4,screamT:0,groanT:2+Ce()*6,best:1e9,stuckT:0,cur:0,head:!1})}function Ul(n,t,e,i){let s=Math.hypot(e-n,i-t);return dl(n,t,e-n,i-t,s,(r,o)=>Rr(r,o)||r===3)>=s-.01}var N1=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function e0(n,t,e,i){let s=n.m;if(n.dead){n.deadT+=t;let L=Math.min(1,n.deadT/.6);s.body.rotation.x=-L*Math.PI/2*n.fallDir,s.body.position.y=-L*.75*(s.scale||1)+Math.sin(L*Math.PI)*.2;let W=Hu;n.deadT>W&&(s.root.position.y=-(n.deadT-W)*.8),n.deadT>W+1.6&&(Ie.remove(s.root),Te.splice(Te.indexOf(n),1));return}if(n.state==="rise"){n.t+=t;let L=Math.min(1,n.t/1.4);s.root.position.y=-1.8*(1-L),s.root.rotation.y=n.yaw,Lr(s,V.t,0,.6,!0),L>=1&&(n.state="move");return}let r=e-n.x,o=i-n.z,a=Math.hypot(r,o);if(n.stun>0){n.stun-=t,s.root.position.set(n.x,0,n.z),Lr(s,V.t,0,0,!1);return}if(n.rage>0&&(n.rage-=t),n.type==="screamer"){if(n.screamCd-=t,n.screamT>0){n.screamT-=t,s.scream=Math.min(1,s.scream+t*4),n.yaw+=Po(n.yaw,Math.atan2(r,o))*Math.min(1,t*6),s.root.position.set(n.x,0,n.z),s.root.rotation.y=n.yaw,Lr(s,V.t,0,0,!1),n.screamT<=0&&(s.scream=0,O1(n));return}if(n.screamCd<=0&&a<24&&a>3&&Ul(n.x,n.z,e,i)){n.screamT=1.5,n.screamCd=14+Ce()*6,te.zscream(a,kr(r,o));return}}let l=ke(n.x),c=ke(n.z),h=zn(l,c)?oe(l,c):0,u=e,f=i,d="walk",g=null;if(!(a<8&&Ul(n.x,n.z,e,i))){let L=fi[h],W=-1;for(let[_,M]of N1){let k=l+_,F=c+M;if(!zn(k,F)||_&&M&&(Rr(pe[oe(l+_,c)],oe(l+_,c))||Rr(pe[oe(l,c+M)],oe(l,c+M))||pe[oe(l+_,c)]===3||pe[oe(l,c+M)]===3))continue;let G=oe(k,F);fi[G]<L&&(L=fi[G],W=G)}if(W>=0){let _=pe[W],M=W%44,k=W/44|0;if(u=Ht(M),f=Ht(k),_===3&&bn[Zn[W]].planks>0){let F=bn[Zn[W]];d="window",g=F,u=Ht(F.i)+F.outDir[0]*1.15,f=Ht(F.j)+F.outDir[1]*1.15}else(_===7||_===8)&&(d="piece",g=yi.find(F=>F.k===W))}}let y=n.speed*(n.rage>0?1.35:1),p=pe[h];if(p===3&&(y*=.45),p===9){y*=.5;let L=yi.find(W=>W.k===h);if(n.hp-=160*t*Math.max(1,V.round/6),L&&(L.hp-=12*t,L.hp<=0&&Vp(L)),Ce()<t*2&&te.spike(),n.hp<=0){ef(n,"spike");return}}let m=u-n.x,b=f-n.z,v=Math.hypot(m,b),S=!1;if(d==="window"&&v<.35)S=!0,n.yaw=Math.atan2(-g.outDir[0],-g.outDir[1]),n.rip+=t,n.rip>1.5&&(n.rip=0,g.planks=Math.max(0,g.planks-1),Wt.planks[g.id].list[g.planks].visible=!1,te.plank(),V.flowDirty=!0);else if(d==="piece"&&g&&Math.hypot(g.x-n.x,g.z-n.z)<1.55)S=!0,n.yaw=Math.atan2(g.x-n.x,g.z-n.z),g.hp-=30*t,Ce()<t*1.2&&te.plank(),g.hp<=0&&Vp(g);else if(a<1.25+(n.type==="fat"?.2:n.type==="boss"?.5:0))S=!0,n.yaw=Math.atan2(r,o);else if(v>.01){let L=Math.min(v,y*t);n.x+=m/v*L,n.z+=b/v*L,n.yaw+=Po(n.yaw,Math.atan2(m,b))*Math.min(1,t*8)}n.atkCd-=t;let D=n.type==="fat"?.2:n.type==="boss"?.6:0;if(a<1.3+D&&n.atkCd<=0&&n.atk===0&&(n.atk=.001,Ce()<.6&&te.zattack(n.type,a,kr(r,o))),n.atk>0){let L=n.atk;n.atk+=t/(n.type==="boss"?1:.8),L<.5&&n.atk>=.5&&a<1.6+D&&T.y<1.2&&Fl(n.type==="boss"?T.driving?30:60:T.driving?18:34),n.atk>=1&&(n.atk=0,n.atkCd=.4)}let A={x:n.x,z:n.z};Ds(A,.3,Rr),n.x=A.x,n.z=A.z;let R=fi[h];if(R<n.best-.5?(n.best=R,n.stuckT=0):n.stuckT+=t,n.stuckT>22&&a>18){let[L,W]=Us(Al);n.x=Ht(L),n.z=Ht(W),n.best=1e9,n.stuckT=0,n.state="rise",n.t=0}s.root.position.set(n.x,0,n.z),s.root.rotation.y=n.yaw,n.cur=Ni(n.cur,S?0:y,Math.min(1,t*6)),Lr(s,V.t,n.cur,Math.max(S?.5+.5*Math.sin(V.t*6):0,n.atk>0?Math.sin(n.atk*Math.PI):0),p===3),n.groanT-=t,n.groanT<=0&&(n.groanT=3+Ce()*7,a<30&&(n.type==="boss"&&Ce()<.4?te.zboss(a,kr(r,o)):te.zgroan(n.type,a,kr(r,o))))}function kr(n,t){let e=Po(T.yaw,Math.atan2(-n,-t));return Sn(-Math.sin(e),-1,1)}function O1(n){for(let t of Te)!t.dead&&t!==n&&Math.hypot(t.x-n.x,t.z-n.z)<30&&(t.rage=9);V.screamAdds<8&&(V.toSpawn+=2,V.screamAdds+=2),ki("A screamer called the horde"),Ze()}function F1(){for(let n=0;n<Te.length;n++){let t=Te[n];if(!(t.dead||t.state==="rise")){for(let e=n+1;e<Te.length;e++){let i=Te[e];if(i.dead||i.state==="rise")continue;let s=i.x-t.x,r=i.z-t.z,o=Math.hypot(s,r);if(o<.62&&o>1e-4){let a=(.62-o)/2;t.x-=s/o*a,t.z-=r/o*a,i.x+=s/o*a,i.z+=r/o*a}}if(!T.driving){let e=T.x-t.x,i=T.z-t.z,s=Math.hypot(e,i);s<.7&&s>1e-4&&(t.x-=e/s*(.7-s),t.z-=i/s*(.7-s))}}}}function Bs(n,t,e,i){n.dead||(V.insta>0&&n.type!=="boss"&&(t=1e12),n.hp-=t,te.hit(e),n.hp<=0?ef(n,i,e):(Fs(10),n0(!1),Ce()<.2&&te.zhurt(n.type,Math.hypot(n.x-T.x,n.z-T.z),kr(n.x-T.x,n.z-T.z))))}function ef(n,t,e){n.dead=!0,n.deadT=0,n.fallDir=Ce()<.5?1:-1;{let i=Te.filter(s=>s.dead&&s!==n&&s.deadT<Hu);if(i.length>=Op){i.sort((s,r)=>r.deadT-s.deadT);for(let s=0;s<=i.length-Op;s++)i[s].deadT=Hu}}if(V.kills++,e&&V.heads++,Fs(n.type==="boss"?1500:t==="knife"?130:e?100:t==="nuke"?0:60),n0(!0),te.kill(),(t!=="nuke"||Ce()<.2)&&te.zdeath(n.type,Math.hypot(n.x-T.x,n.z-T.z),kr(n.x-T.x,n.z-T.z)),n.type==="boss"&&(L1(),Xu(n.x,n.z,"max")),us(Ut.blood(),16777215,n.x,1.1,n.z,.9,.5,{grow:1.5}),n.type==="toxic"){te.toxic();let i=us(Ut.puff(),6356800,n.x,1,n.z,3.5,6,{op:.55,grow:.4});zr.push({x:n.x,z:n.z,t:6})}t!=="nuke"&&V.pupsRound<4&&Ce()<.035&&Xu(n.x,n.z),Ze()}var Cl=0;function n0(n){let t=ht("hit");t.className=n?"kill":"",t.style.opacity=1,Cl=.18,n||te.hitmarker()}var Pl={max:["MAX AMMO",4259680],insta:["INSTA-KILL",16728128],dbl:["DOUBLE POINTS",16764992],nuke:["NUKE",16744480],carp:["CARPENTER",4235519]};function Xu(n,t,e){e=e||Us(Object.keys(Pl)),V.pupsRound++;let i=new zt;i.position.set(n,1,t);let s=new an(new fn({map:Ut.glow(),color:Pl[e][1],transparent:!0,blending:xn,depthWrite:!1}));s.scale.set(1.8,1.8,1),i.add(s);let r=new an(new fn({map:Ut.label(Pl[e][0],"rgba(0,0,0,0)","#fff",512,96,"bold 52px Arial Black, Arial"),transparent:!0,depthWrite:!1}));r.scale.set(1.9,.36,1),r.position.y=.75,i.add(r),Ie.add(i),hs.push({g:i,kind:e,x:n,z:t,t:26})}function B1(n){if(te.powerup(n.kind),zi(Pl[n.kind][0],2),n.kind==="max"){for(let t of T.guns)t.reserve=t.maxReserve;T.nades=Math.max(T.nades,4)}if(n.kind==="insta"&&(V.insta=30),n.kind==="dbl"&&(V.dbl=30),n.kind==="nuke"){ht("flash").style.opacity=1,Il=1;for(let t of Te)!t.dead&&t.type!=="boss"&&ef(t,"nuke");Fs(400),te.boom()}if(n.kind==="carp"){for(let t of bn)t.planks=6,Wt.planks[t.id].list.forEach(e=>e.visible=!0);V.flowDirty=!0,Fs(200)}Ze()}var Il=0;function Fl(n){if(!(V.god||V.state!=="play")&&(T.hp-=n,T.lastHit=V.t,te.hurt(),Tr(.8,.5,200),ht("dmg").style.opacity=1,T.hp<=0))if(T.perks.has("revive")){T.perks.delete("revive"),T.hp=T.maxHp,zi("SECOND WIND<small>YOU GOT BACK UP</small>",2.5);for(let t of Te)!t.dead&&Math.hypot(t.x-T.x,t.z-T.z)<5&&(t.x+=(t.x-T.x)*.8,t.z+=(t.z-T.z)*.8);Ze()}else i0()}function i0(){V.state="over",T.hp=0,Ii(!1),document.pointerLockElement&&document.exitPointerLock();let n=Math.max(+localStorage.getItem("ds_best")||0,V.round);localStorage.setItem("ds_best",n),ht("stats").innerHTML=`You made it to <b>round ${V.round}</b><br>Kills: <b>${V.kills}</b> &nbsp; Headshots: <b>${V.heads}</b><br>Points left: <b>${V.points}</b><br>Best round: <b>${n}</b>`,setTimeout(()=>{ht("hud").classList.add("hidden"),ht("touch").classList.remove("live"),ht("over").classList.remove("hidden")},1200),zi("YOU DIED",2)}function Xr(){return T.guns[T.cur]}function qu(){let n=Xr();!n||T.reloadT>0||n.clip>=n.mag||n.reserve<=0||(T.reloadT=n.def.reload*(T.perks.has("rapid")?.5:1),T.reloadMax=T.reloadT,te.reload(0))}function Nl(n,t=!1){let e=T.guns.findIndex(s=>s.key===n),i=xl(n,t);e>=0?(T.guns[e]=i,T.cur=e):T.guns.length<2?(T.guns.push(i),T.cur=T.guns.length-1):T.guns[T.cur]=i,T.reloadT=0,T.swapT=.4,Gr()}var Uu=new I,Nu=new I;function s0(){let n=Xr();if(!n)return;n.clip--,T.fireT=60/(n.rpm*(T.perks.has("double")?1.33:1)),T.recoil=Math.min(1,T.recoil+.35);let t=n.def;te.shot(t.sound[0],t.sound[1],!!t.wonder,t.kind),Tr(.3,.6,60),ye.getWorldPosition(Uu);let e=t.pellets||1;for(let i=0;i<e;i++){let s=t.spread*(T.ads>.5?.35:1)*(T.speed>1?1.6:1);Nu.set((Ce()-.5)*2*s,(Ce()-.5)*2*s,-1).normalize().applyQuaternion(ye.quaternion),t.wave||z1(Uu,Nu,n)}t.wave&&k1(Uu,Nu,n),T.pitch=Sn(T.pitch+.006+t.sound[1]*.01,-1.45,1.45),Yu=.05,Ze(),n.clip===0&&qu()}var Yu=0,Fo=new an(new fn({map:Ut.glow(),color:16760944,transparent:!0,blending:xn,depthWrite:!1}));Fo.scale.set(.25,.25,1);Bo.add(Fo);var Ou=new I,Fu=new I;function k1(n,t,e){let i=e.def.wave*(e.pap?1.3:1),s=t.x,r=t.z,o=Math.hypot(s,r)||1;for(let a=1;a<=5;a++){let l=a*i/5.5;us(Ut.glow(),6342911,n.x+s/o*l,1.1,n.z+r/o*l,.8+a*.7,.3+a*.05,{add:!0,grow:3})}for(let a of Te){if(a.dead||a.state==="rise")continue;let l=a.x-n.x,c=a.z-n.z,h=Math.hypot(l,c);if(h>i||h<.01||(l*s+c*r)/(h*o)<.78||!Ul(n.x,n.z,a.x,a.z))continue;let u=1-h/(i*1.15),f=(a.type==="boss"?.6:a.type==="fat"?1.6:3.2)*u,d={x:a.x+l/h*f,z:a.z+c/h*f};Ds(d,.3,Rr),a.x=d.x,a.z=d.z,a.stun=.8*u,Bs(a,e.dmg*(.4+.6*u),!1,"gun")}}function z1(n,t,e){let i=Math.hypot(t.x,t.z),s=150;i>1e-4&&(s=dl(n.x,n.z,t.x,t.z,150*i,u=>op(u))/i),t.y<-1e-4&&(s=Math.min(s,-n.y/t.y)),t.y>1e-4&&(s=Math.min(s,(3.4-n.y)/t.y));let r=[];for(let u of Te){if(u.dead||u.state==="rise"&&u.t<.7||Math.hypot(u.x-n.x,u.z-n.z)>s+2)continue;let f=u.m.scale||1;u.m.root.updateMatrixWorld(!0),Ou.copy(u.m.headC),u.m.head.localToWorld(Ou),Fu.copy(u.m.bodyC),u.m.spine.localToWorld(Fu);let d=[[Ou,.17*f,!0],[Fu,(u.type==="fat"?.48:.32)*f,!1]],g=1/0,y=!1;for(let[p,m,b]of d){let v=p.x-n.x,S=p.y-n.y,D=p.z-n.z,A=v*t.x+S*t.y+D*t.z;if(A<0)continue;let R=v*v+S*S+D*D-A*A;if(R<m*m){let L=A-Math.sqrt(m*m-R);L<g&&(g=L,y=b)}}if(g===1/0){let p=u.x-n.x,m=u.z-n.z,b=(p*t.x+m*t.z)/Math.max(1e-6,i*i),v=n.x+t.x*b-u.x,S=n.z+t.z*b-u.z,D=n.y+t.y*b;b>0&&v*v+S*S<.09&&D>0&&D<.9*f&&(g=b)}g<s&&r.push([g,u,y])}r.sort((u,f)=>u[0]-f[0]);let o=e.def.pierce||1,a=s;for(let u=0;u<Math.min(o,r.length);u++){let[f,d,g]=r[u];Bs(d,e.dmg*(g?e.def.head:1)*Math.pow(.75,u),g,"gun"),us(Ut.blood(),16777215,n.x+t.x*f,n.y+t.y*f,n.z+t.z*f,.4,.35,{grow:1}),u===o-1&&(a=f)}let l=n.x+t.x*a,c=n.y+t.y*a,h=n.z+t.z*a;if(e.def.splash){us(Ut.glow(),5308272,l,c,h,2.5,.4,{add:!0,grow:4});for(let u of Te)!u.dead&&Math.hypot(u.x-l,u.z-h)<e.def.splash&&Bs(u,e.dmg,!1,"gun")}else r.length||us(Ut.puff(),10064e3,l,c,h,.25,.4,{grow:.8})}function H1(){if(T.knifeT>0)return;T.knifeT=.5,te.knife();let n=null,t=1.9;for(let e of Te){if(e.dead||e.state==="rise")continue;let i=e.x-T.x,s=e.z-T.z,r=Math.hypot(i,s),o=Math.abs(Po(Math.atan2(-i,-s),T.yaw));r<t&&o<1&&(t=r,n=e)}n&&Bs(n,150+V.round*25,!1,"knife")}function G1(){if(T.nades<=0)return;T.nades--,Ze();let n=new st(new Re(.08,8,6),new Xe({color:3820074,roughness:.6}));Ie.add(n),ye.getWorldDirection(Os),ye.getWorldPosition(vl),Hr.push({m:n,x:vl.x+Os.x*.5,y:vl.y,z:vl.z+Os.z*.5,vx:Os.x*14,vy:Os.y*14+3,vz:Os.z*14,t:2.2})}function V1(n){for(let t=Hr.length-1;t>=0;t--){let e=Hr[t];e.t-=n,e.vy-=18*n;let i=e.x+e.vx*n,s=e.z+e.vz*n,r=pe[oe(Sn(ke(i),0,43),Sn(ke(s),0,39))];if(Co(r)||r===3?(e.vx*=-.4,e.vz*=-.4):(e.x=i,e.z=s),e.y+=e.vy*n,e.y<.08&&(e.y=.08,e.vy*=-.35,e.vx*=.7,e.vz*=.7),e.m.position.set(e.x,e.y,e.z),e.t<=0){Ie.remove(e.m),Hr.splice(t,1),te.boom(),Tr(1,1,300),us(Ut.glow(),16752704,e.x,1,e.z,3,.4,{add:!0,grow:10}),us(Ut.puff(),5263440,e.x,1.2,e.z,2,1.6,{grow:3,vy:.8,op:.8});for(let a of Te){if(a.dead)continue;let l=Math.hypot(a.x-e.x,a.z-e.z);l<5.5&&Bs(a,(900+V.round*120)*(1-l/6),!1,"nade")}let o=Math.hypot(T.x-e.x,T.z-e.z);o<3.5&&!T.driving&&Fl(25*(1-o/3.5))}}}function cs(n,t){return Math.hypot(n.x-T.x,n.z-T.z)<t}function Zu(n){ht("prompt").innerHTML=n}function Fr(n){return V.points<n?(te.deny(),ki("Not enough points"),!1):(Fs(n,!0),te.buy(),Ze(),!0)}var mi=()=>`<span class="k">${w1("use")}</span>`;function W1(n){let t="",e=Mn("use"),i=$.use;if(T.driving){Zu(mi()+" Get out"),e&&K1();return}let s=!1;for(let r of bn){let o={x:Ht(r.i)-r.outDir[0]*1.1,z:Ht(r.j)-r.outDir[1]*1.1};if(r.planks<6&&cs(o,1.6)){t="Hold "+mi()+" to rebuild the barrier",i&&(s=!0,T.repT+=n,T.repT>.7&&(T.repT=0,Wt.planks[r.id].list[r.planks].visible=!0,r.planks++,te.nail(),V.flowDirty=!0,V.repairPts<500&&(Fs(10),V.repairPts+=10),Ze()));break}}if(s||(T.repT=0),!t)for(let r of Ui){if(r.open)continue;let o=0,a=0;for(let[l,c]of r.tiles)o+=Ht(l),a+=Ht(c);if(cs({x:o/r.tiles.length,z:a/r.tiles.length},2.6)){t=mi()+" Open door to "+r.label+" ["+r.cost+"]",e&&Fr(r.cost)&&r0(r);break}}if(!t){for(let r of Wt.wallbuys)if(cs(r.use,1.6)){let o=T.guns.find(l=>l.key===r.key),a=o?o.pap?4500:Math.round(r.cost/2):r.cost;t=mi()+(o?" Buy ammo for "+o.name:" Buy "+Oi[r.key].name)+" ["+a+"]",e&&Fr(a)&&(o?(o.reserve=o.maxReserve,o.clip=o.mag,Ze()):Nl(r.key));break}}if(!t){for(let r of Wt.perks)if(cs(r.use,1.7)){T.perks.has(r.key)?t=r.name+": you have it":r.needsPower&&!V.power?t=r.name+": turn on the power first":(t=mi()+" "+r.name+" ("+r.desc+") ["+r.cost+"]",e&&Fr(r.cost)&&(T.perks.add(r.key),te.perk(),r.key==="tank"&&(T.maxHp=250,T.hp=250),ki(r.name+": "+r.desc),Ze()));break}}if(!t&&!V.power&&cs(Wt.swUse,1.8)&&(t=mi()+" Turn on the power",e&&(Qp(!0),te.power(),zi("POWER ON",2.5))),!t&&cs(Wt.forgeUse,2)){let r=Xr();if(!V.power)t="The Forge: turn on the power first";else if(Gn.t>0)t="The Forge is working...";else if(!r||r.pap)t="The Forge: this gun is already upgraded";else if(t=mi()+" Upgrade "+r.name+" [5000]",e&&Fr(5e3)){Gn.t=2.5;let o=r.key;T.guns[T.cur]=xl(o,!0),Gr(),te.power(),zi(Pu[o]||"UPGRADED",2),Gn.model=Ns(o,!0).group,Gn.model.scale.setScalar(1.8),Wt.forge.slot.add(Gn.model)}}if(!t){let r=Wt.boxSpots[Pt.spot];cs(r.use,2)&&(Pt.state==="idle"?(t=mi()+" Mystery Box [950]",e&&Fr(950)&&X1()):Pt.state==="ready"?(t=mi()+" Take "+Oi[Pt.key].name,e&&(Nl(Pt.key),o0())):t="")}!t&&cs(_t,3.2)&&(t=mi()+" Drive the car",e&&$1()),Zu(t)}function r0(n){n.open=!0;for(let[t,e]of n.tiles)pe[oe(t,e)]=1,Di[oe(t,e)]=n.zone;Ao.add(n.zone),Wt.doorMeshes[n.id].visible=!1,te.door(),V.flowDirty=!0,V.mapDirty=!0,ki(n.label+" opened")}function X1(){Pt.state="rolling",Pt.t=0,Pt.cycleT=0,Pt.uses++,te.box()}function o0(){Pt.state="idle",Pt.model&&(Wt.box.gunSlot.remove(Pt.model),Pt.model=null)}function Hp(n){Pt.model&&Wt.box.gunSlot.remove(Pt.model),Pt.model=Ns(n,!1).group,Pt.model.scale.setScalar(2),Pt.model.rotation.y=Math.PI/2,Wt.box.gunSlot.add(Pt.model)}function q1(n){let t=Wt.box.lid;if(t.rotation.x=Ni(t.rotation.x,Pt.state==="idle"||Pt.state==="moving"?0:-1.2,Math.min(1,n*6)),Wt.box.beam.visible=Pt.state!=="moving",Pt.state==="rolling"){Pt.t+=n,Pt.cycleT-=n;let e=Pt.t/3.2;Pt.model&&(Pt.model.position.y=e*.6),Pt.cycleT<=0&&(Pt.cycleT=.08+e*.15,Hp(Us(Cu.filter(i=>!T.guns.some(s=>s.key===i))))),Pt.t>=3.2&&(Pt.uses>4&&Ce()<.3?(Pt.state="teddy",Pt.t=0,te.teddy(),Fs(950),ki("The box is moving! You got your points back."),Pt.model&&(Wt.box.gunSlot.remove(Pt.model),Pt.model=null)):(Pt.key=Us(Cu.filter(i=>!T.guns.some(s=>s.key===i))),Hp(Pt.key),Pt.model.position.y=.6,Pt.state="ready",Pt.t=0,te.boxReveal()))}else if(Pt.state==="ready")Pt.t+=n,Pt.model&&(Pt.model.position.y=.6-Pt.t/9*.6),Pt.t>9&&o0();else if(Pt.state==="teddy"&&(Pt.t+=n,Wt.box.group.position.y=Math.min(6,Pt.t*Pt.t),Pt.t>2.5)){Wt.box.group.position.y=0;let e=Wt.boxSpots.map((i,s)=>s).filter(i=>i!==Pt.spot);Pt.spot=Us(e),Pt.uses=0,Pt.state="idle",Qu(),ki("The box moved to the "+Wt.boxSpots[Pt.spot].name)}}function a0(){ae.on=!ae.on,document.body.classList.toggle("building",ae.on),ht("buildbar").classList.toggle("hidden",!ae.on),!ae.on&&ae.ghost&&(ae.ghost.visible=!1),l0(),ae.on&&ki("Build mode: aim at the ground, "+($.device==="touch"?"tap FIRE to place, SWAP to change piece":$.device==="pad"?"R2 to place, Triangle to change piece":"click to place, Q to change piece"))}function l0(){ht("buildbar").innerHTML=Vu.map((n,t)=>`<div class="${t===ae.sel?"sel":""}">${n.name}<span>${n.cost}</span></div>`).join("")}var Gp=new fe({color:4259680,transparent:!0,opacity:.35,depthWrite:!1});function Y1(){if(!ae.on)return;Mn("swap")&&(ae.sel=(ae.sel+1)%Vu.length,l0(),ae.ghost&&(Ie.remove(ae.ghost),ae.ghost=null)),Mn("rotate")&&(ae.rot^=1);let n=Vu[ae.sel];ae.ghost||(ae.ghost=new st(_l(n.kind).wood,Gp),Ie.add(ae.ghost));let t=-Math.sin(T.yaw),e=-Math.cos(T.yaw),i=ke(T.x+t*2.4),s=ke(T.z+e*2.4),r=zn(i,s)?oe(i,s):-1,o=r>=0?pe[r]:-1,a=ke(T.x)===i&&ke(T.z)===s;ae.ok=(o===0||o===1)&&!a&&!Te.some(l=>!l.dead&&ke(l.x)===i&&ke(l.z)===s)&&!(Math.abs(Ht(i)-_t.x)<2.6&&Math.abs(Ht(s)-_t.z)<2.6),ae.gi=i,ae.gj=s,ae.ghost.visible=!0,ae.ghost.position.set(Ht(i),0,Ht(s)),ae.ghost.rotation.y=ae.rot?Math.PI/2:0,Gp.color.set(ae.ok&&V.points>=n.cost?4259680:16728112),Zu(n.name+" ["+n.cost+"]"+(ae.ok?"":" - cannot build here")),$.fire&&!T.semi&&(T.semi=!0,ae.ok?Fr(n.cost)&&Z1(n,i,s,ae.rot):te.deny())}function Z1(n,t,e,i){let s=oe(t,e),r=new zt,o=_l(n.kind),a=new st(o.wood,Du.wood);a.castShadow=!0,r.add(a),o.metal&&r.add(new st(o.metal,Du.metal));let l=null;if(n.kind==="door"){l=new zt,l.position.x=-.88;let h=new st(_l("gate").wood,Du.wood);l.add(h),r.add(l)}r.position.set(Ht(t),0,Ht(e)),r.rotation.y=i?Math.PI/2:0,Ie.add(r);let c={k:s,i:t,j:e,x:Ht(t),z:Ht(e),g:r,gate:l,hp:n.hp,kind:n.kind,under:pe[s]};yi.push(c),pe[s]=n.tile,Zn[s]=yi.length-1,te.build(),V.flowDirty=!0,V.mapDirty=!0}function Vp(n){let t=yi.indexOf(n);t<0||(Ie.remove(n.g),pe[n.k]=n.under,Zn[n.k]=-1,yi.splice(t,1),te.crash(.4),V.flowDirty=!0,V.mapDirty=!0)}function $1(){T.driving=!0,te.carDoor(),document.body.classList.add("driving"),ht("carhud").classList.remove("hidden"),ae.on=!1,document.body.classList.remove("building"),ht("buildbar").classList.add("hidden"),ae.ghost&&(ae.ghost.visible=!1),Ii(!0,0)}function K1(){T.driving=!1,te.carDoor(),document.body.classList.remove("driving"),ht("carhud").classList.add("hidden"),Ii(!1),Wt.carLight.intensity=0;for(let n of[1,-1]){let t=_t.x+Math.cos(_t.h)*1.8*n,e=_t.z-Math.sin(_t.h)*1.8*n,i=pe[oe(Sn(ke(t),0,43),Sn(ke(e),0,39))];if(!Co(i)){T.x=t,T.z=e;break}}T.yaw=_t.h,_t.v=0}function c0(n){let t=Wt.car.group;if(T.driving){let e=$.gas-$.brake;_t.steer=Ni(_t.steer,-$.mx,Math.min(1,n*6)),_t.v+=e*(e*_t.v<0?22:11)*n,_t.v*=Math.pow(.55,n),_t.v=Sn(_t.v,-7,24),_t.h+=_t.steer*_t.v*.11*n;let i=_t.x-Math.sin(_t.h)*_t.v*n,s=_t.z-Math.cos(_t.h)*_t.v*n,r={x:i,z:s};Ds(r,1.15,fl)|Ds({x:i-Math.sin(_t.h)*1.3,z:s-Math.cos(_t.h)*1.3},1,fl)|Ds({x:i+Math.sin(_t.h)*1.3,z:s+Math.cos(_t.h)*1.3},1,fl)?(Math.abs(_t.v)>6&&(te.crash(Math.min(1,Math.abs(_t.v)/20)),Tr(1,.6,200)),_t.v*=-.25):(_t.x=r.x,_t.z=r.z);for(let a of Te)if(!(a.dead||a.state==="rise")&&Math.hypot(a.x-_t.x,a.z-_t.z)<1.9)if(Math.abs(_t.v)>5)te.splat(),Bs(a,400+Math.abs(_t.v)*120+V.round*40,!1,"car"),_t.v*=.9;else{let l=a.x-_t.x,c=a.z-_t.z,h=Math.hypot(l,c)||1;a.x=_t.x+l/h*1.9,a.z=_t.z+c/h*1.9}T.x=_t.x,T.z=_t.z,Ii(!0,Math.abs(_t.v)/24),ht("carhud").innerHTML=Math.round(Math.abs(_t.v)*2.237)+" <small>MPH</small>",Wt.carLight.intensity=60,Wt.carLight.position.set(_t.x-Math.sin(_t.h)*2.4,.8,_t.z-Math.cos(_t.h)*2.4),Wt.carLight.target.position.set(_t.x-Math.sin(_t.h)*14,0,_t.z-Math.cos(_t.h)*14)}t.position.set(_t.x,0,_t.z),t.rotation.y=_t.h;for(let e of Wt.car.wheels)e.spin.rotation.z-=_t.v*n/.34,e.front&&(e.w.rotation.y=_t.steer*.5)}var $u=performance.now(),bl=0,Bu=0,ku=0,Sl=0;function h0(n){if(V.t+=n,np(),ip(n),$.sens=ze.sens,$.invertY=!!ze.inv,Mn("pause")){d0();return}if(T.driving||(T.yaw-=$.lx,T.pitch=Sn(T.pitch-$.ly,-1.45,1.45)),Mn("view")&&(T.view=T.view==="fp"?"tp":"fp"),Mn("build")&&!T.driving&&a0(),$.fire||(T.semi=!1),!T.driving){let i=($.sprint||du())&&$.my>.3&&!$.aim&&T.reloadT<=0,s=(i?6.4:4.2)*(T.perks.has("stamina")?1.15:1)*($.aim?.6:1),r=Math.min(1,Math.hypot($.mx,$.my)),o=-Math.sin(T.yaw),a=-Math.cos(T.yaw),l=Math.cos(T.yaw),c=-Math.sin(T.yaw),h=o*$.my+l*$.mx,u=a*$.my+c*$.mx,f=Math.hypot(h,u);if(f>1e-4?(h=h/f*r*s,u=u/f*r*s):h=u=0,V.fly){let g=($.sprint||du()?26:12)*r,y=Math.cos(T.pitch),p=Math.hypot($.mx,$.my)||1,m=$.my/p,b=$.mx/p;T.x+=(o*y*m+l*b)*g*n,T.z+=(a*y*m+c*b)*g*n,T.y+=(Math.sin(T.pitch)*m*g+(($.up||0)-($.down||0))*10)*n,T.x=Sn(T.x,1,87),T.z=Sn(T.z,1,79),T.y=Sn(T.y,0,90),T.vy=0,T.speed=0,T.sprinting=!1}else{let g={x:T.x+h*n,z:T.z+u*n};Ds(g,.35,(y,p)=>Co(y,p)||y===7),T.x=g.x,T.z=g.z,T.speed=Math.hypot(h,u),T.sprinting=i&&T.speed>1,Mn("jump")&&T.y<=0&&(T.vy=4.6),T.vy-=14*n,T.y=Math.max(0,T.y+T.vy*n),T.y===0&&(T.vy=Math.max(0,T.vy)),T.y>0&&T.vy===0&&!V.fly&&(T.vy=-.01)}T.bob+=T.speed*n*1.8;let d=Xr();if(T.fireT-=n,T.knifeT-=n,T.swapT-=n,T.reloadT>0&&(T.reloadT-=n,T.reloadT<=0&&d)){let g=Math.min(d.mag-d.clip,d.reserve);d.clip+=g,d.reserve-=g,te.reload(1),Ze()}ae.on||(Mn("reload")&&qu(),(Mn("swap")||Mn("swapBack"))&&T.guns.length>1&&(T.cur=(T.cur+1)%T.guns.length,T.reloadT=0,T.swapT=.35,Gr()),Mn("slot1")&&T.guns[0]&&(T.cur=0,Gr()),Mn("slot2")&&T.guns[1]&&(T.cur=1,Gr()),Mn("knife")&&H1(),Mn("grenade")&&G1(),$.fire&&d&&T.reloadT<=0&&T.swapT<=0&&T.knifeT<=0&&!T.sprinting&&(d.clip<=0?T.semi||(te.dry(),T.semi=!0,qu()):T.fireT<=0&&(d.def.auto||!T.semi||$.device==="touch")&&(s0(),T.semi=!0))),T.ads=Ni(T.ads,$.aim&&!T.sprinting&&T.reloadT<=0&&!ae.on?1:0,Math.min(1,n*12)),Y1()}T.recoil=Math.max(0,T.recoil-n*4),W1(n),c0(n),V.t-T.lastHit>3.5&&T.hp<T.maxHp&&(T.hp=Math.min(T.maxHp,T.hp+T.maxHp*.5*n)),ht("dmg").style.opacity=Sn(1-T.hp/T.maxHp,0,1)*.9,T.hp<T.maxHp*.35&&(T.heartT-=n,T.heartT<=0&&(te.heartbeat(),T.heartT=.9)),V.flowT-=n;let t=oe(Sn(ke(T.x),0,43),Sn(ke(T.z),0,39));if(V.flowDirty||t!==V.lastFlowK&&V.flowT<=0){ap(ke(T.x),ke(T.z)),V.lastFlowK=t,V.flowT=.25,V.flowDirty=!1;for(let i of Te)i.best=1e9}for(let i=Te.length-1;i>=0;i--){let s=Te[i];s&&e0(s,n,T.x,T.z)}if(F1(),V.state!=="play")return;U1(n),V1(n),q1(n);let e=!1;for(let i=zr.length-1;i>=0;i--){let s=zr[i];if(s.t-=n,s.t<=0){zr.splice(i,1);continue}Math.hypot(s.x-T.x,s.z-T.z)<2.6&&!T.driving&&(e=!0,Ce()<n*2&&Fl(8))}ht("toxicfx").style.opacity=e?.7:0;for(let i=hs.length-1;i>=0;i--){let s=hs[i];s.t-=n,s.g.position.y=1+Math.sin(V.t*3)*.15,s.g.visible=s.t>5||Math.sin(V.t*18)>0,Math.hypot(s.x-T.x,s.z-T.z)<1.6?(B1(s),Ie.remove(s.g),hs.splice(i,1)):s.t<=0&&(Ie.remove(s.g),hs.splice(i,1))}V.insta>0&&(V.insta-=n),V.dbl>0&&(V.dbl-=n),Gn.t>0&&(Gn.t-=n,Gn.model&&(Gn.model.rotation.y+=n*3),Gn.t<=0&&Gn.model&&(Wt.forge.slot.remove(Gn.model),Gn.model=null));for(let i of yi)if(i.gate){let s=Math.hypot(i.x-T.x,i.z-T.z)<2.2;i.gate.rotation.y=Ni(i.gate.rotation.y,s?1.5:0,Math.min(1,n*6))}for(let i of Wt.fires)for(let s of i.fl)s.scale.y=1+Math.sin(V.t*13+s.id)*.15;A1(n),$p(n),wl>0&&(wl-=n,wl<=0&&ht("toast").classList.remove("show")),Tl>0&&(Tl-=n,Tl<=0&&ht("center").classList.remove("show")),Cl>0&&(Cl-=n,Cl<=0&&(ht("hit").style.opacity=0)),Il>0&&(Il-=n,ht("flash").style.opacity=Math.max(0,Il)),(V.t*4|0)!==((V.t-n)*4|0)&&Ze()}function J1(n){let t=T.view==="tp"||T.driving;if(T.driving){let u=_t.x+Math.sin(_t.h)*7,f=_t.z+Math.cos(_t.h)*7;ye.position.lerp(Os.set(u,3.2,f),Math.min(1,n*5)),ye.lookAt(_t.x-Math.sin(_t.h)*4,1,_t.z-Math.cos(_t.h)*4)}else{let u=1.62+T.y+Math.sin(T.bob*2)*.035*(T.speed>.5?1:0);if(ye.rotation.set(T.pitch+T.recoil*.02,T.yaw,0),t){let d=T.x+Math.sin(T.yaw)*2.6*Math.cos(T.pitch)+Math.cos(T.yaw)*.6,g=T.z+Math.cos(T.yaw)*2.6*Math.cos(T.pitch)-Math.sin(T.yaw)*.6,y=dl(T.x,T.z,d-T.x,g-T.z,Math.hypot(d-T.x,g-T.z),b=>Co(b)),p=Math.hypot(d-T.x,g-T.z),m=Math.max(.2,(y-.3)/p);ye.position.set(T.x+(d-T.x)*m,u+.3+Math.sin(T.pitch)*2.6*.5,T.z+(g-T.z)*m)}else ye.position.set(T.x,u,T.z)}let e=Xr(),i=e&&e.def.zoom&&T.ads>.8?e.def.zoom:1,s=(ye.userData.fov||ze.fov)/(1+T.ads*.25)/i;Math.abs(ye.fov-s)>.01&&(ye.fov=s,ye.updateProjectionMatrix()),ht("scope").style.opacity=i>1?1:0;let r=i>1;ht("cross").classList.toggle("hide",r||T.driving),ht("cross").classList.toggle("ads",T.ads>.6&&!r),Bi.wrap.visible=t&&!T.driving,Bi.wrap.visible&&(Bi.wrap.position.set(T.x,T.y,T.z),Bi.wrap.rotation.y=T.yaw,wp(Bi,V.t,T.speed,T.pitch,T.sprinting)),si.visible=!t&&!ae.on&&!(e&&e.def.zoom&&T.ads>.8);let o=T.ads,a=T.reloadT>0?Math.sin(Math.min(1,1-T.reloadT/(T.reloadMax||1))*Math.PI):0,l=T.swapT>0?T.swapT/.4:0,c=T.knifeT>0?Math.sin((.5-T.knifeT)/.5*Math.PI):0,h=ri?ri.sight:.095;si.position.set(Ni(.17,0,o)+c*-.1,Ni(-.19,-h,o)-a*.12-l*.3+Math.sin(T.bob*2)*.008*(1-o),Ni(-.38,-.27,o)+T.recoil*.05-c*.15),si.rotation.set(a*.6+T.recoil*.08*(1-o*.85)+(T.sprinting?-.35:0),(T.sprinting?.6:0)+c*.8,a*.4),Yu>0?(Yu-=n,Fo.visible=!t,Fo.position.set(si.position.x,si.position.y+(ri?ri.muzzle.position.y:.06),si.position.z+(ri?ri.muzzle.position.z:-.55))):Fo.visible=!1,Wt.moonL.position.set(T.x-30,60,T.z-40),Wt.moonL.target.position.set(T.x,0,T.z),Dn.clear(),Dn.render(Ie,ye),si.visible&&(Dn.clearDepth(),Dn.render(Bo,zu)),V.t%.1<n&&P1()}function u0(n){requestAnimationFrame(u0);let t=Math.min(.05,(n-$u)/1e3);if($u=n,bl+=t,Bu++,bl>1&&(ku=Math.round(Bu/bl),bl=0,Bu=0,ht("fps").textContent=ku+" FPS",V.state==="play"&&ze.q==="auto"&&(ku<35?Sl++:Sl=0,Sl>=3&&Dl>.6&&(Dl-=.15,ju(),Sl=0))),V.state==="play")h0(t);else if(V.state==="over"){V.t+=t,$p(t);for(let e of Te)e0(e,t,T.x,T.z)}V.state==="play"||V.state==="over"||V.state==="pause"?J1(V.state==="pause"?0:t):(V.t+=t,ye.position.set(44+Math.sin(V.t*.08)*30,9,40+Math.cos(V.t*.08)*30),ye.lookAt(44,1,46),ye.fov!==60&&(ye.fov=60,ye.updateProjectionMatrix()),Dn.clear(),Dn.render(Ie,ye)),fu()}var j1=["title","pause","settings","controls","over","admin","pin"],qr="title";function Un(n){for(let t of j1)ht(t).classList.toggle("hidden",t!==n)}function f0(){rp(),mu(ze.vol),D1(),sf=!1,V.state="play",Un(null),ht("hud").classList.remove("hidden"),ht("touch").classList.add("live"),$.device==="kbm"&&!Hi&&Vr.requestPointerLock?.()}function d0(){V.state==="play"&&(V.state="pause",$.fire=$.aim=!1,Ii(!1),Un("pause"),ht("touch").classList.remove("live"),document.pointerLockElement&&document.exitPointerLock())}function Q1(){V.state="play",Un(null),ht("touch").classList.add("live"),$u=performance.now(),T.driving&&Ii(!0,0),$.device==="kbm"&&!Hi&&Vr.requestPointerLock?.()}function p0(){V.state="title",Jp(),Un("title"),ht("hud").classList.add("hidden"),ht("touch").classList.remove("live"),Ii(!1),m0()}function m0(){let n=+localStorage.getItem("ds_best")||0;ht("best").textContent=n?"Best: round "+n:""}ht("bUpright").onclick=()=>document.body.classList.add("upright");ht("bPlay").onclick=f0;ht("bAgain").onclick=f0;ht("bMenu").onclick=p0;ht("bResume").onclick=Q1;ht("bQuit").onclick=p0;ht("bControls").onclick=()=>{qr="title",Un("controls")};ht("bControls2").onclick=()=>{qr="pause",Un("controls")};ht("bSettings").onclick=()=>{qr="title",Zr(),Un("settings")};ht("bSettings2").onclick=()=>{qr="pause",Zr(),Un("settings")};var nf=!1;function ko(){ht("admPts").textContent=V.points.toLocaleString();for(let n of ht("admPapSeg").children)n.classList.toggle("on",+n.dataset.v==1===nf);ht("admExtra").children[1].textContent="GOD MODE: "+(V.god?"ON":"OFF"),ht("admExtra").children[1].classList.toggle("on",!!V.god),ht("admExtra").children[2].textContent="FLY: "+(V.fly?"ON":"OFF"),ht("admExtra").children[2].classList.toggle("on",!!V.fly)}function Yr(n){ht("admMsg").textContent=n}ht("admGuns").innerHTML=Object.keys(Oi).map(n=>`<button data-k="${n}">${Oi[n].name}</button>`).join("");var sf=!1,gi="",tM=n=>[...n].reduce((t,e)=>t*31+e.charCodeAt(0)|0,7);function g0(){Yr(""),ko(),Un("admin")}function No(){[...ht("pinDots").children].forEach((n,t)=>n.classList.toggle("f",t<gi.length))}function Ll(n){if(n==="x"){Un("pause");return}if(n==="b"){gi=gi.slice(0,-1),No();return}gi.length>=4||(gi+=n,ht("pinMsg").textContent="",No(),gi.length===4&&(tM(gi)===7945292?(sf=!0,gi="",No(),g0()):(gi="",ht("pinMsg").textContent="Wrong PIN",setTimeout(No,250))))}for(let n of ht("pinPad").children)n.onclick=()=>Ll(n.dataset.k);addEventListener("keydown",n=>{ht("pin").classList.contains("hidden")||(n.stopImmediatePropagation(),n.preventDefault(),/^\d$/.test(n.key)?Ll(n.key):n.key==="Backspace"?Ll("b"):n.key==="Escape"&&Ll("x"))},!0);ht("bAdmin").onclick=()=>{if(sf)return g0();gi="",No(),ht("pinMsg").textContent="",Un("pin")};ht("bAdmBack").onclick=()=>Un("pause");for(let n of ht("admMoney").children)n.onclick=()=>{let t=+n.dataset.n;V.points+=t,Ze(),ko(),Yr("Added "+t.toLocaleString()+" points to you.")};for(let n of ht("admPapSeg").children)n.onclick=()=>{nf=n.dataset.v==="1",ko()};for(let n of ht("admGuns").children)n.onclick=()=>{Nl(n.dataset.k,nf),Ze(),Yr("You now have the "+Xr().name+".")};ht("admExtra").children[0].onclick=()=>{for(let n of T.guns)n.clip=n.mag,n.reserve=n.maxReserve;T.nades=Math.max(T.nades,4),Ze(),Yr("Ammo and grenades refilled.")};ht("admExtra").children[2].onclick=()=>{V.fly=!V.fly,V.fly||(T.vy=-.01),ko(),Yr(V.fly?"Flight on: fly where you look. Keyboard: Space up, Ctrl or Z down, Shift fast. Phone/controller: look up or down while moving.":"Flight off: you drop back to the ground.")};ht("admExtra").children[1].onclick=()=>{V.god=!V.god,ko(),Yr(V.god?"God mode on: zombies cannot hurt you.":"God mode off.")};ht("bSetBack").onclick=()=>Un(qr);ht("bCtlBack").onclick=()=>Un(qr);function Zr(){for(let n of ht("qSeg").children)n.classList.toggle("on",n.dataset.q===ze.q);for(let n of ht("invSeg").children)n.classList.toggle("on",+n.dataset.v===ze.inv);for(let n of ht("fpsSeg").children)n.classList.toggle("on",+n.dataset.v===ze.fps);ht("sens").value=ze.sens,ht("fov").value=ze.fov,ht("vol").value=ze.vol,ht("fps").classList.toggle("hidden",!ze.fps),ju()}for(let n of ht("qSeg").children)n.onclick=()=>{ze.q=n.dataset.q,Dl=1,Wr(),Zr()};for(let n of ht("invSeg").children)n.onclick=()=>{ze.inv=+n.dataset.v,Wr(),Zr()};for(let n of ht("fpsSeg").children)n.onclick=()=>{ze.fps=+n.dataset.v,Wr(),Zr()};ht("sens").oninput=n=>{ze.sens=+n.target.value,Wr()};ht("fov").oninput=n=>{ze.fov=+n.target.value,Zp(),Wr()};ht("vol").oninput=n=>{ze.vol=+n.target.value,mu(ze.vol),Wr()};ep(Vr,{canLock:()=>V.state==="play",onUnlock:()=>{V.state==="play"&&$.device==="kbm"&&d0()},toast:ki,playing:()=>V.state==="play"});Yp();ju();Zr();m0();Qu();Object.assign(_t,Gu);c0(0);ht("loading").textContent="";ht("titleHint").textContent=Hi?"Plays best with your phone sideways. A PS5 controller works too.":"Keyboard and mouse or a PS5 controller.";requestAnimationFrame(u0);var eM=(n,t)=>{for(let e=0;e<n*30&&V.state==="play";e++)t&&nM(),h0(1/30),fu();return V.state};function nM(){let n=null,t=1e9;for(let e of Te){if(e.dead||e.state==="rise")continue;let i=Math.hypot(e.x-T.x,e.z-T.z);i<t&&(t=i,n=e)}$.fire=!1,n&&t<25&&Ul(T.x,T.z,n.x,n.z)&&(T.yaw=Math.atan2(-(n.x-T.x),-(n.z-T.z)),T.pitch=Math.atan2(1.2*(n.m.scale||1)-1.62,t),ye.rotation.set(T.pitch,T.yaw,0),ye.position.set(T.x,1.62,T.z),ye.updateMatrixWorld(),$.fire=!$.fire_last,$.fire_last=$.fire)}window.__ds={fireOnce:()=>{ye.rotation.set(T.pitch,T.yaw,0,"YXZ"),ye.position.set(T.x,1.62+T.y,T.z),ye.updateMatrixWorld(),s0()},gunModel:Ns,W:Oi,inp:$,WD:Wt,box:Pt,build:ae,toggleBuild:a0,sim:eM,G:V,P:T,zombies:Te,pups:hs,windows:bn,doors:Ui,startRound:tf,giveGun:Nl,hurt:Fl,gameOver:i0,car:_t,pieces:yi,dropPup:Xu,spawnZombie:Wu,openDoor:r0,damageZombie:Bs};

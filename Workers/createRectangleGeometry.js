define(["./defaultValue-81eec7ed","./Matrix2-47e98d76","./GeometryOffsetAttribute-8c5e10db","./Transforms-08771371","./RuntimeError-8952249c","./ComponentDatatype-a15c9a19","./GeometryAttribute-64b853f6","./GeometryAttributes-32b29525","./GeometryInstance-4fbf16ba","./GeometryPipeline-7ffd77ba","./IndexDatatype-f1dcdf35","./PolygonPipeline-32809f7a","./RectangleGeometryLibrary-6947f50e","./VertexFormat-a0b706b0","./commonjsHelpers-3aae1032-26891ab7","./combine-3c023bda","./WebGLConstants-508b9636","./AttributeCompression-80665726","./EncodedCartesian3-d9f5c4a4","./IntersectionTests-bc78300e","./Plane-3f01019d","./EllipsoidRhumbLine-6145377b"],(function(t,e,n,a,o,r,i,s,l,u,c,m,p,d,g,y,f,h,b,_,A,x){"use strict";const w=new e.Cartesian3,C=new e.Cartesian3,v=new e.Cartesian3,R=new e.Cartesian3,E=new e.Rectangle,F=new e.Cartesian2,G=new a.BoundingSphere,P=new a.BoundingSphere;function V(t,e){const n=new i.Geometry({attributes:new s.GeometryAttributes,primitiveType:i.PrimitiveType.TRIANGLES});return n.attributes.position=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(n.attributes.normal=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(n.attributes.tangent=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(n.attributes.bitangent=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),n}const L=new e.Cartesian3,D=new e.Cartesian3;function M(t,n){const a=t._vertexFormat,o=t._ellipsoid,s=n.height,l=n.width,u=n.northCap,m=n.southCap;let d=0,g=s,y=s,f=0;u&&(d=1,y-=1,f+=1),m&&(g-=1,y-=1,f+=1),f+=l*y;const h=a.position?new Float64Array(3*f):void 0,b=a.st?new Float32Array(2*f):void 0;let _=0,A=0;const x=w,E=F;let G=Number.MAX_VALUE,P=Number.MAX_VALUE,L=-Number.MAX_VALUE,D=-Number.MAX_VALUE;for(let t=d;t<g;++t)for(let e=0;e<l;++e)p.RectangleGeometryLibrary.computePosition(n,o,a.st,t,e,x,E),h[_++]=x.x,h[_++]=x.y,h[_++]=x.z,a.st&&(b[A++]=E.x,b[A++]=E.y,G=Math.min(G,E.x),P=Math.min(P,E.y),L=Math.max(L,E.x),D=Math.max(D,E.y));if(u&&(p.RectangleGeometryLibrary.computePosition(n,o,a.st,0,0,x,E),h[_++]=x.x,h[_++]=x.y,h[_++]=x.z,a.st&&(b[A++]=E.x,b[A++]=E.y,G=E.x,P=E.y,L=E.x,D=E.y)),m&&(p.RectangleGeometryLibrary.computePosition(n,o,a.st,s-1,0,x,E),h[_++]=x.x,h[_++]=x.y,h[_]=x.z,a.st&&(b[A++]=E.x,b[A]=E.y,G=Math.min(G,E.x),P=Math.min(P,E.y),L=Math.max(L,E.x),D=Math.max(D,E.y))),a.st&&(G<0||P<0||L>1||D>1))for(let t=0;t<b.length;t+=2)b[t]=(b[t]-G)/(L-G),b[t+1]=(b[t+1]-P)/(D-P);const M=function(t,n,a,o){const r=t.length,i=n.normal?new Float32Array(r):void 0,s=n.tangent?new Float32Array(r):void 0,l=n.bitangent?new Float32Array(r):void 0;let u=0;const c=R,m=v;let p=C;if(n.normal||n.tangent||n.bitangent)for(let d=0;d<r;d+=3){const r=e.Cartesian3.fromArray(t,d,w),g=u+1,y=u+2;p=a.geodeticSurfaceNormal(r,p),(n.tangent||n.bitangent)&&(e.Cartesian3.cross(e.Cartesian3.UNIT_Z,p,m),e.Matrix3.multiplyByVector(o,m,m),e.Cartesian3.normalize(m,m),n.bitangent&&e.Cartesian3.normalize(e.Cartesian3.cross(p,m,c),c)),n.normal&&(i[u]=p.x,i[g]=p.y,i[y]=p.z),n.tangent&&(s[u]=m.x,s[g]=m.y,s[y]=m.z),n.bitangent&&(l[u]=c.x,l[g]=c.y,l[y]=c.z),u+=3}return V(n,{positions:t,normals:i,tangents:s,bitangents:l})}(h,a,o,n.tangentRotationMatrix);let T=6*(l-1)*(y-1);u&&(T+=3*(l-1)),m&&(T+=3*(l-1));const O=c.IndexDatatype.createTypedArray(f,T);let N,S=0,I=0;for(N=0;N<y-1;++N){for(let t=0;t<l-1;++t){const t=S,e=t+l,n=e+1,a=t+1;O[I++]=t,O[I++]=e,O[I++]=a,O[I++]=a,O[I++]=e,O[I++]=n,++S}++S}if(u||m){let t=f-1;const e=f-1;let n,a;if(u&&m&&(t=f-2),S=0,u)for(N=0;N<l-1;N++)n=S,a=n+1,O[I++]=t,O[I++]=n,O[I++]=a,++S;if(m)for(S=(y-1)*l,N=0;N<l-1;N++)n=S,a=n+1,O[I++]=n,O[I++]=e,O[I++]=a,++S}return M.indices=O,a.st&&(M.attributes.st=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:b})),M}function T(t,e,n,a,o){return t[e++]=a[n],t[e++]=a[n+1],t[e++]=a[n+2],t[e++]=o[n],t[e++]=o[n+1],t[e]=o[n+2],t}function O(t,e,n,a){return t[e++]=a[n],t[e++]=a[n+1],t[e++]=a[n],t[e]=a[n+1],t}const N=new d.VertexFormat;function S(a,o){const s=a._shadowVolume,p=a._offsetAttribute,g=a._vertexFormat,y=a._extrudedHeight,f=a._surfaceHeight,h=a._ellipsoid,b=o.height,_=o.width;let A;if(s){const t=d.VertexFormat.clone(g,N);t.normal=!0,a._vertexFormat=t}const x=M(a,o);s&&(a._vertexFormat=g);let E=m.PolygonPipeline.scaleToGeodeticHeight(x.attributes.position.values,f,h,!1);E=new Float64Array(E);let F=E.length;const G=2*F,P=new Float64Array(G);P.set(E);const S=m.PolygonPipeline.scaleToGeodeticHeight(x.attributes.position.values,y,h);P.set(S,F),x.attributes.position.values=P;const I=g.normal?new Float32Array(G):void 0,k=g.tangent?new Float32Array(G):void 0,H=g.bitangent?new Float32Array(G):void 0,z=g.st?new Float32Array(G/3*2):void 0;let B,U,Y;if(g.normal){for(U=x.attributes.normal.values,I.set(U),A=0;A<F;A++)U[A]=-U[A];I.set(U,F),x.attributes.normal.values=I}if(s){U=x.attributes.normal.values,g.normal||(x.attributes.normal=void 0);const t=new Float32Array(G);for(A=0;A<F;A++)U[A]=-U[A];t.set(U,F),x.attributes.extrudeDirection=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}const q=t.defined(p);if(q){const t=F/3*2;let e=new Uint8Array(t);p===n.GeometryOffsetAttribute.TOP?e=n.arrayFill(e,1,0,t/2):(Y=p===n.GeometryOffsetAttribute.NONE?0:1,e=n.arrayFill(e,Y)),x.attributes.applyOffset=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}if(g.tangent){const t=x.attributes.tangent.values;for(k.set(t),A=0;A<F;A++)t[A]=-t[A];k.set(t,F),x.attributes.tangent.values=k}if(g.bitangent){const t=x.attributes.bitangent.values;H.set(t),H.set(t,F),x.attributes.bitangent.values=H}g.st&&(B=x.attributes.st.values,z.set(B),z.set(B,F/3*2),x.attributes.st.values=z);const X=x.indices,Q=X.length,W=F/3,j=c.IndexDatatype.createTypedArray(G/3,2*Q);for(j.set(X),A=0;A<Q;A+=3)j[A+Q]=X[A+2]+W,j[A+1+Q]=X[A+1]+W,j[A+2+Q]=X[A]+W;x.indices=j;const J=o.northCap,Z=o.southCap;let K=b,$=2,tt=0,et=4,nt=4;J&&($-=1,K-=1,tt+=1,et-=2,nt-=1),Z&&($-=1,K-=1,tt+=1,et-=2,nt-=1),tt+=$*_+2*K-et;const at=2*(tt+nt);let ot=new Float64Array(3*at);const rt=s?new Float32Array(3*at):void 0;let it=q?new Uint8Array(at):void 0,st=g.st?new Float32Array(2*at):void 0;const lt=p===n.GeometryOffsetAttribute.TOP;q&&!lt&&(Y=p===n.GeometryOffsetAttribute.ALL?1:0,it=n.arrayFill(it,Y));let ut=0,ct=0,mt=0,pt=0;const dt=_*K;let gt;for(A=0;A<dt;A+=_)gt=3*A,ot=T(ot,ut,gt,E,S),ut+=6,g.st&&(st=O(st,ct,2*A,B),ct+=4),s&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[pt++]=1,pt+=1);if(Z){const t=J?dt+1:dt;for(gt=3*t,A=0;A<2;A++)ot=T(ot,ut,gt,E,S),ut+=6,g.st&&(st=O(st,ct,2*t,B),ct+=4),s&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[pt++]=1,pt+=1)}else for(A=dt-_;A<dt;A++)gt=3*A,ot=T(ot,ut,gt,E,S),ut+=6,g.st&&(st=O(st,ct,2*A,B),ct+=4),s&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[pt++]=1,pt+=1);for(A=dt-1;A>0;A-=_)gt=3*A,ot=T(ot,ut,gt,E,S),ut+=6,g.st&&(st=O(st,ct,2*A,B),ct+=4),s&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[pt++]=1,pt+=1);if(J){const t=dt;for(gt=3*t,A=0;A<2;A++)ot=T(ot,ut,gt,E,S),ut+=6,g.st&&(st=O(st,ct,2*t,B),ct+=4),s&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[pt++]=1,pt+=1)}else for(A=_-1;A>=0;A--)gt=3*A,ot=T(ot,ut,gt,E,S),ut+=6,g.st&&(st=O(st,ct,2*A,B),ct+=4),s&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[pt++]=1,pt+=1);let yt=function(t,n,a){const o=t.length,i=n.normal?new Float32Array(o):void 0,s=n.tangent?new Float32Array(o):void 0,l=n.bitangent?new Float32Array(o):void 0;let u=0,c=0,m=0,p=!0,d=R,g=v,y=C;if(n.normal||n.tangent||n.bitangent)for(let f=0;f<o;f+=6){const h=e.Cartesian3.fromArray(t,f,w),b=e.Cartesian3.fromArray(t,(f+6)%o,L);if(p){const n=e.Cartesian3.fromArray(t,(f+3)%o,D);e.Cartesian3.subtract(b,h,b),e.Cartesian3.subtract(n,h,n),y=e.Cartesian3.normalize(e.Cartesian3.cross(n,b,y),y),p=!1}e.Cartesian3.equalsEpsilon(b,h,r.CesiumMath.EPSILON10)&&(p=!0),(n.tangent||n.bitangent)&&(d=a.geodeticSurfaceNormal(h,d),n.tangent&&(g=e.Cartesian3.normalize(e.Cartesian3.cross(d,y,g),g))),n.normal&&(i[u++]=y.x,i[u++]=y.y,i[u++]=y.z,i[u++]=y.x,i[u++]=y.y,i[u++]=y.z),n.tangent&&(s[c++]=g.x,s[c++]=g.y,s[c++]=g.z,s[c++]=g.x,s[c++]=g.y,s[c++]=g.z),n.bitangent&&(l[m++]=d.x,l[m++]=d.y,l[m++]=d.z,l[m++]=d.x,l[m++]=d.y,l[m++]=d.z)}return V(n,{positions:t,normals:i,tangents:s,bitangents:l})}(ot,g,h);g.st&&(yt.attributes.st=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:st})),s&&(yt.attributes.extrudeDirection=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:rt})),q&&(yt.attributes.applyOffset=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:it}));const ft=c.IndexDatatype.createTypedArray(at,6*tt);let ht,bt,_t,At;F=ot.length/3;let xt=0;for(A=0;A<F-1;A+=2){ht=A,At=(ht+2)%F;const t=e.Cartesian3.fromArray(ot,3*ht,L),n=e.Cartesian3.fromArray(ot,3*At,D);e.Cartesian3.equalsEpsilon(t,n,r.CesiumMath.EPSILON10)||(bt=(ht+1)%F,_t=(bt+2)%F,ft[xt++]=ht,ft[xt++]=bt,ft[xt++]=At,ft[xt++]=At,ft[xt++]=bt,ft[xt++]=_t)}return yt.indices=ft,yt=u.GeometryPipeline.combineInstances([new l.GeometryInstance({geometry:x}),new l.GeometryInstance({geometry:yt})]),yt[0]}const I=[new e.Cartesian3,new e.Cartesian3,new e.Cartesian3,new e.Cartesian3],k=new e.Cartographic,H=new e.Cartographic;function z(t,n,a,o,r){if(0===a)return e.Rectangle.clone(t,r);const i=p.RectangleGeometryLibrary.computeOptions(t,n,a,0,E,k),s=i.height,l=i.width,u=I;return p.RectangleGeometryLibrary.computePosition(i,o,!1,0,0,u[0]),p.RectangleGeometryLibrary.computePosition(i,o,!1,0,l-1,u[1]),p.RectangleGeometryLibrary.computePosition(i,o,!1,s-1,0,u[2]),p.RectangleGeometryLibrary.computePosition(i,o,!1,s-1,l-1,u[3]),e.Rectangle.fromCartesianArray(u,o,r)}function B(n){const a=(n=t.defaultValue(n,t.defaultValue.EMPTY_OBJECT)).rectangle,o=t.defaultValue(n.height,0),i=t.defaultValue(n.extrudedHeight,o);this._rectangle=e.Rectangle.clone(a),this._granularity=t.defaultValue(n.granularity,r.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.Ellipsoid.clone(t.defaultValue(n.ellipsoid,e.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(o,i),this._rotation=t.defaultValue(n.rotation,0),this._stRotation=t.defaultValue(n.stRotation,0),this._vertexFormat=d.VertexFormat.clone(t.defaultValue(n.vertexFormat,d.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(o,i),this._shadowVolume=t.defaultValue(n.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=n.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}B.packedLength=e.Rectangle.packedLength+e.Ellipsoid.packedLength+d.VertexFormat.packedLength+7,B.pack=function(n,a,o){return o=t.defaultValue(o,0),e.Rectangle.pack(n._rectangle,a,o),o+=e.Rectangle.packedLength,e.Ellipsoid.pack(n._ellipsoid,a,o),o+=e.Ellipsoid.packedLength,d.VertexFormat.pack(n._vertexFormat,a,o),o+=d.VertexFormat.packedLength,a[o++]=n._granularity,a[o++]=n._surfaceHeight,a[o++]=n._rotation,a[o++]=n._stRotation,a[o++]=n._extrudedHeight,a[o++]=n._shadowVolume?1:0,a[o]=t.defaultValue(n._offsetAttribute,-1),a};const U=new e.Rectangle,Y=e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),q={rectangle:U,ellipsoid:Y,vertexFormat:N,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};B.unpack=function(n,a,o){a=t.defaultValue(a,0);const r=e.Rectangle.unpack(n,a,U);a+=e.Rectangle.packedLength;const i=e.Ellipsoid.unpack(n,a,Y);a+=e.Ellipsoid.packedLength;const s=d.VertexFormat.unpack(n,a,N);a+=d.VertexFormat.packedLength;const l=n[a++],u=n[a++],c=n[a++],m=n[a++],p=n[a++],g=1===n[a++],y=n[a];return t.defined(o)?(o._rectangle=e.Rectangle.clone(r,o._rectangle),o._ellipsoid=e.Ellipsoid.clone(i,o._ellipsoid),o._vertexFormat=d.VertexFormat.clone(s,o._vertexFormat),o._granularity=l,o._surfaceHeight=u,o._rotation=c,o._stRotation=m,o._extrudedHeight=p,o._shadowVolume=g,o._offsetAttribute=-1===y?void 0:y,o):(q.granularity=l,q.height=u,q.rotation=c,q.stRotation=m,q.extrudedHeight=p,q.shadowVolume=g,q.offsetAttribute=-1===y?void 0:y,new B(q))},B.computeRectangle=function(n,a){const o=(n=t.defaultValue(n,t.defaultValue.EMPTY_OBJECT)).rectangle,i=t.defaultValue(n.granularity,r.CesiumMath.RADIANS_PER_DEGREE),s=t.defaultValue(n.ellipsoid,e.Ellipsoid.WGS84);return z(o,i,t.defaultValue(n.rotation,0),s,a)};const X=new e.Matrix3,Q=new a.Quaternion,W=new e.Cartographic;B.createGeometry=function(o){if(r.CesiumMath.equalsEpsilon(o._rectangle.north,o._rectangle.south,r.CesiumMath.EPSILON10)||r.CesiumMath.equalsEpsilon(o._rectangle.east,o._rectangle.west,r.CesiumMath.EPSILON10))return;let s=o._rectangle;const l=o._ellipsoid,u=o._rotation,c=o._stRotation,d=o._vertexFormat,g=p.RectangleGeometryLibrary.computeOptions(s,o._granularity,u,c,E,k,H),y=X;if(0!==c||0!==u){const t=e.Rectangle.center(s,W),n=l.geodeticSurfaceNormalCartographic(t,L);a.Quaternion.fromAxisAngle(n,-c,Q),e.Matrix3.fromQuaternion(Q,y)}else e.Matrix3.clone(e.Matrix3.IDENTITY,y);const f=o._surfaceHeight,h=o._extrudedHeight,b=!r.CesiumMath.equalsEpsilon(f,h,0,r.CesiumMath.EPSILON2);let _,A;if(g.lonScalar=1/o._rectangle.width,g.latScalar=1/o._rectangle.height,g.tangentRotationMatrix=y,s=o._rectangle,b){_=S(o,g);const t=a.BoundingSphere.fromRectangle3D(s,l,f,P),e=a.BoundingSphere.fromRectangle3D(s,l,h,G);A=a.BoundingSphere.union(t,e)}else{if(_=M(o,g),_.attributes.position.values=m.PolygonPipeline.scaleToGeodeticHeight(_.attributes.position.values,f,l,!1),t.defined(o._offsetAttribute)){const t=_.attributes.position.values.length,e=new Uint8Array(t/3),a=o._offsetAttribute===n.GeometryOffsetAttribute.NONE?0:1;n.arrayFill(e,a),_.attributes.applyOffset=new i.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}A=a.BoundingSphere.fromRectangle3D(s,l,f)}return d.position||delete _.attributes.position,new i.Geometry({attributes:_.attributes,indices:_.indices,primitiveType:_.primitiveType,boundingSphere:A,offsetAttribute:o._offsetAttribute})},B.createShadowVolume=function(t,e,n){const a=t._granularity,o=t._ellipsoid,r=e(a,o),i=n(a,o);return new B({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:o,stRotation:t._stRotation,granularity:a,extrudedHeight:i,height:r,vertexFormat:d.VertexFormat.POSITION_ONLY,shadowVolume:!0})};const j=new e.Rectangle,J=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],Z=new e.Matrix2,K=new e.Cartographic;return Object.defineProperties(B.prototype,{rectangle:{get:function(){return t.defined(this._rotatedRectangle)||(this._rotatedRectangle=z(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return t.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];const n=e.Rectangle.clone(t._rectangle,j),a=t._granularity,o=t._ellipsoid,r=z(n,a,t._rotation-t._stRotation,o,j),i=J;i[0].x=r.west,i[0].y=r.south,i[1].x=r.west,i[1].y=r.north,i[2].x=r.east,i[2].y=r.south;const s=t.rectangle,l=e.Matrix2.fromRotation(t._stRotation,Z),u=e.Rectangle.center(s,K);for(let t=0;t<3;++t){const n=i[t];n.x-=u.longitude,n.y-=u.latitude,e.Matrix2.multiplyByVector(l,n,n),n.x+=u.longitude,n.y+=u.latitude,n.x=(n.x-s.west)/s.width,n.y=(n.y-s.south)/s.height}const c=i[0],m=i[1],p=i[2],d=new Array(6);return e.Cartesian2.pack(c,d),e.Cartesian2.pack(m,d,2),e.Cartesian2.pack(p,d,4),d}(this)),this._textureCoordinateRotationPoints}}}),function(n,a){return t.defined(a)&&(n=B.unpack(n,a)),n._ellipsoid=e.Ellipsoid.clone(n._ellipsoid),n._rectangle=e.Rectangle.clone(n._rectangle),B.createGeometry(n)}}));
// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.impl.accessors.physics.p2');
goog.require('cljs.core');
phzr.impl.accessors.physics.p2.p2_get_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"collision-groups","collision-groups",-2131194496),new cljs.core.Keyword(null,"use-elapsed-time","use-elapsed-time",-640103456),new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"on-constraint-removed","on-constraint-removed",-207226814),new cljs.core.Keyword(null,"on-body-added","on-body-added",-1576077086),new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"on-begin-contact","on-begin-contact",-457375958),new cljs.core.Keyword(null,"everything-collision-group","everything-collision-group",1223635051),new cljs.core.Keyword(null,"sleep-mode","sleep-mode",-551717013),new cljs.core.Keyword(null,"walls","walls",-268788818),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.Keyword(null,"nothing-collision-group","nothing-collision-group",-1574833201),new cljs.core.Keyword(null,"on-contact-material-removed","on-contact-material-removed",-708488016),new cljs.core.Keyword(null,"on-end-contact","on-end-contact",-613792400),new cljs.core.Keyword(null,"post-broadphase-callback","post-broadphase-callback",1668542992),new cljs.core.Keyword(null,"apply-damping","apply-damping",-10273200),new cljs.core.Keyword(null,"on-spring-removed","on-spring-removed",1887337041),new cljs.core.Keyword(null,"apply-spring-forces","apply-spring-forces",-1371264974),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"restitution","restitution",364735539),new cljs.core.Keyword(null,"apply-gravity","apply-gravity",710708340),new cljs.core.Keyword(null,"bounds-collides-with","bounds-collides-with",1715681269),new cljs.core.Keyword(null,"callback-context","callback-context",-404125994),new cljs.core.Keyword(null,"bounds-collision-group","bounds-collision-group",-88380521),new cljs.core.Keyword(null,"on-spring-added","on-spring-added",-577391560),new cljs.core.Keyword(null,"on-contact-material-added","on-contact-material-added",-2004901671),new cljs.core.Keyword(null,"solve-constraints","solve-constraints",-395343207),new cljs.core.Keyword(null,"emit-impact-event","emit-impact-event",1045756857),new cljs.core.Keyword(null,"on-constraint-added","on-constraint-added",-1949206438),new cljs.core.Keyword(null,"friction","friction",-1603603910),new cljs.core.Keyword(null,"contact-material","contact-material",1881638622),new cljs.core.Keyword(null,"on-body-removed","on-body-removed",-743153025)],["collisionGroups","useElapsedTime","paused","onConstraintRemoved","onBodyAdded","frameRate","game","time","onBeginContact","everythingCollisionGroup","sleepMode","walls","gravity","nothingCollisionGroup","onContactMaterialRemoved","onEndContact","postBroadphaseCallback","applyDamping","onSpringRemoved","applySpringForces","total","restitution","applyGravity","boundsCollidesWith","callbackContext","boundsCollisionGroup","onSpringAdded","onContactMaterialAdded","solveConstraints","emitImpactEvent","onConstraintAdded","friction","contactMaterial","onBodyRemoved"]);
phzr.impl.accessors.physics.p2.p2_set_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"collision-groups","collision-groups",-2131194496),new cljs.core.Keyword(null,"use-elapsed-time","use-elapsed-time",-640103456),new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"on-constraint-removed","on-constraint-removed",-207226814),new cljs.core.Keyword(null,"on-body-added","on-body-added",-1576077086),new cljs.core.Keyword(null,"frame-rate","frame-rate",-994918942),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"on-begin-contact","on-begin-contact",-457375958),new cljs.core.Keyword(null,"everything-collision-group","everything-collision-group",1223635051),new cljs.core.Keyword(null,"sleep-mode","sleep-mode",-551717013),new cljs.core.Keyword(null,"walls","walls",-268788818),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.Keyword(null,"nothing-collision-group","nothing-collision-group",-1574833201),new cljs.core.Keyword(null,"on-contact-material-removed","on-contact-material-removed",-708488016),new cljs.core.Keyword(null,"on-end-contact","on-end-contact",-613792400),new cljs.core.Keyword(null,"post-broadphase-callback","post-broadphase-callback",1668542992),new cljs.core.Keyword(null,"apply-damping","apply-damping",-10273200),new cljs.core.Keyword(null,"on-spring-removed","on-spring-removed",1887337041),new cljs.core.Keyword(null,"apply-spring-forces","apply-spring-forces",-1371264974),new cljs.core.Keyword(null,"restitution","restitution",364735539),new cljs.core.Keyword(null,"apply-gravity","apply-gravity",710708340),new cljs.core.Keyword(null,"bounds-collides-with","bounds-collides-with",1715681269),new cljs.core.Keyword(null,"callback-context","callback-context",-404125994),new cljs.core.Keyword(null,"bounds-collision-group","bounds-collision-group",-88380521),new cljs.core.Keyword(null,"on-spring-added","on-spring-added",-577391560),new cljs.core.Keyword(null,"on-contact-material-added","on-contact-material-added",-2004901671),new cljs.core.Keyword(null,"solve-constraints","solve-constraints",-395343207),new cljs.core.Keyword(null,"emit-impact-event","emit-impact-event",1045756857),new cljs.core.Keyword(null,"on-constraint-added","on-constraint-added",-1949206438),new cljs.core.Keyword(null,"friction","friction",-1603603910),new cljs.core.Keyword(null,"contact-material","contact-material",1881638622),new cljs.core.Keyword(null,"on-body-removed","on-body-removed",-743153025)],["collisionGroups","useElapsedTime","paused","onConstraintRemoved","onBodyAdded","frameRate","game","onBeginContact","everythingCollisionGroup","sleepMode","walls","gravity","nothingCollisionGroup","onContactMaterialRemoved","onEndContact","postBroadphaseCallback","applyDamping","onSpringRemoved","applySpringForces","restitution","applyGravity","boundsCollidesWith","callbackContext","boundsCollisionGroup","onSpringAdded","onContactMaterialAdded","solveConstraints","emitImpactEvent","onConstraintAdded","friction","contactMaterial","onBodyRemoved"]);

//# sourceMappingURL=p2.js.map?rel=1485300058814
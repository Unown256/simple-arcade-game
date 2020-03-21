gdjs.DemoZoneCode = {};
gdjs.DemoZoneCode.GDPlayerObjects1= [];
gdjs.DemoZoneCode.GDPlayerObjects2= [];
gdjs.DemoZoneCode.GDPlayerObjects3= [];
gdjs.DemoZoneCode.GDPlayerObjects4= [];
gdjs.DemoZoneCode.GDbulletObjects1= [];
gdjs.DemoZoneCode.GDbulletObjects2= [];
gdjs.DemoZoneCode.GDbulletObjects3= [];
gdjs.DemoZoneCode.GDbulletObjects4= [];
gdjs.DemoZoneCode.GDcursorObjects1= [];
gdjs.DemoZoneCode.GDcursorObjects2= [];
gdjs.DemoZoneCode.GDcursorObjects3= [];
gdjs.DemoZoneCode.GDcursorObjects4= [];
gdjs.DemoZoneCode.GDEnemyObjects1= [];
gdjs.DemoZoneCode.GDEnemyObjects2= [];
gdjs.DemoZoneCode.GDEnemyObjects3= [];
gdjs.DemoZoneCode.GDEnemyObjects4= [];
gdjs.DemoZoneCode.GDDiffTextObjects1= [];
gdjs.DemoZoneCode.GDDiffTextObjects2= [];
gdjs.DemoZoneCode.GDDiffTextObjects3= [];
gdjs.DemoZoneCode.GDDiffTextObjects4= [];
gdjs.DemoZoneCode.GDHPTextObjects1= [];
gdjs.DemoZoneCode.GDHPTextObjects2= [];
gdjs.DemoZoneCode.GDHPTextObjects3= [];
gdjs.DemoZoneCode.GDHPTextObjects4= [];

gdjs.DemoZoneCode.conditionTrue_0 = {val:false};
gdjs.DemoZoneCode.condition0IsTrue_0 = {val:false};
gdjs.DemoZoneCode.condition1IsTrue_0 = {val:false};


gdjs.DemoZoneCode.eventsList0x70e7b4 = function(runtimeScene) {

{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clock");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DiffTime");
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDDiffTextObjects2.createFrom(runtimeScene.getObjects("DiffText"));
gdjs.DemoZoneCode.GDHPTextObjects2.createFrom(runtimeScene.getObjects("HPText"));
gdjs.DemoZoneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.DemoZoneCode.GDcursorObjects2.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.DemoZoneCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDcursorObjects2[i].putAround(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, 0);
}
}{for(var i = 0, len = gdjs.DemoZoneCode.GDDiffTextObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDDiffTextObjects2[i].setString("Safety:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.DemoZoneCode.GDHPTextObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDHPTextObjects2[i].setString("HP:" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.DemoZoneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.DemoZoneCode.GDPlayerObjects2[0].getVariables()).get("HP")))));
}
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0.05;
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDDiffTextObjects1.createFrom(runtimeScene.getObjects("DiffText"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDDiffTextObjects1.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDDiffTextObjects1[i].setString("Safety: NONE");
}
}}

}


}; //End of gdjs.DemoZoneCode.eventsList0x70e7b4
gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.DemoZoneCode.GDbulletObjects2});gdjs.DemoZoneCode.eventsList0x682c84 = function(runtimeScene) {

{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.DemoZoneCode.GDbulletObjects2.createFrom(runtimeScene.getObjects("bullet"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.DemoZoneCode.GDPlayerObjects2[i].getPointX("")), (gdjs.DemoZoneCode.GDPlayerObjects2[i].getPointY("")), gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDbulletObjects2Objects, (gdjs.DemoZoneCode.GDPlayerObjects2[i].getAngle()), 800, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}}

}


}; //End of gdjs.DemoZoneCode.eventsList0x682c84
gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDbulletObjects3Objects = Hashtable.newFrom({"bullet": gdjs.DemoZoneCode.GDbulletObjects3});gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.DemoZoneCode.GDEnemyObjects3});gdjs.DemoZoneCode.eventsList0x68f0cc = function(runtimeScene) {

{

gdjs.DemoZoneCode.GDEnemyObjects3.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.DemoZoneCode.GDbulletObjects3.createFrom(runtimeScene.getObjects("bullet"));

gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDbulletObjects3Objects, gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDEnemyObjects3Objects, false, runtimeScene, false);
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DemoZoneCode.GDEnemyObjects3 */
/* Reuse gdjs.DemoZoneCode.GDbulletObjects3 */
{for(var i = 0, len = gdjs.DemoZoneCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDEnemyObjects3[i].returnVariable(gdjs.DemoZoneCode.GDEnemyObjects3[i].getVariables().getFromIndex(0)).sub(25);
}
}{for(var i = 0, len = gdjs.DemoZoneCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDbulletObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.DemoZoneCode.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DemoZoneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.DemoZoneCode.GDEnemyObjects2[i].getVariableNumber(gdjs.DemoZoneCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.DemoZoneCode.condition0IsTrue_0.val = true;
        gdjs.DemoZoneCode.GDEnemyObjects2[k] = gdjs.DemoZoneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.DemoZoneCode.GDEnemyObjects2.length = k;}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DemoZoneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.DemoZoneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.DemoZoneCode.eventsList0x68f0cc
gdjs.DemoZoneCode.eventsList0x67bb04 = function(runtimeScene) {

}; //End of gdjs.DemoZoneCode.eventsList0x67bb04
gdjs.DemoZoneCode.eventsList0x68f01c = function(runtimeScene) {

{


gdjs.DemoZoneCode.eventsList0x68f0cc(runtimeScene);
}


{


gdjs.DemoZoneCode.eventsList0x67bb04(runtimeScene);
}


}; //End of gdjs.DemoZoneCode.eventsList0x68f01c
gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.DemoZoneCode.GDEnemyObjects2});gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.DemoZoneCode.GDPlayerObjects2});gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.DemoZoneCode.GDEnemyObjects2});gdjs.DemoZoneCode.eventsList0x70d0ec = function(runtimeScene) {

{



}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), "clock");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDEnemyObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clock");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDEnemyObjects2Objects, gdjs.randomInRange(0, 200), gdjs.randomInRange(0, 1600), "");
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(0.5);
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "DiffTimer");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(0.05);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DiffTimer");
}}

}


{

gdjs.DemoZoneCode.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DemoZoneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.DemoZoneCode.GDEnemyObjects2[i].getAverageForce().getLength() == 0 ) {
        gdjs.DemoZoneCode.condition0IsTrue_0.val = true;
        gdjs.DemoZoneCode.GDEnemyObjects2[k] = gdjs.DemoZoneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.DemoZoneCode.GDEnemyObjects2.length = k;}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DemoZoneCode.GDEnemyObjects2 */
gdjs.DemoZoneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDEnemyObjects2[i].rotateTowardPosition((( gdjs.DemoZoneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.DemoZoneCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.DemoZoneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.DemoZoneCode.GDPlayerObjects2[0].getPointY("")), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.DemoZoneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDEnemyObjects2[i].addForceTowardObject((gdjs.DemoZoneCode.GDPlayerObjects2.length !== 0 ? gdjs.DemoZoneCode.GDPlayerObjects2[0] : null), 600, 1);
}
}}

}


{

gdjs.DemoZoneCode.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.DemoZoneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDPlayerObjects2Objects, gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DemoZoneCode.GDEnemyObjects2 */
/* Reuse gdjs.DemoZoneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects2[i].returnVariable(gdjs.DemoZoneCode.GDPlayerObjects2[i].getVariables().get("HP")).sub(1);
}
}{for(var i = 0, len = gdjs.DemoZoneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.DemoZoneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DemoZoneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.DemoZoneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.DemoZoneCode.GDPlayerObjects1[i].getVariables().get("HP")) <= 0 ) {
        gdjs.DemoZoneCode.condition0IsTrue_0.val = true;
        gdjs.DemoZoneCode.GDPlayerObjects1[k] = gdjs.DemoZoneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.DemoZoneCode.GDPlayerObjects1.length = k;}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


}; //End of gdjs.DemoZoneCode.eventsList0x70d0ec
gdjs.DemoZoneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.DemoZoneCode.eventsList0x70e7b4(runtimeScene);
}


{


gdjs.DemoZoneCode.eventsList0x682c84(runtimeScene);
}


{


gdjs.DemoZoneCode.eventsList0x68f01c(runtimeScene);
}


{


gdjs.DemoZoneCode.eventsList0x70d0ec(runtimeScene);
}


}; //End of gdjs.DemoZoneCode.eventsList0x5b6e18


gdjs.DemoZoneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DemoZoneCode.GDPlayerObjects1.length = 0;
gdjs.DemoZoneCode.GDPlayerObjects2.length = 0;
gdjs.DemoZoneCode.GDPlayerObjects3.length = 0;
gdjs.DemoZoneCode.GDPlayerObjects4.length = 0;
gdjs.DemoZoneCode.GDbulletObjects1.length = 0;
gdjs.DemoZoneCode.GDbulletObjects2.length = 0;
gdjs.DemoZoneCode.GDbulletObjects3.length = 0;
gdjs.DemoZoneCode.GDbulletObjects4.length = 0;
gdjs.DemoZoneCode.GDcursorObjects1.length = 0;
gdjs.DemoZoneCode.GDcursorObjects2.length = 0;
gdjs.DemoZoneCode.GDcursorObjects3.length = 0;
gdjs.DemoZoneCode.GDcursorObjects4.length = 0;
gdjs.DemoZoneCode.GDEnemyObjects1.length = 0;
gdjs.DemoZoneCode.GDEnemyObjects2.length = 0;
gdjs.DemoZoneCode.GDEnemyObjects3.length = 0;
gdjs.DemoZoneCode.GDEnemyObjects4.length = 0;
gdjs.DemoZoneCode.GDDiffTextObjects1.length = 0;
gdjs.DemoZoneCode.GDDiffTextObjects2.length = 0;
gdjs.DemoZoneCode.GDDiffTextObjects3.length = 0;
gdjs.DemoZoneCode.GDDiffTextObjects4.length = 0;
gdjs.DemoZoneCode.GDHPTextObjects1.length = 0;
gdjs.DemoZoneCode.GDHPTextObjects2.length = 0;
gdjs.DemoZoneCode.GDHPTextObjects3.length = 0;
gdjs.DemoZoneCode.GDHPTextObjects4.length = 0;

gdjs.DemoZoneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['DemoZoneCode'] = gdjs.DemoZoneCode;

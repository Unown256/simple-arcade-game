gdjs.DemoZoneCode = {};
gdjs.DemoZoneCode.GDPlayerObjects1= [];
gdjs.DemoZoneCode.GDPlayerObjects2= [];
gdjs.DemoZoneCode.GDbulletObjects1= [];
gdjs.DemoZoneCode.GDbulletObjects2= [];
gdjs.DemoZoneCode.GDcursorObjects1= [];
gdjs.DemoZoneCode.GDcursorObjects2= [];

gdjs.DemoZoneCode.conditionTrue_0 = {val:false};
gdjs.DemoZoneCode.condition0IsTrue_0 = {val:false};
gdjs.DemoZoneCode.condition1IsTrue_0 = {val:false};


gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.DemoZoneCode.GDbulletObjects1});gdjs.DemoZoneCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.DemoZoneCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.DemoZoneCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDcursorObjects1[i].putAround(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, 0);
}
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


gdjs.DemoZoneCode.condition0IsTrue_0.val = false;
{
gdjs.DemoZoneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DemoZoneCode.condition0IsTrue_0.val) {
gdjs.DemoZoneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.DemoZoneCode.GDbulletObjects1.createFrom(runtimeScene.getObjects("bullet"));
{for(var i = 0, len = gdjs.DemoZoneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.DemoZoneCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.DemoZoneCode.GDPlayerObjects1[i].getPointX("")), (gdjs.DemoZoneCode.GDPlayerObjects1[i].getPointY("")), gdjs.DemoZoneCode.mapOfGDgdjs_46DemoZoneCode_46GDbulletObjects1Objects, (gdjs.DemoZoneCode.GDPlayerObjects1[i].getAngle()), 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.DemoZoneCode.eventsList0xb4be0


gdjs.DemoZoneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DemoZoneCode.GDPlayerObjects1.length = 0;
gdjs.DemoZoneCode.GDPlayerObjects2.length = 0;
gdjs.DemoZoneCode.GDbulletObjects1.length = 0;
gdjs.DemoZoneCode.GDbulletObjects2.length = 0;
gdjs.DemoZoneCode.GDcursorObjects1.length = 0;
gdjs.DemoZoneCode.GDcursorObjects2.length = 0;

gdjs.DemoZoneCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['DemoZoneCode'] = gdjs.DemoZoneCode;

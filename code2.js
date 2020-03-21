gdjs.GameOverCode = {};
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDbtnObjects1= [];
gdjs.GameOverCode.GDbtnObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDbtnObjects1Objects = Hashtable.newFrom({"btn": gdjs.GameOverCode.GDbtnObjects1});gdjs.GameOverCode.eventsList0x5b6e18 = function(runtimeScene) {

{

gdjs.GameOverCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDbtnObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


}; //End of gdjs.GameOverCode.eventsList0x5b6e18


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDbtnObjects1.length = 0;
gdjs.GameOverCode.GDbtnObjects2.length = 0;

gdjs.GameOverCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;

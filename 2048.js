/**
 * Created by s on 2017/6/10.
 */
window.onload=function(){
    var app= new PIXI.Application(1000,800,{backgroundColor:0x6495ED});
    document.body.appendChild(app.view);
    var pixiText=new PIXI.Text('2048');
    pixiText.x=300;
    pixiText.y=200;
    app.stage.addChild(pixiText);
}
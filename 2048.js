/**
 * Created by s on 2017/6/10.
 */
window.onload=function(){
    var app= new PIXI.Application(screen.width,screen.height,{backgroundColor:0x6495ED});
    document.body.appendChild(app.view);
    var style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: app.renderer.width / 5,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440
    });
    var pixiText=new PIXI.Text('2048',style);
    pixiText.x = app.renderer.width / 2;
    pixiText.y = app.renderer.height / 6;
    pixiText.anchor.set(0.5);
    app.stage.addChild(pixiText);

    var grid=[];
    for(var i=0;i<4;i++){
        grid[i]=[0,0,0,0];
    }

    var boxwidth=app.renderer.width ;
    var rowIndex = randomNumber();
    var lineIndex = randomNumber();
    grid[lineIndex][rowIndex]=2;


    for(var i=0;i<4;i++) {
        for(var j=0;j<4;j++) {
            if(grid[i][j]===2) {
                randomGrid(j, i, grid[i][j]);
            }
            else {
                initialGrid(j,i)
            }
        }
    }

    function randomNumber(){
        return Math.floor(Math.random()*4);
    }

    function initialGrid(row,line) {
        var graphics = new PIXI.Graphics();
        graphics.lineStyle(8, 0x6495ED, 1);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(boxwidth / 6 + row * boxwidth / 6, app.renderer.height / 3 + line * boxwidth / 6, boxwidth / 6, boxwidth / 6);
        app.stage.addChild(graphics);
    }

    function randomGrid(row,line,number) {
        var graphics = new PIXI.Graphics();
        graphics.lineStyle(8, 0x6495ED, 1);
        graphics.beginFill(0xEEEE00, 1);
        graphics.drawRect(boxwidth / 6 + row * boxwidth / 6, app.renderer.height / 3 + line * boxwidth / 6, boxwidth / 6, boxwidth / 6);
        app.stage.addChild(graphics);

        var number = new PIXI.Text(number, {fontSize: app.renderer.width / 8, fill: ['#ffffff']});
        number.x = boxwidth / 6 + (row + 1) * boxwidth / 6 - boxwidth / 12;
        number.y = app.renderer.height / 3 + (line + 1) * boxwidth / 6 - boxwidth / 12;
        number.anchor.set(0.5);
        app.stage.addChild(number);
    }

    document.addEventListener('keydown',function(event){
        if(event.key==='ArrowRight'){
            console.log(event);
        }
    })
}
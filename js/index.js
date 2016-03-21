window.onload=function(){
	var bird={
		x:140,
		y:264,
		w:40,
		h:40,
	};
	var guan=[
		{
			top:{x:220,y:0,w:50,h:250},
			bottom:{x:220,y:350,w:50,h:228}
		},{
			top:{x:400,y:0,w:50,h:250},
			bottom:{x:400,y:350,w:50,h:228}
		}
	]
	var ctx=document.querySelector("#canvas").getContext('2d');
	//ctx.fillRect(bird.x,bird.y,bird.w,bird.h);
	var draw=function(){
         ctx.clearRect(0,0,320,568);
		//画小鸟
		bird.y+=1;
         //ctx.fillRect(bird.x,bird.y,bird.w,bird.h);
        ctx.drawImage(document.querySelector('#tupianone'),0,0,112,82,bird.x,bird.y,bird.w,bird.h)
         //画管道
         var vas;
         for(var i=0;i<guan.length;i++){
         	var d=guan[i];
         	d.top.x-=1;
         	d.bottom.x-=1;
         	//ctx.fillRect(d.top.x,d.top.y,d.top.w,d.top.h);
            ctx.drawImage(document.querySelector('#tupiantwo'),0,0,91,360,d.top.x,d.top.y,d.top.w,d.top.h);
         	//ctx.fillRect(d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);
            ctx.drawImage(document.querySelector('#tupianthree'),0,0,87,198,d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);
         	if(recvsrec(bird,d.top)||recvsrec(bird,d.bottom)){
         		vas=true;
         	}
         	if(d.top.x<=-d.top.w){
         		d.top.x=320;
         		d.bottom.x=320
         		var h=Math.random()*100+250;
		        d.top.h=h;
		        d.bottom.y=h+100;
         	}
         }
         	if(vas){
         		return;
         	}

         //边界判断
		if(bird.y>=568-40){
			ctx.fillRect(140,528,bird.w,bird.h);
		}else if(bird.y<=0){
			ctx.fillRect(140,0,bird.w,bird.h);
		}else{
			window.requestAnimationFrame(draw);
		}
	}
	canvas.onclick=function(){
		bird.y-=20;
	}
	window.requestAnimationFrame(draw);
  //判断矩形碰撞
  //rect0  
	var recvsrec =  function(rect0,rect1){
    if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) {
      return false;
    } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) {
      return false;
    } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) {
      return false;
    } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) {
      return false;
    }
    return true;
  };

}
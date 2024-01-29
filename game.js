
Game = Object.create({
	name:"FlappyFish",
	load:function(graphics) {
	},
	init:function() {
		if (!App.ext.useragent.ie){
		this.track0 = new App.client._Audio.MultiChannelSound("sound.ogg",1);
		this.track1 = new App.client._Audio.MultiChannelSound("qubodupImpactMeat01.ogg",1);
		this.track2 = new App.client._Audio.MultiChannelSound("splash.ogg",1);
		setTimeout(function(){
			App.client.update.state.current.track0.play();
		//	App.client._Audio.set(App.client.update.state.current.track1);
			},1000)}
		this.c = [];
		this.cx = [];
		this.coff1 = 0;
		this.coff2 = this.app.client.setWidth;
		this.cloudSize = 5;
		this.cc = 20 + Math.floor(this.app.client.setWidth/this.cloudSize);
		this.viewX = 0;
		this.cloudX = this.app.client.setWidth/1.5;
		this.cloudY = Math.random()*100;
		this.gover = 0;
		for(var i=this.cc;i>=0;--i)
			this.cx[i] = i*this.cloudSize;
			
		this.WaterY = 0;
		this.cloudSize = 15;
	this.a = 0;this.t = 0;
		this.WaterY = 0;
		this.cloudSize = 15;
		this.continue = false;
		this.FishY = -200;
		this.title = this.graphics.load("Title","images/flappyfish");
		this.getready = this.graphics.load("Getready","images/getready");
		this.gameover = this.graphics.load("Gameover","images/gameover");
		this.tubes = this.graphics.load("tube","images/tube");
		this.box = this.graphics.load("box","images/box");
		
		this.flappyfishArray = [];
		this.flappyfishArray[0] = this.graphics.load("F00","images/FlappyFish0");
		this.flappyfishArray[1] = this.graphics.load("F02","images/FlappyFish1");
		this.flappyfishArray[2] = this.graphics.load("F01","images/FlappyFish2");
		
		this.flappyfishArray[3] = this.graphics.load("B01","images/FlappyFishB01");
		this.flappyfishArray[4] = this.graphics.load("B02","images/FlappyFishB02");
		this.flappyfishArray[5] = this.graphics.load("B03","images/FlappyFishB03");
		this.flappyfishArray[13] = this.graphics.load("B05","images/FlappyFishB04");
		this.flappyfishArray[14] = this.graphics.load("B06","images/FlappyFishB05");
		this.flappyfishArray[6] = this.graphics.load("B04","images/FlappyFishCC");
		
		this.flappyfishArray[7] = this.graphics.load("T0L","images/FlappyFishT0L");
		this.flappyfishArray[8] = this.graphics.load("T0R","images/FlappyFishT0R");
		this.flappyfishArray[9] = this.graphics.load("F0L","images/FlappyFishOutline");
		this.flappyfishArray[10] = this.graphics.load("F03","images/FlappyFish3");
		this.flappyfishArray[11] = this.graphics.load("F04","images/FlappyFish4");
		this.flappyfishArray[12] = this.graphics.load("Stop","images/FlappyFishStart");
		this.splash = 0;
		this.SplashY = 0;
		this.score = 0;
		
		this.buttonfade = 1;
		this.rate = false;
		this.start = false;
		this.score = false;
		this.FishSpeed = 1;
		this.FishAngle = 0;
		this.birdimg = 0;
		this.hit = false;
		this.TubeX = 0;
		this.TubexX = 0;
		this.oldscore= App.client._Cookies.readCookie("score");
		this.best = false;
		this.soundsplash = false;
		this.tubeArray = [];
	this.c = [
	"#12DD12",
	"#52DD22",
	"#A2DDD2",
	"#D2DDA2",
	"#12DD52",
	"#12DD12"
	];
	var yyy = Math.random()*200;
		for(var i=255;i>0;--i)
		{
		this.TubeX++;
		
		var yy = Math.sin(this.TubeX)*100;
		if (i%3==0)
		var yy = Math.cos(this.TubeX)*100;
			this.tubeArray.push({x:200+(130*i),y:yyy+-250+yy});
			this.tubeArray.push({x:200+(130*i),y:yyy+250+yy});
		}
		return true;
	},
	isHit:function(){
		if (this.gover)
			return;
		var os = App.client._Cookies.readCookie("score");
		if (this.score>os)
			App.client._Cookies.createCookie("score",this.score,"256"),this.oldscpre=this.score,this.best=true;
			else
			this.oldscore = os;
			setTimeout(function(){
		var u = false;
		if (App.client.update.state.current.score>App.scores[2].score)
			u=prompt("Congratulations! You've made a highscore!");
			
			

function getData(name,score) {

  var xmlHttp = createXMLHttp();
  xmlHttp.open('get', 'update.php?name='+name+'&score='+score, true);
  xmlHttp.send(null);
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status === 200) {
        App.scores = {};
		eval(xmlHttp.responseText);
      } else {
      }
    } else {
      //still processing
    }
  };
}
			
			
			
			
			
			var o = false;
		if (u)
			o = getData(u,App.client.update.state.current.score);
			else
			console.log('nope');
			},1500);
		if (!App.ext.useragent.ie)
			App.client.update.state.current.track1.play();
		this.FishAngle = 15;
		this.FishSpeed = 0;
		App.ext.input.duration = 0;
		this.gover = true;
		this.goverfade = 0;
		this.hit = false;
	},
	tube:function(x,y){
	for(var i=4;i>0;--i)
		this.visuals.image_ext(this.tubes,x-2,y,1,1,0);
	},
	update:function() {
			if (App.ext.input.pressed)
				this.continue = true;
			
			if (this.t<22)
				this.t++;
				else
				if (this.a<0.9)
				this.a+=0.1;
				else
				this.a = 1;
			if (this.cloudX>-140)
				this.cloudX -= 1*App.delta;
			else{
				this.cloudX = this.app.client.setWidth + 140;
				this.cloudY = Math.random()*200;
				} 
				
			for(var i=this.cc;i>=0;--i)
				if (-this.viewX +this.cx[i]<-this.cloudSize*5)
					this.cx[i] = this.viewX +this.app.client.setWidth+this.cloudSize*5;
			if (!this.continue)
				return;
				
			if (this.FishAngle<45)
			this.FishAngle +=(0.1 - (this.FishAngle/100))*App.delta;
			
			if (this.FishAngle>-25)
				this.FishAngle +=0.1*App.delta;
			
			if (this.FishSpeed<15)
			this.FishSpeed+=(this.FishAngle/10)*App.delta;
			this.FishY+=this.FishSpeed;
			var fy = this.FishY+5+ Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.85;
			if ((fy<0)||((fy>480*App.scale)&&(fy<410*App.scale)))
			{
				if (this.hit==false)
				{
					this.hit = true;
					this.isHit();
					}
			}
			if (!this.gover)
			if ((this.FishY>100))
			{
				if (this.hit==false)
				{
					this.hit = true;
				this.isHit();
				}
			}
		if (!this.gover){
			this.TubexX=this.viewX;
			this.birdimg =1-Math.round(Math.cos(this.viewX/15)*1);
			if (App.ext.input.duration)
				{
				this.FishAngle-=(App.ext.input.duration/10)*App.delta;
				this.birdimg = 10;
				}
			if(App.ext.input.released)
				{
				if (!App.ext.useragent.ie)
				App.client.update.state.current.track0.play();
				this.FishAngle-=(5+App.ext.input.duration/10)*App.delta;
				}
		}
			else
			this.birdimg= 11;
			if (this.FishAngle<-5)
				this.FishAngle = -5;
				else
			if (this.FishAngle>45)
				this.FishAngle = 45;
			//if (!App.ext.input.pressed)
			//this.FishY +=2;
			this.FishSpeed*=0.9;
			if (this.continue)
				this.viewX +=1*App.delta;
		return true;
	},
	draw:function() {

		this.visuals.rect_gradient(this.app.client.setWidth*0.5,this.app.client.setHeight*0.5,this.app.client.setWidth,this.app.client.setHeight,
									1,1,1,"#4cc1ca","#FFFFFF",0);
		//Clouds
		for(var i=this.cc/2;i>=0;--i){
			this.visuals.circle(+i*10,+Math.sin(i+i)*Math.sin(i+i/2)*15+ this.app.client.setHeight*0.65 + this.WaterY,this.cloudSize*1.2,'#FFFFFF');
			this.visuals.circle(+i*10,+Math.sin(i+i)*Math.sin(i+i/2)*15+ this.app.client.setHeight*0.73 + this.WaterY,this.cloudSize*1.5,'#DDDDDD');
			}

		//this.visuals.rect(this.app.client.setWidth/2, +this.app.client.setHeight*0.85,this.app.client.setWidth,140,"#FFFFFF");
		//Ground
		for(var i=this.cc;i>=0;--i)
			this.visuals.circle(i*20,Math.sin(i+i)*Math.sin(i+i/2)*5+ this.app.client.setHeight,this.cloudSize,'#60676d',1);
			
		///Fish
		var vx = this.app.client.setWidth*0.4;
		var vy = this.FishY+5+ Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.85;
		if (!this.continue)
		this.visuals.image_rotate(this.flappyfishArray[this.birdimg],vx,vy,1,this.FishSpeed*8+0,1,0,0);
								else
								if (vy<this.app.client.setHeight*0.91)
		this.visuals.image_rotate(this.flappyfishArray[this.birdimg],vx,vy,1,this.FishAngle*1.2,1,0,0);
								else{
									this.visuals.image_rotate(this.flappyfishArray[this.birdimg],vx, Math.sin(this.viewX/15)*5+this.app.client.setHeight*0.9,
								1,180,1,0,0);
								
								if (!this.soundsplash)
									{
									
									if (!App.ext.useragent.ie)
									App.client.update.state.current.track2.play();
									this.soundsplash = true;
									}
								}
		//Tube
		for(var i=this.tubeArray.length-1;i>=0;--i){
			if((-this.TubexX+this.tubeArray[i].x<400)&&(-this.TubexX+this.tubeArray[i].x>-100))
			this.tube(-this.TubexX+this.tubeArray[i].x,this.tubeArray[i].y);
		if ((vy+5>this.tubeArray[i].y)&&(vy<this.tubeArray[i].y+400)&&(vx+5>-this.TubexX+this.tubeArray[i].x)&&(vx+5<-this.TubexX+this.tubeArray[i].x+50))
			this.hit = true;
			}
								
								
								
		//Water
		this.visuals.rect_ext(0, +this.app.client.setHeight*0.8+ this.WaterY,this.app.client.setWidth,200- this.WaterY,1,0.9,0,"#1C6BA0");
		for(var i=this.cc;i>=0;--i)
		this.visuals.circle(Math.cos(this.viewX/50)*6-this.viewX +this.cx[i]+25,-Math.sin((this.viewX+i)/45)*Math.cos(i/2)*5+ this.app.client.setHeight*0.8  + this.WaterY,this.cloudSize,'#000000',0.7);
		
		for(var i=this.cc;i>=0;--i){
			this.visuals.circle(Math.sin(this.viewX/100)*6-this.viewX +this.cx[i]-25,Math.sin((this.viewX+i)/100)*Math.sin(i/2)*5+ this.app.client.setHeight*0.8 + this.WaterY,this.cloudSize,'#1C6FA0',0.7);			
			this.visuals.circle(Math.cos(this.viewX/100)*6-this.viewX +this.cx[i]+25,-Math.sin((this.viewX+i)/90)*Math.cos(i/2)*5+ this.app.client.setHeight*0.8 + this.WaterY,this.cloudSize,'#1C6FAF',0.7);
			this.visuals.circle(Math.cos(this.viewX/50)*6-this.viewX +this.cx[i]+25,-Math.sin((this.viewX+i)/45)*Math.cos(i/2)*5+ this.app.client.setHeight*0.8  + this.WaterY,this.cloudSize,'#1F6FA0',0.7);
			}
		
		if (!this.continue){
		
		this.visuals.image_ext(this.flappyfishArray[9],-5+this.app.client.setWidth*0.5,15+ Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.4,1,45,0,0,0);
		this.visuals.image_ext(this.flappyfishArray[12],+this.app.client.setWidth*0.5,65+ Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.4,1,45,1,1,1);
		this.visuals.image_ext(this.flappyfishArray[1-Math.round(Math.cos(this.viewX/15)*1)],this.app.client.setWidth*0.5,5+ Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.4,1,45,0,0,0);
		
		this.visuals.image_ext(this.flappyfishArray[7],this.app.client.setWidth*0.65,5+ Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.48,1,0.5,1);
		this.visuals.image_ext(this.flappyfishArray[8],this.app.client.setWidth*0.35,5+ Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.48,1,0.5,1);
		
		
		this.visuals.image_ext(this.getready,this.app.client.setWidth*0.5,Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.25,0.9,1,1);
		
			}
		this.visuals.rect_ext(this.app.client.setWidth*0.5,this.app.client.setHeight*0.5,this.app.client.setWidth,this.app.client.setHeight,1,1-this.a,1,"#000000");
		
		
				
		if (this.hit)
		{
		this.visuals.rect_ext(this.app.client.setWidth*0.5,this.app.client.setHeight*0.5,this.app.client.setWidth,this.app.client.setHeight,1,0.2,1,"#FFFFFF");
			this.isHit();
			this.hit=false;
		}
		if (this.gover){
			this.visuals.image_ext(this.gameover,this.app.client.setWidth*0.5,Math.cos(this.viewX/15)*5+this.app.client.setHeight*0.25,0.9,1,1);
			
			
			this.visuals.image_ext(this.box,this.app.client.setWidth*0.5,this.app.client.setHeight*0.5,0.9,1,1);
			
			
			if (!this.best)
		this.visuals.image_ext(this.flappyfishArray[11],this.app.client.setWidth/3.1,this.app.client.setHeight*0.55,3,0.2,1);
		else
		this.visuals.image_ext(this.flappyfishArray[10],this.app.client.setWidth/3.1,this.app.client.setHeight*0.55,3,0.8,1);
		
		this.visuals.text_ext("Medal",this.app.client.setWidth/5,this.app.client.setHeight*0.43,"#000000",1.5);
		this.visuals.text_ext("Medal",this.app.client.setWidth/5,this.app.client.setHeight*0.43,"#333333",1.5);
		
		
		this.visuals.text_ext("Score",this.app.client.setWidth/1.8,this.app.client.setHeight*0.43,"#000000",1.5);
		this.visuals.text_ext("Score",this.app.client.setWidth/1.8,this.app.client.setHeight*0.43,"#333333",1.5);
		
		this.visuals.text_ext(Math.floor(this.score),this.app.client.setWidth/1.8,this.app.client.setHeight*0.47,"#000000",1.5);
		this.visuals.text_ext(Math.floor(this.score),this.app.client.setWidth/1.8,this.app.client.setHeight*0.47,"#333333",1.5);
		
		
		
		this.visuals.text_ext("Old",this.app.client.setWidth/1.8,this.app.client.setHeight*0.56,"#000000",1.5);
		this.visuals.text_ext("Old",this.app.client.setWidth/1.8,this.app.client.setHeight*0.56,"#333333",1.5);
		
		this.visuals.text_ext(Math.floor(this.oldscore),this.app.client.setWidth/1.8,this.app.client.setHeight*0.60,"#000000",1.5);
		this.visuals.text_ext(Math.floor(this.oldscore),this.app.client.setWidth/1.8,this.app.client.setHeight*0.60,"#333333",1.5);
		
		
		
		this.visuals.image_button(this.flappyfishArray[13],this.app.client.setWidth*0.3,this.app.client.setHeight*0.73,1,function(){
			App.client.update.state.set(App.client._Main,true);},this.flappyfishArray[4],1,1,this.buttonfade,1);
		this.visuals.image_button(this.flappyfishArray[14],this.app.client.setWidth*0.7,this.app.client.setHeight*0.73,1,function(){
		 FB.ui(
      {
       method: 'feed',
       name: 'Share Flappy Fish: The Experience',
       caption: 'Good choice, number one fan, flappy all time. Much fish, so bird, many flap',
       description: (
          'Dignity is only a small price to pay when you have flying fish at hand ' +
          'The power of flight, bringing the fish to surface, ' +
          'How many sandwiches will you eat before sunday?'
       ),
       link: 'https://apps.facebook.com/flappyfishthex/',
       picture: 'https://ryanspice.com/flappyfish/images/FlappyFish0.png'
      },
      function(response) {
        if (response && response.post_id) {
        } else {
        }
      }
    );
		},this.flappyfishArray[3],1,1,this.buttonfade,1);
			
			}
			
			this.score = Math.floor((this.TubexX/180));
			
		if (!this.gover)
		if (this.continue){
		this.visuals.text_ext(Math.floor(this.score),this.app.client.setWidth/2.1,this.app.client.setHeight*0.201,"#000000",2)
		this.visuals.text_ext(Math.floor(this.score),this.app.client.setWidth/2.1,this.app.client.setHeight*0.2,"#FFFFFF",2)}
		return true;		
	}
});

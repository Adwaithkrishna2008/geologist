class Stone{
	constructor(x,y,width,height)
	{
	
	var options = {
		density:12,
		friction: 0.9,
		restitution:0.8
	  };
	this.body=Bodies.rectangle(x,y,width,height, options)
		World.add(world, this.body);
      this.width=width;
      this.height = height;

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0, 0, this.width, this.height);
            pop();
	}

};
var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0;
var avg;

function setup() {
  createCanvas(400,400);
  average_weight();
}

function average_weight(){
for (j=0;j<weight.length;j+=1){
  sum = sum + weight[j]
}
avg = sum/weight.length; 
fill("blue")
textSize (20)
text(avg,200,200)
}


function draw() 
{



}

 


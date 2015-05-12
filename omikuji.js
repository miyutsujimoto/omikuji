<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>JavaScriptの練習</title>
</head>
<body>
<h1>見出し</h1>
<p id="msg">こんにちは！</p>

 <script>
/*
    var miyu;
	miyu="kawaii";
	console.log(miyu);
	
	
	//aaa
	var x;
    x = 100 % 3;
    console.log(x); 
	x = x+5; //6
	console.log(x);
	x += 10; //イコール x = x+10
	x++;
 	console.log(x);
  
	var s;
	s = "hello";
	s = "hel\"lo";
	console.log(s);


 var score = 50;
 if (score > 60) {
  console.log("ok!");
 } else if (score > 40){
  console.log("soso..");
}  else {
  console.log("ng!");
 }
 

 
 var myu = "hello";
 
 if (myu ==="hi"){ 
   console.log(myu)
 } else{
   console.log("myu");
   }
   
  
   
   var max, x, y ;
   x = 13;
   y = 4;
   max = (x > y) ? x : y;
   console.log(max);

	
	var signal = "green";
	 switch (signal) {
	  case "red":
	     console.log("stop!");
         break;
      case "green":
         console.log("go!");
         break;
      case "yellow":
         console.log("slow down!");
         break;
      default:
         console.log("wrong signal!");
         break;	
	
	}

		
	var i = 33;
	do {
	 	 i++;
	 console.log(i);
	} while (i < 10)
	    
  var miyu =Math.random();
   console.log(miyu);

　　alert("hello");
      //小窓表示
   var answer = confirm("are you sure?")
   console.log(answer);
     //yes or no
   if (confirm("本当に削除しますか？")) {
     //削除処理
   }
   
   var name = prompt("お名前は？")
　　console.log(name);
    　//入力窓表示

	
	function hallo(name) {
	 console.log("hi " + name);
	}
	
	hallo("tom");
	hallo("jim");
	hallo("mary");
	
	//引数＝材料　返り値＝製品（材料からできたもの）	

     function hello(name) {
	  return "welcome to Kurihira " + name ;
	 }	
	
	 var greet = hello("miyu");
	  console.log(greet);

 var i = 0;
  function show(){
    console.log(i++);
  }	  
  setInterval(function(){
   show();
  },1000);


 var score = [100,200,300,500]
 score[3]=400;
  console.log(score);
  
  console.log(score[0]);
  

		
		
	var user = {
	email: "miyu@gmail.com",
	score: 80,
	
	greet: function(name) {
	 console.log("hello, " + name);
	}
   //引数が()で処理が{}　関数には引数がある　無い場合もある()	
	};
    console.log(user.email);
    user.greet("miyu");

	var s = new String("miyu"); //string=文字列
	console.log(s.length); //length=何文字有るのかの大きさ
	console.log(s.replace("m","M"));


    var a = new Array(100,300,200);　//array=配列　var a = []でかきかえれる
    console.log(a.length); //ここでは３つなので３が表示される
    a.push(500);
    console.log(a);
    a.splice(1,1); //いまのところはlengthの時だけ１からカウントする (何番目の文字,そこからいくつけすか)
    console.log(a); 

	
	console.log(Math.PI);
	console.log(Math.ceil(5.3));
	console.log(Math.floor(5.3));
	console.log(Math.round(5.3));
	console.log(Math.random() * 3); //random でつくる場合は *数字でそこまでの数字がランダムで出る
	
	var number = Math.floor(Math.random() * 3);
    console.log(number);



    window.location.href="http://yahoo.co.jp"

*/
 var e = document.getElementById("msg");
 e.textContent = "hello!";
 e.style.color = "red";

		
	
 </script>
 



 <h1>みゆかわいい</h1>
 <h3>みゆかわいい</h3>　//数値が下がるごとに小さくなる
 <p>みゆやせよう</p> //普通の文章　パラグラフ
</body>
</html>

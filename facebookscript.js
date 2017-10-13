//This Function Will Read the separated URL Lines,get the Facebook ID , Get the Facebook Name From URL
function Converttoexcel(){
var fs = require('fs');
var jsonexport = require('jsonexport');
var getFacebookIds = require('get-facebook-id');
var jsonfile = require('jsonfile');
var csv = require('csv-array');
var txttocsv = fs.readFileSync('test.txt', 'utf-8');//
var remove= txttocsv.replace(/(?:https?:\/\/)?(?:www\.)?(facebook)\.(com)\/([search||osamakassim2013||help||careers||campaign||browse||data||friends||Fursatak])\w+\//g,'');
fs.writeFileSync("final-test.csv",remove,'utf-8');	
 csv.parseCSV("final-test.csv", function(data){

 //This Loop Will Put the separated URL in array
	  var a = [];
    var l = data.length;
    for(var i=0; i<l; i++) {
        for(var j=i+1; j<l; j++) {
           
            if (data[i] === data[j])
              j = ++i;
        }
        a.push(data[i]);
    }
console.log(a);
var wordArray = a.join("\n");	//Each Element of the Array in separated Line 
fs.writeFileSync("final-test.csv",wordArray,'utf-8');
fs.writeFileSync("test.txt",wordArray,'utf-8');
var arrayid = wordArray;//Array To get the name of Facebook Page name + Facebook ID 
var pushedarray=[];
var Array =  arrayid.replace(/(?:https?:\/\/)?(?:www\.)?(facebook)\.(com)\//g,''); // Push the Name of FB pages.
pushedarray.push(Array);
var newarray = []; 
var linesFB = wordArray.split('\n');
// Facebook ID 
for(var i = 0;i < linesFB.length;i++){
    newarray.push(linesFB[i]);
} 
var idrray = []; 
var lines = Array.split('\n');
for(var i = 0;i < lines.length;i++){
    idrray.push(lines[i]);
} 
getFacebookIds(idrray, function(links) {
  
  //console.log(links);

	var numberFB = links.join("\n");
	

//var jsonString = JSON.stringify(links);
//console.log(jsonString);
//	
	
	var obj=[
     
    ];
	
	
	
	
	
for (i=0; i<lines.length ; i++){
       obj.push({"Name":idrray[i],"id":links[i],"Link":newarray[i]});
}
jsonfile.writeFile('Array1.json', obj, {spaces:3}, function(err){
      console.log(idrray);
});
	

	

//
var reader = fs.createReadStream('Array1.json');
var writer = fs.createWriteStream('test.csv');
 
reader.pipe(jsonexport()).pipe(writer);});
 }, false);}














//This Funcation Will read the HTML File and it will get All anchor Tags 
function readWriteSync() {
var fs = require('fs');
var data = fs.readFileSync('search.html', 'utf-8');	//File name "search"
var newValue=data.replace('<!--','').replace(' !-->',''); //it will remove any comments tag "if found"
var matches = data.match(/(?:https?:\/\/)?(?:www\.)?(facebook)\.(com)\/([a-zA-Z||])\w+\//g);//This will grap all anchor tags in the page.
fs.writeFileSync('search.html', newValue, 'utf-8');//it will retuens the result of removing comments tag.
var wordArray = matches.join("\n");	 //will spilt the result each URL in separated line 
fs.writeFileSync('test.txt', wordArray, 'utf-8'); //the separated URL will be witten in the TXT File. 
}











   


readWriteSync();
Converttoexcel();

	
	
	
	
	
	
	
	
	
	

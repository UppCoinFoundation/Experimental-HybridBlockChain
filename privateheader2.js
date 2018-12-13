//get elements as they are being mined
getBlockelements = function(number) {
        blockheader = eth.getBlock(number);  
        elements = [];
        if (blockheader != null){     
          elements.push(/*string*/removehex(blockheader.parentHash), 
                        /*string*/removehex(blockheader.sha3Uncles), 
                        /*string*/removehex(web3.eth.coinbase),
                        /*string*/removehex(blockheader.stateRoot),
                        /*string*/removehex(blockheader.transactionsRoot),  
                        /*string*/removehex(blockheader.receiptsRoot), 
                        /*string*/removehex(blockheader.logsBloom), 
                        /*object*/numbertohexstring(blockheader.difficulty), 
                        /*number*/numbertohexstring(blockheader.number), 
                        /*number*/numbertohexstring(blockheader.gasLimit), 
                        /*number*/numbertohexstring(blockheader.gasUsed), 
                        /*number*/numbertohexstring(blockheader.timestamp), 
                        /*string*/removehex(blockheader.extraData.slice(0,blockheader.extraData.length-65)), 
                        /*string*/removehex(blockheader.mixHash), 
                        /*string*/removehex(blockheader.nonce))
           return elements;
        }
        else 
          throw false
         }
//test for getBlockelements
getBlockelementstest = function(){
  testcaseelement = ["0000000000000000000000000000000000000000000000000000000000000000", "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", "a6c24f36c5463a1850aab17547ea83c99a56e0a6", "ca2360646c0ffc7f45825e0343b356374ee37dab73ca0c14e4b032c27162b4e6", "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "01", "", "47b760", "", "59b116d0", "64616d6e626c6f636b636861696e000000000000000000000000000000000000a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6", "0000000000000000000000000000000000000000000000000000000000000000", "0000000000000000"]
  for (t = 0; t<testcaseelement.length; t++){
    if(testcaseelement[t] != getBlockelements(0)[t]) {
          throw "Expected " + testcaseelement[t] + ", got " + getBlockelements(0)[t];
}
}
    return true;
}


//convert number to a hex string for rlp encoding
numbertohexstring = function(number) {
    y = number.toString(16);
    //if (number == 0)  * removed this after testdecode() was failing
      //return "";  
 if (((y.length) % 2) != 0){
    return "0" + y;   
    }
  else
      return y;
}


numbertohexstringtest = function() {
  numbertostring =  { 1:"01", 255:"FF", 256:"0100", 65535:"FFFF", 65536:"010000"}
  //keys = Object.keys(numbertostring)
   for(input in numbertostring) {
      console.log("Testing " + input);
      if(numbertostring[parseInt(input)]!= numbertohexstring(parseInt(input)).toUpperCase()) {
      throw "Expected " + numbertostring[parseInt(input)] + ", got " + numbertohexstring(parseInt(input)).toUpperCase();
    }
  }
  return true;
}



//match a hexstring
checkstring = function(string){
    hexstring = /([0-9A-F][0-9A-F])+/
    if (hexstring.exec(string) != null){
      return string
    }
  
    else if (string == ""){
      return string 
    }

    else
      throw false
}

checkstringtest = function() {
   hextest =  {0x00:"0x00", "":""}
   for(input in hextest) {
      console.log("Testing " + input);
      if(hextest[input] != checkstring(input)) {
      throw "Expected " + testcases[input] + ", got " + checkstring(input);
    }
  }
  return true;
}

removehex = function(string){
  return string.replace(/(0x)*/,"")
}

removehextest = function(){
  nohextest = {0x00:"00"}
  for(input in nohextest) {
      console.log("Testing " + input);
      if(nohextest[input] != removehex(input)) {
      throw "Expected " + nohextest[input] + ", got " + removehex(input);
    }
  }
  return true;
}


//test for rlp function
testrlp = function() {
// "input":"expectedoutput"
testcases = {"00":"00", "01":"01", "7F":"7F","81":"8181", "FF":"81FF","0100":"820100", "646F67":"83646F67","":"80","64616d6e626c6f636b636861696e000000000000000000000000000000000000a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6":"b89864616d6e626c6f636b636861696e000000000000000000000000000000000000a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6"};
/* <55 bytes
rlp("0x951918b572dd2606569e36fc62a6ab95e7642898877794c035fa0f6762356d6d")
"a10x951918b572dd2606569e36fc62a6ab95e7642898877794c035fa0f6762356d6d"
*/

for(input in testcases) {
  console.log("Testing " + input);
  if(testcases[input] != rlp(input)) {
      throw "Expected " + testcases[input] + ", got " + rlp(input);
}
}
  return true;
}


//rlp encoding:-https://github.com/ethereum/wiki/wiki/RLP
rlp = function(string) { 
 checkstring(string);
 
 if(string.length == 2) { 
       z = parseInt(string,16)
       if (0 <= z && z <= 127) {
      return  string;
     }
  } 

  else if (string == ""){
      return "80";
     }
 
  else if ((string.length/2) > 55) {
        return numbertohexstring(0xb7 + numbertohexstring((string.length/2)).length/2) + numbertohexstring(string.length/2)+ string; 
    }
        return numbertohexstring((0x80 + string.length/2)) + string; 
  }


rlpheader = function(elements){
           headerrlp = []; 
           for (n = 0; n<elements.length; n++){
              headerrlp.push(rlp(elements[n]));
            }
            return headerrlp;
}


  decode = function(string) {
    checkstring(string);
    byt = string.substring(0,2)
    
    if(parseInt(byt,16) >= 0 && parseInt(byt,16) <= 127) { 
               return byt;
     }
    
    else {
    prefix = parseInt(byt,16);
    }

    if (prefix >= 128 &&  prefix <= 183) {
        shortpayloadlength = prefix - 0x80                //shortpayloadlength = 2digits/1byte
        return string.substring(2,2+shortpayloadlength*2)
     }
    
    if (prefix >= 184 && prefix <= 191){
          longpayloadlength = prefix - 0xb7               
          longpayload = parseInt((string.substring(2,2+longpayloadlength*2)),16)
          endposition = 2+longpayloadlength*2
          return string.substring(endposition,endposition+longpayload*2)
    }

    return error;
 }

     





//test for decode function
testdecode = function() {
// "stringput":"expectedoutput"
//testencodedcases = {00:"0x00", 15:"0x0f", 1024:"0x82004000","0x00":"0x00", "0x0f":"0x0f", "0x0400":"0x820400"};
testencodedcases = {"00":"00", "01":"01", "7F":"7F","8181":"81","81FF":"FF","820100":"0100", "83646F67":"646F67","80":"","b89864616d6e626c6f636b636861696e000000000000000000000000000000000000a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6":"64616d6e626c6f636b636861696e000000000000000000000000000000000000a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6a6c24f36c5463a1850aab17547ea83c99a56e0a6"};
for(key in testencodedcases) {
  console.log("Testing " + key);
    if(testencodedcases[key] != decode(key)) {
      throw "Expected " + testencodedcases[key] + ", got " + decode(key);
    }
}
return true;
}

        
//ecrecover with soliditycontract   
verifysignature = function (string) { 
        headerrlp = rlp(elements) 
        h = web3.sha3(headerrlp)
        sig  = blockheader.extraData.slice(blockheader.extraData.length-130)
        r = "0x" + sig.slice(0,64) 
        s = "0x" + sig.slice(65,129)
        v = sig.slice(130-132)
        return privateheader2.getadd(h, v, r, s);
       
}






     




 








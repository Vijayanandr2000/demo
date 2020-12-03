var request = new XMLHttpRequest();//Create request.
request.open('GET','https://restcountries.eu/rest/v2/all',true)//open.
request.send();//send request.
var data;
//if the rqeuest on load it trigger the function.s
request.onload=function(){
    data=JSON.parse(this.response);
    console.log(data);
    for(let i in data)
    {
    key=Object.keys(data[i]);
    //console.log('ley',key)
    //console.log(key(key))
    val=Object.values(data[i]);
    //console.log('aaa',val)
    for(let j in key)
    {
        //console.log("for loop inside")

        if(key[j]=="flag")
        {
            //console.log(key[j])
            //console.log("inside if loop")
            
            console.log(val[j]);
        }
    }
    }
    
}






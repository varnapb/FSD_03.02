function getdata(){
    console.log("Button clicked");

    // step 1:Create an XHR object
    var xhr = new XMLHttpRequest();
    
    // step 2:Request specification
   xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true)
         
    // step 3:Sending the request
    xhr.send();

    // step 4:Create an event listner
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status ==200){
            // var data = this.responseText;
            // var data =JSON.parse (this.responseText);
            // console.log(data);
            // var output=`<tr>
            // <th>Name</th>
            // <th>Email</th>`
            // for(let i = 0;i<data.length;i++){
               // output +=`<ul><li>${data[i].name}</li><li>${data[i].email}</li></ul>   //use backtick here

                // output += `<tr>
                // <td>${data[i].name}</td>
                // <td>${data[i].email}</td>
                // </tr>`
                function test(data) {
                    console.log(data)
                    var data = JSON.parse(data);
                    let output = `<thread>
                    <tr>
                    <th>Task</th>
                    <th>Status</th>
                    </tr>
                    </thread>`
                    for(let  i = 0;i<data.length;i++){
                if (data[i].completed == true) {
                    output  += `<tr>
                    <td>${data[i].title}</td>
                    <td><input class="form-check-input" type="checkbox" checked="true" disabled="true"></input>`
                } else {
                    output += `<tr>
                    <td>${data[i].title}</td>
                    <td><input class="form-check-input" id="box" type="checkbox" onclick="val()"></input></td>
                    </tr>`
                }
            }
            document.getElementById("tb").innerHTML = output
        }
        count =0;
        function val(c){
            if(c.checked){
                cout++;
                console.log
                displaymsg();
            }
            else{
                count--;
            }
           function displaymsg(){
            let promisefn = new Promise(function(resolve,reject){
                if(count==5){
                    resolve("Congrats!Yiu have completed 5 tasks")
                }
                promisefn.then(function(i){
                    alert(i)
                })
            })
           }
        }
    }
}}
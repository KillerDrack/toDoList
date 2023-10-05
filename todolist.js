const toDoList=[];
add=()=>{
    var inputvalue = document.getElementById("myInput").value;
console.log(inputvalue);
    if(inputvalue){
        toDoList.push({
            content:inputvalue,
            status:true,
            date: new Date()
        })
    }
    const renderDiv= document.getElementById("render")
    renderDiv.innerHTML+=<h1>{{inputvalue}}</h1>
}

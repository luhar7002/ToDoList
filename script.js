var count=0;
function addTask(){
    var task=document.getElementById("input-text").value.trim();
    if(task==="")
    {
        document.getElementById("input-text").style.border="2px solid red";
        alert("Add your Task")
        return;
    }
    count++;
    var list=document.createElement("li");
    list.innerHTML=`<p>task ${count}</p>    ${task} <button class="completed" onclick="toggleComplete(event)">completed</button>`
    document.getElementById("tasks").append(list);
    document.getElementById("input-text").value="";
    document.getElementById("input-text").style.border="none";
}
function toggleComplete(event) {
    event.target.parentElement.classList.toggle("done");
    deleteTask(event);
}
function deleteTask(event)
{
    return event.target.remove();
}
document.getElementById("input-text").addEventListener("keypress",function(event){
    if(event.key==='Enter')
    {
        addTask();
    }
});
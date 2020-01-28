let myArray =[];

//list json 1 ---------------------------------------------------------------
let getTemplateOption = {
    method: 'GET',
    url: 'list.json',
    success: function(response){
        myArray = response
        buildTable(myArray)
        console.log(myArray)
    }
}

//list json 2 ---------------------------------------------------------------
let getTemplateOption2 = {
    method: 'GET',
    url: 'list2.json',
    success: function(response){
        myArray = response
        buildTable(myArray)
        console.log(myArray)
    }
}

//reusable ajax ----------------------------------------------------------------
function getData(option) { 
    $.ajax(option)
}

//declaring the 2 results of the list -----------------------------------------------
let result = getData(getTemplateOption);
let result2 = getData(getTemplateOption2);

//function to build table -----------------------------------------------------------
function buildTable(data){
    var table = document.getElementById("myTable");

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthday}</td>        
                  </tr>`
        table.innerHTML += row
    }
}
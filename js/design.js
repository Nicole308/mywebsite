// var imagesArray = ["boba.jpg", "bubble-tea.jpg", "green-tea.jpg"];

// var value;
// let randomImgs;

function addItem()
{
        
    let bubbleTeaStorage = [];

    if(localStorage.getItem('items'))
    {
        bubbleTeaStorage = JSON.parse(localStorage.getItem('items'));
    }

    bubbleTea = {};

    var selectMat1 = document.getElementById('mat1');
    var selectMat2 = document.getElementById('mat2');
    var selectAdjs = document.getElementById('adjs');
    var selectTop1 = document.getElementById('top1');
    var selectTop2 = document.getElementById('top2');
    var selectTop3 = document.getElementById('top3');

    bubbleTea.name = document.getElementById('name').value;
    bubbleTea.mat1 = selectMat1.options[selectMat1.selectedIndex].text;
    bubbleTea.mat2 = selectMat1.options[selectMat2.selectedIndex].text;
    bubbleTea.adjs = selectAdjs.options[selectAdjs.selectedIndex].text;
    bubbleTea.top1 = selectTop1.options[selectTop1.selectedIndex].text;
    bubbleTea.top2 = selectTop2.options[selectTop2.selectedIndex].text;
    bubbleTea.top3 = selectTop3.options[selectTop3.selectedIndex].text;

    if(bubbleTea.name.length == 0 ||
       bubbleTea.mat1.length == 0 ||
       bubbleTea.adjs.length == 0)
    {
        alert('Name, flavor, adjustment is required');
    }
    else {
        console.log("Creating bubble tea");
        bubbleTeaStorage.push(bubbleTea);

        localStorage.setItem('items', JSON.stringify(bubbleTeaStorage));
        window.location = "./index.html";

    }


}

function printBubbleTeas()
{

    if(localStorage.getItem('items'))
    {
        bubbleTeas = JSON.parse(localStorage.getItem('items'));
        console.log(bubbleTeas);

        let bobaTable = document.createElement("table");
        bobaTable.id = "bobaTable";
        bobaTable.className = "bobaTable";

        var a = document.createElement("a");
        a.href = "./post.html";

        var bubbleTea_container = document.createElement('div');

        bubbleTea_container = bobaTable.insertRow();
        bubbleTea_container.className = "upperContainer";

        nameCell = bubbleTea_container.insertCell();
        
        bubbleTeas.forEach(item => {

            nameCell.className = "card_container"; 
            nameCell.innerHTML += `<img src='./images/boba.jpg' alt='something' height='300px' onclick="getProductName('${item.name}')" value="${item.name}"><a href="./product.html"></a>`;
            nameCell.innerHTML += `<h1> ${item.name}</h1>`
            
            nameCell = bubbleTea_container.insertCell();
            
        });

        document.body.appendChild(bobaTable);
        
    }
}

//This function clears the items in the table
// FOR CLEARING THE WHOLE MENUS (LOCAL STORAGE)
// function clearItems()   {
//     console.log("Clear called")
//     localStorage.clear();
//     document.getElementById('bobaTable').innerHTML = "";
//     printBubbleTeas();
// }

function getProductDetails()
{
    let bubbleTea = localStorage.getItem('test1');
    
    var storedBubbleTeas = JSON.parse(localStorage.getItem('items'));
    let bubbleContainer = document.createElement('div');
    let headerTitle = document.createElement('div');
    bubbleContainer.className = "BobaContent";
    headerTitle.className = "BobaTitle";

    storedBubbleTeas.forEach(item => {
        if(item.name == bubbleTea)
        {
            
            headerTitle.innerHTML += `<h2> ${item.name}</h2>`; 


            if(item.mat2.length == 0 && 
               item.top2.length == 0 &&
               item.top3.length == 0)
            {
                bubbleContainer.innerHTML += `<p>Materials: ${item.mat1}.</p>`
                bubbleContainer.innerHTML += `<p>Adjustment: ${item.adjs}.</p>`;
                bubbleContainer.innerHTML += `<p>Toppings: ${item.top1}.</p>` 
            }
            else {
                bubbleContainer.innerHTML += `<p>Materials: ${item.mat1}, ${item.mat2}</p>`;
                bubbleContainer.innerHTML += `<p>Adjustment: ${item.adjs}</p>`;

                if(item.top3.length == 0){
                    bubbleContainer.innerHTML += `<p>Toppings: ${item.top1}, ${item.top2}.</p>.` 
                }
                else{
                    bubbleContainer.innerHTML += `<p>Toppings: ${item.top1}, ${item.top2}, ${item.top3}.</p>`
                }
                
            }
            
        }
    });
    
    bubbleContainer.innerHTML += `<button class='back_btn' onclick='location.href="./index.html"' type='button'> Cancel </button>`;
    bubbleContainer.innerHTML += `<button class='order_btn' onclick='openForm()' type='button'> Order </button>`;

    document.body.appendChild(headerTitle);
    document.body.appendChild(bubbleContainer);

} 

function getProductName(product)
{
    value = product;
    console.log(value);
    localStorage.setItem('test1', value);
    window.location.href="product.html";
   
}

function displayImages()
{
    var folder = "./images/";
    var img = Math.floor(Math.random() * imagesArray.length);
    randomImgs = folder + imagesArray[img];
}

function openForm()
{
    document.getElementById("myForm").style.display = "block";
}

function closeForm()
{
    document.getElementById("myForm").style.display = "none";
}

function order_notif()
{
    alert("Your order has been received");
    window.location = "./index.html";
}
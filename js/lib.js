const product ={name: "Áo Thi Đấu của câu lạc bộ Manchester United",
                price: "150USD/1 bộ",
                description:"Được sản xuất bởi Adidas.", 
                image:"../assets/images/aodau2627.jpg"};
function inBCC(n)
{
    let result="";
    for(let i = 1; i<=10 ; i++){
        result += `${n} x ${i} = ${n*i}<br>`;
    }
    document.getElementById('result').innerHTML= result;
}
function createItem(obj)
{
    const item=document.createElement("div");
    item.setAttribute("class","container-item");
    // tao 2 khung chua con
    const image = document.createElement("img");
    image.setAttribute("src",obj.image);
    image.setAttribute("alt",obj.name);
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class","container-image");
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class","container-info");
    

    const name = document.createElement("p");
    name.innerHTML = obj.name;

    const price = document.createElement("p");
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.innerHTML = obj.description;

    const link = document.createElement("a");
    link.innerHTML ="More";
    link.setAttribute("href",obj.link);
    
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);
    containerImage.appendChild(image);
    // chen 2 khung chua vao container-item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);
    
    document.getElementById("product-list").appendChild(item);
}

const productList =[
    {
        name: "Áo Thi Đấu của câu lạc bộ Manchester United",
        price: "84USD/1 bộ",
        description: "Được sản xuất bởi Adidas. Dành cho những người hâm mộ câu lạc bộ Manchester United.",
        image: "../assets/images/aodau2627.jpg"
    },

    {
        name: "Áo đấu Đội tuyển Saigon Phantom mùa Xuân 2026 ",
        price: "19USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Saigon Phantom.",
        image: "../assets/images/saigonphantom,.jpg"
    },

    {
        name: "Áo đấu Đội tuyển WAG ",
        price: "19USD/1 bộ",
        description: "Dành cho những người hăm mộ đội WAG. Được tài trợ",
        image: "../assets/images/WAG.jpg"
    },

    {
        name: "Áo thi đấu sân nhà Đội tuyển Nhật Bản World Cup 2026",
        price: "84USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Nhật Bản. Được tài trợ bởi Adidas",
        image: "../assets/images/japan.jpg"
    },

    {
        name: "Áo thi đấu sân khách Đội tuyển Nhật Bản World Cup 2026",
        price: "84USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Nhật Bản. Được tài trợ bởi Adidas",
        image: "../assets/images/japankhach.png"
    },

    {
        name: "Áo thi đấu sân nhà Authentic Đội tuyển Bồ đào nha World Cup 2026",
        price: "114USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Bồ đào nha. Được tài trợ bởi FUMA",
        image: "../assets/images/bodaonha.png"
    },

    {
        name: "Áo thi đấu sân khách Authentic Đội tuyển Bồ đào nha World Cup 2026",
        price: "114USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Bồ đào nha. Được tài trợ bởi FUMA",
        image: "../assets/images/Bodaonhakhach.jpg"
    },

    {
        name: "Áo thi đấu sân nhà Đội tuyển Tây Ban Nha World Cup 2026",
        price: "84USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Tây Ban Nha. Được tài trợ bởi Adidas",
        image: "../assets/images/taybannha.avif"
    },

    {
        name: "Áo thi đấu sân khách Đội tuyển Tây Ban Nha World Cup 2026",
        price: "84USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Tây Ban Nha. Được tài trợ bởi Adidas",
        image: "../assets/images/Taybannhakhach.avif"
    },

    {
        name: "Áo thi đấu Authentic sân khách Đội tuyển Argentina World Cup 2026",
        price: "114USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Argentina. Được tài trợ bởi Adidas",
        image: "../assets/images/argen.avif"
    },

    {
        name: "Áo thi đấu sân nhà Đội tuyển Mexico World Cup 2026",
        price: "84USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Mexico. Được tài trợ bởi Adidas",
        image: "../assets/images/mexico.avif"
    },

    {
        name: "Áo thi đấu sân nhà Đội tuyển Đức World Cup 2026",
        price: "84USD/1 bộ",
        description: "Dành cho những người hăm mộ đội Đức. Được tài trợ bởi Adidas",
        image: "../assets/images/duc.avif"
    },
];

function createItem(obj)
{
    const item=document.createElement("div");
    item.setAttribute("class","container-item");

    item.style.width = "220px";
    item.style.border = "1px solid #470303";
    item.style.padding = "15px";
    item.style.margin = "20px";
    item.style.borderRadius = "10px";
    item.style.boxShadow = "0 2px 8px rgba(67, 20, 20, 0.1)";
    item.style.background = "linear-gradient(to bottom, #0099ff 0%, #00ccff 100%)";
    // tao 2 khung chua con
    const image = document.createElement("img");
    image.setAttribute("src",obj.image);
    image.setAttribute("alt",obj.name);
    image.style.width = "220px";
    image.style.height = "200px";
    image.style.objectFit = "cover";
    item.style.borderRadius = "10px";
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

    const productListDiv = document.getElementById("product-list");
    productListDiv.style.background = "linear-gradient(to left, #00ffcc 0%, #009999 100%)";
    productListDiv.style.padding = "20px";
    item.style.borderRadius = "10px";
    productListDiv.style.display = "flex"; // làm cho sản phẩm nằm ngang
    productListDiv.style.flexWrap = "wrap"; // làm cho sản phẩm tự động xuống dòng khi không đủ chỗ
    productListDiv.style.gap = "50px"; // khoảng cách giữa các sản phẩm
   5
    
    document.getElementById("product-list").appendChild(item);
}     

const baseURL = "https://dummyjson.com/products";
axios.get(baseURL).then(async function (response) {
  const products = response.data.products;
  let phone = "";

  products.forEach((element) => {
    phone += `
    <div class = "phone" style="font-size: small ;">
       <h3> ${element.title} <h3/>
       <img src = "${element.thumbnail}" alt = "phone" style="width : 50% ;"/>
       <a href="aboutProduct.html?id=${element.id}">get details about this product</a>
    <div/>`;
  });

  document.querySelector(".phones").innerHTML = phone;
});

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const baseURL = "https://dummyjson.com/products/" + id;
async function getProducts() {
  const response = await axios.get(baseURL);
  const products = response.data;
  const { title, description, price, thumbnail } = products;

  let product = `
        <div class = "product" style="font-size: small ;">
           <h3> ${title} </h3>
           <img src = "${thumbnail}" alt = "phone" style="width : 50% ;"/>
           <p>${description}</p>
           <h2> $${price} </h2>
        <div/>`;
  document.querySelector(".products").innerHTML = product;
}
getProducts();

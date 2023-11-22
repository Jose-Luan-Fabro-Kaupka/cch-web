let produto_atual = 0;
products = document.querySelectorAll('.product');

function showProduct(indice){
   products.array.forEach((product, i) => {
        if(i === indice){
           products.classList.add('active');
        } else {
           products.classList.remove('active');
        }
    });
}

function prevProduct() {
    currentProduct = (currentProduct === 0) ? products.length - 1 : currentProduct - 1;
    showProduct(currentProduct);
}

function nextProduct() {
    currentProduct = (currentProduct === products.length - 1) ? 0 : currentProduct + 1;
    showProduct(currentProduct);
}
  
showProduct(currentProduct);
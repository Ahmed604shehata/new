// show more products page items 
fetch('/js/items.json')
   .then(response => response.json())
   .then(data => {

    var items_content = document.querySelector('.items_content');
data.forEach(product=>{
   if(product.more){
      items_content.innerHTML += `
      <div class='show_img'>
            <img  src="${product.img}" alt="">

      <div class='show_img_hover'>
         <span><i onclick='addToCartMore(${product.id} , this)' class="fa-solid fa-cart-plus"></i></span>
         <span><i onclick='addToHeart(${product.id} , this)' class="fa-solid fa-heart"></i></span>
         <span><i onclick='sharePage(${product.img.value})' class="fa-solid fa-share"></i></span>
      </div>
      </div>
      `
      }
   })
})

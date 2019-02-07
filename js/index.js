document.addEventListener('DOMContentLoaded', function(){

  const navCart = document.querySelector('.nav__cart')
  const cartHeaderClose = document.querySelector('.cart__header__close')
  const inputRadios = document.querySelectorAll('.form-radio__input')
  const cart = document.querySelector('.cart')
  
  // add item to cart

  // shows when you click cart circle top right
  navCart.addEventListener('click', event => {
    cart.classList.toggle('is-hidden')
  })
  // hides when you click 'X' top right
    cartHeaderClose.addEventListener('click', event => {
      cart.classList.toggle('is-hidden')
    })

  // get the input value
  
    inputRadios.forEach(inputRadio => {
      inputRadio.addEventListener('click', event => {
      
        // Still thinking of best way to get the correct info to pass to
        let radioValue = event.currentTarget.value;
        let itemName = event.currentTarget.getAttribute('data-name')
        let itemPrice = event.currentTarget.getAttribute('data-price')
        let itemSize = event.currentTarget.getAttribute('data-size')

        const item = {}
        item.value = radioValue
        item.name = itemName
        item.size = itemSize
        item.price = itemPrice
        console.log(item)

        const imageContainers = document.querySelectorAll('.product-image__container');


        // NOT IDEAL but will do for now until I figure best way out for opacity 1|0
        imageContainers.forEach(imageContainer => {
          // get the data sku for image container
          let skuCode = imageContainer.getAttribute('data-sku');
          if ( radioValue === skuCode ){
            imageContainer.classList.add('product-image--visible')
            imageContainer.classList.remove('product-image--invisible')
          } else{
            imageContainer.classList.remove('product-image--visible')
            imageContainer.classList.add('product-image--invisible')
          }
        }) 

      })
    })

});
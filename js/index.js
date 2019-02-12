document.addEventListener('DOMContentLoaded', function() {

    const navCart = document.querySelector('.nav__cart')
    const cartHeaderClose = document.querySelector('.cart__header__close')
    const inputRadios = document.querySelectorAll('.form-radio__input')

    const variations = [{
            price: "£13.00",
            name: "100ml",
            image: "./img/aesop-bottle.png",
            soldOut: false,
        },
        {
            price: "£23.00",
            name: "200ml",
            image: "./img/aesop-bottle-200ml.png",
            soldOut: true,
        }
    ]
    let inCart = [];

    const productImage = document.getElementById('product_image');
    const buttonLabel = document.getElementById('button_label');
    const cartUl = document.getElementById('cart');

    let selectedVariation = 0;

    const setVariation = (id) => {
        selectedVariation = id;
        productImageURL = variations[id].image
        productImage.style.backgroundImage = `url(${productImageURL})`
        buttonLabel.innerHTML = `Add to your cart — ${variations[id].price}`;
        buttonLabel.classList.remove('--sold-out');

        if (variations[id].soldOut) {
            buttonLabel.innerHTML = 'Sold out';
            buttonLabel.classList.add('--sold-out');
        }
    }

    setVariation(selectedVariation);

    buttonLabel.addEventListener("click", (e) => {

        const cartItem = inCart.find((v, i) => i === selectedVariation);
        console.log(cartItem);
        const variation = {
            ...variations[selectedVariation],
            qty: 1
        };

        // adding quantity to cartitem
        if (cartItem) {
            inCart.map((v, i) => {
                if (i === selectedVariation) {
                    cartItem.qty = cartItem.qty + 1;
                    return cartItem;
                }
            })
        } else {
            inCart = [
                ...inCart,
                variation
            ]
        }

        console.log(inCart);
    });

    // get the input value

    inputRadios.forEach(inputRadio => {
        inputRadio.addEventListener('click', event => {
            const val = event.target.value;
            setVariation(val);
        })
    })

    // shows when you click cart circle top right
    navCart.addEventListener('click', event => {
        cartUl.classList.toggle('is-hidden')
    })
    // hides when you click 'X' top right
    cartHeaderClose.addEventListener('click', event => {
        cartUl.classList.toggle('is-hidden')
    })

});
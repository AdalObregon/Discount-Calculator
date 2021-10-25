// var originalPrice
// var disscountPrice

function calculateDisscount(price,deal) {
    var percentagePrice = 100 - deal;
    var priceDeal = (price * percentagePrice )/100

    return priceDeal;
}

function onClickButtonPriceDiscount() {
    var inputPrice = document.getElementById("InputPrice");
    var priceValue = inputPrice.value;

    var inputDiscount = document.getElementById("DiscountPrice");
    var discountValue = inputDiscount.value;

    const priceDeal = calculateDisscount(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$ " + priceDeal;
}


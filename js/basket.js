var goods=document.querySelector(".fetured_group");
var cartSum=document.querySelector(".cart_sum");
var all_goods=document.querySelector(".customer_cart");

goods.addEventListener("click", addGoods);
all_goods.addEventListener("click", deleteGood);

var summ=0;

function addGoods(event){
    if(!event.target.dataset.price){
        return;
    }

    var addedItem=document.createElement("div"); //создаем лот в корзине
    /* addedItem.className = "lot_desxription"; */
    addedItem.innerHTML = event.target.dataset.title +"  -  " + '<span class="added_price">'+ event.target.dataset.price +" $" +' </span>';

    var del = document.createElement("a"); // создаем крестик, при нажатии на кот. товар удалятся
    del.innerText = "x";
    del.classList.add('delete-button');
    del.dataset.remove = event.target.dataset.product;
    addedItem.dataset.price = event.target.dataset.price;
    addedItem.appendChild(del);

    all_goods.appendChild(addedItem);
    summ += parseFloat(event.target.dataset.price);
    cartSum.innerText="Total " + summ +" $";
}

function deleteGood(event){
    if(!event.target.dataset.remove) {
        return;
    }

    var parent = event.target.parentNode;

    summ = summ - parseFloat(parent.dataset.price);
    cartSum.innerText="Total " + summ +" $";
    parent.remove();
}

var addItem=document.querySelector(".add_item_btn");

addItem.addEventListener("click", addGoods);

var summ=0;
var totalSumm=document.createElement("span");
    // totalSumm.className="total_right"; //создали спан с классом total_right
function addGoods(event){

    var addedItem=document.createElement("div");
    addedItem.innerHTML = event.target.dataset.title +" - "+ event.target.dataset.price +" руб";
    var total=document.querySelector(".add_test");
    total.appendChild(addedItem);

    total.appendChild(totalSumm);
    summ += parseFloat(event.target.dataset.price);
    totalSumm.innerHTML="Сумма к оплате " + summ +" руб";

}

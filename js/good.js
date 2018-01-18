function  Good(id, title, price) {
    Container.call(this, id);
    this.title = title;
    this.price = price;
}
Good.prototype = Object.create(Container.prototype);
Good.prototype.constructor = Good;

Good.prototype.render = function (jQuerySelector){
    var $goodContainer = $('<div />', { class: 'customer_lot'}); //создааем контейнер дивом с классом кастомер_лот

    var $goodTitle = $('<p />'), {text: this.title });

    var $goodPrice = $('<p>Цена: <span class="lot_price"> + this.price + </span> руб.</p>'});

    var $goodBtn = $('<button />', {
                    class: 'buy_good',
                    'data-id': this.id,
                    text: 'Купить'
});

//Создаем иерархию элементов
$goodTitle.appendTo($goodContainer); //что куда
$goodPrice.appendTo($goodContainer);
$goodBtn.appendTo($goodContainer);

jQuerySelector.append($goodContainer); // куда что
};

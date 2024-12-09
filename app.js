/** 
 * Приложение "Конструктор салатов"
 * 
 * Суть проекта: 
 *  1. Пользователь может собрать себе салат из готовых ингредиентов, КЛИКАЯ по ним (ингредиенты добавляются в "корзинку") 
 *  2. Сумма готового салата пересчитывается с КАЖДЫМ добавленным/убранным ингредиентом 
 *  3. Ингредиенты можно как ДОБАВИТЬ так и УБРАТЬ 
 *  4. Результат при ОБНОВЛЕНИИ страницы НЕ удаляется 
 * 
 * Нюансы:
 *  1. Цена ингредиентов указана за 0.1 кг (100 г) 
 *  2. Вес добавляемого ингредиента (один клик) - 0.015 кг (15 г.) 
 *  3. Вес добавляемого соуса (один клик) - 0.005 кг (5 г.) 
 *  4. Вам нужно составить верную формулу подсчета 
 **/



const products = [
    {
        id: 1,
        title: "Китайская капуста (салат)",
        costPer100G: 149.50,
        weightPerKg: 0.15
    },
    {
        id: 2,
        title: "Маслины",
        costPer100G: 255.00,
        weightPerKg: 0.15
    },
    {
        id: 3,
        title: "Оливки",
        costPer100G: 255.50,
        weightPerKg: 0.15
    },
    {
        id: 4,
        title: "Сыр Моцарелла",
        costPer100G: 390.00,
        weightPerKg: 0.15
    },
    {
        id: 5,
        title: "Сыр Чеддер",
        costPer100G: 350.50,
        weightPerKg: 0.15
    },
    {
        id: 6,
        title: "Брынза",
        costPer100G: 250.50,
        weightPerKg: 0.15
    },
    {
        id: 7,
        title: "Томаты Черри",
        costPer100G: 239.00,
        weightPerKg: 0.15
    },
    {
        id: 8,
        title: "Огурцы Свежие",
        costPer100G: 196.80,
        weightPerKg: 0.15
    },
    {
        id: 9,
        title: "Перец Болгарский",
        costPer100G: 214.50,
        weightPerKg: 0.15
    },
    {
        id: 10,
        title: "Лук Красный",
        costPer100G: 178.00,
        weightPerKg: 0.15
    },
    {
        id: 11,
        title: "Тунец Консервированный",
        costPer100G: 470.00,
        weightPerKg: 0.15
    },
    {
        id: 12,
        title: "Фасоль печеная в томатном соусе",
        costPer100G: 269.00,
        weightPerKg: 0.15
    }
];

const sauces = [
    {
        id: 13,
        title: "Масло оливковое",
        costPer100G: 160.00,
        weightPerKg: 0.5
    },
    {
        id: 14,
        title: "Майонез",
        costPer100G: 160.00,
        weightPerKg: 0.5
    },
    {
        id: 15,
        title: "Чесночный соус",
        costPer100G: 160.00,
        weightPerKg: 0.5
    },
    {
        id: 16,
        title: "Кисло-сладкий соус",
        costPer100G: 160.00,
        weightPerKg: 0.5
    },
];

const productContainer = document.querySelector('.container');
const btn1 = document.querySelectorAll('.btn1');
const btn2 = document.querySelectorAll('.btn2');
const container = document.querySelector('.products');
const sauceContainer = document.querySelector('.sauces');
const list = document.querySelector('.list');

products.forEach(product => {
    container.innerHTML += `
        <div class="product" data-id="${product.id}">
            <p>${product.title}</p>
            <button class="btn1">Добавить</button>
            <button class="btn2">Удалить</button>
        </div>
    `;
});

sauces.forEach(sauce => {
    container.innerHTML += `
        <div class="sauce" data-id="${sauce.id}">
            <p>${sauce.title}</p>
            <button class="btn1" id="btn1">Добавить</button>
            <button class="btn2" id="btn2">Удалить</button>
        </div>
    `;
}); 

btn1.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === this.dataset.id) {
            const $newLi = document.createElement('li');
        $newLi.textContent = products.id.title;
        const $list = document.querySelector('.list');
        $list.appendChild($newLi);
        }
    }
});
        
function getTotal() {
    let totalProduct = 0;
    products.forEach(product => {
    totalProduct += product.id.costPer100G / product.id.weightPerKg;
 });
    let totalSauce = 0;
    sauces.forEach(sauce => {
    totalSauce += sauce.id.costPer100G / sauce.id.weightPerKg;
 });
    totalAll = totalProduct + totalSauce;
    list.innerHTML += `
        <p>Сумма: ${totalAll} руб.</p>
    `;
    appendChild(total)
}

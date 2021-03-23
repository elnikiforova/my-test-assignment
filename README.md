# Тестовое задание
* 1. Написать код функции 'findUnique', которая за один проход вернет все уникальные числа.
const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];
function findUnique (arr) {
    // ...
}
findUnique(array);

* 2. В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено, остальные встречаются ровно по одному разу.  N заранее неизвестно. Определить пропущенное число.
const array = [ 2, 1, 3, 5 ];
function findMissing(arr) {
    // ...
}
findMissing(array); 
 
* 3. Напишите код функции reversePrint(), которая выведет значения переданного ей односвязного списка в обратном порядке (4, 3, 2, 1). Для вывода значений используйте функцию console.log().
var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function reversePrint(linkedList) {
    // ...
}
reversePrint(someList);

* 4. Создать приложение на Angular 9+ с ниже описанным функционалом: 
Главная страница это список книг. Для добавления книги используется модальное окно с формой. В форме должны быть поля: автор, год издания, название книги, кол-во страниц. В списке - автор и название книги. У каждого элемента в списке книг должны быть кнопки edit и remove. При remove книга удаляется из списка, при edit - модальное окно открывается и ее данные подставляются в форму. При добавлении, редактировании и удалении страница не должна перезагружаться.
В качестве хранилища нужно использовать localStorage (при закрытии окна браузера и повторном открытии - данные должны восстанавливаться).
Очень желательно использовать: “ngrx”, “directive”, “pipe”, ”services”. 
Все должно быть разбито на разные компоненты.
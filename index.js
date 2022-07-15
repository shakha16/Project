let all1 = document.querySelector('.all')
let all2 = document.querySelector('.all2')

let alld = document.createElement('div')
let hidden = document.createElement('div')

let span = document.createElement('span')
let num = document.createElement('span')

let but1 = document.createElement('button')
let but2 = document.createElement('button')


alld.classList.add('alld')
hidden.classList.add('hidden')

span.innerHTML = 'В корзине: ㅤтовар'
span.classList.add('span')
num.innerHTML = 0
num.classList.add('num')

but1.classList.add('but1')
but1.innerHTML = 'Показать первые 5'
but2.classList.add('but2')
but2.innerHTML = 'Показать все'


all1.append(alld, but1, but2)

alld.append(span, num)



let arr = [1,2,3,4,5,6,7]
let arr2 = [1,2,3,4,5]





for(item of arr){
    itemBox(item)
}
function itemBox(item) {
    let item4 = document.createElement('div')
    let item1 = document.createElement('div')
    let item2 = document.createElement('div')
    let onetext = document.createElement('div')
    let text2 = document.createElement('div')
    let end = document.createElement('div')
    let one = document.createElement('div')
    let two = document.createElement('div')
    let three = document.createElement('div')
    
    let img = document.createElement('img')
    
    let men = document.createElement('span')
    let you = document.createElement('span')
    let text1 = document.createElement('span')
    let text2_0 = document.createElement('span')
    let text3 = document.createElement('span')
    
    let button = document.createElement('button')
    let buttonh = document.createElement('button')
    
    
    
    item4.classList.add('item')
    item1.classList.add('item1')
    item2.classList.add('item2')
    onetext.classList.add('onetext')
    text2.classList.add('text2')
    end.classList.add('end')
    one.classList.add('one')
    two.classList.add('two')
    three.classList.add('three')
    
    img.src = './images/partfel.png'
    
    men.innerHTML = 'MEN’S CLOTHING (120)'
    men.classList.add('men')
    you.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
    you.classList.add('you')
    text1.innerHTML = 109
    text1.classList.add('text')
    text2_0.innerHTML = 3,9
    text2_0.classList.add('text')
    text3.innerHTML = 120
    text3.classList.add('text')
    
    button.classList.add('button')
    button.innerHTML = 'В избранное'
    buttonh.classList.add('buttonh')
    buttonh.innerHTML = 'Добавлено'
    
    
    item4.append(item1, item2)
    item1.append(img)
    item2.append(onetext, text2, end, button)
    onetext.append(men)
    text2.append(you)
    end.append(one, two, three)
    one.append(text1)
    two.append(text2_0)
    three.append(text3)
    
    all2.append(item4, hidden)



    
    button.onclick = () => {
        num++
        button.classList.toggle('buttonh')
        if(button.classList.contains('buttonh')){
            button.innerHTML = 'Добавлено'
        } else{
            button.innerHTML = 'В избранное'
        }
    }
}
but1.onclick = () => {
    hidden.style.backgroundColor = "white"
    hidden.style.zIndex = "2"
}
but2.onclick = () => {
    hidden.style.zIndex = "-2"
    hidden.style.background = "none"
}
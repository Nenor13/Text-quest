let startBtn = document.querySelector('.start')
let title = document.querySelector('.title')
let startMenu = document.querySelector('.startMenu')

startBtn.addEventListener('click', () => {
    startBtn.parentNode.removeChild(startBtn)
    title.parentNode.removeChild(title)
    setTimeout(() => {
        setTimeout(startMenu.classList.toggle('hidden'), 3000)
    }, 600)
})

let difficult
let note = document.createElement('h2')
let HP = document.createElement('h2')
let health
let maxHealth
let i = 0
let quests = [Mathematic, Logic, English, Puzzle, Programmer]

let easy = document.querySelector('.green')
easy.addEventListener('click', () => {
    difficult = 1
    startMenu.parentNode.removeChild(startMenu)
    note.textContent = 'Уровень сложности: легко'
    note.classList.add('green')
    note.classList.add('cornerR')
    health = 10
    maxHealth = 10
    HP.textContent = `${health}/${maxHealth}`
    HP.classList.add('cornerL')
    HP.classList.add('green')
    body.append(level)
    lvl = 1
    Rand(quests)
})

let medium = document.querySelector('.yellow')
medium.addEventListener('click', () => {
    difficult = 2
    startMenu.parentNode.removeChild(startMenu)
    note.textContent = 'Уровень сложности: средне'
    note.classList.add('yellow')
    note.classList.add('cornerR')
    health = 7
    maxHealth = 7
    HP.textContent = `${health}/${maxHealth}`
    HP.classList.add('cornerL')
    HP.classList.add('yellow')
    body.append(level)
    lvl = 1
    Rand(quests)
})

let hard = document.querySelector('.red')
hard.addEventListener('click', () => {
    difficult = 3
    startMenu.parentNode.removeChild(startMenu)
    note.textContent = 'Уровень сложности: сложно'
    note.classList.add('red')
    note.classList.add('cornerR')
    health = 4
    maxHealth = 4
    HP.textContent = `${health}/${maxHealth}`
    HP.classList.add('cornerL')
    HP.classList.add('red')
    body.append(level)
    lvl = 1
    Rand(quests)
})


let body = document.body
let question
let input
let check
let next
let nLvl
let lvl
let level = document.createElement('h2')
level.classList.add('top')
body.append(note)
body.append(HP)



function Construct(task, answer) {
    question = document.createElement('h1')
    input = document.createElement('input')
    check = document.createElement('h1')
    next = document.createElement('button')

    question.classList.add('title')
    input.classList.add('resize')
    check.classList.add('check')
    next.classList.add('next')
    next.classList.add('pink')
    next.textContent = 'Перейти к следующему вопросу'
    level.textContent = (`Уровень: ${lvl}`)

    question.textContent = task
    body.append(question)
    body.append(input)
    input.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
            check.classList.remove('red')
            if (input.value.toLowerCase() == answer) {
                check.textContent = 'Правильно'
                check.classList.add('green')
                body.append(check)
                body.append(next)
            }
            else {
                check.textContent = 'Неправильно'
                check.classList.add('red')
                body.append(check)
                health--
                input.value = ''
                HP.textContent = `${health}/${maxHealth}`
                if (health == 0) {
                    question.parentNode.removeChild(question)
                    input.parentNode.removeChild(input)
                    check.parentNode.removeChild(check)
                    let loose = document.createElement('h1')
                    loose.textContent = 'ВЫ ПРОИГРАЛИ!'
                    loose.classList.add('loose')
                    body.append(loose)
                    let GameOver = document.createElement('img')
                    GameOver.src = '/images/GameOver.jpg'
                    GameOver.classList.add('GO')
                    body.append(GameOver)
                    let restart = document.createElement('button')
                    restart.classList.add('pink')
                    restart.classList.add('next')
                    restart.textContent = 'Начать заново'
                    body.append(restart)
                    restart.addEventListener('click', () => {health = maxHealth;HP.textContent = `${health}/${maxHealth}`;lvl = 1;loose.parentNode.removeChild(loose);restart.parentNode.removeChild(restart);GameOver.parentNode.removeChild(GameOver);quests = [Mathematic, Logic, English, Puzzle, Programmer];Rand(quests)})
                }
            }
        }
    })
    next.addEventListener('click', () => {
        question.parentNode.removeChild(question)
        input.parentNode.removeChild(input)
        next.parentNode.removeChild(next)
        check.parentNode.removeChild(check)
        lvl++
        Rand(quests)
    })
}




function ConstructIMG(task, link1, link2, link3, link4, answer) {
    question = document.createElement('h1')
    check = document.createElement('h1')
    next = document.createElement('button')
    img1 = document.createElement('img')
    img2 = document.createElement('img')
    img3 = document.createElement('img')
    img4 = document.createElement('img')

    question.classList.add('title')
    check.classList.add('check')
    next.classList.add('next')
    next.classList.add('pink')
    next.textContent = 'Перейти к следующему вопросу'
    level.textContent = (`Уровень: ${lvl}`)
    img1.classList.add('picture1')
    img2.classList.add('picture2')
    img3.classList.add('picture3')
    img4.classList.add('picture4')

    img1.src = link1
    img2.src = link2
    img3.src = link3
    img4.src = link4

    question.textContent = task
    body.append(question)
    body.append(img1)
    body.append(img2)
    body.append(img3)
    body.append(img4)
    img1.addEventListener('click', () => {
        check.classList.remove('red')
        if (answer == 1) {
            check.textContent = 'Правильно'
            check.classList.add('green')
            body.append(check)
            body.append(next)
        }
        else {
            check.textContent = 'Неправильно'
            check.classList.add('red')
            body.append(check)
            health--
            HP.textContent = `${health}/${maxHealth}`
            if (health == 0) {
                question.parentNode.removeChild(question)
                check.parentNode.removeChild(check)
                img1.parentNode.removeChild(img1)
                img2.parentNode.removeChild(img2)
                img3.parentNode.removeChild(img3)
                img4.parentNode.removeChild(img4)
                let loose = document.createElement('h1')
                loose.textContent = 'ВЫ ПРОИГРАЛИ!'
                body.append(loose)
                let GameOver = document.createElement('img')
                GameOver.src = '/images/GameOver.jpg'
                GameOver.classList.add('GO')
                body.append(GameOver)
                let restart = document.createElement('button')
                restart.classList.add('stB')
                restart.classList.add('pink')
                restart.textContent = 'Начать заново'
                body.append(restart)
                restart.addEventListener('click', () => {i = 0;quests = [Mathematic, Logic, English, Puzzle, Programmer];GameOver.parentNode.removeChild(GameOver);health = maxHealth;HP.textContent = `${health}/${maxHealth}`;lvl = 1;loose.parentNode.removeChild(loose);restart.parentNode.removeChild(restart);Rand(quests)})
            }
        }
    })

    img2.addEventListener('click', () => {
        check.classList.remove('red')
        if (answer == 2) {
            check.textContent = 'Правильно'
            check.classList.add('green')
            body.append(check)
            body.append(next)
        }
        else {
            check.textContent = 'Неправильно'
            check.classList.add('red')
            body.append(check)
            health--
            HP.textContent = `${health}/${maxHealth}`
            if (health == 0) {
                question.parentNode.removeChild(question)
                check.parentNode.removeChild(check)
                img1.parentNode.removeChild(img1)
                img2.parentNode.removeChild(img2)
                img3.parentNode.removeChild(img3)
                img4.parentNode.removeChild(img4)
                let loose = document.createElement('h1')
                loose.textContent = 'ВЫ ПРОИГРАЛИ!'
                body.append(loose)
                let GameOver = document.createElement('img')
                GameOver.src = '/images/GameOver.jpg'
                GameOver.classList.add('GO')
                body.append(GameOver)
                let restart = document.createElement('button')
                restart.classList.add('stB')
                restart.classList.add('pink')
                restart.textContent = 'Начать заново'
                body.append(restart)
                restart.addEventListener('click', () => {i = 0;quests = [Mathematic, Logic, English, Puzzle, Programmer];GameOver.parentNode.removeChild(GameOver);health = maxHealth;HP.textContent = `${health}/${maxHealth}`;lvl = 1;loose.parentNode.removeChild(loose);restart.parentNode.removeChild(restart);Rand(quests)})
            }
        }
    })

    img3.addEventListener('click', () => {
        check.classList.remove('red')
        if (answer == 3) {
            check.textContent = 'Правильно'
            check.classList.add('green')
            body.append(check)
            body.append(next)
        }
        else {
            check.textContent = 'Неправильно'
            check.classList.add('red')
            body.append(check)
            health--
            HP.textContent = `${health}/${maxHealth}`
            if (health == 0) {
                question.parentNode.removeChild(question)
                check.parentNode.removeChild(check)
                img1.parentNode.removeChild(img1)
                img2.parentNode.removeChild(img2)
                img3.parentNode.removeChild(img3)
                img4.parentNode.removeChild(img4)
                let loose = document.createElement('h1')
                loose.textContent = 'ВЫ ПРОИГРАЛИ!'
                body.append(loose)
                let GameOver = document.createElement('img')
                GameOver.src = '/images/GameOver.jpg'
                GameOver.classList.add('GO')
                body.append(GameOver)
                let restart = document.createElement('button')
                restart.classList.add('stB')
                restart.classList.add('pink')
                restart.textContent = 'Начать заново'
                body.append(restart)
                restart.addEventListener('click', () => {i = 0;quests = [Mathematic, Logic, English, Puzzle, Programmer];GameOver.parentNode.removeChild(GameOver);health = maxHealth;HP.textContent = `${health}/${maxHealth}`;lvl = 1;loose.parentNode.removeChild(loose);restart.parentNode.removeChild(restart);Rand(quests)})
            }
        }
    })

    img4.addEventListener('click', () => {
        check.classList.remove('red')
        if (answer == 4) {
            check.textContent = 'Правильно'
            check.classList.add('green')
            body.append(check)
            body.append(next)
        }
        else {
            check.textContent = 'Неправильно'
            check.classList.add('red')
            body.append(check)
            health--
            HP.textContent = `${health}/${maxHealth}`
            if (health == 0) {
                question.parentNode.removeChild(question)
                check.parentNode.removeChild(check)
                img1.parentNode.removeChild(img1)
                img2.parentNode.removeChild(img2)
                img3.parentNode.removeChild(img3)
                img4.parentNode.removeChild(img4)
                let loose = document.createElement('h1')
                loose.textContent = 'ВЫ ПРОИГРАЛИ!'
                body.append(loose)
                let GameOver = document.createElement('img')
                GameOver.src = '/images/GameOver.jpg'
                GameOver.classList.add('GO')
                body.append(GameOver)
                let restart = document.createElement('button')
                restart.classList.add('stB')
                restart.classList.add('pink')
                restart.textContent = 'Начать заново'
                body.append(restart)
                restart.addEventListener('click', () => {i = 0;quests = [Mathematic, Logic, English, Puzzle, Programmer];GameOver.parentNode.removeChild(GameOver);health = maxHealth;HP.textContent = `${health}/${maxHealth}`;lvl = 1;loose.parentNode.removeChild(loose);restart.parentNode.removeChild(restart);Rand(quests)})
            }
        }
    })

    next.addEventListener('click', () => {
        question.parentNode.removeChild(question)
        next.parentNode.removeChild(next)
        check.parentNode.removeChild(check)
        img1.parentNode.removeChild(img1)
        img2.parentNode.removeChild(img2)
        img3.parentNode.removeChild(img3)
        img4.parentNode.removeChild(img4)
        lvl++
        Rand(quests)
    })
}




function Rand(quests) {
    let randomIndex = Math.floor(Math.random() * quests.length)
    let quest = quests[randomIndex]
    if (quests.length == 0) {i++;Final()}
    else {quests.splice(randomIndex, 1);quest()}
}

function Mathematic() {
    Construct('Решите пример: (115-80)*0 + 1 = ?', 1)
}

function Logic() {
    Construct('На березе росло 5 яблок, 3 яблока сорвали сколько яблок осталось?', 0)
}

function English() {
    Construct('Как переводится слово WORLD?', 'мир')
}

function Puzzle() {
    Construct('Катя, Таня, Ваня и Саша играют в комнате. Катя играет в мяч, Таня играет в шахматы, а Ваня прыгает на скакалке. Чем занят Саша? (в ответе укажите название игры)', 'шахматы')
}

function Programmer() {
    Construct('Как называется презентационная часть информационной или программной системы, её пользовательский интерфейс.', 'фронтенд')
}

function FindDif() {
    ConstructIMG('Выберите лишнюю картинку', '/images/house.jpg', '/images/road.jpeg', '/images/street.jpg', '/images/sun.jpg', 3)
}

function FindJav() {
    ConstructIMG('Выберите картинку со знаком JavaScript', '/images/python.webp', '/images/JS.jpg', '/images/CP.jpg','/images/Java.jpeg', 2)
}

function FindEquat() {
    ConstructIMG('Найдите картинку с правильным ответом на уравнение: cosx = 1,2п', '/images/Eq1.png', '/images/Eq2.png', '/images/Eq3.png', '/images/Right.png', 4)
}

let msg = document.createElement('h1')

function Final() {
    switch (i) {
        case 1:
            msg = document.createElement('h1')
            msg.textContent = 'Вы прошли первую главу'
            body.append(msg)
            let chapter = document.createElement('button')
            chapter.textContent = 'Перейти к главе 2'
            chapter.classList.add('stB')
            chapter.classList.add('pink')
            chapter.classList.add('next')
            body.append(chapter)
            chapter.addEventListener('click', () => {
                quests = [FindDif, FindJav, FindEquat]
                msg.parentNode.removeChild(msg)
                chapter.parentNode.removeChild(chapter)
                Rand(quests)
            })
            break
        case 2:
            let Win = document.createElement('img')
            Win.classList.add('Win')
            Win.src = '/images/Win.jpg'
            msg.textContent = 'ВЫ ПОБЕДИЛИ!'
            body.append(msg)
            body.append(Win)
            break
    }
}
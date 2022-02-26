// let p = new Promise(
//     (resolve, reject) => {
//         let a = 1 + 3
//         if (a == 2){
//             resolve('Success')
//         }
//         else{
//             reject('Failed')
//         }
//     }
// )

// p.then((message) => {
//     console.log('We are in the then ' + message)
// }).catch((message) => {
//     console.log('404 error')
// })

// const buttonFunction = () => {
//     let p1 = new Promise(
//         (resolve, reject) => {
//             let uName = document.querySelector('#uName')
//             if (uName.value.length > 1){
//                 resolve(`Welcome ${uName.value}`)
//             }
//             else{
//                 reject('Failed entry. Please enter a name at least 2 letters long.')
//             }
//             uName.value = null
//         }
//     )
//     p1.then((message) => {
//         console.log(message)
//     }).catch((message) => {
//         console.log(message)
//     })
// }

// let btn = document.querySelector('#subButton')
// btn.addEventListener('click', buttonFunction)
let pokeName = document.querySelector('#pokeName')
let pokeNum = document.querySelector('#pokeNum')
let pokeWeight = document.querySelector('#pokeWeight')
let pokeHeight = document.querySelector('#pokeHeight')
let pokeFrontImg = document.querySelector('#pokeFrontImg')
let pokeBackImg = document.querySelector('#pokeBackImg')
let pokeShinyFrontImg = document.querySelector('#pokeShinyFrontImg')
let pokeShinyBackImg = document.querySelector('#pokeShinyBackImg')
let subButton = document.querySelector('#subButton')
let pokeAbility = document.querySelector('#pokeAbility')
let pokeHiddenAbility = document.querySelector('#pokeHiddenAbility')
let pokeType = document.querySelector('#pokeType')
// get data from url / api

const pokeData = () => {
    let uInput = document.querySelector('#uInput')
    fetch(`https://pokeapi.co/api/v2/pokemon/${uInput.value}`)
    // use .then to handle the reponse/reject promise
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let abilities = data.abilities
        pokeName.textContent = `Name: ${data.name}`
        pokeNum.textContent = `Number: ${data.id}`
        pokeType.textContent = `Type: ${data.types[0].type.name}`
        for (let i = 1; i < data.types.length; i++){
            pokeType.textContent = pokeType.textContent + `/${data.types[i].type.name} `
        }
        pokeAbility.textContent = `Ability: ${abilities[0].ability.name}`
        for (let i = 1; i < abilities.length; i++){
            if (abilities[i].is_hidden == false){
                pokeAbility.textContent = pokeAbility.textContent + `, ${abilities[i].ability.name}`
            }
            else{
                pokeHiddenAbility.textContent = `Hidden Ability: ${abilities[i].ability.name}`
            }
        }
        pokeWeight.textContent = `Weight: ${data.weight} lbs`
        pokeHeight.textContent = `Height: ${data.height * 10} cm`
        pokeFrontImg.setAttribute('src', `${data.sprites.front_default}`)
        pokeBackImg.setAttribute('src', `${data.sprites.back_default}`)
        pokeShinyFrontImg.setAttribute('src', `${data.sprites.front_shiny}`)
        pokeShinyBackImg.setAttribute('src', `${data.sprites.back_shiny}`)
    })
    uInput.value = null
}

subButton.addEventListener('click', pokeData)
const inputOne = document.querySelector('.j-input_one')
const inputTwo = document.querySelector('.j-input_two')
const btn = document.querySelector('.j-btn')
const info = document.querySelector('.containrt-result')

const useRequest = () => {
    return fetch('https://dummyimage.com/' + inputOne.value + 'x' + inputTwo.value)
    .then((response) => {
        // console.log(response)
        return response
    })
    .then((resilt) => {return resilt})
    .catch(() => {console.log('error')})
}

btn.addEventListener('click', async () => {

    if (inputOne.value < 100 || inputOne.value > 300 && inputTwo.value < 100 || inputTwo.value > 300){
        
        info.innerHTML = cards = 'одно из чисел вне диапазона от 100 до 300'
        
    } else{
        const requestResult = await useRequest()

    let cards = ''

    for (let key in requestResult){
        if (key == 'url'){
            const cardBlock = `
            <div class="card">
                <img src='${requestResult[key]}'>
            </div>
            `
            cards = cards + cardBlock
        }
    }

        

    info.innerHTML = cards
    }

    

    
})
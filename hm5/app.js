const inputOne = document.querySelector('.j-input_one')
const inputTwo = document.querySelector('.j-input_two')
const btn = document.querySelector('.j-btn')

const domResult = document.querySelector('.j-result_container')


console.log(inputOne, inputTwo)




btn.addEventListener('click', async () => {

    const URL = 'https://jsonplaceholder.typicode.com/photos?_page=' + inputOne.value +  '&_limit=' + inputTwo.value

    if ((inputOne.value < 1 || inputOne.value > 10) && (inputTwo.value < 1 || inputTwo.value >10)){
        domResult.innerHTML = 'Номер страницы и Лимит вне диапазона от 1 до 10'
        return
    }
    
    
    else if(inputOne.value < 1 || inputOne.value > 10){
        domResult.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
        return
    } 
    
     if (inputTwo.value < 1 || inputTwo.value >10){
        domResult.innerHTML = 'Лимит вне диапазона от 1 до 10'
        
    } else{
        const useRequest = () => {
            return fetch(URL)
            .then((response) =>{
                return response.json()
            })
            .then((json) => {return json})
            .catch(() => {console.log('error')})
        
        }
    
        const requestResult = await useRequest()
        console.log(requestResult)
    
        let cards = ''
    
        for (let key of requestResult){
    
            for (let key2 in key){
        
                if (key2 == 'url'){
                    const cardBlock = `
                    <div class="card">
                        <img src='${key[key2]}'>
                    </div>
                    `
                    cards = cards + cardBlock
                }
            }
            
        }
    
            
    
        domResult.innerHTML = cards
    }

    


    
})
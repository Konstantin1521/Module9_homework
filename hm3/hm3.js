const inputNum = document.querySelector('input')
const btn = document.querySelector('.btn')
const info = document.querySelector('.result_js_func')
const url = 'https://jsonplaceholder.typicode.com/photos?_limit='


btn.addEventListener('click', ()=>{
  if (inputNum.value < 1 || inputNum.value > 10){
    info.innerHTML = 'число вне диапазона от 1 до 10'
  }else{
    useRequest(url, displayResult)
  }
})

function useRequest (url, callback){
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', url+= inputNum.value, true);

    xhr.onload = function(){
        if (xhr.status != 200){
            console.log('Статус :', xhr.status)
        }else{
            const result = JSON.parse(xhr.response)
            console.log(result)
            console.log(url)
            if(callback){
                callback(result)
            }
        }
    }

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
      };
      
      xhr.send();
}

function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img src='${item.url}'>
        </div>
      `;
      cards = cards + cardBlock;
    });
    
    // console.log('end cards', cards);
      
    info.innerHTML = cards;
  }


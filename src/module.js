const fun=(param)=>{
  document.querySelector('.container').textContent = param
}

async function ajax() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    console.log(users);

  }
  catch (error){
    console.log('Ошибка');
  }
}
ajax()

sync function fetchUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error('Http error! ${response.status}')
        }else{
            const data = await response.json();
            if(data.length>0){
                const firstUser = data[0];
                console.log('first user',firstUser);
            }else{
                console.log('no users found!');
            }
            // console.log('fetch user data',data)

        }
    }catch(e){
        console.log(error,'Error fetching user data')
    }
}

fetchUser()
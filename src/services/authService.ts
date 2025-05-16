export const AuthService =  {
    login : async (username : string , password : string ) => {
        return new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(`token-${username}-${password}-${Date.now()}`)
            },1000)
        })
    }
}
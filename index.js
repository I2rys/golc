//Dependencies
const Axios = require("axios")

//Variables
var Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <account_token> <organization_name> <location>")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid organization_name.")
    process.exit()
}

if(!Self_Args[2]){
    console.log("Invalid location.")
    process.exit()
}

Self_Args[2] = Self_Args.slice(2).join(" ")

void async function Main(){
    try{
        await Axios({
            method: "POST",
            url: `https://api.github.com/orgs/${Self_Args[1]}`,
            headers:{
                "content-type": "application/json",
                authorization: `token ${Self_Args[0]}`
            },
            data: { location: Self_Args[2] }
        })

        console.log(`Organization location successfully changed to ${Self_Args[2]}`)
    }catch{
        console.log("Please make sure the account_token(Has a high permission), organization_name and location is valid.")
    }
}()
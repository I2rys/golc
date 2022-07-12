"use strict";

// Dependencies
const axios = require("axios")

// Variables
var args = process.argv.slice(2)

// Main
if(!args.length) return console.log("node index.js <accountToken> <organizationName> <location>")
if(!args[1]) return console.log("Invalid organization_name.")
if(!args[2]) return console.log("Invalid location.")

args[2] = args.slice(2).join(" ")

void async function Main(){
    try{
        await axios({
            method: "POST",
            url: `https://api.github.com/orgs/${args[1]}`,
            headers:{
                "content-type": "application/json",
                authorization: `token ${args[0]}`
            },
            data: { location: args[2] }
        })

        console.log(`Organization location successfully changed to ${args[2]}`)
    }catch{
        console.log("Please make sure the accountToken(Has a high permission), organizationName and location are valid.")
    }
}()
const userData = [
    {
        name: "Hasan",
        profession: "web developer"
    },
    {
        name: "Asad",
        profession: "Designer"
    },
    {
        name: "Umar",
        profession: "software engineer"
    },

]

const displaydata = document.querySelector(".dataTable")

const getData = () => {
    setTimeout(() => {
        let output = ''
        userData.forEach((data, index) => {
            index = index + 1
            // output += `<li class = "myli">${index}: ${data.name}</li>`

            output += `
            <table>
                <tr>
                    <td>${index}<td>
                    <td>${data.name}<td>
                    <td>${data.profession}<td>
                </tr>
            </table>`
        })
        displaydata.innerHTML = output
    }, 1000)
}
getData();




// Promise
function createUserData(addData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userData.push(addData)

            let error = false; // means no error
            if (!error) {
                resolve();
            }
            else {
                reject("Error: Some problem...")
            }
        }, 2000);
    })
}
// createUserData({ name: "Ahmed", profession: "Digital marketing" })
// .then(getData)
// .catch(error => console.log(error))



// async & await
async function start() {
    // it will wait untill createUserData is completing
    await createUserData({ name: "Bilal", profession: "Digital marketing" })
    getData(); 
}
start()




// it will not display the new data if its timeout is greater then getData function
// to aviod this problem we will use callback

// function createUserData(addData, callback) {
//     setTimeout(() => {
//         userData.push(addData)

//         callback() // calling getdata function here

//     }, 3000);
// }
// createUserData({ name: "Ali", profession: "Digital marketing" })
// createUserData({ name: "Ali", profession: "Digital marketing" }, getData) // passing getData reference here



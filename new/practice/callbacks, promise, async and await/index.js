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


// it will not display the new data if its timeout is greater then getData function
// to aviod this problem we will use callback

function createUserData(addData, callback) {
    setTimeout(() => {
        userData.push(addData)

        callback() // calling getdata function here
        
    }, 3000);
}
// createUserData({ name: "Ali", profession: "Digital marketing" })
createUserData({ name: "Ali", profession: "Digital marketing" }, getData) // passing getData reference here
createUserData({ name: "Ahmad", profession: "Digital marketing" }, getData)
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
    {
        name: "Ali",
        profession: "Digital marketing"
    },
]

const displayList = document.querySelector(".list")

const getData = () => {
    setTimeout(() => {
        let output = ''
        userData.forEach((data, index) => {
            index = index + 1
            output += `<li class = "myli">${index}: ${data.name}</li>`
        })
        displayList.innerHTML = output
    }, 1000)
}
getData();
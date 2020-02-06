const url = "http://localhost:8088/cars"

const API = {
    getCarData() {
        return fetch(url)
            .then(resp => resp.json())

    }
}

 API.getCarData()
    .then(arr => {
        const carsFrom2017 = arr.filter(object => object.vehicle.year === 2017)
        console.log("filtered out 2017s", carsFrom2017)
        const profitsFrom2017 =  carsFrom2017.map(arrayObject => arrayObject.gross_profit)
        console.log("array of profits for 2017 cars", profitsFrom2017)
        const profitFrom2017Reduced = profitsFrom2017.reduce((a, b) => a + b)
        console.log("total profit 2017", profitFrom2017Reduced)
    })


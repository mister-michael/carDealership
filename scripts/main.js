const url = "http://localhost:8088/cars"

const API = {
    getCarData() {
        return fetch(url)
            .then(resp => resp.json())

    }
}

API.getCarData()
    .then(arr => {

        const wholeArray = arr

        const carsSold2017 = wholeArray.filter(object => object.purchase_date.startsWith("2017"))
        // console.log("sales date startsWith 2017", carsSold2017)

        const mapProfits = carsSold2017.map(object => object.gross_profit)
        // console.log("gross_profits 2017)", mapProfits)

        const totalProfits = mapProfits.reduce((a, b) => a + b, 0)
        console.log("2017 total profits", totalProfits)

        //which month sold the most

        const salesInMonth = (month) => {
            const monthArray = carsSold2017.filter(object => object.purchase_date.startsWith(`2017-${month}`))
            // console.log(`monthArray ${month}`, monthArray)
            if (monthArray.length !== 0) {
                const profitArrayFromMonth = monthArray.map(object => object.gross_profit)
                // console.log(`profitArrayFromMonth ${month}`, profitArrayFromMonth)

                const monthTotal = profitArrayFromMonth.reduce((a, b) => a + b)
                // console.log(`monthTotal ${month}`, monthTotal)
                return {
                    "month": month,
                    "totalProfit": monthTotal
                }
            } else {
                return {
                    "month": month,
                    "totalProfit": 0
                }
            }
        }

        const yearSalesByMonthArray = [salesInMonth("01"), salesInMonth("02"), salesInMonth("03"), salesInMonth("04"), salesInMonth("05"), salesInMonth("06"), salesInMonth("07"), salesInMonth("08"), salesInMonth("09"), salesInMonth("10"), salesInMonth("11"), salesInMonth("12")];

        // console.log("salesByMonth", yearSalesByMonthArray)

        const profitByMonthMapped = yearSalesByMonthArray.map(month => month.totalProfit)
        // console.log("profitByMonthMapped", profitByMonthMapped)

        const profitByMonthSorted = yearSalesByMonthArray.map(month => month.totalProfit).sort((a, b) => b - a)

        // console.log("is yearSalesByMonthArray sorted?", yearSalesByMonthArray)


        const findMonthHigh = (unsortedArray) => {

            for (let i = 0; i < 12; i++) {

                if (profitByMonthSorted[0] === unsortedArray[i]) {
                    // console.log("profitByMonthMapSorted", profitByMonthSorted)
                    return `highest sales were in month-${i + 1} of $${profitByMonthMapped[i]}`
                }
            }
        }
        console.log(findMonthHigh(profitByMonthMapped));

        const sales_idArray = wholeArray.map(object => object.sales_id)
        console.log(sales_idArray)

        const sales_idArrayUnique = new Set(sales_idArray)
        console.log(sales_idArrayUnique)

        const totalSalesById = (salesPersonArray) => {
            let salesArrArray = []

            for (let i = 0; i < salesPersonArray.length; i++) {

                let salesArray = []

                if (salesPersonArray[i] === wholeArray.sales_id) {
                    salesArray.push(object => object.gross_profit)
                }

                
            }
            
        }

        console.log(totalSalesById(sales_idArrayUnique))

    })
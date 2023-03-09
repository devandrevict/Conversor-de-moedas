const button = document.getElementsByClassName("convert-button")[0]
const select = document.getElementById("currency-select2")


const convertValues = async () => {
    const inputReais = document.getElementsByClassName("input-reais-value")[0].value
    const realText = document.getElementById("realText")
    const currencyvalue = document.getElementById("currency-value-text")
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    
    console.log(data)

    realText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === "$:Dólar americano") {
        currencyvalue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);
    }

    if (select.value === "€:Euro") {
        currencyvalue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);
    }

    if (select.value === "₿:Bitcoin") {
        currencyvalue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin);
    }
}
    changeCurrency = () => {
        const moneyName = document.getElementById("money-name2")
        const currencyImg = document.getElementById("img-dolar")

        if (select.value === '€:Euro') {
            moneyName.innerHTML = 'Euro'
            currencyImg.src = "./assets/euro.jpg"
        }

        if (select.value === '$:Dólar americano') {
            moneyName.innerHTML = 'Dólar americano'
            currencyImg.src = "./assets/estados-unidos.png"
        }

        if (select.value === '₿:Bitcoin') {
            moneyName.innerHTML = 'Bitcoin'
            currencyImg.src = "./assets/bitcoin.png"
        }

        convertValues()
    }

    button.addEventListener("click", convertValues)
    select.addEventListener("change", changeCurrency)
const button = document.getElementsByClassName("convert-button")[0]
const select = document.getElementById("currency-select2")
const dolar = 5.6
const bitcoin = 116.345
const euro = 5.53


const convertValues = () => {
    const inputReais = document.getElementsByClassName("input-reais-value")[0].value
    const realText = document.getElementById("realText")
    const currencyvalue = document.getElementById("currency-value-text")


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
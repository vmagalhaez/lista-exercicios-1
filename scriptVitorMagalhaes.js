function olaMundo(){
    document.getElementById("resultado").innerHTML = "Bom dia, olá Mundo!!!";
}

function cubo(){
    let num = parseFloat(document.getElementById("numero").value);
    let resultado = (Math.pow(num, 3)).toFixed(1);

    document.getElementById("resultadoCubo").innerHTML = `O resultado de ${num} ao cubo é = ${resultado}`

}

function celsius(){
    let far = parseFloat(document.getElementById("temperatura").value);

    let cel = ((far - 32) * 0.5556).toFixed(0);
    
    document.getElementById("resultadoCelsius").innerHTML = `A temperatura ${far}°F equivale a ${cel}°C `
}

function calcularTriangulo(){
    let altura = parseFloat(document.getElementById("altura").value);
    let base = parseFloat(document.getElementById("base").value);
    let resultado = ((base * altura) / 2).toFixed(3);

    document.getElementById("resultadoTriangulo").innerHTML = `A area do triangulo de base ${base} e altura ${altura} é = ${resultado}`
}

function calcularCirculo(){
    let raio = parseFloat(document.getElementById("raio").value);
    let area = (Math.PI * Math.pow(raio, 2)).toFixed(2);
    let perimetro = ((2 * Math.PI) * raio).toFixed(2);

    document.getElementById("areaCirculo").innerHTML = `Area =  ${area}`;
    document.getElementById("perimetroCirculo").innerHTML = `Perimetro = ${perimetro}`
}

function desconto(){
    let valor = parseFloat(document.getElementById("valor").value);
    let desconto = (valor * 0.05).toFixed(2);
    let resultado = (valor - desconto).toFixed(2);

    document.getElementById("resultadoDesconto").innerHTML = `O produto de R$${valor} terá desconto de R$${desconto} / Preço final de R$${resultado} `
}


function calcularIdade(){

    let inputNascimento = document.getElementById("anoNascimento").value;
    let dataNascimento = new Date(inputNascimento);
    let anoNascimento = dataNascimento.getFullYear();
    let mesNascimento = dataNascimento.getMonth()
    let diaNascimeto = dataNascimento.getDate();
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth();
    let diaAtual = dataAtual.getDate();


    if ((anoAtual - anoNascimento) >= 18){
        if ((mesAtual - mesNascimento) <= 0){
            if ((diaAtual - diaNascimeto >= 0)){
                document.getElementById("resultadoIdade").innerHTML = `Que pena você é maior de idade`
            } else {
                document.getElementById("resultadoIdade").innerHTML = `Parabens você é menor de idade`
            }
        } else {
            document.getElementById("resultadoIdade").innerHTML = `Parabens você é menor de idade`
        }
    } if ((anoAtual - anoNascimento) <= 0){
        document.getElementById("resultadoIdade").innerHTML = `Data de nascimento invalida`
    }
}

function calcularGasolina(){
    let dinheiro = parseFloat(document.getElementById("dinheiro").value);
    let precoGasolina = parseFloat(document.getElementById("precoGasolina").value);

    let litros = (dinheiro / precoGasolina).toFixed(0);
    let km = (litros * 20).toFixed(0);

    document.getElementById("resultadoGasolina").innerHTML = `Você poderá comprar ${litros} litros de gasolina e podera andar ${km} quilometros`;
}
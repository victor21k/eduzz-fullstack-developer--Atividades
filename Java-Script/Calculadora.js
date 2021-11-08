function calculadora() {
    const operacao = Number(prompt('escolha uma operação:   \n 1 - soma[+] \n 2 - subtração [-]\n 3 - multiplicação [*]\n 4 - Divisão real [/] \n 5 Divisão Inteira [%]\n 6 - Pontenciação [**]'));

    let n1 = Number(prompt('insira o primeiro valor:'));
    let n2 = Number(prompt('insira segundo valor:'));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    }

    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`o resto da divisão entre ${n1} e ${n2} é igaul a ${resultado}`)
        novaOperacao();
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('deseja fazer outra operação? \n 1 - SIM\n 2 - NÃO');
       
        if (opcao == 1) {
            calculadora();
        } else id (opcao == 2) {
            alert('até mais')
        } else {
            alert('digite uma opção valida')
            novaOperacao();

        }

    }



    if (operacao == 1) {
        soma();

    } else if (operação == 2) {
        subtracao();

    } else if (operação == 3) {
        multiplicacao();

    } else if (operação == 4) {
        divisaoReal();

    } else if (operação == 5) {
        divisaoInteira();

    } else if (operação == 6) {
        potenciacao();
    }

}


calculadora();
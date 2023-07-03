    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            telefone: 'Insira o seu telefone.',
            email: 'Insira seu e-mail.',
            endereço: 'Escreva seu endereço completo!',
            cpf: 'Insira seu CPF.',
            cep: 'Insira seu CEP.'
        },

        submitHandler: function(form) {
            console.log(form)
            alert(`Cadastrado com sucesso`)

        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })



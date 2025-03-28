Aqui está o **README** sugerido para o seu projeto:

---

# DataFlex: CSV to JSON Converter

**DataFlex** é uma aplicação web simples que permite converter arquivos CSV para JSON de forma rápida e fácil. A aplicação suporta diferentes formatos de delimitadores, como vírgula (`,`) e ponto e vírgula (`;`), e também garante a correta interpretação de arquivos com caracteres especiais, como os do tipo **UTF-8** e **ISO-8859-1**.

## Funcionalidades

- **Conversão CSV para JSON**: Converte arquivos CSV para o formato JSON.
- **Detecta delimitadores automaticamente**: Suporte tanto para CSVs com vírgulas quanto para aqueles que usam ponto e vírgula.
- **Suporte a diferentes codificações**: Suporte para arquivos com caracteres especiais em UTF-8 e ISO-8859-1.
- **Visual moderno**: Interface amigável e intuitiva com barra de progresso para o feedback do usuário.
- **Download do JSON**: Permite o download do arquivo JSON convertido diretamente.

## Tecnologias utilizadas

- **HTML5**: Estrutura da interface.
- **CSS3**: Design visual moderno e responsivo.
- **JavaScript (ES6)**: Lógica da aplicação, incluindo a conversão de CSV para JSON e o tratamento de codificações.
- **FileReader API**: Utilizada para ler o arquivo CSV no navegador.

## Como usar

1. Clone ou baixe este repositório em seu computador:

   ```bash
   git clone https://github.com/marcos-rts/CSV2JSON_Converter.git
   ```

2. Abra o arquivo **index.html** no navegador de sua preferência.

3. Carregue o arquivo CSV clicando no botão de upload.

4. Clique no botão "Converter CSV para JSON".

5. A barra de progresso indicará o status da conversão. Quando o processo for concluído, o JSON gerado será exibido na caixa de texto.

6. Se desejar, clique em "Baixar JSON" para fazer o download do arquivo gerado.

## Exemplo de uso

### Entrada (CSV)

```csv
ID,Nome,Idade
1,Ana,25
2,João,30
3,Maria,22
```

### Saída (JSON)

```json
[
  {
    "ID": "1",
    "Nome": "Ana",
    "Idade": "25"
  },
  {
    "ID": "2",
    "Nome": "João",
    "Idade": "30"
  },
  {
    "ID": "3",
    "Nome": "Maria",
    "Idade": "22"
  }
]
```

## Compatibilidade

A aplicação foi testada em navegadores modernos, incluindo:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

## Contribuições

Contribuições são bem-vindas! Se você encontrou um bug ou tem alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

---

Com este **README**, qualquer pessoa que use o projeto terá uma visão clara de como ele funciona, suas funcionalidades e como utilizá-lo.

O que acha?
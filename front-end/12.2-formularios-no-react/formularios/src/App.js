import React from 'react';
import './App.css';
import Form from './components/Form.js';

function App() {
  return (
      <Form />
  );
}

export default App;

// Todo componente possui seu próprio estado e tem 100% de controle sobre ele;
// Quando um componente é colocado na tela ele executa uma função chamada construtor , e usando a linha super() podemos sobrescrevê-la para estender seu comportamento;

// O objeto this , acessível a toda classe de componente React , contém tudo o que concerne àquele componente e deve ser vinculado explicitamente às funções criadas dentro da classe, através da sintaxe this.minhaFuncao = this.minhaFuncao.bind(this) no construtor do componente;

// Funções que tratam eventos devem ser vinculadas aos seus respectivos elementos com {this.minhaFuncao} ou {() => this.minhaFuncao('Meu parametro') .

// É possível ler o estado de um componente via this.state , é possível definir um estado inicial no construtor com uma atribuição a this.state e deve-se atualizar tal estado somente com a função this.setState .

// A atualização do estado é assíncrona e, por isso, se você quiser garantir que uma atualização ocorrerá depois da outra, tal atualização deverá ser definida via callback passada à função this.setState , no formato this.setState((estadoAnterior, props) => novoEstado)
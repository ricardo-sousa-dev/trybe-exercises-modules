import React from "react";
// import Form from './components/Form.js';
import PropTypes from 'prop-types';

class InfoPessoais extends React.Component {
  render() {
    const { nome, mensagem, idade} =
      this.state;

    return (
          <fieldset>
            <legend>Informações Pessoais</legend>
            <div className="itemForm">
            <label htmlFor="nome">Nome completo: </label>
            <input
              type="text"
              id="nome"
              name="nome"
              onChange={this.handleChange}
              value={nome}
            />
          </div>

            <div className="itemForm">
            <label htmlFor="idade">Idade: </label>
            <input
              type="number"
              id="idade"
              name="idade"
              onChange={this.handleChange}
              value={idade}
            />
          </div>

            <div className="itemForm">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              name="mensagem"
              id="mensagem"
              onChange={this.handleChange}
              value={mensagem}
            />
          </div>
          </fieldset>
    );
  }
}

 InfoPessoais.propTypes = {
    handleChange: PropTypes.func.isRequired,
    nome: PropTypes.string.isRequired,
    mensagem: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
  };

export default InfoPessoais;

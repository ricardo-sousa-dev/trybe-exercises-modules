import React from "react";
import InfoPessoais from "./InfoPessoais";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      idade: "",
      mensagem: "",
      vaiComparecer: false,
      horario: "",
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nome, mensagem, idade, vaiComparecer, horario, documento, terms } =
      this.state;

    return (
      <div className="divForm">
        <h1>Estados e React - Inscrição para o evento</h1>
        <form className="form">
         
          <InfoPessoais
            nomeValue={nome}
            idadeValue={idade}
            mensagemValue={mensagem}
            handleChange={this.handleChange}
          />

          <fieldset>
            <legend>Confirmações pré-inscrição</legend>
            <div className="itemForm">
              <label htmlFor="horario">Horário: </label>
              <select
                name="horario"
                id="horario"
                onChange={this.handleChange}
                value={horario}
              >
                <option value="">Selecione</option>
                <option value="12:00">12:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>

            <div className="itemForm">
              <label htmlFor="terms">Eu aceito os termos: </label>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={this.handleChange}
                value={terms}
              />
            </div>
            <div className="itemForm">
              <label htmlFor="vaiComparecer">Vai comparecer: </label>
              <input
                type="checkbox"
                id="vaiComparecer"
                name="vaiComparecer"
                onChange={this.handleChange}
                value={vaiComparecer}
              />
            </div>
            <div className="itemForm">
              <label htmlFor="documento">Enviar documento: </label>
              <input
                type="file"
                name="documento"
                id="documento"
                onChange={this.handleChange}
                value={documento}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;

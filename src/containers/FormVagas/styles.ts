import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Altera para uma única coluna */
  }
`

export const BtnPesquisa = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-left: 0; /* Remove a margem à esquerda */
    margin-top: 8px; /* Adiciona margem superior para separar do input */
    width: 100%; /* Define a largura como 100% */
  }
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  @media screen and (max-width: 768px) {
    height: 40px;
    margin-top: 0; /* Remove a margem superior em dispositivos móveis */
  }
`

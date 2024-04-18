import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h3<Props>`
font-size: ${(props) =>
  props.type === 'primary' || props.type === 'vaga' ? '16px' : '48px'};

  ${(props) =>
    props.type === 'vaga' &&
    `
    font-weight: bold;
    margin-bottom: 16px;
    `}

  ${(props) =>
    props.type === 'hero' &&
    `
      font-family: 'Gloock', serif;
      color: #eee;
    `}

    @media screen and (max-width: 768px) {
      ${(props) =>
        props.type === 'hero' &&
        `
          font-size: 32px;
        `}
`

import React from 'react';
import styled, { css } from 'styled-components'
import { blue ,orange } from '@ant-design/colors';


export const ButtonDefault = styled.button`
    background: transparent;
    border-radius: 20px;
    border: 1px solid black;
    color: black;
    margin: 0.5em 1em;
    padding: 0.25em 1em;`

export const ButtonPrimary = styled(ButtonDefault)`
    background: ${blue.primary};
    color: white;
    border: 1px solid ${blue.primary};
    &:hover {
        background: ${blue.primary};
        color: white;
        border: 1px solid ${blue.primary};
    }
`
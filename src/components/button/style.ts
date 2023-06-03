import styled from "styled-components";

export type StyledButtonType = {
    bg?: string
    color?: string
    p?: string
    w?: string
}

export const StyledButton = styled.button<StyledButtonType>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    min-height: 3rem;
    line-height: 3rem;
    text-transform: uppercase;
    font-weight: 700;

    ${({ bg }) => bg ? `background: ${bg};` : ``}
    ${({ color }) => color ? `color: ${color};` : ``}
    ${({ p }) => `padding: ${p ?? '0 1rem'};`}
    ${({ w }) => w ? `width: ${w};` : ``}
`

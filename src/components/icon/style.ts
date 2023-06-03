import styled from "styled-components";

export interface IconWrapperType {
    width?: string
    height?: string
}

export const IconWrapper = styled.div<{}>`
    display: flex;
    align-items: center;
    justify-content: center;
`
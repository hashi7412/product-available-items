import React from "react";
import { IconWrapper, IconWrapperType } from "./style";

const icons = {
    'Deals': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5721 12L20.8001 12C20.8001 7.58172 17.135 4 12.614 4C8.09296 4 4.42794 7.58172 4.42794 12H8.52101V12C8.52101 9.79085 10.3535 7.99999 12.614 7.99999C14.8746 7.99999 16.7071 9.79085 16.7071 12L19.5721 12ZM19.5721 12C19.5721 16.4183 15.9071 20 11.386 20C6.86501 20 3.19998 16.4183 3.19998 12L7.29301 12C7.29301 14.2091 9.12552 16 11.386 16C13.6466 16 15.4791 14.2091 15.4791 12L19.5721 12Z" fill="currentColor"></path>
        </svg>
    )
}

interface IconType extends IconWrapperType {
    icon: keyof typeof icons
}

const Icon: React.FC<IconType> = ({
    icon,
    ...rest
}) => {
    return (
        <IconWrapper {...rest}>
            {icon}
        </IconWrapper>
    )
}

export default Icon;
import { css } from 'styled-components';

const scrollbarStyles = css`
    /* TODO: this make nice scrollbar on webkit-like browsers however it prevents hiding the scrollbar on macs (should hide when there is no mouse connected) */
    /* Maybe we should just use something like https://github.com/Grsmto/simplebar */
    ::-webkit-scrollbar {
        background-color: ${props => props.theme.NEUE_BG_WHITE};
        width: 10px;
    }

    /* background of the scrollbar except button or resizer */
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    /* scrollbar itself */
    ::-webkit-scrollbar-thumb {
        /* 7F7F7F for mac-like color */
        background-color: ${props => props.theme.NEUE_SCROLLBAR_THUMB};
        border-radius: 10px;
        border: 2px solid ${props => props.theme.NEUE_BG_WHITE};
    }
    /* set button(top and bottom of the scrollbar) */
    ::-webkit-scrollbar-button {
        display: none;
    }
`;

export { scrollbarStyles };

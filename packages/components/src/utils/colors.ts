import { InputState, SuiteThemeColors } from '../support/types';

const getStateColor = (state: InputState | undefined, theme: SuiteThemeColors) => {
    switch (state) {
        case 'success':
            return theme.NEUE_BG_GREEN;
        case 'warning':
            return theme.NEUE_TYPE_ORANGE;
        case 'error':
            return theme.NEUE_TYPE_RED;
        default:
            return theme.NEUE_TYPE_DARK_GREY;
    }
};

export { getStateColor };

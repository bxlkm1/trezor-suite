import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { THEME } from '@trezor/components';
import { useSelector } from '@suite-hooks';
import { SuiteThemeVariant } from '@suite-types';

const ThemeProvider: React.FC = ({ children }) => {
    const theme = useSelector(state => state.suite.settings.theme);

    const getThemeColors = (variant: SuiteThemeVariant) => {
        switch (variant) {
            case 'light':
                return THEME.light;
            case 'dark':
                return THEME.dark;
            case 'custom':
                // secret feature hidden in debug settings
                return {
                    ...THEME.dark, // spread default colors, so we can be sure no new colors are missing in user's palette
                    ...theme.colors, // custom saved colors
                };
            // no default
        }
    };

    return <SCThemeProvider theme={getThemeColors(theme.variant)}>{children}</SCThemeProvider>;
};

export default ThemeProvider;

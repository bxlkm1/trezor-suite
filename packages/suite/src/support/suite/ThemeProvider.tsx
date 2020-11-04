import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { THEME } from '@trezor/components';
import { useSelector } from '@suite-hooks';

const ThemeProvider: React.FC = ({ children }) => {
    const theme = useSelector(state => state.suite.settings.theme);
    return (
        <SCThemeProvider theme={theme === 'light' ? THEME.light : THEME.dark}>
            {children}
        </SCThemeProvider>
    );
};

export default ThemeProvider;

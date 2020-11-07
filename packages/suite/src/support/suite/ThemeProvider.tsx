import React, { useEffect, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { THEME } from '@trezor/components';
import * as suiteActions from '@suite-actions/suiteActions';
import { useSelector, useActions } from '@suite-hooks';
import { db } from '@suite/storage';
import { SuiteThemeVariant, AppState } from '@suite-types';

const getThemeColors = (theme: AppState['suite']['settings']['theme']) => {
    switch (theme.variant) {
        case 'light':
            return THEME.light;
        case 'dark':
            return THEME.dark;
        case 'custom':
            // custom theme is a secret feature accessible in debug settings
            return {
                ...THEME.dark, // spread default colors, so we can be sure no new colors are missing in user's palette
                ...theme.colors, // custom saved colors
            };
        // no default
    }
};

const ThemeProvider: React.FC = ({ children }) => {
    const theme = useSelector(state => state.suite.settings.theme);
    const [storedThemeVariant, setStoredThemeVariant] = useState<
        SuiteThemeVariant | null | undefined
    >();
    const { setTheme } = useActions({
        setTheme: suiteActions.setTheme,
    });

    useEffect(() => {
        // automatically sets dark mode if it is set on OS level and no theme was set previously
        const getStoredTheme = async () => {
            // load saved theme from db(we don't want to way for SUITE.STORAGE_LOADED, as it is fired way later)
            try {
                const suiteSettings = await db.getItemByPK('suiteSettings', 'suite');
                const savedTheme = suiteSettings?.settings.theme?.variant;
                setStoredThemeVariant(savedTheme ?? null); // null represents no theme stores, while undefined means reading from db is not yet completed
            } catch {
                setStoredThemeVariant(undefined);
            }
        };

        getStoredTheme();
        // continue setting OS based theme only if there is no stored theme
        if (storedThemeVariant !== null) return;

        // retrieving os color scheme is supported in Chrome 76+, Firefox 67+
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [theme, setTheme, storedThemeVariant]);

    return <SCThemeProvider theme={getThemeColors(theme)}>{children}</SCThemeProvider>;
};

export default ThemeProvider;

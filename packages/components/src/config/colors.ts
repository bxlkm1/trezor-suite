import { DefaultTheme } from 'styled-components';
import { SuiteThemeColors } from '../support/types';

export const THEME: Record<'light' | 'dark', DefaultTheme> = {
    light: {
        NEUE_BG_GREEN: '#39a814',
        NEUE_BG_LIGHT_GREEN: '#effaec',
        NEUE_BG_GREEN_HOVER: '#339714',
        NEUE_BG_LIGHT_GREEN_HOVER: '#e8f3e5',
        NEUE_BG_GREY: '#f4f4f4',
        NEUE_BG_GREY_ALT: '#f4f4f4', // used for selected account item, account search input, tertiary buttons
        NEUE_BG_LIGHT_GREY: '#fcfcfc',
        NEUE_BG_WHITE: '#ffffff',
        NEUE_BG_BLUE: '#1faaff',
        NEUE_BG_RED: '#d04949',

        NEUE_TYPE_GREEN: '#279503',
        NEUE_TYPE_ORANGE: '#c19009',
        NEUE_TYPE_BLUE: '#197eaa',
        NEUE_TYPE_RED: '#cd4949',
        NEUE_TYPE_DARK_GREY: '#404040',
        NEUE_TYPE_LIGHT_GREY: '#808080',
        NEUE_TYPE_LIGHTER_GREY: '#bdbdbd',
        NEUE_TYPE_WHITE: '#ffffff',
        NEUE_BG_LIGHT_RED: '#F6E2E2',

        NEUE_SCROLLBAR_THUMB: '#babac0',
        NEUE_STROKE_GREY: '#e8e8e8',
        NEUE_BG_TOOLTIP: '#262742',

        BUTTON_RED: '#cd4949',
        BUTTON_RED_HOVER: '#b93c3c',

        BOX_SHADOW_BLACK_15: 'rgba(0, 0, 0, 0.15)',
        BOX_SHADOW_BLACK_20: 'rgba(0, 0, 0, 0.2)', // shadow around dropdown
        BOX_SHADOW_MODAL: 'rgba(77, 77, 77, 0.2)', // shadow around modal
    },
    dark: {
        NEUE_BG_GREEN: '#5ea447',
        NEUE_BG_GREEN_HOVER: '#4e883b', // TODO
        NEUE_BG_LIGHT_GREEN: '#1a2516',
        NEUE_BG_LIGHT_GREEN_HOVER: '#131d10', // TODO
        // NEUE_BG_GREY: '#000000',
        NEUE_BG_GREY: '#080808',
        NEUE_BG_GREY_ALT: '#262626', // same as NEUE_STROKE_GREY
        NEUE_BG_LIGHT_GREY: '#0c0c0c',
        NEUE_BG_WHITE: '#101010',
        NEUE_BG_LIGHT_RED: '#5a1616',
        NEUE_BG_BLUE: '#197eaa', // used for big app notification (eg. new fw update)
        NEUE_BG_RED: '#ab2626', // used for big app notification

        NEUE_TYPE_GREEN: '#6fa95c',
        NEUE_TYPE_ORANGE: '#9b813b',
        NEUE_TYPE_BLUE: '#197eaa',
        NEUE_TYPE_RED: '#c65353',
        NEUE_TYPE_DARK_GREY: '#fafafa',
        NEUE_TYPE_LIGHT_GREY: '#8e8e8e',
        NEUE_TYPE_LIGHTER_GREY: '#bdbdbd',
        NEUE_TYPE_WHITE: '#fafafa',

        NEUE_SCROLLBAR_THUMB: '#7F7F7F',
        NEUE_STROKE_GREY: '#262626',
        NEUE_BG_TOOLTIP: '#151524', // improvisation
        BUTTON_RED: '#cd4949',
        BUTTON_RED_HOVER: '#b93c3c',
        BOX_SHADOW_BLACK_15: 'rgba(0, 0, 0, 0.5)',
        BOX_SHADOW_BLACK_20: 'rgba(255, 255, 255, 0.1)',
        BOX_SHADOW_MODAL: 'rgba(0, 0, 0, 0.5)',
    },
} as const;

const oldColors = {
    // TODO: some colors from old design that are waiting to be reworked into NEUE design
    GREEN: '#30C101', // used by password strength indicator
    YELLOW: '#fdcb33', // used by password strength indicator
    RED: '#cd4949', // used by password strength indicator
} as const;

const colors = { ...oldColors, ...(THEME.light as SuiteThemeColors) } as const;

export default colors;

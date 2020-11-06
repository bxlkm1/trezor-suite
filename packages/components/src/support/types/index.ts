import { ICONS } from '../../components/Icon/icons';
import { ReactNode } from 'react';
import { COINS } from '../../components/logos/CoinLogo/coins';

export type TextAlign = 'left' | 'center' | 'right';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type ButtonSize = 'small' | 'large';

export type InputState = 'success' | 'warning' | 'error';

export type InputVariant = 'small' | 'large';

export interface InputButton {
    icon?: IconType;
    text?: ReactNode;
    iconSize?: number;
    iconColor?: string;
    iconColorHover?: string;
    isDisabled?: boolean;
    onClick: () => void;
}

export type IconType = keyof typeof ICONS;

export type CoinType = keyof typeof COINS;

export type ParagraphSize = 'normal' | 'small' | 'tiny';

export type TrezorLogoType = 'horizontal' | 'vertical' | 'symbol' | 'suite' | 'suite_compact';

export type TrezorLogoVariant = 'white' | 'black';

export interface SuiteThemeColors {
    NEUE_BG_GREEN: string;
    NEUE_BG_GREEN_HOVER: string;
    NEUE_BG_LIGHT_GREEN: string;
    NEUE_BG_LIGHT_GREEN_HOVER: string;
    NEUE_BG_GREY: string;
    NEUE_BG_LIGHT_GREY: string;
    NEUE_BG_GREY_ALT: string;
    NEUE_BG_WHITE: string;
    NEUE_BG_LIGHT_RED: string;
    NEUE_BG_TOOLTIP: string;
    NEUE_BG_BLUE: string;
    NEUE_BG_RED: string;

    NEUE_TYPE_GREEN: string;
    NEUE_TYPE_ORANGE: string;
    NEUE_TYPE_BLUE: string;
    NEUE_TYPE_RED: string;
    NEUE_TYPE_DARK_GREY: string;
    NEUE_TYPE_LIGHT_GREY: string;
    NEUE_TYPE_LIGHTER_GREY: string;
    NEUE_TYPE_WHITE: string;

    NEUE_SCROLLBAR_THUMB: string;
    NEUE_STROKE_GREY: string;
    NEUE_STROKE_LIGHT_GREY: string;

    BUTTON_RED: string;
    BUTTON_RED_HOVER: string;

    BOX_SHADOW_BLACK_15: string;
    BOX_SHADOW_BLACK_20: string;
    BOX_SHADOW_MODAL: string;

    IMAGE_FILTER?: string;
}

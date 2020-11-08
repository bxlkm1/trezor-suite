import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { COINS } from './coins';
import { CoinType } from '../../../support/types';
import { useTheme } from '../../../utils';

const SvgWrapper = styled.div<Omit<Props, 'symbol'>>`
    display: inline-block;
    height: ${props => props.size}px;

    div {
        height: ${props => props.size}px;
        line-height: ${props => props.size}px;
    }
`;

const isLogoDark = (svg: SVGElement) => {
    const fill = svg.getAttribute('fill');
    return fill?.startsWith('#000') ?? false;
};

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    symbol: CoinType;
    className?: string;
    size?: number;
}

const CoinLogo = ({ symbol, className, size = 32, ...rest }: Props) => {
    const theme = useTheme();
    return (
        <SvgWrapper className={className} size={size} {...rest}>
            <ReactSVG
                src={COINS[symbol]}
                beforeInjection={svg => {
                    svg.setAttribute('width', `${size}px`);
                    svg.setAttribute('height', `${size}px`);
                    if (isLogoDark(svg)) {
                        // set visible fill color for black colored logos (eg. XLM)
                        svg.setAttribute('fill', theme.NEUE_TYPE_DARK_GREY);
                    }
                }}
                loading={() => <span className="loading" />}
            />
        </SvgWrapper>
    );
};

export { CoinLogo, Props as CoinLogoProps };

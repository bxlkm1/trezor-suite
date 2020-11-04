import React from 'react';
import randomColor from 'randomcolor';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { THEME, tooltipGlobalStyles } from '../index';

const GlobalStyle = createGlobalStyle`
    ${tooltipGlobalStyles}
`;

const color = randomColor({ luminosity: 'light' });

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    background: ${props => props.theme.NEUE_BG_WHITE};
`;

const StoryWrapper = (storyFn: any) => (
    <ThemeProvider theme={THEME.dark}>
        <Wrapper>
            <GlobalStyle />
            {storyFn()}
        </Wrapper>
    </ThemeProvider>
);

interface StoryColumnProps {
    children: any;
    maxWidth?: number;
    minWidth?: number;
}

const Col = styled.div<StoryColumnProps>`
    padding: 10px;
    flex: 1;
    border-radius: 10px;
    border: 1px dashed ${color};
    margin: 5px;
    min-width: ${props => props.minWidth}px;
    max-width: ${props => props.maxWidth}px;

    > * {
        margin-bottom: 20px;
    }
`;

const StoryColumn = ({ minWidth, maxWidth, children }: StoryColumnProps) => (
    <Col minWidth={minWidth || 250} maxWidth={maxWidth || 500}>
        {children}
    </Col>
);

export { StoryWrapper, StoryColumn };

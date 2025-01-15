import React from 'react';

export const ThemeProvider = ({ theme, children }) => {
    if (!theme) {
        throw new Error('ThemeProvider: "theme" prop is required.');
    }

    return (
        <div style={{ background: theme.background, color: theme.color }}>
            {children}
        </div>
    );
};

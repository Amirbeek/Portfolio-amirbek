import React from 'react';

export const ThemeProvider = ({ theme, children }) => {
    if (!theme) {
        throw new Error('ThemeProvider: "theme" prop is required.');
    }

    // You can now apply the theme here (e.g., via context or styling)
    return (
        <div style={{ background: theme.background, color: theme.color }}>
            {children}
        </div>
    );
};

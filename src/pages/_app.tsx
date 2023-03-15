import type { AppProps } from 'next/app';
import './index.scss';
import React from 'react';

if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
}

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

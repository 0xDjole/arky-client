/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/tailwind.scss'
import '../styles/globals.scss'
import '../styles/post.scss'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import React from 'react'

import { client } from '../services'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <ApolloProvider client={client as any}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp

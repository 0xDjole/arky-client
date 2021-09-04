import '../styles/Home.module.scss'

import React from 'react'

import { HomeContainer } from '../containers'
import {
    AppProvider,
    CategoryProvider,
    PostProvider,
    UserProvider
} from '../context'

const App = (): JSX.Element => {
    return (
        <AppProvider>
            <UserProvider>
                <PostProvider>
                    <CategoryProvider>
                        <HomeContainer />
                    </CategoryProvider>
                </PostProvider>
            </UserProvider>
        </AppProvider>
    )
}

export default App

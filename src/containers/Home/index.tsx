/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { Home, withAuthentication } from '../../components'
import {
    useAppContext,
    useCategoryContext,
    usePostContext,
    useUserContext
} from '../../context'
import { useComponentPadding, useWindowDimensions } from '../../services'
import { ICHomeContainer } from '../../types'
import { HomeDrawer, HomeHeader, HomeNavbar } from './components'
import POSITIONS from './positions'
import styles from './style.module.scss'

const HomeContainer: ICHomeContainer = (): JSX.Element => {
    const dimensions = useWindowDimensions()

    const {
        state: { userLocationData },
        actions: { getUserLocation, setUserMapDistance, userOAuth2Logout }
    } = useUserContext()

    const {
        state,
        actions: { postGetRandom }
    } = usePostContext()

    const {
        state: {
            categoriesData,
            categoriesError,
            categoriesLoading,
            matchAllCategories
        },
        actions: { getCategories, selectCategory, toggleMatchAllCategories }
    } = useCategoryContext()

    const {
        state: {
            drawer: { drawerOpened, drawerWidth, drawerPosition },
            header: { headerOpened, headerHeight, headerPosition },
            navbar: { navbarOpened, navbarHeight, navbarPosition }
        },
        actions: {
            toggleDrawer,
            toggleHeader,
            toggleHeaderPosition,
            toggleNavbar,
            toggleNavbarPosition
        }
    } = useAppContext()

    useEffect(() => {
        getUserLocation()
        getCategories()
    }, [])

    useEffect(() => {
        if (state.postGetRandomData && state.postGetRandomData.id) {
            toggleHeader(true)
        }
    }, [state.postGetRandomData.id])

    useEffect(() => {
        if (state.postGetRandomError && !headerOpened) {
            toggleHeader(true)
        }
    }, [state.postGetRandomError])

    const stylePadding = useComponentPadding({
        headerPosition,
        headerHeight,
        navbarOpened,
        navbarPosition,
        headerOpened
    })

    return (
        <div className={styles.homeBackground} style={stylePadding}>
            <HomeHeader
                headerOpened={headerOpened}
                headerHeight={headerHeight}
                headerPosition={headerPosition}
                toggleHeader={toggleHeader}
                toggleHeaderPosition={toggleHeaderPosition}
                drawerPosition={drawerPosition}
                drawerWidth={drawerWidth}
                postGetRandom={postGetRandom}
                toggleDrawer={toggleDrawer}
                userLocationData={userLocationData}
                categoriesData={categoriesData}
                matchAllCategories={matchAllCategories}
                style={{
                    marginTop:
                        navbarPosition === headerPosition
                            ? `${navbarHeight}px`
                            : '0px',
                    marginBottom:
                        navbarPosition === headerPosition
                            ? `${navbarHeight}px`
                            : '0px'
                }}
            />

            <HomeDrawer
                categoriesLoading={categoriesLoading}
                categoriesError={categoriesError}
                toggleDrawer={toggleDrawer}
                drawerWidth={drawerWidth}
                drawerOpened={drawerOpened}
                drawerPosition={drawerPosition}
                setUserMapDistance={setUserMapDistance}
                userLocationData={userLocationData}
                categoriesData={categoriesData}
                selectCategory={selectCategory}
                matchAllCategories={matchAllCategories}
                toggleMatchAllCategories={toggleMatchAllCategories}
                style={{
                    height:
                        dimensions.height -
                        (navbarOpened ? navbarHeight : 0) -
                        (headerOpened ? headerHeight : 0)
                }}
            />

            <Home
                postGetRandomLoading={state.postGetRandomLoading}
                postGetRandomData={state.postGetRandomData}
                postGetRandomError={state.postGetRandomError}
                postGetRandom={postGetRandom}
                userLocationData={userLocationData}
                categoriesData={categoriesData}
                matchAllCategories={matchAllCategories}
            />
            <HomeNavbar
                navbarOpened={navbarOpened}
                navbarHeight={navbarHeight}
                navbarPosition={navbarPosition}
                toggleNavbar={toggleNavbar}
                toggleNavbarPosition={toggleNavbarPosition}
                userOAuth2Logout={userOAuth2Logout}
                reverse={drawerPosition !== POSITIONS.LEFT}
            />
        </div>
    )
}

export default withAuthentication(HomeContainer, {
    showLoader: true
})

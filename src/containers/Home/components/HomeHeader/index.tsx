import React from 'react'
import { AiFillFilter } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { RiArrowRightCircleFill } from 'react-icons/ri'

import { Button, Header } from '../../../../components'
import { ICHomeHeader } from '../../../../types'
import styles from './style.module.scss'

const HomeHeader: ICHomeHeader = ({
    headerOpened,
    headerHeight,
    headerPosition,
    toggleHeader,
    toggleHeaderPosition,
    postGetRandom,
    drawerPosition,
    drawerWidth,
    toggleDrawer,
    userLocationData,
    style,
    categoriesData,
    matchAllCategories
}) => {
    return (
        <Header
            headerOpened={headerOpened}
            headerHeight={headerHeight}
            headerPosition={headerPosition}
            toggleHeader={toggleHeader}
            toggleHeaderPosition={toggleHeaderPosition}
            reverse={drawerPosition !== 'left'}
            style={style}
        >
            <>
                <Button
                    className={`${styles.filterButton} shadow-orange`}
                    rounded={styles.loaderDot}
                    onClick={() => toggleDrawer()}
                    style={{
                        width: `${drawerWidth}%`
                    }}
                >
                    <AiFillFilter className={styles.aiFillFilter} />
                </Button>
                <Button
                    className={`${styles.nextButton} shadow-orange`}
                    rounded={styles.loaderDot}
                    onClick={async () => {
                        postGetRandom({
                            ...userLocationData,
                            categories: categoriesData.filter(
                                categoryItem => categoryItem.selected
                            ),
                            matchAllCategories
                        })
                    }}
                >
                    <>
                        <span className={styles.nextOne}>Next one</span>
                        <RiArrowRightCircleFill
                            className={styles.riArrowRightCircleFill}
                        />
                    </>
                </Button>
                <Button
                    className={`${styles.userButton} shadow-orange`}
                    rounded={styles.loaderDot}
                    style={{
                        width: `${drawerWidth}%`
                    }}
                    disabled
                >
                    <FaUserAlt className={styles.faUserAlt} />
                </Button>
            </>
        </Header>
    )
}

export default HomeHeader

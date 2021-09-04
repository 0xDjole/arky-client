import React from 'react'

import { CategoryList, Drawer, Slider } from '../../../../components'
import { ICHomeDrawer } from '../../../../types'
import styles from './style.module.scss'

const HomeDrawer: ICHomeDrawer = ({
    categoriesLoading,
    categoriesError,
    toggleDrawer,
    drawerWidth,
    drawerOpened,
    drawerPosition,
    setUserMapDistance,
    userLocationData,
    categoriesData,
    style,
    selectCategory,
    matchAllCategories,
    toggleMatchAllCategories
}) => {
    return (
        <Drawer
            toggleDrawer={toggleDrawer}
            drawerWidth={drawerWidth}
            drawerOpened={drawerOpened}
            drawerPosition={drawerPosition}
            style={style}
        >
            <>
                <h2 className={styles.title}>Filters</h2>
                <div>
                    <div className={styles.distanceContainer}>
                        <span className={styles.distance}>Distance</span>
                    </div>
                    <Slider
                        setUserMapDistance={setUserMapDistance}
                        userMapDistance={userLocationData.userMapDistance}
                    />
                </div>
                <div className={styles.categoryContainer}>
                    <span className={styles.category}>Categories</span>
                </div>

                <div className={styles.matchCategories}>
                    <span className={styles.matchCategoriesTitle}>
                        Match all categories
                    </span>
                    <input
                        id="s2d"
                        className="switch"
                        onChange={() => toggleMatchAllCategories()}
                        checked={matchAllCategories}
                        type="checkbox"
                    />
                </div>

                <div className={styles.categoryList}>
                    <CategoryList
                        selectCategory={selectCategory}
                        categories={categoriesData}
                        categoriesLoading={categoriesLoading}
                        categoriesError={categoriesError}
                    />
                </div>
            </>
        </Drawer>
    )
}

export default HomeDrawer

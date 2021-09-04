import React from 'react'

import { ICCategoryListInterface } from '../../types'
import { Category, Error, Loader } from '..'
import styles from './style.module.scss'

const Interface: ICCategoryListInterface = ({
    categories,
    categoriesError,
    categoriesLoading,
    selectCategory
}) => {
    if (categoriesLoading) {
        return (
            <div className={styles.categoryLoading}>
                <Loader load={categoriesLoading} />
            </div>
        )
    }

    if (categoriesError) {
        return (
            <div className={styles.categoryError}>
                <Error
                    text={categoriesError}
                    className={styles.categoryError}
                />
            </div>
        )
    }
    return (
        <>
            {categories && categories.length
                ? categories.map(category => (
                      <Category
                          category={category}
                          key={category.id}
                          selectCategory={selectCategory}
                      />
                  ))
                : null}
        </>
    )
}

export default Interface

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

import { ICCategoryInterface } from '../../types'
import styles from './style.module.scss'

const Interface: ICCategoryInterface = ({ category, selectCategory }) => {
    return (
        <div
            className={[
                styles.category,
                category.selected ? styles.selected : styles.notSelected
            ].join(' ')}
            onClick={() => selectCategory(category.id)}
        >
            <div className={styles.categoryLeftSide} />
            <div className={styles.categoryCenter}>
                <span
                    className={[
                        styles.categoryName,
                        category.selected
                            ? styles.nameActive
                            : styles.nameInactive
                    ].join(' ')}
                >
                    {category.name[0].toUpperCase() + category.name.slice(1)}
                </span>
                <img
                    alt="Category"
                    className={styles.categoryImage}
                    src={category.image}
                />
            </div>
            <div className={styles.categoryRightSide}>
                <MdCheckCircle
                    fill={category.selected ? '#a0ff8f' : '#41414180'}
                    className={styles.circle}
                />
            </div>
        </div>
    )
}

export default Interface

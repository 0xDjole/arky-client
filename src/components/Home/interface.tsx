import React from 'react'

import { ICHomeInterface } from '../../types'
import { Button, GoogleMap, Post } from '..'
import styles from './style.module.scss'

const Interface: ICHomeInterface = ({
    userLocationData,
    postGetRandomData,
    postGetRandomLoading,
    postGetRandomError,
    handleRandomPost
}) => {
    const renderButton = (): JSX.Element => {
        if (
            !postGetRandomData ||
            (!postGetRandomData.id && !postGetRandomError)
        ) {
            return (
                <Button
                    text={`Let's go somewhere`}
                    className={styles.button}
                    rounded={styles.rounded}
                    onClick={handleRandomPost}
                />
            )
        }

        return null
    }

    if (
        !userLocationData ||
        !userLocationData.latitude ||
        !userLocationData.longitude
    ) {
        return null
    }

    return (
        <div className={styles.buttonContainer}>
            <div className={styles.buttonWrapper}>
                {(!postGetRandomLoading || postGetRandomData.id) &&
                    renderButton()}
            </div>

            <Post
                userLocationData={userLocationData}
                postData={postGetRandomData}
                postError={postGetRandomError}
                postLoading={postGetRandomLoading}
            />

            {postGetRandomData && postGetRandomData.id && (
                <div className={styles.mapContainer}>
                    <GoogleMap
                        postData={postGetRandomData}
                        userLocationData={userLocationData}
                    />
                </div>
            )}
        </div>
    )
}

export default Interface

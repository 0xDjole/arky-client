/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'

import { ICGoogleMapInterface, IUserLocation } from '../../types'
import styles from './style.module.scss'

declare global {
    interface Window {
        google: any
    }
}

const Interface: ICGoogleMapInterface = ({ userLocationData, postData }) => {
    const googleMapRef = useRef()

    const createGoogleMap = (location: IUserLocation) => {
        return new window.google.maps.Map(googleMapRef.current, {
            zoom: 30,
            disableDefaultUI: true,
            center: {
                lat: location.latitude,
                lng: location.longitude
            }
        })
    }

    const getLatLng = () => {
        const googleMap = createGoogleMap(userLocationData)

        const directionsService = new window.google.maps.DirectionsService()
        const directionsRenderer = new window.google.maps.DirectionsRenderer({
            suppressMarkers: true
        })
        directionsRenderer.setMap(googleMap)

        const userLocation = new window.google.maps.Marker({
            position: {
                lat: userLocationData.latitude,
                lng: userLocationData.longitude
            },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: 'My location'
        })

        const destinationlocation = new window.google.maps.Marker({
            position: {
                lat: postData.location.latitude,
                lng: postData.location.longitude
            },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: 'My location'
        })

        const bounds = new window.google.maps.LatLngBounds(
            userLocation.getPosition(),
            destinationlocation.getPosition()
        )

        googleMap.fitBounds(bounds)

        const request = {
            origin: `${userLocationData.latitude},${userLocationData.longitude}`,

            destination: `${postData.location.latitude},${postData.location.longitude}`,
            travelMode: 'WALKING'
        }
        directionsService.route(request, (result: any, status: any) => {
            if (status === 'OK') {
                directionsRenderer.setDirections(result)
            }
        })
    }

    useEffect(() => {
        const exists = document.getElementById('google-map-script')

        if (!exists) {
            const googleMapScript = document.createElement('script')
            googleMapScript.id = 'google-map-script'
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=geometry,places`
            googleMapScript.async = true
            window.document.body.appendChild(googleMapScript)

            googleMapScript.addEventListener('load', () => {
                getLatLng()
            })
        } else {
            getLatLng()
        }
    }, [postData.id])

    return (
        <div
            id="google-map"
            className={styles.mapContainer}
            ref={googleMapRef}
            style={{ height: '400px' }}
        />
    )
}

export default Interface

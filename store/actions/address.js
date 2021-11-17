export const UPDATE_USER_ADDRESS = "UPDATE_USER_ADDRESS"
export const UPDATE_DESTINATION_ADDRESS = "UPDATE_DESTINATION_ADDRESS"
export const UPDATE_DRIVE_TIME = "UPDATE_DRIVE_TIME"
export const UPDATE_WALK_TIME = "UPDATE_WALK_TIME"
export const UPDATE_CYCLE_TIME = "UPDATE_CYCLE_TIME"

import { GOOGLE_MAPS_APIKEY } from '@env'

export const updateUserAddress = (userLocation, coordinates) => {
    return async dispatch => {
        dispatch ({
            type: UPDATE_USER_ADDRESS,
            originAddress: userLocation,
            originCoordinates: coordinates
        })
    }
}

export const fetchUserLocation = location => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${GOOGLE_MAPS_APIKEY}`)
            if (!response.ok) {
                throw new Error("Error fetching user address")
            }
            const resData = await response.json()
            dispatch(
                updateUserAddress(
                    resData.results[1]["formatted_address"],
                    {
                        lat: location.coords.latitude,
                        lng: location.coords.longitude
                    }
                )
            )
    }
}

export const getUserDestination = ({ description }) => {
    console.log(description)
    return async dispatch => {
        const encodedAddress = encodeURI(description)
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_MAPS_APIKEY}`)
        if (!response.ok) {
            throw new Error("Error fetching geocoded address")
        }
        const resData = await response.json()
        console.log(resData)
        const coords = resData.results[0].geometry.location
        dispatch({
            type: UPDATE_DESTINATION_ADDRESS,
            descriptionAddress: description,
            destinationCoords: coords
        })        
    }
}

export const getTime = (mode) => {
    let newMode = ''
    if (mode == 'DRIVING'){
        newMode = 'driving'
    } else if (mode == 'WALKING'){
        newMode = 'walking'
    } else {
        newMode = 'bicycling'
    }
    return async (dispatch, getState) => {
        const { userAddress, destinationAddress } = getState().address
        const encodedOrigin = encodeURI(userAddress)
        const encodedDestination = encodeURI(destinationAddress)
        
        console.log(encodedOrigin)
        console.log(encodedDestination)

        const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${encodedOrigin}&destination=${encodedDestination}&mode=${newMode}&key=${GOOGLE_MAPS_APIKEY}`)
        if (!response.ok) {
            throw new Error("Error fetching geocoded address")
        }
        const resData = await response.json()
        const distance = resData.routes[0].legs[0].distance.text
        const duration = resData.routes[0].legs[0].duration.text
        if (mode == 'DRIVING') {
            dispatch({
                type: UPDATE_DRIVE_TIME,
                distance: distance,
                duration: duration
            })
            
        } else if (mode == 'WALKING') {
            dispatch({
                type: UPDATE_WALK_TIME,
                distance: distance,
                duration: duration
            })
        } else {
            dispatch({
                type: UPDATE_CYCLE_TIME,
                distance: distance,
                duration: duration
            })
        }
    }   
}
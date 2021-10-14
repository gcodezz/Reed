export const UPDATE_USER_ADDRESS = "UPDATE_USER_ADDRESS"

import { GOOGLE_MAPS_APIKEY } from '@env'

export const updateUserAddress = userLocation => {
    return {
        type: UPDATE_USER_ADDRESS,
        userLocation
    }
}

export const fetchUserLocation = location => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${GOOGLE_MAPS_APIKEY}`)
            if (!response.ok) {
                throw new Error("Error fetching user address")
            }
            const resData = await response.json()
            console.log(resData.results)
            dispatch(
                updateUserAddress(
                    resData.results[1]["formatted_address"]
                )
            )
    }
}
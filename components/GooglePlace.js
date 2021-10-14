import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'

const GooglePlace = props => {
    const top = props.top ? 120 : 60
    return (
        <GooglePlacesAutocomplete
            ref={props.focus}
            placeholder='Search'
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
                components: 'country:ng'
            }}
            styles={{
                textInput: {
                    backgroundColor: '#e6e6e6',
                    width: "80%",
                    fontSize: 18,
                    height: 40,
                    padding: 10,
                    borderRadius: 6
                },
                listView: {
                    position: 'absolute',
                    top: top,
                    left: -70,
                    width: 400
                },
                poweredContainer: null,
                powered: null
            }}
        />
    )
}

export default GooglePlace

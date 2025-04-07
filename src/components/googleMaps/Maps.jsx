import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={{ width: "400px", height: "400px" }}
                center={{ lat: 14.5995, lng: 120.9842 }}
                zoom={12}
            />
        </LoadScript>
    );
};

export default MapComponent;
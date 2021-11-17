import * as Location from "expo-location";

export async function geolocalisationPermissions() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return false;
  } else return true;
}

export async function geolocalisation() {
    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
    return location
}
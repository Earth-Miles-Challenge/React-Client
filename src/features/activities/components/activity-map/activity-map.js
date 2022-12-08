import { useCallback, useMemo } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import polyline from '@mapbox/polyline';

import 'leaflet/dist/leaflet.css';

const getMapBounds = coordinates => {
	const [north, east, south, west ] = coordinates.reduce(([north, east, south, west], [lng, lat]) => {
		if (north === null) return [lat, lng, lat, lng];
		return [
			north > lat ? north : lat,
			east < lng ? east : lng,
			south < lat ? south : lat,
			west > lng ? west : lng
		];
	}, [null, null, null, null]);

	return [
		[west, north],
		[east, south]
	]
}

export const ActivityMap = ({activity}) => {
	const getActivityMap = useCallback(() => {
		if (!activity.activity_impact.fossil_alternative_polyline) return;

		const fossilCoordinates = polyline.decode(activity.activity_impact.fossil_alternative_polyline);
		const actualCoordinates = polyline.decode(activity.map_polyline);

		const mapBounds = getMapBounds([
			...fossilCoordinates,
			...actualCoordinates
		]);
		return (
			<MapContainer bounds={mapBounds} scrollWheelZoom={false}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				<Polyline
					positions={fossilCoordinates}
					pathOptions={{color:"brown"}}
				/>
				<Polyline
					positions={actualCoordinates}
					pathOptions={{color:"blue"}}
				/>
			</MapContainer>
		);
	}, [activity.activity_impact.fossil_alternative_polyline, activity.map_polyline]);

	return useMemo(getActivityMap, [getActivityMap]);
}
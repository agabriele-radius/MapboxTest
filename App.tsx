/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

declare const global: {HermesInternal: null | {}};

const App = () => {
  MapboxGL.setAccessToken();
  return (
    <MapboxGL.MapView
      styleURL={MapboxGL.StyleURL.Outdoors}
      style={{flex: 1}}
      pitchEnabled
      compassEnabled
    />
  );
};

export default App;

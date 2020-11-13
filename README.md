# Setup

Add an api key to `App.tsx`

# Problems

- Fails `yarn test`
- Fails `react-native run-ios --configuration Release`

# Patches

Can be found on the branch `b/patches`

- include homemade setup-jest as per [this issue](https://github.com/react-native-mapbox-gl/maps/issues/998#issuecomment-700135776)
- downgrade cocoapods in `ios/Podfile.lock`
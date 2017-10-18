# Bitstatistics
It's a project for gathering statistics from our bitbucket repositories and presenting them in a form of a web application and a native mobile application

## Technologies used
- React
- React Native
- Graphql + Apollo
- Mobx

## Prerequirements

Before starting doing anything you should make sure that you have Node.js installed on your machine.
After that you have to install project dependencies. Just to be safe that you have right version of dependencies we
recomend using `yarn` as your package manager. Installation is pretty straight forward:
```
npm install -g yarn
```

Then install dependencies:
```
yarn install
```

## Starting backend mock

For the application to work correctly we need some data, you have to start mocked backend which will provide us with some repositories and commits using `faker`

```
yarn run backend:mocked
```

## Starting web application
To start development server run:
```
yarn run web:dev
```
and navigate to [http://localhost:8080](http://localhost:8080)

## Starting native application on android device or emulator
If you are using a device you have to enable remote debugging which is described in the first step [here](https://facebook.github.io/react-native/docs/running-on-device.html)

You will also need to follow a guide described [here](https://facebook.github.io/react-native/docs/getting-started.html) in section **Building Projects with Native Code**

Once your sure that you have Android SDK, `react-native-cli` installed, `adb` command is present and your device is connected (or emulator is running) you have to run following commands:

```
npm install -g cross-env
```
```
adb reverse tcp:4000 tcp:4000
```
```
cross-env BACKEND_URL=http://localhost:4000 react-native run-android
```

Be adviced the first time you do this it might take some time.

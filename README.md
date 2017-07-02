# React-Native-Reddit

![comp](https://user-images.githubusercontent.com/20421030/27773626-d017a7dc-5f4b-11e7-807a-b9286f50b393.png)

A React Native version of the current Reddit iOS application, with nested navigations and oauth implicit grant flow.
Some icons maybe different and some features missing.
This serves as a base template for building your own Reddit app, copying or improving implementations and adding missing/custom features or pages.
To use this app, you'll need to register a Reddit oauth application.

## Implementations
If you're here for an example of how to implement a certain feature/code, visit the following paths
- **react-navigation nesting navigation:** [`src/containers/index.js`](https://github.com/finetimi/React-Native-Reddit/blob/master/src/containers/index.js)
- **set indicatorStyle for TabBarTop on iOS:** [`src/containers/index.js line 49`](https://github.com/finetimi/React-Native-Reddit/blob/master/src/containers/index.js#L49)
- **oauth implicit flow grant for apps:** [`src/components/WebView.js line 59`](https://github.com/finetimi/React-Native-Reddit/blob/master/src/components/WebView.js)
- **Various ways to render Icons:** [`src/components/Icons.js`](https://github.com/finetimi/React-Native-Reddit/blob/master/src/components/Icons.js)


## 3rd Party Libs used:
- react-navigation
- react-native-vector-icons
- react-native-elements
- qs 

## Todo:
- Add Loading Indicator
- Set action for filter button
- Set action for new post button
- Enable requests fail gracefully
- Add nested pages for posts, comments, settings, and others

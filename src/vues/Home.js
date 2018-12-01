import * as React from "react";
import { Dimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import One from './patient/One';
import Two from './pharma/Two';



export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: "one", title: "page one" },
                { key: "two", title: "page two" },
            ]
        };
    }

    componentDidMount() {
    }
    render() {
        const OneRoute = () => (
            <One />
        );
        const TwoRoute = () => (
            <Two />
        );
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    one: OneRoute,
                    two: TwoRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height }}
            />
        );
    }
}
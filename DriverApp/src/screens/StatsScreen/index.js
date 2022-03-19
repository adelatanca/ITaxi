import React, { useState, useEffect } from 'react';
import { Image, Appearance, useColorScheme, Text, View, Pressable, useWindowDimensions } from 'react-native';
import HistoryRow from '../../components/HistoryRow';
import { ScrollView } from "react-native-gesture-handler";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listOrders, listUsers } from '../../graphql/queries';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const StatsScreen = props => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Castiguri' },
    { key: 'second', title: 'Comenzi' },
  ]);
  const [orders, setOrders] = useState(null);
  const [pretIan, setPretIan] = useState(null);
  const [pretFeb, setPretFeb] = useState(null);
  const [pretMar, setPretMar] = useState(null);
  const [comenziIan, setComenziIan] = useState(null);
  const [comenziFeb, setComenziFeb] = useState(null);
  const [comenziMar, setComenziMar] = useState(null);

  const fetchOrders = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const ordersData = await API.graphql(
        graphqlOperation(listOrders, { filter: { carId: { eq: userData.attributes.sub } } }),
      );
      setOrders(ordersData.data.listOrders.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    iterateOrders();
  });

  const iterateOrders = () => {
    var priceIan = 0;
    var priceFeb = 0;
    var priceMar = 0;

    var nrComenziIan = 0;
    var nrComenziFeb = 0;
    var nrComenziMar = 0;

    orders?.map(order => {
      if (order.createdAt.slice(5, 7) == '01') {
        priceIan += order.pret;
        nrComenziIan++;
        console.log("IAN ", order.pret)
      }
      else if (order.createdAt.slice(5, 7) == '02') {
        priceFeb += order.pret;
        nrComenziFeb++;
        console.log("FEB ", order.pret, " - nr ", nrComenziFeb)
      }
      else if (order.createdAt.slice(5, 7) == '03') {
        priceMar += order.pret;
        nrComenziMar++;
        console.log("MAR ", order.pret, " - nr ", nrComenziMar)
      }
      // else if (order.createdAt.slice(5, 7) == '04') {
      //   priceApr += order.pret;
      //   console.log("APR ", order.pret)
      // }
      // else if (order.createdAt.slice(5, 7) == '05') {
      //   priceMai += order.pret;
      //   console.log("MAI ", order.pret)
      // }
      // else if (order.createdAt.slice(5, 7) == '06') {
      //   priceIun += order.pret;
      //   console.log("IUN ", order.pret)
      // }
    })

    setPretIan(priceIan);
    setPretFeb(priceFeb);
    setPretMar(priceMar);

    setComenziIan(nrComenziIan);
    setComenziFeb(nrComenziFeb);
    setComenziMar(nrComenziMar);
  }

  console.log(" LISTA PRETURI ", pretIan, " - ", pretFeb, " - ", pretMar);

  const Castiguri = () => (
    <LineChart
      data={{
        labels: ["Ian", "Feb", "Mar"],
        datasets: [
          {
            data: [
              pretIan || 0,  // PUT HERE THE AVERAGE FOR EACH MONTH
              pretFeb || 0,
              pretMar || 0
            ],
          }
        ],
      }}
      width={Dimensions.get("window").width} // from react-native
      height={600}
      verticalLabelRotation={30}
      yAxisSuffix="LEI"
      yAxisInterval={10} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#45a8f2",
        backgroundGradientFrom: "#45a8f2",
        backgroundGradientTo: "#42a3d854",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#42a3d854"
        },
        propsForVerticalLabels: {

        }
      }}
      // bezier
      style={{
        paddingTop: 20,
        borderRadius: 16,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3,
      }}
    />
  );

  const Comenzi = () => (
    <LineChart
      data={{
        labels: ["Ian", "Feb", "Mar"],
        datasets: [
          {
            data: [
              comenziIan || 0,
              comenziFeb || 0,
              comenziMar || 0
            ],
          }
        ],
      }}
      width={Dimensions.get("window").width} // from react-native
      height={650}
      verticalLabelRotation={30}
      yAxisInterval={10} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#45a8f2",
        backgroundGradientFrom: "#45a8f2",
        backgroundGradientTo: "#42a3d854",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          left: 50
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#45a8f2"
        }
      }}
      // bezier
      style={{
        borderRadius: 16,
        top: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3,
      }}
    />
  );
  const renderScene = SceneMap({
    first: Castiguri,
    second: Comenzi,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white', }}
      style={styles.tabBar}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default StatsScreen;


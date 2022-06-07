import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listOrders } from '../../graphql/queries';
import styles from './styles';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const StatsScreen = props => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Câștiguri' },
    { key: 'second', title: 'Comenzi' },
  ]);
  const [orders, setOrders] = useState(null);
  const [pretApr, setPretApr] = useState(null);
  const [pretMai, setPretMai] = useState(null);
  const [pretIun, setPretIun] = useState(null);
  const [comenziApr, setComenziApr] = useState(null);
  const [comenziMai, setComenziMai] = useState(null);
  const [comenziIun, setComenziIun] = useState(null);

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
    var priceApr = 0;
    var priceMai = 0;
    var priceIun = 0;

    var nrComenziApr = 0;
    var nrComenziMai = 0;
    var nrComenziIun = 0;

    orders?.map(order => {
      if (order.createdAt.slice(5, 7) == '04') {
        priceApr += order.pret;
        nrComenziApr++;
        //  console.log("Apr ", order.pret)
      }
      else if (order.createdAt.slice(5, 7) == '05') {
        priceMai += order.pret;
        nrComenziMai++;
        //console.log("Mai ", order.pret, " - nr ", nrComenziFeb)
      }
      else if (order.createdAt.slice(5, 7) == '06') {
        priceIun += order.pret;
        nrComenziIun++;
        // console.log("Iunie ", order.pret, " - nr ", nrComenziMar)
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

    setPretApr(priceApr);
    setPretMai(priceMai);
    setPretIun(priceIun);

    setComenziApr(nrComenziApr);
    setComenziMai(nrComenziMai);
    setComenziIun(nrComenziIun);
  }

  // console.log(" LISTA PRETURI ", pretIan, " - ", pretFeb, " - ", pretMar);

  const Castiguri = () => (
    <LineChart
      data={{
        labels: ["Apr", "Mai", "Iun"],
        datasets: [
          {
            data: [
              pretApr || 0,  // PUT HERE THE AVERAGE FOR EACH MONTH
              pretMai || 0,
              pretIun || 0
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
        labels: ["Apr", "Mai", "Iun"],
        datasets: [
          {
            data: [
              comenziApr || 0,
              comenziMai || 0,
              comenziIun || 0,
            ],
          }
        ],
      }}
      width={Dimensions.get("window").width} // from react-native
      height={600}
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
      bezier
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


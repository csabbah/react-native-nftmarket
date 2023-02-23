import { Text, View, SafeAreaView, Image, FlatList } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";
import React from "react";

const btnPositioning = [
  {
    left: 10,
  },
  {
    right: 10,
  },
];

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image style={{ width: "100%", height: "100%" }} source={data.image} />
    <CircleButton
      positioning={btnPositioning[0]}
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
    />
    <CircleButton positioning={btnPositioning[1]} imgUrl={assets.heart} />
  </View>
);

const Details = ({ route, navigation }) => {
  // 'route' contains all the data we passed when we called the navigation function
  // We added this onPress method to the 'Place a bid' button which redirects to 'Details' page
  // handlePress={() => navigation.navigate("Details", { data })}

  // Just like react router, we setup the structure in app.js like so:
  //   <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
  //   <Stack.Screen name="Home" component={Home} />
  //   <Stack.Screen name="Details" component={Details} />
  // </Stack.Navigator>

  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 50,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

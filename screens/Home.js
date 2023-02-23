import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length == 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length == 0) {
      setNftData([]);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          {/* Similar to UL */}
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            // Unique identifier - Similar to adding key in map method
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // What shows up above the list
            ListHeaderComponent={
              <HomeHeader nftData={nftData} onSearch={handleSearch} />
            }
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

import { View, Text, Image } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,0.05)",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: SIZES.base - 5,
        paddingHorizontal: 50,
        paddingVertical: 5,
      }}
    >
      <Image
        source={bid.image}
        resizeMethod="contain"
        style={{ width: 48, height: 48 }}
      />
      <View style={{ marginLeft: 8 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid Placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;

import React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const width = Dimensions.get('screen').width;

const arr = [1,2,3,4,5,6,7,8,9,10];

const Looped = () => {
  return <SkeletonPlaceholder
    speed={600}
  >
    <View style={{ flexDirection: "row", height: 120, marginHorizontal: 10 }}>
      <View style={{ marginLeft: 10, flex: 4 }}>
        <View style={{ width: 270, height: 60, borderRadius: 4 }} />
        <View style={{ marginTop: 10, width: 80, height: 20, borderRadius: 4, }} />
      </View>
      <View style={{ marginRight: 10, flex: 2, alignItems: 'flex-end' }}>
        <View style={{ width: width / 5 , height: 30, borderRadius: 50 }} />
      </View>
    </View>
  </SkeletonPlaceholder>
}

const Skeleton = () => {

      
  return (
    <View style={{ paddingTop: 15 }}>
      {arr.map((v, i) => <Looped key={i} />)}
    </View>
    
  );
};

export default Skeleton;
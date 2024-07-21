
import { View } from 'react-native';
import * as Device from 'expo-device';
import React, { useState } from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const iosAdmobBanner = "ca-app-pub-4181498982226365/1837566245";
const androidAdmobBanner = "ca-app-pub-4181498982226365/1837566245";
const productionID = Device.osName === 'Android' ? androidAdmobBanner : iosAdmobBanner;

const InlineAd = () => {
  const [isAdLoaded, setIsAdLoaded] = useState<boolean>(false);
  return (
    <View style={{ height: isAdLoaded ? 'auto' : 0 }}>
      <BannerAd
       
        unitId={__DEV__ ? TestIds.BANNER : productionID}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true, 
          
        }}
        onAdLoaded={() => {
          setIsAdLoaded(true);
        }}
      />
    </View >
  );
};

export default InlineAd;

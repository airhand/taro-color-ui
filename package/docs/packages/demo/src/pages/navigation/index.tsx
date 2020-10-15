import React from "react";
import { View, Text } from "@tarojs/components";
import { CuNavigation, CuIcon } from "taro-color-ui";
import "./index.scss";

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(45deg, #ec008c, #6739b6)"
        leftSolt="返回"
      >
        自定义导航
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>无返回箭头
        </View>
      </View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(45deg, #2AFADF, #4C83FF)"
        isBack={false}
      >
        无返回箭头
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义左侧
        </View>
      </View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(45deg, #F6D242, #FF52E5)"
        isBack={false}
        leftSolt={
          <View>
            <CuIcon value="github" color="#fff"></CuIcon>
          </View>
        }
      >
        自定义左侧
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义右侧
        </View>
      </View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(45deg, #69FF97, #00E4FF)"
        rightSolt={
          <View>
            <CuIcon value="github" color="#fff"></CuIcon>
          </View>
        }
      >
        自定义右侧
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义背景图片
        </View>
      </View>
      <CuNavigation
        color="#fff"
        bgImage="https://material.etango.cn/2915%2F1600322372424.png"
      >
        自定义背景图片
      </CuNavigation>
    </View>
  );
};

export default Index;

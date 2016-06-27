/**
 * 二级菜单组件
 * 1.采用动态style
 * 2.根据点击动态切换显示ScrollView
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

class MenuList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wholeArea: false,
      hotBusiness: true,
      hotDistrict: false,
      wholeAreaFFF: {},
      hotBusinessFFF: { backgroundColor: '#fff' },
      hotDistricFFF: {}
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={[styles.flex_row, styles.height_head]}>
          <View style={[styles.flex_1, styles.head_container]}>
            <Text style={[styles.text_head, styles.active_blue]}>全部地区
            </Text>
          </View>

          <View style={[styles.flex_1, styles.head_container]}>
            <Text style={styles.text_head}>地铁沿线
            </Text>
          </View>
        </View>

        <View  style={[styles.flex_row, styles.flex_1]}>
          <ScrollView style={[styles.flex_1, styles.left_panel]}>
            <Text onPress={() => this.wholeArea() } style={[styles.left_row, this.state.wholeAreaFFF]}>全部地区
            </Text>
            <Text onPress={() => this.hotBusiness() } style={[styles.left_row, this.state.hotBusinessFFF]}>热门商圈
            </Text>
            <Text onPress={() => this.hotDistrict() } style={[styles.left_row, this.state.hotDistricFFF]}>热门行政区
            </Text>
          </ScrollView>

          {
            this.state.wholeArea?
            <ScrollView style={[styles.flex_1, styles.right_panel]}>
              <Text style={styles.left_row}>全部地区</Text>
            </ScrollView>
            : null
          }

          {
            this.state.hotBusiness?
            <ScrollView style={[styles.flex_1, styles.right_panel]}>
              <Text style={styles.left_row}>西直门</Text>
              <Text style={styles.left_row}>东直门</Text>
              <Text style={styles.left_row}>东单</Text>
              <Text style={styles.left_row}>西单</Text>
            </ScrollView>
            : null
          }

          {
            this.state.hotDistrict?
            <ScrollView style={[styles.flex_1, styles.right_panel]}>
              <Text style={styles.left_row}>北京</Text>
              <Text style={styles.left_row}>上海</Text>
              <Text style={styles.left_row}>广州</Text>
              <Text style={styles.left_row}>深圳</Text>
              <Text style={styles.left_row}>成都</Text>
            </ScrollView>
            : null
          }
        </View>

      </View>
    );
  }

  wholeArea() {
    this.setState({
      wholeArea: true,
      hotBusiness: false,
      hotDistrict: false,
      wholeAreaFFF: { backgroundColor: '#fff' },
      hotBusinessFFF: {},
      hotDistricFFF: {}
    });
  }

    hotBusiness() {
      this.setState({
        wholeArea: false,
        hotBusiness: true,
        hotDistrict: false,
        wholeAreaFFF: {},
        hotBusinessFFF: { backgroundColor: '#fff' },
        hotDistricFFF: {}
      });
    }

      hotDistrict() {
        this.setState({
          wholeArea: false,
          hotBusiness: false,
          hotDistrict: true,
          wholeAreaFFF: {},
          hotBusinessFFF: {},
          hotDistricFFF: { backgroundColor: '#fff' }
        });
      }
    }


    class App extends Component {

      // 注意: 带参数回调函数的使用navChange
      render() {
        return (
          <View style = {styles.margin_top}>
            <MenuList />
          </View>
        );
      }

    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        height: 240,
      },
      margin_top: {
        marginTop: 27,
      },
      flex_1: {
        flex: 1,
      },
      flex_row: {
        flexDirection: 'row',
      },
      text_head: {
        color: '#7b7b7b',
        textAlign: 'center',
        fontSize: 15,
      },
      height_head: {
        height: 35,
        borderBottomWidth: 1,
        backgroundColor: '#b5b5b5',
        borderBottomColor: '#f5f5f5',
      },
      head_container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      left_panel: {
        backgroundColor: '#f2f2f2',
      },
      right_panel: {
        marginLeft: 10,
      },
      left_row: {
        height: 30,
        lineHeight: 20,
        fontSize: 14,
        color: '#7c7c7c',
      },
      active_blue: {
        color: '#00B7EB',
      },
      active_fff: {
        backgroundColor: '#fff',
      }
    });


    AppRegistry.registerComponent('RNSubMenu', () => App);

import React from 'react';
import { FlatList, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import BookMarkedPlace from '../components/bookmarkedPlace';
import HomeFooter from '../components/homeFooter';
import NoBookmarks from '../components/noBookmarks';
import WelcomeHeader from '../components/welcomeHeader';
import mapContextToProps from '../context/mapContextToProps';
class HomeScreen extends React.Component {
  goToDetail = async selectedPlace => {
    console.log('detail');
    const { selectPlace } = this.props.context;
    await selectPlace(selectedPlace);
    this.props.navigation.navigate('PlaceDetail');
  };

  render() {
    const { bookmarks } = this.props.context;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FDFDFD',
        }}>
        <WelcomeHeader timeOfDay="Afternoon" weather="72° and Sunny" />
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          horizontal
          ListEmptyComponent={<NoBookmarks />}
          data={this.props.context.bookmarks}
          renderItem={({ item }) => (
            <BookMarkedPlace
              item={item}
              data={item.data}
              details={item.details}
              goToDetail={() => this.goToDetail(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          snapToInterval={scale(200)} //your element width
          snapToAlignment={'center'}
          showsHorizontalScrollIndicator={false}
        />
        <HomeFooter />
      </View>
    );
  }
}

export default mapContextToProps(HomeScreen);

// const SpecialOffersBanner = () => (
//   <FlatList
//     showsHorizontalScrollIndicator={false}
//     contentContainerStyle={{
//       alignItems: 'center',
//       paddingHorizontal: scale(5),
//       paddingVertical: verticalScale(10),
//       backgroundColor: 'rgb(244,244,244)',
//       justifyContent: 'center',
//     }}
//     horizontal
//     data={FakeBanner}
//     keyExtractor={(item, index) => item.id.toString()}
//     decelerationRate={0}
//     snapToInterval={fontScale(255)} //your element width
//     snapToAlignment={'center'}
//     renderItem={({ item }) => (
//       <TouchableOpacity key={item.id} disabled>
//         <Image
//           resizeMode={'contain'}
//           style={{
//             marginRight: scale(5),
//             marginLeft: scale(5),
//             height: fontScale(100),
//             width: fontScale(250),
//             borderRadius: scale(15),
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           source={item.image}
//         />
//       </TouchableOpacity>
//     )}
//   />
// );

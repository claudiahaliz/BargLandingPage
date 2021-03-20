import React from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';

import AmountInfo from './components/AmountInfo';
import MainMenu from './components/MainMenu';
import Mart from './components/Mart';
import ListHorizontal from './components/ListHorizontal';
import ListVertical from './components/ListVertical';
import CardDiscover from './components/CardDiscover';
import CardFood from './components/CardFood';
import SearchBox from './components/SearchBox';

import {
  foodData,
  discoversData,
  martData,
  everydayData,
  mainMenuData,
} from './data';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#96D059" />
      <FlatList
        data={[{key: 'a'}]}
        listKey={(item, index) => index}
        renderItem={_ => {
          return (
            <>
              <SearchBox />
              <AmountInfo />
              <MainMenu data={mainMenuData} />
              <ListHorizontal
                title="Popular items"
                data={foodData}
                content={({key, image, title, rating, isPromo}) => (
                  <CardFood
                    key={key}
                    image={image}
                    title={title}
                    rating={rating}
                    isPromo={isPromo}
                  />
                )}
              />
              <Mart sectionTitle="Order Here" data={martData} />
              <Mart sectionTitle="More for your everyday" data={everydayData} />
            </>
          );
        }}
        ListFooterComponent={
          <ListVertical
            sectionTitle="Keep discovering"
            data={discoversData}
            content={({item}) => {
              return (
                <CardDiscover
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                  descType={item.descType}
                />
              );
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

export default App;

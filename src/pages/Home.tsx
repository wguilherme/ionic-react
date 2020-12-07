import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonText, useIonViewDidEnter } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Simple from '../components/simple';
import api from '../services/api';
import './Home.css';

// simple array for loop
let simpleArray = ["item", 2, 3, "quatro", 5, 6, false]


interface Item {
name: string
}



const Home: React.FC = () => {




  let [items, setItems] = useState([])
  
  async function getItems() {
     const response = await api.get('pets')
     setItems(response.data);

  }  


  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired');
    getItems()
  });

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello World</IonTitle>
          </IonToolbar>
        </IonHeader>

  

            <IonList>
                {Array(...Array(10)).map((v, i) => <Simple  key={i} indice={i} simpleProps="Simple Props" />)}
            </IonList>


        <h2>Simple Loops</h2>
        {/* Simple array loop with map */}
        <IonList>
            {simpleArray.map((item, i) => <IonItem key={i} >{item}</IonItem>)}
        </IonList>

        <h2>Simple API data</h2>
        {/* Simple loop from service api data */}
        <IonList>
            {items.map((item: Item, i) => <IonItem key={i}>item: {item.name}</IonItem>)}
        </IonList>

        




      </IonContent>
    </IonPage>
  );
};

export default Home;

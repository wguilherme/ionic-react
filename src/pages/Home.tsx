import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonText } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Simple from '../components/simple';
import './Home.css';

// simple array for loop
let simpleArray = ["item", 2, 3, "quatro", 5, 6, false]

const Home: React.FC = () => {
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




      </IonContent>
    </IonPage>
  );
};

export default Home;

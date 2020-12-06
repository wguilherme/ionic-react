import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonText } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Repeat from '../components/Repeat';
import './Home.css';

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
              <IonItem>
                <IonText>Teste</IonText>
              </IonItem>
            </IonList>
        <ExploreContainer />
        <Repeat />
      </IonContent>
    </IonPage>
  );
};

export default Home;

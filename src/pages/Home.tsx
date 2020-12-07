import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonText } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Simple from '../components/simple';
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
                {Array(...Array(10)).map((v, i) => <Simple/>)}
                <IonText>Teste</IonText>
              </IonItem>
            </IonList>
        <ExploreContainer />



      </IonContent>
    </IonPage>
  );
};

export default Home;

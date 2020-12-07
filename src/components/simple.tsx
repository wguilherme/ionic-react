import { IonItem, IonText } from '@ionic/react';
import React from 'react';

interface SimpleProps {
   simpleProps: string, 
   indice: number
 }

const Simple: React.FC<SimpleProps> = (props) => {
  return (
   <IonItem>
   <IonText>Simple Component + {props.simpleProps} nº {props.indice}</IonText>
 </IonItem>
  );
};

export default Simple;

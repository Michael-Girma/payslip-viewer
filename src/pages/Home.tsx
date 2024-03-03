import { useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';

import './Home.css';
import PayslipListItem from '../components/PayslipListItem';
import { Payslip } from '../interfaces/payslip';
import { fetchAllPayslips } from '../services/payslipService';

const Home: React.FC = () => {
  const [payslips, setPayslips] = useState<Payslip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useIonViewWillEnter(() => {
    const init = async () => {
      const payslips = await fetchAllPayslips();
      setLoading(false);
      setPayslips(payslips);
    }
    init()
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Payslips
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {
            loading? 
              [0,1].map(m => <PayslipListItem key={m} payslip={null!} loading={true} />):
              payslips.map(m => <PayslipListItem key={m.id} payslip={m} loading={false} />)
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

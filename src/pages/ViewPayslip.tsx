import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonLoading,
  IonNote,
  IonPage,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { usePayslipDetail } from '../hooks/usePayslipDetail';
import './ViewPayslip.css';
import { PayslipDetailCard } from '../components/PayslipDetailCard';


function ViewPayslip() {
  const {payslip, loading, downloadPayslip} = usePayslipDetail();
  const [showToast, setShowToast] = useState<boolean>(false);

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Payslips" defaultHref="/list"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {
            loading?
                <IonLoading isOpen={true}/>:
                payslip ?
                    <PayslipDetailCard payslip={payslip} handleDownload={downloadPayslip}/> : 
                    <span>no payslip found</span>
        }
      </IonContent>
      <IonToast 
        isOpen={showToast} 
        onDidDismiss={() => setShowToast(false)}
        duration={5000}
        message="Payslip downloaded"
      ></IonToast>
    </IonPage>
  );
}


export default ViewPayslip;

import {
    IonItem,
    IonLabel,
    IonSkeletonText,
    IonText
    } from '@ionic/react';
  import './PayslipListItem.css';
import { Payslip } from '../interfaces/payslip';
import { ISOToDateString, calculateISODateDifference } from '../helpers/utils';

interface PayslipListItemProps {
    payslip: Payslip,
    loading: boolean
}

const PayslipListItem: React.FC<PayslipListItemProps> = ({ payslip, loading }) => {
    return (
        <IonItem routerLink={loading? undefined: `/payslip/${payslip.id}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        {
            loading? 
                <ListItemLoader /> :
                <IonLabel className="ion-text-wrap">
                    <h2>
                    {calculateISODateDifference(payslip.fromDate, payslip.toDate)} days of work
                    </h2>
                    <IonText color="muted">{ISOToDateString(payslip.fromDate)} - {ISOToDateString(payslip.toDate)}</IonText>
                </IonLabel>
        }
        </IonItem>
    );
};

const ListItemLoader: React.FC = () => {
    return (<>
        <IonLabel className="ion-text-wrap payslip-loader">
            <IonSkeletonText animated={true} style={{ width: '125px', outerHeight: '300px' }}></IonSkeletonText>
            <IonSkeletonText animated={true} style={{ width: '250px', outerHeight: '300px' }}></IonSkeletonText>
        </IonLabel>
    </>)
}

export default PayslipListItem;

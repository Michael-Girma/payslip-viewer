import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow, IonSpinner, IonText } from "@ionic/react";
import { Payslip } from "../interfaces/payslip";
import { ISOToDateString, calculateISODateDifference } from "../helpers/utils";
import { downloadOutline } from "ionicons/icons";
import { useState } from "react";

export interface PayslipDetailCardProps {
    payslip: Payslip,
    handleDownload: () => Promise<void>,
}

export const PayslipDetailCard: React.FC<PayslipDetailCardProps> = ({payslip, handleDownload}) => {
    const [downloading, setDownloading] = useState<boolean>(false)
    
    const initiateDownload = async() => {
        setDownloading(s => true);
        await handleDownload();
        setDownloading(s => false);
    }

    return (
        <>
            <IonCard className="payslip-detail">
            <IonCardHeader>
                <IonCardTitle>Payslip Details</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <div className="mb-2">
                    <IonText color="muted">Payslip ID: </IonText>
                    <IonText><strong>{payslip.id}</strong></IonText>
                </div>
                <div className="mb-2">
                    <IonText color="muted">From Date: </IonText>
                    <IonText><strong>{ISOToDateString(payslip.fromDate)}</strong></IonText>
                </div>
                <div className="mb-2">
                    <IonText color="muted">To Date: </IonText>
                    <IonText><strong>{ISOToDateString(payslip.toDate)}</strong></IonText>
                </div>
                <div className="mb-2">
                    <IonText color="muted">Payslip Period: </IonText>
                    <IonText><strong>{calculateISODateDifference(payslip.fromDate, payslip.toDate)} days</strong></IonText>
                </div>
            </IonCardContent>
            <IonButton onClick={initiateDownload} disabled={downloading} fill="clear" className="ion-margin-bottom">
                <span>Download Payslip</span>
                {
                    downloading?
                        <IonSpinner className="pl-1" name="crescent"></IonSpinner>:
                        <IonIcon icon={downloadOutline} className="pl-1"></IonIcon>
                }
            </IonButton>
            </IonCard>
        </>
    )
}
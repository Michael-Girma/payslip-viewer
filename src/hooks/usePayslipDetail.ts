import { useEffect, useState } from "react";
import { Payslip } from "../interfaces/payslip";
import { useParams } from "react-router-dom";
import { fetchPayslipById } from "../services/payslipService";
import { Filesystem, Directory } from "@capacitor/filesystem"
import { isPlatform } from "@ionic/react";
import { Capacitor } from "@capacitor/core";
import { FileOpener} from "@capacitor-community/file-opener"
import { Toast } from '@capacitor/toast';

// This hook is for fetching a payslip and given the component the
// ability to download that specific payslip if need arises
export function usePayslipDetail() {
    const [loading, setLoading] = useState<boolean>(true);
    const [payslip, setPayslip] = useState<Payslip>();

    const { id } = useParams<{id: string}>();

    const downloadPayslip = async () => {
        try {
            if(payslip) {
                const filename = `Payslip-${payslip.id}.pdf`;
                const downloadResult = await Filesystem.downloadFile({
                  url: payslip.downloadURL,
                  path: filename,
                  directory: Directory.Documents
                })
                
                if (Capacitor.isNativePlatform()) {
                    await FileOpener.open({filePath: downloadResult.path!})
                } else {
                    const aElement = document.createElement('a');
                    aElement.setAttribute('download', filename);
                    const href = URL.createObjectURL(downloadResult.blob!);
                    aElement.href = href;
                    aElement.setAttribute('target', '_blank');
                    aElement.click();
                    URL.revokeObjectURL(href);
                }
            }
            Toast.show({
                text: 'Payslip downloaded successfully!',
            });
        } catch (error) {
            Toast.show({
                text: 'Error encountered when downloading payslip!',
            });
        }
    };

    useEffect(() => {
        const loadPayslip = async() => {
            const payslip = await fetchPayslipById(id);
            setPayslip(s => payslip);
            setLoading(s => false);
        }
        loadPayslip();
    }, [])

    return {
        loading,
        payslip,
        downloadPayslip,
    }
}
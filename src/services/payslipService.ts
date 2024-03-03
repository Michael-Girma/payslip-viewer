import { mockPayslips } from "../data/payslip";
import { Payslip } from "../interfaces/payslip";

// Fetches all payslips from server
export function fetchAllPayslips(): Promise<Payslip[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockPayslips);
      }, 3000); 
    });
}

// Fetches a single payslips details from server using its ID
export function fetchPayslipById(id: string): Promise<Payslip> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const payslip = mockPayslips.find(e => e.id === id);
      if(payslip) {
        resolve(payslip);
      } else {
        reject("Payslip doesn't exist")
      }
    }, 3000); 
  });
}
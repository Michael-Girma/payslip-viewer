import { Payslip } from "../interfaces/payslip"

const mockPayslipURL = "https://toolsfortransformation.net/wp-content/uploads/2020/06/Annex-E-Sample-Payslip.pdf"

export const mockPayslips: Payslip[] = [
    {
        id: "PS-12D3-DSFD-VDDS",
        fromDate: "2024-11-01T00:00:00.000Z",
        toDate: "2024-12-01T00:00:00.000Z",
        downloadURL: mockPayslipURL
    },
    {
        id: "PS-12D3-DA3E-567B",
        fromDate: "2024-09-10T00:00:00.000Z",
        toDate: "2024-11-01T00:00:00.000Z",
        downloadURL: mockPayslipURL
    },
    {
        id: "PS-12D3-DA3E-765B",
        fromDate: "2024-08-01T00:00:00.000Z",
        toDate: "2024-09-01T00:00:00.000Z",
        downloadURL: mockPayslipURL
    }
]
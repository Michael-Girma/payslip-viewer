// Calculates the difference in days between two given dates
export function calculateDateDifference(startDate: Date, endDate: Date): number {
    // Convert both dates to milliseconds
    const startMilliseconds = startDate.getTime();
    const endMilliseconds = endDate.getTime();
  
    // Calculate the difference in milliseconds
    const differenceMilliseconds = Math.abs(endMilliseconds - startMilliseconds);
  
    // Convert milliseconds to days
    const differenceInDays = differenceMilliseconds / (1000 * 60 * 60 * 24);
  
    return differenceInDays;
}

// Parses and calculates difference in days between two given ISO dates
export function calculateISODateDifference(startDate: string, endDate: string): number {
    const fromDate = new Date(startDate);
    const toDate = new Date(endDate);
    return calculateDateDifference(fromDate, toDate);
}

// Fetches the date string for an ISO date string
export function ISOToDateString(date: string) {
    const dateObj = new Date(date);
    return dateObj.toDateString();
}
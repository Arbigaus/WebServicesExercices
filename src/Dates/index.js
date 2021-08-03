import { differenceInDays, differenceInMonths, differenceInWeeks } from "date-fns";

export const calcDates = (startDate, endDate) => {
    let start = new Date(startDate)
    let end = new Date(endDate)
    let days = differenceInDays(end, start)
    let weeks = differenceInWeeks(end, start)
    let months = differenceInMonths(end, start)

    return {
        days,
        weeks,
        months
    }
}
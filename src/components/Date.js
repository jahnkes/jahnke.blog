import { format, parseISO } from "date-fns"

const Date = ({ date }) => format(parseISO(date), "MMM d, yyyy")

export default Date

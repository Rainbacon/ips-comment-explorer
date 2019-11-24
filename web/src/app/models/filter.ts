export interface FilterState {
    startDate: Date,
    endDate: Date
}

export const initialFilter = {
    startDate: new Date(),
    endDate: new Date()
}
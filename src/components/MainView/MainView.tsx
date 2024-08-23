import React, { useState } from 'react';
import TimeTrackerTable from './components/TimeTrackerTable.tsx'
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

const MainView = () => {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <main className='flex flex-row justify-center items-start text-center p-[0.5rem] border-2 border-solid border-gray-100'>
            <Calendar placeholder='Select Date' value={date} onChange={(e) => setDate(e.value)}/>
            <TimeTrackerTable />
        </main>
    )
}

export default MainView
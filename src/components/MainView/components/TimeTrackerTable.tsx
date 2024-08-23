import React, { useState } from 'react'
import { DataTable, DataTableValueArray } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Nullable } from 'primereact/ts-helpers';

const TimeTrackerTable = () => {

    const [punchTimes, setPunchTimes] = useState<PunchTime[]>([]);

    return(
        <DataTable value={punchTimes} showGridlines tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    )
}

export default TimeTrackerTable;
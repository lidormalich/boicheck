import { FunctionComponent, useEffect, useState } from 'react';
import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

interface AccDBProps {

}

const AccDB: FunctionComponent<AccDBProps> = () => {
    // const buffer = readFileSync("R:\\אגרון\\אגרון 2006\\אקסס\\Data2006.accdb");
    // const reader = new MDBReader(buffer);


    // const table = reader.getTable("");
    // table.getColumnNames(); // ['id', 'name', 'color']
    // table.getData(); // [{id: 5, name: 'Ashley', color: 'black'}, ...]
    // console.log(table);

    return (<>
    </>);
}

export default AccDB;
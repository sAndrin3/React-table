import React from 'react';
import {BasicTable} from "./components/BasicTable.jsx";
import {SortingTable} from "./components/SortingTable.jsx";
import {FilteringTable} from "./components/FilteringTable.jsx";
import {PaginationTable} from "./components/PaginationTable.jsx";
import {RowSelection} from "./components/RowSelection.jsx";
import {ColumnOrder} from "./components/ColumnOrder.jsx";
import {ColumnHiding} from "./components/ColumnHiding.jsx";
import {StickyTable} from "./components/StickyTable.jsx";

const App = () => {
    return (
        <div><StickyTable/></div>
    )
}

export default App;
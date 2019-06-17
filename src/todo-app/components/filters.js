import React from 'react';

const Filters = ({ activeTodosCount, activeFilter }) => {
    return <div>
        <p>{activeTodosCount}</p>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Complete</button>
        </div>
    </div>
}

export default Filters;
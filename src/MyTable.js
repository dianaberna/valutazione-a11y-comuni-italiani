import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => <pre>{data.details}</pre>;

const columns = [
    {
        name: 'Punteggio',
        selector: row => row.score,
        sortable: true,
    },
    {
        name: 'Comune',
        selector: row => row.comune,
        sortable: true,
    },
    {
        name: 'Provincia',
        selector: row => row.provincia,
        sortable: true,
    },
    {
        name: 'Regione',
        selector: row => row.regione,
        sortable: true,
    },
    {
        name: 'Zona',
        selector: row => row.zona,
        sortable: true,
    },
    {
        name: 'Tastiera',
        selector: row => row.regole.tastiera,
        sortable: true,
        conditionalCellStyles : [
            {
                when: row => row.regole.tastiera === 1,
                style: {
                    backgroundColor: 'rgba(63, 195, 128, 0.5)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    }
                }
                
            }, 
            {
                when: row => row.regole.tastiera === 0,
                style: {
                    backgroundColor: 'rgba(220, 20, 60, 0.5)',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                }
            }
        ]
    },
    {
        name: 'Alt',
        selector: row => row.regole.alt,
        sortable: true,
    },
];


const MyTable = ({blogs}) => {
    return (
        <DataTable
            columns={columns}
            data={blogs}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            defaultSortFieldId={1}
            pagination
            defaultSortAsc={false}
            fixedHeader
            
        />    
    );
};

export default MyTable;
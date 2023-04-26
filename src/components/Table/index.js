import GridTable from '@nadavshaar/react-grid-table';
import { Skeleton } from '@mui/material';
import './styles.css';

const props = {
    search: 'Buscar:',
    totalRows: 'Total de linhas:',
    rows: 'Linhas:',
    selected: 'Selecionados',
    rowsPerPage: 'Linhas por página:',
    page: 'Página:',
    of: 'de',
    prev: 'Anterior',
    next: 'Próxima',
    columnVisibility: 'Visibilidade da coluna'
}

export const DefaultTable = ({ data }) => {
    const getColumns = (data) => (
        Object.keys(data[0])
        .map((labelColumn, id) => ({
            id,
            field: labelColumn,
            label: labelColumn,
            width: '190px'
        }))
    )

    return <div className='table__container'>
        {
            (data && data.length) ?  (
                <GridTable
                    texts={props}
                    columns={data.length ? getColumns(data) : []}
                    rows={data}
                />
            ) : <Skeleton variant="rectangular" width='100%' height='70%'/> 
        }
    </div>
}
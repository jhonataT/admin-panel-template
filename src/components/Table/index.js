import GridTable from '@nadavshaar/react-grid-table';
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
        <GridTable
            texts={props}
            columns={getColumns(data)}
            rows={data}
        />
    </div>
}
import GridTable from '@nadavshaar/react-grid-table';
import './styles.css';

export const DefaultTable = ({ data }) => {
    const getColumns = (data) => (
        Object.keys(data[0])
        .map((labelColumn, id) => ({
            id,
            field: labelColumn,
            label: labelColumn,
        }))
    )

    return <div className='table__container'>
        <GridTable
            columns={getColumns(data)}
            rows={data}
        />
    </div>
}
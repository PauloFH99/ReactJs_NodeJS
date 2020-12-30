import React from 'react';
import '../styles/components/footer.css';

export interface Data {
    map: any;
    id: number;
    name: string;
    last: string;
  }
interface data {
    data:Data
  }

const Head = (( keys: any ) => {
    return (
        <thead>
            <tr>
                {
                    keys.map((key: string | number | null | undefined) => <th key={key}>{key}</th>)
                }

            </tr>
        </thead>
    )
}
const Row = ((record: any ) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id}>
            {
                keys.map(key => <td key={key}> {record[key]}</td>)
            }

        </tr>
    )
}

const Table : React.FC<data> = ({data})  => {
    const keys = Object.keys(data)
    return (
        <table>
            <Head keys={keys} />
            <tbody>
                {data.map((record: any) => {
                    <Row record={record} />
                })}


            </tbody>
        </table>
    );
}

export default Table
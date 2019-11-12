import React from 'react';
import componentMapper from './ColCmp'
interface Header {
    value: string;
}

interface Data {
    name?: string,
    age?: string,
    country?: string,
    mobile?: number,
    phone?: number,
    address?: {
        street?: string,
        no?: number
    }
}
const headers: Array<Header> = [{
    value: "Name"
}, {
    value: "Age"
}, {
    value: "Country"
}, {
    value: "Contact"
}, {
    value: "Address"
}, {
    value: "Occupation"
}];


const data: Array<Data> = [{
    name: "Karthik",
    age: "33",
    country: "India",
    mobile: 90293819738,
    phone: 1231253623
}, {
    name: "Test123",
    //age: "15",
    country: "Cannada",
    mobile: 87983,
    phone: 8732113,
    address: {
        street: "Wallstreet",
        no: 100
    }
}];
const Head: React.FC = () => {
    return (
        <thead>
            <tr>
                {headers.map((header: Header, key: number) => {
                    return <th key={key}>{header.value}</th>
                })}
            </tr>
        </thead>
    )
}
const RowCmp: React.FC = () => {
    return (
        <>
            {data.map((dt: Data, key: number) => {
                return (
                    <tr key={key}>
                        {headers.map((header: Header, key: number) => {
                            if (componentMapper[header.value]) {
                                let { Cmp, col } = componentMapper[header.value];
                                return <Cmp {...dt} {...col} key={key} />
                            } else{
                                let { Cmp, col } = componentMapper['Default'];
                                return <Cmp {...dt} {...col} key={key} />
                            }

                        })}

                    </tr>
                )

            })

            }

        </>
    )
}

const TableCmp: React.FC = () => {
    return (
        <table>
            <Head />
            <tbody>
                <RowCmp />
            </tbody>
        </table>
    )
}

export default TableCmp;
import React from 'react';
import componentList from './ColCmp';

interface Tdata {
    [key: string]: string | number | undefined | object;
    name: string;
    age?: number;
    country: string;
    mobile: number;
    phone: number;
    address: {
        street: string;
        no: number;
    }
}
const tData: Array<Tdata> = [
    {
        name: "Karthik",
        age: 33,
        country: "India",
        mobile: 908123123123,
        phone: 123325467234,
        address: {
            street: 'New Street',
            no: 123,
        }


    },
    {
        name: "Test123",
        
        country: "Cannada",
        mobile: 908123123123,
        phone: 123325467234,
        address: {
            street: 'New Street',
            no: 123
        }
    }

];
const colList: Array<{ value: string }> = [{

    value: 'Name'
}, {

    value: 'Country'
}, {

    value: "Age"
}, {

    value: "ContactNo"
}, {

    value: "Address"
}];
const Head: React.FC = () => {
    return (
        <thead>
            <tr>
                {colList.map((list: { value: string }, key: number) => {
                    return <th key={key}>{list.value}</th>
                })}

            </tr>
        </thead>
    )
}

const Body: React.FC = () => {
    return (
        <tbody>

            {tData.map((dt: Tdata, key: number) => {
                return (
                    <tr key={key}>
                        {colList.map(
                            (
                                list: { value: string },
                                key: number
                            ) => {
                                //return <td key={key}>{dt[list.name]}</td>   
                                //return <Col1Cmp name = {dt[list.name].toString()} age={key} key = {key} />

                                console.log('123123' + list.value)
                                let { Cmp, col } = componentList[list.value];
                                console.log(Cmp)
                                return <Cmp data={dt} key={key} {...col} />



                            })
                        }

                    </tr>
                )
            })}


        </tbody>
    )
}

const TableCmpa: React.FC = () => {
    return (
        <table>

            <Head />
            <Body />

        </table>
    )
}

export default TableCmpa
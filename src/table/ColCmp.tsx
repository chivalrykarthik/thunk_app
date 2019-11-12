import React from 'react';


interface Data {
    [key: string]: string | number | object | undefined;
    name: string,
    age: string,
    country: string,
    mobile: number,
    phone: number,
    address: {
        street: string,
        no: number
    },
    field1: string;

}

interface Data1 extends Data {
    field2: string
}

const Col1Cmp: React.FC<Data> = (props) => {
    let field1 = props[props.field1];
    return <td>{field1}</td>
}


const Col2Cmp: React.FC<Data1> = (props) => {
    let field1 = props[props.field1];
    let field2 = props[props.field2];

    return (
        <td>
            
                <div style={{ "width": "45%", float: "left" }}>
                    <span className="heading">Heading1</span>
                    <div className = "content">{field1}</div>
                </div>
                <div style={{ "width": "45%", float: "right" }}>
                    <span className="heading">Heading2</span>
                    <div className = "content">{field2}</div>
                </div>
            
        </td>
    )
}

const Col3Cmp: React.FC<Data> = (props) => {
    let field1 = props.address && props.address.street;
    let field2 = props.address && props.address.no;


    return (
        <td>
            <div>{field1}</div>
            <div>{field2}</div>
        </td>
    )
}

interface Mapper {
    [key: string]: any
}
const componentMapper: Mapper = {
    Name: { Cmp: Col1Cmp, col: { field1: 'name' } },
    Age: { Cmp: Col1Cmp, col: { field1: 'age' } },
    Country: { Cmp: Col1Cmp, col: { field1: 'country' } },
    Contact: { Cmp: Col2Cmp, col: { field1: 'mobile', field2: 'phone' } },
    Address: { Cmp: Col3Cmp, col: { field1: 'address' } },
    Default: { Cmp: Col1Cmp, col: { field1: 'age' } }
};

export default componentMapper;
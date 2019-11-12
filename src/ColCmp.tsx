import React, { Component } from 'react';


interface Col1 {    
    data:{
        [key:string]:string | number | undefined | object;
        name?:string;
        age:number;
        country?:string;
        mobile?:number;
        phone?:number;
        address:{
            street:string;
            no:number;
        }
    }
    field1?:any,
    field2?:any    
}
interface ComponentList{
    [key:string]:any
}

const Col1Cmp: React.FC<Col1> = (props) => {
    let field1 = props.data[props.field1];
    let field2 = props.data[props.field2];
    if(props.field1 === 'address'){
        field1 = props.data.address.street;
        field2 = props.data.address.street
    } else{
        field1 = props.data[props.field1];
        field2 = props.data[props.field2];
    }
    
    return (
        <td>
            <div>{field1}</div>
            <div>={field2}</div>
        </td>
    )
}

const Col2Cmp: React.FC<Col1> = (props) => {
    let field1 = props.data[props.field1];
    return (
        <td>
            <div>{field1}</div>
        </td>
    )
}

const componentList:ComponentList ={
    Name:{Cmp:Col2Cmp,col:{field1:'name'}},
    Country:{Cmp:Col2Cmp,col:{field1:'country'}},
    Age:{Cmp:Col2Cmp,col:{field1:'age'}},    
    ContactNo:{Cmp:Col1Cmp,col:{field1:'mobile',field2:'phone'}},
    Address:{Cmp:Col1Cmp,col:{field1:'address'}},
    Default:{Cmp:Col2Cmp,col:{field1:'name'}}
};

export default componentList;
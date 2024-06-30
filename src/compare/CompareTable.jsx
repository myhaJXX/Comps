import React, { useEffect, useState } from 'react'

function CompareTable({items}) {
    let [params, setParams] = useState([])
    useEffect(()=>{
        let arr = []
        for(let key in items[0].params){
            arr = [...arr, key]
        }
        for(let i = 0;i<10;i++){
            arr = [...arr, 'Lorem']
        }
        // lorem ipsum
        setParams(arr)
    }, [items])

  return (
    <table>
        <tbody>
            {params.map((el,i)=>{
                return <tr key={i}>
                    <th>{el}</th>
                    {items.map((e,i)=>{
                        if(el!='Lorem') return <td key={i}>{e.params[`${el}`]}</td>
                        return <td key={i}>Lorem Ipsum</td>
                    })}
                </tr>
            })}
        </tbody>
    </table>
  )
}

export default CompareTable
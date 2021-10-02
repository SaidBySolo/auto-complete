import React, { useEffect } from "react"

import { Input, Text } from "@chakra-ui/react"

function ClientSearch() {
    const [value, setValue] = React.useState([""])
    const [data, setData] = React.useState([""])

    // 여기서 수정사항 발생시 검색 결과 처리
    const handleChange = async (event: { target: { value: React.SetStateAction<string> } }) => {
        let t = new Date().getTime()
        const result: string[] = []
        
        data.forEach(key => {
            if (key.includes(`${event.target.value}`)) {
                result.push(key)
            }
        })
        setValue(result.slice(0, 5))

        console.log(`${(new Date().getTime() - t)}ms`)
    }

    // 최초 한번만 실행
    const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/data`);
    
        const data = await response.json();
    
        setData(data.result);
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
            
            <Input
            onChange={handleChange}
            placeholder="Here is a sample placeholder"
            size="sm"
            />
            {
                value.map(v => <Text>{v}</Text>)
            }
        </>
    )
}

export default ClientSearch
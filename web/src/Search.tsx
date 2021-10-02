import React from "react"

import { Input, Text } from "@chakra-ui/react"

function Search() {
    const [value, setValue] = React.useState([])

    // 수정사항 발생시마다 요청해서 가져옴.
    const handleChange = async (event: { target: { value: React.SetStateAction<string> } }) => {
        const response = await fetch(`http://localhost:8000/search?q=${event.target.value}`)
        const data = await response.json()
        setValue(data.result)
    }

    return (
        <>
            
            <Input
            onChange={handleChange}
            placeholder="Here is a sample placeholder"
            size="sm"
            />
            {console.log(value)}
            {
                0 < value?.length ? value.map(v => <Text>{v}</Text>) : <Text>검색 결과가 없습니다.</Text>
            }
        </>
    )
}

export default Search
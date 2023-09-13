import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


interface Props{
  onSelectSortOrder:(selectOrder:string)=> void
  selectedSortOrder: string
}

const SortSelector = ({onSelectSortOrder,selectedSortOrder}:Props) => {
  const sortOrder=[
    {value:"", lable:"Relevance"},
    {value:"-added", lable:"Date added"},
    {value:"name", lable:"Name"},
    {value:"-released", lable:"Realease date"},
    {value:"-metacritic", lable:"Popularity"},
    {value:"-rating", lable:"Avarage rating"}
  ]

  const currentSortOrder= sortOrder.find(order=> order.value===selectedSortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order by: { currentSortOrder?.lable||"Relevance"}
      </MenuButton>
      <MenuList>
          {sortOrder.map(order=>(<MenuItem  onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.lable}</MenuItem>))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
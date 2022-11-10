import React from 'react'

const ItemsListComponent = ({ items }: any): JSX.Element => {
  if (!items?.length) {
    return <div>loading...</div>
  }
  
  return (
    <div>
      <div>
        {items?.map((i: any) => (
          <p key={i.id}>{i.name}</p>
        ))}
      </div>
    </div>
  )
}

const ItemsList = React.memo(ItemsListComponent)

export { ItemsList }

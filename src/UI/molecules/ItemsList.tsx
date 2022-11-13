import React from 'react'
import { AnyBusinessEntity } from '../../common/models/entities'

type ItemsListProps = {
  items: AnyBusinessEntity[]
}

const ItemsListComponent = ({ items }: ItemsListProps): JSX.Element => {
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

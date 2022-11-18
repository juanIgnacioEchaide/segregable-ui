import React from 'react'
import { AnyBusinessEntity } from '../../common/models/entities'
import { setKeyByType } from '../../common/utils/helpers'
import { BaseBox } from '../atoms/Box'

type ItemsListProps = {
  items: AnyBusinessEntity[]
}

const ItemsListComponent = ({ items }: ItemsListProps): JSX.Element => {
  if (!items?.length) {
    return <div>loading...</div>
  }

  return (
    <BaseBox h={85} scrollY>
      {items?.map((i: any) => (
        <p key={setKeyByType(i)}>{i.name}</p>
      ))}
    </BaseBox>
  )
}

const ItemsList = React.memo(ItemsListComponent)

export { ItemsList }

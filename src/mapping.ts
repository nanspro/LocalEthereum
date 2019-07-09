import {
  Created as CreatedEvent,
  SellerCancelDisabled as SellerCancelDisabledEvent,
  SellerRequestedCancel as SellerRequestedCancelEvent,
  CancelledBySeller as CancelledBySellerEvent,
  CancelledByBuyer as CancelledByBuyerEvent,
  Released as ReleasedEvent,
  DisputeResolved as DisputeResolvedEvent
} from "../generated/Contract/Contract"
import {
  Created,
  SellerCancelDisabled,
  SellerRequestedCancel,
  CancelledBySeller,
  CancelledByBuyer,
  Released,
  DisputeResolved
} from "../generated/schema"

export function handleCreated(event: CreatedEvent): void {
  let entity = new Created(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tradeHash = event.params._tradeHash
  entity.save()
}

export function handleSellerCancelDisabled(
  event: SellerCancelDisabledEvent
): void {
  let entity = new SellerCancelDisabled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tradeHash = event.params._tradeHash
  entity.save()
}

export function handleSellerRequestedCancel(
  event: SellerRequestedCancelEvent
): void {
  let entity = new SellerRequestedCancel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tradeHash = event.params._tradeHash
  entity.save()
}

export function handleCancelledBySeller(event: CancelledBySellerEvent): void {
  let entity = new CancelledBySeller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tradeHash = event.params._tradeHash
  entity.save()
}

export function handleCancelledByBuyer(event: CancelledByBuyerEvent): void {
  let entity = new CancelledByBuyer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tradeHash = event.params._tradeHash
  entity.save()
}

export function handleReleased(event: ReleasedEvent): void {
  let entity = new Released(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tradeHash = event.params._tradeHash
  entity.save()
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let entity = new DisputeResolved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._tradeHash = event.params._tradeHash
  entity.save()
}

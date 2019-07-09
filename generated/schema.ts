// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Created extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Created entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Created entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Created", id.toString(), this);
  }

  static load(id: string): Created | null {
    return store.get("Created", id) as Created | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _tradeHash(): Bytes {
    let value = this.get("_tradeHash");
    return value.toBytes();
  }

  set _tradeHash(value: Bytes) {
    this.set("_tradeHash", Value.fromBytes(value));
  }
}

export class SellerCancelDisabled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save SellerCancelDisabled entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SellerCancelDisabled entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SellerCancelDisabled", id.toString(), this);
  }

  static load(id: string): SellerCancelDisabled | null {
    return store.get("SellerCancelDisabled", id) as SellerCancelDisabled | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _tradeHash(): Bytes {
    let value = this.get("_tradeHash");
    return value.toBytes();
  }

  set _tradeHash(value: Bytes) {
    this.set("_tradeHash", Value.fromBytes(value));
  }
}

export class SellerRequestedCancel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save SellerRequestedCancel entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SellerRequestedCancel entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SellerRequestedCancel", id.toString(), this);
  }

  static load(id: string): SellerRequestedCancel | null {
    return store.get(
      "SellerRequestedCancel",
      id
    ) as SellerRequestedCancel | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _tradeHash(): Bytes {
    let value = this.get("_tradeHash");
    return value.toBytes();
  }

  set _tradeHash(value: Bytes) {
    this.set("_tradeHash", Value.fromBytes(value));
  }
}

export class CancelledBySeller extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CancelledBySeller entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CancelledBySeller entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CancelledBySeller", id.toString(), this);
  }

  static load(id: string): CancelledBySeller | null {
    return store.get("CancelledBySeller", id) as CancelledBySeller | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _tradeHash(): Bytes {
    let value = this.get("_tradeHash");
    return value.toBytes();
  }

  set _tradeHash(value: Bytes) {
    this.set("_tradeHash", Value.fromBytes(value));
  }
}

export class CancelledByBuyer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CancelledByBuyer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CancelledByBuyer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CancelledByBuyer", id.toString(), this);
  }

  static load(id: string): CancelledByBuyer | null {
    return store.get("CancelledByBuyer", id) as CancelledByBuyer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _tradeHash(): Bytes {
    let value = this.get("_tradeHash");
    return value.toBytes();
  }

  set _tradeHash(value: Bytes) {
    this.set("_tradeHash", Value.fromBytes(value));
  }
}

export class Released extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Released entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Released entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Released", id.toString(), this);
  }

  static load(id: string): Released | null {
    return store.get("Released", id) as Released | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _tradeHash(): Bytes {
    let value = this.get("_tradeHash");
    return value.toBytes();
  }

  set _tradeHash(value: Bytes) {
    this.set("_tradeHash", Value.fromBytes(value));
  }
}

export class DisputeResolved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DisputeResolved entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DisputeResolved entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DisputeResolved", id.toString(), this);
  }

  static load(id: string): DisputeResolved | null {
    return store.get("DisputeResolved", id) as DisputeResolved | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _tradeHash(): Bytes {
    let value = this.get("_tradeHash");
    return value.toBytes();
  }

  set _tradeHash(value: Bytes) {
    this.set("_tradeHash", Value.fromBytes(value));
  }
}

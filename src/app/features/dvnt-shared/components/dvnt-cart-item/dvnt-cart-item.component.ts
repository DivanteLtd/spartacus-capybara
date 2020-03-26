import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-cart-item',
  templateUrl: './dvnt-cart-item.component.html',
  styleUrls: ['./dvnt-cart-item.component.scss'],
})
export class DvntCartItemComponent implements OnInit {
  @Input() set item(value: OrderEntry) {
    this._item = value;
    this.updateFormControl();
  }

  public quantity = new FormControl(null, [
    Validators.min(1),
    Validators.required,
  ]);

  @Output() public remove = new EventEmitter<any>();
  @Output() public update = new EventEmitter<any>();
  @Output() public view = new EventEmitter<any>();

  private _item: OrderEntry = null;
  private subscriptions: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.quantity.valueChanges
        .pipe(
          debounceTime(300),
          filter((value: number) => value > 0),
          distinctUntilChanged()
        )
        .subscribe((value: number) => this.updateItem(value))
    );
  }

  get item(): OrderEntry {
    return this._item;
  }

  public viewItem() {
    this.view.emit(this.item);
  }

  public removeItem() {
    this.remove.emit(this.item);
  }

  private updateItem(updatedQuantity: number) {
    this.update.emit({ item: this.item, updatedQuantity });
  }

  private updateFormControl(): void {
    this.quantity.setValue(this.item.quantity, { emitEvent: false });
    this.quantity.setValidators(
      Validators.max(this.item.product.stock.stockLevel)
    );
  }
}

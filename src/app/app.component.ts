import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div *ngFor="let row of rows" class="keyboard-row">
      <button
        *ngFor="let key of row"
        (mousedown)="onMouseDown(key)"
        (mouseup)="onMouseUp()"
        (mouseleave)="onMouseLeave()"
        class="keyboard-key"
        [ngClass]="{
          'spaceKey': key === 'Space',
          'shiftkey': key === '⇧',
          'capsLockKey': key === '⇪',
          'enterKey': key === '↵',
          'backspaceKey': key === '⌫'
        }"
      >
        {{ key }}
      </button>
    </div>
  `,
  styles: [
    `
      .keyboard-row {
        display: flex;
        justify-content: space-around;
        margin: 2px 0;
        gap: 2px;
      }
      .keyboard-key {
        border-radius: 5px;
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        background-color: #f9f9f9;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s, transform 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        background: transparent;
        flex-grow: 1;
        position: relative;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      }
      .keyboard-key:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        direction: rtl;
        z-index: -1;
        box-shadow: -7px -7px 20px 0px #fff9,
          -4px -4px 5px 0px #fff9,
          7px 7px 20px 0px #0002,
          4px 4px 5px 0px #0001;
        transition: all 0.3s ease;
      }
      .keyboard-key:hover:after {
        left: auto;
        right: 0;
        width: 100%;
      }
      .keyboard-key:active {
        transform: scale(0.8);
      }
      .spaceKey {
        background-color: #50af47;
        box-shadow: inset 0px 0px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      }
      .shiftkey {
        background-color: #00b1eb;
        width:50px;
        box-shadow: inset 0px 0px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      }
      .capsLockKey {
        background-color: #afca0b;
        width:45px;
        box-shadow: inset 0px 0px 0px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      }
      .enterKey {
        background-color: #ef7d00;
        width:65px;
        box-shadow: inset 0px 0px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      }
      .backspaceKey {
        background-color: #e72582;
        width:50px;
        box-shadow: inset 0px 0px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      }
      }
    `,
  ],
})
export class AppComponent {
  public value: string = '';
  private isShiftPressed: boolean = false;
  private isCapsLockPressed: boolean = false;

  rows: string[][] = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '⌫'],
    ['↹', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'],
    ['⇪', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '↵'],
    ['⇧', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/', '⇧'],
    ['Space'],
  ];

  rowsLower: string[][] = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '⌫'],
    ['↹', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'],
    ['⇪', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '↵'],
    ['⇧', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '⇧'],
    ['Space'],
  ];

  rowsUpper: string[][] = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '⌫'],
    ['↹', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '↵'],
    ['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '⇧'],
    ['Space'],
  ];

  onKeyClick(key: string): void {
    if (
      key === '⇧' ||
      key === '⇪' ||
      key === '⌫' ||
      key === '↹' ||
      key === '↵' ||
      key === 'Space'
    ) {
      switch (key) {
        case '⇧':
          this.onShiftClick();
          break;
        case '⇪':
          this.onCapsLockClick();
          break;
        case '⌫':
          this.value = this.value.slice(0, -1);
          break;
        case '⌫':
          this.value += '\n';
          break;
        case '↹':
          this.value += '\t';
          break;
        case 'Space':
          this.value += ' ';
          break;
        default:
          break;
      }
    } else {
      if (this.value === '') {
        this.value = key;
        if (this.isShiftPressed === true) {
          this.onShiftClick();
        }
      } else {
        this.value += key;
        if (this.isShiftPressed === true) {
          this.onShiftClick();
        }
      }
    }
  }

  onShiftClick() {
    debugger;
    if (this.isCapsLockPressed === true) {
      this.rows = this.rowsLower;
      this.isCapsLockPressed = false;
    } else {
      this.isShiftPressed = !this.isShiftPressed;
      if (this.isShiftPressed === true) {
        this.rows = this.rowsUpper;
      } else {
        this.rows = this.rowsLower;
      }
    }
  }

  onCapsLockClick() {
    debugger;
    if (this.isShiftPressed === true) {
      this.rows = this.rowsLower;
      this.isShiftPressed = false;
    } else {
      this.isCapsLockPressed = !this.isCapsLockPressed;
      if (this.isCapsLockPressed === true) {
        this.rows = this.rowsUpper;
      } else {
        this.rows = this.rowsLower;
      }
    }
  }

  private backspacePressTimer: any;

  onMouseDown(key: string): void {
    if (key === '⌫') {
      this.backspacePressTimer = setInterval(() => {
        this.onKeyClick(key);
      }, 150);
    } else {
      this.onKeyClick(key);
    }
  }

  onMouseUp(): void {
    this.clearBackspacePressTimer();
  }

  onMouseLeave(): void {
    this.clearBackspacePressTimer();
  }

  clearBackspacePressTimer(): void {
    clearInterval(this.backspacePressTimer);
  }
}

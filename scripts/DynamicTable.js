class DynamicTable {
  constructor(rowNum, colNum, tableClasses) {
    this.rowNum = rowNum;
    this.colNum = colNum;
    this.tableClasses = tableClasses;
    this.tableEl = undefined;

    this._generate();
  }

  _createRow() {
    let newRow = document.createElement('tr');
    newRow.className = this.tableClasses.rowStyle;
    return newRow;
  }

  _createColumn() {
    let newCol = document.createElement('td');
    newCol.className = this.tableClasses.colStyle;
    return newCol;
  }

  _generate() {
    this.tableEl = document.createElement('table');
    this.tableEl.className = this.tableClasses.tableStyle;
    for (let i = 0; i < this.rowNum; ++i) {
      let row = this._createRow();
      for (let j = 0; j < this.colNum; ++j) {
        let col = this._createColumn();
        row.appendChild(col);
      }
      this.tableEl.appendChild(row);
    }
  }
}

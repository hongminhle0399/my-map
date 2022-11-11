let table = new DynamicTable(6, 7, {
  tableStyle: 'table',
  rowStyle: 'row',
  colStyle: 'col',
});

let wrapperNode = document.querySelector('.wrapper');
wrapperNode.appendChild(table.tableEl);
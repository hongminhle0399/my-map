function onChangeOption(e) {
  try {
    let selectedOpt = e.target.value;
    let [width, height] = OPTIONS[selectedOpt];
    let table = new DynamicTable(width, height, {
      tableStyle: 'game-table',
      rowStyle: 'row',
      colStyle: 'col',
    });

    let wrapperNode = document.querySelector('.wrapper');
    let numOfChild = wrapperNode.children.length;
    if (numOfChild > 0) {
      for (let i = 0; i < numOfChild; ++i) {
        if (wrapperNode.children[i].className === 'game-table') {
          wrapperNode.children[i].remove();
          break;
        }
      }
    }
    wrapperNode.appendChild(table.tableEl);
  } catch (error) {
    console.log('Error occured with on change option: ', error);
  }
}
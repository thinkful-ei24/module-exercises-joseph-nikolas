
const store = (function(){
  const hideCheckedItems = false;
  const searchTerm = '';

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  return {
    items,
    hideCheckedItems,
    searchTerm
  };

}());

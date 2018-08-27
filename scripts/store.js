'use strict';
/* global Item */

const store = (function(){
  const hideCheckedItems = false;
  const searchTerm = '';

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  const findById = function(id) {
    return this.items.find(obj => obj.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }catch(e) {
      console.log(e.message);
    }
  };

  const findAndToggleChecked = function(id) {
    const currentItem = this.findById(id);
    currentItem.checked = !currentItem.checked;
  };
  
  

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked
  };

}());

'use strict';

/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

$(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  shoppingList.addItemToShoppingList('');
  shoppingList.addItemToShoppingList('chickens');
});


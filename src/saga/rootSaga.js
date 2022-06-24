import { takeLatest } from "redux-saga/effects";
import {
  handleGetProduct,
  handleGetCategory,
  handleEditProduct,
  handleEditCategory,
  handleAddProduct,
  handleAddCategory,
  handleupdateCategory,
  handleupdateProduct,
  handledeleteCategory,
  handledeleteProduct,
  handlesequenceProduct,
  handleorderProduct,
} from "saga/handler";
import {
  getProduct,
  getCategory,
  editproduct,
  editcategory,
  addProduct,
  addCategory,
  updateCategory,
  updateProduct,
  deleteCategory,
  deleteProduct,
  getSequence,
  updateSequence,
} from "Reducer/statevalue";

export function* watcherSaga() {
  yield takeLatest(getProduct.type, handleGetProduct);
  yield takeLatest(getCategory.type, handleGetCategory);
  yield takeLatest(editproduct.type, handleEditProduct);
  yield takeLatest(editcategory.type, handleEditCategory);
  yield takeLatest(addProduct.type, handleAddProduct);
  yield takeLatest(addCategory.type, handleAddCategory);
  yield takeLatest(updateCategory.type, handleupdateCategory);
  yield takeLatest(updateProduct.type, handleupdateProduct);
  yield takeLatest(deleteProduct.type, handledeleteProduct);
  yield takeLatest(deleteCategory.type, handledeleteCategory);
  yield takeLatest(getSequence.type, handlesequenceProduct);
  yield takeLatest(updateSequence.type, handleorderProduct);
}

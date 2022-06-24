import { call, put } from "redux-saga/effects";
import {
  setProduct,
  setCategory,
  setEditproduct,
  setEditcategory,
  setSequencedata,
} from "Reducer/statevalue";
import {
  product,
  category,
  editproduct,
  editcategory,
  addproduct,
  addcategory,
  updatecategory,
  updateproduct,
  deletecategory,
  deleteproduct,
  sequencedata,
  sequenceorder,
} from "services/AuthServices";
import { toast } from "react-toastify";

export function* handleGetProduct(action) {
  try {
    const response = yield call(product);
    const { data } = response;
    console.log(data);
    yield put(setProduct({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetCategory(action) {
  try {
    const response = yield call(category);
    const { data } = response;
    console.log(data);
    yield put(setCategory({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleEditProduct(action) {
  try {
    const { id } = action.payload;
    console.log(id);
    const response = yield call(editproduct, id);
    const { data } = response;
    console.log(data);
    yield put(setEditproduct({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleEditCategory(action) {
  try {
    const { id } = action.payload;
    console.log(id);
    const response = yield call(editcategory, id);
    const { data } = response;
    console.log(data);
    yield put(setEditcategory({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddProduct(action) {
  try {
    const { DataObj } = action.payload;
    console.log(DataObj);
    const response = yield call(addproduct, DataObj);
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddCategory(action) {
  try {
    const { DataObj } = action.payload;
    console.log(DataObj);
    const response = yield call(addcategory, DataObj);
    response.data.error.map((res) => {
      toast.error(res.msg);
    });
    // const { data } = response;
    // console.log(data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function* handleupdateCategory(action) {
  try {
    const { DataObj } = action.payload;
    console.log(DataObj);
    const response = yield call(updatecategory, DataObj);
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* handleupdateProduct(action) {
  try {
    const { DataObj } = action.payload;
    console.log(DataObj);
    const response = yield call(updateproduct, DataObj);
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* handledeleteCategory(action) {
  try {
    const data = action.payload;
    console.log(data);
    yield call(deletecategory, data);
  } catch (error) {
    console.log(error);
  }
}

export function* handledeleteProduct(action) {
  try {
    const data = action.payload;
    console.log(data);
    yield call(deleteproduct, data);
  } catch (error) {
    console.log(error);
  }
}

export function* handlesequenceProduct(action) {
  try {
    const response = yield call(sequencedata);
    const { data } = response;
    console.log(data);
    yield put(setSequencedata({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleorderProduct(action) {
  try {
    const { DataObj } = action.payload;
    console.log(DataObj);
    const response = yield call(sequenceorder, DataObj);
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

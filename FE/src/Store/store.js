import { configureStore } from "@reduxjs/toolkit";
import filterUser from "./filterUser";
import filterConfirmModal from "./filterConfirmModal";
import filterModalForm from "./filterModalForm";
const store = configureStore({
  reducer: {
    auth: filterUser,
    confirmModal: filterConfirmModal,
    ModalForm: filterModalForm,
  },
});
export default store;

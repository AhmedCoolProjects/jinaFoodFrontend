import http from "./http-common";

class JinaFoodAPI {
  // Employee
  getAllEmployees() {
    return http.get(`/employee`);
  }
  getEmployeeById(id) {
    return http.get(`/employee/id/${id}`);
  }
  addEmployee(data) {
    return http.post(`/employee/add`, data);
  }
  deleteEmployee(id) {
    return http.post(`/employee/delete/${id}`);
  }
  // Customer
  getAllCustomers() {
    return http.get(`/customer/getall`);
  }
  getCustomerById(id) {
    return http.get(`/customer/get/${id}`);
  }
  addCustomer(data) {
    return http.post(`/customer/add`, data);
  }
  deleteCustomer(id) {
    return http.post(`/customer/delete/${id}`);
  }
  // Order
  getAllOrders() {
    return http.get(`/order/getall`);
  }
  getOrderById(id) {
    return http.get(`/order/get/${id}`);
  }
  addOrder(data) {
    return http.post(`/order/add`, data);
  }
  deleteOrder(id) {
    return http.post(`/order/delete/${id}`);
  }
  // products
  getProducts() {
    return http.get(`/product`);
  }
  getProductById(id) {
    return http.get(`/product/id/${id}`);
  }
  addProduct(data) {
    return http.post(`/product/add`, data);
  }
  deleteProduct(id) {
    return http.post(`/product/delete/${id}`);
  }
}
export default new JinaFoodAPI();

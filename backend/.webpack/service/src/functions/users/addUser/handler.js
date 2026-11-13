/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/businessException.model.ts":
/*!***********************************************!*\
  !*** ./src/common/businessException.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BusinessException)\n/* harmony export */ });\n/* harmony import */ var _response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./response.model */ \"./src/common/response.model.ts\");\n\nclass BusinessException extends _response_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(message) {\n        console.log(\"An Error occurred : \", message);\n        super({}, _response_model__WEBPACK_IMPORTED_MODULE_0__.StatusCode.ERROR, message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2J1c2luZXNzRXhjZXB0aW9uLm1vZGVsLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWtoZW9hbmEtYmFja2VuZC1kZXYvLi9zcmMvY29tbW9uL2J1c2luZXNzRXhjZXB0aW9uLm1vZGVsLnRzPzAxOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3BvbnNlTW9kZWwsIHtTdGF0dXNDb2RlfSBmcm9tIFwiLi9yZXNwb25zZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGNsYXNzIEJ1c2luZXNzRXhjZXB0aW9uIGV4dGVuZHMgUmVzcG9uc2VNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFuIEVycm9yIG9jY3VycmVkIDogXCIsbWVzc2FnZSlcclxuICAgICAgICBzdXBlcih7fSwgU3RhdHVzQ29kZS5FUlJPUiwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/businessException.model.ts\n");

/***/ }),

/***/ "./src/common/errorResponse.ts":
/*!*************************************!*\
  !*** ./src/common/errorResponse.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ errorResponse)\n/* harmony export */ });\n/* harmony import */ var _response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./response.model */ \"./src/common/response.model.ts\");\n\nfunction errorResponse(error) {\n    const response = error instanceof _response_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        ? error\n        : new _response_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({}, _response_model__WEBPACK_IMPORTED_MODULE_0__.StatusCode.ERROR, error.message);\n    return response.generate();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2Vycm9yUmVzcG9uc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jha2hlb2FuYS1iYWNrZW5kLWRldi8uL3NyYy9jb21tb24vZXJyb3JSZXNwb25zZS50cz9iZTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNwb25zZU1vZGVsLCB7IFN0YXR1c0NvZGUgfSBmcm9tIFwiLi9yZXNwb25zZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXJyb3JSZXNwb25zZShlcnJvcjogYW55KSB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPVxyXG5cdFx0ZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZU1vZGVsXHJcblx0XHRcdD8gZXJyb3JcclxuXHRcdFx0Ly8gOiBuZXcgUmVzcG9uc2VNb2RlbChudWxsLCBTdGF0dXNDb2RlLkVSUk9SLCBlcnJvci5tZXNzYWdlKTtcclxuXHRcdFx0OiBuZXcgUmVzcG9uc2VNb2RlbCh7fSwgU3RhdHVzQ29kZS5FUlJPUiwgZXJyb3IubWVzc2FnZSk7XHJcblx0cmV0dXJuIHJlc3BvbnNlLmdlbmVyYXRlKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/errorResponse.ts\n");

/***/ }),

/***/ "./src/common/lambda.ts":
/*!******************************!*\
  !*** ./src/common/lambda.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middyfy: () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2xhbWJkYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWtoZW9hbmEtYmFja2VuZC1kZXYvLi9zcmMvY29tbW9uL2xhbWJkYS50cz84MDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tIFwiQG1pZGR5L2NvcmVcIlxyXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbWlkZHlmeSA9IChoYW5kbGVyOiBhbnkpID0+IHtcclxuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/lambda.ts\n");

/***/ }),

/***/ "./src/common/response.model.ts":
/*!**************************************!*\
  !*** ./src/common/response.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Status: () => (/* binding */ Status),\n/* harmony export */   StatusCode: () => (/* binding */ StatusCode),\n/* harmony export */   \"default\": () => (/* binding */ ResponseModel)\n/* harmony export */ });\nvar Status;\n(function (Status) {\n    Status[\"SUCCESS\"] = \"success\";\n    Status[\"ERROR\"] = \"error\";\n    Status[\"CREATED\"] = \"Created\";\n    Status[\"BAD_REQUEST\"] = \"bad request\";\n    Status[\"NOT_AUTHORIZE\"] = \"not authorized\";\n    Status[\"FORBIDDEN\"] = \"forbidden\";\n    Status[\"NOT_FOUND\"] = \"not found\";\n})(Status || (Status = {}));\nvar StatusCode;\n(function (StatusCode) {\n    StatusCode[StatusCode[\"OK\"] = 200] = \"OK\";\n    StatusCode[StatusCode[\"Created\"] = 201] = \"Created\";\n    StatusCode[StatusCode[\"ERROR\"] = 500] = \"ERROR\";\n    StatusCode[StatusCode[\"BAD_REQUEST\"] = 400] = \"BAD_REQUEST\";\n    StatusCode[StatusCode[\"NOT_AUTHORIZED\"] = 401] = \"NOT_AUTHORIZED\";\n    StatusCode[StatusCode[\"FORBIDDEN\"] = 403] = \"FORBIDDEN\";\n    StatusCode[StatusCode[\"NOT_FOUND\"] = 404] = \"NOT_FOUND\";\n})(StatusCode || (StatusCode = {}));\nconst STATUS_MESSAGES = {\n    200: Status.SUCCESS,\n    400: Status.BAD_REQUEST,\n    500: Status.ERROR,\n};\nconst RESPONSE_HEADERS = {\n    \"Content-Type\": \"application/json\",\n    \"Access-Control-Allow-Origin\": \"*\",\n    \"Access-Control-Allow-Credentials\": true,\n};\nclass ResponseModel {\n    constructor(data = {}, code = StatusCode.OK, message = \"\") {\n        this.setBodyVariable = (variable, value) => {\n            this.body[variable] = value;\n        };\n        this.setData = (data) => {\n            this.body.data = data;\n        };\n        this.setCode = (code) => {\n            this.code = code;\n        };\n        this.getCode = () => {\n            return this.code;\n        };\n        this.setMessage = (message) => {\n            this.body.message = message;\n        };\n        this.getMessage = () => {\n            return this.body.message;\n        };\n        this.generate = () => {\n            return {\n                statusCode: this.code,\n                headers: RESPONSE_HEADERS,\n                body: JSON.stringify(this.body),\n            };\n        };\n        this.body = {\n            data: data,\n            message: message,\n            status: STATUS_MESSAGES[code],\n        };\n        this.code = code;\n    }\n    static ok(data, message = \"Successful\") {\n        return new ResponseModel(data, StatusCode.OK, message).generate();\n    }\n    static created(data, message = \"Created Successful\") {\n        return new ResponseModel(data, StatusCode.Created, message).generate();\n    }\n    static badRequest(data, message = \"Request failed\") {\n        return new ResponseModel(data, StatusCode.BAD_REQUEST, message).generate();\n    }\n    static notFound(data, message = \"Item not Found\") {\n        return new ResponseModel(data, StatusCode.NOT_FOUND, message).generate();\n    }\n    static error(data, message = \"An internal error occured\") {\n        return new ResponseModel(data, StatusCode.ERROR, message).generate();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3Jlc3BvbnNlLm1vZGVsLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBVUE7QUFlQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWtoZW9hbmEtYmFja2VuZC1kZXYvLi9zcmMvY29tbW9uL3Jlc3BvbnNlLm1vZGVsLnRzPzI1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW50ZXJmYWNlc1xyXG5leHBvcnQgZW51bSBTdGF0dXMge1xyXG5cdFNVQ0NFU1MgPSBcInN1Y2Nlc3NcIixcclxuXHRFUlJPUiA9IFwiZXJyb3JcIixcclxuXHRDUkVBVEVEID0gXCJDcmVhdGVkXCIsXHJcblx0QkFEX1JFUVVFU1QgPSBcImJhZCByZXF1ZXN0XCIsXHJcblx0Tk9UX0FVVEhPUklaRSA9IFwibm90IGF1dGhvcml6ZWRcIixcclxuXHRGT1JCSURERU4gPSBcImZvcmJpZGRlblwiLFxyXG5cdE5PVF9GT1VORCA9IFwibm90IGZvdW5kXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0YXR1c0NvZGUge1xyXG5cdE9LID0gMjAwLFxyXG5cdENyZWF0ZWQsXHJcblx0RVJST1IgPSA1MDAsXHJcblx0QkFEX1JFUVVFU1QgPSA0MDAsXHJcblx0Tk9UX0FVVEhPUklaRUQgPSA0MDEsXHJcblx0Rk9SQklEREVOID0gNDAzLFxyXG5cdE5PVF9GT1VORCA9IDQwNCxcclxufVxyXG5cclxudHlwZSBSZXNwb25zZUhlYWRlciA9IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB9O1xyXG5pbnRlcmZhY2UgSVJlc3BvbnNlQm9keSB7XHJcblx0ZGF0YTogYW55O1xyXG5cdG1lc3NhZ2U6IHN0cmluZztcclxuXHRzdGF0dXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUmVzcG9uc2Uge1xyXG5cdHN0YXR1c0NvZGU6IFN0YXR1c0NvZGU7XHJcblx0aGVhZGVyczogUmVzcG9uc2VIZWFkZXI7XHJcblx0Ym9keTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTVEFUVVNfTUVTU0FHRVMgPSB7XHJcblx0MjAwOiBTdGF0dXMuU1VDQ0VTUyxcclxuXHQ0MDA6IFN0YXR1cy5CQURfUkVRVUVTVCxcclxuXHQ1MDA6IFN0YXR1cy5FUlJPUixcclxufTtcclxuXHJcbmNvbnN0IFJFU1BPTlNFX0hFQURFUlM6IFJlc3BvbnNlSGVhZGVyID0ge1xyXG5cdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLCAvLyBSZXF1aXJlZCBmb3IgQ09SUyBzdXBwb3J0IHRvIHdvcmtcclxuXHRcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCI6IHRydWUsIC8vIFJlcXVpcmVkIGZvciBjb29raWVzLCBhdXRob3JpemF0aW9uIGhlYWRlcnMgd2l0aCBIVFRQU1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNsYXNzIFJlc3BvbnNlTW9kZWxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlTW9kZWwge1xyXG5cdHByaXZhdGUgYm9keTogSVJlc3BvbnNlQm9keTtcclxuXHRwcml2YXRlIGNvZGU6IFN0YXR1c0NvZGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc3BvbnNlTW9kZWwgQ29uc3RydWN0b3JcclxuXHQgKiBAcGFyYW0gZGF0YVxyXG5cdCAqIEBwYXJhbSBjb2RlXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihkYXRhID0ge30sIGNvZGUgPSBTdGF0dXNDb2RlLk9LLCBtZXNzYWdlID0gXCJcIikge1xyXG5cdFx0dGhpcy5ib2R5ID0ge1xyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuXHRcdFx0c3RhdHVzOiBTVEFUVVNfTUVTU0FHRVNbY29kZV0sXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5jb2RlID0gY29kZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBvciB1cGRhdGUgYSBib2R5IHZhcmlhYmxlXHJcblx0ICogQHBhcmFtIHZhcmlhYmxlXHJcblx0ICogQHBhcmFtIHZhbHVlXHJcblx0ICovXHJcblx0c2V0Qm9keVZhcmlhYmxlID0gKHZhcmlhYmxlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuXHRcdHRoaXMuYm9keVt2YXJpYWJsZV0gPSB2YWx1ZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgRGF0YVxyXG5cdCAqIEBwYXJhbSBkYXRhXHJcblx0ICovXHJcblx0c2V0RGF0YSA9IChkYXRhOiBhbnkpOiB2b2lkID0+IHtcclxuXHRcdHRoaXMuYm9keS5kYXRhID0gZGF0YTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgU3RhdHVzIENvZGVcclxuXHQgKiBAcGFyYW0gY29kZVxyXG5cdCAqL1xyXG5cdHNldENvZGUgPSAoY29kZTogU3RhdHVzQ29kZSk6IHZvaWQgPT4ge1xyXG5cdFx0dGhpcy5jb2RlID0gY29kZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgU3RhdHVzIENvZGVcclxuXHQgKiBAcmV0dXJuIHsqfVxyXG5cdCAqL1xyXG5cdGdldENvZGUgPSAoKTogU3RhdHVzQ29kZSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb2RlO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBtZXNzYWdlXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcclxuXHQgKi9cclxuXHRzZXRNZXNzYWdlID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG5cdFx0dGhpcy5ib2R5Lm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBNZXNzYWdlXHJcblx0ICogQHJldHVybiB7c3RyaW5nfCp9XHJcblx0ICovXHJcblx0Z2V0TWVzc2FnZSA9ICgpOiBhbnkgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYm9keS5tZXNzYWdlO1xyXG5cdH07XHJcblxyXG5cdHN0YXRpYyBvayhkYXRhOiBhbnksIG1lc3NhZ2U6IHN0cmluZyA9IFwiU3VjY2Vzc2Z1bFwiKSB7XHJcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlTW9kZWwoZGF0YSwgU3RhdHVzQ29kZS5PSywgbWVzc2FnZSkuZ2VuZXJhdGUoKTtcclxuXHR9XHJcblx0c3RhdGljIGNyZWF0ZWQoZGF0YTogYW55LCBtZXNzYWdlOiBzdHJpbmcgPSBcIkNyZWF0ZWQgU3VjY2Vzc2Z1bFwiKSB7XHJcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlTW9kZWwoZGF0YSwgU3RhdHVzQ29kZS5DcmVhdGVkLCBtZXNzYWdlKS5nZW5lcmF0ZSgpO1xyXG5cdH1cclxuXHRzdGF0aWMgYmFkUmVxdWVzdChkYXRhOiBhbnksIG1lc3NhZ2U6IHN0cmluZyA9IFwiUmVxdWVzdCBmYWlsZWRcIikge1xyXG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZU1vZGVsKGRhdGEsIFN0YXR1c0NvZGUuQkFEX1JFUVVFU1QsIG1lc3NhZ2UpLmdlbmVyYXRlKCk7XHJcblx0fVxyXG5cdHN0YXRpYyBub3RGb3VuZChkYXRhOiBhbnksIG1lc3NhZ2U6IHN0cmluZyA9IFwiSXRlbSBub3QgRm91bmRcIikge1xyXG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZU1vZGVsKGRhdGEsIFN0YXR1c0NvZGUuTk9UX0ZPVU5ELCBtZXNzYWdlKS5nZW5lcmF0ZSgpO1xyXG5cdH1cclxuXHRzdGF0aWMgZXJyb3IoZGF0YTogYW55LCBtZXNzYWdlOiBzdHJpbmcgPSBcIkFuIGludGVybmFsIGVycm9yIG9jY3VyZWRcIikge1xyXG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZU1vZGVsKGRhdGEsIFN0YXR1c0NvZGUuRVJST1IsIG1lc3NhZ2UpLmdlbmVyYXRlKCk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEdlbmVhdGUgYSByZXNwb25zZVxyXG5cdCAqIEByZXR1cm4ge0lSZXNwb25zZX1cclxuXHQgKi9cclxuXHRnZW5lcmF0ZSA9ICgpOiBJUmVzcG9uc2UgPT4ge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3RhdHVzQ29kZTogdGhpcy5jb2RlLFxyXG5cdFx0XHRoZWFkZXJzOiBSRVNQT05TRV9IRUFERVJTLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmJvZHkpLFxyXG5cdFx0fTtcclxuXHR9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/response.model.ts\n");

/***/ }),

/***/ "./src/functions/users/addUser/handler.ts":
/*!************************************************!*\
  !*** ./src/functions/users/addUser/handler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/lambda */ \"./src/common/lambda.ts\");\n/* harmony import */ var _common_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/response.model */ \"./src/common/response.model.ts\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model */ \"./src/models/user.model.ts\");\n/* harmony import */ var _common_errorResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/errorResponse */ \"./src/common/errorResponse.ts\");\n/* harmony import */ var _repositories_userRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../repositories/userRepository */ \"./src/repositories/userRepository.ts\");\n\n\n\n\n\n\nconst addUserHandler = async (event) => {\n    try {\n        const { body } = event;\n        const userBody = body;\n        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"](userBody.id);\n        user.name = userBody.name;\n        user.phoneNumber = userBody.phoneNumber;\n        const data = await (0,_repositories_userRepository__WEBPACK_IMPORTED_MODULE_5__.addUser)(user);\n        return _common_response_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ok(data, \"user created\");\n    }\n    catch (error) {\n        return (0,_common_errorResponse__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(error);\n    }\n};\nconst main = (0,_common_lambda__WEBPACK_IMPORTED_MODULE_1__.middyfy)(addUserHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3VzZXJzL2FkZFVzZXIvaGFuZGxlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jha2hlb2FuYS1iYWNrZW5kLWRldi8uL3NyYy9mdW5jdGlvbnMvdXNlcnMvYWRkVXNlci9oYW5kbGVyLnRzPzBkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XHJcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2xhbWJkYVwiO1xyXG5pbXBvcnQgUmVzcG9uc2VNb2RlbCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Jlc3BvbnNlLm1vZGVsXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgZXJyb3JSZXNwb25zZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Vycm9yUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgYWRkVXNlciB9IGZyb20gXCIuLi8uLi8uLi9yZXBvc2l0b3JpZXMvdXNlclJlcG9zaXRvcnlcIjtcclxuY29uc3QgYWRkVXNlckhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGJvZHkgfSA9IGV2ZW50O1xyXG4gICAgY29uc3QgdXNlckJvZHkgPSBib2R5O1xyXG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHVzZXJCb2R5LmlkKTtcclxuXHJcbiAgICB1c2VyLm5hbWUgPSB1c2VyQm9keS5uYW1lO1xyXG4gICAgdXNlci5waG9uZU51bWJlciA9IHVzZXJCb2R5LnBob25lTnVtYmVyO1xyXG4gICAgXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFkZFVzZXIodXNlcik7XHJcblxyXG4gICAgcmV0dXJuIFJlc3BvbnNlTW9kZWwub2soZGF0YSwgXCJ1c2VyIGNyZWF0ZWRcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvclJlc3BvbnNlKGVycm9yKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShhZGRVc2VySGFuZGxlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/users/addUser/handler.ts\n");

/***/ }),

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n    constructor(id) {\n        this.id = \"\";\n        this.name = \"\";\n        this.phoneNumber = \"\";\n        this.createdAt = 0;\n        this.lastLoggedIn = 0;\n        this.id = id;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBT0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFraGVvYW5hLWJhY2tlbmQtZGV2Ly4vc3JjL21vZGVscy91c2VyLm1vZGVsLnRzP2JmNzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XHJcblx0aWQ6IHN0cmluZyA9IFwiXCI7XHJcblx0bmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcgPSBcIlwiO1xyXG5cdGNyZWF0ZWRBdDogbnVtYmVyID0gMDtcclxuXHRsYXN0TG9nZ2VkSW46IG51bWJlciA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGlkOnN0cmluZykge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/user.model.ts\n");

/***/ }),

/***/ "./src/repositories/userRepository.ts":
/*!********************************************!*\
  !*** ./src/repositories/userRepository.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: () => (/* binding */ addUser),\n/* harmony export */   createUser: () => (/* binding */ createUser)\n/* harmony export */ });\n/* harmony import */ var _services_DynamoDatabaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/DynamoDatabaseService */ \"./src/services/DynamoDatabaseService.ts\");\n\nconst TableName = process.env.USERS_TABLE;\nconst addUser = async (user) => {\n    user.createdAt = new Date().getTime();\n    const params = {\n        TableName: TableName,\n        Item: {\n            ...user\n        },\n    };\n    await _services_DynamoDatabaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(params);\n    return user.id;\n};\nconst createUser = async (user) => {\n    user.createdAt = new Date().getTime();\n    const params = {\n        TableName: TableName,\n        Item: {\n            ...user\n        },\n    };\n    await _services_DynamoDatabaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(params);\n    return user.id;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVwb3NpdG9yaWVzL3VzZXJSZXBvc2l0b3J5LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jha2hlb2FuYS1iYWNrZW5kLWRldi8uL3NyYy9yZXBvc2l0b3JpZXMvdXNlclJlcG9zaXRvcnkudHM/MGIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgRHluYW1vRGF0YWJhc2VTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9EeW5hbW9EYXRhYmFzZVNlcnZpY2VcIjtcclxuY29uc3QgVGFibGVOYW1lID0gcHJvY2Vzcy5lbnYuVVNFUlNfVEFCTEU7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICB1c2VyLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG5cdFx0VGFibGVOYW1lOiBUYWJsZU5hbWUsXHJcblx0XHRJdGVtOiB7XHJcblx0XHRcdC4uLnVzZXJcclxuXHRcdH0sXHJcblx0fTtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG5cdGF3YWl0IER5bmFtb0RhdGFiYXNlU2VydmljZS5jcmVhdGUocGFyYW1zKTtcclxuICAgIHJldHVybiB1c2VyLmlkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jICh1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICB1c2VyLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG5cdFx0VGFibGVOYW1lOiBUYWJsZU5hbWUsXHJcblx0XHRJdGVtOiB7XHJcblx0XHRcdC4uLnVzZXJcclxuXHRcdH0sXHJcblx0fTtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG5cdGF3YWl0IER5bmFtb0RhdGFiYXNlU2VydmljZS5jcmVhdGUocGFyYW1zKTtcclxuICAgIHJldHVybiB1c2VyLmlkO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/repositories/userRepository.ts\n");

/***/ }),

/***/ "./src/services/DynamoDatabaseService.ts":
/*!***********************************************!*\
  !*** ./src/services/DynamoDatabaseService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _awsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awsService */ \"./src/services/awsService.ts\");\n/* harmony import */ var aws_xray_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-xray-sdk */ \"aws-xray-sdk\");\n/* harmony import */ var aws_xray_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_xray_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/businessException.model */ \"./src/common/businessException.model.ts\");\n\n\n\nconst getAWS = () => {\n    if (!process.env.IS_OFFLINE) {\n        return aws_xray_sdk__WEBPACK_IMPORTED_MODULE_1__.captureAWS(_awsService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    }\n    return _awsService__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n};\nconst AWS = getAWS();\nclass DynamoDatabaseService {\n    constructor() {\n        this.create = async (params) => {\n            try {\n                return await this.documentClient.put(params).promise();\n            }\n            catch (error) {\n                throw new _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`create-error: ${error}`);\n            }\n        };\n        this.batchCreate = async (params) => {\n            try {\n                return await this.documentClient.batchWrite(params).promise();\n            }\n            catch (error) {\n                throw new _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`batch-write-error: ${error}`);\n            }\n        };\n        this.update = async (params) => {\n            try {\n                return await this.documentClient.update(params).promise();\n            }\n            catch (error) {\n                throw new _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`update-error: ${error}`);\n            }\n        };\n        this.query = async (params) => {\n            try {\n                return await this.documentClient.query(params).promise();\n            }\n            catch (error) {\n                throw new _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`query-error: ${error}`);\n            }\n        };\n        this.get = async (params) => {\n            try {\n                return await this.documentClient.get(params).promise();\n            }\n            catch (error) {\n                throw new _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`get-error: ${error}`);\n            }\n        };\n        this.delete = async (params) => {\n            try {\n                return await this.documentClient.delete(params).promise();\n            }\n            catch (error) {\n                throw new _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`delete-error: ${error}`);\n            }\n        };\n        let options;\n        if (process.env.IS_OFFLINE) {\n            options = {\n                endpoint: \"http://localhost:8000\",\n                region: \"eu-central-1\",\n                accessKeyId: \"local\",\n                secretAccessKey: \"local\",\n            };\n        }\n        this.documentClient = new AWS.DynamoDB.DocumentClient(options);\n    }\n    async scan(params) {\n        try {\n            return await this.documentClient.scan(params).promise();\n        }\n        catch (e) {\n            throw new _common_businessException_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`get-all-error: ${e}`);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DynamoDatabaseService());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvRHluYW1vRGF0YWJhc2VTZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFraGVvYW5hLWJhY2tlbmQtZGV2Ly4vc3JjL3NlcnZpY2VzL0R5bmFtb0RhdGFiYXNlU2VydmljZS50cz9jNmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhd3MgZnJvbSBcIi4vYXdzU2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBhd3NYUmF5IGZyb20gXCJhd3MteHJheS1zZGtcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRDbGllbnQgfSBmcm9tIFwiYXdzLXNkay9saWIvZHluYW1vZGIvZG9jdW1lbnRfY2xpZW50XCI7XHJcbmltcG9ydCBJQ29uZmlnIGZyb20gXCIuLi9jb21tb24vY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgQnVzaW5lc3NFeGNlcHRpb24gZnJvbSBcIi4uL2NvbW1vbi9idXNpbmVzc0V4Y2VwdGlvbi5tb2RlbFwiO1xyXG5cclxudHlwZSBQdXRJdGVtID0gQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50LlB1dEl0ZW1JbnB1dDtcclxudHlwZSBQdXRJdGVtT3V0cHV0ID0gQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50LlB1dEl0ZW1PdXRwdXQ7XHJcblxyXG4vLyBCYXRjaCB3cml0ZVxyXG50eXBlIEJhdGNoV3JpdGUgPSBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQuQmF0Y2hXcml0ZUl0ZW1JbnB1dDtcclxudHlwZSBCYXRjaFdyaXRlT3V0UHV0ID0gQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50LkJhdGNoV3JpdGVJdGVtT3V0cHV0O1xyXG5cclxuLy8gVXBkYXRlXHJcbnR5cGUgVXBkYXRlSXRlbSA9IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudC5VcGRhdGVJdGVtSW5wdXQ7XHJcbnR5cGUgVXBkYXRlSXRlbU91dFB1dCA9IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudC5VcGRhdGVJdGVtT3V0cHV0O1xyXG5cclxuLy8gUXVlcnlcclxudHlwZSBRdWVyeUl0ZW0gPSBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQuUXVlcnlJbnB1dDtcclxudHlwZSBRdWVyeUl0ZW1PdXRwdXQgPSBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQuUXVlcnlPdXRwdXQ7XHJcblxyXG4vLyBHZXRcclxudHlwZSBHZXRJdGVtID0gQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50LkdldEl0ZW1JbnB1dDtcclxudHlwZSBHZXRJdGVtT3V0cHV0ID0gQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50LkdldEl0ZW1PdXRwdXQ7XHJcblxyXG4vLyBEZWxldGVcclxudHlwZSBEZWxldGVJdGVtID0gQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50LkRlbGV0ZUl0ZW1JbnB1dDtcclxudHlwZSBEZWxldGVJdGVtT3V0cHV0ID0gQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50LkRlbGV0ZUl0ZW1PdXRwdXQ7XHJcblxyXG5jb25zdCBnZXRBV1M6IGFueSA9ICgpID0+IHtcclxuXHRpZiAoIXByb2Nlc3MuZW52LklTX09GRkxJTkUpIHtcclxuXHRcdHJldHVybiBhd3NYUmF5LmNhcHR1cmVBV1MoYXdzKTtcclxuXHR9XHJcblx0cmV0dXJuIGF3cztcclxufTtcclxuY29uc3QgQVdTID0gZ2V0QVdTKCk7XHJcbmNsYXNzIER5bmFtb0RhdGFiYXNlU2VydmljZSB7XHJcblx0ZG9jdW1lbnRDbGllbnQ6IERvY3VtZW50Q2xpZW50O1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0bGV0IG9wdGlvbnM6IElDb25maWc7XHJcblx0XHRpZiAocHJvY2Vzcy5lbnYuSVNfT0ZGTElORSkge1xyXG5cdFx0XHRvcHRpb25zID0ge1xyXG5cdFx0XHRcdGVuZHBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxyXG5cdFx0XHRcdHJlZ2lvbjogXCJldS1jZW50cmFsLTFcIixcclxuXHRcdFx0XHRhY2Nlc3NLZXlJZDogXCJsb2NhbFwiLFxyXG5cdFx0XHRcdHNlY3JldEFjY2Vzc0tleTogXCJsb2NhbFwiLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Ly9AdHMtaWdub3JlXHJcblx0XHR0aGlzLmRvY3VtZW50Q2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjcmVhdGUgPSBhc3luYyAocGFyYW1zOiBQdXRJdGVtKTogUHJvbWlzZTxQdXRJdGVtT3V0cHV0PiA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kb2N1bWVudENsaWVudC5wdXQocGFyYW1zKS5wcm9taXNlKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBuZXcgQnVzaW5lc3NFeGNlcHRpb24oYGNyZWF0ZS1lcnJvcjogJHtlcnJvcn1gKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgYmF0Y2hDcmVhdGUgPSBhc3luYyAoXHJcblx0XHRwYXJhbXM6IEJhdGNoV3JpdGVcclxuXHQpOiBQcm9taXNlPEJhdGNoV3JpdGVPdXRQdXQ+ID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJldHVybiBhd2FpdCB0aGlzLmRvY3VtZW50Q2xpZW50LmJhdGNoV3JpdGUocGFyYW1zKS5wcm9taXNlKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBuZXcgQnVzaW5lc3NFeGNlcHRpb24oYGJhdGNoLXdyaXRlLWVycm9yOiAke2Vycm9yfWApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyB1cGRhdGUgPSBhc3luYyAocGFyYW1zOiBVcGRhdGVJdGVtKTogUHJvbWlzZTxVcGRhdGVJdGVtT3V0UHV0PiA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kb2N1bWVudENsaWVudC51cGRhdGUocGFyYW1zKS5wcm9taXNlKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBuZXcgQnVzaW5lc3NFeGNlcHRpb24oYHVwZGF0ZS1lcnJvcjogJHtlcnJvcn1gKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgcXVlcnkgPSBhc3luYyAocGFyYW1zOiBRdWVyeUl0ZW0pOiBQcm9taXNlPFF1ZXJ5SXRlbU91dHB1dD4gPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZG9jdW1lbnRDbGllbnQucXVlcnkocGFyYW1zKS5wcm9taXNlKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBuZXcgQnVzaW5lc3NFeGNlcHRpb24oYHF1ZXJ5LWVycm9yOiAke2Vycm9yfWApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBnZXQgPSBhc3luYyAocGFyYW1zOiBHZXRJdGVtKTogUHJvbWlzZTxHZXRJdGVtT3V0cHV0PiA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kb2N1bWVudENsaWVudC5nZXQocGFyYW1zKS5wcm9taXNlKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBuZXcgQnVzaW5lc3NFeGNlcHRpb24oYGdldC1lcnJvcjogJHtlcnJvcn1gKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgZGVsZXRlID0gYXN5bmMgKHBhcmFtczogRGVsZXRlSXRlbSk6IFByb21pc2U8RGVsZXRlSXRlbU91dHB1dD4gPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZG9jdW1lbnRDbGllbnQuZGVsZXRlKHBhcmFtcykucHJvbWlzZSgpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEJ1c2luZXNzRXhjZXB0aW9uKGBkZWxldGUtZXJyb3I6ICR7ZXJyb3J9YCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFzeW5jIHNjYW4ocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZG9jdW1lbnRDbGllbnQuc2NhbihwYXJhbXMpLnByb21pc2UoKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEJ1c2luZXNzRXhjZXB0aW9uKGBnZXQtYWxsLWVycm9yOiAke2V9YCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRHluYW1vRGF0YWJhc2VTZXJ2aWNlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/DynamoDatabaseService.ts\n");

/***/ }),

/***/ "./src/services/awsService.ts":
/*!************************************!*\
  !*** ./src/services/awsService.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nlet config = { region: process.env.REGION || \"eu-central-1\" };\nconst AWS = aws_sdk__WEBPACK_IMPORTED_MODULE_0__;\nAWS.config.update(config);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AWS);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXdzU2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFraGVvYW5hLWJhY2tlbmQtZGV2Ly4vc3JjL3NlcnZpY2VzL2F3c1NlcnZpY2UudHM/MDgxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUNvbmZpZyBmcm9tIFwiLi4vY29tbW9uL2NvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0ICogYXMgYXdzIGZyb20gXCJhd3Mtc2RrXCI7XHJcblxyXG5cclxubGV0IGNvbmZpZzogSUNvbmZpZyA9IHsgcmVnaW9uOiBwcm9jZXNzLmVudi5SRUdJT04gfHwgXCJldS1jZW50cmFsLTFcIiB9O1xyXG5cclxuXHJcbmNvbnN0IEFXUyA9IGF3cztcclxuQVdTLmNvbmZpZy51cGRhdGUoY29uZmlnKTtcclxuZXhwb3J0IGRlZmF1bHQgQVdTO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/awsService.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "aws-xray-sdk":
/*!*******************************!*\
  !*** external "aws-xray-sdk" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("aws-xray-sdk");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/users/addUser/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
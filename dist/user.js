"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.comp_id = exports.add = exports.create = void 0;
const users = [];
const create = (_id, _name) => {
    return { id: _id, name: _name, match: null };
};
exports.create = create;
const add = (new_) => {
    users.push(new_);
    return users.length;
};
exports.add = add;
const comp_id = (a, b) => {
    return a.id == b.id;
};
exports.comp_id = comp_id;
const remove = (socket) => {
    const index = users.findIndex(ele => socket === ele.id);
    if (index != -1) {
        users.splice(index, 1);
    }
    return users.length;
};
exports.remove = remove;

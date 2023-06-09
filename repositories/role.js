const Role = require("../models/role.js");

const getAllRoles = async () => {
  const roles = await Role.findAll();

  return roles;
};

const getRoleById = async (roleId) => {
  const role = await Role.findByPk(roleId);

  return role;
};

const createRole = async (userData) => {
  try {
    const role = await Role.create(userData);

    return role;
  } catch (error) {
    return error;
  }
};

const deleteRole = async (roleId) => {
  try {
    const role = await Role.destroy({
      where: {
        id: roleId,
      },
    });

    return role;
  } catch (error) {
    return error;
  }
};

const updateRole = async (roleData, roleId) => {
  try {
    await Role.update(roleData, {
      where: {
        id: roleId,
      },
    });

    const role = await Role.findByPk(roleId);

    return role;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRoles,
  createRole,
  deleteRole,
  updateRole,
  getRoleById,
};
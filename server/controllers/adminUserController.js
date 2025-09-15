import { insertNewAdminUser, fetchAllAdminUsers, fetchOneAdminUser } from "../models/adminUser.js";

export async function createAdminUser(req, res) {
     try {
          const newAdminUser = await insertNewAdminUser(req.body);
          console.log(req.body);
          res.status(200).json(newAdminUser);
     } catch (err) {
          console.error("Error creating user!", err);
          res.status(500).json({ error: err.message });
     }
}

export async function getAllAdminUsers(req, res) {
     try {
          const adminUsers = await fetchAllAdminUsers();
          res.status(200).json(adminUsers);
     } catch (err) {
          console.error("Error getting users!", err);
          res.status(500).json({ error: err.message });
     }
}

export async function getAdminUserById(req, res) {
     try {
          const oneAdminUser = await fetchOneAdminUser(req.params.id);
          res.status(200).json(oneAdminUser);
     } catch (err) {
          console.error("Error getting user!", err);
          res.status(500).json({ error: err.message });
     }
}
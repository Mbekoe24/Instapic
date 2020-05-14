import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

// ===================================
// =============post ===============
// ==================================

export const getAllPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};
//
export const postPost = async (postData) => {
  const resp = await api.post("/posts", postData);
  return resp.data;
};
// update content of a post which is updating
export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, postData);
  return resp.data;
};

export const destroyPost = async (id) => {
  const resp = await api.delete(`/post/${id}`);
  return resp;
};
// ===================================
// =============photos ===============
// ==================================

export const getAllPhotos = async () => {
  const resp = await api.get("/photos");
  return resp.data;
};

export const getOnePhoto = async (id) => {
  const resp = await api.get(`/photos/${id}`);
  return resp.data;
};
//
export const postPhoto = async (post_id, photoData) => {
  const resp = await api.post(`/posts/${post_id}/photos/`, photoData);
  return resp.data;
};
// editng photo you want to update - one individual photo
export const putPhoto = async (id, post_id, photoData) => {
  const resp = await api.put(`/posts/${post_id}/photos/${id}`, photoData);
  return resp.data;
};

export const destroyPhoto = async (id) => {
  const resp = await api.delete(`/photos/${id}`);
  return resp;
};

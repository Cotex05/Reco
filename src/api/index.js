import Axios from "axios";

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("user")) || {};
}
export function isUserLoggedIn(user) {
  const userObj = JSON.parse(localStorage.getItem("user"));
  if (userObj && user.email === userObj.email) {
    return true;
  }
  return false;
}

export async function login(data) {
  try {
    let response ;
    // response= await Axios.post("api/login", data);
    response = {
      success: true,
      login: true,
      data: [
        {
          id: 101,
          email: data.email,
          name: "john doe",
          password: "johndoe",
          dept: "assembly",
          is_admin: 0,
        },
      ],
    };
    localStorage.setItem("user", JSON.stringify(response.data[0]));

    return { success: true, data: response.data };
  } catch (err) {
    return { success: false };
  }
}

export async function logout() {
  try {
    localStorage.removeItem("user");
  } catch (err) {
    return { success: false };
  }
}

export async function getDepartmentData(data) {
  try {
    if (data && data.department) {
      const response = await Axios.get(`api/department/${data.department}`);
      return { success: true, data: response.data };
    } else {
      throw Error("Department missing");
    }
  } catch (err) {
    return { success: false };
  }
}

// request to create/update/delete a row
export async function updateRowOfDepartmentData(data) {
  try {
    if (data && data.department && data.requestedByUser) {
      const response = await Axios.post(
        `api/department/${data.department}`,
        data
      );
      return { success: true, data: response.data };
    } else {
      throw Error("Department, Requested By User missing");
    }
  } catch (err) {
    return { success: false };
  }
}

export async function approveRequest(data) {
  try {
    if (data && data.requestId) {
      const response = await Axios.patch(`api/request/${data.requestId}`, data);
      return { success: true, data: response.data };
    } else {
      throw Error("Department, Requested By User missing");
    }
  } catch (err) {
    return { success: false };
  }
}

export async function getApprovalRequests() {
  try {
    const response = await Axios.get("api/requests");
    return { success: true, data: response.data };
  } catch (err) {
    return { success: false };
  }
}

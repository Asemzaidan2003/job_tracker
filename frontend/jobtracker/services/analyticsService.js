  import {API_URL} from "../src/config"
  const token = localStorage.getItem("token");
  export const fetchAllAplications = async () => {

    try {
      const response = await fetch(`${API_URL}/analytics/all-user-applications`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data.totalApplications;
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  };

export const fetchRejectedApplications = async () => {

    try {
      const response = await fetch(`${API_URL}/analytics/all-user-rejected-applications`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data.totalRejectedApplications;
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
}

export const fetchNoResponseApplications = async () => {

    try {
      const response = await fetch(`${API_URL}/analytics/all-user-no-response-applications`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data.totalNoResponseApplications;
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
}

export const fetchSuccessRate = async () => {

    try {
      const response = await fetch(`${API_URL}/analytics/all-user-success-rate`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log("Success Rate Data:", data);
      return data.successRate;
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
}
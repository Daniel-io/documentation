
// https://developers.hubspot.com/docs/api-reference/latest/cms/hubdb/rows/get-rows

const tableID = "23690361";
// const token = "pat-na1-5ac7a1fe...";

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const fetchHubDbRows = async () => {
  try {
    const response = await fetch(
      `https://api.hubapi.com/cms/v3/hubdb/tables/${tableID}/rows`,
      options
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status} — ${errorText}`);
    }

    const data = await response.json();
    console.log("HubDB Rows:", data);

    return data;
  } catch (error) {
    console.error("Error fetching HubDB rows:", error.message);
    throw error;
  }
};

fetchHubDbRows();
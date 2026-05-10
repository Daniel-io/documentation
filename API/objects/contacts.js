// https://developers.hubspot.com/docs/api-reference/latest/crm/objects/contacts/get-contacts
// const token = "pat-na1-5ac7a...;

const requestOptions = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const getContacts = async () => {
  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts?limit=10&properties=firstname,lastname,email",
      requestOptions
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status} — ${errorText}`);
    }

    const data = await response.json();
    console.log("Contacts:", data);

    return data;
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    throw error;
  }
};

getContacts();
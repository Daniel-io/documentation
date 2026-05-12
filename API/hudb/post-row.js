// https://developers.hubspot.com/docs/api-reference/latest/cms/hubdb/rows/create-row

const tableID = "102859958";
// const token = "pat-na1-5ac7a1fe-a..";


const options = {
  method: 'POST',
  headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
  body: JSON.stringify({
    values: {
      email: "Sasito@gmail.com",
      first_name: "Saso",
      last_name: "Sasa",
    }
  })
};


//TODO
const postHubDbRow = async () => {
  try {

    const response = await fetch(`https://api.hubapi.com/cms/hubdb/2026-03/tables/${tableID}/rows`, options);

    if(!response) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status} — ${errorText}`);
    }

    const data =  await response.json();
    console.log(`HubDB row created`, data)

  } catch (error) {
    console.error("Error fetching HubDB rows:", error.message);
    throw error;
  }
}

postHubDbRow();





// Simple variant
// fetch(`https://api.hubapi.com/cms/hubdb/2026-03/tables/${tableID}/rows`, options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

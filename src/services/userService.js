

export async function postRequest(apiUrl, requestData) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData)
      return (responseData);
    } catch (error) {
      console.error('Error making POST request:', error.message);
      return null;
    }
  }

export async function loginUser(loginCredentials) {
  console.log("login attempt")
  try {
    const response = await fetch('https://demo-api.ideabridge.lt/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginCredentials),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData)
    return (responseData);
  } catch (error) {
    console.error('Error making POST request:', error.message);
    return null;
  }
}
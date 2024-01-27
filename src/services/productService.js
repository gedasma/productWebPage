// export async function getInitialProductPage()
// {
//   console.log("getting initial product page")
//     try {
//         const response = await fetch('http://demo-api.ideabridge.lt/api/products/view/all');
//         let data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//       throw error;
//     }
// }

export async function getProductPage(pageNumber) {
    try {
        console.log(`getting product page ${pageNumber}`)
      const response = await fetch(`https://demo-api.ideabridge.lt/api/products/view/all?page=${pageNumber}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error during fetch: ${error.message}`);
    }
  }
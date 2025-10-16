export async function pageLoader (data, func) {
  try {
    await data();
    await func();

  } catch (error) {
    console.log(error)
    console.log("Something went wrong, please try again later");

  }
}
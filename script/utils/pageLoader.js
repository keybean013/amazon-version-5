export function pageLoader (func, data) {
  try {

    func();

  } catch (error) {

    console.log("Something went wrong, please try again later");

  }
}
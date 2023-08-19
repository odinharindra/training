const usersList = [
  "angel",
  "bubbles",
  "shimmer",
  "angelic",
  "bubbly",
  "glimmer",
  "baby",
  "pink",
  "little",
  "butterfly",
  "sparkly",
  "doll",
  "sweet",
  "sparkles",
  "dolly",
  "sweetie",
  "sprinkles",
  "lolly",
  "princess",
  "fairy",
  "honey",
  "snowflake",
  "pretty",
  "sugar",
  "cherub",
  "lovely",
  "blossom",
];
function insertUsers() {
  let usersListHtml = "";
  usersList.forEach((user) => {
    usersListHtml = usersListHtml + "<li>" + user + "</li>";
  });
  console.log("usersListHtml", usersListHtml);
  document.getElementById("user-list").innerHTML = usersListHtml;
}

function changePageHeading() {
  const pageHeading = document.getElementById("page_heading");
  pageHeading.innerHTML = "Javascript <strong>Introduction</strong> 🧑🏻‍💻";
}

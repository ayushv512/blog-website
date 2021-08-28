export const timeDifference = previous => {
  const current = new Date();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  //TODO: validation for singular
  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
};

export const assignColorToCategories = categories => {
  let categoriesColor = {};
  if (categories && Array.isArray(categories) && categories.length) {
    categoriesColor = categories.reduce((categoriesColor, curr_category) => {
      if (!categoriesColor.hasOwnProperty(curr_category.slug)) {
        categoriesColor[curr_category.slug] = {
          color: getRandomColor(),
        }
      }
      return categoriesColor;
    }, {})
  }

  return categoriesColor;
};

export const getRandomColor = () => {
  const rC = Math.floor(Math.random() * 256);
  const gC = Math.floor(Math.random() * 256);
  const bC = Math.floor(Math.random() * 256);
  const color = `rgb("${rC},${gC},${bC})`;

  return color;
};
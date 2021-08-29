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
          color: getColor(getStringHash(curr_category.name)),
        }
      }
      return categoriesColor;
    }, {})
  }

  return categoriesColor;
};

export const getStringHash = (categoryName) => {
  let hash = 0;
  let index;
  let characacter;
  if (categoryName.length === 0) {
    return hash
  };
  for (index = 0; index < categoryName.length; ++index) {
    characacter = categoryName.charCodeAt(index);
    hash = ((hash << 5) - hash) + characacter;
    hash |= 0;
  }

  return hash;
};

export const getColor = (hash) => {
  const rC = Math.floor(Math.abs(hash) * 3 % 256);
  const gC = Math.floor(Math.abs(hash) % 256);
  const bC = Math.floor(Math.abs(hash) * 2 % 256);
  const color = `rgb(${rC},${gC},${bC})`;

  return color;
};

export const formatDate = date => {
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const ordinal = (date) => (date > 20 || date < 10) ? ([false, "st", "nd", "rd"])[(date % 10)] || "th" : "th";
  const month = monthNames[new Date(date).getMonth()]
  const formattedDate = `${month} ${day + ordinal(new Date(date).getDate())},${year}`;

  return formattedDate;
};
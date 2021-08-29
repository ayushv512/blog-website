export const timeDifference = previous => {
  const current = new Date();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;
  let computedVal;

  if (elapsed < msPerMinute) {
    computedVal = Math.round(elapsed / 1000);
    return computedVal + (computedVal === 1 ? " second ago" : " seconds ago");
  } else if (elapsed < msPerHour) {
    computedVal = Math.round(elapsed / msPerMinute);
    return computedVal + (computedVal === 1 ? " minute ago" : " minutes ago");
  } else if (elapsed < msPerDay) {
    computedVal = Math.round(elapsed / msPerHour);
    return computedVal + (computedVal === 1 ? " hour ago" : " hours ago");
  } else if (elapsed < msPerMonth) {
    computedVal = Math.round(elapsed / msPerDay);
    return computedVal + (computedVal === 1 ? " day ago" : " days ago");
  } else if (elapsed < msPerYear) {
    computedVal = Math.round(elapsed / msPerMonth);
    return computedVal + (computedVal === 1 ? " month ago" : " months ago");
  } else {
    computedVal = Math.round(elapsed / msPerYear);
    return computedVal + (computedVal === 1 ? " year ago" : " years ago");
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
  const formattedDate = `${month} ${day + ordinal(new Date(date).getDate())}, ${year}`;

  return formattedDate;
};
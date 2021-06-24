import moment from "moment";

const activeMembership = function (membership) {
  if (membership) {
    return "Activa";
  } else {
    return "No activa";
  }
};
const date_Format = function (date) {
  moment.locale("es");
  return moment(date).format("LLLL");
};

const money_Format = function (money) {
  return `${"$" + money}`;
};

const capitalize = function (data) {
  if (data) {
    return data[0].toUpperCase() + data.substring(1);
  } else {
    return "";
  }
};
export { activeMembership, date_Format, money_Format, capitalize };

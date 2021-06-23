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
export { activeMembership, date_Format, money_Format };

let application;
export default function ({ app }, inject) {
  application = app;
  inject("methods", methods);
}
// methods definitions
const methods = {
  convertTime(date) {
    let x = Date.parse(date + "+00:00");
    return new Date(x);
  },
  toast(type, message) {
    switch (type) {
      case "error":
        // $toast("I'm a toast")
        // application.$toast("eror")
        // application.$toast.success("تست")
        // application.$toast.error(message, {
        //   position: "top-center",
        //   action: {
        //     text: "بستن",
        //     onClick: (e, toastObject) => {
        //       toastObject.goAway(0);
        //     },
        //   },
        // });
        break;
      case "success":
        application.$toast.success(message, {
          duration: 3000,
          position: "top-center",
          action: {
            text: "بستن",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
          //  icon: "mdi-check-circle"
        });
        break;
      default:
        application.$toast.show(message, {
          position: "top-center",
          action: {
            text: "بستن",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        });
        break;
    }
  },
};

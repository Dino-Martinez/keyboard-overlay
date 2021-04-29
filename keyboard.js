const keyboard = $("#keyboard");
const urls = {
  keyw: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keya: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keys: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keyd: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keye: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keyq: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  arrowdown: [
    "https://i.imgur.com/KSu24ix.png",
    "https://i.imgur.com/OlSXSVf.png"
  ],
  arrowleft: [
    "https://i.imgur.com/KSu24ix.png",
    "https://i.imgur.com/OlSXSVf.png"
  ],
  space: ["https://i.imgur.com/VMtaCpZ.png", "https://i.imgur.com/8aldxJn.png"]
};
const keys = [];

Object.keys(urls).forEach(key => {
  const imgs = urls[key];
  const img = $(`<img src=${imgs[0]} id="${key}-unpressed">`);
  const pressed = $(
    `<img src=${imgs[1]} id="${key}-pressed" style="display:none;">`
  );
  keys.push(img);
  keys.push(pressed);
});
console.log(keys);
keyboard.append(keys);

document.onkeydown = event => {
  const keycode = event.code.toLowerCase();
  if (urls[keycode]) {
    const unpressed = keys.filter(
      key => key.attr("id") === `${keycode}-unpressed`
    )[0];
    const pressed = keys.filter(
      key => key.attr("id") === `${keycode}-pressed`
    )[0];
    unpressed.css("display", "none");
    pressed.css("display", "block");
  }
};

document.onkeyup = event => {
  const keycode = event.code.toLowerCase();
  if (urls[keycode]) {
    const unpressed = keys.filter(
      key => key.attr("id") === `${keycode}-unpressed`
    )[0];
    const pressed = keys.filter(
      key => key.attr("id") === `${keycode}-pressed`
    )[0];
    unpressed.css("display", "block");
    pressed.css("display", "none");
  }
};

const keyboard = $("#keyboard");
const urls = {
  keyq: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keyw: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keye: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keya: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keys: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  keyd: ["https://i.imgur.com/pbjv4Co.png", "https://i.imgur.com/mpSOLvZ.png"],
  arrowdown: [
    "https://i.imgur.com/KSu24ix.png",
    "https://i.imgur.com/KYLPXaQ.png"
  ],
  arrowleft: [
    "https://i.imgur.com/KSu24ix.png",
    "https://i.imgur.com/KYLPXaQ.png"
  ],
  shiftleft: [
    "https://i.imgur.com/TjlZTPD.png",
    "https://i.imgur.com/VYj7WJq.png"
  ],
  space: ["https://i.imgur.com/VMtaCpZ.png", "https://i.imgur.com/yvgpSZw.png"]
};
const keys = [];
let count = 0;
Object.keys(urls).forEach(key => {
  const imgs = urls[key];
  let top = 0;
  let left = 0;
  if (count < 3) {
    left = 160 + (count % 3) * 135;
  } else if (count < 6) {
    top = 50;
    left = 190 + (count % 3) * 135;
  } else if (count < 8) {
    left = 25 / (1 - (count % 2));
    top = 50 * (count % 2);
  } else if (count < 9) {
    top = 100;
    left = 25;
  } else {
    top = 100;
    left = 225;
  }
  const img = $(
    `<img src=${imgs[0]} id="${key}-unpressed" style="position:absolute; top:${top}px;left:${left}px">`
  );
  const pressed = $(
    `<img src=${imgs[1]} id="${key}-pressed" style="display:none;filter: blur(5px); position:absolute; top:${top}px;left:${left}px">`
  );
  const layer = $(
    `<img src=${imgs[1]} id="${key}-layer" style="display:none;filter: blur(2px); position:absolute; top:${top}px;left:${left}px">`
  );
  const flat = $(
    `<img src=${imgs[1]} id="${key}-flat" style="display:none; position:absolute; top:${top}px;left:${left}px">`
  );
  keys.push(img);
  keys.push(pressed);
  keys.push(flat);
  keys.push(layer);
  count++;
});
console.log(keys);
keyboard.append(keys);

document.onkeydown = event => {
  const keycode = event.code.toLowerCase();
  console.log(keycode);
  if (urls[keycode]) {
    const unpressed = keys.filter(
      key => key.attr("id") === `${keycode}-unpressed`
    )[0];
    const pressed = keys.filter(
      key => key.attr("id") === `${keycode}-pressed`
    )[0];
    const layer = keys.filter(key => key.attr("id") === `${keycode}-layer`)[0];
    const flat = keys.filter(key => key.attr("id") === `${keycode}-flat`)[0];
    unpressed.css("display", "none");
    pressed.css("display", "block");
    flat.css("display", "block");
    layer.css("display", "block");
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
    const layer = keys.filter(key => key.attr("id") === `${keycode}-layer`)[0];
    const flat = keys.filter(key => key.attr("id") === `${keycode}-flat`)[0];
    unpressed.css("display", "block");
    pressed.css("display", "none");
    flat.css("display", "none");
    layer.css("display", "none");
  }
};

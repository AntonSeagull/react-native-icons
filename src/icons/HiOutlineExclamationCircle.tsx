import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "fill": "none",
    "viewBox": "0 0 24 24",
    "stroke-width": "1.5",
    "stroke": "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "d": "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

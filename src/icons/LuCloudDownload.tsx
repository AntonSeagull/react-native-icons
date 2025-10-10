import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M12 13v8l-4-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m12 21 4-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M4 12h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 18V6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 18V6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m17 12 3-2v8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

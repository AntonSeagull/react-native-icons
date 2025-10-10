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
        "d": "M12 6l0 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 12l-3 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.75 7.75l-2.15 -2.15"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

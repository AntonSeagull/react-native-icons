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
        "d": "M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 14h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 11l3 3l-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 3l6.9 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M10 20h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 2h4v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 2-5.46 5.46"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

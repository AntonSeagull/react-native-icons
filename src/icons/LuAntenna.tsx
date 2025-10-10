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
        "d": "M2 12 7 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m7 12 5-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m12 12 5-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m17 12 5-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4.5 7h15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

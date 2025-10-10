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
        "d": "m3 7 5 5-5 5V7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 7-5 5 5 5V7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 20v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 8v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 2v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

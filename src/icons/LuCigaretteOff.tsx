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
        "d": "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 8c0-2.5-2-2.5-2-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m2 2 20 20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 8c0-2.5-2-2.5-2-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 12v4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

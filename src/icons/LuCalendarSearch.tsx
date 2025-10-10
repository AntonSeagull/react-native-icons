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
        "d": "M16 2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 22-1.875-1.875"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 10h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 2v4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

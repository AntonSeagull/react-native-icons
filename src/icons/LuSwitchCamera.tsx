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
        "d": "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m18 22-3-3 3-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m6 2 3 3-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

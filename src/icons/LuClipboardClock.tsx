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
        "d": "M16 14v2.2l1.6 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 4h2a2 2 0 0 1 2 2v.832"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "m19 3 1 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m20 2-4.5 4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

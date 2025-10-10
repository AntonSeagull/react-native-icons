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
        "d": "M13 16h-7a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 18h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 15v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

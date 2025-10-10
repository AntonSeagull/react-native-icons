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
        "d": "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12h12l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15l3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

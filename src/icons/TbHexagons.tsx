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
        "d": "M4 18v-5l4 -2l4 2v5l-4 2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 11v-5l4 -2l4 2v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 13l4 -2l4 2v5l-4 2l-4 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

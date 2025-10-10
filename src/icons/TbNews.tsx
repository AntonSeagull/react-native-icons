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
        "d": "M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 8l4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12l4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 16l4 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

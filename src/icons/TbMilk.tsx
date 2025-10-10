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
        "d": "M8 6h8v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1v2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v8.071a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l1.094 -1.759"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 10h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

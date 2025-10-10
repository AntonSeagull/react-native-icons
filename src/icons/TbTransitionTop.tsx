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
        "d": "M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 10l3 -3l3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

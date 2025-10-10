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
        "d": "M8 3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12v6a3 3 0 0 0 6 0v-6h-6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 5h8l-1 4h-6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17v1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

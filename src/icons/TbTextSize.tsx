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
        "d": "M3 7v-2h13v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 5v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 19h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 13v-1h6v1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 12v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 19h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

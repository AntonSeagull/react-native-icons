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
        "d": "M11 20h-.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 20h-.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 20h-.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 7l3 -3l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 20v-16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M2 17h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 17h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 11h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 11v-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

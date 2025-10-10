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
        "d": "M4 3h-1v18h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 21h1v-18h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 9v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

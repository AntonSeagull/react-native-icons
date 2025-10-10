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
        "d": "M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 11v1.75c-.001 1.11 .661 2.206 1 3.25"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 14.25c.068 .58 .358 1.186 .5 1.75"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 8v-2a2 2 0 0 1 2 -2h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 16v2a2 2 0 0 0 2 2h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 4h2a2 2 0 0 1 2 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 20h2a2 2 0 0 0 2 -2v-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 6h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 18h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 13c0 1.105 .672 2 1.5 2s1.5 -.895 1.5 -2v-2c0 -1.105 -.672 -2 -1.5 -2s-1.5 .895 -1.5 2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

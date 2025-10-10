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
        "d": "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 3v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 3v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 11h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 14l2 2h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 18l2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16a3 3 0 1 0 2 5.236"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

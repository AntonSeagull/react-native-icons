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
        "d": "M12 3v18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 7c-.633 -1.255 -1.538 -2 -2.5 -2c-1.933 0 -3.5 3.134 -3.5 7s1.567 7 3.5 7s3.5 -3.134 3.5 -7v-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 7c.633 -1.255 1.538 -2 2.5 -2c1.933 0 3.5 3.134 3.5 7s-1.567 7 -3.5 7s-3.5 -3.134 -3.5 -7v-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 13l2 -2l2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 13l2 -2l2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

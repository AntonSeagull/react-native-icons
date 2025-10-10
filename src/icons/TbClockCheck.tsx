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
        "d": "M20.942 13.021a9 9 0 1 0 -9.407 7.967"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7v5l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 19l2 2l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

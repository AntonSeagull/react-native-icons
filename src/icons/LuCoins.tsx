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
        "d": "M18.09 10.37A6 6 0 1 1 10.34 18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 6h1v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m16.71 13.88.7.71-2.82 2.82"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 4l3 3l-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 7h5l7 10h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 20l3 -3l-3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

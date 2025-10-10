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
        "d": "M21 17h-8l-3.5 -5h-6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 7h-8l-3.495 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 10l3 -3l-3 -3"
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

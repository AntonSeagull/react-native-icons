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
        "d": "M16 5h-8v10h8m-1 -5h-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 20l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 20l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 20l0 .01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

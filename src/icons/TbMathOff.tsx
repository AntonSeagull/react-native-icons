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
        "d": "M14 19l2.5 -2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18.5 14.5l1.5 -1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 5h-7l-.646 2.262"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10.448 10.431l-2.448 8.569l-3 -6h-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

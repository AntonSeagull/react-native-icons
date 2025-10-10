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
        "d": "m14 5 3-3 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m14 10 3-3 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 14V2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 14H7l-5 8h20Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 14v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9 14 5 8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M10.5 5H19a2 2 0 0 1 2 2v8.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 11h-.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m2 2 20 20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 11h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 15h2.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18h6a2 2 0 0 0 2 -2v-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 14l3 -3l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 4l4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 8l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

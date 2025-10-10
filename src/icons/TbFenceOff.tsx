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
        "d": "M12 12h-8v4h12m4 0v-4h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 16v4h4v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12v-2m0 -4l-2 -2m-2 2v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 16v4h4v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 12v-6l-2 -2l-2 2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

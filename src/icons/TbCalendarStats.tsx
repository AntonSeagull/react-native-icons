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
        "d": "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 14v4h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 3v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 3v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 11h16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

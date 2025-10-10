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
        "d": "M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 20h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 7v1a1 1 0 0 0 1 1h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 11h7"
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

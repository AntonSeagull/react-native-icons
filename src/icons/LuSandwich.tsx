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
        "d": "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

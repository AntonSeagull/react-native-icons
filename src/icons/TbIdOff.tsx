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
        "d": "M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455 .279 -.99 .439 -1.563 .439h-12a3 3 0 0 1 -3 -3v-10c0 -1.083 .573 -2.031 1.433 -2.559"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.175 8.178a2 2 0 1 0 2.646 2.65"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 8h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 12h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 16h9"
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

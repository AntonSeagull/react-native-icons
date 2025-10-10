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
        "d": "M11 21l-1 -4l-2 -3v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 14l-1 -3l4 -3l3 2l3 .5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17l-2 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

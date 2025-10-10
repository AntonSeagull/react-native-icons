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
        "d": "M3 21l18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 21v-4a2 2 0 0 1 4 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 5l4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3l0 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 21v-7m-2 2l8 -8l8 8m-2 -2v7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M14 3l6 4v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 17l-6 4l-6 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 14v-7l6 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 7l8 5v9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 7l-8 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

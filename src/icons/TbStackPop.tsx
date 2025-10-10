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
        "d": "M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 15l8 4l8 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 11v-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 7l3 -3l3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

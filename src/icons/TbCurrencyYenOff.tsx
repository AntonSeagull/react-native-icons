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
        "d": "M12 19v-7m5 -7l-3.328 4.66"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 17h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 13h5"
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

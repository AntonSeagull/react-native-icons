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
        "d": "M3 12h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 21v-18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.5 7.5l9 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.5 16.5l9 -9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 10h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16l3 3l-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.005 15h.005"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 15h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

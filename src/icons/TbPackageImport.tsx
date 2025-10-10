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
        "d": "M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12l8 -4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12v9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12l-8 -4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 18h-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15l-3 3l3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

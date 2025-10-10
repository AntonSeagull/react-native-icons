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
        "d": "M9 20h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 20v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676"
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

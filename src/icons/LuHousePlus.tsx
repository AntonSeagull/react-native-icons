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
        "d": "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 18h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

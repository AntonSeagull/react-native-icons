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
        "d": "M2 12h20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m4 8 16-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M12.442 20.876a13.12 13.12 0 0 1 -.442 .124a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .119 6.336"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 22v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 19l-3 -3l-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M2 12l10 7.422l10 -7.422"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 9l5 4l5 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 6l1 .8l1 -.8l-1 -.8z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

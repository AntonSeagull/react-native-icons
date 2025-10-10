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
        "d": "M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 21v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12v.01"
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

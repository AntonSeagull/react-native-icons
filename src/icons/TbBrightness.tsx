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
        "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3l0 18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 9l4.65 -4.65"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14.3l7.37 -7.37"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 19.6l8.85 -8.85"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

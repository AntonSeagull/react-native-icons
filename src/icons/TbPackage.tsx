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
        "d": "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"
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
        "d": "M12 12l0 9"
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
        "d": "M16 5.25l-8 4.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

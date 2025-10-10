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
        "d": "M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3l0 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12l2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 19l0 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 12l2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

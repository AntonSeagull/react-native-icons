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
        "d": "M7 20l10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 6l6 -1l6 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3l0 17"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

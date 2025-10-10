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
        "d": "M12 11v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 13h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 6v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 6v14"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

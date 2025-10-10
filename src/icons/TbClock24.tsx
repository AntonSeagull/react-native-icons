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
        "d": "M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15v2a1 1 0 0 0 1 1h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

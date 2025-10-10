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
        "d": "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 10h-.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 10h-.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 15h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 14v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 14v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

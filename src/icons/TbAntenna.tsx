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
        "d": "M20 4v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 4.5v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 5v16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 5.5v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 6v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 8h-16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 20v2"
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
        "d": "M12 8v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 2v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

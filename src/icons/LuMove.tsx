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
        "d": "M12 2v20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m15 19-3 3-3-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m19 9 3 3-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 12h20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m5 9-3 3 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9 5 3-3 3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

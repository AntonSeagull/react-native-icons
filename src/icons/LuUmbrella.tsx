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
        "d": "M12 13v7a2 2 0 0 0 4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

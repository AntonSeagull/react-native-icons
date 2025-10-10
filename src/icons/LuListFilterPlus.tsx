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
        "d": "M12 5H2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 12h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 19h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 5h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 8V2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M7 3.34V5a3 3 0 0 0 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 2a10 10 0 1 0 9.54 13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 6V4a2 2 0 1 0-4 0v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

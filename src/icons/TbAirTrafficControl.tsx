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
        "d": "M11 3h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6a2 2 0 0 1 -1.916 1.425h-8.404a2 2 0 0 1 -1.916 -1.425l-1.8 -6a2 2 0 0 1 1.916 -2.575z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.5 6l1.5 10v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15.5 6l-1.5 10v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

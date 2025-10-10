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
        "d": "M3 12a9 3 0 0 0 5 2.69"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 9.3V5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 5v14a9 3 0 0 0 6.47 2.88"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12v4h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

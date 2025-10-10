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
        "d": "M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 4l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 4l-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 20l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 20l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

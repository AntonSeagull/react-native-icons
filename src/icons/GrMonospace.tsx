import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M11.88,17H9.58L8.65,14.1H4.44L3.57,17H1.32L5.41,4.17H7.66ZM8,11.93,6.52,7.17,5.09,11.93Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.13,17,12.22,4.17h1.66L15.07,13l1.46-8.82h1.92l1.4,9,1.23-9h1.62L20.78,17H19.06l-1.6-9.6L15.88,17Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

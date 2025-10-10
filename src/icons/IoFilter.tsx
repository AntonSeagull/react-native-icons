import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

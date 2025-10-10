import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M32,112a16,16,0,0,0-16,16V384a16,16,0,0,0,16,16H320a15.89,15.89,0,0,0,9.34-3l-285-285Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M336,208V128a16,16,0,0,0-16-16H179.63L425.07,357.44,496,400V112Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

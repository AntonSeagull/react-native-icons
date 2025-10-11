

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiWinamp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11.902 0a.987.987 0 0 0-.91.604l-6.139 14.57c-.176.42.131.883.586.883H8.66a.987.987 0 0 0 .91-.604L15.707.883A.636.636 0 0 0 15.12 0h-3.219Zm3.438 7.943a.987.987 0 0 0-.91.604l-6.137 14.57c-.177.42.13.883.586.883h3.219a.987.987 0 0 0 .91-.604l6.138-14.57a.636.636 0 0 0-.586-.883h-3.22Z" />
        </G>
      </Svg>
    );
  }


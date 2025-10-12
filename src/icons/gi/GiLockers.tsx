

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiLockers = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M25 73v414h142V73H25zm160 0v414h142V73H185zm160 0v414h142V73H345zM39 112h18v23h78v-23h18v41H39v-41zm160 0h18v23h78v-23h18v41H199v-41zm160 0h18v23h78v-23h18v41H359v-41zM39 176h18v23h78v-23h18v41H39v-41zm160 0h18v23h78v-23h18v41H199v-41zm160 0h18v23h78v-23h18v41H359v-41zM64 279c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm160 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm160 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zM64 297c-3.97 0-7 3-7 7s3.03 7 7 7 7-3 7-7-3.03-7-7-7zm160 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm160 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zM48 407h96v18H48v-18zm160 0h96v18h-96v-18zm160 0h96v18h-96v-18zM48 441h96v18H48v-18zm160 0h96v18h-96v-18zm160 0h96v18h-96v-18z" />
        </G>
      </Svg>
    );
  }


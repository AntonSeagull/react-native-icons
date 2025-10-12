

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscChip = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M5 1H6V3H7V1H8V3H9V1H10V3H11L12 4V5L14 5V6H12V7L14 7V8H12V9L14 9V10H12V11L11 12H10V14H9V12H8V14H7V12H6V14H5V12H4L3 11L3 10H1V9L3 9L3 8H1V7L3 7L3 6H1V5L3 5L3 4L4 3H5L5 1ZM4 11H11V4L4 4L4 11Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }


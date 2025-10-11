

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAnalyzeOff = (props: IconProps) => {

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
          <Path  d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.086 8.086 0 0 0 -4.31 .62m-2.383 1.608a8.089 8.089 0 0 0 -1.326 1.69" />
          <Path  d="M4 13a8.1 8.1 0 0 0 13.687 4.676" />
          <Path  d="M20 16a1 1 0 0 0 -1 -1" />
          <Path  d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M9.888 9.87a3 3 0 1 0 4.233 4.252m.595 -3.397a3.012 3.012 0 0 0 -1.426 -1.435" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


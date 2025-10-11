

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBracketsAngleOff = (props: IconProps) => {

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
          <Path  d="M8 4h.01" />
          <Path  d="M6.453 6.474l-3.453 5.526l5 8" />
          <Path  d="M16 4l5 8l-1.917 3.067" />
          <Path  d="M17.535 17.544l-1.535 2.456" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLollipop = (props: IconProps) => {

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
          <Path  d="M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <Path  d="M21 10a3.5 3.5 0 0 0 -7 0" />
          <Path  d="M14 10a3.5 3.5 0 0 1 -7 0" />
          <Path  d="M14 17a3.5 3.5 0 0 0 0 -7" />
          <Path  d="M14 3a3.5 3.5 0 0 0 0 7" />
          <Path  d="M3 21l6 -6" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEditCircleOff = (props: IconProps) => {

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
          <Path  d="M10.507 10.498l-1.507 1.502v3h3l1.493 -1.498m2 -2.01l4.89 -4.907a2.1 2.1 0 0 0 -2.97 -2.97l-4.913 4.896" />
          <Path  d="M16 5l3 3" />
          <Path  d="M7.476 7.471a7 7 0 0 0 2.524 13.529a7 7 0 0 0 6.53 -4.474" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHelicopter = (props: IconProps) => {

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
          <Path  d="M3 10l1 2h6" />
          <Path  d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
          <Path  d="M13 9l0 -3" />
          <Path  d="M5 6l15 0" />
          <Path  d="M15 9.1v3.9h5.5" />
          <Path  d="M15 19l0 -3" />
          <Path  d="M19 19l-8 0" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiOutlineArrowTurnLeftDown = (props: IconProps) => {

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
          <Path  d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    );
  }


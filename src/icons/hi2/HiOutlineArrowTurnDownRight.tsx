

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiOutlineArrowTurnDownRight = (props: IconProps) => {

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
          <Path  d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    );
  }


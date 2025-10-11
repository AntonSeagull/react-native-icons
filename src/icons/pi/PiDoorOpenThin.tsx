

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDoorOpenThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M232,220H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V220H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM196,40V220H172V36h20A4,4,0,0,1,196,40ZM60,40a4,4,0,0,1,4-4H164V220H60Zm80,92a8,8,0,1,1-8-8A8,8,0,0,1,140,132Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSkipForwardBold = (props: IconProps) => {

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
          <Path  d="M200,28a12,12,0,0,0-12,12v62l-113.45-71A20,20,0,0,0,44,47.88V208.12A20,20,0,0,0,74.55,225L188,154v62a12,12,0,0,0,24,0V40A12,12,0,0,0,200,28ZM68,200.73V55.27L184.3,128Z" />
        </G>
      </Svg>
    );
  }


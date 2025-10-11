

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSecurityUpdate = (props: IconProps) => {

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
          <Path  d="M0,0h24v24H0V0z" fill="none" />
          <Path  d="M5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H7C5.9,1,5,1.9,5,3z M17,18H7V6h10V18z M16,12h-3V8h-2v4H8 l4,4L16,12z" />
        </G>
      </Svg>
    );
  }


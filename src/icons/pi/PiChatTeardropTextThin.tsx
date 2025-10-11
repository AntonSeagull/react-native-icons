

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChatTeardropTextThin = (props: IconProps) => {

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
          <Path  d="M168,112a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h68A4,4,0,0,1,168,112Zm-4,28H96a4,4,0,0,0,0,8h68a4,4,0,0,0,0-8Zm64-16a96.11,96.11,0,0,1-96,96H48a12,12,0,0,1-12-12V124a96,96,0,0,1,192,0Zm-8,0a88,88,0,0,0-176,0v84a4,4,0,0,0,4,4h84A88.1,88.1,0,0,0,220,124Z" />
        </G>
      </Svg>
    );
  }


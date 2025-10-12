

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineFlashlightOn = (props: IconProps) => {

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
          
          <Circle  cx="12" cy="14" r="1.5" />
          <Path  d="M18,2H6v6l2,3v11h8V11l2-3V2z M16,4v1H8V4H16z M14,10.4V20h-4v-9.61l-2-3V7h8v0.39L14,10.4z" />
        </G>
      </Svg>
    );
  }


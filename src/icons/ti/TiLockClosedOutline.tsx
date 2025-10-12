

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiLockClosedOutline = (props: IconProps) => {

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
          <Circle  cx="12" cy="17" r="1.3" />
          <Path  d="M17 10h-1v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-7-2c0-1.104.896-2 2-2s2 .896 2 2v3h-4v-3zm7 11h-10v-7h10.003l-.003 7z" />
        </G>
      </Svg>
    );
  }


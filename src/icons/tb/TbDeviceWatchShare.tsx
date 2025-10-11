

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceWatchShare = (props: IconProps) => {

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
          <Path  d="M12.5 18h-3.5a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
          <Path  d="M9 18v3h3" />
          <Path  d="M9 6v-3h6v3" />
          <Path  d="M16 22l5 -5" />
          <Path  d="M21 21.5v-4.5h-4.5" />
        </G>
      </Svg>
    );
  }


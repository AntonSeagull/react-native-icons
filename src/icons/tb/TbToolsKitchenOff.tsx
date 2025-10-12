

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbToolsKitchenOff = (props: IconProps) => {

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
          <Path  d="M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874" />
          <Path  d="M7 18h2v3h-2z" />
          <Path  d="M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1" />
          <Path  d="M20 15v1m0 4v1h-1v-2" />
          <Path  d="M8 12v6" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


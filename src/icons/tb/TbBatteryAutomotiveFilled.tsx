

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBatteryAutomotiveFilled = (props: IconProps) => {

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
          <Path  d="M18 2a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3v-1a1 1 0 1 1 2 0v1h10v-1a1 1 0 0 1 1 -1m-2 7.5a1 1 0 0 0 -1 1v.5h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0v-.5h.5a1 1 0 0 0 0 -2h-.5v-.5a1 1 0 0 0 -1 -1m-6.5 1.5h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0 -2" />
        </G>
      </Svg>
    );
  }


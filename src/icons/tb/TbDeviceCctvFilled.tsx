

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceCctvFilled = (props: IconProps) => {

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
          <Path  d="M20 8v6a8 8 0 1 1 -16 0v-6zm-8 2a4 4 0 0 0 -3.996 3.826l-.004 .174a4 4 0 1 0 4 -4m.01 3a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm-10.01 -8v-1a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2" />
        </G>
      </Svg>
    );
  }


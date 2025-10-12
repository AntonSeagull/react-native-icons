

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTowerControl = (props: IconProps) => {

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
          <Path  d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
          <Path  d="M8 13v9" />
          <Path  d="M16 22v-9" />
          <Path  d="m9 6 1 7" />
          <Path  d="m15 6-1 7" />
          <Path  d="M12 6V2" />
          <Path  d="M13 2h-2" />
        </G>
      </Svg>
    );
  }


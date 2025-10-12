

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAxisY = (props: IconProps) => {

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
          <Path  d="M11 20h-.01" />
          <Path  d="M15 20h-.01" />
          <Path  d="M19 20h-.01" />
          <Path  d="M4 7l3 -3l3 3" />
          <Path  d="M7 20v-16" />
        </G>
      </Svg>
    );
  }


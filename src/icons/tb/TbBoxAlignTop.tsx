

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxAlignTop = (props: IconProps) => {

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
          <Path  d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />
          <Path  d="M4 15.005v-.01" />
          <Path  d="M4 20.005v-.01" />
          <Path  d="M9 20.005v-.01" />
          <Path  d="M15 20.005v-.01" />
          <Path  d="M20 20.005v-.01" />
          <Path  d="M20 15.005v-.01" />
        </G>
      </Svg>
    );
  }


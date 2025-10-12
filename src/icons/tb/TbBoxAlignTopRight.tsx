

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxAlignTopRight = (props: IconProps) => {

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
          <Path  d="M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1z" />
          <Path  d="M20 15.01v-.01" />
          <Path  d="M20 20.01v-.01" />
          <Path  d="M15 20.01v-.01" />
          <Path  d="M9 20.01v-.01" />
          <Path  d="M9 4.01v-.01" />
          <Path  d="M4 20.01v-.01" />
          <Path  d="M4 15.01v-.01" />
          <Path  d="M4 9.01v-.01" />
          <Path  d="M4 4.01v-.01" />
        </G>
      </Svg>
    );
  }


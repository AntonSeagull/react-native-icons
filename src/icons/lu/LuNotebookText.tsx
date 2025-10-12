

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNotebookText = (props: IconProps) => {

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
          <Path  d="M2 6h4" />
          <Path  d="M2 10h4" />
          <Path  d="M2 14h4" />
          <Path  d="M2 18h4" />
          <Path  d="M9.5 8h5" />
          <Path  d="M9.5 12H16" />
          <Path  d="M9.5 16H14" />
        </G>
      </Svg>
    );
  }


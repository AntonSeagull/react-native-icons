

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderRight = (props: IconProps) => {

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
          <Path  d="M8 16V8H15V5L5 5L5 19H15L15 16H8Z" fill="currentColor" fillOpacity="0.3" />
          <Path  d="M17 19L17 5L20 5L20 19H17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCaseLower = (props: IconProps) => {

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
          <Circle  cx="17.5" cy="12.5" r="3.5" />
          <Circle  cx="6.5" cy="12.5" r="3.5" />
          <Path  d="M10 9v7" />
          <Path  d="M14 6v10" />
        </G>
      </Svg>
    );
  }


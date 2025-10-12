

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandPnpm = (props: IconProps) => {

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
          <Path  d="M3 17h4v4h-4z" />
          <Path  d="M10 17h4v4h-4z" />
          <Path  d="M17 17h4v4h-4z" />
          <Path  d="M17 10h4v4h-4z" />
          <Path  d="M17 3h4v4h-4z" />
          <Path  d="M10 10h4v4h-4z" />
          <Path  d="M10 3h4v4h-4z" />
          <Path  d="M3 3h4v4h-4z" />
        </G>
      </Svg>
    );
  }


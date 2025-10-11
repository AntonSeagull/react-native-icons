

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandGraphql = (props: IconProps) => {

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
          <Path  d="M4 8l8 -5l8 5v8l-8 5l-8 -5z" />
          <Path  d="M12 4l7.5 12h-15z" />
          <Path  d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        </G>
      </Svg>
    );
  }


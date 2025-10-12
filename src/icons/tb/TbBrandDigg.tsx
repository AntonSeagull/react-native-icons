

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDigg = (props: IconProps) => {

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
          <Path  d="M6 15h-3v-4h3" />
          <Path  d="M15 15h-3v-4h3" />
          <Path  d="M9 15v-4" />
          <Path  d="M15 11v7h-3" />
          <Path  d="M6 7v8" />
          <Path  d="M21 15h-3v-4h3" />
          <Path  d="M21 11v7h-3" />
        </G>
      </Svg>
    );
  }


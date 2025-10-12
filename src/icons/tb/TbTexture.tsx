

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTexture = (props: IconProps) => {

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
          <Path  d="M6 3l-3 3" />
          <Path  d="M21 18l-3 3" />
          <Path  d="M11 3l-8 8" />
          <Path  d="M16 3l-13 13" />
          <Path  d="M21 3l-18 18" />
          <Path  d="M21 8l-13 13" />
          <Path  d="M21 13l-8 8" />
        </G>
      </Svg>
    );
  }


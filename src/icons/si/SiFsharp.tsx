

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiFsharp = (props: IconProps) => {

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
          <Path  d="M0 12 11.39.61v5.695L5.695 12l5.695 5.695v5.695L0 12zm7.322 0 4.068-4.068v8.136L7.322 12zM24 12 12.203.61v5.695L17.898 12l-5.695 5.695v5.695L24 12z" />
        </G>
      </Svg>
    );
  }


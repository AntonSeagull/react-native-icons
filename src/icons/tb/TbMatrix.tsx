

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMatrix = (props: IconProps) => {

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
          <Path  d="M8 16h.013" />
          <Path  d="M12.01 16h.005" />
          <Path  d="M16.015 16h.005" />
          <Path  d="M16.015 12h.005" />
          <Path  d="M8.01 12h.005" />
          <Path  d="M12.01 12h.005" />
          <Path  d="M16.02 8h.005" />
          <Path  d="M8.015 8h.005" />
          <Path  d="M12.015 8h.005" />
          <Path  d="M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1" />
          <Path  d="M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1" />
        </G>
      </Svg>
    );
  }


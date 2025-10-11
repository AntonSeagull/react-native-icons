

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbH5 = (props: IconProps) => {

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
          <Path  d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" />
          <Path  d="M4 6v12" />
          <Path  d="M12 6v12" />
          <Path  d="M11 18h2" />
          <Path  d="M3 18h2" />
          <Path  d="M4 12h8" />
          <Path  d="M3 6h2" />
          <Path  d="M11 6h2" />
        </G>
      </Svg>
    );
  }


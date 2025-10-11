

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandBlender = (props: IconProps) => {

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
          <Path  d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
          <Path  d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M3 16l9 -6.5" />
          <Path  d="M6 9h9" />
          <Path  d="M13 5l5.65 5" />
        </G>
      </Svg>
    );
  }


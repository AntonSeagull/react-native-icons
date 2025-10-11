

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandHbo = (props: IconProps) => {

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
          <Path  d="M2 16v-8" />
          <Path  d="M6 8v8" />
          <Path  d="M2 12h4" />
          <Path  d="M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8z" />
          <Path  d="M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
          <Path  d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </G>
      </Svg>
    );
  }


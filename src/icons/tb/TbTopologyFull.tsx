

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTopologyFull = (props: IconProps) => {

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
          <Path  d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M6 8v8" />
          <Path  d="M18 16v-8" />
          <Path  d="M8 6h8" />
          <Path  d="M16 18h-8" />
          <Path  d="M7.5 7.5l9 9" />
          <Path  d="M7.5 16.5l9 -9" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStopwatch = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z" />
          <Path d="M14.5 10.5l-2.5 2.5" />
          <Path d="M17 8l1 -1" />
          <Path d="M14 3h-4" />
        </G>
      </Svg>
    );
  }


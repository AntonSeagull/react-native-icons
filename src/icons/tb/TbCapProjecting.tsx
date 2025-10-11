

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCapProjecting = (props: IconProps) => {

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
          <Path d="M20 6h-13a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h13" />
          <Path d="M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
          <Path d="M13 12h7" />
        </G>
      </Svg>
    );
  }


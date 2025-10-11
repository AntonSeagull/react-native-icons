

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiRepeat = (props: IconProps) => {

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
          <Path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <Path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </G>
      </Svg>
    );
  }


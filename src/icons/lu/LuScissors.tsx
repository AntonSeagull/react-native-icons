

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuScissors = (props: IconProps) => {

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
          <Path d="M8.12 8.12 12 12" />
          <Path d="M20 4 8.12 15.88" />
          <Path d="M14.8 14.8 20 20" />
        </G>
      </Svg>
    );
  }


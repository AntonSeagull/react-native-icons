

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPilcrowLeft = (props: IconProps) => {

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
          <Path d="M14 3v11" />
          <Path d="M14 9h-3a3 3 0 0 1 0-6h9" />
          <Path d="M18 3v11" />
          <Path d="M22 18H2l4-4" />
          <Path d="m6 22-4-4" />
        </G>
      </Svg>
    );
  }


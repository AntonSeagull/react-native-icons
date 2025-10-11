

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBinary = (props: IconProps) => {

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
          <Path d="M6 20h4" />
          <Path d="M14 10h4" />
          <Path d="M6 14h2v6" />
          <Path d="M14 4h2v6" />
        </G>
      </Svg>
    );
  }


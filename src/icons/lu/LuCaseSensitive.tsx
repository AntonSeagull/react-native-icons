

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCaseSensitive = (props: IconProps) => {

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
          <Path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
          <Path d="M22 9v7" />
          <Path d="M3.304 13h6.392" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAntennaBarsOff = (props: IconProps) => {

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
          <Path d="M6 18v-3" />
          <Path d="M10 18v-6" />
          <Path d="M14 18v-4" />
          <Path d="M14 10v-1" />
          <Path d="M18 14v-8" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


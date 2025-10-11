

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAi = (props: IconProps) => {

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
          <Path d="M8 16v-6a2 2 0 1 1 4 0v6" />
          <Path d="M8 13h4" />
          <Path d="M16 8v8" />
        </G>
      </Svg>
    );
  }


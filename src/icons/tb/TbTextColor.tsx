

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextColor = (props: IconProps) => {

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
          <Path d="M9 15v-7a3 3 0 0 1 6 0v7" />
          <Path d="M9 11h6" />
          <Path d="M5 19h14" />
        </G>
      </Svg>
    );
  }


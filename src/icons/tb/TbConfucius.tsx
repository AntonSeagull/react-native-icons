

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbConfucius = (props: IconProps) => {

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
          <Path d="M9 19l3 2v-18" />
          <Path d="M4 10l8 -2" />
          <Path d="M4 18l8 -10" />
          <Path d="M20 18l-8 -8l8 -4" />
        </G>
      </Svg>
    );
  }


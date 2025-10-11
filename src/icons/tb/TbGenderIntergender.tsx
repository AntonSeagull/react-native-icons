

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderIntergender = (props: IconProps) => {

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
          <Path d="M13.5 11.5l6.5 6.5v-4" />
          <Path d="M11.5 13.5l6.5 6.5" />
          <Path d="M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
          <Path d="M14 20l2 -2" />
        </G>
      </Svg>
    );
  }


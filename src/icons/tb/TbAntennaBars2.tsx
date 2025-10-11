

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAntennaBars2 = (props: IconProps) => {

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
          <Path d="M6 18l0 -3" />
          <Path d="M10 18l0 .01" />
          <Path d="M14 18l0 .01" />
          <Path d="M18 18l0 .01" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZodiacPisces = (props: IconProps) => {

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
          <Path d="M5 3a21 21 0 0 1 0 18" />
          <Path d="M19 3a21 21 0 0 0 0 18" />
          <Path d="M5 12l14 0" />
        </G>
      </Svg>
    );
  }


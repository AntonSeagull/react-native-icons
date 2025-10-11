

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLineHeight = (props: IconProps) => {

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
          <Path d="M3 8l3 -3l3 3" />
          <Path d="M3 16l3 3l3 -3" />
          <Path d="M6 5l0 14" />
          <Path d="M13 6l7 0" />
          <Path d="M13 12l7 0" />
          <Path d="M13 18l7 0" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRegexOff = (props: IconProps) => {

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
          <Path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" />
          <Path d="M17 7.875l3 -1.687" />
          <Path d="M17 7.875v3.375" />
          <Path d="M17 7.875l-3 -1.687" />
          <Path d="M17 7.875l3 1.688" />
          <Path d="M17 4.5v3.375" />
          <Path d="M17 7.875l-3 1.688" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


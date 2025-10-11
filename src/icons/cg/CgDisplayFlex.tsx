

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDisplayFlex = (props: IconProps) => {

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
          <Path d="M6 17V7H8V17H6Z" fill="currentColor" />
          <Path d="M16 7V17H18V7H16Z" fill="currentColor" />
          <Path d="M2 3H22V21H2V3ZM4 5V19H20V5H4Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }


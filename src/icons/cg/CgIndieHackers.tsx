

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgIndieHackers = (props: IconProps) => {

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
          <Path d="M4 6H7V18H4V6Z" fill="currentColor" />
          <Path d="M10 6H13V10.5H17V6H20V18H17V13.5H13V18H10V6Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZzzOff = (props: IconProps) => {

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
          <Path d="M4 12h6l-6 8h6" />
          <Path d="M14 4h6l-5.146 6.862m1.146 1.138h4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


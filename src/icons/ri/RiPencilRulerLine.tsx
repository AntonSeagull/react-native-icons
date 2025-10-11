

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiPencilRulerLine = (props: IconProps) => {

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
          <Path d="M5 8V20H9V8H5ZM3 7L7 2L11 7V22H3V7ZM19 16V14H16V12H19V10H17V8H19V6H15V20H19V18H17V16H19ZM14 4H20C20.5523 4 21 4.44772 21 5V21C21 21.5523 20.5523 22 20 22H14C13.4477 22 13 21.5523 13 21V5C13 4.44772 13.4477 4 14 4Z" />
        </G>
      </Svg>
    );
  }


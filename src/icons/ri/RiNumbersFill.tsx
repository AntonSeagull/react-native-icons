

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiNumbersFill = (props: IconProps) => {

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
          <Path d="M9 18H4V10H9V18ZM15 18H10V6H15V18ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z" />
        </G>
      </Svg>
    );
  }


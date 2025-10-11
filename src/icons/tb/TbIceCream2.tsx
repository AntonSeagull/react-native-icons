

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIceCream2 = (props: IconProps) => {

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
          <Path d="M17.657 11a6 6 0 1 0 -11.315 0" />
          <Path d="M6.342 11l5.658 11l5.657 -11z" />
        </G>
      </Svg>
    );
  }


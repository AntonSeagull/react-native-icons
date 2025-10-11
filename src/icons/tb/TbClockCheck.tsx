

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClockCheck = (props: IconProps) => {

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
          <Path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
          <Path d="M12 7v5l3 3" />
          <Path d="M15 19l2 2l4 -4" />
        </G>
      </Svg>
    );
  }


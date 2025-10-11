

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathAvg = (props: IconProps) => {

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
          <Path d="M3 21l18 -18" />
          <Path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
        </G>
      </Svg>
    );
  }


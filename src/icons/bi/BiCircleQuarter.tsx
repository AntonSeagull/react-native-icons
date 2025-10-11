

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiCircleQuarter = (props: IconProps) => {

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
          <Path d="M12 2h-1v11h11v-1A10 10 0 0 0 12 2zm1 9V4.06A8 8 0 0 1 19.94 11z" />
        </G>
      </Svg>
    );
  }


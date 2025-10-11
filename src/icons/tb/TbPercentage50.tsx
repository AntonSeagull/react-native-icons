

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPercentage50 = (props: IconProps) => {

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
          <Path d="M12 21a9 9 0 0 0 0 -18m0 0v18" fill="currentColor" />
          <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        </G>
      </Svg>
    );
  }


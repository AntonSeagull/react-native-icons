

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPercentage66 = (props: IconProps) => {

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
          <Path d="M12 3a9 9 0 1 1 -7.795 13.498l7.795 -4.498z" fill="currentColor" />
          <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        </G>
      </Svg>
    );
  }


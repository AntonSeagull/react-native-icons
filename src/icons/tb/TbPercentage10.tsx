

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPercentage10 = (props: IconProps) => {

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
          <Path d="M12 3c1.92 0 3.7 .601 5.16 1.626l-5.16 7.374z" fill="currentColor" />
          <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        </G>
      </Svg>
    );
  }


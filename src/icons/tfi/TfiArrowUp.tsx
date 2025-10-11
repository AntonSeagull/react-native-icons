

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowUp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M15.146 8.854l-6.146-6.147v13.293h-1v-13.293l-6.146 6.147-0.708-0.708 7.354-7.353 7.354 7.354-0.708 0.707z" fill="#000000" />
        </G>
      </Svg>
    );
  }


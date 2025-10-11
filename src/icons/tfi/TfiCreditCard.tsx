

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiCreditCard = (props: IconProps) => {

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
          <Path d="M15.5 2h-14c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM16 13.5c0 0.275-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.225-0.5-0.5v-5.5h15v5.5zM1 5v-1.5c0-0.275 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.225 0.5 0.5v1.5h-15z" fill="#000000" />
        </G>
      </Svg>
    );
  }


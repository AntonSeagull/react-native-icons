

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSwiss = (props: IconProps) => {

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
          <Path d="M3 3V21H21V3H3ZM14 7H10V10H7V14H10V17H14V14H17V10H14V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }


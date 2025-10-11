

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniArrowUturnUp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M17.768 7.793a.75.75 0 0 1-1.06-.025L12.75 3.622v10.003a5.375 5.375 0 0 1-10.75 0V10.75a.75.75 0 0 1 1.5 0v2.875a3.875 3.875 0 0 0 7.75 0V3.622L7.293 7.768a.75.75 0 0 1-1.086-1.036l5.25-5.5a.75.75 0 0 1 1.085 0l5.25 5.5a.75.75 0 0 1-.024 1.06Z" />
        </G>
      </Svg>
    );
  }


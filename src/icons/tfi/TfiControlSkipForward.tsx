

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlSkipForward = (props: IconProps) => {

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
          <Path d="M3 14.571l7.281-6.097-7.281-6.038v12.135zM4 4.564l4.719 3.914-4.719 3.951v-7.865zM14 2v13h-1v-13h1z" fill="#000000" />
        </G>
      </Svg>
    );
  }


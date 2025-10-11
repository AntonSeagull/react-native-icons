

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdNearMe = (props: IconProps) => {

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
          <Path d="M0 0h24v24H0V0z" fill="none" />
          <Path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
        </G>
      </Svg>
    );
  }


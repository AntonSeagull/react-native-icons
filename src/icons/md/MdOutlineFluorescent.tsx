

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineFluorescent = (props: IconProps) => {

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
          <Path d="M0,0h24v24H0V0z" fill="none" />
          <Path d="M5,15h14V9H5V15z M7,11h10v2H7V11z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdCallMade = (props: IconProps) => {

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
          <Path d="M0 0h24v24H0z" fill="none" />
          <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
        </G>
      </Svg>
    );
  }


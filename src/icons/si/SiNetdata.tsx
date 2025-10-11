

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiNetdata = (props: IconProps) => {

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
          <Path d="M14.764 21.827H9.922L0 2.173h14.084c5.476.01 9.913 4.565 9.916 10.183-.009 5.235-4.14 9.47-9.238 9.47z" />
        </G>
      </Svg>
    );
  }


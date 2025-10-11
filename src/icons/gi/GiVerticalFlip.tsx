

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiVerticalFlip = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M233.373 387.02H165.49L256 477.53l90.51-90.51h-67.883V124.98h67.883L256 34.47l-90.51 90.51h67.883v262.04z" fill="#000" />
        </G>
      </Svg>
    );
  }


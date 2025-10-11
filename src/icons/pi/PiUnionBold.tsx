

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUnionBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M212,64v80a84,84,0,0,1-168,0V64a12,12,0,0,1,24,0v80a60,60,0,0,0,120,0V64a12,12,0,0,1,24,0Z" />
        </G>
      </Svg>
    );
  }


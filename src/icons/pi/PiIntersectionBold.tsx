

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiIntersectionBold = (props: IconProps) => {

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
          <Path d="M212,120v80a12,12,0,0,1-24,0V120a60,60,0,0,0-120,0v80a12,12,0,0,1-24,0V120a84,84,0,0,1,168,0Z" />
        </G>
      </Svg>
    );
  }


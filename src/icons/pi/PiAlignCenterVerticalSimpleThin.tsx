

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignCenterVerticalSimpleThin = (props: IconProps) => {

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
          <Path d="M208,124H172V48a12,12,0,0,0-12-12H96A12,12,0,0,0,84,48v76H48a4,4,0,0,0,0,8H84v76a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V132h36a4,4,0,0,0,0-8Zm-44,84a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }


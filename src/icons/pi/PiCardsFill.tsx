

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCardsFill = (props: IconProps) => {

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
          <Path d="M200,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V88A16,16,0,0,1,40,72H184A16,16,0,0,1,200,88Zm16-48H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z" />
        </G>
      </Svg>
    );
  }


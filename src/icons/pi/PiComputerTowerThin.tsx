

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiComputerTowerThin = (props: IconProps) => {

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
          <Path d="M164,72a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,72Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-60V216a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V40A12,12,0,0,1,64,28H192A12,12,0,0,1,204,40Zm-8,0a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4ZM128,172a8,8,0,1,0,8,8A8,8,0,0,0,128,172Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUniteFill = (props: IconProps) => {

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
          <Path d="M240,164a76,76,0,0,1-151.9,3.9,76,76,0,1,1,79.8-79.8A76.1,76.1,0,0,1,240,164Z" />
        </G>
      </Svg>
    );
  }


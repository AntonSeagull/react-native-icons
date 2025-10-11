

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMapPinSimpleLineFill = (props: IconProps) => {

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
          <Path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h80V135.42a56,56,0,1,1,16,0V208h80A8,8,0,0,1,224,216Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMapPinSimpleLineDuotone = (props: IconProps) => {

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
          <Path d="M176,80a48,48,0,1,1-48-48A48,48,0,0,1,176,80Z" />
          <Path d="M216,208H136V135.42a56,56,0,1,0-16,0V208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM88,80a40,40,0,1,1,40,40A40,40,0,0,1,88,80Z" />
        </G>
      </Svg>
    );
  }


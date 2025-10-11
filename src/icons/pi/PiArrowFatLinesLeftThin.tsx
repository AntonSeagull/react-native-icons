

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatLinesLeftThin = (props: IconProps) => {

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
          <Path d="M152,76H124V32a4,4,0,0,0-6.83-2.83l-96,96a4,4,0,0,0,0,5.66l96,96A4,4,0,0,0,124,224V180h28a4,4,0,0,0,4-4V80A4,4,0,0,0,152,76Zm-4,96H120a4,4,0,0,0-4,4v38.34L29.66,128,116,41.66V80a4,4,0,0,0,4,4h28Zm72-92v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Zm-32,0v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z" />
        </G>
      </Svg>
    );
  }


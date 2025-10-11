

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatDownThin = (props: IconProps) => {

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
          <Path d="M227.7,134.47A4,4,0,0,0,224,132H180V48a12,12,0,0,0-12-12H88A12,12,0,0,0,76,48v84H32a4,4,0,0,0-2.83,6.83l96,96a4,4,0,0,0,5.66,0l96-96A4,4,0,0,0,227.7,134.47ZM128,226.34,41.66,140H80a4,4,0,0,0,4-4V48a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4v88a4,4,0,0,0,4,4h38.34Z" />
        </G>
      </Svg>
    );
  }


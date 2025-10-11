

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowRightDownThin = (props: IconProps) => {

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
          <Path d="M226.83,162.83l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,1,1,5.66-5.66L172,198.34V68H32a4,4,0,0,1,0-8H176a4,4,0,0,1,4,4V198.34l41.17-41.17a4,4,0,0,1,5.66,5.66Z" />
        </G>
      </Svg>
    );
  }


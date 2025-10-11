

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHashStraightThin = (props: IconProps) => {

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
          <Path d="M216,156H164V100h52a4,4,0,0,0,0-8H164V40a4,4,0,0,0-8,0V92H100V40a4,4,0,0,0-8,0V92H40a4,4,0,0,0,0,8H92v56H40a4,4,0,0,0,0,8H92v52a4,4,0,0,0,8,0V164h56v52a4,4,0,0,0,8,0V164h52a4,4,0,0,0,0-8Zm-116,0V100h56v56Z" />
        </G>
      </Svg>
    );
  }


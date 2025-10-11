

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrScorecard = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9,18 L9,12 M12,18 L12,13 M15,18 L15,10 M17,3 L21,3 L21,23 L3,23 L3,3 L7,3 M7,1 L17,1 L17,5 L7,5 L7,1 Z" fill="none" />
        </G>
      </Svg>
    );
  }


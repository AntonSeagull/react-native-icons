

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrGrid = (props: IconProps) => {

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
          <Path d="M8,1 L8,23 M16,1 L16,23 M1,8 L23,8 M1,16 L23,16 M1,1 L23,1 L23,23 L1,23 L1,1 Z" fill="none" />
        </G>
      </Svg>
    );
  }


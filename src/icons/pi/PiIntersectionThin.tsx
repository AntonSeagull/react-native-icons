

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiIntersectionThin = (props: IconProps) => {

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
          <Path d="M204,120v80a4,4,0,0,1-8,0V120a68,68,0,0,0-136,0v80a4,4,0,0,1-8,0V120a76,76,0,0,1,152,0Z" />
        </G>
      </Svg>
    );
  }


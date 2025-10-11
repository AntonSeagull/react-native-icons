

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiIntersectionLight = (props: IconProps) => {

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
          <Path d="M206,120v80a6,6,0,0,1-12,0V120a66,66,0,0,0-132,0v80a6,6,0,0,1-12,0V120a78,78,0,0,1,156,0Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxTriangleRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }


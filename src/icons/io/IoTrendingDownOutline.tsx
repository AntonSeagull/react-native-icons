

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTrendingDownOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M48,144,169.37,265.37a32,32,0,0,0,45.26,0l50.74-50.74a32,32,0,0,1,45.26,0L448,352" />
        </G>
      </Svg>
    );
  }


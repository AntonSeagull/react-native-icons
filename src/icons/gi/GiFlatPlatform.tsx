

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiFlatPlatform = (props: IconProps) => {

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
          <Path d="M256.5 87.9L39.7 213.5l216.9 125.7 216.6-125.7L256.5 87.9zM31 227.4v71l218 125.7v-71L31 227.4zm450 .2L265 353.1V424l216-125.5v-70.9z" fill="#000" />
        </G>
      </Svg>
    );
  }

